export type InputType = 'message' | 'screenshot' | 'link' | 'voice';

export type Language = 'en' | 'hi' | 'kn' | 'te';

export type RiskLevel = 'high' | 'elevated' | 'moderate' | 'low';

export type Severity = 'critical' | 'high' | 'medium' | 'low';

export interface WarningSignal {
  id: string;
  name: string;
  category: 'guaranteed_returns' | 'urgency_scarcity' | 'authority_claim' | 'payment_pressure' | 'impersonation' | 'malicious_link' | 'fear_fomo';
  severity: Severity;
  score: number; // 0-100
  title: string;
  explanation: string;
  simpleExplanation: string;
  excerpt: string;
  startIndex?: number;
  endIndex?: number;
}

export type SourceTier = 'regulatory' | 'official' | 'reputable' | 'community';

export type VerificationStatus = 'verified' | 'needs_verification' | 'not_established';

export interface EvidenceItem {
  id: string;
  sourceName: string;
  sourceTier: SourceTier;
  badgeLabel: string;
  claim: string;
  status: VerificationStatus;
  evidenceSummary: string;
  officialUrl?: string;
  registryEntity?: string;
}

export interface EvidenceGraphNode {
  id: string;
  label: string;
  stage: 'content' | 'signals' | 'evidence' | 'verification';
  strength: number; // 0-100
  detail: string;
  iconName: string;
}

export interface BehavioralSignals {
  urgency: number;
  guaranteedReturns: number;
  authorityClaim: number;
  paymentPressure: number;
  fearFomo: number;
}

export interface SafeStep {
  step: number;
  title: string;
  description: string;
  simpleText: string;
  actionUrl?: string;
  actionLabel?: string;
}

export interface ChallengeResult {
  isChecking: boolean;
  initialAssessmentSummary: string;
  investigatedHypothesis: string;
  legitimizingEvidenceFound: string[];
  contradictoryEvidenceSummary: string;
  updatedNuancedAssessment: string;
  isAssessmentAltered: boolean;
}

export interface AnalysisResult {
  id: string;
  timestamp: string;
  originalContent: string;
  inputType: InputType;
  languageDetected: string;
  statusHeading: string;
  riskLevel: RiskLevel;
  signalsCount: number;
  signals: WarningSignal[];
  overallExplanation: string;
  simpleExplanation: string;
  vernacularExplanations: Record<Language, { summary: string; simple: string; audioScript: string }>;
  highlightedExcerpts: Array<{ text: string; signalId: string; reason: string }>;
  evidenceItems: EvidenceItem[];
  evidenceGraphNodes: EvidenceGraphNode[];
  whatWeKnow: string[];
  whatWeCouldNotVerify: string[];
  behavioralSignals: BehavioralSignals;
  safeSteps: SafeStep[];
  challengeResult?: ChallengeResult;
}

export interface PresetSample {
  id: string;
  title: string;
  category: string;
  type: InputType;
  preview: string;
  content: string;
  imageUrl?: string;
  url?: string;
}
