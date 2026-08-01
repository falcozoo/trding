/**
 * Flagged / not-recommended brokers — batch 11.
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

export const FLAGGED_BROKERS_11: Broker[] = [
  {
    slug: "investing-banks-consob",
    name: "Investing Banks",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 250,
    avgSpreadEurUsd: 1.5,
    commissionPerLot: 6,
    maxLeverage: 500,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.8,
    trustpilotReviews: 79,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (investing-banks.com), communicated on 27 March 2025 (n. 23487 of 26 March 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "pim-mtf-markets-consob",
    name: "Pim MTF Markets",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 100,
    avgSpreadEurUsd: 1.7,
    commissionPerLot: 6,
    maxLeverage: 888,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.0,
    trustpilotReviews: 74,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (pimmtf.com), communicated on 27 March 2025 (n. 23488 of 26 March 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "tradingrepublica-ltd-consob",
    name: "Trade Republica (tradingrepublicaltd.com)",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 200,
    avgSpreadEurUsd: 2.0,
    commissionPerLot: 0,
    maxLeverage: 888,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.8,
    trustpilotReviews: 45,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (tradingrepublicaltd.com), communicated on 27 March 2025 (n. 23490 of 26 March 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "top-markets-consob",
    name: "Top Markets",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2020,
    minDeposit: 250,
    avgSpreadEurUsd: 2.0,
    commissionPerLot: 7,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.1,
    trustpilotReviews: 91,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (tender-capitalcfd.com), communicated on 27 March 2025 (n. 23489 of 26 March 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "freetradeeuropa-consob",
    name: "Freetradeeuropa",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 100,
    avgSpreadEurUsd: 1.3,
    commissionPerLot: 0,
    maxLeverage: 1000,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.4,
    trustpilotReviews: 34,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (freetradeeuropa.com), communicated on 18 December 2025 (n. 23812 of 17 December 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "safecap-inv-consob",
    name: "Safecap (safecapinv.com)",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2019,
    minDeposit: 250,
    avgSpreadEurUsd: 1.5,
    commissionPerLot: 6,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.5,
    trustpilotReviews: 38,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (safecapinv.com), communicated on 18 December 2025 (n. 23810 of 17 December 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "bosonalfa-ai-consob",
    name: "Bosonalfa-ai",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 500,
    avgSpreadEurUsd: 1.8,
    commissionPerLot: 5,
    maxLeverage: 500,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.7,
    trustpilotReviews: 40,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (bosonalfa-ai.com), communicated on 18 December 2025 (n. 23811 of 17 December 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "globalmarketsic-consob",
    name: "GlobalMarketsIC",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 200,
    avgSpreadEurUsd: 2.1,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.6,
    trustpilotReviews: 73,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (glblmrktsic.com), communicated on 18 December 2025 (n. 23809 of 17 December 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "sybz-consob",
    name: "SYBZ",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2019,
    minDeposit: 100,
    avgSpreadEurUsd: 1.9,
    commissionPerLot: 7,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.1,
    trustpilotReviews: 45,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (sybzgroup.co), communicated on 03 April 2025 (n. 23500 of 01 April 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "finanzaexpert-trading-consob",
    name: "Finanza Expert Trading",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 500,
    avgSpreadEurUsd: 1.9,
    commissionPerLot: 5,
    maxLeverage: 500,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.8,
    trustpilotReviews: 93,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (trading.finanzaexpert.com), communicated on 03 April 2025 (n. 23497 of 01 April 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
];

export const FLAGGED_DEEP_11: Record<string, DeepBroker> = {
  "investing-banks-consob": {
    verdict:
      "We flag Investing Banks and do not recommend it. Its website (investing-banks.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 27 March 2025 (source: CONSOB, n. 23487 of 26 March 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Investing Banks presents itself as",
        paragraphs: [
          "Investing Banks (at investing-banks.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of investing-banks.com, communicated on 27 March 2025 (n. 23487 of 26 March 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
          "The specific finding is a violation of Article 18 of the Italian Consolidated Law on Finance (Legislative Decree no. 58/1998): providing investment services or activities to the public without being authorised. An authorised intermediary must be entered on CONSOB’s or the Bank of Italy’s registers; this operator was not, which is precisely why the site was ordered dark.",
          "The practical consequence for a retail client is severe. An unauthorised operator is outside the supervised system entirely — there is no obligation to segregate client money, no supervised complaints channel, and no investor-compensation scheme behind it. CONSOB reminds savers to verify in advance that any operator offering financial services is authorised, and to treat an oscuramento order as a clear signal to stay away.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Italy, check that it is entered on CONSOB’s registers of authorised intermediaries, and check the CONSOB oscuramento list for blocked sites. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Investing Banks only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered investing-banks.com blocked as an unauthorised financial intermediary, communicated on 27 March 2025 (n. 23487 of 26 March 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "pim-mtf-markets-consob": {
    verdict:
      "We flag Pim MTF Markets and do not recommend it. Its website (pimmtf.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 27 March 2025 (source: CONSOB, n. 23488 of 26 March 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Pim MTF Markets presents itself as",
        paragraphs: [
          "Pim MTF Markets (at pimmtf.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of pimmtf.com, communicated on 27 March 2025 (n. 23488 of 26 March 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
          "The specific finding is a violation of Article 18 of the Italian Consolidated Law on Finance (Legislative Decree no. 58/1998): providing investment services or activities to the public without being authorised. An authorised intermediary must be entered on CONSOB’s or the Bank of Italy’s registers; this operator was not, which is precisely why the site was ordered dark.",
          "The practical consequence for a retail client is severe. An unauthorised operator is outside the supervised system entirely — there is no obligation to segregate client money, no supervised complaints channel, and no investor-compensation scheme behind it. CONSOB reminds savers to verify in advance that any operator offering financial services is authorised, and to treat an oscuramento order as a clear signal to stay away.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Italy, check that it is entered on CONSOB’s registers of authorised intermediaries, and check the CONSOB oscuramento list for blocked sites. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Pim MTF Markets only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered pimmtf.com blocked as an unauthorised financial intermediary, communicated on 27 March 2025 (n. 23488 of 26 March 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "tradingrepublica-ltd-consob": {
    verdict:
      "We flag Trade Republica (tradingrepublicaltd.com) and do not recommend it. Its website (tradingrepublicaltd.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 27 March 2025 (source: CONSOB, n. 23490 of 26 March 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Trade Republica (tradingrepublicaltd.com) presents itself as",
        paragraphs: [
          "Trade Republica (tradingrepublicaltd.com) (at tradingrepublicaltd.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of tradingrepublicaltd.com, communicated on 27 March 2025 (n. 23490 of 26 March 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
          "The specific finding is a violation of Article 18 of the Italian Consolidated Law on Finance (Legislative Decree no. 58/1998): providing investment services or activities to the public without being authorised. An authorised intermediary must be entered on CONSOB’s or the Bank of Italy’s registers; this operator was not, which is precisely why the site was ordered dark.",
          "The practical consequence for a retail client is severe. An unauthorised operator is outside the supervised system entirely — there is no obligation to segregate client money, no supervised complaints channel, and no investor-compensation scheme behind it. CONSOB reminds savers to verify in advance that any operator offering financial services is authorised, and to treat an oscuramento order as a clear signal to stay away.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Italy, check that it is entered on CONSOB’s registers of authorised intermediaries, and check the CONSOB oscuramento list for blocked sites. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Trade Republica (tradingrepublicaltd.com) only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered tradingrepublicaltd.com blocked as an unauthorised financial intermediary, communicated on 27 March 2025 (n. 23490 of 26 March 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "top-markets-consob": {
    verdict:
      "We flag Top Markets and do not recommend it. Its website (tender-capitalcfd.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 27 March 2025 (source: CONSOB, n. 23489 of 26 March 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Top Markets presents itself as",
        paragraphs: [
          "Top Markets (at tender-capitalcfd.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of tender-capitalcfd.com, communicated on 27 March 2025 (n. 23489 of 26 March 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
          "The specific finding is a violation of Article 18 of the Italian Consolidated Law on Finance (Legislative Decree no. 58/1998): providing investment services or activities to the public without being authorised. An authorised intermediary must be entered on CONSOB’s or the Bank of Italy’s registers; this operator was not, which is precisely why the site was ordered dark.",
          "The practical consequence for a retail client is severe. An unauthorised operator is outside the supervised system entirely — there is no obligation to segregate client money, no supervised complaints channel, and no investor-compensation scheme behind it. CONSOB reminds savers to verify in advance that any operator offering financial services is authorised, and to treat an oscuramento order as a clear signal to stay away.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Italy, check that it is entered on CONSOB’s registers of authorised intermediaries, and check the CONSOB oscuramento list for blocked sites. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Top Markets only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered tender-capitalcfd.com blocked as an unauthorised financial intermediary, communicated on 27 March 2025 (n. 23489 of 26 March 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "freetradeeuropa-consob": {
    verdict:
      "We flag Freetradeeuropa and do not recommend it. Its website (freetradeeuropa.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 18 December 2025 (source: CONSOB, n. 23812 of 17 December 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Freetradeeuropa presents itself as",
        paragraphs: [
          "Freetradeeuropa (at freetradeeuropa.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of freetradeeuropa.com, communicated on 18 December 2025 (n. 23812 of 17 December 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
          "The specific finding is a violation of Article 18 of the Italian Consolidated Law on Finance (Legislative Decree no. 58/1998): providing investment services or activities to the public without being authorised. An authorised intermediary must be entered on CONSOB’s or the Bank of Italy’s registers; this operator was not, which is precisely why the site was ordered dark.",
          "The practical consequence for a retail client is severe. An unauthorised operator is outside the supervised system entirely — there is no obligation to segregate client money, no supervised complaints channel, and no investor-compensation scheme behind it. CONSOB reminds savers to verify in advance that any operator offering financial services is authorised, and to treat an oscuramento order as a clear signal to stay away.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Italy, check that it is entered on CONSOB’s registers of authorised intermediaries, and check the CONSOB oscuramento list for blocked sites. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Freetradeeuropa only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered freetradeeuropa.com blocked as an unauthorised financial intermediary, communicated on 18 December 2025 (n. 23812 of 17 December 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "safecap-inv-consob": {
    verdict:
      "We flag Safecap (safecapinv.com) and do not recommend it. Its website (safecapinv.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 18 December 2025 (source: CONSOB, n. 23810 of 17 December 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Safecap (safecapinv.com) presents itself as",
        paragraphs: [
          "Safecap (safecapinv.com) (at safecapinv.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of safecapinv.com, communicated on 18 December 2025 (n. 23810 of 17 December 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
          "The specific finding is a violation of Article 18 of the Italian Consolidated Law on Finance (Legislative Decree no. 58/1998): providing investment services or activities to the public without being authorised. An authorised intermediary must be entered on CONSOB’s or the Bank of Italy’s registers; this operator was not, which is precisely why the site was ordered dark.",
          "The practical consequence for a retail client is severe. An unauthorised operator is outside the supervised system entirely — there is no obligation to segregate client money, no supervised complaints channel, and no investor-compensation scheme behind it. CONSOB reminds savers to verify in advance that any operator offering financial services is authorised, and to treat an oscuramento order as a clear signal to stay away.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Italy, check that it is entered on CONSOB’s registers of authorised intermediaries, and check the CONSOB oscuramento list for blocked sites. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Safecap (safecapinv.com) only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered safecapinv.com blocked as an unauthorised financial intermediary, communicated on 18 December 2025 (n. 23810 of 17 December 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "bosonalfa-ai-consob": {
    verdict:
      "We flag Bosonalfa-ai and do not recommend it. Its website (bosonalfa-ai.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 18 December 2025 (source: CONSOB, n. 23811 of 17 December 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Bosonalfa-ai presents itself as",
        paragraphs: [
          "Bosonalfa-ai (at bosonalfa-ai.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of bosonalfa-ai.com, communicated on 18 December 2025 (n. 23811 of 17 December 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
          "The specific finding is a violation of Article 18 of the Italian Consolidated Law on Finance (Legislative Decree no. 58/1998): providing investment services or activities to the public without being authorised. An authorised intermediary must be entered on CONSOB’s or the Bank of Italy’s registers; this operator was not, which is precisely why the site was ordered dark.",
          "The practical consequence for a retail client is severe. An unauthorised operator is outside the supervised system entirely — there is no obligation to segregate client money, no supervised complaints channel, and no investor-compensation scheme behind it. CONSOB reminds savers to verify in advance that any operator offering financial services is authorised, and to treat an oscuramento order as a clear signal to stay away.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Italy, check that it is entered on CONSOB’s registers of authorised intermediaries, and check the CONSOB oscuramento list for blocked sites. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Bosonalfa-ai only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered bosonalfa-ai.com blocked as an unauthorised financial intermediary, communicated on 18 December 2025 (n. 23811 of 17 December 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "globalmarketsic-consob": {
    verdict:
      "We flag GlobalMarketsIC and do not recommend it. Its website (glblmrktsic.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 18 December 2025 (source: CONSOB, n. 23809 of 17 December 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who GlobalMarketsIC presents itself as",
        paragraphs: [
          "GlobalMarketsIC (at glblmrktsic.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of glblmrktsic.com, communicated on 18 December 2025 (n. 23809 of 17 December 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
          "The specific finding is a violation of Article 18 of the Italian Consolidated Law on Finance (Legislative Decree no. 58/1998): providing investment services or activities to the public without being authorised. An authorised intermediary must be entered on CONSOB’s or the Bank of Italy’s registers; this operator was not, which is precisely why the site was ordered dark.",
          "The practical consequence for a retail client is severe. An unauthorised operator is outside the supervised system entirely — there is no obligation to segregate client money, no supervised complaints channel, and no investor-compensation scheme behind it. CONSOB reminds savers to verify in advance that any operator offering financial services is authorised, and to treat an oscuramento order as a clear signal to stay away.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Italy, check that it is entered on CONSOB’s registers of authorised intermediaries, and check the CONSOB oscuramento list for blocked sites. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list GlobalMarketsIC only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered glblmrktsic.com blocked as an unauthorised financial intermediary, communicated on 18 December 2025 (n. 23809 of 17 December 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "sybz-consob": {
    verdict:
      "We flag SYBZ and do not recommend it. Its website (sybzgroup.co) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 03 April 2025 (source: CONSOB, n. 23500 of 01 April 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who SYBZ presents itself as",
        paragraphs: [
          "SYBZ (at sybzgroup.co) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of sybzgroup.co, communicated on 03 April 2025 (n. 23500 of 01 April 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
          "The specific finding is a violation of Article 18 of the Italian Consolidated Law on Finance (Legislative Decree no. 58/1998): providing investment services or activities to the public without being authorised. An authorised intermediary must be entered on CONSOB’s or the Bank of Italy’s registers; this operator was not, which is precisely why the site was ordered dark.",
          "The practical consequence for a retail client is severe. An unauthorised operator is outside the supervised system entirely — there is no obligation to segregate client money, no supervised complaints channel, and no investor-compensation scheme behind it. CONSOB reminds savers to verify in advance that any operator offering financial services is authorised, and to treat an oscuramento order as a clear signal to stay away.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Italy, check that it is entered on CONSOB’s registers of authorised intermediaries, and check the CONSOB oscuramento list for blocked sites. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list SYBZ only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered sybzgroup.co blocked as an unauthorised financial intermediary, communicated on 03 April 2025 (n. 23500 of 01 April 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "finanzaexpert-trading-consob": {
    verdict:
      "We flag Finanza Expert Trading and do not recommend it. Its website (trading.finanzaexpert.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 03 April 2025 (source: CONSOB, n. 23497 of 01 April 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Finanza Expert Trading presents itself as",
        paragraphs: [
          "Finanza Expert Trading (at trading.finanzaexpert.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of trading.finanzaexpert.com, communicated on 03 April 2025 (n. 23497 of 01 April 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
          "The specific finding is a violation of Article 18 of the Italian Consolidated Law on Finance (Legislative Decree no. 58/1998): providing investment services or activities to the public without being authorised. An authorised intermediary must be entered on CONSOB’s or the Bank of Italy’s registers; this operator was not, which is precisely why the site was ordered dark.",
          "The practical consequence for a retail client is severe. An unauthorised operator is outside the supervised system entirely — there is no obligation to segregate client money, no supervised complaints channel, and no investor-compensation scheme behind it. CONSOB reminds savers to verify in advance that any operator offering financial services is authorised, and to treat an oscuramento order as a clear signal to stay away.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Italy, check that it is entered on CONSOB’s registers of authorised intermediaries, and check the CONSOB oscuramento list for blocked sites. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Finanza Expert Trading only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered trading.finanzaexpert.com blocked as an unauthorised financial intermediary, communicated on 03 April 2025 (n. 23497 of 01 April 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
};
