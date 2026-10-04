import React from 'react';
import { GlassTile } from './GlassTile';
import { Lock, Trash2, X, CheckCircle2 } from 'lucide-react';
import { Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClearSession: () => void;
  currentLanguage: Language;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  onClearSession,
  currentLanguage
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const principles = [
    { title: t.privacyPrinciple1Title, desc: t.privacyPrinciple1Desc },
    { title: t.privacyPrinciple2Title, desc: t.privacyPrinciple2Desc },
    { title: t.privacyPrinciple3Title, desc: t.privacyPrinciple3Desc },
    { title: t.privacyPrinciple4Title, desc: t.privacyPrinciple4Desc },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/30 backdrop-blur-md">
      <GlassTile variant="elevated" glow className="max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#0F172A]/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center border border-emerald-200">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-wider block font-semibold">
                {t.privacyGuaranteeBadge}
              </span>
              <h3 className="text-lg font-light text-[#0F172A]">
                {t.privacyModalTitle}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-[#475569] hover:text-[#0F172A] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Core Principles */}
        <div className="space-y-3.5 text-xs sm:text-sm text-[#0F172A] font-light">
          {principles.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0F172A] block text-xs font-semibold">{item.title}</strong>
                <p className="text-[#475569] text-xs font-light leading-relaxed mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Data Control */}
        <div className="pt-3 border-t border-[#0F172A]/[0.08] flex items-center justify-between">
          <button
            onClick={() => {
              onClearSession();
              onClose();
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-light text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{t.purgeSessionDataButton}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-2xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:shadow-md transition-colors cursor-pointer shadow-sm"
          >
            {t.privacyDoneButton}
          </button>
        </div>

      </GlassTile>
    </div>
  );
};
