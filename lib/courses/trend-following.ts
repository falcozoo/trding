import type { Course } from "../courses";

export const trendCourse: Course = {
  id: "trend-following",
  title: "Trend Following & Indicator Trading",
  tagline: "Ride the trend with moving averages, RSI, MACD and more.",
  description:
    "Learn trend following and indicator trading from scratch: use moving averages, the 200 EMA, RSI, MACD and Bollinger Bands to identify trends, time entries, and build a disciplined indicator strategy.",
  level: "beginner",
  accent: "amber",
  modules: [
    /* ============================================================ */
    /* 1. Introduction to Trend Following                           */
    /* ============================================================ */
    {
      slug: "introduction-trend-following",
      title: "Introduction to Trend Following",
      summary:
        "What trend following is, why traders aim to trade in the direction of the trend, and how indicators fit into that approach.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to explain what trend following is, why aligning with the trend is the foundation of indicator trading, and how to size a trend-aligned trade with a defined stop.",
      blocks: [
        {
          kind: "text",
          html: "Trend following is the practice of trading in the <strong>direction of the trend</strong> rather than trying to predict tops and bottoms. The core belief is simple: markets that are moving up or down tend to keep going for longer than most people expect, so it pays to join the move rather than fight it. You are not trying to be clever or early — you are trying to be aligned with the money that is already flowing one way.",
        },
        {
          kind: "image",
          src: "/learn/trend/01-intro.png",
          alt: "Trading in the direction of the trend",
          caption:
            "Trend following means aligning your trades with the market's current direction.",
        },
        {
          kind: "heading",
          text: "Why follow the trend?",
        },
        {
          kind: "text",
          html: "A trend represents the <strong>path of least resistance</strong>. When buyers are consistently in control, buying pullbacks tends to work better than shorting; when sellers dominate, the reverse is true. The <em>why</em> is behavioural: a rising market attracts fresh buyers, forces trapped sellers to cover, and feeds on its own momentum until something breaks it. Fighting that flow means betting against every one of those participants at once.",
        },
        {
          kind: "text",
          html: "The trade-off is emotional. Trend followers accept <strong>many small losses</strong> in exchange for occasionally catching a large, sustained move that pays for all of them and more. Most of your trades may be scratches or small losers; a minority of big winners carries the whole account. If you cannot stomach being wrong often while staying disciplined, trend following will feel unbearable long before it works.",
        },
        {
          kind: "text",
          html: "This course leans on <strong>technical indicators</strong> — moving averages, RSI, MACD, Bollinger Bands and others. Every one of these is math applied to price, which means they <strong>lag behind</strong> the market. They summarise what price has already done; they never see the future. Used well, they are a filter and a discipline aid. Used badly — as a crystal ball — they are a fast way to lose money with false confidence.",
        },
        {
          kind: "heading",
          text: "How to think about the whole approach",
        },
        {
          kind: "list",
          items: [
            "Indicators describe <strong>trend, momentum and volatility</strong> from past price.",
            "Because they are derived from price, all indicators <strong>lag</strong> to some degree.",
            "They shine in trends and <strong>struggle in choppy</strong>, sideways markets.",
            "No indicator is a signal to blindly follow — context and risk still rule.",
          ],
        },
        {
          kind: "example",
          title: "Turning a trend read into a sized trade",
          steps: [
            "On the 4-hour EUR/USD chart price is making <strong>higher highs and higher lows</strong> and sits above a rising average — you only look for buys.",
            "Price pulls back and stalls near the last higher low at <strong>1.0850</strong>, then prints a strong green close showing buyers returning. You enter long at <strong>1.0870</strong>.",
            "Your stop goes just below the higher low at <strong>1.0835</strong> — a close there means the uptrend read was wrong. Risk = <strong>35 pips</strong>.",
            "Account is <strong>€2,000</strong> and you risk <strong>1%</strong> = €20. With a 35-pip stop you size so 35 pips against you costs ~€20 — about <strong>0.05 lots</strong> on EUR/USD.",
            "You target the measured continuation near <strong>1.0990</strong>, ~120 pips away — roughly <strong>3.4:1 reward-to-risk</strong>. The whole plan exists before you click.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with trend following",
          items: [
            "<strong>Picking tops and bottoms.</strong> Trying to call the exact turn is the opposite of trend following. Join the move you can already see, don't guess the one you hope for.",
            "<strong>Treating indicators as signals.</strong> A crossover or an oversold reading is context, not a command. Blindly acting on one line is how beginners bleed out in ranges.",
            "<strong>Bailing on the small losers.</strong> Trend following pays through a few big winners funded by many small losses — cutting winners early to 'lock it in' quietly destroys the whole edge.",
            "<strong>Fighting the higher timeframe.</strong> A one-hour bounce inside a daily downtrend is still a short setup. Let the bigger picture set your bias before any indicator.",
            "<strong>Skipping risk management because 'the trend is obvious'.</strong> Obvious trends reverse too. No amount of trend clarity removes the need for a stop and a sensible size.",
          ],
        },
        {
          kind: "key",
          text: "Trend following means trading with the market's direction — indicators help you read that direction, but they lag price and never guarantee it.",
        },
        {
          kind: "quiz",
          question:
            "A one-hour chart is bouncing up, but the daily chart is in a clear downtrend. What's the trend-following bias?",
          options: [
            "Go long — follow the one-hour bounce",
            "Stay short-biased — the higher timeframe sets direction",
            "Ignore both and wait for a crossover",
            "Trade both directions at once",
          ],
          correct: 1,
          explain:
            "The higher timeframe wins. A short-term bounce inside a bigger downtrend is still counter-trend, so a trend follower keeps a short bias until the daily itself turns.",
        },
        {
          kind: "text",
          html: "Throughout this course we build up in layers: first read the trend, then add moving averages, momentum tools and volatility bands, and finally combine them into one disciplined plan. Because no tool is perfect, <strong>risk management</strong> is the thread that runs through every module — the same defined-stop discipline you just saw applies to every setup ahead.",
        },
      ],
    },

    /* ============================================================ */
    /* 2. Identifying a Trend                                       */
    /* ============================================================ */
    {
      slug: "identifying-a-trend",
      title: "Identifying a Trend",
      summary:
        "How to recognise an uptrend, downtrend or range from the chart before you reach for a single indicator.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to classify a market as trending up, trending down, or ranging using price structure alone, and know which tactics fit each state.",
      blocks: [
        {
          kind: "text",
          html: "Before any indicator, you must know whether a market is trending at all. An uptrend prints <strong>higher highs and higher lows</strong>; a downtrend prints lower highs and lower lows; a range drifts sideways with no clear progression. Reading this from price first keeps your indicators honest — because almost every trend tool you own will fire misleading signals the moment the market stops trending.",
        },
        {
          kind: "image",
          src: "/learn/trend/02-identify-trend.png",
          alt: "Higher highs and higher lows marking an uptrend",
          caption:
            "An uptrend is a staircase of higher highs and higher lows.",
        },
        {
          kind: "heading",
          text: "The three market states",
        },
        {
          kind: "list",
          items: [
            "<strong>Uptrend</strong>: successive higher highs and higher lows — buyers in control, favour longs.",
            "<strong>Downtrend</strong>: successive lower highs and lower lows — sellers in control, favour shorts.",
            "<strong>Range</strong>: highs and lows stay roughly level — neither side in control, stand aside or fade edges.",
          ],
        },
        {
          kind: "text",
          html: "The most common mistake is applying trend tools to a <strong>ranging market</strong>. Moving average crossovers, MACD and Supertrend all whipsaw badly when price chops sideways, firing signal after signal that reverses immediately. Recognising a range early tells you to stand aside or switch tactics — and that single act of restraint saves more money than any clever entry.",
        },
        {
          kind: "text",
          html: "Timeframe matters too. A market can be in an uptrend on the daily chart and a downtrend on the hourly. Decide which <strong>timeframe you trade</strong>, and let the higher timeframe set your directional bias so your indicator signals point the same way as the bigger picture. When the timeframes disagree, the higher one usually wins.",
        },
        {
          kind: "example",
          title: "Classifying a chart in four questions",
          steps: [
            "Zoom out to your bias timeframe (say the <strong>4-hour</strong>) and mark the obvious swing highs and swing lows a stranger would circle at a glance.",
            "Ask: is each new high <strong>above the last high</strong>? On GBP/USD you see 1.2650, then 1.2710, then 1.2780 — yes, higher highs.",
            "Ask: is each new low <strong>above the last low</strong>? You see 1.2580, then 1.2640 — yes, higher lows. Two yeses = confirmed uptrend.",
            "State it out loud: \"higher highs and higher lows — this is an uptrend, I only look for buys.\" If the highs and lows were flat you would say \"range — I wait.\"",
            "Now, and only now, reach for an indicator to <strong>time an entry</strong> in that direction — never to argue with the structure you just read.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes identifying a trend",
          items: [
            "<strong>Forcing a trend that isn't there.</strong> Flat highs and lows are a range, not 'about to break out'. Trading a range as a trend is the fastest way to get chopped up.",
            "<strong>Reading structure on too low a timeframe.</strong> A 1-minute chart flips between up and down every few minutes. Anchor bias on a higher timeframe first.",
            "<strong>Ignoring timeframe conflict.</strong> A pretty hourly uptrend inside a daily downtrend is a trap. When timeframes disagree, respect the bigger one.",
            "<strong>Marking every wiggle as a swing.</strong> Over-marking turns the chart into spaghetti. Only mark the peaks and troughs that are obvious.",
            "<strong>Applying trend indicators in a range.</strong> Crossovers and MACD whipsaw sideways markets relentlessly — recognise the range and switch off the trend tools.",
          ],
        },
        {
          kind: "key",
          text: "Read the trend from price structure first — indicators work in trends and mislead in ranges, so knowing the state comes before any tool.",
        },
      ],
    },

    /* ============================================================ */
    /* 3. Moving Averages (EMA / SMA)                               */
    /* ============================================================ */
    {
      slug: "moving-averages",
      title: "Moving Averages (EMA / SMA)",
      summary:
        "What moving averages are, how the SMA and EMA differ, and how to use them to smooth price and gauge trend direction.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to explain the difference between an SMA and an EMA, read trend direction from a moving average's slope, and size a trade off a moving-average pullback.",
      blocks: [
        {
          kind: "text",
          html: "A moving average smooths price into a single flowing line by averaging the last N closes. It filters out noise so you can see the underlying direction. The two most common types are the <strong>simple moving average (SMA)</strong> and the <strong>exponential moving average (EMA)</strong> — and the difference between them is entirely about how much weight they give to recent versus old prices.",
        },
        {
          kind: "image",
          src: "/learn/trend/03-moving-averages.png",
          alt: "EMA and SMA lines over price",
          caption:
            "The EMA hugs price more closely; the SMA is smoother but slower.",
        },
        {
          kind: "heading",
          text: "SMA versus EMA",
        },
        {
          kind: "text",
          html: "The SMA weights every period equally, so it is <strong>smooth but slow</strong> to react. The EMA gives more weight to recent prices, so it turns faster and tracks price more closely — at the cost of more false turns. Neither is better in absolute terms; they simply trade responsiveness against smoothness. Faster tools catch moves earlier but cry wolf more often; slower tools are calmer but late.",
        },
        {
          kind: "text",
          html: "The length you choose sets the character. A short average (like 9 or 20) reacts quickly and suits shorter-term trading; a long average (like 50 or 200) is slow and defines the <strong>bigger trend</strong>. Read the slope: a rising average suggests an uptrend, a falling one a downtrend, and a flat one a range. The slope, not the exact number, is what you trade.",
        },
        {
          kind: "list",
          items: [
            "<strong>SMA</strong>: equal weight to all periods — smoother, slower to react.",
            "<strong>EMA</strong>: more weight to recent prices — faster, more responsive.",
            "Short lengths track price closely; <strong>long lengths</strong> define the major trend.",
            "A flat, tangled moving average is a warning that <strong>no trend exists</strong>.",
          ],
        },
        {
          kind: "example",
          title: "Buying a pullback to a rising 20 EMA",
          steps: [
            "On the 1-hour chart, gold is in an uptrend and the <strong>20 EMA is rising</strong> beneath price — your bias is long only.",
            "Price pulls back and taps the EMA near <strong>2040</strong>, then prints a strong green close showing buyers defending the average.",
            "You enter long at <strong>2044</strong> and place the stop just below the EMA and the pullback low at <strong>2032</strong> — risk = <strong>12 points</strong>.",
            "Account is <strong>€3,000</strong>, risking <strong>1%</strong> = €30; a 12-point stop sizes you to roughly <strong>0.25 lots</strong> on gold.",
            "You target the prior swing high near <strong>2080</strong>, about 36 points away — a clean <strong>3:1 reward-to-risk</strong> before costs.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with moving averages",
          items: [
            "<strong>Chasing the crossover blindly.</strong> A slope or cross in a flat market is noise. Confirm a real trend exists before trusting the line.",
            "<strong>Using one length for everything.</strong> A 200 EMA times nothing on a 1-minute scalp; a 9 EMA is useless for the daily trend. Match the length to your timeframe.",
            "<strong>Expecting the average to call turns.</strong> Every moving average lags — it confirms trends, it does not predict reversals. Using it to pick tops is a losing game.",
            "<strong>Placing stops on the line itself.</strong> Price noise clips a stop sitting exactly on the average. Put the stop beyond the swing the pullback formed.",
            "<strong>Stacking five averages.</strong> A screen of tangled lines gives conflicting slopes and paralysis. One or two are plenty.",
          ],
        },
        {
          kind: "key",
          text: "A moving average smooths price to reveal direction — the EMA reacts faster, the SMA is smoother, and both lag because they average the past.",
        },
        {
          kind: "text",
          html: "Remember that every moving average is a <strong>lagging tool</strong>. It confirms a trend that is already underway rather than predicting a new one, which is exactly why it is useful for staying with a move and dangerous for calling turning points.",
        },
      ],
    },

    /* ============================================================ */
    /* 4. The 200 EMA Strategy                                      */
    /* ============================================================ */
    {
      slug: "the-200-ema",
      title: "The 200 EMA Strategy",
      summary:
        "How the 200 EMA is used as a long-term trend filter and how traders build entries and stops around it.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to use the 200 EMA as a directional bias filter and understand basic entry and stop logic around it.",
      blocks: [
        {
          kind: "text",
          html: "The 200 EMA is one of the most watched lines in trading. Because so many participants observe it, it acts as a widely respected <strong>long-term trend filter</strong>. The simple rule of thumb: when price is above it, favour longs; when price is below it, favour shorts.",
        },
        {
          kind: "image",
          src: "/learn/trend/04-200-ema.png",
          alt: "Price above and below the 200 EMA",
          caption:
            "Price above the 200 EMA leans bullish; below it leans bearish.",
        },
        {
          kind: "heading",
          text: "Using it as a bias filter",
        },
        {
          kind: "text",
          html: "The 200 EMA works best not as a standalone signal but as a <strong>directional filter</strong>. If price is comfortably above it and the slope is up, you only look for buy setups from your other tools. This one rule alone stops many beginners from shorting strong uptrends and buying deep downtrends.",
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "A common approach is to wait for price to <strong>pull back toward the 200 EMA</strong> in an uptrend, look for signs of buyers returning, and enter with a stop placed just below the recent swing low or below the EMA itself. The logic is honest: if price closes firmly back through the line, the premise is wrong and you exit.",
        },
        {
          kind: "list",
          items: [
            "Bias: long only above the rising 200 EMA, short only below the falling one.",
            "Entry: on a pullback to the EMA that shows the trend resuming.",
            "Stop: beyond the swing that would break the setup, not an arbitrary distance.",
            "Filter, don't force — a flat 200 EMA means no edge, so stand aside.",
          ],
        },
        {
          kind: "example",
          title: "A 200 EMA pullback long, sized properly",
          steps: [
            "On the 4-hour Nasdaq (NAS100) chart, price is trading well above a <strong>rising 200 EMA</strong> — bias is long only.",
            "After a rally, price drifts back down toward the EMA near <strong>18,200</strong> and stalls, printing a bullish rejection candle off the line.",
            "You enter long at <strong>18,240</strong> as the candle closes, placing the stop just below the EMA and swing low at <strong>18,120</strong> — risk = <strong>120 points</strong>.",
            "Account is <strong>€5,000</strong>, risking <strong>1%</strong> = €50; with a 120-point stop and $1 per point per micro-lot, you size to about <strong>0.4 lots</strong>.",
            "You target the prior high near <strong>18,600</strong>, ~360 points away — roughly <strong>3:1</strong>. If price closes back below the EMA, the premise is dead and you are out.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with the 200 EMA",
          items: [
            "<strong>Trading it as a signal, not a filter.</strong> A single touch of the 200 EMA is not a buy or sell — it only sets which direction you are allowed to look.",
            "<strong>Using it in a flat market.</strong> When the EMA is horizontal, price crosses it constantly and the filter gives conflicting readings. Stand aside.",
            "<strong>Shorting strong uptrends because 'it's far from the EMA'.</strong> Distance from the average is not a reversal signal — strong trends stay stretched for a long time.",
            "<strong>Placing the stop right on the line.</strong> Normal noise pokes through the EMA. Put the stop beyond the swing that would truly break the setup.",
            "<strong>Forgetting it lags.</strong> The 200 EMA confirms a regime, it never predicts the next turn. Treat late confirmation as a feature, not a flaw.",
          ],
        },
        {
          kind: "key",
          text: "Use the 200 EMA to set your bias — long above, short below — and let pullbacks to it offer entries with a clearly defined invalidation.",
        },
        {
          kind: "text",
          html: "Be honest about its limits. In a <strong>sideways market</strong> price crosses the 200 EMA repeatedly and the filter gives conflicting readings. It is a tool for trending conditions, and like every average it lags — it confirms direction rather than predicting the next turn.",
        },
      ],
    },

    /* ============================================================ */
    /* 5. Moving Average Crossover                                  */
    /* ============================================================ */
    {
      slug: "moving-average-crossover",
      title: "Moving Average Crossover",
      summary:
        "How crossovers between a fast and a slow moving average generate trend signals, and why they whipsaw in ranges.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to read a moving average crossover as a trend signal and understand its weakness in choppy markets.",
      blocks: [
        {
          kind: "text",
          html: "A moving average crossover uses two averages of different lengths — a <strong>fast MA</strong> and a <strong>slow MA</strong>. When the fast average crosses above the slow one, momentum has turned up; when it crosses below, momentum has turned down. It is one of the oldest mechanical trend signals.",
        },
        {
          kind: "image",
          src: "/learn/trend/05-crossover.png",
          alt: "A fast MA crossing a slow MA",
          caption:
            "The fast average crossing above the slow average is a bullish crossover.",
        },
        {
          kind: "heading",
          text: "How the signal works",
        },
        {
          kind: "text",
          html: "The crossover captures a shift in <strong>relative momentum</strong>. Because the fast average reacts quicker to new prices, it pulls above the slow one when buying accelerates. Traders often use pairs like 9/21 for short-term trading or 20/50 for swing trading — shorter pairs signal earlier but noisier.",
        },
        {
          kind: "heading",
          text: "Entry, stop and the whipsaw problem",
        },
        {
          kind: "text",
          html: "A straightforward plan enters on the <strong>candle close</strong> after the cross and places a stop beyond the recent swing against the trade. The honest weakness is the <strong>whipsaw</strong>: in a range the averages cross back and forth, generating a string of losing signals. This is why many traders only take crossovers that agree with the higher-timeframe trend.",
        },
        {
          kind: "list",
          items: [
            "Bullish: fast MA crosses above slow MA — momentum turning up.",
            "Bearish: fast MA crosses below slow MA — momentum turning down.",
            "Entry on the close after the cross; stop beyond the opposing swing.",
            "Filter with a trend rule (like the 200 EMA) to cut whipsaw losses.",
          ],
        },
        {
          kind: "example",
          title: "A 9/21 crossover long with a trend filter",
          steps: [
            "On the 1-hour EUR/USD chart, price is above the <strong>200 EMA</strong> — you only accept bullish crossovers.",
            "After a pullback, the <strong>9 EMA crosses above the 21 EMA</strong> and a candle closes at <strong>1.0910</strong> confirming the cross.",
            "You enter long at <strong>1.0910</strong> and place the stop below the recent swing low at <strong>1.0880</strong> — risk = <strong>30 pips</strong>.",
            "Account is <strong>€2,000</strong>, risking <strong>1%</strong> = €20; a 30-pip stop sizes you to about <strong>0.06 lots</strong>.",
            "You target the next resistance near <strong>1.1000</strong>, ~90 pips away — a <strong>3:1</strong> trade. A cross back down or a close below 1.0880 ends it.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with crossovers",
          items: [
            "<strong>Taking every cross.</strong> In a range the averages cross back and forth, handing you a string of small losses. Only take crosses that agree with the higher-timeframe trend.",
            "<strong>Entering before the candle closes.</strong> An intrabar cross that reverses by the close is a fake. Wait for the close to commit.",
            "<strong>Using too-fast a pair.</strong> A 3/8 crossover fires constantly and mostly noise. Slower pairs signal later but cleaner.",
            "<strong>Trading crossovers with no stop.</strong> The lag means a bad signal can run far before the reverse cross. Define the invalidation swing first.",
            "<strong>Expecting them to lead.</strong> A crossover always arrives after the move has begun. Treat it as confirmation, not a head start.",
          ],
        },
        {
          kind: "key",
          text: "A crossover flags a momentum shift, but it lags the turn and whipsaws in ranges — pair it with a trend filter and a defined stop.",
        },
        {
          kind: "text",
          html: "Crossovers always arrive <strong>after the move</strong> has begun, because they depend on averaged history. Used alone they underperform; used as one confirmation among several in a trending market, they can help keep you on the right side.",
        },
      ],
    },

    /* ============================================================ */
    /* 6. Golden Cross / Death Cross                                */
    /* ============================================================ */
    {
      slug: "golden-cross-death-cross",
      title: "Golden Cross / Death Cross",
      summary:
        "The famous 50/200 crossovers, what they signal about the long-term trend, and why they are lagging by design.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to define the golden cross and death cross and interpret them as slow, long-term trend signals.",
      blocks: [
        {
          kind: "text",
          html: "The golden cross and death cross are the most talked-about crossovers in markets. A <strong>golden cross</strong> occurs when the 50-period average crosses above the 200-period average; a <strong>death cross</strong> is when the 50 crosses below the 200. They are read as major shifts in the long-term trend.",
        },
        {
          kind: "image",
          src: "/learn/trend/06-golden-death-cross.png",
          alt: "50 MA crossing the 200 MA in a golden cross",
          caption:
            "The 50 crossing above the 200 forms the classic golden cross.",
        },
        {
          kind: "heading",
          text: "What they really tell you",
        },
        {
          kind: "text",
          html: "Because both averages are long, these crosses are <strong>very slow signals</strong>. By the time a golden cross prints, a substantial move has usually already happened. They are better understood as a confirmation of a <strong>regime change</strong> — from bearish to bullish or back — than as a precise timing tool.",
        },
        {
          kind: "text",
          html: "Their fame is partly self-fulfilling: media coverage draws attention and can attract buyers around a golden cross. But that attention also means the signal is heavily lagging and prone to <strong>false alarms</strong> when a market is merely ranging and the two long averages weave in and out of each other.",
        },
        {
          kind: "list",
          items: [
            "Golden cross: 50 MA crosses above 200 MA — long-term bullish shift.",
            "Death cross: 50 MA crosses below 200 MA — long-term bearish shift.",
            "Both are slow and confirm a trend already well underway.",
            "In sideways markets they flip repeatedly and give little edge.",
          ],
        },
        {
          kind: "example",
          title: "Using a golden cross as context, not a timing tool",
          steps: [
            "On the daily S&P 500 chart, the market has rallied for weeks and the <strong>50-day crosses above the 200-day</strong> — a golden cross prints.",
            "You note that price is already <strong>far above both averages</strong>, so buying the cross itself means a huge stop back at the 200-day.",
            "Instead you use it only as a <strong>regime confirmation</strong> — bias is now long — and wait for a pullback to time an actual entry.",
            "Price dips to the 50-day near <strong>5,200</strong> and holds; you enter there with a stop below at <strong>5,120</strong> — an <strong>80-point</strong> risk, far tighter than chasing the cross.",
            "The golden cross set the direction; a disciplined pullback entry gave you a real, sized trade with sensible reward-to-risk.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with the golden/death cross",
          items: [
            "<strong>Buying the cross itself.</strong> By the time it prints, a big move has already happened. Chasing it means a distant stop and poor reward-to-risk.",
            "<strong>Treating it as precise timing.</strong> These are slow regime signals, not entry triggers. Use them for bias, then time entries elsewhere.",
            "<strong>Trusting it in a range.</strong> When the market is sideways, the two long averages weave in and out, firing false crosses repeatedly.",
            "<strong>Ignoring the higher context.</strong> A death cross during a long-term bull market is often a shakeout, not a top. Read the bigger picture.",
            "<strong>Reacting to the headlines.</strong> Media hype around a golden cross is not an edge — the signal is already public and heavily lagging.",
          ],
        },
        {
          kind: "key",
          text: "The golden and death crosses mark slow, long-term regime changes — useful as context, but far too lagging to time precise entries.",
        },
      ],
    },

    /* ============================================================ */
    /* 7. RSI Trading                                               */
    /* ============================================================ */
    {
      slug: "rsi-trading",
      title: "RSI Trading",
      summary:
        "How the Relative Strength Index measures momentum, what overbought and oversold really mean, and how to use it responsibly.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to read the RSI, interpret overbought and oversold zones in context, and avoid the classic beginner mistake.",
      blocks: [
        {
          kind: "text",
          html: "The <strong>Relative Strength Index (RSI)</strong> is a momentum oscillator that moves between 0 and 100. It compares the size of recent gains to recent losses, giving a reading of how strong or stretched a move is. Readings above 70 are called <strong>overbought</strong> and below 30 <strong>oversold</strong>.",
        },
        {
          kind: "image",
          src: "/learn/trend/07-rsi.png",
          alt: "RSI oscillator with overbought and oversold levels",
          caption:
            "The RSI plots momentum between 0 and 100, with 70 and 30 as reference lines.",
        },
        {
          kind: "heading",
          text: "The overbought trap",
        },
        {
          kind: "text",
          html: "The biggest beginner mistake is shorting simply because RSI is overbought. In a <strong>strong uptrend</strong> RSI can stay above 70 for a long time while price keeps rising. Overbought does not mean 'sell' — it means momentum is strong. Fighting that with a fixed rule is a fast way to lose.",
        },
        {
          kind: "heading",
          text: "Using RSI with the trend",
        },
        {
          kind: "text",
          html: "A more robust use is to trade RSI <strong>in the direction of the trend</strong>. In an established uptrend, wait for RSI to dip toward oversold on a pullback and then turn back up as price resumes — that is a lower-risk long entry, with a stop below the pullback low. The oscillator times the entry; the trend gives you the direction.",
        },
        {
          kind: "list",
          items: [
            "RSI above 70 = strong momentum, not an automatic sell.",
            "RSI below 30 = weak momentum, not an automatic buy.",
            "In uptrends, buy pullbacks as RSI turns up from lower readings.",
            "The 50 level often acts as a rough bull/bear midline.",
          ],
        },
        {
          kind: "example",
          title: "A trend-aligned RSI pullback buy",
          steps: [
            "On the 1-hour gold chart, price is in a clear uptrend making higher highs — bias is long only.",
            "Price pulls back and RSI dips to <strong>38</strong>, near oversold for this trend, while price stalls at prior support of <strong>2035</strong>.",
            "RSI turns back up through <strong>45</strong> as a green candle closes at <strong>2042</strong> — momentum resuming with the trend. You enter long there.",
            "Stop goes below the pullback low at <strong>2028</strong> — risk = <strong>14 points</strong>. On a €3,000 account at 1% (€30) that sizes to about <strong>0.2 lots</strong>.",
            "You target the prior high near <strong>2080</strong>, ~38 points away — nearly <strong>3:1</strong>. RSI timed the entry; the trend gave the direction.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with RSI",
          items: [
            "<strong>Shorting just because it's overbought.</strong> In a strong uptrend RSI can hold above 70 for a long time. Overbought means strong, not 'sell'.",
            "<strong>Buying just because it's oversold.</strong> In a downtrend RSI can sit below 30 for ages. Oversold means weak, not 'buy'.",
            "<strong>Ignoring the trend entirely.</strong> RSI is a timing aid, not a direction caller. Trade it with the higher-timeframe trend, not against it.",
            "<strong>Acting on a single reading.</strong> Wait for RSI to actually turn and for price to confirm; a number alone is not an entry.",
            "<strong>Forgetting it's derived from price.</strong> RSI lags and can be flat while price does something else — always confirm on the chart itself.",
          ],
        },
        {
          kind: "key",
          text: "RSI measures momentum, not destiny — overbought can stay overbought, so use it with the trend rather than against it.",
        },
        {
          kind: "text",
          html: "Like all indicators, RSI is <strong>derived from price</strong> and works best as a filter or timing aid, not a standalone signal. Its most powerful use — divergence — gets its own module next.",
        },
      ],
    },

    /* ============================================================ */
    /* 8. RSI Divergence                                            */
    /* ============================================================ */
    {
      slug: "rsi-divergence",
      title: "RSI Divergence",
      summary:
        "How divergence between price and RSI can warn that momentum is fading, and why it is a warning rather than a signal.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to spot bullish and bearish RSI divergence and treat it as an early warning, not a trade trigger.",
      blocks: [
        {
          kind: "text",
          html: "Divergence occurs when price and the RSI disagree. In <strong>bearish divergence</strong>, price makes a higher high but RSI makes a lower high — the new price extreme came with weaker momentum. In <strong>bullish divergence</strong>, price makes a lower low while RSI makes a higher low.",
        },
        {
          kind: "image",
          src: "/learn/trend/08-rsi-divergence.png",
          alt: "Price higher high while RSI makes a lower high",
          caption:
            "Bearish divergence: price pushes higher but momentum quietly weakens.",
        },
        {
          kind: "heading",
          text: "Why it matters",
        },
        {
          kind: "text",
          html: "Divergence hints that the <strong>momentum behind a move</strong> is fading even as price still pushes to a new extreme. It often precedes a pause or a pullback, and occasionally a reversal. It is one of the more genuinely forward-looking things an oscillator can show you.",
        },
        {
          kind: "heading",
          text: "Why it is only a warning",
        },
        {
          kind: "text",
          html: "The crucial caveat: divergence can persist for a long time before price responds — a market can print several divergences and keep trending. Treat it as a reason to <strong>tighten your stops</strong> or take partial profit, not as a standalone entry to trade against a strong trend. Wait for price itself to confirm with a structure break.",
        },
        {
          kind: "list",
          items: [
            "Bearish: higher high in price, lower high in RSI.",
            "Bullish: lower low in price, higher low in RSI.",
            "Signals weakening momentum, not a guaranteed reversal.",
            "Confirm with price action before acting; divergence can repeat.",
          ],
        },
        {
          kind: "example",
          title: "Trading a confirmed bearish divergence",
          steps: [
            "On the 4-hour Nasdaq chart, price pushes to a new high of <strong>18,500</strong> but RSI prints <strong>68</strong> — lower than the <strong>76</strong> at the previous high. That is bearish divergence.",
            "You do <strong>not</strong> short immediately — divergence alone is only a warning. You mark it and watch for price to confirm.",
            "Price then breaks the last minor swing low at <strong>18,380</strong>, confirming momentum has actually turned. Now you have a signal.",
            "You short the retest of that broken level at <strong>18,400</strong>, stop above the divergent high at <strong>18,520</strong> — risk = <strong>120 points</strong>.",
            "On a €5,000 account at 1% (€50) you size to about <strong>0.4 lots</strong> and target <strong>18,160</strong>, ~240 points — a clean <strong>2:1</strong>. Divergence warned; the structure break triggered.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with divergence",
          items: [
            "<strong>Shorting on divergence alone.</strong> It can persist for a long time while price keeps trending. Wait for price to confirm with a structure break.",
            "<strong>Fighting a strong trend with it.</strong> Divergence against a powerful move is often just a pause, not a top. Respect the trend until it actually breaks.",
            "<strong>Seeing divergence everywhere.</strong> Force it and you'll find it on every chart. Only mark clean, obvious higher-high / lower-high (or the bullish mirror) pairs.",
            "<strong>Ignoring the timeframe.</strong> Divergence on a 1-minute chart is noise. It carries more weight on higher timeframes.",
            "<strong>Skipping the stop.</strong> Even confirmed divergence fails. Trade it with a defined invalidation like any other setup.",
          ],
        },
        {
          kind: "key",
          text: "Divergence warns that momentum is fading behind a move — a cue to manage risk, not a licence to fight a trend blindly.",
        },
      ],
    },

    /* ============================================================ */
    /* 9. MACD Trading                                              */
    /* ============================================================ */
    {
      slug: "macd-trading",
      title: "MACD Trading",
      summary:
        "How the MACD combines two moving averages and a histogram into a single momentum-and-trend tool, and how to use its signals.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to read the MACD line, signal line and histogram, and understand basic crossover entry logic.",
      blocks: [
        {
          kind: "text",
          html: "The <strong>MACD (Moving Average Convergence Divergence)</strong> blends trend and momentum in one indicator. The MACD line is the difference between a fast and a slow EMA; a <strong>signal line</strong> is an EMA of the MACD line; and a histogram plots the gap between the two.",
        },
        {
          kind: "image",
          src: "/learn/trend/09-macd.png",
          alt: "MACD lines and histogram below price",
          caption:
            "The MACD line, its signal line, and the histogram of their difference.",
        },
        {
          kind: "heading",
          text: "Reading the components",
        },
        {
          kind: "text",
          html: "When the MACD line crosses <strong>above its signal line</strong>, momentum is turning up; a cross below turns it down. Whether the whole indicator sits above or below the <strong>zero line</strong> tells you the broader bias — above zero the fast EMA leads, meaning a bullish backdrop.",
        },
        {
          kind: "heading",
          text: "Entry logic and its limits",
        },
        {
          kind: "text",
          html: "A common plan takes a long when the MACD crosses up <strong>above the zero line</strong> in an uptrend, with a stop below the recent swing low. Requiring the cross to happen above zero filters out many weak signals. Still, because MACD is built from EMAs, it <strong>lags price</strong> and whipsaws in ranges just like a raw crossover.",
        },
        {
          kind: "list",
          items: [
            "MACD line crossing above signal line = bullish momentum shift.",
            "MACD above zero = bullish bias; below zero = bearish bias.",
            "Crosses above zero in an uptrend are higher-quality longs.",
            "In sideways markets MACD crosses repeatedly and misleads.",
          ],
        },
        {
          kind: "example",
          title: "A MACD-cross-above-zero long",
          steps: [
            "On the 1-hour EUR/USD chart, structure is bullish and price sits above the 200 EMA — bias is long only.",
            "After a pullback, the <strong>MACD line crosses above its signal line</strong> and the whole reading is climbing back <strong>above zero</strong> at <strong>1.0920</strong>.",
            "You enter long on that candle close and place the stop below the pullback swing low at <strong>1.0890</strong> — risk = <strong>30 pips</strong>.",
            "On a €2,000 account at 1% (€20), a 30-pip stop sizes you to about <strong>0.06 lots</strong>.",
            "You target <strong>1.1010</strong>, ~90 pips away — a <strong>3:1</strong> trade. Requiring the cross above zero filtered out the weaker mid-range signals.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with MACD",
          items: [
            "<strong>Taking every crossover.</strong> Below zero and in ranges, MACD crosses constantly and mostly fails. Favour crosses that agree with the trend and the zero line.",
            "<strong>Ignoring the zero line.</strong> A cross above zero is a very different signal from one deep in negative territory. Read the location, not just the cross.",
            "<strong>Expecting it to lead.</strong> MACD is built from EMAs, so it lags. It confirms a move underway, it does not predict the turn.",
            "<strong>Using it in a flat market.</strong> Sideways price makes MACD whip back and forth. Check a trend exists first.",
            "<strong>Trading with no stop.</strong> The lag means a bad cross can run. Define the invalidation swing before entering.",
          ],
        },
        {
          kind: "key",
          text: "MACD packages trend and momentum into one tool — crossovers plus the zero line guide bias, but it lags and needs a trending market to work.",
        },
        {
          kind: "text",
          html: "The MACD histogram carries extra information about the <strong>strength of momentum</strong>, which is the focus of the next module.",
        },
      ],
    },

    /* ============================================================ */
    /* 10. MACD Momentum                                            */
    /* ============================================================ */
    {
      slug: "macd-momentum",
      title: "MACD Momentum",
      summary:
        "How to read the MACD histogram for momentum, and how growing or shrinking bars hint at acceleration or exhaustion.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to interpret the MACD histogram to judge whether momentum is building or fading.",
      blocks: [
        {
          kind: "text",
          html: "The MACD histogram measures the distance between the MACD line and its signal line. Its real value is showing the <strong>rate of change of momentum</strong>. Growing bars mean the move is accelerating; shrinking bars mean it is losing steam even if price still rises.",
        },
        {
          kind: "image",
          src: "/learn/trend/10-macd-momentum.png",
          alt: "Growing MACD histogram bars showing momentum",
          caption:
            "Expanding histogram bars show momentum building behind the move.",
        },
        {
          kind: "heading",
          text: "Rising versus fading bars",
        },
        {
          kind: "text",
          html: "When bars are <strong>expanding away from zero</strong>, the two MACD lines are separating and momentum is strong — often a healthy sign for a continuing trend. When bars start <strong>contracting toward zero</strong>, the lines are converging and momentum is fading, hinting a pullback or crossover may be near.",
        },
        {
          kind: "text",
          html: "You can also spot <strong>histogram divergence</strong>: price makes a new high but the peak histogram bars are smaller than before, showing the push had less force. As with RSI divergence, this is an early warning about momentum, not a reversal signal in itself.",
        },
        {
          kind: "list",
          items: [
            "Bars growing = momentum accelerating with the trend.",
            "Bars shrinking = momentum fading; a cross or pullback may follow.",
            "Shorter bars at a new price high hint at weakening drive.",
            "Momentum reading, not a standalone buy or sell trigger.",
          ],
        },
        {
          kind: "example",
          title: "Using the histogram to time a scale-out",
          steps: [
            "You are long gold from <strong>2044</strong> in a strong uptrend, and the MACD histogram bars have been <strong>expanding</strong> — momentum with you.",
            "As price reaches <strong>2072</strong>, you notice the histogram bars start <strong>shrinking</strong> even though price is still ticking up — momentum is fading.",
            "You take <strong>partial profit</strong> on half the position at 2072, banking the move while it is strong rather than waiting for a reversal.",
            "You trail the stop on the remainder up to breakeven+ at <strong>2050</strong>, so the rest is a risk-free runner.",
            "The histogram didn't tell you to reverse — it told you the drive was weakening, which is exactly when a disciplined trader protects gains.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with the histogram",
          items: [
            "<strong>Shorting on shrinking bars.</strong> Fading momentum is a management cue, not a reversal signal. Price can drift higher on weak momentum for a while.",
            "<strong>Reading it in isolation.</strong> The histogram is derived from the MACD, which is derived from price. Always confirm on the chart itself.",
            "<strong>Over-reacting to one small bar.</strong> A single dip in bar size is noise. Look for a clear, sustained pattern of expansion or contraction.",
            "<strong>Ignoring histogram divergence context.</strong> Smaller bars at a new high is a warning, not a top. Wait for price to confirm.",
            "<strong>Forgetting the trend.</strong> Momentum bars only matter within the direction structure gives you — don't use them to fight a strong trend.",
          ],
        },
        {
          kind: "key",
          text: "The histogram reads momentum's rate of change — growing bars back a trend, shrinking bars warn it is running out of fuel.",
        },
      ],
    },

    /* ============================================================ */
    /* 11. Bollinger Bands                                          */
    /* ============================================================ */
    {
      slug: "bollinger-bands",
      title: "Bollinger Bands",
      summary:
        "How Bollinger Bands wrap price in a volatility envelope, what expansion and contraction mean, and how to read touches of the bands.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to read Bollinger Bands as a volatility tool and avoid the common mistake of fading every band touch.",
      blocks: [
        {
          kind: "text",
          html: "Bollinger Bands wrap price in a <strong>volatility envelope</strong>. A middle line is a moving average — usually a 20-period — and an upper and lower band sit a set number of <strong>standard deviations</strong> away. When volatility rises the bands widen; when it falls they narrow.",
        },
        {
          kind: "image",
          src: "/learn/trend/11-bollinger.png",
          alt: "Bollinger Bands volatility envelopes around price",
          caption:
            "The bands expand in volatile markets and contract in quiet ones.",
        },
        {
          kind: "heading",
          text: "What the bands describe",
        },
        {
          kind: "text",
          html: "Because the bands are based on standard deviation, price spends most of its time <strong>inside the envelope</strong>. Reaching the upper band simply means price is high relative to recent action; reaching the lower band means it is low. It describes relative position, not a signal by itself.",
        },
        {
          kind: "heading",
          text: "The band-touch trap",
        },
        {
          kind: "text",
          html: "Beginners often sell every touch of the upper band and buy every touch of the lower one. This <strong>fails in trends</strong>: in a strong uptrend price can 'walk the band', riding the upper edge for a long stretch. Band touches are only worth fading in a clearly <strong>ranging market</strong>, and even then only with confirmation.",
        },
        {
          kind: "list",
          items: [
            "Middle band: a moving average of recent price.",
            "Outer bands: standard deviations away — they measure volatility.",
            "Widening bands = rising volatility; narrowing = falling volatility.",
            "In trends price can ride a band; touches are not reversal signals.",
          ],
        },
        {
          kind: "example",
          title: "Fading a band touch — only in a confirmed range",
          steps: [
            "On the 15-minute EUR/USD chart, structure is clearly <strong>sideways</strong> — flat highs and lows — so mean-reversion is on the table.",
            "Price stretches up to tap the <strong>upper band</strong> at <strong>1.0960</strong> and prints a bearish rejection candle at the range ceiling.",
            "You short at <strong>1.0955</strong> with a stop just above the band and range high at <strong>1.0975</strong> — risk = <strong>20 pips</strong>.",
            "On a €2,000 account at 1% (€20), a 20-pip stop sizes you to about <strong>0.10 lots</strong>.",
            "You target the middle band near <strong>1.0920</strong>, ~35 pips — roughly <strong>1.7:1</strong>. Crucially, you'd skip this entirely in a trend, where price would just walk the band.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with Bollinger Bands",
          items: [
            "<strong>Fading every band touch.</strong> In a trend price walks the band for a long stretch. Only fade touches in a confirmed range, with confirmation.",
            "<strong>Treating a touch as a signal.</strong> Reaching a band only means price is relatively high or low, not that it must reverse. It is context, not a trigger.",
            "<strong>Ignoring the band width.</strong> Narrow bands and wide bands mean very different things. Read whether volatility is rising or falling first.",
            "<strong>Shorting a strong breakout.</strong> Price closing outside the band in a trend is strength, not exhaustion. Don't fade genuine breakouts.",
            "<strong>Forgetting the stop.</strong> Even a clean range fades fail when the range breaks. Always place the stop beyond the band and the range edge.",
          ],
        },
        {
          kind: "key",
          text: "Bollinger Bands map volatility and relative price position — a band touch is context, not a reversal signal, especially in a trend.",
        },
        {
          kind: "text",
          html: "The most useful setup from these bands comes when they <strong>contract sharply</strong> — the Bollinger squeeze — which the next module covers.",
        },
      ],
    },

    /* ============================================================ */
    /* 12. Bollinger Squeeze                                        */
    /* ============================================================ */
    {
      slug: "bollinger-squeeze",
      title: "Bollinger Squeeze",
      summary:
        "How a squeeze in the Bollinger Bands signals compressed volatility before a breakout, and how to trade it honestly.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to identify a Bollinger squeeze and understand breakout entry and stop logic around it.",
      blocks: [
        {
          kind: "text",
          html: "A Bollinger squeeze is when the bands <strong>narrow sharply</strong>, showing that volatility has collapsed and price is coiling in a tight range. Markets alternate between quiet and active phases, and an unusually tight squeeze often precedes an <strong>expansion in volatility</strong> — a breakout move.",
        },
        {
          kind: "image",
          src: "/learn/trend/12-squeeze.png",
          alt: "Narrowing Bollinger Bands before a breakout",
          caption:
            "Bands pinch tight during a squeeze, then expand as price breaks out.",
        },
        {
          kind: "heading",
          text: "Why the squeeze works",
        },
        {
          kind: "text",
          html: "During a squeeze, buyers and sellers reach a temporary <strong>balance</strong> and orders build up on both sides of a tight range. When one side finally wins, the pent-up energy releases into a directional move and the bands snap open. The squeeze tells you a move is <em>likely</em> — it does not tell you the direction.",
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "A disciplined plan waits for a <strong>candle to close outside the range</strong> that formed during the squeeze, then enters in the breakout direction with a stop on the opposite side of the range. Because the squeeze is directionless, aligning the breakout with the higher-timeframe trend improves the odds and reduces false starts.",
        },
        {
          kind: "list",
          items: [
            "Squeeze = bands pinch tight = volatility compressed.",
            "Signals that a move is likely, but not which way.",
            "Enter on a close outside the range; stop on the opposite side.",
            "Favour breakouts that agree with the larger trend.",
          ],
        },
        {
          kind: "example",
          title: "Trading a confirmed squeeze breakout",
          steps: [
            "On the 1-hour Nasdaq chart, the bands have <strong>pinched tight</strong> for several hours and price coils in a narrow <strong>18,300–18,360</strong> range.",
            "The higher-timeframe trend is up, so you favour an <strong>upside break</strong> and ignore a downside one.",
            "A candle <strong>closes above 18,360</strong> as the bands snap open — you enter long at <strong>18,370</strong>.",
            "Stop goes on the opposite side of the range at <strong>18,290</strong> — risk = <strong>80 points</strong>. On €5,000 at 1% (€50), that's about <strong>0.6 lots</strong>.",
            "You target a measured move of the range height projected up, near <strong>18,530</strong> — roughly <strong>2:1</strong>. A close back inside the range would mean a false break and an exit.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with the squeeze",
          items: [
            "<strong>Guessing the direction.</strong> A squeeze tells you a move is coming, not which way. Wait for the break rather than pre-positioning.",
            "<strong>Entering before the close.</strong> Price often pokes outside the range and snaps back. Require a candle close beyond the range to filter fakes.",
            "<strong>Chasing a break against the trend.</strong> Breakouts that agree with the higher timeframe are far more reliable. Fade the temptation to counter-trend.",
            "<strong>Skipping the stop on the far side.</strong> A false break needs a clean exit. The opposite side of the range is your logical invalidation.",
            "<strong>Trading tiny squeezes for tiny moves.</strong> Not every contraction leads to a big expansion. Favour meaningful, prolonged squeezes.",
          ],
        },
        {
          kind: "key",
          text: "A squeeze warns that a volatility expansion is coming — trade the confirmed break out of the range, with a stop on the other side, not a guess at direction.",
        },
        {
          kind: "text",
          html: "Squeezes produce <strong>false breakouts</strong> too, where price pokes out and snaps back. That is exactly why waiting for a close and defining your invalidation before you enter matters — no squeeze guarantees the move sticks.",
        },
      ],
    },

    /* ============================================================ */
    /* 13. Supertrend Indicator                                     */
    /* ============================================================ */
    {
      slug: "supertrend",
      title: "Supertrend Indicator",
      summary:
        "How the Supertrend plots a trailing trend line that flips with direction, and where it helps and where it fails.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to read the Supertrend as a trailing trend and stop tool and understand its weakness in ranges.",
      blocks: [
        {
          kind: "text",
          html: "The Supertrend is a trend-following overlay that draws a single line that <strong>flips sides of price</strong> as the trend changes. It is built from price and the <strong>Average True Range (ATR)</strong>, so it adapts to volatility: the line sits further from price when the market is choppy.",
        },
        {
          kind: "image",
          src: "/learn/trend/13-supertrend.png",
          alt: "A Supertrend trailing line flipping with the trend",
          caption:
            "The Supertrend line sits below price in an uptrend and flips above in a downtrend.",
        },
        {
          kind: "heading",
          text: "How to read it",
        },
        {
          kind: "text",
          html: "When the line is <strong>below price</strong> and green, the trend is up; when it flips <strong>above price</strong> and red, the trend is down. Because it uses ATR, it gives price room to breathe in volatile conditions and hugs closer when things calm down, which makes it a convenient <strong>trailing stop</strong>.",
        },
        {
          kind: "text",
          html: "Its honest weakness is the same as every trend tool: in a <strong>sideways market</strong> the Supertrend flips back and forth constantly, producing a run of small losses. It shines when a market trends cleanly and frustrates when it ranges — so pair it with a check that a trend actually exists.",
        },
        {
          kind: "list",
          items: [
            "Line below price = uptrend; line above price = downtrend.",
            "Built from ATR, so it adapts to changing volatility.",
            "Doubles as a trailing stop that follows the trend.",
            "Whipsaws badly in ranges — best confined to trending markets.",
          ],
        },
        {
          kind: "example",
          title: "Riding a trend with the Supertrend as a trailing stop",
          steps: [
            "On the 1-hour gold chart, the Supertrend line flips <strong>below price and turns green</strong> at <strong>2038</strong> — an uptrend signal.",
            "You confirm a real trend exists (higher highs, ADX rising) and enter long at <strong>2042</strong>, using the Supertrend line at <strong>2030</strong> as your initial stop — risk = <strong>12 points</strong>.",
            "On €3,000 at 1% (€30), that sizes to about <strong>0.25 lots</strong>.",
            "As price climbs to <strong>2075</strong>, the Supertrend line trails up beneath it to <strong>2060</strong> — you slide the stop up with it, locking in profit.",
            "You stay in until the line finally <strong>flips above price</strong> near <strong>2078</strong>, exiting with most of the move captured. The tool trailed the trend for you.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with the Supertrend",
          items: [
            "<strong>Trading every flip.</strong> In a range the line flips constantly, handing you a run of small losses. Only trust it when a real trend is present.",
            "<strong>Ignoring higher-timeframe context.</strong> A flip against the daily trend is often a fake. Filter Supertrend signals with the bigger picture.",
            "<strong>Treating the flip as a reversal trade.</strong> It is a trend-following and trailing tool, not a top/bottom picker. Trade with it, not against it.",
            "<strong>Setting the ATR multiplier too tight.</strong> Too tight and normal noise flips the line; too loose and it lags badly. Tune it to the instrument.",
            "<strong>Forgetting it lags.</strong> Like every trend tool, it confirms rather than predicts. Late flips are the price of avoiding noise.",
          ],
        },
        {
          kind: "key",
          text: "The Supertrend flips with the trend and works as a volatility-based trailing stop — excellent in clean trends, unreliable in choppy ranges.",
        },
      ],
    },

    /* ============================================================ */
    /* 14. ADX Trend Strength                                       */
    /* ============================================================ */
    {
      slug: "adx-trend-strength",
      title: "ADX Trend Strength",
      summary:
        "How the ADX measures the strength of a trend regardless of direction, and how it tells you when trend tools will work.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to use the ADX to judge whether a market is trending strongly enough for trend strategies to work.",
      blocks: [
        {
          kind: "text",
          html: "The <strong>Average Directional Index (ADX)</strong> measures how strong a trend is, not which way it points. It runs from 0 to 100: low readings mean a weak or absent trend, high readings mean a strong one. This makes it the perfect companion to your directional tools.",
        },
        {
          kind: "image",
          src: "/learn/trend/14-adx.png",
          alt: "ADX measuring trend strength",
          caption:
            "The ADX rises when a trend is strong and falls when the market goes flat.",
        },
        {
          kind: "heading",
          text: "Reading the levels",
        },
        {
          kind: "text",
          html: "A common convention treats readings <strong>below 20 as ranging</strong> and readings <strong>above 25 as trending</strong>. A rising ADX says the current trend — up or down — is gaining strength; a falling ADX says it is weakening, regardless of which direction price is going.",
        },
        {
          kind: "text",
          html: "Used well, ADX acts as a <strong>gatekeeper</strong>: it tells you when your crossover, MACD or Supertrend signals are worth taking. When ADX is low, those trend tools whipsaw, so many traders simply <strong>stand aside</strong> until strength returns rather than fighting a flat market.",
        },
        {
          kind: "list",
          items: [
            "ADX measures strength only — direction comes from other tools.",
            "Below ~20: weak or ranging; trend strategies struggle.",
            "Above ~25: trending; trend-following signals are more reliable.",
            "A rising ADX confirms strength; a falling one warns of a stall.",
          ],
        },
        {
          kind: "example",
          title: "Using ADX as a gatekeeper before a crossover",
          steps: [
            "On the 1-hour EUR/USD chart, a bullish moving-average crossover fires — but before acting you check the <strong>ADX</strong>.",
            "The ADX reads <strong>16 and flat</strong>, below the ~20 threshold — the market is ranging, so the crossover is likely a whipsaw. You <strong>skip the trade</strong>.",
            "Two days later another crossover appears; this time ADX is <strong>28 and rising</strong> — a genuine trend is present.",
            "Now you take the long at <strong>1.0910</strong> with a stop below the swing at <strong>1.0880</strong> (30 pips), sized to 1% risk.",
            "The ADX didn't give direction — it told you <strong>when</strong> your directional signal was worth trading, filtering out the low-quality one entirely.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with the ADX",
          items: [
            "<strong>Reading direction into it.</strong> ADX measures strength only. A high ADX in a downtrend is not bullish — direction comes from other tools.",
            "<strong>Trading trend signals at low ADX.</strong> Below ~20 the market is ranging and trend tools whipsaw. Stand aside until strength returns.",
            "<strong>Ignoring the slope.</strong> A falling ADX warns a trend is stalling even if it's still high. Watch whether it's rising or fading.",
            "<strong>Using it alone.</strong> ADX is a filter, not an entry. Pair it with a direction tool and a momentum trigger.",
            "<strong>Expecting exact thresholds.</strong> 20 and 25 are conventions, not laws. Treat them as rough zones, not precise switches.",
          ],
        },
        {
          kind: "key",
          text: "ADX gauges trend strength, not direction — use it as a filter to know when your directional signals are actually worth trading.",
        },
      ],
    },

    /* ============================================================ */
    /* 15. Multi-Indicator Confirmation                             */
    /* ============================================================ */
    {
      slug: "multi-indicator-confirmation",
      title: "Multi-Indicator Confirmation",
      summary:
        "How to combine indicators for confluence without falling into the trap of redundant, over-fitted signals.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to combine complementary indicators for confluence and avoid stacking redundant tools.",
      blocks: [
        {
          kind: "text",
          html: "Confirmation means letting <strong>independent tools agree</strong> before you act. When a moving average, a momentum reading and a strength filter all point the same way, the case for a trade is stronger than any single tool alone. This alignment is called <strong>confluence</strong>.",
        },
        {
          kind: "image",
          src: "/learn/trend/15-confirmation.png",
          alt: "Multiple indicators aligning on one signal",
          caption:
            "Confluence: separate tools pointing to the same conclusion.",
        },
        {
          kind: "heading",
          text: "More is not better",
        },
        {
          kind: "text",
          html: "The critical warning: <strong>more indicators is not better</strong>. Adding five momentum oscillators does not give five opinions — they are all reading the same price and will mostly agree, giving you false confidence. Piling on tools also leads to <strong>analysis paralysis</strong>, where conflicting readings freeze you.",
        },
        {
          kind: "heading",
          text: "Choose complementary tools",
        },
        {
          kind: "text",
          html: "The fix is to pick tools that measure <strong>different things</strong>: one for trend direction (a moving average), one for momentum (RSI or MACD), and one for strength or volatility (ADX or Bollinger Bands). Two or three complementary indicators plus price structure beat a screen buried under redundant lines.",
        },
        {
          kind: "list",
          items: [
            "Trend tool: direction and bias (e.g. 200 EMA).",
            "Momentum tool: is the move accelerating (e.g. RSI or MACD)?",
            "Strength/volatility tool: is a trend even present (e.g. ADX)?",
            "Two or three that disagree in nature beat ten that echo each other.",
          ],
        },
        {
          kind: "example",
          title: "A three-tool confluence long",
          steps: [
            "<strong>Trend tool</strong>: on the 1-hour Nasdaq, price is above a rising 200 EMA — bias long.",
            "<strong>Strength tool</strong>: ADX reads <strong>27 and rising</strong> — a real trend, so trend signals are worth taking.",
            "<strong>Momentum tool</strong>: after a pullback, RSI turns up from <strong>42</strong> as a green candle closes at <strong>18,240</strong> — the trigger.",
            "All three agree, so you enter long at 18,240 with a stop below the pullback low at <strong>18,140</strong> — risk = <strong>100 points</strong>, sized to 1%.",
            "You target <strong>18,540</strong>, ~300 points — a <strong>3:1</strong> trade. Three <em>different</em> tools agreeing, not three momentum oscillators echoing each other.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with confirmation",
          items: [
            "<strong>Stacking redundant tools.</strong> Five momentum oscillators all read the same price and mostly agree — that's false confidence, not five edges.",
            "<strong>Analysis paralysis.</strong> Pile on enough indicators and they'll always conflict, freezing you. Fewer, complementary tools keep decisions clean.",
            "<strong>Waiting for perfection.</strong> Demanding ten green lights means never trading. Two or three complementary confirmations plus price is enough.",
            "<strong>Treating confluence as certainty.</strong> Even perfect agreement can be wrong. Every confluence trade still needs a stop and sensible size.",
            "<strong>Curve-fitting on history.</strong> Tweaking settings until a combo looks perfect on old charts rarely survives live markets. Keep it simple and robust.",
          ],
        },
        {
          kind: "key",
          text: "Seek confluence from complementary tools that measure different things — stacking redundant indicators adds noise and false confidence, not edge.",
        },
        {
          kind: "text",
          html: "Even perfect confluence is not a guarantee. Indicators lag, agreement can still be wrong, and the market owes you nothing — which is why <strong>risk management</strong> remains the deciding factor in every trade.",
        },
      ],
    },

    /* ============================================================ */
    /* 16. Building an Indicator Strategy                           */
    /* ============================================================ */
    {
      slug: "indicator-strategy",
      title: "Building an Indicator Strategy",
      summary:
        "How to turn everything into one disciplined, rules-based indicator strategy with entries, stops and honest expectations.",
      readingMinutes: 12,
      objective:
        "After this module you'll be able to assemble a simple, rules-based trend strategy with defined entries, stops and risk control.",
      blocks: [
        {
          kind: "text",
          html: "A strategy is a small set of <strong>written rules</strong> you follow the same way every time. Without rules you drift into impulsive trades and cannot tell whether an approach works. The goal now is to fold the course into one simple, testable plan.",
        },
        {
          kind: "image",
          src: "/learn/trend/16-setup.png",
          alt: "A five-step indicator strategy checklist",
          caption:
            "A repeatable five-step checklist beats a screen crowded with indicators.",
        },
        {
          kind: "heading",
          text: "A five-step trend template",
        },
        {
          kind: "list",
          items: [
            "1. Bias: is price above or below the 200 EMA? Trade with it only.",
            "2. Strength: is ADX confirming a real trend (rising, above ~25)?",
            "3. Trigger: wait for a pullback and a momentum turn (RSI or MACD).",
            "4. Entry: act on the candle close that confirms the trend resuming.",
            "5. Risk: place a stop beyond the invalidation swing before you enter.",
          ],
        },
        {
          kind: "text",
          html: "Notice each step uses a <strong>different type of tool</strong> — trend, strength, momentum — rather than three that repeat each other. The stop is defined by <strong>where the idea is wrong</strong>, not by how much you hope to make, and position size is set so that a single loss is small.",
        },
        {
          kind: "heading",
          text: "Test and expect losses",
        },
        {
          kind: "text",
          html: "Before risking money, review the rules over past charts and, ideally, on a demo account to see how they behave. Every strategy has <strong>losing streaks</strong>; trend-following in particular takes many small losses to catch a few big winners. A plan you cannot follow through a drawdown is worthless.",
        },
        {
          kind: "text",
          html: "Finally, keep expectations honest. No indicator setup <strong>guarantees profit</strong>, no combination removes losing trades, and anyone promising signals or riches is selling something. Your durable edge is <strong>discipline and risk control</strong> applied consistently to a plan you actually understand.",
        },
        {
          kind: "example",
          title: "Running the five-step template on a live setup",
          steps: [
            "<strong>Bias</strong>: on the 1-hour gold chart, price is above a rising 200 EMA — long only.",
            "<strong>Strength</strong>: ADX reads <strong>26 and rising</strong> — a real trend, so the signal is worth trading.",
            "<strong>Trigger</strong>: price pulls back and RSI turns up from <strong>40</strong> as a green candle closes at <strong>2046</strong>.",
            "<strong>Entry & risk</strong>: you buy 2046, stop below the pullback low at <strong>2032</strong> (14 points). On €3,000 at 1% (€30), size ≈ <strong>0.2 lots</strong>.",
            "<strong>Target</strong>: the prior high near <strong>2088</strong>, ~42 points — a <strong>3:1</strong> trade planned in full before you clicked. Same five steps, every single time.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes building a strategy",
          items: [
            "<strong>Having no written rules.</strong> Without them you drift into impulsive trades and can't tell if the approach works. Write the plan down.",
            "<strong>Stacking redundant tools.</strong> Three momentum oscillators is not a strategy. Use one of each type: trend, strength, momentum.",
            "<strong>Sizing before the stop.</strong> Pick the invalidation level first, then size so a loss is small. Never pick a size then hunt for a stop that fits.",
            "<strong>Abandoning the plan in a drawdown.</strong> Every strategy has losing streaks; trend following in particular. A plan you can't follow through a bad run is worthless.",
            "<strong>Chasing guaranteed profits.</strong> No setup wins every time and anyone selling certainty is selling nonsense. Discipline and risk control are the real edge.",
          ],
        },
        {
          kind: "key",
          text: "A strategy is a written, tested set of rules — bias, strength, trigger, entry, stop — where consistent risk management, not any indicator, is the real edge.",
        },
      ],
    },
  ],
};
