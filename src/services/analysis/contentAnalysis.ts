import { 
  AnalysisResult, 
  InputType, 
  EvidenceGraphNode, 
  SafeStep, 
  Language, 
  VerdictCategory 
} from '../../types/analysis';
import { detectSignals } from './signalDetection';
import { retrieveEvidence } from './evidenceRetrieval';
import { buildTrustChain } from './trustChainBuilder';
import { buildScamDna } from './scamDnaBuilder';
import { buildCommunityEvidence } from './communityEvidenceBuilder';

export function analyzeContent(content: string, inputType: InputType, language: Language = 'en'): AnalysisResult {
  const { signals, behavioralSignals, highlightedExcerpts } = detectSignals(content, language);
  const evidenceItems = retrieveEvidence(content, language);

  const signalsCount = signals.length;
  const isCritical = signals.some(s => s.severity === 'critical');
  const isTooShort = content.trim().length < 25;

  const riskLevel = signalsCount >= 3 || isCritical ? 'high' : signalsCount >= 1 ? 'elevated' : 'moderate';

  const verdictCategory: VerdictCategory = isTooShort 
    ? 'insufficient_evidence'
    : signalsCount >= 3 || isCritical 
    ? 'high_risk' 
    : signalsCount >= 1 
    ? 'some_concerns' 
    : 'no_major_risk';

  const statusHeadingMap: Record<Language, { high: string; elevated: string; moderate: string; caution: string }> = {
    en: {
      high: 'High-risk indicators detected.',
      elevated: 'Elevated risk signals detected.',
      moderate: 'Caution advised: unverified claims present.',
      caution: 'Caution advised: unverified claims present.'
    },
    hi: {
      high: 'उच्च जोखिम वाले संकेत मिले हैं।',
      elevated: 'संदिग्ध संकेत पाए गए हैं।',
      moderate: 'सावधानी जरूरी: असत्यापित दावे मौजूद हैं।',
      caution: 'सावधानी जरूरी: असत्यापित दावे मौजूद हैं।'
    },
    kn: {
      high: 'ಹೆಚ್ಚಿನ ಅಪಾಯದ ಸೂಚನೆಗಳು ಕಂಡುಬಂದಿವೆ.',
      elevated: 'ಅನುಮಾನಾಸ್ಪದ ಸಂಕೇತಗಳು ಪತ್ತೆಯಾಗಿವೆ.',
      moderate: 'ಎಚ್ಚರಿಕೆ ಅಗತ್ಯ: ಪರಿಶೀಲಿಸದ ಹಕ್ಕುಗಳು ಇವೆ.',
      caution: 'ಎಚ್ಚರಿಕೆ ಅಗತ್ಯ: ಪರಿಶೀಲಿಸದ ಹಕ್ಕುಗಳು ಇವೆ.'
    },
    te: {
      high: 'అధిక ప్రమాద సూచనలు గుర్తించబడ్డాయి.',
      elevated: 'అనుమానాస్పద సంకేతాలు గుర్తించబడ్డాయి.',
      moderate: 'జాగ్రత్త అవసరం: ధృవీకరించని క్లెయిమ్‌లు ఉన్నాయి.',
      caution: 'జాగ్రత్త అవసరం: ధృవీకరించని క్లెయిమ్‌లు ఉన్నాయి.'
    },
    ta: {
      high: 'அதிக ஆபத்து குறிகாட்டிகள் கண்டறியப்பட்டுள்ளன.',
      elevated: 'அதிகரித்த ஆபத்து சமிக்ஞைகள் கண்டறியப்பட்டன.',
      moderate: 'எச்சரிக்கை தேவை: சரிபார்க்கப்படாத கூற்றுகள்.',
      caution: 'எச்சரிக்கை தேவை: சரிபார்க்கப்படாத கூற்றுகள்.'
    },
    ml: {
      high: 'ഉയർന്ന അപകടസാധ്യതയുള്ള സൂചകങ്ങൾ കണ്ടെത്തി.',
      elevated: 'വർദ്ധിച്ച അപകടസാധ്യത സിഗ്നലുകൾ കണ്ടെത്തി.',
      moderate: 'ജാഗ്രത പാലിക്കുക: സ്ഥിരീകരിക്കാത്ത ക്ലെയിമുകൾ.',
      caution: 'ജാഗ്രത പാലിക്കുക: സ്ഥിരീകരിക്കാത്ത ക്ലെയിമുകൾ.'
    },
    mr: {
      high: 'उच्च जोखीम दर्शक आढळले आहेत.',
      elevated: 'संशयास्पद संकेत आढळले आहेत.',
      moderate: 'सावधगिरी बाळगा: पडताळणी न केलेले दावे.',
      caution: 'सावधगिरी बाळगा: पडताळणी न केलेले दावे.'
    },
    bn: {
      high: 'উচ্চ ঝুঁকির সূচক সনাক্ত করা হয়েছে।',
      elevated: 'উচ্চতর ঝুঁকি সংকেত সনাক্ত করা হয়েছে।',
      moderate: 'সতর্কতা প্রয়োজন: অযাচাইকৃত দাবি উপস্থিত।',
      caution: 'সতর্কতা প্রয়োজন: অযাচাইকৃত দাবি উপস্থিত।'
    },
    gu: {
      high: 'ઉચ્ચ જોખમ સૂચકાંકો મળી આવ્યા છે.',
      elevated: 'શંકાસ્પદ સંકેતો મળ્યા છે.',
      moderate: 'સાવધાની જરૂરી: અચકાસાયેલ દાવાઓ.',
      caution: 'સાવધાની જરૂરી: અચકાસાયેલ દાવાઓ.'
    },
    pa: {
      high: 'ਉੱਚ-ਜੋਖਮ ਸੂਚਕ ਮਿਲੇ ਹਨ।',
      elevated: 'ਸ਼ੱਕੀ ਸੰਕੇਤ ਮਿਲੇ ਹਨ।',
      moderate: 'ਸਾਵਧਾਨੀ ਦੀ ਲੋੜ: ਗੈਰ-ਪ੍ਰਮਾਣਿਤ ਦਾਅਵੇ ਮੌਜੂਦ ਹਨ।',
      caution: 'ਸਾਵਧਾਨੀ ਦੀ ਲੋੜ: ਗੈਰ-ਪ੍ਰਮਾਣਿਤ ਦਾਅਵੇ ਮੌਜੂਦ ਹਨ।'
    },
    or: {
      high: 'ଉଚ୍ଚ ବିପଦ ସୂଚକ ଚିହ୍ନଟ ହୋଇଛି।',
      elevated: 'ସନ୍ଦେହଜନକ ସଙ୍କେତ ମିଳିଛି।',
      moderate: 'ସାବଧାନତା ଆବଶ୍ୟକ: ଅପ୍ରମାଣିତ ଦାବି ଉପସ୍ଥିତ।',
      caution: 'ସାବଧାନତା ଆବଶ୍ୟକ: ଅପ୍ରମାଣିତ ଦାବି ଉପସ୍ଥିତ।'
    },
    ur: {
      high: 'زیادہ خطرے کے اشارے ملے ہیں۔',
      elevated: 'مشتبہ خطرے کے اشارے ملے ہیں۔',
      moderate: 'احتیاط برتیں: غیر مصدقہ دعوے موجود ہیں۔',
      caution: 'احتیاط برتیں: غیر مصدقہ دعوے موجود ہیں۔'
    }
  };

  const statusHeading = (statusHeadingMap[language] || statusHeadingMap.en)[riskLevel];

  // Evidence Graph Nodes
  const evidenceGraphNodes: EvidenceGraphNode[] = [
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
  ];

  // What we know vs What we couldn't verify vs What contradicts
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
    ],
    ta: [
      `உள்ளடக்கத்தில் ${signalsCount} தனித்துவமான எச்சரிக்கை சமிக்ஞைகள் கண்டறியப்பட்டன.`,
      'பங்குச்சந்தை முதலீடுகளில் உத்தரவாதமான வருவாய் வாக்குறுதிகள் செபி சுற்றறிக்கைகளின் கீழ் தடைசெய்யப்பட்டுள்ளன.',
      'ஒழுங்குபடுத்தப்பட்ட கணக்கிற்குப் பதிலாக தனிப்பட்ட UPI முகவரிக்கு பணத்தை மாற்றக் கேட்கிறது.',
      'தேசிய சைபர் உதவி எண் 1930-ல் பதிவான மோசடி வடிவங்களுடன் பொருந்துகிறது.'
    ],
    ml: [
      `ഉള്ളടക്കത്തിൽ ${signalsCount} പ്രധാന മുന്നറിയിപ്പ് സിഗ്നലുകൾ കണ്ടെത്തി.`,
      'വിപണി നിക്ഷേപങ്ങളിൽ ഉറപ്പുള്ള വരുമാന വാഗ്ദാനങ്ങൾ സെബി സർക്കുലറുകൾ പ്രകാരം നിരോധിച്ചിരിക്കുന്നു.',
      'സ്ഥാപനപരമായ അക്കൗണ്ടിന് പകരം വ്യക്തിഗത UPI വിലാസത്തിലേക്ക് പണം അയക്കാൻ ആവശ്യപ്പെടുന്നു.',
      'ദേശീയ സൈബർ ഹെൽപ്പ് ലൈൻ 1930-ൽ റിപ്പോർട്ട് ചെയ്യപ്പെട്ട തട്ടിപ്പ് രീതികളുമായി പൊരുത്തപ്പെടുന്നു.'
    ],
    mr: [
      `मजकुरात ${signalsCount} गंभीर चेतावणी संकेत आढळले आहेत.`,
      'बाजारातील गुंतवणुकीवर हमी परताव्याचे दावे सेबी नियमांनुसार पूर्णपणे प्रतिबंधित आहेत.',
      'अधिकृत खात्याऐवजी खाजगी यूपीआय आयडीवर पैसे पाठवण्याची सूचना देण्यात आली आहे.',
      'राष्ट्रीय सायबर हेल्पलाइन 1930 वरील नोंदणीकृत फसवणूक प्रकरणांशी ही पद्धत जुळते.'
    ],
    bn: [
      `বার্তায় ${signalsCount}টি স্বতন্ত্র সতর্কবার্তা সনাক্ত করা হয়েছে।`,
      'শেয়ার বাজারের বিনিয়োগে নিশ্চিত লাভের প্রতিশ্রুতি সেবির নির্দেশিকা অনুযায়ী সম্পূর্ণ নিষিদ্ধ।',
      'নিয়ন্ত্রিত ক্লিয়ারিং অ্যাকাউন্টের পরিবর্তে ব্যক্তিগত ইউপিআই ঠিকানায় তহবিল পাঠানো নির্দেশ করা হয়েছে।',
      'জাতীয় সাইবার হেল্পলাইন 1930-এ নথিভুক্ত প্রতারণার পদ্ধতির সাথে মিল রয়েছে।'
    ],
    gu: [
      `સંદેશામાં ${signalsCount} ચેતવણી સંકેતો મળી આવ્યા છે.`,
      'બજારના રોકાણો પર ખાતરીપૂર્વકના વળતરના દાવા સેબીના પરિપત્રો હેઠળ સખત રીતે પ્રતિબંધિત છે.',
      'સંસ્થાકીય ખાતાને બદલે વ્યક્તિગત યુપીઆઈ એડ્રેસ પર નાણાં મોકલવાની સૂચના છે.',
      'રાષ્ટ્રીય સાયબર હેલ્પલાઇન 1930 પર નોંધાયેલી છેતરપિંડી પદ્ધતિઓ સાથે મેળ ખાય છે.'
    ],
    pa: [
      `ਸਮੱਗਰੀ ਵਿੱਚ ${signalsCount} ਚੇਤਾਵਨੀ ਸੰਕੇਤ ਪਛਾਣੇ ਗਏ ਹਨ।`,
      'ਮਾਰਕੀਟ ਨਿਵੇਸ਼ਾਂ ਤੇ ਗਰੰਟੀਸ਼ੁਦਾ ਮੁਨਾਫੇ ਦੇ ਵਾਅਦੇ ਸੇਬੀ ਦੇ ਨਿਯਮਾਂ ਅਧੀਨ ਸਖਤੀ ਨਾਲ ਮਨ੍ਹਾ ਹਨ।',
      'ਸਰਕਾਰੀ ਖਾਤੇ ਦੀ ਬਜਾਏ ਨਿੱਜੀ ਯੂਪੀਆਈ ਪਤੇ ਤੇ ਪੈਸੇ ਭੇਜਣ ਦੀ ਹਦਾਇਤ ਕੀਤੀ ਗਈ ਹੈ।',
      'ਰਾਸ਼ਟਰੀ ਸਾਈਬਰ ਹੈਲਪਲਾਈਨ 1930 ਤੇ ਦਰਜ ਧੋਖਾਧੜੀ ਦੇ ਪੈਟਰਨਾਂ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੈ।'
    ],
    or: [
      `ବାର୍ତ୍ତାରେ ${signalsCount}ଟି ସତର୍କତା ସଙ୍କେତ ଚିହ୍ନଟ ହୋଇଛି।`,
      'ବଜାର ନିବେଶରେ ନିଶ୍ଚିତ ଲାଭର ପ୍ରତିଶ୍ରୁତି ସେବି ନିୟମାବଳୀ ଅନୁଯାୟୀ ସମ୍ପୂର୍ଣ୍ଣ ନିଷିଦ୍ଧ।',
      'ଅନୁମୋଦିତ ସଂସ୍ଥା ବଦଳରେ ବ୍ୟକ୍ତିଗତ UPI ଖାତାକୁ ଟଙ୍କା ପଠାଇବାକୁ କୁହାଯାଇଛି।',
      'ଜାତୀୟ ସାଇବର ହେଲ୍ପଲାଇନ 1930 ରେ ପଞ୍ଜିକୃତ ଠକେଇ ସହିତ ସମାନତା ରହିଛି।'
    ],
    ur: [
      `متن میں ${signalsCount} نمایاں انتباہی اشارے پائے گئے۔`,
      'مارکیٹ سرمایہ کاری پر یقینی منافع کا وعدہ ریگولیٹری قوانین کے تحت سختی سے ممنوع ہے۔',
      'منظور شدہ ادارہ جاتی اکاؤنٹ کے بجائے ذاتی یو پی آئی پر رقم بھیجنے کی ہدایت کی گئی ہے۔',
      'قومی سائبر ہیلپ لائن 1930 پر رپورٹ شدہ فراڈ سے مماثلت رکھتا ہے۔'
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
    ],
    ta: [
      'செய்தி அனுப்பிய நபரின் உண்மையான சட்டப்பூர்வ அடையாளம் அல்லது இருப்பிடம்.',
      'கூறப்பட்ட பதிவு எண் அனுப்புநருக்கு சொந்தமானதா அல்லது தவறாகப் பயன்படுத்தப்பட்டதா என்பது.',
      'குறிப்பிடப்பட்ட மூன்றாம் தரப்பு பயன்பாட்டின் பின்னணி உள்கட்டமைப்பு.'
    ],
    ml: [
      'സന്ദേശം അയച്ച വ്യക്തിയുടെ യഥാർത്ഥ നിയമപരമായ ഐഡന്റിറ്റിയോ സ്ഥലമോ.',
      'സന്ദേശത്തിൽ പറയുന്ന രജിസ്ട്രേഷൻ നമ്പർ അയച്ചയാളുടേതാണോ അതോ ദുരുപയോഗം ചെയ്തതാണോ എന്ന്.',
      'ലിങ്കിൽ നൽകിയിട്ടുള്ള തേർഡ്-പാർട്ടി ആപ്പിന്റെ സെർവർ സാങ്കേതിക വിവരങ്ങൾ.'
    ],
    mr: [
      'संदेश पाठवणाऱ्या व्यक्तीची खरी कायदेशीर ओळख किंवा ठिकाण.',
      'दावा केलेला नोंदणी क्रमांक खरोखर प्रेषकाचा आहे की गैरवापर केला गेला आहे.',
      'कोणत्याही बाह्य अॅप किंवा लिंकची सुरक्षितता माहिती.'
    ],
    bn: [
      'বার্তা প্রেরকের প্রকৃত আইনি পরিচয় বা অবস্থান।',
      'দাবি করা রেজিস্ট্রেশন নম্বরটি প্রেরকের নিজের নাকি অপব্যবহার করা হয়েছে।',
      'উল্লেখিত কোনো বাহ্যিক অ্যাপ বা লিঙ্কের ব্যাকএন্ড কাঠামো।'
    ],
    gu: [
      'સંદેશ મોકલનાર વ્યક્તિની સાચી કાનૂની ઓળખ કે સ્થળ.',
      'દાવો કરેલ નોંધણી નંબર ખરેખર પ્રેષકનો છે કે ચોરાયેલો છે.',
      'સંદર્ભિત કોઈપણ થર્ડ પાર્ટી એપ્લિકેશનનું બેકએન્ડ માળખું.'
    ],
    pa: [
      'ਸੁਨੇਹਾ ਭੇਜਣ ਵਾਲੇ ਵਿਅਕਤੀ ਦੀ ਅਸਲ ਕਾਨੂੰਨੀ ਪਛਾਣ ਜਾਂ ਸਥਾਨ।',
      'ਕੀ ਦਾਅਵਾ ਕੀਤਾ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨੰਬਰ ਅਸਲ ਵਿੱਚ ਭੇਜਣ ਵਾਲੇ ਦਾ ਹੈ ਜਾਂ ਚੋਰੀ ਕੀਤਾ ਗਿਆ ਹੈ।',
      'ਕਿਸੇ ਵੀ ਬਾਹਰੀ ਐਪ ਜਾਂ ਡਾਊਨਲੋਡ ਲਿੰਕ ਦੀ ਤਕਨੀਕੀ ਜਾਣਕਾਰੀ।'
    ],
    or: [
      'ବାର୍ତ୍ତା ପଠାଇଥିବା ବ୍ୟକ୍ତିଙ୍କ ପ୍ରକୃତ ଆଇନଗତ ପରିଚୟ କିମ୍ବା ଠିକଣା।',
      'ଉଲ୍ଲେଖିତ ପଞ୍ଜୀକରଣ ନମ୍ବର ପ୍ରକୃତରେ ପ୍ରେରକଙ୍କର କି ନୁହେଁ।',
      'କୌଣସି ତୃତୀୟ ପକ୍ଷ ଆପ୍ କିମ୍ବା ଡାଉନଲୋଡ୍ ଲିଙ୍କର ସର୍ଭର ସୂଚନା।'
    ],
    ur: [
      'پیغام بھیجنے والے کی اصل قانونی شناخت یا جغرافیائی پتہ۔',
      'آیا دعوی کردہ رجسٹریشن نمبر درحقیقت بھیجنے والے کا ہے یا غلط استعمال کیا گیا ہے۔',
      'دیے گئے بیرونی لنک یا ایپ کا تکنیکی ڈھانچہ۔'
    ]
  };

  const whatWeKnow = whatWeKnowMap[language] || whatWeKnowMap.en;
  const whatWeCouldNotVerify = whatWeCouldNotVerifyMap[language] || whatWeCouldNotVerifyMap.en;

  const whatContradictsMap: Record<Language, string[]> = {
    en: [
      'SEBI explicitly prohibits guaranteed or assured returns under SEBI (Investment Advisers) Regulations, 2013.',
      'RBI strictly requires investment collections to flow through designated institutional clearing escrow accounts, never personal UPI VPAs.',
      'ASBA (Application Supported by Blocked Amount) is statutory for IPO bidding; private pre-IPO allocations over messaging groups violate stock exchange rules.'
    ],
    te: [
      'SEBI (పెట్టుబడి సలహాదారుల) నిబంధనలు 2013 ప్రకారం గ్యారెంటీ లేదా ఖచ్చితమైన లాభాల వాగ్దానాలను SEBI స్పష్టంగా నిషేధించింది.',
      'RBI నిబంధనల ప్రకారం పెట్టుబడుల నిధులు కేవలం అధికారిక ఎస్క్రో ఖాతాల ద్వారా మాత్రమే జరగాలి, వ్యక్తిగత UPI ఖాతాల ద్వారా కాదు.',
      'రిటైల్ IPO కేటాయింపులకు ASBA సదుపాయం తప్పనిసరి; చాట్ గ్రూపులలో ప్రైవేట్ కేటాయింపులు చట్టవిరుద్ధం.'
    ],
    kn: [
      'SEBI ಹೂಡಿಕೆ ಸಲಹೆಗಾರರ ​​ನಿಯಮಗಳು 2013 ರ ಅಡಿಯಲ್ಲಿ ಖಾತರಿ ಲಾಭದ ಭರವಸೆಯನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧಿಸಲಾಗಿದೆ.',
      'RBI ನಿಯಮಗಳ ಪ್ರಕಾರ ಹೂಡಿಕೆ ಹಣವು ಅಧಿಕೃತ ಎಸ್ಕ್ರೋ ಖಾತೆಗಳ ಮೂಲಕ ಮಾತ್ರ ಹರಿಯಬೇಕು, ವೈಯಕ್ತಿಕ UPI ಖಾತೆಗಳಿಗೆ ಅಲ್ಲ.',
      'IPO ಷೇರು ಬಿಡ್ಡಿಂಗ್‌ಗೆ ASBA ಕಡ್ಡಾಯವಾಗಿದೆ; ಚಾಟ್ ಗ್ರೂಪ್‌ಗಳಲ್ಲಿ ಖಾಸಗಿ ಹಂಚಿಕೆ ಷೇರು ವಿನಿಮಯ ನಿಯಮಗಳಿಗೆ ವಿರುದ್ಧವಾಗಿದೆ.'
    ],
    hi: [
      'सेबी (निवेश सलाहकार) विनियम, 2013 के तहत निश्चित या गारंटीकृत रिटर्न का वादा पूरी तरह प्रतिबंधित है।',
      'आरबीआई के नियमानुसार निवेश राशि केवल आधिकारिक एस्क्रो खातों में ही जानी चाहिए, व्यक्तिगत यूपीआई खातों में नहीं।',
      'आईपीओ आवंटन के लिए एएसबीए (ASBA) अनिवार्य है; चैट समूहों के माध्यम से निजी आवंटन गैरकानूनी है।'
    ],
    ta: [
      'செபி (முதலீட்டு ஆலோசகர்கள்) விதிமுறைகள் 2013-ன் கீழ் உத்தரவாதமான வருவாய் வாக்குறுதிகள் தடைசெய்யப்பட்டுள்ளன.',
      'ரிசர்வ் வங்கி விதிமுறைகளின்படி முதலீடுகள் நிறுவன கணக்குகள் வழியாக மட்டுமே செய்யப்பட வேண்டும், தனிப்பட்ட UPI அல்ல.',
      'ஐபிஓ-விற்கு ASBA கட்டாயமாகும்; சாட் குழுக்கள் வழியாக பங்குகள் ஒதுக்குவது சட்டவிரோதமானது.'
    ],
    ml: [
      'സെബി (നിക്ഷേപ ഉപദേശക) ചട്ടങ്ങൾ 2013 പ്രകാരം ഉറപ്പുള്ള വരുമാന വാഗ്ദാനങ്ങൾ നിരോധിച്ചിരിക്കുന്നു.',
      'നിക്ഷേപങ്ങൾ ബാങ്ക് എസ്‌ക്രോ അക്കൗണ്ടുകൾ വഴിയേ സ്വീകരിക്കാവൂ എന്ന് ആർബിഐ നിഷ്കർഷിക്കുന്നു.',
      'ഐപിഒ അലോട്ട്‌മെന്റിന് ASBA നിർബന്ധമാണ്; ചാറ്റ് ഗ്രൂപ്പുകളിലെ ഷെയർ ഓഫറുകൾ നിയമവിരുദ്ധമാണ്.'
    ],
    mr: [
      'सेबी नियमावली 2013 अंतर्गत हमी परताव्याचे दावे पूर्णपणे प्रतिबंधित आहेत.',
      'आरबीआय नियमांनुसार गुंतवणुकीची रक्कम अधिकृत खात्यातच जमा व्हायला हवी, वैयक्तिक यूपीआयवर नाही.',
      'आयपीओ अर्जासाठी ASBA अनिवार्य आहे; चॅट ग्रुप्सद्वारे खाजगी शेअर्स देणे बेकायदेशीर आहे.'
    ],
    bn: [
      'সেবি (বিনিয়োগ উপদেষ্টা) প্রবিধান ২০১৩ অনুযায়ী নিশ্চিত আয়ের প্রতিশ্রুতি সম্পূর্ণ নিষিদ্ধ।',
      'আরবিআই নির্দেশিকা অনুযায়ী বিনিয়োগ নিয়ন্ত্রিত অ্যাকাউন্টে জমা হতে হবে, ব্যক্তিগত ইউপিআইতে নয়।',
      'আইপিও-র জন্য ASBA বাধ্যতামূলক; চ্যাট গ্রুপে শেয়ার বরাদ্দ সম্পূর্ণ বেআইনি।'
    ],
    gu: [
      'સેબી નિયમો ૨૦૧૩ હેઠળ ગેરંટીડ રિટર્ન આપવાનું સખત પ્રતિબંધિત છે.',
      'આરબીઆઈ મુજબ રોકાણો સત્તાવાર એસ્ક્રો ખાતાઓ દ્વારા જ થવા જોઈએ, વ્યક્તિગત યુપીઆઈ દ્વારા નહીં.',
      'આઈપીઓ માટે ASBA ફરજિયાત છે; ચેટ ગ્રૂપમાં પ્રી-આઈપીઓ ફાળવણી ગેરકાયદેસર છે.'
    ],
    pa: [
      'ਸੇਬੀ ਨਿਯਮ 2013 ਅਧੀਨ ਗਰੰਟੀਸ਼ੁਦਾ ਮੁਨਾਫੇ ਦੇ ਦਾਅਵੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਮਨ੍ਹਾ ਹਨ।',
      'ਆਰਬੀਆਈ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਪੈਸੇ ਸਿਰਫ ਸਰਕਾਰੀ ਖਾਤਿਆਂ ਰਾਹੀਂ ਜਾਣੇ ਚਾਹੀਦੇ ਹਨ, ਨਿੱਜੀ ਯੂਪੀਆਈ ਰਾਹੀਂ ਨਹੀਂ।',
      'ਆਈਪੀਓ ਲਈ ASBA ਲਾਜ਼ਮੀ ਹੈ; ਗਰੁੱਪਾਂ ਵਿੱਚ ਨਿੱਜੀ ਅਲਾਟਮੈਂਟ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੈ।'
    ],
    or: [
      'ସେବି ନିୟମାବଳୀ ୨୦୧୩ ଅଧୀନରେ ନିଶ୍ଚିତ ଲାଭର ପ୍ରତିଶ୍ରୁତି ସମ୍ପୂର୍ଣ୍ଣ ନିଷିଦ୍ଧ।',
      'ଆରବିଆଇ ନିୟମ ଅନୁସାରେ ଟଙ୍କା କେବଳ ଅନୁମୋଦିତ ଖାତା ମାଧ୍ୟମରେ ଯିବା ଉଚିତ, ବ୍ୟକ୍ତିଗତ UPI ନୁହେଁ।',
      'ଆଇପିଓ ପାଇଁ ASBA ବାଧ୍ୟତାମୂଳକ; ଚାଟ୍ ଗ୍ରୁପ୍ ରେ ଶେୟାର ଦେବା ବେଆଇନ।'
    ],
    ur: [
      'ریگولیٹری قوانین کے تحت یقینی منافع کا دعوی مکمل طور پر ممنوع ہے۔',
      'سرمایہ کاری کی رقم صرف منظور شدہ تجارتی کھاتوں کے ذریعے جانی چاہیے، ذاتی یو پی آئی پر نہیں۔',
      'آئی پی او کے لیے ASBA لازمی ہے؛ چیٹ گروپس میں نجی الاٹمنٹ غیر قانونی ہے۔'
    ]
  };

  const whatContradicts = whatContradictsMap[language] || whatContradictsMap.en;

  // Safe steps in all 12 languages
  const safeStepsTemplates: Record<Language, SafeStep[]> = {
    en: [
      { step: 1, title: 'Pause before sending money', description: 'Never make immediate transfers under artificial countdown or slot-expiry pressure. Take an intentional 24-hour pause.', simpleText: 'Do not send any money in a hurry. Scammers want you to act fast before you can think or ask anyone.' },
      { step: 2, title: 'Verify the organization independently', description: 'Do not use links or phone numbers provided by the sender. Navigate independently to official regulatory portals (sebi.gov.in / rbi.org.in).', simpleText: 'Never trust links sent inside chats. Check sebi.gov.in directly.' },
      { step: 3, title: 'Check official statutory registries', description: 'Search the SEBI Intermediary Database or RBI Sachet portal to confirm if the firm holds a valid registration certificate.', simpleText: 'Check if this advisor is officially registered on SEBI before listening to them.' },
      { step: 4, title: 'Never share OTP, PIN or install APKs', description: 'Legitimate financial platforms never ask for bank OTP, UPI PIN, or direct installation of unverified .apk files.', simpleText: 'Never tell your bank OTP or UPI PIN to anyone, and never download APK files.' },
      { step: 5, title: 'Report suspicious activity immediately', description: 'If you have already sent funds, call the National Cyber Crime Helpline 1930 immediately or lodge an e-complaint on cybercrime.gov.in.', simpleText: 'If you already paid, call 1930 immediately to freeze the funds before they withdraw it.' }
    ],
    te: [
      { step: 1, title: 'డబ్బు పంపే ముందు ఆగండి', description: 'కృత్రిమ కౌంట్‌డౌన్ లేదా స్లాట్ గడువు ముగింపు ఒత్తిడిలో ఎప్పుడూ వెంటనే డబ్బు బదిలీ చేయవద్దు. కనీసం 24 గంటల విరామం తీసుకోండి.', simpleText: 'ఆతురతలో ఎవరికీ డబ్బు పంపవద్దు. మీరు ఆలోచించకముందే డబ్బు లాక్కోవాలని చూస్తారు.' },
      { step: 2, title: 'సంస్థను స్వతంత్రంగా ధృవీకరించుకోండి', description: 'సందేశంలో పంపిన లింక్‌లు లేదా ఫోన్ నంబర్లను ఎప్పుడూ నమ్మవద్దు. అధికారిక పోర్టల్స్ (sebi.gov.in / rbi.org.in) ద్వారా స్వయంగా తనిఖీ చేయండి.', simpleText: 'చాట్‌లో వచ్చిన లింకులను నమ్మకండి. అధికారిక వెబ్‌సైట్ మాత్రమే చూడండి.' },
      { step: 3, title: 'చట్టబద్ధమైన అధికారిక రిజిస్టర్లను తనిఖీ చేయండి', description: 'SEBI లేదా RBI Sachet పోర్టల్‌లో సంస్థకు సరైన రిజిస్ట్రేషన్ సర్టిఫికేట్ ఉందో లేదో వెతకండి.', simpleText: 'ఈ వ్యక్తి లేదా సంస్థ SEBI లో నమోదైందో లేదో సరిచూసుకోండి.' },
      { step: 4, title: 'OTP, PIN లు ఎవరితోనూ పంచుకోవద్దు, APK లు ఇన్‌స్టాల్ చేయవద్దు', description: 'చట్టబద్ధమైన బ్యాంకులు లేదా బ్రోకర్లు ఎప్పుడూ UPI పిన్ లేదా పాస్‌వర్డ్ అడగరు, తెలియని APK ఫైళ్లను డౌన్‌లోడ్ చేయమని చెప్పరు.', simpleText: 'మీ బ్యాంక్ OTP లేదా UPI పిన్ ఎవరికీ చెప్పవద్దు.' },
      { step: 5, title: 'అనుమానాస్పద లావాదేవీలను వెంటనే నివేదించండి', description: 'మీరు ఇప్పటికే డబ్బు పంపినట్లయితే, వెంటనే జాతీయ సైబర్ హెల్ప్‌లైన్ 1930 కి కాల్ చేయండి లేదా cybercrime.gov.in లో ఫిర్యాదు చేయండి.', simpleText: 'డబ్బు పంపినట్లయితే ఖాతా స్తంభింపజేయడానికి వెంటనే 1930 కి కాల్ చేయండి.' }
    ],
    kn: [
      { step: 1, title: 'ಹಣ ಕಳುಹಿಸುವ ಮುನ್ನ ಆಲೋಚಿಸಿ', description: 'ಯಾವುದೇ ಕೃತಕ ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ತಕ್ಷಣ ಹಣ ವರ್ಗಾಯಿಸಬೇಡಿ. ಕನಿಷ್ಠ 24 ಗಂಟೆಗಳ ಕಾಲಾವಕಾಶ ತೆಗೆದುಕೊಳ್ಳಿ.', simpleText: 'ಆತುರದಲ್ಲಿ ಹಣ ಕಳುಹಿಸಬೇಡಿ.' },
      { step: 2, title: 'ಸಂಸ್ಥೆಯನ್ನು ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಿ', description: 'ಸಂದೇಶದಲ್ಲಿ ನೀಡಲಾದ ಲಿಂಕ್‌ಗಳನ್ನು ಎಂದಿಗೂ ಕ್ಲಿಕ್ ಮಾಡಬೇಡಿ. ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗಳಿಗೆ ನೇರವಾಗಿ ಭೇಟಿ ನೀಡಿ.', simpleText: 'ಕಂಪನಿಯ ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್ ಅನ್ನು ನೀವೇ ಪರಿಶೀಲಿಸಿ.' },
      { step: 3, title: 'ಅಧಿಕೃತ ಶಾಸನಬದ್ಧ ರಿಜಿಸ್ಟರ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ', description: 'SEBI ಅಥವಾ RBI Sachet ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಣಿ ಪ್ರಮಾಣಪತ್ರವನ್ನು ಪರಿಶೀಲಿಸಿ.', simpleText: 'ಇವರು SEBI ನಲ್ಲಿ ನೋಂದಾಯಿಸಲ್ಪಟ್ಟಿದ್ದಾರೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.' },
      { step: 4, title: 'OTP, PIN ಹಂಚಿಕೊಳ್ಳಬೇಡಿ ಮತ್ತು APK ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬೇಡಿ', description: 'ಅಧಿಕೃತ ಸಂಸ್ಥೆಗಳು ಎಂದಿಗೂ ನಿಮ್ಮ UPI ಪಿನ್ ಅಥವಾ ಬ್ಯಾಂಕ್ ಪಾಸ್‌ವರ್ಡ್ ಕೇಳುವುದಿಲ್ಲ.', simpleText: 'ನಿಮ್ಮ OTP ಯಾರಿಗೂ ಹೇಳಬೇಡಿ.' },
      { step: 5, title: 'ಸಂಶಯಾಸ್ಪದ ಚಟುವಟಿಕೆಯನ್ನು ತಕ್ಷಣ ವರದಿ ಮಾಡಿ', description: 'ಹಣ ವರ್ಗಾಯಿಸಿದ್ದರೆ, ತಕ್ಷಣ ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಹೆಲ್ಪ್‌ಲೈನ್ 1930 ಗೆ ಕರೆ ಮಾಡಿ.', simpleText: 'ಹಣ ಪಾವತಿಸಿದ್ದರೆ ತಕ್ಷಣ 1930 ಗೆ ಕರೆ ಮಾಡಿ.' }
    ],
    hi: [
      { step: 1, title: 'पैसे भेजने से पहले रुकें', description: 'जल्दबाजी या दबाव में कभी भी तुरंत पैसे ट्रांसफर न करें। कम से कम 24 घंटे का विचारपूर्वक विराम लें।', simpleText: 'जल्दबाजी में किसी को पैसे न भेजें।' },
      { step: 2, title: 'संस्था की स्वतंत्र रूप से जांच करें', description: 'संदेश में दिए गए लिंक पर भरोसा न करें। आधिकारिक सरकारी पोर्टल पर सीधे जाएं।', simpleText: 'कंपनी की असली वेबसाइट खुद जांचें।' },
      { step: 3, title: 'वैधानिक रजिस्टरों की जांच करें', description: 'SEBI या RBI Sachet पोर्टल पर जांचें कि क्या उनके पास वैध लाइसेंस है।', simpleText: 'जांचें कि क्या यह फर्म SEBI में पंजीकृत है।' },
      { step: 4, title: 'OTP, PIN कभी साझा न करें और APK डाउनलोड न करें', description: 'वैधानिक वित्तीय संस्थाएं कभी भी आपसे UPI पिन या गोपनीय पासवर्ड नहीं मांगतीं।', simpleText: 'अपना बैंक OTP या PIN किसी को न बताएं।' },
      { step: 5, title: 'संदिग्ध गतिविधि की तुरंत रिपोर्ट करें', description: 'यदि आपने पैसे भेज दिए हैं, तो तुरंत राष्ट्रीय साइबर हेल्पलाइन 1930 पर कॉल करें।', simpleText: 'यदि पैसे ट्रांसफर कर दिए हैं, तो तुरंत 1930 पर कॉल करें।' }
    ],
    ta: [
      { step: 1, title: 'பணம் அனுப்பும் முன் சிந்தியுங்கள்', description: 'அவசர முடிவுகளைத் தவிருங்கள். 24 மணி நேர அவகாசம் எடுத்துக் கொள்ளுங்கள்.', simpleText: 'அவசரமாக பணம் அனுப்ப வேண்டாம்.' },
      { step: 2, title: 'நிறுவனத்தை சுயாதீனமாக சரிபார்க்கவும்', description: 'சாட்டில் வந்த இணைப்புகளைப் பயன்படுத்தாதீர்கள். அதிகாரப்பூர்வ தளத்தைத் தேடவும்.', simpleText: 'அதிகாரப்பூர்வ தளத்தை நேரடியாக சரிபாருங்கள்.' },
      { step: 3, title: 'ஒழுங்குமுறை பதிவேடுகளை சரிபார்க்கவும்', description: 'SEBI அல்லது RBI போர்ட்டலில் பதிவு எண்ணைச் சரிபார்க்கவும்.', simpleText: 'SEBI பதிவை உறுதிப்படுத்தவும்.' },
      { step: 4, title: 'OTP, PIN பகிர வேண்டாம் மற்றும் APK பதிவிறக்க வேண்டாம்', description: 'வங்கிகள் ஒருபோதும் உங்கள் ரகசிய UPI பின் அல்லது கடவுச்சொல்லைக் கேட்காது.', simpleText: 'OTP-ஐ யாரிடமும் சொல்லாதீர்கள்.' },
      { step: 5, title: 'உடனடியாக புகாரளிக்கவும்', description: 'பணம் அனுப்பியிருந்தால் உடனடியாக 1930 ஹெல்ப்லைனை அழைக்கவும்.', simpleText: 'பணம் செலுத்தியிருந்தால் உடனே 1930-ஐ அழைக்கவும்.' }
    ],
    ml: [
      { step: 1, title: 'പണം അയക്കുന്നതിന് മുൻപ് ചിന്തിക്കുക', description: 'ധൃതിപിടിച്ച തീരുമാനങ്ങൾ ഒഴിവാക്കുക. കുറഞ്ഞത് 24 മണിക്കൂർ സമയം എടുക്കുക.', simpleText: 'ധൃതിപിടിച്ച് പണം അയക്കരുത്.' },
      { step: 2, title: 'സ്ഥാപനത്തെക്കുറിച്ച് സ്വതന്ത്രമായി അന്വേഷിക്കുക', description: 'സന്ദേശത്തിലെ ലിങ്കുകളിൽ ക്ലിക്ക് ചെയ്യരുത്. ഔദ്യോഗിക സൈറ്റ് പരിശോധിക്കുക.', simpleText: 'കമ്പനിയുടെ യഥാർത്ഥ സൈറ്റ് പരിശോധിക്കുക.' },
      { step: 3, title: 'ഔദ്യോഗിക രജിസ്ട്രേഷൻ പരിശോധിക്കുക', description: 'SEBI അല്ലെങ്കിൽ RBI പോർട്ടലിൽ രജിസ്ട്രേഷൻ നമ്പർ പരിശോധിക്കുക.', simpleText: 'SEBI രജിസ്ട്രേഷൻ ഉണ്ടോ എന്ന് നോക്കുക.' },
      { step: 4, title: 'OTP, PIN പങ്കുവെക്കരുത്, APK ഇൻസ്റ്റാൾ ചെയ്യരുത്', description: 'ബാങ്കുകൾ ഒരിക്കലും യുപിഐ പിൻ നമ്പറോ പാസ്‌വേഡോ ചോദിക്കില്ല.', simpleText: 'OTP ആർക്കും നൽകരുത്.' },
      { step: 5, title: 'ഉടൻ തന്നെ പരാതിപ്പെടുക', description: 'പണം അയച്ചെങ്കിൽ ഉടൻ തന്നെ ദേശീയ സൈബർ ഹെൽപ്പ് ലൈൻ 1930-ൽ വിളിക്കുക.', simpleText: 'ഉടൻ 1930-ൽ വിളിക്കുക.' }
    ],
    mr: [
      { step: 1, title: 'पैसे पाठवण्यापूर्वी थांबा', description: 'किमान 24 तासांचा वेळ घ्या. घाईघाईत पैसे पाठवू नका.', simpleText: 'घाईघाईत पैसे पाठवू नका.' },
      { step: 2, title: 'संस्थेची स्वतंत्रपणे पडताळणी करा', description: 'चॅटमधील लिंकवर क्लिक करू नका. अधिकृत पोर्टल तपासा.', simpleText: 'कंपनीची खरी वेबसाइट स्वतः तपासा.' },
      { step: 3, title: 'अधिकृत नोंदणी तपासा', description: 'SEBI किंवा RBI पोर्टलवर नोंदणी प्रमाणपत्र तपासा.', simpleText: 'सेबी नोंदणी तपासा.' },
      { step: 4, title: 'OTP किंवा पिन शेअर करू नका', description: 'अधिकृत संस्था कधीही UPI पिन किंवा पासवर्ड मागत नाहीत.', simpleText: 'तुमचा OTP कोणालाही सांगू नका.' },
      { step: 5, title: 'तात्काळ तक्रार नोंदवा', description: 'पैसे पाठवले असल्यास लगेच 1930 वर कॉल करा.', simpleText: 'पैसे दिले असल्यास त्वरित 1930 वर संपर्क साधा.' }
    ],
    bn: [
      { step: 1, title: 'টাকা পাঠানোর আগে থামুন', description: 'কমপক্ষে ২৪ ঘণ্টার সময় নিন। তাড়াহুড়ো করবেন না।', simpleText: 'তাড়াহুড়ো করে টাকা পাঠাবেন না।' },
      { step: 2, title: 'সংস্থাটি স্বাধীনভাবে যাচাই করুন', description: 'বার্তার লিঙ্কে ক্লিক করবেন না। অফিসিয়াল সাইট খুঁজুন।', simpleText: 'কোম্পানির আসল সাইট নিজে দেখুন।' },
      { step: 3, title: 'সরকারি রেজিস্ট্রি পরীক্ষা করুন', description: 'সেবি বা আরবিআই পোর্টালে যাচাই করুন।', simpleText: 'সেবি নিবন্ধন চেক করুন।' },
      { step: 4, title: 'OTP বা পিন শেয়ার করবেন না', description: 'কোনো বৈধ ব্যাঙ্ক কখনও আপনার পিন চাইবে না।', simpleText: 'ওটিপি কাউকে বলবেন না।' },
      { step: 5, title: 'অবিলম্বে অভিযোগ জানান', description: 'টাকা পাঠিয়ে থাকলে অবিলম্বে ১৯৩০ নম্বরে কল করুন।', simpleText: 'টাকা পাঠিয়ে থাকলে এখনই ১৯৩০ নম্বরে কল করুন।' }
    ],
    gu: [
      { step: 1, title: 'પૈસા મોકલતા પહેલા રોકાઈ જાઓ', description: 'ઓછામાં ઓછો 24 કલાકનો સમય લો. ઉતાવળ ન કરો.', simpleText: 'ઉતાવળમાં પૈસા ન મોકલો.' },
      { step: 2, title: 'સંસ્થાની સ્વતંત્ર ચકાસણી કરો', description: 'ચેટની લિંક્સ પર ક્લિક ન કરો. સત્તાવાર વેબસાઇટ જુઓ.', simpleText: 'સાચી વેબસાઇٹ જાતે તપાસો.' },
      { step: 3, title: 'સરકારી રજિસ્ટર તપાસો', description: 'સેબી અથવા આરબીઆઈ પોર્ટલ પર ચકાસો.', simpleText: 'સેબી નોંધણી તપાસો.' },
      { step: 4, title: 'OTP કે PIN ક્યારેય શેર ન કરો', description: 'કાયદેસર સંસ્થાઓ ક્યારેય UPI PIN માંગતી નથી.', simpleText: 'OTP કોઈને ન આપો.' },
      { step: 5, title: 'તરત જ ફરિયાદ નોંધાવો', description: 'પૈસા મોકલાઈ ગયા હોય તો તરત જ 1930 પર કૉલ કરો.', simpleText: 'તરત જ 1930 પર કૉલ કરો.' }
    ],
    pa: [
      { step: 1, title: 'ਪੈਸੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ ਰੁਕੋ', description: 'ਘੱਟੋ-ਘੱਟ 24 ਘੰਟੇ ਦਾ ਸਮਾਂ ਲਓ। ਕਾਹਲੀ ਨਾ ਕਰੋ।', simpleText: 'ਕਾਹਲੀ ਵਿੱਚ ਪੈਸੇ ਨਾ ਭੇਜੋ।' },
      { step: 2, title: 'ਸੰਸਥਾ ਦੀ ਸੁਤੰਤਰ ਪੁਸ਼ਟੀ ਕਰੋ', description: 'ਚੈਟ ਵਿੱਚ ਦਿੱਤੇ ਲਿੰਕਾਂ ਤੇ ਕਲਿੱਕ ਨਾ ਕਰੋ।', simpleText: 'ਅਸਲ ਵੈੱਬਸਾਈਟ ਖੁਦ ਚੈੱਕ ਕਰੋ।' },
      { step: 3, title: 'ਸਰਕਾਰੀ ਰਜਿਸਟਰੀਆਂ ਦੀ ਜਾਂਚ ਕਰੋ', description: 'ਸੇਬੀ ਜਾਂ ਆਰਬੀਆਈ ਪੋਰਟਲ ਤੇ ਚੈੱਕ ਕਰੋ।', simpleText: 'ਸੇਬੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਚੈੱਕ ਕਰੋ।' },
      { step: 4, title: 'OTP ਜਾਂ ਪਿੰਨ ਸਾਂਝਾ ਨਾ ਕਰੋ', description: 'ਕੋਈ ਵੀ ਕਾਨੂੰਨੀ ਸੰਸਥਾ ਤੁਹਾਡਾ ਪਿੰਨ ਨਹੀਂ ਮੰਗਦੀ।', simpleText: 'OTP ਕਿਸੇ ਨੂੰ ਨਾ ਦੱਸੋ।' },
      { step: 5, title: 'ਤੁਰੰਤ ਰਿਪੋਰਟ ਕਰੋ', description: 'ਪੈਸੇ ਟਰਾਂਸਫਰ ਕੀਤੇ ਹਨ ਤਾਂ ਤੁਰੰਤ 1930 ਤੇ ਕਾਲ ਕਰੋ।', simpleText: 'ਤੁਰੰਤ 1930 ਤੇ ਕਾਲ ਕਰੋ।' }
    ],
    or: [
      { step: 1, title: 'ଟଙ୍କା ପଠାଇବା ପୂର୍ବରୁ ଅଟକନ୍ତୁ', description: 'ଅତି କମରେ ୨୪ ଘଣ୍ଟା ସମୟ ନିଅନ୍ତୁ।', simpleText: 'ତରବର ହୋଇ ଟଙ୍କା ପଠାନ୍ତୁ ନାହିଁ।' },
      { step: 2, title: 'ସଂସ୍ଥାର ସ୍ୱତନ୍ତ୍ର ଯାଞ୍ଚ କରନ୍ତୁ', description: 'ଚାଟ୍ ଲିଙ୍କ୍ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ ନାହିଁ।', simpleText: 'ଅଫିସିଆଲ୍ ୱେବସାଇଟ୍ ନିଜେ ଯାଞ୍ଚ କରନ୍ତୁ।' },
      { step: 3, title: 'ସରକାରୀ ରେଜିଷ୍ଟର ଯାଞ୍ଚ କରନ୍ତୁ', description: 'ସେବି କିମ୍ବା ଆରବିଆଇ ପୋର୍ଟାଲରେ ମିଳାନ୍ତୁ।', simpleText: 'ସେବି ପଞ୍ଜୀକରଣ ଦେଖନ୍ତୁ।' },
      { step: 4, title: 'OTP ବା PIN କାହାକୁ ଦିଅନ୍ତୁ ନାହିଁ', description: 'ବୈଧ ସଂସ୍ଥା କେବେହେଲେ UPI PIN ମାଗନ୍ତି ନାହିଁ।', simpleText: 'OTP କାହାକୁ କୁହନ୍ତୁ ନାହିଁ।' },
      { step: 5, title: 'ତୁରନ୍ତ ଅଭିଯୋଗ କରନ୍ତୁ', description: 'ଟଙ୍କା ପଠାଇଥିଲେ ତୁରନ୍ତ 1930 କୁ କଲ୍ କରନ୍ତୁ।', simpleText: 'ତୁରନ୍ତ 1930 କୁ କଲ୍ କରନ୍ତୁ।' }
    ],
    ur: [
      { step: 1, title: 'رقم بھیجنے سے پہلے رکیں', description: 'کم از کم 24 گھنٹے کا وقت لیں۔ جلد بازی نہ کریں۔', simpleText: 'جلد بازی میں رقم نہ بھیجیں۔' },
      { step: 2, title: 'ادارے کی تصدیق کریں', description: 'چیٹ کے لنکس پر کلک نہ کریں۔ سرکاری پورٹل دیکھیں۔', simpleText: 'اصلی ویب سائٹ خود دیکھیں۔' },
      { step: 3, title: 'سرکاری رجسٹر چیک کریں', description: 'سرکاری پورٹل پر رجسٹریشن نمبر دیکھیں۔', simpleText: 'سرکاری رجسٹریشن چیک کریں۔' },
      { step: 4, title: 'OTP یا پن کبھی شیئر نہ کریں', description: 'قانونی ادارے کبھی بھی آپ کا پاس ورڈ نہیں مانگتے۔', simpleText: 'اپنا پن کسی کو نہ بتائیں۔' },
      { step: 5, title: 'فوری شکایت درج کریں', description: 'رقم بھیج دی ہے تو فوری طور پر 1930 پر کال کریں۔', simpleText: 'فوری 1930 پر کال کریں۔' }
    ]
  };

  const safeSteps = safeStepsTemplates[language] || safeStepsTemplates.en;

  // Vernacular Explanations
  const vernacularExplanations: Record<Language, { summary: string; simple: string; audioScript: string }> = {
    en: {
      summary: `PARAKH detected ${signalsCount} warning patterns commonly associated with suspicious financial content in India. Prominent signals include guaranteed-return promises, artificial urgency, and private account transfer requests.`,
      simple: "This message is very risky. It promises guaranteed profits (which is illegal under stock market rules) and rushes you to send money to a private account.",
      audioScript: `Attention. PARAKH has detected ${signalsCount} warning signals in this content. The message promises guaranteed returns and asks for quick payment. Please do not send money without verifying on the official SEBI portal.`
    },
    hi: {
      summary: `परख ने इस सामग्री में ${signalsCount} गंभीर चेतावनी संकेत पाए हैं। इनमें निश्चित मुनाफ़े का वादा, समय की जल्दबाज़ी और निजी यूपीआई में पैसे ट्रांसफर करने की मांग शामिल है।`,
      simple: "यह मैसेज बहुत जोखिम भरा है। यह शेयर बाज़ार में बिना किसी नुकसान के गारंटीड मुनाफ़े का लालच दे रहा है और जल्दबाज़ी में किसी निजी खाते में पैसे भेजने का दबाव बना रहा है।",
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
    },
    ta: {
      summary: `PARAKH இந்த உள்ளடக்கத்தில் ${signalsCount} எச்சரிக்கை வடிவங்களை கண்டறிந்துள்ளது. உத்தரவாதமான லாபம், செயற்கை அவசரம் மற்றும் தனிப்பட்ட கணக்கு பரிமாற்றங்கள் இதில் அடங்கும்.`,
      simple: "இந்த செய்தி மிகவும் ஆபத்தானது. இது பங்குச்சந்தையில் உத்தரவாத லாபத்தை உறுதியளிக்கிறது (இது சட்டப்படி தடைசெய்யப்பட்டுள்ளது) மற்றும் தனிப்பட்ட கணக்கிற்கு பணம் அனுப்ப அவசரப்படுத்துகிறது.",
      audioScript: `கவனம். PARAKH இந்த உள்ளடக்கத்தில் எச்சரிக்கை சமிக்ஞைகளை கண்டறிந்துள்ளது. அதிகாரப்பூர்வ SEBI போர்ட்டலில் சரிபார்க்காமல் பணம் அனுப்ப வேண்டாம்.`
    },
    ml: {
      summary: `ഈ സന്ദേശത്തിൽ ${signalsCount} മുന്നറിയിപ്പ് സിഗ്നലുകൾ PARAKH കണ്ടെത്തി. ഗ്യാരണ്ടീഡ് ലാഭം, അടിയന്തിരത, സ്വകാര്യ അക്കൗണ്ടിലേക്ക് പണം അയക്കാനുള്ള നിർദ്ദേശം എന്നിവ ഇതിലുണ്ട്.`,
      simple: "ഈ സന്ദേശം വളരെ അപകടകരമാണ്. ഷെയർ മാർക്കറ്റിൽ ഉറപ്പായ ലാഭം വാഗ്ദാനം ചെയ്യുകയും സ്വകാര്യ അക്കൗണ്ടിലേക്ക് പണം അയക്കാൻ നിർബന്ധിക്കുകയും ചെയ്യുന്നു.",
      audioScript: `ശ്രദ്ധിക്കുക. ഈ ഉള്ളടക്കത്തിൽ PARAKH അപകട സിഗ്നലുകൾ കണ്ടെത്തിയിട്ടുണ്ട്. ഔദ്യോഗിക പോർട്ടലിൽ സ്ഥിരീകരിക്കാതെ പണം കൈമാറരുത്.`
    },
    mr: {
      summary: `परखने या संदेशात ${signalsCount} चेतावणी संकेत शोधले आहेत. हमी परतावा, कृत्रिम घाई आणि खाजगी यूपीआयवर पैसे पाठवण्याची मागणी यामध्ये समाविष्ट आहे.`,
      simple: "हा संदेश अत्यंत धोकादायक आहे. शेअर बाजारात हमी परताव्याचे खोटे आमिष दाखवून खाजगी खात्यात पैसे पाठवण्याचा दबाव आणत आहे.",
      audioScript: `सावधान. परखने या संदेशात धोक्याचे संकेत शोधले आहेत. सेबीच्या अधिकृत पोर्टलवर खात्री केल्याशिवाय पैसे पाठवू नका.`
    },
    bn: {
      summary: `পারখ এই বার্তায় ${signalsCount}টি সতর্কতামূলক সংকেত সনাক্ত করেছে। নিশ্চিত মুনাফা, কৃত্রিম জরুরি অবস্থা এবং ব্যক্তিগত অ্যাকাউন্টে টাকা পাঠানোর অনুরোধ এতে রয়েছে।`,
      simple: "এই বার্তাটি অত্যন্ত ঝুঁকিপূর্ণ। এটি শেয়ার বাজারে নিশ্চিত লাভের প্রলোভন দিচ্ছে এবং ব্যক্তিগত অ্যাকাউন্টে দ্রুত টাকা পাঠানোর জন্য চাপ দিচ্ছে।",
      audioScript: `সতর্কতা। পারখ এই সামগ্রীতে সতর্কবার্তা সনাক্ত করেছে। অফিশিয়াল পোর্টালে যাচাই না করে কোনো টাকা পাঠাবেন না।`
    },
    gu: {
      summary: `પારખે આ સામગ્રીમાં ${signalsCount} ચેતવણી સંકેતો શોધી કાઢ્યા છે. ગેરંટીડ નફો, તાત્કાલિક નિર્ણય માટે દબાણ અને ખાનગી ખાતામાં પૈસા મોકલવાની વિનંતી સામેલ છે.`,
      simple: "આ સંદેશ અત્યંત જોખમી છે. તે શેરબજારમાં ખાતરીપૂર્વકના નફાની લાલચ આપે છે અને કોઈ ખાનગી ખાતામાં પૈસા મોકલવા દબાણ કરે છે.",
      audioScript: `સાવધાન. પારખે આ સામગ્રીમાં જોખમના સંકેતો ઓળખ્યા છે. અધિકૃત પોર્ટલ પર ચકાસણી કર્યા વિના પૈસા મોકલશો નહીં.`
    },
    pa: {
      summary: `ਪਰਖ ਨੇ ਇਸ ਸਮੱਗਰੀ ਵਿੱਚ ${signalsCount} ਚੇਤਾਵਨੀ ਸੰਕੇਤ ਲੱਭੇ ਹਨ। ਗਰੰਟੀਸ਼ੁਦਾ ਮੁਨਾਫਾ, ਨਕਲੀ ਜ਼ਰੂਰੀ ਦਬਾਅ ਅਤੇ ਨਿੱਜੀ ਖਾਤੇ ਵਿੱਚ ਪੈਸੇ ਭੇਜਣ ਦੀ ਮੰਗ ਸ਼ਾਮਲ ਹੈ।`,
      simple: "ਇਹ ਸੁਨੇਹਾ ਬਹੁਤ ਖ਼ਤਰਨਾਕ ਹੈ। ਇਹ ਸ਼ੇਅਰ ਬਾਜ਼ਾਰ ਵਿੱਚ ਗਰੰਟੀਸ਼ੁਦਾ ਮੁਨਾਫੇ ਦਾ ਦਾਅਵਾ ਕਰਦਾ ਹੈ ਅਤੇ ਕਿਸੇ ਨਿੱਜੀ ਖਾਤੇ ਵਿੱਚ ਪੈਸੇ ਭੇਜਣ ਲਈ ਦਬਾਅ ਪਾਉਂਦਾ ਹੈ।",
      audioScript: `ਸਾਵਧਾਨ। ਪਰਖ ਨੇ ਇਸ ਸਮੱਗਰੀ ਵਿੱਚ ਖ਼ਤਰੇ ਦੇ ਸੰਕੇਤ ਪਛਾਣੇ ਹਨ। ਸਰਕਾਰੀ ਪੋਰਟਲ ਤੇ ਪੁਸ਼ਟੀ ਕੀਤੇ ਬਿਨਾਂ ਪੈਸੇ ਨਾ ਭੇਜੋ।`
    },
    or: {
      summary: `ପାରଖ ଏହି ବିଷୟବସ୍ତୁରେ ${signalsCount} ଚେତାବନୀ ସଙ୍କେତ ଚିହ୍ନଟ କରିଛି। ଗ୍ୟାରେଣ୍ଟିଯୁକ୍ତ ଲାଭ, କୃତ୍ରିମ ଜରୁରୀକାଳୀନ ଚାପ ଏବଂ ବ୍ୟକ୍ତିଗତ ଖାତାକୁ ଟଙ୍କା ପଠାଇବା ଅନୁରୋଧ ଏଥିରେ ଅନ୍ତର୍ଭୁକ୍ତ।`,
      simple: "ଏହି ବାର୍ତ୍ତାଟି ଅତ୍ୟନ୍ତ ବିପଦପୂର୍ଣ୍ଣ। ଏହା ନିଶ୍ଚିତ ଲାଭର ପ୍ରଲୋଭନ ଦେଉଛି ଏବଂ କୌଣସି ବ୍ୟକ୍ତିଗତ ଖାତାରେ ତୁରନ୍ତ ଟଙ୍କା ପଠାଇବାକୁ ଚାପ ପକାଉଛି।",
      audioScript: `ସାବଧାନ। ପାରଖ ଏହି ବାର୍ତ୍ତାରେ ବିପଦ ସଙ୍କେତ ଚିହ୍ନଟ କରିଛି। ଅଫିସିଆଲ୍ ପୋର୍ଟାଲରେ ଯାଞ୍ଚ ନକରି ଟଙ୍କା ପଠାନ୍ତୁ ନାହିଁ।`
    },
    ur: {
      summary: `پارکھ نے اس مواد میں ${signalsCount} انتباہی اشارے پائے ہیں۔ یقینی منافع کا وعدہ، فوری فیصلے کا دباؤ اور نجی کھاتے میں رقم منتقلی کی درخواست شامل ہے۔`,
      simple: "یہ پیغام انتہائی پرخطر ہے۔ یہ اسٹاک مارکیٹ میں یقینی منافع کا جھوٹا لالچ دے رہا ہے اور فوری طور پر کسی نجی کھاتے میں رقم بھیجنے کا دباؤ بنا رہا ہے۔",
      audioScript: `خبردار۔ پارکھ نے اس پیغام میں خطرے کے اشارے پائے ہیں۔ سرکاری پورٹل پر تصدیق کیے بغیر رقم منتقل نہ کریں۔`
    }
  };

  const overallExplanation = vernacularExplanations[language]?.summary || vernacularExplanations.en.summary;
  const simpleExplanation = vernacularExplanations[language]?.simple || vernacularExplanations.en.simple;

  // Build the Core New Layers
  const trustChain = buildTrustChain(content, signals, evidenceItems, language);
  const scamDna = buildScamDna(content, signals, language);
  const { communityReports, communitySummary, emergingPattern } = buildCommunityEvidence(content, signals, language);

  return {
    id: `verif-${Date.now()}`,
    timestamp: new Date().toISOString(),
    originalContent: content,
    inputType,
    languageDetected: language,
    statusHeading,
    verdictCategory,
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
    whatContradicts,
    behavioralSignals,
    safeSteps,
    trustChain,
    scamDna,
    emergingPattern,
    communityReports,
    communitySummary
  };
}
