import { Language } from '../types/analysis';

const LANG_LOCALE_MAP: Record<Language, string> = {
  en: 'en-IN',
  hi: 'hi-IN',
  kn: 'kn-IN',
  te: 'te-IN',
  ta: 'ta-IN',
  ml: 'ml-IN',
  mr: 'mr-IN',
  bn: 'bn-IN',
  gu: 'gu-IN',
  pa: 'pa-IN',
  or: 'or-IN',
  ur: 'ur-IN'
};

type ActiveSectionListener = (activeSectionId: string | null) => void;

export class SpeechService {
  private static synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private static recognition: any = null;
  private static isSpeaking = false;
  private static activeSectionId: string | null = null;
  private static listeners: Set<ActiveSectionListener> = new Set();

  public static isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public static isRecognitionSupported(): boolean {
    return typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
  }

  public static subscribe(listener: ActiveSectionListener): () => void {
    this.listeners.add(listener);
    // Notify immediately with current state
    listener(this.activeSectionId);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private static notifyListeners(): void {
    for (const listener of this.listeners) {
      listener(this.activeSectionId);
    }
  }

  public static playSection(sectionId: string, text: string, lang: Language): boolean {
    if (!this.synth) return false;

    // If already playing this section, stop it (toggle behavior)
    if (this.activeSectionId === sectionId) {
      this.stop();
      return true;
    }

    // Stop whatever else might be speaking
    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    const targetLocale = LANG_LOCALE_MAP[lang] || 'en-IN';
    utterance.lang = targetLocale;
    utterance.rate = 0.95; // Slightly slower, clearer cadence for elderly & rural users
    utterance.pitch = 1.0;

    const voices = this.synth.getVoices();
    const matchingVoice = voices.find(v => v.lang === targetLocale || v.lang.startsWith(targetLocale.split('-')[0]));
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    utterance.onend = () => {
      this.isSpeaking = false;
      this.activeSectionId = null;
      this.notifyListeners();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      this.activeSectionId = null;
      this.notifyListeners();
    };

    this.isSpeaking = true;
    this.activeSectionId = sectionId;
    this.notifyListeners();
    this.synth.speak(utterance);
    return true;
  }

  public static speak(text: string, lang: Language, onEnd?: () => void): boolean {
    return this.playSection('global', text, lang);
  }

  public static stop(): void {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
    this.activeSectionId = null;
    this.notifyListeners();
  }

  public static getIsSpeaking(): boolean {
    return this.isSpeaking;
  }

  public static getActiveSection(): string | null {
    return this.activeSectionId;
  }

  public static startListening(
    lang: Language,
    onResult: (text: string) => void,
    onError: (err: string) => void,
    onEnd: () => void
  ): { stop: () => void } | null {
    if (typeof window === 'undefined') return null;

    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRec) {
      onError('Speech recognition not supported in this browser. Please type or select a sample.');
      return null;
    }

    try {
      const recognition = new SpeechRec();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = LANG_LOCALE_MAP[lang] || 'en-IN';

      recognition.onresult = (event: any) => {
        if (event.results && event.results[0] && event.results[0][0]) {
          const transcript = event.results[0][0].transcript;
          onResult(transcript);
        }
      };

      recognition.onerror = (event: any) => {
        onError(event.error || 'Voice input error occurred');
      };

      recognition.onend = () => {
        onEnd();
      };

      recognition.start();

      return {
        stop: () => {
          try {
            recognition.stop();
          } catch {
            // Ignore stop errors
          }
        }
      };
    } catch (err: any) {
      onError(err?.message || 'Failed to initialize speech recognition');
      return null;
    }
  }
}
