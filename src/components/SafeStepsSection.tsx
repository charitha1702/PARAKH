import React from 'react';
import { GlassTile } from './GlassTile';
import { ShieldAlert, ExternalLink, Sparkles } from 'lucide-react';
import { AnalysisResult, Language } from '../types/analysis';
import { TRANSLATIONS } from '../data/translations';
import { SectionAudioControl } from './SectionAudioControl';

interface SafeStepsSectionProps {
  analysis: AnalysisResult;
  currentLanguage: Language;
  simpleMode: boolean;
  onToggleSimpleMode: () => void;
  onOpenOfficialSources: () => void;
  isSpeaking: boolean;
  onToggleSpeaking: () => void;
}

export const SafeStepsSection: React.FC<SafeStepsSectionProps> = ({
  analysis,
  currentLanguage,
  simpleMode,
  onToggleSimpleMode,
  onOpenOfficialSources
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const defaultStepsByLang: Record<Language, Array<{ step: number; title: string; description: string; simpleText: string }>> = {
    en: [
      { step: 1, title: 'Pause before sending money.', description: 'Take a cooling-off period of at least 24 hours. Scammers rely on rushed decisions.', simpleText: 'Do not send money in a hurry.' },
      { step: 2, title: 'Verify the organization independently.', description: 'Never click links provided in the chat. Use independent browser search.', simpleText: 'Check the real company website yourself.' },
      { step: 3, title: 'Check official statutory registers.', description: 'Verify SEBI or RBI registration numbers directly on statutory public registers.', simpleText: 'Check if this advisor is registered with SEBI.' },
      { step: 4, title: 'Never share OTPs, PINs, or install remote APKs.', description: 'Legitimate institutions will never ask for your UPI MPIN, bank passwords, or request you to side-load APK utilities.', simpleText: 'Never tell your OTP or download unknown .apk files.' },
      { step: 5, title: 'Report suspicious activity immediately.', description: 'If you have transferred funds, immediately call the National Cyber Helpline 1930 or file a report at cybercrime.gov.in.', simpleText: 'If you paid, call 1930 right away.' }
    ],
    te: [
      { step: 1, title: 'డబ్బు పంపే ముందు ఆగండి.', description: 'కనీసం 24 గంటల వ్యవధి తీసుకోండి. తొందరపాటు నిర్ణయాలపైనే మోసగాళ్లు ఆధారపడతారు.', simpleText: 'ఆతురతలో ఎవరికీ డబ్బు పంపవద్దు.' },
      { step: 2, title: 'సంస్థను స్వతంత్రంగా ధృవీకరించుకోండి.', description: 'చాట్‌లో పంపిన లింక్‌లను ఎప్పుడూ నొక్కవద్దు. బ్రౌజర్‌లో నేరుగా వెతకండి.', simpleText: 'అధికారిక కంపెనీ వెబ్‌సైట్‌ను మీరే స్వయంగా తనిఖీ చేయండి.' },
      { step: 3, title: 'అధికారిక చట్టబద్ధమైన రిజిస్టర్లను తనిఖీ చేయండి.', description: 'SEBI లేదా RBI రిజిస్ట్రేషన్ నంబర్లను అధికారిక పోర్టల్స్‌లో నేరుగా సరిచూసుకోండి.', simpleText: 'ఈ సంస్థ SEBI లో నమోదైందో లేదో చూడండి.' },
      { step: 4, title: 'OTP, PIN లు ఎవరితోనూ పంచుకోవద్దు, తెలియని APK లు ఇన్‌స్టాల్ చేయవద్దు.', description: 'చట్టబద్ధమైన సంస్థలు ఎప్పుడూ UPI పిన్ లేదా పాస్‌వర్డ్ అడగవు.', simpleText: 'మీ OTP ఎవరికీ చెప్పవద్దు, అనుమానాస్పద యాప్‌లను డౌన్‌లోడ్ చేయవద్దు.' },
      { step: 5, title: 'అనుమానాస్పద లావాదేవీలను వెంటనే నివేదించండి.', description: 'డబ్బు పంపినట్లయితే, బ్యాంకు నుండి నిధులు బయటకు వెళ్లకుండా వెంటనే జాతీయ సైబర్ హెల్ప్‌లైన్ 1930 కి కాల్ చేయండి.', simpleText: 'డబ్బు బదిలీ చేసి ఉంటే వెంటనే 1930 కి కాల్ చేయండి.' }
    ],
    kn: [
      { step: 1, title: 'ಹಣ ಕಳುಹಿಸುವ ಮುನ್ನ ಆಲೋಚಿಸಿ.', description: 'ಕನಿಷ್ಠ 24 ಗಂಟೆಗಳ ಕಾಲಾವಕಾಶ ತೆಗೆದುಕೊಳ್ಳಿ. ಆತುರದ ನಿರ್ಧಾರಗಳನ್ನು ವಂಚಕರು ಬಳಸಿಕೊಳ್ಳುತ್ತಾರೆ.', simpleText: 'ಆತುರದಲ್ಲಿ ಯಾರಿಗೂ ಹಣ ಕಳುಹಿಸಬೇಡಿ.' },
      { step: 2, title: 'ಸಂಸ್ಥೆಯನ್ನು ಸ್ವತಂತ್ರವಾಗಿ ಪರಿಶೀಲಿಸಿ.', description: 'ಚಾಟ್‌ನಲ್ಲಿ ನೀಡಲಾದ ಲಿಂಕ್‌ಗಳನ್ನು ಎಂದಿಗೂ ಕ್ಲಿಕ್ ಮಾಡಬೇಡಿ.', simpleText: 'ನಿಜವಾದ ಕಂಪನಿ ವೆಬ್‌ಸೈಟ್ ಅನ್ನು ನೀವೇ ಪರಿಶೀಲಿಸಿ.' },
      { step: 3, title: 'ಅಧಿಕೃತ ಶಾಸನಬದ್ಧ ರಿಜಿಸ್ಟರ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.', description: 'SEBI ಅಥವಾ RBI ನೋಂದಣಿ ಸಂಖ್ಯೆಗಳನ್ನು ಅಧಿಕೃತ ಸಾರ್ವಜನಿಕ ರಿಜಿಸ್ಟರ್‌ಗಳಲ್ಲಿ ಪರೀಕ್ಷಿಸಿ.', simpleText: 'ಈ ಸಂಸ್ಥೆ SEBI ನಲ್ಲಿ ನೋಂದಾಯಿಸಲ್ಪಟ್ಟಿದೆಯೇ ಎಂದು ನೋಡಿ.' },
      { step: 4, title: 'OTP, PIN ಹಂಚಿಕೊಳ್ಳಬೇಡಿ ಮತ್ತು ಅಪರಿಚಿತ APK ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬೇಡಿ.', description: 'ಯಾವುದೇ ಕಾನೂನುಬದ್ಧ ಸಂಸ್ಥೆಯು UPI ಪಿನ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್ ಕೇಳುವುದಿಲ್ಲ.', simpleText: 'ನಿಮ್ಮ OTP ಯಾರಿಗೂ ಹೇಳಬೇಡಿ.' },
      { step: 5, title: 'ಸಂಶಯಾಸ್ಪದ ಚಟುವಟಿಕೆಯನ್ನು ತಕ್ಷಣ ವರದಿ ಮಾಡಿ.', description: 'ಹಣ ವರ್ಗಾಯಿಸಿದ್ದರೆ, ತಕ್ಷಣ ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಹೆಲ್ಪ್‌ಲೈನ್ 1930 ಗೆ ಕರೆ ಮಾಡಿ.', simpleText: 'ಹಣ ಪಾವತಿಸಿದ್ದರೆ ತಕ್ಷಣ 1930 ಗೆ ಕರೆ ಮಾಡಿ.' }
    ],
    hi: [
      { step: 1, title: 'पैसे भेजने से पहले रुकें।', description: 'कम से कम 24 घंटे का समय लें। धोखेबाज जल्दबाजी में लिए गए फैसलों का फायदा उठाते हैं।', simpleText: 'जल्दबाजी में पैसे न भेजें।' },
      { step: 2, title: 'संस्था की स्वतंत्र रूप से जांच करें।', description: 'चैट में भेजे गए लिंक पर कभी क्लिक न करें। आधिकारिक सर्च का उपयोग करें।', simpleText: 'कंपनी की असली वेबसाइट खुद जांचें।' },
      { step: 3, title: 'सरकारी रजिस्टरों की जांच करें।', description: 'SEBI या RBI पंजीकरण संख्या की पुष्टि आधिकारिक पोर्टल पर करें।', simpleText: 'जांचें कि क्या यह सलाहकार SEBI में पंजीकृत है।' },
      { step: 4, title: 'OTP, PIN कभी साझा न करें और अज्ञात APK डाउनलोड न करें।', description: 'वैधानिक बैंक कभी भी आपसे UPI पिन या पासवर्ड नहीं मांगते।', simpleText: 'अपना OTP किसी को न बताएं।' },
      { step: 5, title: 'संदिग्ध गतिविधि की तुरंत रिपोर्ट करें।', description: 'यदि आपने पैसे भेज दिए हैं, तो तुरंत राष्ट्रीय साइबर हेल्पलाइन 1930 पर कॉल करें।', simpleText: 'यदि पैसे दिए हैं, तो तुरंत 1930 पर कॉल करें।' }
    ],
    ta: [
      { step: 1, title: 'பணம் அனுப்பும் முன் சற்று சிந்தியுங்கள்.', description: 'குறைந்தது 24 மணிநேர அவகாசம் எடுத்துக் கொள்ளுங்கள். அவசர முடிவுகளை மோசடி செய்பவர்கள் பயன்படுத்துகின்றனர்.', simpleText: 'அவசரமாக பணம் அனுப்ப வேண்டாம்.' },
      { step: 2, title: 'நிறுவனத்தை சுயாதீனமாக சரிபார்க்கவும்.', description: 'சாட்டில் அனுப்பப்பட்ட இணைப்புகளை கிளிக் செய்யாதீர்கள். அதிகாரப்பூர்வ தளத்தைத் தேடவும்.', simpleText: 'நிறுவனத்தின் இணையதளத்தை நீங்களே சரிபாருங்கள்.' },
      { step: 3, title: 'ஒழுங்குமுறை பதிவேடுகளை சரிபார்க்கவும்.', description: 'SEBI அல்லது RBI பதிவு எண்களை அதிகாரப்பூர்வ போர்ட்டலில் சரிபார்க்கவும்.', simpleText: 'இந்த ஆலோசகர் SEBI-ல் பதிவு செய்யப்பட்டுள்ளாரா எனப் பாருங்கள்.' },
      { step: 4, title: 'OTP, PIN பகிர வேண்டாம் மற்றும் APK பதிவிறக்க வேண்டாம்.', description: 'வங்கி அல்லது நிதி நிறுவனங்கள் ஒருபோதும் ரகசிய குறியீடுகளைக் கேட்காது.', simpleText: 'உங்கள் OTP-ஐ யாரிடமும் சொல்லாதீர்கள்.' },
      { step: 5, title: 'சந்தேகத்திற்கிடமான நடவடிக்கையை உடனடியாக புகாரளிக்கவும்.', description: 'பணம் அனுப்பியிருந்தால், உடனடியாக தேசிய சைபர் உதவி எண் 1930-ஐ அழைக்கவும்.', simpleText: 'பணம் செலுத்தியிருந்தால் உடனே 1930-ஐ அழைக்கவும்.' }
    ],
    ml: [
      { step: 1, title: 'പണം അയക്കുന്നതിന് മുൻപ് ചിന്തിക്കുക.', description: 'കുറഞ്ഞത് 24 മണിക്കൂർ സമയം എടുക്കുക. ധൃതിപിടിച്ച തീരുമാനങ്ങളാണ് തട്ടിപ്പുകാർ മുതലെടുക്കുന്നത്.', simpleText: 'ധൃതിപിടിച്ച് പണം അയക്കരുത്.' },
      { step: 2, title: 'സ്ഥാപനത്തെക്കുറിച്ച് സ്വതന്ത്രമായി അന്വേഷിക്കുക.', description: 'ചാറ്റിൽ വരുന്ന ലിങ്കുകളിൽ ക്ലിക്ക് ചെയ്യരുത്. ഔദ്യോഗിക സൈറ്റ് പരിശോധിക്കുക.', simpleText: 'കമ്പനിയുടെ യഥാർത്ഥ വെബ്സൈറ്റ് സ്വയം പരിശോധിക്കുക.' },
      { step: 3, title: 'ഔദ്യോഗിക രജിസ്ട്രേഷൻ പരിശോധിക്കുക.', description: 'SEBI അല്ലെങ്കിൽ RBI രജിസ്ട്രേഷൻ നമ്പറുകൾ ഔദ്യോഗിക പോർട്ടലിൽ സ്ഥിരീകരിക്കുക.', simpleText: 'ഇവർ SEBI രജിസ്ട്രേഷൻ ഉള്ളവരാണോ എന്ന് നോക്കുക.' },
      { step: 4, title: 'OTP, PIN ഒരിക്കലും പങ്കുവെക്കരുത്, APK ഇൻസ്റ്റാൾ ചെയ്യരുത്.', description: 'ബാങ്കുകൾ ഒരിക്കലും പാസ്‌വേഡോ യുപിഐ പിൻ നമ്പറോ ചോദിക്കില്ല.', simpleText: 'OTP ആർക്കും നൽകരുത്.' },
      { step: 5, title: 'ഉടൻ തന്നെ പരാതിപ്പെടുക.', description: 'പണം നഷ്ടപ്പെട്ടാൽ ഉടൻ തന്നെ ദേശീയ സൈബർ ഹെൽപ്പ് ലൈൻ 1930-ൽ വിളിക്കുക.', simpleText: 'പണം അയച്ചെങ്കിൽ ഉടൻ 1930-ൽ വിളിക്കുക.' }
    ],
    mr: [
      { step: 1, title: 'पैसे पाठवण्यापूर्वी थांबा.', description: 'किमान 24 तासांचा वेळ घ्या. घाईघाईने घेतलेल्या निर्णयांचा गैरफायदा फसवणूक करणारे घेतात.', simpleText: 'घाईघाईने पैसे पाठवू नका.' },
      { step: 2, title: 'संस्थेची स्वतंत्रपणे पडताळणी करा.', description: 'चॅटमध्ये दिलेल्या लिंकवर कधीही क्लिक करू नका.', simpleText: 'कंपनीची अधिकृत वेबसाइट स्वतः तपासा.' },
      { step: 3, title: 'अधिकृत नोंदणी तपासा.', description: 'SEBI किंवा RBI नोंदणी क्रमांक अधिकृत पोर्टलवर तपासा.', simpleText: 'संस्था सेबीकडे नोंदणीकृत आहे का ते पहा.' },
      { step: 4, title: 'OTP किंवा पिन शेअर करू नका आणि APK डाउनलोड करू नका.', description: 'अधिकृत संस्था कधीही UPI पिन मागत नाहीत.', simpleText: 'तुमचा OTP कोणालाही सांगू नका.' },
      { step: 5, title: 'तात्काळ तक्रार नोंदवा.', description: 'पैसे पाठवले असल्यास लगेच राष्ट्रीय सायबर हेल्पलाइन 1930 वर कॉल करा.', simpleText: 'पैसे दिले असल्यास त्वरित 1930 वर संपर्क साधा.' }
    ],
    bn: [
      { step: 1, title: 'টাকা পাঠানোর আগে থামুন।', description: 'কমপক্ষে ২৪ ঘণ্টার সময় নিন। তাড়াহুড়ো করে নেওয়া সিদ্ধান্তের সুযোগ নেয় প্রতারকরা।', simpleText: 'তাড়াহুড়ো করে টাকা পাঠাবেন না।' },
      { step: 2, title: 'সংস্থাটি স্বাধীনভাবে যাচাই করুন।', description: 'চ্যাটে দেওয়া লিঙ্কে ক্লিক করবেন না। অফিসিয়াল ব্রাউজারে খুঁজুন।', simpleText: 'কোম্পানির আসল ওয়েবসাইট নিজে চেক করুন।' },
      { step: 3, title: 'সরকারি রেজিস্ট্রি পরীক্ষা করুন।', description: 'সেবি বা আরবিআই রেজিস্ট্রেশন নম্বর সরকারি পোর্টালে যাচাই করুন।', simpleText: 'এই উপদেষ্টা সেবিতে নিবন্ধিত কিনা দেখুন।' },
      { step: 4, title: 'OTP বা পিন শেয়ার করবেন না এবং APK ডাউনলোড করবেন না।', description: 'কোনো বৈধ ব্যাঙ্ক কখনও আপনার ইউপিআই পিন চাইবে না।', simpleText: 'কাউকে আপনার ওটিপি বলবেন না।' },
      { step: 5, title: 'অবিলম্বে অভিযোগ জানান।', description: 'টাকা স্থানান্তর করে থাকলে অবিলম্বে জাতীয় সাইবার হেল্পলাইন ১৯৩০ নম্বরে কল করুন।', simpleText: 'টাকা পাঠিয়ে থাকলে এখনই ১৯৩০ নম্বরে কল করুন।' }
    ],
    gu: [
      { step: 1, title: 'પૈસા મોકલતા પહેલા રોકાઈ જાઓ.', description: 'ઓછામાં ઓછો 24 કલાકનો સમય લો. છેતરપિંડી કરનારા ઉતાવળિયા નિર્ણયોનો લાભ ઉઠાવે છે.', simpleText: 'ઉતાવળમાં પૈસા ન મોકલો.' },
      { step: 2, title: 'સંસ્થાની સ્વતંત્ર રીતે ચકાસણી કરો.', description: 'ચેટમાં આવેલી લિંક્સ પર ક્યારેય ક્લિક ન કરો. સત્તાવાર વેબસાઇટ તપાસો.', simpleText: 'કંપનીની સાચી વેબસાઇટ જાતે તપાસો.' },
      { step: 3, title: 'સરકારી રજિસ્ટર તપાસો.', description: 'સેબી અથવા આરબીઆઈ નોંધણી નંબર પોર્ટલ પર ચકાસો.', simpleText: 'આ સંસ્થા સેબી સાથે નોંધાયેલ છે કે નહીં તે જુઓ.' },
      { step: 4, title: 'OTP કે PIN ક્યારેય શેર ન કરો અને APK ઇન્સ્ટોલ ન કરો.', description: 'કાયદેસર સંસ્થાઓ ક્યારેય UPI PIN કે પાસવર્ડ માંગતી નથી.', simpleText: 'તમારો OTP કોઈને ન આપો.' },
      { step: 5, title: 'તરત જ ફરિયાદ નોંધાવો.', description: 'જો પૈસા મોકલાઈ ગયા હોય તો તરત જ રાષ્ટ્રીય સાયબર હેલ્પલાઇન 1930 પર કૉલ કરો.', simpleText: 'જો નાણાં ચૂકવ્યા હોય તો તરત જ 1930 પર કૉલ કરો.' }
    ],
    pa: [
      { step: 1, title: 'ਪੈਸੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ ਰੁਕੋ।', description: 'ਘੱਟੋ-ਘੱਟ 24 ਘੰਟੇ ਦਾ ਸਮਾਂ ਲਓ। ਠੱਗ ਕਾਹਲੀ ਵਿੱਚ ਲਏ ਗਏ ਫੈਸਲਿਆਂ ਦਾ ਫਾਇਦਾ ਉਠਾਉਂਦੇ ਹਨ।', simpleText: 'ਕਾਹਲੀ ਵਿੱਚ ਪੈਸੇ ਨਾ ਭੇਜੋ।' },
      { step: 2, title: 'ਸੰਸਥਾ ਦੀ ਸੁਤੰਤਰ ਪੁਸ਼ਟੀ ਕਰੋ।', description: 'ਚੈਟ ਵਿੱਚ ਦਿੱਤੇ ਲਿੰਕਾਂ ਤੇ ਕਦੇ ਕਲਿੱਕ ਨਾ ਕਰੋ।', simpleText: 'ਕੰਪਨੀ ਦੀ ਅਸਲ ਵੈੱਬਸਾਈਟ ਖੁਦ ਚੈੱਕ ਕਰੋ।' },
      { step: 3, title: 'ਸਰਕਾਰੀ ਰਜਿਸਟਰੀਆਂ ਦੀ ਜਾਂਚ ਕਰੋ।', description: 'ਸੇਬੀ ਜਾਂ ਆਰਬੀਆਈ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨੰਬਰ ਸਰਕਾਰੀ ਪੋਰਟਲ ਤੇ ਚੈੱਕ ਕਰੋ।', simpleText: 'ਦੇਖੋ ਕਿ ਇਹ ਸਲਾਹਕਾਰ ਸੇਬੀ ਨਾਲ ਰਜਿਸਟਰਡ ਹੈ ਜਾਂ ਨਹੀਂ।' },
      { step: 4, title: 'ਕਦੇ ਵੀ OTP ਜਾਂ ਪਿੰਨ ਸਾਂਝਾ ਨਾ ਕਰੋ ਅਤੇ APK ਇੰਸਟਾਲ ਨਾ ਕਰੋ।', description: 'ਕੋਈ ਵੀ ਕਾਨੂੰਨੀ ਸੰਸਥਾ ਤੁਹਾਡਾ ਯੂਪੀਆਈ ਪਿੰਨ ਨਹੀਂ ਮੰਗਦੀ।', simpleText: 'ਆਪਣਾ OTP ਕਿਸੇ ਨੂੰ ਨਾ ਦੱਸੋ।' },
      { step: 5, title: 'ਤੁਰੰਤ ਰਿਪੋਰਟ ਕਰੋ।', description: 'ਜੇਕਰ ਪੈਸੇ ਟਰਾਂਸਫਰ ਕਰ ਦਿੱਤੇ ਹਨ, ਤਾਂ ਤੁਰੰਤ ਰਾਸ਼ਟਰੀ ਸਾਈਬਰ ਹੈਲਪਲਾਈਨ 1930 ਤੇ ਕਾਲ ਕਰੋ।', simpleText: 'ਜੇਕਰ ਪੈਸੇ ਦਿੱਤੇ ਹਨ ਤਾਂ ਤੁਰੰਤ 1930 ਤੇ ਕਾਲ ਕਰੋ।' }
    ],
    or: [
      { step: 1, title: 'ଟଙ୍କା ପଠାଇବା ପୂର୍ବରୁ ଅଟକନ୍ତୁ।', description: 'ଅତି କମରେ ୨୪ ଘଣ୍ଟା ସମୟ ନିଅନ୍ତୁ। ଠକମାନେ ତରବରିଆ ନିଷ୍ପତ୍ତିର ଫାଇଦା ଉଠାନ୍ତି।', simpleText: 'ତରବର ହୋଇ ଟଙ୍କା ପଠାନ୍ତୁ ନାହିଁ।' },
      { step: 2, title: 'ସଂସ୍ଥାର ସ୍ୱତନ୍ତ୍ର ଯାଞ୍ଚ କରନ୍ତୁ।', description: 'ଚାଟ୍ ରେ ଦିଆଯାଇଥିବା ଲିଙ୍କ୍ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ ନାହିଁ।', simpleText: 'ଅଫିସିଆଲ୍ ୱେବସାଇଟ୍ ନିଜେ ଯାଞ୍ଚ କରନ୍ତୁ।' },
      { step: 3, title: 'ସରକାରୀ ରେଜିଷ୍ଟର ଯାଞ୍ଚ କରନ୍ତୁ।', description: 'ସେବି କିମ୍ବା ଆରବିଆଇ ପଞ୍ଜୀକରଣ ନମ୍ବର ସରକାରୀ ପୋର୍ଟାଲରେ ମିଳାନ୍ତୁ।', simpleText: 'ଏହି ପରାମର୍ଶଦାତା ସେବିରେ ପଞ୍ଜୀକୃତ କି ନୁହେଁ ଦେଖନ୍ତୁ।' },
      { step: 4, title: 'OTP ବା PIN ଦିଅନ୍ତୁ ନାହିଁ ଏବଂ APK ଡାଉନଲୋଡ୍ କରନ୍ତୁ ନାହିଁ।', description: 'ବୈଧ ସଂସ୍ଥା କେବେହେଲେ UPI PIN ମାଗନ୍ତି ନାହିଁ।', simpleText: 'ନିଜର OTP କାହାକୁ କୁହନ୍ତୁ ନାହିଁ।' },
      { step: 5, title: 'ତୁରନ୍ତ ଅଭିଯୋଗ କରନ୍ତୁ।', description: 'ଯଦି ଟଙ୍କା ପଠାଇ ସାରିଛନ୍ତି, ତେବେ ତୁରନ୍ତ ଜାତୀୟ ସାଇବର ହେଲ୍ପଲାଇନ 1930 କୁ କଲ୍ କରନ୍ତୁ।', simpleText: 'ଯଦି ଟଙ୍କା ଦେଇଛନ୍ତି, ତୁରନ୍ତ 1930 କୁ କଲ୍ କରନ୍ତୁ।' }
    ],
    ur: [
      { step: 1, title: 'رقم بھیجنے سے پہلے رکیں۔', description: 'کم از کم 24 گھنٹے کا وقت لیں۔ دھوکہ باز جلد بازی کے فیصلوں کا فائدہ اٹھاتے ہیں۔', simpleText: 'جلد بازی میں رقم نہ بھیجیں۔' },
      { step: 2, title: 'ادارے کی آزادانہ تصدیق کریں۔', description: 'چیٹ میں دیے گئے لنکس پر کبھی کلک نہ کریں۔ سرکاری ویب سائٹ تلاش کریں۔', simpleText: 'کمپنی کی اصلی ویب سائٹ خود چیک کریں۔' },
      { step: 3, title: 'سرکاری رجسٹر چیک کریں۔', description: 'سرکاری پورٹل پر رجسٹریشن نمبر کی تصدیق کریں۔', simpleText: 'چیک کریں کہ کیا یہ رجسٹرڈ ادارہ ہے۔' },
      { step: 4, title: 'OTP یا پن شیئر نہ کریں اور APK ڈاؤن لوڈ نہ کریں۔', description: 'قانونی ادارے کبھی بھی آپ کا UPI پن یا پاس ورڈ نہیں مانگتے۔', simpleText: 'اپنا OTP کسی کو نہ بتائیں۔' },
      { step: 5, title: 'فوری شکایت درج کریں۔', description: 'اگر رقم بھیج دی ہے تو فوری طور پر قومی سائبر ہیلپ لائن 1930 پر کال کریں۔', simpleText: 'اگر رقم بھیجی ہے تو فوری 1930 پر کال کریں۔' }
    ]
  };

  const currentLangSteps = defaultStepsByLang[currentLanguage] || defaultStepsByLang.en;

  // Use localized safeSteps if analysis already holds them in matching language, else fallback to currentLangSteps
  const steps = analysis.safeSteps && analysis.safeSteps.length > 0 && analysis.languageDetected === currentLanguage
    ? analysis.safeSteps
    : currentLangSteps;

  const stepsSpeechText = `${t.safeStepsTitle}. ${t.safeStepsSubtitle}. ${steps.map(s => `${s.step}. ${s.title}: ${simpleMode ? s.simpleText : s.description}`).join('. ')}`;

  return (
    <GlassTile variant="blue" className="p-6 sm:p-8 space-y-6">
      
      {/* Title & Speech */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-800 uppercase tracking-wider font-semibold">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{t.safeStepsBadge}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-light text-[#0F172A]">
            {t.safeStepsTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
            {t.safeStepsSubtitle}
          </p>
        </div>

        {/* Section Scoped Audio Control */}
        <SectionAudioControl
          sectionId="safe_steps"
          textToSpeak={stepsSpeechText}
          currentLanguage={currentLanguage}
        />
      </div>

      {/* 5 Protective Steps */}
      <div className="space-y-3">
        {steps.map((step) => (
          <div
            key={step.step}
            className="p-4 rounded-2xl bg-white/70 border border-white flex items-start gap-4 shadow-sm"
          >
            <div className="w-7 h-7 rounded-xl bg-sky-100 text-sky-900 font-mono font-semibold text-xs flex items-center justify-center shrink-0 border border-sky-200 mt-0.5">
              0{step.step}
            </div>

            <div className="space-y-0.5 flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-[#0F172A]">
                {step.title}
              </h4>
              <p className="text-xs text-[#475569] font-light leading-relaxed">
                {simpleMode ? step.simpleText : step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-wrap items-center gap-3">
        <button
          onClick={onOpenOfficialSources}
          className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:shadow-[0_12px_28px_rgba(14,165,233,0.35)] transition-all flex items-center gap-2 cursor-pointer shadow-md"
        >
          <span>{t.viewSourcesButton}</span>
          <ExternalLink className="w-4 h-4 text-white" />
        </button>

        <button
          onClick={onToggleSimpleMode}
          className={`px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-light border transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
            simpleMode
              ? 'bg-sky-100 text-sky-900 border-sky-300 font-semibold'
              : 'bg-white/70 text-[#0F172A] hover:bg-white border-white/90'
          }`}
        >
          <Sparkles className="w-4 h-4 text-sky-600" />
          <span>{simpleMode ? t.simpleModeActive : t.simpleMode}</span>
        </button>
      </div>

    </GlassTile>
  );
};
