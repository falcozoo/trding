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
      readingMinutes: 11,
      objective:
        "After this module you'll be able to explain what scalping is, how it differs from other styles, and why costs and discipline decide whether it works.",
      blocks: [
        {
          kind: "text",
          html: "Scalping is a style of trading that takes many <strong>small, quick trades</strong> on the lower timeframes, aiming to capture a handful of pips or points at a time. Intraday trading is the broader idea of opening and closing positions within the same day so you carry no overnight risk. Both live on the fast end of the market, where a trade can open and close inside a few minutes and where your <strong>reaction time</strong> matters as much as your analysis.",
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
          kind: "example",
          title: "How costs eat a small scalp — the maths on a €1,000 account",
          steps: [
            "Your account is <strong>€1,000</strong> and you risk <strong>1%</strong> = €10 per trade. You scalp EUR/USD on the 1-minute chart with a spread of <strong>0.8 pips</strong> plus commission.",
            "You spot a micro-pullback and go long at <strong>1.08500</strong>, stop just below the swing at <strong>1.08450</strong> — a <strong>5-pip risk</strong>. To lose only €10 on 5 pips you size ~<strong>0.20 lots</strong> (€2 per pip).",
            "Your target is the next micro-level at <strong>1.08600</strong>, ~10 pips away — a clean <strong>2:1 reward</strong> on paper, €20 win versus €10 loss.",
            "Now count the cost. At 0.20 lots the <strong>0.8-pip spread</strong> costs ~€1.60 and commission adds ~€1.00 round-turn. That ~<strong>€2.60 tax</strong> is over a quarter of your €10 risk, taken on every single trade.",
            "So your real win is closer to €17 and your real loss closer to €12.60. Take <strong>20 such trades a day</strong> and costs alone drain ~€50 — a real 5% of the account — before your edge even shows up.",
            "The lesson: on tiny targets, <strong>cost is not a rounding error</strong>. It is the main thing standing between a positive edge and a slow bleed.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes when starting to scalp",
          items: [
            "<strong>Choosing scalping first because it looks exciting.</strong> It is the least forgiving style. Learn on higher timeframes where a mistake costs you minutes of thinking, not seconds.",
            "<strong>Ignoring the spread on a small target.</strong> A 1-pip spread on a 5-pip target gives away 20% before you start. If you cannot say your cost per trade in euros, you are not ready to scalp.",
            "<strong>Overtrading to feel productive.</strong> Every extra low-quality click adds cost and risk without adding edge. Ten forced trades usually beat you slower than one big loss.",
            "<strong>Trading a wide-spread or illiquid instrument.</strong> Exotics and thin CFDs can trend beautifully yet leave nothing after cost. Scalp only where the spread is genuinely tight.",
            "<strong>Expecting a signal to save you.</strong> No setup wins every time. Discipline and fixed risk keep a losing streak survivable — nothing else does.",
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
      readingMinutes: 11,
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
          kind: "example",
          title: "A two-chart scalp on a €1,000 account",
          steps: [
            "On the <strong>15-minute EUR/USD</strong> chart you read the higher-timeframe state: rising swings, price holding above the last swing low at <strong>1.08300</strong>. Bias is up — you only hunt longs.",
            "You mark one key level: the intraday support the higher chart keeps bouncing from at <strong>1.08400</strong>. That is where your lower-timeframe trigger must appear.",
            "You drop to the <strong>1-minute</strong> chart. Price dips to 1.08400 and prints a strong bullish close — buyers returning in line with the higher bias. You enter long at <strong>1.08420</strong>.",
            "Your stop sits just below the 1-minute swing at <strong>1.08380</strong> — a <strong>4-pip risk</strong>. Below there the setup is wrong and the higher-timeframe support has failed.",
            "Risk <strong>1% = €10</strong> on 4 pips means ~<strong>0.25 lots</strong> (€2.50 per pip). Target the next 15-minute micro-resistance at <strong>1.08500</strong>, ~8 pips away — roughly <strong>2:1</strong>.",
            "The higher chart gave you the direction and the level; the lower chart gave you the tight <strong>4-pip stop</strong>. Neither alone is a trade.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with multi-timeframe scalping",
          items: [
            "<strong>Trading the 1-minute in isolation.</strong> Without higher-timeframe context every wiggle looks like a signal. The lower chart is a trigger, never a compass.",
            "<strong>Taking a lower-timeframe buy into higher-timeframe resistance.</strong> A perfect 1-minute setup straight into a 1-hour wall is a trap, not an entry.",
            "<strong>Using timeframes that are too close together.</strong> A 5-minute 'context' chart for a 3-minute entry adds nothing. Keep a real gap — e.g. 15M/1M or 1H/5M.",
            "<strong>Flipping bias every candle.</strong> If you redraw your higher-timeframe direction each time the 1-minute ticks against you, you have no bias at all.",
            "<strong>Watching six charts and forcing trades on all of them.</strong> More screens means more temptation, not more edge. Most of the session you should be doing nothing.",
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
      readingMinutes: 11,
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
          kind: "example",
          title: "A 1-minute scalp on a €1,000 account",
          steps: [
            "Bias from the 15-minute chart is up. On the <strong>1-minute EUR/USD</strong> chart price pulls back to a micro-level at <strong>1.09000</strong> and prints a bullish rejection candle.",
            "You enter long at <strong>1.09010</strong>, stop just below the 1-minute swing at <strong>1.08980</strong> — a tight <strong>3-pip risk</strong>. A close below there and the setup is dead.",
            "Risk <strong>1% = €10</strong> on a 3-pip stop means ~<strong>0.33 lots</strong> (about €3.30 per pip). Position is small in money but large in lots because the stop is so tight.",
            "Target the next micro-resistance at <strong>1.09070</strong>, ~6 pips away — a <strong>2:1</strong> on paper: €20 win versus €10 risk.",
            "Now the cost check: a <strong>0.8-pip spread</strong> at 0.33 lots costs ~€2.60 plus commission. On a 6-pip target that tax is roughly a third of your gross reward — the trade only makes sense because the setup is genuinely clean.",
            "You take it or you skip it in seconds; there is no time to negotiate. The <strong>tiny target</strong> means one sloppy fill or one widened stop wipes out several good scalps.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes on the 1-minute chart",
          items: [
            "<strong>Taking every wiggle.</strong> The 1-minute prints dozens of tempting moves an hour; most are noise. Trading them all turns a small edge into a stream of costs.",
            "<strong>Widening the 3-pip stop 'to give it room'.</strong> On a tight scalp this instantly doubles your planned loss. The stop is a promise — it never moves against you.",
            "<strong>Chasing an extended move.</strong> Entering after price has already run means a worse fill, a wider stop and a target that is now too close. Wait for the pullback or skip it.",
            "<strong>Forgetting the spread is a big fraction of the target.</strong> A 6-pip target with a 1-pip spread starts 17% underwater. If costs are not comfortably clearable, there is no trade.",
            "<strong>Trading through news on the 1-minute.</strong> A single spike can blow past a 3-pip stop with slippage. Stand aside around scheduled releases.",
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
      readingMinutes: 11,
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
          kind: "example",
          title: "A 5-minute pullback-to-MA scalp on a €1,000 account",
          steps: [
            "On the <strong>5-minute GBP/USD</strong> chart price is trending up and holding above a rising <strong>20-period MA</strong>. Bias is long — you wait for a dip.",
            "Price pulls back to the average near <strong>1.27000</strong> and prints a bullish close showing the trend resuming. You enter long at <strong>1.27020</strong>.",
            "Stop goes just below the pullback swing at <strong>1.26960</strong> — a <strong>6-pip risk</strong>. A close there breaks the structure and the MA no longer supports the trade.",
            "Risk <strong>1% = €10</strong> on 6 pips means ~<strong>0.16 lots</strong> (about €1.60 per pip). The 5-minute stop is wider than a 1-minute one, so the position is smaller — risk in euros stays fixed.",
            "Target the prior 5-minute swing high at <strong>1.27140</strong>, ~12 pips away — a clean <strong>2:1</strong>: €20 potential versus €10 risk.",
            "Because the target is 12 pips, a <strong>1-pip spread</strong> is a smaller fraction than on a 1-minute scalp — one reason the 5-minute is friendlier: <strong>cost drag is lighter</strong> per trade.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes on the 5-minute chart",
          items: [
            "<strong>Treating the moving average as a signal by itself.</strong> A touch of the MA is not an entry. You still need a candle showing the trend actually resuming.",
            "<strong>Fighting the MA slope.</strong> Buying dips while the average is falling is countertrend guessing. Only take longs above a rising MA, shorts below a falling one.",
            "<strong>Forcing 1-minute pace onto the 5-minute.</strong> Setups form more slowly here. Clicking every candle because 'nothing is happening' throws away the chart's main advantage.",
            "<strong>Chasing the pullback that never comes.</strong> If price runs without pulling back to the average, let it go. Entering extended means a wider stop and worse reward.",
            "<strong>Ignoring that the MA lags.</strong> In a sudden reversal the average is still pointing the old way. Structure and levels override a smoothed line every time.",
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
      readingMinutes: 11,
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
          kind: "example",
          title: "A gold scalp sized for volatility on a €1,000 account",
          steps: [
            "On the <strong>5-minute XAUUSD</strong> chart gold is trending up. Price pulls back to an intraday support at <strong>2340.0</strong> and prints a bullish rejection. You enter long at <strong>2340.5</strong>.",
            "Because gold swings widely, a tight stop gets clipped by noise. You place the stop below the real level at <strong>2337.0</strong> — a <strong>3.5-point ($3.50) risk</strong>, wider than a forex scalp on purpose.",
            "Risk <strong>1% = €10</strong>. On a typical gold contract of $1 per point per 0.01 lot, a 3.5-point stop means you size ~<strong>0.03 lots</strong> so the loss stays near €10 — <strong>small size for a big instrument</strong>.",
            "Target the next 5-minute swing high at <strong>2347.5</strong>, ~7 points away — roughly <strong>2:1</strong> on the 3.5-point risk.",
            "Cost check: gold's spread is often <strong>2–4 points</strong>, far wider than a forex major. A 3-point spread on a 7-point target eats nearly half the gross reward, so the setup must be genuinely clean.",
            "You keep the <strong>same €10 risk</strong> as any other trade — gold's size never tempts you into risking more. Wider stop, smaller lots, fixed money.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes scalping gold",
          items: [
            "<strong>Using a forex-tight stop on gold.</strong> A 3-point stop that works on EUR/USD is noise on XAUUSD. Placing it too tight guarantees you get clipped before the move.",
            "<strong>Keeping the same lot size as a forex scalp.</strong> Gold's point value and range are bigger, so the same lots means far more risk. Size down every time.",
            "<strong>Forgetting the wide spread.</strong> A 3-point spread on a 6-point target starts you 50% underwater. Targets must clear the spread comfortably or skip the trade.",
            "<strong>Scalping straight through US data.</strong> Gold gaps and whipsaws violently around inflation and central-bank events. Many scalpers simply stand aside through the release.",
            "<strong>Revenge-sizing after a gold loss.</strong> A fast instrument makes it tempting to 'win it back' with bigger size. That is how one bad gold trade becomes a blown account.",
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
      readingMinutes: 11,
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
          kind: "example",
          title: "Comparing a major and an exotic on a €1,000 account",
          steps: [
            "You scalp <strong>EUR/USD</strong> in the London–New York overlap. Entry long at <strong>1.08500</strong>, stop at <strong>1.08460</strong> — a <strong>4-pip risk</strong>. Spread is a tight <strong>0.6 pips</strong>.",
            "Risk <strong>1% = €10</strong> on 4 pips means ~<strong>0.25 lots</strong>. Target <strong>1.08580</strong>, ~8 pips away, a <strong>2:1</strong>. The 0.6-pip spread costs ~€1.50 — small next to an €20 gross target.",
            "Now the same idea on an exotic like <strong>GBP/NZD</strong> with an <strong>8-pip spread</strong>. To keep a 2:1 you would need a much larger target, and the spread alone (~€ per pip × 8) swallows a chunk of every trade.",
            "On the exotic your 8-pip target starts fully underwater from the spread — you need price to move 8 pips just to break even before any profit exists.",
            "Same account, same 1% risk, wildly different odds: the <strong>tight-spread major</strong> leaves room for an edge; the wide-spread exotic taxes you into the ground.",
            "Rule of thumb: if the spread is more than ~10–15% of your target, the pair is <strong>too expensive to scalp</strong>.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes scalping forex",
          items: [
            "<strong>Scalping in dead hours.</strong> Trading the quiet post–New-York lull means paying spread into choppy, directionless price. Favour the overlap.",
            "<strong>Falling for a trending exotic.</strong> A pair can trend beautifully and still leave nothing after an 8-pip spread. Liquidity and cost beat a pretty chart.",
            "<strong>Ignoring spread widening at news and rollover.</strong> Even majors briefly blow out to several pips. A stop placed into that widening gets hit at the worst possible price.",
            "<strong>Assuming all majors are equal.</strong> EUR/USD and USD/JPY are typically tighter than GBP or commodity crosses. Check the live spread before you commit.",
            "<strong>Counting only the loss, not the cost.</strong> Twenty scalps a day at ~€1.50 spread each is €30 of pure drag. Your edge must clear that repeatedly.",
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
      readingMinutes: 11,
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
          kind: "example",
          title: "A NAS100 open-momentum scalp on a €1,000 account",
          steps: [
            "The US cash open fires and <strong>NAS100</strong> thrusts up. Price makes a first pullback to a micro-level at <strong>18,000</strong> and holds. You enter long at <strong>18,004</strong>.",
            "Your stop sits below the pullback low at <strong>17,984</strong> — a <strong>20-point risk</strong>. Indices move in points, and 20 points is a realistic swing on this fast instrument.",
            "Say your broker's NAS100 is worth about <strong>€0.10 per point per 0.1 lot</strong>. Risk <strong>1% = €10</strong> on a 20-point stop means you carry roughly <strong>0.05 lots</strong> so a hit costs ~€10.",
            "Target the prior high near <strong>18,044</strong>, ~40 points away — a <strong>2:1</strong>: €20 potential versus €10 risk.",
            "The catch is speed: the open can <strong>whipsaw both edges</strong>, spiking through 17,984 and reversing in seconds. That is why size stays modest and the stop stays at a logical level, never widened.",
            "Because a single point carries real money, you size for the <strong>point value</strong>, not the big index number — the €10 risk is what decides your lots.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes scalping indices",
          items: [
            "<strong>Sizing off the price, not the point value.</strong> An 18,000 number looks huge, but risk is set by points × value. Ignore the headline figure and size to your €10.",
            "<strong>Chasing the opening thrust.</strong> Jumping in after the first spike means a worse fill and a wider stop. Wait for the first pullback to hold.",
            "<strong>Underestimating whipsaws.</strong> The open routinely stops out both longs and shorts within minutes. A stop too tight for the noise gets shredded.",
            "<strong>Trading full size right at the bell.</strong> The most violent moves come in the first minutes. Smaller size there, or a few minutes' patience, saves accounts.",
            "<strong>Holding a scalp into a sudden reversal.</strong> Index momentum flips fast. If the level fails, take the small planned loss instead of hoping.",
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
      readingMinutes: 11,
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
          kind: "example",
          title: "A London sweep-and-reverse scalp on a €1,000 account",
          steps: [
            "Before London opens you mark the overnight <strong>Asian range</strong> on EUR/USD: high <strong>1.08600</strong>, low <strong>1.08500</strong>. These are your reference extremes.",
            "London opens and price <strong>sweeps the Asian low</strong>, spiking to 1.08480 then snapping back above 1.08500 on a strong bullish close — a classic stop-hunt reversal.",
            "You enter long at <strong>1.08520</strong>, stop below the sweep low at <strong>1.08470</strong> — a <strong>5-pip risk</strong>. Back below there means the reversal failed.",
            "Risk <strong>1% = €10</strong> on 5 pips means ~<strong>0.20 lots</strong> (€2 per pip). Target the Asian high at <strong>1.08600</strong>, ~8 pips away, then the range extension beyond — at least a <strong>1.5:1</strong>.",
            "The London <strong>liquidity surge</strong> is what powers the move; the Asian low is what defined a clean, tight stop.",
            "You confirmed London's actual hours on your own platform first — the '08:00' figure shifts with server time and daylight saving, so you never trust a fixed number.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes trading the London session",
          items: [
            "<strong>Trusting a fixed session time from a course.</strong> Your broker's server clock and daylight saving move the real open. Verify it on your chart or you will trade the wrong window.",
            "<strong>Buying the sweep before it reverses.</strong> A poke below the Asian low is not yet a reversal. Wait for the snap-back close, or you catch a falling knife.",
            "<strong>Trading before London actually arrives.</strong> The last quiet Asian minutes look similar but lack the liquidity. The edge is in the surge, not the calm before it.",
            "<strong>Placing the stop inside the swept zone.</strong> If your stop sits where the stop-hunt reached, ordinary noise clips you. Put it beyond the sweep extreme.",
            "<strong>Assuming every London open trends.</strong> Some days London sweeps and then ranges. If no clean direction appears, stand aside rather than force a trade.",
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
      readingMinutes: 11,
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
          kind: "example",
          title: "Trading around a US release on a €1,000 account",
          steps: [
            "A US data print is scheduled. In the two minutes before it you <strong>do not open a trade</strong> — the release can spike either way with slippage that ignores your stop.",
            "After the print, EUR/USD spikes down, then reclaims a level at <strong>1.08400</strong> with a strong bullish close in the London–New York overlap. Now the reaction is readable.",
            "You enter long at <strong>1.08420</strong>, stop below the post-news low at <strong>1.08360</strong> — a <strong>6-pip risk</strong>. The volatile spike defines a clear invalidation.",
            "Risk <strong>1% = €10</strong> on 6 pips means ~<strong>0.16 lots</strong> (€1.60 per pip). Target <strong>1.08540</strong>, ~12 pips away — a <strong>2:1</strong>.",
            "You let the <strong>dust settle</strong> and traded the reaction, not the release. Entering during the spike itself risks a fill far from your intended price.",
            "Late in the session, once London closes, liquidity thins — you tighten up or stop, because moves lose conviction and spreads can widen.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes trading the New York session",
          items: [
            "<strong>Trading the exact second of a release.</strong> Spreads blow out and fills slip past your stop. That is a gamble on the number, not an edge.",
            "<strong>Ignoring the calendar.</strong> Getting caught in an unexpected high-impact print mid-scalp is avoidable. Check scheduled US data before every session.",
            "<strong>Scalping the thin post-London hours as if they were the overlap.</strong> Conviction fades after London closes; forcing trades into chop just pays spread.",
            "<strong>Trusting a fixed New York open time.</strong> The hours shift with daylight saving and your broker's server clock. Confirm them on your own platform.",
            "<strong>Widening a stop when news spikes against you.</strong> A volatile release is exactly when discipline matters most. Take the planned loss, never move the stop.",
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
      readingMinutes: 11,
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
          kind: "example",
          title: "An Asian range breakout on a €1,000 account",
          steps: [
            "Overnight, EUR/USD drifts sideways. You box the <strong>Asian range</strong>: high <strong>1.08550</strong>, low <strong>1.08480</strong> — a 7-pip box.",
            "London arrives with volume and price closes decisively above <strong>1.08550</strong>. You wait for the <strong>candle close</strong> beyond the edge, not the first poke, then enter long at <strong>1.08560</strong>.",
            "Your stop sits back inside the range at <strong>1.08510</strong> — a <strong>5-pip risk</strong>. Price trading back inside means the break failed.",
            "Risk <strong>1% = €10</strong> on 5 pips means ~<strong>0.20 lots</strong> (€2 per pip). Target a measured move of the box height (~7 pips) beyond the break, to <strong>1.08620</strong> — roughly <strong>1.2:1</strong>, or trail for more if momentum holds.",
            "Because ranges attract <strong>stop hunts</strong>, you use the close-based filter: it will not stop every false break, but it filters the worst pokes.",
            "If price instead pokes 1.08560 and slams back inside on the same candle, you <strong>skip it</strong> — that is the false break the setup warns about.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes trading the Asian range breakout",
          items: [
            "<strong>Entering on the first poke, not the close.</strong> Range edges are magnets for stop hunts. Buying the wick before the close is how you get trapped.",
            "<strong>Placing the stop too far outside the range.</strong> The logical invalidation is back inside the box. A stop miles away turns a small planned loss into a large one.",
            "<strong>Trading the break in dead hours.</strong> A 'breakout' with no session volume behind it usually fails. Wait for London or New York to supply the push.",
            "<strong>Ignoring how often ranges fake out.</strong> Many breaks reverse hard. A close filter reduces but never removes this — always define failure before you enter.",
            "<strong>Chasing a break that already ran.</strong> If price is 15 pips past the edge before you act, the good entry is gone and your stop is now enormous.",
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
      readingMinutes: 11,
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
          kind: "example",
          title: "An ORB scalp on a €1,000 account",
          steps: [
            "At the US index open you watch <strong>US30</strong> for the first 15 minutes. It carves an <strong>opening range</strong>: high <strong>39,050</strong>, low <strong>39,010</strong> — a 40-point box.",
            "Price closes above <strong>39,050</strong> with momentum. You enter long at <strong>39,055</strong> on the breakout candle's close.",
            "Your stop goes on the opposite side of the range at <strong>39,008</strong> — a <strong>47-point risk</strong>. Price trading back through the range invalidates the break.",
            "Say US30 is ~<strong>€0.10 per point per 0.1 lot</strong>. Risk <strong>1% = €10</strong> on 47 points means roughly <strong>0.02 lots</strong> so a hit costs ~€10.",
            "Target the previous day's high at <strong>39,145</strong>, ~90 points away — a <strong>~2:1</strong>. The next daily level is your logical objective, not a random number.",
            "If instead price breaks 39,050, fails, and closes back inside, you take the <strong>small planned loss</strong> — the tight-range whipsaw the setup warns about is real.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes trading the ORB",
          items: [
            "<strong>Entering before the range is defined.</strong> Jumping in during the first 15 minutes means there is no range yet — you are guessing, not trading a break.",
            "<strong>Trading a very tight opening range.</strong> A narrow box whipsaws both edges, stopping out longs and shorts in minutes. Skip breaks of an unusually small range.",
            "<strong>Putting the stop just past the break, not on the far side.</strong> The logical invalidation is the opposite edge. A stop too close gets clipped by the retest.",
            "<strong>Ignoring the higher-timeframe direction.</strong> An ORB long straight into daily resistance has poor odds. Favour breaks that align with the bigger picture.",
            "<strong>Chasing an extended break.</strong> If price is already far beyond the edge, the entry is late and the stop is now huge. Wait for the retest or let it go.",
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
      readingMinutes: 11,
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
          kind: "example",
          title: "Fading the previous day's high on a €1,000 account",
          steps: [
            "Before the session you mark yesterday's high — <strong>PDH at 1.09200</strong> — on EUR/USD. It is a shared reference a huge number of traders watch.",
            "Price rallies into 1.09200 and stalls, printing a <strong>bearish rejection candle</strong> with a long upper wick — sellers defending the level. You enter short at <strong>1.09180</strong>.",
            "Your stop goes just above the PDH at <strong>1.09230</strong> — a <strong>5-pip risk</strong>. A close above there means the level broke and your fade is wrong.",
            "Risk <strong>1% = €10</strong> on 5 pips means ~<strong>0.20 lots</strong> (€2 per pip). Target the mid-range level at <strong>1.09080</strong>, ~10 pips away — a <strong>2:1</strong>.",
            "The PDH gave you a <strong>tight, logical stop</strong> — that clean invalidation is exactly what makes these levels so useful.",
            "The alternative play: if price instead <strong>closes decisively above</strong> 1.09200, you drop the fade and consider the break-and-extend continuation instead.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes trading PDH / PDL",
          items: [
            "<strong>Fading the level with no rejection.</strong> A touch of PDH is not a short. Wait for the bearish rejection candle, or you front-run a level that keeps going.",
            "<strong>Marrying the fade after a clean break.</strong> When price closes firmly through PDH, the level flipped. Keep shorting it and you are fighting a fresh trend.",
            "<strong>Placing the stop at the level, not beyond it.</strong> PDH and PDL attract stop hunts. A stop one pip past the line gets clipped by the sweep.",
            "<strong>Forgetting to remark the levels each day.</strong> Yesterday's high is today's reference. Trading last week's PDH by mistake is a needless error.",
            "<strong>Ignoring context.</strong> A PDL fade in a strong downtrend is countertrend guessing. The higher-timeframe direction still decides the odds.",
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
      readingMinutes: 11,
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
          kind: "example",
          title: "Fading a range edge on a €1,000 account",
          steps: [
            "On a quiet session EUR/USD is clearly range-bound between <strong>1.08400</strong> (bottom) and <strong>1.08520</strong> (top) — a 12-pip box price keeps rotating inside.",
            "Price rallies to the top and prints a <strong>bearish rejection</strong> at 1.08520. You sell high at <strong>1.08505</strong>, expecting a rotation back toward the middle.",
            "Your stop sits just beyond the edge at <strong>1.08545</strong> — a <strong>4-pip risk</strong>. A break above the range ends the mean-reversion idea immediately.",
            "Risk <strong>1% = €10</strong> on 4 pips means ~<strong>0.25 lots</strong> (€2.50 per pip). Target the range midpoint at <strong>1.08460</strong>, ~4.5 pips away — about <strong>1:1</strong> to the middle, or the far edge for more.",
            "The tight stop is essential: because ranges break, you keep the loss small so the day a fade fails does not cost more than a few winners.",
            "The moment structure or a session open threatens to <strong>trend</strong>, you stand aside — fading the edge of a range about to break is exactly the wrong side of a fast move.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes range-trading the edges",
          items: [
            "<strong>Fading a range that is actually trending.</strong> If price is making higher highs, it is not ranging. Fading the 'top' of a trend is how you fight a freight train.",
            "<strong>Selling the edge with no rejection.</strong> A touch of the top is not a signal. Wait for the bearish rejection candle before you fade.",
            "<strong>Placing the stop inside the range.</strong> A stop just past the last swing gets clipped by normal rotation. Put it beyond the edge where a break truly invalidates you.",
            "<strong>Marrying the mean-reversion view.</strong> Every range breaks eventually. Adding to a losing fade as it breaks out is how a small loss becomes a disaster.",
            "<strong>Ignoring the session clock.</strong> A quiet range often ends the instant London or New York opens. Fading into a session open invites the breakout.",
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
      readingMinutes: 12,
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
          kind: "example",
          title: "Sizing three scalps to fixed risk on a €1,000 account",
          steps: [
            "Your rule: risk <strong>1% = €10</strong> per trade, hard <strong>daily loss limit of 3%</strong> (€30 / three losers), then you stop for the day. This is decided before the session, not in the heat of it.",
            "Trade A — EUR/USD, stop <strong>4 pips</strong>. To lose €10 on 4 pips you size ~<strong>0.25 lots</strong> (€2.50/pip). Chart sets the stop; size adjusts to it.",
            "Trade B — gold XAUUSD, stop <strong>3.5 points</strong>. Same €10 risk means ~<strong>0.03 lots</strong>. The instrument is bigger, so the position is smaller — risk in money is identical.",
            "Trade C — NAS100, stop <strong>20 points</strong>. Same €10 risk means ~<strong>0.05 lots</strong>. Three different instruments, three different sizes, <strong>one fixed €10</strong>.",
            "Say A and B both lose: −€20, plus ~€5 of spread and commission across the trades. You are down ~€25. One more loser hits your €30 limit and you are done — the limit caps the damage.",
            "Never widen: if trade A ticks to −3 pips you do <strong>not</strong> move the stop to −8 'to give it room'. That single habit is what turns a €10 loss into a €30+ disaster.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common risk-management mistakes in scalping",
          items: [
            "<strong>Widening a stop to avoid a loss.</strong> The single most destructive habit in trading. It converts a small planned loss into a large unplanned one — this is how accounts blow up in one trade.",
            "<strong>Sizing first, then hunting a stop to fit.</strong> Backwards. The chart dictates the stop; the position size adjusts to keep risk at your fixed €10.",
            "<strong>Risking a bigger percentage 'because the setup looks perfect'.</strong> The cleanest setups still fail regularly. Fixed risk means fixed — no exceptions for confidence.",
            "<strong>No daily loss limit.</strong> Without a hard stop for the day, three losses become ten as you chase them back. Decide the limit in advance and honour it.",
            "<strong>Forgetting costs compound.</strong> Twenty scalps a day at a few euros of spread each is real drag. Overtrading adds cost and risk while adding no edge.",
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
      readingMinutes: 11,
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
          kind: "example",
          title: "A worked one-page intraday plan for a €1,000 account",
          steps: [
            "<strong>Instrument & session.</strong> EUR/USD and NAS100 only, traded in the <strong>London–New York overlap</strong>. No other pairs, no other hours — the plan closes the rest of the market off.",
            "<strong>Levels.</strong> Before the open you mark PDH <strong>1.09200</strong>, PDL <strong>1.08600</strong>, the Asian range 1.08650–1.08750, and the round number 1.09000.",
            "<strong>Setups.</strong> Two only: the <strong>opening range breakout</strong> and a PDH/PDL rejection fade. Anything that is not one of these two is not a trade.",
            "<strong>Risk.</strong> <strong>1% = €10</strong> per trade, stop always at a logical level with size fitted to it, and a hard <strong>daily loss limit of €30</strong> — three losers and you are flat for the day.",
            "<strong>Example trade.</strong> Price fades PDH 1.09200 with a bearish rejection; you short 1.09180, stop 1.09230 (5 pips, ~0.20 lots, €10 risk), target 1.09080 for a <strong>2:1</strong>.",
            "<strong>Review.</strong> Every trade goes in the journal with its reason and result. At session end you check: did I follow the plan, or improvise? The answer, not the P&L, is the scorecard.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with an intraday plan",
          items: [
            "<strong>Having no written plan at all.</strong> Fast trading gives you no time to improvise. If the decisions are not made in advance, they get made on emotion mid-trade.",
            "<strong>Trading setups not in the plan.</strong> The moment you take a 'nice-looking' trade outside your two setups, the plan is meaningless. Discipline is following it on a boring day.",
            "<strong>Leaving out the daily loss limit.</strong> A plan without a hard stop for the day does not protect you from the revenge-trading spiral that wrecks accounts fastest.",
            "<strong>Never reviewing.</strong> A journal you do not read is just a diary. The edge comes from studying the results and cutting what does not work.",
            "<strong>Rewriting the plan after every loss.</strong> A plan changed on tilt is no plan. Adjust it calmly on a schedule from journal evidence, not in reaction to one bad trade.",
          ],
        },
        {
          kind: "key",
          text: "A written five-step plan — instrument, levels, setups, risk, review — is what turns scattered scalping ideas into a disciplined routine.",
        },
      ],
    },
  ],
};
