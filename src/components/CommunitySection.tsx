import React, { useState } from 'react';
import { GlassTile } from './GlassTile';
import { 
  Users, 
  PlusCircle, 
  Paperclip, 
  ThumbsUp, 
  Sparkles,
  Languages,
  CheckCircle2
} from 'lucide-react';
import { 
  CommunityReport, 
  AiCommunitySummary, 
  CommunityEvidenceBadge, 
  Language 
} from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';
import { SectionAudioControl } from './SectionAudioControl';

interface CommunitySectionProps {
  reports: CommunityReport[];
  communitySummary: AiCommunitySummary;
  currentLanguage: Language;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  reports,
  communitySummary,
  currentLanguage
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const [localReports, setLocalReports] = useState<CommunityReport[]>(reports);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [newCity, setNewCity] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newEvidenceNote, setNewEvidenceNote] = useState('');
  const [encounteredPersonally, setEncounteredPersonally] = useState(true);
  const [challengedReportIds, setChallengedReportIds] = useState<Record<string, boolean>>({});
  const [showOriginalMap, setShowOriginalMap] = useState<Record<string, boolean>>({});

  const toggleShowOriginal = (id: string) => {
    setShowOriginalMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleChallenge = (id: string) => {
    setChallengedReportIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleUpvote = (id: string) => {
    setLocalReports(prev => prev.map(rep => {
      if (rep.id === id) {
        return { ...rep, upvotesCount: rep.upvotesCount + 1 };
      }
      return rep;
    }));
  };

  const handleSubmitNewReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDescription.trim()) return;

    const newReport: CommunityReport = {
      id: `rep-${Date.now()}`,
      timestamp: 'Just now',
      authorMasked: `Citizen (${newCity.trim() || 'India'})`,
      locationCity: newCity.trim() || 'India',
      encounteredPersonally,
      badges: [
        encounteredPersonally ? 'first_hand' : 'community_claim',
        ...(newEvidenceNote.trim() ? ['evidence_attached' as CommunityEvidenceBadge] : [])
      ],
      contentExcerpt: newDescription.slice(0, 80) + '...',
      userExperience: newDescription.trim(),
      evidenceNote: newEvidenceNote.trim() || undefined,
      challengesCount: 0,
      upvotesCount: 1
    };

    const updated = [newReport, ...localReports];
    setLocalReports(updated);

    try {
      localStorage.setItem('parakh_user_community_reports', JSON.stringify(updated.slice(0, 15)));
    } catch {
      // ignore
    }

    // Reset form
    setNewCity('');
    setNewDescription('');
    setNewEvidenceNote('');
    setIsSubmitModalOpen(false);
  };

  const renderBadge = (badge: CommunityEvidenceBadge) => {
    switch (badge) {
      case 'first_hand':
        return (
          <span className="text-[10px] font-mono bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-semibold">
            {t.communityFirstHandBadge || 'First-hand report'}
          </span>
        );
      case 'evidence_attached':
        return (
          <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
            <Paperclip className="w-2.5 h-2.5" />
            {t.communityEvidenceAttachedBadge || 'Evidence attached'}
          </span>
        );
      case 'officially_verified':
        return (
          <span className="text-[10px] font-mono bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded-full font-semibold">
            {t.communityOfficiallyVerifiedBadge || 'Officially verified'}
          </span>
        );
      case 'community_claim':
      default:
        return (
          <span className="text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 rounded-full">
            {t.communityClaimBadge || 'Community claim'}
          </span>
        );
    }
  };

  return (
    <section className="mt-12 mb-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200 font-semibold flex items-center gap-1.5">
              <Users className="w-3 h-3" />
              {t.communitySectionBadge || 'COMMUNITY EVIDENCE'}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            {t.communitySectionTitle || 'Citizen Encounters & Reports'}
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] font-light mt-1">
            {t.communitySectionSubtitle || 'Corroborating reports submitted by citizens across Bharat. Transparent distinction between first-hand reports and official records.'}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsSubmitModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50 text-[#0284C7] border border-sky-200 text-xs font-semibold shadow-xs transition-all cursor-pointer self-start sm:self-auto group"
        >
          <PlusCircle className="w-4 h-4 text-[#0284C7] group-hover:scale-110 transition-transform" />
          <span>{t.communitySubmitReport || 'Submit Community Report'}</span>
        </button>
      </div>

      <div className="space-y-6">

        {/* AI Community Summary Box */}
        {communitySummary && (
          <GlassTile variant="card" className="p-5 sm:p-6 bg-gradient-to-br from-white/90 via-sky-50/40 to-blue-50/30 border border-sky-100">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-sky-100 text-[#0284C7] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-sm font-bold text-[#0F172A]">
                  {t.communityAiSummaryTitle || 'AI Community Summary'}
                </h3>
                <span className="text-[10px] font-mono text-[#64748B] bg-white px-2 py-0.5 rounded-full border border-black/[0.05]">
                  {t.objectiveSynthesis || 'Objective Synthesis'}
                </span>
              </div>

              <SectionAudioControl
                sectionId="community_summary"
                textToSpeak={`${t.communityAiSummaryTitle}. ${communitySummary.summary}. ${t.recurringModusOperandi || 'Recurring Modus Operandi:'} ${communitySummary.commonPatterns.join('. ')}`}
                currentLanguage={currentLanguage}
                compact
              />
            </div>

            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed mb-4">
              {communitySummary.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-white/80 border border-slate-200">
                <span className="font-bold text-[#0F172A] block mb-1.5 text-[11px] uppercase tracking-wider">
                  {t.recurringModusOperandi || 'Recurring Modus Operandi:'}
                </span>
                <ul className="space-y-1 text-[#475569] text-[11px]">
                  {communitySummary.commonPatterns.map((pat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#0284C7]">•</span>
                      <span>{pat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-2xl bg-white/80 border border-slate-200">
                <span className="font-bold text-[#0F172A] block mb-1.5 text-[11px] uppercase tracking-wider">
                  {t.evidenceDiscrepanciesTitle || 'Identified Evidence Discrepancies:'}
                </span>
                <ul className="space-y-1 text-[#475569] text-[11px]">
                  {communitySummary.evidenceDiscrepancies.map((disc, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-600">⚠</span>
                      <span>{disc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-black/[0.05] text-[10px] text-[#64748B] font-light">
              {communitySummary.disclaimer || t.communityDisclaimer || 'This summary synthesizes citizen submissions without treating opinions as facts. Community reports provide pattern visibility, not definitive proof.'}
            </div>
          </GlassTile>
        )}

        {/* Community Reports Feed */}
        <div className="space-y-3.5">
          {localReports.map((report) => {
            const isChallenged = challengedReportIds[report.id];
            const isShowingOriginal = showOriginalMap[report.id];

            return (
              <GlassTile key={report.id} className="p-4 sm:p-5 text-left border border-white">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-[#0F172A]">
                      {report.authorMasked}
                    </span>
                    <span className="text-[10px] text-[#64748B] font-mono">
                      • {report.timestamp}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {report.badges.map((b, idx) => (
                        <React.Fragment key={idx}>{renderBadge(b)}</React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* View in selected language / original toggle */}
                    <button
                      type="button"
                      onClick={() => toggleShowOriginal(report.id)}
                      className="text-[10px] text-[#0284C7] hover:underline flex items-center gap-1 font-mono cursor-pointer px-2 py-0.5 rounded-lg bg-sky-50 border border-sky-100"
                    >
                      <Languages className="w-3 h-3" />
                      <span>{isShowingOriginal ? t.viewInSelectedLang : t.viewOriginal}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleUpvote(report.id)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#475569] text-[11px] font-medium transition-colors cursor-pointer"
                      title={t.communityIEncounteredThis || 'Confirm encountering this pattern'}
                    >
                      <ThumbsUp className="w-3 h-3 text-[#0284C7]" />
                      <span>{report.upvotesCount}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleChallenge(report.id)}
                      className={`text-[11px] px-2.5 py-1 rounded-xl border transition-colors cursor-pointer font-medium ${
                        isChallenged
                          ? 'bg-rose-50 text-rose-800 border-rose-200'
                          : 'bg-white hover:bg-slate-50 text-[#64748B] border-slate-200'
                      }`}
                    >
                      {isChallenged ? (t.claimChallengedTag || 'Claim Challenged') : (t.challengeClaimButton || 'Challenge Claim')}
                    </button>
                  </div>
                </div>

                {/* Report Content */}
                <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed mb-2.5 font-light">
                  {report.userExperience}
                </p>

                {/* Attached Evidence & Verified Fact */}
                <div className="flex flex-wrap gap-2 text-[11px] pt-1">
                  {report.evidenceNote && (
                    <div className="px-2.5 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                      <Paperclip className="w-3 h-3 text-emerald-600" />
                      <span>{t.evidenceNotePrefix || 'Evidence note:'} {report.evidenceNote}</span>
                    </div>
                  )}

                  {report.verifiedFact && (
                    <div className="px-2.5 py-1 rounded-xl bg-purple-50 text-purple-800 border border-purple-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-purple-600" />
                      <span>{t.regulatoryCheckPrefix || 'Regulatory check:'} {report.verifiedFact}</span>
                    </div>
                  )}
                </div>

                {isChallenged && (
                  <div className="mt-3 p-3 rounded-xl bg-rose-50/80 border border-rose-200 text-xs text-rose-900">
                    <span className="font-bold block mb-1">{t.claimChallengedTag || 'Challenge Registered'}:</span>
                    {t.challengeRegisteredNotice || 'A community dispute has been logged against this claim. PARAKH marks contested testimonies to prevent mob consensus from being confused with official verification.'}
                  </div>
                )}
              </GlassTile>
            );
          })}
        </div>

      </div>

      {/* Submit Report Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white/98 backdrop-blur-[40px] rounded-3xl border border-white p-5 sm:p-7 shadow-[0_25px_60px_rgba(15,23,42,0.25)]">
            
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] mb-4">
              <div>
                <h3 className="text-base font-bold text-[#0F172A]">
                  {t.communityReportModalTitle || 'Report Suspicious Financial Content'}
                </h3>
                <p className="text-xs text-[#64748B]">
                  Your report helps alert other citizens across India.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-[#475569] flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitNewReport} className="space-y-4">
              
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                  {t.communityReportCityLabel || 'Your City / State'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bengaluru, KA or Jaipur, RJ"
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0284C7] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                  {t.communityReportDescLabel || 'What happened when you encountered this?'}
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe the claim, promise of return, or contact method..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0284C7] focus:bg-white resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                  {t.communityReportEvidenceLabel || 'Evidence attached note (UPI VPA, phone number, URL)'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Given UPI: ramesh123@okaxis, Telegram channel @StockVIP"
                  value={newEvidenceNote}
                  onChange={(e) => setNewEvidenceNote(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0284C7] focus:bg-white"
                />
              </div>

              {/* Personal encounter checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="personalEncounter"
                  checked={encounteredPersonally}
                  onChange={(e) => setEncounteredPersonally(e.target.checked)}
                  className="rounded text-[#0284C7] focus:ring-[#0284C7] cursor-pointer"
                />
                <label htmlFor="personalEncounter" className="text-xs text-[#0F172A] cursor-pointer select-none">
                  {t.communityIEncounteredThis || 'I personally encountered this content (First-hand report)'}
                </label>
              </div>

              <div className="pt-2 text-[10px] text-[#64748B] bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                Privacy Notice: Do not paste your personal passwords, OTPs, or bank account numbers. Reports are shared anonymously with city-level masking.
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitModalOpen(false)}
                  className="px-4 py-2 text-xs rounded-xl text-[#475569] hover:bg-slate-100 cursor-pointer"
                >
                  {t.communityReportCancelAction || 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold shadow-xs cursor-pointer"
                >
                  {t.communityReportSubmitAction || 'Publish to Community'}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </section>
  );
};
