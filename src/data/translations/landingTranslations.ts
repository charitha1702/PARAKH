import { Language } from '../../types/analysis';

export interface LandingStrings {
  // Hero Section
  heroTitlePart1: string;
  heroTitleVerify: string;
  heroSubtitle: string;
  heroGetStarted: string;
  heroSeeHowItWorks: string;

  // Micro-copy
  microCopy1: string;
  microCopy2: string;
  microCopyQuestion: string;

  // Trust Chain Visual Card
  trustChainCardBadge: string;
  trustChainCardHeading: string;
  trustChainCardDesc: string;
  trustChainCardTrace: string;
  trustChainCardExplain: string;
  trustChainCardProtect: string;

  // The Real Problem
  problemBadge: string;
  problemTitlePart1: string;
  problemTitlePart2: string;
  problemSubtitle: string;
  problemItCanBegin: string;
  problemItemLogo: string;
  problemItemScreenshot: string;
  problemItemName: string;
  problemItemVoice: string;
  problemItemOpportunity: string;
  problemConclusion: string;

  // What Parakh Does
  doesBadge: string;
  doesTitlePart1: string;
  doesTitlePart2: string;
  submitHeading: string;
  submitList: string[];
  detectHeading: string;
  detectList: string[];
  traceHeading: string;
  traceList: string[];
  verifyHeading: string;
  verifyList: string[];
  explainHeading: string;
  explainList: string[];

  // Signature Feature: Where Does Trust Break?
  signatureBadge: string;
  signatureTitle: string;
  signatureHighlight: string;
  signatureP1: string;
  signatureP2: string;
  signatureP3: string;
  signatureCta: string;
  chainClaim: string;
  chainEntity: string;
  chainWebsite: string;
  chainContact: string;
  chainPayment: string;
  chainEvidence: string;

  // Explainability
  explainBadge: string;
  explainTitle: string;
  explainAsk: string;
  explainQuote: string;
  explainFollow: string;
  explainFlowClaim: string;
  explainFlowSource: string;
  explainFlowCheck: string;
  explainFlowResult: string;
  explainFlowExplanation: string;
  separateWhatIs: string;
  separateOfficiallyVerified: string;
  separateReliableEvidence: string;
  separateCommunityReported: string;
  separateAiInferred: string;
  separateUnknown: string;
  explainDisclaimer: string;

  // Scam DNA
  scamDnaBadge: string;
  scamDnaTitle1: string;
  scamDnaTitle2: string;
  scamDnaDesc: string;
  tacticsList: string[];
  notFakeScore: string;
  patternsFound: string;

  // Challenge
  challengeBadge: string;
  challengeTitle1: string;
  challengeTitle2: string;
  challengeP1: string;
  challengeP2: string;
  challengeP3: string;
  possibleStates: string;
  stateContradictoryFound: string;
  stateNoContradiction: string;
  stateInconclusive: string;

  // Community
  communityBadge: string;
  communityTitle1: string;
  communityTitle2: string;
  communityP1: string;
  communityLooksAcross: string;
  communityPatterns: string[];
  communityEmergingNote: string;
  communityMicrocopyLabel: string;
  communityMicrocopyText: string;

  // Bharat
  bharatBadge: string;
  bharatTitlePart1: string;
  bharatTitlePart2: string;
  bharatP1: string;
  bharatLanguagesLabel: string;
  bharatLanguageList: string;
  bharatAppliesTo: string;
  bharatAspects: string;
  bharatNotJustButtons: string;

  // Voice / Simple Mode
  voiceBadge: string;
  voiceTitlePart1: string;
  voiceTitlePart2: string;
  voiceDesc: string;
  simpleModeBadge: string;
  simpleModeTitle: string;
  simpleModeDesc: string;
  simpleModeNote: string;

  // Safety
  safetyBadge: string;
  safetyTitle: string;
  safetySubtitle: string;
  safetyNoRecommendations: string;
  safetyList: string[];
  safetyMantra: string;

  // Final Closing
  finalTitlePart1: string;
  finalTitlePart2: string;
  finalMicroCopy: string;
  finalBrandName: string;
  finalTagline: string;
}

const enLanding: LandingStrings = {
  heroTitlePart1: "BEFORE YOU BELIEVE IT.",
  heroTitleVerify: "PARAKH IT.",
  heroSubtitle: "Financial content moves faster than trust. PARAKH helps you investigate suspicious messages, screenshots, websites and voice inputs — tracing claims to their evidence before you act.",
  heroGetStarted: "Get Started",
  heroSeeHowItWorks: "See how it works",

  microCopy1: "A message can look official. A screenshot can look convincing. A website can look legitimate.",
  microCopy2: "PARAKH asks one question:",
  microCopyQuestion: "“Can the claim actually be verified?”",

  trustChainCardBadge: "TRUST CHAIN RECONSTRUCTION",
  trustChainCardHeading: "FOLLOW THE CLAIM. FIND THE CONNECTION. CHECK THE EVIDENCE.",
  trustChainCardDesc: "PARAKH connects claims, organizations, websites, contacts, payment routes and evidence — then shows where the chain becomes uncertain.",
  trustChainCardTrace: "Trace",
  trustChainCardExplain: "Explain",
  trustChainCardProtect: "Protect",

  problemBadge: "THE REAL PROBLEM",
  problemTitlePart1: "DON'T JUST ASK: “IS THIS A SCAM?”",
  problemTitlePart2: "ASK: “WHY SHOULD I TRUST THIS?”",
  problemSubtitle: "Financial fraud doesn't always begin with an obviously suspicious message.",
  problemItCanBegin: "It can begin with:",
  problemItemLogo: "A familiar logo.",
  problemItemScreenshot: "A convincing screenshot.",
  problemItemName: "A trusted name.",
  problemItemVoice: "A confident voice.",
  problemItemOpportunity: "A limited-time opportunity.",
  problemConclusion: "PARAKH helps users look beyond appearances and examine the evidence underneath.",

  doesBadge: "WHAT PARAKH ACTUALLY DOES",
  doesTitlePart1: "FROM A MESSAGE",
  doesTitlePart2: "TO AN INVESTIGATION.",
  submitHeading: "SUBMIT",
  submitList: ["Message.", "Screenshot.", "Website.", "Voice."],
  detectHeading: "DETECT",
  detectList: ["Urgency.", "Guaranteed returns.", "Impersonation.", "Payment pressure.", "Phishing.", "Manipulative language."],
  traceHeading: "TRACE",
  traceList: ["Claims.", "Organizations.", "Websites.", "Contacts.", "Payment routes."],
  verifyHeading: "VERIFY",
  verifyList: ["Official sources.", "Reliable evidence.", "Community evidence."],
  explainHeading: "EXPLAIN",
  explainList: ["What we found.", "What supports it.", "What contradicts it.", "What remains unknown."],

  signatureBadge: "SIGNATURE FEATURE",
  signatureTitle: "WHERE DOES",
  signatureHighlight: "TRUST BREAK?",
  signatureP1: "PARAKH doesn't stop after detecting suspicious language.",
  signatureP2: "It reconstructs the chain behind the claim.",
  signatureP3: "Then it identifies the point where supporting evidence becomes weak, contradictory or unavailable.",
  signatureCta: "SHOW ME HOW YOU KNOW →",
  chainClaim: "CLAIM",
  chainEntity: "ENTITY",
  chainWebsite: "WEBSITE",
  chainContact: "CONTACT",
  chainPayment: "PAYMENT",
  chainEvidence: "EVIDENCE",

  explainBadge: "EXPLAINABILITY",
  explainTitle: "NO BLACK-BOX VERDICTS.",
  explainAsk: "ASK PARAKH:",
  explainQuote: "“Show me how you know.”",
  explainFollow: "And follow the trail.",
  explainFlowClaim: "CLAIM",
  explainFlowSource: "SOURCE",
  explainFlowCheck: "CHECK",
  explainFlowResult: "RESULT",
  explainFlowExplanation: "EXPLANATION",
  separateWhatIs: "Separate what is:",
  separateOfficiallyVerified: "OFFICIALLY VERIFIED",
  separateReliableEvidence: "SUPPORTED BY RELIABLE EVIDENCE",
  separateCommunityReported: "REPORTED BY THE COMMUNITY",
  separateAiInferred: "INFERRED BY AI",
  separateUnknown: "OR STILL UNKNOWN",
  explainDisclaimer: "PARAKH does not turn uncertainty into certainty.",

  scamDnaBadge: "SCAM DNA",
  scamDnaTitle1: "SCAMS HAVE BEHAVIOUR.",
  scamDnaTitle2: "PARAKH LOOKS FOR IT.",
  scamDnaDesc: "A behavioral fingerprint of the tactics detected in financial content.",
  tacticsList: [
    "URGENT?",
    "GUARANTEED?",
    "IMPERSONATING AUTHORITY?",
    "DEMANDING PAYMENT?",
    "CREATING FEAR?",
    "PUSHING YOU TO ACT NOW?"
  ],
  notFakeScore: "Not a fake “93% scam” score.",
  patternsFound: "Just the patterns PARAKH actually found.",

  challengeBadge: "CHALLENGE",
  challengeTitle1: "DON'T BLINDLY TRUST PARAKH EITHER.",
  challengeTitle2: "CHALLENGE THE RESULT.",
  challengeP1: "What if the analysis is wrong?",
  challengeP2: "Ask PARAKH to look for contradictory or alternative evidence.",
  challengeP3: "Because a trustworthy verification system should be willing to question itself.",
  possibleStates: "Possible states:",
  stateContradictoryFound: "CONTRADICTORY EVIDENCE FOUND",
  stateNoContradiction: "NO RELIABLE CONTRADICTION FOUND",
  stateInconclusive: "EVIDENCE REMAINS INCONCLUSIVE",

  communityBadge: "COMMUNITY",
  communityTitle1: "ONE REPORT IS A WARNING.",
  communityTitle2: "A PATTERN IS A SIGNAL.",
  communityP1: "People can share suspicious experiences and supporting evidence.",
  communityLooksAcross: "PARAKH looks across reports for recurring:",
  communityPatterns: [
    "Websites.",
    "Phone numbers.",
    "Payment routes.",
    "Message templates.",
    "Impersonation patterns."
  ],
  communityEmergingNote: "Potential recurring patterns can then be surfaced as emerging scam signals.",
  communityMicrocopyLabel: "IMPORTANT MICRO-COPY:",
  communityMicrocopyText: "Community reports provide context. They do not automatically prove fraud.",

  bharatBadge: "BHARAT",
  bharatTitlePart1: "TRUST SHOULD NOT BE",
  bharatTitlePart2: "LOST IN TRANSLATION.",
  bharatP1: "PARAKH is built for Bharat.",
  bharatLanguagesLabel: "Understand the analysis in:",
  bharatLanguageList: "English · हिंदी · ಕನ್ನಡ · తెలుగు · தமிழ் · മലയാളം · मराठी · বাংলা · ગુજરાતી · ਪੰਜਾਬੀ · ଓଡ଼ಿଆ · اردو",
  bharatAppliesTo: "The selected language applies to the experience itself:",
  bharatAspects: "Analysis. Evidence. Trust Chain. Community summaries. Safety guidance. Voice.",
  bharatNotJustButtons: "Not just the buttons.",

  voiceBadge: "VOICE",
  voiceTitlePart1: "IF READING IS EASIER THAN SCROLLING,",
  voiceTitlePart2: "LISTEN.",
  voiceDesc: "PARAKH can explain the selected result in your chosen language.",
  simpleModeBadge: "SIMPLE MODE",
  simpleModeTitle: "SIMPLE MODE",
  simpleModeDesc: "Less jargon. Clearer explanations. Focused safety guidance.",
  simpleModeNote: "Built for first-time investors, older users and anyone who simply wants things explained clearly.",

  safetyBadge: "SAFETY",
  safetyTitle: "PARAKH WILL NEVER TELL YOU WHAT TO BUY.",
  safetySubtitle: "IT HELPS YOU DECIDE WHAT DESERVES VERIFICATION.",
  safetyNoRecommendations: "No buy / sell / hold recommendations.",
  safetyList: [
    "• No OTP requests.",
    "• No UPI PIN requests.",
    "• No password requests.",
    "• No unnecessary sensitive financial information."
  ],
  safetyMantra: "PAUSE. VERIFY. UNDERSTAND. THEN ACT.",

  finalTitlePart1: "THE INTERNET GIVES YOU ANSWERS.",
  finalTitlePart2: "PARAKH HELPS YOU QUESTION THEM.",
  finalMicroCopy: "Before you forward it. Before you click it. Before you pay. Before you believe it.",
  finalBrandName: "PARAKH.",
  finalTagline: "DON'T JUST TRUST. VERIFY."
};

const hiLanding: LandingStrings = {
  ...enLanding,
  heroTitlePart1: "विश्वास करने से पहले।",
  heroTitleVerify: "PARAKH करें।",
  heroSubtitle: "वित्तीय सामग्री भरोसे से भी तेज़ चलती है। PARAKH संदिग्ध संदेशों, स्क्रीनशॉट, वेबसाइटों और ऑडियो इनपुट की जाँच करने में मदद करता है — कोई भी कदम उठाने से पहले दावों को उनके सबूतों से जोड़कर।",
  heroGetStarted: "शुरू करें",
  heroSeeHowItWorks: "यह कैसे काम करता है देखें",

  microCopy1: "एक संदेश आधिकारिक लग सकता है। एक स्क्रीनशॉट भरोसेमंद लग सकता है। एक वेबसाइट वैध लग सकती है।",
  microCopy2: "PARAKH एक ही सवाल पूछता है:",
  microCopyQuestion: "“क्या इस दावे को वास्तव में सत्यापित किया जा सकता है?”",

  trustChainCardBadge: "TRUST CHAIN RECONSTRUCTION",
  trustChainCardHeading: "दावे का अनुसरण करें। संबंध खोजें। सबूत की जाँच करें।",
  trustChainCardDesc: "PARAKH दावों, संगठनों, वेबसाइटों, संपर्कों, भुगतान मार्गों और साक्ष्यों को जोड़ता है — फिर दिखाता है कि श्रृंखला कहाँ अनिश्चित हो जाती है।",
  trustChainCardTrace: "ट्रेस करें",
  trustChainCardExplain: "समझें",
  trustChainCardProtect: "सुरक्षित रहें",

  problemBadge: "असली समस्या",
  problemTitlePart1: "केवल यह न पूछें: “क्या यह कोई घोटाला है?”",
  problemTitlePart2: "यह पूछें: “मैं इस पर भरोसा क्यों करूँ?”",
  problemSubtitle: "वित्तीय धोखाधड़ी हमेशा स्पष्ट रूप से संदिग्ध संदेश से शुरू नहीं होती।",
  problemItCanBegin: "यह शुरू हो सकती है:",
  problemItemLogo: "एक जाने-पहचाने लोगो से।",
  problemItemScreenshot: "एक विश्वसनीय स्क्रीनशॉट से।",
  problemItemName: "एक भरोसेमंद नाम से।",
  problemItemVoice: "एक आत्मविश्वास भरी आवाज़ से।",
  problemItemOpportunity: "सीमित समय के अवसर से।",
  problemConclusion: "PARAKH उपयोगकर्ताओं को दिखावे से परे देखने और अंतर्निहित साक्ष्यों की जांच करने में मदद करता है।",

  doesBadge: "PARAKH वास्तव में क्या करता है",
  doesTitlePart1: "संदेश से लेकर",
  doesTitlePart2: "गहन जांच तक।",
  submitHeading: "जमा करें",
  submitList: ["संदेश।", "स्क्रीनशॉट।", "वेबसाइट।", "आवाज़।"],
  detectHeading: "पहचानें",
  detectList: ["जल्दबाजी।", "गारंटीकृत रिटर्न।", "पहचान की चोरी।", "भुगतान का दबाव।", "फ़िशिंग।", "भ्रामक भाषा।"],
  traceHeading: "ट्रेस करें",
  traceList: ["दावे।", "संगठन।", "वेबसाइटें।", "संपर्क।", "भुगतान मार्ग।"],
  verifyHeading: "सत्यापित करें",
  verifyList: ["आधिकारिक स्रोत।", "विश्वसनीय साक्ष्य।", "सामुदायिक साक्ष्य।"],
  explainHeading: "स्पष्ट करें",
  explainList: ["हमने क्या पाया।", "क्या इसका समर्थन करता है।", "क्या इसका खंडन करता है।", "क्या अभी अज्ञात है।"],

  signatureBadge: "प्रमुख विशेषता",
  signatureTitle: "भरोसा कहाँ",
  signatureHighlight: "टूटता है?",
  signatureP1: "PARAKH संदिग्ध भाषा की पहचान करने के बाद रुकता नहीं है।",
  signatureP2: "यह दावे के पीछे की पूरी श्रृंखला की पुनर्रचना करता है।",
  signatureP3: "फिर यह उस बिंदु की पहचान करता है जहां सहायक साक्ष्य कमजोर, विरोधाभासी या अनुपलब्ध हो जाते हैं।",
  signatureCta: "मुझे दिखाएं कि आप कैसे जानते हैं →",
  chainClaim: "दावा",
  chainEntity: "संगठन",
  chainWebsite: "वेबसाइट",
  chainContact: "संपर्क",
  chainPayment: "भुगतान",
  chainEvidence: "साक्ष्य",

  explainBadge: "पारदर्शिता",
  explainTitle: "कोई ब्लैक-बॉक्स निर्णय नहीं।",
  explainAsk: "PARAKH से पूछें:",
  explainQuote: "“मुझे दिखाएं कि आप यह कैसे जानते हैं।”",
  explainFollow: "और सबूतों के रास्ते पर चलें।",
  explainFlowClaim: "दावा",
  explainFlowSource: "स्रोत",
  explainFlowCheck: "जाँच",
  explainFlowResult: "परिणाम",
  explainFlowExplanation: "स्पष्टीकरण",
  separateWhatIs: "स्पष्ट रूप से अलग करें:",
  separateOfficiallyVerified: "आधिकारिक रूप से सत्यापित",
  separateReliableEvidence: "विश्वसनीय साक्ष्य द्वारा समर्थित",
  separateCommunityReported: "समुदाय द्वारा रिपोर्ट किया गया",
  separateAiInferred: "AI द्वारा अनुमानित",
  separateUnknown: "या अभी भी अज्ञात",
  explainDisclaimer: "PARAKH अनिश्चितता को जबरन निश्चितता में नहीं बदलता।",

  scamDnaBadge: "SCAM DNA",
  scamDnaTitle1: "घोटालों का एक व्यवहार होता है।",
  scamDnaTitle2: "PARAKH उसकी तलाश करता है।",
  scamDnaDesc: "वित्तीय सामग्री में पाई जाने वाली रणनीतियों का एक व्यवहारिक फिंगरप्रिंट।",
  tacticsList: [
    "जल्दबाजी?",
    "गारंटी?",
    "अधिकारी का नाम?",
    "भुगतान की मांग?",
    "डर पैदा करना?",
    "तुरंत कार्रवाई का दबाव?"
  ],
  notFakeScore: "कोई फर्जी “93% घोटाला” स्कोर नहीं।",
  patternsFound: "सिर्फ वही पैटर्न जो PARAKH ने वास्तव में पाए।",

  challengeBadge: "चुनौती दें",
  challengeTitle1: "PARAKH पर भी आंख मूंदकर भरोसा न करें।",
  challengeTitle2: "परिणाम को चुनौती दें।",
  challengeP1: "क्या होगा यदि विश्लेषण गलत हो?",
  challengeP2: "PARAKH से विरोधाभासी या वैकल्पिक साक्ष्य खोजने के लिए कहें।",
  challengeP3: "क्योंकि एक भरोसेमंद सत्यापन प्रणाली को खुद पर सवाल उठाने के लिए तैयार होना चाहिए।",
  possibleStates: "संभावित स्थितियां:",
  stateContradictoryFound: "विरोधाभासी साक्ष्य मिले",
  stateNoContradiction: "कोई विश्वसनीय विरोधाभास नहीं मिला",
  stateInconclusive: "साक्ष्य अनिर्णायक बने हुए हैं",

  communityBadge: "समुदाय",
  communityTitle1: "एक रिपोर्ट एक चेतावनी है।",
  communityTitle2: "एक पैटर्न एक बड़ा संकेत है।",
  communityP1: "लोग अपने संदिग्ध अनुभव और सहायक साक्ष्य साझा कर सकते हैं।",
  communityLooksAcross: "PARAKH रिपोर्टों में आवर्ती संकेतों की पहचान करता है:",
  communityPatterns: [
    "वेबसाइटें।",
    "फ़ोन नंबर।",
    "भुगतान मार्ग।",
    "संदेश टेम्प्लेट।",
    "प्रतिरूपण पैटर्न।"
  ],
  communityEmergingNote: "संभावित आवर्ती पैटर्न को फिर नए उभरते घोटाले के संकेतों के रूप में प्रस्तुत किया जा सकता है।",
  communityMicrocopyLabel: "महत्वपूर्ण नोट:",
  communityMicrocopyText: "सामुदायिक रिपोर्टें संदर्भ प्रदान करती हैं। वे स्वतः धोखाधड़ी सिद्ध नहीं करतीं।",

  bharatBadge: "भारत",
  bharatTitlePart1: "भरोसा भाषा में",
  bharatTitlePart2: "नहीं खोना चाहिए।",
  bharatP1: "PARAKH भारत के लिए बनाया गया है।",
  bharatLanguagesLabel: "अपनी भाषा में विश्लेषण समझें:",
  bharatLanguageList: "English · हिंदी · ಕನ್ನಡ · తెలుగు · தமிழ் · മലയാളം · मराठी · বাংলা · ગુજરાતી · ਪੰਜਾਬੀ · ଓଡ଼ಿଆ · اردو",
  bharatAppliesTo: "चुनी गई भाषा संपूर्ण अनुभव पर लागू होती है:",
  bharatAspects: "विश्लेषण। साक्ष्य। ट्रस्ट चेन। सामुदायिक सारांश। सुरक्षा मार्गदर्शन। आवाज़।",
  bharatNotJustButtons: "सिर्फ बटन पर नहीं।",

  voiceBadge: "आवाज़",
  voiceTitlePart1: "यदि पढ़ना स्क्रॉल करने से आसान है,",
  voiceTitlePart2: "तो सुनें।",
  voiceDesc: "PARAKH आपकी चुनी हुई भाषा में परिणाम समझा सकता है।",
  simpleModeBadge: "सरल मोड",
  simpleModeTitle: "सरल मोड",
  simpleModeDesc: "कम तकनीकी शब्द। स्पष्ट व्याख्या। केंद्रित सुरक्षा मार्गदर्शन।",
  simpleModeNote: "पहली बार निवेश करने वालों, वरिष्ठ नागरिकों और उन सभी के लिए जो सरल व्याख्या चाहते हैं।",

  safetyBadge: "सुरक्षा",
  safetyTitle: "PARAKH कभी आपको यह नहीं बताएगा कि क्या खरीदें।",
  safetySubtitle: "यह आपको यह तय करने में मदद करता है कि क्या सत्यापन के योग्य है।",
  safetyNoRecommendations: "कोई खरीद / बिक्री / होल्ड की सलाह नहीं।",
  safetyList: [
    "• कोई OTP अनुरोध नहीं।",
    "• कोई UPI पिन अनुरोध नहीं।",
    "• कोई पासवर्ड अनुरोध नहीं।",
    "• कोई अनावश्यक संवेदनशील वित्तीय जानकारी नहीं।"
  ],
  safetyMantra: "रुकें। सत्यापित करें। समझें। फिर कदम उठाएं।",

  finalTitlePart1: "इंटरनेट आपको जवाब देता है।",
  finalTitlePart2: "PARAKH आपको उन पर सवाल उठाने में मदद करता है।",
  finalMicroCopy: "आगे भेजने से पहले। क्लिक करने से पहले। भुगतान करने से पहले। विश्वास करने से पहले।",
  finalBrandName: "PARAKH.",
  finalTagline: "सिर्फ भरोसा न करें। जाँचें।"
};

const knLanding: LandingStrings = {
  ...enLanding,
  heroTitlePart1: "ನಂಬುವ ಮೊದಲು.",
  heroTitleVerify: "PARAKH ಮಾಡಿ.",
  heroSubtitle: "ಹಣಕಾಸಿನ ವಿಷಯವು ನಂಬಿಕೆಗಿಂತ ವೇಗವಾಗಿ ಹರಡುತ್ತದೆ. ಸಂಶಯಾಸ್ಪದ ಸಂದೇಶಗಳು, ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳು, ವೆಬ್‌ಸೈಟ್‌ಗಳು ಮತ್ತು ಧ್ವನಿ ಇನ್‌ಪುಟ್‌ಗಳನ್ನು ತನಿಖೆ ಮಾಡಲು PARAKH ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ — ನೀವು ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಮೊದಲು ಪುರಾವೆಗಳೊಂದಿಗೆ ಜೋಡಿಸಿ.",
  heroGetStarted: "ಪ್ರಾರಂಭಿಸಿ",
  heroSeeHowItWorks: "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ನೋಡಿ",

  microCopy1: "ಒಂದು ಸಂದೇಶ ಅಧಿಕೃತವಾಗಿ ಕಾಣಿಸಬಹುದು. ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ನಂಬಲರ್ಹವಾಗಿ ಕಾಣಿಸಬಹುದು. ವೆಬ್‌ಸೈಟ್ ಅಧಿಕೃತವಾಗಿ ಕಾಣಿಸಬಹುದು.",
  microCopy2: "PARAKH ಒಂದು ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳುತ್ತದೆ:",
  microCopyQuestion: "“ಈ ಹೇಳಿಕೆಯನ್ನು ವಾಸ್ತವವಾಗಿ ಪರಿಶೀಲಿಸಬಹುದೇ?”",

  trustChainCardBadge: "TRUST CHAIN RECONSTRUCTION",
  trustChainCardHeading: "ಹೇಳಿಕೆಯನ್ನು ಅನುಸರಿಸಿ. ಸಂಬಂಧವನ್ನು ಹುಡುಕಿ. ಪುರಾವೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.",
  trustChainCardDesc: "PARAKH ಹೇಳಿಕೆಗಳು, ಸಂಸ್ಥೆಗಳು, ವೆಬ್‌ಸೈಟ್‌ಗಳು, ಸಂಪರ್ಕಗಳು, ಪಾವತಿ ಮಾರ್ಗಗಳು ಮತ್ತು ಸಾಕ್ಷ್ಯಗಳನ್ನು ಜೋಡಿಸುತ್ತದೆ — ನಂತರ ಸರಪಳಿ ಎಲ್ಲಿ ದುರ್ಬಲವಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ತೋರಿಸುತ್ತದೆ.",
  trustChainCardTrace: "ಟ್ರೇಸ್ ಮಾಡಿ",
  trustChainCardExplain: "ವಿವರಿಸಿ",
  trustChainCardProtect: "ರಕ್ಷಿಸಿಕೊಳ್ಳಿ",

  problemBadge: "ನಿಜವಾದ ಸಮಸ್ಯೆ",
  problemTitlePart1: "ಕೇವಲ ಕೇಳಬೇಡಿ: “ಇದು ಹಗರಣವೇ?”",
  problemTitlePart2: "ಕೇಳಿ: “ನಾನು ಇದನ್ನು ಏಕೆ ನಂಬಬೇಕು?”",
  problemSubtitle: "ಹಣಕಾಸಿನ ವಂಚನೆ ಯಾವಾಗಲೂ ಸ್ಪಷ್ಟವಾಗಿ ಅನುಮಾನಾಸ್ಪದ ಸಂದೇಶದಿಂದ ಪ್ರಾರಂಭವಾಗುವುದಿಲ್ಲ.",
  problemItCanBegin: "ಇದು ಪ್ರಾರಂಭವಾಗಬಹುದು:",
  problemItemLogo: "ಪರಿಚಿತ ಲೋಗೋ ಮೂಲಕ.",
  problemItemScreenshot: "ನಂಬಲರ್ಹ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಮೂಲಕ.",
  problemItemName: "ವಿಶ್ವಾಸಾರ್ಹ ಹೆಸರಿನ ಮೂಲಕ.",
  problemItemVoice: "ಆತ್ಮವಿಶ್ವಾಸದ ಧ್ವನಿಯ ಮೂಲಕ.",
  problemItemOpportunity: "ಸೀಮಿತ ಸಮಯದ ಅವಕಾಶದ ಮೂಲಕ.",
  problemConclusion: "PARAKH ಬಳಕೆದಾರರಿಗೆ ಮೇಲ್ನೋಟವನ್ನು ಮೀರಿ ಆಳವಾದ ಸಾಕ್ಷ್ಯಗಳನ್ನು ಪರೀಕ್ಷಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",

  doesBadge: "PARAKH ವಾಸ್ತವವಾಗಿ ಏನು ಮಾಡುತ್ತದೆ",
  doesTitlePart1: "ಸಂದೇಶದಿಂದ",
  doesTitlePart2: "ಸಂಪೂರ್ಣ ತನಿಖೆಗೆ.",
  submitHeading: "ಸಲ್ಲಿಸಿ",
  submitList: ["ಸಂದೇಶ.", "ಸ್ಕ್ರೀನ್‌ಶಾಟ್.", "ವೆಬ್‌ಸೈಟ್.", "ಧ್ವನಿ."],
  detectHeading: "ಪತ್ತೆಹಚ್ಚಿ",
  detectList: ["ತುರ್ತು ಒತ್ತಡ.", "ಖಚಿತ ಆದಾಯ.", "ವ್ಯಕ್ತಿತ್ವ ನಕಲು.", "ಪಾವತಿ ಒತ್ತಡ.", "ಫಿಶಿಂಗ್.", "ಮೋಸದ ಭಾಷೆ."],
  traceHeading: "ಟ್ರೇಸ್ ಮಾಡಿ",
  traceList: ["ಹೇಳಿಕೆಗಳು.", "ಸಂಸ್ಥೆಗಳು.", "ವೆಬ್‌ಸೈಟ್‌ಗಳು.", "ಸಂಪರ್ಕಗಳು.", "ಪಾವತಿ ಮಾರ್ಗಗಳು."],
  verifyHeading: "ಪರಿಶೀಲಿಸಿ",
  verifyList: ["ಅಧಿಕೃತ ಮೂಲಗಳು.", "ವಿಶ್ವಾಸಾರ್ಹ ಸಾಕ್ಷ್ಯಗಳು.", "ಸಮುದಾಯ ಪುರಾವೆಗಳು."],
  explainHeading: "ವಿವರಿಸಿ",
  explainList: ["ನಾವು ಕಂಡುಕೊಂಡದ್ದು.", "ಯಾವುದು ಬೆಂಬಲಿಸುತ್ತದೆ.", "ಯಾವುದು ವಿರೋಧಿಸುತ್ತದೆ.", "ಯಾವುದು ತಿಳಿದಿಲ್ಲ."],

  signatureBadge: "ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯ",
  signatureTitle: "ನಂಬಿಕೆ ಎಲ್ಲಿ",
  signatureHighlight: "ಮುರಿಯುತ್ತದೆ?",
  signatureP1: "PARAKH ಕೇವಲ ಅನುಮಾನಾಸ್ಪದ ಭಾಷೆಯನ್ನು ಪತ್ತೆಹಚ್ಚಿ ನಿಲ್ಲುವುದಿಲ್ಲ.",
  signatureP2: "ಇದು ಹೇಳಿಕೆಯ ಹಿಂದಿನ ಸಂಬಂಧಗಳ ಸರಪಳಿಯನ್ನು ಮರುನಿರ್ಮಿಸುತ್ತದೆ.",
  signatureP3: "ನಂತರ ಲಭ್ಯವಿರುವ ಸಾಕ್ಷ್ಯಗಳು ಎಲ್ಲಿ ದುರ್ಬಲ, ಪರಸ್ಪರ ವಿರುದ್ಧ ಅಥವಾ ಅಲಭ್ಯವಾಗುತ್ತವೆ ಎಂಬುದನ್ನು ಗುರುತಿಸುತ್ತದೆ.",
  signatureCta: "ಹೇಗೆ ತಿಳಿಯಿತು ಎಂದು ತೋರಿಸಿ →",
  chainClaim: "ಹೇಳಿಕೆ",
  chainEntity: "ಸಂಸ್ಥೆ",
  chainWebsite: "ವೆಬ್‌ಸೈಟ್",
  chainContact: "ಸಂಪರ್ಕ",
  chainPayment: "ಪಾವತಿ",
  chainEvidence: "ಸಾಕ್ಷ್ಯ",

  explainBadge: "ವಿವರಣಾ ಸಾಮರ್ಥ್ಯ",
  explainTitle: "ಯಾವುದೇ ಬ್ಲ್ಯಾಕ್-ಬಾಕ್ಸ್ ತೀರ್ಪುಗಳಿಲ್ಲ.",
  explainAsk: "PARAKH ಅನ್ನು ಕೇಳಿ:",
  explainQuote: "“ನಿಮಗೆ ಹೇಗೆ ತಿಳಿಯಿತು ತೋರಿಸಿ.”",
  explainFollow: "ಮತ್ತು ಸಾಕ್ಷ್ಯದ ಹಾದಿಯನ್ನು ಅನುಸರಿಸಿ.",
  explainFlowClaim: "ಹೇಳಿಕೆ",
  explainFlowSource: "ಮೂಲ",
  explainFlowCheck: "ಪರೀಕ್ಷೆ",
  explainFlowResult: "ಫಲಿತಾಂಶ",
  explainFlowExplanation: "ವಿವರಣೆ",
  separateWhatIs: "ಸ್ಪಷ್ಟವಾಗಿ ಪ್ರತ್ಯೇಕಿಸಿ:",
  separateOfficiallyVerified: "ಅಧಿಕೃತವಾಗಿ ಪರಿಶೀಲಿಸಲ್ಪಟ್ಟದ್ದು",
  separateReliableEvidence: "ವಿಶ್ವಾಸಾರ್ಹ ಸಾಕ್ಷ್ಯದಿಂದ ಬೆಂಬಲಿತವಾದದ್ದು",
  separateCommunityReported: "ಸಮುದಾಯದಿಂದ ವರದಿಯಾದದ್ದು",
  separateAiInferred: "AI ಊಹಿಸಿದ್ದು",
  separateUnknown: "ಅಥವಾ ಇನ್ನೂ ತಿಳಿದಿಲ್ಲದ್ದು",
  explainDisclaimer: "PARAKH ಅನಿಶ್ಚಿತತೆಯನ್ನು ಕೃತಕ ಖಚಿತತೆಯನ್ನಾಗಿ ಪರಿವರ್ತಿಸುವುದಿಲ್ಲ.",

  scamDnaBadge: "SCAM DNA",
  scamDnaTitle1: "ಹಗರಣಗಳಿಗೆ ನಡವಳಿಕೆ ಇರುತ್ತದೆ.",
  scamDnaTitle2: "PARAKH ಅದನ್ನು ಹುಡುಕುತ್ತದೆ.",
  scamDnaDesc: "ಹಣಕಾಸಿನ ವಿಷಯದಲ್ಲಿ ಪತ್ತೆಯಾದ ತಂತ್ರಗಳ ನಡವಳಿಕೆಯ ಹೆಜ್ಜೆಗುರುತು.",
  tacticsList: [
    "ತುರ್ತೇ?",
    "ಖಾತರಿಯೇ?",
    "ಅಧಿಕಾರಿಯ ನಕಲೇ?",
    "ಪಾವತಿಗೆ ಬೇಡಿಕೆಯೇ?",
    "ಭಯ ಸೃಷ್ಟಿಸುವುದೇ?",
    "ಈಗಲೇ ಮಾಡಲು ಒತ್ತಡವೇ?"
  ],
  notFakeScore: "ಯಾವುದೇ ನಕಲಿ “93% ಸ್ಕ್ಯಾಮ್” ಸ್ಕೋರ್ ಅಲ್ಲ.",
  patternsFound: "ಕೇವಲ PARAKH ವಾಸ್ತವವಾಗಿ ಕಂಡುಕೊಂಡ ಮಾದರಿಗಳು.",

  challengeBadge: "ಸವಾಲು ಹಾಕಿ",
  challengeTitle1: "PARAKH ಅನ್ನೂ ಕಣ್ಮುಚ್ಚಿ ನಂಬಬೇಡಿ.",
  challengeTitle2: "ಫಲಿತಾಂಶವನ್ನು ಪ್ರಶ್ನಿಸಿ.",
  challengeP1: "ವಿಶ್ಲೇಷಣೆ ತಪ್ಪಾಗಿದ್ದರೆ ಏನು ಮಾಡುವುದು?",
  challengeP2: "ಪರ್ಯಾಯ ಅಥವಾ ವಿರೋಧಾತ್ಮಕ ಸಾಕ್ಷ್ಯಗಳನ್ನು ಹುಡುಕಲು PARAKH ಗೆ ಹೇಳಿ.",
  challengeP3: "ಏಕೆಂದರೆ ವಿಶ್ವಾಸಾರ್ಹ ಪರಿಶೀಲನಾ ವ್ಯವಸ್ಥೆಯು ತನ್ನನ್ನೇ ಪ್ರಶ್ನಿಸಿಕೊಳ್ಳಲು ಸಿದ್ಧವಿರಬೇಕು.",
  possibleStates: "ಸಂಭಾವ್ಯ ಸ್ಥಿತಿಗಳು:",
  stateContradictoryFound: "ವಿರೋಧಾತ್ಮಕ ಸಾಕ್ಷ್ಯ ಪತ್ತೆಯಾಗಿದೆ",
  stateNoContradiction: "ವಿಶ್ವಾಸಾರ್ಹ ವಿರೋಧಾಭಾಸ ಕಂಡುಬಂದಿಲ್ಲ",
  stateInconclusive: "ಸಾಕ್ಷ್ಯವು ಅನಿರ್ದಿಷ್ಟವಾಗಿದೆ",

  communityBadge: "ಸಮುದಾಯ",
  communityTitle1: "ಒಂದು ವರದಿ ಎಚ್ಚರಿಕೆ.",
  communityTitle2: "ಒಂದು ಮಾದರಿ ಸಂಕೇತ.",
  communityP1: "ಜನರು ಅನುಮಾನಾಸ್ಪದ ಅನುಭವಗಳನ್ನು ಮತ್ತು ಪುರಾವೆಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಬಹುದು.",
  communityLooksAcross: "ವರದಿಗಳಲ್ಲಿ ಮರುಕಳಿಸುವ ಅಂಶಗಳನ್ನು PARAKH ಗುರುತಿಸುತ್ತದೆ:",
  communityPatterns: [
    "ವೆಬ್‌ಸೈಟ್‌ಗಳು.",
    "ಫೋನ್ ಸಂಖ್ಯೆಗಳು.",
    "ಪಾವತಿ ಮಾರ್ಗಗಳು.",
    "ಸಂದೇಶ ಟೆಂಪ್ಲೇಟ್‌ಗಳು.",
    "ನಕಲು ಮಾದರಿಗಳು."
  ],
  communityEmergingNote: "ಮರುಕಳಿಸುವ ಮಾದರಿಗಳನ್ನು ಹೊಸದಾಗಿ ಹೊರಹೊಮ್ಮುತ್ತಿರುವ ವಂಚನೆಯ ಸಂಕೇತಗಳಾಗಿ ಗುರುತಿಸಲಾಗುತ್ತದೆ.",
  communityMicrocopyLabel: "ಪ್ರಮುಖ ಸೂಚನೆ:",
  communityMicrocopyText: "ಸಮುದಾಯ ವರದಿಗಳು ಹಿನ್ನೆಲೆಯನ್ನು ಒದಗಿಸುತ್ತವೆ. ಅವು ತಾವಾಗಿಯೇ ವಂಚನೆಯನ್ನು ಸಾಬೀತುಪಡಿಸುವುದಿಲ್ಲ.",

  bharatBadge: "ಭಾರತ",
  bharatTitlePart1: "ನಂಬಿಕೆಯು ಭಾಷೆಯಲ್ಲಿ",
  bharatTitlePart2: "ಕಳೆದುಹೋಗಬಾರದು.",
  bharatP1: "PARAKH ಭಾರತಕ್ಕಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ.",
  bharatLanguagesLabel: "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ:",
  bharatLanguageList: "English · हिंदी · ಕನ್ನಡ · తెలుగు · தமிழ் · മലയാളം · मराठी · বাংলা · ગુજરાતી · ਪੰਜਾਬੀ · ଓଡ଼ಿଆ · اردو",
  bharatAppliesTo: "ಆಯ್ಕೆಮಾಡಿದ ಭಾಷೆಯು ಸಂಪೂರ್ಣ ಅನುಭವಕ್ಕೆ ಅನ್ವಯಿಸುತ್ತದೆ:",
  bharatAspects: "ವಿಶ್ಲೇಷಣೆ. ಸಾಕ್ಷ್ಯ. ಟ್ರಸ್ಟ್ ಚೈನ್. ಸಮುದಾಯ ಸಾರಾಂಶ. ಸುರಕ್ಷತಾ ಮಾರ್ಗದರ್ಶನ. ಧ್ವನಿ.",
  bharatNotJustButtons: "ಕೇವಲ ಬಟನ್‌ಗಳಿಗಲ್ಲ.",

  voiceBadge: "ಧ್ವನಿ",
  voiceTitlePart1: "ಸ್ಕ್ರೋಲ್ ಮಾಡುವುದಕ್ಕಿಂತ ಓದುವುದು ಸುಲಭವಾದರೆ,",
  voiceTitlePart2: "ಕೇಳಿ.",
  voiceDesc: "PARAKH ನೀವು ಆಯ್ಕೆ ಮಾಡಿದ ಭಾಷೆಯಲ್ಲಿ ಫಲಿತಾಂಶವನ್ನು ವಿವರಿಸಬಲ್ಲದು.",
  simpleModeBadge: "ಸರಳ ಮೋಡ್",
  simpleModeTitle: "ಸರಳ ಮೋಡ್",
  simpleModeDesc: "ಕಡಿಮೆ ಜಾರ್ಗನ್. ಸ್ಪಷ್ಟ ವಿವರಣೆಗಳು. ಕೇಂದ್ರೀಕೃತ ಸುರಕ್ಷತಾ ಮಾರ್ಗದರ್ಶನ.",
  simpleModeNote: "ಮೊದಲ ಬಾರಿಯ ಹೂಡಿಕೆದಾರರು, ಹಿರಿಯ ನಾಗರಿಕರು ಮತ್ತು ಎಲ್ಲವನ್ನೂ ಸುಲಭವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಬಯಸುವವರಿಗಾಗಿ.",

  safetyBadge: "ಸುರಕ್ಷತೆ",
  safetyTitle: "PARAKH ಎಂದಿಗೂ ಏನು ಖರೀದಿಸಬೇಕೆಂದು ಹೇಳುವುದಿಲ್ಲ.",
  safetySubtitle: "ಯಾವುದು ಪರಿಶೀಲನೆಗೆ ಅರ್ಹವಾಗಿದೆ ಎಂಬುದನ್ನು ನಿರ್ಧರಿಸಲು ಇದು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
  safetyNoRecommendations: "ಖರೀದಿ / ಮಾರಾಟ / ಉಳಿಸಿಕೊಳ್ಳುವ ಶಿಫಾರಸುಗಳಿಲ್ಲ.",
  safetyList: [
    "• OTP ವಿನಂತಿಗಳಿಲ್ಲ.",
    "• UPI PIN ವಿನಂತಿಗಳಿಲ್ಲ.",
    "• ಪಾಸ್‌ವರ್ಡ್ ವಿನಂತಿಗಳಿಲ್ಲ.",
    "• ಅನಗತ್ಯ ಸೂಕ್ಷ್ಮ ಹಣಕಾಸು ಮಾಹಿತಿಯ ಅಗತ್ಯವಿಲ್ಲ."
  ],
  safetyMantra: "ನಿಲ್ಲಿಸಿ. ಪರಿಶೀಲಿಸಿ. ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ. ನಂತರ ಕಾರ್ಯನಿರ್ವಹಿಸಿ.",

  finalTitlePart1: "ಇಂಟರ್ನೆಟ್ ನಿಮಗೆ ಉತ್ತರಗಳನ್ನು ನೀಡುತ್ತದೆ.",
  finalTitlePart2: "PARAKH ಅವುಗಳನ್ನು ಪ್ರಶ್ನಿಸಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
  finalMicroCopy: "ಫಾರ್ವರ್ಡ್ ಮಾಡುವ ಮೊದಲು. ಕ್ಲಿಕ್ ಮಾಡುವ ಮೊದಲು. ಹಣ ನೀಡುವ ಮೊದಲು. ನಂಬುವ ಮೊದಲು.",
  finalBrandName: "PARAKH.",
  finalTagline: "ಕೇವಲ ನಂಬಬೇಡಿ. ಪರಿಶೀಲಿಸಿ."
};

const teLanding: LandingStrings = {
  ...enLanding,
  heroTitlePart1: "నమ్మడానికి ముందు.",
  heroTitleVerify: "PARAKH చేయండి.",
  heroSubtitle: "ఆర్థిక సమాచారం నమ్మకం కంటే వేగంగా వ్యాపిస్తుంది. అనుమానాస్పద సందేశాలు, స్క్రీన్‌షాట్‌లు, వెబ్‌సైట్‌లు మరియు వాయిస్ ఇన్‌పుట్‌లను పరిశోధించడానికి PARAKH మీకు సహాయం చేస్తుంది — మీరు చర్య తీసుకునే ముందు ఆధారాలను గుర్తించి.",
  heroGetStarted: "ప్రారంభించండి",
  heroSeeHowItWorks: "ఇది ఎలా పనిచేస్తుందో చూడండి",

  microCopy1: "ఒక సందేశం అధికారికంగా కనిపించవచ్చు. స్క్రీన్‌షాట్ నమ్మదగినదిగా అనిపించవచ్చు. వెబ్‌సైట్ చట్టబద్ధమైనదిగా అనిపించవచ్చు.",
  microCopy2: "PARAKH ఒకే ప్రశ్నను అడుగుతుంది:",
  microCopyQuestion: "“ఈ దావాను నిజంగా ధృవీకరించవచ్చా?”",

  trustChainCardBadge: "TRUST CHAIN RECONSTRUCTION",
  trustChainCardHeading: "దావాను అనుసరించండి. సంబంధాన్ని కనుగొనండి. సాక్ష్యాన్ని తనిఖీ చేయండి.",
  trustChainCardDesc: "PARAKH దావాలు, సంస్థలు, వెబ్‌సైట్‌లు, పరిచయాలు, చెల్లింపు మార్గాలు మరియు సాక్ష్యాలను కలుపుతుంది — ఆపై గొలుసు ఎక్కడ బలహీనపడుతుందో కనుగొంటుంది.",
  trustChainCardTrace: "ట్రేస్",
  trustChainCardExplain: "వివరణ",
  trustChainCardProtect: "రక్షణ",

  problemBadge: "అసలు సమస్య",
  problemTitlePart1: "కేవలం అడగకండి: “ఇది మోసమా?”",
  problemTitlePart2: "అడగండి: “నేను దీన్ని ఎందుకు నమ్మాలి?”",
  problemSubtitle: "ఆర్థిక మోసం ఎల్లప్పుడూ స్పష్టంగా అనుమానాస్పద సందేశంతో ప్రారంభం కాదు.",
  problemItCanBegin: "ఇది ప్రారంభం కావచ్చు:",
  problemItemLogo: "ఒక తెలిసిన లోగోతో.",
  problemItemScreenshot: "నమ్మదగిన స్క్రీన్‌షాట్‌తో.",
  problemItemName: "ఒక నమ్మకమైన పేరుతో.",
  problemItemVoice: "ఒక నమ్మకమైన స్వరంతో.",
  problemItemOpportunity: "పరిమిత కాల అవకాశంతో.",
  problemConclusion: "PARAKH బాహ్య రూపాన్ని మించి చూసేందుకు మరియు అంతర్గత సాక్ష్యాలను పరిశీలించడానికి సహాయపడుతుంది.",

  doesBadge: "PARAKH నిజంగా ఏమి చేస్తుంది",
  doesTitlePart1: "ఒక సందేశం నుండి",
  doesTitlePart2: "పూర్తి విచారణ వరకు.",
  submitHeading: "సమర్పించండి",
  submitList: ["సందేశం.", "స్క్రీన్‌షాట్.", "వెబ్‌సైట్.", "వాయిస్."],
  detectHeading: "గుర్తించండి",
  detectList: ["తొందరపాటు.", "హామీ రాబడులు.", "అధికార దుర్వినియోగం.", "చెల్లింపు ఒత్తిడి.", "ఫిషింగ్.", "మోసపూరిత భాష."],
  traceHeading: "ట్రేస్ చేయండి",
  traceList: ["దావాలు.", "సంస్థలు.", "వెబ్‌సైట్‌లు.", "పరిచయాలు.", "చెల్లింపు మార్గాలు."],
  verifyHeading: "ధృవీకరించండి",
  verifyList: ["అధికారిక వనరులు.", "నమ్మదగిన సాక్ష్యాలు.", "కమ్యూనిటీ సాక్ష్యాలు."],
  explainHeading: "వివరించండి",
  explainList: ["మేము ఏమి కనుగొన్నాము.", "ఏది సమర్థిస్తుంది.", "ఏది వ్యతిరేకిస్తుంది.", "ఇంకా ఏమి తెలియదు."],

  signatureBadge: "ముఖ్యమైన ఫీచర్",
  signatureTitle: "నమ్మకం ఎక్కడ",
  signatureHighlight: "విరిగిపోతుంది?",
  signatureP1: "PARAKH అనుమానాస్పద భాషను గుర్తించిన తర్వాత ఆగదు.",
  signatureP2: "ఇది దావా వెనుక ఉన్న సంబంధాల గొలుసును పునర్నిర్మిస్తుంది.",
  signatureP3: "ఆ తర్వాత ఆధారాలు ఎక్కడ బలహీనంగా, పరస్పర విరుద్ధంగా లేదా అసంపూర్తిగా ఉన్నాయో గుర్తిస్తుంది.",
  signatureCta: "ఎలా తెలిసిందో చూపించండి →",
  chainClaim: "దావా",
  chainEntity: "సంస్థ",
  chainWebsite: "వెబ్‌సైట్",
  chainContact: "పరిచయం",
  chainPayment: "చెల్లింపు",
  chainEvidence: "సాక్ష్యం",

  explainBadge: "వివరణాత్మకత",
  explainTitle: "బ్లాక్-బాక్స్ తీర్పులు లేవు.",
  explainAsk: "PARAKH ని అడగండి:",
  explainQuote: "“మీకు ఎలా తెలిసిందో చూపించండి.”",
  explainFollow: "మరియు సాక్ష్యాల జాడను అనుసరించండి.",
  explainFlowClaim: "దావా",
  explainFlowSource: "మూలం",
  explainFlowCheck: "తనిఖీ",
  explainFlowResult: "ఫలితం",
  explainFlowExplanation: "వివరణ",
  separateWhatIs: "స్పష్టంగా వేరు చేయండి:",
  separateOfficiallyVerified: "అధికారికంగా ధృవీకరించబడింది",
  separateReliableEvidence: "నమ్మదగిన సాక్ష్యం ద్వారా సమర్థించబడింది",
  separateCommunityReported: "కమ్యూనిటీ ద్వారా నివేదించబడింది",
  separateAiInferred: "AI ద్వారా అంచనా వేయబడింది",
  separateUnknown: "లేదా ఇంకా తెలియదు",
  explainDisclaimer: "PARAKH అనిశ్చితిని బలవంతపు ఖచ్చితత్వంగా మార్చదు.",

  scamDnaBadge: "SCAM DNA",
  scamDnaTitle1: "మోసాలకు ఒక ప్రవర్తన ఉంటుంది.",
  scamDnaTitle2: "PARAKH దానిని వెతుకుతుంది.",
  scamDnaDesc: "ఆర్థిక సమాచారంలో గుర్తించిన వ్యూహాల ప్రవర్తనా వేలిముద్ర.",
  tacticsList: [
    "తొందరపాటా?",
    "హామీనా?",
    "అధికారిక వేషధారణా?",
    "డబ్బు డిమాండా?",
    "భయం సృష్టించడమా?",
    "వెంటనే చేయాలని ఒత్తిడా?"
  ],
  notFakeScore: "నకిలీ “93% స్కామ్” స్కోరు కాదు.",
  patternsFound: "PARAKH వాస్తవంగా కనుగొన్న నమూనాలు మాత్రమే.",

  challengeBadge: "సవాలు చేయండి",
  challengeTitle1: "PARAKH ని కూడా గుడ్డిగా నమ్మకండి.",
  challengeTitle2: "ఫలితాన్ని సవాలు చేయండి.",
  challengeP1: "విశ్లేషణ తప్పు అయితే ఏమిటి?",
  challengeP2: "వ్యతిరేక లేదా ప్రత్యామ్నాయ సాక్ష్యాలను శోధించమని PARAKH ని అడగండి.",
  challengeP3: "ఎందుకంటే నమ్మదగిన ధృవీకరణ వ్యవస్థ తనను తాను ప్రశ్నించుకోవడానికి సిద్ధంగా ఉండాలి.",
  possibleStates: "సాధ్యమైన స్థితులు:",
  stateContradictoryFound: "వ్యతిరేక సాక్ష్యం కనుగొనబడింది",
  stateNoContradiction: "నమ్మదగిన వ్యతిరేకత కనుగొనబడలేదు",
  stateInconclusive: "సాక్ష్యం అసంపూర్తిగా ఉంది",

  communityBadge: "కమ్యూనిటీ",
  communityTitle1: "ఒక నివేదిక హెచ్చరిక.",
  communityTitle2: "ఒక నమూనా బలమైన సంకేతం.",
  communityP1: "ప్రజలు అనుమానాస్పద అనుభవాలను మరియు ఆధారాలను పంచుకోవచ్చు.",
  communityLooksAcross: "నివేదికలలో పునరావృతమయ్యే వాటిని PARAKH చూస్తుంది:",
  communityPatterns: [
    "వెబ్‌సైట్‌లు.",
    "ఫోన్ నంబర్లు.",
    "చెల్లింపు మార్గాలు.",
    "సందేశ టెంప్లేట్‌లు.",
    "వేషధారణ నమూనాలు."
  ],
  communityEmergingNote: "పునరావృతమయ్యే నమూనాలు కొత్తగా వస్తున్న మోసాల సంకేతాలుగా చూపబడతాయి.",
  communityMicrocopyLabel: "ముఖ్యమైన గమనిక:",
  communityMicrocopyText: "కమ్యూనిటీ నివేదికలు సందర్భాన్ని అందిస్తాయి. అవి నేరుగా మోసాన్ని రుజువు చేయవు.",

  bharatBadge: "భారత్",
  bharatTitlePart1: "నమ్మకం భాషలో",
  bharatTitlePart2: "కోల్పోకూడదు.",
  bharatP1: "PARAKH భారత్ కోసం రూపొందించబడింది.",
  bharatLanguagesLabel: "మీ భాషలో విశ్లేషణను అర్థం చేసుకోండి:",
  bharatLanguageList: "English · हिंदी · ಕನ್ನಡ · తెలుగు · தமிழ் · മലയാളം · मराठी · বাংলা · ગુજરાતી · ਪੰਜਾਬੀ · ଓଡ଼ಿଆ · اردو",
  bharatAppliesTo: "ఎంచుకున్న భాష మొత్తం అనుభవానికి వర్తిస్తుంది:",
  bharatAspects: "విశ్లేషణ. సాక్ష్యం. ట్రస్ట్ చైన్. కమ్యూనిటీ సారాంశాలు. భద్రతా మార్గదర్శకత్వం. వాయిస్.",
  bharatNotJustButtons: "కేవలం బటన్‌లకు మాత్రమే కాదు.",

  voiceBadge: "వాయిస్",
  voiceTitlePart1: "స్క్రోల్ చేయడం కంటే చదవడం సులభం అయితే,",
  voiceTitlePart2: "వినండి.",
  voiceDesc: "PARAKH మీరు ఎంచుకున్న భాషలో ఫలితాన్ని వివరించగలదు.",
  simpleModeBadge: "సింపుల్ మోడ్",
  simpleModeTitle: "సింపుల్ మోడ్",
  simpleModeDesc: "తక్కువ సాంకేతిక పదాలు. స్పష్టమైన వివరణలు. దృష్టి సారించిన భద్రతా మార్గదర్శకత్వం.",
  simpleModeNote: "మొదటిసారి పెట్టుబడిదారులు, వృద్ధులు మరియు సులభంగా అర్థం చేసుకోవాలనుకునే ప్రతి ఒక్కరి కోసం.",

  safetyBadge: "భద్రత",
  safetyTitle: "PARAKH ఏమి కొనాలో ఎప్పటికీ చెప్పదు.",
  safetySubtitle: "ఏది ధృవీకరణకు అర్హమైనదో నిర్ణయించడంలో ఇది మీకు సహాయపడుతుంది.",
  safetyNoRecommendations: "కొనుగోలు / అమ్మకం / హోల్డ్ సిఫార్సులు లేవు.",
  safetyList: [
    "• OTP అభ్యర్థనలు లేవు.",
    "• UPI PIN అభ్యర్థనలు లేవు.",
    "• పాస్‌వర్డ్ అభ్యర్థనలు లేవు.",
    "• అనవసరమైన సున్నితమైన ఆర్థిక సమాచారం అడగదు."
  ],
  safetyMantra: "ఆగండి. ధృవీకరించండి. అర్థం చేసుకోండి. తర్వాతే నిర్ణయం తీసుకోండి.",

  finalTitlePart1: "ఇంటర్నెట్ మీకు సమాధానాలను ఇస్తుంది.",
  finalTitlePart2: "PARAKH వాటిని ప్రశ్నించడానికి మీకు సహాయం చేస్తుంది.",
  finalMicroCopy: "ఫార్వర్డ్ చేయడానికి ముందు. క్లిక్ చేయడానికి ముందు. చెల్లించడానికి ముందు. నమ్మడానికి ముందు.",
  finalBrandName: "PARAKH.",
  finalTagline: "గుడ్డిగా నమ్మకండి. ధృవీకరించండి."
};

const taLanding: LandingStrings = {
  ...enLanding,
  heroTitlePart1: "நம்புவதற்கு முன்.",
  heroTitleVerify: "PARAKH செய்யுங்கள்.",
  heroSubtitle: "நிதி உள்ளடக்கம் நம்பிக்கையை விட வேகமாக பரவுகிறது. சந்தேகத்திற்கிடமான செய்திகள், ஸ்கிரீன்ஷாட்கள், தளங்கள் மற்றும் ஆடியோவை ஆய்வு செய்ய PARAKH உதவுகிறது — செயல்படுவதற்கு முன் ஆதாரங்களை இணைத்து.",
  heroGetStarted: "தொடங்குங்கள்",
  heroSeeHowItWorks: "எப்படி செயல்படுகிறது எனப் பாருங்கள்",

  microCopy1: "ஒரு செய்தி அதிகாரப்பூர்வமாக தோன்றலாம். ஸ்கிரீன்ஷாட் நம்பத்தகுந்ததாக தெரியலாம். தளம் உண்மையானதாக தோன்றலாம்.",
  microCopy2: "PARAKH ஒரு கேள்வியை மட்டுமே கேட்கிறது:",
  microCopyQuestion: "“இந்தக் கூற்றை உண்மையில் சரிபார்க்க முடியுமா?”",

  trustChainCardBadge: "TRUST CHAIN RECONSTRUCTION",
  trustChainCardHeading: "கூற்றைப் பின்தொடருங்கள். இணைப்பைக் கண்டறியுங்கள். ஆதாரத்தைச் சரிபாருங்கள்.",
  trustChainCardDesc: "PARAKH கூற்றுகள், நிறுவனங்கள், தளங்கள், தொடர்புகள், பணப்பரிமாற்ற வழிகள் மற்றும் ஆதாரங்களை இணைக்கிறது — பின்னர் சங்கிலி எங்கு பலவீனமாகிறது என்பதைக் காட்டுகிறது.",
  trustChainCardTrace: "கண்டறி",
  trustChainCardExplain: "விளக்கு",
  trustChainCardProtect: "பாதுகா",

  problemBadge: "உண்மையான பிரச்சனை",
  problemTitlePart1: "“இது மோசடியா?” என்று மட்டும் கேட்காதீர்கள்",
  problemTitlePart2: "“இதை நான் ஏன் நம்ப வேண்டும்?” என்று கேளுங்கள்",
  problemSubtitle: "நிதி மோசடி எப்போதும் வெளிப்படையான சந்தேகச் செய்திகளோடு தொடங்குவதில்லை.",
  problemItCanBegin: "இது தொடங்கலாம்:",
  problemItemLogo: "பழக்கமான லோகோ மூலம்.",
  problemItemScreenshot: "நம்பத்தகுந்த ஸ்கிரீன்ஷாட் மூலம்.",
  problemItemName: "நம்பகமான பெயர் மூலம்.",
  problemItemVoice: "நம்பிக்கையான குரல் மூலம்.",
  problemItemOpportunity: "குறுகிய கால வாய்ப்பு மூலம்.",
  problemConclusion: "தோற்றத்திற்கு அப்பால் பார்த்து ஆதாரங்களை ஆராய PARAKH பயனர்களுக்கு உதவுகிறது.",

  signatureBadge: "முக்கிய அம்சம்",
  signatureTitle: "நம்பிக்கை எங்கு",
  signatureHighlight: "முடிகிறது?",
  signatureP1: "PARAKH சந்தேகத்திற்கிடமான மொழியைக் கண்டறிந்ததும் நின்றுவிடுவதில்லை.",
  signatureP2: "இது கூற்றின் பின்னணியில் உள்ள தொடர்புகளின் சங்கிலியை மறுசீரமைக்கிறது.",
  signatureP3: "பின்னர் கிடைக்கும் ஆதாரங்கள் எங்கு பலவீனமாக, முரண்பாடாக அல்லது கிடைக்காமல் போகிறது என்பதை அடையாளம் காண்கிறது.",
  signatureCta: "எவ்வாறு அறிந்துகொண்டீர்கள் எனக் காட்டு →",
  chainClaim: "கூற்று",
  chainEntity: "நிறுவனம்",
  chainWebsite: "இணையதளம்",
  chainContact: "தொடர்பு",
  chainPayment: "பணப்பரிமாற்றம்",
  chainEvidence: "ஆதாரம்",

  safetyBadge: "பாதுகாப்பு",
  safetyTitle: "PARAKH எதையும் வாங்கும்படி ஒருபோதும் கூறாது.",
  safetySubtitle: "எதை சரிபார்க்க வேண்டும் என்பதைத் தீர்மானிக்க மட்டுமே இது உதவுகிறது.",
  safetyNoRecommendations: "வாங்குதல் / விற்றல் பரிந்துரைகள் இல்லை.",
  safetyList: [
    "• OTP கோரப்படாது.",
    "• UPI PIN கோரப்படாது.",
    "• கடவுச்சொல் கோரப்படாது.",
    "• தேவையற்ற ரகசிய நிதி விவரங்கள் தேவையில்லை."
  ],
  safetyMantra: "நிறுத்துங்கள். சரிபாருங்கள். புரிந்து கொள்ளுங்கள். பிறகு செயல்படுங்கள்.",

  finalTitlePart1: "இணையம் உங்களுக்கு பதில்களைத் தருகிறது.",
  finalTitlePart2: "PARAKH அவற்றை கேள்வி கேட்க உதவுகிறது.",
  finalMicroCopy: "பகிர்வதற்கு முன். கிளிக் செய்வதற்கு முன். பணம் செலுத்தும் முன். நம்புவதற்கு முன்.",
  finalBrandName: "PARAKH.",
  finalTagline: "குருட்டுத்தனமாக நம்பாதீர்கள். சரிபாருங்கள்."
};

export const LANDING_TRANSLATIONS: Record<Language, LandingStrings> = {
  en: enLanding,
  hi: hiLanding,
  kn: knLanding,
  te: teLanding,
  ta: taLanding,
  ml: {
    ...enLanding,
    heroTitlePart1: "വിശ്വസിക്കുന്നതിന് മുൻപ്.",
    heroTitleVerify: "PARAKH ചെയ്യൂ.",
    heroSubtitle: "സാമ്പത്തിക ഉള്ളടക്കം വിശ്വാസത്തേക്കാൾ വേഗത്തിൽ സഞ്ചരിക്കുന്നു. സംശയാസ്പദമായ സന്ദേശങ്ങൾ, സ്ക്രീൻഷോട്ടുകൾ, വെബ്‌സൈറ്റുകൾ എന്നിവ പരിശോധിക്കാൻ PARAKH സഹായിക്കുന്നു.",
    heroGetStarted: "ആരംഭിക്കുക",
    heroSeeHowItWorks: "ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു എന്ന് കാണുക",
    safetyMantra: "നിൽക്കൂ. പരിശോധിക്കൂ. മനസ്സിലാക്കൂ. ശേഷം പ്രവർത്തിക്കൂ."
  },
  mr: {
    ...enLanding,
    heroTitlePart1: "विश्वास ठेवण्यापूर्वी.",
    heroTitleVerify: "PARAKH करा.",
    heroSubtitle: "आर्थिक मजकूर विश्वासापेक्षा वेगाने पसरतो. संशयास्पद संदेश, स्क्रीनशॉट, वेबसाइट्स तपासण्यासाठी PARAKH मदत करते — कृती करण्यापूर्वी पुराव्यांशी जोडून.",
    heroGetStarted: "सुरू करा",
    heroSeeHowItWorks: "हे कसे कार्य करते ते पहा",
    safetyMantra: "थांबा. पडताळणी करा. समजून घ्या. मग कृती करा."
  },
  bn: {
    ...enLanding,
    heroTitlePart1: "বিশ্বাস করার আগে।",
    heroTitleVerify: "PARAKH করুন।",
    heroSubtitle: "আর্থিক বিষয়বস্তু বিশ্বাসের চেয়ে দ্রুত চলে। সন্দেহজনক বার্তা, স্ক্রিনশট এবং ওয়েবসাইট যাচাই করতে PARAKH সাহায্য করে।",
    heroGetStarted: "শুরু করুন",
    heroSeeHowItWorks: "এটি কীভাবে কাজ করে দেখুন",
    safetyMantra: "থামুন। যাচাই করুন। বুঝুন। তারপর কাজ করুন।"
  },
  gu: {
    ...enLanding,
    heroTitlePart1: "વિશ્વાસ કરતા પહેલા.",
    heroTitleVerify: "PARAKH કરો.",
    heroSubtitle: "નાણાકીય સામગ્રી વિશ્વાસ કરતાં વધુ ઝડપથી ફેલાય છે. શંકાસ્પદ સંદેશાઓ, સ્ક્રીનશૉટ્સ અને વેબસાઇટ્સ ચકાસવા માટે PARAKH મદદ કરે છે.",
    heroGetStarted: "શરૂ કરો",
    heroSeeHowItWorks: "આ કેવી રીતે કામ કરે છે તે જુઓ",
    safetyMantra: "અટકો. ચકાસો. સમજો. પછી પગલું ભરો."
  },
  pa: {
    ...enLanding,
    heroTitlePart1: "ਵਿਸ਼ਵਾਸ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ।",
    heroTitleVerify: "PARAKH ਕਰੋ।",
    heroSubtitle: "ਵਿੱਤੀ ਸਮੱਗਰੀ ਭਰੋਸੇ ਨਾਲੋਂ ਤੇਜ਼ੀ ਨਾਲ ਫੈਲਦੀ ਹੈ। ਸ਼ੱਕੀ ਸੁਨੇਹਿਆਂ, ਸਕ੍ਰੀਨਸ਼ੌਟਸ ਅਤੇ ਵੈੱਬਸਾਈਟਾਂ ਦੀ ਜਾਂਚ ਕਰਨ ਲਈ PARAKH ਮਦਦ ਕਰਦਾ ਹੈ।",
    heroGetStarted: "ਸ਼ੁਰੂ ਕਰੋ",
    heroSeeHowItWorks: "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ ਦੇਖੋ",
    safetyMantra: "ਰੁਕੋ। ਪੜਤਾਲੋ। ਸਮਝੋ। ਫਿਰ ਕਾਰਵਾਈ ਕਰੋ।"
  },
  or: {
    ...enLanding,
    heroTitlePart1: "ବିଶ୍ୱାସ କରିବା ପୂର୍ବରୁ।",
    heroTitleVerify: "PARAKH କରନ୍ତୁ।",
    heroSubtitle: "ଆର୍ଥିକ ବିଷୟବସ୍ତୁ ବିଶ୍ୱାସଠାରୁ ଅଧିକ ଦ୍ରୁତ ଗତିରେ ପ୍ରସାରିତ ହୁଏ। ସନ୍ଦେହଜନକ ବାର୍ତ୍ତା ଏବଂ ୱେବସାଇଟ୍ ଯାଞ୍ଚ କରିବାକୁ PARAKH ସାହାଯ୍ୟ କରେ।",
    heroGetStarted: "ଆରମ୍ଭ କରନ୍ତୁ",
    heroSeeHowItWorks: "ଏହା କିପରି କାମ କରେ ଦେଖନ୍ତୁ",
    safetyMantra: "ଅଟକନ୍ତୁ। ଯାଞ୍ଚ କରନ୍ତୁ। ବୁଝନ୍ତୁ। ତା’ପରେ କାର୍ଯ୍ୟ କରନ୍ତୁ।"
  },
  ur: {
    ...enLanding,
    heroTitlePart1: "یقین کرنے سے پہلے۔",
    heroTitleVerify: "PARAKH کریں۔",
    heroSubtitle: "مالیاتی مواد اعتماد سے زیادہ تیزی سے سفر کرتا ہے۔ مشتبہ پیغامات، اسکرین شاٹس اور ویب سائٹس کی تصدیق کے لیے PARAKH مدد کرتا ہے۔",
    heroGetStarted: "شروع کریں",
    heroSeeHowItWorks: "یہ کیسے کام کرتا ہے دیکھیں",
    safetyMantra: "رکیں۔ تصدیق کریں۔ سمجھیں۔ پھر عمل کریں۔"
  }
};
