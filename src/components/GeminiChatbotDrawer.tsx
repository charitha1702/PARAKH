import React, { useState, useRef, useEffect } from 'react';
import { GlassTile } from './GlassTile';
import { 
  MessageSquare, 
  Send, 
  X, 
  Sparkles, 
  Search, 
  ExternalLink, 
  User, 
  Bot, 
  RefreshCw, 
  ShieldCheck, 
  Zap, 
  Scale, 
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { Language } from '../types/analysis';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  sources?: Array<{ uri: string; title: string }>;
  modelUsed?: string;
}

interface GeminiChatbotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
}

export const GeminiChatbotDrawer: React.FC<GeminiChatbotDrawerProps> = ({
  isOpen,
  onClose,
  currentLanguage
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Namaste! I am your PARAKH Gemini Assistant. You can ask me to evaluate financial schemes, verify whether SEBI allows guaranteed returns, review WhatsApp stock advisory tips, or search live public registries.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modelUsed: 'gemini-3.5-flash'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<'gemini-3.5-flash' | 'gemini-3.1-flash-lite' | 'gemini-3.1-pro-preview'>('gemini-3.5-flash');
  const [selectedRole, setSelectedRole] = useState<'investigator' | 'statutory' | 'screener'>('investigator');
  const [useSearchGrounding, setUseSearchGrounding] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputText.trim();
    if (!textToSend || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!customPrompt) setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({ role: m.role, text: m.text })),
          model: selectedModel,
          role: selectedRole,
          language: currentLanguage,
          useSearchGrounding: useSearchGrounding && selectedModel === 'gemini-3.5-flash'
        })
      });

      if (response.ok) {
        const data = await response.json();
        const modelMsg: ChatMessage = {
          id: `model-${Date.now()}`,
          role: 'model',
          text: data.reply || 'No response returned from the model.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sources: data.sources || [],
          modelUsed: data.modelUsed || selectedModel
        };
        setMessages(prev => [...prev, modelMsg]);
      } else {
        throw new Error('Failed to get chat response');
      }
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        text: 'Sorry, I encountered an error communicating with Gemini. Please try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: selectedModel
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'model',
        text: "Chat cleared. What financial claim, advisory message, or broker link would you like to investigate today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelUsed: selectedModel
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-xl h-full bg-white/95 backdrop-blur-2xl border-l border-white shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-black/[0.06] bg-white/80 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#2563EB] text-white flex items-center justify-center shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#0F172A] leading-tight">
                  PARAKH Gemini Chatbot
                </h3>
                <span className="text-[11px] font-mono text-[#0284C7] font-medium">
                  Multi-turn conversational verification
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={clearChat}
                className="p-2 rounded-xl text-[#64748B] hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                title="Clear conversation"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Model and Role Selectors */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
            {/* Model Selector */}
            <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setSelectedModel('gemini-3.5-flash')}
                className={`px-2.5 py-1 rounded-lg transition-all text-[11px] font-medium cursor-pointer ${
                  selectedModel === 'gemini-3.5-flash'
                    ? 'bg-white text-[#0284C7] shadow-xs font-semibold'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
                title="gemini-3.5-flash: General tasks & Search Grounding"
              >
                3.5 Flash (General)
              </button>

              <button
                type="button"
                onClick={() => setSelectedModel('gemini-3.1-flash-lite')}
                className={`px-2.5 py-1 rounded-lg transition-all text-[11px] font-medium cursor-pointer ${
                  selectedModel === 'gemini-3.1-flash-lite'
                    ? 'bg-white text-[#0284C7] shadow-xs font-semibold'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
                title="gemini-3.1-flash-lite: Fast response tasks"
              >
                3.1 Lite (Fast)
              </button>

              <button
                type="button"
                onClick={() => setSelectedModel('gemini-3.1-pro-preview')}
                className={`px-2.5 py-1 rounded-lg transition-all text-[11px] font-medium cursor-pointer ${
                  selectedModel === 'gemini-3.1-pro-preview'
                    ? 'bg-white text-purple-700 shadow-xs font-semibold'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
                title="gemini-3.1-pro-preview: Deep complex statutory analysis"
              >
                3.1 Pro (Complex)
              </button>
            </div>

            {/* Google Search Grounding Toggle */}
            <button
              type="button"
              onClick={() => setUseSearchGrounding(prev => !prev)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-[11px] transition-all cursor-pointer ${
                useSearchGrounding && selectedModel === 'gemini-3.5-flash'
                  ? 'bg-sky-50 text-[#0284C7] border-sky-300 font-semibold shadow-xs'
                  : 'bg-white/80 text-[#64748B] border-slate-200'
              }`}
              title="Google Search Grounding via gemini-3.5-flash"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search Grounding</span>
              {useSearchGrounding && selectedModel === 'gemini-3.5-flash' && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              )}
            </button>
          </div>

          {/* Role pills */}
          <div className="flex items-center gap-1.5 pt-0.5">
            <span className="text-[10px] font-mono uppercase text-[#64748B]">Role:</span>
            {[
              { id: 'investigator', label: 'Investigator', icon: ShieldCheck },
              { id: 'statutory', label: 'SEBI/RBI Legal', icon: Scale },
              { id: 'screener', label: 'Fast Screener', icon: Zap }
            ].map(r => {
              const Icon = r.icon;
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedRole(r.id as any)}
                  className={`flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[11px] transition-all cursor-pointer ${
                    selectedRole === r.id
                      ? 'bg-[#0284C7] text-white font-semibold shadow-xs'
                      : 'bg-slate-100 text-[#475569] hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{r.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';

            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-7 h-7 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] space-y-1.5 ${isUser ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                      isUser
                        ? 'bg-gradient-to-r from-[#0284C7] to-[#2563EB] text-white rounded-tr-xs'
                        : 'bg-white border border-slate-200/70 text-[#0F172A] rounded-tl-xs'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>

                  {/* Grounding Sources (if available) */}
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="p-2.5 rounded-xl bg-sky-50/80 border border-sky-200 text-xs space-y-1">
                      <div className="flex items-center gap-1 text-[11px] font-mono text-[#0284C7] font-semibold">
                        <Search className="w-3 h-3" />
                        <span>Google Search Grounding Sources ({msg.sources.length}):</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {msg.sources.map((src, i) => (
                          <a
                            key={i}
                            href={src.uri}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] text-[#0284C7] hover:underline bg-white px-2 py-0.5 rounded-md border border-sky-100"
                          >
                            <span className="max-w-[180px] truncate">{src.title}</span>
                            <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 px-1 text-[10px] text-[#64748B] font-mono">
                    <span>{msg.timestamp}</span>
                    {msg.modelUsed && <span>• {msg.modelUsed}</span>}
                  </div>
                </div>

                {isUser && (
                  <div className="w-7 h-7 rounded-xl bg-slate-200 text-[#0F172A] flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0">
                <RefreshCw className="w-4 h-4 animate-spin" />
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs text-[#64748B] flex items-center gap-2 shadow-sm">
                <span>Analyzing with {selectedModel}...</span>
                {useSearchGrounding && selectedModel === 'gemini-3.5-flash' && (
                  <span className="text-[#0284C7] font-mono text-[10px]">(Google Search Grounding active)</span>
                )}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompts */}
        <div className="px-4 py-2 bg-slate-50/80 border-t border-black/[0.05] overflow-x-auto flex items-center gap-2">
          <span className="text-[10px] font-mono text-[#64748B] uppercase shrink-0">Try:</span>
          {[
            "Is guaranteed 40% monthly return legal?",
            "Check SEBI ASBA rule for IPOs",
            "Why is payment to a personal UPI risky?",
            "How does National Cyber Helpline 1930 work?"
          ].map((prompt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSendMessage(prompt)}
              className="text-[11px] bg-white border border-slate-200 hover:border-sky-300 text-[#0F172A] px-2.5 py-1 rounded-xl whitespace-nowrap transition-colors cursor-pointer shrink-0 shadow-2xs"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-4 border-t border-black/[0.06] bg-white flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask about any financial claim, WhatsApp tip, or regulator..."
            disabled={isLoading}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]/20 transition-all font-light"
          />

          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="w-10 h-10 rounded-2xl bg-gradient-to-r from-[#0284C7] to-[#2563EB] text-white flex items-center justify-center hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0 shadow-sm"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
