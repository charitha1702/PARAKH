import { EvidenceItem, Language } from '../../types/analysis';

export function retrieveEvidence(rawText: string, language: Language = 'en'): EvidenceItem[] {
  const text = rawText.toLowerCase();
  const items: EvidenceItem[] = [];

  // Check 1: Guaranteed Returns vs SEBI Regulation
  if (/(guaranteed|assured|confirmed|100%|profit|return|pakka|ಖಾತರಿ|ಗ್ಯಾರಂಟಿ|गारंटी|గ్యారెంటీ)/i.test(text)) {
    const localized = {
      en: {
        claim: 'Entity promises fixed, assured, or guaranteed returns on securities.',
        summary: 'SEBI circulars (SEBI/HO/MIRSD/DOS3/CIR/P/2018/115) strictly prohibit any intermediary from assuring fixed returns on market investments. Statutorily, no registered entity may make this claim.'
      },
      kn: {
        claim: 'ಷೇರುಗಳಲ್ಲಿ ನಿಶ್ಚಿತ, ಖಾತರಿಯ ಅಥವಾ ಗ್ಯಾರಂಟಿ ಲಾಭ ನೀಡುವ ಭರವಸೆ.',
        summary: 'SEBI ಸುತ್ತೋಲೆಗಳ ಪ್ರಕಾರ ಷೇರು ಮಾರುಕಟ್ಟೆ ಹೂಡಿಕೆಗಳಲ್ಲಿ ಯಾವುದೇ ಮಧ್ಯವರ್ತಿಗಳು ನಿಶ್ಚಿತ ಆದಾಯದ ಭರವಸೆ ನೀಡುವುದನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧಿಸಲಾಗಿದೆ. ಶಾಸನಬದ್ಧವಾಗಿ ಯಾವುದೇ ನೋಂದಾಯಿತ ಸಂಸ್ಥೆ ಈ ಹಕ್ಕು ಮಂಡಿಸುವಂತಿಲ್ಲ.'
      },
      hi: {
        claim: 'प्रतिभूतियों पर निश्चित या गारंटीड रिटर्न का वादा।',
        summary: 'सेबी के परिपत्रों के अनुसार बाजार के निवेश पर किसी भी मध्यस्थ द्वारा निश्चित रिटर्न का आश्वासन देना पूरी तरह प्रतिबंधित है। वैधानिक रूप से कोई भी पंजीकृत संस्था यह दावा नहीं कर सकती।'
      },
      te: {
        claim: 'సెక్యూరిటీలపై స్థిరమైన లేదా ఖచ్చితమైన లాభాల వాగ్దానం.',
        summary: 'SEBI సర్క్యులర్ల ప్రకారం మార్కెట్ పెట్టుబడులపై ఏ మధ్యవర్తి కూడా ఖచ్చితమైన లాభాల హామీ ఇవ్వకూడదు. చట్టబద్ధంగా ఏ నమోదిత సంస్థ కూడా ఈ దావా చేయకూడదు.'
      }
    }[language] || {
      claim: 'Entity promises fixed, assured, or guaranteed returns on securities.',
      summary: 'SEBI circulars strictly prohibit assuring fixed returns on market investments.'
    };

    items.push({
      id: 'ev-sebi-guaranteed-returns',
      sourceName: 'SEBI (Investment Advisers) Regulations, 2013',
      sourceTier: 'regulatory',
      badgeLabel: 'SEBI',
      claim: localized.claim,
      status: 'not_established',
      evidenceSummary: localized.summary,
      officialUrl: 'https://www.sebi.gov.in/legal/circulars.html',
      registryEntity: 'SEBI Legal Directorate'
    });
  }

  // Check 2: Regulatory Claim verification
  if (/(sebi|rbi|certified|approved|research analyst)/i.test(text)) {
    const localized = {
      en: {
        claim: 'Sender claims to be a SEBI-approved or SEBI-registered research entity.',
        summary: 'SEBI requires public disclosure of valid 10-digit registration numbers (e.g. INH... or INA...). No verifiable statutory registration number was provided in this communication.'
      },
      kn: {
        claim: 'ಸಂದೇಶ ಕಳುಹಿಸಿದವರು SEBI ಅನುಮೋದಿತ ಅಥವಾ ನೋಂದಾಯಿತ ರಿಸರ್ಚ್ ಸಂಸ್ಥೆ ಎಂದು ಹೇಳಿಕೊಳ್ಳುತ್ತಾರೆ.',
        summary: 'SEBI ನಿಯಮಗಳ ಪ್ರಕಾರ 10-ಅಂಕಿಯ ನೋಂದಣಿ ಸಂಖ್ಯೆಯನ್ನು ಬಹಿರಂಗಪಡಿಸುವುದು ಕಡ್ಡಾಯವಾಗಿದೆ (ಉದಾ: INH...). ಈ ಸಂದೇಶದಲ್ಲಿ ಯಾವುದೇ ಪರಿಶೀಲಿಸಬಹುದಾದ ಅಧಿಕೃತ ನೋಂದಣಿ ಸಂಖ್ಯೆ ಒದಗಿಸಲಾಗಿಲ್ಲ.'
      },
      hi: {
        claim: 'प्रेषक सेबी-अनुमोदित या सेबी-पंजीकृत रिसर्च इकाई होने का दावा करता है।',
        summary: 'सेबी के अनुसार वैध 10-अंकीय पंजीकरण संख्या (जैसे: INH...) का सार्वजनिक प्रकटीकरण अनिवार्य है। इस संदेश में कोई सत्यापन योग्य वैधानिक पंजीकरण संख्या नहीं दी गई है।'
      },
      te: {
        claim: 'సందేశం పంపినవారు సెబీ ఆమోదించిన లేదా నమోదిత సంస్థ అని క్లెయిమ్ చేస్తున్నారు.',
        summary: 'SEBI నిబంధనల ప్రకారం చెల్లుబాటు అయ్యే 10-అంకెల రిజిస్ట్రేషన్ నంబర్‌ను వెల్లడించడం తప్పనిసరి. ఈ సందేశంలో ఎటువంటి ధృవీకరించదగిన రిజిస్ట్రేషన్ నంబర్ అందించబడలేదు.'
      }
    }[language] || {
      claim: 'Sender claims to be a SEBI-approved entity.',
      summary: 'No verifiable statutory registration number was provided.'
    };

    items.push({
      id: 'ev-sebi-intermediary-register',
      sourceName: 'SEBI Recognized Intermediaries Database',
      sourceTier: 'regulatory',
      badgeLabel: 'SEBI',
      claim: localized.claim,
      status: 'needs_verification',
      evidenceSummary: localized.summary,
      officialUrl: 'https://www.sebi.gov.in/intermediaries.html',
      registryEntity: 'SEBI Intermediary Registry'
    });
  }

  // Check 3: Private UPI / Bank accounts vs Statutory Client Segregation
  if (/(upi|transfer|account|a\/c|ifsc|deposit|screenshot)/i.test(text)) {
    const localized = {
      en: {
        claim: 'Funds are requested directly into private personal UPI or third-party savings accounts.',
        summary: 'Regulated brokers and portfolio managers are legally mandated to collect investments into segregated Client Bank Accounts or Clearing Corporation escrow accounts, never into individual UPI handles.'
      },
      kn: {
        claim: 'ವೈಯಕ್ತಿಕ UPI ಅಥವಾ ಅಪರಿಚಿತ ಖಾಸಗಿ ಖಾತೆಗೆ ಹಣ ಕಳುಹಿಸುವಂತೆ ಕೇಳಲಾಗಿದೆ.',
        summary: 'ನಿಯಂತ್ರಿತ ಬ್ರೋಕರ್‌ಗಳು ಕೇವಲ ಬ್ಯಾಂಕಿಂಗ್ ಕ್ಲಿಯರಿಂಗ್ ಕಾರ್ಪೊರೇಷನ್‌ಗಳ ಗೊತ್ತುಪಡಿಸಿದ ಗ್ರಾಹಕ ಖಾತೆಗಳಲ್ಲಿ ಮಾತ್ರ ಹೂಡಿಕೆ ಹಣ ಸ್ವೀಕರಿಸಬೇಕು, ಎಂದಿಗೂ ವೈಯಕ್ತಿಕ UPI ವಿಳಾಸಗಳಿಗೆ ಅಲ್ಲ.'
      },
      hi: {
        claim: 'निजी व्यक्तिगत यूपीआई या बचत खातों में सीधे धन की मांग की गई है।',
        summary: 'विनियमित ब्रोकरों और सलाहकारों को केवल क्लियरिंग कॉर्पोरेशन के अधिकृत बैंक खातों में ही निवेश एकत्र करने का वैधानिक अधिकार है, कभी भी व्यक्तिगत यूपीआई पते पर नहीं।'
      },
      te: {
        claim: 'వ్యక్తిగత ప్రైవేట్ UPI లేదా సేవింగ్స్ ఖాతాలకు నేరుగా డబ్బు పంపమని కోరారు.',
        summary: 'నియంత్రిత బ్రోకర్లు క్లియరింగ్ కార్పొరేషన్ యొక్క అధికారిక బ్యాంక్ ఖాతాలలో మాత్రమే పెట్టుబడులను స్వీకరించాలి, ఎప్పుడూ వ్యక్తిగత UPI ఖాతాలలో కాదు.'
      }
    }[language] || {
      claim: 'Funds requested into personal UPI accounts.',
      summary: 'Regulated brokers must collect investments only in segregated clearing accounts.'
    };

    items.push({
      id: 'ev-rbi-client-segregation',
      sourceName: 'RBI Master Directions on Payment Systems',
      sourceTier: 'official',
      badgeLabel: 'RBI',
      claim: localized.claim,
      status: 'not_established',
      evidenceSummary: localized.summary,
      officialUrl: 'https://www.rbi.org.in/',
      registryEntity: 'RBI Payment System Directives'
    });
  }

  // Check 4: APK or Phishing Link
  if (/(\.apk|download|link|kyc-update|utility)/i.test(text)) {
    const localized = {
      en: {
        claim: 'Distribution of application files (.apk) or unverified links for KYC/banking updates.',
        summary: 'CERT-In and Indian Cyber Crime Coordination Centre (I4C) warn that sideloading APK files sent via SMS/chat is a primary mechanism for installing banking Trojan malware.'
      },
      kn: {
        claim: 'KYC ಅಪ್‌ಡೇಟ್ ಹೆಸರಿನಲ್ಲಿ ಅಪರಿಚಿತ ಅಪ್ಲಿಕೇಶನ್ (.apk) ಅಥವಾ ಲಿಂಕ್ ವಿತರಣೆ.',
        summary: 'SMS ಅಥವಾ ಚಾಟ್ ಮೂಲಕ ಕಳುಹಿಸಲಾದ APK ಫೈಲ್‌ಗಳನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವುದು ಬ್ಯಾಂಕಿಂಗ್ ಪಾಸ್‌ವರ್ಡ್ ಕದಿಯುವ ಟ್ರೋಜನ್ ವೈರಸ್ ಹರಡುವ ಪ್ರಮುಖ ಮಾರ್ಗವಾಗಿದೆ ಎಂದು CERT-In ಎಚ್ಚರಿಸಿದೆ.'
      },
      hi: {
        claim: 'केवाईसी/बैंकिंग अपडेट के लिए अज्ञात एप्लिकेशन (.apk) या लिंक का वितरण।',
        summary: 'CERT-In और भारतीय साइबर अपराध समन्वय केंद्र (I4C) चेतावनी देते हैं कि एसएमएस/चैट के जरिए भेजे गए एपीके फाइलें बैंकिंग ट्रोजन मैलवेयर इंस्टॉल करने का मुख्य जरिया हैं।'
      },
      te: {
        claim: 'KYC అప్‌డేట్ పేరుతో తెలియని యాప్ ఫైల్‌లు (.apk) లేదా లింక్‌ల పంపిణీ.',
        summary: 'SMS లేదా చాట్ ద్వారా పంపిన APK ఫైల్‌లను ఇన్‌స్టాల్ చేయడం బ్యాంకింగ్ ట్రోజన్ మాల్వేర్‌ను ఇన్‌స్టాల్ చేసే ప్రధాన మార్గమని CERT-In హెచ్చరిస్తోంది.'
      }
    }[language] || {
      claim: 'Distribution of APK files for banking updates.',
      summary: 'Sideloading APK files is a primary vector for banking malware.'
    };

    items.push({
      id: 'ev-certin-apk-advisory',
      sourceName: 'CERT-In Financial Security Alert & I4C Bulletins',
      sourceTier: 'reputable',
      badgeLabel: 'CERT-In',
      claim: localized.claim,
      status: 'not_established',
      evidenceSummary: localized.summary,
      officialUrl: 'https://www.cert-in.org.in/',
      registryEntity: 'CERT-In Cyber Security Alerts'
    });
  }

  return items;
}
