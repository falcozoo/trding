import type { Course } from "../courses";

export const smcCourse: Course = {
  id: "smart-money-concepts",
  title: "Smart Money Concepts (SMC & ICT)",
  tagline: "Trade like institutions — liquidity, order blocks, and market structure.",
  description:
    "Learn Smart Money Concepts and ICT trading from the ground up: how institutional order flow moves markets, how to map market structure with BOS, CHoCH and MSS, and how to read liquidity, order blocks, fair value gaps and premium/discount zones to build a complete SMC setup.",
  level: "intermediate",
  accent: "amber",
  modules: [
    /* ============================================================ */
    /* 1. Introduction to Smart Money Concepts                      */
    /* ============================================================ */
    {
      slug: "introduction-smc",
      title: "Introduction to Smart Money Concepts",
      summary:
        "What Smart Money Concepts and ICT trading are, why traders study institutional behaviour, and how to approach the methodology honestly.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to explain what Smart Money Concepts are, describe the liquidity mechanism behind them, and approach the methodology as a testable model rather than a promise.",
      blocks: [
        {
          kind: "text",
          html: "Smart Money Concepts (SMC) is a way of reading charts built on one idea: large institutions — banks, funds and market makers — trade in such <strong>size</strong> that they leave repeatable footprints in price. The framework, popularised through ICT (Inner Circle Trader) teachings, tries to explain moves through <strong>liquidity and order flow</strong> rather than lagging indicators. It is important to be clear from the start: this is a <strong>model of behaviour</strong>, not a proven fact about what any specific institution is doing on any given candle.",
        },
        {
          kind: "image",
          src: "/learn/smc/01-intro.png",
          alt: "Chart showing where retail buys highs and smart money buys lows",
          caption:
            "The core SMC narrative: retail tends to buy highs while smart money accumulates at lows.",
        },
        {
          kind: "heading",
          text: "The central idea: markets need liquidity",
        },
        {
          kind: "text",
          html: "The story SMC tells is that big players need <strong>liquidity to fill large orders</strong>. A fund cannot buy a billion of anything at one price — it needs a crowd of sellers on the other side. The most reliable crowds of resting orders sit where retail <strong>stop losses and pending orders</strong> cluster: just above obvious highs and just below obvious lows. So price is often drawn toward those pools first, takes the orders, and only then moves in its intended direction. Whether this is deliberate engineering or simply how a market absorbs size, the pattern repeats often enough to trade around.",
        },
        {
          kind: "text",
          html: "This reframes what a 'breakout' or a 'stop-out' even means. When price spikes above a high and instantly reverses, the SMC reading is not 'the breakout failed' — it is 'the breakout <strong>was the point</strong>: it collected the orders needed to fund the real move the other way'. Once you see charts through this lens, a lot of the moves that used to look random start to look like liquidity being harvested.",
        },
        {
          kind: "heading",
          text: "How SMC differs from classic price action",
        },
        {
          kind: "list",
          items: [
            "<strong>Classic support/resistance</strong> asks: has price reacted here before? SMC asks: <strong>where are the orders</strong> that price will reach for next?",
            "A retail trader sees a clean double top as a place to sell the breakout. SMC sees the <strong>equal highs</strong> as a liquidity magnet price may run before turning.",
            "The vocabulary is different — BOS, CHoCH, order block, FVG, sweep — but underneath it is still just <strong>reading buyers versus sellers</strong>, one level deeper.",
            "It is a <strong>lens</strong>, not a religion. The best traders blend it with plain structure and risk control rather than treating every candle as a manipulation.",
          ],
        },
        {
          kind: "heading",
          text: "Staying honest about the hype",
        },
        {
          kind: "text",
          html: "SMC and ICT attract enormous hype online, with promises of near-perfect entries. Treat every concept in this course as an <strong>interpretation of price</strong>, not a crystal ball. No concept wins every time, every edge must be <strong>backtested on your own market</strong>, and the same setup that looks obvious in hindsight was a coin-flip in real time. The people making money with SMC are winning on <strong>process and risk management</strong>, not on prediction.",
        },
        {
          kind: "example",
          title: "Reading a chart the SMC way, step by step",
          steps: [
            "Open a bare EUR/USD 1-hour chart. Mark the last obvious <strong>swing high near 1.0910</strong> and swing low near <strong>1.0820</strong> — these are your liquidity reference points.",
            "Ask the SMC question: <strong>where do stops rest?</strong> Short-seller stops and breakout buys sit above 1.0910; long stops and breakout sells sit below 1.0820.",
            "Watch which pool price reaches for. Price grinds up and <strong>wicks to 1.0918</strong>, taking the buy-side liquidity, then closes back below 1.0910 — a classic run-and-reject.",
            "Now bias flips: with buy-side liquidity taken, you look for a move down toward the <strong>sell-side pool at 1.0820</strong>. That is your working hypothesis, not a certainty.",
            "Everything after this — structure shift, order block, FVG entry — is just <strong>refining that idea</strong> into a trade with a defined stop. The liquidity read came first.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with SMC",
          items: [
            "<strong>Treating SMC as a secret that always works.</strong> It is a probabilistic model. The 'smart money always wins' framing sells courses; it does not survive a real backtest.",
            "<strong>Seeing manipulation in every candle.</strong> Most moves are just ordinary supply and demand. Reserve the SMC labels for clean, obvious liquidity events, not every wick.",
            "<strong>Skipping structure and risk to chase the narrative.</strong> A pretty story about institutions is worthless without a stop. The story tells you direction; risk management keeps you alive when it is wrong.",
            "<strong>Collecting concepts instead of a process.</strong> Knowing 20 SMC terms is not an edge. One simple, tested sequence you run the same way every time is worth more than all the vocabulary.",
          ],
        },
        {
          kind: "key",
          text: "Smart Money Concepts read the chart as a liquidity game — a useful model to backtest and combine with risk management, never a guaranteed edge.",
        },
      ],
    },

    /* ============================================================ */
    /* 2. Institutional Order Flow                                  */
    /* ============================================================ */
    {
      slug: "institutional-order-flow",
      title: "Institutional Order Flow",
      summary:
        "Understand institutional order flow — the persistent directional pressure that SMC traders try to align with.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to describe institutional order flow, identify the dominant direction from impulse and correction, and read when flow is weakening.",
      blocks: [
        {
          kind: "text",
          html: "Institutional order flow is the idea that large participants push price in a <strong>consistent direction</strong> over time as they build and unwind positions. Because their orders are too big to fill at once, the resulting pressure shows up as a series of <strong>impulsive moves</strong> in one direction interrupted by smaller, weaker pullbacks. You cannot see the orders themselves, but you can read their footprint in the rhythm of the candles.",
        },
        {
          kind: "image",
          src: "/learn/smc/02-order-flow.png",
          alt: "Consistent directional order flow from institutional buying",
          caption:
            "Impulsive moves in one direction with shallow pullbacks suggest order flow behind the trend.",
        },
        {
          kind: "heading",
          text: "What order flow actually looks like",
        },
        {
          kind: "text",
          html: "The simplest tell is <strong>impulse versus correction</strong>. Strong, wide-range candles in one direction, followed by weak, small, overlapping candles against it, mean that direction is in control. When buyers are the aggressor, <strong>dips are shallow</strong> and rallies are sharp; the pullbacks look like tired, choppy hesitation while the moves in the trend direction look decisive and fast. Flip it for sellers: sharp drops, weak bounces.",
        },
        {
          kind: "text",
          html: "A second tell is <strong>how pullbacks resolve</strong>. In healthy bullish flow, each correction stops <strong>above the previous higher low</strong> and gets bought before it can do damage. The moment a pullback becomes deep, fast and takes out a prior low, order flow is being challenged — that is your early warning that the aggressor may be changing.",
        },
        {
          kind: "heading",
          text: "Why aligning with flow matters",
        },
        {
          kind: "text",
          html: "Aligning with order flow means <strong>trading with the aggressor</strong> instead of guessing tops and bottoms. Most SMC setups are simply attempts to enter in the direction of the prevailing flow at a favourable price, after liquidity has been taken. Fading strong flow is possible but statistically harder — you are betting against the side that is currently winning, so it demands more confirmation and tighter risk.",
        },
        {
          kind: "example",
          title: "Reading and trading with order flow",
          steps: [
            "On the EUR/USD 1-hour you see three big green candles into <strong>1.0880</strong>, then a small, choppy three-candle pullback that holds at <strong>1.0855</strong> above the prior higher low at 1.0840. Verdict: <strong>bullish order flow</strong>.",
            "You wait for the pullback to stall. A green candle closes back up at <strong>1.0865</strong> — buyers reasserting. You enter long at 1.0865.",
            "Stop goes below the higher low at <strong>1.0838</strong> — a break there says the flow is broken. Risk = <strong>27 pips</strong>.",
            "Account <strong>€3,000</strong>, risk <strong>1% = €30</strong>. With a 27-pip stop you size ~<strong>0.11 lots</strong> so 27 pips against you costs about €30.",
            "Target the next liquidity above the recent high near <strong>1.0930</strong>, ~65 pips — roughly <strong>2.4:1</strong>. Plan set before entry: 1.0865 / 1.0838 / 1.0930.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes reading order flow",
          items: [
            "<strong>Calling one big candle a trend.</strong> Order flow is a sequence of impulses, not a single bar. Wait for the pattern of shallow pullbacks to repeat before trusting it.",
            "<strong>Fading strong flow because it 'looks overextended'.</strong> Overextended trends stay overextended for a long time. Trade with the aggressor until structure actually breaks.",
            "<strong>Ignoring the deep pullback warning.</strong> When a correction suddenly goes fast and deep, flow may be flipping. Do not keep loading the old direction on autopilot.",
            "<strong>Confusing a choppy range with a trend.</strong> If impulses appear in both directions and pullbacks are as big as the moves, there is no clean flow — stand aside.",
          ],
        },
        {
          kind: "key",
          text: "Order flow is the direction of the aggressor, read from impulse versus correction — align with it and treat a deep, fast pullback as your first warning it is changing.",
        },
      ],
    },

    /* ============================================================ */
    /* 3. Market Structure: BOS, CHoCH & MSS                        */
    /* ============================================================ */
    {
      slug: "market-structure-bos-choch-mss",
      title: "Market Structure: BOS, CHoCH & MSS",
      summary:
        "Master SMC market structure — break of structure, change of character and market structure shift — using swing highs and lows.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to label market structure, distinguish a BOS, a CHoCH and an MSS, and use a candle close to filter weak breaks.",
      blocks: [
        {
          kind: "text",
          html: "Market structure is the sequence of <strong>swing highs and swing lows</strong> that defines whether a market is trending or turning. In SMC, three labels describe how that structure develops: BOS, CHoCH and MSS. Reading them correctly is the backbone of the whole methodology — almost every setup in this course is timed off a structure event. Get this right and the rest of SMC becomes far more intuitive.",
        },
        {
          kind: "image",
          src: "/learn/smc/03-structure.png",
          alt: "Market structure showing BOS, CHoCH and MSS",
          caption:
            "BOS confirms trend continuation; CHoCH and MSS warn that structure is shifting.",
        },
        {
          kind: "heading",
          text: "The three labels",
        },
        {
          kind: "list",
          items: [
            "<strong>BOS (Break of Structure):</strong> price breaks a swing point in the trend's direction — continuation. In an uptrend, a close above the last higher high.",
            "<strong>CHoCH (Change of Character):</strong> the first break against the trend — an early reversal warning. In an uptrend, the first close below a higher low.",
            "<strong>MSS (Market Structure Shift):</strong> a decisive break, usually on displacement, that many treat as confirmation order flow has flipped.",
          ],
        },
        {
          kind: "text",
          html: "A <strong>BOS confirms continuation</strong>: in an uptrend it is a break above the prior swing high, telling you the aggressor is still in charge. A <strong>CHoCH is the first crack</strong> against the trend and only <em>warns</em> of change — it is not yet a reversal. An <strong>MSS is stronger</strong>: a momentum-backed break, often leaving an FVG and a fresh order block, which is why traders treat it as the moment flow actually turned.",
        },
        {
          kind: "heading",
          text: "How to spot each one cleanly",
        },
        {
          kind: "text",
          html: "First, mark only <strong>meaningful swings</strong> — the highs and lows a stranger would circle, not every tiny wiggle. Then require a <strong>candle body close</strong> beyond the swing point, never just a wick poke, or you will label noise as structure. A BOS in the trend direction is routine; a CHoCH is the <strong>first</strong> counter-trend close and deserves attention; an MSS is a CHoCH backed by a big, decisive candle.",
        },
        {
          kind: "heading",
          text: "How to use it in practice",
        },
        {
          kind: "text",
          html: "After a CHoCH or MSS, <strong>stop hunting continuation</strong> trades and start looking for setups in the new direction — but wait for a fresh structure to build before committing, because structure is often misread in real time. A single break does not guarantee a full reversal; it just tips the odds. Treat the label as a <strong>bias filter</strong>, then let a specific entry (order block, FVG, OTE) time the trade.",
        },
        {
          kind: "example",
          title: "Trading a CHoCH-confirmed reversal",
          steps: [
            "EUR/USD 15-min is in an uptrend: higher highs and higher lows, last higher low at <strong>1.0870</strong>. Price makes a high at 1.0905 then turns down.",
            "A candle <strong>closes below 1.0870</strong> — that is the first counter-trend close, a <strong>CHoCH</strong>. Bias shifts from bullish to cautious/bearish.",
            "You do not short blindly. You wait for a small pullback into the order block left by the CHoCH candle near <strong>1.0888</strong> and a lower-timeframe rejection.",
            "Enter short at <strong>1.0885</strong>, stop above the recent high at <strong>1.0908</strong> — a close there invalidates the reversal. Risk = <strong>23 pips</strong>.",
            "Account <strong>€2,000</strong>, risk <strong>1% = €20</strong>, so ~<strong>0.086 lots</strong>. Target the sell-side liquidity below at <strong>1.0830</strong>, ~55 pips, about <strong>2.4:1</strong>.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with market structure",
          items: [
            "<strong>Counting wicks as breaks.</strong> A wick through a swing is not a BOS. Demand a body close beyond the level or you will label every fake-out as structure.",
            "<strong>Marking every micro-swing.</strong> Too many swing points create contradictory structure. Zoom out and keep only the swings that clearly matter.",
            "<strong>Treating a CHoCH as a guaranteed reversal.</strong> It is the first warning, not confirmation. Many CHoCHs fail and the trend resumes — wait for follow-through.",
            "<strong>Ignoring the higher timeframe.</strong> A CHoCH on the 5-min inside a strong daily uptrend is usually just a pullback. Let the higher timeframe set your dominant bias.",
          ],
        },
        {
          kind: "key",
          text: "BOS means continuation, CHoCH is the first warning of a turn, and MSS confirms order flow has shifted — always require a candle close, never a wick.",
        },
      ],
    },

    /* ============================================================ */
    /* 4. Liquidity Concepts                                        */
    /* ============================================================ */
    {
      slug: "liquidity-concepts",
      title: "Liquidity Concepts",
      summary:
        "Understand liquidity — where buy and sell orders rest in the market and why SMC treats it as a magnet for price.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to locate pools of resting liquidity above highs and below lows, grade their strength, and use them as targets.",
      blocks: [
        {
          kind: "text",
          html: "Liquidity is simply the <strong>resting orders</strong> available for someone to trade against — stop losses, pending orders and breakout entries sitting on the book. SMC treats these clusters as targets, because large players need them to fill size. Understanding where liquidity sits is the key that unlocks most other concepts in this course: sweeps, stop hunts, inducement and order blocks all revolve around it.",
        },
        {
          kind: "image",
          src: "/learn/smc/04-liquidity.png",
          alt: "Buy-side and sell-side liquidity resting above highs and below lows",
          caption:
            "Buy-side liquidity rests above highs; sell-side liquidity rests below lows.",
        },
        {
          kind: "heading",
          text: "Where liquidity rests",
        },
        {
          kind: "text",
          html: "The most predictable pools sit at obvious price points. Stops from short sellers and breakout buy orders gather <strong>above swing highs</strong> (buy-side liquidity), while stops from longs and breakout sell orders gather <strong>below swing lows</strong> (sell-side liquidity). <strong>Equal highs and equal lows</strong> are especially strong magnets, because so many orders line up at the exact same price that price is almost drawn to sweep them.",
        },
        {
          kind: "text",
          html: "The counter-intuitive part: the buy orders above the market are mostly <strong>stop losses of shorts</strong>, and the sell orders below are mostly <strong>stop losses of longs</strong>. When your stop is hit it becomes a market order in the opposite direction — exactly the fuel a large player on the other side wants. That is the whole mechanism in one sentence.",
        },
        {
          kind: "heading",
          text: "Why price seeks it",
        },
        {
          kind: "text",
          html: "The mechanism is a <strong>matching problem</strong>: a large buyer needs many sellers, and the easiest place to find them is where stop-sell orders cluster below a low. This is why price so often runs a level, grabs the orders, and then reverses. A liquidity pool is not a place price must respect — it is a place price is <strong>attracted to</strong> and often passes through violently.",
        },
        {
          kind: "heading",
          text: "How to grade a pool",
        },
        {
          kind: "list",
          items: [
            "<strong>More equal touches</strong> = stronger pool. A clean double or triple top holds far more orders than a single old high.",
            "<strong>Obviousness matters.</strong> The more textbook the level looks, the more retail stops sit just beyond it — and the better a target it makes.",
            "<strong>Higher-timeframe pools</strong> (daily/4-hour highs and lows) attract bigger reactions than 5-minute wiggles.",
            "<strong>Untapped pools</strong> that price has not yet run are more interesting than levels already swept.",
          ],
        },
        {
          kind: "example",
          title: "Using a liquidity pool as a target",
          steps: [
            "On EUR/USD 1-hour you spot <strong>equal lows at 1.0800</strong> touched three times — an obvious sell-side pool with long stops sitting just under it.",
            "Bias is bearish (recent CHoCH down), so you expect price to <strong>reach for 1.0800</strong> and likely sweep it.",
            "You short a pullback into an order block at <strong>1.0855</strong>, stop above it at <strong>1.0878</strong>. Risk = <strong>23 pips</strong>.",
            "Your first target is the liquidity pool itself: <strong>1.0795</strong> (just beyond the equal lows), ~60 pips, about <strong>2.6:1</strong>.",
            "Account <strong>€1,500</strong>, risk <strong>1% = €15</strong>, so ~<strong>0.065 lots</strong>. If price sweeps 1.0795 and reverses hard, that is your cue the pool has been taken — manage or exit.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with liquidity",
          items: [
            "<strong>Treating a pool as a wall that stops price.</strong> Liquidity is a magnet, not support. Price usually runs through it, not bounces off it.",
            "<strong>Marking liquidity everywhere.</strong> Only the obvious equal highs/lows and clean swing points hold meaningful orders. Skip the messy, unclear levels.",
            "<strong>Putting your own stop right at the obvious pool.</strong> That is exactly where everyone else's stop sits and exactly what gets swept. Give it room.",
            "<strong>Assuming a sweep is an instant reversal.</strong> Sometimes the pool is taken and price keeps going — the sweep is only tradeable with a structure shift behind it.",
          ],
        },
        {
          kind: "key",
          text: "Liquidity is where orders rest — above highs and below lows — and SMC treats those pools as magnets and targets, not walls that stop price.",
        },
      ],
    },

    /* ============================================================ */
    /* 5. Buy-Side Liquidity (BSL)                                  */
    /* ============================================================ */
    {
      slug: "buy-side-liquidity",
      title: "Buy-Side Liquidity (BSL)",
      summary:
        "Learn what buy-side liquidity is, why it rests above highs, and how equal highs mark it on the chart.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to mark buy-side liquidity above swing highs and equal highs, grade it, and use it as a target with defined risk.",
      blocks: [
        {
          kind: "text",
          html: "Buy-side liquidity, or <strong>BSL</strong>, is the pool of buy orders resting <strong>above the market</strong>. It sounds counter-intuitive, but the buy orders here are mostly <strong>stop losses from short sellers</strong> and breakout buy stops. When price rises into them they trigger, become forced buying, and provide exactly the fills a large seller wants before pushing price back down.",
        },
        {
          kind: "image",
          src: "/learn/smc/05-bsl.png",
          alt: "Equal highs forming buy-side liquidity",
          caption:
            "Equal highs stack breakout buy stops and short-seller stops — a buy-side liquidity pool.",
        },
        {
          kind: "heading",
          text: "How to spot it",
        },
        {
          kind: "text",
          html: "Look for <strong>swing highs and equal highs</strong>. A single old high holds some liquidity; two or more highs at roughly the same price form a stronger pool, because traders keep placing stops and breakout orders just above the obvious resistance. The <strong>flatter and cleaner</strong> the highs, the more orders likely sit above them — a textbook double top is a textbook BSL pool.",
        },
        {
          kind: "heading",
          text: "Why it matters for direction",
        },
        {
          kind: "text",
          html: "BSL is often a <strong>target, not an entry</strong>. In a bearish scenario, price may rally into buy-side liquidity to fill large sell orders before turning down — the rally is the setup for the drop, not a reason to chase longs. Marking BSL tells you where an up-move might be <strong>running out of fuel</strong>. But a run into liquidity is not automatically a reversal, so you wait for confirmation before fading it.",
        },
        {
          kind: "list",
          items: [
            "<strong>Equal highs</strong> are the strongest BSL — the more touches, the more stacked orders above them.",
            "The orders above a high are mostly <strong>short stops and breakout buys</strong>, not genuine demand.",
            "A rally into BSL in a bearish context is often <strong>fuel for a drop</strong>, not a breakout to trust.",
            "Higher-timeframe highs hold more meaningful BSL than intraday wiggles.",
          ],
        },
        {
          kind: "example",
          title: "Fading a run into buy-side liquidity",
          steps: [
            "EUR/USD 1-hour prints <strong>equal highs at 1.0920</strong> and the higher-timeframe bias is bearish. You mark BSL just above 1.0920.",
            "Price rallies and <strong>wicks to 1.0928</strong>, sweeping the equal highs and the stops above them, then closes back below 1.0920.",
            "You wait for a <strong>CHoCH down</strong> on the 5-min to confirm the sweep is being rejected. It comes at 1.0905.",
            "Enter short on the pullback at <strong>1.0912</strong>, stop above the sweep wick at <strong>1.0931</strong>. Risk = <strong>19 pips</strong>.",
            "Account <strong>€2,000</strong>, risk <strong>1% = €20</strong>, so ~<strong>0.10 lots</strong>. Target sell-side liquidity at <strong>1.0850</strong>, ~62 pips, about <strong>3:1</strong>.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with buy-side liquidity",
          items: [
            "<strong>Buying the breakout above equal highs.</strong> That is exactly the trap — your breakout buy is the liquidity a seller is using. Wait to see if it holds first.",
            "<strong>Fading BSL with no confirmation.</strong> A run into BSL is only half the story. Without a structure shift back down, price can keep going higher.",
            "<strong>Marking every minor high as BSL.</strong> Only clean, obvious highs stack real orders. Messy, unclear highs are weak pools.",
            "<strong>Ignoring bias.</strong> Fading BSL only makes sense when the higher-timeframe context is bearish. Against a strong uptrend it is a losing game.",
          ],
        },
        {
          kind: "key",
          text: "Buy-side liquidity sits above highs — mostly short stops and breakout buys — that price may run for fuel before reversing down, but only fade it with confirmation.",
        },
      ],
    },

    /* ============================================================ */
    /* 6. Sell-Side Liquidity (SSL)                                 */
    /* ============================================================ */
    {
      slug: "sell-side-liquidity",
      title: "Sell-Side Liquidity (SSL)",
      summary:
        "Learn what sell-side liquidity is, why it rests below lows, and how equal lows mark it on the chart.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to mark sell-side liquidity below swing lows and equal lows, grade it, and build a long around a sweep of it.",
      blocks: [
        {
          kind: "text",
          html: "Sell-side liquidity, or <strong>SSL</strong>, is the mirror image of BSL: the pool of sell orders resting <strong>below the market</strong>. These are mostly <strong>stop losses from long traders</strong> and breakout sell stops. When price falls into them they trigger, become forced selling, and provide exactly the fills a large buyer wants right before a rally begins.",
        },
        {
          kind: "image",
          src: "/learn/smc/06-ssl.png",
          alt: "Equal lows forming sell-side liquidity",
          caption:
            "Equal lows stack long-trader stops and breakout sells — a sell-side liquidity pool.",
        },
        {
          kind: "heading",
          text: "How to spot it",
        },
        {
          kind: "text",
          html: "Mark <strong>swing lows and equal lows</strong>. Two or more lows at a similar price form a stronger pool, because everyone places protective stops just under obvious support. A clean, flat <strong>double bottom</strong> is one of the most reliable liquidity magnets on the chart — precisely because it looks so safe to buy, everyone's stop ends up in the same place below it.",
        },
        {
          kind: "heading",
          text: "Why it matters for direction",
        },
        {
          kind: "text",
          html: "In a bullish scenario, price may dip into sell-side liquidity to <strong>trigger long stops</strong> and provide fills for large buyers before rallying. So a sweep of SSL followed by a strong reversal is a classic long context. But it only works when <strong>structure and confirmation agree</strong> — a break of the low can also mean genuine continuation down, so you never buy the sweep blindly.",
        },
        {
          kind: "list",
          items: [
            "<strong>Equal lows</strong> and clean double bottoms are the strongest SSL pools.",
            "The orders below a low are mostly <strong>long stops and breakout sells</strong>, not genuine supply.",
            "A sweep of SSL in a bullish context is often the <strong>launch pad</strong> for a rally.",
            "No sweep + structure shift = no trade; the break alone can just be continuation down.",
          ],
        },
        {
          kind: "example",
          title: "Buying a sweep of sell-side liquidity",
          steps: [
            "EUR/USD 1-hour has <strong>equal lows at 1.0810</strong> and the higher-timeframe bias is bullish. You mark SSL just below 1.0810.",
            "Price drops and <strong>wicks to 1.0802</strong>, sweeping the equal lows and the stops under them, then closes back above 1.0810.",
            "You wait for a <strong>CHoCH up</strong> on the 5-min confirming the sweep is rejected. It prints at 1.0828.",
            "Enter long on the pullback at <strong>1.0820</strong>, stop below the sweep wick at <strong>1.0799</strong>. Risk = <strong>21 pips</strong>.",
            "Account <strong>€2,500</strong>, risk <strong>1% = €25</strong>, so ~<strong>0.11 lots</strong>. Target buy-side liquidity at <strong>1.0885</strong>, ~65 pips, about <strong>3:1</strong>.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with sell-side liquidity",
          items: [
            "<strong>Placing your long stop right below the equal lows.</strong> That is the pool everyone targets. A tiny sweep clips you before the move you predicted.",
            "<strong>Buying the sweep with no reversal proof.</strong> A dip below the low is only bullish if structure shifts back up. Otherwise it is real continuation down.",
            "<strong>Shorting the breakdown of a clean double bottom.</strong> Your breakout sell is the liquidity a buyer wants. In a bullish context that is a classic trap.",
            "<strong>Marking messy lows as SSL.</strong> Only clean equal lows and obvious swing lows hold stacked orders worth trading around.",
          ],
        },
        {
          kind: "key",
          text: "Sell-side liquidity sits below lows — mostly long stops and breakout sells — that price may sweep before reversing up, but only buy it with a structure shift confirming the turn.",
        },
      ],
    },

    /* ============================================================ */
    /* 7. Liquidity Sweep                                           */
    /* ============================================================ */
    {
      slug: "liquidity-sweep",
      title: "Liquidity Sweep",
      summary:
        "Understand the liquidity sweep — when price grabs resting orders beyond a level and then reverses — plus honest entry and stop logic.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to identify a liquidity sweep, distinguish it from a real breakout, and structure a trade around it with defined risk.",
      blocks: [
        {
          kind: "text",
          html: "A liquidity sweep is when price pushes <strong>beyond a key level</strong>, triggers the resting orders there, and then quickly reverses. Instead of a clean breakout, the level is taken and <strong>rejected</strong> — a sign that the move beyond it was about grabbing liquidity rather than genuine continuation. The sweep is arguably the single most important pattern in SMC: almost every high-quality reversal starts with one.",
        },
        {
          kind: "image",
          src: "/learn/smc/07-sweep.png",
          alt: "Price sweeping a level to grab stops then reversing",
          caption:
            "Price spikes past the level, collects orders, and snaps back — a liquidity sweep.",
        },
        {
          kind: "heading",
          text: "How to spot a sweep",
        },
        {
          kind: "text",
          html: "The classic footprint is a <strong>long wick</strong> that pierces a high or low and closes back inside the range. It often happens fast, on a spike of activity, and looks violent. A genuine sweep is usually followed by a <strong>shift in structure</strong> in the opposite direction — that structure shift, not the wick itself, is your confirmation. No shift, no trade.",
        },
        {
          kind: "heading",
          text: "Sweep versus real breakout",
        },
        {
          kind: "text",
          html: "The hard part is telling a sweep from a real break. The tell is <strong>how price behaves after</strong>: a sweep is rejected within a candle or two and closes back inside; a real breakout closes <strong>beyond the level with conviction</strong> and holds. If price pierces a high and keeps closing above it, that was continuation, not a sweep — do not fade it. Waiting for the close is what keeps you from being on the wrong side.",
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "A common approach is to wait for the sweep, then for a <strong>CHoCH or MSS</strong> confirming the reversal, and enter on the pullback. The stop sits just <strong>beyond the sweep's extreme</strong> — the wick high or low — because a return there means the reversal read was wrong. Target the opposite liquidity pool for a strong reward-to-risk.",
        },
        {
          kind: "list",
          items: [
            "Sweep = price takes orders beyond a level then reverses, usually with a <strong>long wick</strong>.",
            "Wait for a <strong>structure shift</strong> back the other way before entering — the wick alone is not enough.",
            "Stop goes just past the <strong>sweep extreme</strong>; target the opposite liquidity.",
            "Not every wick is a sweep — some are genuine breakouts, so the closing behaviour decides.",
          ],
        },
        {
          kind: "example",
          title: "Trading a liquidity sweep with defined risk",
          steps: [
            "EUR/USD 15-min sits below an old swing high at <strong>1.0900</strong> in a bearish higher-timeframe context. Buy-side liquidity rests above 1.0900.",
            "Price spikes up, <strong>wicks to 1.0912</strong> taking the stops, then closes back at <strong>1.0894</strong> — a clean sweep, not a hold above.",
            "A <strong>CHoCH down</strong> prints at 1.0880, confirming rejection. You wait for a small pullback to the order block at <strong>1.0890</strong>.",
            "Enter short at <strong>1.0888</strong>, stop above the sweep wick at <strong>1.0915</strong>. Risk = <strong>27 pips</strong>.",
            "Account <strong>€2,000</strong>, risk <strong>1% = €20</strong>, so ~<strong>0.074 lots</strong>. Target the sell-side liquidity at <strong>1.0830</strong>, ~58 pips, about <strong>2.1:1</strong>.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with liquidity sweeps",
          items: [
            "<strong>Fading the wick before it closes back inside.</strong> If you short mid-spike and it keeps going, you are caught in a real breakout. Wait for the close.",
            "<strong>Entering with no structure shift.</strong> A sweep without a CHoCH/MSS behind it is just a wick. The reversal needs confirmation to be tradeable.",
            "<strong>Placing the stop inside the wick.</strong> The whole point is a violent poke — a stop inside the sweep range gets clipped by the next probe. Put it beyond the extreme.",
            "<strong>Calling every wick a sweep.</strong> Most wicks are noise. Reserve the read for wicks that pierce an obvious liquidity pool and reject cleanly.",
          ],
        },
        {
          kind: "key",
          text: "A liquidity sweep grabs orders beyond a level then reverses — trade the reversal only after a structure shift, with your stop just past the wick.",
        },
      ],
    },

    /* ============================================================ */
    /* 8. Stop Hunt                                                 */
    /* ============================================================ */
    {
      slug: "stop-hunt",
      title: "Stop Hunt",
      summary:
        "Learn what a stop hunt is, why obvious stop clusters get targeted, and how to avoid being the liquidity.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to recognise a stop hunt, place your own stops away from obvious pools, and trade the reversal that often follows.",
      blocks: [
        {
          kind: "text",
          html: "A stop hunt is a specific kind of liquidity sweep aimed at <strong>protective stop orders</strong>. Because so many traders place stops at the same obvious spot — just below support or above resistance — that price becomes a target. A quick spike triggers the stops, and price then often reverses. It is the reason your stop feels 'personally hunted' so often: it was sitting exactly where everyone else's was.",
        },
        {
          kind: "image",
          src: "/learn/smc/08-stop-hunt.png",
          alt: "A stop hunt below support before reversing",
          caption:
            "Price dips below obvious support, triggers stops, then reverses higher.",
        },
        {
          kind: "heading",
          text: "Why stops get hunted",
        },
        {
          kind: "text",
          html: "When your stop is hit, your order becomes a <strong>market order</strong> in the opposite direction — a long's stop is a sell. Those forced sells are exactly the fills a large buyer wants. This is the mechanism SMC points to: obvious stop clusters are <strong>convenient liquidity</strong>, whether by deliberate design or simply by crowd behaviour. Either way, the practical result for you is the same, so the defence is the same.",
        },
        {
          kind: "heading",
          text: "How to protect yourself",
        },
        {
          kind: "text",
          html: "The practical lesson is to avoid placing stops at the <strong>most obvious price</strong>. Give the stop room <strong>beyond the sweep zone</strong>, then size the position down so your risk stays constant despite the wider stop. Remember that not every spike is a hunt — sometimes a level breaks for real — and never move a stop further away just to avoid being hit. A wider stop is a planning decision, not a panic reaction.",
        },
        {
          kind: "list",
          items: [
            "A stop hunt is a sweep aimed specifically at the <strong>obvious stop cluster</strong> beyond a level.",
            "Your triggered stop becomes forced flow that <strong>feeds the reversal</strong>.",
            "Place stops <strong>beyond the likely sweep</strong>, not at the crowd's price, and size down to keep risk fixed.",
            "Not every spike is a hunt — respect a level that breaks and holds with conviction.",
          ],
        },
        {
          kind: "example",
          title: "Surviving and trading a stop hunt",
          steps: [
            "EUR/USD 15-min has obvious support at <strong>1.0850</strong>. The crowd's stops sit just under it at ~1.0846. You are looking for a long.",
            "Instead of buying at support with a stop at 1.0846, you <strong>wait for the hunt</strong>. Price spikes down, wicks to <strong>1.0838</strong>, sweeping the stops, then closes back at 1.0856.",
            "A <strong>CHoCH up</strong> confirms at 1.0868. You enter long on the pullback at <strong>1.0860</strong>.",
            "Stop goes below the hunt wick at <strong>1.0835</strong>, not at the obvious 1.0846. Risk = <strong>25 pips</strong> — wider, but beyond the sweep.",
            "Account <strong>€2,000</strong>, risk <strong>1% = €20</strong>, so ~<strong>0.08 lots</strong>. Target buy-side liquidity at <strong>1.0915</strong>, ~55 pips, about <strong>2.2:1</strong>.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes around stop hunts",
          items: [
            "<strong>Putting your stop at the obvious price.</strong> Just below support is exactly where the hunt reaches. Give it room beyond the likely sweep zone.",
            "<strong>Moving your stop further away mid-trade.</strong> Widening a stop to avoid being hit turns a small planned loss into a large unplanned one. Never do it.",
            "<strong>Assuming every dip below support is a hunt.</strong> Sometimes the level genuinely breaks. Demand a reversal and structure shift before buying the dip.",
            "<strong>Revenge-entering right after being stopped.</strong> Being hunted stings, but chasing back in without a fresh setup usually compounds the loss.",
          ],
        },
        {
          kind: "key",
          text: "Stop hunts target obvious stop clusters — place your stop beyond the likely sweep, size down to keep risk fixed, and only trade the reversal once structure confirms it.",
        },
      ],
    },

    /* ============================================================ */
    /* 9. Order Blocks                                              */
    /* ============================================================ */
    {
      slug: "order-blocks",
      title: "Order Blocks",
      summary:
        "Master order blocks — the last opposing candle before an impulsive move — with honest entry, stop and confirmation logic.",
      readingMinutes: 12,
      objective:
        "After this module you'll be able to mark a valid order block, grade its quality, and build a trade around it with defined risk.",
      blocks: [
        {
          kind: "text",
          html: "An order block is the <strong>last opposing candle</strong> before a strong, impulsive move. A bullish order block is the <strong>last down candle</strong> before a rally; a bearish order block is the last up candle before a sell-off. SMC treats it as the area where large orders were placed to launch the move — a footprint of where the aggressor stepped in. It is the single most-used entry zone in the entire methodology.",
        },
        {
          kind: "image",
          src: "/learn/smc/09-order-blocks.png",
          alt: "A bullish order block, the last down candle before a rally",
          caption:
            "The last down candle before a strong rally marks a bullish order block.",
        },
        {
          kind: "heading",
          text: "Why order blocks work",
        },
        {
          kind: "text",
          html: "The logic is that not all of the institutional orders were filled at the origin, so <strong>unfilled orders remain</strong> inside the block. When price returns, those orders can be completed and the move can resume. A stronger case exists when the departure from the block <strong>broke structure</strong> and left an imbalance (an FVG) behind — that combination is what separates a high-quality block from a random candle.",
        },
        {
          kind: "heading",
          text: "How to qualify a block",
        },
        {
          kind: "list",
          items: [
            "It should be the <strong>last opposing candle</strong> before an impulsive, structure-breaking move.",
            "The move away should be <strong>sharp</strong> and ideally leave a fair value gap.",
            "A <strong>fresh, untested</strong> block reacts more cleanly than one price has already revisited.",
            "Higher-timeframe blocks <strong>aligned with the trend</strong> are generally higher quality.",
          ],
        },
        {
          kind: "heading",
          text: "How to mark the zone precisely",
        },
        {
          kind: "text",
          html: "Draw the block from the <strong>open to the close</strong> of the last opposing candle, or use its full high-to-low if you want a wider zone. Many traders watch the <strong>50% of the block</strong> as the decision point — a reaction there is often enough. The far edge of the block is your invalidation: a candle closing through it means the block failed.",
        },
        {
          kind: "example",
          title: "Trading a bullish order block retest",
          steps: [
            "EUR/USD 1-hour rallies hard from a base. The <strong>last down candle</strong> before the impulse spans <strong>1.0840–1.0855</strong> — that is your bullish order block.",
            "The rally <strong>broke structure</strong> above the prior high and left an FVG, so the block is high quality. You wait for price to return.",
            "Price pulls back into the block and taps <strong>1.0850</strong> (near its 50%) with a bullish rejection candle on the 5-min. You enter long at <strong>1.0850</strong>.",
            "Stop goes just below the far edge at <strong>1.0836</strong> — a close there invalidates the block. Risk = <strong>14 pips</strong>.",
            "Account <strong>€2,000</strong>, risk <strong>1% = €20</strong>, so ~<strong>0.14 lots</strong>. Target the buy-side liquidity at <strong>1.0905</strong>, ~55 pips, about <strong>3.9:1</strong>.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with order blocks",
          items: [
            "<strong>Marking any down candle as a block.</strong> A valid block must precede an <strong>impulsive, structure-breaking</strong> move. A down candle before a slow drift is nothing.",
            "<strong>Trading blocks against the trend.</strong> A counter-trend block in a strong trend fails often. Favour blocks aligned with higher-timeframe order flow.",
            "<strong>Re-using an already-tapped block.</strong> The first retest is the cleanest. Once price has reacted and moved on, the leftover orders are largely gone.",
            "<strong>Skipping the stop because 'the block is strong'.</strong> Order blocks fail regularly. Fixed, small risk beyond the far edge is non-negotiable.",
          ],
        },
        {
          kind: "key",
          text: "An order block is the last opposing candle before an impulse — enter on a fresh retest, aligned with the trend, with your stop just beyond its far edge.",
        },
      ],
    },

    /* ============================================================ */
    /* 10. Breaker Blocks                                           */
    /* ============================================================ */
    {
      slug: "breaker-blocks",
      title: "Breaker Blocks",
      summary:
        "Understand breaker blocks — failed order blocks that flip direction — and how to trade the retest with defined risk.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to identify a breaker block, confirm the flip with a structure break, and trade its retest with a logical stop.",
      blocks: [
        {
          kind: "text",
          html: "A breaker block is an order block that <strong>failed and flipped</strong>. When price violates an order block and then breaks structure the other way, the old block changes role — a broken bullish block can become <strong>resistance</strong>, and a broken bearish block can become <strong>support</strong>. It is the SMC version of the classic support-becomes-resistance idea, but tied to a specific failed block and a confirmed structure break.",
        },
        {
          kind: "image",
          src: "/learn/smc/10-breaker.png",
          alt: "A failed order block flipping into a breaker block",
          caption:
            "An order block that fails and is broken flips into a breaker block on the retest.",
        },
        {
          kind: "heading",
          text: "How a breaker forms",
        },
        {
          kind: "text",
          html: "First an order block is established. Then price <strong>trades through it</strong> and, crucially, <strong>breaks structure</strong> in the opposite direction, signalling that the original story has changed. The traders trapped by the failed block provide fuel: their stops and reversals push price the new way when it retests the zone. Without that structure break it is just a failed block, not a breaker.",
        },
        {
          kind: "heading",
          text: "Why the trapped traders matter",
        },
        {
          kind: "text",
          html: "The edge in a breaker comes from <strong>trapped positions</strong>. Everyone who bought the original bullish block is now underwater once it fails and structure breaks down. As price retests the zone, those trapped longs bail out (selling) and new shorts pile in — both feed the move. That concentration of forced flow is why a confirmed breaker can react so cleanly.",
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "Wait for the structure break to <strong>confirm the flip</strong>, then look to enter on the retest of the breaker in the new direction. The stop belongs just <strong>beyond the breaker</strong>, since price closing back through it means the flip has failed. As always, target the next liquidity or structural level for a defined reward-to-risk.",
        },
        {
          kind: "list",
          items: [
            "A breaker is a <strong>failed order block</strong> confirmed by an opposite structure break.",
            "It <strong>flips role</strong>: old support becomes resistance and vice versa.",
            "The edge comes from <strong>trapped traders</strong> bailing out as price retests.",
            "Enter on the retest in the new direction, stop beyond the breaker.",
          ],
        },
        {
          kind: "example",
          title: "Trading a bearish breaker retest",
          steps: [
            "EUR/USD 1-hour was bullish with an order block at <strong>1.0870–1.0885</strong>. Price fails, trades through it, and <strong>breaks structure down</strong> below the last higher low at 1.0850.",
            "The failed bullish block is now a <strong>bearish breaker</strong> — expected to act as resistance on a retest.",
            "Price bounces back up into the breaker at <strong>1.0878</strong> and prints a bearish rejection on the 5-min. You enter short at <strong>1.0876</strong>.",
            "Stop goes above the breaker at <strong>1.0890</strong> — a close there means the flip failed. Risk = <strong>14 pips</strong>.",
            "Account <strong>€2,500</strong>, risk <strong>1% = €25</strong>, so ~<strong>0.18 lots</strong>. Target sell-side liquidity at <strong>1.0825</strong>, ~51 pips, about <strong>3.6:1</strong>.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with breaker blocks",
          items: [
            "<strong>Calling a failed block a breaker with no structure break.</strong> The flip is only valid once structure breaks the other way. Otherwise it is just a losing block.",
            "<strong>Front-running the retest.</strong> Entering before price actually returns to the breaker leaves you guessing. Wait for the retest and a reaction.",
            "<strong>Placing the stop inside the breaker zone.</strong> The zone is a range; a stop inside it gets clipped. Put it beyond the far edge of the breaker.",
            "<strong>Ignoring the higher-timeframe trend.</strong> A breaker fighting a strong higher-timeframe trend is lower probability. Prefer breakers that align with the new dominant flow.",
          ],
        },
        {
          kind: "key",
          text: "A breaker block is a failed order block that flips direction after a structure break — trade its retest with the new flow, stop just beyond the zone.",
        },
      ],
    },

    /* ============================================================ */
    /* 11. Mitigation Blocks                                        */
    /* ============================================================ */
    {
      slug: "mitigation-blocks",
      title: "Mitigation Blocks",
      summary:
        "Learn about mitigation blocks — zones where price returns to fill unmitigated orders — and how they differ from breakers.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to identify a mitigation block, distinguish it from a breaker, and trade a return to the zone with defined risk.",
      blocks: [
        {
          kind: "text",
          html: "A mitigation block is a zone price returns to in order to <strong>mitigate unfilled orders</strong>. In SMC, to <strong>mitigate</strong> means to let earlier positions be managed or completed — for example, when institutions revisit an area to fill orders that a fast move left behind. Practically, it is another return-to-zone entry, closely related to the order block and breaker.",
        },
        {
          kind: "image",
          src: "/learn/smc/11-mitigation.png",
          alt: "Price returning to mitigate unfilled orders",
          caption:
            "Price revisits a prior zone to mitigate orders before continuing in the trend.",
        },
        {
          kind: "heading",
          text: "Mitigation versus breaker",
        },
        {
          kind: "text",
          html: "The two are close cousins. A breaker block requires a <strong>liquidity sweep</strong> at its origin, while a mitigation block forms from a swing point that was <strong>not swept</strong> before the move. Both flip role after a structure break, but the distinction lies in whether liquidity was taken first. Many traders treat them almost interchangeably, and in practice the <strong>entry and stop logic is the same</strong>.",
        },
        {
          kind: "heading",
          text: "How to spot and use it",
        },
        {
          kind: "text",
          html: "Mark the last swing that produced an impulsive, structure-breaking move <strong>without a prior sweep</strong>. When price returns to <strong>mitigate the zone</strong>, watch for the trend to resume with a lower-timeframe rejection. Because these are fine distinctions, confirm with structure rather than acting on the label alone — the name matters less than the fact that price is returning to a fresh, impulse-origin zone.",
        },
        {
          kind: "list",
          items: [
            "A mitigation block forms from a swing <strong>not swept</strong> before its impulsive move.",
            "A breaker forms where liquidity <strong>was swept</strong> first — that is the only real difference.",
            "Both are <strong>return-to-zone</strong> entries with the same practical logic.",
            "Confirm with a structure shift and a reaction; don't trade the label blind.",
          ],
        },
        {
          kind: "example",
          title: "Trading a bullish mitigation block",
          steps: [
            "EUR/USD 1-hour rallies impulsively and breaks structure up from a swing low at <strong>1.0830</strong> that was <strong>not swept</strong> beforehand — a clean mitigation origin.",
            "You mark the zone <strong>1.0830–1.0842</strong> and wait for price to return to mitigate it.",
            "Price pulls back into the zone at <strong>1.0838</strong> with a bullish rejection candle on the 5-min. You enter long at <strong>1.0838</strong>.",
            "Stop goes below the zone at <strong>1.0824</strong> — a close there invalidates it. Risk = <strong>14 pips</strong>.",
            "Account <strong>€2,000</strong>, risk <strong>1% = €20</strong>, so ~<strong>0.14 lots</strong>. Target buy-side liquidity at <strong>1.0895</strong>, ~57 pips, about <strong>4:1</strong>.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with mitigation blocks",
          items: [
            "<strong>Obsessing over the mitigation-versus-breaker label.</strong> The distinction is subtle and rarely changes the trade. Focus on a valid impulse origin and confirmation.",
            "<strong>Using a zone with no structure break.</strong> Without an impulsive, structure-breaking move away, there is no reason for price to return and continue.",
            "<strong>Trading a stale, already-mitigated zone.</strong> The first return is the cleanest. Once price has tapped and continued, the leftover orders are largely gone.",
            "<strong>Skipping confirmation.</strong> A tap of the zone is not an entry on its own. Wait for a reaction candle and keep risk fixed beyond the zone.",
          ],
        },
        {
          kind: "key",
          text: "A mitigation block is a return to fill unmitigated orders — like a breaker but formed without a liquidity sweep first; trade the fresh retest with confirmation and a stop beyond the zone.",
        },
      ],
    },

    /* ============================================================ */
    /* 12. Fair Value Gaps (FVG)                                    */
    /* ============================================================ */
    {
      slug: "fair-value-gaps",
      title: "Fair Value Gaps (FVG)",
      summary:
        "Master fair value gaps — three-candle imbalances the market often revisits — with honest entry and stop logic.",
      readingMinutes: 12,
      objective:
        "After this module you'll be able to mark a fair value gap, grade its quality, and use it as an entry zone with defined risk.",
      blocks: [
        {
          kind: "text",
          html: "A fair value gap, or <strong>FVG</strong>, is a price imbalance left by a fast, one-sided move. It appears as a <strong>three-candle pattern</strong> where the first and third candles do not overlap, leaving a gap between them. SMC treats this gap as an <strong>inefficiency</strong> the market tends to revisit and fill. It is one of the most popular SMC entries because it is objective — you can measure it exactly.",
        },
        {
          kind: "image",
          src: "/learn/smc/12-fvg.png",
          alt: "A three-candle fair value gap the market fills",
          caption:
            "The gap between candle one and candle three is the fair value gap.",
        },
        {
          kind: "heading",
          text: "Why FVGs matter",
        },
        {
          kind: "text",
          html: "The move that creates an FVG was so aggressive that price <strong>skipped past a range</strong> without two-sided trading — an inefficiency where one side never got to transact. Markets tend to seek efficiency, so price often returns to <strong>rebalance the gap</strong> before continuing. That return is what SMC traders use for an entry, ideally in the direction of the move that created it.",
        },
        {
          kind: "heading",
          text: "How to find a valid FVG",
        },
        {
          kind: "list",
          items: [
            "Look for three candles where <strong>candle 1's wick</strong> and candle 3's wick leave a gap around candle 2.",
            "The <strong>stronger and more impulsive</strong> the middle candle, the more meaningful the gap.",
            "FVGs <strong>aligned with the trend</strong> and order flow are higher quality than counter-trend gaps.",
            "Not every gap fills, and some fill only partially — it is a probability, not a rule.",
          ],
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "A common approach is a <strong>limit at the gap</strong> or entering as price taps it with confirmation. Many traders watch the <strong>50% of the gap</strong> as the decision point — a reaction there is often enough, and it improves the entry price. The stop sits beyond the gap or the origin of the move, and the target is the next liquidity pool. Combine the FVG with structure — a gap alone is a weak signal.",
        },
        {
          kind: "example",
          title: "Entering a bullish fair value gap",
          steps: [
            "EUR/USD 15-min prints a strong impulse up that breaks structure. The three-candle FVG spans <strong>1.0846–1.0862</strong> (candle 1 high 1.0846, candle 3 low 1.0862).",
            "The impulse is aligned with a bullish higher-timeframe bias, so the gap is high quality. You wait for a pullback.",
            "Price retraces into the gap and reacts at its 50%, <strong>1.0854</strong>, with a bullish 5-min candle. You enter long at <strong>1.0854</strong>.",
            "Stop goes below the gap and impulse origin at <strong>1.0840</strong>. Risk = <strong>14 pips</strong>.",
            "Account <strong>€3,000</strong>, risk <strong>1% = €30</strong>, so ~<strong>0.21 lots</strong>. Target buy-side liquidity at <strong>1.0910</strong>, ~56 pips, about <strong>4:1</strong>.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with fair value gaps",
          items: [
            "<strong>Trading every gap you see.</strong> Tiny gaps from weak candles fill randomly. Only meaningful, impulsive FVGs aligned with the trend are worth an entry.",
            "<strong>Assuming a gap must fill.</strong> Many never fill, or fill much later. It is a tendency, not a guarantee — never hold a losing trade 'because the gap will fill'.",
            "<strong>Ignoring structure and trend.</strong> A counter-trend FVG against strong flow is low probability. Pair the gap with a structure shift for context.",
            "<strong>No confirmation at the tap.</strong> Buying the instant price touches a gap, with no reaction, often means catching it mid-flight. Wait for a candle to react.",
          ],
        },
        {
          kind: "key",
          text: "A fair value gap is a three-candle imbalance price often rebalances — use it as an entry zone aligned with the trend, never as a stand-alone signal.",
        },
      ],
    },

    /* ============================================================ */
    /* 13. Imbalances                                               */
    /* ============================================================ */
    {
      slug: "imbalances",
      title: "Imbalances",
      summary:
        "Understand imbalances — one-sided moves that leave inefficiency in price — and how they relate to fair value gaps.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to spot an imbalance, understand why price tends to revisit it, and use it as an area of interest with defined risk.",
      blocks: [
        {
          kind: "text",
          html: "An imbalance is any area where price moved so quickly in one direction that <strong>buying and selling were lopsided</strong>. The fair value gap is the most common example, but the broader idea is simply a stretch of chart where one side overwhelmed the other and left an <strong>inefficiency</strong> behind. Think of the FVG as the precise, measurable version and imbalance as the general concept.",
        },
        {
          kind: "image",
          src: "/learn/smc/13-imbalance.png",
          alt: "A one-sided move leaving an imbalance in price",
          caption:
            "A run of one-sided candles leaves an imbalance the market may later rebalance.",
        },
        {
          kind: "heading",
          text: "The efficiency principle",
        },
        {
          kind: "text",
          html: "Markets prefer <strong>two-sided trading</strong>, where both buyers and sellers transact across a price range. A rapid, one-sided move skips that, so price often returns later to <strong>rebalance the area</strong>. This is the same mechanism behind FVGs, generalised to any lopsided run in price — a run of big same-colour candles with little overlap is the visual signature.",
        },
        {
          kind: "heading",
          text: "How to use it",
        },
        {
          kind: "text",
          html: "Mark obvious imbalances as <strong>areas of interest</strong> where price may react on a return. Pair them with structure and liquidity for context; an imbalance on its own does not tell you direction, only that an inefficiency exists. And remember, not all imbalances get filled — some stay open for a long time or never rebalance at all.",
        },
        {
          kind: "list",
          items: [
            "An imbalance is a <strong>one-sided run</strong> that left inefficiency in price.",
            "The <strong>FVG</strong> is the precise three-candle version of the same idea.",
            "Treat it as an <strong>area of interest</strong>, not a directional signal on its own.",
            "Pair with structure and liquidity; not every imbalance rebalances.",
          ],
        },
        {
          kind: "example",
          title: "Using an imbalance as an entry area",
          steps: [
            "EUR/USD 1-hour drops in a run of four big black candles from <strong>1.0900 to 1.0840</strong> with almost no overlap — a clear bearish imbalance, and the higher-timeframe bias is bearish.",
            "You mark the imbalance zone roughly <strong>1.0868–1.0885</strong> (the least-traded middle of the run) as an area of interest for a short.",
            "Price rebounds up into the zone at <strong>1.0876</strong> and stalls with a bearish 5-min rejection. You enter short at <strong>1.0874</strong>.",
            "Stop goes above the imbalance at <strong>1.0891</strong>. Risk = <strong>17 pips</strong>.",
            "Account <strong>€2,000</strong>, risk <strong>1% = €20</strong>, so ~<strong>0.11 lots</strong>. Target the sell-side liquidity at <strong>1.0835</strong>, ~39 pips, about <strong>2.3:1</strong>.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with imbalances",
          items: [
            "<strong>Treating an imbalance as a direction signal.</strong> It only marks inefficiency. Direction comes from structure and trend, not the gap itself.",
            "<strong>Expecting every imbalance to fill.</strong> Many stay open indefinitely. Do not marry a losing trade to the idea that price 'must' return.",
            "<strong>Marking micro-imbalances.</strong> Small, choppy gaps are noise. Only obvious, impulsive one-sided runs are worth watching.",
            "<strong>Entering with no confirmation at the zone.</strong> A tap of the imbalance is an area of interest, not a trigger. Wait for a reaction and define risk.",
          ],
        },
        {
          kind: "key",
          text: "An imbalance is a one-sided move that left inefficiency — price often revisits it to rebalance, but treat it as an area of interest paired with structure, not a signal.",
        },
      ],
    },

    /* ============================================================ */
    /* 14. Premium & Discount Zones                                 */
    /* ============================================================ */
    {
      slug: "premium-discount",
      title: "Premium & Discount Zones",
      summary:
        "Learn premium and discount zones — the two halves of a range split at equilibrium — to time entries at better prices.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to split a range into premium and discount, pick the side that favours your trade, and time entries at better prices.",
      blocks: [
        {
          kind: "text",
          html: "Premium and discount describe where price sits within a range relative to its midpoint. Split a swing from low to high with a Fibonacci tool: the <strong>upper half is premium</strong> (expensive) and the <strong>lower half is discount</strong> (cheap). The <strong>50% line</strong> between them is equilibrium. It is the simplest idea in SMC and one of the most useful — it stops you buying at the top and selling at the bottom.",
        },
        {
          kind: "image",
          src: "/learn/smc/14-premium-discount.png",
          alt: "Premium and discount zones split at 50% equilibrium",
          caption:
            "Above 50% is premium; below 50% is discount, split at equilibrium.",
        },
        {
          kind: "heading",
          text: "Why it matters",
        },
        {
          kind: "text",
          html: "The idea is to <strong>buy at a discount and sell at a premium</strong> — the same logic as any market. In a bullish scenario you want longs from the discount zone, and in a bearish scenario you want shorts from the premium zone. It stops you chasing price at expensive levels and pushes your entries toward the side of the range with better reward-to-risk, because the stop can sit closer to the extreme.",
        },
        {
          kind: "heading",
          text: "How to apply it",
        },
        {
          kind: "list",
          items: [
            "Draw the Fibonacci from the <strong>range low to the range high</strong> (or high to low) on the swing you care about.",
            "For longs, favour setups in the <strong>discount half</strong>; for shorts, the <strong>premium half</strong>.",
            "Combine with order blocks or FVGs that sit in the <strong>favourable zone</strong> for confluence.",
            "<strong>Redraw the range</strong> as structure updates — premium and discount are always relative to the current swing.",
          ],
        },
        {
          kind: "heading",
          text: "Combining it with a zone",
        },
        {
          kind: "text",
          html: "Premium/discount is a <strong>filter</strong>, not a trigger. Its real power comes from confluence: an order block or FVG that also sits in the discount half of a bullish range is far more attractive than the same block sitting in premium. When your entry zone and the favourable half of the range <strong>line up</strong>, you have a much cleaner reason to trade.",
        },
        {
          kind: "example",
          title: "Buying from the discount half of a range",
          steps: [
            "EUR/USD 1-hour rallies from a low at <strong>1.0800</strong> to a high at <strong>1.0900</strong>, bias bullish. Equilibrium (50%) is <strong>1.0850</strong>.",
            "You only want longs <strong>below 1.0850</strong> (discount). Price pulls back and there is a bullish order block at <strong>1.0825</strong> — deep in discount. Confluence.",
            "Price taps the block at <strong>1.0827</strong> with a bullish 5-min rejection. You enter long at <strong>1.0827</strong>.",
            "Stop goes below the block at <strong>1.0812</strong>. Risk = <strong>15 pips</strong>.",
            "Account <strong>€2,000</strong>, risk <strong>1% = €20</strong>, so ~<strong>0.13 lots</strong>. Target the range high / buy-side liquidity at <strong>1.0900</strong>, ~73 pips, about <strong>4.9:1</strong>.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with premium & discount",
          items: [
            "<strong>Buying in premium in a bull setup.</strong> Longing the expensive upper half means a worse price and a wider stop. Wait for discount.",
            "<strong>Forgetting to redraw the range.</strong> Once structure breaks, the old range is stale. Premium and discount must be recalculated on the new swing.",
            "<strong>Using it as a trigger by itself.</strong> 'Price is in discount' is not an entry. It is a filter — you still need a zone and confirmation.",
            "<strong>Picking a meaningless range.</strong> Splitting a random, choppy swing gives a useless midpoint. Anchor on a clean, obvious high and low.",
          ],
        },
        {
          kind: "key",
          text: "Premium is the expensive upper half of a range, discount the cheap lower half — buy discount, sell premium, and use it as a filter that stacks with your entry zone.",
        },
      ],
    },

    /* ============================================================ */
    /* 15. Equilibrium                                              */
    /* ============================================================ */
    {
      slug: "equilibrium",
      title: "Equilibrium",
      summary:
        "Understand equilibrium — the 50% midpoint of a range that separates premium from discount and acts as a fair-value pivot.",
      readingMinutes: 5,
      objective:
        "After this module you'll be able to find equilibrium in a range and use it as a fair-value reference.",
      blocks: [
        {
          kind: "text",
          html: "Equilibrium is the <strong>50% level</strong> of a defined range — the exact midpoint between a swing high and swing low. It is the dividing line between premium and discount, and SMC treats it as the point of <strong>fair value</strong> where price is neither cheap nor expensive.",
        },
        {
          kind: "image",
          src: "/learn/smc/15-equilibrium.png",
          alt: "The 50% equilibrium level of a trading range",
          caption:
            "Equilibrium is the 50% midpoint that separates premium from discount.",
        },
        {
          kind: "heading",
          text: "Why the midpoint matters",
        },
        {
          kind: "text",
          html: "Because it marks fair value, equilibrium often acts as a <strong>pivot or magnet</strong>. Price frequently retraces to around 50% of a strong move before deciding its next direction, which is why the midpoint shows up in so many SMC and Fibonacci-based setups.",
        },
        {
          kind: "heading",
          text: "How to use it",
        },
        {
          kind: "text",
          html: "Use equilibrium as a <strong>reference, not a rule</strong>: a bullish trade is more attractive when price is below equilibrium (discount), and a bearish trade when it is above (premium). It is a filter that stops you from entering at poor prices, best confirmed by structure and a level of interest.",
        },
        {
          kind: "key",
          text: "Equilibrium is the 50% fair-value midpoint of a range — the pivot separating discount below from premium above.",
        },
      ],
    },

    /* ============================================================ */
    /* 16. Inducement                                               */
    /* ============================================================ */
    {
      slug: "inducement",
      title: "Inducement",
      summary:
        "Learn about inducement — the obvious liquidity that lures traders in before the real move — and how to avoid the trap.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to spot inducement and avoid entering on the liquidity that precedes the real setup.",
      blocks: [
        {
          kind: "text",
          html: "Inducement is a piece of <strong>obvious liquidity</strong> placed to lure traders in before the intended move. It is the tempting swing point or minor level that gets everyone positioned the wrong way, providing the orders needed to fill the real move. In SMC it explains why the cleanest-looking entry so often fails.",
        },
        {
          kind: "image",
          src: "/learn/smc/16-inducement.png",
          alt: "An inducement level luring traders before the real move",
          caption:
            "An obvious minor level induces early entries before price runs to the real zone.",
        },
        {
          kind: "heading",
          text: "How inducement works",
        },
        {
          kind: "text",
          html: "The obvious high or low that everyone would trade becomes <strong>the bait</strong>. Retail piles in, their stops become liquidity, and price sweeps that inducement before reaching the genuine order block or FVG deeper in the move. The real setup usually sits <strong>beyond the inducement</strong>, not at the first tempting level.",
        },
        {
          kind: "heading",
          text: "How to avoid the trap",
        },
        {
          kind: "text",
          html: "Ask whether the level you like is <strong>too obvious</strong> — if so, treat it as potential inducement rather than an entry. Look for the deeper zone that price is likely reaching for, and wait for a sweep of the inducement plus a structure shift. This is a probabilistic idea, not a certainty, so still define risk clearly.",
        },
        {
          kind: "list",
          items: [
            "Inducement is obvious liquidity designed to lure early entries.",
            "The real order block or FVG usually sits beyond the inducement.",
            "If a level looks too clean, treat it as possible bait.",
            "Wait for the inducement to be swept before trusting the deeper zone.",
          ],
        },
        {
          kind: "key",
          text: "Inducement is the obvious liquidity that baits traders early — the real entry usually waits beyond it.",
        },
      ],
    },

    /* ============================================================ */
    /* 17. Displacement                                             */
    /* ============================================================ */
    {
      slug: "displacement",
      title: "Displacement",
      summary:
        "Understand displacement — the sharp, one-directional move that signals institutional intent and validates SMC setups.",
      readingMinutes: 5,
      objective:
        "After this module you'll be able to recognise displacement and use it to confirm a genuine change in order flow.",
      blocks: [
        {
          kind: "text",
          html: "Displacement is a <strong>sharp, forceful move</strong> in one direction — a run of strong, wide-range candles that leaves imbalance behind. SMC treats it as a footprint of <strong>institutional intent</strong>, because ordinary noise does not usually move price this decisively.",
        },
        {
          kind: "image",
          src: "/learn/smc/17-displacement.png",
          alt: "A sharp displacement move signalling institutional intent",
          caption:
            "A run of strong candles leaving imbalance — displacement signalling intent.",
        },
        {
          kind: "heading",
          text: "Why it matters",
        },
        {
          kind: "text",
          html: "Displacement is what turns a plain break into a meaningful one. A structure break <strong>backed by displacement</strong> is far more convincing than a slow, overlapping drift through a level, because it usually leaves an FVG and a fresh order block you can trade from. It is the energy that validates a market structure shift.",
        },
        {
          kind: "heading",
          text: "How to use it",
        },
        {
          kind: "text",
          html: "Use displacement as a <strong>confirmation filter</strong>. After a sweep, a displacement move away from the level tells you the reversal has conviction. The order block and FVG created by that displacement then become your entry zones. Weak, indecisive breaks without displacement deserve more caution.",
        },
        {
          kind: "key",
          text: "Displacement is a sharp, imbalanced move that signals intent — it validates structure shifts and creates tradeable zones.",
        },
      ],
    },

    /* ============================================================ */
    /* 18. Power of Three                                           */
    /* ============================================================ */
    {
      slug: "power-of-three",
      title: "Power of Three",
      summary:
        "Learn the Power of Three model — accumulation, manipulation and distribution — and how it frames a market cycle.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to describe the accumulation, manipulation and distribution phases of the Power of Three.",
      blocks: [
        {
          kind: "text",
          html: "The Power of Three is an ICT model that breaks a move into <strong>three phases</strong>: accumulation, manipulation and distribution. It is a way of framing how a large position might be built, protected and then unwound within a session or a swing.",
        },
        {
          kind: "image",
          src: "/learn/smc/18-power-of-three.png",
          alt: "Accumulation, manipulation and distribution phases",
          caption:
            "Accumulation, then a manipulation sweep, then distribution in the true direction.",
        },
        {
          kind: "heading",
          text: "The three phases",
        },
        {
          kind: "list",
          items: [
            "Accumulation: price consolidates in a range while a position is quietly built.",
            "Manipulation: a false move sweeps liquidity in the wrong direction to trap traders.",
            "Distribution: the real, sustained move plays out in the intended direction.",
          ],
        },
        {
          kind: "text",
          html: "The insight is that the <strong>first obvious move is often the fake</strong>. During manipulation, price runs the opposite way to gather liquidity and trap breakout traders, and only then does the genuine distribution leg begin. Recognising this can stop you from chasing the manipulation move.",
        },
        {
          kind: "heading",
          text: "How to use it honestly",
        },
        {
          kind: "text",
          html: "Treat Power of Three as a <strong>narrative framework</strong>, not a precise timing tool. Phases are only clear in hindsight and do not appear on every chart. Use it to stay patient through the manipulation and to align entries with the distribution leg once structure confirms it.",
        },
        {
          kind: "key",
          text: "Power of Three frames a move as accumulate, manipulate, distribute — the first obvious push is often the trap.",
        },
      ],
    },

    /* ============================================================ */
    /* 19. ICT Kill Zones                                           */
    /* ============================================================ */
    {
      slug: "ict-kill-zones",
      title: "ICT Kill Zones",
      summary:
        "Understand ICT kill zones — the session windows some traders favour — with an honest note that times are illustrative.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to describe the ICT kill zones and adapt session windows to your own market and broker.",
      blocks: [
        {
          kind: "text",
          html: "ICT kill zones are specific <strong>time windows</strong> during the trading day when volatility and volume are often higher, typically around major session opens. The idea is that liquidity events cluster during these windows, so setups may resolve more cleanly than in quiet periods.",
        },
        {
          kind: "image",
          src: "/learn/smc/19-kill-zones.png",
          alt: "ICT kill zones marking high-probability trading hours",
          caption:
            "Kill zones mark session windows where activity tends to concentrate — times are illustrative.",
        },
        {
          kind: "heading",
          text: "The commonly cited windows",
        },
        {
          kind: "list",
          items: [
            "London open — often around the start of the European session.",
            "New York open — around the start of the US session, frequently overlapping London.",
            "London close — a later window as the European session winds down.",
            "An Asian range that later provides liquidity for the London and New York moves.",
          ],
        },
        {
          kind: "text",
          html: "These labels come from the FX world and are usually quoted in a specific time zone. The exact clock times are <strong>illustrative only</strong> and shift with <strong>daylight saving, your broker's server time, and the market you trade</strong> — crypto and index futures do not follow FX sessions. Always convert the concept to your own instrument and time zone.",
        },
        {
          kind: "heading",
          text: "How to use it honestly",
        },
        {
          kind: "text",
          html: "Kill zones are a <strong>filter, not a signal</strong>. Trading during active hours can improve fills and follow-through, but the window alone is not a reason to trade — you still need structure, liquidity and a valid setup. Backtest whether these windows actually help on your market before relying on them.",
        },
        {
          kind: "key",
          text: "Kill zones flag active session windows, but the exact times are illustrative and depend on your session, broker and market.",
        },
      ],
    },

    /* ============================================================ */
    /* 20. Optimal Trade Entry (OTE)                                */
    /* ============================================================ */
    {
      slug: "optimal-trade-entry",
      title: "Optimal Trade Entry (OTE)",
      summary:
        "Master the Optimal Trade Entry zone — the 62% to 79% retracement area — with honest entry, stop and target logic.",
      readingMinutes: 7,
      objective:
        "After this module you'll be able to plot the OTE zone and structure a trade entry, stop and target around it.",
      blocks: [
        {
          kind: "text",
          html: "Optimal Trade Entry, or <strong>OTE</strong>, is an ICT retracement zone used to time entries within a confirmed move. It is drawn with a Fibonacci from the start to the end of an impulse and focuses on the <strong>62% to 79%</strong> retracement band, a deep pullback that still sits within the trend.",
        },
        {
          kind: "image",
          src: "/learn/smc/20-ote.png",
          alt: "The 62 to 79 percent OTE retracement zone",
          caption:
            "The OTE zone sits in the 62%–79% retracement of a confirmed impulse.",
        },
        {
          kind: "heading",
          text: "Why the deep retracement",
        },
        {
          kind: "text",
          html: "A deep pullback lets you enter at a <strong>discount within the trend</strong>, improving your reward-to-risk because the stop can sit just beyond the origin. The 70.5% level between 62% and 79% is often watched as the sweet spot. The logic works only when the impulse and structure genuinely favour continuation.",
        },
        {
          kind: "heading",
          text: "Entry, stop and target",
        },
        {
          kind: "list",
          items: [
            "Draw the Fibonacci across a confirmed, structure-breaking impulse.",
            "Look for entries as price trades into the 62%–79% zone, ideally at an order block or FVG there.",
            "Stop goes just beyond the origin of the move (below the swing low for longs).",
            "Targets are typically the prior high/low or the next liquidity pool for strong reward-to-risk.",
          ],
        },
        {
          kind: "text",
          html: "OTE is <strong>not a stand-alone signal</strong>. Combine it with market structure, a liquidity sweep and a confirmation like a CHoCH on a lower timeframe. Deep retracements sometimes turn into full reversals, so the stop beyond the origin is what keeps a wrong read small.",
        },
        {
          kind: "key",
          text: "OTE is the 62%–79% retracement of a confirmed impulse — a discount entry with the stop just beyond the origin.",
        },
      ],
    },

    /* ============================================================ */
    /* 21. Building a Complete SMC Setup                            */
    /* ============================================================ */
    {
      slug: "smc-setup",
      title: "Building a Complete SMC Setup",
      summary:
        "Combine market structure, liquidity, order blocks and OTE into a repeatable five-step SMC setup with strict risk management.",
      readingMinutes: 8,
      objective:
        "After this module you'll be able to run a five-step SMC checklist to plan an entry, stop and target with disciplined risk.",
      blocks: [
        {
          kind: "text",
          html: "Individual concepts only become an edge when they combine into a <strong>repeatable process</strong>. A complete SMC setup stacks the pieces from this course — bias, liquidity, structure shift, entry zone and risk — into a single checklist you can run the same way on every chart.",
        },
        {
          kind: "image",
          src: "/learn/smc/21-setup.png",
          alt: "A five-step SMC setup checklist from bias to entry",
          caption:
            "A five-step checklist that turns SMC theory into a repeatable trade plan.",
        },
        {
          kind: "heading",
          text: "The five-step checklist",
        },
        {
          kind: "list",
          items: [
            "Bias: read higher-timeframe structure (BOS/CHoCH) and order flow to pick a direction.",
            "Liquidity: mark the buy-side and sell-side pools price is likely reaching for.",
            "Sweep and shift: wait for a liquidity sweep followed by a CHoCH or MSS with displacement.",
            "Entry zone: refine to an order block, FVG or OTE in the discount/premium that favours your bias.",
            "Risk: set the stop beyond the invalidation, target the next liquidity, and size the position from the stop.",
          ],
        },
        {
          kind: "text",
          html: "Notice how the steps reinforce each other: you only take an entry when <strong>structure, liquidity and the zone agree</strong>. When they conflict — for example an order block in a premium zone against your bias — the honest answer is usually <strong>no trade</strong>.",
        },
        {
          kind: "heading",
          text: "Risk management is the real edge",
        },
        {
          kind: "text",
          html: "A widely used guideline is to <strong>risk a small fixed percentage</strong> per trade so no single loss hurts. Position size is calculated from the stop distance, never the other way around. Keep a <strong>trading journal</strong> with screenshots and outcomes, and review whether you actually followed your rules.",
        },
        {
          kind: "text",
          html: "Finally, stay honest. These are <strong>models and interpretations</strong>, not certainties; <strong>no setup wins every time</strong>; and every idea here should be <strong>backtested</strong> before you risk real money. Consistency comes from disciplined process and protecting capital — not from prediction or promises.",
        },
        {
          kind: "key",
          text: "A complete SMC setup only fires when structure, liquidity and the entry zone agree — and strict risk management is the real edge.",
        },
      ],
    },
  ],
};
