import React from 'react';
import { GlassTile } from './GlassTile';
import { CheckCircle2, HelpCircle } from 'lucide-react';
import { AnalysisResult, Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';

interface WhatWeKnowSectionProps {
  analysis: AnalysisResult;
  currentLanguage: Language;
}

export const WhatWeKnowSection: React.FC<WhatWeKnowSectionProps> = ({ analysis, currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* What We Know (Supported signals) */}
      <GlassTile variant="green" className="p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-emerald-900/10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <h3 className="text-base sm:text-lg font-medium text-emerald-950">
              {t.whatWeKnowTitle}
            </h3>
          </div>
          <span className="text-[10px] font-mono text-emerald-800 bg-white/70 px-2 py-0.5 rounded-full border border-emerald-200">
            {t.whatWeKnowBadge}
          </span>
        </div>

        <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950/90 font-light leading-relaxed">
          {analysis.whatWeKnow.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-emerald-600 font-bold shrink-0 mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </GlassTile>

      {/* What We Couldn't Verify (Unknowns) */}
      <GlassTile variant="amber" className="p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-amber-900/10">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <h3 className="text-base sm:text-lg font-medium text-amber-950">
              {t.whatWeCouldNotVerifyTitle}
            </h3>
          </div>
          <span className="text-[10px] font-mono text-amber-800 bg-white/70 px-2 py-0.5 rounded-full border border-amber-200">
            {t.whatWeCouldNotVerifyBadge}
          </span>
        </div>

        <ul className="space-y-2.5 text-xs sm:text-sm text-amber-950/90 font-light leading-relaxed">
          {analysis.whatWeCouldNotVerify.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-amber-600 font-bold shrink-0 mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </GlassTile>

    </div>
  );
};
