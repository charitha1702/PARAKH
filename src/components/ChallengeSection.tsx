import React, { useState } from 'react';
import { GlassTile } from './GlassTile';
import { Scale, RefreshCw, CheckCircle2 } from 'lucide-react';
import { AnalysisResult, ChallengeResult, Language } from '../types/analysis';
import { runChallengeVerification } from '../services/analysis/challengeAssessment';
import { TRANSLATIONS } from '../data/translations';

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

  return (
    <GlassTile variant="lavender" className="p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-700 uppercase tracking-wider font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>{t.challengeBadge}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-light text-[#0F172A]">
            {t.challengeTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
            {t.challengeSubtitle}
          </p>
        </div>

        {!challengeResult && (
          <button
            onClick={handleRunChallenge}
            disabled={isVerifying}
            className="px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 hover:shadow-[0_10px_25px_rgba(168,85,247,0.3)] disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <RefreshCw className={`w-4 h-4 ${isVerifying ? 'animate-spin' : ''}`} />
            <span>{isVerifying ? t.challengeTesting : t.challengeButton}</span>
          </button>
        )}
      </div>

      {/* Evaluating state */}
      {isVerifying && (
        <div className="p-6 rounded-2xl bg-white/70 border border-purple-200 text-center space-y-3 animate-pulse shadow-sm">
          <div className="w-8 h-8 mx-auto rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
            <Scale className="w-4 h-4 animate-spin" />
          </div>
          <p className="text-sm text-[#0F172A] font-medium">
            {t.challengeTesting}
          </p>
        </div>
      )}

      {/* Challenge Completed Result Panels */}
      {challengeResult && !isVerifying && (
        <div className="space-y-4 pt-2">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* 1. Initial Assessment */}
            <div className="p-4 rounded-2xl bg-white/60 border border-white/80 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-[#475569] uppercase font-semibold block">
                {t.investigatingHypothesis}
              </span>
              <p className="text-xs text-[#0F172A] leading-relaxed font-light">
                {challengeResult.investigatedHypothesis || challengeResult.initialAssessmentSummary}
              </p>
            </div>

            {/* 2. Contradictory Evidence */}
            <div className="p-4 rounded-2xl bg-white/60 border border-white/80 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-purple-700 uppercase font-semibold block">
                {t.legitimizingFound}
              </span>
              <div className="text-xs text-[#0F172A] space-y-1.5 font-light">
                {challengeResult.legitimizingEvidenceFound.map((item, idx) => (
                  <p key={idx}>• {item}</p>
                ))}
              </div>
            </div>

            {/* 3. Updated Assessment */}
            <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono text-purple-800 uppercase font-semibold block">
                {t.updatedNuancedVerdict}
              </span>
              <p className="text-xs text-purple-950 leading-relaxed font-light">
                {challengeResult.updatedNuancedAssessment}
              </p>
            </div>

          </div>

          <div className="p-3.5 rounded-2xl bg-white/60 border border-white flex items-center justify-between text-xs text-[#475569] font-light">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-[#0F172A]">{t.auditMaintained}</span>
            </span>
            <button
              onClick={handleRunChallenge}
              className="text-purple-700 hover:text-purple-900 font-semibold transition-colors cursor-pointer"
            >
              {t.challengeButton}
            </button>
          </div>

        </div>
      )}

    </GlassTile>
  );
};
