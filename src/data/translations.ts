import { Language } from '../types/analysis';

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
}

export const TRANSLATIONS: Record<Language, UIStrings> = {
  // =========================================================================
  // ENGLISH
  // =========================================================================
  en: {
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

    heroTitlePart1: "Don’t just trust.",
    heroTitleVerify: "Verify.",
    heroSubtitle: "AI-powered financial content verification for Bharat.",
    heroGetStarted: "Get Started",
    heroSeeHowItWorks: "See how it works",
    heroCardBadge: "PARAKH VERIFICATION",
    heroCardWarningSignals: "Warning signals",
    heroCardSignalsDesc: "Detected across guaranteed returns, artificial urgency & unauthorized routing",
    heroCardAiSignals: "AI signals",
    heroCardEvidence: "Evidence",
    heroCardVerification: "Verification",

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

    challengeBadge: "AI HUMILITY CHECK",
    challengeTitle: "Challenge this result",
    challengeSubtitle: "PARAKH does not claim mathematical omniscience. Test alternative explanations.",
    challengeButton: "Try to prove this assessment wrong",
    challengeTesting: "PARAKH is checking whether the initial assessment could be misleading or whether legitimate exceptions exist...",
    investigatingHypothesis: "Investigated Counter-Hypothesis:",
    legitimizingFound: "Potential Legitimizing Considerations:",
    contradictoryFound: "Contradictory Regulatory Proof:",
    updatedNuancedVerdict: "Nuanced Audited Synthesis:",
    auditMaintained: "ASSESSMENT CHALLENGED & AUDITED",

    scamDnaBadge: "BEHAVIORAL SIGNALS",
    scamDnaTitle: "Scam Pattern",
    scamDnaSubtitle: "Detected behavioral signals",
    scamDnaDisclaimer: "Pattern similarity does not establish that a specific person or organization is fraudulent.",
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
    aboutDescription: "PARAKH means examination, scrutiny, and verification. It is an AI-powered financial safety platform engineered for the linguistic diversity and unique financial vulnerabilities of Bharat.",
    aboutWhyTitle: "Why PARAKH Exists",
    aboutWhyP1: "Every day across India, millions of citizens receive WhatsApp messages promising 40% guaranteed returns, fraudulent Pre-IPO allotments, task deposit scams, and bogus regulatory notices. Scammers exploit trust, language barriers, and fear to coerce people into sending life savings to disposable mule accounts.",
    aboutWhyP2: "PARAKH doesn't ask users to blindfoldedly trust another algorithm. Instead, it systematically surfaces why something is suspicious, shows what the law says, checks official registers, and guides users on how to protect their hard-earned money.",
    pillar1Number: "01. Grounded",
    pillar1Title: "Statutory Registers",
    pillar1Desc: "Evaluated against SEBI regulations, RBI directives, and MCA master records rather than unverified search snippets.",
    pillar2Number: "02. Bharat-First",
    pillar2Title: "Multilingual & Simple",
    pillar2Desc: "Accessible in English, हिंदी, ಕನ್ನಡ, and తెలుగు with Simple Mode and full voice readouts for elders.",
    pillar3Number: "03. Humble",
    pillar3Title: "Responsible AI",
    pillar3Desc: "Distinguishes between factual signals and unknowns; allows users to challenge any assessment.",

    learnNavBack: "Back to Check",
    learnBadge: "KNOWLEDGE BASE",
    learnTitle: "Financial Fraud Patterns in Bharat",
    learnSubtitle: "Understand how high-frequency financial schemes operate in India, their typical psychological hooks, red flags, and lawful regulatory guidelines.",
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

    footerTagline: "Don’t just trust. Verify. — AI-powered financial content verification built for Bharat.",
    footerStatutoryNoticeTitle: "Statutory Notice:",
    footerStatutoryNoticeText: "PARAKH is an educational safety and content verification utility. PARAKH does NOT provide investment advice, buy/sell recommendations, stock tips, or guaranteed financial predictions. Pattern similarity with known fraud indicators does not constitute a definitive legal finding against any individual or corporate entity.",
    footerCopyright: `© ${new Date().getFullYear()} PARAKH. Built for Indian Cyber Resilience & Citizen Protection.`,
    footerHelplineText: "National Cyber Helpline: Dial 1930"
  },

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

    heroTitlePart1: "ಕೇವಲ ನಂಬಬೇಡಿ.",
    heroTitleVerify: "ಪರಿಶೀಲಿಸಿ.",
    heroSubtitle: "ಭಾರತಕ್ಕಾಗಿ AI-ಚಾಲಿತ ಹಣಕಾಸು ವಿಷಯ ಪರಿಶೀಲನೆ.",
    heroGetStarted: "ಪ್ರಾರಂಭಿಸಿ",
    heroSeeHowItWorks: "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ನೋಡಿ",
    heroCardBadge: "PARAKH ಪರಿಶೀಲನೆ",
    heroCardWarningSignals: "ಎಚ್ಚರಿಕೆಯ ಸೂಚನೆಗಳು",
    heroCardSignalsDesc: "ಖಾತರಿಯ ಲಾಭ, ಕೃತಕ ತುರ್ತು ಮತ್ತು ಅನಧಿಕೃತ ಖಾತೆಗಳ ವರ್ಗಾವಣೆಯಲ್ಲಿ ಪತ್ತೆಯಾಗಿದೆ",
    heroCardAiSignals: "AI ಸಂಕೇತಗಳು",
    heroCardEvidence: "ಸಾಕ್ಷ್ಯ",
    heroCardVerification: "ಪರಿಶೀಲನೆ",

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

    challengeBadge: "AI ಪ್ರಾಮಾಣಿಕತೆಯ ಪರೀಕ್ಷೆ",
    challengeTitle: "ಈ ಫಲಿತಾಂಶವನ್ನು ಪ್ರಶ್ನಿಸಿ",
    challengeSubtitle: "PARAKH ತಾನು ಸರ್ವಜ್ಞ ಎಂದು ಹೇಳಿಕೊಳ್ಳುವುದಿಲ್ಲ. ಪರ್ಯಾಯ ವಿವರಣೆಗಳನ್ನು ಪರೀಕ್ಷಿಸಿ.",
    challengeButton: "ಈ ತೀರ್ಮಾನ ತಪ್ಪು ಎಂದು ಸಾಬೀತುಪಡಿಸಲು ಪ್ರಯತ್ನಿಸಿ",
    challengeTesting: "ಆರಂಭಿಕ ತೀರ್ಮಾನದಲ್ಲಿ ಯಾವುದೇ ತಪ್ಪು ಗ್ರಹಿಕೆಗಳಿವೆಯೇ ಎಂದು PARAKH ಪುನಃ ಪರಿಶೀಲಿಸುತ್ತಿದೆ...",
    investigatingHypothesis: "ಪರಿಶೀಲಿಸಲಾದ ಪರ್ಯಾಯ ವಾದ:",
    legitimizingFound: "ಕಾನೂನುಬದ್ಧ ಸಾಧ್ಯತೆಗಳ ಪರಿಗಣನೆ:",
    contradictoryFound: "ವಿರುದ್ಧವಾದ ಶಾಸನಬದ್ಧ ಪುರಾವೆ:",
    updatedNuancedVerdict: "ಸಮಗ್ರ ಪರಿಶೀಲನಾ ತೀರ್ಮಾನ:",
    auditMaintained: "ತೀರ್ಮಾನವನ್ನು ಪ್ರಶ್ನಿಸಿ ಪುನಃ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",

    scamDnaBadge: "ನಡವಳಿಕೆಯ ಮಾದರಿ",
    scamDnaTitle: "ವಂಚನೆಯ ಮಾದರಿ",
    scamDnaSubtitle: "ಪತ್ತೆಯಾದ ನಡವಳಿಕೆಯ ಸಂಕೇತಗಳು",
    scamDnaDisclaimer: "ಮಾದರಿ ಹೋಲಿಕೆಯು ಯಾವುದೇ ವ್ಯಕ್ತಿ ಅಥವಾ ಸಂಸ್ಥೆ ತಪ್ಪಿತಸ್ಥರೆಂದು ಕಾನೂನುಬದ್ಧವಾಗಿ ತೀರ್ಮಾನಿಸುವುದಿಲ್ಲ.",
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
    aboutDescription: "ಪರಖ್ (PARAKH) ಎಂದರೆ ಪರೀಕ್ಷೆ, ಸೂಕ್ಷ್ಮ ಪರಿಶೀಲನೆ ಮತ್ತು ದೃಢೀಕರಣ. ಇದು ಭಾರತದ ಭಾಷಾ ವೈವಿಧ್ಯತೆ ಮತ್ತು ನಾಗರಿಕರ ಹಣಕಾಸು ಸುರಕ್ಷತೆಗಾಗಿ ರೂಪಿಸಲಾದ AI ತಂತ್ರಜ್ಞಾನವಾಗಿದೆ.",
    aboutWhyTitle: "PARAKH ಏಕೆ ಅಸ್ತಿತ್ವಕ್ಕೆ ಬಂದಿದೆ?",
    aboutWhyP1: "ಭಾರತದಾದ್ಯಂತ ಪ್ರತಿದಿನ ಲಕ್ಷಾಂತರ ಜನರಿಗೆ 40% ಗ್ಯಾರಂಟಿ ಲಾಭ, ನಕಲಿ ಪ್ರಿ-ಐಪಿಒ ಹಂಚಿಕೆ ಮತ್ತು ಟಾಸ್ಕ್ ಹಗರಣಗಳ ಮೆಸೇಜ್‌ಗಳು ಬರುತ್ತವೆ. ವಂಚಕರು ಜನರ ನಂಬಿಕೆ, ಭಾಷಾ ಅಡೆತಡೆ ಮತ್ತು ಭಯವನ್ನು ದುರುಪಯೋಗಪಡಿಸಿಕೊಂಡು ಕಷ್ಟಪಟ್ಟು ಸಂಪಾದಿಸಿದ ಹಣವನ್ನು ಲಪಟಾಯಿಸುತ್ತಾರೆ.",
    aboutWhyP2: "PARAKH ಯಾವುದೇ ತಂತ್ರಜ್ಞಾನವನ್ನು ಕುರುಡಾಗಿ ನಂಬಲು ಹೇಳುವುದಿಲ್ಲ. ಬದಲಾಗಿ, ಯಾವುದಾದರೂ ವಿಷಯ ಏಕೆ ಅನುಮಾನಾಸ್ಪದವಾಗಿದೆ ಎಂಬುದನ್ನು ಸಾಕ್ಷ್ಯ ಸಮೇತ ತೋರಿಸಿ, ಕಾನೂನು ನಿಯಮಗಳನ್ನು ತಿಳಿಸಿ ನಾಗರಿಕರಿಗೆ ರಕ್ಷಣೆ ನೀಡುತ್ತದೆ.",
    pillar1Number: "01. ಬಲವಾದ ಸಾಕ್ಷ್ಯ",
    pillar1Title: "ಶಾಸನಬದ್ಧ ನೋಂದಣಿಗಳು",
    pillar1Desc: "ಸಾಮಾನ್ಯ ಇಂಟರ್ನೆಟ್ ಮಾಹಿತಿಯ ಬದಲು SEBI, RBI ಮತ್ತು MCA ನ ಅಧಿಕೃತ ದಾಖಲೆಗಳೊಂದಿಗೆ ಪರಿಶೀಲನೆ.",
    pillar2Number: "02. ಭಾರತ-ಪ್ರಥಮ",
    pillar2Title: "ಬಹುಭಾಷೆ ಮತ್ತು ಸರಳತೆ",
    pillar2Desc: "ಹಿರಿಯರಿಗಾಗಿ ಸರಳ ಮೋಡ್ ಮತ್ತು ಧ್ವನಿ ಸೌಲಭ್ಯದೊಂದಿಗೆ ಕನ್ನಡ, ಹಿಂದಿ, ತೆಲುಗು ಮತ್ತು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಲಭ್ಯ.",
    pillar3Number: "03. ಜವಾಬ್ದಾರಿಯುತ AI",
    pillar3Title: "ಪ್ರಾಮಾಣಿಕ ವಿಶ್ಲೇಷಣೆ",
    pillar3Desc: "ಸ್ಪಷ್ಟ ಸತ್ಯಗಳು ಮತ್ತು ಅಜ್ಞಾತ ವಿಷಯಗಳ ನಡುವೆ ವ್ಯತ್ಯಾಸ ಗುರುತಿಸಿ, ಫಲಿತಾಂಶವನ್ನು ಮರುಪರಿಶೀಲಿಸುವ ಅವಕಾಶ ನೀಡುತ್ತದೆ.",

    learnNavBack: "ಪರಿಶೀಲನೆಗೆ ಹಿಂತಿರುಗಿ",
    learnBadge: "ಮಾಹಿತಿ ಕೋಶ",
    learnTitle: "ಭಾರತದಲ್ಲಿನ ಪ್ರಮುಖ ಹಣಕಾಸು ವಂಚನೆ ಮಾದರಿಗಳು",
    learnSubtitle: "ಸಾಮಾನ್ಯವಾಗಿ ಕಂಡುಬರುವ ಹಗರಣಗಳು ಹೇಗೆ ನಡೆಯುತ್ತವೆ, ಅವುಗಳ ಬಲೆಗಳು, ಎಚ್ಚರಿಕೆಯ ಸೂಚನೆಗಳು ಮತ್ತು ಕಾನೂನು ನಿಯಮಗಳನ್ನು ತಿಳಿಯಿರಿ.",
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

    footerTagline: "ಕೇವಲ ನಂಬಬೇಡಿ. ಪರಿಶೀಲಿಸಿ. — ಭಾರತಕ್ಕಾಗಿ ನಿರ್ಮಿಸಲಾದ AI-ಚಾಲಿತ ಹಣಕಾಸು ವಿಷಯ ಪರಿಶೀಲನೆ.",
    footerStatutoryNoticeTitle: "ಶಾಸನಬದ್ಧ ಎಚ್ಚರಿಕೆ:",
    footerStatutoryNoticeText: "PARAKH ಒಂದು ಶೈಕ್ಷಣಿಕ ಸುರಕ್ಷತೆ ಮತ್ತು ವಿಷಯ ಪರಿಶೀಲನಾ ವೇದಿಕೆಯಾಗಿದೆ. PARAKH ಯಾವುದೇ ಹೂಡಿಕೆ ಸಲಹೆ, ಖರೀದಿ/ಮಾರಾಟ ಶಿಫಾರಸು ಅಥವಾ ಷೇರು ಟಿಪ್ಸ್‌ಗಳನ್ನು ನೀಡುವುದಿಲ್ಲ. ವಂಚನೆಯ ಮಾದರಿಗಳೊಂದಿಗಿನ ಹೋಲಿಕೆಯು ಯಾವುದೇ ವ್ಯಕ್ತಿ ಅಥವಾ ಸಂಸ್ಥೆಯ ವಿರುದ್ಧ ಅಂತಿಮ ಕಾನೂನು ತೀರ್ಪಾಗಿರುವುದಿಲ್ಲ.",
    footerCopyright: `© ${new Date().getFullYear()} PARAKH. ಭಾರತೀಯ ಸೈಬರ್ ಸುರಕ್ಷತೆ ಮತ್ತು ನಾಗರಿಕರ ರಕ್ಷಣೆಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ.`,
    footerHelplineText: "ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಹೆಲ್ಪ್‌ಲೈನ್: 1930 ಗೆ ಕರೆ ಮಾಡಿ"
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

    heroTitlePart1: "सिर्फ भरोसा न करें।",
    heroTitleVerify: "जाँचें।",
    heroSubtitle: "भारत के लिए AI-संचालित वित्तीय सामग्री सत्यापन।",
    heroGetStarted: "शुरू करें",
    heroSeeHowItWorks: "यह कैसे काम करता है देखें",
    heroCardBadge: "PARAKH सत्यापन",
    heroCardWarningSignals: "चेतावनी संकेत",
    heroCardSignalsDesc: "गारंटीड रिटर्न, कृत्रिम जल्दबाजी और अनधिकृत खातों में पहचान की गई",
    heroCardAiSignals: "AI संकेत",
    heroCardEvidence: "प्रमाण",
    heroCardVerification: "सत्यापन",

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

    challengeBadge: "AI निष्पक्षता परीक्षण",
    challengeTitle: "इस परिणाम को चुनौती दें",
    challengeSubtitle: "PARAKH सर्वज्ञ होने का दावा नहीं करता। वैकल्पिक संभावनाओं की जांच करें।",
    challengeButton: "इस मूल्यांकन को गलत साबित करने का प्रयास करें",
    challengeTesting: "प्रारंभिक मूल्यांकन में किसी संभावित भ्रम या अपवाद की जांच की जा रही है...",
    investigatingHypothesis: "जाँचा गया वैकल्पिक तर्क:",
    legitimizingFound: "वैध संभावनाओं का विचार:",
    contradictoryFound: "विरोधी वैधानिक प्रमाण:",
    updatedNuancedVerdict: "विस्तृत समीक्षा निष्कर्ष:",
    auditMaintained: "मूल्यांकन की पुनः समीक्षा की गई",

    scamDnaBadge: "व्यवहार पैटर्न",
    scamDnaTitle: "धोखाधड़ी का पैटर्न",
    scamDnaSubtitle: "पहचाने गए व्यवहार संबंधी संकेत",
    scamDnaDisclaimer: "पैटर्न समानता से यह कानूनी रूप से साबित नहीं होता कि कोई व्यक्ति या संस्था धोखेबाज है।",
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
    aboutDescription: "परख (PARAKH) का अर्थ है परीक्षा, बारीकी से जांच और सत्यापन। यह भारत की भाषाई विविधता और वित्तीय सुरक्षा के लिए निर्मित एक AI तकनीक है।",
    aboutWhyTitle: "PARAKH क्यों मौजूद है?",
    aboutWhyP1: "भारत में हर दिन लाखों नागरिकों को 40% गारंटीड मुनाफे, फर्जी प्री-आईपीओ आवंटन और टास्क घोटालों के संदेश आते हैं। धोखेबाज विश्वास, भाषा और डर का फायदा उठाकर लोगों की मेहनत की कमाई छीन लेते हैं।",
    aboutWhyP2: "PARAKH आपको किसी तकनीक पर आँख मूँदकर विश्वास करने को नहीं कहता। इसके बजाय, यह दिखाता है कि कोई चीज संदिग्ध क्यों है, कानून क्या कहता है, और आप अपने पैसे की सुरक्षा कैसे कर सकते हैं।",
    pillar1Number: "01. ठोस प्रमाण",
    pillar1Title: "वैधानिक रजिस्टर",
    pillar1Desc: "अनसुलझे सर्च परिणामों के बजाय सीधे SEBI, RBI और MCA के आधिकारिक रजिस्टरों से मिलान।",
    pillar2Number: "02. भारत-प्रथम",
    pillar2Title: "बहुभाषी और सरल",
    pillar2Desc: "बुजुर्गों के लिए सरल मोड और ऑडियो के साथ हिंदी, कन्नड़, तेलुगु और अंग्रेजी में उपलब्ध।",
    pillar3Number: "03. जिम्मेदार AI",
    pillar3Title: "ईमानदार विश्लेषण",
    pillar3Desc: "तथ्यों और अज्ञात बातों के बीच अंतर करता है और परिणाम को चुनौती देने की सुविधा देता है।",

    learnNavBack: "जाँच पर वापस जाएँ",
    learnBadge: "ज्ञान केंद्र",
    learnTitle: "भारत में वित्तीय धोखाधड़ी के प्रमुख पैटर्न",
    learnSubtitle: "जानें कि घोटाले कैसे काम करते हैं, उनके मनोवैज्ञानिक लालच, खतरे के संकेत और कानूनी नियम क्या हैं।",
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

    footerTagline: "सिर्फ भरोसा न करें। जाँचें। — भारत के लिए निर्मित AI-संचालित वित्तीय सामग्री सत्यापन।",
    footerStatutoryNoticeTitle: "वैधानिक सूचना:",
    footerStatutoryNoticeText: "PARAKH एक शैक्षिक सुरक्षा और सत्यापन उपयोगिता है। PARAKH कोई निवेश सलाह या गारंटीकृत भविष्यवाणी नहीं देता है। धोखाधड़ी के संकेतों से समानता किसी व्यक्ति या संस्था के खिलाफ कानूनी फैसला नहीं बनाती।",
    footerCopyright: `© ${new Date().getFullYear()} PARAKH. भारतीय साइबर सुरक्षा और नागरिक संरक्षण के लिए निर्मित।`,
    footerHelplineText: "राष्ट्रीय साइबर हेल्पलाइन: 1930 डायल करें"
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

    heroTitlePart1: "గుడ్డిగా నమ్మకండి.",
    heroTitleVerify: "ధృవీకరించండి.",
    heroSubtitle: "భారత్ కోసం AI-ఆధారిత ఆర్థిక విషయ ధృవీకరణ.",
    heroGetStarted: "ప్రారంభించండి",
    heroSeeHowItWorks: "ఇది ఎలా పనిచేస్తుందో చూడండి",
    heroCardBadge: "PARAKH ధృవీకరణ",
    heroCardWarningSignals: "హెచ్చరిక సూచనలు",
    heroCardSignalsDesc: "గ్యారెంటీ రిటర్న్‌లు, కృత్రిమ అత్యవసరం మరియు అనధికారిక ఖాతాల్లో గుర్తించబడ్డాయి",
    heroCardAiSignals: "AI సంకేతాలు",
    heroCardEvidence: "ఆధారాలు",
    heroCardVerification: "ధృవీకరణ",

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
    footerHelplineText: "జాతీయ సైబర్ హెల్ప్‌లైన్: 1930 కి కాల్ చేయండి"
  }
};
