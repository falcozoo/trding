/**
 * Written education modules for the /learn section.
 * Plain-English, beginner-focused, neutral tone, honest about risk.
 * No signals, no performance promises, no "get rich" framing.
 */

export type LessonCategory =
  | "basics"
  | "risk"
  | "strategy"
  | "psychology"
  | "howto"
  | "troubleshooting";
export type LessonLevel = "beginner" | "intermediate";

export interface LessonSection {
  heading: string;
  paragraphs: string[];
}

export interface Lesson {
  slug: string;
  title: string;
  summary: string;
  category: LessonCategory;
  level: LessonLevel;
  readingMinutes: number;
  body: LessonSection[];
}

/** Friendly labels for category badges. */
export const CATEGORY_LABELS: Record<LessonCategory, string> = {
  basics: "Basics",
  risk: "Risk",
  strategy: "Strategy",
  psychology: "Psychology",
  howto: "How-to",
  troubleshooting: "Troubleshooting",
};

const LESSONS: Lesson[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "what-is-trading",
    title: "What is trading, really?",
    summary:
      "A plain-English explanation of what trading is, what markets and brokers are, what it means to go long or short, and why the spread matters.",
    category: "basics",
    level: "beginner",
    readingMinutes: 6,
    body: [
      {
        heading: "The simple idea behind trading",
        paragraphs: [
          "At its core, trading means buying or selling something in the hope that its price will move in your favour. If you buy something for €100 and later sell it for €110, you have made €10. If you sell it for €90, you have lost €10. That is the whole idea in one sentence — everything else is detail.",
          "The 'something' can be many things: a currency (like the euro against the US dollar), a company's shares, a stock market index, gold, oil, or a cryptocurrency. Traders call each of these an 'instrument' or a 'market'. The price of each one moves up and down all day as buyers and sellers around the world change their minds about what it is worth.",
          "It is important to be honest from the start: most people who start trading lose money, at least early on, and many never turn a profit. Trading is not a salary and it is not a shortcut. Treat this guide as a way to understand how it works, not as encouragement to risk money you need.",
        ],
      },
      {
        heading: "What is a market?",
        paragraphs: [
          "A market is simply a place where buyers and sellers meet. When you hear that 'the market went up today', it means that, on balance, more people were willing to pay higher prices than the day before. Nobody sets these prices from above — they emerge from millions of individual buy and sell decisions.",
          "Different markets behave differently. Some, like major currencies, are enormous and trade almost around the clock. Others, like a single small company's shares, are smaller and can move sharply on a single piece of news. Beginners usually do best focusing on one or two well-known, heavily traded markets rather than jumping between many.",
        ],
      },
      {
        heading: "What does a broker do?",
        paragraphs: [
          "You cannot walk up to 'the market' yourself. You need a broker — a regulated company that gives you an account and a platform (an app or website) through which you can place trades. The broker connects your orders to the wider market and holds your money while you trade.",
          "Because you are trusting a broker with your money, regulation matters enormously. A broker regulated by a serious authority must follow rules on how it holds client funds and how it treats you. An unregulated broker has no such obligations. Never deposit money with a broker you cannot verify is properly regulated.",
          "Brokers make money in a few ways — mainly the spread (explained below) and sometimes commissions or overnight fees. It is worth understanding these costs, because they come out of your pocket on every single trade.",
        ],
      },
      {
        heading: "Going long and going short",
        paragraphs: [
          "'Going long' is the familiar one: you buy because you think the price will rise, and you profit if it does. This is how most people think about investing.",
          "'Going short' is the reverse: some products let you profit if a price falls. You are effectively selling first and buying back later at (you hope) a lower price. Shorting is more advanced and can be riskier, because while a price can only fall to zero, it can in theory rise without limit — so losses on a short position are not naturally capped.",
          "For a complete beginner, it is perfectly fine to ignore shorting at first and simply learn how prices move. There is no rush to use every feature a platform offers.",
        ],
      },
      {
        heading: "The spread — the cost of getting in",
        paragraphs: [
          "When you look at a price, you will usually see two numbers: the price you can buy at, and the slightly lower price you can sell at. The gap between them is called the spread, and it is one of the main ways brokers get paid.",
          "The spread matters because you start every trade at a small loss equal to that gap. If the spread is 1 pip and you buy, the price has to move at least 1 pip in your favour before you break even. On frequent, short-term trades, spreads add up quickly, which is why active traders care so much about finding low spreads.",
          "As a beginner, the practical takeaway is simple: costs are real, they happen on every trade, and they make trading harder than it looks. Understanding the spread is the first step to understanding why trading small and infrequently is usually cheaper than trading constantly.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "how-to-start",
    title: "How to start trading as a total beginner",
    summary:
      "A calm, step-by-step starting order for absolute beginners: why to use a demo account first, what to learn in what order, and how to set realistic expectations.",
    category: "basics",
    level: "beginner",
    readingMinutes: 7,
    body: [
      {
        heading: "Start with expectations, not with money",
        paragraphs: [
          "The single most useful thing a beginner can do is set honest expectations before depositing a cent. Trading will not replace a job quickly, if ever. The people advertising fast, easy profits are almost always selling you something. Real learning takes months, and losing periods are a normal part of the process — not a sign you are doing it wrong.",
          "A healthy goal for your first six months is not to make money. It is to learn how markets behave, to build a routine, and to lose as little as possible while you learn. If you can do that, you are ahead of most beginners.",
        ],
      },
      {
        heading: "Step one: open a demo account",
        paragraphs: [
          "Almost every regulated broker offers a free 'demo' or 'practice' account. This lets you place trades with pretend money on real, live prices. It costs nothing and risks nothing, and it is by far the best place to begin.",
          "Spend real time here — weeks, not hours. Learn how to place a trade, how to close one, how to set a stop-loss (a safety order that limits how much you can lose), and how the platform shows your profit and loss. Make your beginner mistakes here, where they cost you nothing but time.",
          "One honest caveat: demo trading feels different from real trading, because you feel nothing when pretend money is on the line. It teaches you the mechanics, not the emotions. That is fine — the emotions come later, and they deserve their own attention.",
        ],
      },
      {
        heading: "Step two: learn in a sensible order",
        paragraphs: [
          "Beginners often rush to strategies and indicators. A better order is: first understand what you are trading and how it moves; second, learn risk management (position sizing and stop-losses); third, only then look at strategy styles; and throughout, work on your own discipline and emotions.",
          "Risk management comes before strategy on purpose. A mediocre strategy with strong risk control can survive; a brilliant-looking strategy with no risk control can wipe you out in a week. Protecting your money is the skill that keeps you in the game long enough to learn everything else.",
        ],
      },
      {
        heading: "Step three: start small with real money (if at all)",
        paragraphs: [
          "If and when you move to real money, start with an amount you would be completely fine losing entirely — think of it as the price of an education, not an investment. Many people are surprised at how differently they behave once real money is involved, even a small amount.",
          "Keep your trade sizes tiny at first. The goal is still learning, not earning. Small positions let you experience real emotions and real costs without doing serious damage while you are still a beginner.",
          "There is also no shame in deciding trading is not for you. Realising early that you would rather invest slowly and simply — or not at all — can save you a great deal of money and stress.",
        ],
      },
      {
        heading: "Build a simple routine",
        paragraphs: [
          "Consistency beats intensity. A short, regular routine — reviewing your trades, writing down why you took each one, and noting what you would do differently — will teach you more than hours of watching charts.",
          "Keep a trading journal from day one, even on the demo account. Record what you traded, why, what happened, and how you felt. Over time this journal becomes the most honest teacher you have, because it shows you your real habits rather than the ones you think you have.",
        ],
      },
      {
        heading: "A word on scams and pressure",
        paragraphs: [
          "The trading world attracts a lot of bad actors. Be deeply sceptical of anyone promising guaranteed returns, 'signals' that can't lose, managed accounts that only ask for your deposit, or social media traders flashing rented cars. These are red flags, not opportunities.",
          "A legitimate broker will never pressure you to deposit more, will let you withdraw your own money without games, and will be clearly regulated. If anything feels like pressure or urgency, step back. Nothing genuine in trading requires you to act right now.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "risk-management-basics",
    title: "Risk management basics",
    summary:
      "The most important skill in trading: position sizing, stop-losses, only risking money you can afford to lose, and the widely used '1% rule'.",
    category: "risk",
    level: "beginner",
    readingMinutes: 7,
    body: [
      {
        heading: "Why risk management comes first",
        paragraphs: [
          "If you learn only one thing about trading, make it this: managing risk matters more than picking winners. Skilled traders are not the ones who are right most often — they are the ones who lose small when they are wrong and let their occasional wins add up. Anyone can be right sometimes; survival is what separates people who last from people who blow up.",
          "The mathematics are unforgiving. If you lose 50% of your account, you then need a 100% gain just to get back to where you started. Large losses are far harder to recover from than they feel in the moment, which is exactly why avoiding them is the whole game.",
        ],
      },
      {
        heading: "Never risk money you can't afford to lose",
        paragraphs: [
          "This phrase is repeated so often that it has almost lost its meaning — so take it literally. The money you trade with should be money that, if it vanished completely tomorrow, would not affect your rent, your bills, your family, or your ability to sleep.",
          "Never trade with borrowed money, credit cards, or funds set aside for something important. Emotional pressure from needing the money back is one of the fastest routes to bad decisions. Trading money should be genuinely spare — and for many people, honestly, that amount is zero, and that is a perfectly sensible answer.",
        ],
      },
      {
        heading: "Position sizing: how much to put on a trade",
        paragraphs: [
          "Position sizing is deciding how large each trade should be. It is the most powerful risk tool you have, and beginners almost always trade too big. The bigger your position, the more a small price move costs you — and the more likely a normal wobble in the market knocks you out or scares you into a bad decision.",
          "The idea is to size each position so that even a losing trade only costs you a small, pre-decided slice of your account. You decide in advance how much you are willing to lose on a trade, and you size the trade to fit that number — not the other way around.",
        ],
      },
      {
        heading: "The stop-loss: your safety net",
        paragraphs: [
          "A stop-loss is an order you set in advance that automatically closes a trade if the price moves against you by a certain amount. It caps your loss on that trade so a single bad position cannot spiral out of control.",
          "The key is to decide where your stop-loss goes before you enter the trade, while you are calm and objective. In the heat of a losing trade it is dangerously tempting to move your stop further away 'just to give it room' — which is really just deciding to lose more. A stop-loss only protects you if you respect it.",
          "Be aware that stops are not perfect. In fast-moving markets a price can 'gap' past your stop, so you may lose more than planned. Stops reduce risk; they do not eliminate it. Nothing does.",
        ],
      },
      {
        heading: "The 1% idea",
        paragraphs: [
          "A widely used rule of thumb is to risk no more than about 1% of your trading account on any single trade. On a €1,000 account, that means arranging your position size and stop-loss so that a losing trade costs you around €10.",
          "This sounds almost too cautious, and that is the point. Risking 1% means you could lose ten trades in a row and still have most of your account intact and your head clear. It turns a run of bad luck — which every trader has — from a catastrophe into a survivable bump.",
          "The exact number is less important than the principle: cap your loss per trade to something small enough that no single trade, and no short losing streak, can seriously hurt you. Many beginners who fail do so simply because they risked too much per trade.",
        ],
      },
      {
        heading: "Leverage: a magnifier that cuts both ways",
        paragraphs: [
          "Many trading products offer leverage, which lets you control a large position with a small amount of money. It is marketed as a way to make bigger profits — but it magnifies losses exactly as much as it magnifies gains, and it is a leading reason beginners lose money quickly.",
          "With high leverage, a small move against you can wipe out your deposit. Regulators repeatedly report that a large majority of retail traders lose money, and heavy leverage is a big part of why. As a beginner, treat leverage with real caution and keep it low or avoid it while you learn.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "trading-strategies-overview",
    title: "Common trading strategy styles, explained",
    summary:
      "A neutral overview of scalping, day trading, swing trading and trend following — what each one means, how much time it demands, and who it tends to suit.",
    category: "strategy",
    level: "beginner",
    readingMinutes: 6,
    body: [
      {
        heading: "There is no 'best' style",
        paragraphs: [
          "Traders use many different approaches, and none of them is objectively best. What suits you depends on your personality, how much time you have, how much stress you can tolerate, and how patient you are. The right style is the one you can actually stick to consistently.",
          "This overview is neutral on purpose. It is not a recommendation to trade any particular way — or to trade at all. It simply explains the common terms you will hear so they stop sounding mysterious. All of these styles can and do lose money.",
        ],
      },
      {
        heading: "Scalping",
        paragraphs: [
          "Scalping means making a large number of very short trades, often held for seconds or minutes, aiming to capture tiny price moves each time. Scalpers might place dozens or hundreds of trades in a day.",
          "It demands intense focus, fast decision-making, and very low trading costs, because the spread and commissions eat heavily into such small profits. It is generally considered one of the hardest styles and is a poor fit for most beginners — the pace leaves no room to think, and the costs pile up fast.",
        ],
      },
      {
        heading: "Day trading",
        paragraphs: [
          "Day trading means opening and closing trades within the same day, so you never hold a position overnight. Trades might last minutes to hours. The appeal is avoiding overnight risk and the fees some products charge for holding positions after the market closes.",
          "Day trading still demands significant screen time and discipline, and the same regulatory warnings apply: most people who day trade actively lose money. It is not the relaxed, part-time activity it is sometimes made out to be.",
        ],
      },
      {
        heading: "Swing trading",
        paragraphs: [
          "Swing trading means holding trades for several days to a few weeks, aiming to capture a larger 'swing' in price. Because you are not glued to the screen, it can suit people with jobs and other commitments who can only check the market once or twice a day.",
          "The trade-off is that you hold positions overnight and over weekends, so you are exposed to news and gaps that happen while you are away. Some traders find the slower pace calmer and less prone to impulsive decisions, but it still carries real risk of loss.",
        ],
      },
      {
        heading: "Trend following",
        paragraphs: [
          "Trend following is less about how long you hold and more about what you look for: it tries to identify a market that is moving persistently in one direction and to stay with that move until it shows signs of ending. The old phrase is 'the trend is your friend'.",
          "The appeal is that a few strong trends can cover many small losing trades. The difficulty is patience and discipline: trend followers endure lots of small losses while waiting for the occasional big move, and markets often drift sideways for long stretches, offering nothing worth trading.",
        ],
      },
      {
        heading: "Choosing sensibly as a beginner",
        paragraphs: [
          "If you are just starting, the slower styles — swing trading and a patient trend-following approach — are usually gentler to learn, because they give you time to think and to make fewer, more considered decisions. The fast styles punish beginners hardest.",
          "Whatever style attracts you, test it thoroughly on a demo account first, and remember that a style only works if you can follow it calmly and consistently. Chopping and changing styles after a few losses is one of the most common and most expensive beginner mistakes.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "trading-psychology",
    title: "Trading psychology and discipline",
    summary:
      "Why emotions decide most trading outcomes: managing fear and greed, avoiding overtrading and revenge trading, and building the discipline to stick to a plan.",
    category: "psychology",
    level: "beginner",
    readingMinutes: 6,
    body: [
      {
        heading: "Most trades are lost in the mind",
        paragraphs: [
          "Ask experienced traders why beginners fail and few will blame strategy. They will point to psychology — the ordinary human emotions of fear and greed that push us into bad decisions at exactly the wrong moments. The market is, in large part, a test of your own self-control.",
          "This is good news and bad news. The bad news is that you cannot simply buy or download discipline. The good news is that emotional mistakes are recognisable and, with awareness and practice, manageable. Knowing the traps is the first step to avoiding them.",
        ],
      },
      {
        heading: "Fear and greed",
        paragraphs: [
          "Greed shows up as taking a trade that is too big, holding a winner too long because you want even more, or chasing a market that has already moved a lot. Fear shows up as closing a good trade too early, freezing when you should act, or refusing to accept a small loss until it becomes a large one.",
          "Both feelings are completely normal — they are hardwired. The aim is not to eliminate them, which is impossible, but to notice them and to have a plan you made calmly in advance that you follow even when they are shouting at you.",
        ],
      },
      {
        heading: "Overtrading",
        paragraphs: [
          "Overtrading means placing far more trades than your plan calls for — often out of boredom, impatience, or a feeling that you should always be 'doing something'. Every trade has a cost, so overtrading quietly drains your account even when no single trade looks disastrous.",
          "One of the hardest skills in trading is doing nothing. When there is no good opportunity, the professional move is to sit on your hands and wait. Beginners often feel that not trading is wasting time; in reality, patience is one of the most profitable habits there is.",
        ],
      },
      {
        heading: "Revenge trading",
        paragraphs: [
          "After a painful loss, there is a powerful urge to 'win it back' immediately by jumping into another, often bigger, trade. This is revenge trading, and it is how a bad day becomes a disastrous one. Decisions made from anger or hurt pride are almost never good ones.",
          "The remedy is simple to say and hard to do: when you feel that urge, stop trading for the day. Walk away. The market will still be there tomorrow, and you will make far better decisions once the emotion has drained away.",
        ],
      },
      {
        heading: "Sticking to a plan",
        paragraphs: [
          "A trading plan is a set of rules you write down in advance: what you will trade, when you will enter, how much you will risk, and where you will exit — both for profit and for loss. Its whole purpose is to let calm, past-you make the decisions instead of emotional, in-the-moment-you.",
          "A plan is only useful if you actually follow it. This is why the boring habits matter: keeping a journal, reviewing your trades honestly, and holding yourself accountable when you break your own rules. Discipline is not a personality trait you either have or don't — it is a practice you build one trade at a time.",
        ],
      },
      {
        heading: "Be kind to yourself, and know when to stop",
        paragraphs: [
          "Everyone makes emotional mistakes, especially early on. Beating yourself up only adds more emotion to an activity that already has too much of it. Treat mistakes as data: note what happened, understand the trigger, and move on.",
          "Finally, watch your relationship with trading itself. If it is costing you sleep, money you need, or your peace of mind — or if it starts to feel like gambling — those are signs to step back or stop entirely. There is no prize for continuing to trade, and walking away is always a valid, sensible choice.",
        ],
      },
    ],
  },
];

// --- SEO education clusters (beginner search-intent guides) ---
// Authored as separate modules so the core curriculum stays readable, then
// merged into the public lesson set below. Each cluster is a Lesson[].
import CLUSTER_BASICS from "./seo/cluster-basics";
import CLUSTER_RISK from "./seo/cluster-risk";
import CLUSTER_CHOOSING from "./seo/cluster-choosing";
import CLUSTER_RAISEFX from "./seo/cluster-raisefx";
import CLUSTER_HEROFX_FXCESS from "./seo/cluster-herofx-fxcess";
import CLUSTER_HOWTO from "./seo/cluster-howto";
import CLUSTER_PROBLEMS from "./seo/cluster-problems";
import CLUSTER_TROUBLESHOOTING from "./seo/cluster-troubleshooting";
import CLUSTER_CONCEPTS from "./seo/cluster-concepts";

const ALL_LESSONS: Lesson[] = [
  ...LESSONS,
  ...CLUSTER_BASICS,
  ...CLUSTER_RISK,
  ...CLUSTER_CHOOSING,
  ...CLUSTER_RAISEFX,
  ...CLUSTER_HEROFX_FXCESS,
  ...CLUSTER_HOWTO,
  ...CLUSTER_PROBLEMS,
  ...CLUSTER_TROUBLESHOOTING,
  ...CLUSTER_CONCEPTS,
];

/** Return all lessons in display order. */
export function getLessons(): Lesson[] {
  return ALL_LESSONS;
}

/** Return a single lesson by slug, or undefined if not found. */
export function getLessonBySlug(slug: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.slug === slug);
}

/** Return all lesson slugs (for static generation). */
export function getAllLessonSlugs(): string[] {
  return ALL_LESSONS.map((l) => l.slug);
}

/**
 * Related lessons for internal linking: prefer same-category lessons, then top
 * up from other categories, excluding the current one. Deterministic order so
 * the static build is stable.
 */
export function getRelatedLessons(slug: string, count = 6): Lesson[] {
  const current = ALL_LESSONS.find((l) => l.slug === slug);
  if (!current) return [];
  const sameCat = ALL_LESSONS.filter(
    (l) => l.slug !== slug && l.category === current.category
  );
  const others = ALL_LESSONS.filter(
    (l) => l.slug !== slug && l.category !== current.category
  );
  return [...sameCat, ...others].slice(0, count);
}
