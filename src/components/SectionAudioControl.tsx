import React, { useState, useEffect } from 'react';
import { Volume2, Square } from 'lucide-react';
import { Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';
import { SpeechService } from '../services/speechService';

interface SectionAudioControlProps {
  sectionId: string;
  textToSpeak: string;
  currentLanguage: Language;
  label?: string;
  className?: string;
  compact?: boolean;
}

export const SectionAudioControl: React.FC<SectionAudioControlProps> = ({
  sectionId,
  textToSpeak,
  currentLanguage,
  label,
  className = '',
  compact = false
}) => {
  const [isPlayingThis, setIsPlayingThis] = useState(false);
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  useEffect(() => {
    const unsubscribe = SpeechService.subscribe((activeId) => {
      setIsPlayingThis(activeId === sectionId);
    });
    return () => {
      unsubscribe();
    };
  }, [sectionId]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlayingThis) {
      SpeechService.stop();
    } else {
      if (textToSpeak && textToSpeak.trim()) {
        SpeechService.playSection(sectionId, textToSpeak, currentLanguage);
      }
    }
  };

  const buttonLabel = label || (isPlayingThis ? t.stopVoice : t.listenVoice);

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isPlayingThis ? t.stopVoice : t.listenVoice}
      className={`inline-flex items-center gap-2 rounded-2xl transition-all cursor-pointer font-medium shadow-xs select-none ${
        isPlayingThis
          ? 'bg-amber-100/90 text-amber-950 border border-amber-300 ring-2 ring-amber-300/40 shadow-sm'
          : 'bg-white/80 hover:bg-white text-[#0F172A] border border-white/90 hover:border-sky-200'
      } ${compact ? 'px-2.5 py-1.5 text-[11px]' : 'px-3.5 py-2 text-xs'} ${className}`}
    >
      {isPlayingThis ? (
        <>
          {/* Animated 3-bar sound wave */}
          <div className="flex items-end gap-0.5 h-3.5 w-3.5 shrink-0">
            <span className="w-0.5 bg-amber-700 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-full" />
            <span className="w-0.5 bg-amber-700 rounded-full animate-[pulse_0.4s_ease-in-out_infinite_0.2s] h-3/4" />
            <span className="w-0.5 bg-amber-700 rounded-full animate-[pulse_0.8s_ease-in-out_infinite_0.4s] h-full" />
          </div>
          <Square className="w-2.5 h-2.5 fill-current text-amber-900 shrink-0" />
          <span>{buttonLabel}</span>
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
          <span>{buttonLabel}</span>
        </>
      )}
    </button>
  );
};
