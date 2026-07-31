import type { Course } from "../courses";

export const priceActionCourse: Course = {
  id: "price-action",
  title: "Price Action Trading",
  tagline: "Read the raw chart — structure, levels, and clean setups.",
  description:
    "Learn price action trading from the ground up: read support and resistance, map market structure, trade breakouts, pullbacks and retests, and turn it all into a repeatable trading plan.",
  level: "beginner",
  accent: "amber",
  modules: [
    /* ============================================================ */
    /* 1. Introduction to Price Action                              */
    /* ============================================================ */
    {
      slug: "introduction-price-action",
      title: "Introduction to Price Action",
      summary:
        "What price action trading is, why traders read the raw chart, and how to build a clean workflow without lagging indicators.",
      readingMinutes: 5,
      objective:
        "After this module you'll be able to explain what price action is and read a clean chart to understand what buyers and sellers are doing.",
      blocks: [
        {
          kind: "text",
          html: "Price action is the study of how price moves over time, read directly from the chart itself. Instead of relying on a stack of indicators, a price action trader focuses on <strong>candles, swings, and key levels</strong> to understand the ongoing fight between buyers and sellers. Every candle is a record of that fight for a fixed period of time.",
        },
        {
          kind: "image",
          src: "/learn/price-action/01-intro.png",
          alt: "Clean candlestick chart showing price action without indicators",
          caption:
            "A clean chart: price, swings and levels are all you truly need to start.",
        },
        {
          kind: "heading",
          text: "Why read raw price?",
        },
        {
          kind: "text",
          html: "Most indicators are just math applied to price, so they <strong>lag behind</strong> what price is already telling you. By reading price directly you react to the market as it happens rather than to a smoothed, delayed version of it. This does not make indicators useless — but price action gives you the primary source, and everything else is a derivative of it.",
        },
        {
          kind: "text",
          html: "The core idea is simple: at every level, someone is willing to buy and someone is willing to sell. Where <strong>buyers overpower sellers</strong>, price rises; where sellers overpower buyers, price falls. Your job is to find spots where one side is clearly in control and the reward outweighs the risk.",
        },
        {
          kind: "list",
          items: [
            "Candles show the open, high, low and close for each period.",
            "Swings (highs and lows) reveal the trend and its turning points.",
            "Levels are prices where the market has reacted before and may react again.",
            "Context — the bigger picture — decides whether a signal is worth taking.",
          ],
        },
        {
          kind: "key",
          text: "Price action is reading the market from the chart itself — the raw, real-time story of buyers versus sellers.",
        },
        {
          kind: "text",
          html: "Throughout this course we build from the ground up: levels, then structure, then repeatable setups, and finally a written plan. No setup wins every time, so <strong>risk management</strong> matters as much as chart reading — a point we return to in every module.",
        },
      ],
    },

    /* ============================================================ */
    /* 2. Support & Resistance                                      */
    /* ============================================================ */
    {
      slug: "support-resistance",
      title: "Support & Resistance",
      summary:
        "How to identify horizontal support and resistance levels, why they form, and how price reacts when it revisits them.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to mark meaningful support and resistance levels and anticipate how price may react at them.",
      blocks: [
        {
          kind: "text",
          html: "Support and resistance are the most important concepts in price action. <strong>Support</strong> is a price area where buyers have historically stepped in and stopped price from falling further. <strong>Resistance</strong> is where sellers have stepped in and capped a rise. They are areas, not exact lines.",
        },
        {
          kind: "image",
          src: "/learn/price-action/02-support-resistance.png",
          alt: "Chart with horizontal support and resistance levels being tested",
          caption:
            "Horizontal levels that price has respected before are the ones worth watching.",
        },
        {
          kind: "heading",
          text: "Why levels form",
        },
        {
          kind: "text",
          html: "Levels form because market participants remember prices. Traders who bought at a level want to defend it; traders who missed a move want a second chance to enter; and traders who are trapped want to exit at breakeven. This <strong>collective memory</strong> creates repeated reactions at the same prices.",
        },
        {
          kind: "heading",
          text: "How to draw good levels",
        },
        {
          kind: "text",
          html: "Draw your levels from the higher timeframes first and use <strong>candle bodies and wicks</strong> where multiple reactions cluster. The best levels are ones price has touched several times, ideally as both support and resistance. Avoid cluttering the chart — a handful of <strong>strong levels</strong> beats twenty weak ones.",
        },
        {
          kind: "list",
          items: [
            "More touches usually mean a more significant level.",
            "Round numbers (whole figures) often act as psychological levels.",
            "Treat levels as zones a few candles wide, not a single pixel.",
            "A level broken with conviction can flip role — see the Retest module.",
          ],
        },
        {
          kind: "key",
          text: "Support and resistance are zones of memory where buyers or sellers have acted before — and often act again.",
        },
      ],
    },

    /* ============================================================ */
    /* 3. Supply & Demand Zones                                     */
    /* ============================================================ */
    {
      slug: "supply-demand",
      title: "Supply & Demand Zones",
      summary:
        "Understand supply and demand zones — the origin points of strong moves — and how they differ from simple support and resistance lines.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to mark supply and demand zones from the base of strong moves and use them as decision areas.",
      blocks: [
        {
          kind: "text",
          html: "Supply and demand zones are the areas from which a strong, impulsive move began. A <strong>demand zone</strong> is the base where aggressive buying launched price upward; a <strong>supply zone</strong> is the base where aggressive selling drove price down. They mark where a large imbalance of orders existed.",
        },
        {
          kind: "image",
          src: "/learn/price-action/03-supply-demand.png",
          alt: "Chart marked with supply and demand zones",
          caption:
            "Zones are drawn around the consolidation that preceded a strong departure.",
        },
        {
          kind: "heading",
          text: "How zones differ from lines",
        },
        {
          kind: "text",
          html: "A support or resistance line is a single price; a supply or demand zone is a <strong>rectangle</strong> covering the small consolidation just before an explosive candle. The logic is that unfilled orders may remain in that area, so price often reacts when it returns for the first time.",
        },
        {
          kind: "heading",
          text: "Spotting a valid zone",
        },
        {
          kind: "text",
          html: "Look for a tight base followed by a <strong>strong departure</strong> — one or more large candles that leave the base quickly. The sharper and faster the exit, the more meaningful the imbalance. A <strong>fresh zone</strong> that has not yet been retested tends to react more cleanly than one price has already visited several times.",
        },
        {
          kind: "list",
          items: [
            "Find the origin of a strong move, not the middle of it.",
            "Draw the box around the base candles before the impulse.",
            "Fresh, untested zones are generally higher quality.",
            "A zone that fails to hold on the first test loses its edge.",
          ],
        },
        {
          kind: "key",
          text: "Zones mark the origin of strong moves — the footprints of the orders that pushed price hard in one direction.",
        },
      ],
    },

    /* ============================================================ */
    /* 4. Market Structure                                          */
    /* ============================================================ */
    {
      slug: "market-structure",
      title: "Market Structure",
      summary:
        "Learn to read market structure — uptrends, downtrends and ranges — using swing highs and swing lows as your map.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to classify any chart as trending up, trending down, or ranging by reading its swings.",
      blocks: [
        {
          kind: "text",
          html: "Market structure is the skeleton of price action: the sequence of <strong>swing highs and swing lows</strong> that tells you whether the market is trending or ranging. Everything else — levels, setups, entries — should be read in the context of structure.",
        },
        {
          kind: "image",
          src: "/learn/price-action/04-market-structure.png",
          alt: "Chart showing uptrend, range and downtrend structure",
          caption:
            "Three states of the market: uptrend, range, and downtrend.",
        },
        {
          kind: "heading",
          text: "The three states of a market",
        },
        {
          kind: "list",
          items: [
            "Uptrend: a series of higher highs and higher lows — buyers in control.",
            "Downtrend: a series of lower highs and lower lows — sellers in control.",
            "Range: highs and lows are roughly level — neither side in control.",
          ],
        },
        {
          kind: "text",
          html: "A swing high is a peak with lower highs on either side; a swing low is a trough with higher lows on either side. Marking these gives you an <strong>objective map</strong> of the trend rather than an opinion. When you can name the current state, you know which setups fit and which to avoid.",
        },
        {
          kind: "text",
          html: "The single most useful habit is to <strong>trade with structure</strong>: favour longs in an uptrend and shorts in a downtrend. Fighting structure is possible but statistically harder, and beginners should master trend-aligned trading first before attempting counter-trend plays.",
        },
        {
          kind: "key",
          text: "Read the swings first — structure tells you whether to be looking for buys, sells, or nothing at all.",
        },
      ],
    },

    /* ============================================================ */
    /* 5. Higher High / Higher Low                                  */
    /* ============================================================ */
    {
      slug: "higher-high-higher-low",
      title: "Higher High / Higher Low",
      summary:
        "Master the higher-high, higher-low sequence that defines a healthy uptrend and learn how to trade with it.",
      readingMinutes: 5,
      objective:
        "After this module you'll be able to confirm an uptrend by its higher highs and higher lows and align your trades with it.",
      blocks: [
        {
          kind: "text",
          html: "An uptrend is defined by two things repeating: <strong>higher highs (HH)</strong> and <strong>higher lows (HL)</strong>. Each rally pushes above the previous peak, and each dip stops above the previous trough. As long as this pattern holds, buyers remain in control.",
        },
        {
          kind: "image",
          src: "/learn/price-action/05-hh-hl.png",
          alt: "Uptrend making higher highs and higher lows",
          caption:
            "Higher highs and higher lows — the fingerprint of an uptrend.",
        },
        {
          kind: "heading",
          text: "Why the higher low matters most",
        },
        {
          kind: "text",
          html: "The higher low is the more important of the two. It shows that <strong>buyers stepped in early</strong>, unwilling to let price fall as far as it did last time. When a higher low forms and holds, it often gives the cleanest, lowest-risk entry into a continuing uptrend.",
        },
        {
          kind: "heading",
          text: "Using it in practice",
        },
        {
          kind: "text",
          html: "A common approach is to wait for a pullback into a fresh higher low, look for signs of buyers returning, and place a <strong>stop below that swing low</strong>. If price makes a lower low instead, the uptrend structure is in question and you should stand aside. Remember that trends end, so no HH/HL sequence lasts forever.",
        },
        {
          kind: "key",
          text: "As long as price prints higher highs and higher lows, the path of least resistance is up.",
        },
      ],
    },

    /* ============================================================ */
    /* 6. Lower High / Lower Low                                    */
    /* ============================================================ */
    {
      slug: "lower-high-lower-low",
      title: "Lower High / Lower Low",
      summary:
        "Understand the lower-high, lower-low sequence that defines a downtrend and how to trade in the direction of selling pressure.",
      readingMinutes: 5,
      objective:
        "After this module you'll be able to confirm a downtrend by its lower highs and lower lows and align short setups with it.",
      blocks: [
        {
          kind: "text",
          html: "A downtrend is the mirror image of an uptrend: <strong>lower highs (LH)</strong> and <strong>lower lows (LL)</strong>. Each rally fails below the previous peak and each decline breaks the previous trough. Sellers are in control and each bounce is being sold into.",
        },
        {
          kind: "image",
          src: "/learn/price-action/06-lh-ll.png",
          alt: "Downtrend making lower highs and lower lows",
          caption:
            "Lower highs and lower lows — the fingerprint of a downtrend.",
        },
        {
          kind: "heading",
          text: "Why the lower high matters most",
        },
        {
          kind: "text",
          html: "In a downtrend the lower high is the key tell: it shows that <strong>sellers stepped in early</strong>, capping the bounce before it could reach the previous high. A rally that stalls into a fresh lower high often offers a favourable short entry with a clearly defined risk point.",
        },
        {
          kind: "heading",
          text: "Using it in practice",
        },
        {
          kind: "text",
          html: "Traders often wait for a bounce into a lower high, watch for selling to resume, and place a <strong>stop above that swing high</strong>. If price makes a higher high instead, the downtrend structure is broken and shorts should be abandoned. Shorting a falling market carries its own risks, so size positions carefully.",
        },
        {
          kind: "key",
          text: "As long as price prints lower highs and lower lows, the path of least resistance is down.",
        },
      ],
    },

    /* ============================================================ */
    /* 7. Break of Structure (BOS)                                  */
    /* ============================================================ */
    {
      slug: "break-of-structure",
      title: "Break of Structure (BOS)",
      summary:
        "Learn what a break of structure is, how it confirms trend continuation, and how it differs from a change of character.",
      readingMinutes: 5,
      objective:
        "After this module you'll be able to identify a break of structure and use it to confirm that a trend is continuing.",
      blocks: [
        {
          kind: "text",
          html: "A break of structure, or <strong>BOS</strong>, happens when price breaks the most recent swing point in the direction of the existing trend. In an uptrend, a BOS is a break above the last swing high; in a downtrend, it is a break below the last swing low. A BOS <strong>confirms continuation</strong>.",
        },
        {
          kind: "image",
          src: "/learn/price-action/07-bos.png",
          alt: "Price breaking the last swing high, a break of structure",
          caption:
            "Price breaks the prior swing high in the trend direction — a break of structure.",
        },
        {
          kind: "heading",
          text: "Why it matters",
        },
        {
          kind: "text",
          html: "A BOS is the market confirming that the current side is still in charge. When an uptrend prints a new higher high above the previous one, it has completed another <strong>HH/HL cycle</strong> — an objective sign that buyers are still winning. It turns a hopeful bias into a confirmed one.",
        },
        {
          kind: "heading",
          text: "How to use it",
        },
        {
          kind: "text",
          html: "Many traders wait for a BOS and then look for an entry on the following pullback, rather than chasing the break itself. A useful filter is to require a <strong>candle close</strong> beyond the swing point rather than just a wick, which helps filter out weak, temporary pokes through the level.",
        },
        {
          kind: "key",
          text: "A break of structure confirms the trend continues — it breaks the last swing in the trend's own direction.",
        },
      ],
    },

    /* ============================================================ */
    /* 8. Change of Character (CHoCH)                               */
    /* ============================================================ */
    {
      slug: "change-of-character",
      title: "Change of Character (CHoCH)",
      summary:
        "Discover the change of character — the first structural break against a trend that can warn of a reversal.",
      readingMinutes: 5,
      objective:
        "After this module you'll be able to spot a change of character and treat it as an early warning that a trend may be turning.",
      blocks: [
        {
          kind: "text",
          html: "A change of character, or <strong>CHoCH</strong>, is the first time price breaks structure against the prevailing trend. In an uptrend it is the first <strong>lower low</strong> that breaks a previous higher low; in a downtrend it is the first higher high that breaks a previous lower high. It is the earliest structural hint of a possible reversal.",
        },
        {
          kind: "image",
          src: "/learn/price-action/08-choch.png",
          alt: "First break against the trend signalling a change of character",
          caption:
            "The first break against the trend — a change of character, not yet a confirmed reversal.",
        },
        {
          kind: "heading",
          text: "CHoCH versus BOS",
        },
        {
          kind: "text",
          html: "The difference is direction. A <strong>BOS breaks with the trend</strong> and confirms continuation; a <strong>CHoCH breaks against the trend</strong> and warns of change. Reading them together lets you follow a trend and also be alerted the moment its character shifts.",
        },
        {
          kind: "heading",
          text: "How to use it carefully",
        },
        {
          kind: "text",
          html: "A CHoCH is a warning, not a guarantee — trends often pause and resume. Treat it as a signal to <strong>tighten risk</strong> and to stop looking for trend-continuation entries, but wait for further confirmation (such as a new opposing structure) before betting on a full reversal.",
        },
        {
          kind: "key",
          text: "A change of character is the first crack in a trend — an early warning to protect open trades, not proof of a reversal.",
        },
      ],
    },

    /* ============================================================ */
    /* 9. Breakout Trading                                          */
    /* ============================================================ */
    {
      slug: "breakout-trading",
      title: "Breakout Trading",
      summary:
        "Learn how to trade breakouts from consolidation, judge breakout quality, and manage entries and stops honestly.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to identify a breakout setup and understand basic entry and stop logic for trading it.",
      blocks: [
        {
          kind: "text",
          html: "A breakout occurs when price escapes a period of consolidation — a range, triangle or tight band — with force. The idea is that once price clears a <strong>well-defined level</strong>, a new move can begin as trapped traders exit and momentum traders pile in.",
        },
        {
          kind: "image",
          src: "/learn/price-action/09-breakout.png",
          alt: "Price breaking out of a consolidation range",
          caption:
            "Price leaves a tight range with a strong, decisive candle.",
        },
        {
          kind: "heading",
          text: "What a good breakout looks like",
        },
        {
          kind: "text",
          html: "Quality breakouts tend to come after a <strong>tight consolidation</strong> and break with a strong, wide candle that closes clearly beyond the level. A break that stalls immediately, or breaks on a small indecisive candle, is more likely to fail. Context helps too: breakouts in the direction of the higher-timeframe trend are generally more reliable.",
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "There are two honest approaches: enter on the <strong>breakout candle close</strong> beyond the level, or wait for a retest of the broken level and enter there with tighter risk. Either way, a logical stop sits <strong>back inside the range</strong>, because a return there means the breakout has failed.",
        },
        {
          kind: "list",
          items: [
            "Aggressive: enter on the close of the breakout candle.",
            "Conservative: wait for a retest of the broken level (see the Retest module).",
            "Stop: just back inside the consolidation the breakout left.",
            "Target: a measured move or the next significant level.",
          ],
        },
        {
          kind: "key",
          text: "Trade breakouts that leave tight ranges with force — and always know the price at which the breakout is proven wrong.",
        },
        {
          kind: "text",
          html: "Breakouts fail often, which is exactly why the fake breakout has its own module. No breakout is guaranteed, so <strong>position size and stops</strong> are what keep a losing breakout small.",
        },
      ],
    },

    /* ============================================================ */
    /* 10. Pullback Trading                                         */
    /* ============================================================ */
    {
      slug: "pullback-trading",
      title: "Pullback Trading",
      summary:
        "Trade pullbacks within an established trend to enter at better prices with clearly defined risk.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to enter a trend on a pullback rather than chasing, using structure to define your risk.",
      blocks: [
        {
          kind: "text",
          html: "A pullback is a temporary counter-move within a trend — a dip in an uptrend or a bounce in a downtrend. Trading pullbacks lets you join a trend at a <strong>better price</strong> and with a <strong>tighter stop</strong> than chasing the move at its extreme.",
        },
        {
          kind: "image",
          src: "/learn/price-action/10-pullback.png",
          alt: "Entering on a pullback within a trend",
          caption:
            "Buy the dip into a higher low, not the top of the rally.",
        },
        {
          kind: "heading",
          text: "Where pullbacks stop",
        },
        {
          kind: "text",
          html: "Healthy pullbacks tend to stall at logical areas: a prior <strong>support or resistance level</strong>, a supply or demand zone, or a previous swing point. When a pullback reaches such an area and shows the trend resuming, you have a defined place to enter and a defined place to be wrong.",
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "Wait for the pullback to reach your level and show a sign of the trend resuming — for example a strong candle back in the trend direction. Enter there and place your <strong>stop beyond the pullback's extreme</strong> (below the higher low in an uptrend). Because the risk is small and the potential move large, pullbacks can offer strong reward-to-risk.",
        },
        {
          kind: "list",
          items: [
            "Only trade pullbacks in the direction of the established trend.",
            "Let price come to your level — do not force an entry mid-pullback.",
            "A pullback that becomes a break of structure against you invalidates the trade.",
            "Deep pullbacks past the last swing warn the trend may be weakening.",
          ],
        },
        {
          kind: "key",
          text: "Pullbacks let you buy the dip or sell the rally with the trend — better price, tighter risk, same direction.",
        },
      ],
    },

    /* ============================================================ */
    /* 11. Retest Strategy                                          */
    /* ============================================================ */
    {
      slug: "retest-strategy",
      title: "Retest Strategy",
      summary:
        "Learn how broken levels flip role and how to trade the retest of a broken level as new support or resistance.",
      readingMinutes: 5,
      objective:
        "After this module you'll be able to trade the retest of a broken level using the support-becomes-resistance principle.",
      blocks: [
        {
          kind: "text",
          html: "When a level breaks, it often <strong>flips role</strong>: broken resistance can become new support, and broken support can become new resistance. The retest is when price returns to that broken level to test it from the other side — one of the highest-quality entries in price action.",
        },
        {
          kind: "image",
          src: "/learn/price-action/11-retest.png",
          alt: "Broken resistance retested as new support",
          caption:
            "Old resistance is broken, then retested as new support before continuing up.",
        },
        {
          kind: "heading",
          text: "Why levels flip",
        },
        {
          kind: "text",
          html: "The flip happens because of order flow and psychology. Traders who sold at old resistance may now buy back if it holds as support, and breakout buyers add on the retest. This <strong>role reversal</strong> is the same mechanism behind support and resistance — memory of price.",
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "Rather than chasing the breakout, wait for price to <strong>return to the broken level</strong> and show it holding — ideally with a rejection candle. Enter on confirmation and place your <strong>stop on the far side of the level</strong>, since price closing back through it means the flip has failed. The retest often gives tighter risk than the initial break.",
        },
        {
          kind: "key",
          text: "Broken resistance becomes support and broken support becomes resistance — the retest lets you trade that flip with defined risk.",
        },
        {
          kind: "text",
          html: "Not every breakout offers a clean retest; strong moves sometimes run without looking back. That is fine — <strong>skipping a trade</strong> that never gives your setup is itself good discipline.",
        },
      ],
    },

    /* ============================================================ */
    /* 12. Fake Breakout                                            */
    /* ============================================================ */
    {
      slug: "fake-breakout",
      title: "Fake Breakout",
      summary:
        "Recognise fake breakouts and stop-runs that trap traders, and learn how the failure itself can become a setup.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to recognise fake breakouts and avoid being trapped — or trade the reversal that follows.",
      blocks: [
        {
          kind: "text",
          html: "A fake breakout — also called a false break or stop-run — is when price pokes beyond a level, triggers breakout traders and their stops, then <strong>reverses back</strong> into the range. It is one of the most common ways new traders lose money on breakouts.",
        },
        {
          kind: "image",
          src: "/learn/price-action/12-fake-breakout.png",
          alt: "A false breakout trapping traders before reversing",
          caption:
            "Price breaks the level, traps the breakout crowd, then snaps back.",
        },
        {
          kind: "heading",
          text: "Why fakeouts happen",
        },
        {
          kind: "text",
          html: "Resting stop orders cluster just beyond obvious levels. A push through the level triggers those orders, providing liquidity for larger participants to trade against. Once that liquidity is taken, price often <strong>snaps back</strong>, leaving breakout traders trapped on the wrong side.",
        },
        {
          kind: "heading",
          text: "How to protect yourself — and profit",
        },
        {
          kind: "text",
          html: "The main defence is to demand a <strong>candle close</strong> beyond the level rather than reacting to a wick. The failure can also be a setup: when price reclaims the level with force after a false break, you can enter in the reversal direction with a <strong>stop beyond the fakeout wick</strong>, targeting the opposite side of the range.",
        },
        {
          kind: "list",
          items: [
            "Wait for a close beyond the level, not just a wick through it.",
            "Be suspicious of breaks on low conviction or after a long run.",
            "A quick snap-back inside the range signals a likely trap.",
            "Reclaiming the level after a false break is itself a tradeable reversal.",
          ],
        },
        {
          kind: "key",
          text: "A break that snaps back into the range is a trap — the failure often fuels a strong move the other way.",
        },
      ],
    },

    /* ============================================================ */
    /* 13. Range Trading                                            */
    /* ============================================================ */
    {
      slug: "range-trading",
      title: "Range Trading",
      summary:
        "Trade sideways markets by buying near range support and selling near range resistance, with rules for when the range breaks.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to identify a range and trade its edges while managing the risk of a breakout.",
      blocks: [
        {
          kind: "text",
          html: "A range is a market moving sideways between a fairly flat <strong>range high</strong> and <strong>range low</strong>. Neither buyers nor sellers control it, so price oscillates between the two edges. Ranges make up a large share of market time, so knowing how to trade them matters.",
        },
        {
          kind: "image",
          src: "/learn/price-action/13-range.png",
          alt: "Trading between range high and range low",
          caption:
            "Buy near the bottom, sell near the top — and respect the edges.",
        },
        {
          kind: "heading",
          text: "The basic range playbook",
        },
        {
          kind: "text",
          html: "The core idea is to <strong>sell near the top</strong> of the range and <strong>buy near the bottom</strong>, fading the move back toward the middle. Trades work best when you wait for price to reach an edge and show rejection rather than entering in the middle where there is no clear level.",
        },
        {
          kind: "heading",
          text: "Entry, stop and the breakout risk",
        },
        {
          kind: "text",
          html: "Enter near an edge on a rejection signal and place your <strong>stop just outside the range</strong> — a close beyond the edge means the range may be breaking. Your first target is usually the opposite edge or the range midpoint. The main danger is that every range eventually breaks, so keep stops tight and never fight a decisive breakout.",
        },
        {
          kind: "list",
          items: [
            "Trade the edges, not the middle of the range.",
            "Wait for rejection before entering — do not assume the edge will hold.",
            "Stop goes just outside the range; a close beyond it is a warning.",
            "When the range breaks with force, switch to breakout thinking.",
          ],
        },
        {
          kind: "key",
          text: "Fade the edges of a range — but the moment price closes decisively outside it, the range is over.",
        },
      ],
    },

    /* ============================================================ */
    /* 14. Reversal Trading                                         */
    /* ============================================================ */
    {
      slug: "reversal-trading",
      title: "Reversal Trading",
      summary:
        "Learn how trends reverse, how to confirm a turn with structure, and why reversals demand extra patience and discipline.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to identify a confirmed reversal using structure rather than guessing tops and bottoms.",
      blocks: [
        {
          kind: "text",
          html: "A reversal is a change in the overall trend direction — a downtrend turning into an uptrend, or vice versa. Reversals can be very profitable, but they are also where many traders lose money by <strong>trying to pick tops and bottoms</strong> too early.",
        },
        {
          kind: "image",
          src: "/learn/price-action/14-reversal.png",
          alt: "A trend reversal from downtrend to uptrend",
          caption:
            "A downtrend gives way to an uptrend once structure flips.",
        },
        {
          kind: "heading",
          text: "How to confirm a reversal",
        },
        {
          kind: "text",
          html: "The disciplined way to trade reversals uses structure. First look for a <strong>change of character</strong> (CHoCH) — the first break against the trend. Then wait for price to build the <strong>opposite structure</strong>: for a bottom, a higher high followed by a higher low. Only once structure has genuinely flipped do you have a confirmed reversal.",
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "A safer entry is on the <strong>first pullback</strong> after structure flips — for example the new higher low after a bottom — with a stop below that low. This lets the market prove the turn before you commit. Reversals fail often, so keep size modest and accept that <strong>waiting for confirmation</strong> means giving up the exact low or high.",
        },
        {
          kind: "list",
          items: [
            "Do not short a strong uptrend or buy a strong downtrend on hope alone.",
            "Require a change of character, then a flip in structure.",
            "Enter on the first pullback after the flip, not at the extreme.",
            "Keep risk small — reversal calls are wrong more often than trend trades.",
          ],
        },
        {
          kind: "key",
          text: "Reversals are confirmed by structure, not predicted by hope — wait for the trend to break and rebuild the other way.",
        },
      ],
    },

    /* ============================================================ */
    /* 15. Multi-Timeframe Analysis                                 */
    /* ============================================================ */
    {
      slug: "multi-timeframe-analysis",
      title: "Multi-Timeframe Analysis",
      summary:
        "Combine higher timeframes for direction with lower timeframes for precise entries to trade in context and improve timing.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to use a higher timeframe for bias and a lower timeframe for entry timing.",
      blocks: [
        {
          kind: "text",
          html: "Multi-timeframe analysis means reading the same market on more than one timeframe at once. The principle is simple: use the <strong>higher timeframe for direction</strong> and the <strong>lower timeframe for entry</strong>. This keeps you trading in context instead of reacting to noise.",
        },
        {
          kind: "image",
          src: "/learn/price-action/15-mtf.png",
          alt: "Higher timeframe for direction, lower timeframe for entry",
          caption:
            "Higher timeframe sets the bias; the lower timeframe times the entry.",
        },
        {
          kind: "heading",
          text: "A practical three-timeframe framework",
        },
        {
          kind: "list",
          items: [
            "Higher timeframe: establish the trend and mark the key levels and zones.",
            "Trading timeframe: locate the setup within that bias (pullback, retest, range edge).",
            "Lower timeframe: fine-tune the entry and tighten the stop with more precision.",
          ],
        },
        {
          kind: "text",
          html: "A common mistake is a <strong>timeframe conflict</strong> — going long on a five-minute breakout while the daily chart is in a clear downtrend. Aligning your timeframes so they point the same way filters out many low-quality trades and keeps you on the right side of the bigger move.",
        },
        {
          kind: "text",
          html: "Do not overdo it. Two or three timeframes are enough; more than that leads to <strong>analysis paralysis</strong> and contradictory signals. Pick a fixed set of timeframes and use them the same way every time so your process stays consistent.",
        },
        {
          kind: "key",
          text: "Let the higher timeframe decide direction and the lower timeframe decide timing — never the other way around.",
        },
      ],
    },

    /* ============================================================ */
    /* 16. Building a Price Action Plan                             */
    /* ============================================================ */
    {
      slug: "price-action-plan",
      title: "Building a Price Action Plan",
      summary:
        "Turn everything you've learned into a written, repeatable price action trading plan with clear rules and risk management.",
      readingMinutes: 7,
      objective:
        "After this module you'll be able to write a simple, repeatable price action trading plan and follow it with discipline.",
      blocks: [
        {
          kind: "text",
          html: "Knowledge only becomes an edge when it becomes a <strong>repeatable process</strong>. A trading plan is a written set of rules that tells you what to trade, when to enter, where to exit, and how much to risk — removing improvisation and emotion in the heat of the moment.",
        },
        {
          kind: "image",
          src: "/learn/price-action/16-plan.png",
          alt: "A five-step price action trading plan checklist",
          caption:
            "A simple five-step checklist you can run on every potential trade.",
        },
        {
          kind: "heading",
          text: "A five-step checklist",
        },
        {
          kind: "list",
          items: [
            "Bias: what is the higher-timeframe structure — up, down, or range?",
            "Level: is price at a meaningful level, zone, or structural point?",
            "Setup: does a defined setup appear (breakout, pullback, retest, range, reversal)?",
            "Trigger: is there a confirmation signal to enter, such as a candle close?",
            "Risk: where is the stop, what is the target, and does the reward justify it?",
          ],
        },
        {
          kind: "text",
          html: "Risk management is the part that keeps you in the game. A widely used guideline is to <strong>risk a small fixed percentage</strong> of your account per trade so that no single loss is damaging. Position size is then calculated from your stop distance — never the other way around.",
        },
        {
          kind: "heading",
          text: "Making it stick",
        },
        {
          kind: "text",
          html: "Keep a <strong>trading journal</strong> of every trade — the setup, the screenshot, the outcome, and whether you followed your rules. Review it regularly to find what works and what to cut. Progress comes from refining one clear process over many trades, not from chasing a new strategy every week.",
        },
        {
          kind: "text",
          html: "Finally, stay honest about risk. <strong>No setup wins every time</strong>, drawdowns are normal, and consistency comes from discipline, patience, and protecting your capital — not from prediction. Trade the plan, not the emotion.",
        },
        {
          kind: "key",
          text: "A written plan plus strict risk management beats any single setup — process is the real edge.",
        },
      ],
    },
  ],
};
