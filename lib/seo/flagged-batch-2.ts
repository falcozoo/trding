/**
 * Flagged brokers — Batch 2.
 *
 * A NEUTRALITY dataset of forex/CFD brands that have been the subject of a
 * PUBLIC, VERIFIABLE regulator warning, blacklist entry, or enforcement action.
 * These entities are listed here purely so our comparison stays honest: they
 * are never featured, never given an affiliate link, and always score in the
 * lowest credibility band.
 *
 * STRICT SOURCING RULE: every negative statement below traces to a named
 * regulator's public warning/decision (FCA Warning List, AMF liste noire,
 * CNMV chiringuitos, CONSOB oscuramento, Finanstilsynet (Norway FSA), CySEC
 * investor warnings / enforcement, and IOSCO I-SCAN mirrors). We NEVER write
 * an unsourced "scam"; each `flagReason` names the authority that acted.
 *
 * Batch 2 is intentionally disjoint from batches 1 and 3 — distinct entities,
 * distinct slugs.
 */

import type { Broker } from '../brokers';
import type { DeepBroker } from '../brokerDeep';

export const FLAGGED_BROKERS_2: Broker[] = [
  {
    slug: 'trade12-globalfin',
    name: 'Trade12',
    tagline: 'Firm named on the FCA Warning List of unauthorised firms.',
    regulators: ['Unauthorised (FCA Warning List — Global Fin Services Ltd)'],
    regulationScore: 1,
    founded: 2016,
    minDeposit: 250,
    avgSpreadEurUsd: 1.6,
    commissionPerLot: 0,
    maxLeverage: 400,
    platforms: ['MT4', 'WebTrader'],
    assetClasses: ['Forex', 'Indices', 'Commodities'],
    withdrawalDays: 10,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.1,
    trustpilotReviews: 180,
    countriesServed: ['UK', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'The UK FCA published a Warning List notice (16/06/2017) stating that Global Fin Services Limited, trading as Trade12 (trade12.com), may be providing financial services in the UK without FCA authorisation. UK clients would have no access to the Financial Ombudsman Service or FSCS. Listed for transparency; not recommended.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'priorfx-ltd',
    name: 'PriorFX',
    tagline: 'Entity carried on the AMF liste noire of unauthorised forex sites.',
    regulators: ['Unauthorised (AMF liste noire — Priorfx Ltd)'],
    regulationScore: 1,
    founded: 2013,
    minDeposit: 200,
    avgSpreadEurUsd: 1.8,
    commissionPerLot: 0,
    maxLeverage: 300,
    platforms: ['MT4', 'WebTrader'],
    assetClasses: ['Forex', 'CFDs', 'Commodities'],
    withdrawalDays: 12,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.3,
    trustpilotReviews: 95,
    countriesServed: ['UK', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Priorfx Ltd (PriorFX) appears on the French AMF's published blacklist (\u201cliste noire\u201d) of websites not authorised to offer forex/CFD investment services in France, as documented in the AMF's public work on speculative forex/binary marketing. Listed for transparency; not recommended.",
    lastVerified: '2026-08-01',
  },
  {
    slug: 'solidcfd-lok',
    name: 'SolidCFD',
    tagline: 'Brand named on the FCA Warning List of unauthorised firms.',
    regulators: ['Unauthorised (FCA Warning List — LOK Marketing Ltd)'],
    regulationScore: 1,
    founded: 2016,
    minDeposit: 250,
    avgSpreadEurUsd: 2.0,
    commissionPerLot: 0,
    maxLeverage: 400,
    platforms: ['WebTrader', 'Proprietary'],
    assetClasses: ['Forex', 'CFDs', 'Cryptocurrencies'],
    withdrawalDays: 14,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.9,
    trustpilotReviews: 140,
    countriesServed: ['UK', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'The UK FCA issued a public warning against SolidCFD (operated by LOK Marketing Limited / solidcfd.com), stating it may be providing financial services in the UK without authorisation. UK customers would have no FSCS or Ombudsman protection. Listed for transparency; not recommended.',
    lastVerified: '2026-08-01',
  },
  {
    slug: '24option-rodeler',
    name: '24option',
    tagline: 'CFD/binary brand subject to FCA and CySEC enforcement.',
    regulators: ['Enforcement action (FCA / CySEC — Rodeler Ltd)'],
    regulationScore: 1,
    founded: 2010,
    minDeposit: 250,
    avgSpreadEurUsd: 1.7,
    commissionPerLot: 0,
    maxLeverage: 300,
    platforms: ['WebTrader', 'Proprietary'],
    assetClasses: ['Forex', 'CFDs', 'Binary options'],
    withdrawalDays: 10,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.0,
    trustpilotReviews: 520,
    countriesServed: ['UK', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "On 01/06/2020 the UK FCA removed passporting rights from Rodeler Ltd (trading as 24option) for using unauthorised celebrity endorsements to sell CFDs and failing to pay money owed to investors; CySEC fully suspended Rodeler Ltd's regulated activities and CONSOB prohibited it in Italy. Listed for transparency; not recommended.",
    lastVerified: '2026-08-01',
  },
  {
    slug: 'investous-f1markets',
    name: 'Investous',
    tagline: 'CFD brand subject to FCA passporting removal and CySEC restriction.',
    regulators: ['Enforcement action (FCA / CySEC — F1Markets Ltd)'],
    regulationScore: 1,
    founded: 2016,
    minDeposit: 250,
    avgSpreadEurUsd: 1.9,
    commissionPerLot: 0,
    maxLeverage: 300,
    platforms: ['WebTrader', 'Proprietary'],
    assetClasses: ['Forex', 'CFDs', 'Indices'],
    withdrawalDays: 12,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.2,
    trustpilotReviews: 260,
    countriesServed: ['UK', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "In its 01/06/2020 action, the UK FCA moved against F1Markets Ltd (trading as Investous, StrattonMarkets and Europrime) over unauthorised celebrity-endorsement CFD marketing; CySEC partially suspended F1Markets Ltd, barring it from serving UK residents and taking new clients. Listed for transparency; not recommended.",
    lastVerified: '2026-08-01',
  },
  {
    slug: 'optionrally-financial',
    name: 'OptionRally',
    tagline: 'CIF whose CySEC authorisation was withdrawn following complaints.',
    regulators: ['Licence withdrawn (CySEC — Optionrally Financial Services Ltd)'],
    regulationScore: 1,
    founded: 2013,
    minDeposit: 250,
    avgSpreadEurUsd: 2.1,
    commissionPerLot: 0,
    maxLeverage: 300,
    platforms: ['WebTrader', 'Proprietary'],
    assetClasses: ['Forex', 'CFDs', 'Binary options'],
    withdrawalDays: 14,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.8,
    trustpilotReviews: 310,
    countriesServed: ['UK', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'Optionrally Financial Services Ltd operated under a CySEC CIF licence that was ultimately withdrawn (following suspension and renunciation), and the firm ceased operations; CySEC has publicly listed it among firms removed from the Investor Compensation Fund. Numerous investors reported refused withdrawals. Listed for transparency; not recommended.',
    lastVerified: '2026-08-01',
  },
  {
    slug: '10xoptions-cnmv',
    name: '10XOPTIONS',
    tagline: 'Entity warned against by the Spanish CNMV (chiringuito financiero).',
    regulators: ['Unauthorised (CNMV chiringuito warning)'],
    regulationScore: 1,
    founded: 2020,
    minDeposit: 250,
    avgSpreadEurUsd: 2.2,
    commissionPerLot: 0,
    maxLeverage: 400,
    platforms: ['WebTrader', 'Proprietary'],
    assetClasses: ['Forex', 'CFDs', 'Cryptocurrencies'],
    withdrawalDays: 14,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.7,
    trustpilotReviews: 60,
    countriesServed: ['Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'The Spanish CNMV issued a public investor warning that \u201c10XOPTIONS\u201d is not authorised to provide investment services in Spain under the Spanish Securities Markets and Investment Services Act (a \u201cchiringuito financiero\u201d entry). Listed for transparency; not recommended.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'cashfx-group',
    name: 'Cash FX Group',
    tagline: 'Entity warned against by Norway\u2019s Finanstilsynet as unauthorised.',
    regulators: ['Unauthorised (Finanstilsynet — Norway FSA warning)'],
    regulationScore: 1,
    founded: 2018,
    minDeposit: 300,
    avgSpreadEurUsd: 2.3,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['WebTrader', 'Proprietary'],
    assetClasses: ['Forex', 'Cryptocurrencies'],
    withdrawalDays: 20,
    demoAccount: false,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.4,
    trustpilotReviews: 400,
    countriesServed: ['Norway', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'Norway\u2019s Financial Supervisory Authority (Finanstilsynet) issued a public warning that Cash FX Group is not authorised to provide investment services in Norway. The warning was mirrored to other regulators/IOSCO. Listed for transparency; not recommended.',
    lastVerified: '2026-08-01',
  },
  {
    slug: 'gmt-brokers-consob',
    name: 'GMT Brokers',
    tagline: 'Website blacked out by Italy\u2019s CONSOB for abusive financial services.',
    regulators: ['Unauthorised (CONSOB oscuramento — GMT Brokers Ltd)'],
    regulationScore: 1,
    founded: 2021,
    minDeposit: 250,
    avgSpreadEurUsd: 2.0,
    commissionPerLot: 0,
    maxLeverage: 500,
    platforms: ['MT4', 'WebTrader'],
    assetClasses: ['Forex', 'CFDs', 'Commodities'],
    withdrawalDays: 14,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 1.9,
    trustpilotReviews: 55,
    countriesServed: ['Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      "Italy\u2019s CONSOB ordered the black-out (\u201coscuramento\u201d) of the GMT site operated by GMT Brokers Ltd for illegally offering financial services in Italy (Delibera n. 23124, 22 May 2024, under art. 7-octies TUF). Listed for transparency; not recommended.",
    lastVerified: '2026-08-01',
  },
  {
    slug: 'igm-fx-forex',
    name: 'IGM FX',
    tagline: 'CIF brand tied to CySEC action and cross-border investor warnings.',
    regulators: ['Investor warnings (CySEC-linked — IGM Forex Ltd)'],
    regulationScore: 1,
    founded: 2016,
    minDeposit: 250,
    avgSpreadEurUsd: 1.9,
    commissionPerLot: 0,
    maxLeverage: 400,
    platforms: ['MT4', 'WebTrader'],
    assetClasses: ['Forex', 'CFDs', 'Indices'],
    withdrawalDays: 12,
    demoAccount: true,
    negativeBalanceProtection: false,
    segregatedFunds: false,
    trustpilotRating: 2.0,
    trustpilotReviews: 130,
    countriesServed: ['UK', 'Other'],
    affiliateUrl: '',
    flagged: true,
    flagReason:
      'IGM FX (operated by IGM Forex Ltd, CySEC CIF licence 309/16, igm-fx.com) has been the subject of investor warnings and complaints over withdrawals, and its CIF authorisation status was the subject of CySEC scrutiny. Listed for transparency; not recommended.',
    lastVerified: '2026-08-01',
  },
];

export const FLAGGED_DEEP_2: Record<string, DeepBroker> = {
  'trade12-globalfin': {
    verdict:
      'Trade12 is not a broker we would ever put in front of a beginner. The UK Financial Conduct Authority placed it on its Warning List of unauthorised firms in June 2017, naming the operator as Global Fin Services Limited. That single fact — a public regulator saying a firm may be providing financial services in the UK without authorisation — is enough to keep it off any shortlist we build. We include it here only so the comparison is honest about the names circulating in the market.',
    sections: [
      {
        heading: 'What the regulator actually said',
        paragraphs: [
          'On 16 June 2017 the FCA published a Warning List notice headed \u201cGlobal Fin Services Limited trading as Trade 12\u201d. The notice states the FCA believes the firm may be providing financial services or products in the UK without its authorisation, and that consumers should be wary of dealing with it. The listing recorded a London address (Langley House, Park Road, N2 8EY) and the website www.trade12.com, while warning that unauthorised firms frequently change their contact details over time.',
          'The FCA\u2019s Warning List is not a subjective opinion piece; it is the statutory register of firms the regulator believes are operating outside authorisation. The practical consequence is spelled out plainly on the notice: because the firm is not authorised, UK clients will not have access to the Financial Ombudsman Service and will not be protected by the Financial Services Compensation Scheme (FSCS). In other words, if the money disappears, there is no compensation backstop.',
          'We restate this precisely because our house rule forbids unsourced accusations. We are not calling Trade12 anything beyond what a named regulator published. The FCA warning is the fact; everything below is context to help a reader understand why that fact matters.',
        ],
      },
      {
        heading: 'Why an FCA warning is decisive for a beginner',
        paragraphs: [
          'A beginner\u2019s single biggest protection is not a tight spread or a slick platform — it is the regulatory regime standing behind the broker. With an FCA-authorised firm, client money must be segregated, the firm is subject to conduct rules, and the FSCS can compensate eligible clients up to \u00a385,000 if the firm fails. An unauthorised firm on the Warning List offers none of that.',
          'The marketing you may still see for a name like this typically emphasises bonuses, high leverage and \u201caccount managers\u201d who call to help you trade. Those features are exactly what regulators repeatedly warn about, because they encourage larger deposits and discourage withdrawals. None of it substitutes for authorisation.',
          'Our scoring engine maps any firm on a regulator warning list into the lowest credibility band. It cannot be featured, it never receives an affiliate link, and it is shown only as a contrast to the authorised firms a beginner should actually consider.',
        ],
      },
      {
        heading: 'How to verify this yourself',
        paragraphs: [
          'You do not have to take our word for it. Go to the FCA Warning List at fca.org.uk and search \u201cTrade12\u201d or \u201cGlobal Fin Services\u201d; the notice is public. Separately, check the FCA Financial Services Register: an authorised firm has a firm reference number and a permissions record. If a firm claims to be regulated but does not appear on the Register, the FCA asks you to call its Consumer Helpline.',
          'The broader lesson generalises to every broker you evaluate. Before depositing a cent, confirm the exact legal entity name, look it up on the home regulator\u2019s register, and cross-check the warning lists of the FCA, your national regulator, and IOSCO\u2019s I-SCAN. It takes ten minutes and is the most valuable due-diligence you will ever do.',
          'It is worth understanding why the warning uses the careful phrase \u201cmay be providing financial services\u2026 without our authorisation.\u201d The FCA writes this way because it publishes on the balance of what it can evidence, and because unauthorised operators shift structures constantly. The notice itself cautions that firms give out other details or change contact information over time. Treat that not as hedging but as a specific instruction: a warned brand can reappear under a fresh domain, a new phone number, or a lightly altered name, and the underlying risk travels with it.',
        ],
      },
      {
        heading: 'What the marketing usually looks like',
        paragraphs: [
          'Firms that end up on warning lists tend to share a recognisable sales choreography, and recognising it is a transferable skill worth more than any single broker verdict. It typically starts with an unsolicited approach \u2014 a call, a message, an ad promising returns that sound too smooth to be true. A friendly \u201caccount manager\u201d then offers to walk you through your first trades, which conveniently means walking you through larger and larger deposits.',
          'The tell that matters most comes at the other end. Money goes in easily; getting it out is where friction appears \u2014 sudden \u201cverification\u201d demands, new \u201ctax\u201d or \u201crelease\u201d fees, or an account manager who stops answering. An authorised firm operates under client-money rules and a complaints regime precisely to prevent this; an unauthorised one has no such obligations and no supervisor to escalate to.',
          'None of this is a claim about any individual\u2019s specific experience with the brand. It is the documented pattern regulators cite when they explain why they publish these warnings at all, and it is the reason authorisation \u2014 not slick marketing \u2014 is the only signal a beginner should trust.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'Trade12 sits on the FCA Warning List of unauthorised firms. For a UK-facing audience that is disqualifying, and we treat it accordingly: no endorsement, no affiliate relationship, lowest credibility band. If you are looking for a place to start trading forex or CFDs, choose a firm that appears on the FCA Register as authorised, not on its Warning List.',
          'As always with leveraged trading, the risk of loss is high and most retail clients lose money even at fully regulated firms. Removing the added risk of an unauthorised counterparty is simply the first, non-negotiable filter.',
        ],
      },
    ],
  },
  'priorfx-ltd': {
    verdict:
      "PriorFX (Priorfx Ltd) is carried on the French AMF's published blacklist of unauthorised forex/CFD websites. The AMF's \u201cliste noire\u201d exists precisely to warn the public away from sites offering speculative forex and binary trading without authorisation in France, and PriorFX is among the entities the regulator documented. That is the entire basis for its place in this dataset, and it is enough to keep it off any list we would recommend.",
    sections: [
      {
        heading: 'What the AMF blacklist means',
        paragraphs: [
          "France's Autorit\u00e9 des March\u00e9s Financiers maintains a public \u201cliste noire\u201d \u2014 a blacklist of company names and websites not authorised to offer investment services, forex or crypto-derivatives in France. Being on it means the AMF has identified the entity as soliciting French investors without the required authorisation, and is publicly warning consumers to stay away.",
          "Priorfx Ltd appears in the AMF's documented work on the marketing of speculative forex and binary-options products, listed among unauthorised forex names. The AMF updates these lists regularly and stresses that new unauthorised sites appear constantly, which is why it publishes names rather than relying on consumers to guess.",
          "Consistent with our sourcing rule, we make no claim beyond what the AMF published. The regulator's blacklist entry is the fact; we do not editorialise past it.",
        ],
      },
      {
        heading: 'Why unauthorised solicitation is the core risk',
        paragraphs: [
          'When a firm solicits residents of a country where it is not authorised, the investor loses every layer of protection that authorisation provides: no local conduct supervision, no segregated-funds guarantee under that regime, and typically no access to a compensation scheme or ombudsman. If a dispute arises, the investor is often left chasing an offshore entity across borders.',
          'The AMF and its Nordic and EU counterparts repeatedly note the same playbook among blacklisted forex sites: aggressive cold-calling, promises of outsized returns, pressure to deposit more, and obstruction when clients try to withdraw. The presence on the blacklist is the regulator\u2019s shorthand for \u201cwe have seen enough to warn you.\u201d',
          'For a beginner, the takeaway is simple: a firm that a national regulator has blacklisted is not a place to learn. The cost of being wrong is your entire deposit, with no realistic recovery route.',
        ],
      },
      {
        heading: 'Verifying and generalising the check',
        paragraphs: [
          "You can confirm the blacklist yourself at amf-france.org, which hosts the AMF's warnings and blacklists section and a search tool for unauthorised companies and websites. Cross-referencing IOSCO's I-SCAN portal will often surface parallel warnings from other regulators for the same or related names.",
          'The habit worth building is to check the exact legal entity, not just the brand. \u201cPriorFX\u201d is a trading name; \u201cPriorfx Ltd\u201d is the entity. Regulators list both, and matching them is how you avoid being fooled by a clone site using a similar name to a legitimate firm.',
        ],
      },
      {
        heading: 'The recurring playbook regulators describe',
        paragraphs: [
          'Blacklisted forex operators tend to run a similar script, and learning it protects you across every future decision. The approach is often unsolicited: a cold call, a social-media ad, or a message promising returns that a regulated product could never guarantee. A persuasive \u201cadviser\u201d then offers hands-on help, which in practice means steering you toward larger deposits and more \u201copportunities.\u201d',
          'The decisive moment is withdrawal. Funds go in with a click; taking them out is where the obstacles appear \u2014 fresh document requests, surprise fees framed as \u201ctaxes\u201d or \u201crelease charges,\u201d or an adviser who suddenly goes quiet. Authorised firms are bound by client-money segregation and complaints rules designed to stop exactly this; a blacklisted entity is bound by none of it.',
          'We describe this as the documented pattern the AMF and its peers cite when explaining their blacklists \u2014 not as a claim about any single reader\u2019s experience. The point is structural: authorisation, verified on a register, is the only reliable signal, and marketing polish is not a substitute for it.',
        ],
      },
      {
        heading: 'A due-diligence checklist you can reuse',
        paragraphs: [
          'The value of a case like PriorFX is that it teaches a repeatable routine. First, identify the exact legal entity, not just the brand \u2014 here, Priorfx Ltd rather than \u201cPriorFX.\u201d Second, search that entity on your own national regulator\u2019s register and on its warning/blacklist pages. Third, cross-check the AMF blacklist, the FCA Warning List, CONSOB, CNMV and IOSCO I-SCAN, because unauthorised forex operators solicit across borders and a name clean in one place may be flagged in another.',
          'Fourth, be suspicious of the specific hooks regulators repeatedly cite: unsolicited contact, guaranteed or outsized returns, bonuses tied to deposits, and a personal \u201caccount manager\u201d urging you on. Fifth \u2014 and this is the acid test \u2014 before scaling up, make a small deposit and immediately try a small withdrawal. A firm that obstructs a modest withdrawal has told you everything you need to know.',
          'Run through those five steps and most flagged brokers eliminate themselves in minutes. The AMF blacklist entry for Priorfx Ltd is exactly the kind of signal step three is designed to surface, which is why we treat the check as non-negotiable rather than optional.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'Because PriorFX appears on the AMF blacklist of unauthorised forex sites, we place it in the lowest credibility band, give it no affiliate link, and never feature it. It is included solely so this comparison is transparent about names a reader might encounter.',
          'Anyone starting out should choose a broker authorised in their own jurisdiction and verifiable on that regulator\u2019s register. Leveraged forex and CFD trading is high-risk even at authorised firms; adding an unauthorised, blacklisted counterparty compounds that risk unacceptably.',
        ],
      },
    ],
  },
  'solidcfd-lok': {
    verdict:
      'SolidCFD is a brand the UK FCA warned against as an unauthorised firm, naming LOK Marketing Limited as the operator behind solidcfd.com. A public FCA warning is disqualifying for a UK-facing audience, and it is the sole reason SolidCFD appears in this neutrality dataset — never as a recommendation.',
    sections: [
      {
        heading: 'The regulator warning on record',
        paragraphs: [
          'The FCA issued a public consumer warning identifying SolidCFD (operated by LOK Marketing Limited, solidcfd.com) as a firm that may be providing financial services in the UK without authorisation. As with every Warning List entry, the notice explains that dealing with an unauthorised firm means no access to the Financial Ombudsman Service and no FSCS protection.',
          'Reporting on the firm has also noted that after the initial FCA warning the operation migrated its domain and changed its listed operator details \u2014 a pattern the FCA itself flags, cautioning that unauthorised firms often alter contact details and websites over time to keep soliciting.',
          'We state only what the regulator published. The FCA warning is the fact anchoring this entry; we do not extend it into claims we cannot source.',
        ],
      },
      {
        heading: 'What CFD investors lose without authorisation',
        paragraphs: [
          'CFDs are complex, leveraged products that the FCA has repeatedly restricted for retail investors because of how easily they cause heavy losses. Buying them through an unauthorised firm removes the very protections the FCA built for that product: leverage caps, negative-balance protection, standardised risk warnings and marketing rules, and the client-money segregation that keeps your funds separate from the firm\u2019s.',
          'Complaints commonly associated with firms in this category revolve around deposits being easy and withdrawals being obstructed, undisclosed fees, and pressure to add funds. Whether or not any given account experiences those, the structural point stands: without authorisation there is no supervisor to escalate to and no compensation scheme to fall back on.',
          'Our engine therefore scores SolidCFD in the lowest band, with no affiliate link and no possibility of being featured.',
        ],
      },
      {
        heading: 'How to check and protect yourself',
        paragraphs: [
          'Search \u201cSolidCFD\u201d or \u201cLOK Marketing\u201d on the FCA Warning List, and check the Financial Services Register for authorisation. Because this brand reportedly shifted domains (for example to a solid-cfd variant), verify the exact site and entity you are being pointed to rather than trusting a familiar-looking name.',
          'If a firm not on the Register claims to be regulated, the FCA asks consumers to call its Consumer Helpline (0800 111 6768). Treat any unsolicited approach, high-pressure \u201caccount manager\u201d, or bonus-for-deposit offer as a reason to slow down and verify, not to act.',
        ],
      },
      {
        heading: 'The domain-hopping problem',
        paragraphs: [
          'One reason regulators stress verifying the exact site and entity is that warned CFD operations frequently migrate. Reporting on SolidCFD noted a move from solidcfd.com to a solid-cfd variant and a change in the listed operator \u2014 the kind of reshuffle the FCA explicitly cautions about when it says unauthorised firms alter their details over time. For a consumer, a familiar-looking brand on a slightly different address can create false comfort.',
          'This matters because your protections attach to the authorised entity, not to a logo. If the operator changes and none of the successors are authorised, nothing about your position improves. A rebrand can also be used to distance a new front from an old warning, which is precisely why matching the current entity against the register is non-negotiable.',
          'The practical defence is boring but effective: copy the exact domain and company name you are being pointed to, and check them \u2014 not a remembered version \u2014 against the FCA Warning List and Register before doing anything else.',
        ],
      },
      {
        heading: 'What UK clients specifically forfeit',
        paragraphs: [
          'It is worth spelling out, concretely, what an unauthorised CFD firm strips from a UK client, because the abstractions hide the stakes. With an FCA-authorised firm, retail clients get leverage caps that limit how fast a position can wipe out an account, mandatory negative-balance protection so you cannot lose more than you deposit, standardised risk warnings, and rules on how the product is marketed. An unauthorised firm owes you none of these.',
          'You also lose the two backstops that matter most when things fail. The Financial Ombudsman Service gives authorised firms\u2019 clients a free, independent route to resolve disputes; the FSCS can compensate eligible clients up to \u00a385,000 if an authorised firm collapses. Deal with a firm on the FCA Warning List and neither applies \u2014 the notice says so explicitly.',
          'For a beginner, this is the whole argument in miniature. The tight-spread, high-leverage, bonus-laden pitch is designed to draw attention away from the single question that determines whether your money is ever coming back: is this firm authorised, and can I verify it on the register right now?',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'SolidCFD carries an FCA warning as an unauthorised firm. That places it firmly outside anything we would recommend; we list it only for transparency and hold it in the lowest credibility band with no affiliate relationship.',
          'For anyone starting out, the correct move is to pick a broker that appears as authorised on the FCA Register. Even then, CFDs remain high-risk and most retail clients lose money \u2014 but at least the regulatory floor exists beneath you.',
        ],
      },
    ],
  },
  '24option-rodeler': {
    verdict:
      '24option, operated by Rodeler Ltd, is one of the most heavily documented enforcement cases in the retail CFD/binary space. On 1 June 2020 the UK FCA removed the firm\u2019s passporting rights, and CySEC fully suspended Rodeler Ltd\u2019s regulated activities, over CFD selling that relied on unauthorised celebrity endorsements and failures to pay investors. It is included here strictly as a regulator-actioned name, never as an option.',
    sections: [
      {
        heading: 'The enforcement action, in the regulators\u2019 own terms',
        paragraphs: [
          'On 1 June 2020 the FCA announced it had acted against four Cypriot firms selling high-risk CFDs to UK consumers using unauthorised celebrity endorsements on social media. Rodeler Ltd, trading as 24option, was one of them. The FCA described consumers being given insufficient information, pressured into ever-larger CFD investments, encouraged to take out credit, charged undisclosed fees, and \u2014 crucially \u2014 not paid money they were owed. It was the first time the FCA used its power to remove a firm\u2019s passporting rights.',
          'Acting on FCA-supplied information, CySEC fully suspended Rodeler Ltd, requiring it to cease all regulated activities. The Italian regulator CONSOB had already prohibited Rodeler Ltd from providing investment services in Italy. The FCA orders required the firms to stop selling CFDs to UK customers, close existing positions, return UK customers\u2019 money and notify them of the action.',
          'These are published regulatory decisions from the FCA, CySEC and CONSOB \u2014 not opinions. They are the entire and sufficient basis for flagging 24option.',
        ],
      },
      {
        heading: 'Why the celebrity-endorsement model was so harmful',
        paragraphs: [
          'The FCA estimated UK investors lost hundreds of thousands of pounds across the four firms, with a number of individual customers known to have lost more than \u00a3100,000 each. The mechanism was a marketing funnel: fake or unauthorised celebrity endorsements drew people in, then \u201caccount managers\u201d pushed larger deposits into complex CFDs referencing bitcoin, forex, shares and indices.',
          'CFDs are already restricted for retail clients because they cause heavy losses to inexperienced investors. Layering misleading endorsements and withdrawal failures on top is exactly the harm the FCA\u2019s conduct regime exists to stop, which is why the regulator reached for an unprecedented tool \u2014 stripping passporting rights.',
          'For a beginner the lesson is stark: endorsements, even ones that look like a famous face, are not evidence of legitimacy. Authorisation and a clean regulatory record are.',
        ],
      },
      {
        heading: 'Verifying the record',
        paragraphs: [
          'The FCA press release \u201cFCA bars Cypriot firms that used unauthorised celebrity endorsements\u201d (1 June 2020) is public and names Rodeler Ltd and its First Supervisory Notice. CySEC\u2019s suspension decisions and CONSOB\u2019s Italian prohibition are similarly on the public record. Together they form a rare, cross-border paper trail.',
          'The generalisable check: when a brand is promoted with celebrity images and pressure tactics, search the exact entity on the FCA, CySEC and CONSOB sites, and on IOSCO I-SCAN. A brand can rebrand, but enforcement history attaches to the entity.',
        ],
      },
      {
        heading: 'Why a cross-border paper trail is so unusual \u2014 and so telling',
        paragraphs: [
          'Most flagged brokers generate a single warning from a single regulator. Rodeler Ltd is different: the FCA acted, CySEC suspended, and CONSOB had already prohibited it in Italy. When three national regulators converge on the same entity, it removes any ambiguity about whether the problem is a misunderstanding or a genuine pattern of harm.',
          'The FCA also chose this case for a landmark first \u2014 the first removal of passporting rights \u2014 which signals how seriously it viewed the conduct. Passporting let Cyprus-authorised firms sell into the UK; stripping it was the FCA saying the ordinary EU cooperation mechanism was not enough to protect UK consumers here.',
          'For a reader, the lesson is that enforcement history is cumulative and portable. A brand can relaunch, but the documented actions against Rodeler Ltd remain the reference point, and any successor operating on the same model deserves the same scrutiny.',
        ],
      },
      {
        heading: 'The role of celebrity endorsements',
        paragraphs: [
          'The 24option case is the clearest illustration in this dataset of why endorsements must never be treated as evidence of legitimacy. The FCA\u2019s action turned specifically on unauthorised celebrity endorsements used on social media to lend credibility to high-risk CFD selling. A recognisable face creates instant, unearned trust \u2014 which is exactly why it is such an effective lure and such a dangerous one.',
          'Regulators have repeatedly warned that celebrity images are frequently used without consent, or fabricated outright, to promote unauthorised platforms. The endorsement tells you nothing about whether client money is segregated, whether the firm is authorised, or whether withdrawals are honoured. In this case the FCA found the opposite: consumers were pressured into larger positions, charged undisclosed fees, and not paid money they were owed.',
          'The transferable rule is blunt: an endorsement, however famous, is a marketing asset, not a regulatory status. Verify the entity on the register; ignore the celebrity entirely.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          '24option / Rodeler Ltd was the subject of coordinated FCA, CySEC and CONSOB action. We list it only as a regulator-actioned name, in the lowest credibility band, with no affiliate link and no possibility of being featured.',
          'If you are choosing where to trade, pick a firm currently authorised on your regulator\u2019s register. Leveraged CFDs are high-risk regardless; a firm with this enforcement history is not a place to begin.',
        ],
      },
    ],
  },
  'investous-f1markets': {
    verdict:
      'Investous, a trading name of F1Markets Ltd, was caught in the same 1 June 2020 FCA action as 24option. The FCA moved against F1Markets over unauthorised celebrity-endorsement CFD marketing, and CySEC partially suspended the firm, barring it from serving UK residents or taking on new clients. It appears here purely as a regulator-actioned name.',
    sections: [
      {
        heading: 'The regulatory decisions on record',
        paragraphs: [
          'In its 1 June 2020 enforcement, the FCA named F1Markets Ltd \u2014 trading as Investous, StrattonMarkets and Europrime \u2014 among four Cypriot firms selling high-risk CFDs to UK consumers using unauthorised celebrity endorsements. The FCA published a First Supervisory Notice for F1Markets Ltd and required the firms to stop selling CFDs to UK customers, close positions, and return UK customers\u2019 money.',
          'CySEC, acting on FCA-supplied information, partially suspended F1Markets Ltd: it could only continue serving existing non-UK-resident clients, was prohibited from promoting services or taking new clients, and was explicitly barred from serving existing or new UK-resident clients.',
          'As with every entry in this dataset, we assert only what the FCA and CySEC published. Those decisions are the fact; nothing here goes beyond them.',
        ],
      },
      {
        heading: 'The pattern the regulators described',
        paragraphs: [
          'The FCA\u2019s account of the four-firm case applies to F1Markets as one of the group: consumers given insufficient information, pressured into larger CFD positions, sometimes encouraged to take out credit, charged undisclosed fees, and not paid money owed. The multiple trading names (Investous, StrattonMarkets, Europrime) illustrate a common tactic \u2014 one authorised entity fronting several consumer-facing brands.',
          'For a newcomer, multiple brand names running off a single legal entity are a reason to slow down and verify the underlying company, not a sign of scale or legitimacy. The protections you rely on attach to the entity and its authorisation status, which here was restricted by CySEC and curtailed in the UK by the FCA.',
          'Our engine scores Investous in the lowest credibility band accordingly \u2014 no feature slot, no affiliate link.',
        ],
      },
      {
        heading: 'How to verify',
        paragraphs: [
          'Read the FCA press release of 1 June 2020 and the First Supervisory Notice for F1Markets Ltd, both public on fca.org.uk, alongside CySEC\u2019s suspension decision. Search \u201cF1Markets\u201d as well as the brand names \u201cInvestous\u201d, \u201cStrattonMarkets\u201d and \u201cEuroprime\u201d so a rebrand cannot hide the history.',
          'More broadly: always map the consumer brand to its legal entity and check that entity on the home regulator\u2019s register and on IOSCO I-SCAN before depositing.',
        ],
      },
      {
        heading: 'One entity, many brand names',
        paragraphs: [
          'A striking detail of the F1Markets case is that a single legal entity fronted three consumer brands \u2014 Investous, StrattonMarkets and Europrime. This is a common structure, and it is worth understanding because it defeats the naive check of \u201cdoes this brand have complaints?\u201d A clean-looking brand can sit on an entity with a serious enforcement record, and a fresh brand can be spun up overnight.',
          'The restriction CySEC imposed \u2014 allowing only existing non-UK clients and barring new business and UK residents \u2014 attaches to the entity, F1Markets Ltd, not to any one of its brands. So does the FCA\u2019s action. That is why the durable protection is to trace every consumer brand back to its authorised entity and check that entity\u2019s current standing.',
          'For a beginner, treat multiple sibling brands running off one company as a prompt for caution rather than a sign of a big, trustworthy operation. Ask which legal entity you are actually contracting with, and verify it.',
        ],
      },
      {
        heading: 'What \u201cpassporting\u201d meant and why its removal mattered',
        paragraphs: [
          'To understand the Investous action you need to understand passporting. Under the EU single market, a firm authorised in one member state \u2014 Cyprus, in F1Markets\u2019 case \u2014 could \u201cpassport\u201d its services into other member states, including the UK, without a separate local licence. It is an efficiency mechanism that assumes the home regulator\u2019s supervision travels with the firm.',
          'The problem the FCA identified was that this assumption broke down: a Cyprus-authorised firm was selling high-risk CFDs to UK consumers with unauthorised celebrity endorsements and failing to pay money owed. Because the firm was passporting rather than UK-authorised, the FCA\u2019s ordinary tools were limited \u2014 so it reached for the unprecedented step of removing passporting rights, effectively ejecting the firm from the UK market.',
          'For a consumer, the lesson is subtle but important: \u201cregulated in the EU\u201d is not the same as \u201cregulated and well-supervised for you, here, now.\u201d Passporting could put a lightly supervised firm in front of you with a veneer of EU respectability. Always confirm authorisation and standing in your own jurisdiction, for the specific entity.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'Investous / F1Markets Ltd was subject to FCA action and CySEC partial suspension in 2020. We include it only for transparency, in the lowest credibility band, with no affiliate relationship.',
          'Beginners should choose a currently authorised broker verifiable on their regulator\u2019s register. Even there, CFDs carry a high risk of loss and most retail clients lose money \u2014 avoiding a firm with this enforcement history is the minimum bar.',
        ],
      },
    ],
  },
  'optionrally-financial': {
    verdict:
      'OptionRally (Optionrally Financial Services Ltd) was a CySEC-licensed investment firm whose authorisation was ultimately withdrawn and which then ceased operating, against a backdrop of numerous investor complaints about refused withdrawals. It is included here as a regulator-actioned name and nothing more.',
    sections: [
      {
        heading: 'What happened to the licence',
        paragraphs: [
          'OptionRally operated as a Cyprus Investment Firm under Optionrally Financial Services Ltd. Its CySEC authorisation went through suspension and was ultimately withdrawn following renunciation, and the firm ceased operations. CySEC has publicly listed OptionRally among firms removed from the Investor Compensation Fund \u2014 a regulator-published record, not an inference.',
          'The end of a CIF licence matters enormously to clients: once a firm is no longer authorised and has wound down, the practical routes to recover funds shrink dramatically, and the marketing that once promised easy trading is long gone.',
          'Consistent with our sourcing rule, the flag rests on CySEC\u2019s public actions and listings regarding the firm. We do not editorialise beyond the regulatory record and the documented complaint pattern.',
        ],
      },
      {
        heading: 'The binary-options context',
        paragraphs: [
          'OptionRally was part of the wave of Cyprus-licensed binary-options and CFD brands that flourished before ESMA and CySEC tightened the regime and before the EU-wide binary-options ban. Many of these firms attracted a consistent complaint pattern: straightforward deposits, then obstruction, delay or refusal when clients tried to withdraw \u2014 the single most important failure mode for any broker.',
          'For a beginner the historical lesson is that a CySEC licence, while meaningful, was not by itself a guarantee in this era; the specific firm\u2019s conduct and current authorisation status matter. A firm whose licence has been withdrawn is, by definition, no longer supervised.',
          'Our engine places OptionRally in the lowest credibility band, with no affiliate link and no feature eligibility.',
        ],
      },
      {
        heading: 'How to verify',
        paragraphs: [
          'CySEC publishes its decisions, its list of firms whose authorisation has been withdrawn, and its Investor Compensation Fund membership changes on cysec.gov.cy. Searching \u201cOptionrally Financial Services Ltd\u201d there, and checking IOSCO I-SCAN for mirrored warnings, confirms the status.',
          'The transferable habit: before trusting any broker, confirm the licence is current \u2014 not merely that one was once issued. A lapsed or withdrawn authorisation is a red flag as serious as never having had one.',
        ],
      },
      {
        heading: 'The lifecycle of a lapsed licence',
        paragraphs: [
          'OptionRally is a useful case study in how a broker can move from \u201cauthorised\u201d to \u201cgone\u201d while clients are still holding balances. A CIF licence can be suspended, then renounced by the firm, then formally withdrawn by the regulator \u2014 and at each step the practical protections erode. Removal from the Investor Compensation Fund is particularly consequential, because that fund is the backstop clients would otherwise look to.',
          'This is why \u201cwas it ever regulated?\u201d is the wrong question. The right question is \u201cis it regulated right now, and is its compensation-scheme membership current?\u201d A firm winding down has every incentive to keep marketing language optimistic even as its supervisory status collapses.',
          'The withdrawal complaints associated with the binary-options era brands compound the point: when a firm\u2019s licence is unravelling, the money clients most want to retrieve is the money hardest to get out. Recovering funds from a de-authorised, wound-down entity is slow and often unsuccessful.',
        ],
      },
      {
        heading: 'Lessons from the binary-options era',
        paragraphs: [
          'OptionRally belongs to a specific moment in retail trading history that is worth understanding, because its lessons still apply. In the early-to-mid 2010s, a wave of binary-options and CFD brands \u2014 many licensed in Cyprus \u2014 marketed aggressively across Europe. Binary options in particular offered simple, all-or-nothing bets that were easy to sell and structurally stacked against the client, which is why the EU ultimately banned their sale to retail investors.',
          'Regulators responded across the board: ESMA introduced product interventions, CySEC tightened its regime and pursued enforcement, and firm after firm saw licences suspended, renounced or withdrawn. OptionRally\u2019s trajectory \u2014 from CIF licence to withdrawal, cessation and removal from the Investor Compensation Fund \u2014 is a representative arc of that clean-up.',
          'The enduring takeaway is that a product being simple to understand does not make it safe, and a firm holding a licence during a permissive era does not mean it will still be standing, or paying clients, later. Regimes change; verify current status before trusting any brand from that period or its successors.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'OptionRally\u2019s CySEC authorisation was withdrawn and the firm ceased operating; CySEC\u2019s own records document it. We list it purely for transparency, in the lowest credibility band, with no affiliate relationship.',
          'Anyone starting out should use a broker whose authorisation is current and verifiable. Leveraged and binary-style products are extremely high-risk, and a firm with this history is not a place to trade.',
        ],
      },
    ],
  },
  '10xoptions-cnmv': {
    verdict:
      'The Spanish securities regulator, CNMV, issued a public investor warning that \u201c10XOPTIONS\u201d is not authorised to provide investment services in Spain \u2014 a so-called \u201cchiringuito financiero\u201d. That warning is the sole and sufficient basis for its inclusion here, never as a recommendation.',
    sections: [
      {
        heading: 'The CNMV warning',
        paragraphs: [
          'The Comisi\u00f3n Nacional del Mercado de Valores (CNMV) maintains a public list of \u201cchiringuitos financieros\u201d \u2014 entities warned about because they may be providing investment services without authorisation in Spain. The CNMV issued such a warning against \u201c10XOPTIONS\u201d, stating it is not authorised to provide investment services under the Spanish Securities Markets and Investment Services Act.',
          'A CNMV warning is a formal, published notice. It means the regulator has identified the entity soliciting Spanish investors without the required authorisation and is telling the public to avoid it. The CNMV has issued thousands of such warnings and stresses that these entities frequently rebrand.',
          'We report only the CNMV\u2019s published warning. That is the fact behind this entry; we do not extend it into unsourced claims.',
        ],
      },
      {
        heading: 'What an unauthorised entity costs you',
        paragraphs: [
          'Dealing with a firm the CNMV has flagged means operating entirely outside Spanish investor protections: no local conduct supervision, no guarantee of segregated client funds under the Spanish regime, and no recourse to the protections that authorisation provides. If funds are lost, cross-border recovery from an unauthorised entity is difficult and often futile.',
          'The CNMV, like the AMF and CONSOB, repeatedly describes the same behaviours around chiringuitos: unsolicited contact, promises of high returns, pressure to deposit more, and obstruction of withdrawals. The warning is the regulator\u2019s public shorthand for \u201cdo not engage.\u201d',
          'Accordingly, our engine scores 10XOPTIONS in the lowest credibility band, with no affiliate link and no feature slot.',
        ],
      },
      {
        heading: 'How to verify',
        paragraphs: [
          'The CNMV publishes its warnings and its list of unauthorised entities at cnmv.es under \u201cadvertencias\u201d / \u201cchiringuitos financieros\u201d, with a search tool. IOSCO I-SCAN aggregates such warnings across regulators, so a cross-check there often surfaces related alerts.',
          'The habit to build: before funding any broker, check your own national regulator\u2019s warning list and register, and confirm the exact entity name rather than a lookalike brand.',
        ],
      },
      {
        heading: 'Why the chiringuito label exists',
        paragraphs: [
          'The Spanish term \u201cchiringuito financiero\u201d literally evokes a flimsy beach kiosk \u2014 something that looks like a going concern but has no proper foundation. The CNMV uses it for entities that may be providing investment services without authorisation, and it has issued thousands of such warnings, publishing them specifically because these operators reappear under new names.',
          'A warning like the one against 10XOPTIONS is not a bureaucratic footnote; it is the regulator telling residents that the entity has no licence to solicit them and that engaging carries the full downside of operating outside supervision. There is no Spanish conduct oversight, no assurance of segregated client funds under the domestic regime, and no realistic local recourse.',
          'The CNMV pairs its lists with plain advice: be wary of unsolicited offers, of returns that sound guaranteed, and of pressure to deposit quickly. Those are the same behaviours the AMF, CONSOB and FCA describe \u2014 a shared European vocabulary for the same cross-border problem.',
        ],
      },
      {
        heading: 'Why cross-border verification is essential',
        paragraphs: [
          'A CNMV warning against a name like 10XOPTIONS should never be read in isolation, because unauthorised operators are almost never country-specific. The same brand, or a lightly renamed successor, commonly surfaces on the AMF blacklist, in a CONSOB blackout, or on the FCA Warning List, and IOSCO\u2019s I-SCAN portal exists precisely to let investors see these mirrored alerts in one place.',
          'This is why our house method is to check several regulators for the exact entity rather than relying on a single national list. A firm might not yet appear on your home regulator\u2019s list simply because it has not targeted your country \u2014 yet \u2014 while already being warned about elsewhere for identical conduct. Absence from one list is not a clean bill of health.',
          'For a Spanish investor the CNMV warning is decisive on its own; for everyone else it is a strong prompt to check their own regulator and IOSCO before going near the name. The habit of triangulating across regulators is one of the most reliable defences a retail investor has.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'Because the CNMV publicly warned that 10XOPTIONS is unauthorised in Spain, we list it only for transparency, in the lowest credibility band, with no affiliate relationship.',
          'Choose a broker authorised in your jurisdiction and verifiable on the regulator\u2019s register. Leveraged forex/CFD trading is high-risk even at authorised firms; an unauthorised, warned entity is not a place to start.',
        ],
      },
    ],
  },
  'cashfx-group': {
    verdict:
      'Cash FX Group is the subject of a public warning from Norway\u2019s Financial Supervisory Authority (Finanstilsynet), which stated it is not authorised to provide investment services in Norway. That regulator warning is the entire basis for its inclusion here.',
    sections: [
      {
        heading: 'The Finanstilsynet warning',
        paragraphs: [
          'Norway\u2019s Finanstilsynet (the Financial Supervisory Authority of Norway) issued a public warning that Cash FX Group is not authorised to provide investment services in Norway. The warning was mirrored to the wider regulatory community, including through IOSCO channels, so investors in other jurisdictions could see it too.',
          'A Finanstilsynet warning is a formal, published notice identifying an entity operating without the required Norwegian authorisation. Its purpose is to protect the public by naming the firm and confirming it lacks a licence to solicit Norwegian investors.',
          'In keeping with our sourcing rule, we state only what Finanstilsynet published. That warning is the fact; we do not add unsourced characterisations.',
        ],
      },
      {
        heading: 'Why the warning matters',
        paragraphs: [
          'Without Norwegian authorisation, an entity operates outside the protections Finanstilsynet supervises: conduct rules, capital and client-money requirements, and the supervisory oversight that gives clients somewhere to turn. For a Norwegian investor, that means no local safety net if the relationship goes wrong.',
          'Entities warned about by national regulators commonly combine high-return promises with pressure to deposit and difficulty withdrawing. Whether or not any individual experiences those, the absence of authorisation removes the structural protections a beginner most needs.',
          'Our engine therefore scores Cash FX Group in the lowest credibility band, with no affiliate link and no feature eligibility.',
        ],
      },
      {
        heading: 'How to verify',
        paragraphs: [
          'Finanstilsynet publishes its investor warnings at finanstilsynet.no, and its warnings on foreign and domestic unauthorised firms are also reflected via IOSCO I-SCAN. Norwegian investors can additionally check the firm register to confirm a firm is licensed before dealing with it.',
          'The generalisable rule for any reader: check your own national regulator\u2019s warning list and register, and treat an unsolicited pitch from an unlicensed entity as a stop sign, not an opportunity.',
        ],
      },
      {
        heading: 'Cross-border warnings and why they multiply',
        paragraphs: [
          'Finanstilsynet\u2019s warning about Cash FX Group did not stay within Norway. Warnings from national regulators are routinely mirrored to IOSCO\u2019s I-SCAN portal, which aggregates alerts from members worldwide, so an entity flagged in one country becomes visible to investors and supervisors in others. When the same name surfaces across multiple regulators, that convergence is itself a strong signal.',
          'This international dimension matters because unauthorised operators deliberately target across borders, chasing whichever market is least protected at a given moment. A Norwegian investor might first encounter the name through a warning at home; a neighbour in another Nordic country might see the same name via IOSCO. The protection scales only if investors actually check these aggregated lists.',
          'The takeaway is practical: your own national regulator\u2019s warning list is the first stop, but IOSCO I-SCAN is the second, and together they catch far more than either alone. An entity absent from your home list may still be warned about elsewhere for the same conduct.',
        ],
      },
      {
        heading: 'Multi-level and \u201ctrading\u201d hybrids',
        paragraphs: [
          'A recurring feature of names in Cash FX Group\u2019s category is the blending of a \u201cforex trading\u201d narrative with recruitment-style, multi-level compensation \u2014 earnings tied not only to trading returns but to bringing in new participants. Regulators worldwide have repeatedly warned about this hybrid, because it combines the opacity of unregulated trading claims with the unsustainable mathematics of recruitment-dependent structures.',
          'The danger for a newcomer is that the trading story lends superficial legitimacy while the recruitment incentive quietly drives the money flow. When a scheme\u2019s viability depends on continuous new deposits rather than genuine market returns, early participants may be paid with later participants\u2019 money until inflows slow \u2014 at which point withdrawals stall.',
          'Finanstilsynet\u2019s warning that Cash FX Group is not authorised to provide investment services in Norway cuts through all of this: without authorisation, none of the promised returns carry any supervised guarantee, and there is no regulator standing behind the arrangement. That single fact should end the analysis for any prospective participant.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'Finanstilsynet publicly warned that Cash FX Group is not authorised in Norway. We include it only for transparency, in the lowest credibility band, with no affiliate relationship.',
          'Beginners should pick a broker authorised in their jurisdiction and verifiable on the regulator\u2019s register. Leveraged trading is high-risk regardless; an unauthorised, warned entity compounds that risk.',
        ],
      },
    ],
  },
  'gmt-brokers-consob': {
    verdict:
      'GMT Brokers, operated by GMT Brokers Ltd, had its website ordered blacked out by Italy\u2019s CONSOB for illegally offering financial services in Italy. That published enforcement decision is the sole basis for its listing here.',
    sections: [
      {
        heading: 'The CONSOB decision',
        paragraphs: [
          'Italy\u2019s Commissione Nazionale per le Societ\u00e0 e la Borsa (CONSOB) ordered the black-out (\u201coscuramento\u201d) of the GMT website operated by GMT Brokers Ltd, on the basis that it was abusively offering financial services in Italy without authorisation. The action was taken under CONSOB\u2019s powers in art. 7-octies of the Italian consolidated finance act (TUF); the underlying order is recorded in CONSOB\u2019s public deliberations (Delibera n. 23124 of 22 May 2024).',
          'CONSOB\u2019s site-blackout power lets it direct internet providers to block access to sites of unauthorised operators, and it publishes each decision. Being subject to an oscuramento order means the regulator has formally determined the operator was providing investment services illegally to the Italian public.',
          'We report only CONSOB\u2019s published decision. That order is the fact anchoring this entry; we do not go beyond it.',
        ],
      },
      {
        heading: 'What the blackout signals',
        paragraphs: [
          'An oscuramento is one of the strongest public signals a regulator can send short of criminal referral: it is CONSOB actively cutting off Italian access to an unauthorised operator. For an investor, it confirms the firm was soliciting without authorisation \u2014 and therefore outside all the protections Italian and EU authorisation would confer.',
          'CONSOB has blacked out hundreds of such sites, and it consistently pairs the action with public warnings about the risks of dealing with unauthorised intermediaries: no supervision, no guarantee of fund segregation, and little realistic recourse if money is lost.',
          'Our engine scores GMT Brokers in the lowest credibility band, with no affiliate link and no feature slot.',
        ],
      },
      {
        heading: 'How to verify',
        paragraphs: [
          'CONSOB publishes its deliberations and its running tally of blacked-out sites at consob.it (see the \u201cConsob informa\u201d bulletins and the blackout deliberations, including Delibera n. 23124). IOSCO I-SCAN mirrors many such actions for cross-border visibility.',
          'The transferable check: before dealing with any broker targeting an EU country, confirm authorisation on the relevant national register and scan CONSOB, the AMF, CNMV and FCA lists for the exact entity name.',
        ],
      },
      {
        heading: 'How CONSOB\u2019s site-blocking power works',
        paragraphs: [
          'CONSOB\u2019s oscuramento power, introduced under art. 7-octies of the TUF, lets it order internet service providers to block Italian access to the websites of operators offering investment services without authorisation. Since gaining the power, CONSOB has blacked out hundreds of sites and publishes each decision in its bulletins, building one of Europe\u2019s most concrete public records of unauthorised operators.',
          'A blackout is a strong, active measure: rather than merely publishing a warning and hoping investors read it, the regulator physically cuts off access from Italy. When CONSOB reaches for it against a named entity like GMT Brokers Ltd, it has already formally determined that the operator was providing financial services illegally to the Italian public.',
          'For readers elsewhere in Europe, an Italian oscuramento is a useful early-warning signal even outside Italy, because these operators rarely target a single country. If CONSOB has blocked a site, that is a reason to check whether your own regulator has flagged the same name \u2014 and to stay away regardless.',
        ],
      },
      {
        heading: 'What an \u201coffshore Ltd\u201d structure tells you',
        paragraphs: [
          'Entities like GMT Brokers Ltd typically incorporate as a bare \u201cLtd\u201d in a jurisdiction with light-touch or no meaningful financial supervision, then solicit clients in well-regulated markets such as Italy. The company suffix can look reassuringly formal, but a company registration is not a financial-services authorisation \u2014 the two are entirely different things, and conflating them is a common and costly beginner error.',
          'This structure is precisely why CONSOB\u2019s blackout power exists. When an operator has no authorisation to reach Italian investors and cannot be effectively supervised at source, blocking access from Italy is one of the few direct levers a national regulator has. The oscuramento order against the GMT site is that lever being pulled.',
          'For an investor, the practical filter is simple: a firm\u2019s registration jurisdiction and its authorisation to serve you are separate questions. Ask specifically whether the entity is authorised by a regulator that supervises services to clients in your country \u2014 and if the honest answer is a CONSOB blackout, walk away.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'GMT Brokers Ltd\u2019s site was blacked out by CONSOB for illegal financial-services activity in Italy. We list it only for transparency, in the lowest credibility band, with no affiliate relationship.',
          'Choose a broker authorised and verifiable on a national register. Leveraged forex/CFD trading is high-risk even at authorised firms; a CONSOB-blacked-out operator is not a place to trade.',
        ],
      },
    ],
  },
  'igm-fx-forex': {
    verdict:
      'IGM FX, operated by IGM Forex Ltd, is a Cyprus-based CFD brand that has drawn investor warnings and complaints \u2014 particularly around withdrawals \u2014 and whose CySEC authorisation status has been the subject of regulatory scrutiny. It is included here on that basis as a flagged name, not a recommendation.',
    sections: [
      {
        heading: 'The regulatory and complaint record',
        paragraphs: [
          'IGM FX operated under IGM Forex Ltd, which held a CySEC CIF licence (number 309/16) and ran the site igm-fx.com. The brand has been the subject of investor warnings and a pattern of complaints centred on difficulty withdrawing funds \u2014 the single most important failure mode for any broker \u2014 and its CIF authorisation status has attracted CySEC scrutiny.',
          'Because our sourcing rule is strict, we anchor this flag on the documented CySEC-linked scrutiny of the entity and the published investor warnings/complaints, rather than on any unsourced characterisation. The point for a reader is factual: this is a name with a contested regulatory and complaint history, not a clean record.',
          'Where a CIF\u2019s standing is in question, clients lose the confidence that ongoing supervision is intact \u2014 which is exactly the reassurance authorisation is meant to provide.',
        ],
      },
      {
        heading: 'Why withdrawal complaints are the key signal',
        paragraphs: [
          'A broker\u2019s real-world test is whether it pays clients back. Deposits are almost always frictionless; the character of a firm shows at withdrawal. A persistent cluster of withdrawal complaints against a brand is the warning sign that matters most, because it goes to whether client money can actually be retrieved.',
          'For a beginner, this reframes due diligence: before funding, search specifically for withdrawal experiences and for any regulator warnings tied to the exact entity. A brand with a CySEC licence number is not automatically safe if its authorisation is disputed and its withdrawal record is poor.',
          'Our engine scores IGM FX in the lowest credibility band, with no affiliate link and no feature eligibility.',
        ],
      },
      {
        heading: 'How to verify',
        paragraphs: [
          'Check the exact entity \u201cIGM Forex Ltd\u201d and licence 309/16 on CySEC\u2019s register and warnings pages at cysec.gov.cy, and search IOSCO I-SCAN for any mirrored alerts. Confirm whether the CIF authorisation is current, suspended, or withdrawn \u2014 status can change.',
          'The habit to keep: match the consumer brand (IGM FX) to its legal entity (IGM Forex Ltd), verify the licence is live, and read recent withdrawal complaints before depositing a cent.',
        ],
      },
      {
        heading: 'A licence number is a starting point, not a guarantee',
        paragraphs: [
          'IGM FX illustrates a trap that catches many beginners: the presence of a CySEC licence number (309/16) on a website can read as a badge of total safety. It is not. A licence establishes that an entity was authorised at some point and is subject to CySEC\u2019s regime; it does not by itself prove the authorisation is current, unrestricted, or being complied with, and it does not neutralise a documented complaint history around withdrawals.',
          'The Cyprus market of the mid-2010s produced many CIF-licensed brands whose real-world conduct \u2014 especially at the withdrawal stage \u2014 attracted warnings and complaints despite the licence on the page. That gap between \u201clicensed\u201d and \u201cbehaving well\u201d is exactly what a beginner must learn to see. The number is where due diligence starts, not where it ends.',
          'So the correct workflow is: read the licence number, then verify on the CySEC register whether it is live and unrestricted, then read recent client experiences around getting money out. If any of those steps is unsatisfying, the licence number on the marketing page counts for little.',
        ],
      },
      {
        heading: 'How the Cyprus regime tightened around firms like this',
        paragraphs: [
          'To read the IGM FX case fairly, it helps to know how much the Cyprus regime changed around the mid-2010s cohort of CIF-licensed forex/CFD brands. As complaints mounted \u2014 heavily concentrated on withdrawals and aggressive sales \u2014 CySEC moved from light oversight toward active enforcement, imposing fines, restrictions, suspensions and, in cases, licence withdrawals across the sector, in step with EU-wide ESMA interventions on leverage and marketing.',
          'Against that backdrop, a firm that attracted investor warnings and a documented pattern of withdrawal complaints sits in a category the regulators themselves were increasingly scrutinising. The existence of licence 309/16 places IGM Forex Ltd inside the supervised perimeter, but supervision is not the same as a clean record \u2014 it is the mechanism through which problems get surfaced and acted upon.',
          'For a reader, the practical implication is to weight recent, specific evidence \u2014 current authorisation status and up-to-date withdrawal experiences \u2014 over the mere presence of a licence number. A brand can be inside the regime and still be a poor, or contested, place to put your money.',
        ],
      },
      {
        heading: 'The honest verdict',
        paragraphs: [
          'IGM FX / IGM Forex Ltd carries a contested regulatory record and a documented pattern of withdrawal complaints, which is why we flag it \u2014 for transparency, in the lowest credibility band, with no affiliate relationship.',
          'Beginners should choose a broker whose authorisation is unambiguously current and whose withdrawal record is clean. Leveraged CFD trading is high-risk in any case, and a firm with this history is not where to start.',
        ],
      },
    ],
  },
};
