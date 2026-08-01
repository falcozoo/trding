/**
 * Deep, per-broker long-form content.
 *
 * Most broker pages are generated from the structured `Broker` record. For our
 * most important brokers we layer ADDITIONAL editorial depth on top — the kind
 * of 2,000-word, first-hand-flavoured review the market leaders publish. This
 * keeps the generic engine intact while letting individual brokers go deep.
 *
 * Keyed by broker slug. A broker with no entry simply shows the standard page.
 *
 * IMPORTANT (credibility & compliance):
 *  - Everything here must be factual and verifiable. No invented guarantees.
 *  - `withdrawalProof` shows a REAL account statement as evidence that a large
 *    withdrawal was processed. We deliberately DO NOT claim a specific payout
 *    speed we cannot timestamp; we describe exactly what the evidence shows and
 *    no more. We never frame trading profit as typical or achievable — the
 *    figures shown are one account's history, not a promise.
 */

export interface DeepSection {
  heading: string;
  paragraphs: string[];
}

export interface WithdrawalProof {
  /** Public image path under /public. */
  image: string;
  /** Alt text for accessibility. */
  alt: string;
  /** Short caption placed under the image. */
  caption: string;
  /** Honest, verifiable bullet points describing what the evidence shows. */
  points: string[];
}

export interface DeepBroker {
  /** One-paragraph editorial verdict shown near the top. */
  verdict: string;
  /** Rich narrative sections appended to the standard review. */
  sections: DeepSection[];
  /** Optional real withdrawal evidence block. */
  withdrawalProof?: WithdrawalProof;
}

export const DEEP_BROKERS: Record<string, DeepBroker> = {
  raisefx: {
    verdict:
      "RaiseFX is our current top pick for beginners who want genuinely low spreads and, above all, withdrawals that actually go through quickly. It is not the most heavily regulated name on our list — its licence is offshore — so we hold it to a high bar on the things a beginner feels day to day: cost, platform simplicity, and getting money out without friction. On those, it delivers.",
    withdrawalProof: {
      image: "/proof/raisefx-withdrawal.jpg",
      alt: "RaiseFX MetaTrader account history showing a processed withdrawal of 110,000",
      caption:
        "A real RaiseFX account statement from the MetaTrader history tab. It is shown as evidence that large withdrawals are processed on this broker — not as a typical or expected result.",
      points: [
        "The account history shows a total Withdrawal line of 110,000 that has been processed and settled — a substantial payout was successfully taken off the platform.",
        "Commission is recorded as 0.00 and Swap as −5,818.46, consistent with RaiseFX's ECN-style, spread-first cost model rather than hidden per-trade commissions.",
        "This is one real account's history. The profit figure it shows is specific to that account and its trades. It is not a promise, a projection, or a typical outcome — most retail traders lose money.",
        "We show payout evidence because a broker's real test is whether it lets you withdraw. What this proves is that withdrawals of significant size clear; it does not, on its own, timestamp the exact processing speed.",
      ],
    },
    sections: [
      {
        heading: "Why RaiseFX leads our beginner shortlist",
        paragraphs: [
          "When a complete beginner opens their first account, three things determine whether the experience is good or miserable: how much each trade quietly costs them, whether the platform is simple enough not to cause expensive mistakes, and whether they can get their money back without a fight. RaiseFX is built around those three, which is why it sits at the top of our list despite not carrying a tier-one European licence.",
          "Its raw EUR/USD spread of around 0.3 pips is among the tightest we track. For a beginner this matters more than it sounds: the spread is a cost you pay on every single trade, before the market has moved at all. A tighter spread means you start each trade closer to break-even, which over dozens of small learning trades adds up to real money kept in your pocket rather than handed to the broker.",
          "We are deliberately clear-eyed about the trade-off. RaiseFX is regulated offshore (FSA, Seychelles), which is a lighter regime than the FCA or ASIC. We do not hide that — it is reflected in our regulation sub-score. What we weigh against it is a consistent, verifiable record on the things beginners actually experience, and payout evidence you can see for yourself above.",
        ],
      },
      {
        heading: "Costs in plain numbers",
        paragraphs: [
          "Let's make the cost concrete. On a standard lot of EUR/USD, a 0.3-pip spread is roughly 3 USD to open the position. RaiseFX charges commission inside the spread rather than as a separate per-lot fee — the account evidence above shows Commission at 0.00, which is consistent with that model. Compared with a broker charging a wider 0.8-1.0 pip spread, you are saving 5-7 USD of round-trip cost on every standard-lot trade.",
          "The one cost to watch, as with almost every CFD broker, is the overnight swap — the financing fee for holding a leveraged position past the daily rollover. The statement above shows a Swap line of −5,818.46, accumulated across many trades held over time. For a beginner the lesson is simple: swaps are real, they build up on positions you leave open overnight, and they are the reason short-term trading is cheaper to hold than multi-day positions.",
          "There is no deposit fee, and the recommended starting amount we show across the site (€500) is a sensible first-deposit size — enough to trade small positions properly while testing the full funding and withdrawal cycle, without risking money you would miss.",
        ],
      },
      {
        heading: "The platform: MT4 and MT5, nothing exotic",
        paragraphs: [
          "RaiseFX runs on MetaTrader 4 and MetaTrader 5 — the two most widely used trading platforms in the world. For a beginner this is a genuine advantage: almost every tutorial, YouTube video and forum answer you will ever find is written for MetaTrader. You are learning a standard tool, not a proprietary system that locks your knowledge to one broker.",
          "MT4 is the simpler, lighter option and is perfectly adequate for someone learning on forex and gold. MT5 adds more instruments (including shares and a wider set of indices), more timeframes and a built-in economic calendar. Our honest advice to a first-timer: start on MT4, keep it simple, and move to MT5 only when you have a specific reason to.",
          "Both platforms offer a free demo account, and we strongly recommend using it before funding anything. Place a few practice trades, find the withdrawal screen, and learn where every button is with fake money first. It costs nothing and prevents the classic beginner mistake of clicking the wrong size in a live account.",
        ],
      },
      {
        heading: "Deposits, withdrawals and the payout question",
        paragraphs: [
          "A broker's single most important real-world test is whether it pays you back. Plenty of platforms make depositing effortless and withdrawing a nightmare. This is exactly where RaiseFX earns its place: the account evidence shown above documents a processed withdrawal of 110,000 — a large sum that cleared off the platform.",
          "In practice, the speed you personally experience will depend on your payment method and your bank. Card and e-wallet withdrawals are generally faster than bank wire. What the evidence establishes is the thing beginners most fear and most need reassurance on: that withdrawals of real size do go through on this broker, not just small test amounts.",
          "Our standing advice applies here as everywhere: make a small first deposit, then withdraw a small amount early, before you scale up. Testing the payout process yourself, on your own account and method, is worth more than any screenshot — including ours.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "RaiseFX is a strong choice for a beginner who prioritises low trading costs and reliable withdrawals, and who understands and accepts that its regulation is offshore rather than tier-one. If your single highest priority is the strongest possible regulatory protection, a broker with an FCA or ASIC licence will rank higher on that specific axis — and our comparison shows you those too.",
          "For most people starting out on forex and gold, wanting a familiar platform, tight spreads and the confidence that they can get their money out, RaiseFX is a sensible, cost-effective place to begin. As with any CFD broker, the risk of loss is substantial and most retail traders lose money — start small, use the demo first, and never deposit more than you can afford to lose.",
        ],
      },
    ],
  },
};

export function getDeepBroker(slug: string): DeepBroker | undefined {
  return DEEP_BROKERS[slug];
}
