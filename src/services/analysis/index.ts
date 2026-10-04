import { AnalysisResult, InputType, Language } from '../../types/analysis';
import { analyzeContent } from './contentAnalysis';

export async function performVerification(
  content: string,
  inputType: InputType,
  currentLanguage: Language
): Promise<AnalysisResult> {
  // Try server-side Gemini API first
  try {
    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content,
        inputType,
        language: currentLanguage
      })
    });

    if (res.ok) {
      const json = await res.json();
      if (!json.useFallback && json.data) {
        // Build base analysis to ensure full evidence layer and graph nodes are included
        const baseResult = analyzeContent(content, inputType, currentLanguage);

        return {
          ...baseResult,
          statusHeading: json.data.statusHeading || baseResult.statusHeading,
          riskLevel: json.data.riskLevel || baseResult.riskLevel,
          signalsCount: json.data.signals?.length || baseResult.signalsCount,
          signals: json.data.signals && json.data.signals.length > 0 ? json.data.signals : baseResult.signals,
          overallExplanation: json.data.overallExplanation || baseResult.overallExplanation,
          simpleExplanation: json.data.simpleExplanation || baseResult.simpleExplanation,
          vernacularExplanations: json.data.vernacularExplanations || baseResult.vernacularExplanations,
          whatWeKnow: json.data.whatWeKnow && json.data.whatWeKnow.length > 0 ? json.data.whatWeKnow : baseResult.whatWeKnow,
          whatWeCouldNotVerify: json.data.whatWeCouldNotVerify && json.data.whatWeCouldNotVerify.length > 0 ? json.data.whatWeCouldNotVerify : baseResult.whatWeCouldNotVerify,
          behavioralSignals: json.data.behavioralSignals || baseResult.behavioralSignals
        };
      }
    }
  } catch (err) {
    console.warn('Backend /api/analyze unavailable, executing local verification engine:', err);
  }

  // Deterministic local verification engine
  return analyzeContent(content, inputType, currentLanguage);
}

export * from './contentAnalysis';
export * from './signalDetection';
export * from './evidenceRetrieval';
export * from './challengeAssessment';
