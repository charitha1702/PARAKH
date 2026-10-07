export type InputType = 'message' | 'screenshot' | 'link' | 'voice';

export type Language = 
  | 'en' 
  | 'hi' 
  | 'kn' 
  | 'te' 
  | 'ta' 
  | 'ml' 
  | 'mr' 
  | 'bn' 
  | 'gu' 
  | 'pa' 
  | 'or' 
  | 'ur';

export type RiskLevel = 'high' | 'elevated' | 'moderate' | 'low';

export type Severity = 'critical' | 'high' | 'medium' | 'low';

export type VerdictCategory = 'high_risk' | 'some_concerns' | 'no_major_risk' | 'insufficient_evidence';

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
  outcomeType?: 'contradictory_found' | 'no_contradictory_found' | 'inconclusive';
}

// ============================================================================
// 1. TRUST CHAIN RECONSTRUCTION TYPES
// ============================================================================
export type TrustNodeStatus = 'verified' | 'unverified' | 'contradicted' | 'suspicious' | 'unable_to_verify';

export type TrustNodeType = 
  | 'content' 
  | 'claim' 
  | 'entity' 
  | 'domain' 
  | 'contact' 
  | 'payment' 
  | 'official_evidence' 
  | 'community_reports'
  | 'regulator';

export interface HowYouKnowDetail {
  aiDetected: string[];
  evidenceChecked: string[];
  result: string;
  aiAnalysisNotes: string;
  officialEvidenceNotes: string;
  communityEvidenceNotes: string;
}

export interface TrustChainNode {
  id: string;
  type: TrustNodeType;
  label: string;
  value: string;
  status: TrustNodeStatus;
  statusExplanation: string;
  evidenceSource?: string;
  registryEntity?: string;
  howYouKnow: HowYouKnowDetail;
}

export type EdgeRelationshipStatus = 'verified' | 'unverified' | 'suspicious' | 'broken';

export interface TrustChainEdge {
  id: string;
  from: string;
  to: string;
  relationship: string;
  status: EdgeRelationshipStatus;
  statusLabel?: string;
  isTrustBreak?: boolean;
  question?: string;
  claim?: string;
  evidenceChecked?: string[];
  finding?: string;
}

export interface TrustChainBreakPoint {
  edgeId?: string;
  fromNodeId: string;
  toNodeId: string;
  title: string;
  description: string;
  statusText: string;
  adviceText?: string;
}

export interface TrustChainSummary {
  connectedEntities: number;
  evidenceGaps: number;
  suspiciousRelationships: number;
  isCoverageLimited: boolean;
}

export interface TrustChain {
  nodes: TrustChainNode[];
  edges: TrustChainEdge[];
  summary?: TrustChainSummary;
  trustBreak?: TrustChainBreakPoint;
}

// ============================================================================
// 2. SCAM DNA PATTERN FINGERPRINT TYPES
// ============================================================================
export interface ScamDnaSignal {
  id: string;
  key: string;
  name: string;
  detected: boolean;
  severity: Severity;
  explanation: string;
  excerpt?: string;
  statutoryRule?: string;
}

export interface ScamDnaProfile {
  summaryHeading: string; // e.g. "High-risk indicators detected" (never a % scam score)
  signals: ScamDnaSignal[];
  detectedCount: number;
}

// ============================================================================
// 3. EMERGING SCAM PATTERN DETECTION TYPES
// ============================================================================
export interface SharedPatternVector {
  category: 'domain' | 'phone' | 'organization' | 'template' | 'payment' | 'impersonation';
  categoryLabel: string;
  value: string;
  occurrencesNote: string;
}

export interface EmergingScamPattern {
  isPatternDetected: boolean;
  patternTitle: string;
  patternDescription: string;
  sharedVectors: SharedPatternVector[];
  disclaimer: string;
}

// ============================================================================
// 4. COMMUNITY EVIDENCE & AI COMMUNITY SUMMARY TYPES
// ============================================================================
export type CommunityEvidenceBadge = 'first_hand' | 'evidence_attached' | 'community_claim' | 'officially_verified';

export interface CommunityReport {
  id: string;
  timestamp: string;
  authorMasked: string;
  locationCity: string;
  encounteredPersonally: boolean;
  badges: CommunityEvidenceBadge[];
  contentExcerpt: string;
  userExperience: string;
  evidenceNote?: string;
  verifiedFact?: string;
  challengesCount: number;
  upvotesCount: number;
}

export interface AiCommunitySummary {
  title: string;
  summary: string;
  commonPatterns: string[];
  evidenceDiscrepancies: string[];
  disclaimer: string;
}

// ============================================================================
// COMPREHENSIVE VERIFICATION RESULT TYPE
// ============================================================================
export interface AnalysisResult {
  id: string;
  timestamp: string;
  originalContent: string;
  inputType: InputType;
  languageDetected: string;
  statusHeading: string;
  verdictCategory: VerdictCategory;
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
  whatContradicts?: string[];
  behavioralSignals: BehavioralSignals;
  safeSteps: SafeStep[];
  challengeResult?: ChallengeResult;
  // Core upgraded layers:
  trustChain: TrustChain;
  scamDna: ScamDnaProfile;
  emergingPattern?: EmergingScamPattern;
  communityReports: CommunityReport[];
  communitySummary: AiCommunitySummary;
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
