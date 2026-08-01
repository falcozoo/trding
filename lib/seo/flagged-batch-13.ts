/**
 * Flagged / not-recommended brokers — batch 13.
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

export const FLAGGED_BROKERS_13: Broker[] = [
  {
    slug: "tradepower-consob",
    name: "Tradepower",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2019,
    minDeposit: 250,
    avgSpreadEurUsd: 1.7,
    commissionPerLot: 7,
    maxLeverage: 888,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.7,
    trustpilotReviews: 76,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (tradepower.pro), communicated on 20 June 2025 (n. 23607 of 19 June 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "magnomic-yield-consob",
    name: "Magnomic Yield",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 250,
    avgSpreadEurUsd: 1.7,
    commissionPerLot: 0,
    maxLeverage: 888,
    platforms: ["MT4", "MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.2,
    trustpilotReviews: 11,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (magnomicyieldltd.com), communicated on 20 June 2025 (n. 23606 of 19 June 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "niufo-consob",
    name: "Niufo",
    tagline: "Website ordered blocked (oscuramento) by Italy's CONSOB as an unauthorised operator.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2019,
    minDeposit: 250,
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
    trustpilotReviews: 102,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Ordered blocked (“oscuramento”) by Italy’s CONSOB as an unauthorised financial intermediary (niufo.co), communicated on 21 November 2025 (n. 23764 of 20 November 2025; source: CONSOB). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "bitcapitals-fsma",
    name: "BitCapitals",
    tagline: "Listed on the FSMA (Belgium) list of fraudulent trading platforms.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2020,
    minDeposit: 200,
    avgSpreadEurUsd: 1.8,
    commissionPerLot: 0,
    maxLeverage: 888,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.0,
    trustpilotReviews: 65,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Named on the FSMA (Belgium) list of fraudulent trading platforms (bit-capitals.com) (source: FSMA). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "brokerunity-fsma",
    name: "Brokerunity",
    tagline: "Listed on the FSMA (Belgium) list of fraudulent trading platforms.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 250,
    avgSpreadEurUsd: 1.9,
    commissionPerLot: 0,
    maxLeverage: 1000,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.2,
    trustpilotReviews: 56,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Named on the FSMA (Belgium) list of fraudulent trading platforms (brokerunity.com) (source: FSMA). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "bubblext-fsma",
    name: "Bubblext",
    tagline: "Listed on the FSMA (Belgium) list of fraudulent trading platforms.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2020,
    minDeposit: 500,
    avgSpreadEurUsd: 2.1,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
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
      "Named on the FSMA (Belgium) list of fraudulent trading platforms (bubblext.com) (source: FSMA). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "cryptenix-fsma",
    name: "Cryptenix",
    tagline: "Listed on the FSMA (Belgium) list of fraudulent trading platforms.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2020,
    minDeposit: 250,
    avgSpreadEurUsd: 1.2,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.7,
    trustpilotReviews: 115,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Named on the FSMA (Belgium) list of fraudulent trading platforms (cryptenix.com) (source: FSMA). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "gcg-international-fsma",
    name: "GCG International",
    tagline: "Listed on the FSMA (Belgium) list of fraudulent trading platforms.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2023,
    minDeposit: 100,
    avgSpreadEurUsd: 1.9,
    commissionPerLot: 5,
    maxLeverage: 500,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.8,
    trustpilotReviews: 68,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Named on the FSMA (Belgium) list of fraudulent trading platforms (gcginternational.net) (source: FSMA). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "gfx-royal-fsma",
    name: "GFX Royal",
    tagline: "Listed on the FSMA (Belgium) list of fraudulent trading platforms.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 250,
    avgSpreadEurUsd: 1.5,
    commissionPerLot: 5,
    maxLeverage: 500,
    platforms: ["MT5"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.1,
    trustpilotReviews: 88,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Named on the FSMA (Belgium) list of fraudulent trading platforms (gfxroyal.com) (source: FSMA). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: "migotrade-fsma",
    name: "Migotrade",
    tagline: "Listed on the FSMA (Belgium) list of fraudulent trading platforms.",
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2020,
    minDeposit: 250,
    avgSpreadEurUsd: 1.8,
    commissionPerLot: 6,
    maxLeverage: 1000,
    platforms: ["Proprietary", "WebTrader"],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 7,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.4,
    trustpilotReviews: 57,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Named on the FSMA (Belgium) list of fraudulent trading platforms (migotrade.com) (source: FSMA). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
];

export const FLAGGED_DEEP_13: Record<string, DeepBroker> = {
  "tradepower-consob": {
    verdict:
      "We flag Tradepower and do not recommend it. Its website (tradepower.pro) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 20 June 2025 (source: CONSOB, n. 23607 of 19 June 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Tradepower presents itself as",
        paragraphs: [
          "Tradepower (at tradepower.pro) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of tradepower.pro, communicated on 20 June 2025 (n. 23607 of 19 June 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Tradepower only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered tradepower.pro blocked as an unauthorised financial intermediary, communicated on 20 June 2025 (n. 23607 of 19 June 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "magnomic-yield-consob": {
    verdict:
      "We flag Magnomic Yield and do not recommend it. Its website (magnomicyieldltd.com) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 20 June 2025 (source: CONSOB, n. 23606 of 19 June 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Magnomic Yield presents itself as",
        paragraphs: [
          "Magnomic Yield (at magnomicyieldltd.com) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of magnomicyieldltd.com, communicated on 20 June 2025 (n. 23606 of 19 June 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Magnomic Yield only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered magnomicyieldltd.com blocked as an unauthorised financial intermediary, communicated on 20 June 2025 (n. 23606 of 19 June 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "niufo-consob": {
    verdict:
      "We flag Niufo and do not recommend it. Its website (niufo.co) was ordered blocked (“oscuramento”) by Italy’s market regulator CONSOB, communicated on 21 November 2025 (source: CONSOB, n. 23764 of 20 November 2025). CONSOB blocks a website when an operator provides investment services to Italian savers without the authorisation required by law. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Niufo presents itself as",
        paragraphs: [
          "Niufo (at niufo.co) is presented as an online broker for leveraged Forex and CFD trading across currencies, indices and commodities. As with most operators of this type, the marketing leans on a modern-looking web platform, quick onboarding and high leverage, while the corporate and licensing substance you could actually check is thin or absent.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how polished its website looks. The answer here is unambiguous: CONSOB, the Italian securities regulator, ordered the site blocked as an abusive, unauthorised financial intermediary.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the CONSOB oscuramento order described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "CONSOB (Commissione Nazionale per le Società e la Borsa) ordered the blackout of niufo.co, communicated on 21 November 2025 (n. 23764 of 20 November 2025; source: CONSOB). It acted under the powers granted by the 2019 “Decreto Crescita” (Law no. 58 of 28 June 2019, art. 36 co. 2-terdecies), which lets CONSOB order Italian internet providers to block access to websites offering financial services without authorisation.",
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
          "We list Niufo only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: CONSOB ordered niufo.co blocked as an unauthorised financial intermediary, communicated on 21 November 2025 (n. 23764 of 20 November 2025; source: CONSOB). Dealing with an operator the regulator has moved to block means giving up the protections that exist precisely to keep your money safe.",
          "Our recommendation is the same one we give for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list or oscuramento appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through an unauthorised one you also lose your last line of defence. If you have already deposited, stop paying any “fees” or “taxes” demanded to release a withdrawal, keep every record, contact your bank about a chargeback, and report the matter to CONSOB and your local regulator.",
        ],
      },
    ],
  },
  "bitcapitals-fsma": {
    verdict:
      "We flag BitCapitals and do not recommend it. It appears on the list of fraudulent trading platforms published by Belgium’s financial regulator, the FSMA (Financial Services and Markets Authority), for the website bit-capitals.com (source: FSMA). The FSMA adds a platform to this list when it is offering investment services in or from Belgium without authorisation and shows the hallmarks of investment fraud. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who BitCapitals presents itself as",
        paragraphs: [
          "BitCapitals (at bit-capitals.com) is presented as an online trading platform offering leveraged Forex, CFD and often crypto-related products, promising quick and easy profits. As with most operators the FSMA warns about, the pitch typically arrives through social-media adverts, sometimes using a well-known person’s image, followed by unsolicited calls from a persuasive “adviser”.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how convincing its marketing is. The answer here is unambiguous: a national regulator has publicly named the platform on its warning list of fraudulent trading sites.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the FSMA warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "Belgium’s FSMA maintains and regularly updates a public list of fraudulent trading platforms that investors should avoid, and bit-capitals.com is named on it (source: FSMA). Offering investment services in or from Belgium requires authorisation; the FSMA publishes these warnings precisely because the listed operators act without it.",
          "The FSMA describes a consistent method behind these platforms: scam adverts on social media promising fast riches, a swift follow-up call with a concrete-sounding investment proposal, pressure to deposit ever-larger sums, and in some cases attempts to take remote control of the victim’s computer to move money. Deposits are easy; withdrawals become difficult or impossible.",
          "The practical consequence is that an unauthorised operator sits outside the protections designed for licensed firms — no supervised complaints route, no guarantee of segregated client money, and no compensation scheme. The FSMA’s standing advice is blunt: never respond to such offers, and check any operator against the authorised registers before parting with a cent.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Belgium, check the FSMA’s authorised-firm registers and its list of fraudulent trading platforms. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain, CONSOB for Italy. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list BitCapitals only as a transparency and consumer-protection signal, never as an option. The determining fact is public: the FSMA named bit-capitals.com on its list of fraudulent trading platforms (source: FSMA). Dealing with an operator a regulator has flagged as fraudulent means abandoning the safeguards that exist to protect your money.",
          "Our recommendation is the same for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through a platform on a fraud-warning list you also lose your last line of defence. If you have already deposited, stop sending money, never grant remote access to your computer, keep every record, contact your bank about a chargeback, and report the matter to the FSMA and your local regulator.",
        ],
      },
    ],
  },
  "brokerunity-fsma": {
    verdict:
      "We flag Brokerunity and do not recommend it. It appears on the list of fraudulent trading platforms published by Belgium’s financial regulator, the FSMA (Financial Services and Markets Authority), for the website brokerunity.com (source: FSMA). The FSMA adds a platform to this list when it is offering investment services in or from Belgium without authorisation and shows the hallmarks of investment fraud. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Brokerunity presents itself as",
        paragraphs: [
          "Brokerunity (at brokerunity.com) is presented as an online trading platform offering leveraged Forex, CFD and often crypto-related products, promising quick and easy profits. As with most operators the FSMA warns about, the pitch typically arrives through social-media adverts, sometimes using a well-known person’s image, followed by unsolicited calls from a persuasive “adviser”.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how convincing its marketing is. The answer here is unambiguous: a national regulator has publicly named the platform on its warning list of fraudulent trading sites.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the FSMA warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "Belgium’s FSMA maintains and regularly updates a public list of fraudulent trading platforms that investors should avoid, and brokerunity.com is named on it (source: FSMA). Offering investment services in or from Belgium requires authorisation; the FSMA publishes these warnings precisely because the listed operators act without it.",
          "The FSMA describes a consistent method behind these platforms: scam adverts on social media promising fast riches, a swift follow-up call with a concrete-sounding investment proposal, pressure to deposit ever-larger sums, and in some cases attempts to take remote control of the victim’s computer to move money. Deposits are easy; withdrawals become difficult or impossible.",
          "The practical consequence is that an unauthorised operator sits outside the protections designed for licensed firms — no supervised complaints route, no guarantee of segregated client money, and no compensation scheme. The FSMA’s standing advice is blunt: never respond to such offers, and check any operator against the authorised registers before parting with a cent.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Belgium, check the FSMA’s authorised-firm registers and its list of fraudulent trading platforms. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain, CONSOB for Italy. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Brokerunity only as a transparency and consumer-protection signal, never as an option. The determining fact is public: the FSMA named brokerunity.com on its list of fraudulent trading platforms (source: FSMA). Dealing with an operator a regulator has flagged as fraudulent means abandoning the safeguards that exist to protect your money.",
          "Our recommendation is the same for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through a platform on a fraud-warning list you also lose your last line of defence. If you have already deposited, stop sending money, never grant remote access to your computer, keep every record, contact your bank about a chargeback, and report the matter to the FSMA and your local regulator.",
        ],
      },
    ],
  },
  "bubblext-fsma": {
    verdict:
      "We flag Bubblext and do not recommend it. It appears on the list of fraudulent trading platforms published by Belgium’s financial regulator, the FSMA (Financial Services and Markets Authority), for the website bubblext.com (source: FSMA). The FSMA adds a platform to this list when it is offering investment services in or from Belgium without authorisation and shows the hallmarks of investment fraud. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Bubblext presents itself as",
        paragraphs: [
          "Bubblext (at bubblext.com) is presented as an online trading platform offering leveraged Forex, CFD and often crypto-related products, promising quick and easy profits. As with most operators the FSMA warns about, the pitch typically arrives through social-media adverts, sometimes using a well-known person’s image, followed by unsolicited calls from a persuasive “adviser”.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how convincing its marketing is. The answer here is unambiguous: a national regulator has publicly named the platform on its warning list of fraudulent trading sites.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the FSMA warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "Belgium’s FSMA maintains and regularly updates a public list of fraudulent trading platforms that investors should avoid, and bubblext.com is named on it (source: FSMA). Offering investment services in or from Belgium requires authorisation; the FSMA publishes these warnings precisely because the listed operators act without it.",
          "The FSMA describes a consistent method behind these platforms: scam adverts on social media promising fast riches, a swift follow-up call with a concrete-sounding investment proposal, pressure to deposit ever-larger sums, and in some cases attempts to take remote control of the victim’s computer to move money. Deposits are easy; withdrawals become difficult or impossible.",
          "The practical consequence is that an unauthorised operator sits outside the protections designed for licensed firms — no supervised complaints route, no guarantee of segregated client money, and no compensation scheme. The FSMA’s standing advice is blunt: never respond to such offers, and check any operator against the authorised registers before parting with a cent.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Belgium, check the FSMA’s authorised-firm registers and its list of fraudulent trading platforms. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain, CONSOB for Italy. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Bubblext only as a transparency and consumer-protection signal, never as an option. The determining fact is public: the FSMA named bubblext.com on its list of fraudulent trading platforms (source: FSMA). Dealing with an operator a regulator has flagged as fraudulent means abandoning the safeguards that exist to protect your money.",
          "Our recommendation is the same for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through a platform on a fraud-warning list you also lose your last line of defence. If you have already deposited, stop sending money, never grant remote access to your computer, keep every record, contact your bank about a chargeback, and report the matter to the FSMA and your local regulator.",
        ],
      },
    ],
  },
  "cryptenix-fsma": {
    verdict:
      "We flag Cryptenix and do not recommend it. It appears on the list of fraudulent trading platforms published by Belgium’s financial regulator, the FSMA (Financial Services and Markets Authority), for the website cryptenix.com (source: FSMA). The FSMA adds a platform to this list when it is offering investment services in or from Belgium without authorisation and shows the hallmarks of investment fraud. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Cryptenix presents itself as",
        paragraphs: [
          "Cryptenix (at cryptenix.com) is presented as an online trading platform offering leveraged Forex, CFD and often crypto-related products, promising quick and easy profits. As with most operators the FSMA warns about, the pitch typically arrives through social-media adverts, sometimes using a well-known person’s image, followed by unsolicited calls from a persuasive “adviser”.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how convincing its marketing is. The answer here is unambiguous: a national regulator has publicly named the platform on its warning list of fraudulent trading sites.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the FSMA warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "Belgium’s FSMA maintains and regularly updates a public list of fraudulent trading platforms that investors should avoid, and cryptenix.com is named on it (source: FSMA). Offering investment services in or from Belgium requires authorisation; the FSMA publishes these warnings precisely because the listed operators act without it.",
          "The FSMA describes a consistent method behind these platforms: scam adverts on social media promising fast riches, a swift follow-up call with a concrete-sounding investment proposal, pressure to deposit ever-larger sums, and in some cases attempts to take remote control of the victim’s computer to move money. Deposits are easy; withdrawals become difficult or impossible.",
          "The practical consequence is that an unauthorised operator sits outside the protections designed for licensed firms — no supervised complaints route, no guarantee of segregated client money, and no compensation scheme. The FSMA’s standing advice is blunt: never respond to such offers, and check any operator against the authorised registers before parting with a cent.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Belgium, check the FSMA’s authorised-firm registers and its list of fraudulent trading platforms. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain, CONSOB for Italy. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Cryptenix only as a transparency and consumer-protection signal, never as an option. The determining fact is public: the FSMA named cryptenix.com on its list of fraudulent trading platforms (source: FSMA). Dealing with an operator a regulator has flagged as fraudulent means abandoning the safeguards that exist to protect your money.",
          "Our recommendation is the same for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through a platform on a fraud-warning list you also lose your last line of defence. If you have already deposited, stop sending money, never grant remote access to your computer, keep every record, contact your bank about a chargeback, and report the matter to the FSMA and your local regulator.",
        ],
      },
    ],
  },
  "gcg-international-fsma": {
    verdict:
      "We flag GCG International and do not recommend it. It appears on the list of fraudulent trading platforms published by Belgium’s financial regulator, the FSMA (Financial Services and Markets Authority), for the website gcginternational.net (source: FSMA). The FSMA adds a platform to this list when it is offering investment services in or from Belgium without authorisation and shows the hallmarks of investment fraud. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who GCG International presents itself as",
        paragraphs: [
          "GCG International (at gcginternational.net) is presented as an online trading platform offering leveraged Forex, CFD and often crypto-related products, promising quick and easy profits. As with most operators the FSMA warns about, the pitch typically arrives through social-media adverts, sometimes using a well-known person’s image, followed by unsolicited calls from a persuasive “adviser”.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how convincing its marketing is. The answer here is unambiguous: a national regulator has publicly named the platform on its warning list of fraudulent trading sites.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the FSMA warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "Belgium’s FSMA maintains and regularly updates a public list of fraudulent trading platforms that investors should avoid, and gcginternational.net is named on it (source: FSMA). Offering investment services in or from Belgium requires authorisation; the FSMA publishes these warnings precisely because the listed operators act without it.",
          "The FSMA describes a consistent method behind these platforms: scam adverts on social media promising fast riches, a swift follow-up call with a concrete-sounding investment proposal, pressure to deposit ever-larger sums, and in some cases attempts to take remote control of the victim’s computer to move money. Deposits are easy; withdrawals become difficult or impossible.",
          "The practical consequence is that an unauthorised operator sits outside the protections designed for licensed firms — no supervised complaints route, no guarantee of segregated client money, and no compensation scheme. The FSMA’s standing advice is blunt: never respond to such offers, and check any operator against the authorised registers before parting with a cent.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Belgium, check the FSMA’s authorised-firm registers and its list of fraudulent trading platforms. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain, CONSOB for Italy. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list GCG International only as a transparency and consumer-protection signal, never as an option. The determining fact is public: the FSMA named gcginternational.net on its list of fraudulent trading platforms (source: FSMA). Dealing with an operator a regulator has flagged as fraudulent means abandoning the safeguards that exist to protect your money.",
          "Our recommendation is the same for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through a platform on a fraud-warning list you also lose your last line of defence. If you have already deposited, stop sending money, never grant remote access to your computer, keep every record, contact your bank about a chargeback, and report the matter to the FSMA and your local regulator.",
        ],
      },
    ],
  },
  "gfx-royal-fsma": {
    verdict:
      "We flag GFX Royal and do not recommend it. It appears on the list of fraudulent trading platforms published by Belgium’s financial regulator, the FSMA (Financial Services and Markets Authority), for the website gfxroyal.com (source: FSMA). The FSMA adds a platform to this list when it is offering investment services in or from Belgium without authorisation and shows the hallmarks of investment fraud. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who GFX Royal presents itself as",
        paragraphs: [
          "GFX Royal (at gfxroyal.com) is presented as an online trading platform offering leveraged Forex, CFD and often crypto-related products, promising quick and easy profits. As with most operators the FSMA warns about, the pitch typically arrives through social-media adverts, sometimes using a well-known person’s image, followed by unsolicited calls from a persuasive “adviser”.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how convincing its marketing is. The answer here is unambiguous: a national regulator has publicly named the platform on its warning list of fraudulent trading sites.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the FSMA warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "Belgium’s FSMA maintains and regularly updates a public list of fraudulent trading platforms that investors should avoid, and gfxroyal.com is named on it (source: FSMA). Offering investment services in or from Belgium requires authorisation; the FSMA publishes these warnings precisely because the listed operators act without it.",
          "The FSMA describes a consistent method behind these platforms: scam adverts on social media promising fast riches, a swift follow-up call with a concrete-sounding investment proposal, pressure to deposit ever-larger sums, and in some cases attempts to take remote control of the victim’s computer to move money. Deposits are easy; withdrawals become difficult or impossible.",
          "The practical consequence is that an unauthorised operator sits outside the protections designed for licensed firms — no supervised complaints route, no guarantee of segregated client money, and no compensation scheme. The FSMA’s standing advice is blunt: never respond to such offers, and check any operator against the authorised registers before parting with a cent.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Belgium, check the FSMA’s authorised-firm registers and its list of fraudulent trading platforms. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain, CONSOB for Italy. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list GFX Royal only as a transparency and consumer-protection signal, never as an option. The determining fact is public: the FSMA named gfxroyal.com on its list of fraudulent trading platforms (source: FSMA). Dealing with an operator a regulator has flagged as fraudulent means abandoning the safeguards that exist to protect your money.",
          "Our recommendation is the same for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through a platform on a fraud-warning list you also lose your last line of defence. If you have already deposited, stop sending money, never grant remote access to your computer, keep every record, contact your bank about a chargeback, and report the matter to the FSMA and your local regulator.",
        ],
      },
    ],
  },
  "migotrade-fsma": {
    verdict:
      "We flag Migotrade and do not recommend it. It appears on the list of fraudulent trading platforms published by Belgium’s financial regulator, the FSMA (Financial Services and Markets Authority), for the website migotrade.com (source: FSMA). The FSMA adds a platform to this list when it is offering investment services in or from Belgium without authorisation and shows the hallmarks of investment fraud. That is a documented regulatory fact, not an opinion — and on its own it is reason enough to keep your money away.",
    sections: [
      {
        heading: "Who Migotrade presents itself as",
        paragraphs: [
          "Migotrade (at migotrade.com) is presented as an online trading platform offering leveraged Forex, CFD and often crypto-related products, promising quick and easy profits. As with most operators the FSMA warns about, the pitch typically arrives through social-media adverts, sometimes using a well-known person’s image, followed by unsolicited calls from a persuasive “adviser”.",
          "On a neutral comparator we assess whether an operator is permitted to offer these services, not how convincing its marketing is. The answer here is unambiguous: a national regulator has publicly named the platform on its warning list of fraudulent trading sites.",
          "The numeric fields shown for this entry are neutral, category-typical placeholders and are not the reason for the flag. The single decisive fact is the FSMA warning described below.",
        ],
      },
      {
        heading: "The regulator warning, explained plainly",
        paragraphs: [
          "Belgium’s FSMA maintains and regularly updates a public list of fraudulent trading platforms that investors should avoid, and migotrade.com is named on it (source: FSMA). Offering investment services in or from Belgium requires authorisation; the FSMA publishes these warnings precisely because the listed operators act without it.",
          "The FSMA describes a consistent method behind these platforms: scam adverts on social media promising fast riches, a swift follow-up call with a concrete-sounding investment proposal, pressure to deposit ever-larger sums, and in some cases attempts to take remote control of the victim’s computer to move money. Deposits are easy; withdrawals become difficult or impossible.",
          "The practical consequence is that an unauthorised operator sits outside the protections designed for licensed firms — no supervised complaints route, no guarantee of segregated client money, and no compensation scheme. The FSMA’s standing advice is blunt: never respond to such offers, and check any operator against the authorised registers before parting with a cent.",
        ],
      },
      {
        heading: "Red flags a beginner should learn to notice",
        paragraphs: [
          "The single most important habit any new trader can build is to verify a broker against the register before depositing a cent. For a firm claiming to operate in or into Belgium, check the FSMA’s authorised-firm registers and its list of fraudulent trading platforms. For other countries, use the local authority: the FCA Register and Warning List for the UK, the AMF/ACPR blacklist and REGAFI for France, the CNMV for Spain, CONSOB for Italy. If a firm is on a warning or blacklist, the decision is made for you.",
          "Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profits; pressure to deposit fast or to “top up” to unlock withdrawals; very high advertised leverage (often 1:500 or more) aimed at retail clients; a “personal account manager” who calls and coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly difficult withdrawal process. None of these on its own proves wrongdoing, but together with a regulator warning they form a clear pattern.",
          "A subtler tell is the absence of the boring stuff a real regulated broker must publish: a specific licence number you can look up, a named legal entity, membership of an investor-compensation scheme, and prominent risk warnings. When those are missing or vague, treat it as significant — regulated brokers are legally required to make this information clear, so its absence is itself informative.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "We list Migotrade only as a transparency and consumer-protection signal, never as an option. The determining fact is public: the FSMA named migotrade.com on its list of fraudulent trading platforms (source: FSMA). Dealing with an operator a regulator has flagged as fraudulent means abandoning the safeguards that exist to protect your money.",
          "Our recommendation is the same for every broker: only fund an account with a firm you have personally verified on an official regulator register, and treat any warning-list appearance as final. Even with a fully regulated broker, CFD and Forex trading is high-risk and most retail clients lose money; through a platform on a fraud-warning list you also lose your last line of defence. If you have already deposited, stop sending money, never grant remote access to your computer, keep every record, contact your bank about a chargeback, and report the matter to the FSMA and your local regulator.",
        ],
      },
    ],
  },
};
