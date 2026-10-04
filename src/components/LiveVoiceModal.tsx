import React, { useState, useEffect, useRef } from 'react';
import { GlassTile } from './GlassTile';
import { Mic, MicOff, X, Sparkles, Volume2, Radio, AlertCircle } from 'lucide-react';
import { Language } from '../types/analysis';

interface LiveVoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
}

export const LiveVoiceModal: React.FC<LiveVoiceModalProps> = ({
  isOpen,
  onClose,
  currentLanguage
}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('Connecting to Live Voice API...');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const wsRef = useRef<WebSocket | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const playbackContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const nextStartTimeRef = useRef<number>(0);

  // Initialize and connect WebSocket when modal opens
  useEffect(() => {
    if (!isOpen) {
      cleanup();
      return;
    }

    startLiveSession();

    return () => {
      cleanup();
    };
  }, [isOpen]);

  const cleanup = () => {
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
    if (playbackContextRef.current) {
      playbackContextRef.current.close().catch(() => {});
      playbackContextRef.current = null;
    }
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
    setIsConnected(false);
    setIsTalking(false);
    nextStartTimeRef.current = 0;
  };

  const startLiveSession = async () => {
    setErrorMessage(null);
    setStatusMessage('Connecting to gemini-3.8-live...');

    try {
      // 1. Setup WebSocket connection to server
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.host}/api/live-ws`;
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      // 2. Playback AudioContext for 24kHz model output
      const PlaybackCtx = window.AudioContext || (window as any).webkitAudioContext;
      const playbackCtx = new PlaybackCtx({ sampleRate: 24000 });
      playbackContextRef.current = playbackCtx;
      nextStartTimeRef.current = playbackCtx.currentTime;

      ws.onopen = async () => {
        setIsConnected(true);
        setStatusMessage('Connected. Initializing microphone...');
        await startMicStream(ws);
      };

      ws.onmessage = async (event) => {
        try {
          const data = JSON.parse(event.data);

          if (data.type === 'connected') {
            setStatusMessage('Live assistant ready. Speak naturally.');
          } else if (data.type === 'audio' && data.audio) {
            setIsTalking(true);
            playPcmChunk(data.audio);
          } else if (data.type === 'turnComplete') {
            setIsTalking(false);
          } else if (data.type === 'interrupted') {
            // User interrupted model speaking, reset playback schedule
            if (playbackContextRef.current) {
              nextStartTimeRef.current = playbackContextRef.current.currentTime;
            }
            setIsTalking(false);
          } else if (data.type === 'error') {
            setErrorMessage(data.message || data.error || 'Live API error');
          }
        } catch (err) {
          console.error('Error handling WebSocket message:', err);
        }
      };

      ws.onerror = (err) => {
        console.error('WebSocket error:', err);
        setErrorMessage('Failed to connect to Live Voice service. Verify GEMINI_API_KEY.');
      };

      ws.onclose = () => {
        setIsConnected(false);
        setIsTalking(false);
        setStatusMessage('Session closed.');
      };
    } catch (err: any) {
      console.error('Live session init error:', err);
      setErrorMessage(err?.message || 'Could not start live voice session.');
    }
  };

  // Convert microphone stream into 16kHz PCM chunks
  const startMicStream = async (ws: WebSocket) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: 16000,
          echoCancellation: true,
          noiseSuppression: true
        }
      });
      streamRef.current = stream;

      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioCtx({ sampleRate: 16000 });
      audioContextRef.current = audioCtx;

      const source = audioCtx.createMediaStreamSource(stream);
      // Buffer size 2048 at 16kHz is ~128ms chunks
      const processor = audioCtx.createScriptProcessor(2048, 1, 1);
      processorRef.current = processor;

      processor.onaudioprocess = (e) => {
        if (ws.readyState !== WebSocket.OPEN) return;
        if (isMicMuted) return;

        const inputData = e.inputBuffer.getChannelData(0);
        // Convert Float32Array to 16-bit PCM (little-endian)
        const pcm16 = new Int16Array(inputData.length);
        for (let i = 0; i < inputData.length; i++) {
          const s = Math.max(-1, Math.min(1, inputData[i]));
          pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
        }

        // Convert to base64
        const bytes = new Uint8Array(pcm16.buffer);
        let binary = '';
        for (let i = 0; i < bytes.length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        const base64Audio = btoa(binary);

        ws.send(JSON.stringify({
          type: 'audio',
          audio: base64Audio
        }));
      };

      source.connect(processor);
      processor.connect(audioCtx.destination);
      setStatusMessage('Listening... Ask any question about an investment or message.');
    } catch (micErr: any) {
      console.error('Microphone access denied:', micErr);
      setErrorMessage('Microphone access was denied. Please allow microphone permissions.');
    }
  };

  // Play incoming 24kHz raw PCM from gemini-3.8-live
  const playPcmChunk = (base64Audio: string) => {
    const ctx = playbackContextRef.current;
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    try {
      const binary = atob(base64Audio);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      const int16 = new Int16Array(bytes.buffer);

      // Convert Int16 to Float32
      const float32 = new Float32Array(int16.length);
      for (let i = 0; i < int16.length; i++) {
        float32[i] = int16[i] / 32768.0;
      }

      const audioBuffer = ctx.createBuffer(1, float32.length, 24000);
      audioBuffer.getChannelData(0).set(float32);

      const sourceNode = ctx.createBufferSource();
      sourceNode.buffer = audioBuffer;
      sourceNode.connect(ctx.destination);

      const currentTime = ctx.currentTime;
      if (nextStartTimeRef.current < currentTime) {
        nextStartTimeRef.current = currentTime;
      }

      sourceNode.start(nextStartTimeRef.current);
      nextStartTimeRef.current += audioBuffer.duration;
    } catch (err) {
      console.error('Audio chunk playback error:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md">
      <GlassTile variant="elevated" glow className="max-w-lg w-full p-8 space-y-7 shadow-2xl relative text-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-[#475569] hover:text-[#0F172A] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Live Status Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono text-[#0284C7] font-semibold">
            <Radio className={`w-3.5 h-3.5 ${isConnected ? 'text-emerald-500 animate-pulse' : 'text-amber-500'}`} />
            <span>MODEL: GEMINI-3.8-LIVE (REAL-TIME)</span>
          </div>

          <h3 className="text-2xl font-light text-[#0F172A] tracking-tight">
            PARAKH Live Voice Consultation
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] font-light max-w-sm mx-auto leading-relaxed">
            Have a continuous, real-time voice conversation. Ask about stock tips, check suspicious calls, or get instant scam guidance.
          </p>
        </div>

        {/* Animated Visualizer Orb */}
        <div className="relative py-8 flex items-center justify-center">
          <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 ${
            isTalking
              ? 'bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 shadow-[0_0_60px_rgba(2,132,199,0.6)] scale-110'
              : isConnected && !isMicMuted
              ? 'bg-gradient-to-r from-sky-300 to-blue-400 shadow-[0_0_35px_rgba(14,165,233,0.35)] animate-pulse'
              : 'bg-slate-200 shadow-inner'
          }`}>
            <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
              {isTalking ? (
                <Volume2 className="w-8 h-8 text-[#0284C7] animate-bounce" />
              ) : (
                <Mic className={`w-8 h-8 ${isMicMuted ? 'text-slate-400' : 'text-[#0284C7]'}`} />
              )}
            </div>
          </div>
        </div>

        {/* Real-time status */}
        <div className="space-y-1">
          <p className="text-xs sm:text-sm font-medium text-[#0F172A]">
            {statusMessage}
          </p>
          <p className="text-[11px] text-[#64748B] font-mono">
            {isTalking ? 'PARAKH is speaking...' : isMicMuted ? 'Microphone muted' : 'Listening for your voice...'}
          </p>
        </div>

        {errorMessage && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2 text-xs text-rose-900 text-left">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Controls */}
        <div className="pt-2 flex items-center justify-center gap-3">
          <button
            onClick={() => setIsMicMuted(prev => !prev)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-semibold flex items-center gap-2 border transition-all cursor-pointer shadow-sm ${
              isMicMuted
                ? 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
                : 'bg-white/80 hover:bg-white text-[#0F172A] border-white'
            }`}
          >
            {isMicMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4 text-[#0284C7]" />}
            <span>{isMicMuted ? 'Unmute Mic' : 'Mute Mic'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-2xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:shadow-md transition-all cursor-pointer shadow-sm"
          >
            End Conversation
          </button>
        </div>

      </GlassTile>
    </div>
  );
};
