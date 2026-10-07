import React from 'react';
import { Lock } from 'lucide-react';
import { Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  currentLanguage: Language;
  onNavClick: (target: 'verify' | 'learn' | 'official' | 'about') => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLanguage,
  onNavClick,
  onOpenPrivacy
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const aboutLabel: Partial<Record<Language, string>> & { en: string } = {
    en: 'About PARAKH',
    kn: 'PARAKH ಕುರಿತು',
    hi: 'PARAKH के बारे में',
    te: 'PARAKH గురించి'
  };

  const privacyLabel: Partial<Record<Language, string>> & { en: string } = {
    en: 'Privacy Policy',
    kn: 'ಗೌಪ್ಯತಾ ನೀತಿ',
    hi: 'गोपनीयता नीति',
    te: 'గోప్యతా విధానం'
  };

  return (
    <footer className="w-full border-t border-white/80 bg-white/50 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8 mt-20 shadow-[0_-1px_4px_rgba(186,215,240,0.2)]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-black/[0.05]">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center text-[#0284C7]">
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[2.2]" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  <path strokeLinecap="round" d="M7 6h6a3.5 3.5 0 010 7H7V18" />
                </svg>
              </div>
              <span className="font-heading font-semibold tracking-wider text-lg text-[#0F172A]">
                {t.brandName}
              </span>
            </div>
            <p className="text-xs text-[#475569] max-w-sm font-light">
              {t.heroTitlePart1} {t.heroTitleVerify} — {t.heroSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#475569]">
            <button
              onClick={() => onNavClick('verify')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              {t.checkNav}
            </button>
            <button
              onClick={() => onNavClick('learn')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              {t.learnNav}
            </button>
            <button
              onClick={() => onNavClick('official')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              {t.evidenceNav}
            </button>
            <button
              onClick={() => onNavClick('about')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              {aboutLabel[currentLanguage] || aboutLabel.en}
            </button>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#0F172A] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Lock className="w-3 h-3 text-emerald-600" />
              <span>{privacyLabel[currentLanguage] || privacyLabel.en}</span>
            </button>
          </div>

        </div>

        {/* Regulatory Disclaimer & Safety Notice */}
        <div className="text-[11px] text-[#475569] space-y-2 leading-relaxed font-light">
          <p>
            <strong className="text-[#0F172A] font-medium">{t.footerStatutoryNoticeTitle}:</strong> {t.footerStatutoryNoticeText}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-[#475569]/80 font-light">
            <span>© {new Date().getFullYear()} {t.brandName}. {t.footerCopyright}</span>
            <span className="font-mono text-[#0284C7]">{t.footerHelplineText}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
