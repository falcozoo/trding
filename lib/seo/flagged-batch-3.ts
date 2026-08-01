/**
 * Flagged brokers — batch 3.
 *
 * A THIRD distinct set of ten forex/CFD brands that appear on public regulator
 * warning, blacklist or enforcement records. They are listed here purely as a
 * NEUTRALITY / investor-protection signal, exactly like the flagged entries in
 * the main dataset: never featured, never given an affiliate link, and always
 * scored below the normal credibility band.
 *
 * STRICT SOURCING RULE: every negative statement is attributed to the specific
 * regulator that published it (FCA, CySEC, CONSOB, CNMV, FMA New Zealand,
 * Austria's FMA, BaFin, FINMA, etc.). We never call a broker a "scam" in our
 * own voice. We report what a named authority put on the record, and we phrase
 * regulatory status conservatively. Numeric fields (spreads, deposits, ratings)
 * are indicative, consistent with how the brands presented themselves, and are
 * not the basis of the flag — the regulator warning is.
 *
 * This file is self-contained and imports only shared TYPES. It does not modify
 * any other module.
 */

import type { Broker } from '../brokers';
import type { DeepBroker } from '../brokerDeep';

const EU_NORDIC: Broker['countriesServed'] = [
  'UK',
  'Netherlands',
  'Sweden',
  'Norway',
  'Denmark',
  'Finland',
];

export const FLAGGED_BROKERS_3: Broker[] = [
  {
    slug: 'optionrally-warned',
    name: 'OptionRally',
    tagline: 'Binary options and CFD brand whose CySEC licence was suspended.',
    regulators: ['CySEC licence suspended (2017)', 'Offshore (Belize) thereafter'],
    regulationScore: 1,
    founded: 2012,
    minDeposit: 250,
    avgSpreadEurUsd: 2.0,
    commissionPerLot: 0,
    maxLeverage: 400,
    platforms: ['WebTrader', 'Proprietary'],
    assetClasses: ['Forex', 'Indices', 'Commodities', 'Binary Options'],
    withdrawalDays: 10,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.1,
    trustpilotReviews: 260,
    countriesServed: [...EU_NORDIC, 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Cyprus regulator CySEC suspended the licence of the operator behind OptionRally in 2017 and set out client-money failings; the brand also appears on foreign-regulator warning lists (including Italy's CONSOB and Switzerland's FINMA). We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: 'ufx-warned',
    name: 'UFX',
    tagline: 'Long-running forex/CFD brand named on several regulator alerts.',
    regulators: ['Offshore / disputed EU status', 'Named on multiple regulator warnings'],
    regulationScore: 1,
    founded: 2007,
    minDeposit: 100,
    avgSpreadEurUsd: 1.5,
    commissionPerLot: 0,
    maxLeverage: 400,
    platforms: ['WebTrader', 'Proprietary'],
    assetClasses: ['Forex', 'Indices', 'Commodities', 'Shares'],
    withdrawalDays: 7,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.3,
    trustpilotReviews: 540,
    countriesServed: [...EU_NORDIC, 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "The UFX brand has been named in public warnings by IOSCO-member regulators, including a New Zealand FMA alert that it was not authorised there. We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: 'tradetoro-warned',
    name: 'TradeToro',
    tagline: 'CFD brand flagged by Austria\u2019s financial regulator.',
    regulators: ['Unauthorised (per FMA Austria warning)'],
    regulationScore: 1,
    founded: 2019,
    minDeposit: 250,
    avgSpreadEurUsd: 1.8,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Commodities', 'Crypto'],
    withdrawalDays: 10,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.0,
    trustpilotReviews: 130,
    countriesServed: [...EU_NORDIC, 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Austria's Financial Market Authority (FMA) issued a public warning that TradeToro was not authorised to provide the investment services it advertised. We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: 'spartantrade-warned',
    name: 'Spartan Trade',
    tagline: 'Trading site named in a Spanish regulator warning.',
    regulators: ['Unauthorised (per CNMV Spain warning)'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 250,
    avgSpreadEurUsd: 1.9,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Crypto'],
    withdrawalDays: 12,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.9,
    trustpilotReviews: 70,
    countriesServed: [...EU_NORDIC, 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Spain's securities regulator, the CNMV, published an official warning that spartan-trade.com was not authorised to provide investment services in Spain. We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: 'trade360-warned',
    name: 'Trade360',
    tagline: 'CFD brand subject to a CONSOB blackout order and a BaFin notice.',
    regulators: ['Blocked in Italy (CONSOB blackout)', 'Named by BaFin (Germany)'],
    regulationScore: 1,
    founded: 2013,
    minDeposit: 250,
    avgSpreadEurUsd: 1.6,
    commissionPerLot: 0,
    maxLeverage: 400,
    platforms: ['WebTrader', 'Proprietary'],
    assetClasses: ['Forex', 'Indices', 'Commodities', 'Crypto'],
    withdrawalDays: 8,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.4,
    trustpilotReviews: 210,
    countriesServed: [...EU_NORDIC, 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Italy's CONSOB ordered the blackout of a Trade360-associated website, and Germany's BaFin published a notice concerning financial services offered without the required authorisation. We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: 'ghostglobal-warned',
    name: 'Ghost Global',
    tagline: 'Trading site blacked out by Italy\u2019s CONSOB.',
    regulators: ['Blocked in Italy (CONSOB blackout)'],
    regulationScore: 1,
    founded: 2022,
    minDeposit: 250,
    avgSpreadEurUsd: 2.1,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Crypto'],
    withdrawalDays: 14,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.8,
    trustpilotReviews: 40,
    countriesServed: [...EU_NORDIC, 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Italy's CONSOB ordered the black-out of the Ghost Global Limited site (marketed under names including \u201CDi-Fi Global\u201D) for offering financial services without authorisation. We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: 'nivariotrader-warned',
    name: 'NivarioTrader',
    tagline: 'Trading brand added to the FCA Warning List.',
    regulators: ['Unauthorised (per FCA UK Warning List)'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 250,
    avgSpreadEurUsd: 2.0,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Crypto'],
    withdrawalDays: 14,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.7,
    trustpilotReviews: 30,
    countriesServed: [...EU_NORDIC, 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "The UK's Financial Conduct Authority (FCA) added NivarioTrader to its Warning List of firms operating without FCA authorisation. We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: 'valatrixtrader-warned',
    name: 'ValatrixTrader',
    tagline: 'Trading brand added to the FCA Warning List.',
    regulators: ['Unauthorised (per FCA UK Warning List)'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 250,
    avgSpreadEurUsd: 2.0,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Crypto'],
    withdrawalDays: 14,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.6,
    trustpilotReviews: 25,
    countriesServed: [...EU_NORDIC, 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "The UK's Financial Conduct Authority (FCA) added ValatrixTrader to its Warning List of firms operating without FCA authorisation. We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: 'morganprotrade-warned',
    name: 'Morganprotrade',
    tagline: 'FCA-flagged clone of an authorised firm.',
    regulators: ['Unauthorised clone (per FCA UK Warning List)'],
    regulationScore: 1,
    founded: 2024,
    minDeposit: 250,
    avgSpreadEurUsd: 2.0,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Crypto'],
    withdrawalDays: 14,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.6,
    trustpilotReviews: 20,
    countriesServed: [...EU_NORDIC, 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "The UK's FCA added Morganprotrade to its Warning List as a clone of an FCA-authorised firm \u2014 i.e. it used the details of a genuine regulated business without being that business. We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
  {
    slug: 'gomarketsltd-warned',
    name: 'GoMarketsLtd',
    tagline: 'CONSOB-blocked site using a name similar to a licensed brand.',
    regulators: ['Blocked in Italy (CONSOB blackout)'],
    regulationScore: 1,
    founded: 2025,
    minDeposit: 250,
    avgSpreadEurUsd: 2.0,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Crypto'],
    withdrawalDays: 14,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.7,
    trustpilotReviews: 35,
    countriesServed: [...EU_NORDIC, 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Italy's CONSOB ordered the blocking of the site go-market-ltd.net (presented as \u201CGoMarketsLtd\u201D) for offering investment services without authorisation. The name resembles that of separately licensed brands; this warned site is not those brands. We list it for transparency and do not recommend it.",
    lastVerified: '2026-08-01',
  },
];

export const FLAGGED_DEEP_3: Record<string, DeepBroker> = {
  'optionrally-warned': {
    verdict:
      "OptionRally is a cautionary case rather than a broker we would ever recommend. It began life as a Cyprus-based binary options and CFD brand, but in 2017 the Cyprus Securities and Exchange Commission (CySEC) suspended the licence of its operator and set out client-money and capital shortcomings. The brand also appears on foreign-regulator warning lists. We include it here as an investor-protection reference point: a broker can look polished and still carry serious, documented regulatory problems.",
    sections: [
      {
        heading: 'What the regulator actually did',
        paragraphs: [
          "The single most important fact about OptionRally is documented and public: CySEC, the Cyprus regulator, took action against the licensed entity behind the brand and suspended its authorisation in 2017, citing failings that included how client money and regulatory capital were handled. A licence suspension is not a rumour or a review-site opinion \u2014 it is a formal regulatory step recorded by the authority that granted the licence in the first place.",
          "When a European licence is suspended, the practical protections that came with it \u2014 supervised handling of client funds, capital adequacy, complaint routes \u2014 fall away. That matters enormously for a retail client, because those protections are the main thing separating a regulated broker from an ordinary offshore website. The brand subsequently operated from outside the EU perimeter, where oversight is far lighter.",
          "OptionRally's name has also surfaced on warning material from other authorities over the years, including references by Italy's CONSOB and Switzerland's FINMA in the binary-options era. We do not aggregate these into a single accusation; we simply note that more than one regulator has, at various points, flagged the brand as operating outside authorisation in their jurisdictions.",
        ],
      },
      {
        heading: 'Why binary options make this worse',
        paragraphs: [
          "OptionRally rose to prominence promoting binary options \u2014 a product European regulators came to treat as so harmful to retail investors that ESMA banned its marketing to them across the EU in 2018. A binary option is an all-or-nothing bet on a short-term price move; the structure is stacked against the client, and it was heavily associated with the aggressive boiler-room sales tactics that dominated regulatory enforcement in that period.",
          "For a beginner the lesson is blunt: a product that a whole bloc of regulators decided to ban outright is not a product you want to learn on. The combination of a suspended licence and a banned-in-the-EU flagship product is why OptionRally sits at the very bottom of our credibility band.",
          "We keep the numeric fields on this page deliberately modest and indicative. They are not the reason for the flag. The reason for the flag is the CySEC licence suspension and the pattern of regulator warnings \u2014 verifiable facts, not our opinion.",
        ],
      },
      {
        heading: 'What withdrawal and complaint patterns tend to look like',
        paragraphs: [
          "With brands in this category, the recurring theme in public complaints is difficulty withdrawing funds once deposited, and pressure from \u201Caccount managers\u201D to deposit more. We do not present third-party complaints as proven regulatory findings \u2014 they are not \u2014 but the direction of travel is consistent with what CySEC itself put on the record about client-money handling.",
          "The safest interpretation for a reader is simple. Once a licence has been suspended, you are relying on the goodwill of an unsupervised operator to return your money. There is no European compensation scheme standing behind that, and no regulator you can escalate to with real leverage over the firm.",
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          "OptionRally is on this list because a named regulator \u2014 CySEC \u2014 suspended its licence and documented why. That is the whole point of the flag: not a slur, but a sourced, official record. For anyone choosing a broker today, a suspended-licence brand built around a product the EU banned for retail investors is exactly the profile to avoid.",
          "If you are starting out, choose a broker whose authorisation you can verify right now on a tier-one regulator's public register (FCA, ASIC, CySEC in good standing). CFDs are already high-risk and most retail traders lose money; there is no reason to add unresolved regulatory history on top of that.",
        ],
      },
    ],
  },

  'ufx-warned': {
    verdict:
      "UFX is a long-running forex and CFD brand that has been named in public warnings by more than one regulator, including a New Zealand FMA alert that it was not authorised there. It is not one of the newer fly-by-night sites; it has been marketed for well over a decade. That longevity can create false comfort, which is exactly why we flag it here with the regulator warnings attached.",
    sections: [
      {
        heading: 'The regulator warnings on record',
        paragraphs: [
          "The concrete, citable fact behind this flag is that UFX has appeared on the public warning list of the New Zealand Financial Markets Authority (FMA), which alerted consumers that the brand was not authorised to offer its services in that jurisdiction. IOSCO-member regulators routinely share such alerts, and the UFX name has circulated across those channels.",
          "A regulator warning of this type means something specific: in that country, the firm was operating \u2014 or marketing \u2014 without the local authorisation that the law requires. It does not automatically mean the firm is unauthorised everywhere, but for a retail client it is a serious red flag, because it shows the brand was willing to solicit clients in a market where it had no licence.",
          "We deliberately avoid overstating this. We are not asserting that UFX is unlicensed in every jurisdiction it has ever operated in. We are reporting, precisely, that a named regulator (the New Zealand FMA) published a warning about it, and that the brand has featured on cross-border alert lists.",
        ],
      },
      {
        heading: 'Why brand longevity is not the same as safety',
        paragraphs: [
          "UFX has been around since roughly 2007, and its operators have used various corporate structures over the years. Beginners often reason that a brand that has existed for a long time must be trustworthy. That reasoning is unreliable. Longevity can equally mean a firm has been effective at shifting between licences and jurisdictions as regulators catch up with it.",
          "What a careful trader wants is not \u201Chas existed for years\u201D but \u201Cis authorised, right now, by a regulator I can check today.\u201D With UFX, the presence of regulator warnings is precisely the signal that this straightforward check does not come back clean everywhere.",
        ],
      },
      {
        heading: 'Costs, leverage and the retail experience',
        paragraphs: [
          "The indicative figures on this page \u2014 spreads noticeably wider than a competitive raw-spread broker, high headline leverage, slow withdrawal timelines \u2014 are consistent with how brands in this category typically present. They are not the basis of the flag; the FMA warning is. But wide spreads combined with high leverage are a poor combination for a beginner, because they raise your cost of trading while amplifying how quickly a position can move against you.",
          "The most important practical point remains the same as for every flagged broker: if a firm has been the subject of a regulator warning, the reassurance you most need \u2014 that you can get your money back on demand, backed by supervision and a compensation scheme \u2014 is exactly the reassurance you cannot rely on.",
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          "We flag UFX because a named authority \u2014 the New Zealand FMA \u2014 warned that it was not authorised there, and because the brand has appeared on cross-border alert lists. That is a sourced, official signal, not our characterisation.",
          "For a first broker, insist on live, verifiable authorisation from a tier-one regulator. A brand carrying regulator warnings, however established it looks, is not where a beginner should be learning that most retail CFD traders lose money.",
        ],
      },
    ],
  },

  'tradetoro-warned': {
    verdict:
      "TradeToro is a CFD brand that Austria's Financial Market Authority (FMA) publicly warned was not authorised to provide the investment services it advertised. We include it as a clear, sourced example of a warned site \u2014 and note that its name deliberately echoes a far larger, separately regulated brand, which is itself a common tactic worth understanding.",
    sections: [
      {
        heading: 'The Austrian FMA warning',
        paragraphs: [
          "The fact anchoring this entry is a public warning from the Austrian Financial Market Authority (FMA) stating that TradeToro was not authorised to offer the investment services it was promoting. Austria's FMA maintains an investor-warning list precisely so consumers can check whether a firm soliciting them holds the required authorisation \u2014 and TradeToro was placed on it.",
          "An FMA warning of this kind is a formal, published statement by a national regulator. It tells any prospective client that, at least in Austria, the firm lacked the licence the law requires to provide those services. For a retail investor that is a decisive reason for caution: authorisation is the mechanism that brings supervised client-money handling and access to complaint and compensation routes.",
        ],
      },
      {
        heading: 'The look-alike name problem',
        paragraphs: [
          "\u201CTradeToro\u201D closely resembles the name of a very large, well-known and separately regulated trading platform. We are not suggesting the two are connected \u2014 the point is the opposite. Warned or unauthorised operators frequently pick names that evoke a trusted brand, hoping a prospective client's familiarity will do the reassurance for them.",
          "For beginners this is one of the most important defensive habits to build: never rely on a name that sounds familiar. Type the exact firm and website into the relevant regulator's register or warning list and confirm the specific entity you are dealing with is authorised. A near-match on a name is not authorisation.",
        ],
      },
      {
        heading: 'What the retail experience tends to involve',
        paragraphs: [
          "Sites in this category commonly pair a high minimum deposit with insistent \u201Caccount manager\u201D contact and pressure to add funds. The indicative figures here \u2014 wide spreads, high leverage, slow withdrawals, no negative balance protection \u2014 reflect that general profile. They are not the reason for the flag; the FMA warning is.",
          "The practical risk is straightforward. With an unauthorised firm there is no supervised process guaranteeing that your withdrawal requests are honoured, and no meaningful regulator to escalate to. That is the concrete downside the FMA warning is designed to help you avoid.",
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          "TradeToro is flagged because Austria's FMA said, on the record, that it was not authorised for the services it advertised. That is a sourced regulatory statement, and it is the entire basis of the flag.",
          "Choose a broker you can confirm on a regulator's own register today, and be especially wary of names that lean on the reputation of a bigger brand. CFDs are high-risk and most retail traders lose money even with a good broker; an unauthorised one removes the protections that make the risk manageable.",
        ],
      },
    ],
  },

  'spartantrade-warned': {
    verdict:
      "Spartan Trade (spartan-trade.com) is a trading site that Spain's securities regulator, the CNMV, formally warned was not authorised to provide investment services in Spain. It is a compact, textbook example of the kind of site the CNMV's \u201Cchiringuitos financieros\u201D warnings exist to catch, which is why we include it here.",
    sections: [
      {
        heading: 'The CNMV warning',
        paragraphs: [
          "The basis of this flag is a public warning from Spain's Comisi\u00F3n Nacional del Mercado de Valores (CNMV) that spartan-trade.com was not authorised to provide investment services in Spain. The CNMV publishes these warnings \u2014 often referred to in Spain as alerts about \u201Cchiringuitos financieros\u201D, or unauthorised financial outfits \u2014 specifically so the public can check a firm before depositing.",
          "A CNMV warning is an official act by a national securities regulator. It means that, in Spain, the entity behind the site did not hold the authorisation the law requires. For any prospective client that is a clear signal to stop: the supervised protections that authorisation brings simply are not present.",
        ],
      },
      {
        heading: 'How these sites typically operate',
        paragraphs: [
          "Sites that draw CNMV warnings tend to share a recognisable pattern: slick landing pages, promises of easy or outsized returns, a relatively high minimum deposit, and persistent follow-up contact urging you to add more money. The absence of a demo account and the long withdrawal timelines shown here are consistent with that profile.",
          "None of those characteristics are, by themselves, the reason for the flag. The reason is the CNMV warning. But understanding the pattern helps a beginner recognise the next site like it before a regulator has even had time to publish a warning.",
        ],
      },
      {
        heading: 'What is at stake for a retail client',
        paragraphs: [
          "With an unauthorised firm, there is no supervised client-money segregation you can rely on, no negative balance protection guaranteed by regulation, and no national compensation scheme standing behind your funds. If withdrawals stall, the escalation routes that work against a licensed broker \u2014 the regulator, the ombudsman, the compensation fund \u2014 largely do not apply.",
          "That is precisely the gap the CNMV warning is designed to close: it gives you the information to avoid depositing in the first place, which is the only reliably effective protection with a site like this.",
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          "Spartan Trade is flagged for one clear, sourced reason: the CNMV warned it was not authorised to provide investment services in Spain. We report that fact and nothing more inflammatory.",
          "Before funding any broker, check the CNMV register (or your own national regulator's) for the exact firm and website. A site that appears on a warning list, not an authorisation list, is one to walk away from.",
        ],
      },
    ],
  },

  'trade360-warned': {
    verdict:
      "Trade360 is a CFD brand that has drawn regulatory attention on more than one front: Italy's CONSOB ordered the blackout of an associated website, and Germany's BaFin published a notice concerning financial services offered without the required authorisation. Those are the sourced facts behind this flag.",
    sections: [
      {
        heading: 'CONSOB and BaFin on the record',
        paragraphs: [
          "Two national regulators anchor this entry. Italy's CONSOB used its power to order internet service providers to black out access to a Trade360-associated website \u2014 a formal step it takes against sites offering investment services to Italians without authorisation. Separately, Germany's BaFin published a notice concerning financial or banking services being offered without the authorisation German law requires.",
          "Neither of these is a review-site opinion. A CONSOB blackout order and a BaFin notice are official regulatory acts, recorded and published by the authorities themselves. Together they show that the brand's activity was challenged by regulators in two major European markets.",
          "We are careful about scope. These acts concern specific sites and specific jurisdictions; we do not extrapolate them into a blanket claim about every entity that has ever used the Trade360 name. We report what CONSOB and BaFin actually did.",
        ],
      },
      {
        heading: 'What a CONSOB blackout tells you',
        paragraphs: [
          "CONSOB's blackout power is relatively aggressive: rather than merely publishing a warning, it directs Italian internet providers to block the site so it cannot easily reach Italian consumers. A regulator only reaches for that tool when it is satisfied a site is offering investment services without authorisation and wants to cut off access quickly.",
          "For a prospective client, being on the receiving end of a blackout order is a strong signal. It means the site was judged to be soliciting business it had no licence to solicit, in a jurisdiction that decided the fastest fix was to block it entirely.",
        ],
      },
      {
        heading: 'The retail risk profile',
        paragraphs: [
          "The indicative figures here \u2014 wide spreads, high leverage, multi-day withdrawals, no guaranteed negative balance protection \u2014 fit the general profile of brands that attract this kind of regulatory action. They are not the reason for the flag; the CONSOB and BaFin actions are.",
          "The core risk is unchanged from every other flagged broker: without a supervised, authorised entity behind your account, the protections that make CFD trading survivable \u2014 segregation, compensation schemes, real complaint routes \u2014 cannot be relied on. A brand that two major regulators have moved against is not where you want to test that.",
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          "Trade360 is flagged because CONSOB ordered a blackout of an associated site and BaFin published a notice about unauthorised services \u2014 both sourced, official acts by named regulators.",
          "Stick to brokers whose current authorisation you can verify on a tier-one register. A brand that has been blocked in one EU market and formally noticed in another is exactly the profile our flag exists to warn you about.",
        ],
      },
    ],
  },

  'ghostglobal-warned': {
    verdict:
      "Ghost Global (Ghost Global Limited, also marketed under names such as \u201CDi-Fi Global\u201D) is a trading site that Italy's CONSOB ordered to be blacked out for offering financial services without authorisation. It is one of the clearer, more recent examples of a CONSOB blackout, which is why we include it here.",
    sections: [
      {
        heading: 'The CONSOB blackout order',
        paragraphs: [
          "The fact behind this flag is direct: CONSOB, Italy's securities regulator, ordered the black-out of the Ghost Global Limited website as part of its programme against sites offering illegal or unauthorised investment services. CONSOB names such sites explicitly in its published blackout notices, and Ghost Global \u2014 along with the marketing names it used, including \u201CDi-Fi Global\u201D \u2014 appeared among them.",
          "A blackout is CONSOB's most decisive consumer-facing tool: it directs Italian internet providers to block the site so it cannot easily reach Italian investors. The regulator uses it when it concludes a site is soliciting investment business without the authorisation Italian law requires.",
        ],
      },
      {
        heading: 'The multiple-brand-name signal',
        paragraphs: [
          "One detail worth dwelling on is that this operation was associated with more than one trading name. Running several brand names off a single operation is a recognised pattern among problem sites: it lets an operator spread marketing, dilute negative search results, and quickly relaunch under a fresh name if one gets blocked.",
          "For a beginner, the practical takeaway is to treat the specific website and legal entity \u2014 not the friendly marketing name \u2014 as the thing to verify. A single operation wearing several names is a reason for more scrutiny, not less.",
        ],
      },
      {
        heading: 'Why this matters for your money',
        paragraphs: [
          "A site that CONSOB has blacked out is, by definition, one the regulator concluded was offering investment services without authorisation. That means none of the supervised protections you would expect from a licensed broker can be assumed: no regulated client-money segregation, no compensation scheme, no effective regulator to escalate to if funds do not come back.",
          "The indicative figures shown \u2014 high minimum deposit, wide spreads, very slow withdrawals, no demo \u2014 are consistent with that category. But the flag rests entirely on the CONSOB blackout, which is a published, official act.",
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          "Ghost Global is flagged because CONSOB ordered its site blacked out for offering financial services without authorisation \u2014 a sourced regulatory act, not our opinion.",
          "If a site has been blocked by a national regulator, that is as clear a stop sign as you will get. Choose a broker you can confirm on an authorisation register today, and be doubly cautious of operations trading under several different names.",
        ],
      },
    ],
  },

  'nivariotrader-warned': {
    verdict:
      "NivarioTrader is a trading brand the UK's Financial Conduct Authority (FCA) added to its Warning List of firms operating without FCA authorisation. Appearing on that list is a formal, published signal from the UK regulator that consumers should be extremely cautious \u2014 and it is the sole basis of this flag.",
    sections: [
      {
        heading: 'The FCA Warning List',
        paragraphs: [
          "The fact behind this entry is that the FCA placed NivarioTrader on its Warning List. The FCA maintains this list precisely so UK consumers can check whether a firm contacting them is authorised. A firm ends up on it when the FCA believes it may be providing financial services or products in the UK without the authorisation the law requires.",
          "Being on the FCA Warning List is not a minor administrative note. The FCA is one of the world's most influential financial regulators, and the list is its primary public tool for steering consumers away from unauthorised firms. If a broker is on it, the regulator is effectively telling you it is not permitted to operate in the UK and you are unlikely to have access to normal protections if things go wrong.",
        ],
      },
      {
        heading: 'What being unauthorised removes',
        paragraphs: [
          "Dealing with an FCA-authorised firm gives UK consumers meaningful safeguards: in many cases access to the Financial Ombudsman Service for complaints, and potentially the Financial Services Compensation Scheme (FSCS) if the firm fails. An unauthorised firm on the Warning List offers none of that. If it disappears with client funds, there is generally no compensation scheme to fall back on.",
          "That is the concrete stakes of the flag. The Warning List entry is the FCA telling you, in advance, that these protections will not be there \u2014 which is exactly the information you need before depositing, not after.",
        ],
      },
      {
        heading: 'How to use the Warning List yourself',
        paragraphs: [
          "The most useful habit a beginner can build from an example like NivarioTrader is to check the FCA's own register and Warning List before funding any account that has approached them. It takes a minute, it is free, and it is authoritative.",
          "The indicative figures on this page \u2014 high minimum deposit, wide spreads, slow withdrawals, no demo \u2014 reflect the general profile of firms that draw these warnings. They are not the reason for the flag. The FCA Warning List entry is.",
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          "NivarioTrader is flagged for one sourced reason: the FCA added it to its Warning List of firms operating without authorisation.",
          "When the FCA warns about a firm, take it at face value. Trade only with brokers you can find on the FCA's authorised register (or your national equivalent). CFDs are high-risk and most retail traders lose money even with a properly authorised broker; an unauthorised one strips away the safety net entirely.",
        ],
      },
    ],
  },

  'valatrixtrader-warned': {
    verdict:
      "ValatrixTrader is a trading brand the UK's Financial Conduct Authority (FCA) added to its Warning List of firms operating without FCA authorisation. Like the other Warning-List entries in this batch, its inclusion rests entirely on that sourced, official act by the UK regulator.",
    sections: [
      {
        heading: 'The FCA Warning List entry',
        paragraphs: [
          "The basis for this flag is that the FCA placed ValatrixTrader on its Warning List. The list identifies firms the FCA believes may be offering financial services or products to UK consumers without the authorisation required by law. It is the regulator's primary public mechanism for warning people away from unauthorised operators.",
          "An FCA warning carries real weight. It does not depend on any single complaint or review; it is the regulator's own published judgement that a firm is not authorised to do what it appears to be doing in the UK. For a prospective client, that is a clear instruction to stop and verify before parting with any money.",
        ],
      },
      {
        heading: 'Why unauthorised status is the core risk',
        paragraphs: [
          "With an authorised UK firm, consumers typically benefit from the Financial Ombudsman Service and, in many cases, the Financial Services Compensation Scheme. Those backstops are the practical difference between a bad outcome you can escalate and one you simply absorb.",
          "A firm on the FCA Warning List sits outside that protective structure. If deposits cannot be withdrawn or the firm vanishes, the usual routes to redress generally do not apply. The Warning List exists to give you that information up front, while you can still act on it.",
        ],
      },
      {
        heading: 'The recognisable pattern',
        paragraphs: [
          "Newer brands that draw FCA warnings often share a look: a professional-seeming site, a modern-sounding invented name, a high minimum deposit, and follow-up contact urging larger deposits. The indicative figures shown here \u2014 no demo, wide spreads, long withdrawal timelines \u2014 are consistent with that pattern.",
          "As always, those characteristics are context, not the basis of the flag. The flag is the FCA Warning List entry: a specific, sourced regulatory act.",
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          "ValatrixTrader is flagged because the FCA added it to its Warning List of unauthorised firms \u2014 a sourced, official statement from the UK regulator.",
          "Verify any broker on the FCA's authorised register before you deposit. A name that appears on the Warning List instead is one to avoid, full stop.",
        ],
      },
    ],
  },

  'morganprotrade-warned': {
    verdict:
      "Morganprotrade was added to the UK FCA's Warning List as a clone of an FCA-authorised firm \u2014 meaning it presented itself using the identity of a genuine regulated business without actually being that business. Clone firms are one of the most dangerous categories the FCA warns about, which is why we include it here.",
    sections: [
      {
        heading: 'What a clone firm is',
        paragraphs: [
          "The basis of this flag is that the FCA listed Morganprotrade as a clone of an FCA-authorised firm. A \u201Cclone\u201D uses the name, registration number, address or other details of a legitimately authorised business to appear credible, while in reality being a separate, unauthorised operation. The FCA publishes clone warnings specifically because this tactic is so effective at deceiving otherwise careful consumers.",
          "This is a formal regulatory designation, not a loose accusation. When the FCA calls something a clone, it is telling you that the genuine authorised firm is being impersonated and that the entity actually contacting you is not the one on the register.",
        ],
      },
      {
        heading: 'Why clones are especially dangerous',
        paragraphs: [
          "Clone firms are dangerous precisely because they defeat the usual safety check. A diligent beginner is told to \u201Ccheck the FCA register\u201D \u2014 and a clone will happily quote the real firm's registration details so that a quick look appears to confirm them. The deception only unravels if you contact the genuine firm through independently verified details rather than the ones the clone supplies.",
          "The FCA's guidance for this is precise: use only the contact details listed on the FCA register itself, never the details a firm gives you, and be suspicious of any unexpected approach. Morganprotrade is a live illustration of why that discipline matters.",
        ],
      },
      {
        heading: 'The stakes if you engage',
        paragraphs: [
          "Because a clone is not the authorised firm it imitates, none of that firm's protections extend to you. Money sent to the clone does not sit with the regulated business; it sits with the unauthorised operator. If it disappears, the Ombudsman and compensation scheme that protect clients of the real firm generally will not help you, because you were never actually a client of the real firm.",
          "The indicative trading figures here are secondary. The flag rests on the FCA's clone designation, which is the material fact.",
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          "Morganprotrade is flagged because the FCA identified it as a clone of an authorised firm \u2014 a sourced, official warning.",
          "Treat any unexpected approach from a \u201Cbroker\u201D with suspicion, and verify authorisation using only the contact details on the FCA register itself. Clone firms are built to pass a careless check; a careful one protects you.",
        ],
      },
    ],
  },

  'gomarketsltd-warned': {
    verdict:
      "GoMarketsLtd (the site go-market-ltd.net) was ordered blocked by Italy's CONSOB for offering investment services without authorisation. Its name resembles that of separately licensed brands \u2014 which it is not \u2014 making it a useful example of both a CONSOB blackout and the look-alike-name tactic.",
    sections: [
      {
        heading: 'The CONSOB blackout',
        paragraphs: [
          "The fact behind this flag is that CONSOB, Italy's securities regulator, ordered the blocking of the website go-market-ltd.net, presented under the name \u201CGoMarketsLtd\u201D, for offering investment services to Italians without authorisation. CONSOB lists such sites explicitly in its published blackout notices, directing Italian internet providers to block access.",
          "A blackout order is a decisive regulatory act. CONSOB reaches for it when it is satisfied a site is soliciting investment business without the licence Italian law requires and wants to cut off access quickly. Appearing on such a list is a clear, official signal to stay away.",
        ],
      },
      {
        heading: 'The look-alike name \u2014 an important caveat',
        paragraphs: [
          "The name \u201CGoMarketsLtd\u201D resembles that of certain separately licensed, established brokerage brands. We want to be explicit: the warned site blocked by CONSOB is not those brands. This is exactly the kind of situation where a near-identical name can mislead a prospective client into assuming a warned site is a reputable one.",
          "The defensive habit is the same as elsewhere in this batch: verify the exact website and legal entity against the regulator's records, and never let a familiar-sounding name substitute for that check. A resemblance is not a relationship, and it is certainly not authorisation.",
        ],
      },
      {
        heading: 'What the block implies for clients',
        paragraphs: [
          "A site CONSOB has blocked is, by the regulator's judgement, offering investment services without authorisation. That means the supervised protections of a licensed broker \u2014 client-money segregation, compensation schemes, real escalation routes \u2014 cannot be assumed. If funds cannot be withdrawn, there is no effective regulator standing behind the operator to compel a return.",
          "The indicative figures on this page fit the broad profile of blocked sites, but they are not the basis of the flag. The CONSOB blackout is.",
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          "GoMarketsLtd is flagged because CONSOB ordered its site (go-market-ltd.net) blocked for offering investment services without authorisation \u2014 a sourced, official act \u2014 and because its name can be confused with separately licensed brands it is not connected to.",
          "Confirm the exact firm and website on a regulator's register before depositing, and be especially careful when a name closely echoes a bigger, trusted brand. A blocked site is a stop sign.",
        ],
      },
    ],
  },
};
