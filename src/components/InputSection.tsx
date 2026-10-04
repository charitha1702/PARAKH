import React, { useState, useRef, useEffect } from 'react';
import { GlassTile } from './GlassTile';
import { 
  MessageSquare, 
  Image as ImageIcon, 
  Globe, 
  Mic, 
  MicOff, 
  UploadCloud, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  FileCheck2,
  Check
} from 'lucide-react';
import { InputType, Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';
import { PRESET_SAMPLES, LocalizedPresetSample } from '../data/presetSamples';
import { SpeechService } from '../services/speechService';

interface InputSectionProps {
  currentLanguage: Language;
  onAnalyze: (content: string, type: InputType) => void;
  isLoading: boolean;
}

export const InputSection: React.FC<InputSectionProps> = ({
  currentLanguage,
  onAnalyze,
  isLoading
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const [activeTab, setActiveTab] = useState<InputType>('message');
  const [textContent, setTextContent] = useState('');
  const [linkContent, setLinkContent] = useState('');
  const [selectedImageName, setSelectedImageName] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [activePresetId, setActivePresetId] = useState<string | null>(null);
  const [voiceError, setVoiceError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const speechSessionRef = useRef<{ stop: () => void } | null>(null);

  // 4 Floating Frosted Glass Tiles with localized text
  const tiles: Array<{ id: InputType; label: string; desc: string; icon: React.ComponentType<{ className?: string }> }> = [
    { id: 'message', label: t.tabMessage, desc: t.tabMessageDesc, icon: MessageSquare },
    { id: 'screenshot', label: t.tabScreenshot, desc: t.tabScreenshotDesc, icon: ImageIcon },
    { id: 'link', label: t.tabLink, desc: t.tabLinkDesc, icon: Globe },
    { id: 'voice', label: t.tabVoice, desc: t.tabVoiceDesc, icon: Mic }
  ];

  useEffect(() => {
    return () => {
      if (speechSessionRef.current) {
        speechSessionRef.current.stop();
        speechSessionRef.current = null;
      }
    };
  }, [activeTab]);

  const handleSelectPreset = (sample: LocalizedPresetSample) => {
    setActivePresetId(sample.id);
    setActiveTab(sample.type);

    if (sample.type === 'message') {
      setTextContent(sample.content);
    } else if (sample.type === 'link') {
      setLinkContent(sample.content);
    } else if (sample.type === 'screenshot') {
      setSelectedImageName((sample.localizedTitle[currentLanguage] || sample.title) + ' (Screenshot.jpg)');
      setTextContent(sample.content);
    }
  };

  const toggleVoiceRecording = () => {
    setVoiceError(null);
    if (isRecording) {
      if (speechSessionRef.current) {
        speechSessionRef.current.stop();
        speechSessionRef.current = null;
      }
      setIsRecording(false);
    } else {
      setIsRecording(true);
      const session = SpeechService.startListening(
        currentLanguage,
        (transcript) => {
          setVoiceTranscript(prev => (prev ? prev + ' ' : '') + transcript);
          setTextContent(prev => (prev ? prev + ' ' : '') + transcript);
        },
        (errorMsg) => {
          setVoiceError(errorMsg);
          setIsRecording(false);
        },
        () => {
          setIsRecording(false);
        }
      );

      if (session) {
        speechSessionRef.current = session;
      } else {
        setIsRecording(false);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImageName(file.name);
      const mockOcrText = `[Extracted from ${file.name}]: "Namaste sir, VIP Institutional desk. Guaranteed 45% weekly returns in BankNifty intraday tips. Registered under SEBI norms. Today only 5 slots left. Send ₹10,000 to UPI: traderraj@ybl and send screenshot for group invite."`;
      setTextContent(mockOcrText);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let contentToSubmit = '';

    if (activeTab === 'message') {
      contentToSubmit = textContent.trim();
    } else if (activeTab === 'link') {
      contentToSubmit = linkContent.trim();
    } else if (activeTab === 'screenshot') {
      contentToSubmit = textContent.trim() || `[Screenshot uploaded: ${selectedImageName || 'investment_chat.png'}]`;
    } else if (activeTab === 'voice') {
      contentToSubmit = voiceTranscript.trim() || textContent.trim();
    }

    if (!contentToSubmit) return;
    onAnalyze(contentToSubmit, activeTab);
  };

  const hasContent = 
    (activeTab === 'message' && textContent.trim().length > 0) ||
    (activeTab === 'link' && linkContent.trim().length > 0) ||
    (activeTab === 'screenshot' && (selectedImageName !== null || textContent.trim().length > 0)) ||
    (activeTab === 'voice' && (voiceTranscript.trim().length > 0 || textContent.trim().length > 0));

  return (
    <section id="verification-input" className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
      
      {/* Main heading and subheading */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-5xl font-light text-[#0F172A] tracking-tight leading-tight">
          {t.inputHeading}
        </h2>
        <p className="text-sm sm:text-base text-[#475569] font-light max-w-lg mx-auto leading-relaxed">
          {t.inputSubtitle}
        </p>
      </div>

      {/* Four Floating Glass Tiles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tiles.map(tile => {
          const Icon = tile.icon;
          const isActive = activeTab === tile.id;

          return (
            <GlassTile
              key={tile.id}
              interactive
              glow={isActive}
              variant={isActive ? 'elevated' : 'card'}
              onClick={() => {
                setActiveTab(tile.id);
                setVoiceError(null);
              }}
              className={`p-6 text-center flex flex-col items-center justify-center space-y-3 ${
                isActive
                  ? 'border-[#0284C7] bg-white/95 shadow-[0_22px_50px_-10px_rgba(2,132,199,0.35)] ring-1 ring-[#0284C7]/40'
                  : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                isActive
                  ? 'bg-sky-50 text-[#0284C7] shadow-sm border border-sky-200'
                  : 'bg-white/60 text-[#475569] border border-white'
              }`}>
                <Icon className="w-5 h-5" />
              </div>

              <div>
                <h3 className={`text-base font-semibold transition-colors ${
                  isActive ? 'text-[#0F172A]' : 'text-[#475569]'
                }`}>
                  {tile.label}
                </h3>
                <p className="text-xs text-[#475569] font-light mt-0.5 leading-snug">
                  {tile.desc}
                </p>
              </div>
            </GlassTile>
          );
        })}
      </div>

      {/* Large Frosted Glass Input Surface */}
      <GlassTile variant="surface" className="p-6 sm:p-8 space-y-6 shadow-[0_24px_55px_-12px_rgba(186,215,240,0.45)]">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Active Mode 1: Message */}
          {activeTab === 'message' && (
            <div className="space-y-2">
              <textarea
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                placeholder={t.messagePlaceholder}
                rows={5}
                className="w-full bg-white/75 text-[#0F172A] placeholder:text-[#475569]/50 rounded-2xl p-4 text-sm sm:text-base border border-white/90 focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]/30 focus:outline-none transition-all resize-y leading-relaxed font-light shadow-sm"
              />
              <div className="flex items-center justify-between text-xs text-[#475569] font-light px-1">
                <span>{t.messageLangHint}</span>
                <span className="font-mono">{textContent.length}</span>
              </div>
            </div>
          )}

          {/* Active Mode 2: Screenshot */}
          {activeTab === 'screenshot' && (
            <div className="space-y-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpeg, image/webp"
                onChange={handleFileChange}
                className="hidden"
              />
              
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-12 px-6 border-2 border-dashed border-[#475569]/20 hover:border-[#0284C7] rounded-2xl bg-white/50 hover:bg-white/80 transition-all cursor-pointer text-center space-y-3 group"
              >
                <div className="w-12 h-12 mx-auto rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7] group-hover:scale-105 transition-transform">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0F172A]">
                    {selectedImageName ? `${selectedImageName}` : t.uploadTitle}
                  </p>
                  <p className="text-xs text-[#475569] font-light mt-1">
                    {t.uploadSubtitle}
                  </p>
                </div>
              </div>

              {selectedImageName && (
                <div className="p-3.5 rounded-xl bg-sky-50/90 border border-sky-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-sky-950 font-light">
                    <FileCheck2 className="w-4 h-4 text-[#0284C7]" />
                    <span>{t.ocrReady}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedImageName(null);
                      setTextContent('');
                    }}
                    className="text-[#475569] hover:text-[#0F172A]"
                  >
                    {t.clearSelection}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Active Mode 3: Website / Link */}
          {activeTab === 'link' && (
            <div className="space-y-2">
              <div className="relative">
                <Globe className="w-5 h-5 text-[#475569] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={linkContent}
                  onChange={(e) => setLinkContent(e.target.value)}
                  placeholder={t.linkPlaceholder}
                  className="w-full bg-white/75 text-[#0F172A] placeholder:text-[#475569]/50 rounded-2xl py-3.5 pl-12 pr-4 text-sm border border-white/90 focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]/30 focus:outline-none transition-all font-mono font-light shadow-sm"
                />
              </div>
              <p className="text-xs text-[#475569] font-light px-1">
                {t.linkHint}
              </p>
            </div>
          )}

          {/* Active Mode 4: Voice */}
          {activeTab === 'voice' && (
            <div className="py-6 px-4 text-center space-y-4">
              <div className="relative inline-block">
                {isRecording && (
                  <div className="absolute -inset-3 rounded-full bg-rose-400/30 animate-ping pointer-events-none" />
                )}
                <button
                  type="button"
                  onClick={toggleVoiceRecording}
                  className={`w-18 h-18 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    isRecording
                      ? 'bg-rose-500 text-white shadow-[0_0_30px_rgba(244,63,94,0.5)] scale-105'
                      : 'bg-sky-50 hover:bg-sky-100 text-[#0284C7] border border-sky-200 shadow-sm'
                  }`}
                >
                  {isRecording ? <MicOff className="w-7 h-7" /> : <Mic className="w-7 h-7" />}
                </button>
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium text-[#0F172A]">
                  {isRecording ? t.voiceListening : t.voiceTapPrompt}
                </p>
                <p className="text-xs text-[#475569] font-light max-w-sm mx-auto">
                  {t.voiceLangNote}
                </p>
              </div>

              {voiceError && (
                <p className="text-xs text-rose-900 bg-rose-50 border border-rose-200 p-2 rounded-lg max-w-md mx-auto">
                  {voiceError}
                </p>
              )}

              {voiceTranscript && (
                <div className="p-4 rounded-xl bg-white/80 border border-white text-left text-xs sm:text-sm text-[#0F172A] max-w-lg mx-auto font-light shadow-sm">
                  <span className="text-[#475569] block mb-1 font-mono text-[11px]">{t.voiceTranscriptLabel}</span>
                  "{voiceTranscript}"
                </div>
              )}
            </div>
          )}

          {/* Quick preset Indian scam samples */}
          <div className="pt-2 border-t border-[#0F172A]/[0.06] space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs text-[#475569] font-light">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>{t.presetsLabel}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {PRESET_SAMPLES.map(sample => {
                const localizedTitle = sample.localizedTitle[currentLanguage] || sample.title;

                return (
                  <button
                    key={sample.id}
                    type="button"
                    onClick={() => handleSelectPreset(sample)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-light transition-all text-left flex items-center gap-1.5 cursor-pointer ${
                      activePresetId === sample.id
                        ? 'bg-sky-50 text-[#0284C7] border border-sky-300 shadow-sm font-semibold'
                        : 'bg-white/60 text-[#475569] hover:text-[#0F172A] hover:bg-white/90 border border-white/90'
                    }`}
                  >
                    <span>{localizedTitle}</span>
                    {activePresetId === sample.id && <Check className="w-3 h-3 text-[#0284C7]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action bar */}
          <div className="flex items-center justify-between pt-2">
            {(textContent || linkContent || selectedImageName || voiceTranscript) && (
              <button
                type="button"
                onClick={() => {
                  setTextContent('');
                  setLinkContent('');
                  setSelectedImageName(null);
                  setVoiceTranscript('');
                  setActivePresetId(null);
                }}
                className="flex items-center gap-1 text-xs text-[#475569] hover:text-[#0F172A] transition-colors py-2 px-1 font-light cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.clearButton}</span>
              </button>
            )}

            <div className="ml-auto">
              <button
                type="submit"
                disabled={!hasContent || isLoading}
                className="px-8 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#2563EB] hover:shadow-[0_12px_28px_rgba(2,132,199,0.35)] disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2 group cursor-pointer shadow-md"
              >
                <span>{isLoading ? t.analyzingLoading : t.analyzeButton}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </form>
      </GlassTile>

    </section>
  );
};
