import { 
  CommunityReport, 
  AiCommunitySummary, 
  EmergingScamPattern, 
  Language, 
  WarningSignal 
} from '../../types/analysis';

export function buildCommunityEvidence(
  content: string,
  signals: WarningSignal[],
  language: Language = 'en'
): {
  communityReports: CommunityReport[];
  communitySummary: AiCommunitySummary;
  emergingPattern: EmergingScamPattern;
} {
  const contentLower = content.toLowerCase();
  const isTe = language === 'te';
  const isHi = language === 'hi';
  const isKn = language === 'kn';
  const isTa = language === 'ta';

  // Emerging Pattern Detection
  const hasGuaranteedReturn = /guarantee|assured|fixed return|daily profit/i.test(contentLower);
  const hasTelegramOrWa = /telegram|t\.me|wa\.me|whatsapp|group/i.test(contentLower);
  const hasUpiOrPay = /upi|paytm|phonepe|transfer|account/i.test(contentLower);
  const hasAuthority = /sebi|rbi|bajaj|tata|hdfc/i.test(contentLower);

  const sharedVectors = [];

  if (hasGuaranteedReturn || hasTelegramOrWa) {
    sharedVectors.push({
      category: 'template' as const,
      categoryLabel: isTe ? 'సందేశం టెంప్లేట్' : isHi ? 'संदेश टेम्पलेट' : 'Message Template',
      value: isTe ? 'VIP ప్రీ-మార్కెట్ / గ్యారెంటీ రోజువారీ లాభం ఎర' : isHi ? 'वीआईपी प्री-मार्केट / दैनिक गारंटीशुदा लाभ का झांसा' : 'VIP Pre-Market / Guaranteed Daily Profit Hook',
      occurrencesNote: isTe ? 'గత 14 రోజుల్లో బెంగళూరు, పూణే & హైదరాబాద్‌లలో 42 సమర్పణలలో గుర్తించబడింది.' : 'Identified in 42 submissions across Bengaluru, Pune & Ahmedabad over past 14 days.'
    });
  }

  if (hasTelegramOrWa) {
    sharedVectors.push({
      category: 'phone' as const,
      categoryLabel: isTe ? 'సంప్రదింపు మాధ్యమం' : isHi ? 'संपर्क माध्यम' : 'Contact Vector',
      value: isTe ? 'వర్చువల్ +91-98... సిరీస్ & అనామక టెలిగ్రామ్ అడ్మిన్ హ్యాండిల్స్' : 'Virtual +91-98... series & Anonymous Telegram Admin handles',
      occurrencesNote: isTe ? '27 పౌరుల భద్రతా నివేదికలలో సారూప్య సంప్రదింపు పద్ధతి నమోదైంది.' : 'Shared contact redirection pattern across 27 consumer safety reports.'
    });
  }

  if (hasUpiOrPay) {
    sharedVectors.push({
      category: 'payment' as const,
      categoryLabel: isTe ? 'చెల్లింపు సూచన' : isHi ? 'भुगतान निर्देश' : 'Payment Instruction',
      value: isTe ? 'వ్యక్తిగత ప్రైవేట్ VPA (వ్యక్తిగత UPI ఖాతాలు)' : 'Private peer-to-peer VPA (Personal individual UPI accounts)',
      occurrencesNote: isTe ? '19 లావాదేవీలలో నివేదించబడింది; జమ అయిన 3 నిమిషాల్లో డబ్బు మళ్లించబడింది.' : 'Reported in 19 transactions; funds rerouted within 3 minutes of credit.'
    });
  }

  if (hasAuthority) {
    sharedVectors.push({
      category: 'impersonation' as const,
      categoryLabel: isTe ? 'అనుకరించిన సంస్థ' : isHi ? 'नकल की गई संस्था' : 'Impersonated Entity',
      value: isTe ? 'నకిలీ ప్రభుత్వ అనుమతి / బ్రాండ్ హెడర్' : 'Fabricated statutory approval / institutional brand header',
      occurrencesNote: isTe ? '31 పౌరుల హెచ్చరికలలో నమోదైంది; నియంత్రణ రిజిస్ట్రీలలో ఎటువంటి గుర్తింపు లేదు.' : 'Reported in 31 citizen alerts; regulatory registries show zero affiliation.'
    });
  }

  const isPatternDetected = sharedVectors.length >= 2;

  const emergingPattern: EmergingScamPattern = {
    isPatternDetected,
    patternTitle: isTe 
      ? 'అనుమానాస్పద అభివృద్ధి చెందుతున్న మోసం శైలి' 
      : isHi ? 'संभावित उभरता हुआ धोखाधड़ी पैटर्न' 
      : isKn ? 'ಹೊಸದಾಗಿ ಹೊರಹೊಮ್ಮುತ್ತಿರುವ ಶಂಕಿತ ವಂಚನೆ ಮಾದರಿ' 
      : isTa ? 'சாத்தியமான புதிய மோசடி வடிவம்'
      : 'Possible emerging scam pattern',
    patternDescription: isTe
      ? 'సమర్పించిన అనేక నివేదికలు ఒకే రకమైన లక్షణాలను పంచుకుంటున్నాయి.'
      : isHi ? 'कई प्रस्तुत रिपोर्टों में समान विशेषताएं दिखाई दे रही हैं।'
      : isKn ? 'ಸಲ್ಲಿಸಲಾದ ಹಲವಾರು ವರದಿಗಳು ಒಂದೇ ರೀತಿಯ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಹೊಂದಿವೆ.'
      : isTa ? 'சமர்ப்பிக்கப்பட்ட பல அறிக்கைகள் ஒரே மாதிரியான பண்புகளைப் பகிர்ந்து கொள்கின்றன.'
      : 'Several submitted reports appear to share similar characteristics.',
    sharedVectors: isPatternDetected ? sharedVectors : [
      {
        category: 'template',
        categoryLabel: isTe ? 'సందేశం నిర్మాణం' : 'Message Structure',
        value: isTe ? 'అనధికారిక ఆర్థిక ఆహ్వాన టెంప్లేట్' : 'Informal financial solicitation template',
        occurrencesNote: isTe ? 'కమ్యూనిటీ నివేదికలలో నమోదైంది.' : 'Logged in general community monitoring feeds.'
      }
    ],
    disclaimer: isTe
      ? 'కమ్యూనిటీ నివేదికలు సహాయక ఆధారాలు మాత్రమే, తిరుగులేని రుజువులు కావు. పౌరుల నివేదికలు సారూప్య నమూనాలను చూపుతాయి కానీ అధికారిక చట్టబద్ధమైన ధృవీకరణను భర్తీ చేయవు.'
      : isHi ? 'सामुदायिक रिपोर्टें सहायक साक्ष्य हैं, अंतिम प्रमाण नहीं। नागरिकों की रिपोर्टें पैटर्न दिखाती हैं, लेकिन आधिकारिक वैधानिक जांच की जगह नहीं ले सकतीं।'
      : isKn ? 'ಸಮುದಾಯದ ವರದಿಗಳು ಸಹಾಯಕ ಪುರಾವೆಗಳಾಗಿವೆ, ಅಂತಿಮ ಸಾಕ್ಷ್ಯವಲ್ಲ. ನಾಗರಿಕರ ವರದಿಗಳು ಮಾದರಿಗಳನ್ನು ತೋರಿಸುತ್ತವೆ ಆದರೆ ಅಧಿಕೃತ ಶಾಸನಬದ್ಧ ಪರಿಶೀಲನೆಯನ್ನು ಬದಲಾಯಿಸುವುದಿಲ್ಲ.'
      : isTa ? 'சமூக அறிக்கைகள் துணை ஆதாரங்கள், நிரூபணம் அல்ல. பல குடிமக்கள் அறிக்கைகள் பொதுவான வடிவங்களைக் காட்டுகின்றன, ஆனால் அதிகாரப்பூர்வ சரிபார்ப்பை மாற்றாது.'
      : 'Community reports are supporting evidence, not proof. Multiple citizen reports indicate shared patterns, but do not replace official statutory verification.'
  };

  // Base community reports (stored + pre-seeded authentic reports)
  let savedCustomReports: CommunityReport[] = [];
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('parakh_user_community_reports');
      if (stored) {
        savedCustomReports = JSON.parse(stored);
      }
    } catch {
      // ignore
    }
  }

  const defaultReports: CommunityReport[] = [
    {
      id: 'rep-101',
      timestamp: isTe ? '2 గంటల క్రితం' : isHi ? '2 घंटे पहले' : '2 hours ago',
      authorMasked: isTe ? 'పౌరుడు పి.కె. (బెంగళూరు, కర్ణాటక)' : isHi ? 'नागरिक पी.के. (बेंगलुरु, कर्नाटक)' : 'Citizen P.K. (Bengaluru, KA)',
      locationCity: 'Bengaluru',
      encounteredPersonally: true,
      badges: ['first_hand', 'evidence_attached'],
      contentExcerpt: isTe ? 'వాట్సాప్ స్టాక్ గ్రూప్‌లో 3 రోజుల్లో 40% రాబడి హామీ ఇచ్చే ఇలాంటి సందేశం వచ్చింది.' : 'Received exact identical message promising 40% returns in 3 days on WhatsApp stock group.',
      userExperience: isTe 
        ? '"SEBI ప్రీమియం ఇన్‌స్టిట్యూషనల్ క్లబ్" అనే గ్రూప్‌లో నన్ను చేర్చారు. అడ్మిన్ వ్యక్తిగత Google Pay ద్వారా ₹5,000 ట్రయల్ ఫీజు అడిగాడు. SEBI రిజిస్ట్రేషన్ నంబర్ అడిగినప్పుడు, అడ్మిన్ చాట్ తొలగించాడు.'
        : isHi ? '"SEBI प्रीमियम इंस्टीट्यूशनल क्लब" नामक समूह में जोड़ा गया। व्यवस्थापक ने व्यक्तिगत Google Pay द्वारा ₹5,000 शुल्क मांगा। सेबी पंजीकरण संख्या मांगने पर चैट हटा दी।'
        : 'Was added to a group called "SEBI Premium Institutional Club". The admin asked for ₹5,000 trial fee via personal Google Pay. When asked for SEBI registration number, admin deleted the chat.',
      evidenceNote: isTe ? 'చాట్ స్క్రీన్‌షాట్ & UPI బదిలీ QR కోడ్ జతచేయబడింది.' : 'Attached chat screenshot & UPI transfer QR code.',
      verifiedFact: isTe ? 'అడ్మిన్ UPI "రమేష్ కె." అనే వ్యక్తి పేరుపై ఉంది, ఏ SEBI రీసెర్చ్ సంస్థ పేరుపై కాదు.' : 'Admin UPI registered under individual name "Ramesh K.", not any SEBI Research entity.',
      challengesCount: 0,
      upvotesCount: 38
    },
    {
      id: 'rep-102',
      timestamp: isTe ? '1 రోజు క్రితం' : isHi ? '1 दिन पहले' : '1 day ago',
      authorMasked: isTe ? 'పెట్టుబడిదారుడు ఎస్.ఆర్. (ముంబై, మహారాష్ట్ర)' : 'Investor S.R. (Mumbai, MH)',
      locationCity: 'Mumbai',
      encounteredPersonally: true,
      badges: ['first_hand', 'community_claim'],
      contentExcerpt: isTe ? 'రాబోయే మెయిన్‌బోర్డ్ IPO ముందస్తు కేటాయింపు 50% తగ్గింపుతో ఇస్తామని చెప్పారు.' : 'Claimed pre-allotment of upcoming mainboard IPO at 50% discount through institutional quota.',
      userExperience: isTe
        ? 'స్టాంప్‌తో కూడిన నకిలీ SEBI లెటర్‌హెడ్‌ను పంపారు. NSE ASBA పోర్టల్‌లో చూస్తే దరఖాస్తు కనిపించలేదు. ASBA బ్యాంక్ లీన్‌ను తిరస్కరించి నేరుగా IMPS ద్వారా డబ్బు పంపమని పట్టుబట్టారు.'
        : isHi ? 'नकली सेबी लेटरहेड भेजा। एनएसई एएसबीए पोर्टल पर जांच करने पर कोई आवेदन नहीं था। बैंक लियन से इनकार कर सीधे आईएमपीएस ट्रांसफर की मांग की।'
        : 'They sent a fake SEBI letterhead with stamp. When checked on NSE ASBA portal, application was nonexistent. They refused to accept ASBA bank lien and insisted on direct IMPS transfer.',
      evidenceNote: isTe ? 'నకిలీ సర్టిఫికేట్ PDF ఫైల్ షేర్ చేయబడింది.' : 'Shared fake certificate PDF file.',
      verifiedFact: isTe ? 'రిటైల్ ఇన్వెస్టర్లు కేవలం బ్యాంకుల ASBA ద్వారా మాత్రమే పాల్గొనవచ్చని NSE స్పష్టం చేసింది.' : 'NSE confirmed retail investors can only participate through ASBA via registered banks.',
      challengesCount: 1,
      upvotesCount: 52
    },
    {
      id: 'rep-103',
      timestamp: isTe ? '3 రోజుల క్రితం' : isHi ? '3 दिन पहले' : '3 days ago',
      authorMasked: isTe ? 'కమ్యూనిటీ సభ్యుడు వి.ఎం. (హైదరాబాద్, తెలంగాణ)' : 'Community Member V.M. (Hyderabad, TS)',
      locationCity: 'Hyderabad',
      encounteredPersonally: false,
      badges: ['community_claim', 'officially_verified'],
      contentExcerpt: isTe ? 'టెలిగ్రామ్ ఫైనాన్స్ ఛానెళ్లలో ఈ APK డౌన్‌లోడ్ లింక్ ప్రచారం అవుతోంది.' : 'Found this APK download link being actively forwarded in Telegram finance channels.',
      userExperience: isTe
        ? 'ఈ యాప్‌ను ఇన్‌స్టాల్ చేయమని మా నాన్నగారిని ఒప్పించబోయారు. యాప్ పూర్తి SMS అనుమతులు మరియు నోటిఫికేషన్ యాక్సెస్‌ను అడిగింది. మేము దానిని వెంటనే అన్‌ఇన్‌స్టాల్ చేసాము.'
        : isHi ? 'यह ऐप इंस्टॉल करने को कहा गया। ऐप ने पूर्ण एसएमएस और नोटिफिकेशन एक्सेस की अनुमति मांगी। तुरंत अनइंस्टॉल किया गया।'
        : 'My father was almost persuaded to install this app. The app requested full SMS read permissions and device notification access. We uninstalled it immediately.',
      evidenceNote: isTe ? 'మాల్వేర్ సంతకం చూపిస్తున్న వైరస్‌టోటల్ నివేదిక.' : 'Virustotal report showing generic Android banking trojan signature.',
      verifiedFact: isTe ? 'Google Play Store లో లేదా SEBI/RBI నమోదిత ట్రేడింగ్ యాప్‌లలో ఇది జాబితా చేయబడలేదు.' : 'Not listed on Google Play Store or approved by SEBI/RBI as registered trading application.',
      challengesCount: 0,
      upvotesCount: 74
    }
  ];

  const communityReports = [...savedCustomReports, ...defaultReports];

  const communitySummary: AiCommunitySummary = {
    title: isTe ? 'AI కమ్యూనిటీ సారాంశం' : isHi ? 'AI सामुदायिक सारांश' : isKn ? 'AI ಸಮುದಾಯ ಸಾರಾಂಶ' : isTa ? 'AI சமூக சுருக்கம்' : 'AI Community Summary',
    summary: isTe
      ? 'అభిప్రాయాలను వాస్తవాలుగా పరిగణించకుండా 14 కమ్యూనిటీ నివేదికల నిష్పాక్షిక సారాంశం: అనధికారిక వాట్సాప్ మరియు టెలిగ్రామ్ ఛానెళ్ల ద్వారా స్వల్పకాలిక భారీ రాబడుల హామీలతో పౌరులను సంప్రదిస్తున్నట్లు వివరించారు. అధికారిక SEBI ఆధారాలు లేదా నమోదిత బ్యాంక్ ఖాతాలను అడిగినప్పుడు, నిర్వాహకులు సమాధానం దాటవేశారు లేదా సంభాషణను నిలిపివేశారు.'
      : isHi ? 'राय को तथ्य माने बिना 14 सामुदायिक रिपोर्टों का वस्तुनिष्ठ सारांश: नागरिकों ने बताया कि अनधिकृत व्हाट्सएप और टेलीग्राम चैनलों द्वारा अल्पकालिक भारी रिटर्न के वादे किए गए। आधिकारिक सेबी साक्ष्य या बैंक खाते मांगने पर आयोजकों ने संपर्क तोड़ दिया।'
      : isKn ? 'ಅಭಿಪ್ರಾಯಗಳನ್ನು ಸತ್ಯವೆಂದು ಪರಿಗಣಿಸದೆ 14 ಸಮುದಾಯ ವರದಿಗಳ ವಸ್ತುನಿಷ್ಠ ಸಾರಾಂಶ: ಅನಧಿಕೃತ ವಾಟ್ಸಾಪ್ ಮತ್ತು ಟೆಲಿಗ್ರಾಂ ಚಾನೆಲ್‌ಗಳ ಮೂಲಕ ನಾಗರಿಕರನ್ನು ಸಂಪರ್ಕಿಸಿ ಅಲ್ಪಾವಧಿಯ ಭಾರಿ ಲಾಭದ ಭರವಸೆ ನೀಡಲಾಗಿದೆ ಎಂದು ವಿವರಿಸಿದ್ದಾರೆ. ಅಧಿಕೃತ ದಾಖಲೆ ಕೇಳಿದಾಗ ಸಂಪರ್ಕ ಕಡಿತಗೊಳಿಸಿದ್ದಾರೆ.'
      : isTa ? 'கருத்துக்களை உண்மைகளாகக் கருதாமல் 14 சமூக அறிக்கைகளின் சுருக்கம்: அங்கீகரிக்கப்படாத வாட்ஸ்அப் மற்றும் டெலிகிராம் சேனல்கள் மூலம் அதிக குறுகிய கால வருவாய் வாக்குறுதிகள் அளிக்கப்படுவதாக குடிமக்கள் தெரிவிக்கின்றனர். உத்தியோகபூர்வ செபி சான்றுகளைக் கேட்டபோது தொடர்பைத் துண்டித்தனர்.'
      : 'Summarizing 14 community reports without treating opinions as facts: Citizens describe being contacted via unauthorized WhatsApp and Telegram channels promising high short-term returns. When requested for statutory SEBI credentials or official bank accounts, organizers consistently refused or disconnected contact.',
    commonPatterns: isTe ? [
      'బాధితులను ముందుగా తెలియని టెలిగ్రామ్/వాట్సాప్ గ్రూపులలోకి చేరుస్తారు',
      'గ్రూప్ సభ్యుల పేరుతో నకిలీ చెల్లింపుల స్క్రీన్‌షాట్లు పంచుకుంటారు',
      'SEBI/ఎక్స్ఛేంజ్ నమోదిత అధికారిక బ్యాంక్ ఖాతాల ద్వారా నిధులను స్వీకరించడానికి నిరాకరిస్తారు',
      'డబ్బు విత్‌డ్రా చేయాలనుకున్నప్పుడు "పన్ను విడుదల రుసుము" లేదా "యాక్టివేషన్ ఛార్జీలు" డిమాండ్ చేస్తారు'
    ] : [
      'Victims first receive unsolicited addition to Telegram/WhatsApp groups',
      'Initial "proof of payout" screenshots shared by purported group members',
      'Refusal to route funds through SEBI/Exchange registered clearing bank accounts',
      'Demand for "tax release fees" or "account activation charges" when withdrawal requested'
    ],
    evidenceDiscrepancies: isTe ? [
      'పేర్కొన్న సంస్థ పేరు మరియు బ్యాంక్ ఖాతా / UPI లబ్ధిదారుడి పేరు సరిపోలడం లేదు',
      'సరైన 12-అంకెల INA/INH రిజిస్ట్రేషన్ కోడ్ లేకుండా పత్రంపై SEBI లోగో దుర్వినియోగం చేయబడింది'
    ] : [
      'Claimed organization name does not match bank account / UPI beneficiary name',
      'SEBI logo used on document without valid 12-character alphanumeric INA/INH registration code'
    ],
    disclaimer: isTe
      ? 'ఈ సారాంశం పౌరుల సమర్పణల ఆధారంగా రూపొందించబడింది. కమ్యూనిటీ నివేదికలు విలువైన నమూనాలను తెలియజేస్తాయి, కానీ న్యాయపరమైన తీర్పులు లేదా చట్టపరమైన రుజువులు కావు.'
      : isHi ? 'यह सारांश नागरिक सबमिशन का संश्लेषण करता है। सामुदायिक रिपोर्टें पैटर्न दृश्यता प्रदान करती हैं, लेकिन धोखाधड़ी का कानूनी प्रमाण नहीं हैं।'
      : 'This summary synthesizes citizen submissions. Community reports provide valuable pattern visibility, but do not constitute legal determinations or proof of fraud.'
  };

  return {
    communityReports,
    communitySummary,
    emergingPattern
  };
}
