import { Language } from '../types/analysis';
import { TAMIL_TRANSLATIONS, EXTENDED_LANGUAGE_BUILDERS } from './translations/extendedLanguages';

export interface UIStrings {
  // Navigation
  brandName: string;
  checkNav: string;
  learnNav: string;
  evidenceNav: string;
  stopAudio: string;
  simpleMode: string;
  simpleModeActive: string;
  loginCta: string;
  logoutCta: string;
  privacyTooltip: string;

  // Hero Section
  heroTitlePart1: string;
  heroTitleVerify: string;
  heroSubtitle: string;
  heroGetStarted: string;
  heroSeeHowItWorks: string;
  heroCardBadge: string;
  heroCardWarningSignals: string;
  heroCardSignalsDesc: string;
  heroCardAiSignals: string;
  heroCardEvidence: string;
  heroCardVerification: string;

  // Input Section
  inputHeading: string;
  inputSubtitle: string;
  tabMessage: string;
  tabMessageDesc: string;
  tabScreenshot: string;
  tabScreenshotDesc: string;
  tabLink: string;
  tabLinkDesc: string;
  tabVoice: string;
  tabVoiceDesc: string;
  messagePlaceholder: string;
  messageLangHint: string;
  uploadTitle: string;
  uploadSubtitle: string;
  ocrReady: string;
  clearSelection: string;
  linkPlaceholder: string;
  linkHint: string;
  voiceListening: string;
  voiceTapPrompt: string;
  voiceLangNote: string;
  voiceTranscriptLabel: string;
  presetsLabel: string;
  clearButton: string;
  analyzeButton: string;
  analyzingLoading: string;

  // Analysis Animation
  examInProgress: string;
  animationHeading: string;
  animationSub: string;
  stageReadingLabel: string;
  stageReadingDesc: string;
  stagePatternsLabel: string;
  stagePatternsDesc: string;
  stageEvidenceLabel: string;
  stageEvidenceDesc: string;
  stageVerifyingLabel: string;
  stageVerifyingDesc: string;
  stageExplanationLabel: string;
  stageExplanationDesc: string;
  verificationStatusLabel: string;
  examiningBadge: string;

  // Result Section
  checkAnotherItem: string;
  shareAssessment: string;
  summaryCopied: string;
  listenVoice: string;
  stopVoice: string;
  resultBadge: string;
  highRiskHeading: string;
  elevatedRiskHeading: string;
  cautionHeading: string;
  signalsDetectedCount: string;
  simpleExplanationBadge: string;
  summaryExplanationBadge: string;
  detectedWarningSignalsLabel: string;

  // What Found Section
  whatFoundBadge: string;
  whatFoundTitle: string;
  whatFoundSubtitle: string;
  highlightedExcerptsLabel: string;
  signalExplanationTitle: string;
  whyRiskLabel: string;
  regulatoryStandardLabel: string;

  // Evidence Layer
  evidenceBadge: string;
  evidenceTitle: string;
  evidenceSubtitle: string;
  sourceTierRegulatory: string;
  sourceTierOfficial: string;
  sourceTierReputable: string;
  sourceTierCommunity: string;
  statusVerified: string;
  statusNeedsVerification: string;
  statusNotEstablished: string;
  claimLabel: string;
  evidenceLabel: string;
  openRegistryLink: string;
  viewSourcesButton: string;

  // Evidence Graph
  evidenceGraphBadge: string;
  evidenceGraphTitle: string;
  evidenceGraphSubtitle: string;
  strengthLabel: string;

  // What We Know vs Unknown
  whatWeKnowTitle: string;
  whatWeCouldNotVerifyTitle: string;
  whatWeKnowBadge: string;
  whatWeCouldNotVerifyBadge: string;

  // Challenge Section
  challengeBadge: string;
  challengeTitle: string;
  challengeSubtitle: string;
  challengeButton: string;
  challengeTesting: string;
  investigatingHypothesis: string;
  legitimizingFound: string;
  contradictoryFound: string;
  updatedNuancedVerdict: string;
  auditMaintained: string;

  // Scam DNA
  scamDnaBadge: string;
  scamDnaTitle: string;
  scamDnaSubtitle: string;
  scamDnaDisclaimer: string;
  metricUrgency: string;
  metricGuaranteed: string;
  metricAuthority: string;
  metricPayment: string;
  metricFear: string;

  // Safe Steps
  safeStepsBadge: string;
  safeStepsTitle: string;
  safeStepsSubtitle: string;

  // About Section
  aboutNavBack: string;
  aboutBadge: string;
  aboutTitlePart1: string;
  aboutTitleVerify: string;
  aboutDescription: string;
  aboutWhyTitle: string;
  aboutWhyP1: string;
  aboutWhyP2: string;
  pillar1Number: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar2Number: string;
  pillar2Title: string;
  pillar2Desc: string;
  pillar3Number: string;
  pillar3Title: string;
  pillar3Desc: string;

  // Learn Section
  learnNavBack: string;
  learnBadge: string;
  learnTitle: string;
  learnSubtitle: string;
  viewRedFlagsAction: string;
  exploreArrow: string;
  howSchemeOperates: string;
  typicalHookLabel: string;
  keyRedFlagsLabel: string;
  statutorySafeRuleLabel: string;
  statutoryFactLabel: string;
  doneReadingButton: string;

  // Official Registries
  registriesNavBack: string;
  registriesBadge: string;
  registriesTitle: string;
  registriesSubtitle: string;
  helplineBannerTitle: string;
  helplineBannerDesc: string;
  helplineCallAction: string;
  authorityLabel: string;
  howToVerifyPortalLabel: string;
  visitPortalAction: string;

  // Privacy Modal
  privacyGuaranteeBadge: string;
  privacyModalTitle: string;
  privacyPrinciple1Title: string;
  privacyPrinciple1Desc: string;
  privacyPrinciple2Title: string;
  privacyPrinciple2Desc: string;
  privacyPrinciple3Title: string;
  privacyPrinciple3Desc: string;
  privacyPrinciple4Title: string;
  privacyPrinciple4Desc: string;
  purgeSessionDataButton: string;
  privacyDoneButton: string;

  // Auth Flow
  authBackToOverview: string;
  loginWelcomeTitle: string;
  loginWelcomeSubtitle: string;
  emailLabel: string;
  passwordLabel: string;
  forgotPasswordLink: string;
  loginContinueButton: string;
  orDivider: string;
  continueWithGoogle: string;
  newToParakh: string;
  createAccountLink: string;
  createAccountTitle: string;
  createAccountSubtitle: string;
  fullNameLabel: string;
  preferredLanguageLabel: string;
  signupPrivacyNotice: string;
  alreadyHaveAccount: string;
  loginLink: string;
  onboardingStepPrefix: string;
  onboardingStepOf: string;
  onboardingStep1Title: string;
  onboardingStep1Desc: string;
  onboardingStep2Title: string;
  onboardingStep2Desc: string;
  onboardingStep3Title: string;
  onboardingStep3Desc: string;
  onboardingUsageOption1Title: string;
  onboardingUsageOption1Desc: string;
  onboardingUsageOption2Title: string;
  onboardingUsageOption2Desc: string;
  onboardingUsageOption3Title: string;
  onboardingUsageOption3Desc: string;
  onboardingUsageOption4Title: string;
  onboardingUsageOption4Desc: string;
  backButton: string;
  continueButton: string;
  enterParakhButton: string;

  // Footer
  footerTagline: string;
  footerStatutoryNoticeTitle: string;
  footerStatutoryNoticeText: string;
  footerCopyright: string;
  footerHelplineText: string;

  // Trust Chain & How You Know
  trustChainBadge: string;
  trustChainTitle: string;
  trustChainSubtitle: string;
  couldNotVerify: string;
  showHowYouKnow: string;
  aiDetected: string;
  evidenceChecked: string;
  result: string;
  aiAnalysisTab: string;
  officialEvidenceTab: string;
  communityEvidenceTab: string;

  // Emerging Pattern
  emergingPatternBadge: string;
  emergingPatternTitle: string;
  emergingPatternDesc: string;
  emergingPatternDisclaimer: string;

  // Community Evidence
  communitySectionBadge: string;
  communitySectionTitle: string;
  communitySectionSubtitle: string;
  communitySubmitReport: string;
  communityFirstHandBadge: string;
  communityEvidenceAttachedBadge: string;
  communityClaimBadge: string;
  communityOfficiallyVerifiedBadge: string;
  communityAiSummaryTitle: string;
  communityIEncounteredThis: string;
  communityDisclaimer: string;
  communityReportModalTitle: string;
  communityReportCityLabel: string;
  communityReportDescLabel: string;
  communityReportEvidenceLabel: string;
  communityReportSubmitAction: string;
  communityReportCancelAction: string;

  // Simple Mode Guidance
  simpleStopBeforeYouPay: string;
  simpleMessageAsksMoney: string;
  simpleCouldNotVerifySender: string;
  simpleCheckOfficialSite: string;
  simpleDoNotShareOtpPin: string;

  // Verdict Categories & Headers
  verdictHighRisk: string;
  verdictSomeConcerns: string;
  verdictNoMajorRisk: string;
  verdictInsufficientEvidence: string;
  finalParakhVerdict: string;
  objectiveForensicAssessment: string;
  parakhCorePrinciple: string;
  parakhPrincipleQuote: string;
  parakhPrincipleSubtext: string;

  // Scam DNA & Behavioral Vectors
  pressureVectorsTitle: string;
  statutoryPrefix: string;
  signalDetectedTag: string;
  signalClearTag: string;

  // Community Evidence
  objectiveSynthesis: string;
  recurringModusOperandi: string;
  evidenceDiscrepanciesTitle: string;
  viewInSelectedLang: string;
  viewOriginal: string;
  claimChallengedTag: string;
  challengeClaimButton: string;
  evidenceNotePrefix: string;
  regulatoryCheckPrefix: string;
  challengeRegisteredNotice: string;

  // Trust Chain
  trustChainEntityNodes: string;
  trustChainInspectHint: string;
  nodeInspectionTitle: string;
  officialSourceChecked: string;
  closeEvidenceAudit: string;
  distinctionLayersTitle: string;
  evidenceAuditDisclaimer: string;
  independentAuditTag: string;
  reasoningBreakdown: string;

  // What Contradicts
  whatContradictsTitle: string;
  statutoryRulesBadge: string;
  observedFactsBadge: string;

  // Section Audio
  audioPlayingWave: string;
  audioListenSection: string;
  audioStopSection: string;

  // Challenge Outcomes
  outcomeContradictoryFound: string;
  outcomeContradictoryDesc: string;
  outcomeInconclusive: string;
  outcomeInconclusiveDesc: string;
  outcomeNoContradictory: string;
  outcomeNoContradictoryDesc: string;
  challengeVerdictAdjustNotice: string;
  retestChallenge: string;
  verdictUpdatedTag: string;

  // Emerging Pattern Banner
  matchingVectorsLabel: string;
  hideVectorsButton: string;
  inspectSharedVectorsButton: string;
  sharedCharacteristicsTitle: string;

  // Upgraded Trust Chain Keys
  trustBreakTitle: string;
  trustBreakSubtitle: string;
  relationshipInspectionTitle: string;
  relationshipInspectionSubtitle: string;
  claimQuestionLabel: string;
  evidenceCheckedLabel: string;
  findingLabel: string;
  connectedEntitiesLabel: string;
  evidenceGapsLabel: string;
  suspiciousRelationshipsLabel: string;
  evidenceCoverageLimited: string;
  inspectRelationshipButton: string;
  trustGapDetected: string;
  relationshipUnverified: string;
  mismatchDetected: string;
  officialSourceBadge: string;
  supportingEvidenceBadge: string;
  whereDoesTrustBreakQuestion: string;
  clickToInspectNodeOrEdge: string;
  statusLabel: string;
  closeInspection: string;
}

const enStrings: UIStrings = {
  brandName: "PARAKH",
    checkNav: "Check",
    learnNav: "Learn",
    evidenceNav: "Evidence",
    stopAudio: "Stop Audio",
    simpleMode: "Simple Mode",
    simpleModeActive: "Simple Mode Active",
    loginCta: "Log in",
    logoutCta: "Log out",
    privacyTooltip: "Private by Design",

    heroTitlePart1: "BEFORE YOU BELIEVE IT.",
    heroTitleVerify: "PARAKH IT.",
    heroSubtitle: "Financial content moves faster than trust. PARAKH helps you investigate suspicious messages, screenshots, websites and voice inputs — tracing claims to their evidence before you act.",
    heroGetStarted: "Get Started",
    heroSeeHowItWorks: "See how it works",
    heroCardBadge: "TRUST CHAIN RECONSTRUCTION",
    heroCardWarningSignals: "FOLLOW THE CLAIM. FIND THE CONNECTION. CHECK THE EVIDENCE.",
    heroCardSignalsDesc: "PARAKH connects claims, organizations, websites, contacts, payment routes and evidence — then shows where the chain becomes uncertain.",
    heroCardAiSignals: "Trace",
    heroCardEvidence: "Explain",
    heroCardVerification: "Protect",

    inputHeading: "What did you receive?",
    inputSubtitle: "Let PARAKH help you understand it before you act.",
    tabMessage: "Message",
    tabMessageDesc: "Paste a message",
    tabScreenshot: "Screenshot",
    tabScreenshotDesc: "Upload an image",
    tabLink: "Website",
    tabLinkDesc: "Check a link",
    tabVoice: "Voice",
    tabVoiceDesc: "Speak what you received",
    messagePlaceholder: "Paste the message you received…",
    messageLangHint: "Understands Hinglish, Kanglish, Telugu, Hindi, and English.",
    uploadTitle: "Upload chat screenshot or certificate image",
    uploadSubtitle: "PNG, JPG, or WEBP supported",
    ocrReady: "OCR parsed text ready for inspection",
    clearSelection: "Clear",
    linkPlaceholder: "https://zerodha-institutional-wealth.in or telegram link",
    linkHint: "Cross-references domain WHOIS, broker clones, and phishing databases.",
    voiceListening: "Listening... speak clearly",
    voiceTapPrompt: "Tap microphone and speak what you received",
    voiceLangNote: "Speaks in English, Hindi, Kannada, or Telugu",
    voiceTranscriptLabel: "Transcribed Speech:",
    presetsLabel: "Or inspect authentic Indian scenario presets:",
    clearButton: "Clear",
    analyzeButton: "Analyze with PARAKH",
    analyzingLoading: "Examining...",

    examInProgress: "EXAMINATION IN PROGRESS",
    animationHeading: "PARAKH is examining the content...",
    animationSub: "Soft ambient light passing through liquid crystal glass to verify text, statutory precedents, and behavioral signals.",
    stageReadingLabel: "Reading & decomposition",
    stageReadingDesc: "Decomposing linguistic patterns and code-mixed vernacular",
    stagePatternsLabel: "Detecting patterns",
    stagePatternsDesc: "Isolating behavioral pressure, guaranteed returns & urgency",
    stageEvidenceLabel: "Checking evidence",
    stageEvidenceDesc: "Querying statutory registries (SEBI, RBI Sachet, MCA21)",
    stageVerifyingLabel: "Verifying claims",
    stageVerifyingDesc: "Correlating with documented National Cyber Crime 1930 trends",
    stageExplanationLabel: "Preparing explanation",
    stageExplanationDesc: "Synthesizing plain-language verdict and protective safe steps",
    verificationStatusLabel: "Verification Status",
    examiningBadge: "Examining...",

    checkAnotherItem: "Check another item",
    shareAssessment: "Share Assessment",
    summaryCopied: "Summary Copied!",
    listenVoice: "Listen",
    stopVoice: "Stop Audio",
    resultBadge: "AUDITED RESULT",
    highRiskHeading: "High-risk indicators detected",
    elevatedRiskHeading: "Elevated risk signals detected",
    cautionHeading: "Caution advised: unverified claims present",
    signalsDetectedCount: "warning signals detected",
    simpleExplanationBadge: "SIMPLE EXPLANATION",
    summaryExplanationBadge: "VERIFICATION SUMMARY",
    detectedWarningSignalsLabel: "Detected Warning Signals:",

    whatFoundBadge: "LINGUISTIC & TACTICAL ANALYSIS",
    whatFoundTitle: "What PARAKH found",
    whatFoundSubtitle: "Exact highlighted excerpts and behavioral pressure tactics detected in the content.",
    highlightedExcerptsLabel: "Highlighted Excerpts",
    signalExplanationTitle: "Signal Explanation",
    whyRiskLabel: "Why this is a risk signal:",
    regulatoryStandardLabel: "Regulatory Standard:",

    evidenceBadge: "STATUTORY REPOSITORIES",
    evidenceTitle: "What does the evidence say?",
    evidenceSubtitle: "Synthesizing AI pattern recognition with authoritative Indian financial registries.",
    sourceTierRegulatory: "Statutory Regulatory Precedent",
    sourceTierOfficial: "Government Registry",
    sourceTierReputable: "Authoritative Public Register",
    sourceTierCommunity: "Enforcement Advisory",
    statusVerified: "Verified / supported",
    statusNeedsVerification: "Needs verification",
    statusNotEstablished: "Not established",
    claimLabel: "Analyzed Claim",
    evidenceLabel: "Evidence Findings",
    openRegistryLink: "Open Registry Source",
    viewSourcesButton: "View verification sources",

    evidenceGraphBadge: "PIPELINE TRACE",
    evidenceGraphTitle: "Evidence Strength & Verification Pipeline",
    evidenceGraphSubtitle: "Real-time verification journey from content ingestion to synthesis.",
    strengthLabel: "Confidence Strength",

    whatWeKnowTitle: "What we know",
    whatWeCouldNotVerifyTitle: "What we couldn't verify",
    whatWeKnowBadge: "VERIFIED SIGNALS",
    whatWeCouldNotVerifyBadge: "UNKNOWN JURISDICTION",

    challengeBadge: "CHALLENGE PARAKH",
    challengeTitle: "Challenge the result.",
    challengeSubtitle: "PARAKH is not designed to always agree with itself. Users can challenge an analysis and look for contradictory or alternative evidence.",
    challengeButton: "Search for contradictory evidence",
    challengeTesting: "PARAKH is checking whether alternative explanations exist or whether statutory exceptions apply...",
    investigatingHypothesis: "Investigated Counter-Hypothesis:",
    legitimizingFound: "Potential Legitimizing Considerations:",
    contradictoryFound: "Contradictory Regulatory Proof:",
    updatedNuancedVerdict: "Nuanced Audited Synthesis:",
    auditMaintained: "ASSESSMENT CHALLENGED & AUDITED",

    scamDnaBadge: "SCAM DNA",
    scamDnaTitle: "Understand the pattern, not just the warning.",
    scamDnaSubtitle: "PARAKH identifies behavioral signals such as urgency, guaranteed returns, authority impersonation, payment pressure, phishing and other manipulation tactics.",
    scamDnaDisclaimer: "Scam DNA: Behavioral patterns detected — not a fake “scam probability” score.",
    metricUrgency: "Urgency Pressure",
    metricGuaranteed: "Guaranteed Return Claims",
    metricAuthority: "Authority Name-Dropping",
    metricPayment: "Private Payment Pressure",
    metricFear: "Fear & FOMO Tactics",

    safeStepsBadge: "STATUTORY ACTION PLAN",
    safeStepsTitle: "Before you act",
    safeStepsSubtitle: "Practical, protective steps recommended by regulatory authorities.",

    aboutNavBack: "Back to Check",
    aboutBadge: "ABOUT PARAKH",
    aboutTitlePart1: "Don’t just trust.",
    aboutTitleVerify: "Verify.",
    aboutDescription: "PARAKH is an AI-powered financial content verification platform built for Bharat. From suspicious content to evidence-backed understanding.",
    aboutWhyTitle: "Built to protect, not persuade.",
    aboutWhyP1: "PARAKH does not provide buy, sell or hold recommendations. It does not ask users for OTPs, PINs, passwords or unnecessary sensitive financial information.",
    aboutWhyP2: "Its purpose is simple: Help people pause, verify and understand before they act.",
    pillar1Number: "01. TRACE",
    pillar1Title: "See where trust breaks.",
    pillar1Desc: "PARAKH doesn't stop at the message. It reconstructs the relationships behind a financial claim — connecting organizations, websites, contacts, payment routes and evidence to reveal where the available proof becomes weak.",
    pillar2Number: "02. EXPLAIN",
    pillar2Title: "Show me how you know.",
    pillar2Desc: "PARAKH doesn't ask you to trust an AI score. It shows what was detected, what evidence supports the claim, what contradicts it, and what could not be independently verified across AI Analysis, Official Evidence, and Community Evidence.",
    pillar3Number: "03. BHARAT-FIRST",
    pillar3Title: "Verification in your language.",
    pillar3Desc: "PARAKH is built for Bharat — with multilingual analysis, regional-language explanations, voice interaction and Simple Mode for users who prefer a clearer, more accessible experience.",

    learnNavBack: "Back to Check",
    learnBadge: "HOW IT WORKS",
    learnTitle: "How Verification Works",
    learnSubtitle: "1 — Submit (Message, screenshot, website or voice) • 2 — Analyze (Detects suspicious claims and behavioral signals) • 3 — Verify (Checked against reliable evidence) • 4 — Understand (Trust Chain, evidence trail, Scam DNA) • 5 — Challenge (Test against alternative evidence) • 6 — Act Safely (Clear guidance on next steps).",
    viewRedFlagsAction: "View red flags",
    exploreArrow: "Explore →",
    howSchemeOperates: "How the scheme operates:",
    typicalHookLabel: "Typical Hook:",
    keyRedFlagsLabel: "Key Red Flags:",
    statutorySafeRuleLabel: "Statutory Safe Rule:",
    statutoryFactLabel: "Statutory Fact:",
    doneReadingButton: "Done Reading",

    registriesNavBack: "Back to Check",
    registriesBadge: "STATUTORY REPOSITORIES",
    registriesTitle: "Government & Statutory Registries",
    registriesSubtitle: "Never rely on phone numbers or search engine ads sent in chats. Verify intermediaries directly on official portals.",
    helplineBannerTitle: "Immediate Financial Fraud Helpline: 1930",
    helplineBannerDesc: "If you transferred funds within the last 2-4 hours, dial 1930 immediately to freeze funds before inter-bank withdrawal.",
    helplineCallAction: "Call 1930 (Helpline)",
    authorityLabel: "Authority:",
    howToVerifyPortalLabel: "How to verify on this portal:",
    visitPortalAction: "Visit Portal",

    privacyGuaranteeBadge: "GUARANTEE OF CONFIDENTIALITY",
    privacyModalTitle: "Private by design",
    privacyPrinciple1Title: "No OTP collection",
    privacyPrinciple1Desc: "PARAKH never asks for OTPs, banking credentials, or passwords under any circumstance.",
    privacyPrinciple2Title: "No banking credentials",
    privacyPrinciple2Desc: "We never connect to your bank accounts or ask for credit/debit card numbers or UPI MPIN.",
    privacyPrinciple3Title: "No unnecessary financial information",
    privacyPrinciple3Desc: "Uploaded messages and screenshots are analyzed strictly in memory during your active session and are not permanently stored by default.",
    privacyPrinciple4Title: "Transparent processing & delete controls",
    privacyPrinciple4Desc: "Clearly explains what information is processed and provides one-click instant memory purge.",
    purgeSessionDataButton: "Purge Session Data",
    privacyDoneButton: "Done",

    authBackToOverview: "← Back to overview",
    loginWelcomeTitle: "Welcome back",
    loginWelcomeSubtitle: "Continue verifying with PARAKH.",
    emailLabel: "Email",
    passwordLabel: "Password",
    forgotPasswordLink: "Forgot password?",
    loginContinueButton: "Continue",
    orDivider: "or",
    continueWithGoogle: "Continue with Google",
    newToParakh: "New to PARAKH?",
    createAccountLink: "Create account",
    createAccountTitle: "Create your PARAKH account",
    createAccountSubtitle: "Build a safer way to verify what you receive.",
    fullNameLabel: "Full Name",
    preferredLanguageLabel: "Preferred Language",
    signupPrivacyNotice: "PARAKH does not require banking credentials, OTPs, or sensitive financial information.",
    alreadyHaveAccount: "Already have an account?",
    loginLink: "Log in",
    onboardingStepPrefix: "STEP",
    onboardingStepOf: "OF 03",
    onboardingStep1Title: "What language are you most comfortable with?",
    onboardingStep1Desc: "PARAKH will explain risks and safety guidance in this language.",
    onboardingStep2Title: "How would you like to use PARAKH?",
    onboardingStep2Desc: "Select your primary protection interest.",
    onboardingStep3Title: "You're ready.",
    onboardingStep3Desc: "PARAKH helps you understand what you receive before you act.",
    onboardingUsageOption1Title: "Check messages",
    onboardingUsageOption1Desc: "WhatsApp & Telegram tips",
    onboardingUsageOption2Title: "Check screenshots",
    onboardingUsageOption2Desc: "Certificates & chat posts",
    onboardingUsageOption3Title: "Verify websites",
    onboardingUsageOption3Desc: "Trading URLs & portals",
    onboardingUsageOption4Title: "Learn about scams",
    onboardingUsageOption4Desc: "Understand Indian fraud patterns",
    backButton: "Back",
    continueButton: "Continue",
    enterParakhButton: "Enter PARAKH",

    footerTagline: "Information moves fast. Verification should move with it. — PARAKH helps you understand what you're seeing before you decide what to do.",
    footerStatutoryNoticeTitle: "Information moves fast. Verification should move with it.",
    footerStatutoryNoticeText: "PARAKH helps you understand what you're seeing before you decide what to do. DON’T JUST TRUST. VERIFY.",
    footerCopyright: `Built to protect, not persuade. Don’t just trust. Verify. © ${new Date().getFullYear()} PARAKH.`,
    footerHelplineText: "National Cyber Helpline: Dial 1930",

    trustChainBadge: "TRUST CHAIN RECONSTRUCTION",
    trustChainTitle: "See where trust breaks.",
    trustChainSubtitle: "PARAKH doesn't stop at the message. It reconstructs the relationships behind a financial claim — connecting organizations, websites, contacts, payment routes and evidence to reveal where the available proof becomes weak.",
    couldNotVerify: "Could not independently verify.",
    showHowYouKnow: "Show me how you know.",
    aiDetected: "AI detected:",
    evidenceChecked: "Evidence checked:",
    result: "Result:",
    aiAnalysisTab: "AI Analysis",
    officialEvidenceTab: "Official Evidence",
    communityEvidenceTab: "Community Evidence",

    emergingPatternBadge: "COMMUNITY INTELLIGENCE",
    emergingPatternTitle: "From individual reports to emerging patterns.",
    emergingPatternDesc: "People can report suspicious experiences and share supporting evidence. PARAKH can identify recurring signals across reports and surface possible emerging scam patterns — while keeping community claims separate from verified facts.",
    emergingPatternDisclaimer: "Community evidence adds context. It does not automatically prove fraud.",

    communitySectionBadge: "COMMUNITY EVIDENCE",
    communitySectionTitle: "Citizen Encounters & Reports",
    communitySectionSubtitle: "Corroborating reports submitted by citizens across Bharat. Transparent distinction between first-hand reports and official records.",
    communitySubmitReport: "Submit Community Report",
    communityFirstHandBadge: "First-hand report",
    communityEvidenceAttachedBadge: "Evidence attached",
    communityClaimBadge: "Community claim",
    communityOfficiallyVerifiedBadge: "Officially verified",
    communityAiSummaryTitle: "AI Community Summary",
    communityIEncounteredThis: "I personally encountered this content",
    communityDisclaimer: "Community reports provide experiential pattern visibility without treating opinions as established facts.",
    communityReportModalTitle: "Report Suspicious Financial Content",
    communityReportCityLabel: "Your City / State (e.g. Bengaluru, KA)",
    communityReportDescLabel: "What happened when you encountered this?",
    communityReportEvidenceLabel: "Evidence attached note (e.g. UPI VPA, phone, screenshot)",
    communityReportSubmitAction: "Publish to Community",
    communityReportCancelAction: "Cancel",

    simpleStopBeforeYouPay: "STOP BEFORE YOU PAY",
    simpleMessageAsksMoney: "This message asks for money.",
    simpleCouldNotVerifySender: "We could not verify who sent it.",
    simpleCheckOfficialSite: "Check the organization using its official website.",
    simpleDoNotShareOtpPin: "Do not share OTP, PIN or password.",

    verdictHighRisk: "HIGH-RISK INDICATORS DETECTED",
    verdictSomeConcerns: "SOME CONCERNS DETECTED",
    verdictNoMajorRisk: "NO MAJOR RISK SIGNALS DETECTED",
    verdictInsufficientEvidence: "INSUFFICIENT EVIDENCE",
    finalParakhVerdict: "FINAL PARAKH VERDICT",
    objectiveForensicAssessment: "Objective Forensic Assessment",
    parakhCorePrinciple: "PARAKH Core Principle",
    parakhPrincipleQuote: "“Here is what we found. Here is the evidence. Here is what remains uncertain. You decide.”",
    parakhPrincipleSubtext: "Don’t just trust. Verify. — Built for Indian cyber safety and consumer financial resilience.",

    pressureVectorsTitle: "Cognitive & Emotional Pressure Vectors (Intensity Mapping):",
    statutoryPrefix: "Statutory:",
    signalDetectedTag: "Detected",
    signalClearTag: "Clear",

    objectiveSynthesis: "Objective Synthesis",
    recurringModusOperandi: "Recurring Modus Operandi:",
    evidenceDiscrepanciesTitle: "Identified Evidence Discrepancies:",
    viewInSelectedLang: "View in selected language",
    viewOriginal: "View original submission",
    claimChallengedTag: "Claim Challenged",
    challengeClaimButton: "Challenge Claim",
    evidenceNotePrefix: "Evidence note:",
    regulatoryCheckPrefix: "Regulatory check:",
    challengeRegisteredNotice: "A community dispute has been logged against this claim. PARAKH marks contested testimonies to prevent mob consensus from being confused with official verification.",

    trustChainEntityNodes: "8 Entity Nodes",
    trustChainInspectHint: "Click any node to inspect relationships & evidence",
    nodeInspectionTitle: "Node Inspection:",
    officialSourceChecked: "Official Source Checked:",
    closeEvidenceAudit: "Close Evidence Audit",
    distinctionLayersTitle: "Distinction of Evidence Layers (No AI as Official Evidence)",
    evidenceAuditDisclaimer: "PARAKH does not fabricate regulatory approvals, user counts, or official registries. If external verification is unavailable, we explicitly state: “Could not independently verify.”",
    independentAuditTag: "Independent regulatory audit",
    reasoningBreakdown: "Reasoning & Evidence Breakdown",

    whatContradictsTitle: "What Contradicts It",
    statutoryRulesBadge: "Statutory Rules",
    observedFactsBadge: "Observed Facts",

    audioPlayingWave: "Reading section aloud...",
    audioListenSection: "Listen to this section",
    audioStopSection: "Stop reading",

    outcomeContradictoryFound: "Contradictory evidence found",
    outcomeContradictoryDesc: "Alternative legitimate hypothesis confirmed. PARAKH has revised its conclusion.",
    outcomeInconclusive: "Evidence remains inconclusive",
    outcomeInconclusiveDesc: "Available statutory records neither confirm nor disprove the claim with certainty.",
    outcomeNoContradictory: "No reliable contradictory evidence found",
    outcomeNoContradictoryDesc: "Statutory audit confirms the detected behavioral markers breach regulatory standards.",
    challengeVerdictAdjustNotice: "Willing to adjust verdict when verified counter-evidence emerges.",
    retestChallenge: "Re-test Challenge",
    verdictUpdatedTag: "Verdict Updated",

    matchingVectorsLabel: "matching vectors identified",
    hideVectorsButton: "Hide Vectors",
    inspectSharedVectorsButton: "Inspect Shared Vectors",
    sharedCharacteristicsTitle: "Shared Characteristics Detected Across Submissions:",

    // Upgraded Trust Chain Values
    trustBreakTitle: "WHERE DOES THE TRUST BREAK?",
    trustBreakSubtitle: "This is the point where the available evidence becomes weak.",
    relationshipInspectionTitle: "RELATIONSHIP INSPECTION",
    relationshipInspectionSubtitle: "Does this connection actually belong to the claimed entity?",
    claimQuestionLabel: "Claim:",
    evidenceCheckedLabel: "Evidence checked:",
    findingLabel: "Finding:",
    connectedEntitiesLabel: "connected entities",
    evidenceGapsLabel: "evidence gaps",
    suspiciousRelationshipsLabel: "suspicious relationships",
    evidenceCoverageLimited: "Evidence coverage: Limited",
    inspectRelationshipButton: "Inspect Relationship",
    trustGapDetected: "Trust gap detected",
    relationshipUnverified: "Unverified relationship",
    mismatchDetected: "Mismatch detected",
    officialSourceBadge: "Official source",
    supportingEvidenceBadge: "Supporting evidence",
    whereDoesTrustBreakQuestion: "Where does the trust break in this chain?",
    clickToInspectNodeOrEdge: "Click node or connection pill",
    statusLabel: "Status:",
    closeInspection: "Close Inspection"
};

export const TRANSLATIONS: Record<Language, UIStrings> = {
  // =========================================================================
  // ENGLISH
  // =========================================================================
  en: enStrings,

  // =========================================================================
  // KANNADA (ಕನ್ನಡ)
  // =========================================================================
  kn: {
    brandName: "PARAKH",
    checkNav: "ಪರಿಶೀಲಿಸಿ",
    learnNav: "ತಿಳಿಯಿರಿ",
    evidenceNav: "ಸಾಕ್ಷ್ಯ",
    stopAudio: "ಧ್ವನಿ ನಿಲ್ಲಿಸಿ",
    simpleMode: "ಸರಳ ಮೋಡ್",
    simpleModeActive: "ಸರಳ ಮೋಡ್ ಸಕ್ರಿಯವಾಗಿದೆ",
    loginCta: "ಲಾಗಿನ್ ಮಾಡಿ",
    logoutCta: "ಲಾಗ್‌ಔಟ್",
    privacyTooltip: "ವಿನ್ಯಾಸದಲ್ಲೇ ಗೌಪ್ಯತೆ",

    heroTitlePart1: "ನಂಬುವ ಮೊದಲು.",
    heroTitleVerify: "PARAKH ಮಾಡಿ.",
    heroSubtitle: "ಹಣಕಾಸಿನ ವಿಷಯವು ನಂಬಿಕೆಗಿಂತ ವೇಗವಾಗಿ ಹರಡುತ್ತದೆ. ಸಂದೇಶಗಳು, ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳು, ವೆಬ್‌ಸೈಟ್‌ಗಳು ಮತ್ತು ಧ್ವನಿಯನ್ನು ತನಿಖೆ ಮಾಡಲು — ಯಾವುದೇ ಕ್ರಮ ಕೈಗೊಳ್ಳುವ ಮೊದಲು ಪುರಾವೆಗಳನ್ನು ಪರಿಶೀಲಿಸಲು PARAKH ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    heroGetStarted: "ಪ್ರಾರಂಭಿಸಿ",
    heroSeeHowItWorks: "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ನೋಡಿ",
    heroCardBadge: "TRUST CHAIN RECONSTRUCTION",
    heroCardWarningSignals: "ಹಕ್ಕನ್ನು ಅನುಸರಿಸಿ. ಸಂಪರ್ಕವನ್ನು ಕಂಡುಕೊಳ್ಳಿ. ಪುರಾವೆ ಪರಿಶೀಲಿಸಿ.",
    heroCardSignalsDesc: "PARAKH ಹಕ್ಕುಗಳು, ಸಂಸ್ಥೆಗಳು, ವೆಬ್‌ಸೈಟ್‌ಗಳು, ಸಂಪರ್ಕಗಳು ಮತ್ತು ಪಾವತಿ ಮಾರ್ಗಗಳನ್ನು ಪುರಾವೆಗಳೊಂದಿಗೆ ಜೋಡಿಸಿ — ಸರಪಳಿಯಲ್ಲಿ ಎಲ್ಲಿ ಅನುಮಾನವಿದೆ ಎಂಬುದನ್ನು ತೋರಿಸುತ್ತದೆ.",
    heroCardAiSignals: "Trace",
    heroCardEvidence: "Explain",
    heroCardVerification: "Protect",

    inputHeading: "ನಿಮಗೆ ಏನು ಸಂದೇಶ ಬಂದಿದೆ?",
    inputSubtitle: "ನೀವು ಯಾವುದೇ ಕ್ರಮ ಕೈಗೊಳ್ಳುವ ಮೊದಲು ಅದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು PARAKH ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    tabMessage: "ಸಂದೇಶ",
    tabMessageDesc: "ಸಂದೇಶವನ್ನು ಇಲ್ಲಿ ನಮೂದಿಸಿ",
    tabScreenshot: "ಸ್ಕ್ರೀನ್‌ಶಾಟ್",
    tabScreenshotDesc: "ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    tabLink: "ವೆಬ್‌ಸೈಟ್",
    tabLinkDesc: "ಲಿಂಕ್ ಪರಿಶೀಲಿಸಿ",
    tabVoice: "ಧ್ವನಿ",
    tabVoiceDesc: "ಬಂದಿರುವ ಸಂದೇಶವನ್ನು ಮಾತನಾಡಿ",
    messagePlaceholder: "ನಿಮಗೆ ಬಂದಿರುವ ಸಂದೇಶವನ್ನು ಇಲ್ಲಿ ನಮೂದಿಸಿ (ಪೇಸ್ಟ್ ಮಾಡಿ)…",
    messageLangHint: "ಕನ್ನಡ, ಕಂಗ್ಲಿಷ್, ಹಿಂದಿ, ತೆಲುಗು ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಭಾಷೆಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ.",
    uploadTitle: "ಚಾಟ್ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅಥವಾ ಪ್ರಮಾಣಪತ್ರದ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    uploadSubtitle: "PNG, JPG, ಅಥವಾ WEBP ಬೆಂಬಲಿತವಾಗಿದೆ",
    ocrReady: "OCR ಮೂಲಕ ಪತ್ತೆಯಾದ ಪಠ್ಯ ಪರಿಶೀಲನೆಗೆ ಸಿದ್ಧವಾಗಿದೆ",
    clearSelection: "ತೆರವುಗೊಳಿಸಿ",
    linkPlaceholder: "ಉದಾ: https://zerodha-institutional-wealth.in ಅಥವಾ ಟೆಲಿಗ್ರಾಮ್ ಲಿಂಕ್",
    linkHint: "ಡೊಮೈನ್ ವಿವರಗಳು, ಕ್ಲೋನ್ ವೆಬ್‌ಸೈಟ್‌ಗಳು ಮತ್ತು ಫಿಶಿಂಗ್ ಡೇಟಾಬೇಸ್‌ನೊಂದಿಗೆ ತಾಳೆ ನೋಡುತ್ತದೆ.",
    voiceListening: "ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದೇವೆ... ಸ್ಪಷ್ಟವಾಗಿ ಮಾತನಾಡಿ",
    voiceTapPrompt: "ಮೈಕ್ರೋಫೋನ್ ಒತ್ತಿ ಮತ್ತು ನಿಮಗೆ ಬಂದಿರುವ ಸಂದೇಶವನ್ನು ಮಾತನಾಡಿ",
    voiceLangNote: "ಕನ್ನಡ, ಹಿಂದಿ, ತೆಲುಗು ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಮಾತನಾಡಬಹುದು",
    voiceTranscriptLabel: "ದಾಖಲಾದ ಮಾತು:",
    presetsLabel: "ಅಥವಾ ನೈಜ ಭಾರತೀಯ ವಂಚನೆ ಮಾದರಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ:",
    clearButton: "ತೆರವುಗೊಳಿಸಿ",
    analyzeButton: "PARAKH ಮೂಲಕ ಪರಿಶೀಲಿಸಿ",
    analyzingLoading: "ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...",

    examInProgress: "ಪರಿಶೀಲನೆ ಪ್ರಗತಿಯಲ್ಲಿದೆ",
    animationHeading: "PARAKH ವಿಷಯವನ್ನು ಪರಿಶೀಲಿಸುತ್ತಿದೆ...",
    animationSub: "ಪಠ್ಯ, ಶಾಸನಬದ್ಧ ನಿಯಮಗಳು ಮತ್ತು ನಡವಳಿಕೆಯ ಸಂಕೇತಗಳನ್ನು ನಿಖರವಾಗಿ ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ.",
    stageReadingLabel: "ಓದುವಿಕೆ ಮತ್ತು ವಿಶ್ಲೇಷಣೆ",
    stageReadingDesc: "ಭಾಷಾ ಶೈಲಿ ಮತ್ತು ಸ್ಥಳೀಯ ಪದಗಳ ವಿಶ್ಲೇಷಣೆ",
    stagePatternsLabel: "ಮಾದರಿಗಳನ್ನು ಪತ್ತೆಹಚ್ಚುವುದು",
    stagePatternsDesc: "ಖಾತರಿ ಲಾಭ, ತುರ್ತು ಮತ್ತು ಒತ್ತಡದ ಸಂಕೇತಗಳನ್ನು ಪ್ರತ್ಯೇಕಿಸುವುದು",
    stageEvidenceLabel: "ಸಾಕ್ಷ್ಯಗಳ ಪರಿಶೀಲನೆ",
    stageEvidenceDesc: "ಶಾಸನಬದ್ಧ ನೋಂದಣಿಗಳನ್ನು ಪರಿಶೀಲಿಸುವುದು (SEBI, RBI Sachet, MCA21)",
    stageVerifyingLabel: "ಹಕ್ಕುಗಳ ಸತ್ಯಾಸತ್ಯತೆ",
    stageVerifyingDesc: "ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಅಪರಾಧ 1930 ಮಾದರಿಗಳೊಂದಿಗೆ ಹೋಲಿಕೆ",
    stageExplanationLabel: "ವಿವರಣೆಯನ್ನು ಸಿದ್ಧಪಡಿಸುವುದು",
    stageExplanationDesc: "ಸರಳ ಭಾಷೆಯ ನಿರ್ಣಯ ಮತ್ತು ಸುರಕ್ಷತಾ ಕ್ರಮಗಳ ಸಾರಾಂಶ",
    verificationStatusLabel: "ಪರಿಶೀಲನಾ ಪ್ರಗತಿ",
    examiningBadge: "ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...",

    checkAnotherItem: "ಇನ್ನೊಂದು ವಿಷಯ ಪರಿಶೀಲಿಸಿ",
    shareAssessment: "ವರದಿ ಹಂಚಿಕೊಳ್ಳಿ",
    summaryCopied: "ಸಾರಾಂಶ ನಕಲಿಸಲಾಗಿದೆ!",
    listenVoice: "ಕೇಳಿ",
    stopVoice: "ಧ್ವನಿ ನಿಲ್ಲಿಸಿ",
    resultBadge: "ಪರಿಶೀಲಿಸಿದ ಫಲಿತಾಂಶ",
    highRiskHeading: "ಹೆಚ್ಚಿನ ಅಪಾಯದ ಸೂಚನೆಗಳು ಕಂಡುಬಂದಿವೆ",
    elevatedRiskHeading: "ಅನುಮಾನಾಸ್ಪದ ಸಂಕೇತಗಳು ಪತ್ತೆಯಾಗಿವೆ",
    cautionHeading: "ಎಚ್ಚರಿಕೆ ಅಗತ್ಯ: ಪರಿಶೀಲಿಸದ ಹಕ್ಕುಗಳು ಇವೆ",
    signalsDetectedCount: "ಎಚ್ಚರಿಕೆಯ ಸೂಚನೆಗಳು ಕಂಡುಬಂದಿವೆ",
    simpleExplanationBadge: "ಸರಳ ವಿವರಣೆ",
    summaryExplanationBadge: "ಪರಿಶೀಲನಾ ಸಾರಾಂಶ",
    detectedWarningSignalsLabel: "ಪತ್ತೆಯಾದ ಎಚ್ಚರಿಕೆ ಸಂಕೇತಗಳು:",

    whatFoundBadge: "ಭಾಷಾ ಮತ್ತು ತಂತ್ರಗಳ ವಿಶ್ಲೇಷಣೆ",
    whatFoundTitle: "PARAKH ಏನು ಪತ್ತೆಮಾಡಿದೆ",
    whatFoundSubtitle: "ಸಂದೇಶದಲ್ಲಿ ಪತ್ತೆಯಾದ ನಿಖರವಾದ ಪದಗಳು ಮತ್ತು ಒತ್ತಡದ ತಂತ್ರಗಳು.",
    highlightedExcerptsLabel: "ಗುರುತಿಸಲಾದ ಪ್ರಮುಖ ಸಾಲುಗಳು",
    signalExplanationTitle: "ಸಂಕೇತದ ವಿವರಣೆ",
    whyRiskLabel: "ಇದು ಏಕೆ ಅಪಾಯಕಾರಿ ಸಂಕೇತ:",
    regulatoryStandardLabel: "ಕಾನೂನು ನಿಯಂತ್ರಣ ಮಾನದಂಡ:",

    evidenceBadge: "ಶಾಸನಬದ್ಧ ದಾಖಲೆಗಳು",
    evidenceTitle: "ಸಾಕ್ಷ್ಯಗಳು ಏನು ಹೇಳುತ್ತವೆ?",
    evidenceSubtitle: "ಅಧಿಕೃತ ಭಾರತೀಯ ಹಣಕಾಸು ನಿಯಂತ್ರಕರ ನಿಯಮಗಳೊಂದಿಗೆ ವಿಶ್ಲೇಷಣೆ.",
    sourceTierRegulatory: "ಶಾಸನಬದ್ಧ ನಿಯಂತ್ರಕ ನಿಯಮ",
    sourceTierOfficial: "ಸರ್ಕಾರಿ ಅಧಿಕೃತ ರಿಜಿಸ್ಟ್ರಿ",
    sourceTierReputable: "ಸಾರ್ವಜನಿಕ ಅಧಿಕೃತ ದಾಖಲೆ",
    sourceTierCommunity: "ಕಾನೂನು ಜಾರಿ ಸಂಸ್ಥೆಯ ಮಾರ್ಗಸೂಚಿ",
    statusVerified: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ / ಸಾಬೀತಾಗಿದೆ",
    statusNeedsVerification: "ಪರಿಶೀಲನೆ ಅಗತ್ಯವಿದೆ",
    statusNotEstablished: "ಸ್ಥಾಪಿಸಲಾಗಿಲ್ಲ / ಸುಳ್ಳು",
    claimLabel: "ಪರಿಶೀಲಿಸಿದ ಹಕ್ಕು",
    evidenceLabel: "ಲಭ್ಯವಿರುವ ಸಾಕ್ಷ್ಯ",
    openRegistryLink: "ಅಧಿಕೃತ ಪೋರ್ಟಲ್ ತೆರೆಯಿರಿ",
    viewSourcesButton: "ಪರಿಶೀಲನಾ ಮೂಲಗಳನ್ನು ನೋಡಿ",

    evidenceGraphBadge: "ಹಂತಗಳ ಪರಿಶೀಲನೆ",
    evidenceGraphTitle: "ಸಾಕ್ಷ್ಯದ ಬಲ ಮತ್ತು ಪರಿಶೀಲನಾ ಹಂತಗಳು",
    evidenceGraphSubtitle: "ವಿಷಯ ಸ್ವೀಕಾರದಿಂದ ಅಂತಿಮ ತೀರ್ಪಿನವರೆಗಿನ ಹಂತಗಳು.",
    strengthLabel: "ವಿಶ್ವಾಸಾರ್ಹತೆಯ ಬಲ",

    whatWeKnowTitle: "ನಮಗೆ ತಿಳಿದಿರುವ ಸ್ಪಷ್ಟ ಸತ್ಯಗಳು",
    whatWeCouldNotVerifyTitle: "ನಾವು ಪರಿಶೀಲಿಸಲು ಸಾಧ್ಯವಾಗದ ಅಂಶಗಳು",
    whatWeKnowBadge: "ಪರಿಶೀಲಿಸಿದ ಸಂಕೇತಗಳು",
    whatWeCouldNotVerifyBadge: "ಅಜ್ಞಾತ ಮಾಹಿತಿ",

    challengeBadge: "PARAKH ಗೆ ಸವಾಲು (CHALLENGE)",
    challengeTitle: "ತೀರ್ಮಾನವನ್ನು ಪ್ರಶ್ನಿಸಿ / ಸವಾಲು ಮಾಡಿ.",
    challengeSubtitle: "PARAKH ತಾನು ಯಾವಾಗಲೂ ಸರಿ ಎಂದು ಭಾವಿಸುವುದಿಲ್ಲ. ಬಳಕೆದಾರರು ವಿಶ್ಲೇಷಣೆಯನ್ನು ಸವಾಲು ಮಾಡಬಹುದು ಮತ್ತು ಪರ್ಯಾಯ ಪುರಾವೆಗಳನ್ನು ಹುಡುಕಬಹುದು.",
    challengeButton: "ವಿರೋಧಾತ್ಮಕ ಪುರಾವೆಗಳನ್ನು ಹುಡುಕಿ",
    challengeTesting: "ಆರಂಭಿಕ ತೀರ್ಮಾನದಲ್ಲಿ ಯಾವುದೇ ತಪ್ಪು ಗ್ರಹಿಕೆಗಳಿವೆಯೇ ಅಥವಾ ಕಾನೂನುಬದ್ಧ ವಿನಾಯಿತಿಗಳು ಅನ್ವಯಿಸುತ್ತವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...",
    investigatingHypothesis: "ಪರಿಶೀಲಿಸಲಾದ ಪರ್ಯಾಯ ವಾದ:",
    legitimizingFound: "ಕಾನೂನುಬದ್ಧ ಸಾಧ್ಯತೆಗಳ ಪರಿಗಣನೆ:",
    contradictoryFound: "ವಿರುದ್ಧವಾದ ಶಾಸನಬದ್ಧ ಪುರಾವೆ:",
    updatedNuancedVerdict: "ಸಮಗ್ರ ಪರಿಶೀಲನಾ ತೀರ್ಮಾನ:",
    auditMaintained: "ತೀರ್ಮಾನವನ್ನು ಪ್ರಶ್ನಿಸಿ ಪುನಃ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",

    scamDnaBadge: "SCAM DNA",
    scamDnaTitle: "ಎಚ್ಚರಿಕೆಯನ್ನು ಮಾತ್ರವಲ್ಲ, ವಂಚನೆಯ ಮಾದರಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
    scamDnaSubtitle: "PARAKH ತುರ್ತು ಒತ್ತಡ, ಖಾತರಿ ಲಾಭ, ಸಂಸ್ಥೆಗಳ ಸೋಗು, ಪಾವತಿ ಒತ್ತಡ ಮತ್ತು ಫಿಶಿಂಗ್‌ನಂತಹ ನಡವಳಿಕೆಯ ಸಂಕೇತಗಳನ್ನು ಪತ್ತೆ ಮಾಡುತ್ತದೆ.",
    scamDnaDisclaimer: "Scam DNA: ಪತ್ತೆಯಾದ ನಡವಳಿಕೆಯ ಮಾದರಿಗಳು — ನಕಲಿ “ವಂಚನೆಯ ಶೇಕಡಾವಾರು” ಸ್ಕೋರ್ ಅಲ್ಲ.",
    metricUrgency: "ತುರ್ತು ಒತ್ತಡ",
    metricGuaranteed: "ಖಾತರಿ ಲಾಭದ ಭರವಸೆ",
    metricAuthority: "ಸರ್ಕಾರಿ ಸಂಸ್ಥೆಗಳ ಹೆಸರಿನ ದುರುಪಯೋಗ",
    metricPayment: "ಖಾಸಗಿ ಖಾತೆಗೆ ಹಣ ಕಳುಹಿಸುವ ಒತ್ತಡ",
    metricFear: "ಅವಕಾಶ ತಪ್ಪಿಹೋಗುವ ಭಯ (FOMO)",

    safeStepsBadge: "ಶಾಸನಬದ್ಧ ಸುರಕ್ಷತಾ ಯೋಜನೆ",
    safeStepsTitle: "ನೀವು ಕ್ರಮ ಕೈಗೊಳ್ಳುವ ಮೊದಲು",
    safeStepsSubtitle: "ನಿಯಂತ್ರಕ ಪ್ರಾಧಿಕಾರಗಳು ಶಿಫಾರಸು ಮಾಡಿದ ರಕ್ಷಣಾತ್ಮಕ ಕ್ರಮಗಳು.",

    aboutNavBack: "ಪರಿಶೀಲನೆಗೆ ಹಿಂತಿರುಗಿ",
    aboutBadge: "PARAKH ಕುರಿತು",
    aboutTitlePart1: "ಕೇವಲ ನಂಬಬೇಡಿ.",
    aboutTitleVerify: "ಪರಿಶೀಲಿಸಿ.",
    aboutDescription: "PARAKH ಭಾರತಕ್ಕಾಗಿ ನಿರ್ಮಿಸಲಾದ AI-ಚಾಲಿತ ಹಣಕಾಸು ವಿಷಯ ಪರಿಶೀಲನಾ ವೇದಿಕೆಯಾಗಿದೆ. ಅನುಮಾನಾಸ್ಪದ ವಿಷಯದಿಂದ ಪುರಾವೆ ಆಧಾರಿತ ತಿಳುವಳಿಕೆಗೆ.",
    aboutWhyTitle: "ರಕ್ಷಿಸಲು ನಿರ್ಮಿಸಲಾಗಿದೆ, ಮನವೊಲಿಸಲು ಅಲ್ಲ.",
    aboutWhyP1: "PARAKH ಯಾವುದೇ ಖರೀದಿ, ಮಾರಾಟ ಅಥವಾ ಷೇರು ಶಿಫಾರಸುಗಳನ್ನು ನೀಡುವುದಿಲ್ಲ. ಇದು ಬಳಕೆದಾರರಿಂದ OTP, PIN ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಎಂದಿಗೂ ಕೇಳುವುದಿಲ್ಲ.",
    aboutWhyP2: "ಇದರ ಉದ್ದೇಶ ಸರಳ: ಜನರು ಯಾವುದೇ ಕ್ರಮ ಕೈಗೊಳ್ಳುವ ಮೊದಲು ಸ್ವಲ್ಪ ನಿಲ್ಲಲು, ಪರಿಶೀಲಿಸಲು ಮತ್ತು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುವುದು.",
    pillar1Number: "01. TRACE",
    pillar1Title: "ನಂಬಿಕೆ ಎಲ್ಲಿ ಮುರಿಯುತ್ತದೆ ನೋಡಿ.",
    pillar1Desc: "PARAKH ಕೇವಲ ಸಂದೇಶಕ್ಕೆ ಸೀಮಿತವಾಗುವುದಿಲ್ಲ. ಸಂಸ್ಥೆಗಳು, ವೆಬ್‌ಸೈಟ್‌ಗಳು, ಸಂಪರ್ಕಗಳು ಮತ್ತು ಪಾವತಿ ಮಾರ್ಗಗಳ ನಡುವಿನ ಸಂಬಂಧಗಳನ್ನು ಪುನರ್ನಿರ್ಮಿಸಿ, ಲಭ್ಯವಿರುವ ಸಾಕ್ಷ್ಯಗಳು ಎಲ್ಲಿ ದುರ್ಬಲಗೊಳ್ಳುತ್ತವೆ ಎಂಬುದನ್ನು ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ.",
    pillar2Number: "02. EXPLAIN",
    pillar2Title: "ನಾವು ಹೇಗೆ ಕಂಡುಕೊಂಡೆವು ಎಂಬುದನ್ನು ನೋಡಿ.",
    pillar2Desc: "ಯಾವುದೇ AI ಸ್ಕೋರ್ ಅನ್ನು ಕುರುಡಾಗಿ ನಂಬಲು PARAKH ಹೇಳುವುದಿಲ್ಲ. ಏನು ಪತ್ತೆಯಾಗಿದೆ, ಯಾವ ಪುರಾವೆಗಳು ಬೆಂಬಲಿಸುತ್ತವೆ, ಯಾವುದು ವಿರೋಧಿಸುತ್ತದೆ ಮತ್ತು ಯಾವುದನ್ನು ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ ಎಂಬುದನ್ನು ಇದು ಸ್ಪಷ್ಟವಾಗಿ ತೋರಿಸುತ್ತದೆ.",
    pillar3Number: "03. BHARAT-FIRST",
    pillar3Title: "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲೇ ಪರಿಶೀಲನೆ.",
    pillar3Desc: "PARAKH ಭಾರತಕ್ಕಾಗಿ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿದೆ — ಬಹುಭಾಷಾ ವಿಶ್ಲೇಷಣೆ, ಪ್ರಾದೇಶಿಕ ಭಾಷೆಯ ವಿವರಣೆಗಳು, ಧ್ವನಿ ಸಂವಹನ ಮತ್ತು ಸರಳ ಮೋಡ್‌ನೊಂದಿಗೆ ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಸುಲಭವಾಗಿ ಲಭ್ಯ.",

    learnNavBack: "ಪರಿಶೀಲನೆಗೆ ಹಿಂತಿರುಗಿ",
    learnBadge: "HOW IT WORKS",
    learnTitle: "ಪರಿಶೀಲನೆ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
    learnSubtitle: "1 — ಸಲ್ಲಿಸಿ (ಸಂದೇಶ, ಸ್ಕ್ರೀನ್‌ಶಾಟ್, ವೆಬ್‌ಸೈಟ್ ಅಥವಾ ಧ್ವನಿ) • 2 — ವಿಶ್ಲೇಷಿಸಿ (ಅಪಾಯದ ಸಂಕೇತಗಳನ್ನು ಪತ್ತೆ ಮಾಡುತ್ತದೆ) • 3 — ಪರಿಶೀಲಿಸಿ (ಲಭ್ಯವಿರುವ ವಿಶ್ವಾಸಾರ್ಹ ಪುರಾವೆಗಳೊಂದಿಗೆ ತಾಳೆ) • 4 — ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ (Trust Chain, ಸಾಕ್ಷ್ಯಗಳ ಹಾದಿ, Scam DNA) • 5 — ಸವಾಲು ಮಾಡಿ (ಪರ್ಯಾಯ ಪುರಾವೆಗಳನ್ನು ಪರೀಕ್ಷಿಸಿ) • 6 — ಸುರಕ್ಷಿತವಾಗಿರಿ (ಮುಂದಿನ ಕ್ರಮಗಳ ಸ್ಪಷ್ಟ ಮಾರ್ಗದರ್ಶನ).",
    viewRedFlagsAction: "ಎಚ್ಚರಿಕೆಯ ಚಿಹ್ನೆಗಳನ್ನು ನೋಡಿ",
    exploreArrow: "ತಿಳಿಯಿರಿ →",
    howSchemeOperates: "ಈ ವಂಚನೆ ಹೇಗೆ ನಡೆಯುತ್ತದೆ:",
    typicalHookLabel: "ಆಕರ್ಷಿಸುವ ಸಾಮಾನ್ಯ ಮಾತು:",
    keyRedFlagsLabel: "ಪ್ರಮುಖ ಎಚ್ಚರಿಕೆಯ ಸಂಕೇತಗಳು:",
    statutorySafeRuleLabel: "ಶಾಸನಬದ್ಧ ಸುರಕ್ಷಿತ ನಿಯಮ:",
    statutoryFactLabel: "ಕಾನೂನು ಸತ್ಯ:",
    doneReadingButton: "ಓದಿದ್ದು ಮುಗಿಯಿತು",

    registriesNavBack: "ಪರಿಶೀಲನೆಗೆ ಹಿಂತಿರುಗಿ",
    registriesBadge: "ಶಾಸನಬದ್ಧ ಪೋರ್ಟಲ್‌ಗಳು",
    registriesTitle: "ಸರ್ಕಾರಿ ಮತ್ತು ಅಧಿಕೃತ ನೋಂದಣಿ ಪೋರ್ಟಲ್‌ಗಳು",
    registriesSubtitle: "ಚಾಟ್‌ನಲ್ಲಿ ಕಳುಹಿಸಲಾದ ಫೋನ್ ನಂಬರ್‌ಗಳು ಅಥವಾ ಜಾಹೀರಾತುಗಳನ್ನು ನಂಬಬೇಡಿ. ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗಳಲ್ಲಿ ನೇರವಾಗಿ ಪರಿಶೀಲಿಸಿ.",
    helplineBannerTitle: "ಹಣಕಾಸು ವಂಚನೆಯ ತಕ್ಷಣದ ರಾಷ್ಟ್ರೀಯ ಹೆಲ್ಪ್‌ಲೈನ್: 1930",
    helplineBannerDesc: "ಕಳೆದ 2-4 ಗಂಟೆಗಳಲ್ಲಿ ನೀವು ಅಜಾಗರೂಕತೆಯಿಂದ ಹಣ ವರ್ಗಾವಣೆ ಮಾಡಿದ್ದರೆ, ತಕ್ಷಣ 1930 ಗೆ ಕರೆ ಮಾಡಿ ಹಣವನ್ನು ಫ್ರೀಜ್ ಮಾಡಲು ವಿನಂತಿಸಿ.",
    helplineCallAction: "1930 ಗೆ ಕರೆ ಮಾಡಿ (ಹೆಲ್ಪ್‌ಲೈನ್)",
    authorityLabel: "ಪ್ರಾಧಿಕಾರ:",
    howToVerifyPortalLabel: "ಈ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಹೇಗೆ ಪರಿಶೀಲಿಸುವುದು:",
    visitPortalAction: "ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ",

    privacyGuaranteeBadge: "ಗೌಪ್ಯತೆಯ ಸಂಪೂರ್ಣ ಖಾತರಿ",
    privacyModalTitle: "ವಿನ್ಯಾಸದಲ್ಲೇ ಗೌಪ್ಯತೆ",
    privacyPrinciple1Title: "ಯಾವುದೇ OTP ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ",
    privacyPrinciple1Desc: "PARAKH ಯಾವುದೇ ಸಂದರ್ಭದಲ್ಲೂ ನಿಮ್ಮ OTP, ಬ್ಯಾಂಕ್ ವಿವರ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್ ಕೇಳುವುದಿಲ್ಲ.",
    privacyPrinciple2Title: "ಬ್ಯಾಂಕ್ ಲಾಗಿನ್ ಮಾಹಿತಿ ಅಗತ್ಯವಿಲ್ಲ",
    privacyPrinciple2Desc: "ನಾವು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಸಂಪರ್ಕಿಸುವುದಿಲ್ಲ ಮತ್ತು ಕಾರ್ಡ್ ವಿವರ ಅಥವಾ UPI PIN ಕೇಳುವುದಿಲ್ಲ.",
    privacyPrinciple3Title: "ಅನಗತ್ಯ ಹಣಕಾಸು ಮಾಹಿತಿ ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ",
    privacyPrinciple3Desc: "ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಸಂದೇಶಗಳು ಸಕ್ರಿಯ ಪರಿಶೀಲನೆಯ ಸಮಯದಲ್ಲಿ ಮಾತ್ರ ಬಳಕೆಯಾಗುತ್ತವೆ ಮತ್ತು ಶಾಶ್ವತವಾಗಿ ಸಂಗ್ರಹವಾಗುವುದಿಲ್ಲ.",
    privacyPrinciple4Title: "ಪಾರದರ್ಶಕತೆ ಮತ್ತು ತಕ್ಷಣದ ಅಳಿಸುವಿಕೆ ನಿಯಂತ್ರಣ",
    privacyPrinciple4Desc: "ಯಾವ ಮಾಹಿತಿ ಬಳಕೆಯಾಗಿದೆ ಎಂಬುದನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ವಿವರಿಸಿ ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಡೇಟಾ ಅಳಿಸುವ ಸೌಲಭ್ಯ ಒದಗಿಸುತ್ತದೆ.",
    purgeSessionDataButton: "ಈ ಬ್ರೌಸರ್‌ನ ಡೇಟಾವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಅಳಿಸಿ",
    privacyDoneButton: "ಮುಗಿಯಿತು",

    authBackToOverview: "← ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    loginWelcomeTitle: "ಮರಳಿ ಸ್ವಾಗತ",
    loginWelcomeSubtitle: "PARAKH ನೊಂದಿಗೆ ಸುರಕ್ಷಿತ ಪರಿಶೀಲನೆಯನ್ನು ಮುಂದುವರಿಸಿ.",
    emailLabel: "ಇಮೇಲ್ ವಿಳಾಸ",
    passwordLabel: "ಪಾಸ್‌ವರ್ಡ್",
    forgotPasswordLink: "ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರಾ?",
    loginContinueButton: "ಮುಂದುವರಿಯಿರಿ",
    orDivider: "ಅಥವಾ",
    continueWithGoogle: "Google ನೊಂದಿಗೆ ಮುಂದುವರಿಯಿರಿ",
    newToParakh: "PARAKH ಗೆ ಹೊಸಬರೇ?",
    createAccountLink: "ಖಾತೆಯನ್ನು ರಚಿಸಿ",
    createAccountTitle: "ನಿಮ್ಮ PARAKH ಖಾತೆಯನ್ನು ರಚಿಸಿ",
    createAccountSubtitle: "ಬಂದಿರುವ ಸಂದೇಶಗಳನ್ನು ಪರಿಶೀಲಿಸಲು ಸುರಕ್ಷಿತ ಮಾರ್ಗವನ್ನು ನಿರ್ಮಿಸಿಕೊಳ್ಳಿ.",
    fullNameLabel: "ಪೂರ್ಣ ಹೆಸರು",
    preferredLanguageLabel: "ಆದ್ಯತೆಯ ಭಾಷೆ",
    signupPrivacyNotice: "PARAKH ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಪಾಸ್‌ವರ್ಡ್, OTP ಅಥವಾ ಸೂಕ್ಷ್ಮ ಹಣಕಾಸು ಮಾಹಿತಿಯನ್ನು ಎಂದಿಗೂ ಕೇಳುವುದಿಲ್ಲ.",
    alreadyHaveAccount: "ಈಗಾಗಲೇ ಖಾತೆ ಹೊಂದಿದ್ದೀರಾ?",
    loginLink: "ಲಾಗಿನ್ ಮಾಡಿ",
    onboardingStepPrefix: "ಹಂತ",
    onboardingStepOf: "/ 03",
    onboardingStep1Title: "ನಿಮಗೆ ಯಾವ ಭಾಷೆ ಹೆಚ್ಚು ಅನುಕೂಲಕರ?",
    onboardingStep1Desc: "PARAKH ಅಪಾಯಗಳು ಮತ್ತು ಸುರಕ್ಷತಾ ಮಾರ್ಗದರ್ಶನವನ್ನು ಈ ಭಾಷೆಯಲ್ಲಿ ವಿವರಿಸುತ್ತದೆ.",
    onboardingStep2Title: "ನೀವು PARAKH ಅನ್ನು ಹೇಗೆ ಬಳಸಲು ಬಯಸುತ್ತೀರಿ?",
    onboardingStep2Desc: "ನಿಮ್ಮ ಪ್ರಮುಖ ರಕ್ಷಣಾ ಆದ್ಯತೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    onboardingStep3Title: "ನೀವು ಸಿದ್ಧರಿದ್ದೀರಿ.",
    onboardingStep3Desc: "ನೀವು ಕ್ರಮ ಕೈಗೊಳ್ಳುವ ಮೊದಲು ಅದನ್ನು ಸರಿಯಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು PARAKH ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    onboardingUsageOption1Title: "ಸಂದೇಶಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
    onboardingUsageOption1Desc: "WhatsApp ಮತ್ತು Telegram ಹೂಡಿಕೆ ಸಂದೇಶಗಳು",
    onboardingUsageOption2Title: "ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
    onboardingUsageOption2Desc: "ಪ್ರಮಾಣಪತ್ರಗಳು ಮತ್ತು ಚಾಟ್ ಚಿತ್ರಗಳು",
    onboardingUsageOption3Title: "ವೆಬ್‌ಸೈಟ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
    onboardingUsageOption3Desc: "ಟ್ರೇಡಿಂಗ್ ಲಿಂಕ್‌ಗಳು ಮತ್ತು ಪೋರ್ಟಲ್‌ಗಳು",
    onboardingUsageOption4Title: "ವಂಚನೆಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ",
    onboardingUsageOption4Desc: "ಭಾರತದಲ್ಲಿನ ಪ್ರಮುಖ ವಂಚನೆ ಮಾದರಿಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",
    backButton: "ಹಿಂದಕ್ಕೆ",
    continueButton: "ಮುಂದುವರಿಯಿರಿ",
    enterParakhButton: "PARAKH ಪ್ರವೇಶಿಸಿ",

    footerTagline: "ಮಾಹಿತಿ ವೇಗವಾಗಿ ಹರಿಯುತ್ತದೆ. ಪರಿಶೀಲನೆಯೂ ಅದರೊಂದಿಗೆ ಸಾಗಬೇಕು. — ನೀವು ಕ್ರಮ ಕೈಗೊಳ್ಳುವ ಮೊದಲು ಏನು ನೋಡುತ್ತಿದ್ದೀರಿ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು PARAKH ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    footerStatutoryNoticeTitle: "ಮಾಹಿತಿ ವೇಗವಾಗಿ ಹರಿಯುತ್ತದೆ. ಪರಿಶೀಲನೆಯೂ ಅದರೊಂದಿಗೆ ಸಾಗಬೇಕು.",
    footerStatutoryNoticeText: "ನೀವು ಕ್ರಮ ಕೈಗೊಳ್ಳುವ ಮೊದಲು ಏನು ನೋಡುತ್ತಿದ್ದೀರಿ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು PARAKH ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಕೇವಲ ನಂಬಬೇಡಿ. ಪರಿಶೀಲಿಸಿ.",
    footerCopyright: `ರಕ್ಷಿಸಲು ನಿರ್ಮಿಸಲಾಗಿದೆ, ಮನವೊಲಿಸಲು ಅಲ್ಲ. ಕೇವಲ ನಂಬಬೇಡಿ. ಪರಿಶೀಲಿಸಿ. © ${new Date().getFullYear()} PARAKH.`,
    footerHelplineText: "ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಹೆಲ್ಪ್‌ಲೈನ್: 1930 ಗೆ ಕರೆ ಮಾಡಿ",

    trustChainBadge: "ನಂಬಿಕೆಯ ಸರಪಳಿ ಪುನರ್ನಿರ್ಮಾಣ (Trust Chain)",
    trustChainTitle: "ನಂಬಿಕೆ ಎಲ್ಲಿ ಮುರಿಯುತ್ತದೆ ನೋಡಿ.",
    trustChainSubtitle: "PARAKH ಕೇವಲ ಸಂದೇಶಕ್ಕೆ ಸೀಮಿತವಾಗುವುದಿಲ್ಲ. ಹಣಕಾಸು ಹಕ್ಕಿನ ಹಿಂದಿನ ಸಂಬಂಧಗಳನ್ನು ಪುನರ್ನಿರ್ಮಿಸಿ, ಲಭ್ಯವಿರುವ ಸಾಕ್ಷ್ಯಗಳು ಎಲ್ಲಿ ದುರ್ಬಲಗೊಳ್ಳುತ್ತವೆ ಎಂಬುದನ್ನು ಬಹಿರಂಗಪಡಿಸುತ್ತದೆ.",
    couldNotVerify: "ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
    showHowYouKnow: "ನಾವು ಹೇಗೆ ಕಂಡುಕೊಂಡೆವು ಎಂಬುದನ್ನು ನೋಡಿ.",
    aiDetected: "AI ಪತ್ತೆಹಚ್ಚಿದ್ದು:",
    evidenceChecked: "ಪರಿಶೀಲಿಸಿದ ಸಾಕ್ಷ್ಯಗಳು:",
    result: "ಫಲಿತಾಂಶ:",
    aiAnalysisTab: "AI ವಿಶ್ಲೇಷಣೆ",
    officialEvidenceTab: "ಅಧಿಕೃತ ಸಾಕ್ಷ್ಯಗಳು",
    communityEvidenceTab: "ಸಮುದಾಯ ಸಾಕ್ಷ್ಯಗಳು",

    emergingPatternBadge: "ಸಮುದಾಯ ಗುಪ್ತಚರ (Community Intelligence)",
    emergingPatternTitle: "ವೈಯಕ್ತಿಕ ವರದಿಗಳಿಂದ ಹೊರಹೊಮ್ಮುತ್ತಿರುವ ಮಾದರಿಗಳಿಗೆ.",
    emergingPatternDesc: "ನಾಗರಿಕರು ಅನುಮಾನಾಸ್ಪದ ಅನುಭವಗಳನ್ನು ವರದಿ ಮಾಡಬಹುದು. PARAKH ಮರುಕಳಿಸುವ ಸಂಕೇತಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ ಮತ್ತು ಸತ್ಯಾಸತ್ಯತೆಗಳನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿರಿಸುತ್ತದೆ.",
    emergingPatternDisclaimer: "ಸಮುದಾಯ ಪುರಾವೆಗಳು ಸಹಾಯಕ ಸಂದರ್ಭವನ್ನು ನೀಡುತ್ತವೆ. ಅವು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ವಂಚನೆಯನ್ನು ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ.",

    communitySectionBadge: "ಸಮುದಾಯ ಸಾಕ್ಷ್ಯಗಳು",
    communitySectionTitle: "ನಾಗರಿಕರ ಅನುಭವಗಳು ಮತ್ತು ವರದಿಗಳು",
    communitySectionSubtitle: "ಭಾರತದಾದ್ಯಂತ ನಾಗರಿಕರು ಹಂಚಿಕೊಂಡ ದೃಢೀಕರಣಗಳು. ಪ್ರತ್ಯಕ್ಷ ವರದಿಗಳು ಮತ್ತು ಅಧಿಕೃತ ದಾಖಲೆಗಳ ನಡುವೆ ಸ್ಪಷ್ಟ ವ್ಯತ್ಯಾಸ.",
    communitySubmitReport: "ಸಮುದಾಯ ವರದಿ ಸಲ್ಲಿಸಿ",
    communityFirstHandBadge: "ಪ್ರತ್ಯಕ್ಷ ವರದಿ",
    communityEvidenceAttachedBadge: "ಸಾಕ್ಷ್ಯ ಲಗತ್ತಿಸಲಾಗಿದೆ",
    communityClaimBadge: "ಸಮುದಾಯದ ಹಕ್ಕು",
    communityOfficiallyVerifiedBadge: "ಅಧಿಕೃತವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    communityAiSummaryTitle: "AI ಸಮುದಾಯ ಸಾರಾಂಶ",
    communityIEncounteredThis: "ನನಗೂ ಇಂತಹದ್ದೇ ಸಂದೇಶ ಬಂದಿತ್ತು",
    communityDisclaimer: "ಸಮುದಾಯ ವರದಿಗಳು ನಾಗರಿಕರ ಜಾಗೃತಿಗಾಗಿ ಮಾತ್ರ.",
    communityReportModalTitle: "ಅನುಮಾನಾಸ್ಪದ ಹಣಕಾಸು ಸಂದೇಶವನ್ನು ವರದಿ ಮಾಡಿ",
    communityReportCityLabel: "ನಿಮ್ಮ ಊರು / ರಾಜ್ಯ",
    communityReportDescLabel: "ನಿಮಗೆ ಎದುರಾದ ಅನುಭವವನ್ನು ವಿವರಿಸಿ",
    communityReportEvidenceLabel: "ಸಾಕ್ಷ್ಯದ ಮಾಹಿತಿ (UPI, ಫೋನ್, ಸ್ಕ್ರೀನ್‌ಶಾಟ್)",
    communityReportSubmitAction: "ಸಮುದಾಯಕ್ಕೆ ಪ್ರಕಟಿಸಿ",
    communityReportCancelAction: "ರದ್ದುಮಾಡಿ",

    simpleStopBeforeYouPay: "ಹಣ ಪಾವತಿಸುವ ಮುನ್ನ ನಿಲ್ಲಿ",
    simpleMessageAsksMoney: "ಈ ಸಂದೇಶವು ಹಣ ಕೇಳುತ್ತಿದೆ.",
    simpleCouldNotVerifySender: "ಇದನ್ನು ಯಾರು ಕಳುಹಿಸಿದ್ದಾರೆ ಎಂಬುದನ್ನು ನಾವು ದೃಢೀಕರಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
    simpleCheckOfficialSite: "ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್ ಮೂಲಕ ಸಂಸ್ಥೆಯನ್ನು ನೇರವಾಗಿ ಪರಿಶೀಲಿಸಿ.",
    simpleDoNotShareOtpPin: "OTP, PIN ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.",

    verdictHighRisk: "ಹೆಚ್ಚಿನ ಅಪಾಯದ ಸೂಚನೆಗಳು ಕಂಡುಬಂದಿವೆ",
    verdictSomeConcerns: "ಕೆಲವು ಅನುಮಾನಾಸ್ಪದ ಸಂಕೇತಗಳಿವೆ",
    verdictNoMajorRisk: "ಯಾವುದೇ ಪ್ರಮುಖ ಅಪಾಯದ ಸಂಕೇತಗಳಿಲ್ಲ",
    verdictInsufficientEvidence: "ಸಾಕಷ್ಟು ಸಾಕ್ಷ್ಯಗಳಿಲ್ಲ",
    finalParakhVerdict: "ಅಂತಿಮ ಪರಖ್ (PARAKH) ತೀರ್ಪು",
    objectiveForensicAssessment: "ವಸ್ತುನಿಷ್ಠ ಫೋರೆನ್ಸಿಕ್ ಮೌಲ್ಯಮಾಪನ",
    parakhCorePrinciple: "PARAKH ಮೂಲ ತತ್ವ",
    parakhPrincipleQuote: "“ನಾವು ಕಂಡುಕೊಂಡದ್ದು ಇಲ್ಲಿದೆ. ಸಾಕ್ಷ್ಯಗಳು ಇಲ್ಲಿವೆ. ಅನಿಶ್ಚಿತವಾಗಿರುವುದು ಇಲ್ಲಿದೆ. ನೀವೇ ನಿರ್ಧರಿಸಿ.”",
    parakhPrincipleSubtext: "ಕೇವಲ ನಂಬಬೇಡಿ. ಪರಿಶೀಲಿಸಿ. — ಭಾರತೀಯ ನಾಗರಿಕರ ಆರ್ಥಿಕ ಸುರಕ್ಷತೆಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ.",

    pressureVectorsTitle: "ಮಾನಸಿಕ ಮತ್ತು ಭಾವನಾತ್ಮಕ ಒತ್ತಡದ ತಂತ್ರಗಳು (ತೀವ್ರತೆ ಮ್ಯಾಪಿಂಗ್):",
    statutoryPrefix: "ಶಾಸನಬದ್ಧ ನಿಯಮ:",
    signalDetectedTag: "ಪತ್ತೆಯಾಗಿದೆ",
    signalClearTag: "ಸ್ಪಷ್ಟವಾಗಿದೆ",

    objectiveSynthesis: "ವಸ್ತುನಿಷ್ಠ ಸಂಶ್ಲೇಷಣೆ",
    recurringModusOperandi: "ಮರುಕಳಿಸುವ ವಂಚನೆ ತಂತ್ರಗಳು (Modus Operandi):",
    evidenceDiscrepanciesTitle: "ಗುರುತಿಸಲಾದ ಸಾಕ್ಷ್ಯಗಳ ಅಸಂಗತತೆಗಳು:",
    viewInSelectedLang: "ಕನ್ನಡದಲ್ಲಿ ನೋಡಿ",
    viewOriginal: "ಮೂಲ ಸಂದೇಶ ನೋಡಿ",
    claimChallengedTag: "ಹಕ್ಕನ್ನು ಸವಾಲು ಮಾಡಲಾಗಿದೆ",
    challengeClaimButton: "ಹಕ್ಕನ್ನು ಸವಾಲು ಮಾಡಿ",
    evidenceNotePrefix: "ಸಾಕ್ಷ್ಯದ ಟಿಪ್ಪಣಿ:",
    regulatoryCheckPrefix: "ನಿಯಂತ್ರಕ ಪರಿಶೀಲನೆ:",
    challengeRegisteredNotice: "ಈ ಹಕ್ಕಿನ ವಿರುದ್ಧ ಸಮುದಾಯ ವಿವಾದ ದಾಖಲಾಗಿದೆ. ಬಹುಮತವನ್ನು ಸತ್ಯವೆಂದು ತಪ್ಪಾಗಿ ಭಾವಿಸುವುದನ್ನು ತಡೆಯಲು PARAKH ಇದನ್ನು ಗುರುತಿಸುತ್ತದೆ.",

    trustChainEntityNodes: "8 ಲಿಂಕ್ ನೋಡ್‌ಗಳು",
    trustChainInspectHint: "ಸಂಬಂಧಗಳು ಮತ್ತು ಸಾಕ್ಷ್ಯಗಳನ್ನು ವೀಕ್ಷಿಸಲು ಯಾವುದೇ ನೋಡ್ ಕ್ಲಿಕ್ ಮಾಡಿ",
    nodeInspectionTitle: "ನೋಡ್ ಪರಿಶೀಲನೆ:",
    officialSourceChecked: "ಪರಿಶೀಲಿಸಲಾದ ಅಧಿಕೃತ ಮೂಲ:",
    closeEvidenceAudit: "ಸಾಕ್ಷ್ಯಗಳ ಪರಿಶೀಲನೆ ಮುಚ್ಚಿ",
    distinctionLayersTitle: "ಸಾಕ್ಷ್ಯಗಳ ಹಂತಗಳ ವ್ಯತ್ಯಾಸ (AI ಊಹೆ ಅಧಿಕೃತ ಸಾಕ್ಷ್ಯವಲ್ಲ)",
    evidenceAuditDisclaimer: "PARAKH ನಿಯಂತ್ರಕ ಅನುಮೋದನೆಗಳು, ಬಳಕೆದಾರರ ಸಂಖ್ಯೆ ಅಥವಾ ಅಧಿಕೃತ ರಿಜಿಸ್ಟ್ರಿಗಳನ್ನು ಸೃಷ್ಟಿಸುವುದಿಲ್ಲ. ಲಭ್ಯವಿಲ್ಲದಿದ್ದರೆ ಸ್ಪಷ್ಟವಾಗಿ: “ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ” ಎಂದು ಹೇಳುತ್ತದೆ.",
    independentAuditTag: "ಸ್ವತಂತ್ರ ನಿಯಂತ್ರಕ ಪರಿಶೀಲನೆ",
    reasoningBreakdown: "ಕಾರಣ ಮತ್ತು ಸಾಕ್ಷ್ಯಗಳ ವಿವರವಾದ ವಿಶ್ಲೇಷಣೆ",

    whatContradictsTitle: "ಇದಕ್ಕೆ ವಿರುದ್ಧವಾಗಿರುವ ಶಾಸನಬದ್ಧ ನಿಯಮಗಳು",
    statutoryRulesBadge: "ಶಾಸನಬದ್ಧ ನಿಯಮಗಳು",
    observedFactsBadge: "ಗಮನಿಸಿದ ಸತ್ಯಾಂಶಗಳು",

    audioPlayingWave: "ಈ ವಿಭಾಗವನ್ನು ಓದಲಾಗುತ್ತಿದೆ...",
    audioListenSection: "ಈ ವಿಭಾಗವನ್ನು ಆಲಿಸಿ",
    audioStopSection: "ಓದುವುದನ್ನು ನಿಲ್ಲಿಸಿ",

    outcomeContradictoryFound: "ವಿರೋಧಾತ್ಮಕ ಪುರಾವೆಗಳು ಕಂಡುಬಂದಿವೆ",
    outcomeContradictoryDesc: "ಪರ್ಯಾಯ ಕಾನೂನುಬದ್ಧ ಸಮರ್ಥನೆ ದೃಢಪಟ್ಟಿದೆ. PARAKH ತನ್ನ ತೀರ್ಮಾನವನ್ನು ಪರಿಷ್ಕರಿಸಿದೆ.",
    outcomeInconclusive: "ಪುರಾವೆಗಳು ಅನಿರ್ದಿಷ್ಟವಾಗಿ ಉಳಿದಿವೆ",
    outcomeInconclusiveDesc: "ಲಭ್ಯವಿರುವ ದಾಖಲೆಗಳು ಹಕ್ಕನ್ನು ದೃಢಪಡಿಸುವುದಿಲ್ಲ ಅಥವಾ ನಿರಾಕರಿಸುವುದಿಲ್ಲ.",
    outcomeNoContradictory: "ಯಾವುದೇ ವಿಶ್ವಾಸಾರ್ಹ ವಿರೋಧಾತ್ಮಕ ಪುರಾವೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
    outcomeNoContradictoryDesc: "ಶಾಸನಬದ್ಧ ಪರಿಶೀಲನೆಯು ಪತ್ತೆಯಾದ ನಡವಳಿಕೆಯ ಲಕ್ಷಣಗಳು ನಿಯಂತ್ರಕ ಮಾನದಂಡಗಳನ್ನು ಉಲ್ಲಂಘಿಸಿವೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತದೆ.",
    challengeVerdictAdjustNotice: "ಪರಿಶೀಲಿಸಿದ ಹೊಸ ಪುರಾವೆಗಳು ಹೊರಬಂದಾಗ ತೀರ್ಪನ್ನು ಸರಿಹೊಂದಿಸಲು ಸಿದ್ಧವಾಗಿದೆ.",
    retestChallenge: "ಮರು-ಪರೀಕ್ಷಿಸಿ",
    verdictUpdatedTag: "ತೀರ್ಪು ನವೀಕರಿಸಲಾಗಿದೆ",

    matchingVectorsLabel: "ಹೊಂದಾಣಿಕೆಯ ವೆಕ್ಟರ್‌ಗಳು ಪತ್ತೆಯಾಗಿವೆ",
    hideVectorsButton: "ವೆಕ್ಟರ್‌ಗಳನ್ನು ಮರೆಮಾಡಿ",
    inspectSharedVectorsButton: "ಹಂಚಿಕೆಯ ವೆಕ್ಟರ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
    sharedCharacteristicsTitle: "ಸಲ್ಲಿಕೆಗಳಲ್ಲಿ ಕಂಡುಬಂದ ಹಂಚಿಕೆಯ ಗುಣಲಕ್ಷಣಗಳು:",

    // Upgraded Trust Chain Values
    trustBreakTitle: "ನಂಬಿಕೆ ಎಲ್ಲಿ ಮುರಿಯುತ್ತದೆ?",
    trustBreakSubtitle: "ಲಭ್ಯವಿರುವ ಪುರಾವೆಗಳು ದುರ್ಬಲಗೊಳ್ಳುವ ಪ್ರಮುಖ ಬಿಂದು.",
    relationshipInspectionTitle: "ಸಂಬಂಧ ಪರಿಶೀಲನೆ (RELATIONSHIP INSPECTION)",
    relationshipInspectionSubtitle: "ಈ ಸಂಪರ್ಕವು ವಾಸ್ತವವಾಗಿ ಹೇಳಲಾದ ಘಟಕಕ್ಕೆ ಸೇರಿದೆಯೇ?",
    claimQuestionLabel: "ಹಕ್ಕು/ಪ್ರಸ್ತಾಪ:",
    evidenceCheckedLabel: "ಪರಿಶೀಲಿಸಿದ ಸಾಕ್ಷ್ಯಗಳು:",
    findingLabel: "ಪರಿಶೀಲನೆ ಫಲಿತಾಂಶ:",
    connectedEntitiesLabel: "ಸಂಪರ್ಕಿತ ಘಟಕಗಳು",
    evidenceGapsLabel: "ಸಾಕ್ಷ್ಯದ ಅಂತರಗಳು",
    suspiciousRelationshipsLabel: "ಅನುಮಾನಾಸ್ಪದ ಸಂಬಂಧಗಳು",
    evidenceCoverageLimited: "ಸಾಕ್ಷ್ಯ ವ್ಯಾಪ್ತಿ: ಸೀಮಿತ",
    inspectRelationshipButton: "ಸಂಬಂಧ ಪರಿಶೀಲಿಸಿ",
    trustGapDetected: "ನಂಬಿಕೆಯ ಅಂತರ ಪತ್ತೆಯಾಗಿದೆ",
    relationshipUnverified: "ದೃಢೀಕರಿಸದ ಸಂಬಂಧ",
    mismatchDetected: "ಹೊಂದಾಣಿಕೆಯಿಲ್ಲದಿರುವುದು ಪತ್ತೆಯಾಗಿದೆ",
    officialSourceBadge: "ಅಧಿಕೃತ ಮೂಲ",
    supportingEvidenceBadge: "ಪೂರಕ ಪುರಾವೆ",
    whereDoesTrustBreakQuestion: "ಈ ಸರಪಳಿಯಲ್ಲಿ ಪುರಾವೆಗಳು ಎಲ್ಲಿ ದುರ್ಬಲಗೊಳ್ಳುತ್ತವೆ?",
    clickToInspectNodeOrEdge: "ನೋಡ್ ಅಥವಾ ಕನೆಕ್ಟರ್ ಕ್ಲಿಕ್ ಮಾಡಿ",
    statusLabel: "ಸ್ಥಿತಿ:",
    closeInspection: "ಪರಿಶೀಲನೆ ಮುಚ್ಚಿ"
  },

  // =========================================================================
  // HINDI (हिन्दी)
  // =========================================================================
  hi: {
    brandName: "PARAKH",
    checkNav: "जाँचें",
    learnNav: "जानें",
    evidenceNav: "प्रमाण",
    stopAudio: "आवाज़ बंद करें",
    simpleMode: "सरल मोड",
    simpleModeActive: "सरल मोड सक्रिय है",
    loginCta: "लॉग इन करें",
    logoutCta: "लॉग आउट",
    privacyTooltip: "गोपनीयता सर्वप्रथम",

    heroTitlePart1: "विश्वास करने से पहले।",
    heroTitleVerify: "PARAKH करें।",
    heroSubtitle: "वित्तीय सामग्री भरोसे से भी तेज़ चलती है। PARAKH संदिग्ध संदेशों, स्क्रीनशॉट, वेबसाइटों और ऑडियो इनपुट की जाँच करने में मदद करता है — कोई भी कदम उठाने से पहले दावों को उनके सबूतों से जोड़कर।",
    heroGetStarted: "शुरू करें",
    heroSeeHowItWorks: "यह कैसे काम करता है देखें",
    heroCardBadge: "TRUST CHAIN RECONSTRUCTION",
    heroCardWarningSignals: "दावे का अनुसरण करें। संबंध खोजें। सबूत की जाँच करें।",
    heroCardSignalsDesc: "PARAKH दावों, संगठनों, वेबसाइटों, संपर्कों, भुगतान मार्गों और साक्ष्यों को जोड़ता है — फिर दिखाता है कि श्रृंखला कहाँ अनिश्चित हो जाती है।",
    heroCardAiSignals: "Trace",
    heroCardEvidence: "Explain",
    heroCardVerification: "Protect",

    inputHeading: "आपको क्या प्राप्त हुआ?",
    inputSubtitle: "कोई भी कदम उठाने से पहले PARAKH आपको इसे समझने और सत्यापित करने में मदद करता है।",
    tabMessage: "संदेश",
    tabMessageDesc: "संदेश पेस्ट करें",
    tabScreenshot: "स्क्रीनशॉट",
    tabScreenshotDesc: "चित्र अपलोड करें",
    tabLink: "वेबसाइट",
    tabLinkDesc: "लिंक जाँचें",
    tabVoice: "आवाज़",
    tabVoiceDesc: "जो मिला है उसे बोलें",
    messagePlaceholder: "व्हाट्सएप मैसेज, एसएमएस या निवेश संदेश यहाँ पेस्ट करें…",
    messageLangHint: "हिंग्लिश, हिंदी, कन्नड़, तेलुगु और अंग्रेजी सभी को समझता है।",
    uploadTitle: "चैट स्क्रीनशॉट या प्रमाणपत्र का चित्र अपलोड करें",
    uploadSubtitle: "PNG, JPG या WEBP समर्थित",
    ocrReady: "OCR द्वारा पहचाना गया पाठ निरीक्षण के लिए तैयार",
    clearSelection: "हटाएं",
    linkPlaceholder: "जैसे: https://zerodha-institutional-wealth.in या टेलीग्राम लिंक",
    linkHint: "डोमेन WHOIS, ब्रोकर क्लोन और फ़िशिंग डेटाबेस से मिलान करता है।",
    voiceListening: "सुन रहे हैं... कृपया स्पष्ट बोलें",
    voiceTapPrompt: "माइक दबाएं और बताएं क्या संदेश मिला",
    voiceLangNote: "हिंदी, कन्नड़, तेलुगु या अंग्रेजी में बोल सकते हैं",
    voiceTranscriptLabel: "पहचाना गया भाषण:",
    presetsLabel: "या प्रामाणिक भारतीय धोखाधड़ी परिदृश्यों की जाँच करें:",
    clearButton: "हटाएं",
    analyzeButton: "PARAKH से जाँचें",
    analyzingLoading: "जांच जारी है...",

    examInProgress: "जांच प्रगति पर है",
    animationHeading: "PARAKH सामग्री की जांच कर रहा है...",
    animationSub: "सामग्री, वैधानिक नियमों और व्यवहार संबंधी संकेतों का विश्लेषण किया जा रहा है।",
    stageReadingLabel: "पढ़ना और विश्लेषण",
    stageReadingDesc: "भाषाई संरचना और क्षेत्रीय शब्दों का विश्लेषण",
    stagePatternsLabel: "संकेतों की पहचान",
    stagePatternsDesc: "गारंटीड रिटर्न, जल्दबाजी और मनोवैज्ञानिक दबाव की पहचान",
    stageEvidenceLabel: "प्रमाणों की जाँच",
    stageEvidenceDesc: "नियामक रजिस्टरों से मिलान (SEBI, RBI Sachet, MCA21)",
    stageVerifyingLabel: "दावों का सत्यापन",
    stageVerifyingDesc: "राष्ट्रीय साइबर हेल्पलाइन 1930 के मामलों से मिलान",
    stageExplanationLabel: "निष्कर्ष की तैयारी",
    stageExplanationDesc: "सरल भाषा में निष्कर्ष और सुरक्षात्मक कदमों का निर्माण",
    verificationStatusLabel: "सत्यापन स्थिति",
    examiningBadge: "जांच जारी है...",

    checkAnotherItem: "अन्य सामग्री जाँचें",
    shareAssessment: "मूल्यांकन साझा करें",
    summaryCopied: "सारांश कॉपी हो गया!",
    listenVoice: "सुनिए",
    stopVoice: "आवाज़ बंद करें",
    resultBadge: "सत्यापित परिणाम",
    highRiskHeading: "उच्च जोखिम वाले संकेत मिले हैं",
    elevatedRiskHeading: "संदिग्ध संकेत पाए गए हैं",
    cautionHeading: "सावधानी जरूरी: असत्यापित दावे मौजूद हैं",
    signalsDetectedCount: "चेतावनी संकेत मिले हैं",
    simpleExplanationBadge: "सरल व्याख्या",
    summaryExplanationBadge: "सत्यापन सारांश",
    detectedWarningSignalsLabel: "पहचाने गए चेतावनी संकेत:",

    whatFoundBadge: "भाषाई और मनोवैज्ञानिक विश्लेषण",
    whatFoundTitle: "PARAKH ने क्या पाया",
    whatFoundSubtitle: "सामग्री में पाए गए सटीक अंश और दबाव बनाने की रणनीतियाँ।",
    highlightedExcerptsLabel: "चिह्नित मुख्य अंश",
    signalExplanationTitle: "संकेत की व्याख्या",
    whyRiskLabel: "यह एक जोखिम संकेत क्यों है:",
    regulatoryStandardLabel: "वैधानिक नियामक मानक:",

    evidenceBadge: "वैधानिक अभिलेख",
    evidenceTitle: "प्रमाण क्या बताते हैं?",
    evidenceSubtitle: "आधिकारिक भारतीय वित्तीय नियामकों के नियमों के साथ मिलान।",
    sourceTierRegulatory: "वैधानिक नियामक मिसाल",
    sourceTierOfficial: "सरकारी आधिकारिक रजिस्टर",
    sourceTierReputable: "सार्वजनिक आधिकारिक रिकॉर्ड",
    sourceTierCommunity: "कानून प्रवर्तन परामर्श",
    statusVerified: "सत्यापित / पुष्ट",
    statusNeedsVerification: "सत्यापन की आवश्यकता है",
    statusNotEstablished: "स्थापित नहीं / फर्जी",
    claimLabel: "जाँचा गया दावा",
    evidenceLabel: "उपलब्ध प्रमाण",
    openRegistryLink: "आधिकारिक पोर्टल खोलें",
    viewSourcesButton: "सत्यापन के स्रोत देखें",

    evidenceGraphBadge: "प्रक्रिया विश्लेषण",
    evidenceGraphTitle: "प्रमाण की शक्ति और सत्यापन प्रक्रिया",
    evidenceGraphSubtitle: "सामग्री प्राप्ति से लेकर अंतिम निष्कर्ष तक के चरण।",
    strengthLabel: "विश्वसनीयता शक्ति",

    whatWeKnowTitle: "हम क्या जानते हैं",
    whatWeCouldNotVerifyTitle: "हम क्या सत्यापित नहीं कर सके",
    whatWeKnowBadge: "सत्यापित तथ्य",
    whatWeCouldNotVerifyBadge: "अज्ञात जानकारी",

    challengeBadge: "PARAKH को चुनौती (CHALLENGE)",
    challengeTitle: "परिणाम को चुनौती दें।",
    challengeSubtitle: "PARAKH हमेशा खुद से सहमत होने के लिए नहीं बनाया गया है। उपयोगकर्ता विश्लेषण को चुनौती दे सकते हैं और विरोधाभासी या वैकल्पिक साक्ष्य खोज सकते हैं।",
    challengeButton: "विरोधाभासी साक्ष्य खोजें",
    challengeTesting: "प्रारंभिक मूल्यांकन में किसी संभावित भ्रम या वैधानिक अपवादों की जांच की जा रही है...",
    investigatingHypothesis: "जाँचा गया वैकल्पिक तर्क:",
    legitimizingFound: "वैध संभावनाओं का विचार:",
    contradictoryFound: "विरोधी वैधानिक प्रमाण:",
    updatedNuancedVerdict: "विस्तृत समीक्षा निष्कर्ष:",
    auditMaintained: "मूल्यांकन की पुनः समीक्षा की गई",

    scamDnaBadge: "SCAM DNA",
    scamDnaTitle: "पैटर्न को समझें, सिर्फ चेतावनी को नहीं।",
    scamDnaSubtitle: "PARAKH जल्दबाजी का दबाव, गारंटीड रिटर्न, संस्थागत प्रतिरूपण, भुगतान दबाव और फ़िशिंग जैसे व्यवहारिक संकेतों की पहचान करता है।",
    scamDnaDisclaimer: "Scam DNA: पहचाने गए व्यवहार संबंधी पैटर्न — कोई फर्जी “घोटाला संभावना प्रतिशत” स्कोर नहीं।",
    metricUrgency: "जल्दबाजी का दबाव",
    metricGuaranteed: "निश्चित रिटर्न के दावे",
    metricAuthority: "नियामक संस्थाओं के नाम का दुरुपयोग",
    metricPayment: "निजी खातों में पैसे मांगने का दबाव",
    metricFear: "मौका चूकने का डर पैदा करना (FOMO)",

    safeStepsBadge: "वैधानिक सुरक्षा योजना",
    safeStepsTitle: "कार्रवाई करने से पहले",
    safeStepsSubtitle: "नियामक प्राधिकरणों द्वारा अनुशंसित व्यावहारिक और सुरक्षात्मक कदम।",

    aboutNavBack: "जाँच पर वापस जाएँ",
    aboutBadge: "PARAKH के बारे में",
    aboutTitlePart1: "सिर्फ भरोसा न करें।",
    aboutTitleVerify: "जाँचें।",
    aboutDescription: "PARAKH भारत के लिए निर्मित एक AI-संचालित वित्तीय सामग्री सत्यापन प्लेटफॉर्म है। संदिग्ध सामग्री से साक्ष्य-आधारित समझ तक।",
    aboutWhyTitle: "सुरक्षा के लिए निर्मित, बहकाने के लिए नहीं।",
    aboutWhyP1: "PARAKH कोई खरीद, बिक्री या निवेश की सिफारिश नहीं करता है। यह उपयोगकर्ताओं से कभी भी OTP, PIN, पासवर्ड या अनावश्यक वित्तीय जानकारी नहीं मांगता है।",
    aboutWhyP2: "इसका उद्देश्य सरल है: कार्रवाई करने से पहले लोगों को रुकने, जाँचने और समझने में मदद करना।",
    pillar1Number: "01. TRACE",
    pillar1Title: "देखें कि विश्वास कहाँ टूटता है।",
    pillar1Desc: "PARAKH केवल संदेश तक सीमित नहीं रहता। यह वित्तीय दावे के पीछे के संबंधों का पुनर्निर्माण करता है — संस्थाओं, वेबसाइटों, संपर्कों और भुगतान मार्गों को जोड़कर दिखाता है कि उपलब्ध साक्ष्य कहाँ कमजोर पड़ते हैं।",
    pillar2Number: "02. EXPLAIN",
    pillar2Title: "देखें कि हमें यह कैसे पता चला।",
    pillar2Desc: "PARAKH आपको किसी AI स्कोर पर आँख मूँदकर विश्वास करने को नहीं कहता। यह दिखाता है कि क्या पाया गया, क्या साक्ष्य दावे का समर्थन करते हैं, क्या इसका विरोध करते हैं, और क्या स्वतंत्र रूप से सत्यापित नहीं किया जा सका।",
    pillar3Number: "03. BHARAT-FIRST",
    pillar3Title: "आपकी अपनी भाषा में सत्यापन।",
    pillar3Desc: "PARAKH भारत के लिए बनाया गया है — बहुभाषी विश्लेषण, क्षेत्रीय भाषा में व्याख्या, वॉयस इंटरैक्शन और सरल मोड के साथ सभी के लिए सुलभ।",

    learnNavBack: "जाँच पर वापस जाएँ",
    learnBadge: "HOW IT WORKS",
    learnTitle: "सत्यापन कैसे काम करता है",
    learnSubtitle: "1 — प्रस्तुत करें (संदेश, स्क्रीनशॉट, वेबसाइट या आवाज) • 2 — विश्लेषण (संदिग्ध दावों और व्यवहारिक संकेतों की पहचान) • 3 — सत्यापन (विश्वसनीय साक्ष्यों से मिलान) • 4 — समझें (Trust Chain, साक्ष्य श्रृंखला, Scam DNA) • 5 — चुनौती दें (वैकल्पिक साक्ष्यों की जांच) • 6 — सुरक्षित रहें (आगे क्या करना है इसका स्पष्ट मार्गदर्शन)।",
    viewRedFlagsAction: "खतरे के संकेत देखें",
    exploreArrow: "जानें →",
    howSchemeOperates: "यह धोखाधड़ी कैसे होती है:",
    typicalHookLabel: "फंसाने का सामान्य तरीका:",
    keyRedFlagsLabel: "मुख्य खतरे के संकेत:",
    statutorySafeRuleLabel: "वैधानिक सुरक्षा नियम:",
    statutoryFactLabel: "कानूनी तथ्य:",
    doneReadingButton: "पढ़ लिया",

    registriesNavBack: "जाँच पर वापस जाएँ",
    registriesBadge: "सरकारी पोर्टल",
    registriesTitle: "सरकारी और आधिकारिक वैधानिक पोर्टल",
    registriesSubtitle: "चैट में भेजे गए फोन नंबरों पर कभी भरोसा न करें। आधिकारिक पोर्टलों पर सीधे जांच करें।",
    helplineBannerTitle: "वित्तीय धोखाधड़ी की आपातकालीन हेल्पलाइन: 1930",
    helplineBannerDesc: "यदि आपने पिछले 2-4 घंटों में पैसे ट्रांसफर कर दिए हैं, तो तुरंत 1930 पर कॉल करें ताकि पैसे को बैंक से निकलने से पहले रोका जा सके।",
    helplineCallAction: "1930 पर कॉल करें (हेल्पलाइन)",
    authorityLabel: "प्राधिकरण:",
    howToVerifyPortalLabel: "इस पोर्टल पर सत्यापन कैसे करें:",
    visitPortalAction: "पोर्टल पर जाएं",

    privacyGuaranteeBadge: "गोपनीयता की पक्की गारंटी",
    privacyModalTitle: "गोपनीयता सर्वप्रथम",
    privacyPrinciple1Title: "कोई OTP संग्रह नहीं",
    privacyPrinciple1Desc: "PARAKH कभी भी किसी भी परिस्थिति में आपसे OTP, बैंकिंग पासवर्ड या क्रेडेंशियल नहीं मांगता।",
    privacyPrinciple2Title: "कोई बैंकिंग क्रेडेंशियल नहीं",
    privacyPrinciple2Desc: "हम कभी आपके बैंक खाते से नहीं जुड़ते और न ही कार्ड नंबर या UPI पिन मांगते हैं।",
    privacyPrinciple3Title: "कोई अनावश्यक वित्तीय जानकारी नहीं",
    privacyPrinciple3Desc: "अपलोड किए गए संदेश केवल सक्रिय सत्र के दौरान जांचे जाते हैं और स्थायी रूप से सहेजे नहीं जाते।",
    privacyPrinciple4Title: "पारदर्शी प्रक्रिया और डेटा हटाने का नियंत्रण",
    privacyPrinciple4Desc: "स्पष्ट रूप से बताता है कि क्या जानकारी जांची गई है और एक क्लिक में डेटा मिटाने की सुविधा देता है।",
    purgeSessionDataButton: "सत्र का डेटा पूरी तरह मिटाएं",
    privacyDoneButton: "हो गया",

    authBackToOverview: "← मुख्य पृष्ठ पर वापस जाएँ",
    loginWelcomeTitle: "वापसी पर स्वागत है",
    loginWelcomeSubtitle: "PARAKH के साथ सुरक्षित सत्यापन जारी रखें।",
    emailLabel: "ईमेल",
    passwordLabel: "पासवर्ड",
    forgotPasswordLink: "पासवर्ड भूल गए?",
    loginContinueButton: "जारी रखें",
    orDivider: "या",
    continueWithGoogle: "Google के साथ जारी रखें",
    newToParakh: "PARAKH पर नए हैं?",
    createAccountLink: "खाता बनाएं",
    createAccountTitle: "अपना PARAKH खाता बनाएं",
    createAccountSubtitle: "संदेशों को सुरक्षित रूप से परखने का एक बेहतर तरीका बनाएं।",
    fullNameLabel: "पूरा नाम",
    preferredLanguageLabel: "पसंदीदा भाषा",
    signupPrivacyNotice: "PARAKH कभी भी आपके बैंक पासवर्ड, OTP या वित्तीय विवरण की मांग नहीं करता है।",
    alreadyHaveAccount: "क्या आपके पास पहले से खाता है?",
    loginLink: "लॉग इन करें",
    onboardingStepPrefix: "चरण",
    onboardingStepOf: "/ 03",
    onboardingStep1Title: "आप किस भाषा में सबसे अधिक सहज हैं?",
    onboardingStep1Desc: "PARAKH जोखिम और सुरक्षा मार्गदर्शन इसी भाषा में समझाएगा।",
    onboardingStep2Title: "आप PARAKH का उपयोग कैसे करना चाहते हैं?",
    onboardingStep2Desc: "अपनी प्राथमिक सुरक्षा प्राथमिकता चुनें।",
    onboardingStep3Title: "आप तैयार हैं।",
    onboardingStep3Desc: "कोई भी कदम उठाने से पहले PARAKH आपको इसे समझने में मदद करता है।",
    onboardingUsageOption1Title: "संदेशों की जाँच",
    onboardingUsageOption1Desc: "WhatsApp और Telegram निवेश संदेश",
    onboardingUsageOption2Title: "स्क्रीनशॉट की जाँच",
    onboardingUsageOption2Desc: "प्रमाणपत्र और चैट तस्वीरें",
    onboardingUsageOption3Title: "वेबसाइटों का सत्यापन",
    onboardingUsageOption3Desc: "ट्रेडिंग लिंक और पोर्टल",
    onboardingUsageOption4Title: "धोखाधड़ी के बारे में जानें",
    onboardingUsageOption4Desc: "भारतीय धोखाधड़ी के तरीकों को समझें",
    backButton: "पीछे",
    continueButton: "जारी रखें",
    enterParakhButton: "PARAKH में प्रवेश करें",

    footerTagline: "जानकारी तेजी से फैलती है। सत्यापन को भी उसी गति से चलना चाहिए। — कोई फैसला लेने से पहले PARAKH आपको समझने में मदद करता है।",
    footerStatutoryNoticeTitle: "जानकारी तेजी से फैलती है। सत्यापन को भी उसी गति से चलना चाहिए।",
    footerStatutoryNoticeText: "PARAKH आपको कोई फैसला लेने से पहले यह समझने में मदद करता है कि आप क्या देख रहे हैं। सिर्फ भरोसा न करें। जाँचें।",
    footerCopyright: `सुरक्षा के लिए निर्मित, बहकाने के लिए नहीं। सिर्फ भरोसा न करें। जाँचें। © ${new Date().getFullYear()} PARAKH.`,
    footerHelplineText: "राष्ट्रीय साइबर हेल्पलाइन: 1930 डायल करें",

    trustChainBadge: "ट्रस्ट चेन पुनर्निर्माण (Trust Chain)",
    trustChainTitle: "देखें कि विश्वास कहाँ टूटता है।",
    trustChainSubtitle: "PARAKH केवल संदेश तक सीमित नहीं रहता। यह वित्तीय दावे के पीछे के संबंधों का पुनर्निर्माण करता है — संस्थाओं, वेबसाइटों, संपर्कों और भुगतान मार्गों को जोड़कर दिखाता है कि उपलब्ध साक्ष्य कहाँ कमजोर पड़ते हैं।",
    couldNotVerify: "स्वतंत्र रूप से सत्यापित नहीं किया जा सका।",
    showHowYouKnow: "देखें ਕਿ हमें यह कैसे पता चला।",
    aiDetected: "AI द्वारा पहचाना गया:",
    evidenceChecked: "जांचे गए साक्ष्य:",
    result: "परिणाम:",
    aiAnalysisTab: "AI विश्लेषण",
    officialEvidenceTab: "आधिकारिक साक्ष्य",
    communityEvidenceTab: "समुदाय साक्ष्य",

    emergingPatternBadge: "सामुदायिक बुद्धिमत्ता (Community Intelligence)",
    emergingPatternTitle: "व्यक्तिगत रिपोर्टों से उभरते हुए पैटर्न तक।",
    emergingPatternDesc: "नागरिक संदिग्ध अनुभवों की रिपोर्ट कर सकते हैं और साक्ष्य साझा कर सकते हैं। PARAKH रिपोर्टों में दोहराए जाने वाले संकेतों की पहचान करता है और दावों को सत्यापित तथ्यों से अलग रखता है।",
    emergingPatternDisclaimer: "सामुदायिक साक्ष्य संदर्भ जोड़ते हैं। वे स्वतः धोखाधड़ी साबित नहीं करते हैं।",

    communitySectionBadge: "समुदाय साक्ष्य",
    communitySectionTitle: "नागरिकों के अनुभव और रिपोर्ट",
    communitySectionSubtitle: "भारत भर के नागरिकों द्वारा साझा किए गए मामले। प्रत्यक्ष रिपोर्ट और आधिकारिक रिकॉर्ड के बीच स्पष्ट अंतर।",
    communitySubmitReport: "सामुदायिक रिपोर्ट दर्ज करें",
    communityFirstHandBadge: "प्रत्यक्ष अनुभव",
    communityEvidenceAttachedBadge: "साक्ष्य संलग्न",
    communityClaimBadge: "समुदाय का दावा",
    communityOfficiallyVerifiedBadge: "आधिकारिक तौर पर सत्यापित",
    communityAiSummaryTitle: "AI समुदाय सारांश",
    communityIEncounteredThis: "मुझे भी ऐसा ही संदेश मिला था",
    communityDisclaimer: "सामुदायिक रिपोर्टें जनहित और जागरूकता के लिए हैं।",
    communityReportModalTitle: "संदिग्ध वित्तीय सामग्री की रिपोर्ट करें",
    communityReportCityLabel: "आपका शहर / राज्य",
    communityReportDescLabel: "आपके साथ क्या हुआ, विस्तार से बताएं",
    communityReportEvidenceLabel: "साक्ष्य का विवरण (UPI, फोन, स्क्रीनशॉट)",
    communityReportSubmitAction: "समुदाय में प्रकाशित करें",
    communityReportCancelAction: "रद्द करें",

    simpleStopBeforeYouPay: "पैसे भेजने से पहले रुकें",
    simpleMessageAsksMoney: "यह संदेश पैसे मांग रहा है।",
    simpleCouldNotVerifySender: "हम यह सत्यापित नहीं कर सके कि यह संदेश वास्तव में किसने भेजा है।",
    simpleCheckOfficialSite: "आधिकारिक वेबसाइट पर जाकर संस्था की सीधे जांच करें।",
    simpleDoNotShareOtpPin: "अपना OTP, PIN या पासवर्ड किसी के साथ साझा न करें।",

    verdictHighRisk: "उच्च जोखिम वाले संकेत मिले हैं",
    verdictSomeConcerns: "कुछ चिंताजनक संकेत मौजूद हैं",
    verdictNoMajorRisk: "कोई बड़ा जोखिम संकेत नहीं मिला",
    verdictInsufficientEvidence: "अपर्याप्त साक्ष्य",
    finalParakhVerdict: "अंतिम परख (PARAKH) निर्णय",
    objectiveForensicAssessment: "वस्तुनिष्ठ फोरेंसिक मूल्यांकन",
    parakhCorePrinciple: "PARAKH का मूल सिद्धांत",
    parakhPrincipleQuote: "“हमने जो पाया वह यहाँ है। साक्ष्य यहाँ हैं। जो अनिश्चित है वह यहाँ है। निर्णय आपका है।”",
    parakhPrincipleSubtext: "सिर्फ भरोसा न करें। जाँचें। — भारतीय नागरिकों की वित्तीय सुरक्षा के लिए निर्मित।",

    pressureVectorsTitle: "संज्ञानात्मक और भावनात्मक दबाव के तरीके (तीव्रता मापन):",
    statutoryPrefix: "वैधानिक नियम:",
    signalDetectedTag: "पहचाना गया",
    signalClearTag: "सुरक्षित",

    objectiveSynthesis: "वस्तुनिष्ठ संश्लेषण",
    recurringModusOperandi: "बार-बार दोहराया जाने वाला धोखाधड़ी का तरीका:",
    evidenceDiscrepanciesTitle: "पहचाने गए साक्ष्य में विसंगतियाँ:",
    viewInSelectedLang: "हिन्दी में देखें",
    viewOriginal: "मूल संदेश देखें",
    claimChallengedTag: "दावे को चुनौती दी गई",
    challengeClaimButton: "दावे को चुनौती दें",
    evidenceNotePrefix: "साक्ष्य विवरण:",
    regulatoryCheckPrefix: "नियामक जाँच:",
    challengeRegisteredNotice: "इस दावे के खिलाफ समुदाय में आपत्ति दर्ज की गई है। PARAKH केवल भीड़ की राय को कानूनी सच मानने से अलग रखता है।",

    trustChainEntityNodes: "8 नोड्स",
    trustChainInspectHint: "संबंधों और साक्ष्यों की जांच के लिए किसी भी नोड पर क्लिक करें",
    nodeInspectionTitle: "नोड निरीक्षण:",
    officialSourceChecked: "जांचा गया आधिकारिक स्रोत:",
    closeEvidenceAudit: "साक्ष्य निरीक्षण बंद करें",
    distinctionLayersTitle: "साक्ष्य परतों का स्पष्ट भेद (AI अनुमान आधिकारिक प्रमाण नहीं है)",
    evidenceAuditDisclaimer: "PARAKH फर्जी नियामक स्वीकृतियां या आंकड़े नहीं गढ़ता। साक्ष्य उपलब्ध न होने पर स्पष्ट रूप से कहता है: “स्वतंत्र रूप से सत्यापित नहीं किया जा सका।”",
    independentAuditTag: "स्वतंत्र नियामक ऑडिट",
    reasoningBreakdown: "कारण और साक्ष्य का विस्तृत विवरण",

    whatContradictsTitle: "इसके विपरीत वैधानिक नियम",
    statutoryRulesBadge: "वैधानिक नियम",
    observedFactsBadge: "अवलोकित तथ्य",

    audioPlayingWave: "यह अनुभाग पढ़ा जा रहा है...",
    audioListenSection: "इस अनुभाग को सुनें",
    audioStopSection: "पढ़ना बंद करें",

    outcomeContradictoryFound: "परस्पर विरोधी साक्ष्य मिले",
    outcomeContradictoryDesc: "वैकल्पिक वैध परिकल्पना की पुष्टि हुई। PARAKH ने अपने निष्कर्ष को संशोधित किया है।",
    outcomeInconclusive: "साक्ष्य अनिर्णायक बने हुए हैं",
    outcomeInconclusiveDesc: "उपलब्ध वैधानिक रिकॉर्ड दावे की पुष्टि या खंडन निश्चितता से नहीं करते।",
    outcomeNoContradictory: "कोई विश्वसनीय परस्पर विरोधी साक्ष्य नहीं मिला",
    outcomeNoContradictoryDesc: "वैधानिक ऑडिट पुष्टि करता है कि पाए गए व्यवहारिक संकेत नियामक मानकों का उल्लंघन करते हैं।",
    challengeVerdictAdjustNotice: "सत्यापित प्रति-साक्ष्य मिलने पर निर्णय बदलने को तत्पर।",
    retestChallenge: "पुनः चुनौती दें",
    verdictUpdatedTag: "मूल्यांकन संशोधित",

    matchingVectorsLabel: "समान वैधानिक वैक्टर पाए गए",
    hideVectorsButton: "वेक्टर छुपाएं",
    inspectSharedVectorsButton: "साझा वैक्टरों की जांच करें",
    sharedCharacteristicsTitle: "प्रस्तुतियों में पाए गए साझा लक्षण:",

    // Upgraded Trust Chain Values
    trustBreakTitle: "विश्वास कहाँ टूटता है?",
    trustBreakSubtitle: "वह बिंदु जहाँ उपलब्ध साक्ष्य कमजोर या संदिग्ध हो जाते हैं।",
    relationshipInspectionTitle: "संबंध की जांच (RELATIONSHIP INSPECTION)",
    relationshipInspectionSubtitle: "क्या यह संबंध वास्तव में दावा की गई संस्था का है?",
    claimQuestionLabel: "दावा:",
    evidenceCheckedLabel: "जाँचे गए साक्ष्य:",
    findingLabel: "निष्कर्ष:",
    connectedEntitiesLabel: "जुड़े हुए घटक",
    evidenceGapsLabel: "साक्ष्य अंतराल",
    suspiciousRelationshipsLabel: "संदिग्ध संबंध",
    evidenceCoverageLimited: "साक्ष्य कवरेज: सीमित",
    inspectRelationshipButton: "संबंध की जांच करें",
    trustGapDetected: "विश्वास अंतराल पहचाना गया",
    relationshipUnverified: "असत्यापित संबंध",
    mismatchDetected: "विसंगति पाई गई",
    officialSourceBadge: "आधिकारिक स्रोत",
    supportingEvidenceBadge: "समर्थक साक्ष्य",
    whereDoesTrustBreakQuestion: "इस श्रृंखला में साक्ष्य कहाँ कमजोर पड़ते हैं?",
    clickToInspectNodeOrEdge: "नोड या कनेक्शन पर क्लिक करें",
    statusLabel: "स्थिति:",
    closeInspection: "जांच बंद करें"
  },

  // =========================================================================
  // TELUGU (తెలుగు)
  // =========================================================================
  te: {
    brandName: "PARAKH",
    checkNav: "పరిశీలించండి",
    learnNav: "తెలుసుకోండి",
    evidenceNav: "ఆధారాలు",
    stopAudio: "ఆడియో ఆపండి",
    simpleMode: "సరళమైన మోడ్",
    simpleModeActive: "సరళమైన మోడ్ క్రియాశీలంగా ఉంది",
    loginCta: "లాగిన్ అవ్వండి",
    logoutCta: "లాగౌట్",
    privacyTooltip: "గోప్యతకు ప్రాధాన్యత",

    heroTitlePart1: "నమ్మడానికి ముందు.",
    heroTitleVerify: "PARAKH చేయండి.",
    heroSubtitle: "ఆర్థిక సమాచారం నమ్మకం కంటే వేగంగా వ్యాపిస్తుంది. అనుమానాస్పద సందేశాలు, స్క్రీన్‌షాట్‌లు, వెబ్‌సైట్‌లు మరియు వాయిస్ ఇన్‌పుట్‌లను పరిశీలించి — ఏ చర్య తీసుకునే ముందైనా సాక్ష్యాలను నిర్ధారించుకోవడానికి PARAKH మీకు సహాయపడుతుంది.",
    heroGetStarted: "ప్రారంభించండి",
    heroSeeHowItWorks: "ఇది ఎలా పనిచేస్తుందో చూడండి",
    heroCardBadge: "TRUST CHAIN RECONSTRUCTION",
    heroCardWarningSignals: "దావాను అనుసరించండి. సంబంధాన్ని కనుగొనండి. సాక్ష్యాన్ని తనిఖీ చేయండి.",
    heroCardSignalsDesc: "PARAKH దావాలు, సంస్థలు, వెబ్‌సైట్‌లు, పరిచయాలు, చెల్లింపు మార్గాలు మరియు సాక్ష్యాలను కలుపుతుంది — ఆపై గొలుసు ఎక్కడ బలహీనపడుతుందో చూపుతుంది.",
    heroCardAiSignals: "Trace",
    heroCardEvidence: "Explain",
    heroCardVerification: "Protect",

    inputHeading: "మీకు ఏ సందేశం వచ్చింది?",
    inputSubtitle: "మీరు ఏదైనా చర్య తీసుకునే ముందు దాన్ని అర్థం చేసుకుని ధృవీకరించడానికి PARAKH మీకు సహాయపడుతుంది.",
    tabMessage: "సందేశం",
    tabMessageDesc: "సందేశాన్ని అతికించండి",
    tabScreenshot: "స్క్రీన్‌షాట్",
    tabScreenshotDesc: "చిత్రాన్ని అప్‌లోడ్ చేయండి",
    tabLink: "వెబ్‌సైట్",
    tabLinkDesc: "లింక్‌ని తనిఖీ చేయండి",
    tabVoice: "వాయిస్",
    tabVoiceDesc: "వచ్చిన విషయాన్ని మాట్లాడండి",
    messagePlaceholder: "మీకు వచ్చిన వాట్సాప్, ఎస్ఎంఎస్ లేదా ఇన్వెస్ట్‌మెంట్ సందేశాన్ని ఇక్కడ అతికించండి…",
    messageLangHint: "తెలుగు, హింగ్లిష్, కన్నడ, హిందీ మరియు ఇంగ్లీష్‌లను అర్థం చేసుకుంటుంది.",
    uploadTitle: "చాట్ స్క్రీన్‌షాట్ లేదా సర్టిఫికేట్ చిత్రాన్ని అప్‌లోడ్ చేయండి",
    uploadSubtitle: "PNG, JPG లేదా WEBP సపోర్ట్ చేయబడుతుంది",
    ocrReady: "OCR ద్వారా గుర్తించిన వచనం తనిఖీకి సిద్ధంగా ఉంది",
    clearSelection: "క్లియర్ చేయండి",
    linkPlaceholder: "ఉదా: https://zerodha-institutional-wealth.in లేదా టెలిగ్రామ్ లింక్",
    linkHint: "డొమైన్ WHOIS, క్లోన్ బ్రోకర్లు మరియు ఫిషింగ్ డేటాబేస్‌లతో సరిపోలుస్తుంది.",
    voiceListening: "వింటున్నాము... స్పష్టంగా మాట్లాడండి",
    voiceTapPrompt: "మైక్రోఫోన్ నొక్కి మీకు వచ్చిన సందేశం గురించి చెప్పండి",
    voiceLangNote: "తెలుగు, కన్నడ, హిందీ లేదా ఇంగ్లీషులో మాట్లాడవచ్చు",
    voiceTranscriptLabel: "రికార్డ్ చేయబడిన మాట:",
    presetsLabel: "లేదా నిజమైన భారతీయ మోసాల ఉదాహరణలను పరిశీలించండి:",
    clearButton: "క్లియర్ చేయండి",
    analyzeButton: "PARAKH తో పరిశీలించండి",
    analyzingLoading: "పరిశీలిస్తున్నాము...",

    examInProgress: "పరిశీలన జరుగుతోంది",
    animationHeading: "PARAKH విషయాన్ని పరిశీలిస్తోంది...",
    animationSub: "వచనం, చట్టబద్ధమైన నిబంధనలు మరియు ప్రవర్తనా సంకేతాలను విశ్లేషిస్తున్నాము.",
    stageReadingLabel: "చదవడం మరియు విశ్లేషణ",
    stageReadingDesc: "భాషా శైలి మరియు స్థానిక పదాల విశ్లేషణ",
    stagePatternsLabel: "నమూనాలను గుర్తించడం",
    stagePatternsDesc: "గ్యారెంటీ లాభాలు, అత్యవసరం మరియు ఒత్తిడి సంకేతాలను గుర్తించడం",
    stageEvidenceLabel: "ఆధారాల పరిశీలన",
    stageEvidenceDesc: "చట్టబద్ధమైన రిజిస్ట్రీల తనిఖీ (SEBI, RBI Sachet, MCA21)",
    stageVerifyingLabel: "క్లెయిమ్‌ల ధృవీకరణ",
    stageVerifyingDesc: "జాతీయ సైబర్ హెల్ప్‌లైన్ 1930 కేసులతో పోలిక",
    stageExplanationLabel: "వివరణ తయారీ",
    stageExplanationDesc: "సరళమైన భాషలో తీర్పు మరియు రక్షణ చర్యల సారాంశం",
    verificationStatusLabel: "ధృవీకరణ స్థితి",
    examiningBadge: "పరిశీలిస్తున్నాము...",

    checkAnotherItem: "మరొక విషయాన్ని తనిఖీ చేయండి",
    shareAssessment: "నివేదికను పంచుకోండి",
    summaryCopied: "సారాంశం కాపీ చేయబడింది!",
    listenVoice: "వినండి",
    stopVoice: "ఆడియో ఆపండి",
    resultBadge: "ధృవీకరించిన ఫలితం",
    highRiskHeading: "అధిక ప్రమాద సూచనలు గుర్తించబడ్డాయి",
    elevatedRiskHeading: "అనుమానాస్పద సంకేతాలు గుర్తించబడ్డాయి",
    cautionHeading: "జాగ్రత్త అవసరం: ధృవీకరించని క్లెయిమ్‌లు ఉన్నాయి",
    signalsDetectedCount: "హెచ్చరిక సూచనలు గుర్తించబడ్డాయి",
    simpleExplanationBadge: "సరళమైన వివరణ",
    summaryExplanationBadge: "ధృవీకరణ సారాంశం",
    detectedWarningSignalsLabel: "గుర్తించబడిన హెచ్చరిక సంకేతాలు:",

    whatFoundBadge: "భాష మరియు వ్యూహాల విశ్లేషణ",
    whatFoundTitle: "PARAKH ఏమి గుర్తించింది",
    whatFoundSubtitle: "విషయంలో గుర్తించిన ఖచ్చితమైన అంశాలు మరియు ఒత్తిడి వ్యూహాలు.",
    highlightedExcerptsLabel: "గుర్తించిన ముఖ్యమైన వాక్యాలు",
    signalExplanationTitle: "సంకేత వివరణ",
    whyRiskLabel: "ఇది ప్రమాదకరమైన సంకేతం ఎందుకు:",
    regulatoryStandardLabel: "చట్టబద్ధమైన నియంత్రణ ప్రమాణం:",

    evidenceBadge: "చట్టబద్ధమైన రికార్డులు",
    evidenceTitle: "ఆధారాలు ఏమి చెబుతున్నాయి?",
    evidenceSubtitle: "అధికారిక భారతీయ ఆర్థిక నియంత్రణ సంస్థల నిబంధనలతో విశ్లేషణ.",
    sourceTierRegulatory: "చట్టబద్ధమైన నియంత్రణ నిబంధన",
    sourceTierOfficial: "ప్రభుత్వ అధికారిక రిజిస్ట్రీ",
    sourceTierReputable: "ప్రజా అధికారిక రికార్డు",
    sourceTierCommunity: "చట్ట అమలు సలహా",
    statusVerified: "ధృవీకరించబడింది / నిజమైనది",
    statusNeedsVerification: "ధృవీకరణ అవసరం",
    statusNotEstablished: "నిరూపించబడలేదు / నకిలీ",
    claimLabel: "పరిశీలించిన క్లెయిమ్",
    evidenceLabel: "లభించిన ఆధారాలు",
    openRegistryLink: "అధికారిక పోర్టల్ తెరవండి",
    viewSourcesButton: "ధృవీకరణ మూలాలను చూడండి",

    evidenceGraphBadge: "దశల విశ్లేషణ",
    evidenceGraphTitle: "ఆధారాల బలం మరియు ధృవీకరణ ప్రక్రియ",
    evidenceGraphSubtitle: "విషయ స్వీకరణ నుండి తుది తీర్పు వరకు దశలు.",
    strengthLabel: "విశ్వసనీయత బలం",

    whatWeKnowTitle: "మనకు తెలిసిన స్పష్టమైన విషయాలు",
    whatWeCouldNotVerifyTitle: "మనం ధృవీకరించలేకపోయిన విషయాలు",
    whatWeKnowBadge: "ధృవీకరించిన వాస్తవాలు",
    whatWeCouldNotVerifyBadge: "తెలియని సమాచారం",

    challengeBadge: "AI నిష్పాక్షికత పరీక్ష",
    challengeTitle: "ఈ ఫలితాన్ని సవాలు చేయండి",
    challengeSubtitle: "PARAKH సర్వజ్ఞాని అని క్లెయిమ్ చేయదు. ప్రత్యామ్నాయ వివరణలను పరీక్షించండి.",
    challengeButton: "ఈ అంచనా తప్పు అని నిరూపించడానికి ప్రయత్నించండి",
    challengeTesting: "ప్రారంభ అంచనాలో ఏదైనా పొరపాటు లేదా మినహాయింపు ఉందేమో PARAKH పరిశీలిస్తోంది...",
    investigatingHypothesis: "పరిశీలించిన ప్రత్యామ్నాయ వాదన:",
    legitimizingFound: "చట్టబద్ధమైన అవకాశాల పరిశీలన:",
    contradictoryFound: "విరుద్ధమైన చట్టబద్ధమైన సాక్ష్యం:",
    updatedNuancedVerdict: "సమగ్ర సమీక్ష ముగింపు:",
    auditMaintained: "అంచనా సవాలు చేయబడి తిరిగి సమీక్షించబడింది",

    scamDnaBadge: "ప్రవర్తనా నమూనా",
    scamDnaTitle: "మోసం యొక్క నమూనా",
    scamDnaSubtitle: "గుర్తించిన ప్రవర్తనా సంకేతాలు",
    scamDnaDisclaimer: "నమూనా పోలిక ఉన్నంత మాత్రాన ఏ వ్యక్తి లేదా సంస్థ మోసపూరితమైనదని చట్టబద్ధంగా నిర్ధారించబడదు.",
    metricUrgency: "అత్యవసర ఒత్తిడి",
    metricGuaranteed: "గ్యారెంటీ లాభాల వాదనలు",
    metricAuthority: "అధికారిక సంస్థల పేర్ల దుర్వినియోగం",
    metricPayment: "వ్యక్తిగత ఖాతాలకు చెల్లింపు ఒత్తిడి",
    metricFear: "అవకాశం పోతుందనే భయం (FOMO)",

    safeStepsBadge: "చట్టబద్ధమైన రక్షణ ప్రణాళిక",
    safeStepsTitle: "చర్య తీసుకునే ముందు",
    safeStepsSubtitle: "నియంత్రణ సంస్థలు సిఫార్సు చేసిన రక్షణ చర్యలు.",

    aboutNavBack: "పరిశీలనకు తిరిగి వెళ్ళండి",
    aboutBadge: "PARAKH గురించి",
    aboutTitlePart1: "గుడ్డిగా నమ్మకండి.",
    aboutTitleVerify: "ధృవీకరించండి.",
    aboutDescription: "పరఖ్ (PARAKH) అంటే పరీక్ష, క్షుణ్ణంగా పరిశీలించడం మరియు ధృవీకరించడం. ఇది భారతీయ భాషా వైవిధ్యం మరియు ప్రజల ఆర్థిక రక్షణ కోసం రూపొందించబడిన AI ప్లాట్‌ఫారమ్.",
    aboutWhyTitle: "PARAKH ఎందుకు అవసరం?",
    aboutWhyP1: "భారతదేశంలో ప్రతిరోజూ లక్షలాది మందికి 40% గ్యారెంటీ లాభాలు, నకిలీ ప్రీ-ఐపీఓ కేటాయింపులు మరియు టాస్క్ స్కామ్‌ల సందేశాలు వస్తాయి. మోసగాళ్ళు ప్రజల నమ్మకం, భాష మరియు భయాన్ని వాడుకుని కష్టపడి సంపాదించిన డబ్బును దోచుకుంటారు.",
    aboutWhyP2: "PARAKH ఏ టెక్నాలజీని గుడ్డిగా నమ్మమని చెప్పదు. బదులుగా, ఏదైనా విషయం ఎందుకు అనుమానాస్పదంగా ఉందో సాక్ష్యాలతో సహా వివరిస్తుంది, చట్టాలు ఏమి చెబుతున్నాయో చూపిస్తుంది.",
    pillar1Number: "01. బలమైన ఆధారాలు",
    pillar1Title: "చట్టబద్ధమైన రిజిస్టర్లు",
    pillar1Desc: "సాధారణ ఇంటర్నెట్ శోధనల కంటే SEBI, RBI మరియు MCA అధికారిక రికార్డులతో సరిపోల్చడం.",
    pillar2Number: "02. భారత్-ప్రథమం",
    pillar2Title: "బహుభాషా మరియు సరళత",
    pillar2Desc: "పెద్దల కోసం సరళమైన మోడ్ మరియు ఆడియోతో తెలుగు, కన్నడ, హిందీ మరియు ఇంగ్లీషులో అందుబాటులో ఉంది.",
    pillar3Number: "03. బాధ్యతాయుతమైన AI",
    pillar3Title: "నిజాయితీ గల విశ్లేషణ",
    pillar3Desc: "వాస్తవాలు మరియు తెలియని విషయాల మధ్య తేడాను గుర్తిస్తుంది, ఫలితాన్ని సవాలు చేసే అవకాశం ఇస్తుంది.",

    learnNavBack: "పరిశీలనకు తిరిగి వెళ్ళండి",
    learnBadge: "సమాచార నిధి",
    learnTitle: "భారతదేశంలో ఆర్థిక మోసాల నమూనాలు",
    learnSubtitle: "సాధారణంగా జరిగే మోసాలు ఎలా పనిచేస్తాయి, వాటి ఎరలు, హెచ్చరిక సంకేతాలు మరియు చట్టపరమైన మార్గదర్శకాలను తెలుసుకోండి.",
    viewRedFlagsAction: "హెచ్చరిక గుర్తులను చూడండి",
    exploreArrow: "తెలుసుకోండి →",
    howSchemeOperates: "ఈ మోసం ఎలా జరుగుతుంది:",
    typicalHookLabel: "సాధారణ ఎర:",
    keyRedFlagsLabel: "ముఖ్యమైన హెచ్చరిక సంకేతాలు:",
    statutorySafeRuleLabel: "చట్టబద్ధమైన రక్షణ సూత్రం:",
    statutoryFactLabel: "చట్టపరమైన వాస్తవం:",
    doneReadingButton: "చదవడం పూర్తయింది",

    registriesNavBack: "పరిశీలనకు తిరిగి వెళ్ళండి",
    registriesBadge: "చట్టబద్ధమైన పోర్టల్స్",
    registriesTitle: "ప్రభుత్వ & చట్టబద్ధమైన రిజిస్ట్రీలు",
    registriesSubtitle: "చాట్‌లలో పంపిన ఫోన్ నంబర్లు లేదా ప్రకటనలను ఎప్పుడూ నమ్మవద్దు. అధికారిక పోర్టల్స్‌లో నేరుగా ధృవీకరించండి.",
    helplineBannerTitle: "ఆర్థిక మోసాల అత్యవసర జాతీయ హెల్ప్‌లైన్: 1930",
    helplineBannerDesc: "మీరు గత 2-4 గంటల్లో డబ్బు బదిలీ చేసి ఉంటే, బ్యాంకు నుండి డబ్బు బయటకు వెళ్లకుండా ఆపడానికి వెంటనే 1930 కి కాల్ చేయండి.",
    helplineCallAction: "1930 కి కాల్ చేయండి (హెల్ప్‌లైన్)",
    authorityLabel: "అధికారిక సంస్థ:",
    howToVerifyPortalLabel: "ఈ పోర్టల్‌లో ఎలా ధృవీకరించాలి:",
    visitPortalAction: "పోర్టల్‌ను సందర్శించండి",

    privacyGuaranteeBadge: "గోప్యతకు పూర్తి హామీ",
    privacyModalTitle: "గోప్యతకు ప్రాధాన్యత",
    privacyPrinciple1Title: "OTPల సేకరణ లేదు",
    privacyPrinciple1Desc: "PARAKH ఎప్పుడూ ఏ పరిస్థితిలోనూ మీ OTP, బ్యాంకింగ్ వివరాలు లేదా పాస్‌వర్డ్‌లను అడగదు.",
    privacyPrinciple2Title: "బ్యాంకింగ్ వివరాలు అవసరం లేదు",
    privacyPrinciple2Desc: "మేము మీ బ్యాంక్ ఖాతాలకు కనెక్ట్ అవ్వము మరియు కార్డ్ నంబర్ లేదా UPI పిన్ అడగము.",
    privacyPrinciple3Title: "అనవసరమైన ఆర్థిక సమాచారం తీసుకోము",
    privacyPrinciple3Desc: "అప్‌లోడ్ చేసిన సందేశాలు కేవలం సెషన్ సమయంలో మాత్రమే విశ్లేషించబడతాయి మరియు శాశ్వతంగా నిల్వ చేయబడవు.",
    privacyPrinciple4Title: "పారదర్శకత మరియు డేటా తొలగింపు నియంత్రణ",
    privacyPrinciple4Desc: "ఏ సమాచారం ప్రాసెస్ చేయబడిందో స్పష్టంగా వివరిస్తుంది మరియు ఒకే క్లిక్‌తో డేటాను తొలగించే అవకాశం ఇస్తుంది.",
    purgeSessionDataButton: "డేటాను పూర్తిగా తొలగించండి",
    privacyDoneButton: "పూర్తయింది",

    authBackToOverview: "← ప్రధాన పేజీకి తిరిగి వెళ్ళండి",
    loginWelcomeTitle: "స్వాగతం",
    loginWelcomeSubtitle: "PARAKH తో సురక్షిత ధృవీకరణను కొనసాగించండి.",
    emailLabel: "ఇమెయిల్ చిరునామా",
    passwordLabel: "పాస్‌వర్డ్",
    forgotPasswordLink: "పాస్‌వర్డ్ మర్చిపోయారా?",
    loginContinueButton: "కొనసాగించండి",
    orDivider: "లేదా",
    continueWithGoogle: "Google తో కొనసాగించండి",
    newToParakh: "PARAKH కు కొత్తవారా?",
    createAccountLink: "ఖాతాను సృష్టించండి",
    createAccountTitle: "మీ PARAKH ఖాతాను సృష్టించండి",
    createAccountSubtitle: "సందేశాలను ధృవీకరించడానికి సురక్షితమైన మార్గాన్ని ఎంచుకోండి.",
    fullNameLabel: "పూర్తి పేరు",
    preferredLanguageLabel: "ప్రాధాన్యత గల భాష",
    signupPrivacyNotice: "PARAKH మీ బ్యాంక్ వివరాలు, OTP లేదా సున్నితమైన ఆర్థిక సమాచారాన్ని ఎప్పుడూ అడగదు.",
    alreadyHaveAccount: "ఇప్పటికే ఖాతా ఉందా?",
    loginLink: "లాగిన్ అవ్వండి",
    onboardingStepPrefix: "దశ",
    onboardingStepOf: "/ 03",
    onboardingStep1Title: "మీకు ఏ భాష అత్యంత సౌకర్యవంతంగా ఉంటుంది?",
    onboardingStep1Desc: "PARAKH ప్రమాదాలు మరియు రక్షణ మార్గదర్శకాలను ఈ భాషలోనే వివరిస్తుంది.",
    onboardingStep2Title: "మీరు PARAKH ను ఎలా ఉపయోగించాలనుకుంటున్నారు?",
    onboardingStep2Desc: "మీ ప్రాథమిక రక్షణ ప్రాధాన్యతను ఎంచుకోండి.",
    onboardingStep3Title: "మీరు సిద్ధంగా ఉన్నారు.",
    onboardingStep3Desc: "మీరు ఏదైనా చర్య తీసుకునే ముందు దాన్ని సరిగ్గా అర్థం చేసుకోవడానికి PARAKH మీకు సహాయపడుతుంది.",
    onboardingUsageOption1Title: "సందేశాలను తనిఖీ చేయండి",
    onboardingUsageOption1Desc: "WhatsApp మరియు Telegram ఇన్వెస్ట్‌మెంట్ సందేశాలు",
    onboardingUsageOption2Title: "స్క్రీన్‌షాట్‌లను తనిఖీ చేయండి",
    onboardingUsageOption2Desc: "సర్టిఫికెట్లు మరియు చాట్ చిత్రాలు",
    onboardingUsageOption3Title: "వెబ్‌సైట్‌లను ధృవీకరించండి",
    onboardingUsageOption3Desc: "ట్రేడింగ్ లింక్‌లు మరియు పోర్టల్‌లు",
    onboardingUsageOption4Title: "మోసాల గురించి తెలుసుకోండి",
    onboardingUsageOption4Desc: "భారతీయ మోసాల పద్ధతులను అర్థం చేసుకోండి",
    backButton: "వెనుకకు",
    continueButton: "కొనసాగించండి",
    enterParakhButton: "PARAKH లోకి ప్రవేశించండి",

    footerTagline: "గుడ్డిగా నమ్మకండి. ధృవీకరించండి. — భారత్ కోసం రూపొందించిన AI-ఆధారిత ఆర్థిక విషయ ధృవీకరణ.",
    footerStatutoryNoticeTitle: "చట్టబద్ధమైన హెచ్చరిక:",
    footerStatutoryNoticeText: "PARAKH అనేది ఒక విద్యాపరమైన భద్రత మరియు విషయ ధృవీకరణ వేదిక. PARAKH ఎలాంటి పెట్టుబడి సలహాలు లేదా గ్యారెంటీ అంచనాలను అందించదు. మోసాల నమూనాలతో పోలిక ఉన్నంత మాత్రాన ఏ వ్యక్తి లేదా సంస్థపై ఇది చట్టపరమైన తుది తీర్పు కాదు.",
    footerCopyright: `© ${new Date().getFullYear()} PARAKH. భారతీయ సైబర్ భద్రత మరియు పౌరుల రక్షణ కోసం రూపొందించబడింది.`,
    footerHelplineText: "జాతీయ సైబర్ హెల్ప్‌లైన్: 1930 కి కాల్ చేయండి",

    trustChainBadge: "నమ్మకపు గొలుసు పునర్నిర్మాణం (Trust Chain)",
    trustChainTitle: "నమ్మకపు గొలుసు పునర్నిర్మాణం",
    trustChainSubtitle: "సందేశం, దావాలు, సంస్థలు మరియు అధికారిక ఆధారాల మధ్య సంబంధాల పరిశీలన.",
    couldNotVerify: "స్వతంత్రంగా ధృవీకరించడం సాధ్యం కాలేదు.",
    showHowYouKnow: "మేము దీన్ని ఎలా తెలుసుకున్నామో చూడండి",
    aiDetected: "AI గుర్తించినవి:",
    evidenceChecked: "పరిశీలించిన ఆధారాలు:",
    result: "ఫలితం:",
    aiAnalysisTab: "AI విశ్లేషణ",
    officialEvidenceTab: "అధికారిక ఆధారాలు",
    communityEvidenceTab: "కమ్యూనిటీ ఆధారాలు",

    emergingPatternBadge: "కమ్యూనిటీ సంకేతం",
    emergingPatternTitle: "వెలుగులోకి వస్తున్న సంభావ్య మోసం నమూనా",
    emergingPatternDesc: "అందిన పలు నివేదికలలో ఒకే విధమైన లక్షణాలు గుర్తించబడ్డాయి.",
    emergingPatternDisclaimer: "కమ్యూనిటీ నివేదికలు సహాయక ఆధారాలు మాత్రమే, చట్టపరమైన తుది రుజువు కాదు.",

    communitySectionBadge: "కమ్యూనిటీ ఆధారాలు",
    communitySectionTitle: "పౌరుల అనుభవాలు మరియు నివేదికలు",
    communitySectionSubtitle: "భారతదేశం అంతటా పౌరులు పంచుకున్న వాస్తవ సంఘటనలు.",
    communitySubmitReport: "కమ్యూనిటీ నివేదికను సమర్పించండి",
    communityFirstHandBadge: "ప్రత్యక్ష అనుభవం",
    communityEvidenceAttachedBadge: "ఆధారం జతచేయబడింది",
    communityClaimBadge: "కమ్యూనిటీ క్లెయిమ్",
    communityOfficiallyVerifiedBadge: "అధికారికంగా ధృవీకరించబడింది",
    communityAiSummaryTitle: "AI కమ్యూనిటీ సారాంశం",
    communityIEncounteredThis: "నాకు కూడా ఇలాంటి సందేశమే వచ్చింది",
    communityDisclaimer: "కమ్యూనిటీ నివేదికలు ప్రజా అవగాహన కోసం మాత్రమే.",
    communityReportModalTitle: "అనుమానాస్పద సందేశాన్ని నివేదించండి",
    communityReportCityLabel: "మీ నగరం / రాష్ట్రం",
    communityReportDescLabel: "మీకు ఎదురైన అనుభవాన్ని వివరించండి",
    communityReportEvidenceLabel: "ఆధారాల వివరాలు (UPI, ఫోన్, స్క్రీన్‌షాట్)",
    communityReportSubmitAction: "కమ్యూనిటీలో ప్రచురించండి",
    communityReportCancelAction: "రద్దు చేయండి",

    simpleStopBeforeYouPay: "డబ్బు పంపే ముందు ఆగండి",
    simpleMessageAsksMoney: "ఈ సందేశం డబ్బు అడుగుతోంది.",
    simpleCouldNotVerifySender: "ఈ సందేశం ఎవరు పంపారో మేము ధృవీకరించలేకపోయాము.",
    simpleCheckOfficialSite: "అధికారిక వెబ్‌సైట్ ద్వారా నేరుగా సంస్థను పరిశీలించండి.",
    simpleDoNotShareOtpPin: "OTP, PIN లేదా పాస్‌వర్డ్‌ను ఎవరితోనూ పంచుకోవద్దు.",

    verdictHighRisk: "అధిక ప్రమాద సూచనలు గుర్తించబడ్డాయి",
    verdictSomeConcerns: "కొన్ని ఆందోళనకర సంకేతాలు ఉన్నాయి",
    verdictNoMajorRisk: "ఎటువంటి పెద్ద ప్రమాద సంకేతాలు లేవు",
    verdictInsufficientEvidence: "సరిపోని ఆధారాలు",
    finalParakhVerdict: "తుది పరఖ్ (PARAKH) తీర్పు",
    objectiveForensicAssessment: "నిష్పాక్షిక ఫోరెన్సిక్ అంచనా",
    parakhCorePrinciple: "PARAKH ప్రాథమిక సూత్రం",
    parakhPrincipleQuote: "“మేము గుర్తించినది ఇది. ఆధారాలు ఇవి. అనిశ్చితంగా ఉన్నది ఇది. మీరే నిర్ణయించుకోండి.”",
    parakhPrincipleSubtext: "గుడ్డిగా నమ్మకండి. ధృవీకరించండి. — భారతీయ పౌరుల ఆర్థిక రక్షణ కోసం రూపొందించబడింది.",

    pressureVectorsTitle: "మానసిక మరియు భావోద్వేగ ఒత్తిడి వ్యూహాలు (తీవ్రత కొలత):",
    statutoryPrefix: "చట్టబద్ధమైన నియమం:",
    signalDetectedTag: "గుర్తించబడింది",
    signalClearTag: "సురక్షితం",

    objectiveSynthesis: "నిష్పాక్షిక విశ్లేషణ సంశ్లేషణ",
    recurringModusOperandi: "పునరావృతమయ్యే మోసం శైలి (Modus Operandi):",
    evidenceDiscrepanciesTitle: "గుర్తించిన ఆధారాల వ్యత్యాసాలు:",
    viewInSelectedLang: "తెలుగులో చూడండి",
    viewOriginal: "అసలు సందేశాన్ని చూడండి",
    claimChallengedTag: "క్లెయిమ్ సవాలు చేయబడింది",
    challengeClaimButton: "క్లెయిమ్‌ను సవాలు చేయండి",
    evidenceNotePrefix: "లభించిన ఆధారం:",
    regulatoryCheckPrefix: "చట్టబద్ధమైన తనిఖీ:",
    challengeRegisteredNotice: "ఈ దావాపై కమ్యూనిటీ వివాదం నమోదైంది. కేవలం ఎక్కువ మంది చెప్పారు అనే కారణంతో వాస్తవంగా తీసుకోకుండా PARAKH దీన్ని వేరుచేస్తుంది.",

    trustChainEntityNodes: "8 అనుసంధాన నోడ్‌లు",
    trustChainInspectHint: "సంబంధాలు మరియు ఆధారాలను పరిశీలించడానికి ఏదైనా నోడ్‌పై క్లిక్ చేయండి",
    nodeInspectionTitle: "నోడ్ పరిశీలన:",
    officialSourceChecked: "పరిశీలించిన అధికారిక మూలం:",
    closeEvidenceAudit: "ఆధారాల పరిశీలనను ముగించండి",
    distinctionLayersTitle: "ఆధారాల స్థాయిల విభజన (AI ఊహలు అధికారిక ఆధారాలు కావు)",
    evidenceAuditDisclaimer: "PARAKH ప్రభుత్వ అనుమతులను, యూజర్ల సంఖ్యను లేదా సంస్థలను ఎప్పుడూ స్వయంగా సృష్టించదు. ఆధారం లేకపోతే స్పష్టంగా: “స్వతంత్రంగా ధృవీకరించడం సాధ్యం కాలేదు” అని చెబుతుంది.",
    independentAuditTag: "స్వతంత్ర నియంత్రణ సంస్థల తనిఖీ",
    reasoningBreakdown: "విశ్లేషణ మరియు ఆధారాల సమగ్ర వివరణ",

    whatContradictsTitle: "దీనికి విరుద్ధంగా ఉన్న చట్టబద్ధమైన నిబంధనలు",
    statutoryRulesBadge: "చట్టబద్ధమైన నియమాలు",
    observedFactsBadge: "ధృవీకరించిన వాస్తవాలు",

    audioPlayingWave: "ఈ విభాగాన్ని చదువుతున్నాము...",
    audioListenSection: "ఈ విభాగాన్ని వినండి",
    audioStopSection: "చదవడం ఆపండి",

    outcomeContradictoryFound: "విరుద్ధమైన ఆధారాలు లభించాయి",
    outcomeContradictoryDesc: "ప్రత్యామ్నాయ చట్టబద్ధమైన పరికల్పన నిర్ధారించబడింది. PARAKH తన తీర్పును సవరించింది.",
    outcomeInconclusive: "ఆధారాలు ఇంకా అసంపూర్ణంగా ఉన్నాయి",
    outcomeInconclusiveDesc: "అందుబాటులో ఉన్న రికార్డులు దావాను నిశ్చయంగా ధృవీకరించడం లేదా తోసిపుచ్చడం చేయలేవు.",
    outcomeNoContradictory: "విశ్వసనీయమైన విరుద్ధ ఆధారాలు ఏవీ లభించలేదు",
    outcomeNoContradictoryDesc: "గుర్తించిన ప్రవర్తనా సంకేతాలు నియంత్రణ ప్రమాణాలను ఉల్లంఘిస్తున్నాయని చట్టబద్ధమైన తనిఖీ ధృవీకరిస్తుంది.",
    challengeVerdictAdjustNotice: "ధృవీకరించబడిన ప్రతి-సాక్ష్యం వెలువడినప్పుడు తీర్పును సర్దుబాటు చేయడానికి సిద్ధంగా ఉన్నాము.",
    retestChallenge: "మళ్లీ సవాలు చేయండి",
    verdictUpdatedTag: "తీర్పు సవరించబడింది",

    matchingVectorsLabel: "సరిపోలే వెక్టర్‌లు గుర్తించబడ్డాయి",
    hideVectorsButton: "వెక్టర్‌లను దాచండి",
    inspectSharedVectorsButton: "ఉమ్మడి వెక్టర్‌లను పరిశీలించండి",
    sharedCharacteristicsTitle: "సమర్పణలలో గుర్తించిన ఉమ్మడి లక్షణాలు:",

    // Upgraded Trust Chain Values
    trustBreakTitle: "నమ్మకం ఎక్కడ తెగిపోతుంది?",
    trustBreakSubtitle: "అందుబాటులో ఉన్న ఆధారాలు బలహీనమయ్యే లేదా తెగిపోయే ముఖ్య స్థానం.",
    relationshipInspectionTitle: "సంబంధ పరిశీలన (RELATIONSHIP INSPECTION)",
    relationshipInspectionSubtitle: "ఈ కనెక్షన్ వాస్తవంగా పేర్కొన్న సంస్థకు చెందినదేనా?",
    claimQuestionLabel: "దావా:",
    evidenceCheckedLabel: "తనిఖీ చేసిన ఆధారాలు:",
    findingLabel: "పరిశీలన ఫలితం:",
    connectedEntitiesLabel: "అనుసంధాన విభాగాలు",
    evidenceGapsLabel: "ఆధారాల అంతరాలు",
    suspiciousRelationshipsLabel: "అనుమానాస్పద సంబంధాలు",
    evidenceCoverageLimited: "ఆధారాల కవరేజ్: పరిమితం",
    inspectRelationshipButton: "సంబంధాన్ని పరిశీలించండి",
    trustGapDetected: "నమ్మకపు అంతరం గుర్తించబడింది",
    relationshipUnverified: "ధృవీకరించని సంబంధం",
    mismatchDetected: "సరిపోలని వివరాలు గుర్తించబడ్డాయి",
    officialSourceBadge: "అధికారిక మూలం",
    supportingEvidenceBadge: "సహాయక ఆధారం",
    whereDoesTrustBreakQuestion: "ఈ గొలుసులో నమ్మకం ఎక్కడ బలహీనపడుతోంది?",
    clickToInspectNodeOrEdge: "నోడ్ లేదా కనెక్షన్‌పై క్లిక్ చేయండి",
    statusLabel: "స్థితి:",
    closeInspection: "పరిశీలన ముగించండి"
  },

  // =========================================================================
  // TAMIL (தமிழ்)
  // =========================================================================
  ta: TAMIL_TRANSLATIONS(enStrings),

  // =========================================================================
  // MALAYALAM (മലയാളം)
  // =========================================================================
  ml: EXTENDED_LANGUAGE_BUILDERS.ml(enStrings),

  // =========================================================================
  // MARATHI (मराठी)
  // =========================================================================
  mr: EXTENDED_LANGUAGE_BUILDERS.mr(enStrings),

  // =========================================================================
  // BENGALI (বাংলা)
  // =========================================================================
  bn: EXTENDED_LANGUAGE_BUILDERS.bn(enStrings),

  // =========================================================================
  // GUJARATI (ગુજરાતી)
  // =========================================================================
  gu: EXTENDED_LANGUAGE_BUILDERS.gu(enStrings),

  // =========================================================================
  // PUNJABI (ਪੰਜਾਬੀ)
  // =========================================================================
  pa: EXTENDED_LANGUAGE_BUILDERS.pa(enStrings),

  // =========================================================================
  // ODIA (ଓଡ଼ିଆ)
  // =========================================================================
  or: EXTENDED_LANGUAGE_BUILDERS.or(enStrings),

  // =========================================================================
  // URDU (اردو)
  // =========================================================================
  ur: EXTENDED_LANGUAGE_BUILDERS.ur(enStrings)
};
