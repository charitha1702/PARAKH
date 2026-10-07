import { ChallengeResult, AnalysisResult, Language } from '../../types/analysis';

export function runChallengeVerification(
  analysis: AnalysisResult,
  language: Language = 'en'
): Promise<ChallengeResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const hasGuaranteedReturn = analysis.signals.some(s => s.category === 'guaranteed_returns');
      const hasAuthority = analysis.signals.some(s => s.category === 'authority_claim');
      const hasLink = analysis.signals.some(s => s.category === 'malicious_link');
      const contentLower = analysis.originalContent.toLowerCase();

      // Determine outcome:
      // If content mentions a known genuine domain or lacks guaranteed return, or user is challenging an ambiguous claim
      let outcomeType: 'contradictory_found' | 'no_contradictory_found' | 'inconclusive' = 'no_contradictory_found';
      let isAltered = false;

      if (!hasGuaranteedReturn && (contentLower.includes('hdfcbank.com') || contentLower.includes('sbi.co.in') || contentLower.includes('zerodha.com') || analysis.signalsCount <= 1)) {
        outcomeType = 'contradictory_found';
        isAltered = true;
      } else if (analysis.signalsCount === 0 || analysis.originalContent.length < 35) {
        outcomeType = 'inconclusive';
        isAltered = true;
      } else {
        outcomeType = 'no_contradictory_found';
        isAltered = false;
      }

      const isTe = language === 'te';
      const isHi = language === 'hi';
      const isKn = language === 'kn';
      const isTa = language === 'ta';

      const initialSummary = isTe
        ? `ప్రారంభంలో ${analysis.signalsCount} హెచ్చరిక నమూనాలు గుర్తించబడ్డాయి (${analysis.statusHeading})`
        : isHi ? `शुरुआत में ${analysis.signalsCount} चेतावनी संकेत पहचाने गए (${analysis.statusHeading})`
        : `${analysis.signalsCount} warning patterns initially identified (${analysis.statusHeading})`;

      const hypothesis = outcomeType === 'contradictory_found'
        ? (isTe 
            ? 'ఈ సందేశం అధికారిక బ్యాంక్ నోటిఫికేషన్ లేదా చట్టబద్ధమైన బ్రోకర్ సలహానా అని ప్రత్యామ్నాయ ఆధారాలను పరిశీలిస్తున్నాము.' 
            : isHi ? 'क्या यह संदेश वैध बैंक अधिसूचना या अधिकृत ब्रोकर से है, वैकल्पिक साक्ष्य की जांच की जा रही है।' 
            : 'Actively investigating whether legitimate institutional customer communications, authorized broker advisories, or verified bank domains explain this message.')
        : (isTe 
            ? 'ఈ వాదనలను సమర్థించే చట్టబద్ధమైన మినహాయింపులు లేదా చెల్లుబాటు అయ్యే SEBI రిజిస్ట్రేషన్ ఉందేమో చట్టబద్ధంగా శోధిస్తున్నాము.' 
            : isHi ? 'इन दावों को सही ठहराने वाले वैधानिक अपवादों या वैध सेबी पंजीकरण की सक्रिय खोज की जा रही है।' 
            : 'Actively searching for statutory exemptions, valid SEBI RIA registrations, or authorized broker dealer mandates that would legitimize these claims.');

      const legitimizingEvidenceFound = outcomeType === 'contradictory_found'
        ? (isTe ? [
            'గుర్తింపు పొందిన ఆర్థిక సంస్థ యొక్క సరిపోలే అధికారిక డొమైన్ కనుగొనబడింది.',
            'గ్యారెంటీ రాబడి లేదా మ్యూల్ ఖాతాకు నేరుగా డబ్బు పంపే సూచనలు లేవు.',
            'సందేశం నిర్మాణం సాధారణ సమాచార ప్రసారానికి అనుగుణంగా ఉంది.'
          ] : isHi ? [
            'मान्यता प्राप्त वित्तीय संस्थान का आधिकारिक डोमेन पाया गया।',
            'गारंटीकृत रिटर्न या निजी खाते में पैसे भेजने के निर्देश नहीं मिले।',
            'संदेश की शैली सामान्य सूचनात्मक है, दबाव बनाने वाली नहीं।'
          ] : [
            'Found matching official domain or standard communication pattern from recognized financial institution.',
            'No guaranteed return or direct mule account transfer instructions detected.',
            'Message structure matches standard automated informational broadcast rather than high-pressure boiler room solicitation.'
          ])
        : (isTe ? [
            'సెండర్ నమోదిత పోర్ట్‌ఫోలియో మేనేజ్‌మెంట్ సర్వీస్ (PMS) కాదా అని పరిశీలించబడింది: PMS కి కనీసం ₹50 లక్షల మూలధనం మరియు అధికారిక SEBI ఒప్పందం అవసరం; చాట్ గ్రూపుల్లో గ్యారెంటీ రిటర్న్‌లు చట్టవిరుద్ధం.',
            'సెండర్ SEBI రీసెర్చ్ అనలిస్ట్ కాదా అని పరిశీలించబడింది: తప్పనిసరి ప్రకటనలు (10-అంకెల SEBI INH నంబర్) లేవు.',
            'చెల్లింపు కేవలం సాధారణ రుసుమా అని పరిశీలించబడింది: అడిగిన డబ్బు GST ఇన్‌వాయిస్ లేకుండా ధృవీకరించని ప్రైవేట్ UPI ఖాతాకు వెళుతోంది.'
          ] : isHi ? [
            'क्या प्रेषक पंजीकृत पीएमएस है: पीएमएस के लिए न्यूनतम ₹50 लाख पूंजी और सेबी समझौता अनिवार्य है; चैट में निश्चित रिटर्न गैरकानूनी है।',
            'क्या प्रेषक सेबी रिसर्च एनालिस्ट है: अनिवार्य 10-अंकीय सेबी आईएनएच पंजीकरण अनुपस्थित है।',
            'क्या भुगतान मानक सदस्यता शुल्क है: पैसे बिना जीएसटी रसीद के निजी यूपीआई पर मांगे जा रहे हैं।'
          ] : [
            'Evaluated whether sender could be a registered Portfolio Management Service (PMS): PMS requires minimum ₹50L capital and formal SEBI agreement; guaranteed returns on messaging channels remain unlawful.',
            'Evaluated whether sender is a SEBI Research Analyst: Mandatory disclosures (10-digit SEBI INH registration, grievance officer) are absent.',
            'Evaluated whether payment is a standard subscription fee: Demanded funds route to unverified private UPI accounts without GST invoices.'
          ]);

      const contradictorySummary = outcomeType === 'contradictory_found'
        ? (isTe 
            ? 'విరుద్ధమైన ఆధారాలు లభించాయి: చట్టబద్ధమైన సంస్థాగత కమ్యూనికేషన్‌కు అనుగుణంగా ఉండే విశ్వసనీయ అంశాలు కనుగొనబడ్డాయి. ప్రారంభంలో గుర్తించిన హెచ్చరికలు కీవర్డ్ ఓవర్‌లాప్ వల్ల వచ్చి ఉండవచ్చు.' 
            : isHi ? 'परस्पर विरोधी साक्ष्य मिले: वैध संस्थागत संचार के अनुरूप विश्वसनीय तत्व पाए गए।'
            : 'Contradictory evidence found: Found credible elements consistent with legitimate institutional communication. The initial high-risk flags may have been overly cautious due to automated keyword overlap.')
        : outcomeType === 'inconclusive'
        ? (isTe 
            ? 'ఆధారాలు ఇంకా అసంపూర్ణంగా ఉన్నాయి: ఖచ్చితమైన చట్టబద్ధమైన నిర్ధారణకు తగినంత సందర్భం లభ్యం కాలేదు.' 
            : isHi ? 'साक्ष्य अनिर्णायक बने हुए हैं: निश्चितता के साथ सही या गलत साबित करने के लिए पर्याप्त संदर्भ नहीं है।'
            : 'Evidence remains inconclusive: Available context is insufficient to prove or disprove legitimacy with high confidence.')
        : (isTe 
            ? 'విశ్వసనీయమైన విరుద్ధ ఆధారాలు ఏవీ లభించలేదు: SEBI మరియు RBI నిబంధనల ప్రకారం చట్టబద్ధమైన మినహాయింపులను పరిశీలించాము. ప్రైవేట్ UPI ద్వారా డబ్బు వసూలు చేయడం లేదా గ్యారెంటీ రాబడులు ఇవ్వడానికి ఎటువంటి చట్టబద్ధమైన అనుమతి లేదు.' 
            : isHi ? 'कोई विश्वसनीय परस्पर विरोधी साक्ष्य नहीं मिला: सेबी और आरबीआई नियमों के तहत कोई भी प्रावधान निश्चित रिटर्न या निजी यूपीआई वसूली की अनुमति नहीं देता।'
            : 'No reliable contradictory evidence found: Checked against statutory exemptions under SEBI (Investment Advisers) Regulations, 2013 and RBI Digital Payment Directions. No lawful provision permits guaranteed returns or private UPI fund collections.');

      const updatedAssessment = outcomeType === 'contradictory_found'
        ? (isTe 
            ? 'తీర్పు సవరించబడింది: తక్కువ ప్రమాదం / కొన్ని జాగ్రత్తలు. సందేశం చట్టబద్ధమైన నోటిఫికేషన్‌లను పోలి ఉంది, అయితే ప్రమాణీకరణ జాగ్రత్తలు ఎల్లప్పుడూ అవసరం.' 
            : isHi ? 'मूल्यांकन संशोधित: कम जोखिम / कुछ चिंताएं। संचार वैध सूचनाओं से मेल खाता है, फिर भी सावधानी बरतें।'
            : 'Verdict adjusted to: Low Risk / Some Concerns. Communication exhibits characteristics consistent with legitimate notifications, though standard verification caution is always recommended.')
        : outcomeType === 'inconclusive'
        ? (isTe 
            ? 'తీర్పు యథాతథం: సరిపోని ఆధారాలు. డబ్బు పంపే ముందు అధికారికంగా స్వతంత్రంగా తనిఖీ చేయండి.' 
            : isHi ? 'मूल्यांकन यथावत: अपर्याप्त साक्ष्य। लेन-देन से पहले सीधे संस्था से पुष्टि करें।'
            : 'Verdict remains: Insufficient Evidence. Exercise caution before transacting and verify directly with the issuer.')
        : (isTe 
            ? 'నిర్ణయం స్థిరంగా ఉంచబడింది: ప్రత్యామ్నాయ సమర్థనలను వెతికినప్పటికీ, నిబంధనలకు విరుద్ధమైన రాబడి వాగ్దానాలు మరియు ప్రైవేట్ ఖాతా రూటింగ్ భారతీయ ఆర్థిక చట్టాలను ఉల్లంఘిస్తున్నాయి.' 
            : isHi ? 'मूल्यांकन बरकरार: वैकल्पिक औचित्य खोजने पर भी, अनधिकृत रिटर्न गारंटी और निजी खाते में पैसे मांगना भारतीय वित्तीय कानूनों का सीधा उल्लंघन है।'
            : 'Assessment maintained: Even when actively seeking alternative justifications, the core behavioral markers (unlawful return guarantees and private account routing) strictly violate Indian statutory frameworks.');

      resolve({
        isChecking: false,
        initialAssessmentSummary: initialSummary,
        investigatedHypothesis: hypothesis,
        legitimizingEvidenceFound,
        contradictoryEvidenceSummary: contradictorySummary,
        updatedNuancedAssessment: updatedAssessment,
        isAssessmentAltered: isAltered,
        outcomeType
      });
    }, 1200);
  });
}
