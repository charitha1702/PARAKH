import React from 'react';
import { GlassTile } from './GlassTile';
import { ShieldAlert, Volume2, VolumeX, ExternalLink, Sparkles } from 'lucide-react';
import { AnalysisResult, Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';

interface SafeStepsSectionProps {
  analysis: AnalysisResult;
  currentLanguage: Language;
  simpleMode: boolean;
  onToggleSimpleMode: () => void;
  onOpenOfficialSources: () => void;
  isSpeaking: boolean;
  onToggleSpeaking: () => void;
}

export const SafeStepsSection: React.FC<SafeStepsSectionProps> = ({
  analysis,
  currentLanguage,
  simpleMode,
  onToggleSimpleMode,
  onOpenOfficialSources,
  isSpeaking,
  onToggleSpeaking
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const steps = analysis.safeSteps && analysis.safeSteps.length > 0 ? analysis.safeSteps : [
    { step: 1, title: 'Pause before sending money.', description: 'Take a cooling-off period of at least 24 hours. Scammers rely on rushed decisions.', simpleText: 'Do not send money quickly.' },
    { step: 2, title: 'Verify the organization independently.', description: 'Never click links provided in the chat. Use independent browser search.', simpleText: 'Check the real company website yourself.' },
    { step: 3, title: 'Check official statutory registers.', description: 'Verify SEBI or RBI registration numbers directly on statutory public registers.', simpleText: 'Check if this advisor is registered with SEBI.' },
    { step: 4, title: 'Never share OTPs, PINs, or install remote APKs.', description: 'Legitimate institutions will never ask for your UPI MPIN, bank passwords, or request you to side-load APK utilities.', simpleText: 'Never tell your OTP or download unknown .apk files.' },
    { step: 5, title: 'Report suspicious activity immediately.', description: 'If you have transferred funds, immediately call the National Cyber Helpline 1930 or file a report at cybercrime.gov.in.', simpleText: 'If you paid, call 1930 right away.' }
  ];

  return (
    <GlassTile variant="blue" className="p-6 sm:p-8 space-y-6">
      
      {/* Title & Speech */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-800 uppercase tracking-wider font-semibold">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{t.safeStepsBadge}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-light text-[#0F172A]">
            {t.safeStepsTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
            {t.safeStepsSubtitle}
          </p>
        </div>

        {/* Listen Button */}
        <button
          onClick={onToggleSpeaking}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer ${
            isSpeaking
              ? 'bg-amber-100 text-amber-900 border border-amber-300'
              : 'bg-white/80 hover:bg-white text-[#0284C7] border border-sky-200'
          }`}
        >
          {isSpeaking ? <VolumeX className="w-4 h-4 text-amber-700" /> : <Volume2 className="w-4 h-4 text-[#0284C7]" />}
          <span>{isSpeaking ? t.stopVoice : t.listenVoice}</span>
        </button>
      </div>

      {/* 5 Protective Steps */}
      <div className="space-y-3">
        {steps.map((step) => (
          <div
            key={step.step}
            className="p-4 rounded-2xl bg-white/70 border border-white flex items-start gap-4 shadow-sm"
          >
            <div className="w-7 h-7 rounded-xl bg-sky-100 text-sky-900 font-mono font-semibold text-xs flex items-center justify-center shrink-0 border border-sky-200 mt-0.5">
              0{step.step}
            </div>

            <div className="space-y-0.5 flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-[#0F172A]">
                {step.title}
              </h4>
              <p className="text-xs text-[#475569] font-light leading-relaxed">
                {simpleMode ? step.simpleText : step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-wrap items-center gap-3">
        <button
          onClick={onOpenOfficialSources}
          className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:shadow-[0_12px_28px_rgba(14,165,233,0.35)] transition-all flex items-center gap-2 cursor-pointer shadow-md"
        >
          <span>{t.viewSourcesButton}</span>
          <ExternalLink className="w-4 h-4 text-white" />
        </button>

        <button
          onClick={onToggleSimpleMode}
          className={`px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-light border transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
            simpleMode
              ? 'bg-sky-100 text-sky-900 border-sky-300 font-semibold'
              : 'bg-white/70 text-[#0F172A] hover:bg-white border-white/90'
          }`}
        >
          <Sparkles className="w-4 h-4 text-sky-600" />
          <span>{simpleMode ? t.simpleModeActive : t.simpleMode}</span>
        </button>
      </div>

    </GlassTile>
  );
};
