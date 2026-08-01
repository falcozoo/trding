/**
 * SEO education cluster: Trading risk & costs.
 * Plain-English, beginner-focused (especially 40+ first-timers), neutral tone,
 * honest about risk. No signals, no performance promises, no "get rich" framing,
 * no claims about specific named brokers.
 *
 * Each guide targets a common beginner search intent and uses realistic
 * worked numbers so the ideas feel concrete rather than abstract.
 */

import type { Lesson } from '../lessons';

export const CLUSTER_RISK: Lesson[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "how-to-manage-risk-in-trading",
    title: "How to manage risk in trading (a beginner's guide)",
    summary:
      "A practical, plain-English walkthrough of managing risk: deciding what you can lose, capping the risk on each trade, using stop-losses, and thinking in terms of your whole account rather than single trades.",
    category: "risk",
    level: "beginner",
    readingMinutes: 8,
    body: [
      {
        heading: "Risk management is the actual job",
        paragraphs: [
          "Most beginners think trading is about predicting where a price will go. It is not, or at least not mainly. Nobody can reliably predict prices, and the traders who last are not the ones who are right most often — they are the ones who make sure that being wrong never costs them very much. That is what risk management is: a set of simple habits that keep any single mistake, or any run of bad luck, from doing serious damage.",
          "Think of it like driving. You cannot control what other drivers do, so you wear a seatbelt, keep your distance, and slow down in the rain. You are not predicting a crash — you are making sure that if one happens, you walk away. Risk management in trading works the same way. You accept in advance that some trades will lose, and you arrange things so those losses are small and survivable.",
          "This guide is deliberately unglamorous. There is nothing here about spotting the perfect entry or reading secret patterns. That is on purpose: the boring parts are the parts that actually keep people in the game. If you are over 40 and trading with money you have worked years to build, this is the material that matters most.",
        ],
      },
      {
        heading: "Step one: decide what you can afford to lose",
        paragraphs: [
          "Before you fund an account, separate your money into two clear buckets. One bucket is money you need — rent, bills, savings, an emergency fund, retirement money. The other is money that, if it disappeared entirely tomorrow, would change nothing important in your life. You only ever trade from the second bucket, and for many sensible people that bucket is small or even empty.",
          "Be honest and specific. Saying 'I can afford to lose a bit' is not a plan. Naming a figure is: for example, 'I am willing to risk €2,000 total learning to trade, and if it is gone, I stop.' Writing that number down protects you from the slow creep where a €500 experiment quietly becomes a €5,000 problem because you kept topping up to 'win it back'.",
          "Never trade with borrowed money, a credit card, a loan, or funds earmarked for something real like a car repair or a grandchild's education. The pressure of needing that money back is one of the fastest routes to reckless decisions, because a person who cannot afford to lose cannot think clearly.",
        ],
      },
      {
        heading: "Step two: cap the risk on every single trade",
        paragraphs: [
          "Once you know your total pot, the next rule is to risk only a small slice of it on any one trade. A widely used figure is 1% — meaning that if a trade goes wrong, it costs you no more than 1% of your account. On a €5,000 account, that is €50 per trade. On a €2,000 account, it is €20.",
          "This sounds almost timid, and that is exactly the point. If you risk €50 at a time on a €5,000 account, you could lose ten trades in a row — a genuinely bad streak — and still have €4,500 and a clear head. Compare that with someone risking €500 a trade: two bad trades and they have lost a fifth of everything, and they are now scared, angry, and prone to worse decisions.",
          "The exact percentage matters less than the principle. Whether you choose 1% or 2%, the goal is the same: no single trade, and no short losing streak, should ever be able to seriously hurt you. Beginners who blow up almost always do so because they risked far too much on individual trades.",
        ],
      },
      {
        heading: "Step three: use a stop-loss to enforce the cap",
        paragraphs: [
          "A stop-loss is an order you set in advance that automatically closes a trade if the price moves against you by a set amount. It is the tool that turns 'I only want to risk €50' from a hope into a rule. Without a stop, a losing trade can keep bleeding for as long as you keep watching it and telling yourself it will turn around.",
          "Set your stop before you open the trade, while you are calm. The dangerous moment is later, when the trade is losing and you feel the urge to move the stop 'just to give it more room'. That is not giving it room — it is quietly deciding to lose more than you planned. A stop only protects you if you respect it.",
          "One honest limitation: in fast-moving markets the price can jump straight past your stop, so occasionally you lose a bit more than intended. Stops reduce risk; they do not remove it. Nothing does. But a stop that occasionally slips is still far safer than no stop at all.",
        ],
      },
      {
        heading: "Think about the whole account, not one trade",
        paragraphs: [
          "A useful mental shift is to stop caring about whether any single trade wins or loses, and to care instead about your account over dozens or hundreds of trades. Any one trade is close to a coin flip you cannot control. What you can control is your risk per trade, your consistency, and whether you avoid the big blow-ups.",
          "Some traders add an account-level safety valve on top of the per-trade cap — for example, a rule that if they lose 5% of their account in a single day or week, they stop trading until the next period. This stops a bad day from becoming a bad month. It is the trading version of walking away from a card table when you are down, before frustration takes over.",
        ],
      },
      {
        heading: "A simple risk checklist before every trade",
        paragraphs: [
          "Before you click buy or sell, run through four quick questions. First: how much money will I lose if this trade hits my stop, in euros, and is that within my per-trade limit? Second: where exactly is my stop-loss? Third: is this money I can genuinely afford to lose? Fourth: am I trading because my plan says to, or because I am bored, excited, or trying to win back a loss?",
          "If you cannot answer the first two questions with actual numbers, you are not managing risk — you are gambling. Getting into the habit of answering them every time, out loud if you have to, is worth more than any indicator or chart pattern you will ever learn.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "what-is-a-stop-loss",
    title: "What is a stop-loss and how does it work?",
    summary:
      "A clear explanation of the stop-loss order every beginner should understand: what it is, how to place one, worked examples in euros and pips, common mistakes, and its real-world limits.",
    category: "risk",
    level: "beginner",
    readingMinutes: 7,
    body: [
      {
        heading: "The one-sentence version",
        paragraphs: [
          "A stop-loss is an instruction you give your broker in advance: 'If the price moves against me and reaches this level, close my trade automatically.' Its whole purpose is to cap how much you can lose on a single trade so a bad position cannot keep getting worse while you watch.",
          "Almost every beginner who gets into serious trouble does so because they either had no stop-loss or refused to honour the one they set. Understanding this single tool, and actually using it every time, removes a huge share of the danger from trading. If you take nothing else from this guide, take that.",
        ],
      },
      {
        heading: "A worked example in plain numbers",
        paragraphs: [
          "Suppose you buy a market at a price of 100, because you think it will rise. You are not sure, of course — nobody is — so you decide in advance that you are wrong if the price drops to 98. You place a stop-loss at 98. If the price falls to 98, your broker closes the trade automatically, and your loss is limited to those 2 points, whatever happens next.",
          "Now attach money to it. Say every 1 point of movement is worth €10 to your position. Your 2-point risk (from 100 down to 98) means your maximum loss on this trade is about €20. That is the number you decided you could accept before you ever clicked the button. If the price instead rises to 105, you might close for a €50 profit — but your downside was known and capped from the start.",
          "Notice the order of thinking. You did not pick a random trade size and then hope. You decided how much you were willing to lose (€20), worked out where your stop had to go (98), and sized the trade to fit. Risk first, everything else second.",
        ],
      },
      {
        heading: "Where should the stop go?",
        paragraphs: [
          "Place your stop at a level where you would genuinely admit you were wrong — not so close that normal, meaningless wiggles knock you out, and not so far that a hit costs you more than you can accept. There is a real tension here, and balancing it is part of the skill. Many beginners put stops far too tight, get stopped out by ordinary noise, and conclude that stops 'don't work'. The stop worked; it was placed badly.",
          "The stop level and your trade size are connected. If the sensible place for your stop is far from your entry, you must trade smaller so the total euro loss still fits your limit. If the stop is naturally close, you can trade a little larger. Let the stop location and your risk limit decide your size — never force a big size and then squeeze the stop dangerously close to justify it.",
        ],
      },
      {
        heading: "The mistake that undoes everything",
        paragraphs: [
          "The single most destructive habit in trading is moving a stop-loss further away once a trade starts losing. It feels reasonable in the moment — 'the price just needs a little more room, it'll come back' — but it is really a decision to abandon the loss limit you set when you were thinking clearly. The trade that was going to cost you €20 now might cost you €60, then €150.",
          "A stop-loss is a promise you make to yourself in a calm moment, to be kept in a stressful one. The calm you knows how much you can afford to lose; the stressed you, staring at a losing position, does not. Respecting your stop is respecting your own better judgement. If you find you cannot leave your stops alone, that is important self-knowledge — and a sign to trade much smaller until the habit is fixed.",
        ],
      },
      {
        heading: "Take-profit: the stop-loss's twin",
        paragraphs: [
          "Many platforms let you set a take-profit order alongside a stop-loss. It is the mirror image: an order that closes your trade automatically once the price reaches a level you are happy to take a profit at. Together, a stop-loss and take-profit define your two exits before you ever enter — one if you are wrong, one if you are right.",
          "Setting both in advance is calming and disciplined. It means the trade will resolve itself according to a plan you made while thinking clearly, rather than according to your nerves while you watch the screen. Fear tends to make people close winners far too early and hold losers far too long; pre-set exits are a simple defence against both.",
        ],
      },
      {
        heading: "The honest limits of stop-losses",
        paragraphs: [
          "A stop-loss is powerful but not magic. In fast markets — around major news, or when a market reopens after being closed — the price can 'gap', jumping from, say, 100 straight to 95 without trading at 98 at all. Your stop then fills at the next available price, and you lose more than the 2 points you planned. This is uncommon but real, and it is why you never risk money you truly cannot lose, even with a stop in place.",
          "Some brokers offer a 'guaranteed stop-loss' that fills at exactly your level even through a gap, usually for an extra fee. Whether that is worth it depends on what you trade and how you trade. The broader point stands: a stop-loss dramatically reduces your risk on the vast majority of trades, but it is a seatbelt, not a force field. Use it every time, and still trade small.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "position-sizing-for-beginners",
    title: "Position sizing for beginners, step by step",
    summary:
      "How to work out how big each trade should be so a loss only ever costs a small, pre-decided amount. Includes a simple three-step formula with realistic euro-and-pip examples.",
    category: "risk",
    level: "beginner",
    readingMinutes: 8,
    body: [
      {
        heading: "What position sizing actually means",
        paragraphs: [
          "Position sizing is simply deciding how large each trade should be. It sounds technical, but it is the most powerful risk control you have, and it is where beginners go wrong most often. Two people can take the exact same trade at the same time; one risks €20 and the other risks €2,000, purely because of position size. Same idea, wildly different outcome for their accounts.",
          "The reason it matters so much is that bigger positions make every price move — up or down — cost or earn more. A position that is too large turns an ordinary, meaningless market wobble into a frightening loss, which then pushes you into panicked, emotional decisions. Correct sizing keeps your losses small and boring, which is exactly what you want them to be.",
        ],
      },
      {
        heading: "The key idea: size the trade to fit the loss, not the other way round",
        paragraphs: [
          "Most beginners do this backwards. They decide 'I'll buy 10 of these' first, and only afterwards, if at all, wonder how much they could lose. The professional habit is the reverse: decide the maximum you are willing to lose on the trade, decide where your stop-loss goes, and then let those two numbers tell you how big the position can be.",
          "In other words, your risk limit and your stop distance are the inputs, and your position size is the output. You never pick a size you like and then hope the loss is acceptable. You calculate the size that makes the loss acceptable by design. This one reversal in thinking prevents most catastrophic beginner losses.",
        ],
      },
      {
        heading: "A simple three-step method",
        paragraphs: [
          "Step one: choose your risk per trade in euros. If your account is €4,000 and you use a 1% limit, that is €40. This is the most you will lose if the trade hits its stop.",
          "Step two: measure your stop distance — how far, in points or pips, the price would have to move against you to hit your stop. Say you decide your stop belongs 20 pips away from your entry.",
          "Step three: divide your risk by your stop distance to get the size. €40 of risk divided by a 20-pip stop means you can afford about €2 of loss per pip. You then choose the trade size on your platform that makes each pip worth roughly €2. If instead your stop needed to be 40 pips away, the same €40 risk would only allow €1 per pip — so you would trade half as large. Wider stop, smaller size; that is the trade-off, working automatically.",
        ],
      },
      {
        heading: "Seeing it with a second example",
        paragraphs: [
          "Let us run it again with different numbers so the pattern sticks. Account: €10,000. Risk limit: 1%, so €100 per trade. You look at a market and decide the sensible spot for your stop is 50 points away from where you would enter. Divide €100 by 50 points and you get €2 per point. So you choose a position size where each point of movement is worth about €2.",
          "If that trade loses and hits the stop, you lose roughly 50 points × €2 = €100 — exactly your limit, no surprises. If it wins and moves 100 points in your favour, you make around €200. The maths is not the interesting part; the discipline is. Every trade you take is pre-shaped so a loss is a shrug and never a disaster.",
        ],
      },
      {
        heading: "How leverage sneaks in and enlarges the danger",
        paragraphs: [
          "Many trading products offer leverage, which lets you control a large position while putting down only a small deposit. It is advertised as a way to make bigger profits from small moves, and it does — but it enlarges losses by exactly the same amount. Leverage is a big reason regulators consistently report that most retail traders lose money.",
          "Here is the trap: leverage tempts you to take positions far larger than your account should support, because the platform 'allows' it. Just because you can control a €50,000 position with a €1,000 deposit does not mean you should. Good position sizing ignores what leverage permits and instead sizes every trade off your risk limit and stop distance. If those numbers say trade small, you trade small, no matter how large a position the leverage would let you open.",
        ],
      },
      {
        heading: "Practical habits that make sizing easy",
        paragraphs: [
          "Do the calculation before every trade, not after. Many platforms include a position-size calculator, and there are free ones online; use them until the arithmetic becomes second nature. Spending thirty seconds on this is the highest-value thirty seconds in your whole trading routine.",
          "Start smaller than the maths even suggests while you are learning. If the formula says you can trade a certain size, consider trading a fraction of it for your first few months. Your early goal is to learn the mechanics and your own emotions cheaply, not to maximise profit. Small positions let you make your beginner mistakes for pocket change instead of for money that hurts.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "why-most-traders-lose-money",
    title: "Why do most traders lose money?",
    summary:
      "An honest look at why the majority of retail traders lose, from costs and leverage to emotions and unrealistic expectations — and what the evidence really suggests about improving your odds.",
    category: "risk",
    level: "beginner",
    readingMinutes: 8,
    body: [
      {
        heading: "Starting with an uncomfortable fact",
        paragraphs: [
          "Regulators in Europe require many brokers to display a warning stating what share of their retail clients lose money trading these products. The figures are routinely high — commonly in the region of 70% to 80% of accounts losing over a given period. These are not numbers invented by pessimists; they are drawn from the brokers' own client results and are printed on their advertising by law.",
          "It is worth sitting with that before you deposit a cent. If roughly three out of four people lose, then walking in assuming you will be the exception is not confidence — it is the exact overconfidence that helps produce those numbers. The good news is that understanding why people lose lets you avoid the most common and most expensive mistakes. That will not guarantee you a profit, but it can meaningfully improve your odds of surviving.",
        ],
      },
      {
        heading: "Reason one: costs quietly eat you alive",
        paragraphs: [
          "Every trade carries a cost — the spread, and often a commission and overnight fees. Individually these look tiny, which is exactly why they are so dangerous. Imagine each round trip in and out of a trade costs you, all in, about €5. That feels like nothing. But place four trades a day, five days a week, and that is roughly €100 a week, or over €5,000 a year, drained from your account before you have made a single good or bad prediction.",
          "This is why frequent, active trading is so much harder than it looks. The market does not have to beat you; your own costs can. A trader who breaks even on their predictions still loses steadily to fees. Understanding this is one reason experienced people often trade less, not more — fewer trades means fewer costs skimmed off the top.",
        ],
      },
      {
        heading: "Reason two: leverage turns small mistakes into big ones",
        paragraphs: [
          "Leverage lets a small deposit control a large position. Marketed as the path to bigger gains, it is equally a path to bigger losses, and it compresses the time in which a beginner can get into trouble. With high leverage, a modest move against you — the kind that happens constantly — can wipe out a large chunk of your deposit in minutes.",
          "Combine leverage with position sizes that are too large (the most common beginner error) and you have the classic blow-up: a normal market wobble that would have cost a sensible trader €30 instead costs the over-leveraged beginner €600. Do that a couple of times and the account is gone. Leverage is not evil, but treated casually it is one of the biggest single reasons those regulatory loss figures are so high.",
        ],
      },
      {
        heading: "Reason three: emotions override the plan",
        paragraphs: [
          "Even a trader with sensible costs and sizing can lose to their own psychology. Fear makes people snatch small profits too early and cling to losers, hoping they will recover, until a small loss becomes a large one. Greed makes people trade too big and chase markets that have already moved. After a loss, the urge to 'win it back' — revenge trading — turns a bad hour into a ruinous day.",
          "These are not character flaws unique to bad traders; they are ordinary human wiring, and they are strongest exactly when money is on the line. The traders who last are not fearless — they simply build rules in advance and follow them when their emotions are screaming otherwise. Most losing traders have no such rules, or have them and ignore them.",
        ],
      },
      {
        heading: "Reason four: unrealistic expectations and hype",
        paragraphs: [
          "A great deal of the trading world is built on selling a fantasy: fast, easy wealth, secret systems, and lifestyles of freedom. Beginners arrive expecting to replace their income in months, take positions far too large in pursuit of that dream, and quit in disgust after the inevitable early losses — often after paying for a 'course' or 'signals' that delivered nothing.",
          "Realistic expectations are themselves a form of risk management. If you accept that your first year is for learning cheaply, that losing periods are normal, and that steady modest results are the realistic best case rather than overnight riches, you will size sensibly, trade patiently, and avoid the desperation that drives so many losses. The people selling urgency and guaranteed returns are, without exception, part of the problem.",
        ],
      },
      {
        heading: "What actually improves your odds",
        paragraphs: [
          "None of this means everyone loses, or that trading is a scam — it means the odds are genuinely against the unprepared, and the common causes of loss are well known and largely avoidable. Trading small, keeping costs low by trading less often, using stop-losses, sizing every position off a fixed risk limit, and managing your own emotions will not hand you profits, but they directly attack the reasons most people fail.",
          "Perhaps the most honest improvement of all is being willing to conclude that trading is not for you. Deciding, after an honest trial with small money, to invest simply and slowly instead — or to leave markets alone entirely — is not a failure. For a great many people it is the single best financial decision they could make, and there is no shame whatsoever in reaching it.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "real-cost-of-trading-spreads-commissions-swaps",
    title: "The real cost of trading: spreads, commissions and swaps",
    summary:
      "Every trade costs money before you make a cent. A clear breakdown of spreads, commissions and overnight swap fees, with worked euro examples showing how quickly they add up.",
    category: "risk",
    level: "beginner",
    readingMinutes: 8,
    body: [
      {
        heading: "Why costs deserve your full attention",
        paragraphs: [
          "Trading costs are easy to ignore because each one looks small and they are buried in the price rather than presented as an obvious bill. But they come out of your pocket on every single trade, whether you win or lose, and over time they are one of the biggest reasons ordinary traders end up down. Learning to see these costs clearly is a genuine edge, because most beginners never bother.",
          "There are three costs you will meet most often: the spread, the commission, and the overnight swap. Some products charge one, some charge a combination. This guide explains each in plain language and, more importantly, shows with real numbers how they stack up — because the totals are usually larger than beginners expect.",
        ],
      },
      {
        heading: "The spread: the gap you pay on every trade",
        paragraphs: [
          "When you look at a market you will see two prices: a slightly higher one you can buy at, and a slightly lower one you can sell at. The gap between them is the spread, and it is the most common way brokers get paid. The moment you open a trade, you are effectively down by the spread, because you would buy at the higher price and could only immediately sell at the lower one.",
          "Here is a concrete example. Suppose a currency pair has a spread of 1 pip, and in your position size each pip is worth €10. The instant you open the trade you are about €10 down before the market has moved at all. The price now has to climb 1 pip in your favour just to get you back to break-even. That is a small hurdle on one trade — but multiply it across many trades and it becomes the main thing standing between you and profit.",
          "Spreads are not fixed. They are often tighter on big, heavily traded markets and wider on smaller or more volatile ones, and they can widen sharply around major news when things get chaotic. A trade that looked cheap to enter in calm conditions can cost noticeably more to enter during a frenzy.",
        ],
      },
      {
        heading: "Commissions: a separate, explicit fee",
        paragraphs: [
          "Some accounts advertise very tight spreads but then charge a separate commission per trade — a fixed fee, or a small percentage of the trade's value, taken when you open and again when you close. This is not necessarily worse than a wide-spread, no-commission account; it is just a different way of packaging the same cost, and sometimes it works out cheaper for active traders. The key is to add everything up rather than being dazzled by one low-looking number.",
          "For example, an account might charge a commission of €3.50 per side on a standard position. Opening and closing a trade means paying it twice — €7 in commission round-trip — on top of whatever the spread costs you. If you tell yourself 'the spread is tiny here' while ignoring that €7, you have missed most of your actual cost. Always compare accounts on total cost per round trip, spread and commission together.",
        ],
      },
      {
        heading: "Swaps: the cost of holding overnight",
        paragraphs: [
          "If you hold certain leveraged positions past the end of the trading day, you are usually charged (or occasionally paid) an overnight financing fee, commonly called a swap or rollover. Because leverage means you are effectively borrowing to hold a larger position than your deposit alone would allow, there is an interest-like cost for keeping that position open overnight.",
          "Suppose holding a particular position costs €4 per night in swap. Open it on Monday and hold it through to Friday and that is around €20 in overnight fees alone — and many brokers charge two or three days' worth of swap on one day of the week to account for the weekend, so it can be more. For someone holding trades for days or weeks, swaps can quietly become the largest cost of all, even though they never appear as an obvious charge.",
          "This is one reason some traders deliberately avoid holding positions overnight, and why the time you intend to hold a trade should influence which costs you focus on. Very short-term trading is dominated by spreads and commissions; longer-term holding is dominated by swaps.",
        ],
      },
      {
        heading: "Adding it all up: a realistic week",
        paragraphs: [
          "Let us put the three together. Say you place three trades a day, each with a total spread-plus-commission cost of about €6 round-trip, and you sometimes hold a position overnight, averaging €3 a night in swaps across a handful of nights. Three trades a day at €6 is €18; over five trading days that is €90 in spreads and commissions, plus perhaps €15 in swaps — call it roughly €105 for the week.",
          "Over a year of similar activity, that is more than €5,000 in costs, paid regardless of whether your predictions were good or bad. For an account of a few thousand euros, that cost load alone is a serious headwind. This is not an argument that trading is pointless — it is an argument for trading less often, understanding exactly what you are paying, and comparing accounts on real total cost.",
        ],
      },
      {
        heading: "How to keep costs from beating you",
        paragraphs: [
          "First, know your numbers. Before trading an account, find out its typical spread on the markets you care about, its commission structure, and its overnight swap rates, and add them into a single 'cost per round trip' figure. A broker's headline feature may hide a fee elsewhere; only the total tells the truth.",
          "Second, trade less. Every trade you skip is a cost you did not pay. Frequent trading multiplies your costs and hands more of your account to fees; patient, selective trading keeps more of your money working for you. Lower activity is one of the simplest and most reliable ways for a beginner to cut the biggest hidden drain on their results.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "how-to-spot-a-scam-broker",
    title: "How to spot a scam broker",
    summary:
      "The warning signs of a fraudulent or unsafe broker, how to check regulation yourself, why withdrawal problems are the biggest red flag, and how to protect your money before you deposit.",
    category: "risk",
    level: "beginner",
    readingMinutes: 8,
    body: [
      {
        heading: "Why this matters more than any strategy",
        paragraphs: [
          "You can be the most disciplined trader in the world, but if you hand your money to a dishonest broker, none of it matters — you can lose everything to fraud rather than to the market. The trading world attracts scammers precisely because it involves people sending money to companies they found online, often while dreaming of quick wealth. Protecting yourself here is more important than any chart or technique.",
          "This guide does not name specific companies, good or bad, and you should be wary of anyone who confidently tells you which single broker is 'the safe one'. Instead, it gives you the checks and warning signs you can apply yourself to any broker, so you are never dependent on a stranger's word. If you are 40 or older and this is money you have spent years building, treat these checks as non-negotiable.",
        ],
      },
      {
        heading: "Red flag one: no verifiable regulation",
        paragraphs: [
          "A legitimate broker is regulated by a serious financial authority, and it will state clearly on its website which regulator oversees it and under what licence number. Regulation matters because it forces the broker to follow rules on how it holds your money, how it treats you, and what recourse you have if something goes wrong. An unregulated broker has none of these obligations, and if it disappears with your funds, you may have no protection at all.",
          "Crucially, do not just trust the logos and claims on the broker's own site — scammers copy those freely. Go directly to the regulator's official website yourself and search their public register for the company and licence number. If you cannot find them there, or the details do not match, walk away. A firm that claims to be regulated but cannot be found on the regulator's own register is a firm to avoid completely.",
          "Be alert to a subtle trick: a company may wave around a licence from a serious regulator while actually taking your account through a different, offshore entity in a country with weak oversight. Check which specific legal entity you are actually signing up with, and where it is based, not just the impressive-sounding name in the advertising.",
        ],
      },
      {
        heading: "Red flag two: promises that are too good to be true",
        paragraphs: [
          "No legitimate firm guarantees profits, and no honest person can. Any broker, 'account manager', or online figure promising guaranteed returns, 'risk-free' trading, signals that cannot lose, or a system that always wins is lying, full stop. Real markets carry real risk; anyone claiming to have removed it is either a fraud or does not understand what they are selling.",
          "Watch too for the softer version of this: relentless optimism, screenshots of huge profits, photos of luxury cars and holidays, and testimonials from people who got rich fast. These are marketing props designed to switch off your caution. A trustworthy broker talks plainly about risk — indeed, regulated ones are legally required to — and does not need to dangle a fantasy lifestyle in front of you.",
        ],
      },
      {
        heading: "Red flag three: pressure, urgency and 'account managers'",
        paragraphs: [
          "A classic scam pattern is the persistent phone call. After you show the slightest interest — sometimes after merely entering your details on a flashy ad — someone calls presenting themselves as your personal 'account manager' or 'senior broker'. They are warm, they are helpful, and they steadily pressure you to deposit more, to deposit 'today before the opportunity closes', or to let them place trades for you. This is a hallmark of fraud.",
          "Legitimate brokers do not ring you up urging bigger deposits or promising a hot opportunity that expires tonight. Any urgency, any pressure, any sense that you must act right now is a reason to stop, not to proceed. Nothing genuine in trading requires you to move immediately, and no honest firm needs to push you. If it feels like a hard sell, it is one.",
        ],
      },
      {
        heading: "Red flag four: you cannot get your money out",
        paragraphs: [
          "The single most telling sign of a scam broker is trouble withdrawing your own money. The pattern is grimly familiar: deposits are instant and easy, but when you try to withdraw, suddenly there are new 'verification' demands, surprise 'taxes' or 'fees' you must pay first, endless delays, or an account manager who talks you out of it. Any of these is a screaming warning sign.",
          "A useful protective habit is to test withdrawals early. Once you have deposited a modest starting amount and perhaps traded a little, request a small withdrawal before you ever consider adding more. If it processes smoothly, that is a genuinely good sign. If it triggers excuses, delays, or demands for more money to 'release' your funds, you have learned something vital while you can still limit the damage — and you should never send another cent, least of all to 'unlock' the money they are holding.",
        ],
      },
      {
        heading: "How to protect yourself before you deposit",
        paragraphs: [
          "Do your checks first, calmly, before any money moves. Confirm the exact legal entity and its regulation on the regulator's own official register. Read independent reviews with a critical eye, treating both glowing and furious ones cautiously, and look specifically for repeated complaints about withdrawals. Start with a small deposit, test a withdrawal, and never let anyone pressure you into more.",
          "Above all, protect two things: your money and your login and personal details. Never give anyone remote access to your computer, never share passwords or one-time codes, and be deeply suspicious of anyone offering to trade 'on your behalf' if you just deposit. Slowing down is your best defence. Scams rely on urgency and excitement; your patience and your willingness to walk away are the exact things they cannot overcome.",
        ],
      },
    ],
  },
];

export default CLUSTER_RISK;
