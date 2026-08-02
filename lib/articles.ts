/**
 * Editorial insight articles for trding.io.
 *
 * These are hand-written, primary-sourced, press-citable articles designed to
 * (a) rank for real informational queries and (b) act as "digital PR" landing
 * pages that journalists can cite — earning editorial backlinks. Every stat is
 * sourced to a regulator (FCA / ESMA / ASIC / CFTC). Authored by a named human
 * (Michael) for E-E-A-T. Rendered by app/insights/[slug]/page.tsx.
 */

export interface ArticleBlock {
  heading: string;
  /** Paragraphs of body prose. */
  paragraphs?: string[];
  /** Optional ordered list rendered after the paragraphs. */
  list?: string[];
  /** If true, the list is rendered as bullets; otherwise numbered. */
  bullets?: boolean;
}

export interface ArticleSource {
  label: string;
  url: string;
}

export interface Article {
  slug: string;
  title: string;
  /** SEO <title>, kept short. */
  seoTitle: string;
  /** Meta description. */
  description: string;
  datePublished: string;
  dateModified: string;
  /** One-paragraph, quotable summary shown near the top ("free to cite"). */
  summary: string;
  blocks: ArticleBlock[];
  /** The pull-quote offered to journalists, attributed to Michael. */
  citeQuote: string;
  sources: ArticleSource[];
}

export const ARTICLES: Article[] = [
  {
    slug: "trading-scams-fca-warning-list-red-flags",
    title:
      "Trading Scams and the FCA Warning List: 7 Red Flags — and How to Verify Any Broker in 2 Minutes",
    seoTitle: "Trading Scams & the FCA Warning List: 7 Red Flags",
    description:
      "18,000+ firms are on/around the FCA Warning List. Spot clone-firm scams with 7 red flags and verify any broker in 2 minutes on the FCA Register.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    summary:
      "More than 18,000 unauthorised and clone firms now sit on or around the UK regulator's public Warning List, and \u201cclone firm\u201d investment scams \u2014 where fraudsters impersonate genuine, FCA-authorised brokers \u2014 have already stripped victims of over \u00a378 million, with an average loss of \u00a345,242 each. The single most dangerous myth is that checking a firm's reference number \u201cproves\u201d it is real. It does not.",
    blocks: [
      {
        heading: "The scale of the problem",
        paragraphs: [
          "The Financial Conduct Authority (FCA) maintains a public Warning List of firms and individuals it believes are operating without authorisation, or which are impersonating authorised businesses. That list has grown into the tens of thousands of entries \u2014 the FCA now issues hundreds of new warnings in a typical week (226 in a single recent seven-day period alone). In one year the regulator issued over 1,100 alerts including clones, more than double the number the year before.",
          "To put the regulatory picture in context: the FCA supervises roughly 50,000 regulated firms and acts as money-laundering supervisor for around 18,000 of them. The Warning List sits alongside that legitimate universe as a running catalogue of the fakes, clones and unauthorised operators consumers should avoid.",
        ],
      },
      {
        heading: "What a \u201cclone firm\u201d scam actually is",
        paragraphs: [
          "A clone firm is the most sophisticated and fastest-growing variant. Fraudsters copy the name, address and Firm Reference Number (FRN) of a genuine, FCA-authorised company, then build a near-identical website and send professional-looking sales material to victims.",
          "The cruel twist: scammers encourage you to look them up on the FCA Register, because they've stolen a real firm's details. When you find a match, you feel reassured \u2014 and hand over your money. In 2020, Action Fraud recorded over \u00a378 million lost to clone investment and pension scams, with victims losing an average of \u00a345,242 each.",
          "As one FCA enforcement director put it: \u201cClone investment scams can look real and sophisticated but anyone can spot them by following our advice. When it comes to clones, I cannot emphasise enough how important it is to double check every detail.\u201d",
        ],
      },
      {
        heading: "7 red flags to spot a scam broker",
        list: [
          "Unsolicited contact. A genuine, regulated broker will not cold-call, WhatsApp, DM or email you out of the blue about a hot investment. Treat any unexpected approach as a scam until proven otherwise.",
          "Pressure and urgency. \u201cBonus expires today,\u201d \u201climited allocation,\u201d or a countdown timer. Legitimate opportunities do not evaporate in hours \u2014 urgency exists to stop you checking.",
          "Guaranteed or \u201ctoo good to be true\u201d returns. Any promise of high returns with little or no risk is a lie. All trading carries risk of loss; nobody can guarantee a profit.",
          "Contact details that don't match the register. This is the clone-firm tell. If the phone, email or website differs \u2014 even slightly \u2014 from what's on the FCA Register, walk away.",
          "Pressure to pay into a personal or overseas account, in crypto, gift cards, or to a name different from the firm's. Regulated brokers do not ask for irregular payment routes.",
          "Withdrawal friction. You can deposit instantly, but withdrawals trigger sudden \u201ctaxes,\u201d \u201cfees\u201d or endless delays. A classic sign your money is gone.",
          "No FCA authorisation \u2014 or a mismatched FRN. If the firm isn't on the FCA Register at all, stop. If it is but the details don't line up perfectly, you may be facing a clone.",
        ],
      },
      {
        heading: "How to verify a broker in 2 minutes on the regulator's own register",
        paragraphs: ["Do this before you deposit a single pound:"],
        list: [
          "Go to the official FCA Register (register.fca.org.uk). Type the firm's name or FRN. If there's no match, do not proceed.",
          "Cross-check the ScamSmart Warning List (fca.org.uk/scamsmart/warning-list). Search the name and website there too.",
          "Only use the contact details shown on the Register \u2014 never the phone number, email or link the firm supplied. Call the number on the Register and ask if they contacted you. This single step defeats most clone scams.",
          "Check the permissions and status. Confirm the firm is authorised for the activity being offered, and that its status is \u201cAuthorised,\u201d not \u201cCancelled.\u201d",
        ],
      },
      {
        heading: "The honest bottom line",
        paragraphs: [
          "Checking a Firm Reference Number is necessary but not sufficient \u2014 clones steal real FRNs precisely to exploit that check. The only reliable defence is to verify the firm on the FCA's own Register and contact it using the Register's own details, not the ones a stranger gave you.",
        ],
      },
    ],
    citeQuote:
      "Checking a firm's reference number doesn't prove it's real \u2014 clone scammers steal genuine FRNs precisely so that check reassures you. Always verify a broker on the regulator's own register and contact it using the register's details, never the ones you were sent.",
    sources: [
      {
        label: "FCA \u2014 warning over 'clone firm' investment scams",
        url: "https://www.fca.org.uk/news/press-releases/fca-scamsmart-warning-clone-firm-investment-scams",
      },
      {
        label: "FCA \u2014 Warning List of unauthorised firms",
        url: "https://www.fca.org.uk/consumers/warning-list-unauthorised-firms",
      },
      {
        label: "FCA \u2014 Financial Services Register",
        url: "https://register.fca.org.uk/",
      },
    ],
  },

  {
    slug: "cfd-leverage-limits-by-country",
    title: "CFD Leverage Limits Around the World \u2014 A Country-by-Country Comparison",
    seoTitle: "CFD Leverage Limits by Country \u2014 Global Comparison",
    description:
      "How much CFD leverage can retail traders use? Compare ESMA, FCA, ASIC, US and offshore caps \u2014 and why regulators set 30:1 limits.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    summary:
      "The maximum leverage a retail trader can use on a CFD varies enormously by jurisdiction. In the EU, the UK and Australia, regulators cap leverage on the most-traded instruments at 30:1, tapering to 2:1 for cryptocurrencies. The United States prohibits CFDs for retail clients and caps retail forex at 50:1. Offshore brokers still advertise 500:1 or 1000:1. The regulated caps exist for one documented reason: 74\u201389% of retail CFD accounts lose money.",
    blocks: [
      {
        heading: "Why leverage limits exist at all",
        paragraphs: [
          "Leverage lets a trader control a large position with a small deposit. A 30:1 ratio means \u20ac1,000 of margin controls \u20ac30,000 of exposure \u2014 and a 500:1 ratio means the same \u20ac1,000 controls \u20ac500,000. Leverage magnifies gains and losses in equal measure, and it shrinks the price move needed to wipe out an account.",
          "When ESMA reviewed the retail CFD market, it found that 74\u201389% of retail investor accounts typically lose money, with average losses per client ranging from \u20ac1,600 to \u20ac29,000 (ESMA, 27 March 2018). Australia's regulator reached a parallel conclusion. These are not marketing figures \u2014 they are the regulators' own numbers, and the direct justification for the caps that follow.",
        ],
      },
      {
        heading: "European Union \u2014 ESMA / national regulators",
        bullets: true,
        list: [
          "Major forex pairs: 30:1",
          "Non-major forex, gold, major indices: 20:1",
          "Commodities other than gold, non-major equity indices: 10:1",
          "Individual equities and other reference values: 5:1",
          "Cryptocurrencies: 2:1",
          "Extras: 50% margin close-out rule, negative balance protection, a ban on trading incentives, and a standardised risk warning.",
        ],
      },
      {
        heading: "United Kingdom \u2014 FCA",
        bullets: true,
        list: [
          "Same tiered structure as the EU: 30:1 down to 2:1.",
          "Made permanent on 1 July 2019 (Policy Statement PS19/18), independently of the EU \u2014 so it survived Brexit.",
          "Includes the same 50% margin close-out, negative balance protection and incentive ban.",
          "The FCA estimated its restrictions could save retail clients up to \u00a3267 million a year.",
        ],
      },
      {
        heading: "Australia \u2014 ASIC",
        bullets: true,
        list: [
          "Major forex: 30:1; non-major forex/gold/major indices: 20:1; other commodities/indices: 10:1; shares: 5:1; crypto: 2:1.",
          "In force from 29 March 2021. Before this, leverage of up to 500:1 was legal in Australia.",
          "Penalties for breaching the order are severe \u2014 up to 5 years' imprisonment for individuals.",
        ],
      },
      {
        heading: "United States \u2014 CFTC / NFA",
        bullets: true,
        list: [
          "Retail CFDs are effectively prohibited. Off-exchange CFD transactions with US retail investors are unlawful.",
          "Retail forex leverage is capped at 50:1 on major currency pairs and 20:1 on minor pairs, under CFTC rules enforced by the NFA.",
          "A structurally different regime: rather than capping CFD leverage, the US closes the product to retail clients outright.",
        ],
      },
      {
        heading: "Offshore jurisdictions",
        bullets: true,
        list: [
          "Brokers licensed offshore frequently advertise 500:1 and, in some cases, 1000:1 or higher.",
          "These offers typically lack the investor protections built into ESMA/FCA/ASIC regimes \u2014 no guaranteed negative balance protection, weaker close-out rules, limited recourse.",
          "Higher leverage is the marketing hook; the trade-off is that the safety net regulators added after seeing 74\u201389% of accounts lose money is often absent.",
        ],
      },
      {
        heading: "What this means if you're a beginner",
        list: [
          "The caps are a floor of protection, not a target. On a 30:1 position, a 3.3% move against you can wipe out your margin.",
          "Higher advertised leverage signals fewer protections. Offshore 500:1 usually means leaving behind negative balance protection.",
          "The loss statistics apply to everyone \u2014 74\u201389% is the market-wide outcome under regulated conditions.",
          "Check who regulates your broker. An FCA-, ASIC- or EU-authorised broker must apply these caps and protections.",
        ],
      },
    ],
    citeQuote:
      "Across the EU, the UK and Australia, retail CFD leverage on major forex pairs is capped at 30:1, falling to 2:1 for crypto. The US goes further, prohibiting CFDs for retail clients. The shared justification is stark: regulators' own data showed 74\u201389% of retail CFD accounts lose money.",
    sources: [
      {
        label: "ESMA \u2014 product intervention on CFDs (27 Mar 2018)",
        url: "https://www.esma.europa.eu/press-news/esma-news/esma-agrees-prohibit-binary-options-and-restrict-cfds-protect-retail-investors",
      },
      {
        label: "FCA \u2014 permanent restrictions on CFDs (1 Jul 2019)",
        url: "https://www.fca.org.uk/news/press-releases/fca-confirms-permanent-restrictions-sale-cfds-and-cfd-options-retail-consumers",
      },
      {
        label: "ASIC \u2014 CFD product intervention order (21-060MR)",
        url: "https://asic.gov.au/about-asic/news-centre/find-a-media-release/2021-releases/21-060mr-asic-s-cfd-product-intervention-order-takes-effect/",
      },
    ],
  },

  {
    slug: "hidden-costs-cfd-trading",
    title: "The Hidden Costs of CFD Trading \u2014 What Brokers Don't Put on the Homepage",
    seoTitle: "The Hidden Costs of CFD Trading | Real Fees Explained",
    description:
      "Spreads, commissions, swaps, inactivity & withdrawal fees \u2014 the real cost of CFD trading, with worked examples and ASIC's $73M fee finding.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    summary:
      "CFDs are marketed on tight \u201cfrom 0.0 pips\u201d spreads \u2014 but the advertised spread is only the first of at least six separate charges. Spreads, per-lot commissions, overnight financing, inactivity fees, currency-conversion mark-ups and withdrawal charges stack up so a moderately active trader can pay thousands a year. Australia's ASIC found retail CFD clients paid A$73 million in fees in the 2024 financial year alone.",
    blocks: [
      {
        heading: "Why the \u201chidden\u201d costs matter more than the spread",
        paragraphs: [
          "Most CFD broker homepages lead with one number: the spread. It looks small \u2014 0.5 of a pip, sometimes advertised as zero \u2014 and it is easy to assume that is what trading costs you. It is not.",
          "The real cost of a CFD position is the sum of every charge from the moment you open to the moment you withdraw. ASIC's January 2026 review (Report 828) put a number on the aggregate: in the 2024 financial year, 68% of Australian retail CFD investors lost money, with total losses exceeding A$458 million \u2014 including A$73 million in fees. As one ASIC Commissioner put it, \u201ceven profitable trades can be entirely eroded by trading costs.\u201d",
          "Below we break down each cost with worked examples, using the convention that one standard lot of EUR/USD equals roughly US$10 per pip.",
        ],
      },
      {
        heading: "1. The spread",
        paragraphs: [
          "The spread is the gap between the buy and sell price. You pay it instantly on entry. A EUR/USD 0.5-pip spread on one standard lot costs 0.5 \u00d7 US$10 = US$5 per round-turn trade, paid the instant you open. Widen that to 1.3 pips on a \u201cno-commission\u201d account and the same trade costs US$13 before anything moves.",
        ],
      },
      {
        heading: "2. Commission per lot",
        paragraphs: [
          "On \u201craw\u201d or \u201cECN\u201d accounts, the spread is tighter but a fixed commission is charged per lot, usually round-turn. A common tariff is US$3 per side (US$6 round-turn) on one standard lot. Combined with a raw 0.1-pip spread (US$1), your entry cost is about US$7 per lot \u2014 the trade-off brokers hope you won't calculate.",
        ],
      },
      {
        heading: "3. Overnight swap / financing charges",
        paragraphs: [
          "The cost most beginners overlook. Because a CFD is leveraged, you are effectively borrowing to hold it. Every position kept open past the daily rollover is charged an overnight swap. A US$100,000 EUR/USD long charged US$8 per night, held two weeks, costs US$112 in financing \u2014 often more than the spread and commission combined. Note: Wednesday rollovers are usually charged triple, and index/share CFDs are financed against a benchmark rate plus 2\u20133%.",
        ],
      },
      {
        heading: "4. Inactivity fees",
        paragraphs: [
          "If you stop trading, some brokers start charging. A US$10-per-month inactivity fee after 90 days of no trades quietly removes US$120 a year from a balance you thought was sitting safe. This is a cost you pay for not trading \u2014 the opposite of what the homepage implies.",
        ],
      },
      {
        heading: "5. Currency-conversion fees",
        paragraphs: [
          "If your account currency differs from the instrument's currency, every realised profit, loss, commission and swap is converted at the broker's rate \u2014 typically a 0.3%\u20131.0% mark-up over interbank. Convert US$20,000 of proceeds at a 0.5% mark-up and you lose US$100, invisible because it's baked into the exchange rate.",
        ],
      },
      {
        heading: "6. Withdrawal (and deposit) fees",
        paragraphs: [
          "The final sting comes when you take money out. A US$25 flat withdrawal fee, monthly, costs US$300 a year purely to access your own capital. International wires can also attract intermediary-bank charges of US$15\u2013US$40 disclosed only in a secondary schedule.",
        ],
      },
      {
        heading: "Putting it together: how the annual cost really varies",
        paragraphs: [
          "Consider a moderately active trader placing 5 standard EUR/USD lots per week (about 260 lots/year) on a raw account: commission ~US$1,560, spread ~US$520, overnight swaps ~US$800, currency conversion US$150\u2013400, withdrawal fees ~US$300. Estimated annual cost: roughly US$3,300\u2013US$3,600 \u2014 none of which appears on the \u201cfrom 0.0 pips\u201d homepage. Two brokers advertising identical spreads can differ by thousands of dollars a year once every line item is counted.",
        ],
      },
    ],
    citeQuote:
      "The advertised spread is only the first of at least six CFD cost layers \u2014 spread, commission, overnight financing, inactivity, currency conversion and withdrawal fees. ASIC found retail clients paid A$73 million in fees in a single year; two brokers with identical spreads can still differ by thousands of dollars annually.",
    sources: [
      {
        label: "ASIC \u2014 media release 26-004MR (20 Jan 2026)",
        url: "https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2026-releases/26-004mr-asic-secures-nearly-40-million-in-refunds-to-investors-and-drives-change-after-cfd-sector-falls-short/",
      },
      {
        label: "ASIC \u2014 Report 828 (Risky business, PDF)",
        url: "https://download.asic.gov.au/media/tq0he35c/rep828-published-20-january-2026.pdf",
      },
      {
        label: "ASIC Moneysmart \u2014 CFDs",
        url: "https://moneysmart.gov.au/how-to-invest/contracts-for-difference-cfds",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}
