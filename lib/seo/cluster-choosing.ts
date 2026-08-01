import type { Lesson } from '../lessons';

/**
 * SEO cluster: "How to choose a broker" (comparison / decision intent).
 * Neutral, plain-English guides for total beginners aged 40+.
 * Advice is generic about broker qualities (regulation, segregation,
 * withdrawal speed, costs). No named or ranked brokers, no invented facts,
 * no hype, honest about risk.
 */
export const CLUSTER_CHOOSING: Lesson[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "how-to-choose-a-forex-broker",
    title: "How to choose a forex broker: a calm beginner's guide",
    summary:
      "A neutral, step-by-step way to compare forex and CFD brokers as a beginner — what actually matters (regulation, costs, withdrawals, support) and what to safely ignore.",
    category: "basics",
    level: "beginner",
    readingMinutes: 8,
    body: [
      {
        heading: "Why the broker you pick matters",
        paragraphs: [
          "Before you place a single trade, you have to choose a broker — the company that holds your money and gives you the app or website you trade through. This decision is more important than most beginners realise. A good broker is safe, clear about its costs, and lets you withdraw your own money without a fuss. A poor one can quietly cost you money, or in the worst cases put your deposit at risk entirely.",
          "The tricky part is that every broker advertises itself as the best. Flashy websites, welcome bonuses, and promises of tight spreads are marketing, not proof. Your job is to look past the sales pitch at a handful of boring, practical qualities that genuinely protect you. This guide walks through them in plain English, with no particular broker in mind.",
        ],
      },
      {
        heading: "Start with regulation — it is not optional",
        paragraphs: [
          "The single most important thing to check is whether the broker is regulated by a serious, well-known authority in a country with a strong reputation for oversight. Regulation means the broker must follow rules on how it holds your money, how it advertises, and how it treats you when something goes wrong. It is your main layer of protection.",
          "Do not simply trust a 'regulated' badge on the website. Find the broker's licence number, then look it up directly on the regulator's own website to confirm it is genuine and current. This takes a few minutes and is the most valuable few minutes you will spend. If you cannot clearly confirm who regulates a broker, treat that as a firm reason to walk away.",
        ],
      },
      {
        heading: "Compare the real costs, not just the headline spread",
        paragraphs: [
          "Brokers make money from you through costs, so understanding them is essential. The main one is the spread — the small gap between the buy and sell price — which you pay on every trade. Some brokers also charge a separate commission per trade, and many charge 'overnight' or 'swap' fees if you hold a position past the end of the trading day.",
          "A broker advertising very low spreads might make up for it with high commissions or other fees, so look at the total cost of a typical trade rather than one number. Also watch for account fees, inactivity fees (charged if you stop trading for a while), and currency-conversion charges on deposits and withdrawals. Honest brokers publish all of this clearly; if the fee schedule is hard to find, that itself is a warning sign.",
        ],
      },
      {
        heading: "Check how you get your money back out",
        paragraphs: [
          "It is easy to get money into a trading account — brokers make that part simple. The real test is how easily you can get it back out. Before depositing, read the broker's withdrawal terms: how long withdrawals take, what methods are allowed, any minimum amounts, and whether they charge a fee.",
          "Look for independent reviews from real users specifically about withdrawals. Delays, endless verification requests, or pressure to keep trading instead of withdrawing are serious red flags. A trustworthy broker treats your withdrawal request as routine and processes it promptly. Being able to take your money out on demand is the clearest sign that a broker respects that the money is yours.",
        ],
      },
      {
        heading: "Try the platform and support before you commit",
        paragraphs: [
          "Almost every reputable broker offers a free demo account with pretend money. Use it. Spend time placing practice trades to see whether the platform feels clear and stable, whether prices update smoothly, and whether you can easily find things like the stop-loss tool. If an app frustrates you when nothing is at stake, it will frustrate you far more with real money on the line.",
          "Test customer support too, before you deposit. Send a question and see how quickly and helpfully they reply. When a problem eventually arises — and it will — responsive, human support makes a real difference. A broker that is hard to reach before you have given them money will not suddenly become easier afterwards.",
        ],
      },
      {
        heading: "A short shortlist beats a long one",
        paragraphs: [
          "You do not need to compare dozens of brokers. Narrow the field to brokers that are clearly regulated by a strong authority, then compare that small group on costs, withdrawal reputation, platform quality, and support. Ignore welcome bonuses and 'limited-time' offers entirely — they are designed to rush your decision, and rushing is exactly what you should avoid.",
          "Finally, keep the whole thing in perspective. Choosing a good broker protects you, but it does not make trading profitable or safe. The regulator warnings still apply: most beginners lose money. A careful broker choice simply ensures that if you do trade, you are doing so with a legitimate company on fair terms — which is the least you should accept.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "what-makes-a-broker-regulated",
    title: "What makes a broker regulated, and why it matters",
    summary:
      "A plain-English explanation of broker regulation for beginners — what a regulator actually does, how to verify a licence yourself, and why regulation is your main protection.",
    category: "basics",
    level: "beginner",
    readingMinutes: 7,
    body: [
      {
        heading: "What 'regulated' really means",
        paragraphs: [
          "When a broker is regulated, it means a government-backed authority has given it a licence and holds it to a set of rules. These rules cover how the broker must handle your money, how honestly it must advertise, what information it must give you, and how it must deal with complaints. In return for the licence, the broker agrees to be supervised and can be fined or shut down if it breaks the rules.",
          "This matters because you are handing a company your money and trusting its software with your trades. Regulation is the mechanism that turns 'trust me' into 'here are the enforceable rules I must follow'. Without it, a broker can behave however it likes, and you have little recourse if things go wrong.",
        ],
      },
      {
        heading: "What a good regulator forces brokers to do",
        paragraphs: [
          "Strong regulators typically require brokers to keep client money separate from the company's own money — this is called segregation, and it means your funds should not be used to run the business or pay its debts. They often require brokers to hold enough capital to stay solvent, to be honest in their marketing, and to give retail clients certain protections such as limits on leverage.",
          "Many strong jurisdictions also run a compensation scheme that may return some of your money, up to a limit, if a regulated broker fails. The exact protections vary a great deal from one country to another, so it is worth reading what your specific regulator offers rather than assuming. The key point is that these protections only exist when a genuine, strong regulator is involved.",
        ],
      },
      {
        heading: "Not all regulators are equal",
        paragraphs: [
          "Here is a subtlety that catches beginners out: 'regulated' does not automatically mean 'well regulated'. Some brokers hold licences from small offshore jurisdictions with light-touch rules and weak enforcement. On paper they can call themselves regulated, but the actual protection behind that word may be thin.",
          "Without naming names, the practical approach is to favour brokers overseen by authorities in countries with a long-standing, serious reputation for financial oversight. If a broker is only licensed somewhere obscure, or lists an impressive-sounding 'authority' you have never heard of, be cautious and dig deeper. The strength of the regulator behind the badge is what counts, not the badge itself.",
        ],
      },
      {
        heading: "How to verify a licence yourself",
        paragraphs: [
          "You do not have to take a broker's word for anything. Reputable brokers publish their legal company name and a licence or registration number, usually in the website footer or an 'About' or 'Legal' page. Take that number and go directly to the regulator's own official website, then search their public register for it.",
          "Check that the details match: the company name, the licence number, and that the licence is active rather than expired or revoked. Be alert to lookalike tricks, where an unregulated firm borrows the name or number of a genuinely licensed company. If anything does not line up, or you cannot find the broker on the regulator's register at all, stop there and do not deposit.",
        ],
      },
      {
        heading: "Regulation protects you — but not from losses",
        paragraphs: [
          "It is important to be honest about what regulation does and does not do. Regulation is designed to protect you from an unfair or dishonest broker — from having your money misused, from being misled, or from being trapped when you try to withdraw. That protection is real and valuable, and it is why choosing a well-regulated broker is non-negotiable.",
          "What regulation cannot do is protect you from the market. It will not stop you losing money on bad trades, and it does not make trading safe or suitable. Regulators themselves publish warnings that most retail traders lose money. Think of regulation as ensuring the game is played on fair terms — not as any guarantee that you will win it.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "mt4-vs-mt5-for-beginners",
    title: "MT4 vs MT5: which should a beginner pick?",
    summary:
      "A neutral comparison of the two most common trading platforms for beginners — what they have in common, how they differ, and why the difference matters less than you'd think.",
    category: "basics",
    level: "beginner",
    readingMinutes: 6,
    body: [
      {
        heading: "What MT4 and MT5 actually are",
        paragraphs: [
          "MT4 and MT5 (short for MetaTrader 4 and MetaTrader 5) are two versions of a very widely used trading platform — the software you use to view prices, place trades, and manage your account. Many different brokers offer one or both of them, which is why you will see the names come up again and again when comparing brokers.",
          "Because they are so common, the choice can feel like a big deal to a beginner. In reality, for someone just starting out, the two are far more alike than they are different. Both let you do everything a beginner needs: watch charts, open and close trades, and set safety orders like stop-losses. Do not let this decision stall you.",
        ],
      },
      {
        heading: "What they have in common",
        paragraphs: [
          "Both platforms share the same core layout and feel. You get real-time price charts, a range of built-in indicators, one-click trading, and tools to set your entry, stop-loss, and take-profit levels. Both are available on desktop, web, and as mobile apps, so you can check your account from a phone.",
          "Both also support a free demo account, which is where every beginner should start regardless of which platform a broker uses. If you learn the basics on one, you will feel at home on the other within minutes. The muscle memory of placing and managing a trade transfers almost completely between them.",
        ],
      },
      {
        heading: "How MT5 differs from MT4",
        paragraphs: [
          "MT5 is the newer version and adds some extra capabilities. It offers more chart timeframes, more built-in indicators, an economic calendar inside the platform, and support for a wider range of markets beyond currencies, such as certain stocks and other instruments. It also handles some order types and account setups that MT4 does not.",
          "MT4, despite being older, remains hugely popular — partly because a large library of add-ons and automated tools was built for it over the years, and partly because many traders simply prefer its simpler, familiar feel. Neither being older nor newer makes a platform 'better'; they are tools, and the newer one is not automatically the right one for you.",
        ],
      },
      {
        heading: "Which one suits a beginner?",
        paragraphs: [
          "For a total beginner, the honest answer is that either is fine. The extra features in MT5 are mostly things you will not touch for a long time, if ever. The features you actually need — clear charts, easy order entry, and reliable stop-losses — are excellent on both. Choosing between them should not be a major factor in which broker you pick.",
          "If you want a simple rule of thumb: if a broker you already trust offers only one of them, just use that one. If a broker offers both, MT5 is a perfectly reasonable default because it is the current version, but you will not be missing out if you end up on MT4. Spend your energy learning to trade, not agonising over the platform.",
        ],
      },
      {
        heading: "Look past the platform to the broker",
        paragraphs: [
          "It is worth remembering that MT4 and MT5 are just software. The prices you see, the spreads and fees you pay, and the safety of your money all depend on the broker behind the platform, not on the platform itself. Two brokers can both offer MT5 while charging very different costs and offering very different levels of protection.",
          "So when you are comparing your options, treat the platform question as minor and settle it quickly. Then spend the real effort on the things that actually protect you and your money: whether the broker is well regulated, how transparent its costs are, and how easily you can withdraw. Those matter far more than which version of MetaTrader appears on your screen.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ecn-vs-market-maker-brokers",
    title: "ECN vs market maker brokers explained",
    summary:
      "A neutral, jargon-free look at the two main ways brokers handle your trades — what ECN and market maker mean, the potential conflict of interest, and why it matters less than regulation.",
    category: "basics",
    level: "beginner",
    readingMinutes: 7,
    body: [
      {
        heading: "Two ways a broker can handle your trade",
        paragraphs: [
          "When you place a trade, something has to happen on the other side of it. Broadly, brokers handle this in one of two ways, and the labels you will see are 'ECN' (or similar terms like STP or 'no dealing desk') and 'market maker' (sometimes called a 'dealing desk' broker). These describe how your order is actually executed behind the scenes.",
          "This sounds technical, and the marketing around it can get heated, with some brokers implying one model is honest and the other is not. The reality is more balanced. Both models are used by legitimate, well-regulated brokers, and both can serve a beginner perfectly well. It helps to understand the difference so the terms stop being mysterious.",
        ],
      },
      {
        heading: "What a market maker broker does",
        paragraphs: [
          "A market maker, or dealing desk broker, often takes the other side of your trade itself rather than passing it straight to the wider market. In effect, the broker quotes you a price and may fill your order in-house. Many market makers offer fixed or very stable spreads, and they can be convenient for small trade sizes and beginners.",
          "The point people raise about this model is a potential conflict of interest: if the broker is on the other side of your trade, then in a narrow sense your loss can be its gain. In practice, well-regulated market makers manage this carefully and hedge their overall exposure, and regulation exists partly to keep this fair. It is a reason to insist on strong regulation — not, by itself, a reason to avoid every market maker.",
        ],
      },
      {
        heading: "What an ECN or STP broker does",
        paragraphs: [
          "An ECN or STP broker aims to pass your order through to a wider network of banks, liquidity providers, and other traders, rather than taking the other side itself. Instead of profiting when you lose, this type of broker typically charges a separate commission on each trade and offers 'raw' spreads that can be very tight but variable.",
          "The appeal is the reduced conflict of interest and, often, tighter spreads for active traders. The trade-off is the added commission and the fact that variable spreads can widen at busy or volatile times. For a beginner trading small and infrequently, these differences are usually modest, and the commission can even make the total cost similar to a market maker's spread.",
        ],
      },
      {
        heading: "Which model is better for a beginner?",
        paragraphs: [
          "There is no universal 'better' here, and any broker claiming otherwise is selling you something. Market maker accounts can be simpler and cheaper for very small, occasional trades. ECN or STP accounts can be more cost-effective and reassuring for more active trading, at the price of a bit more complexity. Both are entirely mainstream.",
          "For someone just starting out, this is genuinely not the decision to lose sleep over. The differences in cost and execution are small compared with the far bigger risks a beginner faces — trading too large, using too much leverage, and simply the fact that most beginners lose money. Understand the terms, then let this be a minor factor in your choice.",
        ],
      },
      {
        heading: "Focus on what actually protects you",
        paragraphs: [
          "Whichever execution model a broker uses, the things that protect your money are the same: is the broker regulated by a strong authority, does it keep client funds segregated, are its costs transparent, and can you withdraw easily? A well-regulated market maker is safer than an unregulated ECN broker, every time. The regulation matters far more than the label.",
          "So treat the ECN-versus-market-maker question as background knowledge that helps you read a broker's marketing with clear eyes. Compare the total cost of a typical trade, note which model an account uses, and then make your real decision on the fundamentals of safety and honesty. Those fundamentals — not the execution model — are what keep your money where it belongs.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "before-you-deposit-broker-checklist",
    title: "What to check before depositing with a broker: a checklist",
    summary:
      "A practical, beginner-friendly checklist to run through before you deposit real money — covering regulation, fund safety, costs, withdrawals, and warning signs to walk away from.",
    category: "basics",
    level: "beginner",
    readingMinutes: 7,
    body: [
      {
        heading: "Slow down before you deposit",
        paragraphs: [
          "Depositing money with a broker is the point where a mistake starts to cost you. It is also, conveniently, the moment brokers most want you to hurry — with bonuses, countdown offers, and helpful salespeople. The single best habit you can build is to slow down and run through a short checklist every time, no matter how eager you feel.",
          "None of the checks below are difficult, and together they take under an hour. That hour is cheap insurance. If a broker fails any of the core checks, the correct response is simply not to deposit — there are always other brokers, and no offer is worth ignoring a red flag for.",
        ],
      },
      {
        heading: "Check 1: Regulation you can verify",
        paragraphs: [
          "Confirm the broker is regulated by a serious, well-known authority in a jurisdiction with a strong reputation. Find the licence number on the broker's site, then look it up on the regulator's own official register and check that the company name matches and the licence is active. Do not rely on a badge or a claim on the broker's own pages.",
          "If you cannot find a licence number, cannot find the broker on the regulator's register, or the only regulation is from an obscure offshore jurisdiction, treat that as a stop sign. Verifiable regulation from a strong authority is the foundation everything else rests on. Without it, nothing else on this checklist can save you.",
        ],
      },
      {
        heading: "Check 2: How your money is held",
        paragraphs: [
          "Look for a clear statement that client funds are kept in segregated accounts, separate from the broker's own operating money. Segregation means your deposit should not be used to run the business, and it is a basic protection that strong regulators require. Reputable brokers state this plainly.",
          "Also check whether the broker's jurisdiction offers any investor compensation scheme that might return some of your money, up to a limit, if the broker fails — and note that these schemes and their limits vary widely, and do not exist everywhere. Understanding what protection you do and do not have before you deposit is far better than finding out afterwards.",
        ],
      },
      {
        heading: "Check 3: The full cost of trading",
        paragraphs: [
          "Find the broker's fee schedule and read it properly. Note the typical spread on the markets you care about, any per-trade commission, and overnight or swap fees for holding positions. Then look for the less obvious ones: account fees, inactivity fees, deposit and withdrawal fees, and currency-conversion charges.",
          "Add these up into the rough cost of a realistic trade for you, rather than fixating on a single advertised number. A broker with an eye-catching low spread but heavy commissions and fees can easily work out more expensive overall. If the fee schedule is vague or hard to find, count that as a mark against the broker.",
        ],
      },
      {
        heading: "Check 4: Getting your money back out",
        paragraphs: [
          "Before depositing a cent, read the withdrawal terms: the available methods, how long withdrawals take, any minimums, and any fees. Then search independently for what real users say about withdrawals specifically. This is often the most revealing thing you can learn about a broker.",
          "Reports of unexplained delays, repeated verification demands after you have already verified, or staff who push you to keep trading instead of withdrawing are serious warning signs. A good broker makes withdrawing your own money boring and quick. If getting money out looks harder than getting it in, do not put money in.",
        ],
      },
      {
        heading: "Check 5: Warning signs to walk away from",
        paragraphs: [
          "Some red flags should end the conversation immediately: promises of guaranteed or 'risk-free' returns, pressure to deposit right now, a personal 'account manager' encouraging you to add more money, bonuses with conditions that trap your funds, or any resistance when you ask about regulation or withdrawals. Genuine brokers do none of these things.",
          "Trust your instincts here. If something feels pushy, urgent, or too good to be true, it is. Step away and, if you like, sleep on it — a legitimate broker will still be there tomorrow on the same terms. Nothing in honest trading requires you to act before you have finished your checks.",
        ],
      },
      {
        heading: "Deposit small, and remember the real risk",
        paragraphs: [
          "Even once a broker passes every check, start with a small first deposit — an amount you would be entirely comfortable losing. Consider making a small test withdrawal early to confirm the process works smoothly before you trust the broker with more. These simple steps catch problems while they are still cheap to discover.",
          "Finally, keep the whole exercise in perspective. This checklist protects you from choosing a bad or dishonest broker. It does not make trading itself safe or profitable — most beginners lose money regardless of how good their broker is. A careful broker choice is necessary, but it is only the starting line.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "is-trading-with-a-broker-safe",
    title: "Is trading with a broker safe?",
    summary:
      "An honest answer for beginners: what a good broker keeps safe, what no broker can protect you from, how to separate broker risk from market risk, and how to lower both.",
    category: "basics",
    level: "beginner",
    readingMinutes: 7,
    body: [
      {
        heading: "It depends what you mean by 'safe'",
        paragraphs: [
          "'Is trading with a broker safe?' is a fair and important question, but it hides two very different questions inside it. One is: 'Is my money safe with this company?' The other is: 'Is trading itself a safe thing to do with my money?' These have very different answers, and confusing them leads beginners astray.",
          "The short version is this: a well-chosen, well-regulated broker can make the first kind of safety quite strong. But nothing — no broker, no regulator, no strategy — can make the second kind safe. Trading always carries a real risk of loss. Understanding this split is the key to answering the question honestly.",
        ],
      },
      {
        heading: "What a good broker keeps safe",
        paragraphs: [
          "A broker regulated by a strong authority is required to protect your money in specific ways. Client funds should be segregated from the company's own money, so they are not used to run the business. The broker must meet capital and conduct rules, must advertise honestly, and must let you access and withdraw your own funds. Some jurisdictions also offer a compensation scheme if the broker itself fails.",
          "Together, these measures make it fairly safe to hold money with a genuinely well-regulated broker, in the sense that the company should not misuse or trap your funds. This is exactly why choosing a properly regulated broker — and verifying its licence yourself — is so important. It is the part of 'safety' that is actually within your control.",
        ],
      },
      {
        heading: "What no broker can protect you from",
        paragraphs: [
          "Here is the part the advertising tends to skip. Even the safest, best-regulated broker in the world cannot protect you from losing money on your trades. Prices move against people constantly, leverage can multiply losses, and markets can gap suddenly on news. The regulator's own warning — that most retail traders lose money — applies no matter which broker you use.",
          "So a safe broker and a safe outcome are not the same thing. You can pick a flawless broker and still lose your deposit through ordinary trading. This is not a flaw in the broker; it is the nature of trading. Anyone who tells you a particular broker, platform, or system makes trading safe is misleading you.",
        ],
      },
      {
        heading: "How to lower broker risk",
        paragraphs: [
          "The risk that your broker itself is dishonest or unsafe is the one you can most directly reduce. Insist on regulation by a strong authority and verify the licence on the regulator's own register. Confirm that client funds are segregated and understand any compensation scheme available. Read the withdrawal terms and check what real users say about getting money out.",
          "Then take small, practical precautions: start with a modest deposit, make an early test withdrawal to confirm the process works, and walk away instantly from any pressure, guarantees, or bonuses that trap your funds. Done together, these steps make it very unlikely you will end up with an unsafe broker — which removes one whole category of worry.",
        ],
      },
      {
        heading: "How to lower market risk",
        paragraphs: [
          "The risk from trading itself can never be removed, but it can be managed. The core tools are the same ones every honest guide repeats: risk only money you can genuinely afford to lose, keep your position sizes small, use stop-losses to cap each loss, and treat leverage with great caution or avoid it while you learn. Practise on a free demo account before risking anything real.",
          "None of this guarantees a profit — nothing does. What it does is keep any single trade or bad run from doing serious damage, so you stay in control and can walk away with most of your money if trading turns out not to suit you. Managing your risk is how you make trading survivable, even though you cannot make it safe.",
        ],
      },
      {
        heading: "The honest bottom line",
        paragraphs: [
          "So, is trading with a broker safe? Your money can be reasonably safe with a genuinely well-regulated, transparent broker that you have checked carefully — that part is largely in your hands. But the act of trading is not safe, and no broker can make it so. Keeping these two ideas separate is one of the most useful things a beginner can learn.",
          "If you take anything away, let it be this: choose your broker carefully to protect your money from the company, then manage your risk carefully to protect yourself from the market — and never mistake a safe broker for a safe outcome. And if trading ever starts costing you sleep, money you need, or your peace of mind, stepping back or stopping entirely is always a sensible choice.",
        ],
      },
    ],
  },
];

export default CLUSTER_CHOOSING;
