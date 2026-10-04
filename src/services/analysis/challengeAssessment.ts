import { ChallengeResult, AnalysisResult, Language } from '../../types/analysis';

export function runChallengeVerification(
  analysis: AnalysisResult,
  language: Language = 'en'
): Promise<ChallengeResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const hasAuthority = analysis.signals.some(s => s.category === 'authority_claim');

      const localizedData: Record<
        Language,
        {
          initial: string;
          hypothesis: string;
          checks: string[];
          contradictory: string;
          nuanced: string;
        }
      > = {
        en: {
          initial: `${analysis.signalsCount} high-risk warning signals initially identified.`,
          hypothesis: "Investigating whether legitimate financial intermediaries or regulated investment products could account for this communication.",
          checks: [
            "Could this be a SEBI-registered Portfolio Management Service (PMS) or Alternative Investment Fund (AIF)? Evaluated: Regulated PMS/AIFs require formal client onboarding, minimum ₹50 Lakh threshold, and are legally barred from assuring returns on chat.",
            ...(hasAuthority
              ? [
                  "Could the sender be an authorized agent of a registered Research Analyst? Evaluated: The message lacks mandatory statutory disclosures (10-digit SEBI Registration Number, Corporate Office, Grievance Officer details)."
                ]
              : []),
            "Could the payment be a standard commercial subscription fee? Evaluated: The requested funds are directed to an unverified private UPI/account without GST invoice or corporate tax identification."
          ],
          contradictory: "PARAKH specifically examined whether this could be a legitimate promotional campaign, a SEBI-registered subscription, or a commercial fee. However, no statutory exemption permits guaranteed return claims, unlisted IPO allocation via private UPI, or unverified regulatory endorsements under Indian law.",
          nuanced: "Assessment confirmed: Even when considering legitimate financial models, the detected behavioral signals (especially assured returns and private payment destination) strictly deviate from lawful Indian regulatory compliance."
        },
        kn: {
          initial: `${analysis.signalsCount} ಹೆಚ್ಚಿನ ಅಪಾಯದ ಎಚ್ಚರಿಕೆ ಸಂಕೇತಗಳನ್ನು ಆರಂಭದಲ್ಲಿ ಗುರುತಿಸಲಾಗಿದೆ.`,
          hypothesis: "ಯಾವುದಾದರೂ ಅಧಿಕೃತ ಹಣಕಾಸು ಮಧ್ಯವರ್ತಿ ಅಥವಾ ನೋಂದಾಯಿತ ಹೂಡಿಕೆ ಸಂಸ್ಥೆಯು ಈ ಸಂದೇಶಕ್ಕೆ ಸಮರ್ಥನೆ ನೀಡಬಹುದೇ ಎಂದು ತನಿಖೆ ಮಾಡಲಾಗುತ್ತಿದೆ.",
          checks: [
            "ಇದು SEBI ನೋಂದಾಯಿತ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ ಸರ್ವಿಸ್ (PMS) ಅಥವಾ AIF ಆಗಿರಬಹುದೇ? ಮೌಲ್ಯಮಾಪನ: ನಿಯಂತ್ರಿತ PMS ಗೆ ಕನಿಷ್ಠ ₹50 ಲಕ್ಷ ಹೂಡಿಕೆ ಮಿತಿ ಮತ್ತು ಲಿಖಿತ ಒಪ್ಪಂದ ಕಡ್ಡಾಯವಾಗಿದೆ, ಚಾಟ್‌ನಲ್ಲಿ ಲಾಭದ ಭರವಸೆ ನೀಡುವುದು ಕಾನೂನುಬಾಹಿರ.",
            ...(hasAuthority
              ? [
                  "ಸಂದೇಶ ಕಳುಹಿಸಿದವರು ನೋಂದಾಯಿತ ರಿಸರ್ಚ್ ಅನಲಿಸ್ಟ್‌ನ ಅಧಿಕೃತ ಪ್ರತಿನಿಧಿಯೇ? ಮೌಲ್ಯಮಾಪನ: ಸಂದೇಶದಲ್ಲಿ ಕಡ್ಡಾಯ ಶಾಸನಬದ್ಧ ವಿವರಗಳು (10-ಅಂಕಿಯ SEBI ನೋಂದಣಿ ಸಂಖ್ಯೆ, ಕಚೇರಿ ವಿಳಾಸ) ಇಲ್ಲ."
                ]
              : []),
            "ಪಾವತಿಯು ಸಾಮಾನ್ಯ ವಾಣಿಜ್ಯ ಸೇವಾ ಶುಲ್ಕವಾಗಿರಬಹುದೇ? ಮೌಲ್ಯಮಾಪನ: ಹಣವನ್ನು GST ಇನ್‌ವಾಯ್ಸ್ ಇಲ್ಲದೆ ಖಾಸಗಿ UPI/ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಕಳುಹಿಸಲು ಕೇಳಲಾಗಿದೆ, ಇದು ಅನುಮಾನಾಸ್ಪದವಾಗಿದೆ."
          ],
          contradictory: "PARAKH ಇದು ಅಧಿಕೃತ ಪ್ರಚಾರ, ನೋಂದಾಯಿತ ಸೇವೆ ಅಥವಾ ವಾಣಿಜ್ಯ ಶುಲ್ಕವೇ ಎಂದು ನಿರ್ದಿಷ್ಟವಾಗಿ ಮರುಪರಿಶೀಲಿಸಿದೆ. ಆದರೆ ಭಾರತೀಯ ಕಾನೂನಿನ ಪ್ರಕಾರ ಗ್ಯಾರಂಟಿ ಲಾಭದ ಭರವಸೆ ನೀಡುವುದನ್ನು ಅಥವಾ ಖಾಸಗಿ ಖಾತೆಗೆ ಹಣ ಸಂಗ್ರಹಿಸುವುದನ್ನು ಯಾವುದೇ ನಿಯಮವು ಅನುಮತಿಸುವುದಿಲ್ಲ.",
          nuanced: "ಮರುಪರಿಶೀಲನೆಯಲ್ಲೂ ದೃಢಪಟ್ಟಿದೆ: ಕಾನೂನುಬದ್ಧ ಹಣಕಾಸು ಮಾದರಿಗಳನ್ನು ಪರಿಗಣಿಸಿದಾಗಲೂ, ಪತ್ತೆಯಾದ ನಡವಳಿಕೆ ಸಂಕೇತಗಳು (ವಿಶೇಷವಾಗಿ ಖಾತರಿ ಲಾಭ ಮತ್ತು ಖಾಸಗಿ ಪಾವತಿ) ಭಾರತೀಯ ಕಾನೂನು ನಿಯಮಗಳಿಗೆ ವಿರುದ್ಧವಾಗಿವೆ."
        },
        hi: {
          initial: `${analysis.signalsCount} उच्च जोखिम वाले चेतावनी संकेत शुरू में पहचाने गए थे।`,
          hypothesis: "यह जांच की जा रही है कि क्या कोई वैध वित्तीय मध्यस्थ या पंजीकृत संस्था इस संदेश के पीछे हो सकती है।",
          checks: [
            "क्या यह सेबी-पंजीकृत पोर्टफोलियो मैनेजमेंट सर्विस (PMS) या AIF हो सकता है? मूल्यांकन: विनियमित पीएमएस के लिए न्यूनतम ₹50 लाख की सीमा और औपचारिक अनुबंध अनिवार्य है, चैट पर रिटर्न का वादा पूरी तरह अवैध है।",
            ...(hasAuthority
              ? [
                  "क्या प्रेषक किसी पंजीकृत रिसर्च एनालिस्ट का अधिकृत एजेंट हो सकता है? मूल्यांकन: संदेश में अनिवार्य वैधानिक खुलासे (10-अंकीय सेबी पंजीकरण संख्या, कार्यालय पता) गायब हैं।"
                ]
              : []),
            "क्या भुगतान सामान्य व्यावसायिक सदस्यता शुल्क हो सकता है? मूल्यांकन: पैसे बिना जीएसटी इनवॉइस के निजी यूपीआई/खाते में मांगे गए हैं, जो नियामक मानकों के विपरीत है।"
          ],
          contradictory: "परख ने विशेष रूप से जांच की कि क्या यह कोई वैध प्रचार अभियान या व्यावसायिक शुल्क हो सकता है। हालांकि, भारतीय कानून के तहत गारंटीड रिटर्न के दावे या निजी यूपीआई पर धन एकत्र करने की कोई अनुमति नहीं है।",
          nuanced: "समीक्षा के बाद भी पुष्टि हुई: वैध वित्तीय मॉडलों पर विचार करने के बावजूद, पाए गए व्यवहार संबंधी संकेत (विशेषकर निश्चित रिटर्न और निजी खाता) भारतीय विनियामक अनुपालन का सीधा उल्लंघन करते हैं।"
        },
        te: {
          initial: `${analysis.signalsCount} అధిక ప్రమాద హెచ్చరిక సంకేతాలు ప్రారంభంలో గుర్తించబడ్డాయి.`,
          hypothesis: "ఏదైనా చట్టబద్ధమైన ఆర్థిక సంస్థ లేదా నమోదిత మధ్యవర్తి ఈ సందేశానికి సమర్థనగా ఉండవచ్చా అని దర్యాప్తు చేయబడుతోంది.",
          checks: [
            "ఇది SEBI నమోదిత పోర్ట్‌ఫోలియో మేనేజ్‌మెంట్ సర్వీస్ (PMS) లేదా AIF కావచ్చా? మూల్యాంకనం: నియంత్రిత PMS కు కనీసం ₹50 లక్షల పరిమితి మరియు ఒప్పందం తప్పనిసరి, చాట్‌లో లాభాల హామీ ఇవ్వడం చట్టవిరుద్ధం.",
            ...(hasAuthority
              ? [
                  "సందేశం పంపినవారు నమోదిత రీసెర్చ్ అనలిస్ట్ యొక్క అధీకృత ఏజెంట్ కావచ్చా? మూల్యాంకనం: సందేశంలో తప్పనిసరి చట్టబద్ధమైన వివరాలు (10-అంకెల SEBI రిజిస్ట్రేషన్ నంబర్, కార్యాలయ చిరునామా) లేవు."
                ]
              : []),
            "చెల్లింపు సాధారణ వాణిజ్య సభ్యత్వ రుసుము కావచ్చా? మూల్యాంకనం: నిధులు GST ఇన్వాయిస్ లేకుండా ప్రైవేట్ UPI/ఖాతాకు మళ్లించబడుతున్నాయి, ఇది నిబంధనలకు విరుద్ధం."
          ],
          contradictory: "PARAKH ఇది చట్టబద్ధమైన ప్రచారమా లేదా వాణిజ్య రుసుమా అని ప్రత్యేకంగా పరిశీలించింది. అయితే, భారతీయ చట్టాల ప్రకారం గ్యారెంటీ లాభాల వాదనలను లేదా ప్రైవేట్ UPI కి నిధులను బదిలీ చేయడాన్ని ఏ మినహాయింపు కూడా అనుమతించదు.",
          nuanced: "పునఃపరిశీలనలో నిర్ధారించబడింది: చట్టబద్ధమైన ఆర్థిక నమూనాలను పరిగణనలోకి తీసుకున్నప్పటికీ, గుర్తించబడిన ప్రవర్తనా సంకేతాలు (ముఖ్యంగా హామీ ఇవ్వబడిన లాభాలు మరియు ప్రైవేట్ చెల్లింపు) భారతీయ నియంత్రణ నిబంధనల నుండి ఖచ్చితంగా విచలనం చెందుతున్నాయి."
        }
      };

      const data = localizedData[language] || localizedData.en;

      resolve({
        isChecking: false,
        initialAssessmentSummary: data.initial,
        investigatedHypothesis: data.hypothesis,
        legitimizingEvidenceFound: data.checks,
        contradictoryEvidenceSummary: data.contradictory,
        updatedNuancedAssessment: data.nuanced,
        isAssessmentAltered: false
      });
    }, 1800);
  });
}
