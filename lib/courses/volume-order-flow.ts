import type { Course } from "../courses";

export const volumeCourse: Course = {
  id: "volume-order-flow",
  title: "Volume Trading & Order Flow",
  tagline: "Read conviction — volume, profile, VWAP and delta.",
  description:
    "Learn volume trading and order flow from the ground up: read volume spikes, build a volume profile, find the point of control and value area, trade with VWAP and anchored VWAP, and interpret delta and cumulative delta to gauge real buying and selling pressure.",
  level: "intermediate",
  accent: "amber",
  modules: [
    /* ============================================================ */
    /* 1. Introduction to Volume Trading                            */
    /* ============================================================ */
    {
      slug: "introduction-volume",
      title: "Introduction to Volume Trading",
      summary:
        "What volume trading is, why volume measures conviction behind a move, and how to read a volume panel alongside price.",
      readingMinutes: 5,
      objective:
        "After this module you'll be able to explain what volume represents and read a volume panel to judge the conviction behind a price move.",
      blocks: [
        {
          kind: "text",
          html: "Volume is the amount of activity behind a price move — how many contracts, shares or ticks changed hands over a period. Price tells you <strong>where</strong> the market went; volume tells you <strong>how much conviction</strong> was behind it. A move on heavy volume carries more weight than the same move on thin volume.",
        },
        {
          kind: "text",
          html: "Read as a panel beneath the candles, each volume bar lines up with one candle and measures the effort spent during that period. Rising price on <strong>expanding volume</strong> suggests genuine participation; rising price on shrinking volume hints that the move is running out of fuel.",
        },
        {
          kind: "image",
          src: "/learn/volume/01-intro.png",
          alt: "Candles with a volume panel showing a volume spike",
          caption:
            "A volume spike marks a burst of participation — pay attention to what price does around it.",
        },
        {
          kind: "heading",
          text: "Why volume matters",
        },
        {
          kind: "text",
          html: "Every transaction needs a buyer and a seller, so volume itself is neutral — it counts activity, not direction. Its value is as a <strong>measure of interest</strong>. A breakout backed by a surge in volume shows many participants agree with the new price; a quiet breakout can be a handful of orders that soon fade.",
        },
        {
          kind: "list",
          items: [
            "Volume measures effort or participation, not direction on its own.",
            "Read each volume bar against the candle directly above it.",
            "Expanding volume confirms interest; contracting volume warns of fading interest.",
            "Volume is context for price — it rarely gives a signal by itself.",
          ],
        },
        {
          kind: "key",
          text: "Volume is the conviction behind price — it tells you how much the market cared about a move, not which way it will go next.",
        },
        {
          kind: "text",
          html: "Throughout this course we build from raw volume to profiles, VWAP and order-flow tools like delta. No single volume tool wins every time, so treat everything here as <strong>context, not certainty</strong>, and keep risk management central to every decision.",
        },
      ],
    },

    /* ============================================================ */
    /* 2. Understanding Volume in CFDs                              */
    /* ============================================================ */
    {
      slug: "volume-in-cfds",
      title: "Understanding Volume in CFDs",
      summary:
        "Why CFD and forex volume is usually tick volume — a proxy for real activity — and how to use it honestly despite its limits.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to explain what tick volume is, why it differs from true exchange volume, and how to use it with appropriate caution.",
      blocks: [
        {
          kind: "text",
          html: "On centralised exchanges, volume is a real count of shares or contracts traded and reported to everyone. In CFDs and spot forex there is <strong>no central exchange</strong>, so your broker cannot show true market-wide volume. What you see is almost always <strong>tick volume</strong> instead.",
        },
        {
          kind: "text",
          html: "Tick volume is simply a <strong>count of price changes</strong> — how many times the price updated during a period, not how much money changed hands. If the price ticked 400 times in an hour, the tick volume for that hour is roughly 400. It is a proxy for activity, not a true traded quantity.",
        },
        {
          kind: "image",
          src: "/learn/volume/02-cfd-volume.png",
          alt: "Tick volume shown under a CFD price chart",
          caption:
            "In CFDs the volume panel usually shows tick volume — a count of price updates, not traded size.",
        },
        {
          kind: "heading",
          text: "Why the distinction matters",
        },
        {
          kind: "text",
          html: "Tick volume tends to <strong>correlate with real activity</strong> in liquid markets, because busy periods produce more price changes. But it is only a proxy: a market can tick rapidly on small orders, and two brokers can report different tick counts for the same instrument because they see different feeds.",
        },
        {
          kind: "list",
          items: [
            "Tick volume counts price updates, not contracts or lots traded.",
            "It usually rises and falls with genuine participation in liquid markets.",
            "Different brokers can show different tick volume for the same asset.",
            "Treat it as a rough gauge of activity, never as exact traded size.",
          ],
        },
        {
          kind: "text",
          html: "The honest takeaway: you can still use volume concepts on CFDs, but read them as <strong>relative and approximate</strong>. Compare each bar to recent ones rather than trusting absolute numbers, and be more sceptical than a futures or stock trader who sees true exchange volume.",
        },
        {
          kind: "key",
          text: "CFD and forex volume is usually tick volume — a count of price changes, not real traded size — so treat it as a useful proxy with real limits.",
        },
      ],
    },

    /* ============================================================ */
    /* 3. Volume Profile                                            */
    /* ============================================================ */
    {
      slug: "volume-profile",
      title: "Volume Profile",
      summary:
        "How a volume profile maps traded activity by price level rather than by time, revealing where the market spent most effort.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to read a volume profile and identify the price levels where the market was most and least active.",
      blocks: [
        {
          kind: "text",
          html: "A volume profile turns the volume question on its side. Instead of showing volume <strong>per period of time</strong>, it shows volume <strong>per price level</strong> — a horizontal histogram drawn beside the chart, with longer bars at prices where more activity took place.",
        },
        {
          kind: "text",
          html: "This answers a different question: not \"when was the market busy?\" but \"<strong>where did the market trade most?</strong>\" Prices with long profile bars are areas of agreement where buyers and sellers were comfortable transacting; prices with short bars are areas the market passed through quickly.",
        },
        {
          kind: "image",
          src: "/learn/volume/03-volume-profile.png",
          alt: "A horizontal volume profile beside price",
          caption:
            "The volume profile stacks activity by price — long bars mark levels of heavy participation.",
        },
        {
          kind: "heading",
          text: "How to read the shape",
        },
        {
          kind: "text",
          html: "The overall shape tells a story. A profile with one fat bulge in the middle shows a <strong>balanced, accepted</strong> price area; a profile with several separate bulges shows the market found value at more than one place. The peaks and valleys of the profile become the levels we study in the next modules.",
        },
        {
          kind: "list",
          items: [
            "The profile plots volume by price, not by time.",
            "Long bars = prices the market accepted and traded around.",
            "Short bars = prices the market rejected or passed through fast.",
            "Choose the range carefully — session, day, week or a whole swing.",
          ],
        },
        {
          kind: "text",
          html: "The profile you build depends on the range you select. A single-session profile answers intraday questions; a profile drawn over an entire trend answers where <strong>long-term value</strong> sits. Match the range to the timeframe you actually trade.",
        },
        {
          kind: "key",
          text: "A volume profile maps where the market traded most — turning volume from a timeline into a map of accepted and rejected prices.",
        },
      ],
    },

    /* ============================================================ */
    /* 4. Point of Control (POC)                                    */
    /* ============================================================ */
    {
      slug: "point-of-control",
      title: "Point of Control (POC)",
      summary:
        "The point of control is the single price with the most traded volume — a magnet and decision level worth watching.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to locate the point of control on a volume profile and use it as a reference for entries and stops.",
      blocks: [
        {
          kind: "text",
          html: "The point of control, or <strong>POC</strong>, is the single price level with the highest traded volume in a profile — the longest bar on the histogram. It marks the price at which buyers and sellers were <strong>most in agreement</strong>, the fairest price over the range you selected.",
        },
        {
          kind: "text",
          html: "Because so much business was done there, the POC often behaves like a <strong>magnet</strong>: price that drifts away can be drawn back to it, and price that reaches it can pause, because it is a level everyone recognises as fair value.",
        },
        {
          kind: "image",
          src: "/learn/volume/04-poc.png",
          alt: "The point of control highlighted on a volume profile",
          caption:
            "The POC is the highest-volume price — the market's fairest, most-agreed level over the range.",
        },
        {
          kind: "heading",
          text: "How to use the POC",
        },
        {
          kind: "text",
          html: "Traders use the POC as a <strong>reference level</strong>, much like a support or resistance line. In a range, price rejecting the POC from below can offer a short back toward the value edges; accepting above it can favour longs. The key is which side price is trading relative to that level.",
        },
        {
          kind: "text",
          html: "For entries, a common approach is to act as price tests the POC and place a <strong>stop just beyond it</strong>, since a decisive move through the fairest price means your read on control was wrong. A prior day's POC that price revisits is a particularly watched level.",
        },
        {
          kind: "list",
          items: [
            "POC = the price with the most volume in the profile.",
            "It acts as a magnet and a fair-value reference, not a guaranteed turn.",
            "Watch whether price accepts above or rejects below it.",
            "Place stops beyond the POC when you trade a reaction at it.",
          ],
        },
        {
          kind: "key",
          text: "The point of control is the market's fairest price over your range — a magnet and reference level, but never a certainty on its own.",
        },
      ],
    },

    /* ============================================================ */
    /* 5. Value Area High / Low                                     */
    /* ============================================================ */
    {
      slug: "value-area",
      title: "Value Area High / Low",
      summary:
        "The value area holds roughly 70 percent of traded volume — its high and low frame where the market considered price fair.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to identify the value area high and low and use them as boundaries between fair value and extremes.",
      blocks: [
        {
          kind: "text",
          html: "The value area is the band of prices where the bulk of trading happened — by convention, about <strong>70 percent of the volume</strong> in the profile, centred on the POC. Its upper edge is the <strong>value area high (VAH)</strong> and its lower edge the value area low (VAL).",
        },
        {
          kind: "text",
          html: "Inside the value area, price was <strong>accepted as fair</strong>. Outside it, price was comparatively rejected — the market spent little time there. That makes VAH and VAL natural boundaries between value and extreme.",
        },
        {
          kind: "image",
          src: "/learn/volume/05-value-area.png",
          alt: "Value area high and low around 70 percent of volume",
          caption:
            "The value area frames roughly 70% of volume; its high and low separate fair value from extremes.",
        },
        {
          kind: "heading",
          text: "Trading the edges",
        },
        {
          kind: "text",
          html: "In a balanced market, price often <strong>rotates within the value area</strong>: a push to the VAH that fails can rotate back toward the POC or VAL, and vice versa. Fading the edges back toward the middle is a classic range approach, with a stop just outside the value area.",
        },
        {
          kind: "text",
          html: "The edges also matter for breakouts. Price that leaves the value area and <strong>accepts beyond it</strong> — trading and holding there rather than snapping back — signals the market is seeking new value, and traders may follow that direction instead of fading it.",
        },
        {
          kind: "list",
          items: [
            "Value area = roughly 70% of volume around the POC.",
            "VAH and VAL mark the transition from fair value to extreme.",
            "In balance, price tends to rotate between the edges and the POC.",
            "Acceptance beyond an edge hints the market is moving to new value.",
          ],
        },
        {
          kind: "key",
          text: "The value area frames where price was fair; its high and low are the lines between rotation inside value and a move to find new value.",
        },
      ],
    },

    /* ============================================================ */
    /* 6. High Volume Nodes (HVN)                                   */
    /* ============================================================ */
    {
      slug: "high-volume-nodes",
      title: "High Volume Nodes (HVN)",
      summary:
        "High volume nodes are peaks on the profile where heavy trading took place — areas of agreement that tend to slow and hold price.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to spot high volume nodes and use them as areas where price is likely to consolidate or find support and resistance.",
      blocks: [
        {
          kind: "text",
          html: "A high volume node, or <strong>HVN</strong>, is a local peak on the volume profile — a price level where an unusually large amount of trading occurred. It represents an area of <strong>strong agreement</strong>, where buyers and sellers were both willing to transact heavily.",
        },
        {
          kind: "text",
          html: "Because so much business was settled there, price tends to <strong>slow down and consolidate</strong> around an HVN. When price returns to one, it often stalls, chops sideways, or reverses, because the market again finds plenty of willing counterparties.",
        },
        {
          kind: "image",
          src: "/learn/volume/06-hvn.png",
          alt: "High volume nodes on a volume profile",
          caption:
            "High volume nodes are profile peaks — areas of heavy agreement that tend to slow price.",
        },
        {
          kind: "heading",
          text: "How to trade around an HVN",
        },
        {
          kind: "text",
          html: "HVNs act like thick <strong>support and resistance zones</strong>. Approaching an HVN from above, you might expect it to act as support; from below, as resistance. A reasonable plan is to wait for price to react at the node and enter with a <strong>stop beyond the node</strong>, since a clean break through it means agreement has shifted.",
        },
        {
          kind: "text",
          html: "Do not expect a precise turn. An HVN is a zone, not a line, and price can grind through the middle of it before deciding. Use it to anticipate <strong>where momentum may stall</strong>, then let price confirm before committing.",
        },
        {
          kind: "list",
          items: [
            "HVN = a volume peak, a price of heavy agreement.",
            "Price tends to consolidate, stall or reverse around it.",
            "Treat it as a thick support/resistance zone, not a single line.",
            "A decisive break through an HVN signals a shift in agreement.",
          ],
        },
        {
          kind: "key",
          text: "High volume nodes are the market's comfort zones — price tends to slow and stick there, making them natural areas for reactions.",
        },
      ],
    },

    /* ============================================================ */
    /* 7. Low Volume Nodes (LVN)                                    */
    /* ============================================================ */
    {
      slug: "low-volume-nodes",
      title: "Low Volume Nodes (LVN)",
      summary:
        "Low volume nodes are valleys on the profile where little trading happened — thin areas price often crosses quickly.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to identify low volume nodes and understand why price tends to move fast through them and reject at their edges.",
      blocks: [
        {
          kind: "text",
          html: "A low volume node, or <strong>LVN</strong>, is a valley on the volume profile — a price level where very little trading took place. It marks an area the market <strong>rejected</strong>, passing through quickly because few participants wanted to transact there.",
        },
        {
          kind: "text",
          html: "LVNs are the mirror image of high volume nodes. Where an HVN slows price, an LVN <strong>accelerates it</strong>: because there is little resting interest, price can travel through a low volume gap fast, with few counterparties to absorb the move.",
        },
        {
          kind: "image",
          src: "/learn/volume/07-lvn.png",
          alt: "Low volume nodes where price moves quickly",
          caption:
            "Low volume nodes are thin valleys — price tends to move through them quickly.",
        },
        {
          kind: "heading",
          text: "Two ways traders use LVNs",
        },
        {
          kind: "text",
          html: "First, as <strong>rejection edges</strong>: the boundary between an HVN and an adjacent LVN often acts as support or resistance, because it separates a zone of agreement from a zone of disinterest. Price stalling at that edge can offer an entry with a stop just inside the low volume gap.",
        },
        {
          kind: "text",
          html: "Second, as <strong>fast-travel zones</strong>: once price enters an LVN with momentum, it can move quickly to the next high volume node. Some traders target the far side of a low volume area rather than fading inside it, since fading a thin zone offers little support.",
        },
        {
          kind: "list",
          items: [
            "LVN = a volume valley, a price the market rejected.",
            "Price tends to move through low volume areas quickly.",
            "The edge between an HVN and LVN often acts as support or resistance.",
            "Consider targeting the next HVN across a low volume gap.",
          ],
        },
        {
          kind: "key",
          text: "Low volume nodes are the market's no-man's-land — thin areas price rushes through, with the strongest reactions at their edges.",
        },
      ],
    },

    /* ============================================================ */
    /* 8. VWAP Trading                                              */
    /* ============================================================ */
    {
      slug: "vwap-trading",
      title: "VWAP Trading",
      summary:
        "The volume-weighted average price is the average price weighted by volume — a fair-value benchmark used widely by intraday traders.",
      readingMinutes: 7,
      objective:
        "After this module you'll be able to read VWAP as a fair-value line and use it for basic entry and stop logic with honest limits.",
      blocks: [
        {
          kind: "text",
          html: "VWAP stands for <strong>volume-weighted average price</strong>. Unlike a simple moving average, it weights each price by the volume traded there, so it reflects the average price the market actually paid — the level at which most business was done during the session.",
        },
        {
          kind: "text",
          html: "That makes VWAP a widely watched <strong>fair-value benchmark</strong>. Institutions use it to judge whether their fills were good, which means the line attracts real attention and can influence how price behaves around it.",
        },
        {
          kind: "image",
          src: "/learn/volume/08-vwap.png",
          alt: "VWAP line overlaid on candles",
          caption:
            "VWAP tracks the volume-weighted average price — a fair-value line many intraday traders reference.",
        },
        {
          kind: "heading",
          text: "Reading VWAP",
        },
        {
          kind: "text",
          html: "The simplest read is directional. Price trading <strong>above VWAP</strong> means buyers are paying more than the session average — a bullish lean; price <strong>below VWAP</strong> is the opposite. The slope of the line adds context: a rising VWAP supports longs, a falling one supports shorts.",
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "A common intraday approach is the <strong>VWAP pullback</strong>: in an uptrend that holds above VWAP, wait for price to dip back to the line, look for buyers returning, and enter with a stop just below VWAP. If price closes decisively on the other side, the fair-value read has flipped and the trade is invalid.",
        },
        {
          kind: "list",
          items: [
            "VWAP weights price by volume — the session's true average.",
            "Above VWAP leans bullish; below leans bearish.",
            "Pullbacks to VWAP in a trend can offer defined-risk entries.",
            "Stop goes just beyond VWAP; a decisive cross invalidates the idea.",
          ],
        },
        {
          kind: "text",
          html: "VWAP resets each session, so it is mainly an <strong>intraday tool</strong>. It works best in trending or orderly conditions and can whipsaw in choppy markets, so pair it with structure and never treat a touch of the line as a guaranteed turn.",
        },
        {
          kind: "key",
          text: "VWAP is the volume-weighted fair price of the session — a benchmark for bias and pullback entries, best used with structure and honest stops.",
        },
      ],
    },

    /* ============================================================ */
    /* 9. Anchored VWAP                                             */
    /* ============================================================ */
    {
      slug: "anchored-vwap",
      title: "Anchored VWAP",
      summary:
        "Anchored VWAP starts the calculation from a chosen event, measuring the average price paid by everyone since that moment.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to anchor a VWAP to a meaningful event and use it to track the average price paid since that point.",
      blocks: [
        {
          kind: "text",
          html: "Anchored VWAP is the same volume-weighted average, but instead of resetting each session it <strong>starts from a point you choose</strong>. You anchor it to a meaningful event and it then measures the average price everyone has paid since that moment.",
        },
        {
          kind: "text",
          html: "The power is in the anchor. Because it is tied to a specific event, an anchored VWAP tells you whether participants who acted <strong>since that event</strong> are, on average, in profit or in loss — which shapes how they may behave when price returns to the line.",
        },
        {
          kind: "image",
          src: "/learn/volume/09-anchored-vwap.png",
          alt: "Anchored VWAP starting from a chosen event",
          caption:
            "Anchored VWAP begins at a chosen event — the average price paid by everyone since that point.",
        },
        {
          kind: "heading",
          text: "Where to anchor",
        },
        {
          kind: "list",
          items: [
            "A significant swing high or swing low.",
            "A major news release or earnings event.",
            "The start of a clear breakout or trend.",
            "The session or week's open for a cleaner reference.",
          ],
        },
        {
          kind: "text",
          html: "Anchored from a swing low, the line often acts as <strong>dynamic support</strong> while an uptrend holds, because buyers since the low are collectively in profit and inclined to defend it. Anchored from a high, it can act as resistance in the same way for trapped buyers.",
        },
        {
          kind: "text",
          html: "Use it as a reference, not a rule. A well-chosen anchor gives a meaningful line; a random one gives noise. As with any tool, wait for price to <strong>react at the line</strong> and confirm before acting, and place stops beyond it.",
        },
        {
          kind: "key",
          text: "Anchored VWAP measures the average price paid since an event you choose — a powerful reference only when the anchor itself is meaningful.",
        },
      ],
    },

    /* ============================================================ */
    /* 10. Volume Spread Analysis (VSA)                             */
    /* ============================================================ */
    {
      slug: "volume-spread-analysis",
      title: "Volume Spread Analysis (VSA)",
      summary:
        "VSA reads the relationship between a bar's range and its volume to judge whether effort is producing a matching result.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to compare a bar's spread with its volume and spot effort-versus-result mismatches.",
      blocks: [
        {
          kind: "text",
          html: "Volume spread analysis, or <strong>VSA</strong>, studies the relationship between three things on each bar: its range (the spread from high to low), its close, and its volume. The core question is whether <strong>effort matches result</strong> — whether the volume spent produced a matching move.",
        },
        {
          kind: "text",
          html: "When a bar has high volume and a wide range in one direction, effort and result agree — the move is genuine. When a bar has <strong>high volume but a narrow range</strong>, a lot of effort produced little movement, which suggests the other side is quietly absorbing the pressure.",
        },
        {
          kind: "image",
          src: "/learn/volume/10-vsa.png",
          alt: "Comparing bar range with volume in VSA",
          caption:
            "VSA compares a bar's range with its volume — effort that fails to move price is a warning.",
        },
        {
          kind: "heading",
          text: "Effort versus result",
        },
        {
          kind: "list",
          items: [
            "High volume + wide range = effort and result agree; move is genuine.",
            "High volume + narrow range = heavy effort, little result — possible absorption.",
            "Low volume + wide range = a move on thin participation — treat with caution.",
            "Low volume on a pullback = healthy lack of opposing interest.",
          ],
        },
        {
          kind: "text",
          html: "A classic VSA warning is a <strong>climax bar</strong>: enormous volume with a wide range at the end of a long trend, often followed by a stall. It suggests the last participants have piled in and there is little fresh demand left to push price further.",
        },
        {
          kind: "text",
          html: "VSA is interpretive, not mechanical. It works best read <strong>at key levels</strong> and in context with structure, and any single bar can mislead. Use it to raise or lower your confidence in a move, not as a standalone trigger.",
        },
        {
          kind: "key",
          text: "VSA asks whether effort matches result — heavy volume that fails to move price is often the tell that the other side is absorbing it.",
        },
      ],
    },

    /* ============================================================ */
    /* 11. Absorption                                               */
    /* ============================================================ */
    {
      slug: "absorption",
      title: "Absorption",
      summary:
        "Absorption is heavy volume with little price movement — one side soaking up the other's orders, often before a turn.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to recognise absorption and understand why stalled price on heavy volume can precede a reversal.",
      blocks: [
        {
          kind: "text",
          html: "Absorption happens when one side pushes hard — heavy volume, aggressive orders — but price <strong>barely moves</strong>. The pushing side's orders are being soaked up by large resting orders on the other side, like waves breaking on a sea wall that does not shift.",
        },
        {
          kind: "text",
          html: "The mechanism matters. If sellers hit the market with size and price refuses to fall, a <strong>large buyer is absorbing</strong> that selling, filling their position against the pressure. Once the sellers exhaust themselves, there is little left to stop price rising — which is why absorption often precedes a turn.",
        },
        {
          kind: "image",
          src: "/learn/volume/11-absorption.png",
          alt: "Heavy volume with little price movement, absorption",
          caption:
            "Absorption: heavy volume but stalled price — one side is quietly soaking up the other's orders.",
        },
        {
          kind: "heading",
          text: "How to spot it",
        },
        {
          kind: "text",
          html: "Look for a <strong>cluster of high-volume bars</strong> at a level where price stops making progress — repeated pushes into support or resistance that fail to break it. On lower timeframes this shows as large volume with tiny candle bodies stacking up at one price.",
        },
        {
          kind: "list",
          items: [
            "Heavy volume with stalled price is the signature of absorption.",
            "It shows a large passive order soaking up aggressive flow.",
            "It often clusters at a key support or resistance level.",
            "When the aggressive side exhausts, price can turn sharply.",
          ],
        },
        {
          kind: "text",
          html: "Absorption is a clue, not a signal. It tells you a <strong>battle is underway</strong> at a level, but the absorbing side can still fail. Wait for price to actually reject the level and confirm before trading the anticipated reversal, with a stop beyond the absorption zone.",
        },
        {
          kind: "key",
          text: "Absorption is heavy volume meeting a wall of resting orders — when the aggressors run out, the stalled price can reverse hard.",
        },
      ],
    },

    /* ============================================================ */
    /* 12. Volume Confirmation                                      */
    /* ============================================================ */
    {
      slug: "volume-confirmation",
      title: "Volume Confirmation",
      summary:
        "How expanding volume confirms a breakout and thin volume warns of a fake move — turning volume into a filter for setups.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to use volume to confirm or reject breakouts and add a volume filter to your entries.",
      blocks: [
        {
          kind: "text",
          html: "Volume confirmation is the practical heart of volume trading: using volume to judge whether a price move is <strong>real or hollow</strong>. A breakout backed by a surge in volume shows broad participation; the same breakout on thin volume is often a trap.",
        },
        {
          kind: "text",
          html: "The logic is simple. For price to break a well-watched level and keep going, it needs <strong>fresh buyers or sellers</strong> stepping in. Expanding volume is the footprint of that fresh participation; flat or falling volume suggests only a few orders pushed price, and the move may quickly reverse.",
        },
        {
          kind: "image",
          src: "/learn/volume/12-confirmation.png",
          alt: "A breakout confirmed by expanding volume",
          caption:
            "A breakout on expanding volume shows genuine participation — a thin-volume break is suspect.",
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "One honest approach: only take a breakout when the breakout candle shows <strong>clearly expanding volume</strong> versus recent bars. Enter on the close beyond the level or on a volume-backed retest, and place your stop back inside the range — a return there means the confirmed break has failed.",
        },
        {
          kind: "list",
          items: [
            "Expanding volume on a break = genuine participation, higher confidence.",
            "Flat or thin volume on a break = weak move, higher chance of a fake.",
            "Rising volume on a retest adds further confirmation.",
            "Stop goes back inside the range the breakout left.",
          ],
        },
        {
          kind: "text",
          html: "Volume confirmation improves odds; it does not remove risk. Volume can spike and still fail, and on CFDs you are reading tick volume as a proxy. Use it as a <strong>filter, not a promise</strong>, and keep your stop and position size disciplined.",
        },
        {
          kind: "key",
          text: "Let volume confirm the move — a breakout on expanding volume earns more trust, while a thin-volume break deserves suspicion.",
        },
      ],
    },

    /* ============================================================ */
    /* 13. Delta Volume                                             */
    /* ============================================================ */
    {
      slug: "delta-volume",
      title: "Delta Volume",
      summary:
        "Delta measures aggressive buying minus aggressive selling per bar, splitting neutral volume into a directional order-flow reading.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to explain what delta measures and read a delta histogram to gauge aggressive buying versus selling.",
      blocks: [
        {
          kind: "text",
          html: "Raw volume is directionless — it counts every trade equally. Delta goes further by splitting volume into <strong>aggressive buyers versus aggressive sellers</strong>. It measures market orders that lifted the offer (buys) minus market orders that hit the bid (sells) for each bar.",
        },
        {
          kind: "text",
          html: "A <strong>positive delta</strong> bar means aggressive buyers dominated that period; a <strong>negative delta</strong> bar means aggressive sellers did. Shown as a histogram beneath price, it turns neutral volume into a directional order-flow reading of who was pressing hardest.",
        },
        {
          kind: "image",
          src: "/learn/volume/13-delta.png",
          alt: "Delta volume histogram of buyers minus sellers",
          caption:
            "Delta splits volume into aggressive buys minus sells — a directional read of order flow.",
        },
        {
          kind: "heading",
          text: "Reading delta with price",
        },
        {
          kind: "text",
          html: "The most useful reads come from comparing delta with price. When price rises and delta is <strong>strongly positive</strong>, buyers are genuinely driving the move. When price rises but delta is weak or negative, the rally is being <strong>quietly sold into</strong> — a divergence worth noting.",
        },
        {
          kind: "list",
          items: [
            "Delta = aggressive buy volume minus aggressive sell volume per bar.",
            "Positive delta = aggressive buyers dominated; negative = sellers dominated.",
            "Delta agreeing with price supports the move.",
            "Delta diverging from price warns the move may lack real backing.",
          ],
        },
        {
          kind: "text",
          html: "An important honest limit: true delta needs <strong>tick-level bid/ask data</strong> from a real exchange feed, so it is reliable on futures and stocks but often unavailable or estimated on CFDs and forex. Know what your platform is actually calculating before you trust it.",
        },
        {
          kind: "key",
          text: "Delta reveals who was aggressive — buyers or sellers — and its divergence from price is one of order flow's most telling clues.",
        },
      ],
    },

    /* ============================================================ */
    /* 14. Cumulative Delta                                         */
    /* ============================================================ */
    {
      slug: "cumulative-delta",
      title: "Cumulative Delta",
      summary:
        "Cumulative delta sums delta over time into a running line, exposing whether aggressive flow is building or diverging from price.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to read a cumulative delta line and spot divergences between order flow and price.",
      blocks: [
        {
          kind: "text",
          html: "Cumulative delta takes the per-bar delta and <strong>adds it up over time</strong> into a single running line. Where delta shows the buying-versus-selling balance of one bar, cumulative delta shows the <strong>net pressure</strong> that has built up across a session or move.",
        },
        {
          kind: "text",
          html: "A steadily rising cumulative delta line means aggressive buyers have been in control throughout; a falling line means sellers have. Reading the line's slope gives you the <strong>trend of order flow</strong>, independent of exactly where price sits.",
        },
        {
          kind: "image",
          src: "/learn/volume/14-cumulative-delta.png",
          alt: "Cumulative delta line showing divergence with price",
          caption:
            "Cumulative delta sums order flow into a line — its divergence from price is the key signal.",
        },
        {
          kind: "heading",
          text: "The divergence signal",
        },
        {
          kind: "text",
          html: "The most watched pattern is <strong>divergence</strong>. If price makes a new high but cumulative delta makes a lower high, the new price high was not backed by fresh aggressive buying — a sign the move may be weak. The same in reverse warns of a hollow new low.",
        },
        {
          kind: "list",
          items: [
            "Cumulative delta is the running total of per-bar delta.",
            "A rising line = net aggressive buying; a falling line = net selling.",
            "Price up but delta not confirming = bearish divergence.",
            "Price down but delta not confirming = bullish divergence.",
          ],
        },
        {
          kind: "text",
          html: "Treat divergences as <strong>context, not triggers</strong>. Flow can diverge for a while before price responds, or not respond at all, and the same data caveats from the delta module apply on CFDs. Use cumulative delta to gauge the strength behind a trend and confirm with price before acting.",
        },
        {
          kind: "key",
          text: "Cumulative delta turns order flow into a trend line — and when it diverges from price, it hints the move is running on empty.",
        },
      ],
    },

    /* ============================================================ */
    /* 15. Reading Institutional Flow                               */
    /* ============================================================ */
    {
      slug: "institutional-flow",
      title: "Reading Institutional Flow",
      summary:
        "How large institutional orders leave volume footprints — and how retail traders can read those traces without overclaiming.",
      readingMinutes: 6,
      objective:
        "After this module you'll be able to recognise the volume footprints large players tend to leave and read them with realistic expectations.",
      blocks: [
        {
          kind: "text",
          html: "Large institutions cannot buy or sell in one click without moving the market against themselves, so they <strong>split big orders</strong> into many smaller pieces over time. That process leaves traces in volume — footprints a careful trader can learn to read.",
        },
        {
          kind: "text",
          html: "The tools in this course are how those footprints appear: <strong>heavy volume nodes</strong> where a large player accumulated, absorption where they soaked up the other side, and delta that quietly builds against the visible price move. Institutional flow is not a separate indicator — it is the story these traces tell together.",
        },
        {
          kind: "image",
          src: "/learn/volume/15-institutional-flow.png",
          alt: "Volume footprints left by large institutional orders",
          caption:
            "Large orders are worked in pieces, leaving volume footprints across profile, absorption and delta.",
        },
        {
          kind: "heading",
          text: "Common footprints",
        },
        {
          kind: "list",
          items: [
            "Repeated high-volume bars at one price — quiet accumulation or distribution.",
            "Absorption at a level while price refuses to break it.",
            "Cumulative delta building against the prevailing price move.",
            "A volume climax after an extended trend, hinting at exhaustion.",
          ],
        },
        {
          kind: "text",
          html: "Stay honest about what you can know. You are reading <strong>traces, not certainty</strong> — you cannot see who traded or why, and on CFDs your volume is only a tick proxy. Anyone promising to show you exact institutional orders is overclaiming.",
        },
        {
          kind: "text",
          html: "Used well, this is about <strong>aligning with pressure</strong>, not predicting it: favour trades in the direction that the footprints, structure and volume all agree on, and stand aside when they conflict.",
        },
        {
          kind: "key",
          text: "Institutions leave footprints, not signatures — read the volume traces to align with pressure, but never mistake a clue for certainty.",
        },
      ],
    },

    /* ============================================================ */
    /* 16. Building a Volume Setup                                  */
    /* ============================================================ */
    {
      slug: "volume-setup",
      title: "Building a Volume Setup",
      summary:
        "Turn volume profile, VWAP, confirmation and delta into a written, repeatable volume trading setup with clear risk rules.",
      readingMinutes: 7,
      objective:
        "After this module you'll be able to combine the course's volume tools into a simple, repeatable setup with defined entries, stops and risk.",
      blocks: [
        {
          kind: "text",
          html: "The tools only become an edge when combined into a <strong>repeatable process</strong>. A volume setup layers the pieces from this course — profile levels, VWAP, confirmation and delta — into a checklist you can run the same way on every potential trade.",
        },
        {
          kind: "image",
          src: "/learn/volume/16-setup.png",
          alt: "A five-step volume trading setup checklist",
          caption:
            "A simple five-step volume checklist you can apply to every candidate trade.",
        },
        {
          kind: "heading",
          text: "A five-step checklist",
        },
        {
          kind: "list",
          items: [
            "Level: is price at a meaningful profile level — POC, value-area edge, HVN or LVN?",
            "Bias: is price above or below VWAP, and does structure agree with the direction?",
            "Confirmation: does volume expand in the direction you expect on the trigger?",
            "Flow: does delta or cumulative delta support the move rather than diverge from it?",
            "Risk: where is the stop beyond the level, what is the target, and is the reward worth it?",
          ],
        },
        {
          kind: "text",
          html: "A concrete example: price pulls back to a rising VWAP that sits on an HVN, buyers return on <strong>expanding volume</strong>, and delta turns positive. You enter on confirmation with a <strong>stop below the node</strong> and target the next high volume area — a plan where every part is defined in advance.",
        },
        {
          kind: "text",
          html: "Risk management keeps you in the game. Risk a <strong>small fixed percentage</strong> of your account per trade and size the position from your stop distance, never the other way around. A volume edge means nothing if one bad trade does lasting damage.",
        },
        {
          kind: "heading",
          text: "Making it stick",
        },
        {
          kind: "text",
          html: "Keep a <strong>trading journal</strong> with the setup, a screenshot of the volume picture, and the outcome, then review it to refine one clear process over many trades. Remember the honest limits — CFD volume is a tick proxy, no tool wins every time, and volume is <strong>context, not certainty</strong>. Trade the plan, not the emotion.",
        },
        {
          kind: "key",
          text: "A written volume checklist plus strict risk management beats any single indicator — process, not prediction, is the real edge.",
        },
      ],
    },
  ],
};
