import React, { useState } from 'react';
import { GlassTile } from './GlassTile';
import { ChevronRight, X, ArrowLeft } from 'lucide-react';
import { LEARN_SCAM_TOPICS, LocalizedScamTopic } from '../data/learnScams';
import { Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';

interface LearnSectionProps {
  currentLanguage: Language;
  onBackToVerification: () => void;
}

export const LearnSection: React.FC<LearnSectionProps> = ({
  currentLanguage,
  onBackToVerification
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const [selectedTopic, setSelectedTopic] = useState<LocalizedScamTopic | null>(null);

  const topics = LEARN_SCAM_TOPICS[currentLanguage] || LEARN_SCAM_TOPICS.en;

  return (
    <div className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
      
      {/* Navigation breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToVerification}
          className="inline-flex items-center gap-2 text-xs font-light text-[#475569] hover:text-[#0F172A] transition-colors py-1 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.learnNavBack}</span>
        </button>

        <span className="text-xs font-mono text-[#0284C7] uppercase tracking-wider font-semibold">
          {t.learnBadge}
        </span>
      </div>

      {/* Header */}
      <div className="space-y-3 text-left">
        <h2 className="text-3xl sm:text-4xl font-light text-[#0F172A] tracking-tight">
          {t.learnTitle}
        </h2>
        <p className="text-sm sm:text-base text-[#475569] max-w-2xl font-light leading-relaxed">
          {t.learnSubtitle}
        </p>
      </div>

      {/* Glass Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {topics.map((topic) => {
          return (
            <GlassTile
              key={topic.id}
              variant="card"
              interactive
              onClick={() => setSelectedTopic(topic)}
              className="p-6 flex flex-col justify-between space-y-4 group shadow-sm cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-100 font-semibold">
                    {topic.category}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#475569] group-hover:text-[#0284C7] group-hover:translate-x-1 transition-all" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                    {topic.title}
                  </h3>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed font-light line-clamp-3">
                  {topic.tagline}
                </p>
              </div>

              <div className="pt-3 border-t border-[#0F172A]/[0.06] flex items-center justify-between text-[11px] text-[#475569] font-light">
                <span>{t.viewRedFlagsAction}</span>
                <span className="text-[#0284C7] font-mono font-semibold">{t.exploreArrow}</span>
              </div>
            </GlassTile>
          );
        })}
      </div>

      {/* Detailed Modal Drawer */}
      {selectedTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/30 backdrop-blur-md">
          <GlassTile variant="elevated" glow className="max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#0F172A]/[0.08]">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#0284C7] font-semibold">
                  {selectedTopic.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-[#0F172A]">
                  {selectedTopic.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedTopic(null)}
                className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-[#475569] hover:text-[#0F172A] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#0F172A] font-light">
              <div className="space-y-1">
                <span className="font-semibold text-[#0F172A] block">{t.howSchemeOperates}</span>
                <p className="text-[#475569] leading-relaxed">{selectedTopic.howItWorks}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/70 border border-white text-xs space-y-1 shadow-sm">
                <span className="font-mono text-[#0284C7] text-xs block font-semibold">{t.typicalHookLabel}</span>
                <p className="font-mono text-xs text-[#0F172A] italic">{selectedTopic.typicalHook}</p>
              </div>

              <div className="space-y-2">
                <span className="font-semibold text-[#0F172A] block">{t.keyRedFlagsLabel}</span>
                <ul className="space-y-1.5 pl-1">
                  {selectedTopic.redFlags.map((flag, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#0F172A] text-xs sm:text-sm">
                      <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200 space-y-1">
                <span className="font-semibold text-sky-950 block">{t.statutorySafeRuleLabel}</span>
                <p className="text-sky-950 text-xs leading-relaxed">{selectedTopic.safeAction}</p>
              </div>

              <div className="text-[11px] text-[#475569] pt-1">
                <strong className="text-[#0F172A] font-medium">{t.statutoryFactLabel}</strong> {selectedTopic.regulatoryFact}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedTopic(null)}
                className="px-6 py-2.5 rounded-2xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:shadow-md transition-all cursor-pointer shadow-sm"
              >
                {t.doneReadingButton}
              </button>
            </div>

          </GlassTile>
        </div>
      )}

    </div>
  );
};
