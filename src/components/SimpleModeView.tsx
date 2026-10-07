import React from 'react';
import { GlassTile } from './GlassTile';
import { 
  Volume2, 
  VolumeX, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowLeft, 
  Phone, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { AnalysisResult, Language } from '../types/analysis';
import { SpeechService } from '../services/speechService';
import { TRANSLATIONS } from '../data/translations';

interface SimpleModeViewProps {
  analysis: AnalysisResult;
  currentLanguage: Language;
  onExitSimpleMode: () => void;
  isSpeaking: boolean;
  onToggleSpeech: () => void;
}

export const SimpleModeView: React.FC<SimpleModeViewProps> = ({
  analysis,
  currentLanguage,
  onExitSimpleMode,
  isSpeaking,
  onToggleSpeech
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const simpleExplanation = analysis.vernacularExplanations[currentLanguage]?.simple || analysis.simpleExplanation;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      
      {/* Top Banner with Large Exit Button */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onExitSimpleMode}
          className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200 text-sm font-semibold shadow-xs transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit Simple Mode / ಸಾಮಾನ್ಯ ಮೋಡ್</span>
        </button>

        {/* Large Voice Listen CTA */}
        <button
          type="button"
          onClick={onToggleSpeech}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-base font-bold shadow-md transition-all cursor-pointer ${
            isSpeaking
              ? 'bg-amber-500 hover:bg-amber-600 text-white animate-pulse'
              : 'bg-[#0284C7] hover:bg-[#0369A1] text-white'
          }`}
        >
          {isSpeaking ? (
            <>
              <VolumeX className="w-5 h-5" />
              <span>{t.stopAudio || 'Stop Voice'}</span>
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5" />
              <span>{t.listenVoice || 'Listen to this warning (Voice)'}</span>
            </>
          )}
        </button>
      </div>

      {/* Primary High-Visibility Alert Card with Large Typography */}
      <GlassTile className="p-8 sm:p-12 text-center border-2 border-rose-300 bg-rose-50/70 shadow-lg space-y-6 rounded-3xl">
        
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-rose-100 text-rose-600 flex items-center justify-center border border-rose-200 shadow-sm">
          <ShieldAlert className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        <div className="space-y-3">
          <span className="text-sm font-mono uppercase tracking-widest text-rose-700 font-bold bg-white px-4 py-1.5 rounded-full border border-rose-200 inline-block">
            {t.simpleStopBeforeYouPay || 'STOP BEFORE YOU PAY'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-rose-950 tracking-tight leading-tight">
            {t.simpleStopBeforeYouPay || 'STOP BEFORE YOU PAY'}
          </h1>
        </div>

        {/* Big Simple Statements */}
        <div className="max-w-2xl mx-auto space-y-4 pt-2 text-left">
          
          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-rose-200 flex items-center gap-4 shadow-xs">
            <span className="w-3 h-3 rounded-full bg-rose-600 shrink-0" />
            <p className="text-base sm:text-lg font-bold text-[#0F172A]">
              {t.simpleMessageAsksMoney || 'This message asks for money.'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-rose-200 flex items-center gap-4 shadow-xs">
            <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0" />
            <p className="text-base sm:text-lg font-bold text-[#0F172A]">
              {t.simpleCouldNotVerifySender || 'We could not verify who sent it.'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-sky-200 flex items-center gap-4 shadow-xs">
            <span className="w-3 h-3 rounded-full bg-[#0284C7] shrink-0" />
            <p className="text-base sm:text-lg font-bold text-[#0F172A]">
              {t.simpleCheckOfficialSite || 'Check the organization using its official website.'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-purple-200 flex items-center gap-4 shadow-xs">
            <span className="w-3 h-3 rounded-full bg-purple-600 shrink-0" />
            <p className="text-base sm:text-lg font-bold text-[#0F172A]">
              {t.simpleDoNotShareOtpPin || 'Do not share OTP, PIN or password.'}
            </p>
          </div>

        </div>

        {/* Vernacular Natural Simple Explanation */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 text-left max-w-2xl mx-auto shadow-xs">
          <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-bold block mb-2">
            Plain Language Guidance:
          </span>
          <p className="text-base sm:text-lg text-[#1E293B] leading-relaxed font-medium">
            {simpleExplanation}
          </p>
        </div>

        {/* Immediate Helpline Action */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:1930"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base flex items-center justify-center gap-3 shadow-md transition-all cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            <span>National Cyber Helpline 1930</span>
          </a>

          <button
            type="button"
            onClick={onExitSimpleMode}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-300 font-semibold text-base transition-all cursor-pointer"
          >
            View Full Detailed Forensic Audit →
          </button>
        </div>

      </GlassTile>

    </div>
  );
};
