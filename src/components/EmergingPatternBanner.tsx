import React, { useState } from 'react';
import { GlassTile } from './GlassTile';
import { 
  Flame, 
  AlertTriangle, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Users, 
  Layers, 
  Info 
} from 'lucide-react';
import { EmergingScamPattern, Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';
import { SectionAudioControl } from './SectionAudioControl';

interface EmergingPatternBannerProps {
  pattern: EmergingScamPattern;
  currentLanguage: Language;
}

export const EmergingPatternBanner: React.FC<EmergingPatternBannerProps> = ({
  pattern,
  currentLanguage
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const [isExpanded, setIsExpanded] = useState(false);

  if (!pattern.isPatternDetected) {
    return null;
  }

  const patternSpeechText = `${pattern.patternTitle}. ${pattern.patternDescription}. ${pattern.disclaimer}`;

  return (
    <div className="my-6">
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-amber-50/90 via-orange-50/80 to-amber-50/90 border border-amber-300 shadow-sm transition-all backdrop-blur-md">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200 mt-0.5">
              <Flame className="w-5 h-5 text-amber-600 animate-pulse" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 bg-amber-200/60 px-2.5 py-0.5 rounded-full font-bold">
                  {t.emergingPatternBadge || 'COMMUNITY CORRELATION'}
                </span>
                <span className="text-[10px] text-amber-900/70 font-mono">
                  {pattern.sharedVectors.length} {t.matchingVectorsLabel || 'matching vectors identified'}
                </span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-amber-950">
                {pattern.patternTitle || 'Possible emerging scam pattern'}
              </h4>

              <p className="text-xs text-amber-900/80 font-light mt-0.5">
                {pattern.patternDescription || 'Several submitted reports appear to share similar characteristics.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <SectionAudioControl
              sectionId="emerging_pattern"
              textToSpeak={patternSpeechText}
              currentLanguage={currentLanguage}
              compact
            />
            <button
              type="button"
              onClick={() => setIsExpanded(prev => !prev)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 hover:bg-white text-amber-950 border border-amber-300 text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <span>{isExpanded ? (t.hideVectorsButton || 'Hide Vectors') : (t.inspectSharedVectorsButton || 'Inspect Shared Vectors')}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>

        {/* Expanded Shared Pattern Vectors */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-amber-200/80 space-y-3 animate-in fade-in duration-150">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-900 font-bold block">
              {t.sharedCharacteristicsTitle || 'Shared Characteristics Detected Across Submissions:'}
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {pattern.sharedVectors.map((vec, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-white/80 border border-amber-200/90 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-amber-950">
                      {vec.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                      {vec.category}
                    </span>
                  </div>
                  <div className="text-[#0F172A] font-medium text-[11px]">
                    "{vec.value}"
                  </div>
                  <p className="text-[10px] text-amber-900/70 font-light">
                    {vec.occurrencesNote}
                  </p>
                </div>
              ))}
            </div>

            {/* Clear Supporting Evidence Disclaimer */}
            <div className="p-3 rounded-2xl bg-amber-100/70 border border-amber-300/80 flex items-start gap-2.5 text-[11px] text-amber-950">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {pattern.disclaimer || 'Do NOT claim that something is fraudulent solely because many people reported it. Community reports are supporting evidence, not proof.'}
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
