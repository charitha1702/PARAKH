import { 
  ScamDnaProfile, 
  ScamDnaSignal, 
  Language, 
  WarningSignal 
} from '../../types/analysis';

export function buildScamDna(
  content: string,
  signals: WarningSignal[],
  language: Language = 'en'
): ScamDnaProfile {
  const contentLower = content.toLowerCase();

  const headingsMap: Record<Language, { high: string; elevated: string; low: string }> = {
    en: {
      high: 'High-risk indicators detected',
      elevated: 'Elevated risk signals detected',
      low: 'No major risk signals detected'
    },
    hi: {
      high: 'उच्च जोखिम वाले संकेत मिले हैं',
      elevated: 'संदिग्ध संकेत पाए गए हैं',
      low: 'कोई बड़ा जोखिम संकेत नहीं मिला'
    },
    kn: {
      high: 'ಹೆಚ್ಚಿನ ಅಪಾಯದ ಸೂಚನೆಗಳು ಕಂಡುಬಂದಿವೆ',
      elevated: 'ಅನುಮಾನಾಸ್ಪದ ಸಂಕೇತಗಳು ಪತ್ತೆಯಾಗಿವೆ',
      low: 'ಯಾವುದೇ ಪ್ರಮುಖ ಅಪಾಯದ ಸಂಕೇತಗಳು ಕಂಡುಬಂದಿಲ್ಲ'
    },
    te: {
      high: 'అధిక ప్రమాద సూచనలు గుర్తించబడ్డాయి',
      elevated: 'అనుమానాస్పద సంకేతాలు గుర్తించబడ్డాయి',
      low: 'ఎటువంటి పెద్ద ప్రమాద సంకేతాలు కనుగొనబడలేదు'
    },
    ta: {
      high: 'அதிக ஆபத்து குறிகாட்டிகள் கண்டறியப்பட்டுள்ளன',
      elevated: 'அதிகரித்த ஆபத்து சமிக்ஞைகள் கண்டறியப்பட்டன',
      low: 'பெரிய ஆபத்து சமிக்ஞைகள் எதுவும் கண்டறியப்படவில்லை'
    },
    ml: {
      high: 'ഉയർന്ന അപകടസാധ്യതയുള്ള സൂചകങ്ങൾ കണ്ടെത്തി',
      elevated: 'വർദ്ധിച്ച അപകടസാധ്യത സിഗ്നലുകൾ കണ്ടെത്തി',
      low: 'പ്രധാന അപകട സിഗ്നലുകളൊന്നും കണ്ടെത്തിയില്ല'
    },
    mr: {
      high: 'उच्च जोखीम दर्शक आढळले आहेत',
      elevated: 'संशयास्पद संकेत आढळले आहेत',
      low: 'कोणतेही मोठे जोखीम संकेत आढळले नाहीत'
    },
    bn: {
      high: 'উচ্চ ঝুঁকির সূচক সনাক্ত করা হয়েছে',
      elevated: 'উচ্চতর ঝুঁকি সংকেত সনাক্ত করা হয়েছে',
      low: 'কোন বড় ঝুঁকি সংকেত সনাক্ত করা যায়নি'
    },
    gu: {
      high: 'ઉચ્ચ જોખમ સૂચકાંકો મળી આવ્યા છે',
      elevated: 'શંકાસ્પદ સંકેતો મળ્યા છે',
      low: 'કોઈ મોટા જોખમ સંકેતો મળ્યા નથી'
    },
    pa: {
      high: 'ਉੱਚ-ਜੋਖਮ ਸੂਚਕ ਮਿਲੇ ਹਨ',
      elevated: 'ਸ਼ੱਕੀ ਸੰਕੇਤ ਮਿਲੇ ਹਨ',
      low: 'ਕੋਈ ਵੱਡੇ ਜੋਖਮ ਦੇ ਸੰਕੇਤ ਨਹੀਂ ਮਿਲੇ'
    },
    or: {
      high: 'ଉଚ୍ଚ ବିପଦ ସୂଚକ ଚିହ୍ନଟ ହୋଇଛି',
      elevated: 'ସନ୍ଦେହଜନକ ସଙ୍କେତ ମିଳିଛି',
      low: 'କୌଣସି ପ୍ରମୁଖ ବିପଦ ସଙ୍କେତ ମିଳିନାହିଁ'
    },
    ur: {
      high: 'زیادہ خطرے کے اشارے ملے ہیں',
      elevated: 'مشتبہ خطرے کے اشارے ملے ہیں',
      low: 'کوئی بڑا خطرہ کا اشارہ نہیں ملا'
    }
  };

  // 12 prompt-specified behavioral signals
  const isTe = language === 'te';
  const isHi = language === 'hi';
  const isKn = language === 'kn';
  const isTa = language === 'ta';

  const dnaSignals: ScamDnaSignal[] = [
    {
      id: 'dna-guaranteed-returns',
      key: 'guaranteed_returns',
      name: isTe ? 'గ్యారెంటీ రాబడులు' : isHi ? 'निश्चित या गारंटीकृत रिटर्न' : isKn ? 'ಖಾತರಿ ಲಾಭಗಳು' : isTa ? 'உத்தரவாதமான வருமானம்' : 'Guaranteed returns',
      detected: /guarantee|assured|fixed return|100%|risk free|daily profit|double/i.test(contentLower),
      severity: 'critical',
      explanation: isTe 
        ? 'స్థిర లేదా గ్యారెంటీ రాబడుల వాగ్దానాలు సెబీ (SEBI) ప్రాథమిక నిబంధనలను ఉల్లంఘిస్తాయి.' 
        : isHi ? 'शेयर बाजार में निश्चित रिटर्न का वादा सेबी के नियमों का सीधा उल्लंघन है।' 
        : isKn ? 'ಷೇರು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ನಿಶ್ಚಿತ ಲಾಭದ ಭರವಸೆ ನೀಡುವುದು ಸೆಬಿ ನಿಯಮಗಳ ಉಲ್ಲಂಘನೆಯಾಗಿದೆ.'
        : isTa ? 'உத்தரவாதமான வருவாய் வாக்குறுதிகள் செபி விதிமுறைகளை மீறுகின்றன.'
        : 'Promises of fixed or guaranteed returns violate core SEBI regulations and market realities.',
      statutoryRule: 'SEBI (Investment Advisers) Regulations, 2013 — Reg 15(1)'
    },
    {
      id: 'dna-urgency',
      key: 'urgency_pressure',
      name: isTe ? 'అత్యవసర ఒత్తిడి' : isHi ? 'जल्दबाजी / तात्कालिक दबाव' : isKn ? 'ತುರ್ತು / ಒತ್ತಡದ ತಂತ್ರ' : isTa ? 'அவசரம் / உடனடி அழுத்தம்' : 'Urgency / pressure',
      detected: /urgent|immediately|today only|last chance|hurry|valid until|expires/i.test(contentLower),
      severity: 'high',
      explanation: isTe
        ? 'ఆలోచించకుండా లేదా ఎవరినీ అడగకుండా వెంటనే నిర్ణయం తీసుకునేలా కృత్రిమ సమయ పరిమితి ఒత్తిడి సృష్టించడం.'
        : isHi ? 'सोचने-समझने का समय दिए बिना जल्दबाजी में निर्णय लेने का दबाव बनाना।'
        : isKn ? 'ಆಲೋಚಿಸದೆ ತಕ್ಷಣ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವಂತೆ ಒತ್ತಡ ಹೇರುವ ತಂತ್ರ.'
        : 'Artificially compressed decision windows intended to bypass reflective cognitive verification.',
      statutoryRule: 'RBI Consumer Protection Advisory on Psychological Pressure Tactics'
    },
    {
      id: 'dna-authority',
      key: 'fake_authority',
      name: isTe ? 'నకిలీ అధికారిక దావా' : isHi ? 'झूठी आधिकारिक मान्यता का दावा' : isKn ? 'ನಕಲಿ ಅಧಿಕಾರ ಹಕ್ಕು' : isTa ? 'போலி அதிகாரப்பூர்வ கோரிக்கை' : 'Fake authority claim',
      detected: /sebi|rbi|irda|government|gov\.in|ministry|authorized/i.test(contentLower),
      severity: 'critical',
      explanation: isTe
        ? 'ధృవీకరించదగిన లైసెన్స్ లేకుండా SEBI లేదా RBI వంటి ప్రభుత్వ సంస్థల పేర్లను మోసపూరితంగా ఉపయోగించడం.'
        : isHi ? 'वैध पंजीकरण संख्या के बिना सरकारी या नियामक संस्थाओं के नाम का दुरुपयोग।'
        : isKn ? 'ಯಾವುದೇ ಅಧಿಕೃತ ಪರವಾನಗಿ ಇಲ್ಲದೆ ಸರ್ಕಾರಿ ಸಂಸ್ಥೆಗಳ ಹೆಸರನ್ನು ದುರ್ಬಳಕೆ ಮಾಡಿಕೊಳ್ಳುವುದು.'
        : 'Invoking statutory or governmental regulatory authority without verifiable registration credentials.',
      statutoryRule: 'Section 416 & 419, Indian Penal Code (Cheating by Personation)'
    },
    {
      id: 'dna-impersonation',
      key: 'impersonation',
      name: isTe ? 'ప్రముఖ సంస్థల అనుకరణ' : isHi ? 'प्रसिद्ध कंपनियों की नकल' : isKn ? 'ಖ್ಯಾತ ಸಂಸ್ಥೆಗಳ ನಕಲು' : isTa ? 'நிறுவன ஆள்மாறாட்டம்' : 'Impersonation',
      detected: /tata|bajaj|reliance|hdfc|sbi|icici|zerodha|angel|groww/i.test(contentLower),
      severity: 'high',
      explanation: isTe
        ? 'అనధికారిక ఛానెళ్లలో ప్రసిద్ధ బ్యాంకులు లేదా బ్రోకరేజ్ బ్రాండ్ల పేర్లను దుర్వినియోగం చేయడం.'
        : isHi ? 'अनौपचारिक चैनलों पर प्रतिष्ठित बैंकों या ब्रोकरेज ब्रांडों के नाम का दुरुपयोग।'
        : isKn ? 'ಖಾಸಗಿ ಗ್ರೂಪ್‌ಗಳಲ್ಲಿ ಪ್ರಸಿದ್ಧ ಬ್ಯಾಂಕ್ ಅಥವಾ ಬ್ರೋಕರ್ ಸಂಸ್ಥೆಗಳ ಹೆಸರನ್ನು ಕದಿಯುವುದು.'
        : 'Misusing recognized banking or institutional brand identity on unverified informal channels.',
      statutoryRule: 'Trade Marks Act, 1999 & IT Act, 2000 Section 66D'
    },
    {
      id: 'dna-phishing',
      key: 'phishing',
      name: isTe ? 'ఫిషింగ్ / లాగిన్ మోసం' : isHi ? 'फ़िशिंग / क्रेडेंशियल चोरी' : isKn ? 'ಫಿಶಿಂಗ್ ತಂತ್ರ' : isTa ? 'ஃபிஷிங் மோசடி' : 'Phishing',
      detected: /login|verify account|update kyc|click here|pan update|activate/i.test(contentLower),
      severity: 'critical',
      explanation: isTe
        ? 'ఖాతా వివరాలు లేదా వ్యక్తిగత పాస్‌వర్డ్‌లను దొంగిలించడానికి రూపొందించిన నకిలీ లింకులు.'
        : isHi ? 'खाता विवरण या पासवर्ड चुराने के लिए बनाए गए संदिग्ध लिंक।'
        : isKn ? 'ಪಾಸ್‌ವರ್ಡ್ ಅಥವಾ ಖಾತೆಯ ವಿವರಗಳನ್ನು ಕದಿಯಲು ಕಳುಹಿಸಲಾದ ಲಿಂಕ್‌ಗಳು.'
        : 'Credential harvesting mechanisms soliciting identity authentication or account updates.',
      statutoryRule: 'Information Technology Act, 2000 — Section 66C'
    },
    {
      id: 'dna-suspicious-payment',
      key: 'suspicious_payment',
      name: isTe ? 'అనుమానాస్పద చెల్లింపు అభ్యర్థన' : isHi ? 'संदिग्ध भुगतान अनुरोध' : isKn ? 'ಅನುಮಾನಾಸ್ಪದ ಪಾವತಿ ವಿನಂತಿ' : isTa ? 'சந்தேகத்திற்குரிய கட்டணக் கோரிக்கை' : 'Suspicious payment request',
      detected: /upi|@okaxis|@ybl|@paytm|gpay|phonepe|send money|transfer now|fee/i.test(contentLower),
      severity: 'high',
      explanation: isTe
        ? 'అధికారిక క్లియరింగ్ ఖాతాలకు కాకుండా నేరుగా వ్యక్తిగత ప్రైవేట్ UPI ఖాతాకు డబ్బు పంపమని కోరడం.'
        : isHi ? 'आधिकारिक संस्थागत खाते के बजाय किसी व्यक्ति के निजी यूपीआई पर पैसे मांगना।'
        : isKn ? 'ಕಂಪನಿಯ ಅಧಿಕೃತ ಖಾತೆಯ ಬದಲಿಗೆ ವೈಯಕ್ತಿಕ UPI ಗೆ ಹಣ ವರ್ಗಾಯಿಸಲು ಕೇಳುವುದು.'
        : 'Solicitation of funds via direct peer-to-peer VPAs rather than regulated client escrow clearing.',
      statutoryRule: 'RBI Master Direction on Digital Payment Transactions'
    },
    {
      id: 'dna-sensitive-info',
      key: 'sensitive_info',
      name: isTe ? 'గోప్య సమాచారం అడగడం' : isHi ? 'गोपनीय जानकारी मांगना' : isKn ? 'ರಹಸ್ಯ ಮಾಹಿತಿ ಕೋರಿಕೆ' : isTa ? 'ரகசிய தகவல் கோருதல்' : 'Request for sensitive information',
      detected: /otp|pin|cvv|password|aadhaar|card number/i.test(contentLower),
      severity: 'critical',
      explanation: isTe
        ? 'బ్యాంక్ OTP, UPI పిన్ లేదా పాస్‌వర్డ్ వంటి సున్నితమైన ప్రమాణీకరణ వివరాలను అడగడం.'
        : isHi ? 'बैंक ओटीपी, यूपीआई पिन या गोपनीय पासवर्ड की मांग।'
        : isKn ? 'ಬ್ಯಾಂಕ್ OTP, UPI ಪಿನ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್ ಕೇಳುವುದು.'
        : 'Explicit request for private authenticators which legitimate institutions never demand.',
      statutoryRule: 'RBI Circular DPSS.CO.PD No. 1164/02.14.003/2017-18'
    },
    {
      id: 'dna-unverifiable-org',
      key: 'unverifiable_org',
      name: isTe ? 'ధృవీకరించలేని సంస్థ' : isHi ? 'असत्यापित या फर्जी संगठन' : isKn ? 'ಪರಿಶೀಲಿಸಲಾಗದ ಸಂಸ್ಥೆ' : isTa ? 'சரிபார்க்க முடியாத அமைப்பு' : 'Unverifiable organization',
      detected: /club|fund|wealth|global|crypto|ventures|community|team/i.test(contentLower),
      severity: 'medium',
      explanation: isTe
        ? 'ఎటువంటి కార్పొరేట్ CIN లేదా SEBI రిజిస్ట్రేషన్ లేకుండా పనిచేస్తున్న పేరులేని గ్రూప్.'
        : isHi ? 'बिना किसी वैध सीআইएन (CIN) या सेबी पंजीकरण के संचालित समूह।'
        : isKn ? 'ಯಾವುದೇ ಸಿಐಎನ್ ಅಥವಾ ಸೆಬಿ ನೋಂದಣಿ ಇಲ್ಲದ ಸಂಸ್ಥೆ.'
        : 'Entity operates without verifiable CIN, SEBI Registration, or active MCA corporate filings.',
      statutoryRule: 'Companies Act, 2013 — Section 447'
    },
    {
      id: 'dna-suspicious-domain',
      key: 'suspicious_domain',
      name: isTe ? 'అనుమానాస్పద డొమైన్ / లింక్' : isHi ? 'संदिग्ध डोमेन या लिंक' : isKn ? 'ಅನುಮಾನಾಸ್ಪದ ಡೊಮೇನ್' : isTa ? 'சந்தேகத்திற்குரிய டொமைன்' : 'Suspicious domain',
      detected: /\.xyz|\.vip|\.top|\.link|apk|t\.me|wa\.me|tinyurl|bit\.ly/i.test(contentLower),
      severity: 'high',
      explanation: isTe
        ? 'షార్ట్ లింకులు లేదా ఉచిత అనామక డొమైన్లు (.xyz, .top, లేదా ధృవీకరించని apk ఫైల్ డౌన్‌లోడ్‌లు).'
        : isHi ? 'शॉर्टनर्स या मुफ्त अज्ञात डोमेन का उपयोग।'
        : isKn ? 'ಶಾರ್ಟ್ ಲಿಂಕ್ ಅಥವಾ ಅನುಮಾನಾಸ್ಪದ ಎಪಿಕೆ ಫೈಲ್ ಡೌನ್‌ಲೋಡ್.'
        : 'Usage of shorteners, disposable top-level domains, or unvetted Telegram/WhatsApp deep links.',
      statutoryRule: 'CERT-In Cyber Security Directions (Rule 20)'
    },
    {
      id: 'dna-manipulative-lang',
      key: 'manipulative_language',
      name: isTe ? 'భావోద్వేగ మోసపూరిత భాష' : isHi ? 'हेरफेर वाली वित्तीय भाषा' : isKn ? 'ಭಾವನಾತ್ಮಕ ಹಣಕಾಸು ಭಾಷೆ' : isTa ? 'கையாளுதல் நிதி மொழி' : 'Manipulative financial language',
      detected: /jackpot|multibagger|1000%|secret|exclusive|vip group|free tips/i.test(contentLower),
      severity: 'medium',
      explanation: isTe
        ? '"జాక్‌పాట్", "రహస్య టిప్స్", "1000% లాభం" వంటి అత్యాశ మరియు భయాన్ని ప్రేరేపించే పదాలు.'
        : isHi ? 'लोभ और भय को भड़काने वाले अतिशयोक्तिपूर्ण शब्दों का प्रयोग।'
        : isKn ? 'ದುರಾಸೆ ಹುಟ್ಟಿಸುವ ಅತಿರಂಜಿತ ಪದಗಳ ಬಳಕೆ.'
        : 'High-emotion buzzwords designed to trigger FOMO (fear of missing out) and greed heuristics.',
      statutoryRule: 'SEBI (Prohibition of Fraudulent and Unfair Trade Practices) Regulations'
    },
    {
      id: 'dna-repeated-pattern',
      key: 'repeated_scam_pattern',
      name: isTe ? 'పునరావృతమయ్యే మోసం శైలి' : isHi ? 'पुनरावृत्त धोखाधड़ी पैटर्न' : isKn ? 'ಮರುಕಳಿಸುವ ವಂಚನೆ ಮಾದರಿ' : isTa ? 'மீண்டும் நிகழும் மோசடி வடிவம்' : 'Repeated scam pattern',
      detected: /task|part time|telegram group|daily payout|demo balance|freeze/i.test(contentLower),
      severity: 'high',
      explanation: isTe
        ? 'బాధితులతో చిన్న రీఛార్జ్‌లు చేయించి తర్వాత పెద్ద మొత్తాలను కాజేసే నమూనా.'
        : isHi ? 'टास्क या प्रीपेड निवेश के नाम पर बार-बार दोहराया जाने वाला ठगी का तरीका।'
        : isKn ? 'ಟಾಸ್ಕ್ ಅಥವಾ ಪ್ರಿಪೇಯ್ಡ್ ಹೆಸರಿನಲ್ಲಿ ಹಣ ಲೂಟಿ ಮಾಡುವ ಚಿರಪರಿಚಿತ ತಂತ್ರ.'
        : 'Structural sequence matching the widely observed boiler-room "task / prepaid investment" blueprint.',
      statutoryRule: 'National Cyber Crime Reporting Portal (NCRP) Typology 14'
    },
    {
      id: 'dna-mismatch-org',
      key: 'mismatch_org_source',
      name: isTe ? 'సంస్థ మరియు మూలం మధ్య పొంతన లేకపోవడం' : isHi ? 'दावा किए गए संगठन और स्रोत में बेमेल' : isKn ? 'ಸಂಸ್ಥೆ ಮತ್ತು ಮೂಲದ ನಡುವೆ ವ್ಯತ್ಯಾಸ' : isTa ? 'நிறுவனம் மற்றும் மூலத்திற்கு இடையிலான முரண்பாடு' : 'Mismatch between claimed organization and source',
      detected: (/(sebi|rbi|bajaj|hdfc|tata)/i.test(contentLower) && /(gmail\.com|yahoo\.com|\+91\s*[6-9]|t\.me)/i.test(contentLower)),
      severity: 'critical',
      explanation: isTe
        ? 'ప్రముఖ ప్రభుత్వ/బ్యాంకింగ్ సంస్థ పేరు చెప్పి సాధారణ ఉచిత ఈమెయిల్ లేదా ప్రైవేట్ మొబైల్ సిమ్ నుండి మెసేజ్ పంపడం.'
        : isHi ? 'प्रतिष्ठित संस्थान का नाम लेकर मुफ्त ईमेल या निजी मोबाइल नंबर से संवाद करना।'
        : isKn ? 'ಅಧಿಕೃತ ಕಂಪನಿಯ ಹೆಸರನ್ನು ಹೇಳಿ ಖಾಸಗಿ ಸಿಮ್ ಅಥವಾ ಜಿಮೇಲ್‌ನಿಂದ ಸಂದೇಶ ಕಳುಹಿಸುವುದು.'
        : 'Severe dissonance: institutional entity identity communicated from free email or personal mobile SIM.',
      statutoryRule: 'TRAI TCCCPR Regulations on Unregistered Telemarketer (UTM) Solicitations'
    }
  ];

  const detectedSignals = dnaSignals.filter(s => s.detected);
  const detectedCount = detectedSignals.length;

  const headings = headingsMap[language] || headingsMap.en;
  const summaryHeading = detectedCount >= 4 
    ? headings.high 
    : detectedCount >= 1 
    ? headings.elevated 
    : headings.low;

  return {
    summaryHeading,
    signals: dnaSignals,
    detectedCount
  };
}
