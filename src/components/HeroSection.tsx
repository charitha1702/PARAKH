import React from 'react';
import { GlassTile } from './GlassTile';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';
import { LANDING_TRANSLATIONS } from '../data/translations/landingTranslations';

interface HeroSectionProps {
  currentLanguage: Language;
  onGetStarted: () => void;
  onSeeHowItWorks: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLanguage,
  onGetStarted,
  onSeeHowItWorks
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const lt = LANDING_TRANSLATIONS[currentLanguage] || LANDING_TRANSLATIONS.en;

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-8 pb-20 px-4 sm:px-6">
      
      <div className="max-w-4xl mx-auto space-y-16 relative z-10 w-full text-center">
        
        {/* ================================================== */}
        {/* 1. HERO */}
        {/* ================================================== */}
        <GlassTile variant="surface" glow className="p-8 sm:p-14 space-y-8 max-w-3xl mx-auto shadow-[0_28px_70px_-15px_rgba(186,215,240,0.6)]">
          
          {/* Brand Wordmark & Logo */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-13 h-13 rounded-2xl bg-white/95 border border-white flex items-center justify-center shadow-[0_8px_22px_rgba(14,165,233,0.35),inset_0_1px_2px_rgba(255,255,255,1)]">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0284C7] stroke-[2.2]" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="8" strokeOpacity="0.25" stroke="#0284C7" />
                <path strokeLinecap="round" d="M7 6h6a3.5 3.5 0 010 7H7V18" />
              </svg>
            </div>
            
            <span className="font-heading font-semibold tracking-[0.25em] text-xs uppercase text-[#0284C7]">
              {t.brandName}
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#0F172A] tracking-tight leading-[1.2] text-balance">
              {lt.heroTitlePart1}{' '}
              <span className="block font-semibold bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#2563EB] bg-clip-text text-transparent">
                {lt.heroTitleVerify}
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#475569] font-light max-w-xl mx-auto leading-relaxed">
              {lt.heroSubtitle}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onGetStarted}
              className="px-8 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#2563EB] hover:shadow-[0_12px_30px_rgba(2,132,199,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>{lt.heroGetStarted}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={onSeeHowItWorks}
              className="px-6 py-3.5 rounded-2xl text-sm font-normal text-[#0F172A] hover:text-black bg-white/75 hover:bg-white border border-white transition-all flex items-center gap-1.5 cursor-pointer shadow-sm backdrop-blur-md"
            >
              <span>{lt.heroSeeHowItWorks}</span>
              <ChevronRight className="w-4 h-4 text-[#475569]" />
            </button>
          </div>

          {/* ================================================== */}
          {/* 2. HERO SUPPORTING MICRO-COPY */}
          {/* ================================================== */}
          <div className="pt-6 border-t border-[#0F172A]/[0.06] text-center max-w-lg mx-auto space-y-2">
            <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
              {lt.microCopy1}
            </p>
            <p className="text-xs sm:text-sm font-medium text-[#0F172A]">
              {lt.microCopy2}{' '}
              <span className="text-[#0284C7] font-semibold">{lt.microCopyQuestion}</span>
            </p>
          </div>

        </GlassTile>

        {/* ================================================== */}
        {/* 3. TRUST CHAIN VISUAL CARD */}
        {/* ================================================== */}
        <div className="flex justify-center">
          <GlassTile
            variant="card"
            className="max-w-xl w-full p-6 sm:p-7 text-left space-y-5 shadow-[0_22px_55px_-12px_rgba(186,215,240,0.45)] border border-white"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#0F172A]/[0.06]">
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#0284C7] font-semibold">
                {lt.trustChainCardBadge}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
            </div>

            <div className="space-y-1.5">
              <div className="text-sm sm:text-base font-semibold text-[#0F172A] tracking-tight">
                {lt.trustChainCardHeading}
              </div>
              <p className="text-xs text-[#475569] font-light leading-relaxed">
                {lt.trustChainCardDesc}
              </p>
            </div>

            {/* Liquid crystal visualization curve matching the image caustics */}
            <div className="relative h-18 w-full overflow-hidden rounded-xl bg-white/50 p-2 border border-white">
              <svg className="w-full h-full" viewBox="0 0 300 60" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="crystalCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
                    <stop offset="45%" stopColor="#0284C7" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="crystalAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path d="M 0 50 Q 80 15, 150 28 T 300 12 L 300 60 L 0 60 Z" fill="url(#crystalAreaGrad)" />
                <path d="M 0 50 Q 80 15, 150 28 T 300 12" fill="none" stroke="url(#crystalCurveGrad)" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* At the bottom: Trace · Explain · Protect */}
            <div className="pt-2 border-t border-[#0F172A]/[0.06] flex items-center justify-between text-xs text-[#475569] font-light">
              <span className="font-medium text-[#0F172A]">{lt.trustChainCardTrace}</span>
              <span>·</span>
              <span className="font-medium text-[#0F172A]">{lt.trustChainCardExplain}</span>
              <span>·</span>
              <span className="font-semibold text-[#0284C7]">{lt.trustChainCardProtect}</span>
            </div>
          </GlassTile>
        </div>

        {/* ================================================== */}
        {/* 4. SECTION: THE REAL PROBLEM */}
        {/* ================================================== */}
        <GlassTile variant="card" className="p-8 sm:p-10 text-left space-y-6 shadow-sm border border-white">
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#0284C7] font-semibold block">
              {lt.problemBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0F172A] tracking-tight leading-snug">
              {lt.problemTitlePart1}<br />
              <span className="font-semibold text-[#0284C7]">{lt.problemTitlePart2}</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] font-light leading-relaxed">
            {lt.problemSubtitle}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#0F172A] block uppercase tracking-wider">{lt.problemItCanBegin}</span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1">
              {[
                lt.problemItemLogo,
                lt.problemItemScreenshot,
                lt.problemItemName,
                lt.problemItemVoice,
                lt.problemItemOpportunity
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/70 border border-white shadow-xs text-xs text-[#0F172A] font-medium text-center flex items-center justify-center">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-[#0F172A] font-light pt-1">
            {lt.problemConclusion}
          </p>
        </GlassTile>

        {/* ================================================== */}
        {/* 5. SECTION: WHAT PARAKH ACTUALLY DOES */}
        {/* ================================================== */}
        <div className="space-y-6 text-left">
          <div className="space-y-2 text-center max-w-xl mx-auto">
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#0284C7] font-semibold block">
              {lt.doesBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0F172A] tracking-tight">
              {lt.doesTitlePart1} <span className="font-semibold bg-gradient-to-r from-[#0284C7] to-[#2563EB] bg-clip-text text-transparent">{lt.doesTitlePart2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {/* SUBMIT */}
            <GlassTile variant="subtle" className="p-5 space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#0284C7] uppercase block tracking-wider">{lt.submitHeading}</span>
              <ul className="text-xs text-[#475569] space-y-1.5 font-light">
                {lt.submitList.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </GlassTile>

            {/* DETECT */}
            <GlassTile variant="subtle" className="p-5 space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#0284C7] uppercase block tracking-wider">{lt.detectHeading}</span>
              <ul className="text-xs text-[#475569] space-y-1.5 font-light">
                {lt.detectList.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </GlassTile>

            {/* TRACE */}
            <GlassTile variant="subtle" className="p-5 space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#0284C7] uppercase block tracking-wider">{lt.traceHeading}</span>
              <ul className="text-xs text-[#475569] space-y-1.5 font-light">
                {lt.traceList.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </GlassTile>

            {/* VERIFY */}
            <GlassTile variant="subtle" className="p-5 space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#0284C7] uppercase block tracking-wider">{lt.verifyHeading}</span>
              <ul className="text-xs text-[#475569] space-y-1.5 font-light">
                {lt.verifyList.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </GlassTile>

            {/* EXPLAIN */}
            <GlassTile variant="subtle" className="p-5 space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#0284C7] uppercase block tracking-wider">{lt.explainHeading}</span>
              <ul className="text-xs text-[#475569] space-y-1.5 font-light">
                {lt.explainList.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </GlassTile>
          </div>
        </div>

        {/* ================================================== */}
        {/* 6. SECTION: SIGNATURE FEATURE */}
        {/* ================================================== */}
        <GlassTile variant="card" className="p-8 sm:p-10 text-left space-y-6 shadow-sm border border-white">
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#0284C7] font-semibold block">
              {lt.signatureBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0F172A] tracking-tight">
              {lt.signatureTitle} <span className="font-semibold text-rose-600">{lt.signatureHighlight}</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] font-light leading-relaxed">
            {lt.signatureP1}
          </p>
          <p className="text-sm sm:text-base text-[#475569] font-light leading-relaxed">
            {lt.signatureP2}
          </p>

          {/* Chain flow: ARROWS POINT RIGHT SIDE */}
          <div className="p-4 rounded-2xl bg-white/60 border border-white flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-semibold text-[#0F172A]">
            <span className="px-3 py-1.5 rounded-lg bg-sky-50 text-[#0284C7] border border-sky-100">{lt.chainClaim}</span>
            <span className="text-[#94A3B8]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-sky-50 text-[#0284C7] border border-sky-100">{lt.chainEntity}</span>
            <span className="text-[#94A3B8]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-sky-50 text-[#0284C7] border border-sky-100">{lt.chainWebsite}</span>
            <span className="text-[#94A3B8]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-sky-50 text-[#0284C7] border border-sky-100">{lt.chainContact}</span>
            <span className="text-[#94A3B8]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 border border-amber-200">{lt.chainPayment}</span>
            <span className="text-[#94A3B8]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 border border-rose-200">{lt.chainEvidence}</span>
          </div>

          <p className="text-sm text-[#475569] font-light leading-relaxed">
            {lt.signatureP3}
          </p>

          <div>
            <button
              onClick={onSeeHowItWorks}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] tracking-wider uppercase transition-colors cursor-pointer"
            >
              <span>{lt.signatureCta}</span>
            </button>
          </div>
        </GlassTile>

        {/* ================================================== */}
        {/* 7. SECTION: EXPLAINABILITY */}
        {/* ================================================== */}
        <GlassTile variant="card" className="p-8 sm:p-10 text-left space-y-6 shadow-sm border border-white">
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#0284C7] font-semibold block">
              {lt.explainBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0F172A] tracking-tight">
              {lt.explainTitle}
            </h2>
            <div className="space-y-1 pt-1">
              <p className="text-sm sm:text-base text-[#475569] font-light">
                {lt.explainAsk}
              </p>
              <p className="text-base sm:text-lg font-semibold text-[#0F172A]">
                {lt.explainQuote}
              </p>
              <p className="text-xs sm:text-sm text-[#475569] font-light">
                {lt.explainFollow}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/70 border border-white text-xs font-mono text-[#475569] flex flex-wrap items-center gap-2">
            <span>{lt.explainFlowClaim}</span>
            <span className="text-[#94A3B8]">→</span>
            <span>{lt.explainFlowSource}</span>
            <span className="text-[#94A3B8]">→</span>
            <span>{lt.explainFlowCheck}</span>
            <span className="text-[#94A3B8]">→</span>
            <span>{lt.explainFlowResult}</span>
            <span className="text-[#94A3B8]">→</span>
            <span className="font-semibold text-[#0284C7]">{lt.explainFlowExplanation}</span>
          </div>

          <div className="space-y-2.5 pt-1">
            <span className="text-xs font-semibold text-[#0F172A] block uppercase tracking-wider">{lt.separateWhatIs}</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs font-medium">
              <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-900">
                {lt.separateOfficiallyVerified}
              </div>
              <div className="p-3.5 rounded-xl bg-sky-50/80 border border-sky-200 text-sky-900">
                {lt.separateReliableEvidence}
              </div>
              <div className="p-3.5 rounded-xl bg-indigo-50/80 border border-indigo-200 text-indigo-900">
                {lt.separateCommunityReported}
              </div>
              <div className="p-3.5 rounded-xl bg-purple-50/80 border border-purple-200 text-purple-900">
                {lt.separateAiInferred}
              </div>
              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 sm:col-span-2 lg:col-span-2">
                {lt.separateUnknown}
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] italic pt-1 border-t border-[#0F172A]/[0.06]">
            {lt.explainDisclaimer}
          </p>
        </GlassTile>

        {/* ================================================== */}
        {/* 8. SECTION: SCAM DNA */}
        {/* ================================================== */}
        <GlassTile variant="card" className="p-8 sm:p-10 text-left space-y-6 shadow-sm border border-white">
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#0284C7] font-semibold block">
              {lt.scamDnaBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0F172A] tracking-tight leading-snug">
              {lt.scamDnaTitle1}<br />
              <span className="font-semibold bg-gradient-to-r from-[#0284C7] to-[#2563EB] bg-clip-text text-transparent">
                {lt.scamDnaTitle2}
              </span>
            </h2>
            <p className="text-sm text-[#475569] font-light leading-relaxed">
              {lt.scamDnaDesc}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {lt.tacticsList.map((tactic, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200 text-rose-900 text-xs font-semibold text-center">
                {tactic}
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#475569] font-light space-y-1">
            <span className="font-semibold text-[#0F172A] block">{lt.notFakeScore}</span>
            <p>{lt.patternsFound}</p>
          </div>
        </GlassTile>

        {/* ================================================== */}
        {/* 9. SECTION: CHALLENGE */}
        {/* ================================================== */}
        <GlassTile variant="card" className="p-8 sm:p-10 text-left space-y-6 shadow-sm border border-white">
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#0284C7] font-semibold block">
              {lt.challengeBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0F172A] tracking-tight leading-snug">
              {lt.challengeTitle1}<br />
              <span className="font-semibold text-[#0284C7]">{lt.challengeTitle2}</span>
            </h2>
          </div>

          <div className="space-y-2 text-sm sm:text-base text-[#475569] font-light leading-relaxed">
            <p>{lt.challengeP1}</p>
            <p>{lt.challengeP2}</p>
            <p className="text-xs sm:text-sm text-[#0F172A] font-normal pt-1">
              {lt.challengeP3}
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <span className="text-xs font-semibold text-[#0F172A] block uppercase tracking-wider">{lt.possibleStates}</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold text-center">
                {lt.stateContradictoryFound}
              </div>
              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-center">
                {lt.stateNoContradiction}
              </div>
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-semibold text-center">
                {lt.stateInconclusive}
              </div>
            </div>
          </div>
        </GlassTile>

        {/* ================================================== */}
        {/* 10. SECTION: COMMUNITY */}
        {/* ================================================== */}
        <GlassTile variant="card" className="p-8 sm:p-10 text-left space-y-6 shadow-sm border border-white">
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#0284C7] font-semibold block">
              {lt.communityBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0F172A] tracking-tight leading-snug">
              {lt.communityTitle1}<br />
              <span className="font-semibold text-[#0284C7]">{lt.communityTitle2}</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] font-light leading-relaxed">
            {lt.communityP1}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#0F172A] block uppercase tracking-wider">
              {lt.communityLooksAcross}
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {lt.communityPatterns.map((pattern, idx) => (
                <span key={idx} className="px-3.5 py-1.5 rounded-lg bg-sky-50 text-[#0284C7] border border-sky-100 text-xs font-medium">
                  {pattern}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] font-light">
            {lt.communityEmergingNote}
          </p>

          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 font-light">
            <strong className="font-semibold text-amber-950">{lt.communityMicrocopyLabel} </strong>
            {lt.communityMicrocopyText}
          </div>
        </GlassTile>

        {/* ================================================== */}
        {/* 11. SECTION: BHARAT */}
        {/* ================================================== */}
        <GlassTile variant="card" className="p-8 sm:p-10 text-left space-y-6 shadow-sm border border-white">
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#0284C7] font-semibold block">
              {lt.bharatBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0F172A] tracking-tight leading-snug">
              {lt.bharatTitlePart1} <span className="font-semibold bg-gradient-to-r from-[#0284C7] to-[#2563EB] bg-clip-text text-transparent">{lt.bharatTitlePart2}</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] font-light leading-relaxed">
            {lt.bharatP1}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#0F172A] block uppercase tracking-wider">{lt.bharatLanguagesLabel}</span>
            <div className="p-4 rounded-xl bg-white/70 border border-white font-medium text-xs sm:text-sm text-[#0F172A] leading-relaxed shadow-xs">
              {lt.bharatLanguageList}
            </div>
          </div>

          <div className="space-y-1 text-xs text-[#475569] font-light pt-1">
            <span className="font-semibold text-[#0F172A] block">{lt.bharatAppliesTo}</span>
            <p>{lt.bharatAspects}</p>
            <p className="text-[#0284C7] font-semibold pt-1">{lt.bharatNotJustButtons}</p>
          </div>
        </GlassTile>

        {/* ================================================== */}
        {/* 12. SECTION: VOICE / SIMPLE MODE */}
        {/* ================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
          {/* VOICE */}
          <GlassTile variant="card" className="p-6 sm:p-8 space-y-4 shadow-sm border border-white">
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#0284C7] font-semibold block">
              {lt.voiceBadge}
            </span>
            <h3 className="text-xl sm:text-2xl font-light text-[#0F172A] tracking-tight">
              {lt.voiceTitlePart1}<br />
              <span className="font-semibold text-[#0284C7]">{lt.voiceTitlePart2}</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
              {lt.voiceDesc}
            </p>
          </GlassTile>

          {/* SIMPLE MODE */}
          <GlassTile variant="card" className="p-6 sm:p-8 space-y-4 shadow-sm border border-white">
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#0284C7] font-semibold block">
              {lt.simpleModeBadge}
            </span>
            <h3 className="text-xl sm:text-2xl font-light text-[#0F172A] tracking-tight">
              {lt.simpleModeTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
              {lt.simpleModeDesc}
            </p>
            <p className="text-xs text-[#0F172A] font-light pt-2 border-t border-[#0F172A]/[0.06]">
              {lt.simpleModeNote}
            </p>
          </GlassTile>
        </div>

        {/* ================================================== */}
        {/* 13. SECTION: SAFETY */}
        {/* ================================================== */}
        <GlassTile variant="card" className="p-8 sm:p-10 text-left space-y-6 shadow-sm border border-white">
          <div className="space-y-2">
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#0284C7] font-semibold block">
              {lt.safetyBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0F172A] tracking-tight leading-snug">
              {lt.safetyTitle}
            </h2>
            <p className="text-base sm:text-lg font-semibold text-[#0284C7]">
              {lt.safetySubtitle}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#0F172A] space-y-2 font-light">
            <p className="font-semibold text-[#0F172A]">{lt.safetyNoRecommendations}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#475569]">
              {lt.safetyList.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <span className="text-sm sm:text-base font-semibold tracking-wider text-[#0F172A] font-mono">
              {lt.safetyMantra}
            </span>
          </div>
        </GlassTile>

        {/* ================================================== */}
        {/* 14. FINAL SECTION */}
        {/* ================================================== */}
        <GlassTile variant="surface" glow className="p-8 sm:p-14 text-center space-y-8 max-w-3xl mx-auto shadow-[0_28px_70px_-15px_rgba(186,215,240,0.6)]">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-light text-[#0F172A] tracking-tight leading-tight">
              {lt.finalTitlePart1}<br />
              <span className="font-semibold bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#2563EB] bg-clip-text text-transparent">
                {lt.finalTitlePart2}
              </span>
            </h2>

            <div className="text-xs sm:text-sm text-[#475569] font-light space-y-1 pt-2">
              <p>{lt.finalMicroCopy}</p>
            </div>
          </div>

          <div className="space-y-1 pt-1">
            <span className="font-heading font-bold text-2xl uppercase tracking-wider text-[#0F172A] block">
              {lt.finalBrandName}
            </span>
            <span className="text-sm sm:text-base font-semibold text-[#0284C7] block tracking-wide">
              {lt.finalTagline}
            </span>
          </div>

          {/* Action Buttons: Keep existing button design and functionality */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onGetStarted}
              className="px-8 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#2563EB] hover:shadow-[0_12px_30px_rgba(2,132,199,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>{lt.heroGetStarted}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={onSeeHowItWorks}
              className="px-6 py-3.5 rounded-2xl text-sm font-normal text-[#0F172A] hover:text-black bg-white/75 hover:bg-white border border-white transition-all flex items-center gap-1.5 cursor-pointer shadow-sm backdrop-blur-md"
            >
              <span>{lt.heroSeeHowItWorks}</span>
              <ChevronRight className="w-4 h-4 text-[#475569]" />
            </button>
          </div>
        </GlassTile>

      </div>

    </section>
  );
};
