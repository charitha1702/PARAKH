import React from 'react';
import { User, VolumeX, Sparkles, LogOut, Lock } from 'lucide-react';
import { Language } from '../types/analysis';
import { UserProfile } from './AuthFlow';
import { TRANSLATIONS } from '../data/translations';
import { FloatingLanguageMenu } from './FloatingLanguageMenu';

interface NavbarProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  simpleMode: boolean;
  onToggleSimpleMode: () => void;
  onOpenPrivacy: () => void;
  onNavClick: (target: 'verify' | 'learn' | 'official' | 'about') => void;
  isSpeaking: boolean;
  onStopSpeaking: () => void;
  currentUser: UserProfile | null;
  onOpenAuth: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLanguage,
  onLanguageChange,
  simpleMode,
  onToggleSimpleMode,
  onOpenPrivacy,
  onNavClick,
  isSpeaking,
  onStopSpeaking,
  currentUser,
  onOpenAuth,
  onLogout
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-[40px] bg-white/[0.68] border-b border-white/[0.90] shadow-[0_1px_4px_rgba(186,215,240,0.3)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single element brand wordmark */}
        <button
          onClick={() => onNavClick('verify')}
          className="flex items-center gap-2.5 text-left group focus:outline-none rounded-xl px-1 py-1 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-white border border-white flex items-center justify-center shadow-[0_2px_12px_rgba(2,132,199,0.35)] group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#0284C7] stroke-[2.2]" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              <path strokeLinecap="round" d="M7 6h6a3.5 3.5 0 010 7H7V18" />
            </svg>
          </div>
          <span className="font-heading font-semibold tracking-wider text-lg text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
            {t.brandName}
          </span>
        </button>

        {/* Zone 2: 3 clean text navigation links fully localized */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#475569]">
          <button
            onClick={() => onNavClick('verify')}
            className="hover:text-[#0F172A] transition-colors py-1 focus:outline-none cursor-pointer"
          >
            {t.checkNav}
          </button>
          <button
            onClick={() => onNavClick('learn')}
            className="hover:text-[#0F172A] transition-colors py-1 focus:outline-none cursor-pointer"
          >
            {t.learnNav}
          </button>
          <button
            onClick={() => onNavClick('official')}
            className="hover:text-[#0F172A] transition-colors py-1 focus:outline-none cursor-pointer"
          >
            {t.evidenceNav}
          </button>
        </nav>

        {/* Zone 3: Controls & Persistent Floating Language Menu in top-right */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Audio Stop button if currently speaking */}
          {isSpeaking && (
            <button
              onClick={onStopSpeaking}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-light text-amber-900 bg-amber-100 border border-amber-300 rounded-2xl hover:bg-amber-200 transition-all animate-pulse cursor-pointer"
              title={t.stopAudio}
            >
              <VolumeX className="w-3.5 h-3.5 text-amber-700" />
              <span className="hidden sm:inline">{t.stopAudio}</span>
            </button>
          )}

          {/* Simple Mode Toggle */}
          <button
            onClick={onToggleSimpleMode}
            aria-pressed={simpleMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-light rounded-2xl border transition-all cursor-pointer ${
              simpleMode
                ? 'bg-sky-50 text-[#0284C7] border-sky-300 shadow-sm font-semibold'
                : 'bg-white/70 text-[#475569] border-white/90 hover:text-[#0F172A] hover:bg-white'
            }`}
            title={t.simpleMode}
          >
            <Sparkles className={`w-3.5 h-3.5 ${simpleMode ? 'text-[#0284C7]' : 'text-[#475569]'}`} />
            <span className="hidden lg:inline">{t.simpleMode}</span>
          </button>

          {/* User Profile / Auth State */}
          {currentUser ? (
            <div className="flex items-center gap-1.5">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/80 border border-white text-xs text-[#0F172A] font-light shadow-sm"
                title={currentUser.email}
              >
                <div className="w-4 h-4 rounded-full bg-sky-100 text-[#0284C7] flex items-center justify-center text-[10px] font-bold">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <span className="hidden sm:inline max-w-[100px] truncate">{currentUser.name}</span>
              </div>
              <button
                onClick={onLogout}
                className="p-1.5 rounded-2xl bg-white/70 hover:bg-white text-[#475569] hover:text-[#0F172A] border border-white transition-colors shadow-sm cursor-pointer"
                title={t.logoutCta}
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-light text-[#0F172A] bg-white/80 hover:bg-white border border-white transition-all cursor-pointer shadow-sm"
            >
              <User className="w-3.5 h-3.5 text-[#0284C7]" />
              <span className="hidden sm:inline">{t.loginCta}</span>
            </button>
          )}

          {/* Privacy Button */}
          <button
            onClick={onOpenPrivacy}
            className="p-1.5 rounded-2xl text-[#475569] hover:text-[#0F172A] bg-white/70 hover:bg-white border border-white transition-all shadow-sm cursor-pointer"
            title={t.privacyTooltip}
          >
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
          </button>

          {/* Persistent Floating Language Menu in top-right */}
          <FloatingLanguageMenu
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />

        </div>

      </div>
    </header>
  );
};
