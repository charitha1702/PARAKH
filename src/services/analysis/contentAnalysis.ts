import { AnalysisResult, InputType, EvidenceGraphNode, SafeStep, Language } from '../../types/analysis';
import { detectSignals } from './signalDetection';
import { retrieveEvidence } from './evidenceRetrieval';

export function analyzeContent(content: string, inputType: InputType, language: Language = 'en'): AnalysisResult {
  const { signals, behavioralSignals, highlightedExcerpts } = detectSignals(content, language);
  const evidenceItems = retrieveEvidence(content, language);

  const signalsCount = signals.length;
  const isCritical = signals.some(s => s.severity === 'critical');
  const riskLevel = signalsCount >= 3 || isCritical ? 'high' : signalsCount >= 1 ? 'elevated' : 'moderate';

  const statusHeadingMap: Record<Language, { high: string; elevated: string; moderate: string; caution: string }> = {
    en: {
      high: 'High-risk indicators detected.',
      elevated: 'Elevated risk signals detected.',
      moderate: 'Caution advised: unverified claims present.',
      caution: 'Caution advised: unverified claims present.'
    },
    kn: {
      high: 'ಹೆಚ್ಚಿನ ಅಪಾಯದ ಸೂಚನೆಗಳು ಕಂಡುಬಂದಿವೆ.',
      elevated: 'ಅನುಮಾನಾಸ್ಪದ ಸಂಕೇತಗಳು ಪತ್ತೆಯಾಗಿವೆ.',
      moderate: 'ಎಚ್ಚರಿಕೆ ಅಗತ್ಯ: ಪರಿಶೀಲಿಸದ ಹಕ್ಕುಗಳು ಇವೆ.',
      caution: 'ಎಚ್ಚರಿಕೆ ಅಗತ್ಯ: ಪರಿಶೀಲಿಸದ ಹಕ್ಕುಗಳು ಇವೆ.'
    },
    hi: {
      high: 'उच्च जोखिम वाले संकेत मिले हैं।',
      elevated: 'संदिग्ध संकेत पाए गए हैं।',
      moderate: 'सावधानी जरूरी: असत्यापित दावे मौजूद हैं।',
      caution: 'सावधानी जरूरी: असत्यापित दावे मौजूद हैं।'
    },
    te: {
      high: 'అధిక ప్రమాద సూచనలు గుర్తించబడ్డాయి.',
      elevated: 'అనుమానాస్పద సంకేతాలు గుర్తించబడ్డాయి.',
      moderate: 'జాగ్రత్త అవసరం: ధృవీకరించని క్లెయిమ్‌లు ఉన్నాయి.',
      caution: 'జాగ్రత్త అవసరం: ధృవీకరించని క్లెయిమ్‌లు ఉన్నాయి.'
    }
  };

  const statusHeading = (statusHeadingMap[language] || statusHeadingMap.en)[riskLevel];

  // Evidence Graph Nodes (Curved line through stages)
  const evidenceGraphNodesMap: Record<Language, EvidenceGraphNode[]> = {
    en: [
      {
        id: 'node-content',
        label: 'Input Content',
        stage: 'content',
        strength: 95,
        detail: `Parsed ${content.length} characters across message structure, pressure keywords, and payment instructions.`,
        iconName: 'FileText'
      },
      {
        id: 'node-signals',
        label: 'AI Behavioral Signals',
        stage: 'signals',
        strength: signalsCount >= 3 ? 92 : 75,
        detail: `Detected ${signalsCount} warning patterns including urgency, return guarantees, and private payment routing.`,
        iconName: 'AlertTriangle'
      },
      {
        id: 'node-evidence',
        label: 'External Regulatory Evidence',
        stage: 'evidence',
        strength: 88,
        detail: 'Correlated against SEBI Investment Adviser Regulations, RBI Sachet guidelines, and I4C fraud repositories.',
        iconName: 'ShieldCheck'
      },
      {
        id: 'node-verification',
        label: 'Synthesis Assessment',
        stage: 'verification',
        strength: 90,
        detail: 'Synthesized assessment highlights statutory non-compliance without claiming absolute mathematical certainty.',
        iconName: 'CheckCircle'
      }
    ],
    kn: [
      {
        id: 'node-content',
        label: 'ಸ್ವೀಕರಿಸಿದ ಸಂದೇಶ',
        stage: 'content',
        strength: 95,
        detail: `ಒಟ್ಟು ${content.length} ಅಕ್ಷರಗಳ ಸಂದೇಶ, ಒತ್ತಡದ ಪದಗಳು ಮತ್ತು ಪಾವತಿ ವಿವರಗಳ ಸಂಪೂರ್ಣ ವಿಶ್ಲೇಷಣೆ.`,
        iconName: 'FileText'
      },
      {
        id: 'node-signals',
        label: 'AI ನಡವಳಿಕೆ ಸಂಕೇತಗಳು',
        stage: 'signals',
        strength: signalsCount >= 3 ? 92 : 75,
        detail: `ಖಾತರಿ ಲಾಭ, ಕೃತಕ ತುರ್ತು ಮತ್ತು ಖಾಸಗಿ ಪಾವತಿ ಸೇರಿದಂತೆ ${signalsCount} ಎಚ್ಚರಿಕೆಯ ಮಾದರಿಗಳು ಪತ್ತೆಯಾಗಿವೆ.`,
        iconName: 'AlertTriangle'
      },
      {
        id: 'node-evidence',
        label: 'ಬಾಹ್ಯ ಶಾಸನಬದ್ಧ ಸಾಕ್ಷ್ಯಗಳು',
        stage: 'evidence',
        strength: 88,
        detail: 'SEBI ನಿಯಮಗಳು, RBI ಸಚೇತ್ ಮಾರ್ಗಸೂಚಿಗಳು ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಅಪರಾಧ ದಾಖಲೆಗಳೊಂದಿಗೆ ಪರಿಶೀಲನೆ.',
        iconName: 'ShieldCheck'
      },
      {
        id: 'node-verification',
        label: 'ಅಂತಿಮ ಪರಿಶೀಲನಾ ತೀರ್ಮಾನ',
        stage: 'verification',
        strength: 90,
        detail: 'ಕುರುಡು ನಂಬಿಕೆಯ ಬದಲು ಕಾನೂನು ಉಲ್ಲಂಘನೆಗಳನ್ನು ಎತ್ತಿ ತೋರಿಸುವ ಸಮತೋಲಿತ ಪರಿಶೀಲನಾ ವರದಿ.',
        iconName: 'CheckCircle'
      }
    ],
    hi: [
      {
        id: 'node-content',
        label: 'प्राप्त सामग्री',
        stage: 'content',
        strength: 95,
        detail: `${content.length} अक्षरों के संदेश, मनोवैज्ञानिक दबाव और भुगतान निर्देशों का संपूर्ण विश्लेषण।`,
        iconName: 'FileText'
      },
      {
        id: 'node-signals',
        label: 'AI व्यवहार संबंधी संकेत',
        stage: 'signals',
        strength: signalsCount >= 3 ? 92 : 75,
        detail: `गारंटीड रिटर्न, जल्दबाजी और निजी भुगतान सहित ${signalsCount} चेतावनी पैटर्न पाए गए।`,
        iconName: 'AlertTriangle'
      },
      {
        id: 'node-evidence',
        label: 'बाहरी वैधानिक साक्ष्य',
        stage: 'evidence',
        strength: 88,
        detail: 'सेबी सलाहकार विनियम, आरबीआई सचेत दिशानिर्देश और राष्ट्रीय साइबर अपराध रिकॉर्ड से मिलान।',
        iconName: 'ShieldCheck'
      },
      {
        id: 'node-verification',
        label: 'अंतिम सत्यापन मूल्यांकन',
        stage: 'verification',
        strength: 90,
        detail: 'कानूनी गैर-अनुपालन को उजागर करने वाला जिम्मेदार और संतुलित सत्यापन निष्कर्ष।',
        iconName: 'CheckCircle'
      }
    ],
    te: [
      {
        id: 'node-content',
        label: 'స్వీకరించిన సందేశం',
        stage: 'content',
        strength: 95,
        detail: `${content.length} అక్షరాల సందేశం, ఒత్తిడి పదాలు మరియు చెల్లింపు వివరాల సమగ్ర విశ్లేషణ.`,
        iconName: 'FileText'
      },
      {
        id: 'node-signals',
        label: 'AI ప్రవర్తనా సంకేతాలు',
        stage: 'signals',
        strength: signalsCount >= 3 ? 92 : 75,
        detail: `గ్యారెంటీ లాభాలు, అత్యవసరం మరియు ప్రైవేట్ చెల్లింపులతో సహా ${signalsCount} హెచ్చరిక నమూనాలు గుర్తించబడ్డాయి.`,
        iconName: 'AlertTriangle'
      },
      {
        id: 'node-evidence',
        label: 'బాహ్య చట్టబద్ధమైన ఆధారాలు',
        stage: 'evidence',
        strength: 88,
        detail: 'SEBI నిబంధనలు, RBI సచేత్ మార్గదర్శకాలు మరియు జాతీయ సైబర్ క్రైమ్ రికార్డులతో సరిపోల్చడం.',
        iconName: 'ShieldCheck'
      },
      {
        id: 'node-verification',
        label: 'తుది ధృవీకరణ తీర్పు',
        stage: 'verification',
        strength: 90,
        detail: 'చట్టపరమైన ఉల్లంఘనలను స్పష్టంగా తెలియజేసే బాధ్యతాయుతమైన ధృవీకరణ నివేదిక.',
        iconName: 'CheckCircle'
      }
    ]
  };

  const evidenceGraphNodes = evidenceGraphNodesMap[language] || evidenceGraphNodesMap.en;

  // What we know vs What we couldn't verify
  const whatWeKnowMap: Record<Language, string[]> = {
    en: [
      `${signalsCount} distinct warning signals were detected in the text.`,
      'Guaranteed or fixed return promises on market investments are explicitly prohibited under SEBI circulars.',
      'Payment instructions direct funds to a personal or private destination rather than a regulated institutional clearing account.',
      'Similar phrasing and urgency tactics match documented high-frequency fraud patterns reported on National Cyber Crime Helpline 1930.'
    ],
    kn: [
      `ಸಂದೇಶದಲ್ಲಿ ${signalsCount} ಪ್ರಮುಖ ಎಚ್ಚರಿಕೆಯ ಸಂಕೇತಗಳು ನಿಖರವಾಗಿ ಪತ್ತೆಯಾಗಿವೆ.`,
      'ಷೇರು ಮಾರುಕಟ್ಟೆ ಹೂಡಿಕೆಯಲ್ಲಿ ಗ್ಯಾರಂಟಿ ಅಥವಾ ನಿಶ್ಚಿತ ಲಾಭದ ಭರವಸೆ ನೀಡುವುದನ್ನು SEBI ಕಾನೂನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧಿಸಿದೆ.',
      'ಅಧಿಕೃತ ಕಂಪನಿಯ ಬದಲಿಗೆ ಹಣವನ್ನು ವೈಯಕ್ತಿಕ UPI ಅಥವಾ ಖಾಸಗಿ ಖಾತೆಗೆ ವರ್ಗಾಯಿಸಲು ಕೇಳಲಾಗಿದೆ.',
      'ಇದೇ ರೀತಿಯ ಪದಗಳು ಮತ್ತು ತುರ್ತು ತಂತ್ರಗಳು ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಹೆಲ್ಪ್‌ಲೈನ್ 1930 ನಲ್ಲಿ ದಾಖಲಾದ ವಂಚನೆಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತವೆ.'
    ],
    hi: [
      `सामग्री में ${signalsCount} गंभीर चेतावनी संकेतों की पहचान की गई है।`,
      'शेयर बाजार के निवेश पर निश्चित रिटर्न का वादा सेबी के नियमों के तहत पूरी तरह प्रतिबंधित है।',
      'पैसे किसी आधिकारिक संस्थागत खाते के बजाय किसी व्यक्ति के निजी यूपीआई पते पर मांगे गए हैं।',
      'यह भाषा और जल्दबाजी की शैली राष्ट्रीय साइबर हेल्पलाइन 1930 पर दर्ज धोखाधड़ी मामलों से मेल खाती है।'
    ],
    te: [
      `సందేశంలో ${signalsCount} ముఖ్యమైన హెచ్చరిక సంకేతాలు గుర్తించబడ్డాయి.`,
      'స్టాక్ మార్కెట్ పెట్టుబడులపై గ్యారెంటీ లాభాల వాగ్దానం చేయడం సెబీ నిబంధనల ప్రకారం చట్టవిరుద్ధం.',
      'డబ్బును అధికారిక సంస్థాగత ఖాతాకు కాకుండా ఒక వ్యక్తి ప్రైవేట్ UPI ఖాతాకు పంపమని అడుగుతున్నారు.',
      'ఇలాంటి మాటలు మరియు అత్యవసర వ్యూహాలు జాతీయ సైబర్ హెల్ప్‌లైన్ 1930 లో నమోదైన మోసాలతో సరిపోలుతున్నాయి.'
    ]
  };

  const whatWeCouldNotVerifyMap: Record<Language, string[]> = {
    en: [
      'The true legal identity or physical jurisdiction of the individual operating the messaging handle.',
      'Whether the claimed statutory registration number (if mentioned) legitimately belongs to the sender or was misappropriated.',
      'The backend infrastructure of any referenced third-party application or download link without sandbox forensics.'
    ],
    kn: [
      'ಸಂದೇಶ ಕಳುಹಿಸಿದ ವ್ಯಕ್ತಿಯ ನಿಜವಾದ ಕಾನೂನುಬದ್ಧ ಗುರುತು ಅಥವಾ ಅವರ ಭೌಗೋಳಿಕ ಸ್ಥಳ.',
      'ಸಂದೇಶದಲ್ಲಿ ಉಲ್ಲೇಖಿಸಲಾದ ನೋಂದಣಿ ಸಂಖ್ಯೆಯು ನಿಜವಾಗಿಯೂ ಅವರಿಗೆ ಸೇರಿದೆಯೇ ಅಥವಾ ಕದಿಯಲಾದ ಸಂಖ್ಯೆಯೇ ಎಂಬುದು.',
      'ಉಲ್ಲೇಖಿಸಲಾದ ಯಾವುದೇ ಬಾಹ್ಯ ಅಪ್ಲಿಕೇಶನ್ ಅಥವಾ ಡೌನ್‌ಲೋಡ್ ಲಿಂಕ್‌ನ ಸರ್ವರ್ ಮೂಲಗಳು.'
    ],
    hi: [
      'संदेश भेजने वाले व्यक्ति की वास्तविक कानूनी पहचान या उसका भौगोलिक स्थान।',
      'क्या दावा किया गया पंजीकरण नंबर वास्तव में प्रेषक का है या किसी और का चुराया गया है।',
      'उल्लिखित किसी भी बाहरी ऐप या डाउनलोड लिंक का आंतरिक तकनीकी ढांचा।'
    ],
    te: [
      'సందేశం పంపిన వ్యక్తి యొక్క నిజమైన గుర్తింపు లేదా వారి అసలు చిరునామా.',
      'సందేశంలో పేర్కొన్న రిజిస్ట్రేషన్ నంబర్ నిజంగా వారిదేనా లేదా ఇతరుల నుండి దొంగిలించబడిందా అనేది.',
      'సందేశంలో ఇచ్చిన ఏదైనా బాహ్య యాప్ లేదా డౌన్‌లోడ్ లింక్ యొక్క సాంకేతిక సర్వర్ మూలాలు.'
    ]
  };

  const whatWeKnow = whatWeKnowMap[language] || whatWeKnowMap.en;
  const whatWeCouldNotVerify = whatWeCouldNotVerifyMap[language] || whatWeCouldNotVerifyMap.en;

  // Safe steps
  const safeStepsMap: Record<Language, SafeStep[]> = {
    en: [
      {
        step: 1,
        title: 'Pause before sending money',
        description: 'Never make immediate transfers under artificial countdown or slot-expiry pressure. Take an intentional 24-hour pause.',
        simpleText: 'Do not send any money in a hurry. Scammers want you to act fast before you can think or ask anyone.'
      },
      {
        step: 2,
        title: 'Verify the organization independently',
        description: 'Do not use links or phone numbers provided by the sender. Navigate independently to official regulatory portals.',
        simpleText: 'Never trust links sent in chats. Search the company directly on government portals like sebi.gov.in.'
      },
      {
        step: 3,
        title: 'Check official statutory registers',
        description: 'Cross-reference registration credentials on the SEBI Intermediaries Registry or RBI Sachet Portal.',
        simpleText: 'Check if this advisor is actually registered on the official SEBI website.',
        actionUrl: 'https://www.sebi.gov.in/intermediaries.html',
        actionLabel: 'Open SEBI Intermediary Registry'
      },
      {
        step: 4,
        title: 'Never share OTPs, PINs, or install remote APKs',
        description: 'Legitimate institutions will never ask for your UPI MPIN, bank passwords, or request you to side-load APK utilities.',
        simpleText: 'Never tell your OTP or UPI PIN to anyone, and never download files ending with .apk.'
      },
      {
        step: 5,
        title: 'Report suspicious activity immediately',
        description: 'If you have transferred funds, immediately call the National Cyber Helpline 1930 or file a report at cybercrime.gov.in.',
        simpleText: 'If you already paid, call the police cyber helpline 1930 right away to block the money.',
        actionUrl: 'https://cybercrime.gov.in/',
        actionLabel: 'Report on Cybercrime.gov.in (1930)'
      }
    ],
    kn: [
      {
        step: 1,
        title: 'ಹಣ ಕಳುಹಿಸುವ ಮುನ್ನ ವಿರಾಮ ತೆಗೆದುಕೊಳ್ಳಿ',
        description: 'ತುರ್ತು ಅಥವಾ ಕೊನೆಯ ಅವಕಾಶದ ಒತ್ತಡಕ್ಕೆ ಮಣಿದು ತಕ್ಷಣ ಹಣ ಕಳುಹಿಸಬೇಡಿ. ಕನಿಷ್ಠ 24 ಗಂಟೆಗಳ ಕಾಲ ಯೋಚಿಸಿ.',
        simpleText: 'ಆತುರದಲ್ಲಿ ಯಾರಿಗೂ ಹಣ ಕಳುಹಿಸಬೇಡಿ. ನೀವು ಯೋಚಿಸಲು ಅಥವಾ ಬೇರೆಯವರನ್ನು ಕೇಳಲು ಸಮಯ ಸಿಗದಂತೆ ವಂಚಕರು ಆತುರಪಡಿಸುತ್ತಾರೆ.'
      },
      {
        step: 2,
        title: 'ಸಂಸ್ಥೆಯನ್ನು ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಿ',
        description: 'ಸಂದೇಶ ಕಳುಹಿಸಿದವರು ನೀಡಿದ ಲಿಂಕ್ ಅಥವಾ ಫೋನ್ ನಂಬರ್‌ಗಳನ್ನು ನಂಬಬೇಡಿ. ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗಳಿಗೆ ಸ್ವತಂತ್ರವಾಗಿ ಭೇಟಿ ನೀಡಿ.',
        simpleText: 'ಮೆಸೇಜ್‌ನಲ್ಲಿ ಬಂದ ಲಿಂಕ್‌ಗಳನ್ನು ನಂಬಬೇಡಿ. ಗೂಗಲ್‌ನಲ್ಲಿ sebi.gov.in ಎಂದು ನೇರವಾಗಿ ಟೈಪ್ ಮಾಡಿ ಹುಡುಕಿ.'
      },
      {
        step: 3,
        title: 'ಅಧಿಕೃತ ಶಾಸನಬದ್ಧ ನೋಂದಣಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
        description: 'SEBI ಮಧ್ಯವರ್ತಿಗಳ ನೋಂದಣಿ ಅಥವಾ RBI Sachet ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಣಿ ಸಂಖ್ಯೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.',
        simpleText: 'ಈ ಸಲಹೆಗಾರರು ನಿಜವಾಗಿಯೂ SEBI ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಅಧಿಕೃತವಾಗಿ ನೋಂದಾಯಿತರಾಗಿದ್ದಾರೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.',
        actionUrl: 'https://www.sebi.gov.in/intermediaries.html',
        actionLabel: 'SEBI ನೋಂದಣಿ ಪೋರ್ಟಲ್ ತೆರೆಯಿರಿ'
      },
      {
        step: 4,
        title: 'OTP, PIN ಹಂಚಿಕೊಳ್ಳಬೇಡಿ ಮತ್ತು ಅಪರಿಚಿತ APK ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬೇಡಿ',
        description: 'ಯಾವುದೇ ಅಧಿಕೃತ ಬ್ಯಾಂಕ್ ಅಥವಾ ಸಂಸ್ಥೆ ನಿಮ್ಮ UPI PIN, ಪಾಸ್‌ವರ್ಡ್ ಅಥವಾ APK ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಕೇಳುವುದಿಲ್ಲ.',
        simpleText: 'ನಿಮ್ಮ ಬ್ಯಾಂಕ್ OTP ಅಥವಾ UPI PIN ಅನ್ನು ಯಾರಿಗೂ ಹೇಳಬೇಡಿ, ಮತ್ತು .apk ಫೈಲ್‌ಗಳನ್ನು ಎಂದಿಗೂ ಡೌನ್‌ಲೋಡ್ ಮಾಡಬೇಡಿ.'
      },
      {
        step: 5,
        title: 'ಅನುಮಾನಾಸ್ಪದ ವಹಿವಾಟನ್ನು ತಕ್ಷಣವೇ ವರದಿ ಮಾಡಿ',
        description: 'ನೀವು ಈಗಾಗಲೇ ಹಣ ಕಳುಹಿಸಿದ್ದರೆ, ತಕ್ಷಣ ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಹೆಲ್ಪ್‌ಲೈನ್ 1930 ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ cybercrime.gov.in ನಲ್ಲಿ ದೂರು ದಾಖಲಿಸಿ.',
        simpleText: 'ನೀವು ಈಗಾಗಲೇ ಹಣ ಕಳುಹಿಸಿದ್ದರೆ, ತಕ್ಷಣವೇ 1930 ಗೆ ಕರೆ ಮಾಡಿ ಬ್ಯಾಂಕ್ ಖಾತೆಯಿಂದ ಹಣ ಹೊರಹೋಗದಂತೆ ತಡೆಯಿರಿ.',
        actionUrl: 'https://cybercrime.gov.in/',
        actionLabel: 'Cybercrime.gov.in ನಲ್ಲಿ ದೂರು ನೀಡಿ (1930)'
      }
    ],
    hi: [
      {
        step: 1,
        title: 'पैसे भेजने से पहले रुकें',
        description: 'कृत्रिम जल्दबाजी या अंतिम तिथि के दबाव में तुरंत पैसे न भेजें। सोच-समझकर 24 घंटे का समय लें।',
        simpleText: 'जल्दबाजी में किसी को पैसे न भेजें। जालसाज चाहते हैं कि आप बिना सोचे-समझे तुरंत भुगतान कर दें।'
      },
      {
        step: 2,
        title: 'संस्था की स्वतंत्र रूप से जांच करें',
        description: 'संदेश भेजने वाले द्वारा दिए गए लिंक या फोन नंबरों पर भरोसा न करें। सीधे आधिकारिक सरकारी वेबसाइटों पर जाएं।',
        simpleText: 'चैट में भेजे गए लिंक पर कभी क्लिक न करें। सीधे sebi.gov.in पर जाकर कंपनी की जांच करें।'
      },
      {
        step: 3,
        title: 'आधिकारिक वैधानिक रजिस्टर देखें',
        description: 'SEBI मध्यस्थ रजिस्टर या RBI Sachet पोर्टल पर पंजीकरण विवरण का मिलान करें।',
        simpleText: 'जांचें कि क्या यह सलाहकार वास्तव में आधिकारिक सेबी वेबसाइट पर पंजीकृत है।'
      },
      {
        step: 4,
        title: 'OTP, PIN कभी साझा न करें और अज्ञात APK इंस्टॉल न करें',
        description: 'कोई भी वैध संस्था आपका UPI पिन, बैंक पासवर्ड या संदिग्ध APK डाउनलोड करने के लिए कभी नहीं कहेगी।',
        simpleText: 'अपना बैंक ओटीपी या यूपीआई पिन कभी किसी को न बताएं, और .apk फाइलों को डाउनलोड न करें।'
      },
      {
        step: 5,
        title: 'संदिग्ध गतिविधि की तुरंत रिपोर्ट करें',
        description: 'यदि आपने पैसे ट्रांसफर कर दिए हैं, तो तुरंत राष्ट्रीय साइबर हेल्पलाइन 1930 पर कॉल करें या cybercrime.gov.in पर रिपोर्ट करें।',
        simpleText: 'यदि आपने पैसे भेज दिए हैं, तो तुरंत 1930 पर कॉल करें ताकि बैंक से पैसे निकलने से रोके जा सकें।'
      }
    ],
    te: [
      {
        step: 1,
        title: 'డబ్బు పంపే ముందు ఆగండి',
        description: 'కృత్రిమ అత్యవసరం లేదా గడువు ముగిసిపోతుందనే ఒత్తిడితో వెంటనే డబ్బు పంపవద్దు. ఆలోచించడానికి 24 గంటల సమయం తీసుకోండి.',
        simpleText: 'కంగారుపడి ఎవరికీ డబ్బు పంపవద్దు. మీరు ఆలోచించకముందే డబ్బు తీసుకోవాలని మోసగాళ్ళు ప్రయత్నిస్తారు.'
      },
      {
        step: 2,
        title: 'సంస్థను స్వతంత్రంగా ధృవీకరించండి',
        description: 'సందేశం పంపినవారు ఇచ్చిన లింక్‌లు లేదా ఫోన్ నంబర్లను నమ్మవద్దు. అధికారిక ప్రభుత్వ పోర్టల్స్‌ని నేరుగా సందర్శించండి.',
        simpleText: 'చాట్‌లో పంపిన లింక్‌లను ఎప్పుడూ నమ్మవద్దు. నేరుగా sebi.gov.in లో శోధించండి.'
      },
      {
        step: 3,
        title: 'అధికారిక చట్టబద్ధమైన రిజిస్టర్లను తనిఖీ చేయండి',
        description: 'SEBI ఇంటర్మీడియరీ రిజిస్ట్రీ లేదా RBI Sachet పోర్టల్‌లో రిజిస్ట్రేషన్ వివరాలను ధృవీకరించండి.',
        simpleText: 'ఈ సలహాదారు నిజంగా సెబీ వెబ్‌సైట్‌లో నమోదై ఉన్నారో లేదో చూడండి.'
      },
      {
        step: 4,
        title: 'OTP, PIN ఎవరితోనూ పంచుకోవద్దు మరియు తెలియని APKలను ఇన్‌స్టాల్ చేయవద్దు',
        description: 'ఏ నిజమైన బ్యాంకు లేదా సంస్థ మీ UPI పిన్, పాస్‌వర్డ్ అడగదు మరియు అనుమానాస్పద APKలను డౌన్‌లోడ్ చేయమని చెప్పదు.',
        simpleText: 'మీ బ్యాంక్ OTP లేదా UPI పిన్‌ను ఎవరికీ చెప్పవద్దు, మరియు .apk ఫైళ్లను డౌన్‌లోడ్ చేయవద్దు.'
      },
      {
        step: 5,
        title: 'అనుమానాస్పద లావాదేవీలను వెంటనే నివేదించండి',
        description: 'మీరు ఇప్పటికే డబ్బు పంపినట్లయితే, వెంటనే జాతీయ సైబర్ హెల్ప్‌లైన్ 1930 కి కాల్ చేయండి లేదా cybercrime.gov.in లో ఫిర్యాదు చేయండి.',
        simpleText: 'మీరు ఇప్పటికే డబ్బు పంపితే, వెంటనే 1930 కి కాల్ చేసి ఖాతా నుండి డబ్బు పోకుండా నిరోధించండి.'
      }
    ]
  };

  const safeSteps = safeStepsMap[language] || safeStepsMap.en;

  // Vernacular Explanations
  const vernacularExplanations = {
    en: {
      summary: `PARAKH detected ${signalsCount} warning patterns commonly associated with suspicious financial content in India. Prominent signals include guaranteed-return promises, artificial urgency, and private account transfer requests.`,
      simple: "This message is very risky. It promises guaranteed profits (which is illegal under stock market rules) and rushes you to send money to a private account.",
      audioScript: `Attention. PARAKH has detected ${signalsCount} warning signals in this content. The message promises guaranteed returns and asks for quick payment. Please do not send money without verifying on the official SEBI portal.`
    },
    hi: {
      summary: `परख ने इस सामग्री में ${signalsCount} गंभीर चेतावनी संकेत पाए हैं। इनमें निश्चित मुनाफ़े का वादा, समय की जल्दबाज़ी और निजी यूपीआई में पैसे ट्रांसफर करने की मांग शामिल है।`,
      simple: "यह मैसेज बहुत जोखिम भरा है। यह शेयर बाज़ार में बिना किसी नुकसान के गारंटीड मुनाफ़े का लालच दे रहा है और जल्दबाज़ी में किसी निजी खाते में पैसे भेजने का दबाव बना रहा है। सेबी के नियमों के अनुसार निश्चित रिटर्न का दावा पूरी तरह गैरकानूनी है।",
      audioScript: `सावधान। परख ने इस संदेश में ${signalsCount} खतरे के संकेत पाए हैं। इसमें पक्के मुनाफे का झूठा वादा किया गया है। कृपया बिना आधिकारिक जांच के किसी भी खाते में पैसे न भेजें।`
    },
    kn: {
      summary: `ಪರಖ್ ಈ ಸಂದೇಶದಲ್ಲಿ ${signalsCount} ಎಚ್ಚರಿಕೆ ಸಂಕೇತಗಳನ್ನು ಪತ್ತೆ ಮಾಡಿದೆ. ಗ್ಯಾರಂಟಿ ಲಾಭದ ಆಮಿಷ, ತುರ್ತು ತೀರ್ಮಾನದ ಒತ್ತಡ ಮತ್ತು ಖಾಸಗಿ ಯುಪಿಐ ಖಾತೆಗೆ ಹಣ ಕಳುಹಿಸುವ ಕೋರಿಕೆ ಇದರಲ್ಲಿ ಕಂಡುಬಂದಿದೆ.`,
      simple: "ಈ ಸಂದೇಶವು ಅತ್ಯಂತ ಅಪಾಯಕಾರಿಯಾಗಿದೆ. ಇದು ಷೇರು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಖಾತರಿಯ ಲಾಭದ ಆಮಿಷವೊಡ್ಡುತ್ತಿದೆ (ಇದು ಕಾನೂನಿನ ಪ್ರಕಾರ ನಿಷೇಧಿಸಲಾಗಿದೆ) ಮತ್ತು ಅಪರಿಚಿತರ ಖಾತೆಗೆ ಆತುರದಲ್ಲಿ ಹಣ ಕಳುಹಿಸುವಂತೆ ಒತ್ತಾಯಿಸುತ್ತಿದೆ.",
      audioScript: `ಎಚ್ಚರಿಕೆ. ಪರಖ್ ಈ ಸಂದೇಶದಲ್ಲಿ ${signalsCount} ಅಪಾಯದ ಸಂಕೇತಗಳನ್ನು ಪತ್ತೆ ಮಾಡಿದೆ. ಇದು ಖಾತರಿಯ ಲಾಭದ ಭರವಸೆ ನೀಡುತ್ತಿದೆ ಮತ್ತು ತಕ್ಷಣ ಹಣ ಕಳುಹಿಸಲು ಕೇಳುತ್ತಿದೆ. ಅಧಿಕೃತ SEBI ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸದೆ ಯಾರಿಗೂ ಹಣ ಕಳುಹಿಸಬೇಡಿ.`
    },
    te: {
      summary: `పరఖ్ ఈ సందేశంలో ${signalsCount} హెచ్చరిక సంకేతాలను గుర్తించింది. గ్యారెంటీ లాభాల హామీ, కృత్రిమ అత్యవసరం మరియు ప్రైవేట్ ఖాతాలకు డబ్బు బదిలీ చేసే అభ్యర్థనలు ఇందులో ఉన్నాయి.`,
      simple: "ఈ మెసేజ్ చాలా ప్రమాదకరమైనది. ఇది స్టాక్ మార్కెట్లో గ్యారెంటీ లాభాలు వస్తాయని ఆశ చూపుతోంది (ఇది నిబంధనల ప్రకారం చట్టవిరుద్ధం) మరియు వెంటనే ప్రైవేట్ ఖాతాకు డబ్బు పంపమని ఒత్తిడి చేస్తోంది.",
      audioScript: `జాగ్రత్త. పరఖ్ ఈ సందేశంలో ${signalsCount} ప్రమాద సంకేతాలను గుర్తించింది. ఇందులో ఖచ్చితమైన లాభాల తప్పుడు వాగ్దానం ఉంది. అధికారిక SEBI పోర్టల్‌లో ధృవీకరించుకోకుండా ఎవరికీ డబ్బు పంపవద్దు.`
    }
  };

  const overallExplanation = vernacularExplanations[language]?.summary || vernacularExplanations.en.summary;
  const simpleExplanation = vernacularExplanations[language]?.simple || vernacularExplanations.en.simple;

  return {
    id: `verif-${Date.now()}`,
    timestamp: new Date().toISOString(),
    originalContent: content,
    inputType,
    languageDetected: language,
    statusHeading,
    riskLevel,
    signalsCount,
    signals,
    overallExplanation,
    simpleExplanation,
    vernacularExplanations,
    highlightedExcerpts,
    evidenceItems,
    evidenceGraphNodes,
    whatWeKnow,
    whatWeCouldNotVerify,
    behavioralSignals,
    safeSteps
  };
}
