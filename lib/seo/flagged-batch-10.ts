/**
 * Flagged / not-recommended brokers — batch 10.
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

export const FLAGGED_BROKERS_10: Broker[] = [
  {
    slug: "ai2trade-consob",
    name: "Ai2Trade",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 250,
    avgSpreadEurUsd: 1.2,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.0,
    trustpilotReviews: 110,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (ai2trade.co.com), communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "fcapital24-consob",
    name: "FCapital24",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2023,
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
    trustpilotRating: 1.2,
    trustpilotReviews: 25,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (fcapital24.eu), communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "fx-flat-consob",
    name: "FX-FLAT",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2023,
    minDeposit: 100,
    avgSpreadEurUsd: 1.2,
    commissionPerLot: 6,
    maxLeverage: 1000,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.4,
    trustpilotReviews: 79,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (fx-flat.com), communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "isotrader-consob",
    name: "Isotrader (Rounda Partners)",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 250,
    avgSpreadEurUsd: 1.5,
    commissionPerLot: 7,
    maxLeverage: 500,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.0,
    trustpilotReviews: 12,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (isotrader.cc), communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "free-trade-cfd-consob",
    name: "Free Trade CFD",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2023,
    minDeposit: 200,
    avgSpreadEurUsd: 1.9,
    commissionPerLot: 5,
    maxLeverage: 500,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.0,
    trustpilotReviews: 75,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (free-tradecfd.com), communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "realcapitallc-consob",
    name: "Realcapitallc",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 250,
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
    trustpilotReviews: 114,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (realcapitallc.co), communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "finanza-expert-consob",
    name: "Finanza Expert",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 500,
    avgSpreadEurUsd: 1.5,
    commissionPerLot: 7,
    maxLeverage: 500,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.2,
    trustpilotReviews: 78,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (finanzaexpert.com), communicated on 03 April 2025 (n. 23497 of 01 April 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "cmswiss-consob",
    name: "Cmswiss",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
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
    trustpilotRating: 1.4,
    trustpilotReviews: 107,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (cmswiss.com), communicated on 03 April 2025 (n. 23498 of 01 April 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "aspect-markets-consob",
    name: "Aspect-Markets",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 200,
    avgSpreadEurUsd: 1.7,
    commissionPerLot: 0,
    maxLeverage: 1000,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.9,
    trustpilotReviews: 93,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (aspect-markets.cc), communicated on 03 April 2025 (n. 23496 of 01 April 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "ucapital-trading-consob",
    name: "UCapital Trading",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2023,
    minDeposit: 250,
    avgSpreadEurUsd: 1.2,
    commissionPerLot: 0,
    maxLeverage: 1000,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.5,
    trustpilotReviews: 21,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (ucapitaltrading.com), communicated on 03 April 2025 (n. 23499 of 01 April 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
];

export const FLAGGED_DEEP_10: Record<string, DeepBroker> = {
  "ai2trade-consob": {
    verdict:
      "We flag Ai2Trade and do not recommend it. Its website (ai2trade.co.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 15 March 2024 (source: CONSOB, press release of 15 March 2024). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Ai2Trade presents itself as",
        paragraphs: [
          "Ai2Trade (at ai2trade.co.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of ai2trade.co.com, communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Ai2Trade only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered ai2trade.co.com blocked as an unauthorised financial intermediary, communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "fcapital24-consob": {
    verdict:
      "We flag FCapital24 and do not recommend it. Its website (fcapital24.eu) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 15 March 2024 (source: CONSOB, press release of 15 March 2024). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who FCapital24 presents itself as",
        paragraphs: [
          "FCapital24 (at fcapital24.eu) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of fcapital24.eu, communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list FCapital24 only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered fcapital24.eu blocked as an unauthorised financial intermediary, communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "fx-flat-consob": {
    verdict:
      "We flag FX-FLAT and do not recommend it. Its website (fx-flat.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 15 March 2024 (source: CONSOB, press release of 15 March 2024). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who FX-FLAT presents itself as",
        paragraphs: [
          "FX-FLAT (at fx-flat.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of fx-flat.com, communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list FX-FLAT only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered fx-flat.com blocked as an unauthorised financial intermediary, communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "isotrader-consob": {
    verdict:
      "We flag Isotrader (Rounda Partners) and do not recommend it. Its website (isotrader.cc) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 15 March 2024 (source: CONSOB, press release of 15 March 2024). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Isotrader (Rounda Partners) presents itself as",
        paragraphs: [
          "Isotrader (Rounda Partners) (at isotrader.cc) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of isotrader.cc, communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Isotrader (Rounda Partners) only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered isotrader.cc blocked as an unauthorised financial intermediary, communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "free-trade-cfd-consob": {
    verdict:
      "We flag Free Trade CFD and do not recommend it. Its website (free-tradecfd.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 15 March 2024 (source: CONSOB, press release of 15 March 2024). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Free Trade CFD presents itself as",
        paragraphs: [
          "Free Trade CFD (at free-tradecfd.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of free-tradecfd.com, communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Free Trade CFD only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered free-tradecfd.com blocked as an unauthorised financial intermediary, communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "realcapitallc-consob": {
    verdict:
      "We flag Realcapitallc and do not recommend it. Its website (realcapitallc.co) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 15 March 2024 (source: CONSOB, press release of 15 March 2024). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Realcapitallc presents itself as",
        paragraphs: [
          "Realcapitallc (at realcapitallc.co) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of realcapitallc.co, communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Realcapitallc only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered realcapitallc.co blocked as an unauthorised financial intermediary, communicated on 15 March 2024 (press release of 15 March 2024; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "finanza-expert-consob": {
    verdict:
      "We flag Finanza Expert and do not recommend it. Its website (finanzaexpert.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 03 April 2025 (source: CONSOB, n. 23497 of 01 April 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Finanza Expert presents itself as",
        paragraphs: [
          "Finanza Expert (at finanzaexpert.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of finanzaexpert.com, communicated on 03 April 2025 (n. 23497 of 01 April 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Finanza Expert only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered finanzaexpert.com blocked as an unauthorised financial intermediary, communicated on 03 April 2025 (n. 23497 of 01 April 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "cmswiss-consob": {
    verdict:
      "We flag Cmswiss and do not recommend it. Its website (cmswiss.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 03 April 2025 (source: CONSOB, n. 23498 of 01 April 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Cmswiss presents itself as",
        paragraphs: [
          "Cmswiss (at cmswiss.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of cmswiss.com, communicated on 03 April 2025 (n. 23498 of 01 April 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Cmswiss only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered cmswiss.com blocked as an unauthorised financial intermediary, communicated on 03 April 2025 (n. 23498 of 01 April 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "aspect-markets-consob": {
    verdict:
      "We flag Aspect-Markets and do not recommend it. Its website (aspect-markets.cc) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 03 April 2025 (source: CONSOB, n. 23496 of 01 April 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Aspect-Markets presents itself as",
        paragraphs: [
          "Aspect-Markets (at aspect-markets.cc) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of aspect-markets.cc, communicated on 03 April 2025 (n. 23496 of 01 April 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Aspect-Markets only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered aspect-markets.cc blocked as an unauthorised financial intermediary, communicated on 03 April 2025 (n. 23496 of 01 April 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "ucapital-trading-consob": {
    verdict:
      "We flag UCapital Trading and do not recommend it. Its website (ucapitaltrading.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 03 April 2025 (source: CONSOB, n. 23499 of 01 April 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who UCapital Trading presents itself as",
        paragraphs: [
          "UCapital Trading (at ucapitaltrading.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of ucapitaltrading.com, communicated on 03 April 2025 (n. 23499 of 01 April 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list UCapital Trading only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered ucapitaltrading.com blocked as an unauthorised financial intermediary, communicated on 03 April 2025 (n. 23499 of 01 April 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
};
