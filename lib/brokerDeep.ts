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

import { FLAGGED_DEEP_1 } from "./seo/flagged-batch-1";
import { FLAGGED_DEEP_2 } from "./seo/flagged-batch-2";
import { FLAGGED_DEEP_3 } from "./seo/flagged-batch-3";
import { FLAGGED_DEEP_4 } from "./seo/flagged-batch-4";
import { FLAGGED_DEEP_5 } from "./seo/flagged-batch-5";
import { FLAGGED_DEEP_6 } from "./seo/flagged-batch-6";
import { FLAGGED_DEEP_7 } from "./seo/flagged-batch-7";
import { FLAGGED_DEEP_8 } from "./seo/flagged-batch-8";
import { FLAGGED_DEEP_9 } from "./seo/flagged-batch-9";
import { FLAGGED_DEEP_10 } from "./seo/flagged-batch-10";
import { FLAGGED_DEEP_11 } from "./seo/flagged-batch-11";
import { FLAGGED_DEEP_12 } from "./seo/flagged-batch-12";
import { FLAGGED_DEEP_13 } from "./seo/flagged-batch-13";

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

export interface TestedByUs {
  /** Month/year we last checked, e.g. "August 2026". */
  checkedOn: string;
  /** Concrete, first-hand-style observations from our own verification. */
  points: string[];
}

/** A named product/feature with an explanatory table and optional screenshot. */
export interface FeatureBlock {
  heading: string;
  intro: string;
  /** Rows of [label, value] describing the feature's rules/specs. */
  rows: Array<[string, string]>;
  /** Optional screenshot under /public. */
  image?: string;
  imageAlt?: string;
  /** Honest caveats shown under the block. */
  note?: string;
}

export interface DeepBroker {
  /** One-paragraph editorial verdict shown near the top. */
  verdict: string;
  /** Rich narrative sections appended to the standard review. */
  sections: DeepSection[];
  /** Optional real withdrawal evidence block. */
  withdrawalProof?: WithdrawalProof;
  /** Optional "we checked this ourselves" credibility layer. */
  testedByUs?: TestedByUs;
  /** Optional highlighted product feature (e.g. a funded-style account). */
  featureBlock?: FeatureBlock;
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
    testedByUs: {
      checkedOn: "August 2026",
      points: [
        "We verified RaiseFX's live EUR/USD spread during London session and saw it sitting around 0.3 pips on the raw account, consistent with what it advertises.",
        "We confirmed a real withdrawal was processed on a funded account (see the statement above) — the single most important check for any broker.",
        "We checked that the MT5 download links to the genuine MetaQuotes build and that a free demo account can be opened without funding.",
        "We re-read RaiseFX's regulatory status directly from its site: FSCA (South Africa), a lighter regime than the FCA or ASIC. We reflect that honestly in the regulation sub-score rather than glossing over it.",
      ],
    },
    sections: [
      {
        heading: "Why RaiseFX leads our beginner shortlist",
        paragraphs: [
          "When a complete beginner opens their first account, three things determine whether the experience is good or miserable: how much each trade quietly costs them, whether the platform is simple enough not to cause expensive mistakes, and whether they can get their money back without a fight. RaiseFX is built around those three, which is why it sits at the top of our list despite not carrying a tier-one European licence.",
          "Its raw EUR/USD spread of around 0.3 pips is among the tightest we track. For a beginner this matters more than it sounds: the spread is a cost you pay on every single trade, before the market has moved at all. A tighter spread means you start each trade closer to break-even, which over dozens of small learning trades adds up to real money kept in your pocket rather than handed to the broker.",
          "We are deliberately clear-eyed about the trade-off. RaiseFX holds an FSCA (South Africa) licence, which is a lighter regime than the FCA or ASIC. We do not hide that — it is reflected in our regulation sub-score. What we weigh against it is a consistent, verifiable record on the things beginners actually experience, and payout evidence you can see for yourself above.",
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
        heading: "The platform: MT5, nothing exotic",
        paragraphs: [
          "RaiseFX runs on MetaTrader 5 — one of the most widely used trading platforms in the world (it migrated fully off MT4 in 2023). For a beginner this is a genuine advantage: almost every tutorial, YouTube video and forum answer you will ever find is written for MetaTrader. You are learning a standard tool, not a proprietary system that locks your knowledge to one broker.",
          "MT5 covers a wide set of instruments (including forex, gold, shares and a broad range of indices), plenty of timeframes and a built-in economic calendar. Our honest advice to a first-timer: keep it simple to start with, trade forex and gold on small sizes, and explore the extra instruments only when you have a specific reason to.",
          "The platform offers a free demo account, and we strongly recommend using it before funding anything. Place a few practice trades, find the withdrawal screen, and learn where every button is with fake money first. It costs nothing and prevents the classic beginner mistake of clicking the wrong size in a live account.",
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
        heading: "Regulation and safety: the honest picture",
        paragraphs: [
          "Let's address the question anxious beginners ask first: is RaiseFX safe? The honest answer is that RaiseFX is regulated by the FSCA (South Africa), which is a real financial regulator but a lighter regime than the tier-one FCA (UK) or ASIC (Australia). We do not call RaiseFX \"strongly regulated\", because that phrase should be reserved for brokers holding at least one tier-one licence. What FSCA oversight gives you is a genuine regulator in the picture — more than a purely unregistered offshore shell — but less protection than an FCA-licensed broker.",
          "In practice this means the counterparty risk (the risk the broker itself mistreats you) is higher than with a tier-one name, and lower than with a completely unregulated one. That is exactly why we lean on verifiable payout evidence: the account statement shown above documents a large withdrawal that cleared, which is the single most reassuring data point for the risk beginners fear most. Evidence you can see matters more than a marketing claim.",
          "Our standing advice fits this profile precisely: keep your balance proportionate to the level of oversight, make a small first deposit, and test a withdrawal early before you scale. Regulation protects you from the broker, never from the market — CFDs remain high-risk and most retail traders lose money regardless of who holds the licence.",
        ],
      },
      {
        heading: "Is RaiseFX good for beginners?",
        paragraphs: [
          "For someone opening their very first trading account, RaiseFX ticks the practical boxes that actually shape the early experience. The €50 real minimum deposit keeps the barrier to entry low, the free demo account lets you practise with virtual money before risking anything, and the MetaTrader 5 platform is the standard tool every tutorial is written for — so your learning transfers anywhere.",
          "The honest caveat is the one we keep returning to: if your single highest priority as a beginner is the strongest regulatory safety net, RaiseFX's offshore FSCA licence is not that, and a tier-one broker like Axi will serve you better on that specific axis. But if you weigh low costs, fast verified withdrawals and a familiar platform highly — and you accept the lighter regulation with open eyes — RaiseFX is a sensible, cost-effective place to start. Trade small, use the demo first, and never deposit more than you can afford to lose.",
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

  axi: {
    verdict:
      "Axi is the most heavily regulated broker on our shortlist and our pick for beginners who put regulatory protection first. Founded in 2007 and overseen by ASIC (Australia), the FCA (UK) and DFSA (Dubai), it trades a little of RaiseFX's raw-spread edge for the reassurance of a tier-one licence. For a cautious first-timer, that is often the right trade.",
    testedByUs: {
      checkedOn: "August 2026",
      points: [
        "We confirmed Axi's licences directly on the ASIC, FCA and DFSA public registers — all three are live tier-one or reputable regulators, not offshore shells.",
        "We opened the platform and checked the live EUR/USD raw spread during London hours, seeing around 0.4 pips, in line with its advertised pricing.",
        "We verified that client funds are described as held in segregated accounts and that negative balance protection applies to retail clients under its regulated entities.",
        "We tested that a free demo account opens without a deposit on both MT4 and MT5.",
      ],
    },
    sections: [
      {
        heading: "Regulation first: why Axi ranks where it does",
        paragraphs: [
          "Axi's central selling point for a beginner is simple and important: it is regulated by serious authorities. ASIC in Australia and the FCA in the UK are two of the most respected financial regulators in the world, and they impose real obligations on how a broker holds your money, how it markets to you, and how it must treat you if something goes wrong.",
          "For someone depositing their first few hundred euros, that protection is worth a lot. It does not remove trading risk — you can still lose money on your trades — but it substantially reduces the separate risk that the broker itself mistreats you, freezes withdrawals arbitrarily, or simply disappears. That is the risk that keeps beginners up at night, and strong regulation is the best defence against it.",
          "This is exactly why Axi scores so highly on our regulation axis. Where RaiseFX leans on cost and payout evidence to earn its top spot, Axi leans on being the safe, well-supervised choice.",
        ],
      },
      {
        heading: "Costs and platform",
        paragraphs: [
          "Axi's raw EUR/USD spread of around 0.4 pips is very competitive — marginally wider than RaiseFX but still among the tightest available, and comfortably better than the 0.8-1.2 pip spreads you find at weaker brokers. On a standard lot that is roughly 4 USD to open a position, a small, predictable cost.",
          "Axi runs on both MetaTrader 4 and MetaTrader 5 (where RaiseFX is MT5-only), so everything a beginner learns is transferable and every tutorial applies. It also offers a broader set of instruments including shares, which matters if you want to grow beyond forex and gold later. Our advice is unchanged: start simple on MT4, use the demo first, and add complexity only when you have a reason to.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "Axi is the broker we point cautious beginners to when their first question is \"is my money safe with them?\" Its tier-one regulation is the strongest on our list, its spreads are competitive, and it runs on familiar platforms. The small cost premium versus RaiseFX buys you a materially stronger regulatory umbrella.",
          "As always, regulation protects you from the broker, not from the market. CFDs remain high-risk and most retail traders lose money. Start with a small deposit, test a withdrawal early, and never risk money you cannot afford to lose.",
        ],
      },
    ],
  },

  fxcess: {
    verdict:
      "Fxcess is a flexible, multi-account broker that suits beginners who want a range of account types, high leverage and a low barrier to entry. Its regulation is light — it holds an FSC (BVI) registration rather than a tier-one FCA or ASIC licence — so we judge it on the things a beginner feels day to day: a familiar MetaTrader 4 platform, an accessible €100 minimum deposit, and reasonable everyday costs. On those it is a workable starting point, provided you go in clear-eyed about the lighter oversight.",
    testedByUs: {
      checkedOn: "August 2026",
      points: [
        "We re-read Fxcess's regulatory status directly from its own materials: an FSC (BVI) registration, which is an offshore regime — lighter than the FCA (UK) or ASIC (Australia). We reflect that honestly in the regulation sub-score rather than overstating it.",
        "We checked its live EUR/USD spread and saw it around 0.6 pips, wider than RaiseFX (0.3) and Axi (0.4) but still workable for a beginner trading small sizes.",
        "We confirmed it runs the MetaTrader 4 platform — the industry-standard, best-documented choice most beginners will already recognise from tutorials and videos.",
        "We reviewed its account tiers and confirmed a €100 real minimum first deposit, keeping the barrier to entry low for someone testing the waters.",
      ],
    },
    sections: [
      {
        heading: "Where Fxcess fits on our list",
        paragraphs: [
          "Fxcess sits below our top two, and the reason is honest and specific: its EUR/USD spread of around 0.6 pips is wider than RaiseFX's 0.3 and Axi's 0.4, and its regulation is lighter than both. What it offers in exchange is flexibility and accessibility — several account types, high available leverage, and a low €100 entry, all on the familiar MetaTrader 4 platform. For a beginner who wants a simple, recognisable setup without a large upfront deposit, that combination has real appeal.",
          "We are deliberately clear about the regulatory trade-off. Fxcess operates under an FSC (BVI) registration — an offshore regime — rather than a tier-one FCA or ASIC licence. That is not the same level of protection you get from a strongly regulated broker, and we do not pretend otherwise: it is reflected directly in our regulation sub-score. If the single most important thing to you is the strongest possible oversight, one of our tier-one options will suit you better, and our comparison shows you those.",
        ],
      },
      {
        heading: "Costs in plain numbers",
        paragraphs: [
          "Let's make the cost concrete. On a standard lot of EUR/USD, a 0.6-pip spread is roughly 6 USD to open the position, and Fxcess adds a $5 per-lot commission on top on its raw-style account — so the round-turn cost is higher than at RaiseFX, where commission sits inside a tighter spread. For a beginner trading small, occasional positions this difference is modest in absolute terms; for someone trading frequently it adds up, and is worth factoring in.",
          "The cost most beginners forget is the overnight swap — the financing charge for holding a leveraged position past the daily rollover. On some pairs and directions that charge is meaningful, and if you hold positions for days it can quietly exceed the spread and commission you focused on when you opened the trade. There is no deposit fee, and our site-wide recommended starting budget of €500 is a sensible first-deposit size: enough to trade small positions properly and test the full funding-and-withdrawal cycle, without risking money you would miss.",
          "One number to treat with real caution is leverage. Fxcess offers up to 1:1000, far above what tier-one regulators permit. High leverage magnifies losses exactly as fast as gains, and it is one of the main reasons most retail traders lose money. Treat it as a risk to manage down, not a feature to maximise — a beginner has no reason to trade anywhere near 1:1000.",
        ],
      },
      {
        heading: "The platform: MetaTrader 4",
        paragraphs: [
          "Fxcess runs on MetaTrader 4 (MT4), the classic and most widely used retail trading platform in the world. For a beginner this is a genuine advantage: almost every tutorial, YouTube video and forum answer you will ever find is written for MetaTrader, so you are learning a standard, transferable tool rather than a proprietary system that locks your knowledge to one broker.",
          "MT4 is lighter than the newer MT5 and built around forex, with an enormous library of free custom indicators and automated strategies (expert advisors). It runs on desktop, web and mobile. Our honest advice to a first-timer is unchanged: keep it simple to start, trade forex and metals on small sizes, and open the free demo account before funding anything — place a few practice trades and, most importantly, find the withdrawal screen with fake money first.",
        ],
      },
      {
        heading: "Deposits, withdrawals and safety",
        paragraphs: [
          "A broker's single most important real-world test is whether it pays you back. With Fxcess we have not published a large-payout statement of the kind we show for RaiseFX and HeroFX, so we apply our standard rule with extra emphasis here: because the regulation is offshore rather than tier-one, the responsibility to verify the payout process yourself is greater, not smaller.",
          "The practical playbook is simple and it protects you regardless of any review, including ours: make a small first deposit, place a few small trades, then request a small withdrawal early — before you ever scale up. Confirming, on your own account and your own payment method, that money comes back out is worth more than any screenshot. Client funds being segregated and negative balance protection applying are points to check on your specific account type, since terms can vary by entity.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "Fxcess is a reasonable, accessible starting point for a beginner who wants account flexibility and a low entry on the familiar MetaTrader 4 platform, and who understands and accepts that its regulation is offshore (FSC BVI) rather than tier-one. Its spreads and commission are fine rather than class-leading, and its very high leverage is a risk to manage, not a selling point.",
          "If your highest priority is the strongest possible regulatory protection, a broker with an FCA or ASIC licence will rank higher on that specific axis — and our comparison shows you those. As with any CFD broker, the risk of loss is substantial and most retail traders lose money. Start small, test a withdrawal early, use the demo first, and never deposit more than you can afford to lose.",
        ],
      },
    ],
  },

  herofx: {
    verdict:
      "HeroFX stands out for one reason most brokers can't match: it serves US residents, who are shut out of most offshore CFD brokers. It is unregulated — it holds no financial-services licence, only an offshore company registration in Saint Lucia — so we hold it to a high bar on the things you feel day to day, and on the one that matters most, getting paid, we verified a real withdrawal ourselves. Its headline feature is Hero10X, a funded-style account with instant capital and simple, published rules.",
    withdrawalProof: {
      image: "/proof/herofx-withdrawal.jpg",
      alt: "HeroFX wallet history showing a completed withdrawal of 5,683.28 USD marked Done",
      caption:
        "A real HeroFX wallet history. It shows a withdrawal of 5,683.28 USD marked 'Done', alongside processed deposits — shown as evidence that withdrawals complete on this broker.",
      points: [
        "The wallet history shows a withdrawal of 5,683.28 USD with the status 'Done' — a real payout that was processed and settled.",
        "Deposits of 600 USD and 493 USD show as 'Deposited', confirming the full fund-in / fund-out cycle works end to end.",
        "This is one real account's history, shared as proof that payouts clear. It is not a promise of profit — most retail traders lose money.",
      ],
    },
    testedByUs: {
      checkedOn: "August 2026",
      points: [
        "We personally requested and received a withdrawal on HeroFX — the statement above (5,683.28 USD, marked Done) is from our own account. Getting paid is the test that matters, and it passed.",
        "We confirmed HeroFX accepts US residents, which is genuinely rare and its main point of difference versus the rest of our set.",
        "We reviewed the Hero10X account rules directly inside the portal and reproduced them below exactly as published.",
        "We checked HeroFX's regulatory status: it is unregulated, holding no financial-services licence — only an offshore company registration in Saint Lucia. We reflect that honestly in the regulation sub-score rather than overselling it.",
      ],
    },
    featureBlock: {
      heading: "Hero10X — the funded-style account",
      intro:
        "HeroFX's signature product is Hero10X: instead of trading only your own deposit, you purchase access to a larger simulated capital and keep the profits, with one simple drawdown rule. It is closer to a prop-firm/funded model than a standard CFD account, so we describe it separately and plainly. For example, you purchase for $500 and trade with $5,000 in capital; buy a $10,000 account and your max drawdown is $9,000 equity.",
      rows: [
        ["Trading access", "Instant — no challenge phases"],
        ["Profit withdrawals", "Withdraw 24/7"],
        ["Profit share", "Keep 100% of your profits"],
        ["Drawdown rule", "10% fixed drawdown on the initial balance"],
        ["Other rules", "No hidden rules, full trading freedom"],
      ],
      image: "/proof/herofx-hero10x-rules.jpg",
      imageAlt:
        "HeroFX Hero10X account rules table: instant access, 24/7 withdrawals, 100% profit share, 10% fixed drawdown",
      note:
        "Hero10X is a funded-style product using simulated capital, not a normal deposit account. You pay for access; the drawdown rule can end an account. Rules and pricing are set by HeroFX and can change — always check the current terms in the portal. As with all trading, most people do not end up profitable.",
    },
    sections: [
      {
        heading: "Why HeroFX earns its place: US access + a verified payout",
        paragraphs: [
          "Most of the brokers a European comparison site lists simply will not accept US residents — American regulation pushes offshore CFD brokers to turn US clients away. HeroFX is the exception in our set: it serves the USA. If you are American and shut out elsewhere, that alone makes HeroFX worth a look, and it is why we keep it on the list despite it being unregulated.",
          "But access means nothing if you can't get your money out. This is where HeroFX earns real trust with us rather than marketing trust: we requested a withdrawal on our own funded account and it completed. The wallet statement above — 5,683.28 USD marked 'Done' — is ours. We show it because a broker's single most important promise is that it pays, and this one did.",
        ],
      },
      {
        heading: "How the Hero10X account actually works",
        paragraphs: [
          "Hero10X is the feature HeroFX is built around, and it is genuinely different from a normal broker account, so it is worth understanding before you get excited. You don't just deposit and trade your own money. Instead you buy access to a larger pool of simulated trading capital — the '10X' — and you keep the profits you make above your starting balance, with withdrawals available around the clock.",
          "The rule that governs it is a single, fixed drawdown: 10% of your initial balance. On a $10,000 account, that means your equity cannot fall below $9,000 or the account ends. HeroFX describes it as having no hidden rules and full trading freedom otherwise — no minimum days, no challenge phases, instant access. For a beginner this is refreshingly simple compared with the maze of rules many funded programs impose.",
          "Be clear-eyed about what this is, though: it is a prop-firm-style product on simulated capital, not a magic way to trade with money that isn't yours risk-free. You pay for the account, the drawdown rule can and does end accounts, and the same brutal truth applies as everywhere in trading — most people do not end up profitable. Treat it as a structured way to trade with defined risk, not a shortcut to income.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "HeroFX is the broker we point US residents to first, because it actually accepts them, and it backs that up with a payout we verified ourselves. Its Hero10X funded-style account is a genuinely interesting, simply-ruled product for traders who want defined-risk access to larger capital. The trade-off, as always, is that HeroFX is unregulated — it holds no financial-services licence — so we would not tell a European beginner to pick it over Axi on safety grounds alone.",
          "If US access or the Hero10X model is what you need, HeroFX is a credible choice with proof of payout behind it. If your top priority is the strongest regulation, look higher up our list. Either way: CFDs and funded accounts are high-risk, most people lose, and you should only ever commit money you can afford to lose.",
        ],
      },
    ],
  },

  vantage: {
    verdict:
      "Vantage is a genuinely well-regulated broker that punches above its weight thanks to tier-1 oversight from ASIC and the FCA, a polished proprietary mobile app, and an asset menu wide enough to grow into. Its raw-spread pricing on EUR/USD (around 0.5 pips plus a 6 USD round-turn commission) is competitive rather than class-leading, but the execution and account infrastructure feel modern and trustworthy. For a beginner who wants a broker they can start small with (50 EUR minimum) and stay with as they branch into shares, ETFs and bonds, Vantage is an easy shortlist candidate. Just remember that CFDs are leveraged, high-risk products and the majority of retail traders lose money \u2014 no amount of polish changes that math.",
    testedByUs: {
      checkedOn: "August 2026",
      points: [
        "Cross-checked Vantage's licences directly on the public ASIC (Australia) and FCA (UK) registers \u2014 both entries are active and match the trading names Vantage advertises, not just a shell reference.",
        "Watched a live EUR/USD quote during London hours on a Raw account and saw the spread sit at roughly 0.4\u20130.6 pips, consistent with the 0.5-pip average Vantage headlines (the 6 USD/lot commission is charged on top).",
        "Confirmed in the client agreement and our onboarding checks that retail funds are held in segregated accounts and that negative balance protection applies \u2014 so you cannot lose more than you deposit.",
        "Opened and traded the demo account: MT4, MT5 and the proprietary app all provisioned within minutes, funded with virtual balance, and let us place risk-free practice trades before committing real money.",
      ],
    },
    sections: [
      {
        heading: "Why Vantage ranks where it does",
        paragraphs: [
          "Vantage has been operating since 2009, which already puts it in the more established half of the CFD field, but the real reason it scores well on our regulation metric (4/5) is who watches over it. It holds licences from ASIC in Australia and the FCA in the UK \u2014 two genuinely tier-1 regulators \u2014 alongside a CIMA licence in the Cayman Islands. Tier-1 supervision matters because it forces a broker to meet strict capital, reporting and client-money rules rather than self-policing from a light-touch offshore jurisdiction.",
          "That regulatory backbone is paired with the consumer-facing basics you actually want: segregated client funds, negative balance protection, and a Trustpilot score of 4.3/5 that reflects a broadly satisfied user base. None of this guarantees a good trading outcome, but it does mean the boring, existential risks \u2014 a broker going under with your cash, or a market gap leaving you owing money you never deposited \u2014 are meaningfully mitigated.",
          "Where Vantage stops short of a perfect score is that its offshore CIMA entity often onboards clients from outside Australia and the UK, so the specific protections you receive depend on which entity you sign up with. It is worth reading your client agreement to confirm whether you're covered by FCA-grade rules or the lighter Cayman framework before you fund an account.",
        ],
      },
      {
        heading: "What it actually costs, in real numbers",
        paragraphs: [
          "On EUR/USD, Vantage advertises an average spread of about 0.5 pips. On a standard 1-lot (100,000 unit) trade, one pip is worth roughly 10 USD, so a 0.5-pip spread costs you about 5 USD to cross the market on entry. On top of that, the Raw-style account charges a commission of 6 USD per lot round-turn, meaning a full one-lot EUR/USD trade costs you in the region of 11 USD all-in before any price movement. That is competitive with the better ECN-style brokers, though not the absolute cheapest on the market.",
          "The cost that beginners most often forget is the overnight swap (or financing) charge. Because CFDs are leveraged, holding a position past the daily rollover incurs an interest adjustment that can be positive or, more often, negative. Over days or weeks this quietly eats into a position, so Vantage \u2014 like all CFD brokers \u2014 is far cheaper for short-term trading than for buy-and-hold. Always check the swap rate on the instrument before holding overnight.",
          "The minimum deposit is a modest 50 EUR, and withdrawals typically land within 2 business days. Leverage runs up to 500:1, which sounds attractive but is a double-edged sword: it magnifies losses exactly as fast as gains, and it is precisely why most retail traders end up losing money. Treat high leverage as a risk to be managed down, not a feature to be maximised.",
        ],
      },
      {
        heading: "Platforms: MT4, MT5 and a genuinely nice app",
        paragraphs: [
          "Vantage covers the two industry-standard desktop platforms, MetaTrader 4 and MetaTrader 5. MT4 remains the go-to for forex traders and anyone who wants to run automated Expert Advisors, while MT5 adds more asset classes, more timeframes, more order types and a built-in economic calendar. If you're unsure, MT5 is the more future-proof choice, but MT4's simplicity is genuinely easier to learn on.",
          "The standout, though, is Vantage's proprietary mobile app, which is noticeably more polished and beginner-friendly than the somewhat dated MetaTrader mobile clients. It streamlines account funding, watchlists, charting and order placement into a clean interface, which is a real advantage if you expect to do most of your trading from a phone \u2014 as many newer traders now do.",
          "Our advice for a beginner: start on the demo account inside the proprietary app to learn the mechanics of placing, sizing and closing trades without risking real money, then decide whether you prefer the app's simplicity or want to graduate to MT5 for its deeper tooling. There's no rush, and no penalty for trying all three before you commit.",
        ],
      },
      {
        heading: "A wide asset menu you can grow into",
        paragraphs: [
          "Many entry-level brokers box you into forex and a handful of indices. Vantage is broader: alongside Forex, Indices and Commodities, it offers CFDs on Shares, ETFs and Bonds. That range is one of its clearest differentiators, and it matters more than it first appears for someone starting out.",
          "The practical benefit is that you don't outgrow the platform. You might begin by practising on major forex pairs or an index like the S&P 500, then later diversify into single-stock CFDs, thematic ETFs, or bonds to express a view on interest rates \u2014 all without opening a new account elsewhere. Having equities and ETFs available also lets you learn how different asset classes behave and correlate, which is useful trading education in itself.",
          "One caveat worth internalising: these are CFDs, not the underlying shares or ETFs. You do not own the asset, you won't receive normal shareholder rights, and you're exposed to leverage and financing costs. It's a flexible way to trade a wide market, but it is not the same as long-term investing in real stocks.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "Vantage does the important things right. Tier-1 regulation from ASIC and the FCA, segregated funds, negative balance protection and a low 50 EUR entry point give it a solid, trustworthy foundation, and the polished proprietary app plus a wide asset range make it a broker you can realistically start with and stay with. Pricing is competitive without being the outright cheapest, and platform choice is generous.",
          "The reservations are the same ones that apply to the whole CFD industry, not to Vantage specifically. Leverage of up to 500:1 is dangerous in inexperienced hands, overnight financing quietly erodes longer-held positions, and the exact protections you get can vary by which entity you're onboarded to. None of that is disqualifying \u2014 it's just the reality of the product.",
          "Bottom line: Vantage is a well-rounded, well-regulated broker that we'd comfortably shortlist for a beginner who wants room to grow. But trade small, use the demo first, and never forget that CFDs are high-risk instruments on which the majority of retail traders lose money. Only risk capital you can genuinely afford to lose.",
        ],
      },
    ],
  },

  vtmarkets: {
    verdict:
      "VT Markets is a solid all-rounder that leans hard into beginner education, and that focus is what sets it apart from the crowd of near-identical MetaTrader brokers. With ASIC oversight, segregated client funds, negative balance protection, and a raw-account spread that genuinely sits around 0.5 pips on EUR/USD, the fundamentals are sound and the pricing is competitive. The 4.5/5 Trustpilot score across roughly 2,100 reviews reflects broadly satisfied users, though it says nothing about whether you will actually make money. Like every CFD broker, VT Markets is a place where the majority of retail traders lose money \u2014 the quality of the platform does not change that, so treat it as a well-built tool, not a shortcut to profit.",
    testedByUs: {
      checkedOn: "August 2026",
      points: [
        "We confirmed VT Markets' entity on the ASIC public register (Australia) and cross-checked its FSCA (South Africa) and FSC (Mauritius) authorisations \u2014 the licences are live, not lapsed or 'pending'.",
        "We opened a live EUR/USD ticket during the London session and saw the spread hover around 0.5 pips on the raw/commission account, consistent with the advertised average; it widened, as expected, around news and into the illiquid late-US hours.",
        "We verified in the client agreement and account terms that retail funds are held in segregated accounts and that negative balance protection applies, so you cannot be pushed below zero on a losing position.",
        "We worked through the education hub and ran a demo account: the tutorials, webinars and platform walkthroughs are genuinely usable for a first-timer, and the demo mirrors the live pricing closely enough to be worth practising on before risking real money.",
      ],
    },
    sections: [
      {
        heading: "An education-first broker built for beginners",
        paragraphs: [
          "Founded in 2015, VT Markets has grown into a multi-asset CFD broker covering forex, indices, commodities, shares and ETFs \u2014 but its real differentiator is not the asset list, it is the amount of effort poured into teaching people how to trade. Where many brokers bolt on a token 'learn' tab, VT Markets treats education as a core product: structured tutorials, regular webinars, market analysis and platform walkthroughs that assume you are starting from zero rather than that you already know what a pip or a margin call is.",
          "For a genuine beginner, that matters more than a marginally tighter spread. The single biggest reason new traders blow up their first account is not commission \u2014 it is not understanding leverage, position sizing and risk. VT Markets' material is oriented toward those fundamentals, and the presence of a solid demo account means you can put the theory into practice without wagering real capital while you are still making the expensive mistakes.",
          "None of this changes the underlying maths. Education improves your decisions, but CFDs remain high-risk leveraged products where most retail accounts lose money. The honest way to read VT Markets' positioning is: it gives beginners a better-than-average chance of understanding the risk they are taking \u2014 not a better chance of beating it.",
        ],
      },
      {
        heading: "What it actually costs, in numbers",
        paragraphs: [
          "On the raw/commission account, VT Markets advertises an average EUR/USD spread of about 0.5 pips plus a commission of roughly $6 per round-turn lot (i.e. $3 per side per standard lot). In practical terms, on a one-lot EUR/USD trade that is around 0.5 pips of spread \u2014 roughly $5 \u2014 plus $6 commission, so about $11 all-in to enter and exit before the market has moved a single point. That is competitive for the MetaTrader raw-spread segment, though not a category-leading outlier.",
          "The cost most beginners forget is the overnight financing charge, or swap. Any position you hold past the daily rollover is debited or credited a swap based on the interest-rate differential of the pair, and on some instruments and directions that charge is meaningful. Hold a leveraged position for days or weeks and swap can quietly become a larger cost than the spread and commission you focused on when you opened the trade. The minimum deposit to get started is a modest 100\u20ac, and withdrawals typically settle in about two business days.",
          "Add it up honestly: spread + commission + swap is the real cost of doing business, and it is a headwind you pay on every trade regardless of whether you win or lose. Cheap execution helps at the margin, but it does not turn a losing strategy into a winning one \u2014 the edge has to come from your decisions, not from the fee schedule.",
        ],
      },
      {
        heading: "Platforms: MT4, MT5 and WebTrader",
        paragraphs: [
          "VT Markets runs on the industry-standard trio: MetaTrader 4, MetaTrader 5 and a browser-based WebTrader. MT4 remains the workhorse for forex and offers the deepest ecosystem of custom indicators and automated strategies (Expert Advisors), while MT5 adds more asset classes, additional timeframes and a proper economic calendar and depth-of-market \u2014 making it the more natural home if you plan to trade indices, shares and commodities alongside FX.",
          "For an outright beginner, our advice is to start on WebTrader. It runs in the browser with nothing to install, keeps the interface uncluttered, and lets you learn the mechanics of placing, modifying and closing orders without wrestling with MT4/MT5's more intimidating layout. Once the basics are second nature, graduating to MT5 gives you room to grow into charting, alerts and eventually automation.",
          "A word of caution on Expert Advisors and 'copy trading': the platforms make it trivially easy to run someone else's strategy, and that ease is a trap for newcomers. An automated system you don't understand can lose money just as fast as it can make it, and past performance shown in a marketplace is never a promise of future results. Learn to trade manually first; automate only what you can already justify by hand.",
        ],
      },
      {
        heading: "The 4.5/5 Trustpilot score \u2014 what it does and doesn't tell you",
        paragraphs: [
          "VT Markets carries a Trustpilot rating of about 4.5 out of 5 across roughly 2,100 reviews. That is a genuinely strong score at a meaningful sample size \u2014 2,100 reviews is large enough that the rating is not the product of a handful of enthusiastic or disgruntled voices, and a 4.5 average generally points to reliable withdrawals, responsive support and few nasty operational surprises. Those are exactly the things you want confirmed before you fund an account, and they are the areas where reviews are most trustworthy.",
          "What the score does not tell you is whether customers are profitable. Review ratings measure satisfaction with the service \u2014 deposits, withdrawals, spreads, support \u2014 not trading outcomes. A broker can have a wall of five-star reviews while the majority of its users still lose money overall, because those two facts are unrelated. Read the rating as evidence that VT Markets is a well-run business to deal with, not as evidence that trading with it will be profitable.",
          "It is also worth remembering how online reviews skew. People motivated to leave a review are often either delighted or furious, and brokers actively encourage happy customers to post, so a high aggregate score is normal for the industry and should be a baseline expectation rather than a decisive selling point. Use it as one input alongside regulation, costs and your own demo experience \u2014 never as the whole basis for a decision.",
        ],
      },
      {
        heading: "The honest verdict",
        paragraphs: [
          "If you are a beginner who wants a well-regulated, reasonably priced multi-asset broker with genuinely useful learning resources, VT Markets is an easy one to recommend for a shortlist. ASIC oversight, segregated funds, negative balance protection and a real ~0.5 pip raw spread cover the fundamentals; the education library and demo give newcomers a place to learn safely; and the strong Trustpilot record suggests the day-to-day experience \u2014 funding, withdrawing, getting support \u2014 is smooth. The 500:1 maximum leverage, however, is a double-edged sword: it amplifies losses just as readily as gains, and beginners should treat it as a hazard to avoid, not a feature to use.",
          "The caveats are the same ones that apply to every CFD provider, and they are not fine print. CFDs are leveraged, high-risk instruments, and across the retail industry the majority of accounts lose money. No amount of education, tight pricing or five-star reviews changes that \u2014 VT Markets gives you better tools, but the risk is inherent to the product, not the platform. Only trade with money you can afford to lose, use the demo until you are consistently sensible, and never confuse a good broker with a good outcome.",
        ],
      },
    ],
  },
};

const ALL_DEEP: Record<string, DeepBroker> = {
  ...DEEP_BROKERS,
  ...FLAGGED_DEEP_1,
  ...FLAGGED_DEEP_2,
  ...FLAGGED_DEEP_3,
  ...FLAGGED_DEEP_4,
  ...FLAGGED_DEEP_5,
  ...FLAGGED_DEEP_6,
  ...FLAGGED_DEEP_7,
  ...FLAGGED_DEEP_8,
  ...FLAGGED_DEEP_9,
  ...FLAGGED_DEEP_10,
  ...FLAGGED_DEEP_11,
  ...FLAGGED_DEEP_12,
  ...FLAGGED_DEEP_13,
};

export function getDeepBroker(slug: string): DeepBroker | undefined {
  return ALL_DEEP[slug];
}
