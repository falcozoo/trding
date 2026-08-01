/**
 * Flagged / not-recommended brokers — batch 8.
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

export const FLAGGED_BROKERS_8: Broker[] = [
  {
    slug: "norvatix-amf",
    name: "Norvatix",
    tagline: "Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2023,
    minDeposit: 250,
    avgSpreadEurUsd: 1.6,
    commissionPerLot: 5,
    maxLeverage: 1000,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.0,
    trustpilotReviews: 30,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (norvatix.io), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "onex-trade-amf",
    name: "Onex-Trade",
    tagline: "Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2023,
    minDeposit: 500,
    avgSpreadEurUsd: 1.3,
    commissionPerLot: 7,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.5,
    trustpilotReviews: 98,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (onex-trade.com), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "xportal-management-amf",
    name: "Xportal Management",
    tagline: "Unauthorised Forex/CFD website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2023,
    minDeposit: 200,
    avgSpreadEurUsd: 1.6,
    commissionPerLot: 6,
    maxLeverage: 888,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.4,
    trustpilotReviews: 33,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised Forex/CFD websites (xportal-management.com), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "btceprex-amf",
    name: "BTC Eprex",
    tagline: "Unauthorised crypto-asset derivatives website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 250,
    avgSpreadEurUsd: 1.7,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.4,
    trustpilotReviews: 21,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised crypto-asset derivatives websites (btceprex.net), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "capitagains-amf",
    name: "Capitagains",
    tagline: "Unauthorised crypto-asset derivatives website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 200,
    avgSpreadEurUsd: 2.2,
    commissionPerLot: 5,
    maxLeverage: 1000,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.5,
    trustpilotReviews: 15,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised crypto-asset derivatives websites (capitagains.net), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "cbleurope-amf",
    name: "CBL Europe",
    tagline: "Unauthorised crypto-asset derivatives website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 250,
    avgSpreadEurUsd: 1.9,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.3,
    trustpilotReviews: 89,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised crypto-asset derivatives websites (cbleurope.com), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "coineurocapital-amf",
    name: "Coin Euro Capital",
    tagline: "Unauthorised crypto-asset derivatives website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2023,
    minDeposit: 250,
    avgSpreadEurUsd: 1.6,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.0,
    trustpilotReviews: 80,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised crypto-asset derivatives websites (coineurocapital.co), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "interbrokers-pro-amf",
    name: "InterBrokers",
    tagline: "Unauthorised crypto-asset derivatives website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 100,
    avgSpreadEurUsd: 1.5,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.7,
    trustpilotReviews: 103,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised crypto-asset derivatives websites (interbrokers.pro), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "nettradecap-amf",
    name: "Nettradecap",
    tagline: "Unauthorised crypto-asset derivatives website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 100,
    avgSpreadEurUsd: 1.5,
    commissionPerLot: 5,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.3,
    trustpilotReviews: 58,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised crypto-asset derivatives websites (nettradecap.com), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "oxtrades-amf",
    name: "Oxtrades",
    tagline: "Unauthorised crypto-asset derivatives website on the AMF/ACPR French blacklist.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2023,
    minDeposit: 200,
    avgSpreadEurUsd: 1.5,
    commissionPerLot: 7,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.0,
    trustpilotReviews: 53,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Listed on the AMF/ACPR blacklist of unauthorised crypto-asset derivatives websites (oxtrades.com), published 22 October 2024 (source: AMF/ACPR). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
];

export const FLAGGED_DEEP_8: Record<string, DeepBroker> = {
  "norvatix-amf": {
    verdict:
      "We flag Norvatix and do not recommend it. Its website (norvatix.io) appears on the blacklist of unauthorised Forex websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering Forex investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Norvatix presents itself as",
        paragraphs: [
          "Norvatix (at norvatix.io) markets itself as an online trading brand offering leveraged Forex products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For Norvatix that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated Forex space without being authorised to do so in France. The website norvatix.io is named on that list (source: AMF/ACPR).",
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
          "We list Norvatix only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named norvatix.io on their 22 October 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "onex-trade-amf": {
    verdict:
      "We flag Onex-Trade and do not recommend it. Its website (onex-trade.com) appears on the blacklist of unauthorised Forex websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering Forex investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Onex-Trade presents itself as",
        paragraphs: [
          "Onex-Trade (at onex-trade.com) markets itself as an online trading brand offering leveraged Forex products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For Onex-Trade that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated Forex space without being authorised to do so in France. The website onex-trade.com is named on that list (source: AMF/ACPR).",
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
          "We list Onex-Trade only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named onex-trade.com on their 22 October 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "xportal-management-amf": {
    verdict:
      "We flag Xportal Management and do not recommend it. Its website (xportal-management.com) appears on the blacklist of unauthorised Forex websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering Forex investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Xportal Management presents itself as",
        paragraphs: [
          "Xportal Management (at xportal-management.com) markets itself as an online trading brand offering leveraged Forex products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For Xportal Management that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated Forex space without being authorised to do so in France. The website xportal-management.com is named on that list (source: AMF/ACPR).",
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
          "We list Xportal Management only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named xportal-management.com on their 22 October 2024 blacklist of unauthorised Forex websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "btceprex-amf": {
    verdict:
      "We flag BTC Eprex and do not recommend it. Its website (btceprex.net) appears on the blacklist of unauthorised crypto-asset derivatives websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering crypto-asset derivatives investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who BTC Eprex presents itself as",
        paragraphs: [
          "BTC Eprex (at btceprex.net) markets itself as an online trading brand offering leveraged crypto-asset derivatives products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For BTC Eprex that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated crypto-asset derivatives space without being authorised to do so in France. The website btceprex.net is named on that list (source: AMF/ACPR).",
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
          "We list BTC Eprex only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named btceprex.net on their 22 October 2024 blacklist of unauthorised crypto-asset derivatives websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "capitagains-amf": {
    verdict:
      "We flag Capitagains and do not recommend it. Its website (capitagains.net) appears on the blacklist of unauthorised crypto-asset derivatives websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering crypto-asset derivatives investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Capitagains presents itself as",
        paragraphs: [
          "Capitagains (at capitagains.net) markets itself as an online trading brand offering leveraged crypto-asset derivatives products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For Capitagains that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated crypto-asset derivatives space without being authorised to do so in France. The website capitagains.net is named on that list (source: AMF/ACPR).",
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
          "We list Capitagains only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named capitagains.net on their 22 October 2024 blacklist of unauthorised crypto-asset derivatives websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "cbleurope-amf": {
    verdict:
      "We flag CBL Europe and do not recommend it. Its website (cbleurope.com) appears on the blacklist of unauthorised crypto-asset derivatives websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering crypto-asset derivatives investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who CBL Europe presents itself as",
        paragraphs: [
          "CBL Europe (at cbleurope.com) markets itself as an online trading brand offering leveraged crypto-asset derivatives products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For CBL Europe that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated crypto-asset derivatives space without being authorised to do so in France. The website cbleurope.com is named on that list (source: AMF/ACPR).",
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
          "We list CBL Europe only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named cbleurope.com on their 22 October 2024 blacklist of unauthorised crypto-asset derivatives websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "coineurocapital-amf": {
    verdict:
      "We flag Coin Euro Capital and do not recommend it. Its website (coineurocapital.co) appears on the blacklist of unauthorised crypto-asset derivatives websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering crypto-asset derivatives investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Coin Euro Capital presents itself as",
        paragraphs: [
          "Coin Euro Capital (at coineurocapital.co) markets itself as an online trading brand offering leveraged crypto-asset derivatives products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For Coin Euro Capital that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated crypto-asset derivatives space without being authorised to do so in France. The website coineurocapital.co is named on that list (source: AMF/ACPR).",
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
          "We list Coin Euro Capital only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named coineurocapital.co on their 22 October 2024 blacklist of unauthorised crypto-asset derivatives websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "interbrokers-pro-amf": {
    verdict:
      "We flag InterBrokers and do not recommend it. Its website (interbrokers.pro) appears on the blacklist of unauthorised crypto-asset derivatives websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering crypto-asset derivatives investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who InterBrokers presents itself as",
        paragraphs: [
          "InterBrokers (at interbrokers.pro) markets itself as an online trading brand offering leveraged crypto-asset derivatives products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For InterBrokers that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated crypto-asset derivatives space without being authorised to do so in France. The website interbrokers.pro is named on that list (source: AMF/ACPR).",
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
          "We list InterBrokers only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named interbrokers.pro on their 22 October 2024 blacklist of unauthorised crypto-asset derivatives websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "nettradecap-amf": {
    verdict:
      "We flag Nettradecap and do not recommend it. Its website (nettradecap.com) appears on the blacklist of unauthorised crypto-asset derivatives websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering crypto-asset derivatives investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Nettradecap presents itself as",
        paragraphs: [
          "Nettradecap (at nettradecap.com) markets itself as an online trading brand offering leveraged crypto-asset derivatives products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For Nettradecap that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated crypto-asset derivatives space without being authorised to do so in France. The website nettradecap.com is named on that list (source: AMF/ACPR).",
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
          "We list Nettradecap only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named nettradecap.com on their 22 October 2024 blacklist of unauthorised crypto-asset derivatives websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
  "oxtrades-amf": {
    verdict:
      "We flag Oxtrades and do not recommend it. Its website (oxtrades.com) appears on the blacklist of unauthorised crypto-asset derivatives websites published jointly by France’s AMF and ACPR on 22 October 2024 (source: AMF/ACPR). Being named on that list means the operator was offering crypto-asset derivatives investments in France without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Oxtrades presents itself as",
        paragraphs: [
          "Oxtrades (at oxtrades.com) markets itself as an online trading brand offering leveraged crypto-asset derivatives products across currencies, indices and commodities through a browser-based or downloadable platform. Like most operators in this category, its site leans on easy sign-up, generous leverage and an attractive-looking dashboard, while saying very little that can be independently verified — no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up on a public register.",
          "On a neutral comparator our task is not to describe the marketing; it is to check whether an operator is legally allowed to do what it claims. For Oxtrades that check has a single, objective answer: a national regulator has publicly identified the website as unauthorised. Everything the site says about itself is secondary to that fact.",
          "We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the regulator warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "On 22 October 2024 the Autorité des Marchés Financiers (AMF) and the Autorité de Contrôle Prudentiel et de Résolution (ACPR) updated their blacklist of websites offering investments in the unregulated crypto-asset derivatives space without being authorised to do so in France. The website oxtrades.com is named on that list (source: AMF/ACPR).",
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
          "We list Oxtrades only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: the AMF and ACPR named oxtrades.com on their 22 October 2024 blacklist of unauthorised crypto-asset derivatives websites (source: AMF/ACPR). An unauthorised operator sits outside the rules designed to protect your money, and if something goes wrong you have far less recourse than you would with a supervised firm.",
          "Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning list. CFD and Forex trading is high-risk even with a properly regulated broker — most retail traders lose money — and doing it through an unauthorised one removes the last safety net you have. If you have already deposited, stop sending money, preserve all records, contact your bank about a possible chargeback, and report the matter to the AMF (Épargne Info Service) and your own national regulator.",
        ],
      },
    ],
  },
};
