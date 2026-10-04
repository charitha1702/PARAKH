import express from 'express';
import http from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI, Modality } from '@google/genai';

dotenv.config();

const app = express();
const server = http.createServer(app);
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '25mb' }));

// Initialize GoogleGenAI
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasGeminiKey: !!process.env.GEMINI_API_KEY,
    service: 'PARAKH Financial Content Verification & AI Suite'
  });
});

// ============================================================================
// 1. Audio Transcription Endpoint (using gemini-3.5-transcribe)
// ============================================================================
app.post('/api/transcribe', async (req, res) => {
  const { audioBase64, mimeType = 'audio/webm', language = 'en' } = req.body;

  if (!audioBase64) {
    return res.status(400).json({ error: 'Audio data is required' });
  }

  if (!ai || !process.env.GEMINI_API_KEY) {
    return res.json({
      useFallback: true,
      text: "Audio transcription requires a configured Gemini API key.",
      reason: 'No GEMINI_API_KEY configured'
    });
  }

  try {
    const audioPart = {
      inlineData: {
        mimeType: mimeType.split(';')[0] || 'audio/webm',
        data: audioBase64
      }
    };

    const targetLangNotice = language === 'kn' ? 'Kannada' : language === 'hi' ? 'Hindi' : language === 'te' ? 'Telugu' : 'English or Indian code-mixed';

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-transcribe',
      contents: {
        parts: [
          audioPart,
          {
            text: `Transcribe this audio recording verbatim in its native spoken language (${targetLangNotice}, Hinglish, Kanglish, etc.). Return only the transcribed text without preambles.`
          }
        ]
      }
    });

    const transcribedText = response.text?.trim() || '';

    return res.json({
      success: true,
      text: transcribedText,
      model: 'gemini-3.5-transcribe'
    });
  } catch (error: any) {
    console.error('Audio transcription error with gemini-3.5-transcribe:', error);
    return res.status(500).json({
      error: error?.message || 'Transcription failed',
      useFallback: true
    });
  }
});

// ============================================================================
// 2. Google Search Grounding Endpoint (using gemini-3.5-flash with googleSearch tool)
// ============================================================================
app.post('/api/search-grounding', async (req, res) => {
  const { query, language = 'en' } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  if (!ai || !process.env.GEMINI_API_KEY) {
    return res.json({
      useFallback: true,
      text: "Search Grounding requires a configured Gemini API key.",
      sources: []
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: `Perform up-to-date statutory and public web search investigation for the following financial claim, advisory firm, scheme, or URL in India:\n\n"${query}"\n\nCross-reference recent SEBI press orders, RBI warnings, consumer complaints, and official entity status. Respond with clear, objective findings and cite sources.`,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });

    const text = response.text || '';
    
    // Extract live web search grounding sources
    const rawChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = rawChunks
      .filter((chunk: any) => chunk.web && chunk.web.uri)
      .map((chunk: any) => ({
        uri: chunk.web.uri,
        title: chunk.web.title || chunk.web.uri
      }));

    return res.json({
      success: true,
      text,
      sources,
      model: 'gemini-3.5-flash'
    });
  } catch (error: any) {
    console.error('Search grounding error with gemini-3.5-flash:', error);
    return res.status(500).json({
      error: error?.message || 'Search grounding failed',
      sources: []
    });
  }
});

// ============================================================================
// 3. Multi-turn Chatbot Endpoint (using Gemini models & roles)
// ============================================================================
app.post('/api/chat', async (req, res) => {
  const { 
    messages, 
    model = 'gemini-3.5-flash', 
    role = 'investigator', 
    language = 'en',
    useSearchGrounding = false 
  } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Valid messages array is required' });
  }

  if (!ai || !process.env.GEMINI_API_KEY) {
    return res.json({
      useFallback: true,
      reply: "PARAKH AI Chat requires a configured Gemini API key in Settings > Secrets.",
      sources: []
    });
  }

  // Model selection rules:
  // - gemini-3.1-pro-preview: complex statutory & deep forensic tasks
  // - gemini-3.5-flash: general investigative tasks & search grounding
  // - gemini-3.1-flash-lite: fast screening tasks
  const allowedModels = ['gemini-3.5-flash', 'gemini-3.1-flash-lite', 'gemini-3.1-pro-preview'];
  const targetModel = allowedModels.includes(model) ? model : 'gemini-3.5-flash';

  // System instructions for specific chatbot roles
  const roleSystemInstructions: Record<string, string> = {
    investigator: `You are the PARAKH Senior Cyber & Financial Fraud Investigator.
Your mission: Help Indian citizens investigate suspicious messages, telegram groups, WhatsApp stock tips, APK download links, and unverified investment schemes.
Tone: Calm, analytical, objective, and protective. Never provide investment advice.
Always evaluate claims against Indian statutory realities:
- SEBI strictly bars assured/guaranteed returns (SEBI Investment Advisers & Research Analysts Regulations)
- RBI mandates funds flow through segregated client clearing accounts, never personal UPI VPAs
- ASBA is mandatory for legitimate IPOs.
Always respond in the user's preferred language (${language}).`,

    statutory: `You are the PARAKH Statutory & Regulatory Specialist.
Your mission: Provide rigorous regulatory analysis grounded in SEBI circulars, RBI directives, MCA corporate filings, and Indian Penal Code / IT Act cyber statutes.
Tone: Legalistic, precise, authoritative yet accessible.
Explain exactly why private investment solicitations violate Indian securities laws.
Always respond in the user's preferred language (${language}).`,

    screener: `You are the PARAKH Fast Scam Screener.
Your mission: Provide instant, concise, 3-bullet-point triage of any financial message in under 5 seconds.
Highlight:
1. Primary Risk Signal (Urgency, Guaranteed Return, Mule UPI)
2. Regulatory Violation
3. Safe Immediate Action (e.g., Do not pay; verify at sebi.gov.in)
Keep responses brief and punchy.
Always respond in the user's preferred language (${language}).`
  };

  const systemInstruction = roleSystemInstructions[role] || roleSystemInstructions.investigator;

  try {
    // Format conversation history for Gemini API
    const formattedContents = messages.map((m: any) => ({
      role: m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.text }]
    }));

    const config: any = {
      systemInstruction,
      temperature: targetModel === 'gemini-3.1-pro-preview' ? 0.2 : 0.4
    };

    // Add search grounding tool if requested and model supports it
    if (useSearchGrounding && targetModel === 'gemini-3.5-flash') {
      config.tools = [{ googleSearch: {} }];
    }

    const response = await ai.models.generateContent({
      model: targetModel,
      contents: formattedContents,
      config
    });

    const reply = response.text || '';
    
    // Extract grounding sources if search was active
    const rawChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = rawChunks
      .filter((chunk: any) => chunk.web && chunk.web.uri)
      .map((chunk: any) => ({
        uri: chunk.web.uri,
        title: chunk.web.title || chunk.web.uri
      }));

    return res.json({
      success: true,
      reply,
      sources,
      modelUsed: targetModel
    });
  } catch (error: any) {
    console.error('Chat generation error:', error);
    return res.status(500).json({
      error: error?.message || 'Chat processing failed',
      reply: 'An error occurred while communicating with the AI model. Please try again.'
    });
  }
});

// ============================================================================
// 4. Primary Content Verification Endpoint (using gemini-3.8-flash)
// ============================================================================
app.post('/api/analyze', async (req, res) => {
  const { content, inputType, language } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }

  if (!ai || !process.env.GEMINI_API_KEY) {
    return res.json({
      useFallback: true,
      reason: 'No GEMINI_API_KEY configured; using offline verification engine.'
    });
  }

  try {
    const languageNames: Record<string, string> = {
      en: 'English',
      hi: 'Hindi (हिन्दी)',
      kn: 'Kannada (ಕನ್ನಡ)',
      te: 'Telugu (తెలుగు)'
    };
    const targetLangName = languageNames[language] || 'English';

    const prompt = `You are PARAKH, an AI-powered financial content verification platform built for Bharat.
Tagline: "Don’t just trust. Verify."

The user has selected interface language: ${targetLangName} (${language}).
CRITICAL REQUIREMENT: The output MUST be in ${targetLangName}. All user-facing text (statusHeading, signal names, explanations, whatWeKnow, whatWeCouldNotVerify) must be written natively in ${targetLangName}. Do NOT default to English unless the selected language is 'en'.

Analyze the following submitted financial message/link/screenshot text:
---
${content}
---

Your task:
1. Identify all high-risk behavioral indicators (e.g. Guaranteed-return claims, Artificial urgency, Authority name-dropping like SEBI/RBI, Private payment/UPI requests, Unregistered advice, Trojan APKs).
2. DO NOT claim 100% certainty or say "100% Scam". Use responsible phrasing: "High-risk indicators detected" or "Elevated risk signals detected" (in ${targetLangName}).
3. Evaluate against statutory Indian regulations:
   - SEBI prohibits assured returns (SEBI Investment Advisers & Research Analysts Regulations)
   - RBI prohibits collection into private mule accounts
   - ASBA is mandatory for legitimate IPO allocations
4. All explanations must be natural and simple for native speakers of ${targetLangName}.
5. Provide what is known vs what cannot be verified.

Respond strictly in valid JSON with this schema:
{
  "statusHeading": "Status heading in ${targetLangName}",
  "riskLevel": "high" | "elevated" | "moderate",
  "signalsCount": 4,
  "signals": [
    {
      "id": "sig-1",
      "category": "guaranteed_returns" | "urgency_scarcity" | "authority_claim" | "payment_pressure" | "impersonation" | "malicious_link",
      "severity": "critical" | "high" | "medium",
      "title": "Short title in ${targetLangName}",
      "name": "Short name in ${targetLangName}",
      "explanation": "Detailed explanation in ${targetLangName}",
      "simpleExplanation": "Simple explanation in ${targetLangName} for elderly or first-time investor",
      "excerpt": "Exact words from input"
    }
  ],
  "overallExplanation": "Summary in ${targetLangName}",
  "simpleExplanation": "Simple language explanation in ${targetLangName}",
  "vernacularExplanations": {
    "en": { "summary": "...", "simple": "...", "audioScript": "..." },
    "hi": { "summary": "...", "simple": "...", "audioScript": "..." },
    "kn": { "summary": "...", "simple": "...", "audioScript": "..." },
    "te": { "summary": "...", "simple": "...", "audioScript": "..." }
  },
  "whatWeKnow": ["Fact 1 in ${targetLangName}", "Fact 2 in ${targetLangName}"],
  "whatWeCouldNotVerify": ["Unknown 1 in ${targetLangName}", "Unknown 2 in ${targetLangName}"],
  "behavioralSignals": {
    "urgency": 85,
    "guaranteedReturns": 95,
    "authorityClaim": 80,
    "paymentPressure": 90,
    "fearFomo": 60
  }
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.2
      }
    });

    const text = response.text;
    if (!text) {
      return res.json({ useFallback: true });
    }

    const parsed = JSON.parse(text);
    return res.json({
      useFallback: false,
      data: parsed
    });
  } catch (error: any) {
    console.error('Gemini API analysis error, using fallback:', error);
    return res.json({
      useFallback: true,
      error: error?.message || 'Gemini processing failed, using fallback engine'
    });
  }
});

// ============================================================================
// 5. WebSocket Server for Live Voice Conversations (using gemini-3.8-live)
// ============================================================================
const wss = new WebSocketServer({ noServer: true });

wss.on('connection', async (clientWs: WebSocket) => {
  console.log('Client connected to PARAKH Live Voice WebSocket');

  if (!ai || !process.env.GEMINI_API_KEY) {
    clientWs.send(JSON.stringify({
      type: 'error',
      message: 'GEMINI_API_KEY is not configured on the server.'
    }));
    clientWs.close();
    return;
  }

  let session: any = null;

  try {
    session = await ai.live.connect({
      model: 'gemini-3.8-live',
      config: {
        responseModalities: [Modality.AUDIO],
        systemInstruction: `You are PARAKH Live Voice Assistant.
You specialize in real-time, interactive voice consultations for Indian citizens verifying financial messages, stock advisory groups, and payment requests.
Speak warmly, clearly, and concisely. Keep answers conversational, helpful, and under 3-4 sentences per turn.
Support multilingual conversation in English, Hindi, Kannada, and Telugu as spoken by the user.`
      },
      callbacks: {
        onmessage: (message: any) => {
          const audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
          if (audio) {
            clientWs.send(JSON.stringify({ type: 'audio', audio }));
          }
          if (message.serverContent?.interrupted) {
            clientWs.send(JSON.stringify({ type: 'interrupted' }));
          }
          if (message.serverContent?.turnComplete) {
            clientWs.send(JSON.stringify({ type: 'turnComplete' }));
          }
        },
        onclose: () => {
          if (clientWs.readyState === WebSocket.OPEN) {
            clientWs.send(JSON.stringify({ type: 'close' }));
          }
        },
        onerror: (err: any) => {
          console.error('Live session error:', err);
          if (clientWs.readyState === WebSocket.OPEN) {
            clientWs.send(JSON.stringify({ type: 'error', error: err?.message || String(err) }));
          }
        }
      }
    });

    clientWs.send(JSON.stringify({ type: 'connected', model: 'gemini-3.8-live' }));
  } catch (err: any) {
    console.error('Failed to establish Live API session:', err);
    clientWs.send(JSON.stringify({
      type: 'error',
      message: err?.message || 'Failed to connect to Live API'
    }));
    clientWs.close();
    return;
  }

  clientWs.on('message', (data: any) => {
    try {
      const payload = JSON.parse(data.toString());

      if (session) {
        if (payload.type === 'audio' && payload.audio) {
          session.sendRealtimeInput({
            audio: {
              data: payload.audio,
              mimeType: 'audio/pcm;rate=16000'
            }
          });
        } else if (payload.type === 'text' && payload.text) {
          session.sendRealtimeInput({
            text: payload.text
          });
        }
      }
    } catch (parseErr) {
      console.error('WebSocket client message handling error:', parseErr);
    }
  });

  clientWs.on('close', () => {
    if (session) {
      try {
        session.close();
      } catch (closeErr) {
        // ignore
      }
    }
  });
});

// Handle WebSocket upgrade on /api/live-ws
server.on('upgrade', (request, socket, head) => {
  const { pathname } = new URL(request.url || '', `http://${request.headers.host}`);
  if (pathname === '/api/live-ws') {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  }
});

// Mount Vite middleware in development
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  }

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`PARAKH server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
