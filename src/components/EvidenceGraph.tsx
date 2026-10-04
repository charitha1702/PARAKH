import React from 'react';
import { GlassTile } from './GlassTile';
import { GitCommit, FileText, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AnalysisResult, Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';

interface EvidenceGraphProps {
  analysis: AnalysisResult;
  currentLanguage: Language;
}

export const EvidenceGraph: React.FC<EvidenceGraphProps> = ({ analysis, currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-4 h-4 text-[#0284C7]" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-4 h-4 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 'CheckCircle':
        return <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />;
      default:
        return <GitCommit className="w-4 h-4 text-[#0284C7]" />;
    }
  };

  return (
    <GlassTile variant="card" className="p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="space-y-1 pb-2 border-b border-[#0F172A]/[0.06]">
        <div className="flex items-center gap-2 text-xs font-mono text-[#0284C7] uppercase tracking-wider font-semibold">
          <GitCommit className="w-3.5 h-3.5" />
          <span>{t.evidenceGraphBadge}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-light text-[#0F172A]">
          {t.evidenceGraphTitle}
        </h3>
        <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
          {t.evidenceGraphSubtitle}
        </p>
      </div>

      {/* Visual Pipeline Nodes */}
      <div className="relative py-4">
        {/* Horizontal connect line on desktop */}
        <div className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#2563EB]" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
          {analysis.evidenceGraphNodes.map((node, idx) => (
            <div
              key={node.id}
              className="p-4 rounded-2xl bg-white/70 border border-white/90 space-y-3 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center">
                    {getIcon(node.iconName)}
                  </div>
                  <span className="text-[10px] font-mono text-[#0284C7] bg-white px-2 py-0.5 rounded-full border border-sky-100 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <h4 className="text-xs sm:text-sm font-semibold text-[#0F172A] leading-snug">
                  {node.label}
                </h4>

                <p className="text-[11px] text-[#475569] font-light leading-relaxed">
                  {node.detail}
                </p>
              </div>

              <div className="pt-2 border-t border-[#0F172A]/[0.06] flex items-center justify-between text-[11px] font-mono text-[#475569]">
                <span>{t.strengthLabel}:</span>
                <span className="font-semibold text-[#0284C7]">{node.strength}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </GlassTile>
  );
};
