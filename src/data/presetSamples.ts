import { Language, PresetSample } from '../types/analysis';

export interface LocalizedPresetSample extends PresetSample {
  localizedTitle: Record<Language, string>;
  localizedCategory: Record<Language, string>;
}

export const PRESET_SAMPLES: LocalizedPresetSample[] = [
  {
    id: 'sample-stock-advisory',
    title: 'VIP Stock Advisory Group',
    localizedTitle: {
      en: 'VIP Stock Advisory Group',
      kn: 'ವಿಐಪಿ ಷೇರು ಸಲಹಾ ಗ್ರೂಪ್',
      hi: 'वीआईपी स्टॉक एडवाइजरी ग्रुप',
      te: 'వీఐపీ స్టాక్ అడ్వైజరీ గ్రూప్'
    },
    category: 'Stock Tips / Assured Returns',
    localizedCategory: {
      en: 'Stock Tips / Assured Returns',
      kn: 'ಷೇರು ಸಲಹೆಗಳು / ಖಾತರಿ ಲಾಭ',
      hi: 'स्टॉक टिप्स / गारंटीड रिटर्न',
      te: 'స్టాక్ చిట్కాలు / ఖచ్చితమైన లాభాలు'
    },
    type: 'message',
    preview: 'Guaranteed 40% returns monthly, SEBI approved madam, today only offer 5 slots left...',
    content: 'Namaste! VIP Institutional Club: Guaranteed 40% to 60% monthly profit on BankNifty Intraday Calls. SEBI approved research analyst sir. Today only special joining discount: ₹9,999. Only 5 slots remaining for today batch. 100% risk free capital protection guaranteed. Immediately transfer to UPI: profittrader99@ybl and share payment screenshot to claim your slot.'
  },
  {
    id: 'sample-pre-ipo',
    title: 'Pre-IPO Allotment Scam',
    localizedTitle: {
      en: 'Pre-IPO Allotment Scam',
      kn: 'ಪ್ರಿ-ಐಪಿಒ ಹಂಚಿಕೆ ಹಗರಣ',
      hi: 'प्री-आईपीओ आवंटन घोटाला',
      te: 'ప్రీ-ఐపీఓ కేటాయింపు మోసం'
    },
    category: 'Unlisted Shares Fraud',
    localizedCategory: {
      en: 'Unlisted Shares Fraud',
      kn: 'ಅನ್‌ಲಿಸ್ಟೆಡ್ ಷೇರುಗಳ ವಂಚನೆ',
      hi: 'गैर-सूचीबद्ध शेयर धोखाधड़ी',
      te: 'అన్‌లిస్టెడ్ షేర్ల మోసం'
    },
    type: 'message',
    preview: 'Exclusive Pre-IPO quota for retail investors. 100% confirmed allotment before listing...',
    content: 'Exclusive Investor Alert: Confirmed Pre-IPO Institutional Allotment for Reliance Retail & Tata Tech unlisted shares at 65% discounted floor price. Direct demat credit within 24 hours. Minimum subscription 100 shares (₹35,000). Limited quota authorized under BSE/NSE merchant quota. Transfer fund to Designated Clearing Agent account: A/C 91827492019 IFSC: YESB0001092.'
  },
  {
    id: 'sample-part-time-task',
    title: 'YouTube Like / Part-Time Task',
    localizedTitle: {
      en: 'YouTube Like / Part-Time Task',
      kn: 'ಯೂಟ್ಯೂಬ್ ಲೈಕ್ / ಪಾರ್ಟ್-ಟೈಮ್ ಟಾಸ್ಕ್',
      hi: 'यूट्यूब लाइक / पार्ट-टाइम टास्क',
      te: 'యూట్యూబ్ లైక్ / పార్ట్-టైమ్ టాస్క్'
    },
    category: 'Work From Home Task Fraud',
    localizedCategory: {
      en: 'Work From Home Task Fraud',
      kn: 'ವರ್ಕ್ ಫ್ರಂ ಹೋಮ್ ಉದ್ಯೋಗ ವಂಚನೆ',
      hi: 'वर्क फ्रॉम होम टास्क फ्रॉड',
      te: 'వర్క్ ఫ్రమ్ హోమ్ టాస్క్ మోసం'
    },
    type: 'message',
    preview: 'Part-time daily income ₹3000 to ₹5000 by liking videos from home. Instant payout...',
    content: 'Hello! Congratulations your profile was selected for Google/YouTube Digital Review Partner. Earn ₹3,000 to ₹8,000 daily working 30 mins from mobile. Task 1 completed: Received ₹150. For next level merchant tasks, deposit refundable security tier fund of ₹5,000 to get instant return of ₹7,500. Join VIP Telegram manager @task_payout_support now.'
  },
  {
    id: 'sample-kyc-apk',
    title: 'Urgent KYC Suspension & APK',
    localizedTitle: {
      en: 'Urgent KYC Suspension & APK',
      kn: 'ತುರ್ತು KYC ಅಮಾನತು & ನಕಲಿ APK',
      hi: 'आपातकालीन केवाईसी निलंबन & एपीके',
      te: 'అత్యవసర KYC నిలిపివేత & నకిలీ APK'
    },
    category: 'Banking Smishing / Trojan APK',
    localizedCategory: {
      en: 'Banking Smishing / Trojan APK',
      kn: 'ಬ್ಯಾಂಕಿಂಗ್ SMS / ಟ್ರೋಜನ್ APK ವಂಚನೆ',
      hi: 'बैंकिंग एसएमएस / ट्रोजन एपीके',
      te: 'బ్యాంకింగ్ ఎస్ఎంఎస్ / ట్రోజన్ APK మోసం'
    },
    type: 'message',
    preview: 'Dear customer, your bank account will be suspended today at 8 PM. Update PAN card...',
    content: 'Dear Customer, Your SBI / HDFC bank account and netbanking will be permanently suspended today at 8:00 PM due to expired KYC documentation. To avoid account freeze and penalty of ₹10,000, immediately click to install official KYC verification utility: https://sbi-kyc-portal-update.live/utility.apk and submit your Aadhaar OTP.'
  },
  {
    id: 'sample-hinglish-mixed',
    title: 'Code-Mixed Vernacular (Hinglish/Kanglish)',
    localizedTitle: {
      en: 'Code-Mixed Vernacular',
      kn: 'ಸ್ಥಳೀಯ ಮಿಶ್ರ ಭಾಷೆಯ ಸಂದೇಶ',
      hi: 'हिंग्लिश / स्थानीय मिश्रित संदेश',
      te: 'స్థానిక మిశ్రమ భాషా సందేశం'
    },
    category: 'Vernacular Social Engineering',
    localizedCategory: {
      en: 'Vernacular Social Engineering',
      kn: 'ಭಾಷಾ ಆಧಾರಿತ ಸಾಮಾಜಿಕ ತಂತ್ರ',
      hi: 'भाषाई सोशल इंजीनियरिंग',
      te: 'భాషా ఆధారిత సోషల్ ఇంజనీరింగ్'
    },
    type: 'message',
    preview: 'SEBI approved madam, today only offer 5 slots left, guaranteed profit pakka...',
    content: 'SEBI approved madam, namaskara! Today only offer, 5 slots left for premium calls. Guaranteed 50% profit intraday pakka. Loss recovery guarantee. Jaldi payment maadi UPI id: tradeking44@paytm and send screenshot. Agar aaj join nahi kiya toh offer khatam ho jayega.'
  },
  {
    id: 'sample-url-phish',
    title: 'Cloned Trading Portal URL',
    localizedTitle: {
      en: 'Cloned Trading Portal URL',
      kn: 'ನಕಲಿ ಕ್ಲೋನ್ ಟ್ರೇಡಿಂಗ್ ವೆಬ್‌ಸೈಟ್',
      hi: 'क्लोन ट्रेडिंग पोर्टल यूआरएल',
      te: 'నకిలీ క్లోన్ ట్రేడింగ్ వెబ్‌సైట్'
    },
    category: 'Phishing / Clone Website',
    localizedCategory: {
      en: 'Phishing / Clone Website',
      kn: 'ಫಿಶಿಂಗ್ / ಕ್ಲೋನ್ ಜಾಲತಾಣ',
      hi: 'फ़िशिंग / क्लोन वेबसाइट',
      te: 'ఫిషింగ్ / క్లోన్ వెబ్‌సైట్'
    },
    type: 'link',
    preview: 'https://zerodha-institutional-wealth.in/login-secure',
    content: 'https://zerodha-institutional-wealth.in/login-secure?ref=vip_investor_desk',
    url: 'https://zerodha-institutional-wealth.in/login-secure?ref=vip_investor_desk'
  }
];
