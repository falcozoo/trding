/**
 * Flagged / not-recommended brokers — batch 1.
 *
 * These entries are added purely as a NEUTRALITY and consumer-protection
 * signal. We recommend very few brokers and warn against many. Every broker
 * in this file appears on a public warning list or blacklist published by an
 * official financial regulator (AMF/ACPR France, CONSOB Italy, FSMA Belgium).
 *
 * COMPLIANCE RULES FOLLOWED HERE:
 *  - We never assert an unsourced accusation. Every negative claim is framed
 *    as the sourced, verifiable regulator fact (e.g. "Listed on the AMF/ACPR
 *    blacklist of unauthorised Forex websites").
 *  - The word "scam" is never used as our own unsourced verdict. Where a
 *    regulator itself uses stronger language (e.g. FSMA's "fraudulent trading
 *    platforms" list), we attribute it to that regulator.
 *  - Non-regulatory numeric fields (spreads, leverage, Trustpilot figures,
 *    founded year, deposit) are best-estimate placeholders typical of this
 *    class of unauthorised operator; they are NOT the basis of any accusation.
 *    The only load-bearing negative fact is the cited regulator warning.
 *
 * Sources used (public regulator communications):
 *  - AMF/ACPR blacklist of unauthorised Forex websites, 04 April 2024
 *    (acpr.banque-france.fr press release, T1 2024).
 *  - AMF/ACPR blacklist of unauthorised Forex websites, 10 January 2024.
 *  - CONSOB press release, 31 May 2024 (oscuramento of 5 unauthorised sites,
 *    under Law 58/2019 art. 36 c. 2-terdecies).
 *  - FSMA (Belgium) list of fraudulent trading platforms, warning of June 2026.
 */

import type { Broker } from '../brokers';
import type { DeepBroker } from '../brokerDeep';

export const FLAGGED_BROKERS_1: Broker[] = [
  {
    slug: 'macrocapital-fx',
    name: 'Macrocapital-FX',
    tagline: 'Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.',
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 250,
    avgSpreadEurUsd: 1.8,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['Proprietary', 'WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.6,
    trustpilotReviews: 41,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (macrocapital-fx.com), published 04 April 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'meridian-finance-pro',
    name: 'Meridian Finance',
    tagline: 'Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.',
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 250,
    avgSpreadEurUsd: 1.7,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['Proprietary', 'WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.5,
    trustpilotReviews: 33,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (meridianfinance.pro), published 04 April 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'stargaze-capital',
    name: 'Stargaze Capital',
    tagline: 'Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.',
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 250,
    avgSpreadEurUsd: 1.9,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['Proprietary', 'WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.7,
    trustpilotReviews: 28,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (stargazecapital.co), published 04 April 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'gainful-markets',
    name: 'Gainful Markets',
    tagline: 'Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.',
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 250,
    avgSpreadEurUsd: 1.6,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['Proprietary', 'WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.4,
    trustpilotReviews: 52,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (gainful-markets.com and platform.gainfulmarkets-tech.com), published 10 January 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'bacco-capital',
    name: 'Bacco Capital',
    tagline: 'Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.',
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 250,
    avgSpreadEurUsd: 1.8,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['Proprietary', 'WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.5,
    trustpilotReviews: 19,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (baccocapital.pro), published 10 January 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'tbmarket',
    name: 'TBMarket',
    tagline: 'Unauthorised financial-services website blocked in Italy by CONSOB.',
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 250,
    avgSpreadEurUsd: 1.7,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['Proprietary', 'WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.6,
    trustpilotReviews: 24,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'Ordered blocked (oscuramento) in Italy by CONSOB for offering financial services without authorisation (tbmarket.co), press release of 31 May 2024 (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'imperialcap-24',
    name: 'Imperialcap-24',
    tagline: 'Unauthorised financial-services website blocked in Italy by CONSOB.',
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 250,
    avgSpreadEurUsd: 1.9,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['Proprietary', 'WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.5,
    trustpilotReviews: 31,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'Ordered blocked (oscuramento) in Italy by CONSOB — linked to "Top Markets Ltd and Imperialcap-24 Limited" (imperialcap-24.com) — for offering financial services without authorisation, press release of 31 May 2024 (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'exovia-markets',
    name: 'Exovia Markets',
    tagline: 'On the FSMA (Belgium) list of fraudulent trading platforms.',
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 250,
    avgSpreadEurUsd: 1.6,
    commissionPerLot: 0,
    maxLeverage: 1000,
    platforms: ['Proprietary', 'WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.4,
    trustpilotReviews: 17,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'Added by the FSMA (Belgium) to its list of fraudulent trading platforms (exovia-markets.com), warning of June 2026 (source: FSMA). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'torvex-finance',
    name: 'Torvex Finance',
    tagline: 'On the FSMA (Belgium) list of fraudulent trading platforms.',
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 250,
    avgSpreadEurUsd: 1.8,
    commissionPerLot: 0,
    maxLeverage: 1000,
    platforms: ['Proprietary', 'WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.5,
    trustpilotReviews: 22,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'Added by the FSMA (Belgium) to its list of fraudulent trading platforms (torvexfinance.com), warning of June 2026 (source: FSMA). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'solara-finance-limited',
    name: 'Solara Finance Limited',
    tagline: 'On the FSMA (Belgium) list of fraudulent trading platforms.',
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 250,
    avgSpreadEurUsd: 1.7,
    commissionPerLot: 0,
    maxLeverage: 1000,
    platforms: ['Proprietary', 'WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.5,
    trustpilotReviews: 14,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'Added by the FSMA (Belgium) to its list of fraudulent trading platforms (solara-financelimited.com), warning of June 2026 (source: FSMA). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
];

export const FLAGGED_DEEP_1: Record<string, DeepBroker> = {
  'macrocapital-fx': {
    verdict:
      'We flag Macrocapital-FX and do not recommend it. Its website (macrocapital-fx.com) appears on the blacklist of unauthorised Forex/CFD websites published jointly by France\u2019s AMF and ACPR on 04 April 2024 (source: AMF/ACPR). Being on that list means the operator was offering Forex/CFD investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion \u2014 and on its own it is reason enough to keep your money away.',
    sections: [
      {
        heading: 'Who Macrocapital-FX presents itself as',
        paragraphs: [
          'Macrocapital-FX markets itself as an online Forex and CFD broker offering leveraged trading on currencies, indices and commodities through a browser-based platform. Like most operators in this category, its site emphasises easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified \u2014 no clearly stated, checkable licence number tied to a real regulator, no audited parent company you can look up.',
          'On a neutral comparator our job is not to describe the marketing; it is to check whether an operator is allowed to do what it claims. That check has a single, objective answer here: a national regulator has publicly identified this website as unauthorised. Everything else the site says about itself is secondary to that fact.',
          'We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning.',
        ],
      },
      {
        heading: 'The regulator warning, explained plainly',
        paragraphs: [
          'On 04 April 2024 the Autorit\u00e9 des March\u00e9s Financiers (AMF) and the Autorit\u00e9 de Contr\u00f4le Prudentiel et de R\u00e9solution (ACPR) published an updated blacklist of websites offering investments in the unregulated Forex market without being authorised to do so in France. The website macrocapital-fx.com is named on that list (source: AMF/ACPR).',
          'In France, offering investment services to the public requires authorisation, and authorised firms appear on the official REGAFI register (regafi.fr). The AMF/ACPR blacklist is the mirror image: it names sites operating outside that framework. The regulators are explicit that a firm not appearing on the authorised registers \u201care in breach of the applicable legislation and are not required to comply with basic rules of investor protection, information disclosure and claims handling.\u201d',
          'That last clause is the practical danger. An unauthorised operator is not bound by the consumer protections that apply to licensed brokers \u2014 there is no supervised complaints process, no requirement to hold client money in segregated accounts, and no investor-compensation scheme standing behind it. The AMF also warns that its lists are never complete: absence from a blacklist is not proof of authorisation, but presence on one is a clear red flag.',
        ],
      },
      {
        heading: 'Red flags a beginner should learn to notice',
        paragraphs: [
          'The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. Check the AMF/ACPR blacklist and the REGAFI authorised register for France; the FCA Register and Warning List for the UK; and the relevant national regulator elsewhere. If a firm is on a warning list, the decision is made for you.',
          'Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to \u201ctop up\u201d to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a \u201caccount manager\u201d who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.',
          'A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, an investor-compensation scheme, and clear risk warnings. When those are missing or vague, treat it as significant.',
        ],
      },
      {
        heading: 'What to do if you have already deposited',
        paragraphs: [
          'First, stop sending money. A recurring pattern with unauthorised platforms is the demand for further payments \u2014 \u201ctaxes\u201d, \u201cfees\u201d or \u201cverification deposits\u201d \u2014 before a withdrawal will supposedly be released. Paying these almost never results in a payout and simply increases the loss.',
          'Second, document everything: the website URL, account statements, emails, chat logs, the names used by anyone who contacted you, and every transaction with dates and amounts. This record is what regulators, your bank and the police will need.',
          'Third, contact your bank or card provider immediately to ask about a chargeback or recall, and report the matter to your national regulator and police. In France you can alert the AMF via AMF \u00c9pargne Info Service; elsewhere, report to your own regulator (for example the FCA in the UK). Finally, be aware of \u201crecovery\u201d follow-on approaches: fraudsters sometimes return posing as lawyers or agencies who can \u201cget your money back\u201d for an upfront fee. Treat any such offer as a second attempt.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'We list Macrocapital-FX only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named macrocapital-fx.com on their 04 April 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money.',
          'Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker \u2014 most retail traders lose money \u2014 and doing it through an unauthorised one removes the last safety net you have.',
        ],
      },
    ],
  },
  'meridian-finance-pro': {
    verdict:
      'We flag Meridian Finance and do not recommend it. Its website (meridianfinance.pro) appears on the blacklist of unauthorised Forex/CFD websites published jointly by France\u2019s AMF and ACPR on 04 April 2024 (source: AMF/ACPR). That listing means the operator was offering Forex/CFD investments in France without the legally required authorisation \u2014 a documented regulatory fact and, by itself, a sufficient reason to stay away.',
    sections: [
      {
        heading: 'Who Meridian Finance presents itself as',
        paragraphs: [
          'Meridian Finance (at meridianfinance.pro) presents as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. Its public-facing pitch follows the familiar template of this category: a modern-looking web platform, quick onboarding, high leverage and a promise of accessible profits, with little in the way of independently verifiable corporate or licensing detail.',
          'Its name is generic and reassuring by design \u2014 \u201cMeridian Finance\u201d evokes established financial firms. That is exactly why verification against official registers matters more than a name or a slick website: names can be chosen to borrow credibility that has not been earned.',
          'The non-regulatory numbers on this page are neutral placeholders typical of the category and are not the basis for our flag. The decisive, verifiable fact is the regulator warning described below.',
        ],
      },
      {
        heading: 'The regulator warning, explained plainly',
        paragraphs: [
          'On 04 April 2024, the AMF and ACPR updated their blacklist of websites offering investments in the unregulated Forex market without authorisation in France, and meridianfinance.pro is named among them (source: AMF/ACPR). Authorised investment-service providers in France appear on the REGAFI register; this site does not, and is instead named on the warning list.',
          'The regulators\u2019 standard guidance is blunt: firms not on the authorised registers \u201care in breach of the applicable legislation and are not required to comply with basic rules of investor protection, information disclosure and claims handling.\u201d In practice this means no supervised complaints route, no guarantee of segregated client funds, and no compensation scheme behind the operator.',
          'It is also worth understanding what the blacklist is and is not. It is a public, official identification of an unauthorised website \u2014 strong evidence you should not deal with it. It is not a complete registry of every bad actor; the AMF stresses new unauthorised sites appear constantly, which is why the habit of checking the authorised register (not just the blacklist) is the real protection.',
        ],
      },
      {
        heading: 'Red flags a beginner should learn to notice',
        paragraphs: [
          'Always verify before you deposit. For a firm claiming to operate in France, check REGAFI (regafi.fr) for authorisation and the AMF/ACPR blacklist for warnings. For the UK, use the FCA Register and Warning List. A firm that is absent from the authorised register and present on a warning list has failed the only test that matters.',
          'The behavioural red flags travel together: guaranteed or unusually high \u201creturns\u201d, urgency and pressure to fund quickly, a personal \u201caccount manager\u201d encouraging bigger deposits, aggressive leverage marketed to beginners, and \u2014 the classic sting \u2014 easy deposits followed by obstacles when you try to withdraw.',
          'Watch too for missing fundamentals: no checkable licence number, no named regulated legal entity, no investor-compensation scheme, and vague or absent risk warnings. Regulated brokers are legally required to make this information clear; its absence is itself informative.',
        ],
      },
      {
        heading: 'What to do if you have already deposited',
        paragraphs: [
          'Stop depositing immediately. Requests for extra \u201ctaxes\u201d, \u201cfees\u201d or \u201cverification\u201d payments to release a withdrawal are a common pattern with unauthorised platforms and paying them rarely produces a payout.',
          'Preserve evidence: URLs, account statements, emails, chat transcripts, contact names and every transaction with dates and amounts. Regulators, your bank and the police will need this.',
          'Contact your bank or card issuer at once about a possible chargeback or payment recall, and report to your national regulator and police \u2014 in France, alert the AMF through \u00c9pargne Info Service. Finally, ignore any later \u201crecovery expert\u201d who offers to retrieve your funds for an upfront fee; that is frequently a second wave targeting the same victims.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'Meridian Finance is included here solely as a neutrality and safety signal. The determining fact is public: the AMF and ACPR named meridianfinance.pro on their 04 April 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). Dealing with an unauthorised operator means giving up the protections that exist precisely to keep your money safe.',
          'Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one, you also lose your last line of defence.',
        ],
      },
    ],
  },
  'stargaze-capital': {
    verdict:
      'We flag Stargaze Capital and do not recommend it. Its website (stargazecapital.co) appears on the blacklist of unauthorised Forex/CFD websites published jointly by France\u2019s AMF and ACPR on 04 April 2024 (source: AMF/ACPR). That means the operator was offering Forex/CFD investments in France without the required authorisation \u2014 a documented regulatory fact that is reason enough to avoid it.',
    sections: [
      {
        heading: 'Who Stargaze Capital presents itself as',
        paragraphs: [
          'Stargaze Capital (stargazecapital.co) is presented as an online trading brand offering leveraged Forex and CFD products on currencies, indices and commodities. As with most operators of this type, the marketing leans on an appealing platform, fast account opening and high leverage, while the corporate and licensing substance you could actually check is thin or absent.',
          'On a neutral comparator we assess whether the operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: a national regulator has publicly named the site as unauthorised.',
          'The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the AMF/ACPR listing.',
        ],
      },
      {
        heading: 'The regulator warning, explained plainly',
        paragraphs: [
          'On 04 April 2024 the AMF and ACPR published an updated blacklist of websites offering unregulated Forex investments in France without authorisation, and stargazecapital.co is named on it (source: AMF/ACPR). France requires investment-service providers to be authorised and listed on REGAFI; the blacklist identifies those operating outside that framework.',
          'The regulators warn that unauthorised firms \u201care in breach of the applicable legislation and are not required to comply with basic rules of investor protection, information disclosure and claims handling.\u201d Concretely, that means no supervised complaints channel, no assurance of segregated client money, and no compensation scheme.',
          'Remember the asymmetry the AMF emphasises: being on the blacklist is strong evidence to stay away, but being absent from it is not proof of legitimacy, because new unauthorised sites appear all the time. The reliable move is to confirm a firm on the positive authorised register before trusting it.',
        ],
      },
      {
        heading: 'Red flags a beginner should learn to notice',
        paragraphs: [
          'Verify first, deposit later \u2014 or never. Check REGAFI and the AMF/ACPR blacklist for France; the FCA Register and Warning List for the UK; the relevant national authority elsewhere. A warning-list entry ends the discussion.',
          'The recurring behavioural signals are: promises of easy or guaranteed profit; pressure to deposit quickly; a friendly \u201caccount manager\u201d nudging you toward larger sums; leverage of 1:500 or higher pushed at beginners; and frictionless deposits paired with stalled withdrawals.',
          'Also weigh what is missing. Regulated brokers must publish a specific licence number, a named legal entity, compensation-scheme membership and prominent risk warnings. Where these are vague or absent, that gap is itself a warning.',
        ],
      },
      {
        heading: 'What to do if you have already deposited',
        paragraphs: [
          'Stop paying. If you are told to send \u201ctax\u201d, \u201cfee\u201d or \u201cverification\u201d money to unlock a withdrawal, treat it as a red flag; these payments typically do not lead to a payout.',
          'Gather and keep evidence \u2014 URLs, statements, emails, chat logs, names and all transactions with dates and amounts \u2014 which regulators, banks and police will require.',
          'Contact your bank or card provider immediately about a chargeback or recall, report to your national regulator and the police (in France, the AMF via \u00c9pargne Info Service), and be wary of anyone who later contacts you promising to recover your funds for an upfront fee.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'Stargaze Capital is listed here purely for transparency. The determining fact is public and specific: the AMF and ACPR named stargazecapital.co on their 04 April 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the protections built to safeguard your money.',
          'Our standing advice holds: only ever fund a broker you have personally confirmed on an official regulator register, and walk away from any name on a warning list. CFD and Forex trading is high-risk even with a regulated broker \u2014 most retail traders lose money \u2014 and using an unauthorised one strips away your final safeguard.',
        ],
      },
    ],
  },
  'gainful-markets': {
    verdict:
      'We flag Gainful Markets and do not recommend it. Its websites (gainful-markets.com and platform.gainfulmarkets-tech.com) appear on the blacklist of unauthorised Forex/CFD websites published jointly by France\u2019s AMF and ACPR on 10 January 2024 (source: AMF/ACPR). That listing means the operator was offering Forex/CFD investments in France without the required authorisation \u2014 a documented regulatory fact and, on its own, reason enough to keep away.',
    sections: [
      {
        heading: 'Who Gainful Markets presents itself as',
        paragraphs: [
          'Gainful Markets markets itself as an online Forex and CFD broker with a web-based trading platform (its trading interface was hosted at platform.gainfulmarkets-tech.com). The branding \u2014 \u201cGainful\u201d \u2014 leans into the promise of profit, a common trait among operators in this class, alongside quick sign-up and high leverage and little verifiable corporate detail.',
          'The presence of a separate \u201ctech\u201d platform domain is worth noting: unauthorised operators frequently split their marketing site from the trading interface, which can make them harder to trace and easier to relaunch under new names. What matters for our assessment is not the setup but the licensing status.',
          'The non-regulatory figures shown here are neutral placeholders typical of the category, not the basis of our flag. The decisive fact is the AMF/ACPR listing of both associated domains.',
        ],
      },
      {
        heading: 'The regulator warning, explained plainly',
        paragraphs: [
          'On 10 January 2024, the AMF and ACPR published an updated blacklist of websites offering unregulated Forex investments in France without authorisation. Both gainful-markets.com and platform.gainfulmarkets-tech.com are named on that list (source: AMF/ACPR).',
          'Authorised providers in France appear on REGAFI; the blacklist names those operating outside the law. The regulators state plainly that unauthorised firms \u201care in breach of the applicable legislation and are not required to comply with basic rules of investor protection, information disclosure and claims handling.\u201d That means no supervised complaint process, no guaranteed fund segregation, and no compensation scheme.',
          'The AMF also reminds the public that these lists are updated regularly but are never complete \u2014 which is why the durable protection is to check the positive authorised register before dealing with any firm, rather than relying on a blacklist to be exhaustive.',
        ],
      },
      {
        heading: 'Red flags a beginner should learn to notice',
        paragraphs: [
          'Make register-checking a reflex. For France, use REGAFI and the AMF/ACPR blacklist; for the UK, the FCA Register and Warning List; elsewhere, the national regulator. A warning-list appearance is a decisive stop sign.',
          'Cluster the behavioural signals: promises of easy or guaranteed gains, urgency to deposit, an \u201caccount manager\u201d steering you to fund more, aggressive leverage aimed at beginners, and the classic pattern of smooth deposits and obstructed withdrawals. Multiple separate domains for one brand can be another sign to slow down.',
          'And note the absences: no checkable licence number, no named regulated entity, no compensation-scheme membership, weak or missing risk warnings. Regulated brokers must publish these; their absence is a signal in itself.',
        ],
      },
      {
        heading: 'What to do if you have already deposited',
        paragraphs: [
          'Stop sending money, especially any \u201ctax\u201d, \u201cfee\u201d or \u201cverification\u201d payment demanded before a withdrawal \u2014 a familiar tactic that rarely results in a payout.',
          'Preserve all evidence: URLs (including the separate platform domain), statements, emails, chat logs, contact names and every transaction with dates and amounts.',
          'Contact your bank or card provider immediately about a chargeback or recall, report to your national regulator and police (in France, the AMF via \u00c9pargne Info Service), and ignore any subsequent \u201crecovery\u201d offer that asks for an upfront fee to get your money back.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'Gainful Markets is included here strictly as a transparency and safety signal. The determining fact is public: the AMF and ACPR named both gainful-markets.com and platform.gainfulmarkets-tech.com on their 10 January 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). Dealing with an unauthorised operator means forfeiting the protections that exist to keep your money safe.',
          'The lesson generalises: only fund a broker you have personally verified on an official register, and treat any warning-list entry as final. CFD and Forex trading is high-risk even with a regulated broker \u2014 most retail clients lose money \u2014 and an unauthorised operator removes your last safeguard entirely.',
        ],
      },
    ],
  },
  'bacco-capital': {
    verdict:
      'We flag Bacco Capital and do not recommend it. Its website (baccocapital.pro) appears on the blacklist of unauthorised Forex/CFD websites published jointly by France\u2019s AMF and ACPR on 10 January 2024 (source: AMF/ACPR). That listing means the operator was offering Forex/CFD investments in France without the required authorisation \u2014 a documented regulatory fact and reason enough to avoid it.',
    sections: [
      {
        heading: 'Who Bacco Capital presents itself as',
        paragraphs: [
          'Bacco Capital (baccocapital.pro) presents as an online broker offering leveraged Forex and CFD trading on currencies, indices and commodities. The \u201c.pro\u201d domain and \u201cCapital\u201d branding are chosen to project professionalism, but the substance that could be independently verified \u2014 a real licence number, a named regulated entity, audited accounts \u2014 is not evident.',
          'On a neutral comparator, the question is simply whether the operator is authorised to offer these services. Here a national regulator has answered it by naming the site as unauthorised.',
          'The numeric fields on this entry are neutral, category-typical placeholders, not the basis of the flag. The decisive fact is the AMF/ACPR listing.',
        ],
      },
      {
        heading: 'The regulator warning, explained plainly',
        paragraphs: [
          'On 10 January 2024 the AMF and ACPR updated their blacklist of websites offering unregulated Forex investments in France without authorisation, and baccocapital.pro is named on it (source: AMF/ACPR). France requires investment-service providers to be authorised and listed on REGAFI; the blacklist identifies operators outside that framework.',
          'The regulators\u2019 standard warning applies: unauthorised firms \u201care in breach of the applicable legislation and are not required to comply with basic rules of investor protection, information disclosure and claims handling.\u201d In practice that means no supervised complaints route, no guaranteed segregation of client funds, and no compensation scheme.',
          'As always, the AMF notes the list is not exhaustive and is updated regularly; the reliable safeguard is to verify a firm on the authorised register before trusting it, rather than assuming any site absent from a blacklist is safe.',
        ],
      },
      {
        heading: 'Red flags a beginner should learn to notice',
        paragraphs: [
          'Verify before depositing. Check REGAFI and the AMF/ACPR blacklist for France, the FCA Register and Warning List for the UK, and the national regulator elsewhere. A warning-list entry is a decisive reason to walk away.',
          'The behavioural warning signs recur across these operators: guaranteed or unusually high returns, pressure to fund quickly, an \u201caccount manager\u201d pushing larger deposits, high leverage marketed to beginners, and easy deposits followed by stalled withdrawals.',
          'Weigh the absences too: no checkable licence number, no named regulated legal entity, no compensation-scheme membership, and vague or missing risk warnings \u2014 all of which regulated brokers are required to provide.',
        ],
      },
      {
        heading: 'What to do if you have already deposited',
        paragraphs: [
          'Stop sending money. Demands for \u201ctax\u201d, \u201cfee\u201d or \u201cverification\u201d payments before a withdrawal is released are a common pattern and rarely lead to an actual payout.',
          'Keep all evidence: URLs, account statements, emails, chat logs, contact names and every transaction with dates and amounts.',
          'Contact your bank or card issuer at once about a chargeback or recall, report to your national regulator and police (in France, the AMF via \u00c9pargne Info Service), and be alert to follow-on \u201crecovery\u201d approaches that ask for an upfront fee.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'Bacco Capital is listed here solely as a transparency and consumer-protection signal. The determining fact is public: the AMF and ACPR named baccocapital.pro on their 10 January 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money.',
          'Our advice is consistent across every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list appearance as final. CFD and Forex trading is high-risk even with a regulated broker \u2014 most retail traders lose money \u2014 and an unauthorised one removes your last safety net.',
        ],
      },
    ],
  },
  tbmarket: {
    verdict:
      'We flag TBMarket and do not recommend it. Italy\u2019s CONSOB ordered access to its website (tbmarket.co) blocked \u2014 an \u201coscuramento\u201d \u2014 for offering financial services without authorisation, in its press release of 31 May 2024 (source: CONSOB). That order is a documented regulatory fact and, on its own, a sufficient reason to avoid the operator.',
    sections: [
      {
        heading: 'Who TBMarket presents itself as',
        paragraphs: [
          'TBMarket (tbmarket.co) is presented as an online trading platform offering leveraged Forex and CFD-style products. As is typical for operators in this category, the site emphasises easy onboarding and access to markets while offering little verifiable detail about the legal entity behind it or any genuine regulatory authorisation.',
          'On a neutral comparator the decisive question is whether the operator is permitted to offer financial services in the jurisdiction it targets. For Italy, CONSOB has answered by ordering the site blocked as unauthorised.',
          'The numeric fields shown here are neutral placeholders typical of the category and are not the basis for our flag. The load-bearing fact is the CONSOB order.',
        ],
      },
      {
        heading: 'The regulator warning, explained plainly',
        paragraphs: [
          'In its press release of 31 May 2024, CONSOB \u2014 Italy\u2019s securities markets authority \u2014 ordered the \u201coscuramento\u201d (blackout) of five websites offering financial services abusively, i.e. without authorisation. TBMarket (tbmarket.co) is named among them (source: CONSOB).',
          'CONSOB derives this blocking power from the so-called \u201cdecreto crescita\u201d (Law 58 of 28 June 2019, article 36, paragraph 2-terdecies), which lets it order Italian internet providers to block access to sites offering unauthorised financial services. By the date of that release, CONSOB reported it had blocked 1,094 such sites since the power took effect in July 2019 \u2014 an indication of how routine this enforcement has become.',
          'A blocking order tells you two things clearly. First, a national regulator has judged the operator to be offering financial services without the required authorisation. Second, an unauthorised operator is not bound by the investor-protection rules that apply to licensed firms \u2014 no supervised complaints process, no assured segregation of client money, no compensation scheme. CONSOB\u2019s guidance to savers is to verify in advance that any operator is authorised before engaging with it.',
        ],
      },
      {
        heading: 'Red flags a beginner should learn to notice',
        paragraphs: [
          'Check the register before depositing. In Italy, verify whether a firm is authorised via CONSOB and the Bank of Italy, and check whether its site appears among CONSOB\u2019s blocked sites. In the UK, use the FCA Register and Warning List; elsewhere, the relevant national authority. An enforcement action against a site ends the discussion.',
          'The behavioural red flags are consistent across these operators: promises of quick or guaranteed profit, pressure to deposit fast, an \u201caccount manager\u201d encouraging larger deposits, high leverage aimed at retail beginners, and smooth deposits paired with obstructed withdrawals.',
          'Note the missing fundamentals too: no verifiable licence number, no named regulated entity, no compensation-scheme membership, and weak or absent risk disclosures. Regulated brokers must publish these; their absence is itself telling.',
        ],
      },
      {
        heading: 'What to do if you have already deposited',
        paragraphs: [
          'Stop sending money, especially any \u201ctax\u201d, \u201cfee\u201d or \u201cverification\u201d payment demanded before a withdrawal \u2014 a common tactic that rarely results in a payout.',
          'Preserve evidence: the website URL, account statements, emails, chat logs, contact names and every transaction with dates and amounts \u2014 the record regulators, your bank and police will need.',
          'Contact your bank or card provider immediately about a chargeback or recall, and report to your national regulator and police. In Italy, CONSOB\u2019s \u201cOcchio alle truffe!\u201d (Watch out for scams) resources explain how to report and protect yourself. Be wary of later \u201crecovery\u201d offers that ask for an upfront fee.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'TBMarket is listed here only as a transparency and consumer-protection signal. The determining fact is public: CONSOB ordered tbmarket.co blocked as an unauthorised financial-services website in its 31 May 2024 press release (source: CONSOB). Dealing with an operator a regulator has moved to block means giving up the protections designed to keep your money safe.',
          'Our standing advice applies: only fund a broker you have personally verified as authorised on an official register, and treat any regulator action or warning as final. CFD and Forex trading is high-risk even with a regulated broker \u2014 most retail clients lose money \u2014 and using an unauthorised one removes your last safeguard.',
        ],
      },
    ],
  },
  'imperialcap-24': {
    verdict:
      'We flag Imperialcap-24 and do not recommend it. Italy\u2019s CONSOB ordered access to its website (imperialcap-24.com) blocked \u2014 an \u201coscuramento\u201d \u2014 for offering financial services without authorisation (linked to \u201cTop Markets Ltd and Imperialcap-24 Limited\u201d), in its press release of 31 May 2024 (source: CONSOB). That order is a documented regulatory fact and reason enough to avoid the operator.',
    sections: [
      {
        heading: 'Who Imperialcap-24 presents itself as',
        paragraphs: [
          'Imperialcap-24 (imperialcap-24.com, with a web-trader at wt.imperialcap-24.com) is presented as an online trading platform for leveraged Forex and CFD products. CONSOB associates the site with the entities \u201cTop Markets Ltd and Imperialcap-24 Limited.\u201d As with most operators of this type, the marketing emphasises access and ease while offering little verifiable licensing or corporate substance.',
          'The split between a marketing domain and a separate web-trader subdomain is a common structure among unauthorised operators. What matters for our assessment is not the setup but the authorisation status \u2014 and CONSOB has ordered the site blocked as unauthorised.',
          'The numeric fields shown here are neutral, category-typical placeholders and are not the basis for our flag. The decisive fact is the CONSOB blocking order.',
        ],
      },
      {
        heading: 'The regulator warning, explained plainly',
        paragraphs: [
          'In its 31 May 2024 press release, CONSOB ordered the \u201coscuramento\u201d of five websites offering financial services abusively (without authorisation). One of them is imperialcap-24.com, linked to \u201cTop Markets Ltd and Imperialcap-24 Limited\u201d (source: CONSOB).',
          'CONSOB\u2019s blocking power comes from the \u201cdecreto crescita\u201d (Law 58/2019, article 36, paragraph 2-terdecies), which allows it to require Italian internet providers to block access to sites offering unauthorised financial services. As of that release, CONSOB had blocked 1,094 such sites since July 2019.',
          'The order means CONSOB judged the operator to be providing financial services without the required authorisation. An unauthorised firm is not bound by the protections that apply to licensed brokers \u2014 no supervised complaints route, no assured segregation of client money, no compensation scheme. CONSOB advises savers to verify an operator\u2019s authorisation before engaging and, for public offerings, to confirm an approved prospectus exists.',
        ],
      },
      {
        heading: 'Red flags a beginner should learn to notice',
        paragraphs: [
          'Verify before depositing. In Italy, check authorisation with CONSOB and the Bank of Italy and check whether the site appears among CONSOB\u2019s blocked sites; in the UK use the FCA Register and Warning List; elsewhere use the national regulator. An enforcement action against the site is a decisive stop.',
          'The behavioural signals cluster: promises of easy or guaranteed profit, urgency to deposit, an \u201caccount manager\u201d pushing larger funding, high leverage aimed at beginners, and effortless deposits paired with stalled withdrawals. Separate marketing and web-trader domains can be a further prompt to slow down and verify.',
          'And note the absences: no verifiable licence number, no named regulated entity, no compensation-scheme membership, and weak or missing risk warnings \u2014 all things regulated brokers must provide.',
        ],
      },
      {
        heading: 'What to do if you have already deposited',
        paragraphs: [
          'Stop sending money, especially any \u201ctax\u201d, \u201cfee\u201d or \u201cverification\u201d payment demanded before a withdrawal is released \u2014 a common tactic that rarely produces a payout.',
          'Keep all evidence: URLs (including the web-trader subdomain), statements, emails, chat logs, contact names and every transaction with dates and amounts.',
          'Contact your bank or card provider immediately about a chargeback or recall, report to your national regulator and police (in Italy, see CONSOB\u2019s \u201cOcchio alle truffe!\u201d resources), and ignore any later \u201crecovery\u201d offer that asks for an upfront fee.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'Imperialcap-24 is included here purely as a transparency and safety signal. The determining fact is public: CONSOB ordered imperialcap-24.com blocked as an unauthorised financial-services website, linked to \u201cTop Markets Ltd and Imperialcap-24 Limited,\u201d in its 31 May 2024 press release (source: CONSOB). Dealing with an operator a regulator has moved to block means forfeiting the protections that safeguard your money.',
          'The rule generalises: only fund a broker you have personally verified as authorised on an official register, and treat any regulator action as final. CFD and Forex trading is high-risk even with a regulated broker \u2014 most retail clients lose money \u2014 and an unauthorised operator removes your last line of defence.',
        ],
      },
    ],
  },
  'exovia-markets': {
    verdict:
      'We flag Exovia Markets and do not recommend it. Belgium\u2019s FSMA added its website (exovia-markets.com) to its published list of fraudulent trading platforms in a warning of June 2026 (source: FSMA). That listing is a documented regulatory fact and, on its own, a sufficient reason to keep your money away.',
    sections: [
      {
        heading: 'Who Exovia Markets presents itself as',
        paragraphs: [
          'Exovia Markets (exovia-markets.com) is presented as an online trading platform offering leveraged Forex and CFD products across currencies, indices and commodities. Like most operators of this type, its marketing promises accessible, fast profits while providing little verifiable detail about the legal entity behind it or any genuine regulatory licence.',
          'On a neutral comparator, the decisive question is whether a regulator permits the operator to offer these services. For Belgium, the FSMA has answered by placing the site on its list of fraudulent trading platforms.',
          'The numeric fields shown here are neutral placeholders typical of the category and are not the basis for our flag. The load-bearing fact is the FSMA listing.',
        ],
      },
      {
        heading: 'The regulator warning, explained plainly',
        paragraphs: [
          'The Financial Services and Markets Authority (FSMA), Belgium\u2019s financial regulator, publicly warned in June 2026 against a set of fraudulent trading platforms and added exovia-markets.com to its list (source: FSMA). The FSMA describes these platforms as luring investors online with promises of quick, easy earnings that \u201care nothing more than advanced scams that can lead to significant financial losses.\u201d That characterisation is the regulator\u2019s own, and we attribute it to the FSMA rather than asserting it ourselves.',
          'Being on the FSMA\u2019s list means the operator is not authorised to offer financial services in Belgium and has been publicly identified as fraudulent by the authority. Unauthorised operators are not bound by the investor-protection rules that apply to licensed firms \u2014 no supervised complaints process, no assured segregation of client money, and no compensation scheme.',
          'The FSMA stresses that its list is not complete but is updated frequently, and advises consumers to use its \u201cCheck your provider\u201d page to verify a firm\u2019s authorisation and to contact the FSMA directly in case of doubt. The durable safeguard is to confirm authorisation on the positive register, not to assume any site absent from the list is safe.',
        ],
      },
      {
        heading: 'Red flags a beginner should learn to notice',
        paragraphs: [
          'Verify before depositing. In Belgium, use the FSMA\u2019s \u201cCheck your provider\u201d tool and its warnings list; in the UK, the FCA Register and Warning List; elsewhere, the national regulator. A place on a fraudulent-platforms list ends the discussion.',
          'The behavioural warning signs recur: promises of quick or guaranteed profit, urgency to deposit, a personal \u201caccount manager\u201d pushing larger funding, high leverage aimed at beginners, and easy deposits paired with obstructed withdrawals. The FSMA specifically notes that such platforms often advertise on social media and sometimes misuse the names or images of well-known people.',
          'Watch the absences too: no verifiable licence number, no named regulated entity, no compensation-scheme membership, and weak or missing risk warnings \u2014 all of which regulated brokers must provide.',
        ],
      },
      {
        heading: 'What to do if you have already deposited',
        paragraphs: [
          'Stop sending money, especially any \u201ctax\u201d, \u201cfee\u201d or \u201cverification\u201d payment demanded before a withdrawal is released \u2014 a common tactic that rarely results in a payout.',
          'Preserve all evidence: the website URL, account statements, emails, chat logs, contact names and every transaction with dates and amounts.',
          'Contact your bank or card provider immediately about a chargeback or recall, and report to your national regulator and police. In Belgium, report to the FSMA directly. Be alert to follow-on \u201crecovery\u201d offers that ask for an upfront fee to retrieve your funds; these are frequently a second attempt on the same victims.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'Exovia Markets is listed here only as a transparency and consumer-protection signal. The determining fact is public: the FSMA added exovia-markets.com to its list of fraudulent trading platforms in its June 2026 warning (source: FSMA). Dealing with a platform a regulator has publicly identified as fraudulent means forfeiting every protection designed to keep your money safe.',
          'Our advice is the same for every broker: only fund an account with a firm you have personally verified as authorised on an official register, and treat any warning-list appearance as final. CFD and Forex trading is high-risk even with a regulated broker \u2014 most retail traders lose money \u2014 and an unauthorised, regulator-flagged operator removes your last safeguard entirely.',
        ],
      },
    ],
  },
  'torvex-finance': {
    verdict:
      'We flag Torvex Finance and do not recommend it. Belgium\u2019s FSMA added its website (torvexfinance.com) to its published list of fraudulent trading platforms in a warning of June 2026 (source: FSMA). That listing is a documented regulatory fact and reason enough to keep your money away.',
    sections: [
      {
        heading: 'Who Torvex Finance presents itself as',
        paragraphs: [
          'Torvex Finance (torvexfinance.com) is presented as an online broker offering leveraged Forex and CFD trading across currencies, indices and commodities. The \u201cFinance\u201d branding and clean web presence are designed to look credible, but verifiable licensing and corporate detail are not in evidence.',
          'On a neutral comparator, the question that matters is whether a regulator permits the operator to offer these services. For Belgium, the FSMA has answered by placing the site on its list of fraudulent trading platforms.',
          'The numeric fields on this entry are neutral, category-typical placeholders and are not the basis of the flag. The decisive fact is the FSMA listing.',
        ],
      },
      {
        heading: 'The regulator warning, explained plainly',
        paragraphs: [
          'In June 2026, the FSMA \u2014 Belgium\u2019s Financial Services and Markets Authority \u2014 publicly warned against a group of fraudulent trading platforms and added torvexfinance.com to its list (source: FSMA). The FSMA itself describes these platforms as \u201cadvanced scams\u201d that lure investors with promises of quick, easy earnings and can cause significant losses; that language is the regulator\u2019s, and we attribute it to the FSMA.',
          'A place on the FSMA list means the operator is not authorised in Belgium and has been publicly identified as fraudulent by the authority. Unauthorised operators are not subject to the protections that bind licensed firms \u2014 there is no supervised complaints channel, no guaranteed segregation of client funds, and no compensation scheme.',
          'The FSMA notes the list is not exhaustive but is updated frequently and directs consumers to its \u201cCheck your provider\u201d page to confirm authorisation, and to contact the FSMA when in doubt. As always, the reliable protection is verifying on the positive register rather than trusting a site that merely has not been listed yet.',
        ],
      },
      {
        heading: 'Red flags a beginner should learn to notice',
        paragraphs: [
          'Verify first. In Belgium, use the FSMA\u2019s \u201cCheck your provider\u201d tool and warnings list; in the UK, the FCA Register and Warning List; elsewhere, the relevant national authority. Being on a fraudulent-platforms list is a decisive reason to walk away.',
          'The behavioural signals travel together: promises of easy or guaranteed profit, pressure to deposit quickly, an \u201caccount manager\u201d urging larger deposits, high leverage marketed to beginners, and frictionless deposits paired with stalled withdrawals. The FSMA highlights that such platforms often reach victims through social-media adverts.',
          'And note what is missing: no verifiable licence number, no named regulated entity, no compensation-scheme membership, and weak or absent risk warnings \u2014 all required of properly regulated brokers.',
        ],
      },
      {
        heading: 'What to do if you have already deposited',
        paragraphs: [
          'Stop sending money, particularly any \u201ctax\u201d, \u201cfee\u201d or \u201cverification\u201d payment requested before a withdrawal is released \u2014 a common tactic that rarely leads to a payout.',
          'Keep all evidence: URLs, account statements, emails, chat logs, contact names and every transaction with dates and amounts.',
          'Contact your bank or card provider immediately about a chargeback or recall, report to your national regulator and police (in Belgium, report directly to the FSMA), and ignore any later \u201crecovery\u201d offer that asks for an upfront fee.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'Torvex Finance is included here strictly as a transparency and safety signal. The determining fact is public: the FSMA added torvexfinance.com to its list of fraudulent trading platforms in its June 2026 warning (source: FSMA). Dealing with a platform a regulator has publicly identified as fraudulent means giving up every protection meant to keep your money safe.',
          'The rule generalises: only fund a broker you have personally verified as authorised on an official register, and treat any warning-list entry as final. CFD and Forex trading is high-risk even with a regulated broker \u2014 most retail clients lose money \u2014 and a regulator-flagged, unauthorised operator removes your last safeguard.',
        ],
      },
    ],
  },
  'solara-finance-limited': {
    verdict:
      'We flag Solara Finance Limited and do not recommend it. Belgium\u2019s FSMA added its website (solara-financelimited.com) to its published list of fraudulent trading platforms in a warning of June 2026 (source: FSMA). That listing is a documented regulatory fact and, on its own, reason enough to keep away.',
    sections: [
      {
        heading: 'Who Solara Finance Limited presents itself as',
        paragraphs: [
          'Solara Finance Limited (solara-financelimited.com) is presented as an online trading firm offering leveraged Forex and CFD products. The use of \u201cLimited\u201d in the name is intended to suggest a properly incorporated, accountable company, but no verifiable regulated legal entity or licence is evident \u2014 a mismatch worth noticing in itself.',
          'On a neutral comparator, the decisive question is whether a regulator permits the operator to offer these services. For Belgium, the FSMA has answered by placing the site on its list of fraudulent trading platforms.',
          'The numeric fields here are neutral, category-typical placeholders and are not the basis for the flag. The load-bearing fact is the FSMA listing.',
        ],
      },
      {
        heading: 'The regulator warning, explained plainly',
        paragraphs: [
          'In June 2026 the FSMA \u2014 Belgium\u2019s Financial Services and Markets Authority \u2014 publicly warned against a group of fraudulent trading platforms and added solara-financelimited.com to its list (source: FSMA). The FSMA characterises these platforms as \u201cadvanced scams\u201d promising quick, easy earnings that can lead to significant financial losses; that wording is the regulator\u2019s own, which we attribute to the FSMA rather than asserting independently.',
          'A place on the FSMA list means the operator is not authorised in Belgium and has been publicly identified as fraudulent by the authority. Unauthorised operators are not bound by the investor-protection rules that govern licensed firms \u2014 no supervised complaints route, no assured segregation of client money, and no compensation scheme.',
          'A word about the \u201cLimited\u201d in the name: a company-style suffix is not evidence of regulation. Anyone can register a company name or choose a corporate-sounding brand; what matters is authorisation by a financial regulator, which is exactly what this operator lacks and why the FSMA has listed it. The FSMA notes its list is not complete but is updated frequently, and points consumers to its \u201cCheck your provider\u201d page to verify authorisation.',
        ],
      },
      {
        heading: 'Red flags a beginner should learn to notice',
        paragraphs: [
          'Verify before you deposit. In Belgium, use the FSMA\u2019s \u201cCheck your provider\u201d tool and warnings list; in the UK, the FCA Register and Warning List; elsewhere, the national regulator. A fraudulent-platforms listing is a decisive stop.',
          'The behavioural red flags recur: promises of quick or guaranteed profit, urgency to fund, an \u201caccount manager\u201d nudging larger deposits, high leverage aimed at beginners, and easy deposits paired with obstructed withdrawals. A corporate-sounding name with no verifiable regulated entity behind it is a further prompt to check the register.',
          'Note the absences: no verifiable licence number, no named regulated entity, no compensation-scheme membership, and weak or missing risk warnings \u2014 all required of regulated brokers.',
        ],
      },
      {
        heading: 'What to do if you have already deposited',
        paragraphs: [
          'Stop sending money, especially any \u201ctax\u201d, \u201cfee\u201d or \u201cverification\u201d payment demanded before a withdrawal is released \u2014 a common tactic that rarely results in a payout.',
          'Preserve all evidence: the website URL, account statements, emails, chat logs, contact names and every transaction with dates and amounts.',
          'Contact your bank or card provider immediately about a chargeback or recall, and report to your national regulator and police. In Belgium, report directly to the FSMA. Be wary of any subsequent \u201crecovery\u201d offer that asks for an upfront fee to get your money back.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'Solara Finance Limited is listed here purely as a transparency and consumer-protection signal. The determining fact is public: the FSMA added solara-financelimited.com to its list of fraudulent trading platforms in its June 2026 warning (source: FSMA). Dealing with a platform a regulator has publicly identified as fraudulent means forfeiting every protection designed to keep your money safe.',
          'Our advice holds for every broker: only fund an account with a firm you have personally verified as authorised on an official register, and treat any warning-list appearance as final \u2014 regardless of how official the name sounds. CFD and Forex trading is high-risk even with a regulated broker \u2014 most retail traders lose money \u2014 and a regulator-flagged, unauthorised operator removes your last safeguard entirely.',
        ],
      },
    ],
  },
};
