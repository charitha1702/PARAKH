import { Language } from '../types/analysis';

export interface LocalizedOfficialRegistry {
  id: string;
  name: string;
  authority: string;
  category: 'regulatory' | 'enforcement' | 'corporate' | 'exchange';
  badge: string;
  description: string;
  howToVerify: string[];
  url: string;
  hotline?: string;
  verificationStepsHint: string;
}

export const OFFICIAL_REGISTRIES: Partial<Record<Language, LocalizedOfficialRegistry[]>> & Record<'en', LocalizedOfficialRegistry[]> = {
  en: [
    {
      id: 'sebi-intermediaries',
      name: 'SEBI Recognized Intermediaries Portal',
      authority: 'Securities and Exchange Board of India (SEBI)',
      category: 'regulatory',
      badge: 'Statutory Regulator',
      description: 'Verify if an individual, advisory firm, research analyst, or stockbroker is legally authorized by SEBI to offer financial advice in India.',
      howToVerify: [
        'Ask the advisor for their 10-character SEBI Registration Number (e.g., INH000012345 or INA000012345).',
        'Search the registration number directly on SEBI’s official portal.',
        'Check if the registered name and office address match the individual contacting you.',
        'Note: Regulated Research Analysts are strictly prohibited from offering assured or guaranteed returns.'
      ],
      url: 'https://www.sebi.gov.in/intermediaries.html',
      verificationStepsHint: 'Go to SEBI.gov.in > Intermediaries > Recognized Intermediaries > Search by Registration Number'
    },
    {
      id: 'rbi-sachet',
      name: 'RBI Sachet Portal (Unregulated Deposit Schemes)',
      authority: 'Reserve Bank of India (RBI)',
      category: 'regulatory',
      badge: 'Central Bank Portal',
      description: 'Track unauthorized deposit-taking entities, fake loan apps, and unregistered chit funds. Verify whether an entity is permitted to accept public funds.',
      howToVerify: [
        'Search company name on the Sachet Registry of Regulated Entities.',
        'Check whether the firm holds an NBFC (Non-Banking Financial Company) license.',
        'Report any unregistered entity collecting deposits or promising high fixed interest.'
      ],
      url: 'https://sachet.rbi.org.in/',
      hotline: '14440 (RBI Customer Awareness Helpline)',
      verificationStepsHint: 'Check Sachet.rbi.org.in > Registered Entities directory'
    },
    {
      id: 'cybercrime-helpline',
      name: 'National Cyber Crime Reporting Portal (I4C)',
      authority: 'Ministry of Home Affairs (MHA)',
      category: 'enforcement',
      badge: 'National Security & Helpline',
      description: 'Immediate financial fraud freezing and formal complaint registration for online investment scams, UPI fraud, and banking phishing.',
      howToVerify: [
        'Call emergency cyber helpline 1930 within the golden hour (first 2-4 hours) if funds were transferred.',
        'Report online at cybercrime.gov.in with transaction ID, beneficiary UPI handle, and screenshots.',
        'Bank nodal officers coordinate directly through I4C to freeze money in recipient accounts.'
      ],
      url: 'https://cybercrime.gov.in/',
      hotline: '1930 (Toll-Free National Helpline)',
      verificationStepsHint: 'Direct registration at cybercrime.gov.in or immediate phone call to 1930'
    },
    {
      id: 'mca-masterdata',
      name: 'MCA21 Company Master Data Registry',
      authority: 'Ministry of Corporate Affairs (MCA)',
      category: 'corporate',
      badge: 'Company Incorporation Registry',
      description: 'Verify if a company claiming to offer institutional investment services actually exists as an incorporated legal entity in India.',
      howToVerify: [
        'Search Corporate Identity Number (CIN) or registered company name.',
        'Verify paid-up capital, date of incorporation, registered address, and official directors.',
        'Ensure the bank account you are asked to pay into matches the exact registered corporate name.'
      ],
      url: 'https://www.mca.gov.in/content/mca/global/en/home.html',
      verificationStepsHint: 'MCA.gov.in > MCA Services > Master Data > View Company Master Data'
    }
  ],

  kn: [
    {
      id: 'sebi-intermediaries',
      name: 'SEBI ಮಾನ್ಯತೆ ಪಡೆದ ಮಧ್ಯವರ್ತಿಗಳ ಪೋರ್ಟಲ್',
      authority: 'ಸೆಕ್ಯುರಿಟೀಸ್ ಅಂಡ್ ಎಕ್ಸ್‌ಚೇಂಜ್ ಬೋರ್ಡ್ ಆಫ್ ಇಂಡಿಯಾ (SEBI)',
      category: 'regulatory',
      badge: 'ಶಾಸನಬದ್ಧ ನಿಯಂತ್ರಕ',
      description: 'ಯಾವುದೇ ಸಲಹಾ ಸಂಸ್ಥೆ, ರಿಸರ್ಚ್ ಅನಲಿಸ್ಟ್ ಅಥವಾ ಸ್ಟಾಕ್‌ಬ್ರೋಕರ್ ಭಾರತದಲ್ಲಿ ಹಣಕಾಸು ಸಲಹೆ ನೀಡಲು SEBI ಯಿಂದ ಕಾನೂನುಬದ್ಧ ಪರವಾನಗಿ ಹೊಂದಿದ್ದಾರೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.',
      howToVerify: [
        'ಸಲಹೆಗಾರರಿಂದ ಅವರ 10-ಅಕ್ಷರಗಳ SEBI ನೋಂದಣಿ ಸಂಖ್ಯೆಯನ್ನು (ಉದಾ: INH000012345) ಕೇಳಿ.',
        'ನೋಂದಣಿ ಸಂಖ್ಯೆಯನ್ನು ನೇರವಾಗಿ SEBI ಯ ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ.',
        'ನೋಂದಾಯಿತ ಹೆಸರು ಮತ್ತು ವಿಳಾಸವು ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿದ ವ್ಯಕ್ತಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.',
        'ಗಮನಿಸಿ: ಅಧಿಕೃತ ರಿಸರ್ಚ್ ಅನಲಿಸ್ಟ್‌ಗಳು ಗ್ಯಾರಂಟಿ ಲಾಭದ ಭರವಸೆ ನೀಡುವುದನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧಿಸಲಾಗಿದೆ.'
      ],
      url: 'https://www.sebi.gov.in/intermediaries.html',
      verificationStepsHint: 'SEBI.gov.in > Intermediaries > Recognized Intermediaries > ನೋಂದಣಿ ಸಂಖ್ಯೆ ಮೂಲಕ ಹುಡುಕಿ'
    },
    {
      id: 'rbi-sachet',
      name: 'RBI ಸಚೇತ್ ಪೋರ್ಟಲ್ (ಅನಧಿಕೃತ ಠೇವಣಿ ಯೋಜನೆಗಳು)',
      authority: 'ರಿಸರ್ವ್ ಬ್ಯಾಂಕ್ ಆಫ್ ಇಂಡಿಯಾ (RBI)',
      category: 'regulatory',
      badge: 'ಕೇಂದ್ರ ಬ್ಯಾಂಕ್ ಪೋರ್ಟಲ್',
      description: 'ಅನಧಿಕೃತ ಠೇವಣಿ ಸಂಗ್ರಹ ಸಂಸ್ಥೆಗಳು, ನಕಲಿ ಲೋನ್ ಆ್ಯಪ್‌ಗಳು ಮತ್ತು ನೋಂದಣಿಯಾಗದ ಚಿಟ್‌ಫಂಡ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.',
      howToVerify: [
        'ಸಚೇತ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಕಂಪನಿಯ ಹೆಸರು ನೋಂದಾಯಿತ ಸಂಸ್ಥೆಗಳ ಪಟ್ಟಿಯಲ್ಲಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.',
        'ಸಂಸ್ಥೆಯು NBFC (ಬ್ಯಾಂಕೇತರ ಹಣಕಾಸು ಸಂಸ್ಥೆ) ಪರವಾನಗಿ ಹೊಂದಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.',
        'ಅಧಿಕೃತವಲ್ಲದೆ ಠೇವಣಿ ಸಂಗ್ರಹಿಸುವ ಅಥವಾ ಹೆಚ್ಚಿನ ಬಡ್ಡಿದರ ಭರವಸೆ ನೀಡುವ ಸಂಸ್ಥೆಗಳ ಬಗ್ಗೆ ವರದಿ ಮಾಡಿ.'
      ],
      url: 'https://sachet.rbi.org.in/',
      hotline: '14440 (RBI ಗ್ರಾಹಕ ಜಾಗೃತಿ ಹೆಲ್ಪ್‌ಲೈನ್)',
      verificationStepsHint: 'Sachet.rbi.org.in > Registered Entities ಪಟ್ಟಿ ಪರಿಶೀಲಿಸಿ'
    },
    {
      id: 'cybercrime-helpline',
      name: 'ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಅಪರಾಧ ವರದಿ ಪೋರ್ಟಲ್ (I4C)',
      authority: 'ಗೃಹ ಸಚಿವಾಲಯ (MHA)',
      category: 'enforcement',
      badge: 'ರಾಷ್ಟ್ರೀಯ ಸುರಕ್ಷತೆ & ಹೆಲ್ಪ್‌ಲೈನ್',
      description: 'ಆನ್‌ಲೈನ್ ಹೂಡಿಕೆ ವಂಚನೆ, UPI ವಂಚನೆ ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್ ಸೈಬರ್ ಅಪರಾಧಗಳ ತಕ್ಷಣದ ತಡೆ ಮತ್ತು ದೂರು ನೋಂದಣಿ.',
      howToVerify: [
        'ಹಣ ಕಳುಹಿಸಿದ ಮೊದಲ 2-4 ಗಂಟೆಗಳಲ್ಲಿ (ಗೋಲ್ಡನ್ ಅವರ್) ತಕ್ಷಣ 1930 ತುರ್ತು ಹೆಲ್ಪ್‌ಲೈನ್‌ಗೆ ಕರೆ ಮಾಡಿ.',
        'ವಹಿವಾಟಿನ ಐಡಿ, ಸ್ವೀಕರಿಸಿದವರ UPI ವಿಳಾಸ ಮತ್ತು ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳೊಂದಿಗೆ cybercrime.gov.in ನಲ್ಲಿ ದೂರು ದಾಖಲಿಸಿ.',
        'ಬ್ಯಾಂಕ್ ಅಧಿಕಾರಿಗಳು ತಕ್ಷಣ ವಂಚಕರ ಖಾತೆಯಲ್ಲಿರುವ ಹಣವನ್ನು ಫ್ರೀಜ್ ಮಾಡಲು ಸಮನ್ವಯ ಸಾಧಿಸುತ್ತಾರೆ.'
      ],
      url: 'https://cybercrime.gov.in/',
      hotline: '1930 (ಟೋಲ್-ಫ್ರೀ ರಾಷ್ಟ್ರೀಯ ಹೆಲ್ಪ್‌ಲೈನ್)',
      verificationStepsHint: 'cybercrime.gov.in ನಲ್ಲಿ ನೇರ ದೂರು ಅಥವಾ ತಕ್ಷಣ 1930 ಗೆ ಕರೆ ಮಾಡಿ'
    },
    {
      id: 'mca-masterdata',
      name: 'MCA21 ಕಂಪನಿ ಮಾಸ್ಟರ್ ಡೇಟಾ ರಿಜಿಸ್ಟ್ರಿ',
      authority: 'ಕಾರ್ಪೊರೇಟ್ ವ್ಯವಹಾರಗಳ ಸಚಿವಾಲಯ (MCA)',
      category: 'corporate',
      badge: 'ಕಂಪನಿ ನೋಂದಣಿ ದಾಖಲೆ',
      description: 'ಹೂಡಿಕೆ ಸೇವೆಗಳನ್ನು ನೀಡುವ ಕಂಪನಿಯು ಭಾರತದಲ್ಲಿ ಕಾನೂನುಬದ್ಧವಾಗಿ ನೋಂದಾಯಿತ ಕಂಪನಿಯಾಗಿ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.',
      howToVerify: [
        'ಕಂಪನಿಯ CIN ಸಂಖ್ಯೆ ಅಥವಾ ನೋಂದಾಯಿತ ಹೆಸರನ್ನು ಹುಡುಕಿ.',
        'ಬಂಡವಾಳ, ನೋಂದಣಿ ದಿನಾಂಕ, ಅಧಿಕೃತ ವಿಳಾಸ ಮತ್ತು ನಿರ್ದೇಶಕರ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.',
        'ನೀವು ಹಣ ಪಾವತಿಸಲು ಕೇಳಲಾದ ಬ್ಯಾಂಕ್ ಖಾತೆಯು ಕಂಪನಿಯ ಅಧಿಕೃತ ನೋಂದಾಯಿತ ಹೆಸರಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.'
      ],
      url: 'https://www.mca.gov.in/content/mca/global/en/home.html',
      verificationStepsHint: 'MCA.gov.in > MCA Services > Master Data > View Company Master Data'
    }
  ],

  hi: [
    {
      id: 'sebi-intermediaries',
      name: 'SEBI मान्यता प्राप्त मध्यस्थ पोर्टल',
      authority: 'भारतीय प्रतिभूति और विनिमय बोर्ड (SEBI)',
      category: 'regulatory',
      badge: 'वैधानिक नियामक',
      description: 'जाँचें कि क्या कोई व्यक्ति, सलाहकार फर्म, रिसर्च एनालिस्ट या स्टॉकब्रोकर भारत में वित्तीय सलाह देने के लिए सेबी द्वारा कानूनी रूप से अधिकृत है।',
      howToVerify: [
        'सलाहकार से उनका 10-अंकीय सेबी पंजीकरण नंबर (जैसे: INH000012345) मांगें।',
        'पंजीकरण संख्या को सीधे सेबी के आधिकारिक पोर्टल पर खोजें।',
        'जाँचें कि पंजीकृत नाम और कार्यालय का पता संपर्क करने वाले व्यक्ति से मेल खाता है या नहीं।',
        'ध्यान दें: अधिकृत रिसर्च एनालिस्टों को गारंटीड रिटर्न का वादा करने की सख्त मनाही है।'
      ],
      url: 'https://www.sebi.gov.in/intermediaries.html',
      verificationStepsHint: 'SEBI.gov.in > Intermediaries > Recognized Intermediaries > पंजीकरण संख्या द्वारा खोजें'
    },
    {
      id: 'rbi-sachet',
      name: 'RBI सचेत पोर्टल (अनियमित जमा योजनाएं)',
      authority: 'भारतीय रिज़र्व बैंक (RBI)',
      category: 'regulatory',
      badge: 'केंद्रीय बैंक पोर्टल',
      description: 'अनधिकृत जमा स्वीकार करने वाली संस्थाओं, फर्जी ऋण ऐप और अपंजीकृत चिट फंडों की जांच करें।',
      howToVerify: [
        'सचेत पोर्टल पर कंपनी का नाम पंजीकृत संस्थाओं की सूची में खोजें।',
        'जाँचें कि क्या फर्म के पास एनबीएफसी (गैर-बैंकिंग वित्तीय कंपनी) लाइसेंस है।',
        'अनधिकृत रूप से जमा स्वीकार करने वाली या उच्च ब्याज का वादा करने वाली संस्थाओं की रिपोर्ट करें।'
      ],
      url: 'https://sachet.rbi.org.in/',
      hotline: '14440 (RBI ग्राहक जागरूकता हेल्पलाइन)',
      verificationStepsHint: 'Sachet.rbi.org.in > Registered Entities सूची देखें'
    },
    {
      id: 'cybercrime-helpline',
      name: 'राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल (I4C)',
      authority: 'गृह मंत्रालय (MHA)',
      category: 'enforcement',
      badge: 'राष्ट्रीय सुरक्षा & हेल्पलाइन',
      description: 'ऑनलाइन निवेश धोखाधड़ी, यूपीआई धोखाधड़ी और बैंकिंग फ़िशिंग के लिए तत्काल वित्तीय रोक और शिकायत पंजीकरण।',
      howToVerify: [
        'पैसे ट्रांसफर होने के 2-4 घंटे के भीतर (गोल्डन आवर) तुरंत आपातकालीन हेल्पलाइन 1930 पर कॉल करें।',
        'लेनदेन आईडी, लाभार्थी यूपीआई और स्क्रीनशॉट के साथ cybercrime.gov.in पर रिपोर्ट करें।',
        'बैंक नोडल अधिकारी प्राप्तकर्ता खातों में पैसे फ्रीज करने के लिए तुरंत समन्वय करते हैं।'
      ],
      url: 'https://cybercrime.gov.in/',
      hotline: '1930 (टोल-फ्री राष्ट्रीय हेल्पलाइन)',
      verificationStepsHint: 'cybercrime.gov.in पर ऑनलाइन पंजीकरण या तुरंत 1930 पर कॉल करें'
    },
    {
      id: 'mca-masterdata',
      name: 'MCA21 कंपनी मास्टर डेटा रजिस्ट्री',
      authority: 'कॉर्पोरेट कार्य मंत्रालय (MCA)',
      category: 'corporate',
      badge: 'कंपनी निगमन रजिस्टर',
      description: 'जाँचें कि संस्थागत निवेश सेवाओं का दावा करने वाली कंपनी वास्तव में भारत में निगमित कानूनी इकाई के रूप में मौजूद है या नहीं।',
      howToVerify: [
        'कॉर्पोरेट पहचान संख्या (CIN) या पंजीकृत कंपनी का नाम खोजें।',
        'पूंजी, निगमन तिथि, पंजीकृत पता और आधिकारिक निदेशकों का सत्यापन करें।',
        'सुनिश्चित करें कि भुगतान के लिए दिया गया बैंक खाता पंजीकृत कॉर्पोरेट नाम से मेल खाता है।'
      ],
      url: 'https://www.mca.gov.in/content/mca/global/en/home.html',
      verificationStepsHint: 'MCA.gov.in > MCA Services > Master Data > View Company Master Data'
    }
  ],

  te: [
    {
      id: 'sebi-intermediaries',
      name: 'SEBI గుర్తింపు పొందిన మధ్యవర్తుల పోర్టల్',
      authority: 'సెక్యూరిటీస్ అండ్ ఎక్స్ఛేంజ్ బోర్డ్ ఆఫ్ ఇండియా (SEBI)',
      category: 'regulatory',
      badge: 'చట్టబద్ధమైన నియంత్రణ సంస్థ',
      description: 'ఏదైనా సలహా సంస్థ, రీసెర్చ్ అనలిస్ట్ లేదా స్టాక్‌బ్రోకర్ భారతదేశంలో ఆర్థిక సలహాలు ఇవ్వడానికి సెబీ లైసెన్స్ కలిగి ఉన్నారో లేదో ధృవీకరించండి.',
      howToVerify: [
        'సలహాదారుని వారి 10-అక్షరాల సెబీ రిజిస్ట్రేషన్ నంబర్‌ను (ఉదా: INH000012345) అడగండి.',
        'రిజిస్ట్రేషన్ నంబర్‌ను నేరుగా సెబీ అధికారిక వెబ్‌సైట్‌లో శోధించండి.',
        'నమోదిత పేరు మరియు కార్యాలయ చిరునామా మిమ్మల్ని సంప్రదించిన వ్యక్తితో సరిపోలుతున్నాయో లేదో నిర్ధారించుకోండి.',
        'గమనిక: గుర్తింపు పొందిన రీసెర్చ్ అనలిస్ట్‌లు గ్యారెంటీ లాభాల వాగ్దానం చేయడం ఖచ్చితంగా నిషేధించబడింది.'
      ],
      url: 'https://www.sebi.gov.in/intermediaries.html',
      verificationStepsHint: 'SEBI.gov.in > Intermediaries > Recognized Intermediaries > రిజిస్ట్రేషన్ నంబర్ ద్వారా శోధించండి'
    },
    {
      id: 'rbi-sachet',
      name: 'RBI సచేత్ పోర్టల్ (అనధికారిక డిపాజిట్ పథకాలు)',
      authority: 'రిజర్వ్ బ్యాంక్ ఆఫ్ ఇండియా (RBI)',
      category: 'regulatory',
      badge: 'సెంట్రల్ బ్యాంక్ పోర్టల్',
      description: 'అనధికారిక డిపాజిట్ సంస్థలు, నకిలీ లోన్ యాప్‌లు మరియు నమోదుకాని చిట్‌ఫండ్‌లను పరిశీలించండి.',
      howToVerify: [
        'సచేత్ పోర్టల్‌లో నమోదిత సంస్థల జాబితాలో కంపెనీ పేరును శోధించండి.',
        'సంస్థకు NBFC (నాన్-బ్యాంకింగ్ ఫైనాన్షియల్ కంపెనీ) లైసెన్స్ ఉందో లేదో తనిఖీ చేయండి.',
        'అనధికారికంగా డిపాజిట్లు సేకరిస్తున్న లేదా అధిక వడ్డీ ఆశ చూపే సంస్థల గురించి నివేదించండి.'
      ],
      url: 'https://sachet.rbi.org.in/',
      hotline: '14440 (RBI కస్టమర్ అవగాహన హెల్ప్‌లైన్)',
      verificationStepsHint: 'Sachet.rbi.org.in > Registered Entities డైరెక్టరీని తనిఖీ చేయండి'
    },
    {
      id: 'cybercrime-helpline',
      name: 'జాతీయ సైబర్ క్రైమ్ రిపోర్టింగ్ పోర్టల్ (I4C)',
      authority: 'హోం వ్యవహారాల మంత్రిత్వ శాఖ (MHA)',
      category: 'enforcement',
      badge: 'జాతీయ భద్రత & హెల్ప్‌లైన్',
      description: 'ఆన్‌లైన్ ఇన్వెస్ట్‌మెంట్ మోసాలు, UPI మోసాలు మరియు బ్యాంకింగ్ ఫిషింగ్ కోసం తక్షణ ఆర్థిక నిలుపుదల మరియు ఫిర్యాదు నమోదు.',
      howToVerify: [
        'డబ్బు పంపిన మొదటి 2-4 గంటల్లో (గోల్డెన్ అవర్) వెంటనే 1930 ఎమర్జెన్సీ హెల్ప్‌లైన్‌కు కాల్ చేయండి.',
        'లావాదేవీ ఐడి, అందుకున్న వారి UPI అడ్రస్ మరియు స్క్రీన్‌షాట్‌లతో cybercrime.gov.in లో రిపోర్ట్ చేయండి.',
        'బ్యాంక్ నోడల్ అధికారులు నిందితుల ఖాతాలో ఉన్న డబ్బును స్తంభింపజేయడానికి వెంటనే చర్యలు తీసుకుంటారు.'
      ],
      url: 'https://cybercrime.gov.in/',
      hotline: '1930 (టోల్-ఫ్రీ జాతీయ హెల్ప్‌లైన్)',
      verificationStepsHint: 'cybercrime.gov.in లో నేరుగా నమోదు లేదా వెంటనే 1930 కి కాల్ చేయండి'
    },
    {
      id: 'mca-masterdata',
      name: 'MCA21 కంపెనీ మాస్టర్ డేటా రిజిస్ట్రీ',
      authority: 'కార్పొరేట్ వ్యవహారాల మంత్రిత్వ శాఖ (MCA)',
      category: 'corporate',
      badge: 'కంపెనీ ఇన్కార్పొరేషన్ రికార్డు',
      description: 'పెట్టుబడి సేవలను అందిస్తామని క్లెయిమ్ చేస్తున్న కంపెనీ భారతదేశంలో చట్టబద్ధమైన కార్పొరేట్ సంస్థగా ఉందో లేదో ధృవీకరించండి.',
      howToVerify: [
        'కార్పొరేట్ గుర్తింపు సంఖ్య (CIN) లేదా రిజిస్టర్డ్ కంపెనీ పేరును శోధించండి.',
        'మూలధనం, ఇన్కార్పొరేషన్ తేదీ, రిజిస్టర్డ్ చిరునామా మరియు డైరెక్టర్ల వివరాలను ధృవీకరించండి.',
        'మీరు డబ్బు చెల్లించమని అడిగిన బ్యాంక్ ఖాతా నమోదిత కంపెనీ పేరుతో సరిపోలుతుందని నిర్ధారించుకోండి.'
      ],
      url: 'https://www.mca.gov.in/content/mca/global/en/home.html',
      verificationStepsHint: 'MCA.gov.in > MCA Services > Master Data > View Company Master Data'
    }
  ]
};
