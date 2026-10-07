import React, { useState } from 'react';
import { GlassTile } from './GlassTile';
import { 
  Fingerprint, 
  Info
} from 'lucide-react';
import { BehavioralSignals, ScamDnaProfile, Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';
import { SectionAudioControl } from './SectionAudioControl';

interface ScamDnaSectionProps {
  signals?: BehavioralSignals;
  scamDna?: ScamDnaProfile;
  currentLanguage: Language;
}

export const ScamDnaSection: React.FC<ScamDnaSectionProps> = ({ 
  signals, 
  scamDna, 
  currentLanguage 
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const [selectedSignalKey, setSelectedSignalKey] = useState<string | null>(null);

  // If scamDna is not passed, create a default fallback from signals
  const detectedCount = scamDna?.detectedCount || 0;
  const dnaSignals = scamDna?.signals || [];

  const detectedSignalsList = dnaSignals
    .filter(s => s.detected)
    .map(s => `${s.name}: ${s.explanation}`)
    .join('. ');

  const scamDnaSpeechText = `${t.scamDnaTitle}. ${scamDna?.summaryHeading || t.verdictHighRisk}. ${detectedSignalsList}`;

  return (
    <GlassTile variant="card" className="p-6 sm:p-8 space-y-6">
      
      {/* Title & Responsible Phrasing */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#0284C7] uppercase tracking-wider font-semibold">
            <Fingerprint className="w-3.5 h-3.5" />
            <span>{t.scamDnaBadge || 'BEHAVIORAL FINGERPRINT'}</span>
          </div>

          <SectionAudioControl
            sectionId="scam_dna"
            textToSpeak={scamDnaSpeechText}
            currentLanguage={currentLanguage}
            compact
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
            {t.scamDnaTitle || 'Scam DNA — Behavioral Fingerprint'}
          </h3>
          <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
            {scamDna?.summaryHeading || t.verdictHighRisk || 'High-risk indicators detected'}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
          {t.scamDnaSubtitle || 'This is NOT a scam probability score. Never say "93% scam". Instead, PARAKH maps the exact behavioral fingerprint and pattern markers detected.'}
        </p>
      </div>

      {/* Grid of 12 Behavioral Fingerprint Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
        {dnaSignals.map((sig) => {
          const isSelected = selectedSignalKey === sig.key;

          return (
            <div
              key={sig.id}
              onClick={() => setSelectedSignalKey(isSelected ? null : sig.key)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                sig.detected
                  ? isSelected
                    ? 'bg-rose-50/90 border-rose-300 ring-2 ring-rose-300/30 shadow-sm'
                    : 'bg-white/90 hover:bg-white border-rose-200/80 shadow-xs'
                  : 'bg-slate-50/60 hover:bg-white/80 border-slate-200/60 opacity-60'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${
                    sig.detected 
                      ? sig.severity === 'critical' ? 'bg-rose-600 animate-pulse' : 'bg-amber-500'
                      : 'bg-slate-300'
                  }`} />
                  <span className={`text-xs font-semibold ${sig.detected ? 'text-[#0F172A]' : 'text-slate-500'}`}>
                    {sig.name}
                  </span>
                </div>

                <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border shrink-0 ${
                  sig.detected
                    ? 'bg-rose-100 text-rose-800 border-rose-200 font-bold'
                    : 'bg-slate-100 text-slate-500 border-slate-200'
                }`}>
                  {sig.detected ? (t.signalDetectedTag || 'Detected') : (t.signalClearTag || 'Clear')}
                </span>
              </div>

              {/* Expanded details when selected or detected */}
              {sig.detected && (
                <div className="mt-2.5 pt-2 border-t border-black/[0.05] text-[11px] text-[#475569] space-y-1">
                  <p className="leading-snug">
                    {sig.explanation}
                  </p>
                  {sig.statutoryRule && (
                    <div className="text-[10px] text-[#0284C7] font-mono pt-1">
                      {t.statutoryPrefix || 'Statutory:'} {sig.statutoryRule}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Behavioral Intensity Signal Visualizers */}
      {signals && (
        <div className="pt-2 border-t border-black/[0.05]">
          <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider block mb-3 font-semibold">
            {t.pressureVectorsTitle || 'Cognitive & Emotional Pressure Vectors (Intensity Mapping):'}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {[
              { label: t.metricUrgency || 'Urgency', value: signals.urgency, color: 'from-sky-400 to-blue-500' },
              { label: t.metricGuaranteed || 'Guaranteed returns', value: signals.guaranteedReturns, color: 'from-rose-400 to-amber-500' },
              { label: t.metricAuthority || 'Authority claim', value: signals.authorityClaim, color: 'from-indigo-400 to-purple-500' },
              { label: t.metricPayment || 'Payment pressure', value: signals.paymentPressure, color: 'from-amber-400 to-orange-500' },
              { label: t.metricFear || 'Fear / FOMO', value: signals.fearFomo, color: 'from-purple-400 to-pink-500' }
            ].map((metric, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-white/70 border border-white shadow-xs">
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="text-[#0F172A] font-medium truncate">{metric.label}</span>
                  <span className="font-mono text-[#64748B] font-bold">{metric.value}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${metric.color} transition-all duration-500`}
                    style={{ width: `${Math.max(metric.value, 8)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Anti-Scam-Score Product Disclaimer */}
      <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200/70 flex items-start gap-3 text-xs text-[#0369A1] shadow-xs">
        <Info className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {t.scamDnaDisclaimer || 'PARAKH never assigns arbitrary percentage scam ratings (e.g. "93% scam"). We evaluate behavioral patterns against statutory Indian regulations and transparently reveal the detected markers.'}
        </p>
      </div>

    </GlassTile>
  );
};
