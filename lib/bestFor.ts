/**
 * "Best broker for [X]" angle definitions for the programmatic SEO cluster.
 *
 * Each angle re-uses the SAME neutral scoring engine (scoreBrokers) via custom
 * weight leans, and — where the search intent implies a hard requirement — a
 * `filter` that removes brokers that genuinely don't qualify (e.g. no MT5, no
 * crypto). Some angles use a `sort` override to rank by the single stat the
 * searcher actually cares about (e.g. max leverage, spread). Everything else
 * stays neutral and honest: affiliation never affects the order.
 *
 * The NEEDS from lib/needs.ts are adapted into this same shape by the page, so
 * the whole "best for" cluster lives under one route: /best/[need].
 */

import type { Broker } from "./brokers";
import { DEFAULT_WEIGHTS, type Weights, type ScoredBroker } from "./scoring";
import { NEEDS } from "./needs";

export interface AngleFaq {
  q: string;
  a: string;
}

/** A relevant stat to surface in the ranked list for this angle. */
export interface AngleStat {
  /** Short column/label, e.g. "EUR/USD spread". */
  label: string;
  /** Rendered value for a broker, e.g. "0.3 pips". */
  value: (b: Broker) => string;
}

export interface AngleConfig {
  slug: string;
  /** Human title fragment, e.g. "Beginners" — used in "Best Brokers for {title}". */
  title: string;
  /** SEO meta description (should mention the angle + 2026). */
  metaDescription: string;
  /** 2-3 sentence unique intro specific to this angle. */
  intro: string;
  /** Weight lean applied to the neutral scoring engine. */
  weights: Weights;
  /**
   * Optional hard qualifier. Only brokers returning true are listed. Used for
   * platform/asset angles where the requirement is binary.
   */
  filter?: (b: Broker) => boolean;
  /**
   * Optional ranking override. Receives the already-scored+sorted list and
   * returns a re-sorted list. Use when the search intent is about ONE stat.
   */
  sort?: (scored: ScoredBroker[]) => ScoredBroker[];
  /** Angle-relevant stat(s) shown per broker in the ranked list. */
  stats: AngleStat[];
  /** Short honest "how we picked" note, specific to this angle. */
  howWePicked: string;
  /** 2-3 unique Q&A for the FAQ + FAQPage JSON-LD. */
  faq: AngleFaq[];
}

// --- Small reusable stat renderers -----------------------------------------

const S = {
  spread: (b: Broker) => `${b.avgSpreadEurUsd} pips`,
  commission: (b: Broker) =>
    b.commissionPerLot === 0 ? "Commission-free" : `$${b.commissionPerLot}/lot`,
  minDeposit: (b: Broker) =>
    b.minDeposit === 0 ? "€0 (no minimum)" : `€${b.minDeposit}`,
  leverage: (b: Broker) => `1:${b.maxLeverage}`,
  withdrawal: (b: Broker) =>
    b.withdrawalDays <= 1 ? "Same day" : `${b.withdrawalDays} business days`,
  regulators: (b: Broker) => b.regulators.join(", "),
  platforms: (b: Broker) => b.platforms.join(", "),
  assets: (b: Broker) => b.assetClasses.join(", "),
  trustpilot: (b: Broker) =>
    `${b.trustpilotRating}/5 (${b.trustpilotReviews.toLocaleString()} reviews)`,
  founded: (b: Broker) => `${b.founded}`,
  demo: (b: Broker) => (b.demoAccount ? "Yes" : "No"),
};

// --- Reusable sort overrides -----------------------------------------------

const byLeverage = (s: ScoredBroker[]) =>
  [...s].sort((a, b) => b.broker.maxLeverage - a.broker.maxLeverage);
const bySpread = (s: ScoredBroker[]) =>
  [...s].sort((a, b) => a.broker.avgSpreadEurUsd - b.broker.avgSpreadEurUsd);
const byMinDeposit = (s: ScoredBroker[]) =>
  [...s].sort((a, b) => a.broker.minDeposit - b.broker.minDeposit);
const byWithdrawal = (s: ScoredBroker[]) =>
  [...s].sort((a, b) => a.broker.withdrawalDays - b.broker.withdrawalDays);
const byRegulation = (s: ScoredBroker[]) =>
  [...s].sort((a, b) => b.broker.regulationScore - a.broker.regulationScore);
const byReputation = (s: ScoredBroker[]) =>
  [...s].sort((a, b) => b.broker.trustpilotRating - a.broker.trustpilotRating);
const byFeeTotal = (s: ScoredBroker[]) =>
  [...s].sort(
    (a, b) =>
      a.broker.avgSpreadEurUsd +
      a.broker.commissionPerLot / 10 -
      (b.broker.avgSpreadEurUsd + b.broker.commissionPerLot / 10)
  );

// --- Weight presets ---------------------------------------------------------

const W = (over: Partial<Weights>): Weights => ({ ...DEFAULT_WEIGHTS, ...over });

const FEES_LEAN = W({
  fees: 50,
  regulation: 20,
  platforms: 10,
  withdrawal: 10,
  minDeposit: 5,
  reputation: 5,
});
const REG_LEAN = W({
  regulation: 55,
  reputation: 15,
  fees: 10,
  platforms: 10,
  withdrawal: 5,
  minDeposit: 5,
});
const DEPOSIT_LEAN = W({
  minDeposit: 45,
  regulation: 25,
  fees: 15,
  platforms: 5,
  withdrawal: 5,
  reputation: 5,
});
const BALANCED = W({});

export const ANGLES: AngleConfig[] = [
  // ---------------------------------------------------------------- deposit
  {
    slug: "low-minimum-deposit",
    title: "Low Minimum Deposit",
    metaDescription:
      "The best brokers for a low minimum deposit in 2026, ranked by how little you need to start — some open from €0. Neutral scoring, no hype.",
    intro:
      "You don't need a big bankroll to start trading. This ranking is ordered by the smallest first deposit each broker accepts, so you can open a real account and size positions carefully from day one. Every broker here still clears our regulation and safety checks.",
    weights: DEPOSIT_LEAN,
    sort: byMinDeposit,
    stats: [
      { label: "Min deposit", value: S.minDeposit },
      { label: "Demo account", value: S.demo },
      { label: "Regulation", value: S.regulators },
    ],
    howWePicked:
      "We sorted every broker by its minimum first deposit (lowest first), then used our neutral engine — weighted toward the deposit barrier — as the tiebreaker. A low minimum is only useful alongside real regulation, so unregulated options are never boosted.",
    faq: [
      {
        q: "What is the lowest deposit to start trading?",
        a: "In our set, the smallest first deposits start from €0–€10. A low minimum lets you test a broker with real money before committing more, but you should still only deposit what you can afford to lose.",
      },
      {
        q: "Is a low minimum deposit a good idea?",
        a: "It lowers the barrier to entry and is fine for learning, but it also limits how much you can risk per trade while respecting sensible position sizing. Many traders start small on a low-minimum account and scale up later.",
      },
    ],
  },
  // ---------------------------------------------------------------- low-cost
  {
    slug: "low-cost",
    title: "Low-Cost Trading",
    metaDescription:
      "The lowest-cost brokers of 2026, ranked by combined spread and commission per trade. Cheapest all-in cost first, scored neutrally.",
    intro:
      "Total cost is spread plus commission, and it compounds fast when you trade often. This ranking orders brokers by their combined all-in cost on EUR/USD, surfacing the genuinely cheapest places to trade rather than the ones that only advertise a low spread. Regulation still counts — a cheap unregulated broker is no bargain.",
    weights: FEES_LEAN,
    sort: byFeeTotal,
    stats: [
      { label: "EUR/USD spread", value: S.spread },
      { label: "Commission", value: S.commission },
      { label: "Regulation", value: S.regulators },
    ],
    howWePicked:
      "We combined the typical EUR/USD spread with the per-lot commission into a single all-in cost and ranked lowest first. Our neutral engine, weighted heavily toward fees, breaks ties. Bonuses and promotions are ignored — they never lower your real per-trade cost.",
    faq: [
      {
        q: "What makes a broker low-cost?",
        a: "The all-in cost of a trade: the spread you pay plus any commission per lot. A tiny spread with a high commission can cost more than a slightly wider spread with none, so we combine both.",
      },
      {
        q: "Do low-cost brokers cut corners?",
        a: "Not necessarily. Several well-regulated brokers offer raw spreads with a transparent commission. We only rank brokers that pass our regulation and safety checks, so low cost here doesn't mean low protection.",
      },
    ],
  },
  // ---------------------------------------------------------------- low-spread already exists in NEEDS; add a distinct scalping/day/swing set
  // ---------------------------------------------------------------- scalping
  {
    slug: "scalping",
    title: "Scalping",
    metaDescription:
      "The best brokers for scalping in 2026: raw spreads, fast execution platforms and low all-in costs. Ranked neutrally for high-frequency traders.",
    intro:
      "Scalpers open and close dozens of trades a day, so a fraction of a pip decides whether a strategy is profitable. This ranking prioritises the tightest EUR/USD spreads backed by execution-focused platforms like MT4, MT5 and cTrader. Only brokers that don't restrict rapid trading make the list.",
    weights: FEES_LEAN,
    filter: (b) =>
      b.platforms.some((p) => ["MT4", "MT5", "cTrader"].includes(p)),
    sort: bySpread,
    stats: [
      { label: "EUR/USD spread", value: S.spread },
      { label: "Commission", value: S.commission },
      { label: "Platforms", value: S.platforms },
    ],
    howWePicked:
      "We kept only brokers offering a fast execution platform (MT4, MT5 or cTrader), then ranked by the tightest EUR/USD spread first, with all-in cost as the tiebreaker. Scalping lives and dies on spread, so it drives the order here.",
    faq: [
      {
        q: "What spread do I need for scalping?",
        a: "The tighter the better. Scalpers typically want sub-1-pip spreads on EUR/USD plus a low commission, because a few tenths of a pip per trade adds up across a high trade count.",
      },
      {
        q: "Is scalping allowed at these brokers?",
        a: "The brokers listed run execution-focused platforms suited to fast trading. Always confirm a broker's order-execution and strategy terms before you start, as house rules can change.",
      },
    ],
  },
  // ---------------------------------------------------------------- day-trading
  {
    slug: "day-trading",
    title: "Day Trading",
    metaDescription:
      "The best brokers for day trading in 2026, balancing low intraday costs, solid platforms and fast withdrawals. Neutrally scored.",
    intro:
      "Day traders close every position before the session ends, so intraday costs, reliable platforms and quick access to funds matter more than long-term financing. This ranking blends low all-in fees with platform breadth and withdrawal speed. Every broker is regulated and offers a demo to rehearse a strategy first.",
    weights: W({
      fees: 35,
      platforms: 20,
      withdrawal: 15,
      regulation: 20,
      minDeposit: 5,
      reputation: 5,
    }),
    filter: (b) =>
      b.platforms.some((p) => ["MT4", "MT5", "cTrader"].includes(p)),
    stats: [
      { label: "EUR/USD spread", value: S.spread },
      { label: "Platforms", value: S.platforms },
      { label: "Withdrawal", value: S.withdrawal },
    ],
    howWePicked:
      "We scored brokers with a lean toward intraday essentials — low fees, platform choice and fast withdrawals — and required a professional trading platform. Overnight financing matters less to day traders, so it isn't a factor here.",
    faq: [
      {
        q: "What should day traders look for in a broker?",
        a: "Low intraday costs, dependable execution on a capable platform, and fast withdrawals so profits aren't locked up. Regulation and negative-balance protection remain non-negotiable.",
      },
      {
        q: "Do I need a big account to day trade?",
        a: "No, but sensible risk management matters more the shorter your timeframe. Many day traders start on a modest account and a demo before scaling up.",
      },
    ],
  },
  // ---------------------------------------------------------------- swing-trading
  {
    slug: "swing-trading",
    title: "Swing Trading",
    metaDescription:
      "The best brokers for swing trading in 2026: strong regulation, broad markets and multi-day holding. Neutrally ranked for position traders.",
    intro:
      "Swing traders hold positions for days or weeks, so safety of funds and market breadth outweigh shaving a fraction of a pip. This ranking leans toward regulation, reputation and the range of assets you can trade across a longer horizon. Spreads still matter, just less than for a scalper.",
    weights: W({
      regulation: 35,
      reputation: 15,
      platforms: 15,
      fees: 20,
      withdrawal: 10,
      minDeposit: 5,
    }),
    stats: [
      { label: "Regulation", value: S.regulators },
      { label: "Asset classes", value: S.assets },
      { label: "Trustpilot", value: S.trustpilot },
    ],
    howWePicked:
      "Because swing positions stay open across sessions, we weighted regulation, reputation and market breadth above raw spread. A broker you'll trust to hold funds for weeks matters more than one that's a tenth of a pip cheaper intraday.",
    faq: [
      {
        q: "Does spread matter for swing trading?",
        a: "Less than for scalping. When you hold for days, entry spread is a small share of the overall move you're targeting, so regulation, market access and reliability weigh more heavily.",
      },
      {
        q: "What about overnight fees?",
        a: "Positions held overnight usually incur a financing (swap) charge. Check each broker's swap rates before holding multi-day positions, especially in higher-leverage instruments.",
      },
    ],
  },
  // ---------------------------------------------------------------- forex
  {
    slug: "forex",
    title: "Forex Trading",
    metaDescription:
      "The best forex brokers of 2026, ranked on EUR/USD spreads, regulation and platforms. Neutral scoring for currency traders.",
    intro:
      "Currency trading rewards tight spreads on major pairs and dependable execution. This ranking is built for forex, leaning on the EUR/USD cost and the professional platforms that FX traders rely on. Every broker below offers forex alongside strong regulation.",
    weights: W({
      fees: 40,
      regulation: 25,
      platforms: 15,
      withdrawal: 10,
      minDeposit: 5,
      reputation: 5,
    }),
    filter: (b) => b.assetClasses.includes("Forex"),
    sort: byFeeTotal,
    stats: [
      { label: "EUR/USD spread", value: S.spread },
      { label: "Commission", value: S.commission },
      { label: "Platforms", value: S.platforms },
    ],
    howWePicked:
      "We kept brokers that actually offer forex, then ranked by all-in EUR/USD cost with a fee-weighted neutral score as the tiebreaker. Regulation and platform quality keep the list honest for real currency trading.",
    faq: [
      {
        q: "Which spread matters most for forex?",
        a: "For most traders, the EUR/USD spread is the reference benchmark because it's the world's most-traded pair and usually the tightest. We rank on it, plus commission.",
      },
      {
        q: "What leverage can I use on forex?",
        a: "It depends on your regulator and the broker. Retail leverage is capped in some regions and much higher offshore. Higher leverage magnifies losses as well as gains — see our high-leverage ranking for the trade-offs.",
      },
    ],
  },
  // ---------------------------------------------------------------- indices
  {
    slug: "indices",
    title: "Index Trading",
    metaDescription:
      "The best brokers for trading indices in 2026 — S&P 500, Nasdaq, DAX and more. Filtered to brokers that offer indices, ranked neutrally.",
    intro:
      "Index trading gives you broad market exposure in a single instrument, from the S&P 500 to the DAX. This ranking is filtered to brokers that genuinely offer indices, then scored on cost, platforms and regulation. It's a cleaner way to trade market direction than picking individual shares.",
    weights: W({
      fees: 30,
      platforms: 20,
      regulation: 25,
      withdrawal: 10,
      minDeposit: 5,
      reputation: 10,
    }),
    filter: (b) => b.assetClasses.includes("Indices"),
    stats: [
      { label: "Asset classes", value: S.assets },
      { label: "Platforms", value: S.platforms },
      { label: "Regulation", value: S.regulators },
    ],
    howWePicked:
      "Only brokers listing indices among their markets qualify. From there we score on cost, platform quality and regulation using our neutral engine. Index trading is direction-first, so reliable execution and fair spreads lead the ranking.",
    faq: [
      {
        q: "Which indices can I trade?",
        a: "It varies by broker, but the brokers here list indices among their markets — typically majors like the S&P 500, Nasdaq 100, Dow, DAX and FTSE. Check each broker's product list for the exact instruments.",
      },
      {
        q: "Are indices cheaper than shares to trade?",
        a: "Often, yes — one index instrument gives diversified exposure instead of many single-share positions, and index spreads on majors are usually competitive. Costs still vary by broker, so compare before you commit.",
      },
    ],
  },
  // ---------------------------------------------------------------- commodities
  {
    slug: "commodities",
    title: "Commodity Trading",
    metaDescription:
      "The best brokers for trading commodities in 2026 — oil, gas and metals. Filtered to brokers that offer commodities, ranked neutrally.",
    intro:
      "Commodities like oil, natural gas and metals move on their own supply-and-demand cycles, offering diversification away from equities and currencies. This ranking is filtered to brokers that actually offer commodities, then scored neutrally on cost, platforms and safety. Volatility can be high, so regulation matters.",
    weights: W({
      fees: 30,
      regulation: 25,
      platforms: 15,
      withdrawal: 10,
      minDeposit: 5,
      reputation: 15,
    }),
    filter: (b) => b.assetClasses.includes("Commodities"),
    stats: [
      { label: "Asset classes", value: S.assets },
      { label: "Max leverage", value: S.leverage },
      { label: "Regulation", value: S.regulators },
    ],
    howWePicked:
      "We kept only brokers offering commodities, then applied our neutral score with a lean toward cost, regulation and reputation. Commodity markets can be volatile, so client-fund protection and a credible regulator weigh heavily.",
    faq: [
      {
        q: "Which commodities can I trade?",
        a: "The brokers here offer commodities among their markets — commonly energies (oil, natural gas) and metals. Availability differs by broker, so check the product list for specific instruments.",
      },
      {
        q: "Are commodities riskier than forex?",
        a: "They can be. Commodities are prone to sharp, headline-driven moves. Sensible position sizing and negative-balance protection are especially important when trading them.",
      },
    ],
  },
  // ---------------------------------------------------------------- crypto
  {
    slug: "crypto",
    title: "Crypto Trading",
    metaDescription:
      "The best brokers for trading crypto in 2026, filtered to those that actually offer crypto markets and ranked neutrally on cost and safety.",
    intro:
      "Trading crypto through a regulated broker means one account for coins and traditional markets, without running a separate exchange wallet. This ranking is filtered strictly to brokers that offer crypto markets, then scored on cost, platforms and regulation. Crypto is volatile, so we favour brokers with real oversight.",
    weights: W({
      regulation: 30,
      fees: 25,
      platforms: 15,
      reputation: 15,
      withdrawal: 10,
      minDeposit: 5,
    }),
    filter: (b) => b.assetClasses.includes("Crypto"),
    stats: [
      { label: "Asset classes", value: S.assets },
      { label: "Max leverage", value: S.leverage },
      { label: "Regulation", value: S.regulators },
    ],
    howWePicked:
      "Only brokers that list crypto among their markets qualify. We then score neutrally with regulation and reputation leaning higher than usual, because crypto's volatility makes fund safety and a credible regulator especially important.",
    faq: [
      {
        q: "Is trading crypto with a broker different from an exchange?",
        a: "Yes. With a broker you typically trade price movements in a regulated account rather than owning coins in a wallet. That can simplify tax and custody, but you don't hold the underlying asset.",
      },
      {
        q: "How volatile is crypto?",
        a: "Very. Double-digit daily swings are common, which is why leverage and position sizing need extra care and why we weight regulation and fund protection heavily in this ranking.",
      },
    ],
  },
  // ---------------------------------------------------------------- gold-trading
  {
    slug: "gold-trading",
    title: "Gold Trading",
    metaDescription:
      "The best brokers for trading gold in 2026, filtered to brokers offering metals or commodities and ranked neutrally on cost and safety.",
    intro:
      "Gold is the classic safe-haven trade, popular when markets wobble or inflation bites. This ranking is filtered to brokers that offer metals or commodities markets, then scored on cost, platforms and regulation. Whether you scalp gold intraday or hold it as a hedge, execution quality matters.",
    weights: W({
      fees: 30,
      regulation: 25,
      platforms: 15,
      reputation: 15,
      withdrawal: 10,
      minDeposit: 5,
    }),
    filter: (b) =>
      b.assetClasses.includes("Commodities") ||
      b.assetClasses.includes("Metals"),
    stats: [
      { label: "EUR/USD spread", value: S.spread },
      { label: "Max leverage", value: S.leverage },
      { label: "Regulation", value: S.regulators },
    ],
    howWePicked:
      "We kept brokers offering metals or commodities (where gold trades), then scored neutrally with a lean toward cost, regulation and reputation. Gold can move fast around economic data, so reliable execution and fund safety lead.",
    faq: [
      {
        q: "How is gold traded with a broker?",
        a: "Usually as a spot metal instrument (often quoted as XAU/USD) within the commodities or metals category. The brokers here offer those markets; confirm the exact symbol with your broker.",
      },
      {
        q: "Why do traders like gold?",
        a: "Gold often moves differently from stocks and can act as a hedge during uncertainty or inflation. That diversification, plus deep liquidity, makes it a staple for many traders.",
      },
    ],
  },
  // ---------------------------------------------------------------- MT4
  {
    slug: "mt4",
    title: "MetaTrader 4 (MT4)",
    metaDescription:
      "The best MT4 brokers of 2026, filtered to brokers that actually offer MetaTrader 4 and ranked neutrally on cost, regulation and reputation.",
    intro:
      "MetaTrader 4 remains the most widely used trading platform, prized for its charting, expert advisors and huge community. This ranking is filtered strictly to brokers that offer MT4, then scored neutrally so you can pick the safest, cheapest home for your existing setup. If you rely on MT4 EAs or custom indicators, start here.",
    weights: FEES_LEAN,
    filter: (b) => b.platforms.includes("MT4"),
    sort: byFeeTotal,
    stats: [
      { label: "Platforms", value: S.platforms },
      { label: "EUR/USD spread", value: S.spread },
      { label: "Regulation", value: S.regulators },
    ],
    howWePicked:
      "We kept only brokers offering MetaTrader 4, then ranked by all-in trading cost with our neutral engine as the tiebreaker. Since MT4 is the constant here, cost and regulation decide the order.",
    faq: [
      {
        q: "Is MT4 still worth using in 2026?",
        a: "Yes. MT4 is stable, well-documented and supports a vast library of expert advisors and indicators. It's ideal if you already have automated strategies or custom tools built for it.",
      },
      {
        q: "Should I choose MT4 or MT5?",
        a: "MT4 has the bigger EA ecosystem and simplicity; MT5 adds more timeframes, asset classes and a faster engine. If you have existing MT4 tools, stay on MT4 — otherwise MT5 is the more modern choice.",
      },
    ],
  },
  // ---------------------------------------------------------------- MT5
  {
    slug: "mt5",
    title: "MetaTrader 5 (MT5)",
    metaDescription:
      "The best MT5 brokers of 2026, filtered to brokers offering MetaTrader 5 and ranked neutrally on cost, platforms and regulation.",
    intro:
      "MetaTrader 5 is the modern successor to MT4, adding more timeframes, built-in economic data and broader asset support. This ranking is filtered to brokers that offer MT5, then scored neutrally on cost and safety. If you want the newer engine without giving up the MetaTrader workflow, these are your options.",
    weights: FEES_LEAN,
    filter: (b) => b.platforms.includes("MT5"),
    sort: byFeeTotal,
    stats: [
      { label: "Platforms", value: S.platforms },
      { label: "EUR/USD spread", value: S.spread },
      { label: "Regulation", value: S.regulators },
    ],
    howWePicked:
      "We kept only brokers offering MetaTrader 5, then ranked by all-in cost with our neutral engine breaking ties. With MT5 held constant, fees and regulation drive the order.",
    faq: [
      {
        q: "What does MT5 add over MT4?",
        a: "More timeframes, an economic calendar, an improved strategy tester and native support for more asset classes. It's faster and more capable, though its EA language differs from MT4's.",
      },
      {
        q: "Can I migrate my MT4 tools to MT5?",
        a: "Not directly — MT5 uses a different programming language for expert advisors, so tools usually need rebuilding. If you depend on MT4 EAs, check our MT4 ranking instead.",
      },
    ],
  },
  // ---------------------------------------------------------------- ECN
  {
    slug: "ecn",
    title: "ECN Trading",
    metaDescription:
      "The best ECN-style brokers of 2026, ranked by raw spreads and transparent commission. Neutral scoring for cost-sensitive traders.",
    intro:
      "ECN-style accounts pass raw interbank spreads through to you and charge a clear commission, instead of marking up the spread. This ranking surfaces brokers with the tightest raw spreads and transparent pricing, ordered by all-in cost. It's the model most active traders prefer once volume picks up.",
    weights: FEES_LEAN,
    filter: (b) => b.avgSpreadEurUsd <= 0.6,
    sort: byFeeTotal,
    stats: [
      { label: "EUR/USD spread", value: S.spread },
      { label: "Commission", value: S.commission },
      { label: "Platforms", value: S.platforms },
    ],
    howWePicked:
      "We focused on brokers offering raw, tight spreads (a hallmark of ECN-style pricing) and ranked by combined spread-plus-commission cost. Transparent per-lot commission alongside a raw spread is exactly what an ECN account should look like.",
    faq: [
      {
        q: "What is an ECN account?",
        a: "An account that routes your orders to a network of liquidity providers at raw spreads, charging a separate, transparent commission rather than widening the spread. It suits high-volume traders who want visible pricing.",
      },
      {
        q: "Is ECN cheaper than a standard account?",
        a: "For active traders, usually. Raw spread plus commission often beats a marked-up 'commission-free' spread once you trade enough volume. Compare the all-in cost, which is what we rank on.",
      },
    ],
  },
  // ---------------------------------------------------------------- professionals
  {
    slug: "professionals",
    title: "Professional Traders",
    metaDescription:
      "The best brokers for professional traders in 2026: raw spreads, higher leverage, pro platforms and strong regulation. Neutrally ranked.",
    intro:
      "Experienced, high-volume traders want raw pricing, capable platforms and access to higher leverage where regulation allows. This ranking blends low all-in cost with platform breadth, leverage and a credible regulator. It's built for traders who already know their edge and want infrastructure that keeps up.",
    weights: W({
      fees: 35,
      platforms: 20,
      regulation: 20,
      withdrawal: 15,
      reputation: 5,
      minDeposit: 5,
    }),
    stats: [
      { label: "EUR/USD spread", value: S.spread },
      { label: "Max leverage", value: S.leverage },
      { label: "Platforms", value: S.platforms },
    ],
    howWePicked:
      "We leaned the neutral score toward the things professionals prioritise — low cost, platform choice and fast withdrawals — while keeping regulation firmly in the mix. Leverage is shown as a stat so you can weigh it against your regulator's limits.",
    faq: [
      {
        q: "What defines a broker for professionals?",
        a: "Raw pricing, robust execution across multiple platforms, fast fund access and — where permitted — professional account tiers with higher leverage. Regulation and segregation remain essential at any level.",
      },
      {
        q: "Can I get higher leverage as a professional?",
        a: "In some regions, qualifying as a professional client unlocks higher leverage but waives certain retail protections. Weigh that trade-off carefully; higher leverage magnifies losses as well as gains.",
      },
    ],
  },
  // ---------------------------------------------------------------- small-accounts
  {
    slug: "small-accounts",
    title: "Small Accounts",
    metaDescription:
      "The best brokers for small accounts in 2026: low minimums, tight costs and a demo to practise. Ranked neutrally for traders starting small.",
    intro:
      "Trading a small account well is about keeping costs low and the barrier to entry lower still. This ranking favours brokers with small minimum deposits and cheap all-in pricing, so more of your limited capital goes into the market rather than fees. A free demo to rehearse first is a bonus every broker here offers.",
    weights: W({
      minDeposit: 35,
      fees: 30,
      regulation: 20,
      platforms: 5,
      withdrawal: 5,
      reputation: 5,
    }),
    sort: byMinDeposit,
    stats: [
      { label: "Min deposit", value: S.minDeposit },
      { label: "EUR/USD spread", value: S.spread },
      { label: "Demo account", value: S.demo },
    ],
    howWePicked:
      "We ordered by the lowest minimum deposit, then leaned the neutral score toward low fees so small balances aren't eaten by costs. Every broker offers a demo, letting you practise before risking limited capital.",
    faq: [
      {
        q: "What's the best way to trade a small account?",
        a: "Keep costs low, risk a small fixed percentage per trade, and avoid over-leveraging. A low minimum deposit and tight spreads leave more of your capital working in the market.",
      },
      {
        q: "Can I grow a small account?",
        a: "It's possible with discipline, but slow and steady beats big bets. Consistent risk management on a low-cost broker gives a small account the best chance of surviving long enough to compound.",
      },
    ],
  },
  // ---------------------------------------------------------------- demo-account
  {
    slug: "demo-account",
    title: "Demo Accounts",
    metaDescription:
      "The best brokers with a free demo account in 2026. Practise risk-free on real platforms before funding — ranked neutrally on quality.",
    intro:
      "A demo account lets you rehearse a strategy with virtual funds on the broker's real platform, with no money at risk. This ranking is filtered to brokers offering a free demo, then scored on the quality of the broker you'd graduate to. Practise first, fund later.",
    weights: W({
      platforms: 25,
      regulation: 25,
      fees: 20,
      reputation: 15,
      minDeposit: 10,
      withdrawal: 5,
    }),
    filter: (b) => b.demoAccount === true,
    stats: [
      { label: "Demo account", value: S.demo },
      { label: "Platforms", value: S.platforms },
      { label: "Min deposit", value: S.minDeposit },
    ],
    howWePicked:
      "We kept only brokers offering a free demo, then scored on platform quality and overall broker strength — because a demo is a gateway to a live account, and the live experience is what really matters.",
    faq: [
      {
        q: "Are demo accounts really free?",
        a: "Yes. Every broker here offers a no-cost demo funded with virtual money. It's the safest way to learn a platform and test a strategy before risking real capital.",
      },
      {
        q: "How long should I demo trade before going live?",
        a: "Long enough to trade a full strategy across different market conditions without emotional shortcuts — often several weeks. Demo results won't perfectly match live psychology, but they build competence.",
      },
    ],
  },
  // ---------------------------------------------------------------- mobile-trading
  {
    slug: "mobile-trading",
    title: "Mobile Trading",
    metaDescription:
      "The best brokers for mobile trading in 2026 — polished apps, MetaTrader mobile and reliable execution on the go. Ranked neutrally.",
    intro:
      "Most traders now manage positions from their phone, so a capable, reliable app is essential. This ranking favours brokers with strong mobile platforms — whether a proprietary app or MetaTrader mobile — alongside dependable execution and support. Trade, monitor and withdraw from anywhere.",
    weights: W({
      platforms: 30,
      reputation: 20,
      regulation: 20,
      fees: 20,
      withdrawal: 5,
      minDeposit: 5,
    }),
    filter: (b) =>
      b.platforms.some((p) =>
        ["MT4", "MT5", "WebTrader", "Proprietary"].includes(p)
      ),
    stats: [
      { label: "Platforms", value: S.platforms },
      { label: "Trustpilot", value: S.trustpilot },
      { label: "Regulation", value: S.regulators },
    ],
    howWePicked:
      "We favoured brokers offering platforms with strong mobile apps — MetaTrader mobile, web and proprietary apps — and leaned on reputation as a proxy for real-world app reliability. A great app is worthless without a solid broker behind it.",
    faq: [
      {
        q: "Is mobile trading safe?",
        a: "Yes, when you use a regulated broker's official app with a secure connection and device. The apps here run on established platforms with encryption and account protections; avoid trading over untrusted public Wi-Fi.",
      },
      {
        q: "Can I do everything from the app?",
        a: "On modern platforms, largely yes — place and manage trades, chart, set alerts and often deposit or withdraw. Some advanced analysis is still easier on desktop, but day-to-day trading is fully mobile.",
      },
    ],
  },
  // ---------------------------------------------------------------- copy-trading-alternatives
  {
    slug: "copy-trading-alternatives",
    title: "Copy-Trading Alternatives",
    metaDescription:
      "Prefer trading your own way? The best broker alternatives to copy trading in 2026 — full control, transparent tools and neutral scoring.",
    intro:
      "Copy trading hands your decisions to someone else; trading your own book keeps you in control and accountable for every result. This ranking highlights brokers with the platforms and education to help you trade independently, scored neutrally on cost, tools and safety. If you'd rather learn the craft than mirror a stranger, start here.",
    weights: W({
      platforms: 25,
      regulation: 25,
      fees: 20,
      reputation: 15,
      minDeposit: 10,
      withdrawal: 5,
    }),
    stats: [
      { label: "Platforms", value: S.platforms },
      { label: "Demo account", value: S.demo },
      { label: "Regulation", value: S.regulators },
    ],
    howWePicked:
      "We scored brokers on the platforms, demo access and safety that support trading independently, rather than on any social-trading feature. Learning to trade your own strategy — practised first on a demo — is the alternative this page champions.",
    faq: [
      {
        q: "Why consider an alternative to copy trading?",
        a: "Copy trading outsources judgement and risk to another trader whose goals and risk tolerance may differ from yours. Trading your own strategy keeps you in control and builds skills that last across market cycles.",
      },
      {
        q: "How do I start trading independently?",
        a: "Learn a simple, rules-based strategy, rehearse it on a demo, and risk a small fixed percentage per trade once live. The brokers here offer the platforms, demos and education to support that path.",
      },
    ],
  },
];

// --- Adapt the original NEEDS into the richer AngleConfig shape -------------
// so the whole "best for" cluster resolves through one route: /best/[need].

/** Angle-specific extras for the 5 original NEEDS (stats, FAQ, notes). */
const NEED_EXTRAS: Record<
  string,
  {
    metaDescription: string;
    stats: AngleStat[];
    sort?: (s: ScoredBroker[]) => ScoredBroker[];
    filter?: (b: Broker) => boolean;
    howWePicked: string;
    faq: AngleFaq[];
  }
> = {
  beginners: {
    metaDescription:
      "The best brokers for beginners in 2026: strong regulation, low minimum deposits and free demo accounts. Neutrally scored, no hype.",
    stats: [
      { label: "Min deposit", value: S.minDeposit },
      { label: "Demo account", value: S.demo },
      { label: "Regulation", value: S.regulators },
    ],
    howWePicked:
      "We leaned the neutral score toward what protects first-timers: strong regulation and a low minimum deposit, with a free demo required in practice. Fees still matter, but safety and an easy start come first for beginners.",
    faq: [
      {
        q: "What should a beginner look for in a broker?",
        a: "Strong regulation, a free demo to practise on, a low minimum deposit and clear costs. Steer clear of any unregulated broker, however tempting the offer.",
      },
      {
        q: "Do I need a lot of money to start?",
        a: "No. Several brokers here open from a very low minimum, and a demo lets you learn the platform with zero risk before funding a live account.",
      },
    ],
  },
  "low-spread": {
    metaDescription:
      "The best low-spread brokers of 2026, ranked by the tightest EUR/USD spread and lowest all-in cost. Neutral scoring for active traders.",
    stats: [
      { label: "EUR/USD spread", value: S.spread },
      { label: "Commission", value: S.commission },
      { label: "Regulation", value: S.regulators },
    ],
    sort: bySpread,
    howWePicked:
      "We ranked by the tightest EUR/USD spread first, with combined spread-plus-commission cost as the tiebreaker via our fee-weighted neutral score. Advertised spreads are only useful alongside real regulation, so unregulated brokers are never boosted.",
    faq: [
      {
        q: "Why does spread matter so much?",
        a: "Spread is a cost you pay on every trade. For active traders it compounds quickly, so a tighter spread directly improves your bottom line over many trades.",
      },
      {
        q: "Is the lowest spread always the cheapest?",
        a: "Not always — a raw spread paired with a high commission can cost more overall. Check the all-in cost of spread plus commission, which our low-cost ranking sorts on directly.",
      },
    ],
  },
  "high-leverage": {
    metaDescription:
      "The best high-leverage brokers of 2026, ranked by the highest retail leverage on offer. Leverage magnifies losses — trade with care.",
    stats: [
      { label: "Max leverage", value: S.leverage },
      { label: "Regulation", value: S.regulators },
      { label: "Min deposit", value: S.minDeposit },
    ],
    sort: byLeverage,
    howWePicked:
      "This list is ordered by the highest retail leverage each broker offers, with our neutral score as the tiebreaker. Leverage limits depend heavily on the regulator, so we show each broker's regulation alongside the figure.",
    faq: [
      {
        q: "Is high leverage a good thing?",
        a: "It cuts both ways: leverage magnifies gains and losses equally. Higher leverage lets you control a larger position with less capital, but it can wipe out an account just as fast. Use strict risk management.",
      },
      {
        q: "Why do leverage limits vary so much?",
        a: "Regulators cap retail leverage differently. Tier-1 regions (like the EU and UK) cap it far lower than many offshore jurisdictions, which is why offshore brokers can advertise much higher figures.",
      },
    ],
  },
  "fast-withdrawals": {
    metaDescription:
      "The best brokers for fast withdrawals in 2026, ranked by payout speed. Get your money back quickly — neutrally scored on safety and cost too.",
    stats: [
      { label: "Withdrawal", value: S.withdrawal },
      { label: "Regulation", value: S.regulators },
      { label: "Min deposit", value: S.minDeposit },
    ],
    sort: byWithdrawal,
    howWePicked:
      "We ranked by fastest withdrawal processing first, then used our neutral score — with withdrawal speed weighted heavily — as the tiebreaker. Fast payouts only count when the broker is regulated and holds funds safely, which keeps this list honest.",
    faq: [
      {
        q: "How fast can I withdraw my money?",
        a: "The fastest brokers here process withdrawals same day; others take a few business days. Your payment method and bank can add time on top of the broker's processing window.",
      },
      {
        q: "Why do some withdrawals take longer?",
        a: "Compliance checks, payment-method processing and weekend banking all add delay. A well-run, regulated broker processes payouts promptly and doesn't invent hurdles to keep your funds.",
      },
    ],
  },
  "well-regulated": {
    metaDescription:
      "The best well-regulated brokers of 2026, ranked by regulatory strength and client-fund protection. Safety-first neutral scoring.",
    stats: [
      { label: "Regulation", value: S.regulators },
      { label: "Trustpilot", value: S.trustpilot },
      { label: "Founded", value: S.founded },
    ],
    sort: byRegulation,
    howWePicked:
      "We ordered by regulatory strength — the tier-1 licences and fund protections that matter most — with reputation and longevity as tiebreakers. This is the ranking to start from if safety of your capital is your first priority.",
    faq: [
      {
        q: "Why does regulation matter most?",
        a: "A strong regulator enforces segregated client funds, negative-balance protection and fair conduct. It's your main safeguard if a broker fails or behaves badly, which is why we weight it highest here.",
      },
      {
        q: "What counts as strong regulation?",
        a: "Tier-1 authorities such as the FCA (UK) and ASIC (Australia) impose strict capital, conduct and client-money rules. Multiple reputable licences plus a long, clean track record are the strongest signals.",
      },
    ],
  },
};

/** Adapt a NeedConfig + its extras into the unified AngleConfig shape. */
function needToAngle(slug: string): AngleConfig | undefined {
  const need = NEEDS.find((n) => n.slug === slug);
  const extra = NEED_EXTRAS[slug];
  if (!need || !extra) return undefined;
  return {
    slug: need.slug,
    title: need.title,
    intro: need.intro,
    weights: need.weights,
    metaDescription: extra.metaDescription,
    stats: extra.stats,
    sort: extra.sort,
    filter: extra.filter,
    howWePicked: extra.howWePicked,
    faq: extra.faq,
  };
}

/** All angles in the cluster: original NEEDS (adapted) + new ANGLES. */
export const ALL_ANGLES: AngleConfig[] = [
  ...NEEDS.map((n) => needToAngle(n.slug)!).filter(Boolean),
  ...ANGLES,
];

export function getAngle(slug: string): AngleConfig | undefined {
  return ALL_ANGLES.find((a) => a.slug === slug);
}
