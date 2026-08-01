/**
 * SEO satellite guides — branded broker clusters.
 *
 * Two clusters of plain-English, beginner-focused guides that answer
 * high-intent branded searches for two brokers we list: HeroFX and Fxcess.
 *
 * Tone matches lib/lessons.ts: honest about risk, no hype, no signals,
 * no "get rich" framing. We are transparent about offshore regulation,
 * about the fact that funded/simulated-capital products (like Hero10X)
 * are hard and most traders lose, and we treat an EU (CySEC) licence as
 * a genuine positive without pretending it removes all risk.
 *
 * All slugs are unique and do not collide with the modules in lessons.ts
 * (what-is-trading, how-to-start, risk-management-basics,
 * trading-strategies-overview, trading-psychology).
 */

import type { Lesson } from "../lessons";

/* ================================================================== */
/* HeroFX cluster                                                     */
/* ================================================================== */

export const CLUSTER_HEROFX: Lesson[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "herofx-review",
    title: "HeroFX review: what it is and who it suits",
    summary:
      "An honest, plain-English review of HeroFX — how it is regulated, who can open an account, what you can trade, and the trade-offs to understand before depositing.",
    category: "basics",
    level: "beginner",
    readingMinutes: 7,
    body: [
      {
        heading: "What HeroFX is in one paragraph",
        paragraphs: [
          "HeroFX is an online forex and CFD broker offering the MT4 and MT5 platforms across currencies, metals, indices and a range of CFDs. Its stand-out feature for many people is that it accepts US residents, which is unusual — most offshore brokers turn US clients away, and most US-regulated brokers offer a narrower product range. That single fact is why a lot of people end up looking at HeroFX in the first place.",
          "The honest summary is that HeroFX is a real, functioning broker with a genuine platform and genuine withdrawals — we verified a real 5,683 USD withdrawal ourselves — but it is regulated offshore rather than in a top-tier jurisdiction. That is a meaningful trade-off, and the rest of this review is about helping you decide whether that trade-off is acceptable for you.",
        ],
      },
      {
        heading: "Regulation: read this before anything else",
        paragraphs: [
          "HeroFX is regulated by the FSA in Seychelles. This is a real licence, but it is an offshore regime with lighter requirements than authorities such as the FCA (UK), ASIC (Australia) or CySEC (EU). In practice that means fewer protections if something goes wrong: no large investor-compensation scheme, and dispute resolution that is harder to escalate than it would be with a top-tier regulator.",
          "This does not make HeroFX a scam — plenty of legitimate brokers operate offshore, and we have confirmed real withdrawals — but it does change the risk picture. You should treat offshore regulation as a reason to keep balances modest, to withdraw profits regularly rather than letting them build up, and to never deposit money you cannot afford to lose.",
        ],
      },
      {
        heading: "What you can trade and on which platform",
        paragraphs: [
          "HeroFX runs on MetaTrader 4 and MetaTrader 5, the two most widely used retail platforms in the world. If you have used MT4 or MT5 anywhere else, you will feel at home immediately, and there are thousands of free tutorials online that apply directly. Available markets include major and minor currency pairs, gold and silver, major stock indices, and a selection of share and commodity CFDs.",
          "For a beginner, the practical point is that you do not need HeroFX-specific knowledge to place a trade — the platform is standard. What matters more is understanding the costs (covered in our HeroFX fees guide) and the leverage, because CFDs are leveraged products where losses can exceed your intuition if you size positions carelessly.",
        ],
      },
      {
        heading: "The Hero10X account",
        paragraphs: [
          "HeroFX also offers a funded-style product called Hero10X: you pay for access to a simulated-capital account, keep 100% of the profits, and trade under a fixed 10% maximum drawdown rule, with instant access and 24/7 withdrawals. It is genuinely different from most 'challenge' products because access is instant rather than gated behind a multi-phase evaluation.",
          "Be clear-eyed about what this is. Hero10X is a simulated-capital product, not your own money in a live market, and the large majority of people who buy funded-style accounts lose their access before they profit meaningfully. We explain the mechanics honestly in our dedicated 'Hero10X explained' guide — treat it as a paid skill test, not a shortcut to income.",
        ],
      },
      {
        heading: "Who HeroFX suits — and who should look elsewhere",
        paragraphs: [
          "HeroFX makes most sense for someone who specifically needs a broker that accepts US residents and wants MT4/MT5, who understands they are accepting offshore regulation in exchange for that access, and who intends to trade with money they can afford to lose. For that person it is a reasonable, verified option.",
          "If you live in a region well served by top-tier regulated brokers and you do not need any of HeroFX's specific features, you may prefer a broker under the FCA, ASIC or CySEC purely for the stronger safety net. There is no single 'best' broker — there is only the best fit for your situation, and being honest about that fit is more useful than a marketing pitch.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "herofx-us-clients",
    title: "Does HeroFX accept US clients? What US residents should know",
    summary:
      "HeroFX accepts US residents, which is rare. Here is what that means in practice, why most brokers do not, and the trade-offs to weigh as a US-based trader.",
    category: "basics",
    level: "beginner",
    readingMinutes: 6,
    body: [
      {
        heading: "The short answer",
        paragraphs: [
          "Yes — HeroFX accepts US residents, which genuinely sets it apart. The great majority of offshore forex and CFD brokers explicitly turn away US clients, and the brokers that are licensed to serve US retail traders directly tend to offer a much narrower product set. So if you are in the US and want MT4/MT5 access to a broad range of markets, HeroFX is one of relatively few doors that is actually open.",
          "That openness is the headline benefit, but it comes bundled with the reality that HeroFX is regulated offshore in Seychelles rather than by a US authority. Understanding both halves of that sentence is the whole point of this guide.",
        ],
      },
      {
        heading: "Why so few brokers accept US clients",
        paragraphs: [
          "US rules for retail forex and CFDs are strict and expensive to comply with. Regulators there impose tight leverage limits, capital requirements, reporting obligations and rules like the 'no hedging' first-in-first-out convention. Serving US clients as a registered broker is a heavy lift, so many international brokers simply choose not to.",
          "HeroFX takes a different route: it accepts US residents under its offshore Seychelles licence. That means you gain access, but you are not covered by US retail-forex protections in the way you would be with a US-registered firm. Neither approach is 'the trick' — they are different trade-offs, and you should pick with your eyes open.",
        ],
      },
      {
        heading: "What US residents actually gain",
        paragraphs: [
          "The practical gains are access and flexibility: standard MT4/MT5 platforms, a wide range of instruments, and leverage options that US-registered brokers typically cannot offer. For traders who have felt boxed in by domestic limitations, this breadth is the main attraction, and it is a real one.",
          "You also gain access to HeroFX's Hero10X funded-style account. Just remember that Hero10X is a simulated-capital product where most participants lose their access before profiting — access is not the same thing as an edge.",
        ],
      },
      {
        heading: "What US residents give up",
        paragraphs: [
          "By trading under an offshore licence, you give up the specific protections a US-registered broker would provide. There is no large US-style compensation scheme behind your funds, and if a dispute arises it is harder to escalate than it would be domestically. Higher available leverage is a double-edged sword too: it magnifies losses just as fast as gains.",
          "The sensible way to manage this is behavioural, not legal: keep your account balance modest, withdraw profits regularly rather than stockpiling them, size positions conservatively, and treat every dollar on the platform as money you can afford to lose. We verified a real 5,683 USD withdrawal from HeroFX, so withdrawals do work — but discipline still protects you better than any regulator can.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "hero10x-explained",
    title: "Hero10X explained: how the funded-style account works",
    summary:
      "A clear, honest walk-through of HeroFX's Hero10X account — simulated capital, 100% profit share, a fixed 10% drawdown, instant access and 24/7 withdrawals — and why most people still lose.",
    category: "basics",
    level: "beginner",
    readingMinutes: 7,
    body: [
      {
        heading: "What Hero10X actually is",
        paragraphs: [
          "Hero10X is a funded-style trading product. Instead of depositing your own money into a live account, you pay a one-off price for access to a simulated-capital account. You then trade that simulated capital, and you keep 100% of the profits you generate, subject to the account's rules. It is HeroFX's version of the 'prop firm challenge' idea, but with instant access rather than a multi-stage evaluation.",
          "The important mental model is this: you are buying a paid opportunity to prove and monetise trading skill, not buying income. Whether Hero10X is worth it depends entirely on whether you can trade profitably inside its rules — and most people cannot, at least not consistently.",
        ],
      },
      {
        heading: "The rules that define it",
        paragraphs: [
          "Two rules shape everything. First, a fixed 10% maximum drawdown: if your account falls 10% from its starting point, you lose access. This is a hard risk ceiling, and it is unforgiving of the oversized, emotional trades that sink most beginners. Second, you keep 100% of profits — an attractive split compared with many funded programmes that take a cut.",
          "On top of that, Hero10X gives you instant access (no waiting through evaluation phases) and 24/7 withdrawals of profit. Instant access is convenient, but it also means there is no built-in cooling-off period forcing you to demonstrate consistency before you are live — so the discipline has to come from you.",
        ],
      },
      {
        heading: "How the maths pushes you toward discipline",
        paragraphs: [
          "A 10% drawdown limit sounds generous until you translate it into behaviour. If you risk 2% of the account per trade, a run of five losers — which happens to everyone — puts you at the edge. Risk 1% per trade instead and you can absorb a much longer losing streak while you find your footing. The rule is effectively rewarding small, controlled position sizes and punishing swing-for-the-fences trading.",
          "This is why we describe Hero10X as a skill test with a price tag. The 10% ceiling is not there to trick you; it is there because real risk management lives well inside that boundary. Traders who blow the drawdown almost always did so by sizing too large, not by being unlucky.",
        ],
      },
      {
        heading: "Why most people lose — and how to think about the cost",
        paragraphs: [
          "The uncomfortable truth is that the large majority of people who buy funded-style accounts, Hero10X included, lose their access before making meaningful profit. That is not specific to HeroFX; it is the nature of the product. Simulated capital removes the pain of your own money on the line, which paradoxically makes many people trade worse, not better.",
          "Treat the purchase price as the maximum you are prepared to lose, exactly as you would a course fee, and go in expecting to fail the first attempt. If you can trade profitably inside a 10% drawdown for a sustained period, the 100% profit share and 24/7 withdrawals become genuinely attractive. If you cannot, no account structure will save you — and it is far better to learn that on a paid simulation than with your rent money in a live market.",
        ],
      },
      {
        heading: "Do withdrawals actually work?",
        paragraphs: [
          "Yes. Hero10X advertises 24/7 profit withdrawals, and withdrawals from HeroFX are real — we verified a genuine 5,683 USD withdrawal. The bottleneck for almost everyone is not the payout mechanism; it is generating consistent profit inside the drawdown rule in the first place.",
          "So the realistic sequence is: earn it, then withdraw it promptly. Do not let profit sit idle on the platform. Withdrawing regularly banks your gains and keeps you honest about what you have actually achieved versus what is still just numbers on a screen.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "herofx-withdrawal-time",
    title: "HeroFX withdrawal time: how long payouts really take",
    summary:
      "How HeroFX withdrawals work, realistic timeframes, why verification matters, and a verified real-world 5,683 USD withdrawal — plus honest tips to avoid delays.",
    category: "basics",
    level: "beginner",
    readingMinutes: 6,
    body: [
      {
        heading: "The realistic timeframe",
        paragraphs: [
          "For most methods, a HeroFX withdrawal request is processed within roughly one business day on the broker's side, after which the money moves at the speed of your chosen payment rail. E-wallets and crypto tend to arrive fastest — often the same day once approved — while card and bank transfers can take a few extra business days to settle because of the intermediaries involved.",
          "Crucially, we did not just read the marketing — we verified a real 5,683 USD withdrawal from HeroFX. That matters, because the single most common worry with any offshore broker is whether money actually comes back out. In this case it did.",
        ],
      },
      {
        heading: "Why verification (KYC) can add time the first time",
        paragraphs: [
          "The most frequent cause of a slow first withdrawal is identity verification, not the broker stalling. Like any legitimate broker, HeroFX must confirm who you are (proof of identity and address) before releasing funds. If you leave this until your first withdrawal request, you add the verification wait on top of the payout wait.",
          "The fix is simple: complete your KYC in full right after opening the account, long before you need to withdraw. Submit clear, in-date documents and make sure the name on your payment method matches your account name. Do that once and future withdrawals are far smoother.",
        ],
      },
      {
        heading: "Withdraw to where you deposited from",
        paragraphs: [
          "Anti-money-laundering rules mean brokers generally return funds to the same method you deposited with, at least up to the amount you deposited. If you funded by card, the base amount usually goes back to that card; profits above it may go to a bank transfer or e-wallet. Trying to withdraw to a brand-new, unrelated method is the classic way to trigger extra checks and delays.",
          "Plan your funding with the exit in mind. Use a payment method you are happy to receive money back on, keep it verified, and you remove most of the friction before it can happen.",
        ],
      },
      {
        heading: "Honest habits that keep withdrawals painless",
        paragraphs: [
          "Because HeroFX is regulated offshore in Seychelles, the smartest habit is to withdraw profits regularly rather than letting a large balance accumulate on the platform. This is not a prediction of trouble — we saw a real payout work — it is simply prudent risk management with any offshore broker. Small, frequent withdrawals also build your own track record of the process working.",
          "If a withdrawal is ever slower than expected, the usual culprits are incomplete verification, a mismatched payment method, or a pending bonus condition — not the broker refusing to pay. Check those first, keep your documents current, and withdraw what you have earned instead of leaving it to grow untouched.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "is-herofx-regulated",
    title: "Is HeroFX regulated? An honest look at its licence",
    summary:
      "HeroFX is regulated offshore by the FSA in Seychelles. Here is what that licence does and does not protect, how it compares to top-tier regulators, and how to trade sensibly under it.",
    category: "basics",
    level: "beginner",
    readingMinutes: 6,
    body: [
      {
        heading: "The direct answer",
        paragraphs: [
          "Yes, HeroFX is regulated — by the Financial Services Authority (FSA) of Seychelles. This is a genuine, real licence, and it is worth stating plainly because the alternative (a completely unregulated broker) is far more dangerous. But 'regulated' is not a single yes/no quality; regulators vary enormously in how much they protect you, and it would be dishonest to pretend an offshore licence is the same as a top-tier one.",
          "So the accurate summary is: HeroFX is regulated, but offshore. The rest of this guide is about what that distinction means for you in practice.",
        ],
      },
      {
        heading: "What offshore regulation gives you",
        paragraphs: [
          "An FSA Seychelles licence means HeroFX is a registered, supervised entity that must meet certain baseline standards to operate. It is not a firm with no oversight at all. Combined with the fact that we verified a real 5,683 USD withdrawal, this tells you HeroFX is a functioning, paying broker rather than a fly-by-night operation.",
          "For many traders, especially US residents who have few other options, that baseline is enough to make HeroFX usable — provided they understand the limits described next.",
        ],
      },
      {
        heading: "What it does not give you",
        paragraphs: [
          "Offshore regulation typically comes with lighter capital and conduct requirements than top-tier regimes, and usually without a large investor-compensation scheme. If a top-tier-regulated broker (FCA, ASIC, CySEC) failed, eligible clients might be compensated up to a set limit; offshore regimes generally do not offer protection on that scale. Dispute resolution is also harder to escalate.",
          "In plain terms: your main protection under an offshore broker is your own discipline, not a safety net. That is the single most important thing to internalise before depositing.",
        ],
      },
      {
        heading: "How to trade sensibly under an offshore licence",
        paragraphs: [
          "Adjust your behaviour to the regulation, not your hopes. Keep your account balance modest — only what you are actively trading. Withdraw profits regularly instead of letting them build up on the platform. Complete your identity verification early so payouts are smooth. And never deposit money you would genuinely miss.",
          "None of this is unique to HeroFX; it is simply how sensible people use any offshore broker. HeroFX is regulated, it accepts US clients, and it pays out — but the offshore nature of that regulation means the guardrails are yours to install.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "how-to-open-a-herofx-account",
    title: "How to open a HeroFX account, step by step",
    summary:
      "A calm, beginner-friendly walk-through of opening a HeroFX account: registration, verification, choosing a live or Hero10X account, funding, and starting on demo first.",
    category: "basics",
    level: "beginner",
    readingMinutes: 6,
    body: [
      {
        heading: "Before you sign up",
        paragraphs: [
          "Opening the account is the easy part; the mindset is what matters. Decide in advance how much you are willing to lose entirely, because that is the only amount you should ever fund. Remember that HeroFX is regulated offshore in Seychelles, so you are your own safety net. If you are a US resident, this is one of the few brokers that will accept you — a real advantage, but not a reason to skip these basics.",
          "It also helps to know which account you want before you start: a standard live MT4/MT5 account funded with your own money, or the Hero10X funded-style account where you pay for access to simulated capital. They are different products with different risks, and we cover Hero10X in its own guide.",
        ],
      },
      {
        heading: "Step 1 — Register and verify (KYC)",
        paragraphs: [
          "Registration is a short online form: your name, email, country and some basic details. The step that actually gates your money is verification — 'Know Your Customer' (KYC) — where you upload proof of identity (passport or ID) and proof of address (a recent utility bill or bank statement).",
          "Do this immediately, before you deposit or trade. Completing KYC up front is the single biggest thing you can do to make your first withdrawal fast later, because it removes the verification wait from the payout process.",
        ],
      },
      {
        heading: "Step 2 — Choose your account and platform",
        paragraphs: [
          "Pick between MT4 and MT5. MT4 is the long-standing forex-focused classic; MT5 is newer with more instruments and tools. If you are unsure, MT4 is a perfectly good starting point and has endless free tutorials. Then choose your account type — standard live, or Hero10X if you specifically want the funded-style route.",
          "Whichever you choose, download the platform for your device (desktop, web or mobile) and log in with the credentials HeroFX issues. Do not fund anything yet.",
        ],
      },
      {
        heading: "Step 3 — Practise on demo first",
        paragraphs: [
          "Before real money touches the platform, open a demo account and place trades with virtual funds. This teaches you the mechanics — order types, position sizing, stop losses — with zero financial risk, and it lets you confirm you are comfortable with MT4/MT5 on HeroFX specifically.",
          "Spend real time here. There is no rush, and every mistake you make on demo is a mistake you did not pay for. Most beginners underestimate how much there is to get wrong in the simple act of placing and closing a trade.",
        ],
      },
      {
        heading: "Step 4 — Fund modestly and start small",
        paragraphs: [
          "When you are ready, fund the account using a method you are happy to receive money back on — remember withdrawals generally return to your deposit method. Start with a modest amount that you can afford to lose completely, not a sum that would hurt.",
          "Then trade small. Your first live goal is not profit; it is to survive, to keep costs low, and to prove the whole loop works — including a small test withdrawal early on. We verified a real 5,683 USD withdrawal from HeroFX, but there is no substitute for confirming the process with your own account while the stakes are low.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "herofx-fees",
    title: "HeroFX fees and costs explained",
    summary:
      "A straight look at what trading on HeroFX actually costs: spreads, any commissions, overnight swap fees, and deposit/withdrawal costs — plus why costs matter more than beginners expect.",
    category: "basics",
    level: "beginner",
    readingMinutes: 6,
    body: [
      {
        heading: "Where the costs come from",
        paragraphs: [
          "Every broker gets paid, and HeroFX is no exception. The three costs that matter most are the spread (the gap between the buy and sell price), any per-trade commission on certain account types, and the overnight swap fee charged when you hold a leveraged position past the daily rollover. There can also be payment-related costs on deposits or withdrawals depending on the method you use.",
          "None of these are hidden traps — they are the normal economics of trading — but they add up, and beginners routinely underestimate them. Understanding each one is the first step to not being surprised by it.",
        ],
      },
      {
        heading: "Spreads: the cost you pay on every trade",
        paragraphs: [
          "The spread is the main cost most traders meet. On a major pair like EUR/USD it is typically a small number of pips, and it means every trade starts slightly in the red — the price has to move in your favour by at least the spread before you break even. On frequent, short-term trades this compounds quickly.",
          "The practical lesson is that spreads reward patience. Trading a well-known, liquid market a few times with a plan is far cheaper than churning many small trades a day, where the spread quietly eats your account regardless of whether you are right about direction.",
        ],
      },
      {
        heading: "Commissions and overnight swap fees",
        paragraphs: [
          "Some account types replace part of the spread with a flat commission per lot; others fold everything into a wider spread. Neither is automatically cheaper — it depends on how much you trade — so check which model your chosen HeroFX account uses. For a low-volume beginner, a simple spread-only account is usually easier to reason about.",
          "Swap fees are the cost of holding a leveraged position overnight, reflecting the interest-rate difference between the two currencies. Hold trades for days or weeks and swaps can become a real drag on returns; close intraday and they do not apply. If you plan to hold positions, factor swaps into your expectations rather than discovering them after the fact.",
        ],
      },
      {
        heading: "Deposit, withdrawal and inactivity costs",
        paragraphs: [
          "Funding and withdrawing can carry costs depending on the method — some e-wallets or card processors add a fee, while bank and crypto transfers have their own network costs. Check the specific method before you use it so there are no surprises. Because withdrawals generally return to your deposit method, choosing a low-cost, convenient method up front pays off later.",
          "Watch out for inactivity fees too, which some brokers apply to dormant accounts. If you open an account and then step away for a while, a small monthly charge can quietly erode a balance you are not watching. If you are going to be inactive, it is often cleaner to withdraw and close down rather than leave money idle — a habit that fits the sensible, offshore-aware approach we recommend for HeroFX throughout these guides.",
        ],
      },
    ],
  },
];

/* ================================================================== */
/* Fxcess cluster                                                     */
/* ================================================================== */

export const CLUSTER_FXCESS: Lesson[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "fxcess-review",
    title: "Fxcess review: a flexible multi-account broker",
    summary:
      "An honest review of Fxcess — its EU CySEC licence, flexible account types, MT4/MT5/WebTrader platforms, tight EUR/USD spreads and low entry deposit — and who it suits.",
    category: "basics",
    level: "beginner",
    readingMinutes: 7,
    body: [
      {
        heading: "What Fxcess is in one paragraph",
        paragraphs: [
          "Fxcess is an online forex and CFD broker built around flexibility: it offers several account types to suit different trading styles, three ways to trade (MT4, MT5 and a browser-based WebTrader), and a low entry deposit that keeps the door open for beginners. Spreads on EUR/USD run from around 0.6 pips, which is competitive for a retail broker.",
          "Its most reassuring feature is regulation. Fxcess holds a CySEC licence in Cyprus — an EU regulator — alongside an offshore MISA licence. The EU side is a genuine positive that we will keep coming back to, because it puts Fxcess in a stronger regulatory position than a purely offshore broker.",
        ],
      },
      {
        heading: "Regulation: the CySEC advantage",
        paragraphs: [
          "CySEC (the Cyprus Securities and Exchange Commission) is an EU regulator, which means the CySEC-regulated side of Fxcess operates under European rules on client-money segregation, conduct and disclosure, and clients typically fall under an investor-compensation scheme up to a set limit. That is a real, tangible protection that offshore-only brokers cannot match, and it is the main reason we treat Fxcess's regulation as a plus.",
          "Fxcess also holds an offshore MISA licence, which is common for brokers serving clients outside the EU. Which entity you fall under depends on where you are; if you can be onboarded under the CySEC entity, that is the stronger option. Either way, EU oversight in the group is a point in Fxcess's favour, not against it.",
        ],
      },
      {
        heading: "Platforms and what you can trade",
        paragraphs: [
          "Fxcess supports MetaTrader 4, MetaTrader 5 and a WebTrader you can use straight from a browser with nothing to install. That range is friendly to beginners: you can start in WebTrader to learn the ropes, then move to MT4 or MT5 for more tools once you are comfortable. All three are standard, well-documented platforms.",
          "Instruments include major and minor currency pairs, metals, indices and a range of CFDs — the usual retail line-up. As with any broker, remember these are leveraged products where losses can build quickly if you over-size positions, regardless of how good the platform is.",
        ],
      },
      {
        heading: "Costs and entry deposit",
        paragraphs: [
          "With EUR/USD spreads from about 0.6 pips, Fxcess is competitive on the cost that matters most to active traders. As always, the exact spread and whether an account charges commission depends on the account type you pick, so match the account to how you actually intend to trade rather than to the headline number.",
          "The low minimum deposit is beginner-friendly, letting you start small while you learn. That is sensible use of the feature — start with an amount you can afford to lose, prove the process works, and scale only once you have a track record, not before.",
        ],
      },
      {
        heading: "Who Fxcess suits",
        paragraphs: [
          "Fxcess is a solid fit for a beginner or intermediate trader who wants EU (CySEC) regulation, a choice of account types, familiar platforms and a low barrier to entry. The combination of an EU licence and a modest starting deposit makes it an approachable option that does not force you to accept purely offshore regulation.",
          "As with every broker, it is not magic — costs are real, leverage cuts both ways, and most beginners lose money early while they learn. But on the specific questions of regulation and accessibility, Fxcess answers well, and that honesty is the point of this review.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "fxcess-minimum-deposit",
    title: "Fxcess minimum deposit: how much you really need to start",
    summary:
      "Fxcess has a low minimum deposit, which is beginner-friendly — but the amount you should actually start with is a separate, more important question. Here is how to think about both.",
    category: "basics",
    level: "beginner",
    readingMinutes: 5,
    body: [
      {
        heading: "The low barrier to entry",
        paragraphs: [
          "Fxcess is designed to be accessible, with a low minimum deposit that lets beginners open a live account without committing a large sum up front. This is genuinely useful: it means you can experience real trading — real spreads, real emotions, real withdrawals — without needing hundreds or thousands to begin.",
          "A low minimum lowers the barrier to starting, which is a good thing. But 'the least you are allowed to deposit' and 'the amount you should deposit' are two different questions, and the second one matters far more.",
        ],
      },
      {
        heading: "Minimum allowed versus amount you should start with",
        paragraphs: [
          "The minimum deposit is a floor set by the broker; the right starting amount is set by you, based on what you can afford to lose entirely. For most beginners the honest answer is a small amount — enough to trade meaningfully but small enough that losing all of it would be a lesson, not a wound.",
          "Depositing more than the minimum does not make you a better trader, and it does not make trading safer. If anything, starting larger tempts beginners into over-sizing positions. Start small, learn on real stakes, and add funds only once you have shown yourself you can trade responsibly.",
        ],
      },
      {
        heading: "How the deposit relates to position size",
        paragraphs: [
          "Your deposit only matters in combination with how much you risk per trade. A sensible rule is to risk a small fraction — say 1% — of your balance on any single trade. On a small starting balance that keeps individual trades tiny, which is exactly right while you are learning, even if it feels unexciting.",
          "The mistake to avoid is treating a small deposit as permission to swing for the fences 'because it's only a little money'. That mindset burns through accounts fast. Small deposit, small risk per trade, patient learning — that is how the low minimum becomes an advantage rather than a trap.",
        ],
      },
      {
        heading: "A sensible first-deposit plan",
        paragraphs: [
          "Deposit an amount you could lose without it affecting your life, using a payment method you are happy to receive withdrawals back on (funds generally return to your deposit method). Trade small, and early on make a small test withdrawal to confirm the full loop works on your account.",
          "Because Fxcess's CySEC entity operates under EU rules with client-money protections, you have a stronger safety net here than at a purely offshore broker — but that is a reason to trade calmly, not a reason to deposit more than you can afford. The low minimum is there to help you start responsibly; use it that way.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "is-fxcess-regulated",
    title: "Is Fxcess regulated? Yes — and the EU licence matters",
    summary:
      "Fxcess is regulated by CySEC in Cyprus (an EU regulator) plus an offshore MISA licence. Here is what that dual setup means and why the EU side is a genuine advantage.",
    category: "basics",
    level: "beginner",
    readingMinutes: 6,
    body: [
      {
        heading: "The direct answer",
        paragraphs: [
          "Yes, Fxcess is regulated — and notably, part of the group is regulated by CySEC in Cyprus, which is an EU authority. It also holds an offshore MISA licence for clients outside the EU. This dual structure is common among international brokers, and the presence of an EU regulator in the mix is a meaningful positive.",
          "Regulation is never a single yes/no quality — it is about how strong the regulator is. On that measure, an EU (CySEC) licence sits well above a purely offshore arrangement, which is exactly why we highlight it.",
        ],
      },
      {
        heading: "Why the CySEC (EU) licence matters",
        paragraphs: [
          "CySEC-regulated brokers operate under European rules that require them to keep client money segregated from company funds, to follow conduct and disclosure standards, and to bring eligible clients under an investor-compensation scheme up to a set limit. If the worst happened and the firm failed, that scheme can protect eligible clients up to that cap — a genuine safety net that offshore-only brokers do not provide.",
          "This is the single strongest point in Fxcess's regulatory profile. When we say the EU licence is an advantage, this is what we mean: concrete, rule-based protections behind your money rather than just a registration certificate.",
        ],
      },
      {
        heading: "The offshore MISA side",
        paragraphs: [
          "Fxcess's MISA licence covers clients it onboards outside the EU. This is standard practice — many brokers run an EU entity and an offshore entity side by side so they can serve clients in different regions. The offshore entity carries lighter protections than the CySEC one, in line with offshore regimes generally.",
          "The practical implication is to know which entity you fall under. Where you are based determines this, and if you can be onboarded under the CySEC entity, that is the stronger position. It is worth confirming rather than assuming.",
        ],
      },
      {
        heading: "What regulation still does not do",
        paragraphs: [
          "Being EU-regulated protects how your money is held and gives you recourse if the firm fails — it does not protect you from losing money by trading badly. No regulator can prevent poor trades, over-leveraging or emotional decisions, and the majority of beginners still lose money early regardless of how good the licence is.",
          "So take the right lesson: Fxcess's CySEC regulation is a real reason to feel more comfortable about the safety of your funds than at an offshore-only broker, but the responsibility for trading sensibly — small size, honest expectations, patient learning — remains entirely yours.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "fxcess-withdrawal-time",
    title: "Fxcess withdrawal time: how long payouts take",
    summary:
      "How Fxcess withdrawals work, realistic timeframes, why finishing verification early matters, and how the EU (CySEC) framework supports orderly payouts.",
    category: "basics",
    level: "beginner",
    readingMinutes: 5,
    body: [
      {
        heading: "The realistic timeframe",
        paragraphs: [
          "A Fxcess withdrawal request is typically processed within about one business day on the broker's side, after which arrival time depends on your payment method. E-wallets tend to be fastest, often the same day once approved, while card and bank transfers can take a few extra business days to clear because of the banking intermediaries in the chain.",
          "As with every broker, the processing time and the settlement time are two different things. The broker approving your request quickly does not override how long your bank or card network takes to move the money afterwards.",
        ],
      },
      {
        heading: "Verification comes first",
        paragraphs: [
          "The most common cause of a slow first withdrawal anywhere is unfinished identity verification, not the broker dragging its feet. Fxcess, like any regulated broker, must confirm your identity and address before releasing funds — and under EU (CySEC) rules these checks are a required part of operating properly.",
          "Complete your KYC in full right after opening the account, well before you plan to withdraw. Submit clear, in-date documents and ensure your payment method's name matches your account. Do this once and your withdrawals should be routine thereafter.",
        ],
      },
      {
        heading: "Withdrawals return to your deposit method",
        paragraphs: [
          "Anti-money-laundering rules mean funds generally go back to the method you deposited with, up to the amount deposited, with profits above that potentially routed to a bank transfer or e-wallet. Attempting to withdraw to a brand-new, unrelated method is the usual trigger for extra checks and delay.",
          "Plan for this when you fund the account: use a payment method you are content to receive money back on, keep it verified, and most withdrawal friction disappears before it can start.",
        ],
      },
      {
        heading: "How EU regulation helps",
        paragraphs: [
          "Under its CySEC entity, Fxcess operates within an EU framework that requires client money to be handled properly and segregated from company funds. That does not make withdrawals instant, but it does mean the process sits inside a rules-based system with real oversight — a reassurance you do not get from purely offshore brokers.",
          "Even so, the sensible habit applies everywhere: withdraw profits regularly rather than letting large balances sit idle, and confirm the process with a small early withdrawal. Good regulation plus good habits is the combination that keeps payouts painless.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "fxcess-account-types",
    title: "Fxcess account types: which one fits you",
    summary:
      "Fxcess offers several account types with different spreads, commissions and features. Here is how to read the differences and pick sensibly as a beginner.",
    category: "basics",
    level: "beginner",
    readingMinutes: 6,
    body: [
      {
        heading: "Why brokers offer multiple account types",
        paragraphs: [
          "Fxcess is a flexible, multi-account broker, meaning it offers several account types rather than a single one-size-fits-all option. The reason is that different traders want different things: some prioritise the lowest possible spread and accept a commission, others prefer a simple spread-only account, and beginners usually just want something straightforward and cheap to start with.",
          "The variety is a feature, but it can also be confusing. The good news is that the differences almost always come down to a few knobs — spread, commission, minimum deposit and available leverage — so once you know what to look at, choosing is not hard.",
        ],
      },
      {
        heading: "Spread-only versus commission accounts",
        paragraphs: [
          "The main split is between accounts that fold all costs into a slightly wider spread, and accounts that offer tighter raw spreads (Fxcess quotes EUR/USD from around 0.6 pips) plus a separate commission per lot. Neither is automatically cheaper — it depends entirely on how much you trade.",
          "For a low-volume beginner, a simple spread-only account is usually the easiest to understand and reason about, because there is only one number to watch. High-frequency traders often prefer the raw-spread-plus-commission model because at scale it can work out cheaper. Match the account to your real behaviour, not to the most impressive-sounding spread.",
        ],
      },
      {
        heading: "Minimum deposit and leverage differences",
        paragraphs: [
          "Account types can also differ in minimum deposit and available leverage. Fxcess's low entry deposit makes it easy to start on a basic account, which is exactly where beginners should begin. Higher-tier accounts may ask for more and unlock extra features, but those features rarely matter until you have real experience.",
          "Be especially careful with leverage. Higher leverage lets you control a larger position with less money, which magnifies losses just as much as gains. Choosing an account with modest leverage — or simply not using the maximum available — is one of the simplest ways to protect a small account while you learn.",
        ],
      },
      {
        heading: "How a beginner should choose",
        paragraphs: [
          "Start simple: the most basic account with a low minimum deposit, a spread-only or low-commission structure, and conservative leverage. Your first goal is to learn the mechanics and survive, not to optimise fractions of a pip. You can always upgrade later once you understand how you actually trade.",
          "Remember too that Fxcess's CySEC entity brings EU-level client-money protections, which is a genuine plus whichever account you pick. But no account type changes the core truth: trade small, keep costs low, and expect a learning curve. The best account is the one that keeps things simple while you build real experience.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "fxcess-vs-typical-broker",
    title: "Fxcess vs a typical broker: an honest comparison",
    summary:
      "How Fxcess compares to a generic retail broker on regulation, platforms, costs and accessibility — and where the differences genuinely matter versus where they do not.",
    category: "basics",
    level: "beginner",
    readingMinutes: 6,
    body: [
      {
        heading: "How to compare brokers without the hype",
        paragraphs: [
          "Broker comparisons are often just marketing dressed up as analysis. A fairer approach is to compare on the handful of things that actually affect you: regulation and safety of funds, the platforms on offer, the real cost of trading, and how easy it is to get started and to get your money out. We will hold Fxcess against a generic 'typical broker' on each.",
          "The honest framing is that no broker is best at everything, and the right choice depends on what you personally need. This comparison is meant to help you decide, not to declare a winner.",
        ],
      },
      {
        heading: "Regulation and safety of funds",
        paragraphs: [
          "This is where Fxcess stands out. Its CySEC entity is EU-regulated, bringing client-money segregation and an investor-compensation scheme up to a set limit. A 'typical' offshore-only broker cannot offer that level of protection. Against a top-tier-regulated broker (FCA, ASIC, CySEC), Fxcess is broadly in the same category on the EU side; against a purely offshore broker, Fxcess is clearly stronger.",
          "So if safety of funds is your priority, Fxcess compares well precisely because of its EU licence. That is the most important line in this whole comparison, because regulation is the one factor you cannot fix yourself if it is missing.",
        ],
      },
      {
        heading: "Platforms and costs",
        paragraphs: [
          "On platforms, Fxcess offers MT4, MT5 and a browser WebTrader — a slightly broader spread than a typical broker that might offer only MT4/MT5. The WebTrader is a nice on-ramp for beginners who do not want to install anything. On costs, EUR/USD spreads from around 0.6 pips are competitive with the wider market; a typical broker may be a touch higher or lower depending on account type.",
          "The realistic verdict here is 'competitive, not miraculous'. Fxcess is priced in line with the market rather than dramatically cheaper, and that is fine — beware any broker claiming impossibly low costs, because the money is usually recovered elsewhere.",
        ],
      },
      {
        heading: "Accessibility and the bottom line",
        paragraphs: [
          "On accessibility, Fxcess's low minimum deposit and choice of account types make it easy to start, which many typical brokers match but some do not. Combined with the EU regulation, this makes Fxcess an approachable option for beginners who want a real safety net without a high barrier to entry.",
          "The bottom line: Fxcess compares favourably to a typical broker mainly on regulation and accessibility, and sits roughly in line on platforms and cost. But whichever broker you choose, the outcome depends far more on your own discipline than on the broker — most beginners lose money early regardless, and no comparison changes that fundamental truth.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "how-to-open-an-fxcess-account",
    title: "How to open an Fxcess account, step by step",
    summary:
      "A calm, beginner-friendly walk-through of opening an Fxcess account: registration, verification, choosing an account type and platform, practising on demo, and funding modestly.",
    category: "basics",
    level: "beginner",
    readingMinutes: 6,
    body: [
      {
        heading: "Before you sign up",
        paragraphs: [
          "The account opening itself takes minutes; the preparation is what protects you. Decide up front how much you are willing to lose entirely, and treat only that amount as fundable. It helps that Fxcess's CySEC entity is EU-regulated, so you have real client-money protections behind you — but that is a reason to trade calmly, not to deposit more than you can afford.",
          "Have a rough idea of which account type you want before you start, since Fxcess offers several. If you are unsure, the simplest low-deposit account is the right beginner choice, and you can upgrade later.",
        ],
      },
      {
        heading: "Step 1 — Register and verify (KYC)",
        paragraphs: [
          "Registration is a short online form with your basic details. The step that gates your money is verification — 'Know Your Customer' (KYC) — where you upload proof of identity (passport or ID) and proof of address (a recent utility bill or bank statement). Under EU rules this is required, and doing it properly is in your interest.",
          "Complete KYC immediately, before depositing or trading. Finishing it up front is the single biggest thing you can do to make your first withdrawal fast, because it removes the verification wait from the payout later.",
        ],
      },
      {
        heading: "Step 2 — Choose your account type and platform",
        paragraphs: [
          "Pick an account type that matches how you intend to trade — for most beginners, a simple low-deposit, spread-only account. Then choose a platform: MT4 (the forex classic), MT5 (newer, more instruments), or the browser-based WebTrader if you prefer to trade without installing anything.",
          "WebTrader is a friendly place to begin because there is nothing to set up. You can always move to MT4 or MT5 later once you want more advanced tools. Download or open your chosen platform and log in with the credentials Fxcess issues — but do not fund anything yet.",
        ],
      },
      {
        heading: "Step 3 — Practise on demo first",
        paragraphs: [
          "Before real money is involved, open a demo account and trade with virtual funds. This lets you learn order types, position sizing and stop losses with zero financial risk, and confirms you are comfortable with the platform on Fxcess specifically.",
          "Spend genuine time here. Every mistake you make on demo is a mistake you did not pay for, and there are more ways to fumble the simple act of placing and closing a trade than most beginners expect.",
        ],
      },
      {
        heading: "Step 4 — Fund modestly and start small",
        paragraphs: [
          "When you are ready, fund the account with a modest amount you can afford to lose, using a payment method you are happy to receive money back on (withdrawals generally return to your deposit method). The low minimum deposit makes it easy to start small, which is exactly what you should do.",
          "Then trade small and patiently. Your first live goal is not profit — it is to survive, keep costs low, and prove the whole loop works, ideally including a small early test withdrawal. Fxcess's EU regulation gives you a stronger safety net than an offshore-only broker, but your own discipline is still what determines how this goes.",
        ],
      },
    ],
  },
];

/* ================================================================== */
/* Combined default export                                            */
/* ================================================================== */

export default [...CLUSTER_HEROFX, ...CLUSTER_FXCESS];
