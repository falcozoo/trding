/**
 * Trading glossary dataset.
 *
 * Plain-English, beginner-friendly, neutral and honest about risk. Each entry
 * targets a "what is X" / "X meaning" search. The `body` uses <strong> around
 * the single most important idea, and `related` slugs power internal linking
 * for SEO. Accuracy first — these are real definitions, not filler.
 */

export type GlossaryCategory =
  | "basics"
  | "orders"
  | "analysis"
  | "risk"
  | "instruments"
  | "costs"
  | "psychology"
  | "smc";

export interface GlossaryTerm {
  slug: string;
  term: string;
  category: GlossaryCategory;
  /** One-line definition for cards and meta descriptions. */
  short: string;
  /** 2–4 short paragraphs of plain-English explanation. */
  body: string[];
  /** Slugs of related terms for internal linking. */
  related?: string[];
}

/** Friendly labels for category badges. */
export const CATEGORY_LABELS: Record<GlossaryCategory, string> = {
  basics: "Basics",
  orders: "Orders",
  analysis: "Analysis",
  risk: "Risk",
  instruments: "Instruments",
  costs: "Costs",
  psychology: "Psychology",
  smc: "Smart money concepts",
};

const GLOSSARY: GlossaryTerm[] = [
  /* ---------------------------------------------------------------- BASICS */
  {
    slug: "long",
    term: "Long",
    category: "basics",
    short: "Buying an asset expecting its price to rise so you can sell higher.",
    body: [
      "To go <strong>long</strong> is to buy an instrument because you expect its price to go up. If you buy at 100 and the price rises to 110, you can close for a profit; if it falls to 90, you take a loss.",
      "Going long is the most intuitive kind of trade — buy low, sell high. It is the opposite of going short, where you profit from a falling price.",
    ],
    related: ["short", "bid", "ask", "position-sizing"],
  },
  {
    slug: "short",
    term: "Short",
    category: "basics",
    short: "Selling an asset you expect to fall, aiming to buy it back cheaper.",
    body: [
      "To go <strong>short</strong> is to sell an instrument you do not own (or via a derivative like a CFD) because you expect its price to fall. You profit if it drops and buy it back cheaper; you lose if it rises.",
      "Shorting lets traders try to profit in falling markets, but the risk can be large: a price can keep rising indefinitely, so losses on a short are theoretically unlimited unless you use a stop-loss.",
    ],
    related: ["long", "stop-loss", "cfd", "leverage"],
  },
  {
    slug: "bid",
    term: "Bid",
    category: "basics",
    short: "The highest price a buyer is currently willing to pay.",
    body: [
      "The <strong>bid</strong> is the price at which you can sell an instrument right now — it is the best price a buyer in the market is currently offering.",
      "The bid is always slightly lower than the ask. The gap between them is the spread, which is a cost you pay every time you trade.",
    ],
    related: ["ask", "spread", "liquidity"],
  },
  {
    slug: "ask",
    term: "Ask",
    category: "basics",
    short: "The lowest price a seller is currently willing to accept.",
    body: [
      "The <strong>ask</strong> (or offer) is the price at which you can buy an instrument right now — the best price a seller in the market is currently asking for.",
      "The ask is always slightly higher than the bid. When you buy at the ask and immediately sell at the bid, the difference (the spread) is already a small loss, which is why the spread matters.",
    ],
    related: ["bid", "spread", "liquidity"],
  },
  {
    slug: "spread",
    term: "Spread",
    category: "costs",
    short: "The gap between the bid and ask price — a built-in cost of trading.",
    body: [
      "The <strong>spread</strong> is the difference between the buy price (ask) and the sell price (bid). It is one of the main costs of trading: the moment you open a position, you are effectively down by the spread.",
      "Spreads are usually measured in pips or points. Tighter spreads are cheaper for you, especially if you trade frequently. Spreads often widen during news events and outside main market hours when liquidity is thin.",
    ],
    related: ["bid", "ask", "pip", "commission", "liquidity"],
  },
  {
    slug: "pip",
    term: "Pip",
    category: "basics",
    short: "The smallest standard price move in most currency pairs.",
    body: [
      "A <strong>pip</strong> ('percentage in point') is the standard smallest unit of price movement in forex. For most pairs it is the fourth decimal place — a move from 1.1050 to 1.1051 is one pip.",
      "For pairs quoted against the Japanese yen, a pip is the second decimal place (e.g. 110.05 to 110.06). Many brokers also quote a fractional 'pipette', a tenth of a pip, shown as a fifth decimal.",
      "Pips let traders measure gains, losses and spreads in a consistent way regardless of the currency.",
    ],
    related: ["spread", "lot", "point", "forex"],
  },
  {
    slug: "point",
    term: "Point",
    category: "basics",
    short: "A single unit of price movement, used for indices, stocks and pips.",
    body: [
      "A <strong>point</strong> is a general unit of price movement. On stock indices it usually means one whole number of the index; on many broker platforms 'point' refers to the last decimal shown, which for forex equals a pipette.",
      "Because the meaning varies by market and platform, always check how your broker defines a point before sizing a trade or reading a spread quote.",
    ],
    related: ["pip", "tick", "spread"],
  },
  {
    slug: "tick",
    term: "Tick",
    category: "basics",
    short: "The minimum price increment an instrument can move.",
    body: [
      "A <strong>tick</strong> is the smallest possible price change for a given instrument. Each market has its own tick size — for example, a futures contract might move in ticks of 0.25.",
      "Tick value is how much money one tick is worth per contract. Traders in futures often think in ticks the way forex traders think in pips.",
    ],
    related: ["pip", "point", "futures"],
  },
  {
    slug: "lot",
    term: "Lot",
    category: "basics",
    short: "A standard trade size unit; in forex one standard lot is 100,000 units.",
    body: [
      "A <strong>lot</strong> is a standardised quantity of an instrument. In forex, one standard lot is 100,000 units of the base currency, a mini lot is 10,000, a micro lot is 1,000 and a nano lot is 100.",
      "Lot size directly controls how much each pip is worth, and therefore how much you can win or lose per price move. Choosing the right lot size is a core part of position sizing and risk control.",
    ],
    related: ["pip", "position-sizing", "leverage", "margin"],
  },
  {
    slug: "leverage",
    term: "Leverage",
    category: "risk",
    short: "Borrowed exposure that lets you control a large position with a small deposit.",
    body: [
      "<strong>Leverage lets you control a position much larger than the cash in your account.</strong> At 30:1 leverage, £1,000 of your money can control a £30,000 position.",
      "Leverage multiplies both profits and losses. A small move against a highly leveraged position can wipe out a large share of your account, which is a big reason most retail traders lose money.",
      "Regulators in many regions cap the leverage brokers can offer retail clients precisely because it is so risky. Treat high leverage with caution.",
    ],
    related: ["margin", "margin-call", "position-sizing", "cfd"],
  },
  {
    slug: "margin",
    term: "Margin",
    category: "risk",
    short: "The deposit a broker holds to keep a leveraged position open.",
    body: [
      "<strong>Margin is the amount of your own money set aside as a good-faith deposit to open and hold a leveraged trade.</strong> It is not a fee — it is collateral.",
      "Required margin depends on position size and leverage. At 30:1 leverage, a £30,000 position needs about £1,000 of margin. If losses eat into your balance, the broker may ask for more margin or close your positions.",
    ],
    related: ["leverage", "margin-call", "free-margin", "equity"],
  },
  {
    slug: "free-margin",
    term: "Free margin",
    category: "risk",
    short: "The money in your account still available to open new trades.",
    body: [
      "<strong>Free margin is your equity minus the margin currently tied up in open positions.</strong> It is the buffer available to absorb losses and to open new trades.",
      "When free margin runs low, you are close to a margin call. Watching free margin is one of the simplest ways to see how much risk your account can still take.",
    ],
    related: ["margin", "equity", "margin-call", "balance"],
  },
  {
    slug: "equity",
    term: "Equity",
    category: "risk",
    short: "Your account balance adjusted for the profit or loss on open trades.",
    body: [
      "<strong>Equity is what your account would be worth if you closed every open position right now.</strong> It equals your balance plus or minus any unrealised profit or loss.",
      "Equity is the number that really matters, because margin calls and stop-outs are based on it — not on your starting balance.",
    ],
    related: ["balance", "free-margin", "margin", "drawdown"],
  },
  {
    slug: "balance",
    term: "Balance",
    category: "basics",
    short: "The cash in your account from closed trades, before open P&L.",
    body: [
      "Your <strong>balance</strong> is the settled cash in your account: deposits, withdrawals and the realised profit or loss from trades you have already closed.",
      "Balance does not move while a trade is open — only when you close it. Equity, by contrast, updates live with the market. The two are equal only when you have no open positions.",
    ],
    related: ["equity", "free-margin", "drawdown"],
  },
  {
    slug: "margin-call",
    term: "Margin call",
    category: "risk",
    short: "A broker warning that your equity is too low to support open trades.",
    body: [
      "A <strong>margin call</strong> happens when losses push your equity below the margin needed to keep your positions open. The broker warns you to add funds or reduce exposure.",
      "If the account keeps falling, the broker will begin closing positions automatically at the 'stop-out' level to protect itself. A margin call is a clear sign you were over-leveraged.",
    ],
    related: ["margin", "leverage", "equity", "negative-balance-protection"],
  },
  {
    slug: "liquidity",
    term: "Liquidity",
    category: "basics",
    short: "How easily an asset can be traded without moving its price.",
    body: [
      "<strong>Liquidity describes how easily you can buy or sell an instrument without significantly moving its price.</strong> High-liquidity markets have many buyers and sellers and tight spreads.",
      "Major forex pairs and large-cap stocks are highly liquid. Thin markets — small stocks, exotic pairs, or trading outside main hours — have wider spreads and more slippage, making them riskier to trade.",
    ],
    related: ["spread", "slippage", "volume", "volatility"],
  },
  {
    slug: "volatility",
    term: "Volatility",
    category: "analysis",
    short: "How much and how quickly a price moves over time.",
    body: [
      "<strong>Volatility measures the size and speed of price swings.</strong> A volatile market moves sharply; a calm market drifts slowly.",
      "Volatility is not the same as direction — a market can be highly volatile while going nowhere overall. Higher volatility means bigger potential gains and bigger potential losses, so many traders adjust position size to it.",
    ],
    related: ["atr", "volume", "drawdown", "position-sizing"],
  },
  {
    slug: "volume",
    term: "Volume",
    category: "analysis",
    short: "The number of units traded over a period — a gauge of activity.",
    body: [
      "<strong>Volume is the total amount of an instrument traded during a given period.</strong> High volume means lots of participation; low volume means few traders are active.",
      "Analysts use volume to judge conviction behind a move. A breakout on heavy volume is seen as stronger than one on light volume. In decentralised forex, brokers show tick volume (number of price changes) as a proxy.",
    ],
    related: ["liquidity", "vwap", "breakout", "volatility"],
  },
  {
    slug: "slippage",
    term: "Slippage",
    category: "costs",
    short: "The difference between your expected fill price and the actual one.",
    body: [
      "<strong>Slippage is when your order is filled at a different price than you expected</strong>, usually because the market moved between clicking and execution.",
      "Slippage is most common during fast-moving markets, news releases and thin liquidity. It can work for or against you, but negative slippage is more often felt. Limit orders avoid negative slippage but may not fill at all.",
    ],
    related: ["market-order", "limit-order", "liquidity", "volatility"],
  },

  /* ---------------------------------------------------------------- ORDERS */
  {
    slug: "market-order",
    term: "Market order",
    category: "orders",
    short: "An order to buy or sell immediately at the best available price.",
    body: [
      "A <strong>market order executes right away at whatever price is currently available.</strong> It prioritises speed of execution over price certainty.",
      "Because you take the current price, market orders can suffer slippage in fast or thin markets. Use them when getting into or out of a trade quickly matters more than the exact price.",
    ],
    related: ["limit-order", "stop-order", "slippage", "bid"],
  },
  {
    slug: "limit-order",
    term: "Limit order",
    category: "orders",
    short: "An order to trade only at a specified price or better.",
    body: [
      "A <strong>limit order sets the worst price you will accept</strong>: buy at or below your limit, or sell at or above it. It gives you price control but no guarantee of being filled.",
      "Limit orders are useful for entering at a better price than the current market, or for taking profit at a target. If the market never reaches your price, the order simply does not execute.",
    ],
    related: ["market-order", "stop-order", "take-profit", "slippage"],
  },
  {
    slug: "stop-order",
    term: "Stop order",
    category: "orders",
    short: "An order that triggers a market order once a set price is reached.",
    body: [
      "A <strong>stop order becomes a market order once the price hits your chosen trigger level.</strong> It is used both to enter breakouts and to exit losing trades.",
      "A buy stop sits above the current price; a sell stop sits below. Because it turns into a market order when triggered, a stop order can be filled with slippage in fast markets.",
    ],
    related: ["stop-loss", "stop-limit-order", "market-order", "breakout"],
  },
  {
    slug: "stop-limit-order",
    term: "Stop-limit order",
    category: "orders",
    short: "A stop that triggers a limit order rather than a market order.",
    body: [
      "A <strong>stop-limit order combines a stop trigger with a limit price</strong>: once the trigger is hit, it places a limit order instead of a market order.",
      "This protects you from bad fills, but if the market gaps straight past your limit price, the order may not execute at all — leaving you without the protection you wanted. It trades certainty of execution for control of price.",
    ],
    related: ["stop-order", "limit-order", "gap", "slippage"],
  },
  {
    slug: "stop-loss",
    term: "Stop-loss",
    category: "risk",
    short: "A preset order that closes a losing trade to cap your loss.",
    body: [
      "A <strong>stop-loss automatically closes your position once the price reaches a level where you accept the trade is wrong</strong>, capping the loss on that trade.",
      "Using a stop-loss on every trade is one of the most basic risk-control habits. Note that a standard stop is not guaranteed — in a fast market or a gap it can fill worse than your level. A guaranteed stop (often for a fee) removes that risk.",
    ],
    related: ["take-profit", "trailing-stop", "risk-reward", "position-sizing"],
  },
  {
    slug: "take-profit",
    term: "Take-profit",
    category: "orders",
    short: "A preset order that closes a winning trade at your target price.",
    body: [
      "A <strong>take-profit order closes your position automatically once it reaches your profit target</strong>, locking in the gain without you having to watch the screen.",
      "Setting a take-profit alongside a stop-loss defines your risk-reward before you enter, and removes the temptation to get greedy and give profits back.",
    ],
    related: ["stop-loss", "limit-order", "risk-reward"],
  },
  {
    slug: "trailing-stop",
    term: "Trailing stop",
    category: "orders",
    short: "A stop-loss that follows price in your favour to lock in gains.",
    body: [
      "A <strong>trailing stop moves automatically as the price moves in your favour, but stays put when the price moves against you.</strong> It locks in more profit as a trade runs while still capping the downside.",
      "For example, a trailing stop 20 pips behind price will rise with a long position but never fall. When price finally reverses by the trailing distance, the trade closes.",
    ],
    related: ["stop-loss", "take-profit", "trend"],
  },
  {
    slug: "good-till-cancelled",
    term: "Good 'til cancelled (GTC)",
    category: "orders",
    short: "An order that stays active until it fills or you cancel it.",
    body: [
      "A <strong>good-'til-cancelled order remains open across trading sessions until it either executes or you manually cancel it.</strong> It contrasts with a day order, which expires at the end of the session.",
      "GTC is handy for limit and stop orders you want to leave working for days, but remember they can trigger while you are away, so pair them with sensible risk levels.",
    ],
    related: ["limit-order", "stop-order", "day-order"],
  },
  {
    slug: "day-order",
    term: "Day order",
    category: "orders",
    short: "An order that expires at the end of the trading day if unfilled.",
    body: [
      "A <strong>day order is only valid for the current trading session</strong> — if it has not filled by the close, it is automatically cancelled.",
      "Day orders suit short-term traders who reassess their setups each day. They are the opposite of good-'til-cancelled orders.",
    ],
    related: ["good-till-cancelled", "limit-order", "day-trading"],
  },
  {
    slug: "fill-or-kill",
    term: "Fill or kill (FOK)",
    category: "orders",
    short: "An order that must execute in full immediately or be cancelled.",
    body: [
      "A <strong>fill-or-kill order must be filled completely and instantly, or it is cancelled entirely</strong> — no partial fills are allowed.",
      "It is used when a trader needs a whole position at once and will not accept getting only part of it. It is more common in stocks and futures than retail forex.",
    ],
    related: ["market-order", "limit-order", "liquidity"],
  },

  /* -------------------------------------------------------------- ANALYSIS */
  {
    slug: "support",
    term: "Support",
    category: "analysis",
    short: "A price level where buying has tended to stop a decline.",
    body: [
      "<strong>Support is a price area where a falling market has repeatedly found enough buyers to stop or reverse the decline.</strong> Traders watch it as a possible floor.",
      "Support is not a guarantee — levels break. When a well-tested support level breaks, it often flips to become resistance on the way back up. Support and resistance are the backbone of technical analysis.",
    ],
    related: ["resistance", "trend", "breakout", "technical-analysis"],
  },
  {
    slug: "resistance",
    term: "Resistance",
    category: "analysis",
    short: "A price level where selling has tended to stop an advance.",
    body: [
      "<strong>Resistance is a price area where a rising market has repeatedly met enough sellers to stall or reverse the advance.</strong> Traders watch it as a possible ceiling.",
      "Like support, resistance can break, and a broken resistance often becomes new support. Round numbers and previous highs frequently act as resistance.",
    ],
    related: ["support", "trend", "breakout", "technical-analysis"],
  },
  {
    slug: "trend",
    term: "Trend",
    category: "analysis",
    short: "The general direction a market is moving over time.",
    body: [
      "A <strong>trend is the prevailing direction of a market.</strong> An uptrend makes higher highs and higher lows; a downtrend makes lower highs and lower lows; a range moves sideways.",
      "'The trend is your friend' is a common saying because trading with the trend can be easier than fighting it. Trends end, though, so identifying them is only half the job — managing the exit is the other half.",
    ],
    related: ["support", "resistance", "moving-average", "breakout"],
  },
  {
    slug: "breakout",
    term: "Breakout",
    category: "analysis",
    short: "When price moves decisively beyond a support or resistance level.",
    body: [
      "A <strong>breakout occurs when price pushes through a well-watched level of support or resistance</strong>, often signalling the start of a new move.",
      "Breakouts can be powerful but also fail — a 'false breakout' or 'fakeout' reverses quickly, trapping traders who chased it. Confirmation, such as strong volume, is often used to judge whether a breakout is genuine.",
    ],
    related: ["support", "resistance", "volume", "liquidity-sweep"],
  },
  {
    slug: "pullback",
    term: "Pullback",
    category: "analysis",
    short: "A temporary move against the trend before it resumes.",
    body: [
      "A <strong>pullback is a short-term counter-move within a larger trend</strong> — a pause or dip before the main direction continues.",
      "Many trend-following traders wait for a pullback to enter at a better price, rather than chasing. The risk is telling the difference between a healthy pullback and a full reversal.",
    ],
    related: ["trend", "correction", "fibonacci", "support"],
  },
  {
    slug: "correction",
    term: "Correction",
    category: "analysis",
    short: "A moderate fall in price, often defined as a drop of around 10%.",
    body: [
      "A <strong>correction is a decline of roughly 10% or more from a recent high</strong>, seen as a normal pause within a longer uptrend rather than a full reversal.",
      "Corrections are common and often healthy, letting an overheated market cool off. A fall of 20% or more is usually called a bear market instead.",
    ],
    related: ["pullback", "bear-market", "drawdown", "trend"],
  },
  {
    slug: "candlestick",
    term: "Candlestick",
    category: "analysis",
    short: "A chart bar showing the open, high, low and close for a period.",
    body: [
      "A <strong>candlestick shows four prices for a time period: the open, high, low and close.</strong> The 'body' spans open to close; the thin 'wicks' show the highs and lows reached.",
      "A candle is usually coloured green/white when price closed higher and red/black when it closed lower. Reading sequences of candles is the basis of much technical analysis.",
    ],
    related: ["doji", "engulfing", "pin-bar", "technical-analysis"],
  },
  {
    slug: "doji",
    term: "Doji",
    category: "analysis",
    short: "A candlestick where the open and close are almost equal.",
    body: [
      "A <strong>doji is a candlestick with a very small body, meaning price opened and closed at nearly the same level.</strong> It signals indecision between buyers and sellers.",
      "On its own a doji means little, but after a strong move it can hint at a possible pause or reversal. Traders look for confirmation from the next candle before acting.",
    ],
    related: ["candlestick", "pin-bar", "engulfing"],
  },
  {
    slug: "pin-bar",
    term: "Pin bar",
    category: "analysis",
    short: "A candle with a long wick showing rejection of a price level.",
    body: [
      "A <strong>pin bar has a small body and one long wick, showing that price was pushed to an extreme and then rejected</strong> back within the period.",
      "A long lower wick suggests buyers stepped in; a long upper wick suggests sellers did. Pin bars near support or resistance are popular reversal signals, though like all patterns they can fail.",
    ],
    related: ["candlestick", "doji", "support", "resistance"],
  },
  {
    slug: "engulfing",
    term: "Engulfing pattern",
    category: "analysis",
    short: "A two-candle reversal signal where one candle fully covers the prior one.",
    body: [
      "An <strong>engulfing pattern is a two-candle signal where the second candle's body completely engulfs the first.</strong> A bullish engulfing appears after a decline; a bearish one after a rally.",
      "It suggests a sharp shift in control from buyers to sellers or vice versa. It is more reliable at key levels and with confirmation than in the middle of choppy price action.",
    ],
    related: ["candlestick", "doji", "pin-bar", "support"],
  },
  {
    slug: "moving-average",
    term: "Moving average",
    category: "analysis",
    short: "A line that smooths price by averaging it over a set number of periods.",
    body: [
      "A <strong>moving average smooths out price by continuously averaging it over a chosen number of periods</strong>, making the underlying trend easier to see.",
      "A simple moving average (SMA) weights all periods equally; an exponential moving average (EMA) gives more weight to recent prices, so it reacts faster. Crossovers between averages are a classic (if lagging) trend signal.",
    ],
    related: ["ema", "trend", "macd", "golden-cross"],
  },
  {
    slug: "ema",
    term: "Exponential moving average (EMA)",
    category: "analysis",
    short: "A moving average that weights recent prices more heavily.",
    body: [
      "An <strong>EMA is a moving average that gives greater weight to the most recent prices</strong>, so it turns more quickly than a simple moving average.",
      "Because it reacts faster, traders often prefer the EMA for shorter-term signals. The trade-off is that it can also produce more false signals in choppy markets.",
    ],
    related: ["moving-average", "trend", "macd"],
  },
  {
    slug: "golden-cross",
    term: "Golden cross",
    category: "analysis",
    short: "When a short-term average crosses above a long-term one — a bullish signal.",
    body: [
      "A <strong>golden cross occurs when a shorter moving average crosses above a longer one</strong> (classically the 50-day above the 200-day), seen as a bullish sign.",
      "The opposite, a death cross, is when the short average drops below the long one. Both are lagging signals — they confirm a move that has already begun rather than predict it.",
    ],
    related: ["moving-average", "ema", "trend", "bull-market"],
  },
  {
    slug: "rsi",
    term: "Relative strength index (RSI)",
    category: "analysis",
    short: "A momentum oscillator from 0–100 gauging overbought and oversold conditions.",
    body: [
      "The <strong>RSI is a momentum indicator scaled 0 to 100 that measures how fast and how far price has moved recently.</strong> Above 70 is often called overbought; below 30, oversold.",
      "Overbought does not mean 'sell now' — strong trends can stay overbought for a long time. Traders also watch RSI divergence, where price makes a new extreme but RSI does not, as a possible reversal clue.",
    ],
    related: ["macd", "stochastic", "divergence", "momentum"],
  },
  {
    slug: "macd",
    term: "MACD",
    category: "analysis",
    short: "A trend-and-momentum indicator built from two moving averages.",
    body: [
      "The <strong>MACD (Moving Average Convergence Divergence) tracks the relationship between two EMAs to show trend direction and momentum.</strong> It plots a MACD line, a signal line and a histogram.",
      "Traders watch for the MACD line crossing its signal line, and for the histogram growing or shrinking. Like all moving-average tools, it lags price and works best alongside other analysis.",
    ],
    related: ["moving-average", "ema", "rsi", "divergence"],
  },
  {
    slug: "stochastic",
    term: "Stochastic oscillator",
    category: "analysis",
    short: "A momentum tool comparing the close to a recent high-low range.",
    body: [
      "The <strong>stochastic oscillator measures where the current close sits within the recent trading range</strong>, on a 0–100 scale, to gauge momentum.",
      "Readings above 80 are considered overbought and below 20 oversold. Traders watch the %K and %D lines cross, especially in ranging markets where the tool tends to work best.",
    ],
    related: ["rsi", "momentum", "divergence"],
  },
  {
    slug: "bollinger-bands",
    term: "Bollinger Bands",
    category: "analysis",
    short: "A moving average with volatility bands plotted above and below it.",
    body: [
      "<strong>Bollinger Bands wrap a moving average in two bands set a number of standard deviations away</strong>, so the bands widen when volatility rises and narrow when it falls.",
      "Price tends to spend most of its time between the bands. A 'squeeze' (very narrow bands) often precedes a big move, and touches of the outer band can flag stretched conditions — but not automatic reversals.",
    ],
    related: ["moving-average", "volatility", "atr", "breakout"],
  },
  {
    slug: "fibonacci",
    term: "Fibonacci retracement",
    category: "analysis",
    short: "Horizontal levels used to estimate where a pullback might end.",
    body: [
      "<strong>Fibonacci retracement draws horizontal levels — commonly 23.6%, 38.2%, 50%, 61.8% — between a swing high and low to estimate where a pullback might pause.</strong>",
      "The 61.8% 'golden ratio' is watched most closely. These levels are not magic; they work partly because so many traders watch them. Use them as areas of interest, not precise turning points.",
    ],
    related: ["pullback", "support", "resistance", "trend"],
  },
  {
    slug: "atr",
    term: "Average true range (ATR)",
    category: "analysis",
    short: "An indicator that measures how much an instrument typically moves.",
    body: [
      "The <strong>ATR measures average volatility by looking at how far price travels each period, including gaps.</strong> A high ATR means big moves; a low ATR means quiet conditions.",
      "ATR does not tell direction. Traders use it to size stops and positions — for example, placing a stop a multiple of ATR away so it adapts to current volatility.",
    ],
    related: ["volatility", "stop-loss", "position-sizing", "adx"],
  },
  {
    slug: "adx",
    term: "Average directional index (ADX)",
    category: "analysis",
    short: "An indicator measuring trend strength, regardless of direction.",
    body: [
      "The <strong>ADX measures how strong a trend is on a 0–100 scale, without saying which way it is going.</strong> Readings above roughly 25 suggest a trending market; low readings suggest a range.",
      "Traders use ADX to decide whether trend-following or range-trading tools are more appropriate right now. It is a filter, not an entry signal on its own.",
    ],
    related: ["trend", "atr", "moving-average"],
  },
  {
    slug: "vwap",
    term: "VWAP",
    category: "analysis",
    short: "The volume-weighted average price traded over a session.",
    body: [
      "<strong>VWAP (Volume-Weighted Average Price) is the average price at which an instrument has traded during a session, weighted by volume.</strong> It shows the 'fair' average paid so far.",
      "Institutions use VWAP as a benchmark for execution quality, and day traders use it as a reference: trading above VWAP is seen as relatively bullish, below it as bearish.",
    ],
    related: ["volume", "day-trading", "moving-average", "liquidity"],
  },
  {
    slug: "divergence",
    term: "Divergence",
    category: "analysis",
    short: "When price and an indicator move in opposite directions.",
    body: [
      "<strong>Divergence occurs when price makes a new high or low but an indicator like RSI or MACD does not confirm it</strong>, hinting that momentum is fading.",
      "Bullish divergence (price lower low, indicator higher low) can precede a bounce; bearish divergence the opposite. Divergence is an early warning, not a precise timing signal, and it can persist for a while before price responds.",
    ],
    related: ["rsi", "macd", "stochastic", "momentum"],
  },
  {
    slug: "momentum",
    term: "Momentum",
    category: "analysis",
    short: "The speed and strength behind a price move.",
    body: [
      "<strong>Momentum measures how forcefully price is moving in a direction.</strong> Strong momentum suggests a move has energy behind it; weakening momentum can warn that it is running out of steam.",
      "Momentum indicators (RSI, MACD, stochastic) try to quantify this. Momentum traders aim to ride strong moves, accepting that catching turning points is hard.",
    ],
    related: ["rsi", "macd", "divergence", "trend"],
  },
  {
    slug: "technical-analysis",
    term: "Technical analysis",
    category: "analysis",
    short: "Studying price charts and patterns to inform trading decisions.",
    body: [
      "<strong>Technical analysis is the study of past price and volume — via charts, patterns and indicators — to judge where price might go next.</strong> It assumes price action reflects all known information.",
      "It contrasts with fundamental analysis, which looks at underlying value. Neither approach is a crystal ball; technical analysis deals in probabilities, not certainties, which is why risk management still matters.",
    ],
    related: ["fundamental-analysis", "support", "candlestick", "trend"],
  },
  {
    slug: "fundamental-analysis",
    term: "Fundamental analysis",
    category: "analysis",
    short: "Assessing an asset's value from economic and financial data.",
    body: [
      "<strong>Fundamental analysis judges what an instrument is really worth using data like earnings, interest rates, economic growth and news.</strong> For forex that means central-bank policy and data; for stocks, company results.",
      "Fundamental traders ask 'is this cheap or expensive?' while technical traders ask 'what is price doing?' Many traders blend both, using fundamentals for the big picture and technicals for timing.",
    ],
    related: ["technical-analysis", "economic-calendar", "interest-rate"],
  },
  {
    slug: "economic-calendar",
    term: "Economic calendar",
    category: "analysis",
    short: "A schedule of upcoming data releases and events that can move markets.",
    body: [
      "An <strong>economic calendar lists scheduled releases — like interest-rate decisions, inflation and jobs data — that often cause sharp market moves.</strong>",
      "Traders watch it to avoid being caught off guard: spreads widen and volatility spikes around big releases. Many beginners choose to sit out high-impact events until they understand how markets react to them.",
    ],
    related: ["fundamental-analysis", "volatility", "slippage", "interest-rate"],
  },
  {
    slug: "gap",
    term: "Gap",
    category: "analysis",
    short: "A jump in price with no trading in between, leaving a blank on the chart.",
    body: [
      "A <strong>gap is when a market opens at a very different price from where it last closed, with no trading in the space between.</strong> Gaps often follow weekend news or major announcements.",
      "Gaps matter for risk: a stop-loss can be jumped over during a gap, filling far worse than your level. Some traders trade 'gap fills', betting price returns to close the gap, but this is far from guaranteed.",
    ],
    related: ["stop-loss", "slippage", "volatility", "weekend-risk"],
  },
  {
    slug: "order-flow",
    term: "Order flow",
    category: "analysis",
    short: "The real-time stream of buy and sell orders hitting the market.",
    body: [
      "<strong>Order flow is the live sequence of buy and sell orders being executed</strong>, studied to see where aggressive buyers or sellers are stepping in.",
      "Tools like the depth of market, footprint charts and time-and-sales show order flow. It is an advanced area; beginners usually get more from mastering the basics first.",
    ],
    related: ["liquidity", "volume", "level-2", "smart-money"],
  },
  {
    slug: "level-2",
    term: "Level 2 (depth of market)",
    category: "analysis",
    short: "A view of the buy and sell orders queued at different prices.",
    body: [
      "<strong>Level 2, or depth of market, shows the resting buy and sell orders stacked at prices around the current market</strong>, revealing where liquidity sits.",
      "It can hint at where price may find support or resistance from large orders, though displayed orders can be pulled or be misleading. It is more useful in centralised markets like stocks and futures than in over-the-counter forex.",
    ],
    related: ["order-flow", "liquidity", "bid", "ask"],
  },

  /* ------------------------------------------------------------------ RISK */
  {
    slug: "risk-reward",
    term: "Risk-reward ratio",
    category: "risk",
    short: "How much you stand to gain compared with what you risk on a trade.",
    body: [
      "The <strong>risk-reward ratio compares the money you risk on a trade to the profit you are targeting.</strong> Risking £50 to make £150 is a 1:3 ratio.",
      "A favourable ratio means you can be right less than half the time and still make money overall. Planning risk and reward before you enter is a cornerstone of disciplined trading.",
    ],
    related: ["stop-loss", "take-profit", "position-sizing", "win-rate"],
  },
  {
    slug: "position-sizing",
    term: "Position sizing",
    category: "risk",
    short: "Choosing how large a trade to place based on your risk per trade.",
    body: [
      "<strong>Position sizing means deciding how big a trade should be so that, if your stop-loss is hit, you lose only a set percentage of your account</strong> — often 1–2%.",
      "It links your stop distance, account size and lot size together. Getting position sizing right is arguably more important than picking entries, because it controls how much a losing streak can hurt you.",
    ],
    related: ["stop-loss", "risk-reward", "lot", "leverage"],
  },
  {
    slug: "drawdown",
    term: "Drawdown",
    category: "risk",
    short: "The drop from a peak to a trough in your account value.",
    body: [
      "<strong>Drawdown is how far your account has fallen from its highest point before recovering.</strong> A 20% drawdown means your equity dropped 20% below its peak.",
      "Drawdowns are unavoidable — even good strategies have losing streaks. What matters is keeping them survivable, because recovering from a deep drawdown is hard: a 50% loss needs a 100% gain just to break even.",
    ],
    related: ["equity", "risk-reward", "position-sizing", "volatility"],
  },
  {
    slug: "hedging",
    term: "Hedging",
    category: "risk",
    short: "Opening an offsetting position to reduce risk on another.",
    body: [
      "<strong>Hedging means taking a position designed to offset the risk of another</strong> — for example, holding a short to protect a long against a fall.",
      "Hedging can reduce risk but is not free: it caps upside, adds costs, and can simply lock in a loss. Some jurisdictions also restrict certain hedging setups for retail accounts.",
    ],
    related: ["long", "short", "correlation", "diversification"],
  },
  {
    slug: "diversification",
    term: "Diversification",
    category: "risk",
    short: "Spreading risk across different assets so no single one can sink you.",
    body: [
      "<strong>Diversification means not putting all your capital into one instrument or bet</strong>, so a single bad outcome does not wipe you out.",
      "It works best when the assets are not highly correlated — otherwise they can all fall together. Diversification reduces risk but also dilutes the impact of any single winner.",
    ],
    related: ["correlation", "hedging", "risk-reward"],
  },
  {
    slug: "correlation",
    term: "Correlation",
    category: "risk",
    short: "How closely two instruments tend to move together.",
    body: [
      "<strong>Correlation measures whether two markets move in the same direction, opposite directions, or independently</strong>, on a scale from +1 to -1.",
      "Positively correlated trades stack risk — two 'different' positions can really be one big bet. Understanding correlation stops traders from thinking they are diversified when they are not.",
    ],
    related: ["diversification", "hedging", "risk-reward"],
  },
  {
    slug: "win-rate",
    term: "Win rate",
    category: "risk",
    short: "The percentage of your trades that end in profit.",
    body: [
      "<strong>Win rate is simply the share of trades that make money.</strong> A 60% win rate means six of every ten trades are winners.",
      "A high win rate alone does not mean profit — small wins and large losses can still lose money. Win rate only makes sense alongside risk-reward and how big your average win and loss are.",
    ],
    related: ["risk-reward", "expectancy", "drawdown"],
  },
  {
    slug: "expectancy",
    term: "Expectancy",
    category: "risk",
    short: "The average amount you can expect to win or lose per trade.",
    body: [
      "<strong>Expectancy combines win rate and average win/loss into one number: the average profit or loss you can expect per trade over many trades.</strong>",
      "Positive expectancy means a strategy makes money on average; negative expectancy means it loses, no matter how exciting individual trades feel. It is the number a serious trader ultimately cares about.",
    ],
    related: ["win-rate", "risk-reward", "drawdown"],
  },
  {
    slug: "negative-balance-protection",
    term: "Negative balance protection",
    category: "risk",
    short: "A safeguard ensuring you can't lose more than your account holds.",
    body: [
      "<strong>Negative balance protection guarantees your account cannot go below zero</strong>, so you can never owe the broker more than you deposited, even after a violent market move.",
      "It is required for retail clients in some regions and offered voluntarily by many brokers elsewhere. Without it, a sharp gap on a leveraged position could in theory leave you with a debt.",
    ],
    related: ["margin-call", "leverage", "regulation", "segregated-funds"],
  },
  {
    slug: "risk-management",
    term: "Risk management",
    category: "risk",
    short: "The rules and habits that control how much you can lose.",
    body: [
      "<strong>Risk management is the whole set of habits — stops, position sizing, limits and discipline — that keep losses small enough to survive.</strong>",
      "Most traders fail not from bad entries but from poor risk control: risking too much, no stop, or revenge trading after a loss. Protecting capital comes before chasing profit.",
    ],
    related: ["stop-loss", "position-sizing", "drawdown", "risk-reward"],
  },
  {
    slug: "overtrading",
    term: "Overtrading",
    category: "psychology",
    short: "Placing too many trades, often out of boredom or emotion.",
    body: [
      "<strong>Overtrading is taking more trades than your plan justifies</strong> — chasing action, forcing setups, or trying to win losses back quickly.",
      "It piles up spread and commission costs and usually stems from emotion rather than edge. Sitting on your hands when there is no good setup is a skill in itself.",
    ],
    related: ["revenge-trading", "discipline", "commission", "fomo"],
  },

  /* ----------------------------------------------------------- PSYCHOLOGY */
  {
    slug: "fomo",
    term: "FOMO",
    category: "psychology",
    short: "Fear of missing out — chasing a move for fear of being left behind.",
    body: [
      "<strong>FOMO, the fear of missing out, is the urge to jump into a fast-moving market so you don't 'miss' the profit</strong> — usually right as the easy money is gone.",
      "FOMO leads to buying tops, ignoring your plan and oversizing. There is always another trade; acting from fear rather than a setup is a reliable way to lose money.",
    ],
    related: ["discipline", "overtrading", "revenge-trading", "trading-plan"],
  },
  {
    slug: "revenge-trading",
    term: "Revenge trading",
    category: "psychology",
    short: "Trying to win back a loss quickly by trading emotionally.",
    body: [
      "<strong>Revenge trading is entering impulsive trades to 'get back' money you just lost</strong>, driven by frustration rather than analysis.",
      "It usually makes things worse: bigger size, worse setups, deeper losses. Stepping away after a losing trade is one of the most valuable habits a trader can build.",
    ],
    related: ["fomo", "overtrading", "discipline", "drawdown"],
  },
  {
    slug: "discipline",
    term: "Trading discipline",
    category: "psychology",
    short: "Sticking to your plan and rules even when emotions push otherwise.",
    body: [
      "<strong>Discipline is following your trading plan consistently — taking valid setups, respecting stops, and skipping trades that don't qualify</strong> — regardless of how you feel.",
      "Markets are designed to provoke emotion. The traders who last are rarely the ones with the flashiest strategy; they are the ones who follow their rules when it is hard.",
    ],
    related: ["trading-plan", "fomo", "revenge-trading", "risk-management"],
  },
  {
    slug: "trading-plan",
    term: "Trading plan",
    category: "psychology",
    short: "A written set of rules for what, when and how much you trade.",
    body: [
      "A <strong>trading plan is a written playbook covering which markets you trade, your entry and exit rules, risk per trade and daily limits.</strong>",
      "Writing it down turns vague intentions into rules you can follow and review. Without a plan, most trading becomes gambling dressed up as analysis.",
    ],
    related: ["discipline", "risk-management", "trading-journal", "position-sizing"],
  },
  {
    slug: "trading-journal",
    term: "Trading journal",
    category: "psychology",
    short: "A record of your trades used to learn from wins and mistakes.",
    body: [
      "A <strong>trading journal logs every trade — the setup, size, result and your reasoning</strong> — so you can spot patterns in your behaviour and improve.",
      "It is one of the cheapest ways to get better. Many traders discover their real problem (over-sizing, cutting winners early, ignoring stops) only once it is written down in front of them.",
    ],
    related: ["trading-plan", "discipline", "expectancy"],
  },
  {
    slug: "paper-trading",
    term: "Paper trading",
    category: "psychology",
    short: "Practising trades with fake money to learn without financial risk.",
    body: [
      "<strong>Paper trading means placing trades on paper or in a simulator using virtual money</strong>, so you can practise a strategy without risking real capital.",
      "It is great for learning a platform and testing ideas, but it can't reproduce the emotions of risking real money. Treat it as a stepping stone, not proof you are ready to trade live.",
    ],
    related: ["demo-account", "backtesting", "trading-plan"],
  },
  {
    slug: "backtesting",
    term: "Backtesting",
    category: "psychology",
    short: "Testing a strategy on historical data to see how it would have done.",
    body: [
      "<strong>Backtesting runs a set of trading rules over past price data to estimate how they would have performed.</strong> It helps judge whether an idea has any historical edge.",
      "Backtests can mislead: past results don't guarantee future ones, and it is easy to over-fit rules to old data. Forward-testing on a demo account is a useful reality check.",
    ],
    related: ["paper-trading", "demo-account", "expectancy", "trading-plan"],
  },

  /* --------------------------------------------------------------- COSTS */
  {
    slug: "commission",
    term: "Commission",
    category: "costs",
    short: "A per-trade fee some brokers charge on top of, or instead of, the spread.",
    body: [
      "<strong>Commission is a direct fee a broker charges for executing a trade</strong>, often on 'raw spread' accounts that offer tighter spreads in exchange for the fee.",
      "You compare it against spread-only pricing: a tiny spread plus commission can be cheaper or dearer than a wider spread with no commission, depending on how much you trade.",
    ],
    related: ["spread", "swap", "overnight-financing", "slippage"],
  },
  {
    slug: "swap",
    term: "Swap (rollover)",
    category: "costs",
    short: "Interest paid or earned for holding a leveraged position overnight.",
    body: [
      "A <strong>swap, or rollover, is the interest adjustment applied when you hold a leveraged position past the daily rollover time.</strong> It reflects the interest-rate difference between the two currencies or the cost of financing.",
      "Depending on the position and rates, a swap can be a charge or a small credit. For traders who hold for days or weeks, swaps add up and should be part of the cost calculation.",
    ],
    related: ["overnight-financing", "commission", "carry-trade", "leverage"],
  },
  {
    slug: "overnight-financing",
    term: "Overnight financing",
    category: "costs",
    short: "The cost of funding a leveraged CFD or margin position held overnight.",
    body: [
      "<strong>Overnight financing is the daily cost of borrowing to fund a leveraged position you keep open past the session close.</strong> On CFDs it is often the swap; on stocks bought on margin it is interest on the loan.",
      "Because leverage means you are effectively trading with borrowed money, holding positions for a long time can quietly erode profits through these charges.",
    ],
    related: ["swap", "leverage", "cfd", "commission"],
  },
  {
    slug: "carry-trade",
    term: "Carry trade",
    category: "costs",
    short: "Profiting from the interest-rate gap between two currencies.",
    body: [
      "A <strong>carry trade aims to earn the interest-rate difference between two currencies by buying the higher-yielding one and funding it with the lower-yielding one.</strong>",
      "The daily swap credit is the reward, but the exchange rate can move against you far faster than the interest earns, so carry trades carry real market risk despite the steady interest.",
    ],
    related: ["swap", "interest-rate", "forex", "leverage"],
  },
  {
    slug: "spread-cost",
    term: "Spread cost",
    category: "costs",
    short: "The actual money the bid-ask spread costs you on a trade.",
    body: [
      "<strong>Spread cost is the spread translated into money for your specific position size.</strong> A 1-pip spread on a standard lot is roughly $10 — paid the instant you open.",
      "For active traders, spread cost is often the single biggest recurring expense. Tighter spreads and larger, less frequent trades reduce its drag on returns.",
    ],
    related: ["spread", "pip", "lot", "commission"],
  },

  /* --------------------------------------------------------- INSTRUMENTS */
  {
    slug: "forex",
    term: "Forex (FX)",
    category: "instruments",
    short: "The global market for trading one currency against another.",
    body: [
      "<strong>Forex is the market where currencies are traded in pairs</strong>, such as EUR/USD. You are always buying one currency and selling another at the same time.",
      "It is the largest and most liquid market in the world, open 24 hours on weekdays. Retail traders usually access it through leveraged products, which makes it both accessible and risky.",
    ],
    related: ["currency-pair", "pip", "leverage", "cfd"],
  },
  {
    slug: "currency-pair",
    term: "Currency pair",
    category: "instruments",
    short: "Two currencies quoted together, showing the price of one in the other.",
    body: [
      "A <strong>currency pair like EUR/USD shows how much of the second currency (the quote) it takes to buy one unit of the first (the base).</strong>",
      "'Majors' involve the US dollar and are most liquid; 'crosses' don't include the dollar; 'exotics' pair a major with a smaller-economy currency and tend to have wider spreads.",
    ],
    related: ["forex", "pip", "base-currency", "spread"],
  },
  {
    slug: "base-currency",
    term: "Base currency",
    category: "instruments",
    short: "The first currency in a pair — the one being priced.",
    body: [
      "The <strong>base currency is the first currency listed in a pair; the quote currency is the second.</strong> In EUR/USD, the euro is the base and the dollar is the quote.",
      "The price tells you how many units of the quote currency one unit of the base is worth. Buying the pair means going long the base and short the quote.",
    ],
    related: ["currency-pair", "forex", "pip"],
  },
  {
    slug: "cfd",
    term: "CFD (contract for difference)",
    category: "instruments",
    short: "A leveraged contract to exchange the price change of an asset, without owning it.",
    body: [
      "A <strong>CFD is a contract with a broker to swap the difference in an asset's price between opening and closing a trade — you never own the underlying.</strong>",
      "CFDs make it easy to go long or short with leverage across many markets. That flexibility is also why they are risky: most retail CFD accounts lose money, and regulators require prominent risk warnings.",
    ],
    related: ["leverage", "spread-betting", "short", "overnight-financing"],
  },
  {
    slug: "spread-betting",
    term: "Spread betting",
    category: "instruments",
    short: "A leveraged way to bet a stake per point on a market's direction.",
    body: [
      "<strong>Spread betting lets you stake an amount per point of movement on whether a market will rise or fall</strong>, without owning the asset. It is available mainly in the UK and Ireland.",
      "Like CFDs it is leveraged and lets you go long or short. The main practical differences from CFDs are how it is structured and taxed in those regions; both carry a high risk of loss.",
    ],
    related: ["cfd", "leverage", "short", "regulation"],
  },
  {
    slug: "stock",
    term: "Stock (share)",
    category: "instruments",
    short: "A unit of ownership in a company.",
    body: [
      "A <strong>stock, or share, represents part-ownership of a company.</strong> Own shares and you own a slice of the business, with a claim on its assets and sometimes dividends.",
      "Share prices move with company results, news and overall market mood. Traders may buy shares outright or get exposure to their price via CFDs, which is leveraged and does not confer ownership.",
    ],
    related: ["dividend", "index", "cfd", "fundamental-analysis"],
  },
  {
    slug: "dividend",
    term: "Dividend",
    category: "instruments",
    short: "A share of company profits paid out to shareholders.",
    body: [
      "A <strong>dividend is a portion of a company's profit paid to its shareholders</strong>, usually as cash on a regular schedule.",
      "Not all companies pay dividends. If you hold a share CFD over the record date, brokers usually make a dividend adjustment to your account to reflect it, without you owning the actual stock.",
    ],
    related: ["stock", "cfd", "index"],
  },
  {
    slug: "index",
    term: "Index",
    category: "instruments",
    short: "A basket of stocks tracked as a single number, like the S&P 500.",
    body: [
      "A <strong>stock index measures the combined value of a group of shares</strong>, such as the S&P 500 or FTSE 100, giving a snapshot of a whole market's direction.",
      "You can't buy an index directly, but you can trade its movement through index CFDs, futures or ETFs. Indices are popular because they spread exposure across many companies at once.",
    ],
    related: ["stock", "cfd", "etf", "futures"],
  },
  {
    slug: "etf",
    term: "ETF (exchange-traded fund)",
    category: "instruments",
    short: "A fund holding many assets that trades on an exchange like a share.",
    body: [
      "An <strong>ETF is a basket of assets — such as shares, bonds or commodities — that you can buy and sell like a single stock throughout the day.</strong>",
      "ETFs offer instant diversification and usually low fees, which is why they are popular with long-term investors. Some are leveraged or inverse and are far riskier, meant only for short-term use.",
    ],
    related: ["index", "stock", "diversification", "commodity"],
  },
  {
    slug: "commodity",
    term: "Commodity",
    category: "instruments",
    short: "A physical raw material traded on markets, like gold or oil.",
    body: [
      "A <strong>commodity is a basic raw good — such as gold, oil, natural gas, wheat or coffee — that is bought and sold on global markets.</strong>",
      "Commodity prices swing with supply and demand, weather, geopolitics and the dollar. Retail traders usually access them via CFDs, futures or ETFs rather than taking physical delivery.",
    ],
    related: ["futures", "cfd", "etf", "volatility"],
  },
  {
    slug: "futures",
    term: "Futures",
    category: "instruments",
    short: "A standardised contract to buy or sell an asset at a set future date and price.",
    body: [
      "A <strong>futures contract is an agreement to buy or sell an asset at an agreed price on a set future date</strong>, traded on regulated exchanges.",
      "Futures are used both to hedge (locking in a price) and to speculate. They are leveraged and standardised by contract size, and they expire, so positions must be closed or rolled before the expiry date.",
    ],
    related: ["commodity", "index", "leverage", "tick"],
  },
  {
    slug: "cryptocurrency",
    term: "Cryptocurrency",
    category: "instruments",
    short: "A digital asset like Bitcoin, secured by cryptography on a blockchain.",
    body: [
      "A <strong>cryptocurrency is a digital asset recorded on a blockchain</strong>, such as Bitcoin or Ethereum, that is not issued by any central bank.",
      "Crypto markets trade 24/7 and can be extremely volatile, with very large swings in short periods. They can be bought on exchanges or traded via CFDs; either way the risk of large, fast losses is high.",
    ],
    related: ["volatility", "cfd", "blockchain", "bitcoin"],
  },
  {
    slug: "bitcoin",
    term: "Bitcoin",
    category: "instruments",
    short: "The first and largest cryptocurrency, launched in 2009.",
    body: [
      "<strong>Bitcoin is the original cryptocurrency, a decentralised digital money recorded on a public blockchain</strong> with a capped total supply of 21 million coins.",
      "It is the largest crypto by market value and often sets the tone for the wider market. Its price is highly volatile, so it is treated as a speculative, high-risk instrument.",
    ],
    related: ["cryptocurrency", "blockchain", "volatility"],
  },
  {
    slug: "blockchain",
    term: "Blockchain",
    category: "instruments",
    short: "A shared, tamper-resistant digital ledger behind cryptocurrencies.",
    body: [
      "A <strong>blockchain is a distributed ledger that records transactions across many computers so they cannot easily be altered</strong>, removing the need for a central authority.",
      "It is the technology that makes cryptocurrencies work. Understanding it is useful context, but knowing the tech doesn't reduce the price risk of trading crypto assets.",
    ],
    related: ["cryptocurrency", "bitcoin"],
  },
  {
    slug: "interest-rate",
    term: "Interest rate",
    category: "instruments",
    short: "The rate set by central banks that influences currencies and markets.",
    body: [
      "An <strong>interest rate is the cost of borrowing money, and central-bank rates are among the biggest drivers of currency and market moves.</strong>",
      "Rising rates tend to strengthen a currency and pressure stocks; falling rates often do the reverse. Rate decisions and the language around them are top-tier events on any economic calendar.",
    ],
    related: ["economic-calendar", "fundamental-analysis", "carry-trade", "forex"],
  },
  {
    slug: "bond",
    term: "Bond",
    category: "instruments",
    short: "A loan to a government or company that pays interest over time.",
    body: [
      "A <strong>bond is essentially a loan: you lend money to a government or company and receive interest, with the principal repaid at maturity.</strong>",
      "Bond prices move opposite to interest rates and are watched closely because government bond yields influence currencies and stocks. Retail traders more often watch bonds than trade them directly.",
    ],
    related: ["interest-rate", "index", "fundamental-analysis"],
  },

  /* ------------------------------------------------------- BASICS (cont.) */
  {
    slug: "bull-market",
    term: "Bull market",
    category: "basics",
    short: "A market in a sustained uptrend, with rising prices and optimism.",
    body: [
      "A <strong>bull market is a prolonged period of rising prices and positive sentiment.</strong> A rise of about 20% from lows is a common informal threshold.",
      "'Bullish' describes an expectation of rising prices. Bull markets can last years, but they always end, and chasing late-stage rallies is a classic beginner mistake.",
    ],
    related: ["bear-market", "trend", "correction", "golden-cross"],
  },
  {
    slug: "bear-market",
    term: "Bear market",
    category: "basics",
    short: "A market in a sustained downtrend, often defined as a 20% fall.",
    body: [
      "A <strong>bear market is a prolonged period of falling prices, commonly defined as a drop of 20% or more from recent highs.</strong>",
      "'Bearish' describes an expectation of falling prices. Bear markets bring fear and sharp swings; traders can profit by going short, but timing them is notoriously hard.",
    ],
    related: ["bull-market", "correction", "short", "trend"],
  },
  {
    slug: "pnl",
    term: "P&L (profit and loss)",
    category: "basics",
    short: "The money you have gained or lost on your trades.",
    body: [
      "<strong>P&L is your profit and loss — the money made or lost on your positions.</strong> Unrealised P&L is on open trades; realised P&L is locked in once you close.",
      "Tracking P&L honestly, including costs like spread and swap, is essential. Many traders flatter themselves by ignoring the small costs that quietly add up.",
    ],
    related: ["equity", "balance", "spread-cost", "drawdown"],
  },
  {
    slug: "position",
    term: "Position",
    category: "basics",
    short: "An open trade you currently hold in the market.",
    body: [
      "A <strong>position is a trade you currently have open</strong> — long or short, in a certain size, exposed to price moves until you close it.",
      "'Opening a position' means entering a trade; 'closing' it means exiting. Your total open positions determine how much market risk you are carrying at any moment.",
    ],
    related: ["long", "short", "position-sizing", "exposure"],
  },
  {
    slug: "exposure",
    term: "Exposure",
    category: "risk",
    short: "The total amount of money at risk across your open positions.",
    body: [
      "<strong>Exposure is how much you stand to gain or lose from market moves, based on the combined size of your open positions.</strong>",
      "Leverage can make exposure far larger than your account balance. Keeping an eye on total exposure — especially across correlated trades — is central to not being wiped out by one bad move.",
    ],
    related: ["leverage", "position", "correlation", "risk-management"],
  },
  {
    slug: "liquidation",
    term: "Liquidation",
    category: "risk",
    short: "The forced closing of positions when your account runs out of margin.",
    body: [
      "<strong>Liquidation is when a broker automatically closes your positions because your equity has fallen below the required maintenance margin.</strong> It is the stop-out that follows an unheeded margin call.",
      "The term is especially common in crypto trading, where high leverage means liquidations can happen fast. Once liquidated, the loss is locked in — a strong argument against over-leveraging.",
    ],
    related: ["margin-call", "leverage", "equity", "negative-balance-protection"],
  },
  {
    slug: "market-maker",
    term: "Market maker",
    category: "basics",
    short: "A firm that quotes both buy and sell prices to provide liquidity.",
    body: [
      "A <strong>market maker continuously offers to buy and sell an instrument, earning the spread and providing liquidity so others can always trade.</strong>",
      "Some brokers act as market makers, taking the other side of client trades; others pass orders to the wider market (ECN/STP). Neither model is automatically better, but it is worth knowing how your broker operates.",
    ],
    related: ["liquidity", "spread", "ecn", "bid"],
  },
  {
    slug: "ecn",
    term: "ECN broker",
    category: "basics",
    short: "A broker that routes orders directly to a network of liquidity providers.",
    body: [
      "An <strong>ECN (Electronic Communication Network) broker connects your orders directly to banks and other liquidity providers</strong> rather than taking the other side itself.",
      "ECN accounts typically offer tighter, variable spreads plus a commission, and there is no conflict of interest from the broker profiting when you lose. They suit active traders who value pricing and execution.",
    ],
    related: ["market-maker", "commission", "spread", "slippage"],
  },
  {
    slug: "leverage-ratio",
    term: "Leverage ratio",
    category: "risk",
    short: "How many times your deposit your position size can be, e.g. 30:1.",
    body: [
      "A <strong>leverage ratio like 30:1 means you can control a position 30 times the size of the margin you put up.</strong> Higher ratios need less margin but magnify risk.",
      "Regulators often cap retail leverage (for example around 30:1 on major forex in some regions) to limit how quickly clients can lose money. Just because high leverage is offered doesn't mean you should use it all.",
    ],
    related: ["leverage", "margin", "regulation", "position-sizing"],
  },
  {
    slug: "pip-value",
    term: "Pip value",
    category: "basics",
    short: "How much money one pip of movement is worth for your position.",
    body: [
      "<strong>Pip value is the money gained or lost per pip, based on your lot size and the pair.</strong> On a standard lot of most USD-quoted pairs, one pip is about $10; on a micro lot, about $0.10.",
      "Knowing pip value lets you translate a stop distance in pips into real money, which is the heart of position sizing.",
    ],
    related: ["pip", "lot", "position-sizing", "spread-cost"],
  },

  /* -------------------------------------------------- SMART MONEY CONCEPTS */
  {
    slug: "order-block",
    term: "Order block",
    category: "smc",
    short: "A price zone where large institutional orders are thought to have entered.",
    body: [
      "In smart money concepts, an <strong>order block is a candle or zone believed to mark where big institutions placed significant orders before a strong move.</strong>",
      "Traders mark these zones expecting price to react to them again when it returns. Order blocks are an interpretation, not a proven fact — treat them as areas of interest and always manage risk.",
    ],
    related: ["fair-value-gap", "liquidity-sweep", "smart-money", "support"],
  },
  {
    slug: "fair-value-gap",
    term: "Fair value gap (FVG)",
    category: "smc",
    short: "An imbalance on the chart left by a fast move that price may revisit.",
    body: [
      "A <strong>fair value gap is a three-candle imbalance where price moved so quickly it left a gap between wicks</strong>, suggesting one side was far more aggressive.",
      "SMC traders expect price to 'rebalance' by returning to fill part of the gap. Like other SMC ideas it is a probability-based concept, not a guarantee, and it fails often enough that stops are essential.",
    ],
    related: ["order-block", "liquidity-sweep", "imbalance", "gap"],
  },
  {
    slug: "liquidity-sweep",
    term: "Liquidity sweep",
    category: "smc",
    short: "A quick move to grab stop orders before reversing the other way.",
    body: [
      "A <strong>liquidity sweep (or stop hunt) is a sharp push beyond an obvious high or low to trigger clustered stop orders, before price reverses.</strong>",
      "The idea is that large players need resting orders to fill their size, so they push into predictable stop zones. SMC traders watch for a sweep followed by a reversal as a possible entry — with tight risk, since sweeps can also be genuine breakouts.",
    ],
    related: ["order-block", "fair-value-gap", "stop-loss", "breakout"],
  },
  {
    slug: "smart-money",
    term: "Smart money",
    category: "smc",
    short: "A term for large institutional players assumed to move markets.",
    body: [
      "<strong>'Smart money' refers to big institutions — banks and funds — whose large orders are assumed to drive major market moves.</strong> Smart money concepts try to trade in their footsteps.",
      "The framework can sharpen how you read liquidity and structure, but it is a model, not insider knowledge. Retail traders can't actually see institutional orders, so keep expectations and risk realistic.",
    ],
    related: ["order-block", "liquidity-sweep", "order-flow", "market-structure"],
  },
  {
    slug: "market-structure",
    term: "Market structure",
    category: "smc",
    short: "The pattern of highs and lows that defines a trend or range.",
    body: [
      "<strong>Market structure is the sequence of swing highs and lows that shows whether a market is trending or ranging.</strong> Higher highs and higher lows mean an uptrend; the reverse means a downtrend.",
      "A 'break of structure' (BOS) signals the trend may be continuing, while a 'change of character' (CHoCH) hints at a possible reversal. Reading structure is foundational in both classic and smart money analysis.",
    ],
    related: ["break-of-structure", "trend", "support", "smart-money"],
  },
  {
    slug: "break-of-structure",
    term: "Break of structure (BOS)",
    category: "smc",
    short: "Price breaking a prior swing point, confirming the trend continues.",
    body: [
      "A <strong>break of structure happens when price closes beyond the previous swing high (in an uptrend) or low (in a downtrend), confirming the trend is continuing.</strong>",
      "SMC traders use a BOS to stay with the trend, and its opposite — a change of character — to spot when the trend may be turning. It is a way of reading momentum through structure rather than indicators.",
    ],
    related: ["market-structure", "trend", "liquidity-sweep", "smart-money"],
  },
  {
    slug: "imbalance",
    term: "Imbalance",
    category: "smc",
    short: "A zone where buying and selling were very one-sided, often a gap.",
    body: [
      "An <strong>imbalance is an area of the chart where one side overwhelmingly dominated, leaving a gap that price may later revisit to 'fill'.</strong> A fair value gap is one type of imbalance.",
      "SMC traders treat unfilled imbalances as magnets that price may return to. As with all such concepts, it describes tendencies, not certainties, so it belongs inside a risk-managed plan.",
    ],
    related: ["fair-value-gap", "order-block", "gap", "liquidity-sweep"],
  },
  {
    slug: "premium-discount",
    term: "Premium and discount",
    category: "smc",
    short: "Whether price is in the expensive or cheap half of a range.",
    body: [
      "In SMC, <strong>a range is split into a 'premium' (expensive) upper half and a 'discount' (cheap) lower half, using the 50% midpoint.</strong> The idea is to buy at a discount and sell at a premium.",
      "It borrows from Fibonacci thinking: entries in the discount zone of an uptrend, or the premium zone of a downtrend, aim for better risk-reward. It is a guideline for entry quality, not a signal by itself.",
    ],
    related: ["fibonacci", "market-structure", "order-block", "risk-reward"],
  },

  /* -------------------------------------------------- STRATEGY / STYLES */
  {
    slug: "scalping",
    term: "Scalping",
    category: "basics",
    short: "A style of taking many tiny, very short-term trades for small gains.",
    body: [
      "<strong>Scalping is a fast trading style that takes many small trades, holding each for seconds to minutes to capture tiny price moves.</strong>",
      "It demands sharp focus, low costs and tight spreads, because commissions and spread eat heavily into small profits. It is intense and unforgiving, and not a gentle way to start.",
    ],
    related: ["day-trading", "spread", "commission", "liquidity"],
  },
  {
    slug: "day-trading",
    term: "Day trading",
    category: "basics",
    short: "Opening and closing trades within the same day, holding nothing overnight.",
    body: [
      "<strong>Day trading means opening and closing all positions within a single session, so you carry no overnight risk.</strong> Trades typically last minutes to hours.",
      "It avoids overnight swap costs and gap risk but requires time, discipline and quick decisions. Most people who try to day trade for a living do not succeed, so approach it with clear eyes.",
    ],
    related: ["scalping", "swing-trading", "vwap", "gap"],
  },
  {
    slug: "swing-trading",
    term: "Swing trading",
    category: "basics",
    short: "Holding trades for days to weeks to capture larger price swings.",
    body: [
      "<strong>Swing trading holds positions for several days to weeks, aiming to profit from medium-term price swings</strong> rather than intraday noise.",
      "It needs less screen time than day trading, but you carry overnight and weekend risk, including gaps and swap costs. It suits people who can't watch charts all day.",
    ],
    related: ["day-trading", "position-trading", "swap", "gap"],
  },
  {
    slug: "position-trading",
    term: "Position trading",
    category: "basics",
    short: "Holding trades for weeks to months based on a long-term view.",
    body: [
      "<strong>Position trading holds trades for weeks, months or longer, following major trends</strong> and largely ignoring short-term wobbles.",
      "It relies more on fundamentals and big-picture analysis, and involves fewer, larger decisions. Financing costs matter over such long holds, so they factor into the plan.",
    ],
    related: ["swing-trading", "trend", "fundamental-analysis", "overnight-financing"],
  },
  {
    slug: "algorithmic-trading",
    term: "Algorithmic trading",
    category: "basics",
    short: "Using automated programs to place trades by predefined rules.",
    body: [
      "<strong>Algorithmic trading uses computer programs to enter and exit trades automatically based on coded rules</strong>, removing emotion from execution.",
      "It ranges from simple retail 'expert advisors' to sophisticated institutional systems. Automation doesn't guarantee profit — a flawed strategy just loses money faster, and bugs or bad data can be costly.",
    ],
    related: ["backtesting", "trading-plan", "expectancy"],
  },
  {
    slug: "copy-trading",
    term: "Copy trading",
    category: "basics",
    short: "Automatically mirroring the trades of another, more experienced trader.",
    body: [
      "<strong>Copy trading lets you automatically replicate the trades of another trader in your own account</strong>, in proportion to what you allocate.",
      "It can be a way to learn, but past performance of a lead trader is no promise of future results, and you inherit their risk-taking. Many popular copied traders take large risks that don't suit everyone.",
    ],
    related: ["risk-management", "drawdown", "trading-plan"],
  },

  /* -------------------------------------------------- ACCOUNTS / BROKER */
  {
    slug: "demo-account",
    term: "Demo account",
    category: "basics",
    short: "A practice account with virtual funds to trade in real market conditions.",
    body: [
      "A <strong>demo account lets you trade live market prices with virtual money</strong>, so you can learn a platform and test strategies without financial risk.",
      "It is the safest way to start. The catch is psychological: risking fake money feels nothing like risking your own, so demo success doesn't guarantee live success.",
    ],
    related: ["paper-trading", "backtesting", "regulation"],
  },
  {
    slug: "regulation",
    term: "Regulation",
    category: "basics",
    short: "Oversight of brokers by financial authorities to protect clients.",
    body: [
      "<strong>Regulation means a broker is licensed and supervised by a financial authority that sets rules on client-fund safety, fair dealing and risk warnings.</strong>",
      "Trading with a well-regulated broker gives you protections like segregated funds and dispute channels. An unregulated or offshore broker may offer higher leverage and bonuses, but far weaker safeguards.",
    ],
    related: ["segregated-funds", "negative-balance-protection", "leverage-ratio", "demo-account"],
  },
  {
    slug: "segregated-funds",
    term: "Segregated funds",
    category: "basics",
    short: "Client money kept separate from the broker's own operating money.",
    body: [
      "<strong>Segregated funds are client deposits held in separate accounts, apart from the broker's own money.</strong> If the broker fails, your funds shouldn't be used to pay its creditors.",
      "It is a core protection offered by reputable, regulated brokers. Its absence is a serious red flag when choosing where to trade.",
    ],
    related: ["regulation", "negative-balance-protection", "demo-account"],
  },
  {
    slug: "slippage-tolerance",
    term: "Slippage tolerance",
    category: "orders",
    short: "A setting limiting how much price slippage you'll accept on an order.",
    body: [
      "<strong>Slippage tolerance lets you cap how far from your intended price an order can fill before it is rejected.</strong> Set it tight and an order may not execute in fast markets; set it wide and you risk worse fills.",
      "It is a practical control for volatile conditions, letting you decide whether certainty of execution or price matters more for a given trade.",
    ],
    related: ["slippage", "market-order", "volatility"],
  },
  {
    slug: "weekend-risk",
    term: "Weekend risk (gap risk)",
    category: "risk",
    short: "The danger that price gaps over the weekend past your stop-loss.",
    body: [
      "<strong>Weekend risk is the chance that news over a closed weekend causes a market to reopen far from Friday's close, gapping past your stop-loss.</strong>",
      "Because most markets don't trade continuously through the weekend, a stop can't protect you during the gap. Some traders reduce size or close positions before the weekend to manage this.",
    ],
    related: ["gap", "stop-loss", "swing-trading", "slippage"],
  },
  {
    slug: "lot-size",
    term: "Lot size",
    category: "risk",
    short: "The quantity of a trade, which sets how much each pip is worth.",
    body: [
      "<strong>Lot size is how big your trade is, and it directly sets your pip value and therefore your risk.</strong> Standard, mini, micro and nano lots step down in size by factors of ten.",
      "Choosing lot size to match your stop distance and risk-per-trade percentage is the practical output of position sizing. Oversizing is one of the fastest ways to blow an account.",
    ],
    related: ["lot", "pip-value", "position-sizing", "leverage"],
  },
  {
    slug: "maintenance-margin",
    term: "Maintenance margin",
    category: "risk",
    short: "The minimum equity you must keep to hold a leveraged position open.",
    body: [
      "<strong>Maintenance margin is the minimum equity you must maintain to keep a position open.</strong> Fall below it and you face a margin call, then a stop-out.",
      "It is lower than the initial margin needed to open the trade. The gap between them is your cushion; the smaller it is, the closer you are trading to the edge.",
    ],
    related: ["margin", "margin-call", "liquidation", "equity"],
  },
  {
    slug: "unrealised-pnl",
    term: "Unrealised P&L",
    category: "basics",
    short: "The paper profit or loss on trades you still hold open.",
    body: [
      "<strong>Unrealised P&L is the profit or loss on your open positions at current prices — it isn't locked in until you close.</strong> It moves up and down with the market.",
      "It is real in the sense that it affects your equity and margin, but it is not money in the bank until the trade is closed. Beginners often spend unrealised gains in their heads too soon.",
    ],
    related: ["pnl", "equity", "balance", "take-profit"],
  },
  {
    slug: "rollover",
    term: "Rollover",
    category: "costs",
    short: "The daily process of carrying a position past the session close.",
    body: [
      "<strong>Rollover is the daily point at which open positions are 'rolled' into the next day, triggering the swap interest adjustment.</strong> In forex it typically happens at 5pm New York time.",
      "Holding through rollover means paying or receiving swap. On Wednesdays many brokers apply triple swap to account for the weekend settlement, which can surprise traders who don't expect it.",
    ],
    related: ["swap", "overnight-financing", "carry-trade"],
  },
  {
    slug: "leverage-risk",
    term: "Leverage risk",
    category: "risk",
    short: "The danger that leverage magnifies losses as much as gains.",
    body: [
      "<strong>Leverage risk is the core danger of leveraged trading: the same borrowed exposure that magnifies profits magnifies losses just as much.</strong>",
      "A small adverse move can trigger a margin call or wipe out your deposit. This is a leading reason the majority of retail traders lose money, and why using less leverage than offered is usually wiser.",
    ],
    related: ["leverage", "margin-call", "drawdown", "risk-management"],
  },
];

/* ---------------------------------------------------------------- HELPERS */

/** All glossary terms, sorted alphabetically by term. */
export function getGlossary(): GlossaryTerm[] {
  return [...GLOSSARY].sort((a, b) =>
    a.term.localeCompare(b.term, "en", { sensitivity: "base" }),
  );
}

/** Look up a single term by slug. */
export function getTerm(slug: string): GlossaryTerm | undefined {
  return GLOSSARY.find((t) => t.slug === slug);
}

/** All slugs, for generateStaticParams. */
export function getAllTermSlugs(): string[] {
  return GLOSSARY.map((t) => t.slug);
}

/** Total number of terms. */
export function getTermCount(): number {
  return GLOSSARY.length;
}

/** The first letter used to bucket a term (A–Z, digits under '#'). */
function firstLetter(term: string): string {
  const c = term.trim().charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
}

export interface LetterGroup {
  letter: string;
  terms: GlossaryTerm[];
}

/** Terms grouped by first letter, letters sorted A–Z (then '#'). */
export function groupByLetter(): LetterGroup[] {
  const map = new Map<string, GlossaryTerm[]>();
  for (const t of getGlossary()) {
    const letter = firstLetter(t.term);
    if (!map.has(letter)) map.set(letter, []);
    map.get(letter)!.push(t);
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => {
      if (a === "#") return 1;
      if (b === "#") return -1;
      return a.localeCompare(b);
    })
    .map(([letter, terms]) => ({ letter, terms }));
}

/** The distinct letters that have at least one term (for the A–Z index). */
export function getUsedLetters(): string[] {
  return groupByLetter().map((g) => g.letter);
}

export interface CategoryGroup {
  category: GlossaryCategory;
  label: string;
  terms: GlossaryTerm[];
}

/** Terms grouped by category. */
export function groupByCategory(): CategoryGroup[] {
  const order: GlossaryCategory[] = [
    "basics",
    "orders",
    "analysis",
    "risk",
    "instruments",
    "costs",
    "psychology",
    "smc",
  ];
  return order
    .map((category) => ({
      category,
      label: CATEGORY_LABELS[category],
      terms: getGlossary().filter((t) => t.category === category),
    }))
    .filter((g) => g.terms.length > 0);
}

/**
 * Resolve related terms for a given term. Falls back to same-category terms
 * when no explicit related[] is set, so every page has internal links.
 */
export function getRelatedTerms(term: GlossaryTerm, limit = 6): GlossaryTerm[] {
  const out: GlossaryTerm[] = [];
  const seen = new Set<string>([term.slug]);

  for (const slug of term.related ?? []) {
    const t = getTerm(slug);
    if (t && !seen.has(t.slug)) {
      out.push(t);
      seen.add(t.slug);
    }
  }

  if (out.length < limit) {
    for (const t of GLOSSARY) {
      if (out.length >= limit) break;
      if (t.category === term.category && !seen.has(t.slug)) {
        out.push(t);
        seen.add(t.slug);
      }
    }
  }

  return out.slice(0, limit);
}
