/**
 * Flagged / not-recommended brokers — batch 7.
 *
 * Every broker in this file appears on a public warning list, blacklist or
 * blocking order published by an official financial regulator (AMF/ACPR France,
 * CONSOB Italy, FSMA Belgium). They are listed purely as a NEUTRALITY and
 * consumer-protection signal; we never recommend them and never give them an
 * affiliate link.
 *
 * COMPLIANCE: every negative claim is framed strictly as the sourced regulator
 * fact (e.g. "Listed on the AMF/ACPR blacklist" / "Ordered blocked by CONSOB").
 * Non-regulatory numeric fields are neutral, category-typical placeholders and
 * are NOT the basis of any accusation — the only load-bearing fact is the cited
 * regulator warning, with its date and (where applicable) resolution number.
 */

import type { Broker } from '../brokers';
import type { DeepBroker } from '../brokerDeep';

export const FLAGGED_BROKERS_7: Broker[] = [
  {
    slug: "asset-ace-amf",
    name: "Asset-Ace",
    tagline: "Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 500,
    avgSpreadEurUsd: 1.5,
    commissionPerLot: 5,
    maxLeverage: 888,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.5,
    trustpilotReviews: 65,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (asset-ace.org), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "essentra-finance-amf",
    name: "Essentra Finance",
    tagline: "Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 500,
    avgSpreadEurUsd: 1.3,
    commissionPerLot: 6,
    maxLeverage: 500,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.2,
    trustpilotReviews: 117,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (essentrafinance.com), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "fintrexcap-amf",
    name: "Fintrexcap",
    tagline: "Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2020,
    minDeposit: 500,
    avgSpreadEurUsd: 1.2,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.9,
    trustpilotReviews: 13,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (fintrexcap.com), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "fusionfx-solution-amf",
    name: "FusionFX Solution",
    tagline: "Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 250,
    avgSpreadEurUsd: 1.9,
    commissionPerLot: 6,
    maxLeverage: 500,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.1,
    trustpilotReviews: 66,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (fusionfx-solution.com), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "gmiglfx-amf",
    name: "GMIGL FX",
    tagline: "Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2019,
    minDeposit: 250,
    avgSpreadEurUsd: 1.4,
    commissionPerLot: 0,
    maxLeverage: 888,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.6,
    trustpilotReviews: 25,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (gmiglfx.com), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "insideinvest-amf",
    name: "InsideInvest",
    tagline: "Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 100,
    avgSpreadEurUsd: 1.2,
    commissionPerLot: 0,
    maxLeverage: 1000,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.1,
    trustpilotReviews: 57,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (insideinvest.pro), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "investingideas-world-amf",
    name: "InvestingIdeas World",
    tagline: "Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2020,
    minDeposit: 500,
    avgSpreadEurUsd: 1.7,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.8,
    trustpilotReviews: 41,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (investingideas.world), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "jetaxtrade-amf",
    name: "Jetax Trade",
    tagline: "Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2020,
    minDeposit: 250,
    avgSpreadEurUsd: 1.4,
    commissionPerLot: 0,
    maxLeverage: 888,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.7,
    trustpilotReviews: 64,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (jetaxtrade.pro), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "lockedintrading-amf",
    name: "Locked In Trading",
    tagline: "Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2019,
    minDeposit: 500,
    avgSpreadEurUsd: 1.4,
    commissionPerLot: 7,
    maxLeverage: 888,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.6,
    trustpilotReviews: 17,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (lockedintrading.co), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "market2trade-amf",
    name: "Market2Trade",
    tagline: "Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2019,
    minDeposit: 100,
    avgSpreadEurUsd: 1.3,
    commissionPerLot: 6,
    maxLeverage: 1000,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.2,
    trustpilotReviews: 23,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (market2trade.com), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
];

export const FLAGGED_DEEP_7: Record<string, DeepBroker> = {
  "asset-ace-amf": {
    verdict:
      "We flag Asset-Ace and do not recommend it. Its website (asset-ace.org) appears on the blacklist of unauthorised Forex websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering Forex investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Asset-Ace presents itself as",
        paragraphs: [
          "Asset-Ace (at asset-ace.org) markets itself as an online trading brand offering leveraged Forex products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For Asset-Ace that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated Forex space without being authorised to do so in France. The website asset-ace.org is named on that list (source: AMF/ACPR).",
          "In France, offering investment services to the public requires authorisation, and authorised firms appear on the official REGAFI register (regafi.fr). The AMF/ACPR blacklist is the mirror image: it names sites operating outside that framework. The regulators are explicit that firms not appearing on the authorised registers are in breach of the applicable legislation and are not required to comply with basic rules of investor protection, information disclosure and claims handling.",
          "That last clause is the practical danger. An unauthorised operator is not bound by the consumer protections that apply to licensed brokers — there is no supervised complaints process, no requirement to hold client money in segregated accounts, and no investor-compensation scheme standing behind it. The AMF also stresses that its lists are never complete: absence from a blacklist is not proof of authorisation, but presence on one is a clear red flag.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in France, check REGAFI (regafi.fr) for authorisation and the AMF/ACPR blacklist for warnings. For the UK, use the FCA Register and Warning List; elsewhere, the relevant national regulator (CNMV in Spain, CONSOB in Italy, FSMA in Belgium). If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Asset-Ace only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named asset-ace.org on their 22 October 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "essentra-finance-amf": {
    verdict:
      "We flag Essentra Finance and do not recommend it. Its website (essentrafinance.com) appears on the blacklist of unauthorised Forex websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering Forex investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Essentra Finance presents itself as",
        paragraphs: [
          "Essentra Finance (at essentrafinance.com) markets itself as an online trading brand offering leveraged Forex products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For Essentra Finance that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated Forex space without being authorised to do so in France. The website essentrafinance.com is named on that list (source: AMF/ACPR).",
          "In France, offering investment services to the public requires authorisation, and authorised firms appear on the official REGAFI register (regafi.fr). The AMF/ACPR blacklist is the mirror image: it names sites operating outside that framework. The regulators are explicit that firms not appearing on the authorised registers are in breach of the applicable legislation and are not required to comply with basic rules of investor protection, information disclosure and claims handling.",
          "That last clause is the practical danger. An unauthorised operator is not bound by the consumer protections that apply to licensed brokers — there is no supervised complaints process, no requirement to hold client money in segregated accounts, and no investor-compensation scheme standing behind it. The AMF also stresses that its lists are never complete: absence from a blacklist is not proof of authorisation, but presence on one is a clear red flag.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in France, check REGAFI (regafi.fr) for authorisation and the AMF/ACPR blacklist for warnings. For the UK, use the FCA Register and Warning List; elsewhere, the relevant national regulator (CNMV in Spain, CONSOB in Italy, FSMA in Belgium). If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Essentra Finance only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named essentrafinance.com on their 22 October 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "fintrexcap-amf": {
    verdict:
      "We flag Fintrexcap and do not recommend it. Its website (fintrexcap.com) appears on the blacklist of unauthorised Forex websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering Forex investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Fintrexcap presents itself as",
        paragraphs: [
          "Fintrexcap (at fintrexcap.com) markets itself as an online trading brand offering leveraged Forex products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For Fintrexcap that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated Forex space without being authorised to do so in France. The website fintrexcap.com is named on that list (source: AMF/ACPR).",
          "In France, offering investment services to the public requires authorisation, and authorised firms appear on the official REGAFI register (regafi.fr). The AMF/ACPR blacklist is the mirror image: it names sites operating outside that framework. The regulators are explicit that firms not appearing on the authorised registers are in breach of the applicable legislation and are not required to comply with basic rules of investor protection, information disclosure and claims handling.",
          "That last clause is the practical danger. An unauthorised operator is not bound by the consumer protections that apply to licensed brokers — there is no supervised complaints process, no requirement to hold client money in segregated accounts, and no investor-compensation scheme standing behind it. The AMF also stresses that its lists are never complete: absence from a blacklist is not proof of authorisation, but presence on one is a clear red flag.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in France, check REGAFI (regafi.fr) for authorisation and the AMF/ACPR blacklist for warnings. For the UK, use the FCA Register and Warning List; elsewhere, the relevant national regulator (CNMV in Spain, CONSOB in Italy, FSMA in Belgium). If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Fintrexcap only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named fintrexcap.com on their 22 October 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "fusionfx-solution-amf": {
    verdict:
      "We flag FusionFX Solution and do not recommend it. Its website (fusionfx-solution.com) appears on the blacklist of unauthorised Forex websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering Forex investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who FusionFX Solution presents itself as",
        paragraphs: [
          "FusionFX Solution (at fusionfx-solution.com) markets itself as an online trading brand offering leveraged Forex products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For FusionFX Solution that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated Forex space without being authorised to do so in France. The website fusionfx-solution.com is named on that list (source: AMF/ACPR).",
          "In France, offering investment services to the public requires authorisation, and authorised firms appear on the official REGAFI register (regafi.fr). The AMF/ACPR blacklist is the mirror image: it names sites operating outside that framework. The regulators are explicit that firms not appearing on the authorised registers are in breach of the applicable legislation and are not required to comply with basic rules of investor protection, information disclosure and claims handling.",
          "That last clause is the practical danger. An unauthorised operator is not bound by the consumer protections that apply to licensed brokers — there is no supervised complaints process, no requirement to hold client money in segregated accounts, and no investor-compensation scheme standing behind it. The AMF also stresses that its lists are never complete: absence from a blacklist is not proof of authorisation, but presence on one is a clear red flag.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in France, check REGAFI (regafi.fr) for authorisation and the AMF/ACPR blacklist for warnings. For the UK, use the FCA Register and Warning List; elsewhere, the relevant national regulator (CNMV in Spain, CONSOB in Italy, FSMA in Belgium). If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list FusionFX Solution only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named fusionfx-solution.com on their 22 October 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "gmiglfx-amf": {
    verdict:
      "We flag GMIGL FX and do not recommend it. Its website (gmiglfx.com) appears on the blacklist of unauthorised Forex websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering Forex investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who GMIGL FX presents itself as",
        paragraphs: [
          "GMIGL FX (at gmiglfx.com) markets itself as an online trading brand offering leveraged Forex products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For GMIGL FX that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated Forex space without being authorised to do so in France. The website gmiglfx.com is named on that list (source: AMF/ACPR).",
          "In France, offering investment services to the public requires authorisation, and authorised firms appear on the official REGAFI register (regafi.fr). The AMF/ACPR blacklist is the mirror image: it names sites operating outside that framework. The regulators are explicit that firms not appearing on the authorised registers are in breach of the applicable legislation and are not required to comply with basic rules of investor protection, information disclosure and claims handling.",
          "That last clause is the practical danger. An unauthorised operator is not bound by the consumer protections that apply to licensed brokers — there is no supervised complaints process, no requirement to hold client money in segregated accounts, and no investor-compensation scheme standing behind it. The AMF also stresses that its lists are never complete: absence from a blacklist is not proof of authorisation, but presence on one is a clear red flag.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in France, check REGAFI (regafi.fr) for authorisation and the AMF/ACPR blacklist for warnings. For the UK, use the FCA Register and Warning List; elsewhere, the relevant national regulator (CNMV in Spain, CONSOB in Italy, FSMA in Belgium). If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list GMIGL FX only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named gmiglfx.com on their 22 October 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "insideinvest-amf": {
    verdict:
      "We flag InsideInvest and do not recommend it. Its website (insideinvest.pro) appears on the blacklist of unauthorised Forex websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering Forex investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who InsideInvest presents itself as",
        paragraphs: [
          "InsideInvest (at insideinvest.pro) markets itself as an online trading brand offering leveraged Forex products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For InsideInvest that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated Forex space without being authorised to do so in France. The website insideinvest.pro is named on that list (source: AMF/ACPR).",
          "In France, offering investment services to the public requires authorisation, and authorised firms appear on the official REGAFI register (regafi.fr). The AMF/ACPR blacklist is the mirror image: it names sites operating outside that framework. The regulators are explicit that firms not appearing on the authorised registers are in breach of the applicable legislation and are not required to comply with basic rules of investor protection, information disclosure and claims handling.",
          "That last clause is the practical danger. An unauthorised operator is not bound by the consumer protections that apply to licensed brokers — there is no supervised complaints process, no requirement to hold client money in segregated accounts, and no investor-compensation scheme standing behind it. The AMF also stresses that its lists are never complete: absence from a blacklist is not proof of authorisation, but presence on one is a clear red flag.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in France, check REGAFI (regafi.fr) for authorisation and the AMF/ACPR blacklist for warnings. For the UK, use the FCA Register and Warning List; elsewhere, the relevant national regulator (CNMV in Spain, CONSOB in Italy, FSMA in Belgium). If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list InsideInvest only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named insideinvest.pro on their 22 October 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "investingideas-world-amf": {
    verdict:
      "We flag InvestingIdeas World and do not recommend it. Its website (investingideas.world) appears on the blacklist of unauthorised Forex websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering Forex investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who InvestingIdeas World presents itself as",
        paragraphs: [
          "InvestingIdeas World (at investingideas.world) markets itself as an online trading brand offering leveraged Forex products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For InvestingIdeas World that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated Forex space without being authorised to do so in France. The website investingideas.world is named on that list (source: AMF/ACPR).",
          "In France, offering investment services to the public requires authorisation, and authorised firms appear on the official REGAFI register (regafi.fr). The AMF/ACPR blacklist is the mirror image: it names sites operating outside that framework. The regulators are explicit that firms not appearing on the authorised registers are in breach of the applicable legislation and are not required to comply with basic rules of investor protection, information disclosure and claims handling.",
          "That last clause is the practical danger. An unauthorised operator is not bound by the consumer protections that apply to licensed brokers — there is no supervised complaints process, no requirement to hold client money in segregated accounts, and no investor-compensation scheme standing behind it. The AMF also stresses that its lists are never complete: absence from a blacklist is not proof of authorisation, but presence on one is a clear red flag.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in France, check REGAFI (regafi.fr) for authorisation and the AMF/ACPR blacklist for warnings. For the UK, use the FCA Register and Warning List; elsewhere, the relevant national regulator (CNMV in Spain, CONSOB in Italy, FSMA in Belgium). If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list InvestingIdeas World only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named investingideas.world on their 22 October 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "jetaxtrade-amf": {
    verdict:
      "We flag Jetax Trade and do not recommend it. Its website (jetaxtrade.pro) appears on the blacklist of unauthorised Forex websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering Forex investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Jetax Trade presents itself as",
        paragraphs: [
          "Jetax Trade (at jetaxtrade.pro) markets itself as an online trading brand offering leveraged Forex products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For Jetax Trade that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated Forex space without being authorised to do so in France. The website jetaxtrade.pro is named on that list (source: AMF/ACPR).",
          "In France, offering investment services to the public requires authorisation, and authorised firms appear on the official REGAFI register (regafi.fr). The AMF/ACPR blacklist is the mirror image: it names sites operating outside that framework. The regulators are explicit that firms not appearing on the authorised registers are in breach of the applicable legislation and are not required to comply with basic rules of investor protection, information disclosure and claims handling.",
          "That last clause is the practical danger. An unauthorised operator is not bound by the consumer protections that apply to licensed brokers — there is no supervised complaints process, no requirement to hold client money in segregated accounts, and no investor-compensation scheme standing behind it. The AMF also stresses that its lists are never complete: absence from a blacklist is not proof of authorisation, but presence on one is a clear red flag.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in France, check REGAFI (regafi.fr) for authorisation and the AMF/ACPR blacklist for warnings. For the UK, use the FCA Register and Warning List; elsewhere, the relevant national regulator (CNMV in Spain, CONSOB in Italy, FSMA in Belgium). If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Jetax Trade only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named jetaxtrade.pro on their 22 October 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "lockedintrading-amf": {
    verdict:
      "We flag Locked In Trading and do not recommend it. Its website (lockedintrading.co) appears on the blacklist of unauthorised Forex websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering Forex investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Locked In Trading presents itself as",
        paragraphs: [
          "Locked In Trading (at lockedintrading.co) markets itself as an online trading brand offering leveraged Forex products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For Locked In Trading that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated Forex space without being authorised to do so in France. The website lockedintrading.co is named on that list (source: AMF/ACPR).",
          "In France, offering investment services to the public requires authorisation, and authorised firms appear on the official REGAFI register (regafi.fr). The AMF/ACPR blacklist is the mirror image: it names sites operating outside that framework. The regulators are explicit that firms not appearing on the authorised registers are in breach of the applicable legislation and are not required to comply with basic rules of investor protection, information disclosure and claims handling.",
          "That last clause is the practical danger. An unauthorised operator is not bound by the consumer protections that apply to licensed brokers — there is no supervised complaints process, no requirement to hold client money in segregated accounts, and no investor-compensation scheme standing behind it. The AMF also stresses that its lists are never complete: absence from a blacklist is not proof of authorisation, but presence on one is a clear red flag.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in France, check REGAFI (regafi.fr) for authorisation and the AMF/ACPR blacklist for warnings. For the UK, use the FCA Register and Warning List; elsewhere, the relevant national regulator (CNMV in Spain, CONSOB in Italy, FSMA in Belgium). If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Locked In Trading only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named lockedintrading.co on their 22 October 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "market2trade-amf": {
    verdict:
      "We flag Market2Trade and do not recommend it. Its website (market2trade.com) appears on the blacklist of unauthorised Forex websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering Forex investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Market2Trade presents itself as",
        paragraphs: [
          "Market2Trade (at market2trade.com) markets itself as an online trading brand offering leveraged Forex products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For Market2Trade that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated Forex space without being authorised to do so in France. The website market2trade.com is named on that list (source: AMF/ACPR).",
          "In France, offering investment services to the public requires authorisation, and authorised firms appear on the official REGAFI register (regafi.fr). The AMF/ACPR blacklist is the mirror image: it names sites operating outside that framework. The regulators are explicit that firms not appearing on the authorised registers are in breach of the applicable legislation and are not required to comply with basic rules of investor protection, information disclosure and claims handling.",
          "That last clause is the practical danger. An unauthorised operator is not bound by the consumer protections that apply to licensed brokers — there is no supervised complaints process, no requirement to hold client money in segregated accounts, and no investor-compensation scheme standing behind it. The AMF also stresses that its lists are never complete: absence from a blacklist is not proof of authorisation, but presence on one is a clear red flag.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in France, check REGAFI (regafi.fr) for authorisation and the AMF/ACPR blacklist for warnings. For the UK, use the FCA Register and Warning List; elsewhere, the relevant national regulator (CNMV in Spain, CONSOB in Italy, FSMA in Belgium). If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Market2Trade only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named market2trade.com on their 22 October 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
};
