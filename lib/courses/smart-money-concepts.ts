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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to explain what Smart Money Concepts are and why they focus on institutional order flow rather than indicators.",
      blocks: [
        {
          kind: "text",
          html: "Smart Money Concepts (SMC) is a way of reading charts based on the idea that large institutions — banks, funds and market makers — leave <strong>footprints in price</strong>. The framework, popularised in part through ICT (Inner Circle Trader) teachings, tries to explain moves through liquidity and order flow rather than lagging indicators. It is a model, not a proven fact about what any specific institution is doing.",
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
          text: "The central idea",
        },
        {
          kind: "text",
          html: "The story SMC tells is that markets need <strong>liquidity to fill large orders</strong>. Big players cannot buy or sell in size without a counterparty, so price is often engineered toward areas where retail stops and pending orders cluster. Once that liquidity is taken, price can move in the intended direction. Whether or not this literally happens, it is a useful lens for spotting repeatable patterns.",
        },
        {
          kind: "heading",
          text: "Staying honest about the hype",
        },
        {
          kind: "text",
          html: "SMC and ICT attract a lot of hype and promises online. Treat every concept in this course as an <strong>interpretation of price</strong>, not a crystal ball. No concept wins every time, edges must be <strong>backtested</strong>, and results depend entirely on discipline and risk management.",
        },
        {
          kind: "list",
          items: [
            "SMC frames moves around liquidity and order flow, not indicators.",
            "Institutions need liquidity to fill size — that is the core mechanism.",
            "These are models and interpretations, not guaranteed signals.",
            "Backtesting and strict risk management decide whether it works for you.",
          ],
        },
        {
          kind: "key",
          text: "Smart Money Concepts read the chart as a liquidity game — a useful model to backtest, never a guaranteed edge.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to describe institutional order flow and identify the dominant direction on a chart.",
      blocks: [
        {
          kind: "text",
          html: "Institutional order flow is the idea that large participants push price in a <strong>consistent direction</strong> over time as they build and unwind positions. Because their orders are too big to fill at once, the resulting pressure shows up as a series of impulsive moves in one direction interrupted by smaller pullbacks.",
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
          text: "How to read the flow",
        },
        {
          kind: "text",
          html: "The simplest tell is <strong>impulse versus correction</strong>. Strong, wide-range candles in one direction followed by weak, overlapping candles against it suggest that side is in control. When buyers are the aggressor, dips are shallow and rallies are sharp; the reverse is true when sellers dominate.",
        },
        {
          kind: "heading",
          text: "Why it matters",
        },
        {
          kind: "text",
          html: "Aligning with order flow means <strong>trading with the aggressor</strong> rather than guessing tops and bottoms. Most SMC setups are simply attempts to enter in the direction of the prevailing flow at a favourable price after liquidity has been taken.",
        },
        {
          kind: "list",
          items: [
            "Impulsive candles reveal the aggressive side; corrective candles reveal the passive side.",
            "Shallow pullbacks in one direction hint at strong order flow.",
            "Order flow is inferred from price, not observed directly — treat it as a read.",
            "Trading against clear flow is possible but statistically harder.",
          ],
        },
        {
          kind: "key",
          text: "Order flow is the direction of the aggressor — align with it instead of guessing reversals.",
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
      readingMinutes: 7,
      objective:
        "After this module you'll be able to label market structure and distinguish a BOS, a CHoCH and an MSS on any chart.",
      blocks: [
        {
          kind: "text",
          html: "Market structure is the sequence of <strong>swing highs and swing lows</strong> that defines whether a market is trending or turning. In SMC, three labels describe how structure develops: BOS, CHoCH and MSS. Reading them correctly is the backbone of the whole methodology.",
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
            "BOS (Break of Structure): price breaks a swing point in the trend's direction — continuation.",
            "CHoCH (Change of Character): the first break against the trend — an early reversal warning.",
            "MSS (Market Structure Shift): a decisive break, often on displacement, confirming the new direction.",
          ],
        },
        {
          kind: "text",
          html: "A <strong>BOS confirms continuation</strong>: in an uptrend it is a break above the prior swing high. A <strong>CHoCH is the first crack</strong> against the trend and only warns of change. An MSS is a stronger, momentum-backed shift that many traders treat as confirmation that order flow has flipped.",
        },
        {
          kind: "heading",
          text: "How to use it in practice",
        },
        {
          kind: "text",
          html: "Require a <strong>candle close</strong> beyond a swing point rather than a wick to filter weak pokes. After a CHoCH or MSS, stop hunting for continuation trades and start looking for setups in the new direction — but wait for a fresh structure to build before committing, because structure can be misread in real time.",
        },
        {
          kind: "key",
          text: "BOS means continuation, CHoCH is the first warning of a turn, and MSS confirms order flow has shifted.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to locate pools of resting liquidity above highs and below lows on any chart.",
      blocks: [
        {
          kind: "text",
          html: "Liquidity is simply the <strong>resting orders</strong> available for someone to trade against — stop losses, pending orders and breakout entries. SMC treats these clusters as targets, because large players need them to fill size. Understanding where liquidity sits is the key that unlocks most other concepts in this course.",
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
          html: "The most predictable pools sit at obvious price points. Stops from short sellers and breakout buy orders gather <strong>above swing highs</strong>, while stops from longs and breakout sell orders gather <strong>below swing lows</strong>. Equal highs and equal lows are especially strong liquidity magnets because so many orders line up at the same price.",
        },
        {
          kind: "heading",
          text: "Why price seeks it",
        },
        {
          kind: "text",
          html: "The mechanism is a matching problem: a large buyer needs many sellers, and the easiest place to find them is where <strong>stop-sell orders</strong> cluster below a low. This is why price often runs a level, grabs the orders, and then reverses — the theme of the next few modules.",
        },
        {
          kind: "list",
          items: [
            "Liquidity = resting orders (stops, pending orders, breakout entries).",
            "It pools above highs (buy-side) and below lows (sell-side).",
            "Equal highs and equal lows are the strongest magnets.",
            "Price often targets liquidity before making its real move.",
          ],
        },
        {
          kind: "key",
          text: "Liquidity is where orders rest — above highs and below lows — and SMC treats those pools as price magnets.",
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
      readingMinutes: 5,
      objective:
        "After this module you'll be able to mark buy-side liquidity above swing highs and equal highs.",
      blocks: [
        {
          kind: "text",
          html: "Buy-side liquidity, or <strong>BSL</strong>, is the pool of buy orders resting <strong>above the market</strong>. It sounds counter-intuitive, but the buy orders here are mostly stop losses from short sellers and breakout buy stops. When price rises into them, they trigger and become buying pressure.",
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
          html: "Look for <strong>swing highs and equal highs</strong>. A single old high holds some liquidity; two or more highs at roughly the same price form a stronger pool because traders keep placing stops just above the obvious resistance. The flatter and more obvious the highs, the more orders likely sit above them.",
        },
        {
          kind: "heading",
          text: "How SMC traders use it",
        },
        {
          kind: "text",
          html: "BSL is often a <strong>target, not an entry</strong>. In a bearish scenario, price may rally into buy-side liquidity to fill large sell orders before turning down. Marking BSL tells you where an up-move might be running out of fuel — but a run into liquidity is not automatically a reversal, so wait for confirmation.",
        },
        {
          kind: "key",
          text: "Buy-side liquidity sits above highs — mostly short stops and breakout buys that price may run before reversing down.",
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
      readingMinutes: 5,
      objective:
        "After this module you'll be able to mark sell-side liquidity below swing lows and equal lows.",
      blocks: [
        {
          kind: "text",
          html: "Sell-side liquidity, or <strong>SSL</strong>, is the mirror image of BSL: the pool of sell orders resting <strong>below the market</strong>. These are mostly stop losses from long traders and breakout sell stops. When price falls into them, they trigger and add selling pressure exactly where a large buyer might want fills.",
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
          html: "Mark <strong>swing lows and equal lows</strong>. Two or more lows at a similar price form a stronger pool because everyone places protective stops just under obvious support. A clean, flat double bottom is one of the most reliable liquidity magnets on the chart.",
        },
        {
          kind: "heading",
          text: "How SMC traders use it",
        },
        {
          kind: "text",
          html: "In a bullish scenario, price may dip into sell-side liquidity to <strong>trigger long stops</strong> and provide fills for large buyers before rallying. So a sweep of SSL followed by a strong reversal is a classic long context — but only when structure and confirmation agree, since a break of the low can also mean genuine continuation down.",
        },
        {
          kind: "key",
          text: "Sell-side liquidity sits below lows — mostly long stops and breakout sells that price may run before reversing up.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to identify a liquidity sweep and structure a trade around it with defined risk.",
      blocks: [
        {
          kind: "text",
          html: "A liquidity sweep is when price pushes <strong>beyond a key level</strong>, triggers the resting orders there, and then quickly reverses. Instead of a clean breakout, the level is taken and rejected — a sign that the move beyond it was about grabbing liquidity rather than genuine continuation.",
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
          html: "The classic footprint is a <strong>long wick</strong> that pierces a high or low and closes back inside the range. It often happens fast and on a spike in activity. A genuine sweep is usually followed by a <strong>shift in structure</strong> in the opposite direction, which is your confirmation.",
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "A common approach is to wait for the sweep, then for a <strong>CHoCH or MSS</strong> confirming the reversal, and enter on the pullback. The stop sits just <strong>beyond the sweep's extreme</strong> — the wick high or low — because a return there means the reversal read was wrong. Target the opposite liquidity pool.",
        },
        {
          kind: "list",
          items: [
            "Sweep = price takes orders beyond a level then reverses, often with a long wick.",
            "Wait for a structure shift back the other way before entering.",
            "Stop goes just past the sweep extreme; target the opposite liquidity.",
            "Not every wick is a real sweep — some are genuine breakouts, so confirmation matters.",
          ],
        },
        {
          kind: "key",
          text: "A liquidity sweep grabs orders beyond a level then reverses — trade the reversal with your stop just past the wick.",
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
      readingMinutes: 5,
      objective:
        "After this module you'll be able to recognise a stop hunt and place your own stops away from obvious pools.",
      blocks: [
        {
          kind: "text",
          html: "A stop hunt is a specific kind of liquidity sweep aimed at <strong>protective stop orders</strong>. Because so many traders place stops at the same obvious spot — just below support or above resistance — that price becomes a target. A quick spike triggers the stops and then price often reverses.",
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
          html: "When your stop is hit, your order becomes a <strong>market order</strong> in the opposite direction — a long's stop is a sell. Those forced sells are exactly the fills a large buyer wants. This is the mechanism SMC points to: obvious stop clusters are convenient liquidity, whether by design or simply by crowd behaviour.",
        },
        {
          kind: "heading",
          text: "How to protect yourself",
        },
        {
          kind: "text",
          html: "The practical lesson is to avoid placing stops at the <strong>most obvious price</strong>. Give the stop room beyond the sweep zone, size the position down to keep risk constant, and remember that not every spike is a hunt — sometimes a level breaks for real. Never move a stop further away just to avoid being hit.",
        },
        {
          kind: "key",
          text: "Stop hunts target obvious stop clusters — place your stop beyond the likely sweep, not right at the crowd's price.",
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
      readingMinutes: 7,
      objective:
        "After this module you'll be able to mark a valid order block and build a trade around it with defined risk.",
      blocks: [
        {
          kind: "text",
          html: "An order block is the <strong>last opposing candle</strong> before a strong, impulsive move. A bullish order block is the last down candle before a rally; a bearish order block is the last up candle before a sell-off. SMC treats it as the area where large orders were placed to launch the move.",
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
          html: "The logic is that not all of the institutional orders were filled at the origin, so <strong>unfilled orders remain</strong>. When price returns to the block, those orders can be completed and the move can resume. A stronger case exists when the departure from the block <strong>broke structure</strong> and left an imbalance behind.",
        },
        {
          kind: "heading",
          text: "How to qualify a block",
        },
        {
          kind: "list",
          items: [
            "It should be the last opposing candle before an impulsive, structure-breaking move.",
            "The move away should be sharp and ideally leave a fair value gap.",
            "A fresh, untested block reacts more cleanly than one price has already revisited.",
            "Higher-timeframe blocks aligned with the trend are generally higher quality.",
          ],
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "A common entry is a <strong>limit order at the block</strong>, or waiting for a lower-timeframe confirmation as price taps it. The stop typically sits just <strong>beyond the far edge</strong> of the block, because closing through it invalidates the idea. Target the next liquidity pool or opposing order block. Order blocks fail regularly, so risk must be fixed and small.",
        },
        {
          kind: "key",
          text: "An order block is the last opposing candle before an impulse — enter on a retest with your stop beyond its far edge.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to identify a breaker block and trade its retest with a logical stop.",
      blocks: [
        {
          kind: "text",
          html: "A breaker block is an order block that <strong>failed and flipped</strong>. When price violates an order block and then breaks structure the other way, the old block changes role — a broken bullish block can become resistance, and a broken bearish block can become support. It is a support-becomes-resistance idea within the SMC framework.",
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
          html: "First an order block is established. Then price <strong>trades through it</strong> and, crucially, <strong>breaks structure</strong> in the opposite direction, signalling that the original story has changed. The trapped traders from the failed block provide fuel: their stops and reversals push price the new way when it retests the zone.",
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "Wait for the structure break to <strong>confirm the flip</strong>, then look to enter on the retest of the breaker in the new direction. The stop belongs just <strong>beyond the breaker</strong>, since price closing back through it means the flip has failed. As always, target the next liquidity or structural level.",
        },
        {
          kind: "list",
          items: [
            "A breaker is a failed order block confirmed by an opposite structure break.",
            "It flips role: old support becomes resistance and vice versa.",
            "Enter on the retest in the new direction, stop beyond the breaker.",
            "Requires a genuine structure shift — without it, it is just a failed block.",
          ],
        },
        {
          kind: "key",
          text: "A breaker block is a failed order block that flips direction after a structure break — trade its retest with the trend.",
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
      readingMinutes: 5,
      objective:
        "After this module you'll be able to identify a mitigation block and understand what mitigation means in SMC.",
      blocks: [
        {
          kind: "text",
          html: "A mitigation block is a zone price returns to in order to <strong>mitigate unfilled orders</strong>. In SMC, to mitigate means to let earlier positions be managed or completed — for example, when institutions revisit an area to fill orders that were left behind by a fast move.",
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
          html: "The two are close cousins. A breaker block requires a <strong>liquidity sweep</strong> at its origin, while a mitigation block forms from a swing point that was <strong>not swept</strong> before the move. Both flip role after a structure break, but the distinction lies in whether liquidity was taken first. Many traders treat them almost interchangeably.",
        },
        {
          kind: "heading",
          text: "How to use it",
        },
        {
          kind: "text",
          html: "Mark the last swing that produced an impulsive, structure-breaking move without a prior sweep. When price returns to <strong>mitigate the zone</strong>, watch for the trend to resume. Because these are fine distinctions, confirm with structure rather than acting on the label alone.",
        },
        {
          kind: "key",
          text: "A mitigation block is a return to fill unmitigated orders — like a breaker, but formed without a liquidity sweep first.",
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
      readingMinutes: 7,
      objective:
        "After this module you'll be able to mark a fair value gap and use it as an entry zone with defined risk.",
      blocks: [
        {
          kind: "text",
          html: "A fair value gap, or <strong>FVG</strong>, is a price imbalance left by a fast, one-sided move. It appears as a <strong>three-candle pattern</strong> where the first and third candles do not overlap, leaving a gap between them. SMC treats this gap as an inefficiency the market tends to revisit and fill.",
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
          html: "The move that creates an FVG was so aggressive that price skipped past a range without two-sided trading — an <strong>inefficiency</strong>. Markets tend to seek efficiency, so price often returns to <strong>rebalance the gap</strong> before continuing. That return is what SMC traders use for an entry.",
        },
        {
          kind: "heading",
          text: "How to find a valid FVG",
        },
        {
          kind: "list",
          items: [
            "Look for three candles where candle 1's wick and candle 3's wick leave a gap.",
            "The stronger and more impulsive the middle candle, the more meaningful the gap.",
            "FVGs aligned with the trend and order flow are higher quality.",
            "Not every gap fills, and some fill only partially, so it is a probability not a rule.",
          ],
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "A common approach is a <strong>limit at the gap</strong> or entering as price taps it with confirmation. Many traders watch the <strong>50% level</strong> of the gap as the decision point. The stop sits beyond the gap or the origin of the move, and the target is the next liquidity pool. Combine the FVG with structure — a gap alone is a weak signal.",
        },
        {
          kind: "key",
          text: "A fair value gap is a three-candle imbalance price often rebalances — use it as an entry zone, not a stand-alone signal.",
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
      readingMinutes: 5,
      objective:
        "After this module you'll be able to spot an imbalance and understand why price tends to revisit it.",
      blocks: [
        {
          kind: "text",
          html: "An imbalance is any area where price moved so quickly in one direction that <strong>buying and selling were lopsided</strong>. The fair value gap is the most common example, but the broader idea is simply a stretch of chart where one side overwhelmed the other and left an inefficiency behind.",
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
          html: "Markets prefer <strong>two-sided trading</strong>, where both buyers and sellers transact across a price range. A rapid, one-sided move skips that, so price often returns later to <strong>rebalance the area</strong>. This is the same mechanism behind FVGs, generalised to any lopsided run in price.",
        },
        {
          kind: "heading",
          text: "How to use it",
        },
        {
          kind: "text",
          html: "Mark obvious imbalances as <strong>areas of interest</strong> where price may react on a return. Pair them with structure and liquidity for context; an imbalance on its own does not tell you direction, only that an inefficiency exists. And remember, not all imbalances get filled.",
        },
        {
          kind: "key",
          text: "An imbalance is a one-sided move that left inefficiency — price often revisits it to rebalance, but not always.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to split a range into premium and discount and choose the side that favours your trade.",
      blocks: [
        {
          kind: "text",
          html: "Premium and discount describe where price sits within a range relative to its midpoint. Split a swing from low to high with a Fibonacci tool: the <strong>upper half is premium</strong> (expensive) and the <strong>lower half is discount</strong> (cheap). The 50% line between them is equilibrium.",
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
          html: "The idea is to <strong>buy at a discount and sell at a premium</strong> — the same logic as any market. In a bullish scenario you want longs from the discount zone, and in a bearish scenario you want shorts from the premium zone. It stops you chasing price at expensive levels.",
        },
        {
          kind: "heading",
          text: "How to apply it",
        },
        {
          kind: "list",
          items: [
            "Draw the Fibonacci from the range low to the range high (or high to low).",
            "For longs, favour setups in the discount half; for shorts, the premium half.",
            "Combine with order blocks or FVGs that sit in the favourable zone.",
            "Redraw the range as structure updates — premium and discount are relative.",
          ],
        },
        {
          kind: "key",
          text: "Premium is the expensive upper half of a range, discount the cheap lower half — buy discount, sell premium.",
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
