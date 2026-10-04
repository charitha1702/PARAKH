import React, { useState } from 'react';
import { GlassTile } from './GlassTile';
import { Search, Info } from 'lucide-react';
import { AnalysisResult, Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';

interface WhatFoundSectionProps {
  analysis: AnalysisResult;
  currentLanguage: Language;
}

export const WhatFoundSection: React.FC<WhatFoundSectionProps> = ({ analysis, currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const [selectedSignalId, setSelectedSignalId] = useState<string | null>(
    analysis.signals[0]?.id || null
  );

  const selectedSignal = analysis.signals.find(s => s.id === selectedSignalId) || analysis.signals[0];

  const severityLabels: Record<Language, { critical: string; high: string; medium: string; low: string }> = {
    en: { critical: 'Critical', high: 'High', medium: 'Moderate', low: 'Low' },
    kn: { critical: 'ಗಂಭೀರ', high: 'ಹೆಚ್ಚು', medium: 'ಮಧ್ಯಮ', low: 'ಕಡಿಮೆ' },
    hi: { critical: 'गंभीर', high: 'उच्च', medium: 'मध्यम', low: 'कम' },
    te: { critical: 'తీవ్రమైన', high: 'అధిక', medium: 'మితమైన', low: 'తక్కువ' }
  };

  const getSeverityLabel = (severity: 'critical' | 'high' | 'medium' | 'low') => {
    return (severityLabels[currentLanguage] || severityLabels.en)[severity] || severity;
  };

  const regulatoryStandards: Record<Language, Record<string, string>> = {
    en: {
      guaranteed_returns: 'SEBI Investment Advisers Regulations prohibit assured return promises.',
      payment_pressure: 'RBI guidelines mandate collection strictly through segregated clearing accounts.',
      urgency_scarcity: 'SEBI requires mandatory cooling-off and documented investor suitability.',
      authority_claim: 'SEBI does not endorse individual research analyst tips or investment groups.',
      malicious_link: 'CERT-In alerts strictly prohibit sideloading non-Play Store banking APKs.'
    },
    kn: {
      guaranteed_returns: 'SEBI ಹೂಡಿಕೆ ಸಲಹಾ ನಿಯಮಗಳ ಪ್ರಕಾರ ಖಾತರಿ ಲಾಭದ ಭರವಸೆ ನೀಡುವುದನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧಿಸಲಾಗಿದೆ.',
      payment_pressure: 'RBI ನಿಯಮಗಳ ಪ್ರಕಾರ ಅಧಿಕೃತ ಕ್ಲಿಯರಿಂಗ್ ಕಾರ್ಪೊರೇಷನ್ ಖಾತೆಗಳ ಮೂಲಕ ಮಾತ್ರ ಹೂಡಿಕೆ ಹಣ ಸಂಗ್ರಹಿಸಬೇಕು.',
      urgency_scarcity: 'SEBI ನಿಯಮಗಳ ಪ್ರಕಾರ ಹೂಡಿಕೆದಾರರಿಗೆ ಆಲೋಚಿಸಲು ಸಮಯ (ಕೂಲಿಂಗ್-ಆಫ್) ನೀಡುವುದು ಕಡ್ಡಾಯವಾಗಿದೆ.',
      authority_claim: 'SEBI ಯಾವುದೇ ವೈಯಕ್ತಿಕ ರಿಸರ್ಚ್ ಅನಲಿಸ್ಟ್ ಟಿಪ್ಸ್ ಅಥವಾ ಹೂಡಿಕೆ ಗ್ರೂಪ್‌ಗಳಿಗೆ ಅನುಮೋದನೆ ನೀಡುವುದಿಲ್ಲ.',
      malicious_link: 'CERT-In ಎಚ್ಚರಿಕೆಗಳ ಪ್ರಕಾರ ಪ್ಲೇ ಸ್ಟೋರ್ ಹೊರತಾದ ಅಪರಿಚಿತ ಬ್ಯಾಂಕಿಂಗ್ APK ಫೈಲ್‌ಗಳನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬೇಡಿ.'
    },
    hi: {
      guaranteed_returns: 'सेबी निवेश सलाहकार नियम निश्चित रिटर्न के वादे को पूरी तरह प्रतिबंधित करते हैं।',
      payment_pressure: 'आरबीआई दिशानिर्देश केवल अलग किए गए क्लियरिंग खातों के माध्यम से धन एकत्र करने का आदेश देते हैं।',
      urgency_scarcity: 'सेबी को अनिवार्य कूलिंग-ऑफ और प्रलेखित निवेशक उपयुक्तता की आवश्यकता होती है।',
      authority_claim: 'सेबी व्यक्तिगत रिसर्च एनालिस्ट की टिप्स या निवेश समूहों का समर्थन नहीं करता है।',
      malicious_link: 'CERT-In अलर्ट गैर-प्ले स्टोर बैंकिंग एपीके को साइडलोड करने से सख्ती से मना करते हैं।'
    },
    te: {
      guaranteed_returns: 'SEBI పెట్టుబడి సలహాదారుల నిబంధనలు ఖచ్చితమైన లాభాల హామీని ఖచ్చితంగా నిషేధిస్తాయి.',
      payment_pressure: 'RBI మార్గదర్శకాలు కేవలం ప్రత్యేక క్లియరింగ్ ఖాతాల ద్వారా మాత్రమే నిధులను సేకరించాలని ఆదేశిస్తాయి.',
      urgency_scarcity: 'SEBI పెట్టుబడిదారులకు తగినంత సమయం (కూలింగ్-ఆఫ్) ఇవ్వడాన్ని తప్పనిసరి చేస్తుంది.',
      authority_claim: 'SEBI వ్యక్తిగత రీసెర్చ్ అనలిస్ట్ చిట్కాలను లేదా పెట్టుబడి గ్రూపులను ఆమోదించదు.',
      malicious_link: 'CERT-In హెచ్చరికల ప్రకారం ప్లే స్టోర్ వెలుపల ఉండే బ్యాంకింగ్ APKలను ఇన్‌స్టాల్ చేయడం ప్రమాదకరం.'
    }
  };

  const getRegulatoryStandard = (category: string) => {
    const langStandards = regulatoryStandards[currentLanguage] || regulatoryStandards.en;
    return langStandards[category] || langStandards.guaranteed_returns;
  };

  return (
    <GlassTile variant="card" className="p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-mono text-[#0284C7] uppercase tracking-wider font-semibold">
          <Search className="w-3.5 h-3.5" />
          <span>{t.whatFoundBadge}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-light text-[#0F172A]">
          {t.whatFoundTitle}
        </h3>
        <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
          {t.whatFoundSubtitle}
        </p>
      </div>

      {/* Interactive Excerpt Highlight Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Interactive Excerpt Stream */}
        <div className="lg:col-span-7 space-y-3">
          <span className="text-xs font-mono text-[#475569] block font-light">
            {t.highlightedExcerptsLabel} ({analysis.signals.length}):
          </span>

          <div className="space-y-2.5">
            {analysis.signals.map(signal => {
              const isSelected = selectedSignalId === signal.id;
              const severityColor = 
                signal.severity === 'critical'
                  ? 'border-rose-300 bg-rose-50 text-rose-900'
                  : signal.severity === 'high'
                  ? 'border-amber-300 bg-amber-50 text-amber-900'
                  : 'border-sky-300 bg-sky-50 text-sky-900';

              return (
                <div
                  key={signal.id}
                  onClick={() => setSelectedSignalId(signal.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#0284C7] bg-white/95 shadow-md ring-1 ring-[#0284C7]/40'
                      : 'border-white/80 bg-white/50 hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-semibold text-xs sm:text-sm text-[#0F172A]">
                      {signal.name}
                    </span>
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${severityColor}`}>
                      {getSeverityLabel(signal.severity)}
                    </span>
                  </div>

                  {/* Excerpt quote */}
                  <div className="p-2.5 rounded-xl bg-white/70 border border-white text-xs font-mono text-[#0F172A] italic">
                    "{signal.excerpt}"
                  </div>

                  <p className="text-xs text-[#475569] font-light mt-2 line-clamp-2 leading-relaxed">
                    {signal.simpleExplanation || signal.explanation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed Deep-Dive Card */}
        {selectedSignal && (
          <div className="lg:col-span-5">
            <GlassTile variant="surface" className="p-5 sm:p-6 space-y-4 border-[#0284C7]/20 shadow-sm sticky top-24">
              
              <div className="space-y-1 pb-3 border-b border-[#0F172A]/[0.06]">
                <div className="flex items-center gap-1.5 text-xs text-[#0284C7] font-mono">
                  <Info className="w-3.5 h-3.5" />
                  <span>{t.signalExplanationTitle}</span>
                </div>
                <h4 className="text-base font-semibold text-[#0F172A] leading-snug">
                  {selectedSignal.title}
                </h4>
              </div>

              {/* Specific quote review */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-[#475569] block font-medium">
                  {t.highlightedExcerptsLabel}:
                </span>
                <p className="text-xs font-mono bg-white/80 border border-white p-2.5 rounded-xl text-[#0F172A]">
                  "{selectedSignal.excerpt}"
                </p>
              </div>

              {/* Analytical reasoning */}
              <div className="space-y-1.5 text-xs leading-relaxed text-[#475569] font-light">
                <strong className="text-[#0F172A] font-semibold block">{t.whyRiskLabel}</strong>
                <p>{selectedSignal.explanation}</p>
              </div>

              {/* Regulatory standard reference */}
              <div className="p-3 rounded-xl bg-sky-50/80 border border-sky-200 text-xs text-sky-950 font-light space-y-1">
                <span className="font-semibold block">{t.regulatoryStandardLabel}</span>
                <p className="text-[11px] leading-relaxed">
                  {getRegulatoryStandard(selectedSignal.category)}
                </p>
              </div>

            </GlassTile>
          </div>
        )}

      </div>

    </GlassTile>
  );
};
