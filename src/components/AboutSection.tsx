import React from 'react';
import { GlassTile } from './GlassTile';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';

interface AboutSectionProps {
  currentLanguage: Language;
  onBackToVerification: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLanguage,
  onBackToVerification
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
      
      {/* Navigation breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToVerification}
          className="inline-flex items-center gap-2 text-xs font-light text-[#475569] hover:text-[#0F172A] transition-colors py-1 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.aboutNavBack}</span>
        </button>

        <span className="text-xs font-mono text-[#0284C7] uppercase tracking-wider font-semibold">
          {t.aboutBadge}
        </span>
      </div>

      {/* Header */}
      <div className="space-y-4 text-left">
        <h2 className="text-3xl sm:text-5xl font-light text-[#0F172A] tracking-tight">
          {t.aboutTitlePart1}{' '}
          <span className="bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#2563EB] bg-clip-text text-transparent font-semibold">
            {t.aboutTitleVerify}
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light">
          {t.aboutDescription}
        </p>
      </div>

      {/* Narrative cards */}
      <div className="space-y-6">
        <GlassTile variant="card" className="p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-[#0284C7] font-semibold text-base">
            <ShieldCheck className="w-5 h-5 text-[#0284C7]" />
            <span>{t.aboutWhyTitle}</span>
          </div>
          <p className="text-sm text-[#0F172A]/90 leading-relaxed font-light">
            {t.aboutWhyP1}
          </p>
          <p className="text-sm text-[#0F172A]/90 leading-relaxed font-light">
            {t.aboutWhyP2}
          </p>
        </GlassTile>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <GlassTile variant="subtle" className="p-5 space-y-2 shadow-sm">
            <span className="text-xs font-mono text-[#0284C7] uppercase block font-semibold">{t.pillar1Number}</span>
            <h4 className="text-sm font-semibold text-[#0F172A]">{t.pillar1Title}</h4>
            <p className="text-xs text-[#475569] leading-relaxed font-light">
              {t.pillar1Desc}
            </p>
          </GlassTile>

          <GlassTile variant="subtle" className="p-5 space-y-2 shadow-sm">
            <span className="text-xs font-mono text-[#0284C7] uppercase block font-semibold">{t.pillar2Number}</span>
            <h4 className="text-sm font-semibold text-[#0F172A]">{t.pillar2Title}</h4>
            <p className="text-xs text-[#475569] leading-relaxed font-light">
              {t.pillar2Desc}
            </p>
          </GlassTile>

          <GlassTile variant="subtle" className="p-5 space-y-2 shadow-sm">
            <span className="text-xs font-mono text-[#0284C7] uppercase block font-semibold">{t.pillar3Number}</span>
            <h4 className="text-sm font-semibold text-[#0F172A]">{t.pillar3Title}</h4>
            <p className="text-xs text-[#475569] leading-relaxed font-light">
              {t.pillar3Desc}
            </p>
          </GlassTile>
        </div>
      </div>

    </div>
  );
};
