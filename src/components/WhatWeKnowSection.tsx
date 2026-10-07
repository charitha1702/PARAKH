import React from 'react';
import { GlassTile } from './GlassTile';
import { CheckCircle2, HelpCircle, XCircle } from 'lucide-react';
import { AnalysisResult, Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';
import { SectionAudioControl } from './SectionAudioControl';

interface WhatWeKnowSectionProps {
  analysis: AnalysisResult;
  currentLanguage: Language;
}

export const WhatWeKnowSection: React.FC<WhatWeKnowSectionProps> = ({ analysis, currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const contradictions = analysis.whatContradicts && analysis.whatContradicts.length > 0 
    ? analysis.whatContradicts 
    : [
        'SEBI explicitly prohibits assured or guaranteed returns under SEBI (Investment Advisers) Regulations, 2013.',
        'RBI strictly requires investment collections to flow through designated institutional escrow accounts, never personal UPI VPAs.',
        'ASBA facility is mandatory for retail IPO bidding; direct off-market allocations via chat groups violate exchange clearing guidelines.'
      ];

  const whatWeKnowSpeechText = `${t.whatWeKnowTitle}: ${analysis.whatWeKnow.join('. ')}. ${t.whatContradictsTitle}: ${contradictions.join('. ')}. ${t.whatWeCouldNotVerifyTitle}: ${analysis.whatWeCouldNotVerify.join('. ')}`;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-wider text-[#0284C7] font-semibold">
          {t.whatWeKnowBadge || 'Observed Facts'} & {t.statutoryRulesBadge || 'Statutory Rules'}
        </span>
        <SectionAudioControl
          sectionId="what_we_know"
          textToSpeak={whatWeKnowSpeechText}
          currentLanguage={currentLanguage}
          compact
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* 1. What Evidence Supports It */}
        <GlassTile variant="green" className="p-5 sm:p-6 space-y-3.5">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-900/10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <h3 className="text-sm sm:text-base font-bold text-emerald-950">
                {t.whatWeKnowTitle || 'Evidence That Supports It'}
              </h3>
            </div>
            <span className="text-[10px] font-mono text-emerald-800 bg-white/80 px-2 py-0.5 rounded-full border border-emerald-200">
              {t.observedFactsBadge || 'Observed Facts'}
            </span>
          </div>

          <ul className="space-y-2 text-xs text-emerald-950 leading-relaxed font-light">
            {analysis.whatWeKnow.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold shrink-0 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassTile>

        {/* 2. What Contradicts It */}
        <GlassTile variant="card" className="p-5 sm:p-6 space-y-3.5 bg-rose-50/70 border border-rose-200">
          <div className="flex items-center justify-between pb-3 border-b border-rose-900/10">
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <h3 className="text-sm sm:text-base font-bold text-rose-950">
                {t.whatContradictsTitle || 'What Contradicts It'}
              </h3>
            </div>
            <span className="text-[10px] font-mono text-rose-800 bg-white/80 px-2 py-0.5 rounded-full border border-rose-200 font-semibold">
              {t.statutoryRulesBadge || 'Statutory Rules'}
            </span>
          </div>

          <ul className="space-y-2 text-xs text-rose-950 leading-relaxed font-light">
            {contradictions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-rose-600 font-bold shrink-0 mt-0.5">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassTile>

        {/* 3. What Could Not Be Verified */}
        <GlassTile variant="amber" className="p-5 sm:p-6 space-y-3.5">
          <div className="flex items-center justify-between pb-3 border-b border-amber-900/10">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <h3 className="text-sm sm:text-base font-bold text-amber-950">
                {t.whatWeCouldNotVerifyTitle || 'What Could Not Be Verified'}
              </h3>
            </div>
            <span className="text-[10px] font-mono text-amber-800 bg-white/80 px-2 py-0.5 rounded-full border border-amber-200">
              {t.whatWeCouldNotVerifyBadge || 'Uncertain'}
            </span>
          </div>

          <ul className="space-y-2 text-xs text-amber-950 leading-relaxed font-light">
            {analysis.whatWeCouldNotVerify.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-600 font-bold shrink-0 mt-0.5">?</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassTile>

      </div>
    </div>
  );
};
