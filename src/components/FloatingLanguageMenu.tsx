import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { Language } from '../types/analysis';

export interface FloatingLanguageMenuProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  className?: string;
}

export interface LanguageOption {
  code: Language;
  nativeName: string;
  englishName: string;
  script: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    nativeName: 'English',
    englishName: 'English',
    script: 'Latin'
  },
  {
    code: 'hi',
    nativeName: 'हिन्दी',
    englishName: 'Hindi',
    script: 'Devanagari'
  },
  {
    code: 'kn',
    nativeName: 'ಕನ್ನಡ',
    englishName: 'Kannada',
    script: 'Kannada'
  },
  {
    code: 'te',
    nativeName: 'తెలుగు',
    englishName: 'Telugu',
    script: 'Telugu'
  }
];

export const FloatingLanguageMenu: React.FC<FloatingLanguageMenuProps> = ({
  currentLanguage,
  onLanguageChange,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Current active language info
  const activeLang = SUPPORTED_LANGUAGES.find(l => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    onLanguageChange(code);
    try {
      localStorage.setItem('parakh_preferred_language', code);
    } catch {
      // ignore
    }
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} className={`relative inline-block text-left ${className}`}>
      
      {/* Floating trigger pill */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`group flex items-center gap-2 px-3.5 py-1.5 rounded-2xl text-xs font-medium transition-all duration-200 cursor-pointer shadow-sm border ${
          isOpen
            ? 'bg-white text-[#0F172A] border-[#0284C7] ring-2 ring-[#0284C7]/20 shadow-md'
            : 'bg-white/80 hover:bg-white text-[#0F172A] border-white/95 hover:border-sky-200'
        }`}
        title={`Current Language: ${activeLang.nativeName} (${activeLang.englishName})`}
      >
        {/* Globe icon */}
        <div className="w-5 h-5 rounded-lg bg-sky-50 text-[#0284C7] flex items-center justify-center border border-sky-100 group-hover:scale-105 transition-transform">
          <Globe className="w-3.5 h-3.5 stroke-[2.2]" />
        </div>

        {/* Native name display */}
        <div className="flex items-baseline gap-1.5">
          <span className="font-semibold text-xs text-[#0F172A] tracking-wide">
            {activeLang.nativeName}
          </span>
          {activeLang.code !== 'en' && (
            <span className="hidden sm:inline text-[10px] text-[#64748B] font-mono">
              ({activeLang.englishName})
            </span>
          )}
        </div>

        {/* Dropdown indicator */}
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#64748B] transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#0284C7]' : 'group-hover:text-[#0F172A]'
          }`}
        />
      </button>

      {/* Floating Menu Dropdown Panel */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-2 w-56 sm:w-64 rounded-3xl bg-white/95 backdrop-blur-[40px] border border-white p-2 shadow-[0_20px_50px_rgba(15,23,42,0.15),0_1px_3px_rgba(0,0,0,0.05)] z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header Tag */}
          <div className="px-3.5 py-2 border-b border-black/[0.05] flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] font-semibold">
              Select Language / ಭಾಷೆ
            </span>
            <span className="text-[10px] font-mono text-[#64748B] bg-slate-100 px-2 py-0.5 rounded-full">
              4 Languages
            </span>
          </div>

          {/* List of native languages */}
          <div className="py-1 space-y-1">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = currentLanguage === lang.code;

              return (
                <button
                  key={lang.code}
                  role="menuitem"
                  type="button"
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-sky-50 to-blue-50/60 border border-sky-200 text-[#0284C7] shadow-xs'
                      : 'hover:bg-slate-50 text-[#0F172A] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Visual language script badge */}
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#0284C7] to-[#2563EB] text-white shadow-xs'
                          : 'bg-slate-100 text-[#475569]'
                      }`}
                    >
                      {lang.code.toUpperCase()}
                    </div>

                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className={`text-sm tracking-wide ${isSelected ? 'font-bold text-[#0F172A]' : 'font-medium'}`}>
                          {lang.nativeName}
                        </span>
                        {lang.code !== 'en' && (
                          <span className="text-[11px] text-[#64748B]">
                            {lang.englishName}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-[#64748B] block font-light">
                        {lang.code === 'en' && 'Default interface'}
                        {lang.code === 'hi' && 'संपूर्ण इंटरफेस हिन्दी में'}
                        {lang.code === 'kn' && 'ಸಂಪೂರ್ಣ ಇಂಟರ್‌ಫೇಸ್ ಕನ್ನಡದಲ್ಲಿ'}
                        {lang.code === 'te' && 'పూర్తి ఇంటర్‌ఫేస్ తెలుగులో'}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer note: extensible architecture */}
          <div className="pt-2 px-3 pb-1 border-t border-black/[0.05] text-[10px] text-[#64748B] text-center font-light">
            Tamil, Malayalam, Marathi & Bengali coming soon
          </div>
        </div>
      )}

    </div>
  );
};
