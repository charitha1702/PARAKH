import React from 'react';
import { GlassTile } from './GlassTile';
import { ExternalLink, Phone, ArrowLeft } from 'lucide-react';
import { OFFICIAL_REGISTRIES } from '../data/officialRegistries';
import { Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';

interface OfficialRegistriesSectionProps {
  currentLanguage: Language;
  onBackToVerification: () => void;
}

export const OfficialRegistriesSection: React.FC<OfficialRegistriesSectionProps> = ({
  currentLanguage,
  onBackToVerification
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const registries = OFFICIAL_REGISTRIES[currentLanguage] || OFFICIAL_REGISTRIES.en;

  return (
    <div className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
      
      {/* Navigation breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToVerification}
          className="inline-flex items-center gap-2 text-xs font-light text-[#475569] hover:text-[#0F172A] transition-colors py-1 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.registriesNavBack}</span>
        </button>

        <span className="text-xs font-mono text-[#0284C7] uppercase tracking-wider font-semibold">
          {t.registriesBadge}
        </span>
      </div>

      {/* Header */}
      <div className="space-y-3 text-left">
        <h2 className="text-3xl sm:text-4xl font-light text-[#0F172A] tracking-tight">
          {t.registriesTitle}
        </h2>
        <p className="text-sm sm:text-base text-[#475569] max-w-2xl font-light leading-relaxed">
          {t.registriesSubtitle}
        </p>
      </div>

      {/* National Cyber Helpline Callout Banner */}
      <GlassTile variant="surface" className="p-6 border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
            <h3 className="text-base sm:text-lg font-semibold text-[#0F172A]">
              {t.helplineBannerTitle}
            </h3>
          </div>
          <p className="text-xs text-[#475569] font-light leading-relaxed">
            {t.helplineBannerDesc}
          </p>
        </div>

        <a
          href="tel:1930"
          className="px-5 py-2.5 rounded-2xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-sm"
        >
          <Phone className="w-4 h-4 text-white" />
          <span>{t.helplineCallAction}</span>
        </a>
      </GlassTile>

      {/* Registries List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {registries.map((reg) => (
          <GlassTile
            key={reg.id}
            variant="card"
            className="p-6 flex flex-col justify-between space-y-5 shadow-sm"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-100 font-semibold">
                  {reg.badge}
                </span>
                {reg.hotline && (
                  <span className="text-[10px] font-mono text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                    {reg.hotline}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#0F172A]">
                  {reg.name}
                </h3>
                <p className="text-xs text-[#0284C7] font-mono font-medium mt-0.5">
                  {t.authorityLabel} {reg.authority}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-light">
                {reg.description}
              </p>

              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-semibold text-[#0F172A] block">{t.howToVerifyPortalLabel}</span>
                <ul className="space-y-1 text-xs text-[#475569] font-light">
                  {reg.howToVerify.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#0284C7] font-bold shrink-0">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-[#0F172A]/[0.06] flex items-center justify-between">
              <span className="text-[11px] text-[#475569] font-mono font-light line-clamp-1 max-w-[200px]">
                {reg.verificationStepsHint}
              </span>

              <a
                href={reg.url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-2xl text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>{t.visitPortalAction}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </GlassTile>
        ))}
      </div>

    </div>
  );
};
