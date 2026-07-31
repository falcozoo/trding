import type { Course } from "../courses";

export const scalpingCourse: Course = {
  id: "scalping-intraday",
  title: "Scalping & Intraday Trading",
  tagline: "Fast, disciplined trading on the lower timeframes.",
  description:
    "Learn scalping and intraday trading from the ground up: choose your timeframes, trade the London and New York sessions, and use the opening range, Asian range and previous-day high and low as your daily reference levels.",
  level: "advanced",
  accent: "amber",
  modules: [
    /* ============================================================ */
    /* 1. Introduction to Scalping                                  */
    /* ============================================================ */
    {
      slug: "introduction-scalping",
      title: "Introduction to Scalping",
      summary:
        "What scalping is, why it is the hardest style to master, and how honest expectations about costs and discipline set you up to learn it properly.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to explain what scalping is, how it differs from other styles, and why costs and discipline decide whether it works.",
      blocks: [
        {
          kind: "text",
          html: "Scalping is a style of trading that takes many <strong>small, quick trades</strong> on the lower timeframes, aiming to capture a handful of pips or points at a time. Intraday trading is the broader idea of opening and closing positions within the same day so you carry no overnight risk. Both live on the fast end of the market.",
        },
        {
          kind: "image",
          src: "/learn/scalping/01-intro.png",
          alt: "Many small quick scalping trades on a low timeframe",
          caption:
            "Scalping stacks many small trades — each one tiny, each one demanding attention.",
        },
        {
          kind: "heading",
          text: "Why scalping is the hardest style",
        },
        {
          kind: "text",
          html: "Beginners are often drawn to scalping because it looks exciting, but it is the <strong>hardest style</strong> to do well. Decisions come in seconds, mistakes compound quickly, and there is little time to think. Most traders are better served learning higher-timeframe trading first, where the pace is forgiving and the lessons are the same.",
        },
        {
          kind: "text",
          html: "The uncomfortable truth is that <strong>costs matter enormously</strong> when your target is small. Every trade pays the spread and often a commission, so if you aim for five pips and the spread is one pip, you are already giving away a fifth of the move before price does anything. Scalping only works on <strong>low-cost instruments</strong> and with a broker whose execution you trust.",
        },
        {
          kind: "list",
          items: [
            "Scalping = many small trades on 1-minute and 5-minute charts.",
            "Intraday = flat by the end of the day, no overnight exposure.",
            "Spread and commission eat directly into every small target.",
            "Discipline and focus matter more here than in any other style.",
          ],
        },
        {
          kind: "key",
          text: "Scalping is the fastest, hardest style — it rewards discipline and low costs, and punishes impatience and overtrading.",
        },
        {
          kind: "text",
          html: "This course builds the pieces in order: timeframes, then the instruments and sessions that suit fast trading, then a set of intraday setups, and finally risk and a written plan. Nothing here is a signal or a promise — no setup wins every time, and <strong>risk management</strong> is what keeps a bad run survivable.",
        },
      ],
    },

    /* ============================================================ */
    /* 2. Choosing Your Timeframes                                  */
    /* ============================================================ */
    {
      slug: "choosing-timeframes",
      title: "Choosing Your Timeframes",
      summary:
        "How to pair a higher timeframe for direction with a lower timeframe for entries, and why trading a single chart in isolation leads to noise.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to set up a multi-timeframe workflow that gives you context before you drop down to execute.",
      blocks: [
        {
          kind: "text",
          html: "No scalper should trade a single chart in isolation. The professional approach is <strong>multi-timeframe analysis</strong>: use a higher timeframe to decide the direction and the key levels, then drop down to a lower timeframe to time the entry. The higher chart is your map; the lower chart is your entry trigger.",
        },
        {
          kind: "image",
          src: "/learn/scalping/02-timeframes.png",
          alt: "Higher timeframe for direction, lower for entries",
          caption:
            "Direction from above, entries from below — two charts working together.",
        },
        {
          kind: "heading",
          text: "The higher timeframe: direction",
        },
        {
          kind: "text",
          html: "Start on something like the 1-hour or 15-minute chart to establish <strong>bias and levels</strong>. Is structure trending up, down, or ranging? Where are the obvious highs, lows and round numbers? This step keeps you from taking a perfect-looking 1-minute buy straight into a wall of higher-timeframe resistance.",
        },
        {
          kind: "heading",
          text: "The lower timeframe: entries",
        },
        {
          kind: "text",
          html: "Once you know the direction, drop to the 1-minute or 5-minute chart to <strong>time the trade</strong>. The lower timeframe lets you enter with a tight stop, but it is also far noisier — plenty of moves there are meaningless wiggles. Only act on the lower chart when it agrees with the higher one.",
        },
        {
          kind: "list",
          items: [
            "Higher timeframe (1H / 15M): trend, bias and key levels.",
            "Lower timeframe (5M / 1M): precise entries and tight stops.",
            "Trade the lower chart only in the direction the higher one supports.",
            "More screens do not mean more trades — most of the time you wait.",
          ],
        },
        {
          kind: "key",
          text: "Direction from the higher timeframe, entries from the lower — a scalp aligned with the bigger picture has the odds tilted its way.",
        },
      ],
    },

    /* ============================================================ */
    /* 3. Scalping the 1-Minute                                     */
    /* ============================================================ */
    {
      slug: "scalping-1-minute",
      title: "Scalping the 1-Minute",
      summary:
        "How the 1-minute chart works for scalping — tight stops, small targets, and the relentless discipline it demands.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to describe a basic 1-minute scalp with honest entry, stop and target logic and know why it is so demanding.",
      blocks: [
        {
          kind: "text",
          html: "The 1-minute chart is the fastest common scalping timeframe. Each candle represents just sixty seconds, so setups appear and vanish quickly. The appeal is the <strong>tight stop</strong>: because swings are small, your risk per trade in price terms can be very small, letting you size the position precisely.",
        },
        {
          kind: "image",
          src: "/learn/scalping/03-1min.png",
          alt: "1-minute scalp with tight stop and small target",
          caption:
            "A 1-minute scalp: small stop below the swing, small target above.",
        },
        {
          kind: "heading",
          text: "Entry, stop and target",
        },
        {
          kind: "text",
          html: "A simple 1-minute scalp aligned with the higher-timeframe trend might wait for a small pullback to a level, enter as buyers return, and place the <strong>stop just beyond</strong> the swing that formed the entry. The target is modest — often the next minor level or a fixed multiple of the risk. The whole trade can be over in minutes.",
        },
        {
          kind: "text",
          html: "The catch is cost. On a 1-minute scalp your target might be only a few pips, so the <strong>spread and commission</strong> take a large share of every winner and add to every loser. This is why 1-minute scalping is realistic only on the tightest instruments and why so many people quietly lose money doing it.",
        },
        {
          kind: "list",
          items: [
            "Entry: a pullback or micro-break in line with the higher-timeframe bias.",
            "Stop: just beyond the swing that defines the setup — never widened later.",
            "Target: a nearby level or a fixed reward-to-risk multiple.",
            "Reality: costs are proportionally large, so be selective.",
          ],
        },
        {
          kind: "key",
          text: "The 1-minute chart gives tight stops but tiny targets — the smaller your target, the more spread and commission decide your result.",
        },
        {
          kind: "text",
          html: "Because the pace is so fast, the 1-minute chart magnifies the danger of <strong>overtrading</strong>. Taking every wiggle turns a small edge into a stream of costs. Fewer, higher-quality 1-minute trades will almost always beat a frantic click-fest.",
        },
      ],
    },

    /* ============================================================ */
    /* 4. Scalping the 5-Minute                                     */
    /* ============================================================ */
    {
      slug: "scalping-5-minute",
      title: "Scalping the 5-Minute",
      summary:
        "Why the 5-minute chart is a more forgiving home for most scalpers, and how a simple moving average can frame trend and pullbacks.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to run a basic 5-minute scalp using structure and a moving average to filter for trend-aligned entries.",
      blocks: [
        {
          kind: "text",
          html: "The 5-minute chart is a more <strong>forgiving home</strong> for most scalpers. Candles carry more information, spread is a smaller fraction of a typical target, and there is a little more time to think. Many traders who fail on the 1-minute do far better simply by slowing down to the 5-minute.",
        },
        {
          kind: "image",
          src: "/learn/scalping/04-5min.png",
          alt: "5-minute scalp with a moving average",
          caption:
            "A moving average on the 5-minute helps frame trend and pullback entries.",
        },
        {
          kind: "heading",
          text: "Using a moving average",
        },
        {
          kind: "text",
          html: "A single moving average — say a 20 or 50 period — can act as a simple <strong>trend filter</strong>. When price holds above a rising average you favour longs; below a falling average you favour shorts. The average is not magic; it just summarises recent price so you avoid fighting the immediate direction.",
        },
        {
          kind: "heading",
          text: "A pullback-to-average scalp",
        },
        {
          kind: "text",
          html: "A common 5-minute approach waits for price to <strong>pull back to the average</strong> in a trend, then looks for a candle showing the trend resuming. The stop sits beyond the pullback's swing, and the target is a nearby level or a fixed reward multiple. It works because you are buying a dip in an uptrend, not chasing an extended move.",
        },
        {
          kind: "list",
          items: [
            "Trend filter: price above a rising MA → look for longs; below a falling MA → shorts.",
            "Entry: a pullback into the average that shows the trend resuming.",
            "Stop: beyond the pullback swing, sized to a fixed small risk.",
            "Remember a moving average lags — it confirms, it does not predict.",
          ],
        },
        {
          kind: "key",
          text: "The 5-minute chart trades a little slower and cleaner than the 1-minute — for most people that is a feature, not a compromise.",
        },
      ],
    },

    /* ============================================================ */
    /* 5. Scalping Gold (XAUUSD)                                    */
    /* ============================================================ */
    {
      slug: "scalping-gold",
      title: "Scalping Gold (XAUUSD)",
      summary:
        "Gold moves fast and wide — how its volatility and spread shape scalping, and why wider stops and smaller size are the honest answer.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to explain why gold's volatility forces wider stops and smaller position size, and how to adapt targets accordingly.",
      blocks: [
        {
          kind: "text",
          html: "Gold, quoted as XAUUSD, is a favourite scalping instrument because it <strong>moves fast and far</strong>. Big intraday ranges mean opportunity, but that same volatility cuts both ways: gold can spike against you just as quickly as it runs in your favour.",
        },
        {
          kind: "image",
          src: "/learn/scalping/05-gold.png",
          alt: "Scalping volatile gold with wider stops",
          caption:
            "Gold's larger swings demand wider stops — and therefore smaller position size.",
        },
        {
          kind: "heading",
          text: "Volatility changes the maths",
        },
        {
          kind: "text",
          html: "Because gold swings widely, a stop that is too tight gets clipped by ordinary noise. The honest response is a <strong>wider stop</strong> placed beyond a genuine level, and then a <strong>smaller position size</strong> so that the money at risk stays the same fixed percentage. You do not risk more just because the instrument is bigger.",
        },
        {
          kind: "heading",
          text: "Cost and news sensitivity",
        },
        {
          kind: "text",
          html: "Gold's spread is usually wider than on major forex pairs, so factor that into every target. Gold is also acutely <strong>sensitive to news</strong> — around US data and central-bank events it can gap and whipsaw. Many scalpers simply stand aside through those releases rather than gamble on the reaction.",
        },
        {
          kind: "list",
          items: [
            "Wider natural swings → wider stops beyond real levels.",
            "Wider stop → smaller position, so risk in money stays fixed.",
            "Spread is larger than majors — targets must clear it comfortably.",
            "High news sensitivity — treat scheduled releases with caution.",
          ],
        },
        {
          kind: "key",
          text: "Gold rewards respect: match its wide swings with wider stops and smaller size, never with more risk.",
        },
      ],
    },

    /* ============================================================ */
    /* 6. Scalping Forex                                            */
    /* ============================================================ */
    {
      slug: "scalping-forex",
      title: "Scalping Forex",
      summary:
        "Why low-spread major pairs suit scalping, how liquidity and session overlaps drive movement, and where the costs hide.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to pick suitable forex pairs for scalping and understand how spread and liquidity affect the odds.",
      blocks: [
        {
          kind: "text",
          html: "Forex majors are the classic scalping instruments because the most liquid pairs carry the <strong>tightest spreads</strong>. When your target is small, a low spread is not a nice-to-have — it is the difference between a viable edge and a slow bleed. Pairs like EURUSD and USDJPY are popular precisely for this reason.",
        },
        {
          kind: "image",
          src: "/learn/scalping/06-forex.png",
          alt: "Scalping low-spread forex majors",
          caption:
            "Liquid majors keep spreads tight — essential when targets are only a few pips.",
        },
        {
          kind: "heading",
          text: "Liquidity and the clock",
        },
        {
          kind: "text",
          html: "Forex movement is not evenly spread across the day. The <strong>session overlaps</strong> — especially London into New York — bring the deepest liquidity and the cleanest moves, while quiet hours can be choppy and directionless. Scalping during dead periods usually means paying spread for nothing.",
        },
        {
          kind: "heading",
          text: "Where the costs hide",
        },
        {
          kind: "text",
          html: "Beware pairs that look tempting but carry a <strong>wide spread</strong>, such as many exotic and cross pairs. A pair might trend beautifully, yet a three-pip spread on a five-pip target leaves almost nothing. Watch out too for spread widening around news and at the daily rollover, when even majors can briefly become expensive to trade.",
        },
        {
          kind: "list",
          items: [
            "Favour the most liquid majors for the tightest spreads.",
            "Trade active hours — session overlaps offer the cleanest moves.",
            "Exotic and cross pairs often hide their cost in a wide spread.",
            "Spreads can widen around news and at rollover — expect it.",
          ],
        },
        {
          kind: "key",
          text: "In forex scalping the spread is the enemy — favour liquid majors and active hours so the cost of trading stays small.",
        },
      ],
    },

    /* ============================================================ */
    /* 7. Scalping Indices (NAS100, US30)                           */
    /* ============================================================ */
    {
      slug: "scalping-indices",
      title: "Scalping Indices (NAS100, US30)",
      summary:
        "How stock indices like NAS100 and US30 offer strong momentum after the cash open, and why that energy comes with real risk.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to explain why index momentum concentrates around the open and how to approach it with sensible risk.",
      blocks: [
        {
          kind: "text",
          html: "Stock indices such as NAS100 (the Nasdaq 100) and US30 (the Dow) are prized by scalpers for their <strong>strong momentum</strong>, particularly around the US cash-market open. When the equity session begins, volume surges and moves can be fast and directional.",
        },
        {
          kind: "image",
          src: "/learn/scalping/07-indices.png",
          alt: "Scalping index momentum after the open",
          caption:
            "The cash open often injects a burst of momentum into index charts.",
        },
        {
          kind: "heading",
          text: "The energy of the open",
        },
        {
          kind: "text",
          html: "Around the open, the day's news and overnight positioning are digested at once, producing a <strong>momentum burst</strong>. Scalpers try to ride the initial thrust or trade the first clean pullback. But the same energy that creates opportunity also creates violent two-way whipsaws that can stop you out in both directions.",
        },
        {
          kind: "heading",
          text: "Respecting index risk",
        },
        {
          kind: "text",
          html: "Indices move in points, and a single point can be worth a meaningful amount, so <strong>position sizing</strong> deserves extra care. It is easy to underestimate how quickly a fast index can travel against a trade. Keep size modest, keep the stop at a logical level, and let the fixed-risk rule decide how many contracts or lots you carry.",
        },
        {
          kind: "list",
          items: [
            "Momentum concentrates around the cash open and major news.",
            "The first thrust and first pullback are common scalping targets.",
            "Whipsaws are frequent — the open cuts both ways.",
            "Size for the point value, not the price — risk stays fixed.",
          ],
        },
        {
          kind: "key",
          text: "Indices offer momentum energy at the open — treat that energy as risk to be sized down, not as free money.",
        },
      ],
    },

    /* ============================================================ */
    /* 8. London Session Strategy                                   */
    /* ============================================================ */
    {
      slug: "london-session",
      title: "London Session Strategy",
      summary:
        "Why the London session brings a surge of liquidity and volatility, and how scalpers approach its opening moves.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to describe the character of the London session and a simple way to trade its early volatility.",
      blocks: [
        {
          kind: "text",
          html: "The London session is the largest forex trading centre and its open injects a wave of <strong>liquidity and volatility</strong> into the market. After the quieter Asian hours, London often sets the tone for the day, expanding ranges and giving trends their first real push.",
        },
        {
          kind: "image",
          src: "/learn/scalping/08-london.png",
          alt: "The London session trading window",
          caption:
            "London brings a surge of activity after the quieter Asian hours.",
        },
        {
          kind: "heading",
          text: "The London character",
        },
        {
          kind: "text",
          html: "A frequent pattern is that London <strong>expands the range</strong> set overnight, sometimes sweeping the Asian high or low before choosing a direction. Scalpers watch those overnight extremes and the reaction to them, since a clean sweep and reversal, or a decisive break, can define the session's move.",
        },
        {
          kind: "text",
          html: "Session times are only <strong>illustrative</strong>. London roughly opens around 08:00 UK time, but what you see on your platform depends on your broker's server time and shifts with daylight saving. Always confirm the actual hours on your own chart rather than trusting a fixed number from a course.",
        },
        {
          kind: "list",
          items: [
            "London adds deep liquidity and expands overnight ranges.",
            "The Asian high and low are natural reference points to watch.",
            "Sweeps of those extremes can precede the real directional move.",
            "Session hours shift with daylight saving and broker server time.",
          ],
        },
        {
          kind: "key",
          text: "London wakes the market up — watch the overnight extremes, and always verify the session hours on your own platform.",
        },
      ],
    },

    /* ============================================================ */
    /* 9. New York Session Strategy                                 */
    /* ============================================================ */
    {
      slug: "new-york-session",
      title: "New York Session Strategy",
      summary:
        "How the New York session overlaps London, why US data drives it, and how scalpers navigate its news-heavy character.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to describe the New York session, its overlap with London, and the role of scheduled US news.",
      blocks: [
        {
          kind: "text",
          html: "The New York session is the second great pillar of the trading day. Its early hours <strong>overlap with London</strong>, and this overlap is often the most liquid and active window of all, as the two largest financial centres trade at the same time.",
        },
        {
          kind: "image",
          src: "/learn/scalping/09-newyork.png",
          alt: "The New York session trading window",
          caption:
            "New York overlaps London early on, creating the day's busiest window.",
        },
        {
          kind: "heading",
          text: "Driven by US news",
        },
        {
          kind: "text",
          html: "New York is heavily shaped by <strong>US economic data</strong> — employment figures, inflation prints and central-bank commentary. These releases can produce sharp, fast moves and, just as often, brutal whipsaws. Many scalpers avoid trading in the seconds around a scheduled release and wait for the dust to settle.",
        },
        {
          kind: "text",
          html: "Later in the session, once London closes, liquidity thins and moves can lose conviction. As with London, the exact times are <strong>illustrative only</strong>: New York roughly opens around 08:00 New York time, but the hours you see depend on your broker's server clock and daylight saving. Confirm them yourself.",
        },
        {
          kind: "list",
          items: [
            "The London–New York overlap is typically the busiest window.",
            "US data releases drive sharp moves and frequent whipsaws.",
            "Trading the exact moment of a release is a gamble, not an edge.",
            "Times are illustrative — they shift with daylight saving and server time.",
          ],
        },
        {
          kind: "key",
          text: "New York runs on US news — respect the releases, favour the London overlap, and confirm the real session hours yourself.",
        },
      ],
    },

    /* ============================================================ */
    /* 10. Asian Range Breakout                                     */
    /* ============================================================ */
    {
      slug: "asian-range-breakout",
      title: "Asian Range Breakout",
      summary:
        "How the quiet Asian session builds a range that later sessions break, and the honest entry and stop logic for trading that break.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to mark the Asian range and describe a breakout trade with realistic entry, stop and failure logic.",
      blocks: [
        {
          kind: "text",
          html: "The Asian session is typically the quietest of the three, and price often drifts sideways in a relatively tight <strong>overnight range</strong>. That range becomes a reference: the high and low it prints are levels that later, busier sessions frequently test and break.",
        },
        {
          kind: "image",
          src: "/learn/scalping/10-asian-range.png",
          alt: "Breakout from the overnight Asian range",
          caption:
            "The overnight Asian range sets a high and low for later sessions to break.",
        },
        {
          kind: "heading",
          text: "The idea behind the setup",
        },
        {
          kind: "text",
          html: "The logic is that a quiet range stores energy. When London or New York arrives with real volume, price may <strong>break the range</strong> and run. A common approach marks the Asian high and low as a box, then waits for a decisive break beyond one edge to signal the day's direction.",
        },
        {
          kind: "heading",
          text: "Entry, stop and the honest catch",
        },
        {
          kind: "text",
          html: "An entry can be taken on a <strong>candle close</strong> beyond the range edge, or on a retest of that edge with a tighter stop. The stop logically sits back inside the range, since a return there means the break failed. The honest catch is the <strong>false breakout</strong>: ranges are magnets for stop hunts, and price often pokes beyond one edge only to reverse hard.",
        },
        {
          kind: "list",
          items: [
            "Mark the Asian high and low as a box before London opens.",
            "Entry: a decisive close beyond an edge, or a retest of it.",
            "Stop: back inside the range — a return means the break failed.",
            "False breaks are common; a close-based filter helps but never eliminates them.",
          ],
        },
        {
          kind: "key",
          text: "The Asian range stores energy for later sessions — but its edges attract false breaks, so define failure before you enter.",
        },
      ],
    },

    /* ============================================================ */
    /* 11. Opening Range Breakout                                   */
    /* ============================================================ */
    {
      slug: "opening-range-breakout",
      title: "Opening Range Breakout",
      summary:
        "The classic opening range breakout (ORB): how the first minutes of a session define a range, and how to trade its break honestly.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to define an opening range and describe the entry, stop and failure logic of an ORB trade.",
      blocks: [
        {
          kind: "text",
          html: "The opening range breakout, or <strong>ORB</strong>, is one of the best-known intraday setups. You take the high and low of the first few minutes after a session opens — often the first 5, 15 or 30 minutes — and treat that as the <strong>opening range</strong>. A break beyond it is your trade trigger.",
        },
        {
          kind: "image",
          src: "/learn/scalping/11-orb.png",
          alt: "Breakout from the opening range",
          caption:
            "The first minutes define a range; a decisive break sets the direction.",
        },
        {
          kind: "heading",
          text: "Why the open matters",
        },
        {
          kind: "text",
          html: "The open is when overnight news and orders hit the market at once, so it often sets the day's <strong>directional tone</strong>. The opening range captures that initial fight between buyers and sellers, and the side that wins the break frequently carries momentum into the session.",
        },
        {
          kind: "heading",
          text: "Entry, stop and target",
        },
        {
          kind: "text",
          html: "Enter on a <strong>break of the range</strong> — either the breakout candle's close or a retest of the broken edge. Place the stop on the opposite side of the opening range, since price trading back through it invalidates the idea. Targets are often a fixed reward multiple or the next daily level such as the previous day's high or low.",
        },
        {
          kind: "list",
          items: [
            "Define the range from the first 5–30 minutes after the open.",
            "Entry: a break of the range high (long) or low (short).",
            "Stop: the opposite side of the opening range.",
            "Beware the failed break — a tight range can whipsaw both edges.",
          ],
        },
        {
          kind: "key",
          text: "The opening range breakout trades the day's first decision — enter on the break, and let the far side of the range define your risk.",
        },
      ],
    },

    /* ============================================================ */
    /* 12. Previous Day High / Low                                  */
    /* ============================================================ */
    {
      slug: "previous-day-high-low",
      title: "Previous Day High / Low",
      summary:
        "Why the previous day's high and low are among the most-watched intraday levels, and how price tends to react to them.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to mark the previous day's high and low and read whether price is respecting or breaking them.",
      blocks: [
        {
          kind: "text",
          html: "The previous day's high and low — often written <strong>PDH and PDL</strong> — are among the most-watched levels in intraday trading. They mark the extremes of the last session, so a huge number of traders and orders reference them, which is exactly why price so often reacts there.",
        },
        {
          kind: "image",
          src: "/learn/scalping/12-pdh-pdl.png",
          alt: "Previous day high and low as key levels",
          caption:
            "Yesterday's high and low act as magnets and decision points for today.",
        },
        {
          kind: "heading",
          text: "Two ways price reacts",
        },
        {
          kind: "text",
          html: "At these levels price tends to do one of two things: <strong>reject and reverse</strong>, or <strong>break and run</strong>. A rejection back into yesterday's range suggests the level is holding; a clean break beyond it suggests the market wants to extend the range in that direction. Reading which is happening is the skill.",
        },
        {
          kind: "heading",
          text: "Using the levels",
        },
        {
          kind: "text",
          html: "Some traders fade a first test of the PDH or PDL, entering on signs of rejection with a stop just beyond the level. Others wait for a <strong>confirmed break</strong> and trade the continuation. Either way the level itself gives you a clean, logical place to put your stop, which is what makes PDH and PDL so useful.",
        },
        {
          kind: "list",
          items: [
            "Mark PDH and PDL before the session starts.",
            "Rejection back inside the range → the level is holding.",
            "A decisive break → the range may extend that way.",
            "The level offers a natural, tight place for the stop.",
          ],
        },
        {
          kind: "key",
          text: "Yesterday's high and low are shared reference points — price either rejects them or breaks them, and both tell you something.",
        },
      ],
    },

    /* ============================================================ */
    /* 13. Daily Range Trading                                      */
    /* ============================================================ */
    {
      slug: "daily-range-trading",
      title: "Daily Range Trading",
      summary:
        "How to fade the edges of an established daily range in quiet, non-trending conditions — and when this approach is dangerous.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to identify a ranging day and describe how mean-reversion trades at the edges work, and when to avoid them.",
      blocks: [
        {
          kind: "text",
          html: "Not every day trends. On many quiet sessions price oscillates inside a <strong>daily range</strong>, drifting between a high and a low without going anywhere. When conditions are clearly range-bound, a mean-reversion approach — fading the edges — can suit the environment.",
        },
        {
          kind: "image",
          src: "/learn/scalping/13-daily-range.png",
          alt: "Fading the edges of the daily range",
          caption:
            "In a range, the edges become sell-high and buy-low decision zones.",
        },
        {
          kind: "heading",
          text: "Fading the edges",
        },
        {
          kind: "text",
          html: "The idea is to <strong>sell near the top</strong> of the range and <strong>buy near the bottom</strong>, expecting price to rotate back toward the middle. Entries come on signs of rejection at the edge, stops sit just beyond it, and targets aim for the range midpoint or the opposite edge.",
        },
        {
          kind: "heading",
          text: "When ranges are a trap",
        },
        {
          kind: "text",
          html: "The danger is obvious and serious: <strong>ranges eventually break</strong>. Fading the edge of a range that is about to become a breakout puts you on exactly the wrong side of a fast move. This is why range trades need a tight stop beyond the edge and why you must stand aside the moment structure or a session open threatens to trend.",
        },
        {
          kind: "list",
          items: [
            "Only fade edges when the day is clearly range-bound.",
            "Sell rejections at the top, buy rejections at the bottom.",
            "Stop just beyond the edge — a break there ends the trade.",
            "Every range eventually breaks; do not marry the mean-reversion view.",
          ],
        },
        {
          kind: "key",
          text: "Range trading fades the edges back to the middle — but a range always breaks eventually, so keep stops tight and stay humble.",
        },
      ],
    },

    /* ============================================================ */
    /* 14. Risk Management in Scalping                              */
    /* ============================================================ */
    {
      slug: "risk-in-scalping",
      title: "Risk Management in Scalping",
      summary:
        "Why fixed small percentage risk and never widening a stop are the non-negotiable rules that keep fast trading survivable.",
      readingMinutes: 7,
      objective:
        "After this module you'll be able to apply a fixed small percentage risk to every scalp and understand why moving a stop is fatal.",
      blocks: [
        {
          kind: "text",
          html: "Risk management is what separates scalpers who last from those who blow up. Because scalping produces so many trades, any flaw in your risk is <strong>repeated relentlessly</strong>. The single most important rule is to risk a small, fixed percentage of your account on every single trade — commonly well under one percent.",
        },
        {
          kind: "image",
          src: "/learn/scalping/14-risk.png",
          alt: "Risk management rules for scalping",
          caption:
            "A fixed small risk per trade keeps any single loss — and any bad run — survivable.",
        },
        {
          kind: "heading",
          text: "Fixed risk decides your size",
        },
        {
          kind: "text",
          html: "The workflow runs one way: choose the stop at a <strong>logical level</strong> first, then size the position so that if that stop is hit you lose only your fixed small percentage. The stop distance is dictated by the chart; the position size adjusts to fit it. You never do this backwards by picking a size and then hunting for a stop that fits.",
        },
        {
          kind: "heading",
          text: "Never widen a stop",
        },
        {
          kind: "text",
          html: "The most destructive habit in trading is <strong>moving a stop</strong> further away to avoid taking a loss. It converts a small, planned loss into a large, unplanned one and it is how accounts are destroyed in a single trade. A stop is a promise: once placed, it only ever moves in your favour to lock in profit, never against you.",
        },
        {
          kind: "heading",
          text: "Costs and overtrading",
        },
        {
          kind: "text",
          html: "Scalping carries a hidden tax: the <strong>spread and commission</strong> on every trade. Because you trade so often, these costs accumulate into a serious drag, so your edge must be large enough to clear them repeatedly. This is also why <strong>overtrading</strong> is so dangerous — each extra low-quality trade adds cost and risk while adding no edge.",
        },
        {
          kind: "list",
          items: [
            "Risk a fixed small percentage on every trade — no exceptions.",
            "Set the stop at a logical level first, then size to fit it.",
            "Never widen a stop; a stop only moves to protect profit.",
            "Count costs and set a daily loss limit to curb overtrading.",
          ],
        },
        {
          kind: "key",
          text: "Fixed small risk and a stop you never widen are non-negotiable — everything else in scalping is secondary to protecting the account.",
        },
      ],
    },

    /* ============================================================ */
    /* 15. Building an Intraday Plan                                */
    /* ============================================================ */
    {
      slug: "intraday-plan",
      title: "Building an Intraday Plan",
      summary:
        "How to turn everything in this course into a simple five-step written intraday plan you can follow before, during and after the session.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to write a concrete intraday trading plan that defines your instruments, levels, setups, risk and review.",
      blocks: [
        {
          kind: "text",
          html: "Knowledge only helps if it becomes a <strong>repeatable routine</strong>. An intraday plan is a short written document that tells you what to trade, when, how, and — crucially — when to stop. Fast trading gives you no time to improvise, so the decisions must be made in advance, calmly.",
        },
        {
          kind: "image",
          src: "/learn/scalping/15-setup.png",
          alt: "A five-step intraday trading plan checklist",
          caption:
            "A five-step checklist turns scattered ideas into a routine you can follow.",
        },
        {
          kind: "heading",
          text: "A five-step plan",
        },
        {
          kind: "list",
          items: [
            "1. Instrument & session: which markets, and which hours you will trade.",
            "2. Levels: mark PDH, PDL, the Asian range and key round numbers.",
            "3. Setups: the specific ORB, pullback or range plays you will take.",
            "4. Risk: fixed small percentage, stop rules, and a hard daily loss limit.",
            "5. Review: log every trade and study the results afterwards.",
          ],
        },
        {
          kind: "text",
          html: "Notice that risk and a <strong>daily loss limit</strong> are built into the plan, not bolted on. Deciding in advance that you stop after a set loss for the day protects you from the emotional spiral that fuels overtrading — the single fastest way a scalper wrecks an account.",
        },
        {
          kind: "text",
          html: "Finally, keep a <strong>trading journal</strong>. Recording each trade, the reason for it and the outcome turns random screen time into feedback you can actually learn from. A plan you follow and review beats a clever idea you trade on impulse, every time.",
        },
        {
          kind: "key",
          text: "A written five-step plan — instrument, levels, setups, risk, review — is what turns scattered scalping ideas into a disciplined routine.",
        },
      ],
    },
  ],
};
