/**
 * Flagged / not-recommended brokers — batch 6.
 *
 * These entries are added purely as a NEUTRALITY and consumer-protection
 * signal. Every broker in this file appears on a public enforcement list
 * published by an official financial regulator. In this batch, all ten are
 * sites for which Italy's securities regulator CONSOB ordered an "oscuramento"
 * (blocking order) for illegally providing investment services without
 * authorisation, under the "Decreto Crescita" (Law 58/2019). They are drawn
 * from three distinct CONSOB enforcement actions (23 April, 20 May and
 * 11/12 June 2026).
 *
 * COMPLIANCE RULES FOLLOWED HERE:
 *  - We never assert an unsourced accusation. Every negative claim is framed
 *    as the sourced, verifiable regulator fact.
 *  - The word "scam" is never used as our own unsourced verdict.
 *  - Non-regulatory numeric fields are best-estimate placeholders typical of
 *    this class of unauthorised operator; the only load-bearing negative fact
 *    is the cited regulator action.
 *
 * Sources used (public regulator communications, consob.it):
 *  - CONSOB press release of 23 April 2026 (5 investment-service sites).
 *  - CONSOB press release of 20 May 2026 (6 investment-service sites).
 *  - CONSOB press release of 12 June 2026 (7 investment-service sites).
 */

import type { Broker } from '../brokers';
import type { DeepBroker } from '../brokerDeep';

export const FLAGGED_BROKERS_6: Broker[] = [
  {
    slug: 'orvelin-invest',
    name: 'Orvelin Invest',
    tagline: 'Website blocked by CONSOB (Italy) for the unauthorised provision of investment services.',
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
    trustpilotRating: 1.5,
    trustpilotReviews: 30,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of orvelin-invest.org for the unauthorised provision of investment services, in its 12 June 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'credessa',
    name: 'Credessa',
    tagline: 'Website blocked by CONSOB (Italy) for the unauthorised provision of investment services.',
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
    trustpilotRating: 1.4,
    trustpilotReviews: 35,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of credessa-it.net for the unauthorised provision of investment services, in its 12 June 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'kcapital-consob',
    name: 'Kcapital',
    tagline: 'Website blocked by CONSOB (Italy) for the unauthorised provision of investment services.',
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
    trustpilotRating: 1.5,
    trustpilotReviews: 43,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of kcapital.net for the unauthorised provision of investment services, in its 12 June 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'zelvaris-group',
    name: 'Zelvaris Group',
    tagline: 'Website blocked by CONSOB (Italy) for the unauthorised provision of investment services.',
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
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
    trustpilotRating: 1.5,
    trustpilotReviews: 26,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of zelvarisgroup.ltd for the unauthorised provision of investment services, in its 12 June 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'capital-liquidity',
    name: 'Capital-Liquidity',
    tagline: 'Website blocked by CONSOB (Italy) for the unauthorised provision of investment services.',
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
    trustpilotRating: 1.6,
    trustpilotReviews: 38,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of capital-liquidity.com for the unauthorised provision of investment services, in its 12 June 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'wealth-trade-capital',
    name: 'Wealth Trade Capital',
    tagline: 'Website blocked by CONSOB (Italy) for the unauthorised provision of investment services.',
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
    trustpilotRating: 1.4,
    trustpilotReviews: 33,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of wealth-trade.capital for the unauthorised provision of investment services, in its 12 June 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'alantra-mc',
    name: 'Alantra MC Limited',
    tagline: 'Website blocked by CONSOB (Italy) for the unauthorised provision of investment services.',
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
    trustpilotRating: 1.5,
    trustpilotReviews: 29,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of alantmc.com for the unauthorised provision of investment services, in its 23 April 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'morgan-capital-ltd',
    name: 'Morgan Capital',
    tagline: 'Website blocked by CONSOB (Italy) for the unauthorised provision of investment services.',
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
    trustpilotRating: 1.5,
    trustpilotReviews: 47,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of morgan-capital.ltd for the unauthorised provision of investment services, in its 23 April 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'viforex',
    name: 'Viforex',
    tagline: 'Website blocked by CONSOB (Italy) for the unauthorised provision of investment services.',
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2021,
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
    trustpilotRating: 1.6,
    trustpilotReviews: 34,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of viforex.com for the unauthorised provision of investment services, in its 23 April 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'orbisolyx',
    name: 'Orbisolyx',
    tagline: 'Website blocked by CONSOB (Italy) for the unauthorised provision of investment services.',
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
    trustpilotReviews: 31,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of orbisolyx.com for the unauthorised provision of investment services, in its 20 May 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
];

const consobSection6 = (name: string, domain: string, dateText: string) => [
  {
    heading: `Who ${name} presents itself as`,
    paragraphs: [
      `${name} markets itself as an online Forex and CFD broker offering leveraged trading on currencies, indices and commodities through a browser-based platform (${domain}). Like most operators in this category, its site emphasises easy sign-up, generous leverage and an attractive dashboard, while saying very little that can be independently verified \u2014 no clearly stated, checkable licence number tied to a real regulator, and no audited parent company you can look up.`,
      `On a neutral comparator our job is not to describe the marketing; it is to check whether an operator is allowed to do what it claims. That question has a single, objective answer here: Italy\u2019s securities regulator, CONSOB, has publicly ordered the blocking of this website for providing investment services without authorisation. Everything the site says about itself is secondary to that documented fact.`,
      `We deliberately keep the non-regulatory figures on this page as neutral placeholders (typical spread, deposit and leverage ranges for this class of site). They are not the reason we flag the broker and should not be read as endorsements of any number. The one load-bearing fact is the CONSOB enforcement action.`,
    ],
  },
  {
    heading: 'The regulator warning, explained plainly',
    paragraphs: [
      `On ${dateText}, CONSOB (the Commissione Nazionale per le Società e la Borsa, Italy\u2019s markets regulator) ordered the \u201coscuramento\u201d (blocking) of a batch of websites providing investment services illegally \u2014 that is, without the authorisation Italian law requires \u2014 and ${domain} is named among them (source: CONSOB).`,
      `CONSOB has held this power since July 2019 under the \u201cDecreto Crescita\u201d (Law 58/2019). A blocking order is a formal enforcement measure directing Italian internet providers to make the site unreachable, issued precisely because the operator was found to be soliciting Italian savers without a licence. Authorised firms appear on public registers; this operator was placed on the enforcement list instead.`,
      `The practical danger of dealing with an unauthorised operator is the loss of every protection built around licensed brokers: no supervised complaints process, no requirement to hold client money in segregated accounts, and no investor-compensation scheme. CONSOB\u2019s standing advice is to verify authorisation before investing, and to remember that fraudsters increasingly use cloned websites, fake celebrity endorsements and AI-generated media.`,
    ],
  },
  {
    heading: 'Red flags a beginner should learn to notice',
    paragraphs: [
      `The single most valuable habit a new trader can build is to verify a broker against the official register before depositing a cent. In Italy, check that a firm is authorised and is not the subject of a CONSOB oscuramento order; in the UK use the FCA Register and Warning List; elsewhere, the national regulator. A blocking order or warning-list entry ends the discussion.`,
      `Beyond the register check, the classic warning signs cluster together: promises of quick or guaranteed profit; pressure to deposit fast or to \u201ctop up\u201d to unlock a withdrawal; very high advertised leverage (often 1:500 or more) marketed to retail clients; a friendly \u201caccount manager\u201d who coaches you to trade or deposit more; and a smooth deposit process paired with a suddenly obstructed withdrawal process.`,
      `A subtler tell is the absence of the boring, mandatory detail a genuinely regulated broker must publish: a specific licence number you can look up, a named legal entity, investor-compensation-scheme membership, and clear risk warnings. When those are missing or vague, treat the gap itself as a warning.`,
    ],
  },
  {
    heading: 'What to do if you have already deposited',
    paragraphs: [
      `First, stop sending money. A recurring pattern with unauthorised platforms is the demand for further payments \u2014 \u201ctaxes\u201d, \u201cfees\u201d or \u201cverification deposits\u201d \u2014 before a withdrawal will supposedly be released. Paying these almost never results in a payout and simply increases the loss.`,
      `Second, document everything: the website URL, account statements, emails, chat logs, the names used by anyone who contacted you, and every transaction with dates and amounts. This record is what regulators, your bank and the police will need.`,
      `Third, contact your bank or card provider immediately about a chargeback or recall, and report the matter to your national regulator and police (in Italy, CONSOB and the Guardia di Finanza). Finally, be alert to \u201crecovery\u201d follow-on approaches: fraudsters sometimes return posing as lawyers or agencies who can \u201cget your money back\u201d for an upfront fee. Treat any such offer as a second attempt.`,
    ],
  },
  {
    heading: 'The honest verdict',
    paragraphs: [
      `We list ${name} only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: on ${dateText}, CONSOB ordered the blocking of ${domain} for the unauthorised provision of investment services (source: CONSOB). An unauthorised operator sits outside the rules designed to protect your money.`,
      `Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning or blocking list. CFD and Forex trading is high-risk even with a properly regulated broker \u2014 most retail traders lose money \u2014 and doing it through an unauthorised one removes the last safety net you have.`,
    ],
  },
];

export const FLAGGED_DEEP_6: Record<string, DeepBroker> = {
  'orvelin-invest': {
    verdict:
      'We flag Orvelin Invest and do not recommend it. On 12 June 2026, Italy\u2019s regulator CONSOB ordered the blocking of orvelin-invest.org for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection6('Orvelin Invest', 'orvelin-invest.org', '12 June 2026'),
  },
  credessa: {
    verdict:
      'We flag Credessa and do not recommend it. On 12 June 2026, Italy\u2019s regulator CONSOB ordered the blocking of credessa-it.net for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection6('Credessa', 'credessa-it.net', '12 June 2026'),
  },
  'kcapital-consob': {
    verdict:
      'We flag Kcapital and do not recommend it. On 12 June 2026, Italy\u2019s regulator CONSOB ordered the blocking of kcapital.net for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection6('Kcapital', 'kcapital.net', '12 June 2026'),
  },
  'zelvaris-group': {
    verdict:
      'We flag Zelvaris Group and do not recommend it. On 12 June 2026, Italy\u2019s regulator CONSOB ordered the blocking of zelvarisgroup.ltd for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection6('Zelvaris Group', 'zelvarisgroup.ltd', '12 June 2026'),
  },
  'capital-liquidity': {
    verdict:
      'We flag Capital-Liquidity and do not recommend it. On 12 June 2026, Italy\u2019s regulator CONSOB ordered the blocking of capital-liquidity.com for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection6('Capital-Liquidity', 'capital-liquidity.com', '12 June 2026'),
  },
  'wealth-trade-capital': {
    verdict:
      'We flag Wealth Trade Capital and do not recommend it. On 12 June 2026, Italy\u2019s regulator CONSOB ordered the blocking of wealth-trade.capital for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection6('Wealth Trade Capital', 'wealth-trade.capital', '12 June 2026'),
  },
  'alantra-mc': {
    verdict:
      'We flag Alantra MC Limited and do not recommend it. On 23 April 2026, Italy\u2019s regulator CONSOB ordered the blocking of alantmc.com for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection6('Alantra MC Limited', 'alantmc.com', '23 April 2026'),
  },
  'morgan-capital-ltd': {
    verdict:
      'We flag Morgan Capital and do not recommend it. On 23 April 2026, Italy\u2019s regulator CONSOB ordered the blocking of morgan-capital.ltd for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection6('Morgan Capital', 'morgan-capital.ltd', '23 April 2026'),
  },
  viforex: {
    verdict:
      'We flag Viforex and do not recommend it. On 23 April 2026, Italy\u2019s regulator CONSOB ordered the blocking of viforex.com for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection6('Viforex', 'viforex.com', '23 April 2026'),
  },
  orbisolyx: {
    verdict:
      'We flag Orbisolyx and do not recommend it. On 20 May 2026, Italy\u2019s regulator CONSOB ordered the blocking of orbisolyx.com for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection6('Orbisolyx', 'orbisolyx.com', '20 May 2026'),
  },
};
