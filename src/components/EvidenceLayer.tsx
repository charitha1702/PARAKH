import React from 'react';
import { GlassTile } from './GlassTile';
import { ShieldAlert, ExternalLink, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';
import { AnalysisResult, Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';

interface EvidenceLayerProps {
  analysis: AnalysisResult;
  currentLanguage: Language;
  onOpenOfficialSources: () => void;
}

export const EvidenceLayer: React.FC<EvidenceLayerProps> = ({
  analysis,
  currentLanguage,
  onOpenOfficialSources
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const getTierLabel = (tier: string) => {
    switch (tier) {
      case 'regulatory':
        return t.sourceTierRegulatory;
      case 'official':
        return t.sourceTierOfficial;
      case 'reputable':
        return t.sourceTierReputable;
      case 'community':
        return t.sourceTierCommunity;
      default:
        return tier;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'verified':
        return t.statusVerified;
      case 'needs_verification':
        return t.statusNeedsVerification;
      case 'not_established':
        return t.statusNotEstablished;
      default:
        return status;
    }
  };

  return (
    <GlassTile variant="card" className="p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#0F172A]/[0.06]">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-[#0284C7] uppercase tracking-wider font-semibold">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{t.evidenceBadge}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-light text-[#0F172A]">
            {t.evidenceTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
            {t.evidenceSubtitle}
          </p>
        </div>

        <button
          onClick={onOpenOfficialSources}
          className="px-4 py-2 rounded-2xl text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm shrink-0"
        >
          <span>{t.viewSourcesButton}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Evidence Items Grid */}
      <div className="space-y-4">
        {analysis.evidenceItems.map(item => {
          return (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white/60 border border-white/90 space-y-3 shadow-sm hover:bg-white/80 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-900 border border-sky-200 font-semibold">
                    {item.badgeLabel}
                  </span>
                  <span className="text-xs font-semibold text-[#0F172A]">
                    {item.sourceName}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono">
                  {item.status === 'verified' && (
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{getStatusLabel(item.status)}</span>
                    </span>
                  )}
                  {item.status === 'needs_verification' && (
                    <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                      <HelpCircle className="w-3 h-3 text-amber-600" />
                      <span>{getStatusLabel(item.status)}</span>
                    </span>
                  )}
                  {item.status === 'not_established' && (
                    <span className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-rose-600" />
                      <span>{getStatusLabel(item.status)}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Claim vs Finding */}
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-[#0F172A] block">{t.claimLabel}:</span>
                  <p className="text-[#475569] font-mono bg-white/70 p-2 rounded-xl border border-white mt-1">
                    "{item.claim}"
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-[#0F172A] block">{t.evidenceLabel}:</span>
                  <p className="text-[#475569] font-light leading-relaxed mt-0.5">
                    {item.evidenceSummary}
                  </p>
                </div>
              </div>

              {item.officialUrl && (
                <div className="pt-2 flex justify-end">
                  <a
                    href={item.officialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#0284C7] hover:text-[#0369A1] transition-colors"
                  >
                    <span>{t.openRegistryLink}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </GlassTile>
  );
};
