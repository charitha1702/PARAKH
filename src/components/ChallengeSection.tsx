import React, { useState } from 'react';
import { GlassTile } from './GlassTile';
import { Scale, RefreshCw, CheckCircle2, AlertTriangle, HelpCircle, ArrowRight } from 'lucide-react';
import { AnalysisResult, ChallengeResult, Language } from '../types/analysis';
import { runChallengeVerification } from '../services/analysis/challengeAssessment';
import { TRANSLATIONS } from '../data/translations';
import { SectionAudioControl } from './SectionAudioControl';

interface ChallengeSectionProps {
  analysis: AnalysisResult;
  currentLanguage: Language;
  onChallengeUpdated?: (updated: ChallengeResult) => void;
}

export const ChallengeSection: React.FC<ChallengeSectionProps> = ({
  analysis,
  currentLanguage,
  onChallengeUpdated
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const [isVerifying, setIsVerifying] = useState(false);
  const [challengeResult, setChallengeResult] = useState<ChallengeResult | null>(
    analysis.challengeResult || null
  );

  const handleRunChallenge = async () => {
    setIsVerifying(true);
    try {
      const result = await runChallengeVerification(analysis, currentLanguage);
      setChallengeResult(result);
      if (onChallengeUpdated) {
        onChallengeUpdated(result);
      }
    } finally {
      setIsVerifying(false);
    }
  };

  const getOutcomeBadge = (outcome?: string) => {
    switch (outcome) {
      case 'contradictory_found':
        return {
          title: t.outcomeContradictoryFound || 'Contradictory evidence found',
          bg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          desc: t.outcomeContradictoryDesc || 'Alternative legitimate hypothesis confirmed. PARAKH has revised its conclusion.'
        };
      case 'inconclusive':
        return {
          title: t.outcomeInconclusive || 'Evidence remains inconclusive',
          bg: 'bg-slate-100 text-slate-800 border-slate-300',
          desc: t.outcomeInconclusiveDesc || 'Available statutory records neither confirm nor disprove the claim with certainty.'
        };
      case 'no_contradictory_found':
      default:
        return {
          title: t.outcomeNoContradictory || 'No reliable contradictory evidence found',
          bg: 'bg-purple-100 text-purple-900 border-purple-300',
          desc: t.outcomeNoContradictoryDesc || 'Statutory audit confirms the detected behavioral markers breach regulatory standards.'
        };
    }
  };

  const challengeSpeechText = challengeResult 
    ? `${t.challengeTitle}. ${getOutcomeBadge(challengeResult.outcomeType).title}. ${challengeResult.updatedNuancedAssessment}`
    : `${t.challengeTitle}. ${t.challengeSubtitle}`;

  return (
    <GlassTile variant="lavender" className="p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-700 uppercase tracking-wider font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>{t.challengeBadge || 'CHALLENGE PARAKH'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            {t.challengeTitle || 'Challenge This Result'}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
            {t.challengeSubtitle || 'PARAKH does not force every analysis toward "scam". Challenge the finding to search for legitimate exemptions, alternative hypotheses, or contradictory evidence.'}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <SectionAudioControl
            sectionId="challenge_parakh"
            textToSpeak={challengeSpeechText}
            currentLanguage={currentLanguage}
            compact
          />
          <button
            type="button"
            onClick={handleRunChallenge}
            disabled={isVerifying}
            className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 hover:shadow-[0_10px_25px_rgba(168,85,247,0.3)] disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer shadow-sm group"
          >
            <RefreshCw className={`w-4 h-4 ${isVerifying ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
            <span>{isVerifying ? (t.challengeTesting || 'Testing alternative evidence...') : (t.challengeButton || 'Challenge this result')}</span>
          </button>
        </div>
      </div>

      {/* Evaluating state */}
      {isVerifying && (
        <div className="p-6 rounded-2xl bg-white/80 border border-purple-200 text-center space-y-3 animate-pulse shadow-sm">
          <div className="w-8 h-8 mx-auto rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
            <Scale className="w-4 h-4 animate-spin" />
          </div>
          <p className="text-sm text-[#0F172A] font-medium">
            {t.challengeTesting || 'Actively auditing contradictory evidence & legitimate financial models...'}
          </p>
        </div>
      )}

      {/* Challenge Completed Result Panels */}
      {challengeResult && !isVerifying && (
        <div className="space-y-4 pt-2">
          
          {/* Outcome Status Banner */}
          <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${getOutcomeBadge(challengeResult.outcomeType).bg}`}>
            <div className="flex items-center gap-2.5">
              <Scale className="w-5 h-5 shrink-0" />
              <div>
                <span className="font-bold text-sm block">
                  {getOutcomeBadge(challengeResult.outcomeType).title}
                </span>
                <span className="text-xs opacity-90 block">
                  {getOutcomeBadge(challengeResult.outcomeType).desc}
                </span>
              </div>
            </div>
            {challengeResult.isAssessmentAltered && (
              <span className="text-[11px] font-mono uppercase bg-white/90 text-emerald-800 px-3 py-1 rounded-full border border-emerald-300 font-bold self-start sm:self-auto">
                {t.verdictUpdatedTag || 'Verdict Updated'}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* 1. Tested Alternative Hypothesis */}
            <div className="p-4 rounded-2xl bg-white/70 border border-white/90 space-y-2 shadow-xs">
              <span className="text-[10px] font-mono text-[#475569] uppercase font-bold block">
                {t.investigatingHypothesis || 'Investigated Hypothesis:'}
              </span>
              <p className="text-xs text-[#0F172A] leading-relaxed">
                {challengeResult.investigatedHypothesis || challengeResult.initialAssessmentSummary}
              </p>
            </div>

            {/* 2. Evaluated Evidence Points */}
            <div className="p-4 rounded-2xl bg-white/70 border border-white/90 space-y-2 shadow-xs">
              <span className="text-[10px] font-mono text-purple-700 uppercase font-bold block">
                {t.legitimizingFound || 'Evaluated Evidence Checkpoints:'}
              </span>
              <div className="text-xs text-[#0F172A] space-y-1.5">
                {challengeResult.legitimizingEvidenceFound.map((item, idx) => (
                  <p key={idx} className="flex items-start gap-1.5">
                    <span className="text-purple-600">•</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* 3. Updated Assessment */}
            <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200 space-y-2 shadow-xs">
              <span className="text-[10px] font-mono text-purple-900 uppercase font-bold block">
                {t.updatedNuancedVerdict || 'Nuanced Assessment:'}
              </span>
              <p className="text-xs text-purple-950 leading-relaxed font-medium">
                {challengeResult.updatedNuancedAssessment}
              </p>
            </div>

          </div>

          <div className="p-3.5 rounded-2xl bg-white/80 border border-white flex items-center justify-between text-xs text-[#475569]">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-[#0F172A]">{t.challengeVerdictAdjustNotice || 'Willing to adjust verdict when verified counter-evidence emerges.'}</span>
            </span>
            <button
              type="button"
              onClick={handleRunChallenge}
              className="text-purple-700 hover:text-purple-900 font-semibold transition-colors cursor-pointer"
            >
              {t.retestChallenge || 'Re-test Challenge'}
            </button>
          </div>

        </div>
      )}

    </GlassTile>
  );
};
