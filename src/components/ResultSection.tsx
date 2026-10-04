import React, { useState } from 'react';
import { GlassTile } from './GlassTile';
import { 
  AlertTriangle, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Share2
} from 'lucide-react';
import { AnalysisResult, Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';
import { WhatFoundSection } from './WhatFoundSection';
import { EvidenceLayer } from './EvidenceLayer';
import { EvidenceGraph } from './EvidenceGraph';
import { WhatWeKnowSection } from './WhatWeKnowSection';
import { ChallengeSection } from './ChallengeSection';
import { ScamDnaSection } from './ScamDnaSection';
import { SafeStepsSection } from './SafeStepsSection';

interface ResultSectionProps {
  analysis: AnalysisResult;
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  simpleMode: boolean;
  onToggleSimpleMode: () => void;
  onReset: () => void;
  onOpenOfficialSources: () => void;
  isSpeaking: boolean;
  onToggleSpeaking: () => void;
}

export const ResultSection: React.FC<ResultSectionProps> = ({
  analysis,
  currentLanguage,
  onLanguageChange,
  simpleMode,
  onToggleSimpleMode,
  onReset,
  onOpenOfficialSources,
  isSpeaking,
  onToggleSpeaking
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const [copiedNotification, setCopiedNotification] = useState(false);

  const severityLabels: Record<Language, { critical: string; high: string; medium: string; low: string }> = {
    en: { critical: 'Critical', high: 'High', medium: 'Moderate', low: 'Low' },
    kn: { critical: 'ಗಂಭೀರ', high: 'ಹೆಚ್ಚು', medium: 'ಮಧ್ಯಮ', low: 'ಕಡಿಮೆ' },
    hi: { critical: 'गंभीर', high: 'उच्च', medium: 'मध्यम', low: 'कम' },
    te: { critical: 'తీవ్రమైన', high: 'అధిక', medium: 'మితమైన', low: 'తక్కువ' }
  };

  const getSeverityLabel = (severity: 'critical' | 'high' | 'medium' | 'low') => {
    return (severityLabels[currentLanguage] || severityLabels.en)[severity] || severity;
  };

  const vernacular = analysis.vernacularExplanations[currentLanguage] || analysis.vernacularExplanations.en;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `PARAKH Verification Report:\nStatus: ${analysis.statusHeading}\nSignals: ${analysis.signalsCount} ${t.signalsDetectedCount}.\nExplanation: ${vernacular.simple}\nVerified via PARAKH: ${t.heroTitlePart1} ${t.heroTitleVerify}`
      );
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  return (
    <div id="parakh-result-view" className="py-8 md:py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
      
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-light text-[#0F172A] bg-white/75 hover:bg-white border border-white transition-all cursor-pointer shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#475569]" />
          <span>{t.checkAnotherItem}</span>
        </button>

        <div className="flex items-center gap-2 ml-auto">
          {/* Quick share button */}
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-light text-[#0F172A] bg-white/75 hover:bg-white border border-white transition-all cursor-pointer shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>{copiedNotification ? t.summaryCopied : t.shareAssessment}</span>
          </button>

          {/* Quick Audio Readout */}
          <button
            onClick={onToggleSpeaking}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl text-xs font-light transition-all cursor-pointer shadow-sm ${
              isSpeaking
                ? 'bg-amber-100 text-amber-900 border border-amber-300 animate-pulse'
                : 'bg-white/75 text-[#0F172A] hover:bg-white border border-white'
            }`}
          >
            {isSpeaking ? <VolumeX className="w-3.5 h-3.5 text-amber-700" /> : <Volume2 className="w-3.5 h-3.5 text-[#0284C7]" />}
            <span>{isSpeaking ? t.stopVoice : t.listenVoice}</span>
          </button>
        </div>
      </div>

      {/* MAIN TRANSLUCENT CRYSTAL GLASS RESULT CARD */}
      <GlassTile variant="elevated" glow className="p-7 sm:p-10 space-y-8 shadow-[0_28px_70px_-15px_rgba(186,215,240,0.6)]">
        
        {/* Card Header Tag */}
        <div className="flex items-center justify-between pb-4 border-b border-[#0F172A]/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#475569] font-medium">
              {t.heroCardBadge}
            </span>
          </div>

          <span className="text-[10px] font-mono text-[#0284C7] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
            {t.resultBadge}
          </span>
        </div>

        {/* Large Status & Count */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200 shrink-0 mt-0.5 shadow-sm">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-light text-[#0F172A] tracking-tight leading-snug">
                {analysis.statusHeading}
              </h2>
              <p className="text-sm sm:text-base text-[#0284C7] font-mono mt-1 font-semibold">
                {analysis.signalsCount} {t.signalsDetectedCount}
              </p>
            </div>
          </div>

          {/* Plain-Language summary banner */}
          <GlassTile variant="subtle" className="p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#0284C7] uppercase tracking-wider font-semibold">
                {simpleMode ? t.simpleExplanationBadge : t.summaryExplanationBadge}
              </span>
              <span className="text-[11px] font-mono text-[#475569] uppercase">
                {currentLanguage.toUpperCase()}
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#0F172A] leading-relaxed font-light">
              {simpleMode ? vernacular.simple : vernacular.summary}
            </p>
          </GlassTile>
        </div>

        {/* Individual Floating Translucent Glass Chips for Signals */}
        <div className="space-y-2.5">
          <span className="text-xs font-mono text-[#475569] block font-light">
            {t.detectedWarningSignalsLabel}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {analysis.signals.map((sig) => (
              <GlassTile
                key={sig.id}
                variant="subtle"
                className="p-4 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                  <span className="font-medium text-[#0F172A]">{sig.name}</span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/80 text-[#475569] border border-white">
                  {getSeverityLabel(sig.severity)}
                </span>
              </GlassTile>
            ))}
          </div>
        </div>

      </GlassTile>

      {/* What PARAKH found in the text */}
      <WhatFoundSection analysis={analysis} currentLanguage={currentLanguage} />

      {/* Evidence Panel */}
      <EvidenceLayer analysis={analysis} currentLanguage={currentLanguage} onOpenOfficialSources={onOpenOfficialSources} />

      {/* Evidence Graph */}
      <EvidenceGraph analysis={analysis} currentLanguage={currentLanguage} />

      {/* What We Know / What We Couldn't Verify */}
      <WhatWeKnowSection analysis={analysis} currentLanguage={currentLanguage} />

      {/* Challenge This Result */}
      <ChallengeSection analysis={analysis} currentLanguage={currentLanguage} />

      {/* Scam DNA */}
      <ScamDnaSection signals={analysis.behavioralSignals} currentLanguage={currentLanguage} />

      {/* Safe Step */}
      <SafeStepsSection
        analysis={analysis}
        currentLanguage={currentLanguage}
        simpleMode={simpleMode}
        onToggleSimpleMode={onToggleSimpleMode}
        onOpenOfficialSources={onOpenOfficialSources}
        isSpeaking={isSpeaking}
        onToggleSpeaking={onToggleSpeaking}
      />

    </div>
  );
};
