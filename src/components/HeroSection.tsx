import React from 'react';
import { GlassTile } from './GlassTile';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';

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

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6">
      
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        
        {/* Centered Translucent Crystal Frosted Glass Hero Card */}
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

          {/* Heading: Large, light weight with glacial sapphire & cyan gradient */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#0F172A] tracking-tight leading-[1.2] text-balance">
              {t.heroTitlePart1}{' '}
              <span className="block font-semibold bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#2563EB] bg-clip-text text-transparent">
                {t.heroTitleVerify}
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#475569] font-light max-w-xl mx-auto leading-relaxed">
              {t.heroSubtitle}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onGetStarted}
              className="px-8 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#2563EB] hover:shadow-[0_12px_30px_rgba(2,132,199,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>{t.heroGetStarted}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={onSeeHowItWorks}
              className="px-6 py-3.5 rounded-2xl text-sm font-normal text-[#0F172A] hover:text-black bg-white/75 hover:bg-white border border-white transition-all flex items-center gap-1.5 cursor-pointer shadow-sm backdrop-blur-md"
            >
              <span>{t.heroSeeHowItWorks}</span>
              <ChevronRight className="w-4 h-4 text-[#475569]" />
            </button>
          </div>

        </GlassTile>

        {/* Floating Minimal Verification Card */}
        <div className="flex justify-center">
          <GlassTile
            variant="card"
            className="max-w-md w-full p-6 sm:p-7 text-left space-y-5 shadow-[0_22px_55px_-12px_rgba(186,215,240,0.45)] border border-white"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#0F172A]/[0.06]">
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#0284C7] font-semibold">
                {t.heroCardBadge}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
            </div>

            {/* Minimal Status: Large 4, Warning signals */}
            <div className="space-y-0.5">
              <div className="text-4xl font-light text-[#0F172A] font-heading">
                4
              </div>
              <div className="text-sm font-semibold text-[#0F172A]">
                {t.heroCardWarningSignals}
              </div>
              <p className="text-xs text-[#475569] font-light leading-relaxed">
                {t.heroCardSignalsDesc}
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

            {/* At the bottom: AI signals · Evidence · Verification */}
            <div className="pt-2 border-t border-[#0F172A]/[0.06] flex items-center justify-between text-xs text-[#475569] font-light">
              <span className="font-medium text-[#0F172A]">{t.heroCardAiSignals}</span>
              <span>·</span>
              <span className="font-medium text-[#0F172A]">{t.heroCardEvidence}</span>
              <span>·</span>
              <span className="font-semibold text-[#0284C7]">{t.heroCardVerification}</span>
            </div>
          </GlassTile>
        </div>

      </div>

    </section>
  );
};
