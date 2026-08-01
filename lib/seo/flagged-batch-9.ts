/**
 * Flagged / not-recommended brokers — batch 9.
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

export const FLAGGED_BROKERS_9: Broker[] = [
  {
    slug: "forex-elite-academy-consob",
    name: "Forex Elite Academy",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2020,
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
    trustpilotRating: 1.4,
    trustpilotReviews: 80,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (eliteforex.co), communicated on 21 November 2025 (n. 23760 of 20 November 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "nexus500-consob",
    name: "Nexus500",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2019,
    minDeposit: 250,
    avgSpreadEurUsd: 2.1,
    commissionPerLot: 0,
    maxLeverage: 888,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.5,
    trustpilotReviews: 49,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (nexus500.net), communicated on 21 November 2025 (n. 23761 of 20 November 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "aventus-consultancy-consob",
    name: "Aventus Consultancy",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 500,
    avgSpreadEurUsd: 1.9,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.7,
    trustpilotReviews: 76,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (avenconsultancy.com), communicated on 21 November 2025 (n. 23759 of 20 November 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "investpro-cfd-consob",
    name: "Investpro CFD",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 100,
    avgSpreadEurUsd: 1.8,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.3,
    trustpilotReviews: 9,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (investprocfd.com), communicated on 31 October 2024 (n. 23303 of 29 October 2024; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "goldbysell-consob",
    name: "Goldbysell",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2020,
    minDeposit: 250,
    avgSpreadEurUsd: 1.2,
    commissionPerLot: 6,
    maxLeverage: 888,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.6,
    trustpilotReviews: 64,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (goldbysell.co), communicated on 31 October 2024 (n. 23308 of 29 October 2024; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "iginvest-consob",
    name: "Iginvest",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2020,
    minDeposit: 250,
    avgSpreadEurUsd: 1.8,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.5,
    trustpilotReviews: 117,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (iginvest247.eu), communicated on 31 October 2024 (n. 23305 of 29 October 2024; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "capital4it-consob",
    name: "Capital4it",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2023,
    minDeposit: 100,
    avgSpreadEurUsd: 1.7,
    commissionPerLot: 7,
    maxLeverage: 500,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.5,
    trustpilotReviews: 95,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (capital4it.co.com), communicated on 31 October 2024 (n. 23304 of 29 October 2024; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "admirals-united-consob",
    name: "AdmiralsUnited",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 250,
    avgSpreadEurUsd: 1.3,
    commissionPerLot: 0,
    maxLeverage: 1000,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.5,
    trustpilotReviews: 94,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (admiralsunited.com), communicated on 31 October 2024 (n. 23307 of 29 October 2024; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "trade-republica-consob",
    name: "Trade Republica",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 100,
    avgSpreadEurUsd: 1.2,
    commissionPerLot: 5,
    maxLeverage: 500,
    platforms: ["MT5"],
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
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (tradingrepublica.com), communicated on 31 October 2024 (n. 23306 of 29 October 2024; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "mib40fx-consob",
    name: "Mib40fx",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2019,
    minDeposit: 250,
    avgSpreadEurUsd: 2.1,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.0,
    trustpilotReviews: 90,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (mib40fx.com), communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
];

export const FLAGGED_DEEP_9: Record<string, DeepBroker> = {
  "forex-elite-academy-consob": {
    verdict:
      "We flag Forex Elite Academy and do not recommend it. Its website (eliteforex.co) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 21 November 2025 (source: CONSOB, n. 23760 of 20 November 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Forex Elite Academy presents itself as",
        paragraphs: [
          "Forex Elite Academy (at eliteforex.co) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of eliteforex.co, communicated on 21 November 2025 (n. 23760 of 20 November 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Forex Elite Academy only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered eliteforex.co blocked as an unauthorised financial intermediary, communicated on 21 November 2025 (n. 23760 of 20 November 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "nexus500-consob": {
    verdict:
      "We flag Nexus500 and do not recommend it. Its website (nexus500.net) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 21 November 2025 (source: CONSOB, n. 23761 of 20 November 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Nexus500 presents itself as",
        paragraphs: [
          "Nexus500 (at nexus500.net) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of nexus500.net, communicated on 21 November 2025 (n. 23761 of 20 November 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Nexus500 only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered nexus500.net blocked as an unauthorised financial intermediary, communicated on 21 November 2025 (n. 23761 of 20 November 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "aventus-consultancy-consob": {
    verdict:
      "We flag Aventus Consultancy and do not recommend it. Its website (avenconsultancy.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 21 November 2025 (source: CONSOB, n. 23759 of 20 November 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Aventus Consultancy presents itself as",
        paragraphs: [
          "Aventus Consultancy (at avenconsultancy.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of avenconsultancy.com, communicated on 21 November 2025 (n. 23759 of 20 November 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Aventus Consultancy only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered avenconsultancy.com blocked as an unauthorised financial intermediary, communicated on 21 November 2025 (n. 23759 of 20 November 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "investpro-cfd-consob": {
    verdict:
      "We flag Investpro CFD and do not recommend it. Its website (investprocfd.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 31 October 2024 (source: CONSOB, n. 23303 of 29 October 2024). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Investpro CFD presents itself as",
        paragraphs: [
          "Investpro CFD (at investprocfd.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of investprocfd.com, communicated on 31 October 2024 (n. 23303 of 29 October 2024; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Investpro CFD only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered investprocfd.com blocked as an unauthorised financial intermediary, communicated on 31 October 2024 (n. 23303 of 29 October 2024; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "goldbysell-consob": {
    verdict:
      "We flag Goldbysell and do not recommend it. Its website (goldbysell.co) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 31 October 2024 (source: CONSOB, n. 23308 of 29 October 2024). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Goldbysell presents itself as",
        paragraphs: [
          "Goldbysell (at goldbysell.co) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of goldbysell.co, communicated on 31 October 2024 (n. 23308 of 29 October 2024; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Goldbysell only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered goldbysell.co blocked as an unauthorised financial intermediary, communicated on 31 October 2024 (n. 23308 of 29 October 2024; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "iginvest-consob": {
    verdict:
      "We flag Iginvest and do not recommend it. Its website (iginvest247.eu) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 31 October 2024 (source: CONSOB, n. 23305 of 29 October 2024). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Iginvest presents itself as",
        paragraphs: [
          "Iginvest (at iginvest247.eu) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of iginvest247.eu, communicated on 31 October 2024 (n. 23305 of 29 October 2024; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Iginvest only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered iginvest247.eu blocked as an unauthorised financial intermediary, communicated on 31 October 2024 (n. 23305 of 29 October 2024; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "capital4it-consob": {
    verdict:
      "We flag Capital4it and do not recommend it. Its website (capital4it.co.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 31 October 2024 (source: CONSOB, n. 23304 of 29 October 2024). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Capital4it presents itself as",
        paragraphs: [
          "Capital4it (at capital4it.co.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of capital4it.co.com, communicated on 31 October 2024 (n. 23304 of 29 October 2024; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Capital4it only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered capital4it.co.com blocked as an unauthorised financial intermediary, communicated on 31 October 2024 (n. 23304 of 29 October 2024; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "admirals-united-consob": {
    verdict:
      "We flag AdmiralsUnited and do not recommend it. Its website (admiralsunited.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 31 October 2024 (source: CONSOB, n. 23307 of 29 October 2024). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who AdmiralsUnited presents itself as",
        paragraphs: [
          "AdmiralsUnited (at admiralsunited.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of admiralsunited.com, communicated on 31 October 2024 (n. 23307 of 29 October 2024; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list AdmiralsUnited only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered admiralsunited.com blocked as an unauthorised financial intermediary, communicated on 31 October 2024 (n. 23307 of 29 October 2024; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "trade-republica-consob": {
    verdict:
      "We flag Trade Republica and do not recommend it. Its website (tradingrepublica.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 31 October 2024 (source: CONSOB, n. 23306 of 29 October 2024). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Trade Republica presents itself as",
        paragraphs: [
          "Trade Republica (at tradingrepublica.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of tradingrepublica.com, communicated on 31 October 2024 (n. 23306 of 29 October 2024; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Trade Republica only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered tradingrepublica.com blocked as an unauthorised financial intermediary, communicated on 31 October 2024 (n. 23306 of 29 October 2024; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "mib40fx-consob": {
    verdict:
      "We flag Mib40fx and do not recommend it. Its website (mib40fx.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 15 March 2024 (source: CONSOB, press release of 15 March 2024). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Mib40fx presents itself as",
        paragraphs: [
          "Mib40fx (at mib40fx.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of mib40fx.com, communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Mib40fx only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered mib40fx.com blocked as an unauthorised financial intermediary, communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
};
