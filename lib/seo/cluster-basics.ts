/**
 * SEO education cluster: trading basics for total beginners (aged 40+).
 * Plain-English, neutral, honest about risk. No signals, no hype,
 * no performance promises, no "get rich" framing, no named brokers.
 *
 * Answers common beginner search intents:
 *   - what is a pip
 *   - what is leverage in trading
 *   - what is a spread
 *   - what is margin and a margin call
 *   - demo account vs real account
 *   - how much money do I need to start trading
 */

import type { Lesson } from '../lessons';

export const CLUSTER_BASICS: Lesson[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'what-is-a-pip',
    title: 'What is a pip in forex trading?',
    summary:
      'A plain-English explanation of what a pip is, how it is calculated on different currency pairs, how pip value depends on your trade size, and why pips are how traders measure gains and losses.',
    category: 'basics',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'The short answer',
        paragraphs: [
          'A pip is the smallest standard unit by which a currency exchange rate normally moves. For most currency pairs it is the fourth number after the decimal point. If the euro against the US dollar (written EUR/USD) moves from 1.1050 to 1.1051, that is a one-pip move. The word is short for "percentage in point", but you do not need the history to use it — just think of it as the trader\'s ruler for measuring price changes.',
          'Traders talk in pips because raw prices are clumsy to compare. Saying "the price went up 0.0007" is harder to picture than saying "it went up 7 pips". Once you get used to it, pips become the everyday language you use to describe how far a market moved, how far away your stop-loss sits, and how much you gained or lost.',
        ],
      },
      {
        heading: 'Where the pip sits on different pairs',
        paragraphs: [
          'For most major pairs — EUR/USD, GBP/USD, AUD/USD and so on — the pip is the fourth decimal place. So a move from 1.2500 to 1.2510 is 10 pips. Simple enough.',
          'The main exception is any pair involving the Japanese yen, such as USD/JPY. Because the yen trades in the tens or hundreds rather than around one, the pip is the second decimal place. A move from 150.20 to 150.30 in USD/JPY is 10 pips, not thousands of pips. This trips up almost every beginner once, so it is worth remembering: yen pairs count pips at the second decimal, everything else at the fourth.',
          'You will also see many brokers quote a fifth decimal (or a third for yen pairs). That extra digit is called a "pipette" or fractional pip — it is a tenth of a pip. A price shown as 1.10505 is simply 1.1050 and a half. It gives a slightly finer price; it does not change what a full pip is.',
        ],
      },
      {
        heading: 'What a pip is actually worth in money',
        paragraphs: [
          'A pip is a distance, not an amount of money. How much a one-pip move is worth to you depends entirely on how large your position is. This is the part beginners most often skip, and it matters a great deal.',
          'The industry uses "lots" to describe size. A standard lot is 100,000 units of the base currency, a mini lot is 10,000, and a micro lot is 1,000. As a rough guide on a pair quoted in US dollars, one pip is worth about $10 on a standard lot, about $1 on a mini lot, and about $0.10 on a micro lot. So if you buy one mini lot of EUR/USD and it moves 20 pips in your favour, that is roughly 20 × $1 = $20. If it moves 20 pips against you, that is a $20 loss.',
          'The practical lesson is that the same 20-pip move can mean 20 cents or 200 dollars depending only on your position size. Pips measure the market; your lot size decides how hard each pip hits your account. This is exactly why controlling your position size is the real lever over your risk.',
        ],
      },
      {
        heading: 'A worked example',
        paragraphs: [
          'Suppose you buy one micro lot (1,000 units) of GBP/USD at 1.2600, and you set a stop-loss 30 pips away at 1.2570 and a target 30 pips away at 1.2630. On a micro lot, each pip is worth about $0.10.',
          'If the price hits your target, you gain roughly 30 × $0.10 = $3. If it hits your stop, you lose roughly the same $3. Now imagine the same trade on a standard lot: each pip is worth about $10, so the very same 30-pip move becomes a $300 gain or a $300 loss. Nothing about the market changed — only the size you chose.',
          'Seeing it in numbers makes the point concrete: pips let you plan a trade before you place it. You can decide "I am willing to risk 30 pips" and then pick a lot size small enough that 30 pips is an amount you are genuinely comfortable losing.',
        ],
      },
      {
        heading: 'Why pips matter for your costs, too',
        paragraphs: [
          'Pips are also how trading costs are usually quoted. The spread — the small gap between the buy price and the sell price — is measured in pips. If a broker advertises a "0.8 pip spread" on EUR/USD, that is the built-in cost you pay to open and eventually close a position.',
          'Because every trade starts with the spread working against you, the number of pips you need just to break even is not zero — it is the spread. On short-term, frequent trading, these pips of cost add up fast. Understanding pips is therefore not just about measuring profit; it is about seeing clearly what a trade actually costs you before it has any chance to go your way.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'what-is-leverage-in-trading',
    title: 'What is leverage in trading?',
    summary:
      'A calm, honest explanation of leverage: what it means, how ratios like 1:30 work, a worked example of how it magnifies both gains and losses, and why beginners should treat it with real caution.',
    category: 'risk',
    level: 'beginner',
    readingMinutes: 7,
    body: [
      {
        heading: 'What leverage really means',
        paragraphs: [
          'Leverage lets you control a position larger than the cash you put down. Instead of paying the full value of a trade, you put down a small deposit and effectively borrow the rest from your broker for the duration of the trade. It is often described as a way to "do more with less" — and that framing is exactly why it is so dangerous to beginners.',
          'Leverage is written as a ratio, such as 1:10, 1:30 or 1:100. A ratio of 1:30 means that for every €1 of your own money, you can control €30 of position. So €1,000 of your money could open a €30,000 position. That sounds powerful, and it is — but "powerful" cuts in both directions, which is the whole point of this guide.',
        ],
      },
      {
        heading: 'It magnifies losses exactly as much as gains',
        paragraphs: [
          'The marketing around leverage almost always emphasises bigger profits. Here is the honest other half: leverage magnifies your losses by precisely the same factor. If a position is 30 times larger than your cash, then a price move affects you 30 times as much — up or down.',
          'This is not a minor footnote. It is the single most important thing to understand about leverage. A small, ordinary move in the market — the kind that happens many times a day — can turn into a large gain or a large loss relative to the money you put in. High leverage is one of the main reasons that a large majority of retail traders lose money, a fact that regulated brokers are required to display prominently.',
        ],
      },
      {
        heading: 'A worked example',
        paragraphs: [
          'Imagine you have €1,000 and you use 1:30 leverage to open a €30,000 position on a currency pair. Suppose the price then moves 1% in your favour. One percent of €30,000 is €300 — a €300 gain on your €1,000, which is a 30% return on your money from a 1% market move. It feels fantastic.',
          'Now run the same numbers the other way. If the price moves 1% against you, you lose €300 — 30% of your money gone from a single 1% wobble. And a 1% move is nothing unusual; many markets move that much in a normal day. If the market moved roughly 3.3% against you, your entire €1,000 could be wiped out, because 3.3% of €30,000 is about €1,000.',
          'That is the reality leverage hides behind exciting language. The bigger your leverage, the smaller the market move needed to seriously hurt you. Beginners who use high leverage often find their account gone in days, not from being badly wrong about the market, but from being slightly wrong with far too much size.',
        ],
      },
      {
        heading: 'Leverage, margin and margin calls',
        paragraphs: [
          'The deposit you put down to open a leveraged position is called "margin". Leverage and margin are two sides of the same coin: higher leverage means a smaller margin deposit for the same position size. At 1:30, the margin needed for that €30,000 position is around €1,000 — which happens to be your whole account in the example above, leaving no cushion.',
          'If your losses eat into your account so far that your remaining money falls below what the broker requires to hold the position, you get a "margin call" — a warning to add funds or reduce your position. If you do not, the broker may close your trades automatically, locking in the loss. Leverage is what makes margin calls happen fast, because the losses arrive magnified.',
        ],
      },
      {
        heading: 'Regulatory limits and why they exist',
        paragraphs: [
          'In several regions, regulators have capped the leverage that brokers can offer to ordinary retail traders — for example, limiting major currency pairs to around 1:30. These caps were not introduced to spoil anyone\'s fun. They exist because so many retail traders lost so much money using very high leverage that authorities decided to step in.',
          'Where you trade, the maximum leverage available may differ, and some offshore brokers advertise far higher figures. Treat sky-high leverage as a warning sign, not a selling point. A broker dangling 1:500 is offering you a faster way to lose your deposit, not a better opportunity.',
        ],
      },
      {
        heading: 'How a beginner should think about it',
        paragraphs: [
          'The sensible beginner approach is simple: use as little leverage as you can, or none while you are still learning. Just because a broker offers 1:30 does not mean you must trade the full size it allows. You can always open a much smaller position, which is the same as choosing lower effective leverage for yourself.',
          'A useful mental habit is to think in terms of the total position you are controlling, not the small deposit you put down. If controlling a €30,000 position on €1,000 makes you uneasy, that unease is correct and worth listening to. Keeping your positions small keeps the market\'s normal ups and downs survivable — and staying in the game is how you get the chance to learn.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'what-is-a-spread',
    title: 'What is a spread in trading?',
    summary:
      'A clear beginner guide to the spread: the gap between the buy and sell price, how it is your main trading cost, how it is measured in pips, why it widens, and how it affects short-term trading.',
    category: 'basics',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'Two prices, not one',
        paragraphs: [
          'When you look at a market on a trading platform, you will almost always see two prices, not one. There is the price you can buy at (often called the "ask" or "offer") and the slightly lower price you can sell at (often called the "bid"). The gap between these two numbers is the spread.',
          'This surprises many beginners, who assume a market has a single price like a shop shelf. In reality, you buy at a slightly higher price and sell at a slightly lower one — and that small difference is one of the main ways your broker gets paid. It is a real, unavoidable cost that applies to essentially every trade you make.',
        ],
      },
      {
        heading: 'The spread is a cost you pay on every trade',
        paragraphs: [
          'Because you buy high and sell low by the width of the spread, every trade starts life at a small loss. The moment you open a position, you are already down by the spread, and the market has to move at least that far in your favour before you break even.',
          'Think of it like currency exchange at an airport. The board shows one rate to buy euros and a worse rate to sell them back. If you changed money and immediately changed it back, you would come out with less — not because the market moved, but because of the spread. Trading works the same way, and understanding this stops you from expecting to break even the instant you enter a trade.',
        ],
      },
      {
        heading: 'How spreads are measured',
        paragraphs: [
          'Spreads are usually quoted in pips. If EUR/USD shows a buy price of 1.10512 and a sell price of 1.10502, the spread is one pip. A broker advertising a "0.8 pip spread" is telling you the typical gap you will pay on that market.',
          'To turn a spread into money, you multiply it by your pip value. On a mini lot of EUR/USD, where each pip is worth about $1, a one-pip spread costs you about $1 to enter and exit a trade. On a standard lot, where each pip is worth about $10, that same one-pip spread costs about $10. So the money cost of the spread scales with your position size, just like everything else.',
        ],
      },
      {
        heading: 'Why spreads change',
        paragraphs: [
          'Spreads are not fixed in stone. On heavily traded markets during busy hours — such as major currency pairs when London and New York are both open — spreads tend to be tightest, because there are plenty of buyers and sellers. On thinly traded markets, or in the quiet hours of the night, spreads widen because there is less activity.',
          'Spreads also widen sharply around major news announcements and at moments of stress, sometimes dramatically for a few seconds or minutes. A spread that is normally 1 pip might briefly balloon to many pips. This is one reason experienced traders are cautious about trading through big scheduled news events: your cost of entry can spike at exactly the wrong moment.',
        ],
      },
      {
        heading: 'Spreads, commissions, and the honest total cost',
        paragraphs: [
          'Some accounts advertise very low or "raw" spreads but then charge a separate commission per trade. Others fold everything into a slightly wider spread with no separate commission. Neither is automatically cheaper — you have to add the two together to see your real cost. A "zero commission" account with a wide spread can easily cost more than a small-commission account with a tight spread.',
          'For a beginner, the practical takeaway is this: costs are real and they happen on every single trade, whether you win or lose. The more often you trade, the more the spread quietly drains your account. This is a big part of why trading small and infrequently tends to be far kinder to a beginner\'s balance than trading constantly — every trade you skip is a spread you did not pay.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'what-is-margin-and-margin-call',
    title: 'What is margin and a margin call?',
    summary:
      'A plain-English guide to margin: the deposit that holds a leveraged position, how used and free margin work, what a margin call and stop-out are, and a worked example of how a position gets closed.',
    category: 'risk',
    level: 'beginner',
    readingMinutes: 7,
    body: [
      {
        heading: 'Margin is a deposit, not a fee',
        paragraphs: [
          'Margin is the amount of your own money that a broker sets aside to let you open and hold a leveraged position. It is not a cost or a fee you pay away — it is more like a security deposit that is reserved while the trade is open and released back to you when you close it. Understanding this distinction is the first step to not being frightened by the word.',
          'Because leveraged trading lets you control a position larger than your cash, the broker needs some of your money held as a buffer against losses. That reserved money is your margin. It is the mechanism that connects leverage to your account: the higher the leverage, the smaller the margin needed for a given position size.',
        ],
      },
      {
        heading: 'Used margin, free margin and equity',
        paragraphs: [
          'A few related terms show up on every trading platform, and they are worth learning together. Your "balance" is the cash in your account before counting any open trades. Your "equity" is your balance adjusted for the current profit or loss on any open positions — it is what your account is really worth right now.',
          '"Used margin" is the portion of your money currently reserved to hold your open trades. "Free margin" is what is left over — the equity not tied up as used margin, which is the cushion available to absorb losses or open new trades. When trades move against you, your equity falls, your free margin shrinks, and you get closer to trouble. Watching your free margin, not just your balance, is how you keep track of how much room you really have.',
        ],
      },
      {
        heading: 'What a margin call is',
        paragraphs: [
          'A margin call is a warning from your broker that your losses have eaten into your account so far that you no longer have enough equity to safely support your open positions. In effect, the broker is saying: "Your cushion is nearly gone. Add more money or reduce your positions, or we will start closing trades."',
          'Brokers express the danger level using a "margin level" percentage — roughly your equity divided by your used margin. As losses mount, that percentage falls. Many brokers issue a margin-call warning at a set level (for example, 100%) and then, if things get worse, reach a "stop-out" level (for example, 50%) at which they automatically close your positions to stop your losses running past your deposit. The exact percentages vary by broker, so it is worth knowing yours.',
        ],
      },
      {
        heading: 'A worked example',
        paragraphs: [
          'Suppose you deposit €1,000 and open a position that requires €500 of used margin. That leaves €500 of free margin as your cushion. At this point your equity is €1,000 and your margin level is comfortable.',
          'Now the trade moves against you and shows a €400 loss. Your equity drops to €600, your used margin is still €500, and your free margin has shrunk to just €100. Your margin level (€600 ÷ €500) is now about 120% — getting close to the level where a warning appears. If the loss grows to €500, your equity is €500, your margin level is 100%, and a margin call is likely. Let it slide further and the broker\'s stop-out will close the position for you, crystallising the loss.',
          'The example shows how quickly a comfortable-looking account can turn tight. The larger your position relative to your deposit — that is, the more leverage you use — the smaller the market move needed to march you through a warning and into a forced close.',
        ],
      },
      {
        heading: 'Negative balance protection',
        paragraphs: [
          'In some regulated regions, retail accounts come with "negative balance protection", meaning you cannot lose more than the money in your account even if the market gaps violently past the stop-out. Your balance can be taken to zero, but not below it. This is a genuinely important protection, and it is one of the reasons a properly regulated broker matters.',
          'Not every broker, especially offshore ones, offers this. Without it, in a fast, gapping market it is possible to end up owing the broker money. Before you trade with real funds, it is worth checking whether your account has negative balance protection — it is the difference between a bad day and a genuinely ruinous one.',
        ],
      },
      {
        heading: 'How to avoid margin calls in the first place',
        paragraphs: [
          'Margin calls are not a mysterious punishment; they are the predictable result of trading too large for your account. The way to avoid them is straightforward: keep your positions small, use modest leverage, and always leave plenty of free margin as a buffer. If a normal market move can push you toward a margin call, your position is simply too big.',
          'A stop-loss on every trade also helps enormously, because it caps each loss before it can chew through your margin. Between small position sizes and disciplined stop-losses, most beginners can keep well clear of margin calls entirely. The traders who get stopped out are almost always the ones who used too much leverage and left themselves no room to be wrong.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'demo-account-vs-real-account',
    title: 'Demo account vs real account: what is the difference?',
    summary:
      'An honest comparison of demo and real trading accounts: what each one is for, what a demo can and cannot teach you, why real money feels different, and how to move from one to the other sensibly.',
    category: 'basics',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'What each account actually is',
        paragraphs: [
          'A demo account (sometimes called a practice or paper-trading account) lets you place trades using pretend money on real, live market prices. Everything looks and behaves like real trading — the charts, the buttons, the prices — except that no real money is ever at risk. It is free, and almost every regulated broker offers one.',
          'A real account, sometimes called a live account, uses your actual deposited money. Wins add to your balance and losses subtract from it, for real. The mechanics of placing a trade are identical to the demo. The difference is not in how the platform works; it is in what is on the line — and, as we will see, that difference matters more than beginners expect.',
        ],
      },
      {
        heading: 'What a demo account teaches you well',
        paragraphs: [
          'A demo account is the best possible place to learn the mechanics of trading, and you should spend real time there — weeks, not hours. It is where you learn to place and close a trade, set a stop-loss and a take-profit, read your profit and loss, and find your way around the platform without fumbling. Make all your clumsy beginner mistakes here, where they cost you nothing but time.',
          'It is also a safe laboratory for testing a strategy or a routine. You can try an approach over many trades and see roughly how it behaves before a single euro is at risk. Any trading idea you are considering should survive a decent spell on a demo account first. If it falls apart in practice mode, it will certainly fall apart with real money.',
        ],
      },
      {
        heading: 'What a demo account cannot teach you',
        paragraphs: [
          'Here is the honest limitation: demo trading teaches the mechanics, not the emotions. When the money is pretend, a losing trade produces a shrug. When the money is real — even a small amount — the same losing trade can produce fear, frustration, and the urge to do something rash. Emotion is the part of trading that most often decides outcomes, and a demo cannot rehearse it.',
          'This leads to a well-known trap: many people trade calmly and profitably on demo, then fall apart the moment they go live. Nothing about the market changed — only their feelings did. It is not a sign that you are broken; it is a sign that the emotional side of trading is a separate skill that only real stakes can develop.',
          'There are also small technical differences. On a demo, your orders usually fill instantly at the shown price. In fast, real markets you may experience slippage, requotes or widened spreads that a demo tends to smooth over. So demo results can look slightly rosier than reality — another reason not to treat a good demo run as proof you are ready.',
        ],
      },
      {
        heading: 'Moving from demo to real, sensibly',
        paragraphs: [
          'There is no fixed graduation date, but a reasonable signal to consider going live is when you can follow a written plan calmly and consistently on demo over many trades, keep a journal, and respect your own stop-losses without moving them. If you cannot do those things with pretend money, real money will not help.',
          'When you do move to a real account, start with an amount you would be completely fine losing entirely, and keep your trade sizes tiny — think of it as paying a modest tuition fee to learn how you behave with real stakes. The goal at this stage is still learning, not earning. Many people are genuinely shocked at how differently they act once even a small amount of real money is involved.',
        ],
      },
      {
        heading: 'Using both together',
        paragraphs: [
          'Demo and real accounts are not strictly a "before and after". Plenty of experienced traders keep a demo account open alongside their live one, using it to test new ideas or new markets without risking real funds. There is no rule that you must abandon the demo once you go live.',
          'The healthiest mindset is that the demo never stops being useful. Trying something unfamiliar? Test it on demo first. In the end, the demo teaches you the machine and the real account teaches you yourself — and you need both lessons. Rushing past the demo to "get to the real thing" is one of the most common and expensive beginner mistakes there is.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'how-much-money-to-start-trading',
    title: 'How much money do I need to start trading?',
    summary:
      'An honest look at how much money it really takes to start: why minimum deposits are the wrong question, why you should only risk spare money, how position sizing sets the real floor, and why the answer for many people is zero.',
    category: 'risk',
    level: 'beginner',
    readingMinutes: 7,
    body: [
      {
        heading: 'The honest first answer: possibly nothing',
        paragraphs: [
          'The most useful answer to "how much do I need to start trading?" is one nobody selling a course wants to give: for many people, the right amount is zero, at least for now. You can learn the mechanics of trading completely free on a demo account, and you should spend a good while there before real money enters the picture at all.',
          'It is also worth being blunt about the odds. Regulated brokers are required to warn that a large majority of retail traders lose money. Trading is not a reliable income, a savings plan, or a shortcut — and deciding that it is not for you, or not yet, is a perfectly sensible and often money-saving conclusion. Nobody needs to trade.',
        ],
      },
      {
        heading: 'Minimum deposits are the wrong question',
        paragraphs: [
          'Many brokers advertise low minimum deposits — sometimes €50, €100 or €200 — and beginners often read this as "so that is how much I need". That is a mistake. A minimum deposit is the least the broker will let you open an account with; it has nothing to do with how much you can sensibly afford to risk or how much you actually need to trade properly.',
          'A tiny deposit can also work against you. On a very small account, the temptation is to use high leverage and oversized positions just to make the numbers feel worthwhile — which is exactly the behaviour that wipes accounts out. The question is not "what is the minimum I am allowed to deposit?" but "what is an amount I can genuinely afford to lose, and can I trade it in small, sensible sizes?"',
        ],
      },
      {
        heading: 'Only ever risk genuinely spare money',
        paragraphs: [
          'Whatever figure you land on, it must be money that, if it vanished completely tomorrow, would not touch your rent, your bills, your family, your emergency savings, or your ability to sleep. This advice is repeated so often it can wash over you — so take it literally. The money you trade should be truly spare.',
          'Never trade with borrowed money, credit cards, or funds earmarked for something important. Beyond the obvious financial danger, needing the money back creates emotional pressure, and emotional pressure is one of the fastest routes to bad decisions and bigger losses. And for many people, honestly, the amount of genuinely spare money available for something this risky is small or zero — which, again, is a completely valid answer.',
        ],
      },
      {
        heading: 'How position sizing sets the real floor',
        paragraphs: [
          'The amount you need is really driven from the bottom up by risk, not from the top down by a deposit figure. A widely used rule of thumb is to risk no more than about 1% of your account on any single trade. On a €500 account, that is about €5 of risk per trade; on a €1,000 account, about €10.',
          'For that maths to work, your account has to be large enough that a sensible position — with a sensible stop-loss distance in pips — only puts about 1% at risk. On a very small account, even the smallest available position (a micro lot) can represent far more than 1% of your money, which forces you either to over-risk or to sit on the sidelines. This is the real reason accounts that are too small tend to fail: they leave no room to size trades properly.',
          'As a rough illustration, trading a single micro lot with a 30-pip stop risks around €3 per trade. For that to be only about 1% of your account, you would want somewhere in the region of €300 or more just to trade the smallest size sensibly — and more if you want any breathing room. The exact figure depends on the market and your stop distance, but the principle holds: your risk rules set the floor, not the broker\'s minimum.',
        ],
      },
      {
        heading: 'A sensible starting range for a beginner',
        paragraphs: [
          'Putting it together, a common and reasonable approach is: learn free on a demo for weeks; then, if and only if you have genuinely spare money and want to experience real stakes, start with a modest amount — for many people somewhere in the low hundreds — treated purely as the cost of an education, not an investment you expect to grow.',
          'Keep your positions tiny at this stage, use little or no leverage, and expect to lose some of it while you learn how you behave with real money. If you cannot lose that starting amount without it affecting your life, the amount is too big and you should trade smaller or wait. There is no prize for depositing more.',
        ],
      },
      {
        heading: 'Money is not the main thing you need',
        paragraphs: [
          'It is tempting to believe that a bigger account is what stands between you and success. Usually it is not. What separates beginners who last from those who blow up is not the size of their deposit but their discipline: risking small amounts per trade, respecting stop-losses, keeping a journal, and having the patience to do nothing when there is nothing worth doing.',
          'So before asking how much money you need, ask whether you have the temperament and the time to trade slowly and carefully — and whether you can afford to lose whatever you put in without it hurting. Get those honest answers first. The right amount of money follows from them, and for a great many people the calmest, wisest answer remains: start with a demo, and risk nothing you cannot comfortably afford to lose.',
        ],
      },
    ],
  },
];

export default CLUSTER_BASICS;
