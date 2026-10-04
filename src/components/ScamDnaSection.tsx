import React from 'react';
import { GlassTile } from './GlassTile';
import { Fingerprint, AlertCircle } from 'lucide-react';
import { BehavioralSignals, Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';

interface ScamDnaSectionProps {
  signals: BehavioralSignals;
  currentLanguage: Language;
}

export const ScamDnaSection: React.FC<ScamDnaSectionProps> = ({ signals, currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const metrics = [
    { label: t.metricUrgency, value: signals.urgency, color: 'from-sky-400 to-blue-500' },
    { label: t.metricGuaranteed, value: signals.guaranteedReturns, color: 'from-rose-400 to-amber-500' },
    { label: t.metricAuthority, value: signals.authorityClaim, color: 'from-indigo-400 to-purple-500' },
    { label: t.metricPayment, value: signals.paymentPressure, color: 'from-amber-400 to-orange-500' },
    { label: t.metricFear, value: signals.fearFomo, color: 'from-purple-400 to-pink-500' },
  ];

  return (
    <GlassTile variant="card" className="p-6 sm:p-8 space-y-6">
      
      {/* Title */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-[#0284C7] uppercase tracking-wider font-semibold">
          <Fingerprint className="w-3.5 h-3.5" />
          <span>{t.scamDnaBadge}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-light text-[#0F172A]">
          {t.scamDnaTitle}
        </h3>
        <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
          {t.scamDnaSubtitle}
        </p>
      </div>

      {/* Behavioral Signal Bars */}
      <div className="space-y-4 pt-2">
        {metrics.map((metric, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#0F172A] font-medium">
                {metric.label}
              </span>
              <span className="font-mono text-[#475569] tabular-nums font-semibold">
                {metric.value}%
              </span>
            </div>

            <div className="w-full h-2.5 bg-black/[0.04] rounded-full overflow-hidden p-0.5 border border-white">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${metric.color} transition-all duration-700 ease-out`}
                style={{ width: `${Math.max(metric.value, 6)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Subtle note */}
      <div className="p-4 rounded-2xl bg-white/70 border border-white flex items-start gap-3 text-xs text-[#475569] font-light shadow-sm">
        <AlertCircle className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {t.scamDnaDisclaimer}
        </p>
      </div>

    </GlassTile>
  );
};
