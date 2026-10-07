import React, { useState } from 'react';
import { GlassTile } from './GlassTile';
import { 
  AlertTriangle, 
  RotateCcw, 
  Share2,
  CheckCircle2, 
  HelpCircle, 
  Sparkles
} from 'lucide-react';
import { AnalysisResult, Language, VerdictCategory } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';
import { SectionAudioControl } from './SectionAudioControl';
import { WhatFoundSection } from './WhatFoundSection';
import { EvidenceLayer } from './EvidenceLayer';
import { EvidenceGraph } from './EvidenceGraph';
import { WhatWeKnowSection } from './WhatWeKnowSection';
import { ChallengeSection } from './ChallengeSection';
import { ScamDnaSection } from './ScamDnaSection';
import { SafeStepsSection } from './SafeStepsSection';
import { TrustChainSection } from './TrustChainSection';
import { EmergingPatternBanner } from './EmergingPatternBanner';
import { CommunitySection } from './CommunitySection';
import { SimpleModeView } from './SimpleModeView';

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

  // If simpleMode is active, render dedicated SimpleModeView
  if (simpleMode) {
    return (
      <SimpleModeView
        analysis={analysis}
        currentLanguage={currentLanguage}
        onExitSimpleMode={onToggleSimpleMode}
        isSpeaking={isSpeaking}
        onToggleSpeech={onToggleSpeaking}
      />
    );
  }

  const getVerdictCategoryBadge = (category: VerdictCategory) => {
    switch (category) {
      case 'high_risk':
        return {
          title: t.verdictHighRisk || 'HIGH-RISK INDICATORS',
          bg: 'bg-rose-50 text-rose-800 border-rose-300',
          dot: 'bg-rose-600',
          icon: AlertTriangle
        };
      case 'some_concerns':
        return {
          title: t.verdictSomeConcerns || 'SOME CONCERNS',
          bg: 'bg-amber-50 text-amber-800 border-amber-300',
          dot: 'bg-amber-500',
          icon: AlertTriangle
        };
      case 'no_major_risk':
        return {
          title: t.verdictNoMajorRisk || 'NO MAJOR RISK SIGNALS DETECTED',
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-300',
          dot: 'bg-emerald-600',
          icon: CheckCircle2
        };
      case 'insufficient_evidence':
      default:
        return {
          title: t.verdictInsufficientEvidence || 'INSUFFICIENT EVIDENCE',
          bg: 'bg-slate-100 text-slate-800 border-slate-300',
          dot: 'bg-slate-500',
          icon: HelpCircle
        };
    }
  };

  const verdictBadge = getVerdictCategoryBadge(analysis.verdictCategory || 'high_risk');

  const vernacular = analysis.vernacularExplanations[currentLanguage] || analysis.vernacularExplanations.en;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `PARAKH Verification Report:\nCategory: ${verdictBadge.title}\nStatus: ${analysis.statusHeading}\nSignals: ${analysis.signalsCount} warning signals.\nExplanation: ${vernacular.simple}\nVerified via PARAKH: "Don’t just trust. Verify."`
      );
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  const verdictSpeechText = `${analysis.statusHeading}. ${analysis.signalsCount} ${t.signalsDetectedCount}. ${vernacular.summary}`;

  return (
    <div id="parakh-result-view" className="py-8 md:py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
      
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-medium text-[#0F172A] bg-white/80 hover:bg-white border border-white transition-all cursor-pointer shadow-xs"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#475569]" />
          <span>{t.checkAnotherItem}</span>
        </button>

        <div className="flex items-center gap-2 ml-auto">
          {/* Quick share button */}
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-medium text-[#0F172A] bg-white/80 hover:bg-white border border-white transition-all cursor-pointer shadow-xs"
          >
            <Share2 className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>{copiedNotification ? t.summaryCopied : t.shareAssessment}</span>
          </button>

          {/* Contextual audio control scoped to the verdict summary */}
          <SectionAudioControl
            sectionId="verdict-summary-top"
            textToSpeak={verdictSpeechText}
            currentLanguage={currentLanguage}
          />
        </div>
      </div>

      {/* 1. MAIN PARAKH FINAL VERDICT CARD */}
      <GlassTile variant="elevated" glow className="p-7 sm:p-10 space-y-7 shadow-[0_28px_70px_-15px_rgba(186,215,240,0.6)]">
        
        {/* Card Header Tag with Category Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#0F172A]/[0.06]">
          <div className="flex items-center gap-2.5">
            <span className={`w-2.5 h-2.5 rounded-full ${verdictBadge.dot}`} />
            <span className={`text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border font-bold ${verdictBadge.bg}`}>
              {verdictBadge.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <SectionAudioControl
              sectionId="verdict"
              textToSpeak={verdictSpeechText}
              currentLanguage={currentLanguage}
              compact
            />
            <span className="text-[10px] font-mono text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200 font-semibold">
              {t.finalParakhVerdict || 'FINAL PARAKH VERDICT'}
            </span>
            <span className="text-[10px] font-mono text-[#64748B] bg-slate-100 px-2.5 py-1 rounded-full uppercase">
              {currentLanguage}
            </span>
          </div>
        </div>

        {/* Status Heading */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200 shrink-0 mt-0.5 shadow-xs">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight leading-snug">
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
                {t.summaryExplanationBadge}
              </span>
              <span className="text-[11px] font-mono text-[#64748B]">
                {t.objectiveForensicAssessment || 'Objective Forensic Assessment'}
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#0F172A] leading-relaxed font-light">
              {vernacular.summary}
            </p>
          </GlassTile>
        </div>

        {/* Quick Signal Highlights */}
        {analysis.signals.length > 0 && (
          <div className="space-y-2.5 pt-2">
            <span className="text-xs font-mono text-[#475569] block font-semibold">
              {t.detectedWarningSignalsLabel}:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {analysis.signals.map((sig) => (
                <div
                  key={sig.id}
                  className="p-3.5 rounded-2xl bg-white/70 border border-white flex items-center justify-between text-xs shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                    <span className="font-semibold text-[#0F172A]">{sig.name}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-[#475569] border border-slate-200 font-medium">
                    {sig.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </GlassTile>

      {/* 2. EMERGING SCAM PATTERN DETECTION (Cross-report clustering) */}
      {analysis.emergingPattern && (
        <EmergingPatternBanner
          pattern={analysis.emergingPattern}
          currentLanguage={currentLanguage}
        />
      )}

      {/* 3. WHAT PARAKH DETECTED */}
      <WhatFoundSection analysis={analysis} currentLanguage={currentLanguage} />

      {/* 4. TRUST CHAIN RECONSTRUCTION (Interactive visual relationship graph & Show me how you know) */}
      <TrustChainSection
        trustChain={analysis.trustChain}
        currentLanguage={currentLanguage}
      />

      {/* 5. OFFICIAL EVIDENCE LAYER & GRAPH */}
      <EvidenceLayer 
        analysis={analysis} 
        currentLanguage={currentLanguage} 
        onOpenOfficialSources={onOpenOfficialSources} 
      />

      <EvidenceGraph 
        analysis={analysis} 
        currentLanguage={currentLanguage} 
      />

      {/* 6. WHAT WE KNOW / WHAT CONTRADICTS / WHAT COULD NOT BE VERIFIED */}
      <WhatWeKnowSection 
        analysis={analysis} 
        currentLanguage={currentLanguage} 
      />

      {/* 7. SCAM DNA (Behavioral Fingerprint - Not a score) */}
      <ScamDnaSection 
        signals={analysis.behavioralSignals} 
        scamDna={analysis.scamDna}
        currentLanguage={currentLanguage} 
      />

      {/* 8. COMMUNITY EVIDENCE & AI COMMUNITY SUMMARY */}
      <CommunitySection
        reports={analysis.communityReports}
        communitySummary={analysis.communitySummary}
        currentLanguage={currentLanguage}
      />

      {/* 9. CHALLENGE PARAKH (Dynamic alternative hypothesis verification) */}
      <ChallengeSection 
        analysis={analysis} 
        currentLanguage={currentLanguage} 
      />

      {/* 10. WHAT THE USER SHOULD DO NEXT (SAFE STEPS) */}
      <SafeStepsSection
        analysis={analysis}
        currentLanguage={currentLanguage}
        simpleMode={simpleMode}
        onToggleSimpleMode={onToggleSimpleMode}
        onOpenOfficialSources={onOpenOfficialSources}
        isSpeaking={isSpeaking}
        onToggleSpeaking={onToggleSpeaking}
      />

      {/* 11. CENTRAL PRODUCT PHILOSOPHY CARD */}
      <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-md border border-white text-center space-y-2 shadow-xs">
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#0284C7] uppercase font-bold tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.parakhCorePrinciple || 'PARAKH Core Principle'}</span>
        </div>
        <p className="text-sm sm:text-base font-semibold text-[#0F172A]">
          {t.parakhPrincipleQuote || '“Here is what we found. Here is the evidence. Here is what remains uncertain. You decide.”'}
        </p>
        <p className="text-xs text-[#64748B] font-light">
          {t.parakhPrincipleSubtext || 'Don’t just trust. Verify. — Built for Indian cyber safety and consumer financial resilience.'}
        </p>
      </div>

    </div>
  );
};
