import { Language } from '../types/analysis';

export interface LocalizedScamTopic {
  id: string;
  title: string;
  category: string;
  tagline: string;
  howItWorks: string;
  typicalHook: string;
  redFlags: string[];
  safeAction: string;
  regulatoryFact: string;
}

export const LEARN_SCAM_TOPICS: Record<Language, LocalizedScamTopic[]> = {
  en: [
    {
      id: 'guaranteed-returns',
      title: 'Guaranteed Returns',
      category: 'Market Fraud',
      tagline: 'The mathematical impossibility of risk-free market returns.',
      howItWorks: 'Scammers promise daily or monthly profits (e.g., 20% to 50% guaranteed) on intraday, options, or crypto trading. Early small "profits" are often fake numbers on a screen or paid from newer victims\' deposits (Ponzi structure).',
      typicalHook: '"100% Capital Protection with 40% monthly profit guaranteed. Loss recovery package available."',
      redFlags: [
        'Any promise of fixed or guaranteed returns on equities, derivatives, or commodities.',
        'Claims of proprietary "insider algorithms" with zero loss rate.',
        'Refusal to disclose actual audited trade statements through regulated broker channels.'
      ],
      safeAction: 'Remember: SEBI regulations strictly prohibit any registered intermediary from promising assured or fixed returns on stock market investments.',
      regulatoryFact: 'SEBI (Investment Advisers) Regulations, 2013 and SEBI (Research Analysts) Regulations, 2014 prohibit any guaranteed return scheme.'
    },
    {
      id: 'fake-authority',
      title: 'Fake Authority & Regulators',
      category: 'Impersonation',
      tagline: 'Using logos of SEBI, RBI, or Police to manufacture false legitimacy.',
      howItWorks: 'Fraudsters craft doctored certificates with government seals, fake letterheads claiming to be "SEBI Registered Institutional Research Desk," or spoofed CBI/Police notices alleging your money is under legal review.',
      typicalHook: '"SEBI Approved Research Sir, verify our certificate. We have special institutional license."',
      redFlags: [
        'Sending photos or PDFs of certificates with mismatched registration numbers or misspelled legal terms.',
        'Claiming SEBI itself "approves" individual WhatsApp tips or guarantees deposits.',
        'Demanding payment of "verification fees" or "regulatory taxes" into personal bank accounts.'
      ],
      safeAction: 'Never trust a certificate sent over chat. Open sebi.gov.in directly and cross-check the registration number against the official public registry.',
      regulatoryFact: 'SEBI is a regulatory body; it never endorses individual stock tips, issues clearance certificates to private groups, or collects money on chat.'
    },
    {
      id: 'urgency-scarcity',
      title: 'Urgency & Scarcity Traps',
      category: 'Psychological Coercion',
      tagline: 'Forcing rash decisions through artificial countdowns.',
      howItWorks: 'Scammers invent arbitrary limits ("Only 3 slots remaining," "Offer expires at 5:00 PM today") to deny you time to consult family, verify credentials, or think rationally.',
      typicalHook: '"Batch closes in 20 minutes! Don\'t miss this 500% Diwali institutional rally."',
      redFlags: [
        'High-pressure insistence on transferring money right now.',
        'Aggressive continuous voice calls or voice notes badgering you to pay before checking.',
        'Threats that the discount or opportunity will be given to someone else immediately.'
      ],
      safeAction: 'Always apply the 24-Hour Rule: Legitimate financial investments never expire in 20 minutes. Deliberately sleep on any high-stakes decision.',
      regulatoryFact: 'Legitimate SEBI-registered brokers and advisers are legally obligated to provide a cooling-off period and risk-profiling documentation before onboarding.'
    },
    {
      id: 'private-payment-routing',
      title: 'Private Payment Routing',
      category: 'Mule Accounts',
      tagline: 'Directing investor funds to personal savings UPI handles.',
      howItWorks: 'Instead of having you deposit into a SEBI-registered broker’s institutional clearing corporation bank account, scammers ask you to send UPI transfers to random personal accounts (money mule networks).',
      typicalHook: '"Send ₹15,000 to our clearing executive UPI: rahulsharma99@okaxis and send screenshot."',
      redFlags: [
        'UPI VPA belongs to an individual person instead of a verified merchant or broker corporate entity.',
        'Frequent changes to the payment recipient bank account details for each transaction.',
        'Requesting payment via gift cards, crypto transfers, or cash deposits at bank branches.'
      ],
      safeAction: 'In India, legitimate stock market investments MUST be funded through your own bank account linked to your verified trading/demat account or via official exchange clearing corporations.',
      regulatoryFact: 'SEBI mandates that funds can only be collected in designated client bank accounts strictly audited by stock exchanges.'
    },
    {
      id: 'part-time-task',
      title: 'Part-Time Task & Video Like Scams',
      category: 'Job Fraud',
      tagline: 'Small payouts upfront, devastating losses on "VIP prepaid tasks."',
      howItWorks: 'Victims are recruited via Telegram/WhatsApp to like YouTube videos or write hotel reviews for ₹50–₹150 payouts. Once trust is built, they are lured into "prepaid crypto/merchant tasks" requiring ₹5,000 to ₹5,00,000, which can never be withdrawn.',
      typicalHook: '"Earn ₹3000 daily from home. 3 tasks completed = ₹450 credited to your UPI instantly."',
      redFlags: [
        'Being paid small amounts via UPI for trivial tasks like liking public videos.',
        'Being redirected to Telegram groups with fake members celebrating massive "VIP task payouts."',
        'Requirements to deposit money to "unlock" or "withdraw" earned commissions.'
      ],
      safeAction: 'Any "job" that asks you to deposit your own money to unlock tasks or withdraw earnings is 100% fraudulent. Stop immediately upon the first prepaid task request.',
      regulatoryFact: 'Cyber crime cells report that task scams are the #1 source of retail financial fraud complaints registered on National Helpline 1930.'
    },
    {
      id: 'unlisted-pre-ipo',
      title: 'Fake Pre-IPO & Unlisted Shares',
      category: 'Investment Fraud',
      tagline: 'Promising guaranteed IPO allotment at deep discounts.',
      howItWorks: 'Scammers claim to possess "special institutional quotas" for high-profile upcoming IPOs (e.g., Tata, Reliance Retail, Swiggy) at 60% below market price. Victims pay money but never receive demat credits.',
      typicalHook: '"Pre-IPO institutional allotment guaranteed! 100 shares confirmed before retail bidding opens."',
      redFlags: [
        'Claims of "guaranteed IPO allotment" outside the official exchange ASBA process.',
        'Asking for payments to accounts other than your own self-certified syndicate bank via ASBA.',
        'Promises of deep discounts unavailable to the general public.'
      ],
      safeAction: 'Remember: In India, public IPO applications must strictly use ASBA (Application Supported by Blocked Amount), where money remains blocked in your own bank account until allotment.',
      regulatoryFact: 'SEBI circulars stipulate that public IPO allocation is handled strictly through automated lottery/pro-rata allotment governed by the registrar.'
    }
  ],

  kn: [
    {
      id: 'guaranteed-returns',
      title: 'ಖಾತರಿಯ ಲಾಭ (ಗ್ಯಾರಂಟಿ ರಿಟರ್ನ್ಸ್)',
      category: 'ಮಾರುಕಟ್ಟೆ ವಂಚನೆ',
      tagline: 'ಅಪಾಯವಿಲ್ಲದೆ ಷೇರು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ನಿಶ್ಚಿತ ಲಾಭ ಗಳಿಸುವುದು ಗಣಿತದ ಪ್ರಕಾರ ಅಸಾಧ್ಯ.',
      howItWorks: 'ವಂಚಕರು ಇಂಟ್ರಾಡೇ, ಆಪ್ಷನ್ಸ್ ಅಥವಾ ಕ್ರಿಪ್ಟೋ ಟ್ರೇಡಿಂಗ್‌ನಲ್ಲಿ ದಿನಕ್ಕೆ ಅಥವಾ ತಿಂಗಳಿಗೆ 20% ರಿಂದ 50% ನಿಶ್ಚಿತ ಲಾಭದ ಭರವಸೆ ನೀಡುತ್ತಾರೆ. ಆರಂಭದಲ್ಲಿ ತೋರಿಸುವ ಸಣ್ಣ ಲಾಭಗಳು ಕೇವಲ ಕಂಪ್ಯೂಟರ್ ಪರದೆಯ ಮೇಲಿನ ನಕಲಿ ಅಂಕಿಅಂಶಗಳಾಗಿರುತ್ತವೆ ಅಥವಾ ಹೊಸ ಜನರ ಹಣದಿಂದ ನೀಡಲಾಗುವ ಪೋನ್ಜಿ ಮಾದರಿಯಾಗಿರುತ್ತವೆ.',
      typicalHook: '"100% ಬಂಡವಾಳ ಸುರಕ್ಷತೆಯೊಂದಿಗೆ ತಿಂಗಳಿಗೆ 40% ಗ್ಯಾರಂಟಿ ಲಾಭ. ನಷ್ಟ ಪರಿಹಾರ ಪ್ಯಾಕೇಜ್ ಲಭ್ಯವಿದೆ."',
      redFlags: [
        'ಷೇರುಗಳು, ಡೆರಿವೇಟಿವ್ಸ್ ಅಥವಾ ಕಮಾಡಿಟಿಗಳಲ್ಲಿ ಯಾವುದೇ ರೀತಿಯ ನಿಶ್ಚಿತ ಅಥವಾ ಖಾತರಿ ಲಾಭದ ಭರವಸೆ.',
        'ಯಾವುದೇ ನಷ್ಟವಿಲ್ಲದ ರಹಸ್ಯ "ಇನ್‌ಸೈಡರ್ ಅಲ್ಗಾರಿದಮ್" ಇದೆ ಎಂದು ಹೇಳಿಕೊಳ್ಳುವುದು.',
        'ಅಧಿಕೃತ ಬ್ರೋಕರ್ ಮೂಲಕ ಆಡಿಟ್ ಮಾಡಿದ ನೈಜ ಟ್ರೇಡಿಂಗ್ ವರದಿಗಳನ್ನು ತೋರಿಸಲು ನಿರಾಕರಿಸುವುದು.'
      ],
      safeAction: 'ನೆನಪಿಡಿ: SEBI ನೋಂದಾಯಿತ ಯಾವುದೇ ಮಧ್ಯವರ್ತಿ ಅಥವಾ ಸಲಹೆಗಾರರು ಷೇರು ಮಾರುಕಟ್ಟೆ ಹೂಡಿಕೆಯಲ್ಲಿ ನಿಶ್ಚಿತ ಅಥವಾ ಖಾತರಿ ಲಾಭವನ್ನು ಭರವಸೆ ನೀಡುವುದನ್ನು ಕಾನೂನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧಿಸಿದೆ.',
      regulatoryFact: 'SEBI (ಹೂಡಿಕೆ ಸಲಹೆಗಾರರು) ನಿಯಮಗಳು 2013 ಮತ್ತು SEBI (ಸಂಶೋಧನಾ ವಿಶ್ಲೇಷಕರು) ನಿಯಮಗಳು 2014 ರ ಪ್ರಕಾರ ಯಾವುದೇ ಗ್ಯಾರಂಟಿ ಲಾಭದ ಯೋಜನೆ ಸಂಪೂರ್ಣ ಕಾನೂನುಬಾಹಿರ.'
    },
    {
      id: 'fake-authority',
      title: 'ನಕಲಿ ಪ್ರಾಧಿಕಾರ ಮತ್ತು ಸರ್ಕಾರಿ ಅಧಿಕಾರಿಗಳು',
      category: 'ನಕಲಿ ಗುರುತು',
      tagline: 'SEBI, RBI ಅಥವಾ ಪೋಲೀಸ್ ಲೋಗೋಗಳನ್ನು ಬಳಸಿ ಕಾನೂನುಬದ್ಧತೆಯ ಸುಳ್ಳು ಭ್ರಮೆ ಹುಟ್ಟಿಸುವುದು.',
      howItWorks: 'ವಂಚಕರು ಸರ್ಕಾರಿ ಮುದ್ರೆಗಳೊಂದಿಗೆ ನಕಲಿ ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ರಚಿಸುತ್ತಾರೆ, "SEBI ನೋಂದಾಯಿತ ಸಾಂಸ್ಥಿಕ ರಿಸರ್ಚ್ ಡೆಸ್ಕ್" ಎಂದು ನಕಲಿ ಲೆಟರ್‌ಹೆಡ್ ಬಳಸುತ್ತಾರೆ, ಅಥವಾ ನಿಮ್ಮ ಹಣ ಕಾನೂನು ತನಿಖೆಯಲ್ಲಿದೆ ಎಂದು ಸುಳ್ಳು CBI/ಪೊಲೀಸ್ ನೋಟಿಸ್ ಕಳುಹಿಸುತ್ತಾರೆ.',
      typicalHook: '"SEBI ಅನುಮೋದಿತ ರಿಸರ್ಚ್ ಸರ್, ನಮ್ಮ ಪ್ರಮಾಣಪತ್ರ ನೋಡಿ. ನಮಗೆ ವಿಶೇಷ ಸಾಂಸ್ಥಿಕ ಪರವಾನಗಿ ಇದೆ."',
      redFlags: [
        'ಹೊಂದಾಣಿಕೆಯಾಗದ ನೋಂದಣಿ ಸಂಖ್ಯೆ ಅಥವಾ ಕಾಗುಣಿತ ತಪ್ಪುಗಳಿರುವ ಪ್ರಮಾಣಪತ್ರಗಳ ಫೋಟೋ ಅಥವಾ PDF ಕಳುಹಿಸುವುದು.',
        'SEBI ಸ್ವತಃ ವಾಟ್ಸಾಪ್ ಟಿಪ್ಸ್‌ಗಳನ್ನು "ಅನುಮೋದಿಸಿದೆ" ಅಥವಾ ಠೇವಣಿಗಳಿಗೆ ಗ್ಯಾರಂಟಿ ನೀಡಿದೆ ಎಂದು ಹೇಳುವುದು.',
        'ವೈಯಕ್ತಿಕ ಬ್ಯಾಂಕ್ ಖಾತೆಗಳಿಗೆ "ಪರಿಶೀಲನಾ ಶುಲ್ಕ" ಅಥವಾ "ತೆರಿಗೆ" ಪಾವತಿಸಲು ಒತ್ತಾಯಿಸುವುದು.'
      ],
      safeAction: 'ಚಾಟ್‌ನಲ್ಲಿ ಕಳುಹಿಸಲಾದ ಯಾವುದೇ ಪ್ರಮಾಣಪತ್ರವನ್ನು ಎಂದಿಗೂ ನಂಬಬೇಡಿ. ನೇರವಾಗಿ sebi.gov.in ತೆರೆದು ಅಧಿಕೃತ ಸಾರ್ವಜನಿಕ ರಿಜಿಸ್ಟ್ರಿಯೊಂದಿಗೆ ನೋಂದಣಿ ಸಂಖ್ಯೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.',
      regulatoryFact: 'SEBI ಒಂದು ನಿಯಂತ್ರಕ ಸಂಸ್ಥೆಯಾಗಿದೆ; ಇದು ಎಂದಿಗೂ ವೈಯಕ್ತಿಕ ಷೇರು ಸಲಹೆಗಳನ್ನು ಅನುಮೋದಿಸುವುದಿಲ್ಲ ಮತ್ತು ಚಾಟ್‌ನಲ್ಲಿ ಹಣ ವಸೂಲಿ ಮಾಡುವುದಿಲ್ಲ.'
    },
    {
      id: 'urgency-scarcity',
      title: 'ತುರ್ತು ಮತ್ತು ಸೀಮಿತ ಅವಕಾಶದ ಬಲೆಗಳು',
      category: 'ಮಾನಸಿಕ ಒತ್ತಡ',
      tagline: 'ಕೃತಕ ಕೌಂಟ್‌ಡೌನ್‌ಗಳ ಮೂಲಕ ಅವಸರದ ತೀರ್ಮಾನಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವಂತೆ ಮಾಡುವುದು.',
      howItWorks: 'ವಂಚಕರು "ಕೇವಲ 3 ಸೀಟುಗಳು ಉಳಿದಿವೆ", "ಆಫರ್ ಇಂದು ಸಂಜೆ 5:00 ಕ್ಕೆ ಮುಕ್ತಾಯಗೊಳ್ಳುತ್ತದೆ" ಎಂದು ನಕಲಿ ಗಡುವುಗಳನ್ನು ಸೃಷ್ಟಿಸಿ, ಕುಟುಂಬದೊಂದಿಗೆ ಚರ್ಚಿಸಲು ಅಥವಾ ಪರಿಶೀಲಿಸಲು ಸಮಯ ನೀಡದೆ ಒತ್ತಡ ಹೇರುತ್ತಾರೆ.',
      typicalHook: '"ಇನ್ನೂ ಕೇವಲ 20 ನಿಮಿಷಗಳಲ್ಲಿ ಬ್ಯಾಚ್ ಮುಕ್ತಾಯವಾಗುತ್ತದೆ! 500% ದೀಪಾವಳಿ ರಾಲಿಯ ಅವಕಾಶವನ್ನು ಕಳೆದುಕೊಳ್ಳಬೇಡಿ."',
      redFlags: [
        'ಈಗಲೇ ತಕ್ಷಣ ಹಣ ವರ್ಗಾವಣೆ ಮಾಡುವಂತೆ ತೀವ್ರ ಒತ್ತಡ ಹೇರುವುದು.',
        'ಪರಿಶೀಲಿಸುವ ಮೊದಲೇ ಹಣ ಪಾವತಿಸಲು ಒತ್ತಾಯಿಸಿ ನಿರಂತರ ಫೋನ್ ಕರೆಗಳು ಅಥವಾ ಧ್ವನಿ ಸಂದೇಶಗಳನ್ನು ಕಳುಹಿಸುವುದು.',
        'ಈ ಆಫರ್ ತಕ್ಷಣ ಬೇರೆಯವರಿಗೆ ಹೋಗುತ್ತದೆ ಎಂದು ಬೆದರಿಕೆ ಹಾಕುವುದು.'
      ],
      safeAction: 'ಯಾವಾಗಲೂ 24 ಗಂಟೆಗಳ ನಿಯಮವನ್ನು ಪಾಲಿಸಿ: ನಿಜವಾದ ಆರ್ಥಿಕ ಹೂಡಿಕೆಗಳು ಎಂದಿಗೂ 20 ನಿಮಿಷಗಳಲ್ಲಿ ಮುಗಿಯುವುದಿಲ್ಲ. ಯಾವುದೇ ದೊಡ್ಡ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವ ಮುನ್ನ ಕನಿಷ್ಠ ಒಂದು ರಾತ್ರಿ ಯೋಚಿಸಿ.',
      regulatoryFact: 'SEBI ನೋಂದಾಯಿತ ಬ್ರೋಕರ್‌ಗಳು ಗ್ರಾಹಕರನ್ನು ಸೇರಿಸಿಕೊಳ್ಳುವ ಮೊದಲು ಅಪಾಯದ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ನಿಯಮಿತ ದಾಖಲಾತಿಗಳನ್ನು ಒದಗಿಸುವುದು ಕಡ್ಡಾಯವಾಗಿದೆ.'
    },
    {
      id: 'private-payment-routing',
      title: 'ಖಾಸಗಿ ಖಾತೆಗಳಿಗೆ ಹಣ ವರ್ಗಾವಣೆ',
      category: 'ಮ್ಯೂಲ್ ಖಾತೆಗಳು',
      tagline: 'ಹೂಡಿಕೆದಾರರ ಹಣವನ್ನು ಅಪರಿಚಿತ ವೈಯಕ್ತಿಕ UPI ಖಾತೆಗಳಿಗೆ ಕಳುಹಿಸುವಂತೆ ಮಾಡುವುದು.',
      howItWorks: 'SEBI ನೋಂದಾಯಿತ ಬ್ರೋಕರ್‌ನ ಸಾಂಸ್ಥಿಕ ಕ್ಲಿಯರಿಂಗ್ ಕಾರ್ಪೊರೇಷನ್ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮಾ ಮಾಡುವ ಬದಲು, ವಂಚಕರು ಅಪರಿಚಿತ ವೈಯಕ್ತಿಕ ಉಳಿತಾಯ ಖಾತೆಗಳಿಗೆ UPI ಮೂಲಕ ಹಣ ಕಳುಹಿಸಲು ಹೇಳುತ್ತಾರೆ.',
      typicalHook: '"ನಮ್ಮ ಕ್ಲಿಯರಿಂಗ್ ಎಕ್ಸಿಕ್ಯೂಟಿವ್ UPI ಗೆ ₹15,000 ಕಳುಹಿಸಿ: rahulsharma99@okaxis ಮತ್ತು ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಹಂಚಿಕೊಳ್ಳಿ."',
      redFlags: [
        'UPI ವಿಳಾಸವು ಅಧಿಕೃತ ಕಂಪನಿಯ ಬದಲು ಒಬ್ಬ ಸಾಮಾನ್ಯ ವ್ಯಕ್ತಿಯ ಹೆಸರಿನಲ್ಲಿರುವುದು.',
        'ಪ್ರತಿ ವಹಿವಾಟಿಗೆ ಹಣ ಸ್ವೀಕರಿಸುವ ಬ್ಯಾಂಕ್ ಖಾತೆಯ ವಿವರಗಳು ಪದೇ ಪದೇ ಬದಲಾಗುವುದು.',
        'ಗಿಫ್ಟ್ ಕಾರ್ಡ್‌ಗಳು, ಕ್ರಿಪ್ಟೋ ಅಥವಾ ನೇರ ನಗದು ಜಮೆಯ ಮೂಲಕ ಹಣ ಪಾವತಿಸಲು ಕೇಳುವುದು.'
      ],
      safeAction: 'ಭಾರತದಲ್ಲಿ, ಷೇರು ಮಾರುಕಟ್ಟೆ ಹೂಡಿಕೆಗಳನ್ನು ಕೇವಲ ನಿಮ್ಮ ಸ್ವಂತ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜೋಡಿಸಲಾದ ಡಿಮ್ಯಾಟ್ ಖಾತೆ ಅಥವಾ ಅಧಿಕೃತ ಕ್ಲಿಯರಿಂಗ್ ಕಾರ್ಪೊರೇಷನ್‌ಗಳ ಮೂಲಕ ಮಾತ್ರ ಪಾವತಿಸಬೇಕು.',
      regulatoryFact: 'SEBI ನಿಯಮಗಳ ಪ್ರಕಾರ ಗ್ರಾಹಕರ ಹಣವನ್ನು ಕೇವಲ ಸ್ಟಾಕ್ ಎಕ್ಸ್‌ಚೇಂಜ್‌ಗಳು ಆಡಿಟ್ ಮಾಡುವ ಗೊತ್ತುಪಡಿಸಿದ ಬ್ಯಾಂಕ್ ಖಾತೆಗಳಲ್ಲಿ ಮಾತ್ರ ಸಂಗ್ರಹಿಸಬಹುದು.'
    },
    {
      id: 'part-time-task',
      title: 'ಪಾರ್ಟ್-ಟೈಮ್ ಟಾಸ್ಕ್ ಮತ್ತು ವಿಡಿಯೋ ಲೈಕ್ ವಂಚನೆ',
      category: 'ಉದ್ಯೋಗ ವಂಚನೆ',
      tagline: 'ಆರಂಭದಲ್ಲಿ ಸಣ್ಣ ಮೊತ್ತದ ಪಾವತಿ, ನಂತರ "VIP ಪ್ರಿಪೇಯ್ಡ್ ಟಾಸ್ಕ್" ಹೆಸರಿನಲ್ಲಿ ಭಾರಿ ನಷ್ಟ.',
      howItWorks: 'YouTube ವೀಡಿಯೊಗಳನ್ನು ಲೈಕ್ ಮಾಡಲು ಅಥವಾ ಹೋಟೆಲ್ ವಿಮರ್ಶೆಗಳನ್ನು ಬರೆಯಲು ₹50–₹150 ನೀಡುವ ಮೂಲಕ ಟೆಲಿಗ್ರಾಮ್/ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಜನರನ್ನು ಸೆಳೆಯಲಾಗುತ್ತದೆ. ನಂಬಿಕೆ ಬಂದ ನಂತರ, ₹5,000 ರಿಂದ ₹5,00,000 ವರೆಗೆ ಠೇವಣಿ ಇಡಬೇಕಾದ "ವಿಐಪಿ ಟಾಸ್ಕ್"ಗಳಿಗೆ ದೂಡಲಾಗುತ್ತದೆ, ಅದನ್ನು ಎಂದಿಗೂ ವಾಪಸ್ ಪಡೆಯಲಾಗುವುದಿಲ್ಲ.',
      typicalHook: '"ಮನೆಯಿಂದಲೇ ದಿನಕ್ಕೆ ₹3000 ಗಳಿಸಿ. 3 ಟಾಸ್ಕ್ ಪೂರ್ಣಗೊಂಡಿದೆ = ನಿಮ್ಮ UPI ಖಾತೆಗೆ ತಕ್ಷಣ ₹450 ಜಮೆಯಾಗಿದೆ."',
      redFlags: [
        'ವೀಡಿಯೊಗಳನ್ನು ಲೈಕ್ ಮಾಡುವಂತಹ ಸಣ್ಣ ಕೆಲಸಗಳಿಗೆ UPI ಮೂಲಕ ಸಣ್ಣ ಮೊತ್ತವನ್ನು ಪಾವತಿಸುವುದು.',
        'ನಕಲಿ ಸದಸ್ಯರು ಭಾರಿ ಲಾಭವನ್ನು ಸಂಭ್ರಮಿಸುವ ಟೆಲಿಗ್ರಾಮ್ ಗ್ರೂಪ್‌ಗಳಿಗೆ ಕರೆದೊಯ್ಯುವುದು.',
        'ಗಳಿಸಿದ ಕಮಿಷನ್ ಹಿಂಪಡೆಯಲು ಮೊದಲು ಹಣ ಠೇವಣಿ ಇಡುವಂತೆ ಕೇಳುವುದು.'
      ],
      safeAction: 'ಗಳಿಸಿದ ಹಣವನ್ನು ಹಿಂಪಡೆಯಲು ನಿಮ್ಮ ಸ್ವಂತ ಹಣವನ್ನು ಠೇವಣಿ ಇಡುವಂತೆ ಕೇಳುವ ಯಾವುದೇ "ಕೆಲಸ" 100% ವಂಚನೆಯಾಗಿದೆ. ಮೊದಲ ಪ್ರಿಪೇಯ್ಡ್ ಟಾಸ್ಕ್ ಕೇಳಿದ ತಕ್ಷಣ ನಿಲ್ಲಿಸಿ.',
      regulatoryFact: 'ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಹೆಲ್ಪ್‌ಲೈನ್ 1930 ನಲ್ಲಿ ದಾಖಲಾಗುವ ಆನ್‌ಲೈನ್ ದೂರುಗಳಲ್ಲಿ ಪಾರ್ಟ್-ಟೈಮ್ ಟಾಸ್ಕ್ ವಂಚನೆಗಳು ಮೊದಲ ಸ್ಥಾನದಲ್ಲಿವೆ.'
    },
    {
      id: 'unlisted-pre-ipo',
      title: 'ನಕಲಿ ಪ್ರಿ-ಐಪಿಒ ಮತ್ತು ಅನಧಿಕೃತ ಷೇರುಗಳು',
      category: 'ಹೂಡಿಕೆ ಹಗರಣ',
      tagline: 'ಭಾರಿ ರಿಯಾಯಿತಿಯಲ್ಲಿ ಖಾತರಿಯ ಐಪಿಒ ಹಂಚಿಕೆಯ ಸುಳ್ಳು ಭರವಸೆ.',
      howItWorks: 'ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಸದ್ದು ಮಾಡುತ್ತಿರುವ ಕಂಪನಿಗಳ (ಉದಾ: ಟಾಟಾ, ರಿಲಯನ್ಸ್ ರಿಟೇಲ್, ಸ್ವಿಗ್ಗಿ) ಪ್ರಿ-ಐಪಿಒ ಷೇರುಗಳನ್ನು 60% ರಿಯಾಯಿತಿಯಲ್ಲಿ ನೀಡಲು ತಮ್ಮ ಬಳಿ "ವಿಶೇಷ ಸಾಂಸ್ಥಿಕ ಕೋಟಾ" ಇದೆ ಎಂದು ವಂಚಕರು ಸುಳ್ಳು ಹೇಳುತ್ತಾರೆ. ಹಣ ಪಡೆದ ನಂತರ ಯಾವುದೇ ಷೇರುಗಳು ಡಿಮ್ಯಾಟ್‌ಗೆ ಬರುವುದಿಲ್ಲ.',
      typicalHook: '"ಪ್ರಿ-ಐಪಿಒ ಸಾಂಸ್ಥಿಕ ಹಂಚಿಕೆ ಗ್ಯಾರಂಟಿ! ಸಾಮಾನ್ಯ ಬಿಡ್ಡಿಂಗ್ ಆರಂಭವಾಗುವ ಮುನ್ನವೇ 100 ಷೇರುಗಳು ಕನ್ಫರ್ಮ್."',
      redFlags: [
        'ಅಧಿಕೃತ ಎಕ್ಸ್‌ಚೇಂಜ್ ASBA ಪ್ರಕ್ರಿಯೆಯ ಹೊರಗೆ "ಗ್ಯಾರಂಟಿ ಐಪಿಒ ಹಂಚಿಕೆ" ಎಂದು ಹೇಳಿಕೊಳ್ಳುವುದು.',
        'ನಿಮ್ಮ ಸ್ವಂತ ಬ್ಯಾಂಕ್ ಖಾತೆಯ ಬದಲು ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಖಾತೆಗೆ ಹಣ ವರ್ಗಾವಣೆ ಮಾಡಲು ಕೇಳುವುದು.',
        'ಸಾರ್ವಜನಿಕರಿಗೆ ಲಭ್ಯವಿಲ್ಲದ ಭಾರಿ ರಿಯಾಯಿತಿಯ ಆಮಿಷವೊಡ್ಡುವುದು.'
      ],
      safeAction: 'ನೆನಪಿಡಿ: ಭಾರತದಲ್ಲಿ ಸಾರ್ವಜನಿಕ ಐಪಿಒ ಅರ್ಜಿಗಳು ಕಡ್ಡಾಯವಾಗಿ ASBA ಮೂಲಕವೇ ನಡೆಯಬೇಕು, ಅಲ್ಲಿ ಹಂಚಿಕೆ ಆಗುವವರೆಗೆ ಹಣ ನಿಮ್ಮ ಸ್ವಂತ ಬ್ಯಾಂಕ್ ಖಾತೆಯಲ್ಲೇ ಬ್ಲಾಕ್ ಆಗಿರುತ್ತದೆ.',
      regulatoryFact: 'SEBI ನಿಯಮಗಳ ಪ್ರಕಾರ ಸಾರ್ವಜನಿಕ ಐಪಿಒ ಹಂಚಿಕೆಯು ಕೇವಲ ರಿಜಿಸ್ಟ್ರಾರ್ ನಿರ್ವಹಿಸುವ ಕಂಪ್ಯೂಟರೀಕೃತ ಸ್ವಯಂಚಾಲಿತ ಲಾಟರಿ ಮೂಲಕ ಮಾತ್ರ ನಡೆಯುತ್ತದೆ.'
    }
  ],

  hi: [
    {
      id: 'guaranteed-returns',
      title: 'निश्चित मुनाफ़ा (गारंटीड रिटर्न)',
      category: 'मार्केट फ्रॉड',
      tagline: 'शेयर बाजार में जोखिम के बिना निश्चित रिटर्न मिलना गणितीय रूप से असंभव है।',
      howItWorks: 'धोखेबाज इंट्राडे, ऑप्शंस या क्रिप्टो ट्रेडिंग पर रोजाना या महीने में 20% से 50% निश्चित रिटर्न का वादा करते हैं। शुरुआत में दिखने वाला छोटा मुनाफा अक्सर स्क्रीन पर सिर्फ फर्जी नंबर होता है या नए लोगों के पैसे से दिया जाने वाला पोंजी ढांचा होता है।',
      typicalHook: '"100% पूंजी सुरक्षा के साथ 40% मासिक लाभ की गारंटी। नुकसान भरपाई पैकेज उपलब्ध है।"',
      redFlags: [
        'इक्विटी, डेरिवेटिव या कमोडिटी पर किसी भी प्रकार के निश्चित या गारंटीड रिटर्न का वादा।',
        'शून्य नुकसान वाले गुप्त "इनसाइडर एल्गोरिदम" का दावा करना।',
        'विनियमित ब्रोकर चैनलों के माध्यम से वास्तविक ऑडिटेड ट्रेड रिपोर्ट दिखाने से इनकार करना।'
      ],
      safeAction: 'याद रखें: सेबी के नियम स्पष्ट रूप से किसी भी पंजीकृत सलाहकार या मध्यस्थ को शेयर बाजार में गारंटीड रिटर्न का वादा करने से रोकते हैं।',
      regulatoryFact: 'सेबी (इन्वेस्टमेंट एडवाइजर्स) विनियम, 2013 और सेबी (रिसर्च एनालिस्ट्स) विनियम, 2014 गारंटीड रिटर्न योजना पर पूर्ण प्रतिबंध लगाते हैं।'
    },
    {
      id: 'fake-authority',
      title: 'नकली प्राधिकरण और अधिकारी',
      category: 'नकली पहचान',
      tagline: 'सेबी, आरबीआई या पुलिस के लोगो का उपयोग करके झूठी वैधता बनाना।',
      howItWorks: 'धोखेबाज सरकारी मुहरों के साथ फर्जी प्रमाणपत्र बनाते हैं, "सेबी रजिस्टर्ड इंस्टीट्यूशनल रिसर्च डेस्क" के फर्जी लेटरहेड का उपयोग करते हैं, या फर्जी सीबीआई/पुलिस नोटिस भेजते हैं कि आपका पैसा कानूनी जांच में है।',
      typicalHook: '"सेबी अप्रूव्ड रिसर्च सर, हमारा सर्टिफिकेट देखें। हमारे पास विशेष संस्थागत लाइसेंस है।"',
      redFlags: [
        'गलत पंजीकरण संख्या या वर्तनी की गलतियों वाले प्रमाणपत्रों की तस्वीरें या पीडीएफ भेजना।',
        'यह दावा करना कि सेबी स्वयं व्हाट्सएप टिप्स को "मंजूरी" देता है या जमा की गारंटी देता है।',
        'व्यक्तिगत बैंक खातों में "सत्यापन शुल्क" या "नियामक कर" का भुगतान करने की मांग करना।'
      ],
      safeAction: 'चैट पर भेजे गए किसी भी प्रमाणपत्र पर कभी भरोसा न करें। सीधे sebi.gov.in खोलें और आधिकारिक सार्वजनिक रजिस्टर में पंजीकरण संख्या की जांच करें।',
      regulatoryFact: 'सेबी एक नियामक संस्था है; यह कभी भी व्यक्तिगत स्टॉक टिप्स का समर्थन नहीं करता है और न ही चैट पर पैसे मांगता है।'
    },
    {
      id: 'urgency-scarcity',
      title: 'जल्दबाज़ी और सीमित सीटों का दबाव',
      category: 'मनोवैज्ञानिक दबाव',
      tagline: 'कृत्रिम उल्टी गिनती के जरिए जल्दबाजी में फैसले लेने पर मजबूर करना।',
      howItWorks: 'धोखेबाज "केवल 3 सीटें बची हैं", "ऑफर आज शाम 5:00 बजे समाप्त हो रहा है" जैसी समय सीमा तय करते हैं ताकि आपको परिवार से पूछने या जांच करने का समय न मिले।',
      typicalHook: '"बैच 20 मिनट में बंद हो रहा है! 500% दीवाली संस्थागत रैली का मौका न चूकें।"',
      redFlags: [
        'अभी तुरंत पैसे ट्रांसफर करने का अत्यधिक दबाव बनाना।',
        'सत्यापन से पहले भुगतान करने के लिए लगातार कॉल या वॉयस मैसेज भेजना।',
        'यह धमकी देना कि यह अवसर तुरंत किसी और को दे दिया जाएगा।'
      ],
      safeAction: 'हमेशा 24 घंटे का नियम अपनाएं: वैध वित्तीय निवेश कभी भी 20 मिनट में समाप्त नहीं होते। कोई भी बड़ा निर्णय लेने से पहले सोचें।',
      regulatoryFact: 'सेबी पंजीकृत ब्रोकरों को ग्राहकों को जोड़ने से पहले जोखिम प्रोफाइलिंग और उचित दस्तावेज प्रदान करना अनिवार्य है।'
    },
    {
      id: 'private-payment-routing',
      title: 'निजी खातों में पैसे ट्रांसफर करना',
      category: 'म्यूल अकाउंट',
      tagline: 'निवेशक के पैसे को व्यक्तिगत यूपीआई खातों में भेजने का दबाव।',
      howItWorks: 'सेबी-पंजीकृत ब्रोकर के संस्थागत क्लियरिंग कॉर्पोरेशन खाते में जमा करने के बजाय, धोखेबाज अनजान व्यक्तिगत बचत खातों में यूपीआई से पैसे भेजने को कहते हैं।',
      typicalHook: '"हमारे क्लियरिंग एग्जीक्यूटिव यूपीआई पर ₹15,000 भेजें: rahulsharma99@okaxis और स्क्रीनशॉट दें।"',
      redFlags: [
        'यूपीआई पता किसी आधिकारिक कंपनी के बजाय किसी अनजान व्यक्ति के नाम पर होना।',
        'प्रत्येक लेनदेन के लिए पैसे प्राप्त करने वाले बैंक खाते का विवरण बदलना।',
        'गिफ्ट कार्ड, क्रिप्टो या बैंक शाखा में सीधे नकद जमा के माध्यम से भुगतान की मांग करना।'
      ],
      safeAction: 'भारत में शेयर बाजार के निवेश केवल आपके अपने बैंक खाते से जुड़े डीमैट खाते या आधिकारिक एक्सचेंज क्लियरिंग कॉर्पोरेशन के जरिए ही होने चाहिए।',
      regulatoryFact: 'सेबी के नियमों के अनुसार ग्राहकों का पैसा केवल स्टॉक एक्सचेंजों द्वारा ऑडिट किए गए नामित बैंक खातों में ही जमा किया जा सकता है।'
    },
    {
      id: 'part-time-task',
      title: 'पार्ट-टाइम टास्क और वीडियो लाइक घोटाला',
      category: 'जॉब फ्रॉड',
      tagline: 'शुरुआत में छोटे भुगतान, बाद में "वीआईपी प्रीपेड टास्क" के नाम पर भारी नुकसान।',
      howItWorks: 'यूट्यूब वीडियो लाइक करने या होटल समीक्षा लिखने के लिए ₹50–₹150 देकर टेलीग्राम/व्हाट्सएप पर लोगों को फंसाया जाता है। विश्वास बनने के बाद ₹5,000 से ₹5,00,000 के "प्रीपेड टास्क" में फंसाया जाता है, जो कभी वापस नहीं मिलता।',
      typicalHook: '"घर बैठे रोज ₹3000 कमाएं। 3 काम पूरे हुए = आपके यूपीआई खाते में ₹450 तुरंत जमा।"',
      redFlags: [
        'वीडियो लाइक करने जैसे मामूली कामों के लिए यूपीआई के जरिए पैसे देना।',
        'फर्जी सदस्यों वाले टेलीग्राम ग्रुप में शामिल करना जहां भारी मुनाफे का जश्न मनाया जा रहा हो।',
        'कमाए गए कमीशन को निकालने के लिए पहले पैसे जमा करने की शर्त रखना।'
      ],
      safeAction: 'कोई भी "नौकरी" जो कमीशन निकालने के लिए आपसे अपने पैसे जमा करने को कहे, वह 100% फर्जी है। पहले प्रीपेड टास्क का अनुरोध आते ही रुक जाएं।',
      regulatoryFact: 'राष्ट्रीय हेल्पलाइन 1930 पर दर्ज होने वाली शिकायतों में पार्ट-टाइम टास्क घोटाले सबसे आगे हैं।'
    },
    {
      id: 'unlisted-pre-ipo',
      title: 'फर्जी प्री-आईपीओ और गैर-सूचीबद्ध शेयर',
      category: 'इन्वेस्टमेंट फ्रॉड',
      tagline: 'भारी छूट पर गारंटीड आईपीओ आवंटन का झूठा वादा।',
      howItWorks: 'धोखेबाज दावा करते हैं कि आगामी लोकप्रिय कंपनियों (जैसे टाटा, रिलायंस रिटेल, स्विगी) के प्री-आईपीओ शेयरों के लिए उनके पास "विशेष संस्थागत कोटा" है। पैसे लेने के बाद डीमैट में शेयर कभी नहीं आते।',
      typicalHook: '"प्री-आईपीओ संस्थागत आवंटन की गारंटी! आम बोली शुरू होने से पहले 100 शेयर पक्के।"',
      redFlags: [
        'आधिकारिक एक्सचेंज ASBA प्रक्रिया के बाहर "गारंटीड आईपीओ आवंटन" का दावा।',
        'अपने स्वयं के बैंक खाते के बजाय किसी तीसरे पक्ष के खाते में पैसे ट्रांसफर करने की मांग।',
        'आम जनता के लिए अनुपलब्ध भारी छूट का लालच देना।'
      ],
      safeAction: 'याद रखें: भारत में आईपीओ आवेदन अनिवार्य रूप से ASBA के माध्यम से ही होते हैं, जहां आवंटन होने तक पैसा आपके अपने बैंक खाते में ही सुरक्षित ब्लॉक रहता है।',
      regulatoryFact: 'सेबी के अनुसार सार्वजनिक आईपीओ आवंटन पूरी तरह से रजिस्ट्रार द्वारा संचालित कम्प्यूटरीकृत लॉटरी के माध्यम से होता है।'
    }
  ],

  te: [
    {
      id: 'guaranteed-returns',
      title: 'ఖచ్చితమైన లాభాలు (గ్యారెంటీడ్ రిటర్న్స్)',
      category: 'మార్కెట్ మోసం',
      tagline: 'రిస్క్ లేకుండా స్టాక్ మార్కెట్‌లో ఖచ్చితమైన లాభాలు రావడం అసాధ్యం.',
      howItWorks: 'ఇంట్రాడే, ఆప్షన్స్ లేదా క్రిప్టో ట్రేడింగ్‌లో నెలకు 20% నుండి 50% వరకు గ్యారెంటీ లాభాలు ఇస్తామని మోసగాళ్ళు నమ్మిస్తారు. మొదట్లో కనిపించే లాభాలు కేవలం స్క్రీన్‌పై కనిపించే నకిలీ నంబర్లు మాత్రమే.',
      typicalHook: '"100% మూలధన రక్షణతో నెలకు 40% గ్యారెంటీ లాభం. నష్ట నివారణ ప్యాకేజీ అందుబాటులో ఉంది."',
      redFlags: [
        'ఈక్విటీలు, డెరివేటివ్‌లలో స్థిరమైన లేదా ఖచ్చితమైన లాభాల హామీ ఇవ్వడం.',
        'ఎలాంటి నష్టం రాని సీక్రెట్ "ఇన్‌సైడర్ అల్గారిథమ్" ఉందని క్లెయిమ్ చేయడం.',
        'ఆడిట్ చేయబడిన నిజమైన ట్రేడింగ్ రిపోర్టులను చూపించడానికి నిరాకరించడం.'
      ],
      safeAction: 'గుర్తుంచుకోండి: సెబీ నిబంధనల ప్రకారం ఏ నమోదిత సలహాదారు కూడా స్టాక్ మార్కెట్ పెట్టుబడులపై ఖచ్చితమైన లాభాల హామీ ఇవ్వకూడదు.',
      regulatoryFact: 'సెబీ (ఇన్వెస్ట్‌మెంట్ అడ్వైజర్స్) నిబంధనలు 2013 ప్రకారం గ్యారెంటీడ్ రిటర్న్స్ పథకాలు పూర్తిగా చట్టవిరుద్ధం.'
    },
    {
      id: 'fake-authority',
      title: 'నకిలీ అధికారులు మరియు సంస్థలు',
      category: 'నకిలీ గుర్తింపు',
      tagline: 'SEBI, RBI లేదా పోలీస్ లోగోలను ఉపయోగించి చట్టబద్ధమైన వారిగా నటించడం.',
      howItWorks: 'మోసగాళ్ళు ప్రభుత్వ ముద్రలతో నకిలీ సర్టిఫికెట్లను తయారు చేస్తారు, "SEBI రిజిస్టర్డ్ ఇన్స్టిట్యూషనల్ రీసెర్చ్ డెస్క్" అని చెప్పుకుంటారు, లేదా మీ డబ్బు చట్టపరమైన పరిశీలనలో ఉందని నకిలీ నోటీసులు పంపుతారు.',
      typicalHook: '"SEBI ఆమోదించిన రీసెర్చ్ సర్, మా సర్టిఫికేట్ చూడండి. మాకు ప్రత్యేక సంస్థాగత లైసెన్స్ ఉంది."',
      redFlags: [
        'తప్పుడు రిజిస్ట్రేషన్ నంబర్లు లేదా అక్షరదోషాలు ఉన్న సర్టిఫికెట్ల ఫోటోలు లేదా PDFలను పంపడం.',
        'SEBI స్వయంగా వాట్సాప్ టిప్స్‌ను ఆమోదించిందని లేదా డిపాజిట్లకు హామీ ఇస్తుందని చెప్పడం.',
        'వ్యక్తిగత బ్యాంక్ ఖాతాలకు "ధృవీకరణ రుసుము" చెల్లించాలని డిమాండ్ చేయడం.'
      ],
      safeAction: 'చాట్‌లో పంపిన ఎలాంటి సర్టిఫికెట్‌ను ఎప్పుడూ నమ్మవద్దు. నేరుగా sebi.gov.in ఓపెన్ చేసి అధికారిక రిజిస్ట్రీలో రిజిస్ట్రేషన్ నంబర్‌ను సరిచూడండి.',
      regulatoryFact: 'SEBI ఒక నియంత్రణ సంస్థ; ఇది ఎప్పుడూ వ్యక్తిగత స్టాక్ టిప్స్‌ను ఆమోదించదు మరియు చాట్‌లో డబ్బు వసూలు చేయదు.'
    },
    {
      id: 'urgency-scarcity',
      title: 'అత్యవసరం మరియు పరిమిత అవకాశాల ఉచ్చులు',
      category: 'మానసిక ఒత్తిడి',
      tagline: 'కృత్రిమ కౌంట్‌డౌన్‌ల ద్వారా త్వరగా నిర్ణయం తీసుకునేలా ఒత్తిడి చేయడం.',
      howItWorks: 'మోసగాళ్ళు "కేవలం 3 సీట్లు మాత్రమే మిగిలి ఉన్నాయి", "ఆఫర్ ఈరోజు సాయంత్రం 5:00 గంటలకు ముగుస్తుంది" అని చెబుతూ ఆలోచించడానికి సమయం ఇవ్వకుండా ఒత్తిడి చేస్తారు.',
      typicalHook: '"బ్యాచ్ 20 నిమిషాల్లో ముగుస్తుంది! 500% దీపావళి ర్యాలీ అవకాశాన్ని కోల్పోకండి."',
      redFlags: [
        'వెంటనే ఇప్పుడే డబ్బు బదిలీ చేయాలని తీవ్రంగా ఒత్తిడి చేయడం.',
        'ధృవీకరించుకునే ముందే డబ్బు చెల్లించాలని నిరంతరం కాల్స్ చేయడం.',
        'ఈ అవకాశం వేరొకరికి ఇచ్చేస్తామని బెదిరించడం.'
      ],
      safeAction: 'ఎల్లప్పుడూ 24 గంటల నియమాన్ని పాటించండి: నిజమైన ఆర్థిక పెట్టుబడులు ఎప్పుడూ 20 నిమిషాల్లో ముగిసిపోవు. పెద్ద నిర్ణయం తీసుకునే ముందు ఆలోచించండి.',
      regulatoryFact: 'SEBI రిజిస్టర్డ్ బ్రోకర్లు కస్టమర్లను చేర్చుకునే ముందు రిస్క్ ప్రొఫైలింగ్ మరియు డాక్యుమెంటేషన్ అందించడం తప్పనిసరి.'
    },
    {
      id: 'private-payment-routing',
      title: 'వ్యక్తిగత ఖాతాలకు నిధుల బదిలీ',
      category: 'మ్యూల్ ఖాతాలు',
      tagline: 'పెట్టుబడిదారుల డబ్బును గుర్తుతెలియని వ్యక్తిగత UPI ఖాతాలకు పంపించేలా చేయడం.',
      howItWorks: 'SEBI-నమోదిత బ్రోకర్ యొక్క క్లియరింగ్ కార్పొరేషన్ బ్యాంక్ ఖాతాలో జమ చేయడానికి బదులుగా, మోసగాళ్ళు తెలియని వ్యక్తిగత ఖాతాలకు UPI ద్వారా డబ్బు పంపమని చెబుతారు.',
      typicalHook: '"మా క్లియరింగ్ ఎగ్జిక్యూటివ్ UPI కి ₹15,000 పంపండి: rahulsharma99@okaxis మరియు స్క్రీన్‌షాట్ ఇవ్వండి."',
      redFlags: [
        'UPI అడ్రస్ అధికారిక కంపెనీ పేరుతో కాకుండా ఒక వ్యక్తి పేరుతో ఉండటం.',
        'ప్రతి లావాదేవీకి డబ్బు స్వీకరించే బ్యాంక్ ఖాతా వివరాలు మారడం.',
        'గిఫ్ట్ కార్డులు, క్రిప్టో లేదా బ్యాంక్ శాఖలో నేరుగా నగదు జమ చేయమని అడగడం.'
      ],
      safeAction: 'భారతదేశంలో, స్టాక్ మార్కెట్ పెట్టుబడులను కేవలం మీ స్వంత బ్యాంక్ ఖాతాకు లింక్ చేయబడిన డీమ్యాట్ ఖాతా ద్వారా మాత్రమే నిధులు సమకూర్చాలి.',
      regulatoryFact: 'SEBI నిబంధనల ప్రకారం క్లయింట్ నిధులను స్టాక్ ఎక్స్ఛేంజ్లు ఆడిట్ చేసే నిర్దేశిత బ్యాంక్ ఖాతాలలో మాత్రమే సేకరించవచ్చు.'
    },
    {
      id: 'part-time-task',
      title: 'పార్ట్-టైమ్ టాస్క్ మరియు వీడియో లైక్ మోసాలు',
      category: 'ఉద్యోగ మోసం',
      tagline: 'మొదట్లో చిన్న మొత్తాల చెల్లింపు, తరువాత "వీఐపీ ప్రీపెయిడ్ టాస్క్" పేరుతో భారీ మోసం.',
      howItWorks: 'యూట్యూబ్ వీడియోలను లైక్ చేయడానికి లేదా రివ్యూలు రాయడానికి ₹50–₹150 ఇస్తూ టెలిగ్రామ్/వాట్సాప్‌లో చేరుస్తారు. నమ్మకం కుదిరిన తర్వాత, ₹5,000 నుండి ₹5,00,000 వరకు డిపాజిట్ చేయాలని అడుగుతారు, ఆ డబ్బు ఎప్పటికీ తిరిగి రాదు.',
      typicalHook: '"ఇంటి నుండి రోజూ ₹3000 సంపాదించండి. 3 పనులు పూర్తయ్యాయి = మీ UPI ఖాతాకు వెంటనే ₹450 జమ చేయబడింది."',
      redFlags: [
        'వీడియోలను లైక్ చేయడం వంటి చిన్న పనులకు UPI ద్వారా డబ్బు చెల్లించడం.',
        'నకిలీ సభ్యులు ఉన్న టెలిగ్రామ్ గ్రూపులలో చేర్చి భారీ లాభాలు వస్తున్నట్లు నమ్మించడం.',
        'కమీషన్ విత్‌డ్రా చేసుకోవడానికి ముందే డబ్బు డిపాజిట్ చేయాలని డిమాండ్ చేయడం.'
      ],
      safeAction: 'కమీషన్ విత్‌డ్రా చేయడానికి మీ స్వంత డబ్బును డిపాజిట్ చేయమని అడిగే ఏ "ఉద్యోగం" అయినా 100% నకిలీ. మొదటి ప్రీపెయిడ్ టాస్క్ అడగ్గానే ఆపివేయండి.',
      regulatoryFact: 'జాతీయ హెల్ప్‌లైన్ 1930 లో నమోదయ్యే ఆర్థిక మోసాల ఫిర్యాదులలో పార్ట్-టైమ్ టాస్క్ మోసాలు అగ్రస్థానంలో ఉన్నాయి.'
    },
    {
      id: 'unlisted-pre-ipo',
      title: 'నకిలీ ప్రీ-ఐపీఓ మరియు అన్‌లిస్టెడ్ షేర్లు',
      category: 'పెట్టుబడి మోసం',
      tagline: 'భారీ తగ్గింపుతో గ్యారెంటీడ్ ఐపీఓ కేటాయింపు అని తప్పుడు హామీ ఇవ్వడం.',
      howItWorks: 'రాబోయే ప్రముఖ కంపెనీల ప్రీ-ఐపీఓ షేర్లను 60% తగ్గింపుతో ఇవ్వడానికి తమకు "ప్రత్యేక సంస్థాగత కోటా" ఉందని మోసగాళ్ళు చెబుతారు. డబ్బు తీసుకున్న తర్వాత డీమ్యాట్ ఖాతాకు షేర్లు ఎప్పటికీ రావు.',
      typicalHook: '"ప్రీ-ఐపీఓ సంస్థాగత కేటాయింపు గ్యారెంటీ! సాధారణ బిడ్డింగ్ ప్రారంభం కాకముందే 100 షేర్లు ఖాయం."',
      redFlags: [
        'అధికారిక ఎక్స్ఛేంజ్ ASBA ప్రక్రియ వెలుపల "గ్యారెంటీడ్ ఐపీఓ కేటాయింపు" అని క్లెయిమ్ చేయడం.',
        'మీ స్వంత బ్యాంక్ ఖాతాకు బదులుగా మూడవ పక్షం ఖాతాకు డబ్బు బదిలీ చేయమని అడగడం.',
        'సాధారణ ప్రజలకు అందుబాటులో లేని భారీ తగ్గింపుల ఆశ చూపడం.'
      ],
      safeAction: 'గుర్తుంచుకోండి: భారతదేశంలో పబ్లిక్ ఐపీఓ దరఖాస్తులు తప్పనిసరిగా ASBA ద్వారా మాత్రమే జరగాలి, కేటాయింపు జరిగే వరకు డబ్బు మీ బ్యాంక్ ఖాతాలోనే బ్లాక్ చేయబడి ఉంటుంది.',
      regulatoryFact: 'SEBI నిబంధనల ప్రకారం పబ్లిక్ ఐపీఓ కేటాయింపు రిజిస్ట్రార్ నిర్వహించే ఆటోమేటెడ్ లాటరీ ద్వారా మాత్రమే జరుగుతుంది.'
    }
  ]
};
