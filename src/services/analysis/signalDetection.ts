import { WarningSignal, BehavioralSignals, Language } from '../../types/analysis';

export interface DetectionResult {
  signals: WarningSignal[];
  behavioralSignals: BehavioralSignals;
  highlightedExcerpts: Array<{ text: string; signalId: string; reason: string }>;
}

export function detectSignals(rawText: string, language: Language = 'en'): DetectionResult {
  const text = rawText.toLowerCase();
  const signals: WarningSignal[] = [];
  const highlightedExcerpts: Array<{ text: string; signalId: string; reason: string }> = [];

  // Localized string templates for signals
  const templates: Record<string, Partial<Record<Language, { name: string; title: string; explanation: string; simpleExplanation: string; reason: string }>> & { en: { name: string; title: string; explanation: string; simpleExplanation: string; reason: string } }> = {
    guaranteed: {
      en: {
        name: 'Guaranteed-return claim',
        title: 'Guaranteed Return / Assured Profit Claim',
        explanation: 'The message promises fixed or guaranteed financial returns. SEBI regulations strictly prohibit any registered entity from promising assured returns in securities or financial markets.',
        simpleExplanation: 'This claims you will get guaranteed profit without any risk. In the real stock market, guaranteed returns are legally banned.',
        reason: 'Guaranteed-return claim prohibited under statutory market regulations.'
      },
      kn: {
        name: 'ಖಾತರಿಯ ಲಾಭದ ಭರವಸೆ',
        title: 'ಖಾತರಿ ಲಾಭ / ನಿಶ್ಚಿತ ಆದಾಯದ ಹಕ್ಕು',
        explanation: 'ಸಂದೇಶವು ನಿಶ್ಚಿತ ಅಥವಾ ಗ್ಯಾರಂಟಿ ಆರ್ಥಿಕ ಲಾಭವನ್ನು ಭರವಸೆ ನೀಡುತ್ತದೆ. SEBI ನಿಯಮಗಳ ಪ್ರಕಾರ ಷೇರು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ನಿಶ್ಚಿತ ಲಾಭದ ಭರವಸೆ ನೀಡುವುದನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧಿಸಲಾಗಿದೆ.',
        simpleExplanation: 'ಇದು ಯಾವುದೇ ಅಪಾಯವಿಲ್ಲದೆ ಗ್ಯಾರಂಟಿ ಲಾಭ ಸಿಗುತ್ತದೆ ಎಂದು ಹೇಳುತ್ತಿದೆ. ನಿಜವಾದ ಷೇರು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಗ್ಯಾರಂಟಿ ಲಾಭ ಕಾನೂನುಬಾಹಿರವಾಗಿದೆ.',
        reason: 'ಶಾಸನಬದ್ಧ ಮಾರುಕಟ್ಟೆ ನಿಯಮಗಳ ಪ್ರಕಾರ ನಿಶ್ಚಿತ ಲಾಭದ ಭರವಸೆ ನೀಡುವುದು ನಿಷೇಧಿಸಲಾಗಿದೆ.'
      },
      hi: {
        name: 'निश्चित रिटर्न का दावा',
        title: 'गारंटीड रिटर्न / निश्चित मुनाफ़े का दावा',
        explanation: 'संदेश में निश्चित या गारंटीड वित्तीय रिटर्न का वादा किया गया है। सेबी के नियम स्पष्ट रूप से शेयर बाजार में निश्चित रिटर्न का वादा करने से रोकते हैं।',
        simpleExplanation: 'यह दावा करता है कि आपको बिना किसी जोखिम के गारंटीड मुनाफा मिलेगा। वास्तविक शेयर बाजार में गारंटीड रिटर्न पूरी तरह प्रतिबंधित है।',
        reason: 'वैधानिक बाजार नियमों के तहत निश्चित रिटर्न का दावा प्रतिबंधित है।'
      },
      te: {
        name: 'గ్యారెంటీ లాభాల వాదన',
        title: 'గ్యారెంటీడ్ రిటర్న్ / ఖచ్చితమైన లాభం క్లెయిమ్',
        explanation: 'ఈ సందేశం స్థిరమైన లేదా ఖచ్చితమైన ఆర్థిక లాభాలను వాగ్దానం చేస్తుంది. సెబీ నిబంధనల ప్రకారం స్టాక్ మార్కెట్లో ఖచ్చితమైన లాభాల హామీ ఇవ్వడం ఖచ్చితంగా నిషేధించబడింది.',
        simpleExplanation: 'ఇది ఎటువంటి రిస్క్ లేకుండా గ్యారెంటీ లాభం వస్తుందని చెబుతోంది. నిజమైన స్టాక్ మార్కెట్లో గ్యారెంటీ రిటర్న్స్ చట్టవిరుద్ధం.',
        reason: 'చట్టబద్ధమైన మార్కెట్ నిబంధనల ప్రకారం గ్యారెంటీడ్ రిటర్న్ వాదన నిషేధించబడింది.'
      }
    },
    urgency: {
      en: {
        name: 'Artificial urgency & scarcity',
        title: 'Artificial Time Pressure & Scarcity Coercion',
        explanation: 'The sender creates artificial urgency (e.g. limited slots or closing offers) to coerce impulsive financial action before independent verification.',
        simpleExplanation: 'This is pressuring you to make a fast decision before you have time to check with family or bank.',
        reason: 'Artificial time limitation tactic to force unverified transfer.'
      },
      kn: {
        name: 'ಕೃತಕ ತುರ್ತು ಮತ್ತು ಸೀಮಿತ ಅವಕಾಶ',
        title: 'ಕೃತಕ ಸಮಯದ ಒತ್ತಡ ಮತ್ತು ಸೀಮಿತ ಸೀಟುಗಳ ಬಲೆ',
        explanation: 'ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಲು ಸಮಯ ನೀಡದೆ ಆತುರದಲ್ಲಿ ಹಣ ಕಳುಹಿಸುವಂತೆ ಮಾಡಲು ವಂಚಕರು ಕೃತಕ ತುರ್ತು ಮತ್ತು ಸೀಮಿತ ಸೀಟುಗಳ ಗಡುವು ಸೃಷ್ಟಿಸುತ್ತಾರೆ.',
        simpleExplanation: 'ನೀವು ಕುಟುಂಬ ಅಥವಾ ಬ್ಯಾಂಕ್‌ನೊಂದಿಗೆ ಪರಿಶೀಲಿಸಲು ಸಮಯ ಸಿಗದಂತೆ ಆತುರದಲ್ಲಿ ಹಣ ಕಳುಹಿಸಲು ಇದು ನಿಮ್ಮ ಮೇಲೆ ಒತ್ತಡ ಹೇರುತ್ತಿದೆ.',
        reason: 'ಪರಿಶೀಲನೆಯಿಲ್ಲದೆ ಹಣ ವರ್ಗಾಯಿಸಲು ಒತ್ತಾಯಿಸುವ ಕೃತಕ ಸಮಯದ ತಂತ್ರ.'
      },
      hi: {
        name: 'कृत्रिम जल्दबाजी और सीमित सीटें',
        title: 'कृत्रिम समय का दबाव और सीमित सीटों का लालच',
        explanation: 'प्रेषक स्वतंत्र सत्यापन से पहले जल्दबाजी में वित्तीय कदम उठाने के लिए कृत्रिम तात्कालिकता पैदा करता है।',
        simpleExplanation: 'यह आप पर तुरंत निर्णय लेने का दबाव बना रहा है ताकि आपको परिवार या बैंक से जांच करने का समय न मिले।',
        reason: 'बिना सत्यापन के पैसे ट्रांसफर कराने के लिए कृत्रिम समय सीमा का दबाव।'
      },
      te: {
        name: 'కృత్రిమ అత్యవసరం మరియు పరిమిత సీట్లు',
        title: 'కృత్రిమ సమయ ఒత్తిడి మరియు పరిమిత సీట్ల ఎర',
        explanation: 'స్వతంత్రంగా ధృవీకరించుకోవడానికి సమయం ఇవ్వకుండా తొందరపాటు నిర్ణయాలు తీసుకునేలా చేయడానికి ప్రేరకుడు కృత్రిమ అత్యవసరాన్ని సృష్టిస్తాడు.',
        simpleExplanation: 'మీరు కుటుంబంతో లేదా బ్యాంకుతో మాట్లాడే సమయం లేకుండా వెంటనే డబ్బు పంపేలా మీపై ఒత్తిడి తెస్తున్నారు.',
        reason: 'ధృవీకరణ లేకుండా నిధులు బదిలీ చేయించేందుకు ఉపయోగించే కృత్రిమ సమయ వ్యూహం.'
      }
    },
    authority: {
      en: {
        name: 'Regulatory authority name-dropping',
        title: 'SEBI / Regulatory Impersonation',
        explanation: 'The sender inappropriately claims "SEBI approved" or references regulators to create a false sense of legitimacy.',
        simpleExplanation: 'This message uses the name of SEBI or government agencies to look genuine, but official regulators never endorse private investment tips.',
        reason: 'Unauthorized citation of statutory regulator to manufacture false legitimacy.'
      },
      kn: {
        name: 'ಸರ್ಕಾರಿ ಸಂಸ್ಥೆಗಳ ಹೆಸರಿನ ದುರುಪಯೋಗ',
        title: 'SEBI / ಸರ್ಕಾರಿ ಸಂಸ್ಥೆಯ ನಕಲಿ ಹಕ್ಕು',
        explanation: 'ಸಂದೇಶ ಕಳುಹಿಸಿದವರು ಕಾನೂನುಬದ್ಧತೆಯ ಸುಳ್ಳು ಭ್ರಮೆ ಮೂಡಿಸಲು "SEBI ಅನುಮೋದಿತ" ಎಂದು ತಪ್ಪಾಗಿ ಹೇಳಿಕೊಳ್ಳುತ್ತಿದ್ದಾರೆ.',
        simpleExplanation: 'ಈ ಸಂದೇಶವು ಅಧಿಕೃತವಾಗಿ ಕಾಣಿಸಿಕೊಳ್ಳಲು SEBI ಅಥವಾ ಸರ್ಕಾರದ ಹೆಸರನ್ನು ಬಳಸುತ್ತಿದೆ, ಆದರೆ ನಿಯಂತ್ರಕರು ಎಂದಿಗೂ ಖಾಸಗಿ ಷೇರು ಸಲಹೆಗಳಿಗೆ ಅನುಮೋದನೆ ನೀಡುವುದಿಲ್ಲ.',
        reason: 'ಸುಳ್ಳು ಅಧಿಕೃತತೆ ಸೃಷ್ಟಿಸಲು ನಿಯಂತ್ರಕ ಪ್ರಾಧಿಕಾರದ ಹೆಸರಿನ ಅನಧಿಕೃತ ಬಳಕೆ.'
      },
      hi: {
        name: 'नियामक संस्था के नाम का दुरुपयोग',
        title: 'सेबी / नियामक प्राधिकरण का फर्जी दावा',
        explanation: 'प्रेषक झूठी वैधता बनाने के लिए "सेबी अनुमोदित" होने का अनुचित दावा करता है।',
        simpleExplanation: 'यह संदेश असली दिखने के लिए सेबी या सरकारी संस्थाओं के नाम का उपयोग कर रहा है, जबकि नियामक कभी भी निजी टिप्स को मंजूरी नहीं देते हैं।',
        reason: 'झूठी वैधता बनाने के लिए वैधानिक नियामक का अनधिकृत उपयोग।'
      },
      te: {
        name: 'నియంత్రణ సంస్థ పేరు దుర్వినియోగం',
        title: 'SEBI / నియంత్రణ సంస్థ నకిలీ దావా',
        explanation: 'సందేశం పంపినవారు చట్టబద్ధమైన వారిగా కనిపించడానికి "SEBI ఆమోదించినది" అని తప్పుడు వాదనలు చేస్తున్నారు.',
        simpleExplanation: 'ఈ సందేశం నిజమైనదిగా కనిపించడానికి SEBI పేరును వాడుతోంది, కానీ ప్రభుత్వ నియంత్రణ సంస్థలు ఎప్పుడూ ప్రైవేట్ చిట్కాలను ఆమోదించవు.',
        reason: 'తప్పుడు చట్టబద్ధతను సృష్టించడానికి నియంత్రణ సంస్థ పేరును అనధికారికంగా ఉపయోగించడం.'
      }
    },
    payment: {
      en: {
        name: 'Personal UPI / mule account routing',
        title: 'Personal Account / Unverified Payment Route',
        explanation: 'Payment is directed to an individual UPI handle or personal savings account rather than a regulated institutional clearing account.',
        simpleExplanation: 'They are asking you to send money to an individual person instead of a verified company bank account.',
        reason: 'Payment destination is a personal recipient rather than an institutional escrow or clearing account.'
      },
      kn: {
        name: 'ಖಾಸಗಿ UPI / ಮ್ಯೂಲ್ ಖಾತೆಗೆ ಹಣ ವರ್ಗಾವಣೆ',
        title: 'ವೈಯಕ್ತಿಕ ಖಾತೆ / ಅನಧಿಕೃತ ಪಾವತಿ ಮಾರ್ಗ',
        explanation: 'ನಿಯಂತ್ರಿತ ಸಾಂಸ್ಥಿಕ ಕ್ಲಿಯರಿಂಗ್ ಖಾತೆಯ ಬದಲು ಒಬ್ಬ ಅಪರಿಚಿತ ವ್ಯಕ್ತಿಯ ವೈಯಕ್ತಿಕ UPI ಅಥವಾ ಉಳಿತಾಯ ಖಾತೆಗೆ ಹಣ ಕಳುಹಿಸಲು ಕೇಳಲಾಗಿದೆ.',
        simpleExplanation: 'ಅಧಿಕೃತ ಕಂಪನಿಯ ಬ್ಯಾಂಕ್ ಖಾತೆಯ ಬದಲಿಗೆ ಒಬ್ಬ ಸಾಮಾನ್ಯ ವ್ಯಕ್ತಿಯ ಖಾತೆಗೆ ಹಣ ಕಳುಹಿಸುವಂತೆ ಅವರು ಕೇಳುತ್ತಿದ್ದಾರೆ.',
        reason: 'ಪಾವತಿ ಸ್ಥಳವು ಸಾಂಸ್ಥಿಕ ಖಾತೆಯ ಬದಲು ಒಬ್ಬ ವ್ಯಕ್ತಿಯ ಖಾತೆಯಾಗಿದೆ.'
      },
      hi: {
        name: 'निजी यूपीआई / अज्ञात खाते में भुगतान',
        title: 'व्यक्तिगत खाता / अनधिकृत भुगतान मार्ग',
        explanation: 'विनियमित संस्थागत क्लियरिंग खाते के बजाय किसी व्यक्ति के निजी यूपीआई या बचत खाते में भुगतान मांगा गया है।',
        simpleExplanation: 'वे आपको किसी पंजीकृत कंपनी के बजाय किसी अनजान व्यक्ति के खाते में पैसे भेजने के लिए कह रहे हैं।',
        reason: 'भुगतान गंतव्य संस्थागत खाते के बजाय एक व्यक्तिगत प्राप्तकर्ता है।'
      },
      te: {
        name: 'వ్యక్తిగత UPI / తెలియని ఖాతాకు చెల్లింపు',
        title: 'వ్యక్తిగత ఖాతా / అనధికారిక చెల్లింపు మార్గం',
        explanation: 'రిజిస్టర్డ్ సంస్థాగత క్లియరింగ్ ఖాతాకు బదులుగా ఒక వ్యక్తి యొక్క ప్రైవేట్ UPI లేదా సేవింగ్స్ ఖాతాకు డబ్బు పంపమని అడుగుతున్నారు.',
        simpleExplanation: 'అధికారిక కంపెనీ ఖాతాకు బదులుగా ఒక తెలియని వ్యక్తి ఖాతాకు డబ్బు పంపమని వారు అడుగుతున్నారు.',
        reason: 'చెల్లింపు గమ్యస్థానం సంస్థాగత ఖాతాకు బదులుగా వ్యక్తిగత ఖాతాగా ఉంది.'
      }
    },
    trojan: {
      en: {
        name: 'Suspicious download / APK link',
        title: 'Trojan APK / External APK Download',
        explanation: 'The message instructs side-loading an unverified Android application (.apk) outside official app stores, a primary vector for banking malware.',
        simpleExplanation: 'Never install files ending in .apk sent in messages. They can steal your bank passwords and SMS OTPs.',
        reason: 'Distribution of unverified third-party APK file directly correlated with banking Trojan malware.'
      },
      kn: {
        name: 'ಅನುಮಾನಾಸ್ಪದ APK / ಅಪ್ಲಿಕೇಶನ್ ಲಿಂಕ್',
        title: 'ಟ್ರೋಜನ್ APK / ಬಾಹ್ಯ ಅಪ್ಲಿಕೇಶನ್ ಡೌನ್‌ಲೋಡ್',
        explanation: 'ಅಧಿಕೃತ ಗೂಗಲ್ ಪ್ಲೇ ಸ್ಟೋರ್ ಹೊರಗೆ ಅಪರಿಚಿತ ಆಂಡ್ರಾಯ್ಡ್ ಆ್ಯಪ್ (.apk) ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಲು ಸಂದೇಶವು ಸೂಚಿಸುತ್ತದೆ, ಇದು ಬ್ಯಾಂಕಿಂಗ್ ಪಾಸ್‌ವರ್ಡ್ ಕದಿಯುವ ವೈರಸ್ ಆಗಿದೆ.',
        simpleExplanation: 'ಸಂದೇಶದಲ್ಲಿ ಕಳುಹಿಸಲಾದ .apk ಫೈಲ್‌ಗಳನ್ನು ಎಂದಿಗೂ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬೇಡಿ. ಅವು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಪಾಸ್‌ವರ್ಡ್ ಮತ್ತು OTP ಗಳನ್ನು ಕದಿಯುತ್ತವೆ.',
        reason: 'ಬ್ಯಾಂಕಿಂಗ್ ಟ್ರೋಜನ್ ವೈರಸ್‌ಗೆ ನೇರವಾಗಿ ಸಂಬಂಧಿಸಿದ ಅನಧಿಕೃತ APK ಫೈಲ್ ವಿತರಣೆ.'
      },
      hi: {
        name: 'संदिग्ध डाउनलोड / एपीके लिंक',
        title: 'ट्रोजन एपीके / बाहरी ऐप डाउनलोड',
        explanation: 'संदेश आधिकारिक ऐप स्टोर के बाहर एक असत्यापित एंड्रॉइड एप्लिकेशन (.apk) इंस्टॉल करने का निर्देश देता है, जो बैंकिंग मैलवेयर का मुख्य स्रोत है।',
        simpleExplanation: 'मैसेज में भेजे गए .apk फाइलों को कभी इंस्टॉल न करें। वे आपके बैंक पासवर्ड और ओटीपी चुरा सकते हैं।',
        reason: 'बैंकिंग ट्रोजन मैलवेयर से सीधे संबंधित असत्यापित तृतीय-पक्ष एपीके फ़ाइल।'
      },
      te: {
        name: 'అనుమానాస్పద డౌన్‌లోడ్ / APK లింక్',
        title: 'ట్రోజన్ APK / బాహ్య యాప్ డౌన్‌లోడ్',
        explanation: 'అధికారిక ప్లే స్టోర్ వెలుపల తెలియని ఆండ్రాయిడ్ యాప్ (.apk) ను ఇన్‌స్టాల్ చేయమని ఈ సందేశం చెబుతోంది, ఇది బ్యాంకింగ్ మాల్వేర్ యొక్క ప్రధాన రూపం.',
        simpleExplanation: 'సందేశాలలో పంపిన .apk ఫైల్‌లను ఎప్పుడూ ఇన్‌స్టాల్ చేయవద్దు. అవి మీ బ్యాంక్ పాస్‌వర్డ్‌లు మరియు OTPలను దొంగిలిస్తాయి.',
        reason: 'బ్యాంకింగ్ ట్రోజన్ మాల్వేర్‌తో నేరుగా సంబంధం ఉన్న ధృవీకరించని మూడవ పక్షం APK ఫైల్.'
      }
    },
    preipo: {
      en: {
        name: 'Unregulated Pre-IPO allotment claim',
        title: 'Unverified Pre-IPO / Unlisted Allocation Claim',
        explanation: 'Claims of confirmed institutional quotas for hot unlisted companies at massive discounts, bypassing the mandatory exchange ASBA mechanism.',
        simpleExplanation: 'Legitimate IPO shares can only be bought through your bank using ASBA. Private Pre-IPO shares offered in chats are almost always fake.',
        reason: 'Bypassing statutory ASBA IPO allocation process.'
      },
      kn: {
        name: 'ಅನಧಿಕೃತ ಪ್ರಿ-ಐಪಿಒ ಹಂಚಿಕೆ ಹಕ್ಕು',
        title: 'ಪರಿಶೀಲಿಸದ ಪ್ರಿ-ಐಪಿಒ / ಅನ್‌ಲಿಸ್ಟೆಡ್ ಷೇರುಗಳ ಹಂಚಿಕೆ',
        explanation: 'ಕಡ್ಡಾಯ ASBA ನಿಯಮಗಳನ್ನು ಬದಿಗೊತ್ತಿ ಭಾರಿ ರಿಯಾಯಿತಿಯಲ್ಲಿ ಮುಂಚಿತವಾಗಿ ಐಪಿಒ ಷೇರುಗಳನ್ನು ನೀಡುವುದಾಗಿ ಹೇಳಿಕೊಳ್ಳುವ ಮೋಸ.',
        simpleExplanation: 'ಅಧಿಕೃತ ಐಪಿಒ ಷೇರುಗಳನ್ನು ಕೇವಲ ನಿಮ್ಮ ಸ್ವಂತ ಬ್ಯಾಂಕ್ ASBA ಮೂಲಕವೇ ಖರೀದಿಸಬಹುದು. ಚಾಟ್‌ನಲ್ಲಿ ನೀಡಲಾಗುವ ಖಾಸಗಿ ಪ್ರಿ-ಐಪಿಒ ಷೇರುಗಳು ಬಹುತೇಕ ನಕಲಿ.',
        reason: 'ಶಾಸನಬದ್ಧ ASBA ಐಪಿಒ ಹಂಚಿಕೆ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಉಲ್ಲಂಘಿಸಿರುವುದು.'
      },
      hi: {
        name: 'अनियमित प्री-आईपीओ आवंटन का दावा',
        title: 'असत्यापित प्री-आईपीओ / अनलिस्टेड शेयर आवंटन',
        explanation: 'अनिवार्य एक्सचेंज ASBA तंत्र को दरकिनार करते हुए भारी छूट पर प्री-आईपीओ शेयर देने का फर्जी दावा।',
        simpleExplanation: 'वैध आईपीओ शेयर केवल आपके अपने बैंक ASBA के माध्यम से खरीदे जा सकते हैं। चैट पर दिए जाने वाले प्री-आईपीओ शेयर लगभग हमेशा नकली होते हैं।',
        reason: 'वैधानिक ASBA आईपीओ आवंटन प्रक्रिया का उल्लंघन।'
      },
      te: {
        name: 'అనధికారిక ప్రీ-ఐపీఓ కేటాయింపు దావా',
        title: 'ధృవీకరించని ప్రీ-ఐపీఓ / అన్‌లిస్టెడ్ షేర్ల కేటాయింపు',
        explanation: 'తప్పనిసరి ASBA ప్రక్రియను దాటవేసి భారీ తగ్గింపుతో ప్రీ-ఐపీఓ షేర్లను ఇస్తామని చేసే తప్పుడు వాదన.',
        simpleExplanation: 'నిజమైన ఐపీఓ షేర్లను మీ బ్యాంక్ ASBA ద్వారా మాత్రమే కొనుగోలు చేయవచ్చు. చాట్‌లో అందించే ప్రైవేట్ ప్రీ-ఐపీఓ షేర్లు దాదాపు ఎల్లప్పుడూ నకిలీవి.',
        reason: 'చట్టబద్ధమైన ASBA ఐపీఓ కేటాయింపు ప్రక్రియను ఉల్లంఘించడం.'
      }
    }
  };

  // 1. Guaranteed returns
  const guaranteedRegex = /(guaranteed|100%|guarantee|confirmed|assured|fixed return|risk free|capital protection|monthly profit|pakka|double money|sure shot|jackpot|ಖಾತರಿ|ಗ್ಯಾರಂಟಿ|ಲಾಭ|पक्का|गारंटी|గ్యారెంటీ)/i;
  const matchGuaranteed = rawText.match(/(?:guaranteed|assured|confirmed|pakka|100%|sure shot)[^.!?\n]{0,60}(?:\d+%\s*(?:monthly|daily|weekly|returns|profit|capital)?|\bprofit\b|\breturn\b|\bdouble\b)?/i) ||
    rawText.match(/\b\d+%\s*(?:to\s*\d+%)?\s*(?:monthly|daily|weekly|returns|profit)/i);

  if (guaranteedRegex.test(text)) {
    const excerpt = matchGuaranteed ? matchGuaranteed[0].trim() : "Guaranteed returns / Capital protection claim";
    const tmpl = templates.guaranteed[language] || templates.guaranteed.en;
    const signal: WarningSignal = {
      id: 'sig-guaranteed-returns',
      category: 'guaranteed_returns',
      name: tmpl.name,
      title: tmpl.title,
      severity: 'critical',
      score: 95,
      explanation: tmpl.explanation,
      simpleExplanation: tmpl.simpleExplanation,
      excerpt: excerpt
    };
    signals.push(signal);
    highlightedExcerpts.push({
      text: excerpt,
      signalId: signal.id,
      reason: tmpl.reason
    });
  }

  // 2. Urgency and scarcity
  const urgencyRegex = /(only \d+ (?:slots|seats)|today only|expires in|limited time|hurry|last chance|jaldi|closing soon|urgent|immediately|within \d+ (?:hours|mins|minutes)|slot remaining|ಅವಕಾಶ|ತುರ್ತು|जल्दी|तुरंत|అత్యవసరం)/i;
  const matchUrgency = rawText.match(/(?:only \d+\s*(?:slots?|seats?)\s*(?:remaining|left)?|today only[^.!?\n]{0,35}|expires in[^.!?\n]{0,25}|within \d+\s*(?:hours|mins|minutes)|jaldi[^.!?\n]{0,25})/i);

  if (urgencyRegex.test(text)) {
    const excerpt = matchUrgency ? matchUrgency[0].trim() : "Urgency / Scarcity pressure";
    const tmpl = templates.urgency[language] || templates.urgency.en;
    const signal: WarningSignal = {
      id: 'sig-urgency-scarcity',
      category: 'urgency_scarcity',
      name: tmpl.name,
      title: tmpl.title,
      severity: 'high',
      score: 88,
      explanation: tmpl.explanation,
      simpleExplanation: tmpl.simpleExplanation,
      excerpt: excerpt
    };
    signals.push(signal);
    highlightedExcerpts.push({
      text: excerpt,
      signalId: signal.id,
      reason: tmpl.reason
    });
  }

  // 3. Authority name-dropping
  const authorityRegex = /(sebi approved|rbi approved|bse|nse|cbi notice|police verification|cyber police|government licensed|authorized research|registered research analyst)/i;
  const matchAuthority = rawText.match(/(?:sebi\s*approved|rbi\s*approved|registered\s*research\s*analyst|cbi\s*notice|authorized\s*research)/i);

  if (authorityRegex.test(text)) {
    const excerpt = matchAuthority ? matchAuthority[0].trim() : "SEBI / RBI regulatory claim";
    const tmpl = templates.authority[language] || templates.authority.en;
    const signal: WarningSignal = {
      id: 'sig-authority-claim',
      category: 'authority_claim',
      name: tmpl.name,
      title: tmpl.title,
      severity: 'high',
      score: 84,
      explanation: tmpl.explanation,
      simpleExplanation: tmpl.simpleExplanation,
      excerpt: excerpt
    };
    signals.push(signal);
    highlightedExcerpts.push({
      text: excerpt,
      signalId: signal.id,
      reason: tmpl.reason
    });
  }

  // 4. Private payment routing
  const paymentRegex = /(upi[:\s]*[\w.-]+@[\w.-]+|transfer to|deposit refundable|send screenshot|paytm|gpay|phonepe|transfer fund to|clearing executive upi)/i;
  const matchPayment = rawText.match(/(?:upi[:\s]*[\w.-]+@[\w.-]+|transfer fund to[^.!?\n]{0,45}|transfer to upi:[^.!?\n]{0,35})/i);

  if (paymentRegex.test(text)) {
    const excerpt = matchPayment ? matchPayment[0].trim() : "Personal UPI / Bank transfer request";
    const tmpl = templates.payment[language] || templates.payment.en;
    const signal: WarningSignal = {
      id: 'sig-payment-pressure',
      category: 'payment_pressure',
      name: tmpl.name,
      title: tmpl.title,
      severity: 'critical',
      score: 92,
      explanation: tmpl.explanation,
      simpleExplanation: tmpl.simpleExplanation,
      excerpt: excerpt
    };
    signals.push(signal);
    highlightedExcerpts.push({
      text: excerpt,
      signalId: signal.id,
      reason: tmpl.reason
    });
  }

  // 5. Malicious APK download
  const apkRegex = /(\.apk|install official|download utility|kyc verification utility|utility\.apk)/i;
  const matchApk = rawText.match(/https?:\/\/[^\s]+\.apk/i) || rawText.match(/utility\.apk/i);

  if (apkRegex.test(text)) {
    const excerpt = matchApk ? matchApk[0].trim() : ".apk download URL";
    const tmpl = templates.trojan[language] || templates.trojan.en;
    const signal: WarningSignal = {
      id: 'sig-malicious-apk',
      category: 'malicious_link',
      name: tmpl.name,
      title: tmpl.title,
      severity: 'critical',
      score: 98,
      explanation: tmpl.explanation,
      simpleExplanation: tmpl.simpleExplanation,
      excerpt: excerpt
    };
    signals.push(signal);
    highlightedExcerpts.push({
      text: excerpt,
      signalId: signal.id,
      reason: tmpl.reason
    });
  }

  // 6. Pre-IPO allotment claim
  const preIpoRegex = /(pre-ipo|unlisted shares|confirmed allotment|institutional quota|discounted floor price)/i;
  const matchPreIpo = rawText.match(/(?:confirmed pre-ipo|unlisted shares|discounted floor price|pre-ipo institutional allotment)/i);

  if (preIpoRegex.test(text) && !signals.some(s => s.id === 'sig-guaranteed-returns')) {
    const excerpt = matchPreIpo ? matchPreIpo[0].trim() : "Pre-IPO allotment claim";
    const tmpl = templates.preipo[language] || templates.preipo.en;
    const signal: WarningSignal = {
      id: 'sig-pre-ipo-claim',
      category: 'guaranteed_returns',
      name: tmpl.name,
      title: tmpl.title,
      severity: 'high',
      score: 86,
      explanation: tmpl.explanation,
      simpleExplanation: tmpl.simpleExplanation,
      excerpt: excerpt
    };
    signals.push(signal);
    highlightedExcerpts.push({
      text: excerpt,
      signalId: signal.id,
      reason: tmpl.reason
    });
  }

  // Calculate behavioral score distribution
  const behavioralSignals: BehavioralSignals = {
    urgency: signals.some(s => s.category === 'urgency_scarcity') ? 85 : 20,
    guaranteedReturns: signals.some(s => s.category === 'guaranteed_returns') ? 95 : 15,
    authorityClaim: signals.some(s => s.category === 'authority_claim') ? 80 : 10,
    paymentPressure: signals.some(s => s.category === 'payment_pressure') ? 90 : 25,
    fearFomo: signals.some(s => s.category === 'urgency_scarcity' || s.category === 'impersonation') ? 75 : 15
  };

  return {
    signals,
    behavioralSignals,
    highlightedExcerpts
  };
}
