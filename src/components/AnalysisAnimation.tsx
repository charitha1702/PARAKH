import React, { useEffect, useState } from 'react';
import { GlassTile } from './GlassTile';
import { FileText, Cpu, Database, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';

interface AnalysisAnimationProps {
  currentLanguage: Language;
  onComplete: () => void;
}

export const AnalysisAnimation: React.FC<AnalysisAnimationProps> = ({
  currentLanguage,
  onComplete
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const [currentStep, setCurrentStep] = useState(0);

  const stages = [
    { label: t.stageReadingLabel, desc: t.stageReadingDesc, icon: FileText },
    { label: t.stagePatternsLabel, desc: t.stagePatternsDesc, icon: Cpu },
    { label: t.stageEvidenceLabel, desc: t.stageEvidenceDesc, icon: Database },
    { label: t.stageVerifyingLabel, desc: t.stageVerifyingDesc, icon: ShieldCheck },
    { label: t.stageExplanationLabel, desc: t.stageExplanationDesc, icon: Sparkles },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < stages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 600);
          return prev;
        }
      });
    }, 700);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 md:py-24 max-w-2xl mx-auto px-4 sm:px-6">
      <GlassTile variant="elevated" glow className="p-8 sm:p-12 text-center space-y-10 shadow-[0_28px_70px_-15px_rgba(186,215,240,0.6)]">
        
        {/* Soft glowing particle moving through glass */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-44 bg-gradient-to-r from-sky-300/35 via-cyan-200/30 to-blue-300/35 blur-[60px] pointer-events-none -z-0" />

        {/* Header */}
        <div className="space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono text-[#0284C7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-ping" />
            <span>{t.examInProgress}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-light text-[#0F172A] tracking-tight leading-snug">
            {t.animationHeading}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] font-light max-w-md mx-auto leading-relaxed">
            {t.animationSub}
          </p>
        </div>

        {/* Light Connected Pipeline */}
        <div className="relative space-y-6 max-w-lg mx-auto text-left py-2 z-10">
          
          {/* Subtle light bar */}
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#38BDF8] via-[#0284C7] to-[#2563EB]" />

          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isFinished = idx < currentStep;
            const isCurrent = idx === currentStep;

            return (
              <div key={idx} className="relative z-10 flex items-start gap-4">
                
                {/* Node icon & glowing circle */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                  isCurrent
                    ? 'bg-sky-50 text-[#0284C7] border-2 border-[#0284C7] shadow-[0_0_20px_rgba(2,132,199,0.45)] scale-110'
                    : isFinished
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                    : 'bg-white/60 text-[#475569]/50 border border-white'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Details */}
                <div className="pt-1.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm sm:text-base font-medium transition-colors ${
                      isCurrent
                        ? 'text-[#0F172A]'
                        : isFinished
                        ? 'text-[#0F172A]'
                        : 'text-[#475569]/60'
                    }`}>
                      {stage.label}
                    </span>
                    {isCurrent && (
                      <span className="text-[11px] font-mono text-[#0284C7] animate-pulse font-medium">
                        {t.examiningBadge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#475569] font-light mt-0.5 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* Progress percent */}
        <div className="pt-6 border-t border-[#0F172A]/[0.08] flex items-center justify-between text-xs text-[#475569] font-light relative z-10">
          <span>{t.verificationStatusLabel}</span>
          <span className="font-mono text-[#0284C7] font-semibold">
            {Math.round(((currentStep + 1) / stages.length) * 100)}%
          </span>
        </div>

      </GlassTile>
    </div>
  );
};
