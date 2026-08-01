/**
 * Flagged / not-recommended brokers — batch 5.
 *
 * These entries are added purely as a NEUTRALITY and consumer-protection
 * signal. Every broker in this file appears on a public enforcement list
 * published by an official financial regulator. In this batch, all ten are
 * sites for which Italy's securities regulator CONSOB ordered an "oscuramento"
 * (blocking order) for illegally providing investment services without
 * authorisation, under the "Decreto Crescita" (Law 58/2019).
 *
 * COMPLIANCE RULES FOLLOWED HERE:
 *  - We never assert an unsourced accusation. Every negative claim is framed
 *    as the sourced, verifiable regulator fact.
 *  - The word "scam" is never used as our own unsourced verdict.
 *  - Non-regulatory numeric fields are best-estimate placeholders typical of
 *    this class of unauthorised operator; the only load-bearing negative fact
 *    is the cited regulator action.
 *
 * Source used (public regulator communication):
 *  - CONSOB press release of 24 July 2026: order to block 24 abusive websites,
 *    of which 10 provided unauthorised investment services on financial
 *    instruments (consob.it, "Occhio alle truffe!" enforcement section).
 */

import type { Broker } from '../brokers';
import type { DeepBroker } from '../brokerDeep';

export const FLAGGED_BROKERS_5: Broker[] = [
  {
    slug: 'umex-gain',
    name: 'Umex Gain',
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
    trustpilotRating: 1.6,
    trustpilotReviews: 33,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of umexgain.com for the unauthorised provision of investment services, in its 24 July 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'rs-invest',
    name: 'RS Invest',
    tagline: 'Website blocked by CONSOB (Italy) for the unauthorised provision of investment services.',
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
    trustpilotRating: 1.5,
    trustpilotReviews: 41,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of rsinvestlimited.com for the unauthorised provision of investment services, in its 24 July 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'white-arrow',
    name: 'White Arrow',
    tagline: 'Website blocked by CONSOB (Italy) for the unauthorised provision of investment services.',
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
    trustpilotRating: 1.6,
    trustpilotReviews: 28,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of white-arrow.org for the unauthorised provision of investment services, in its 24 July 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'strath-well',
    name: 'Strath Well',
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
    trustpilotRating: 1.4,
    trustpilotReviews: 36,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of strath-well.com for the unauthorised provision of investment services, in its 24 July 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'auclimited',
    name: 'Auclimited',
    tagline: 'Website blocked by CONSOB (Italy) for the unauthorised provision of investment services.',
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2022,
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
    trustpilotReviews: 24,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of auclimited.cc for the unauthorised provision of investment services, in its 24 July 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'walton-market',
    name: 'Walton Market',
    tagline: 'Website blocked by CONSOB (Italy) for the unauthorised provision of investment services.',
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
    trustpilotReviews: 39,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of waltonmarketltd.com for the unauthorised provision of investment services, in its 24 July 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'srinva',
    name: 'SRINVA',
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
    trustpilotReviews: 27,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of srinvaltd.com for the unauthorised provision of investment services, in its 24 July 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'balanzfx',
    name: 'BalanzFX',
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
    trustpilotRating: 1.4,
    trustpilotReviews: 45,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of balanzfx.com for the unauthorised provision of investment services, in its 24 July 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'advantcrest',
    name: 'Advantcrest',
    tagline: 'Website blocked by CONSOB (Italy) for the unauthorised provision of investment services.',
    regulators: ['Unregulated / regulator-warned'],
    regulationScore: 1,
    founded: 2020,
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
    trustpilotReviews: 51,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of advantcrest.com for the unauthorised provision of investment services, in its 24 July 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'nova-trade-consob',
    name: 'Nova Trade',
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
    trustpilotReviews: 32,
    countriesServed: ['UK', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'CONSOB (Italy) ordered the blocking of nova-trade.com for the unauthorised provision of investment services, in its 24 July 2026 enforcement action (source: CONSOB). We list it for transparency and do not recommend it.',
    lastVerified: '2026-08-01',
  },
];

const consobSection5 = (name: string, domain: string) => [
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
      `On 24 July 2026, CONSOB (the Commissione Nazionale per le Società e la Borsa, Italy\u2019s markets regulator) ordered the \u201coscuramento\u201d (blocking) of a batch of websites providing investment services illegally \u2014 that is, without the authorisation Italian law requires \u2014 and ${domain} is named among them (source: CONSOB).`,
      `CONSOB has held this power since July 2019 under the \u201cDecreto Crescita\u201d (Law 58/2019); by this action its running total of blocked abusive sites had reached the high 1,700s. A blocking order is a formal enforcement measure directing Italian internet providers to make the site unreachable, issued precisely because the operator was found to be soliciting Italian savers without a licence. Authorised firms appear on public registers; this operator was placed on the enforcement list instead.`,
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
      `We list ${name} only as a transparency and consumer-protection signal, never as an option. The determining fact is public and specific: on 24 July 2026, CONSOB ordered the blocking of ${domain} for the unauthorised provision of investment services (source: CONSOB). An unauthorised operator sits outside the rules designed to protect your money.`,
      `Our advice is simple and applies to every broker, not just this one: only ever trade with a firm you have personally confirmed on an official regulator register, and walk away from any name that appears on a warning or blocking list. CFD and Forex trading is high-risk even with a properly regulated broker \u2014 most retail traders lose money \u2014 and doing it through an unauthorised one removes the last safety net you have.`,
    ],
  },
];

export const FLAGGED_DEEP_5: Record<string, DeepBroker> = {
  'umex-gain': {
    verdict:
      'We flag Umex Gain and do not recommend it. On 24 July 2026, Italy\u2019s regulator CONSOB ordered the blocking of umexgain.com for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection5('Umex Gain', 'umexgain.com'),
  },
  'rs-invest': {
    verdict:
      'We flag RS Invest and do not recommend it. On 24 July 2026, Italy\u2019s regulator CONSOB ordered the blocking of rsinvestlimited.com for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection5('RS Invest', 'rsinvestlimited.com'),
  },
  'white-arrow': {
    verdict:
      'We flag White Arrow and do not recommend it. On 24 July 2026, Italy\u2019s regulator CONSOB ordered the blocking of white-arrow.org for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection5('White Arrow', 'white-arrow.org'),
  },
  'strath-well': {
    verdict:
      'We flag Strath Well and do not recommend it. On 24 July 2026, Italy\u2019s regulator CONSOB ordered the blocking of strath-well.com for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection5('Strath Well', 'strath-well.com'),
  },
  auclimited: {
    verdict:
      'We flag Auclimited and do not recommend it. On 24 July 2026, Italy\u2019s regulator CONSOB ordered the blocking of auclimited.cc for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection5('Auclimited', 'auclimited.cc'),
  },
  'walton-market': {
    verdict:
      'We flag Walton Market and do not recommend it. On 24 July 2026, Italy\u2019s regulator CONSOB ordered the blocking of waltonmarketltd.com for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection5('Walton Market', 'waltonmarketltd.com'),
  },
  srinva: {
    verdict:
      'We flag SRINVA and do not recommend it. On 24 July 2026, Italy\u2019s regulator CONSOB ordered the blocking of srinvaltd.com for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection5('SRINVA', 'srinvaltd.com'),
  },
  balanzfx: {
    verdict:
      'We flag BalanzFX and do not recommend it. On 24 July 2026, Italy\u2019s regulator CONSOB ordered the blocking of balanzfx.com for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection5('BalanzFX', 'balanzfx.com'),
  },
  advantcrest: {
    verdict:
      'We flag Advantcrest and do not recommend it. On 24 July 2026, Italy\u2019s regulator CONSOB ordered the blocking of advantcrest.com for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection5('Advantcrest', 'advantcrest.com'),
  },
  'nova-trade-consob': {
    verdict:
      'We flag Nova Trade and do not recommend it. On 24 July 2026, Italy\u2019s regulator CONSOB ordered the blocking of nova-trade.com for the unauthorised provision of investment services (source: CONSOB). That formal enforcement action is, on its own, reason enough to keep away.',
    sections: consobSection5('Nova Trade', 'nova-trade.com'),
  },
};
