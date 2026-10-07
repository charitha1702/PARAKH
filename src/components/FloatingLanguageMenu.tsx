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
  tagline: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    nativeName: 'English',
    englishName: 'English',
    script: 'Latin',
    tagline: 'Default interface'
  },
  {
    code: 'hi',
    nativeName: 'हिन्दी',
    englishName: 'Hindi',
    script: 'Devanagari',
    tagline: 'संपूर्ण इंटरफेस हिन्दी में'
  },
  {
    code: 'kn',
    nativeName: 'ಕನ್ನಡ',
    englishName: 'Kannada',
    script: 'Kannada',
    tagline: 'ಸಂಪೂರ್ಣ ಇಂಟರ್‌ಫೇಸ್ ಕನ್ನಡದಲ್ಲಿ'
  },
  {
    code: 'te',
    nativeName: 'తెలుగు',
    englishName: 'Telugu',
    script: 'Telugu',
    tagline: 'పూర్తి ఇంటర్‌ఫేస్ తెలుగులో'
  },
  {
    code: 'ta',
    nativeName: 'தமிழ்',
    englishName: 'Tamil',
    script: 'Tamil',
    tagline: 'முழுமையான இடைமுகம் தமிழில்'
  },
  {
    code: 'ml',
    nativeName: 'മലയാളം',
    englishName: 'Malayalam',
    script: 'Malayalam',
    tagline: 'പൂർണ്ണ ഇന്റർഫേസ് മലയാളത്തിൽ'
  },
  {
    code: 'mr',
    nativeName: 'मराठी',
    englishName: 'Marathi',
    script: 'Devanagari',
    tagline: 'संपूर्ण इंटरफेस मराठीत'
  },
  {
    code: 'bn',
    nativeName: 'বাংলা',
    englishName: 'Bengali',
    script: 'Bengali',
    tagline: 'সম্পূর্ণ ইন্টারফেস বাংলায়'
  },
  {
    code: 'gu',
    nativeName: 'ગુજરાતી',
    englishName: 'Gujarati',
    script: 'Gujarati',
    tagline: 'સંપૂર્ણ ઇન્ટરફેસ ગુજરાતીમાં'
  },
  {
    code: 'pa',
    nativeName: 'ਪੰਜਾਬੀ',
    englishName: 'Punjabi',
    script: 'Gurmukhi',
    tagline: 'ਪੂਰਾ ਇੰਟਰਫੇਸ ਪੰਜਾਬੀ ਵਿੱਚ'
  },
  {
    code: 'or',
    nativeName: 'ଓଡ଼ିଆ',
    englishName: 'Odia',
    script: 'Odia',
    tagline: 'ସମ୍ପୂର୍ଣ୍ଣ ଇଣ୍ଟରଫେସ୍ ଓଡ଼ିଆରେ'
  },
  {
    code: 'ur',
    nativeName: 'اردو',
    englishName: 'Urdu',
    script: 'Perso-Arabic',
    tagline: 'مکمل انٹرفیس اردو میں'
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
        className={`group flex items-center gap-2 px-3 py-1.5 rounded-2xl text-xs font-medium transition-all duration-200 cursor-pointer shadow-sm border ${
          isOpen
            ? 'bg-white text-[#0F172A] border-[#0284C7] ring-2 ring-[#0284C7]/20 shadow-md'
            : 'bg-white/80 hover:bg-white text-[#0F172A] border-white/95 hover:border-sky-200'
        }`}
        title={`Current Language: ${activeLang.nativeName} (${activeLang.englishName})`}
      >
        {/* Globe icon */}
        <div className="w-5 h-5 rounded-lg bg-sky-50 text-[#0284C7] flex items-center justify-center border border-sky-100 group-hover:scale-105 transition-transform shrink-0">
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
          className={`w-3.5 h-3.5 text-[#64748B] transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 text-[#0284C7]' : 'group-hover:text-[#0F172A]'
          }`}
        />
      </button>

      {/* Floating Menu Dropdown Panel */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-2 w-64 sm:w-72 rounded-3xl bg-white/98 backdrop-blur-[40px] border border-white p-2 shadow-[0_20px_50px_rgba(15,23,42,0.18),0_1px_3px_rgba(0,0,0,0.05)] z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header Tag */}
          <div className="px-3.5 py-2 border-b border-black/[0.05] flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] font-semibold">
              Select Language / भाषा / ಭಾಷೆ
            </span>
            <span className="text-[10px] font-mono text-[#64748B] bg-slate-100 px-2 py-0.5 rounded-full font-medium">
              12 Languages
            </span>
          </div>

          {/* List of native languages (scrollable) */}
          <div className="py-1 space-y-0.5 max-h-80 overflow-y-auto pr-1">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = currentLanguage === lang.code;

              return (
                <button
                  key={lang.code}
                  role="menuitem"
                  type="button"
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-2xl text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-sky-50 to-blue-50/60 border border-sky-200 text-[#0284C7] shadow-xs'
                      : 'hover:bg-slate-50 text-[#0F172A] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {/* Visual language script badge */}
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#0284C7] to-[#2563EB] text-white shadow-xs'
                          : 'bg-slate-100 text-[#475569]'
                      }`}
                    >
                      {lang.code.toUpperCase()}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-baseline gap-1.5">
                        <span className={`text-xs tracking-wide truncate ${isSelected ? 'font-bold text-[#0F172A]' : 'font-medium'}`}>
                          {lang.nativeName}
                        </span>
                        {lang.code !== 'en' && (
                          <span className="text-[10px] text-[#64748B] shrink-0">
                            {lang.englishName}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-[#64748B] block font-light truncate">
                        {lang.tagline}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0 ml-1">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Extensible architecture footer */}
          <div className="pt-2 px-3 pb-1 border-t border-black/[0.05] text-[10px] text-[#64748B] text-center font-light">
            Extensible architecture • Built for Bharat 🇮🇳
          </div>
        </div>
      )}

    </div>
  );
};
