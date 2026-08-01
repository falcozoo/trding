/**
 * Flagged / not-recommended brokers — batch 12.
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

export const FLAGGED_BROKERS_12: Broker[] = [
  {
    slug: "captincapital-consob",
    name: "CaptinCapital",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2023,
    minDeposit: 250,
    avgSpreadEurUsd: 1.4,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.8,
    trustpilotReviews: 63,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (captincapital.org), communicated on 05 June 2025 (press release of 05 June 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "mercato-del-futuro-consob",
    name: "Mercato del Futuro",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 250,
    avgSpreadEurUsd: 1.4,
    commissionPerLot: 0,
    maxLeverage: 888,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.2,
    trustpilotReviews: 84,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (mercatodelfuturo.com), communicated on 05 June 2025 (press release of 05 June 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "sector-fusion-consob",
    name: "Sector-Fusion",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 100,
    avgSpreadEurUsd: 1.4,
    commissionPerLot: 7,
    maxLeverage: 500,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.5,
    trustpilotReviews: 34,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (sector-fusion.com), communicated on 05 June 2025 (press release of 05 June 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "genix-limited-consob",
    name: "GenixLimited",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 250,
    avgSpreadEurUsd: 1.5,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.0,
    trustpilotReviews: 37,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (genixlimited.com), communicated on 05 June 2025 (press release of 05 June 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "lumex-stratos-consob",
    name: "Lumex (Stratoslumex)",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2019,
    minDeposit: 250,
    avgSpreadEurUsd: 2.0,
    commissionPerLot: 0,
    maxLeverage: 888,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.9,
    trustpilotReviews: 88,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (stratoslumex.com), communicated on 05 June 2025 (press release of 05 June 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "ext24-consob",
    name: "EXT24",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 500,
    avgSpreadEurUsd: 1.9,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.4,
    trustpilotReviews: 58,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (ext247.co), communicated on 20 June 2025 (n. 23611 of 19 June 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "rgroupltd-consob",
    name: "Rgroupltd",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 250,
    avgSpreadEurUsd: 1.3,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.4,
    trustpilotReviews: 67,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (rgroupltd.cm), communicated on 20 June 2025 (n. 23612 of 19 June 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "trevorex-consob",
    name: "Trevorex",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 250,
    avgSpreadEurUsd: 1.4,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.4,
    trustpilotReviews: 106,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (trevorrex.com), communicated on 20 June 2025 (n. 23610 of 19 June 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "ahp-cmg-consob",
    name: "AHP",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2019,
    minDeposit: 100,
    avgSpreadEurUsd: 1.6,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.0,
    trustpilotReviews: 82,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (ahpcmg.com), communicated on 20 June 2025 (n. 23609 of 19 June 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "quantumwins-consob",
    name: "QW Limited (Quantumwins)",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 100,
    avgSpreadEurUsd: 2.0,
    commissionPerLot: 0,
    maxLeverage: 1000,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.5,
    trustpilotReviews: 99,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (quantumwins.com), communicated on 20 June 2025 (n. 23608 of 19 June 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
];

export const FLAGGED_DEEP_12: Record<string, DeepBroker> = {
  "captincapital-consob": {
    verdict:
      "We flag CaptinCapital and do not recommend it. Its website (captincapital.org) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 05 June 2025 (source: CONSOB, press release of 05 June 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who CaptinCapital presents itself as",
        paragraphs: [
          "CaptinCapital (at captincapital.org) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of captincapital.org, communicated on 05 June 2025 (press release of 05 June 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list CaptinCapital only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered captincapital.org blocked as an unauthorised financial intermediary, communicated on 05 June 2025 (press release of 05 June 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "mercato-del-futuro-consob": {
    verdict:
      "We flag Mercato del Futuro and do not recommend it. Its website (mercatodelfuturo.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 05 June 2025 (source: CONSOB, press release of 05 June 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Mercato del Futuro presents itself as",
        paragraphs: [
          "Mercato del Futuro (at mercatodelfuturo.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of mercatodelfuturo.com, communicated on 05 June 2025 (press release of 05 June 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Mercato del Futuro only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered mercatodelfuturo.com blocked as an unauthorised financial intermediary, communicated on 05 June 2025 (press release of 05 June 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "sector-fusion-consob": {
    verdict:
      "We flag Sector-Fusion and do not recommend it. Its website (sector-fusion.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 05 June 2025 (source: CONSOB, press release of 05 June 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Sector-Fusion presents itself as",
        paragraphs: [
          "Sector-Fusion (at sector-fusion.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of sector-fusion.com, communicated on 05 June 2025 (press release of 05 June 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Sector-Fusion only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered sector-fusion.com blocked as an unauthorised financial intermediary, communicated on 05 June 2025 (press release of 05 June 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "genix-limited-consob": {
    verdict:
      "We flag GenixLimited and do not recommend it. Its website (genixlimited.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 05 June 2025 (source: CONSOB, press release of 05 June 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who GenixLimited presents itself as",
        paragraphs: [
          "GenixLimited (at genixlimited.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of genixlimited.com, communicated on 05 June 2025 (press release of 05 June 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list GenixLimited only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered genixlimited.com blocked as an unauthorised financial intermediary, communicated on 05 June 2025 (press release of 05 June 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "lumex-stratos-consob": {
    verdict:
      "We flag Lumex (Stratoslumex) and do not recommend it. Its website (stratoslumex.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 05 June 2025 (source: CONSOB, press release of 05 June 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Lumex (Stratoslumex) presents itself as",
        paragraphs: [
          "Lumex (Stratoslumex) (at stratoslumex.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of stratoslumex.com, communicated on 05 June 2025 (press release of 05 June 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Lumex (Stratoslumex) only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered stratoslumex.com blocked as an unauthorised financial intermediary, communicated on 05 June 2025 (press release of 05 June 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "ext24-consob": {
    verdict:
      "We flag EXT24 and do not recommend it. Its website (ext247.co) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 20 June 2025 (source: CONSOB, n. 23611 of 19 June 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who EXT24 presents itself as",
        paragraphs: [
          "EXT24 (at ext247.co) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of ext247.co, communicated on 20 June 2025 (n. 23611 of 19 June 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list EXT24 only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered ext247.co blocked as an unauthorised financial intermediary, communicated on 20 June 2025 (n. 23611 of 19 June 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "rgroupltd-consob": {
    verdict:
      "We flag Rgroupltd and do not recommend it. Its website (rgroupltd.cm) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 20 June 2025 (source: CONSOB, n. 23612 of 19 June 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Rgroupltd presents itself as",
        paragraphs: [
          "Rgroupltd (at rgroupltd.cm) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of rgroupltd.cm, communicated on 20 June 2025 (n. 23612 of 19 June 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Rgroupltd only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered rgroupltd.cm blocked as an unauthorised financial intermediary, communicated on 20 June 2025 (n. 23612 of 19 June 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "trevorex-consob": {
    verdict:
      "We flag Trevorex and do not recommend it. Its website (trevorrex.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 20 June 2025 (source: CONSOB, n. 23610 of 19 June 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Trevorex presents itself as",
        paragraphs: [
          "Trevorex (at trevorrex.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of trevorrex.com, communicated on 20 June 2025 (n. 23610 of 19 June 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Trevorex only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered trevorrex.com blocked as an unauthorised financial intermediary, communicated on 20 June 2025 (n. 23610 of 19 June 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "ahp-cmg-consob": {
    verdict:
      "We flag AHP and do not recommend it. Its website (ahpcmg.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 20 June 2025 (source: CONSOB, n. 23609 of 19 June 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who AHP presents itself as",
        paragraphs: [
          "AHP (at ahpcmg.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of ahpcmg.com, communicated on 20 June 2025 (n. 23609 of 19 June 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list AHP only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered ahpcmg.com blocked as an unauthorised financial intermediary, communicated on 20 June 2025 (n. 23609 of 19 June 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "quantumwins-consob": {
    verdict:
      "We flag QW Limited (Quantumwins) and do not recommend it. Its website (quantumwins.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 20 June 2025 (source: CONSOB, n. 23608 of 19 June 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who QW Limited (Quantumwins) presents itself as",
        paragraphs: [
          "QW Limited (Quantumwins) (at quantumwins.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of quantumwins.com, communicated on 20 June 2025 (n. 23608 of 19 June 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list QW Limited (Quantumwins) only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered quantumwins.com blocked as an unauthorised financial intermediary, communicated on 20 June 2025 (n. 23608 of 19 June 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
};
