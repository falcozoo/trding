import type { Course } from "../courses";

export const fibonacciCourse: Course = {
  id: "fibonacci-harmonic",
  title: "Fibonacci & Harmonic Trading",
  tagline: "Retracements, extensions and harmonic patterns.",
  description:
    "Learn Fibonacci trading in depth: draw retracements and extensions, find confluence zones, apply Fibonacci in a trend and alongside support, resistance and smart-money concepts, master the OTE zone, and trade harmonic patterns like the Gartley, Butterfly, Bat, Crab and Shark.",
  level: "intermediate",
  accent: "amber",
  modules: [
    /* ============================================================ */
    /* 1. Introduction to Fibonacci Retracements                    */
    /* ============================================================ */
    {
      slug: "introduction-fibonacci",
      title: "Introduction to Fibonacci Retracements",
      summary:
        "What Fibonacci ratios are, where they come from, and why traders use them to anticipate where a pullback might end.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to explain what Fibonacci ratios are and why traders apply them to price pullbacks.",
      blocks: [
        {
          kind: "text",
          html: "<strong>What it is:</strong> Fibonacci trading applies a set of ratios derived from a famous number sequence to the swings on a chart. The idea is that after a strong move, price rarely retraces in a random way — pullbacks often stall near <strong>predictable percentages</strong> of the prior move before the trend resumes. Traders use these levels to plan entries, stops and targets, turning a fuzzy 'the dip looks good here' into a specific price with a specific reason.",
        },
        {
          kind: "image",
          src: "/learn/fibonacci/01-intro.png",
          alt: "Fibonacci retracement levels on a pullback",
          caption:
            "A pullback stalling near a Fibonacci level before the prior trend resumes.",
        },
        {
          kind: "heading",
          text: "Where the ratios come from",
        },
        {
          kind: "text",
          html: "The Fibonacci sequence (1, 1, 2, 3, 5, 8, 13 …) produces ratios that recur throughout the tool. Dividing a number by the one after it approaches <strong>0.618</strong>, giving the famous 61.8%; skipping one gives 38.2%; and 23.6% and 78.6% come from related divisions. The 50% level is <strong>not a true Fibonacci ratio</strong> at all, but it is included by convention because markets so often pull back to the midpoint of a move.",
        },
        {
          kind: "list",
          items: [
            "23.6% — a shallow pullback, common in strong trends.",
            "38.2% — a moderate retracement.",
            "50% — the midpoint; widely used but not a real Fibonacci number.",
            "61.8% — the 'golden ratio', a deep and closely watched level.",
            "78.6% — a very deep retracement, the last line before a full reversal.",
          ],
        },
        {
          kind: "heading",
          text: "Why these levels move price at all",
        },
        {
          kind: "text",
          html: "<strong>Why it works:</strong> there is nothing mystical about a market obeying a medieval sequence. Fibonacci levels matter because <strong>thousands of traders watch them</strong> — retail platforms, prop desks and algorithms all draw the same 61.8% on the same swing. When enough orders cluster at one price, a reaction becomes partly self-fulfilling. The number does not cause the bounce; the crowd's shared attention does. That is also why levels work better on liquid, widely-followed markets than on thin, ignored ones.",
        },
        {
          kind: "heading",
          text: "How to read a level on a real chart",
        },
        {
          kind: "text",
          html: "<strong>How to use it:</strong> a Fibonacci level is a <strong>decision zone, not a trigger</strong>. Price arriving at 61.8% tells you 'pay attention here', not 'buy now'. You still need a reason to act — a rejection candle, a structure shift, a confluence with support. Treat each level as a question ('are buyers defending this?') rather than an answer.",
        },
        {
          kind: "example",
          title: "Reading a 38.2/50/61.8 retracement on EUR/USD (€1,000 account)",
          steps: [
            "On the 1-hour chart, price rallies from a swing low of <strong>1.0800</strong> to a swing high of <strong>1.0900</strong> — a clean 100-pip leg up. You drag the Fibonacci tool low-to-high.",
            "The tool prints levels: <strong>38.2% = 1.0862</strong>, <strong>50% = 1.0850</strong>, <strong>61.8% = 1.0838</strong>. These are your candidate areas where the pullback might stall.",
            "Price pulls back and prints a <strong>long lower wick right at 1.0838</strong> (the 61.8%) — the deep golden ratio, and buyers reject it. That is your reason to consider a long.",
            "Entry <strong>1.0842</strong>, stop below the swing low at <strong>1.0796</strong> = <strong>46 pips</strong> risk. Account €1,000, risk 1% = €10, so size ≈ <strong>0.021 lots</strong> (46 pips × ~€0.21/pip ≈ €10).",
            "Target the prior high at 1.0900 (~58 pips) and beyond — roughly <strong>1.25:1</strong> here, modest; a shallower entry would have given worse geometry. The level gave structure to a trade that was otherwise a guess.",
          ],
        },
        {
          kind: "key",
          text: "Fibonacci levels mark where pullbacks tend to stall — a probabilistic guide, not a magic price that price must obey.",
        },
        {
          kind: "mistakes",
          title: "Common mistakes with Fibonacci from day one",
          items: [
            "<strong>Treating a level as a guarantee.</strong> Price is not obliged to stop at 61.8%. It reacts there more often than at a random price, but 'more often' is not 'always' — plan for the level failing.",
            "<strong>Placing a blind limit order at the number.</strong> Sitting a buy exactly at 61.8% with no confirmation means you get filled on every pullback, including the ones that keep falling straight through.",
            "<strong>Forgetting the 50% is not a real Fibonacci ratio.</strong> It works by convention and psychology, not maths — do not over-weight it just because it sits in the middle.",
            "<strong>Drawing on tiny wiggles.</strong> A retracement anchored to noise gives noise levels. Use obvious, significant swings that the whole market can see.",
            "<strong>Skipping the stop because 'the golden ratio always holds'.</strong> It does not. Every Fibonacci trade still needs a defined invalidation price and fixed risk.",
          ],
        },
        {
          kind: "text",
          html: "It is worth being honest from the start: Fibonacci is a <strong>probabilistic tool</strong>, not a guarantee. Levels work partly because so many traders watch them, creating self-fulfilling reactions. Throughout this course we treat Fibonacci as one input among many, always combined with structure and strict <strong>risk management</strong>.",
        },
      ],
    },

    /* ============================================================ */
    /* 2. Fibonacci Retracement                                     */
    /* ============================================================ */
    {
      slug: "fibonacci-retracement",
      title: "Fibonacci Retracement",
      summary:
        "How to draw a Fibonacci retracement correctly from a swing low to a swing high and read the resulting levels.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to draw a Fibonacci retracement from swing to swing and identify where a pullback may find support.",
      blocks: [
        {
          kind: "text",
          html: "<strong>What it is:</strong> A Fibonacci retracement measures how far price pulls <strong>back against a move</strong>. You anchor the tool to a clear swing and it divides that range into horizontal levels at 23.6%, 38.2%, 50%, 61.8% and 78.6%. Those levels become candidate areas where the pullback could end and the original trend resume.",
        },
        {
          kind: "image",
          src: "/learn/fibonacci/02-retracement.png",
          alt: "Drawing a Fibonacci retracement from swing low to high",
          caption:
            "In an uptrend, anchor from the swing low (0%) to the swing high (100%).",
        },
        {
          kind: "heading",
          text: "How to draw it correctly",
        },
        {
          kind: "text",
          html: "In an uptrend, drag the tool from the <strong>swing low to the swing high</strong>: 0% sits at the high and 100% at the low, so the retracement levels fall in between as price pulls back. In a downtrend you reverse it, dragging from the swing high down to the swing low. The single most common mistake is anchoring to the wrong swings — pick <strong>obvious, clean swings</strong>, not minor wiggles.",
        },
        {
          kind: "heading",
          text: "Why the anchors decide everything",
        },
        {
          kind: "text",
          html: "<strong>Why it matters:</strong> the levels are only as good as the two points you pin them to. Anchor to a swing everyone can see and your 61.8% lands where other traders' 61.8% lands — that shared level is where reactions happen. Anchor to a random intraday wiggle and your levels drift off into empty space where nobody else is watching, so nothing reacts. <strong>Wick or body?</strong> Be consistent: many traders use the extreme wick of the swing; whichever you choose, use it every time so your levels are reproducible.",
        },
        {
          kind: "heading",
          text: "Reading the levels",
        },
        {
          kind: "text",
          html: "Shallow retracements to 23.6% or 38.2% suggest a <strong>strong, eager trend</strong> that barely pauses. Deeper pulls to 61.8% or 78.6% mean the counter-move is more serious, offering better entry prices but also a higher chance the trend is failing. The 50% level often acts as a psychological line in the middle.",
        },
        {
          kind: "list",
          items: [
            "Anchor to clear, significant swings — not noise.",
            "Uptrend: low to high. Downtrend: high to low.",
            "The 38.2%–61.8% band is where most tradeable pullbacks stall.",
            "A close well beyond 78.6% warns the move may be reversing, not retracing.",
          ],
        },
        {
          kind: "example",
          title: "Drawing and trading a retracement on GBP/USD (€1,000 account)",
          steps: [
            "GBP/USD trends up on the 4-hour, printing a clean swing low at <strong>1.2500</strong> and a swing high at <strong>1.2700</strong> — a 200-pip leg. Anchor the tool low-to-high.",
            "Levels print: <strong>38.2% = 1.2624</strong>, <strong>50% = 1.2600</strong>, <strong>61.8% = 1.2576</strong>, <strong>78.6% = 1.2543</strong>.",
            "Price drifts back and stalls in the <strong>50%–61.8% band</strong> (1.2600–1.2576), printing a bullish engulfing candle at <strong>1.2585</strong>. That is your confirmation to go long.",
            "Entry <strong>1.2590</strong>, stop below the 78.6% and swing structure at <strong>1.2540</strong> = <strong>50 pips</strong>. Risk 1% of €1,000 = €10, so size ≈ <strong>0.020 lots</strong> (~€0.20/pip).",
            "Target the prior high at <strong>1.2700</strong> (~110 pips) for about <strong>2.2:1</strong>. If price had closed below 1.2540, the pullback would have become a reversal and you would be flat — no debate.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common drawing and reading mistakes",
          items: [
            "<strong>Anchoring to minor wiggles.</strong> A retracement drawn off noise produces levels nobody else sees, so nothing reacts there. Use the obvious swing high and low.",
            "<strong>Mixing wick and body anchors.</strong> Snapping to the wick one time and the body the next makes your levels irreproducible. Pick one convention and keep it.",
            "<strong>Drawing the tool backwards.</strong> Low-to-high in an uptrend, high-to-low in a downtrend. Reverse it and your percentages read upside-down.",
            "<strong>Buying every touch with a blind limit.</strong> The 61.8% is a decision zone, not an automatic buy. Wait for a reaction candle before committing.",
            "<strong>Ignoring a close beyond 78.6%.</strong> That is the market telling you the move is reversing, not retracing — do not average down against it.",
          ],
        },
        {
          kind: "key",
          text: "Draw retracements swing-to-swing on obvious highs and lows — the 38.2% to 61.8% zone is where most pullbacks find their footing.",
        },
      ],
    },

    /* ============================================================ */
    /* 3. Fibonacci Extension                                        */
    /* ============================================================ */
    {
      slug: "fibonacci-extension",
      title: "Fibonacci Extension",
      summary:
        "Use Fibonacci extensions to project logical profit targets beyond the prior swing, using ratios like 127.2% and 161.8%.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to project Fibonacci extension targets and use them to plan where to take profit.",
      blocks: [
        {
          kind: "text",
          html: "<strong>What it is:</strong> If retracements tell you where a pullback might end, <strong>extensions</strong> tell you where the next leg might go. Extensions project levels <strong>beyond 100%</strong> of a move, giving objective targets for taking profit once the trend resumes. They turn a vague 'ride the trend' plan into specific price zones you decide on before you enter.",
        },
        {
          kind: "image",
          src: "/learn/fibonacci/03-extension.png",
          alt: "Fibonacci extension levels projecting targets",
          caption:
            "Extensions project targets at 127.2%, 161.8% and beyond the original move.",
        },
        {
          kind: "heading",
          text: "The key extension ratios",
        },
        {
          kind: "text",
          html: "The two most watched extensions are <strong>127.2%</strong> (the square root of 1.618) and <strong>161.8%</strong> (the golden ratio itself). Beyond those, 200% and 261.8% are used for very extended moves. These levels are drawn from the same swing structure used for retracements, so a single set of anchors can give you both entry and target.",
        },
        {
          kind: "heading",
          text: "Why extensions beat a random target",
        },
        {
          kind: "text",
          html: "<strong>Why it works:</strong> most traders lose winners by having no exit plan — they either take profit too early out of fear, or hold too long out of greed. An extension replaces emotion with a <strong>pre-defined price</strong>. It works for the same crowd reason as retracements: the 161.8% is where large numbers of traders take profit, so supply/demand often clusters there and the move genuinely stalls. It is not that price must reach 161.8% — it is that <strong>if</strong> it gets there, that is a statistically sensible place to bank.",
        },
        {
          kind: "heading",
          text: "How to use extensions",
        },
        {
          kind: "text",
          html: "A common workflow is to enter on a retracement, then set <strong>partial targets</strong> at the 127.2% and 161.8% extensions of the prior impulse. Because trends often stall or reverse at these projections, they are natural places to bank profit, tighten a stop, or scale out rather than gambling on an open-ended move.",
        },
        {
          kind: "list",
          items: [
            "127.2% — the first, most conservative extension target.",
            "161.8% — the classic 'measured move' target.",
            "200% / 261.8% — stretch targets for powerful trends.",
            "Extensions are targets, not signals — confirm with structure.",
          ],
        },
        {
          kind: "example",
          title: "Entering on a retrace, exiting on extensions — EUR/USD (€1,000)",
          steps: [
            "EUR/USD runs from a swing low <strong>1.0700</strong> to a high <strong>1.0800</strong> (100-pip impulse), then pulls back. You use the retracement 61.8% at <strong>1.0738</strong> to enter long at <strong>1.0742</strong> on a rejection candle.",
            "Stop below the swing low at <strong>1.0692</strong> = <strong>50 pips</strong>. Risk 1% of €1,000 = €10, so size ≈ <strong>0.020 lots</strong> (~€0.20/pip).",
            "Now project extensions of the original 1.0700→1.0800 leg: <strong>127.2% = 1.0827</strong>, <strong>161.8% = 1.0862</strong>, <strong>200% = 1.0900</strong>.",
            "Scale out: take half at 127.2% (<strong>1.0827</strong>, ~85 pips, ~1.7:1) and move the stop to break-even. Let the rest run toward 161.8% (<strong>1.0862</strong>, ~120 pips, ~2.4:1).",
            "If price stalls and rejects 161.8%, you close the remainder there. The plan — entry 1.0742, stop 1.0692, targets 1.0827 / 1.0862 — was fully written before the trade, so no mid-trade panic decides your exit.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes projecting targets",
          items: [
            "<strong>Treating an extension as a certainty.</strong> Price reaching 161.8% is a probability, not a promise. Trends can die at 127.2% or blow past 261.8% — extensions guide exits, they do not command price.",
            "<strong>All-or-nothing targeting.</strong> Holding the full position for one distant level often turns winners into losers. Scaling out at 127.2% then 161.8% locks in profit and reduces regret.",
            "<strong>Projecting off the wrong leg.</strong> Extensions must be measured from the same clean impulse you drew the retracement on. Anchor to noise and your targets land in empty space.",
            "<strong>Never moving the stop.</strong> Once the first extension pays, trailing to break-even removes risk. Sitting with the original stop after banking half is giving profit back.",
            "<strong>Chasing the 261.8% every time.</strong> Stretch targets only make sense in genuinely powerful trends; in an average move they rarely fill and you round-trip your gains.",
          ],
        },
        {
          kind: "key",
          text: "Extensions project realistic targets beyond 100% — 127.2% and 161.8% are the standard levels for scaling out of a winning trend.",
        },
      ],
    },

    /* ============================================================ */
    /* 4. Fibonacci Confluence                                      */
    /* ============================================================ */
    {
      slug: "fibonacci-confluence",
      title: "Fibonacci Confluence",
      summary:
        "Why a Fibonacci level matters far more when it lines up with other evidence, and how to build confluence zones.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to spot confluence zones where a Fibonacci level overlaps with other technical evidence.",
      blocks: [
        {
          kind: "text",
          html: "<strong>What it is:</strong> A single Fibonacci level on its own is weak evidence. It becomes powerful when it <strong>overlaps with other factors</strong> — a support zone, a moving average, a trendline or a second Fibonacci reading. Where several tools point to the same price, we call it a <strong>confluence zone</strong>, and reactions there tend to be sharper.",
        },
        {
          kind: "image",
          src: "/learn/fibonacci/04-confluence.png",
          alt: "A Fibonacci level meeting support in a confluence zone",
          caption:
            "A 61.8% retracement landing on prior support forms a confluence zone.",
        },
        {
          kind: "heading",
          text: "Building confluence",
        },
        {
          kind: "text",
          html: "One classic technique is <strong>Fibonacci clustering</strong>: draw retracements from two or three different swings and look for where their levels stack close together. When a 61.8% from one swing meets a 38.2% from another around the same price, that overlap marks a higher-probability decision area.",
        },
        {
          kind: "list",
          items: [
            "Fibonacci level + horizontal support or resistance.",
            "Two or more Fibonacci levels clustering from different swings.",
            "A Fibonacci level meeting a trendline or moving average.",
            "A retracement landing inside a supply or demand zone.",
          ],
        },
        {
          kind: "heading",
          text: "Why stacked evidence beats one level",
        },
        {
          kind: "text",
          html: "<strong>Why it works:</strong> each tool has independent watchers. A horizontal support has traders defending it; a 61.8% has Fibonacci traders buying it; a rising 50-EMA has trend traders adding there. When all three land at the same price, you are not adding one edge — you are stacking <strong>three separate order flows</strong> at one spot, so the reaction is more likely and often faster. But confluence <strong>improves odds, not certainty</strong>: three reasons to be long can still be wrong together, especially when the broader trend turns.",
        },
        {
          kind: "heading",
          text: "How to trade a confluence zone",
        },
        {
          kind: "text",
          html: "<strong>How to use it:</strong> mark your independent levels first — support/resistance, trendlines, moving averages — then overlay the Fibonacci. Only treat a zone as prime when at least <strong>two independent factors</strong> agree within a few pips. Then still wait for a reaction candle; confluence tells you <strong>where</strong> to look, confirmation tells you <strong>when</strong> to act.",
        },
        {
          kind: "example",
          title: "Trading a triple-confluence zone on GBP/USD (€1,000)",
          steps: [
            "GBP/USD trends up; you draw a retracement from swing low <strong>1.2600</strong> to high <strong>1.2760</strong> (160-pip leg). The <strong>61.8% = 1.2661</strong>.",
            "A prior horizontal support sits at <strong>1.2660</strong>, and the rising 50-EMA is passing through <strong>1.2658</strong>. Three factors land inside a 3-pip band — a genuine confluence zone.",
            "Price dips into 1.2658–1.2661 and prints a <strong>pin bar</strong> with a long lower wick. You enter long at <strong>1.2665</strong>.",
            "Stop below the zone and swing at <strong>1.2635</strong> = <strong>30 pips</strong>. Risk 1% of €1,000 = €10, size ≈ <strong>0.033 lots</strong> (~€0.33/pip).",
            "Target the prior high at <strong>1.2760</strong> (~95 pips) for about <strong>3:1</strong>. The tight stop is possible precisely because three factors defended one small zone — remove any one and the setup is ordinary.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common confluence mistakes",
          items: [
            "<strong>Calling one level 'confluence'.</strong> A lone 61.8% is not confluence — it is a single factor. You need at least two independent reasons landing at the same price.",
            "<strong>Manufacturing overlaps.</strong> Stretching a trendline or cherry-picking a swing until it touches your Fibonacci is fooling yourself. The factors must be genuine and pre-existing.",
            "<strong>Confusing improved odds with certainty.</strong> Even a beautiful triple-confluence zone fails regularly. It raises probability, it does not remove the need for a stop.",
            "<strong>Skipping confirmation because the zone looks perfect.</strong> Confluence shows where to look; a reaction candle shows when to act. Blind limits still get run over.",
            "<strong>Widening the stop to 'give the zone room'.</strong> If price trades cleanly through all your factors, the idea is wrong. Do not turn a 30-pip risk into 80 to avoid being stopped.",
          ],
        },
        {
          kind: "key",
          text: "One Fibonacci level is a guess; a level stacked with support, a trendline or a second reading is a confluence zone worth trading.",
        },
        {
          kind: "text",
          html: "The more evidence that agrees at one price, the more seriously you treat it — but confluence <strong>improves odds, not certainty</strong>. Even a beautiful confluence zone can fail, so you still enter with a defined stop and only risk what you can afford to lose on the idea.",
        },
      ],
    },

    /* ============================================================ */
    /* 5. Fibonacci in a Trend                                      */
    /* ============================================================ */
    {
      slug: "fibonacci-in-a-trend",
      title: "Fibonacci in a Trend",
      summary:
        "How to use Fibonacci retracements to buy pullbacks in an uptrend and sell rallies in a downtrend with the trend on your side.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to use Fibonacci retracements to time trend-aligned entries on pullbacks.",
      blocks: [
        {
          kind: "text",
          html: "<strong>What it is:</strong> Fibonacci works best when it is used <strong>with the trend</strong>, not against it. In a healthy uptrend, each pullback into a Fibonacci level is a chance to join the move at a discount; in a downtrend, each bounce into a level is a chance to sell into strength. Trend direction decides which levels you care about.",
        },
        {
          kind: "image",
          src: "/learn/fibonacci/05-in-trend.png",
          alt: "Buying pullbacks to Fibonacci levels in an uptrend",
          caption:
            "In an uptrend, dips into the 38.2%–61.8% zone offer trend-aligned entries.",
        },
        {
          kind: "heading",
          text: "Trading with the trend",
        },
        {
          kind: "text",
          html: "In an uptrend, wait for a pullback into the <strong>38.2%–61.8% band</strong> and look for the trend to resume before entering long. A logical stop sits just below the swing low that anchored the retracement, because a break there means the pullback has become a reversal. In a downtrend, mirror everything: sell rallies into the band with a stop above the swing high.",
        },
        {
          kind: "heading",
          text: "Why trend-aligned Fibonacci has the edge",
        },
        {
          kind: "text",
          html: "<strong>Why it works:</strong> a trend is the market's path of least resistance — more buyers than sellers in an uptrend. Buying a pullback means entering <strong>with that flow</strong> at a temporary discount, while the counter-move traders who sold the dip become fuel when they cover. Fading the trend at a Fibonacci level does the opposite: you fight the dominant flow and hope the level holds. Same level, very different odds. <strong>Structure defines the trend</strong>; Fibonacci only fine-tunes the entry inside it.",
        },
        {
          kind: "text",
          html: "Shallow retracements to 23.6%–38.2% signal a <strong>strong trend</strong> that offers little discount but high momentum. Deeper pulls to 61.8%–78.6% give better prices but demand more caution, because the deeper the retrace, the greater the risk the trend is done. Match your entry style to how far price has pulled back.",
        },
        {
          kind: "example",
          title: "Buying a trend pullback on EUR/USD (€1,000 account)",
          steps: [
            "EUR/USD is in a clear uptrend on the 1-hour: higher highs, higher lows. The latest impulse runs from swing low <strong>1.0850</strong> to swing high <strong>1.0950</strong> (100 pips).",
            "You draw the retracement. Levels: <strong>38.2% = 1.0912</strong>, <strong>50% = 1.0900</strong>, <strong>61.8% = 1.0888</strong>. You only look for longs — the trend is up.",
            "Price pulls into the <strong>50% (1.0900)</strong> and holds, printing a higher low and a bullish close. Trend-aligned confirmation. Entry <strong>1.0905</strong>.",
            "Stop below the 61.8% and the prior swing low at <strong>1.0845</strong> = <strong>60 pips</strong>. Risk 1% of €1,000 = €10, size ≈ <strong>0.016 lots</strong> (~€0.16/pip).",
            "Target a new high beyond 1.0950, projecting the 127.2% extension at <strong>1.0977</strong> (~72 pips, ~1.2:1) and 161.8% at <strong>1.1012</strong> (~107 pips, ~1.8:1). You joined the trend at a discount, not fought it.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common trend-Fibonacci mistakes",
          items: [
            "<strong>Fading the trend at a level.</strong> Shorting a 38.2% pullback in a strong uptrend because 'it's overbought' fights the dominant flow. Trade with the trend, not against it.",
            "<strong>Calling a range a trend.</strong> Fibonacci pullbacks only work when there is a real trend. In a sideways range, 'dips' and 'rallies' are just noise between the edges.",
            "<strong>Buying the deep 78.6% blindly.</strong> The deeper the retrace, the higher the chance the trend is already done. Deep entries need extra confirmation, not less.",
            "<strong>Entering with no reaction.</strong> Price touching 50% is not a signal. Wait for a higher low or a bullish close before committing.",
            "<strong>Moving the stop below structure to avoid the shake-out.</strong> If price closes below the swing low, the pullback became a reversal — respect the invalidation instead of widening it.",
          ],
        },
        {
          kind: "key",
          text: "Use Fibonacci to buy dips in uptrends and sell rallies in downtrends — trade the pullback, not the reversal.",
        },
        {
          kind: "text",
          html: "The biggest edge here is that you are <strong>aligning with structure</strong>. Fibonacci does not tell you the trend — market structure does. Read the higher highs and higher lows first, then let Fibonacci fine-tune your entry inside that trend.",
        },
      ],
    },

    /* ============================================================ */
    /* 6. Fibonacci with Support & Resistance                       */
    /* ============================================================ */
    {
      slug: "fibonacci-with-support-resistance",
      title: "Fibonacci with Support & Resistance",
      summary:
        "Combine Fibonacci levels with horizontal support and resistance to find the highest-quality reaction zones on the chart.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to combine Fibonacci levels with horizontal support and resistance for stronger decision zones.",
      blocks: [
        {
          kind: "text",
          html: "<strong>What it is:</strong> Horizontal support and resistance are the bedrock of price action, and Fibonacci layers neatly on top of them. When a retracement level lands <strong>exactly on a prior level</strong> that price has respected before, you get two independent reasons to expect a reaction at the same spot.",
        },
        {
          kind: "image",
          src: "/learn/fibonacci/06-with-sr.png",
          alt: "Fibonacci stacked on horizontal support and resistance",
          caption:
            "A Fibonacci level landing on a well-tested horizontal level is a high-value zone.",
        },
        {
          kind: "heading",
          text: "Why the combination works",
        },
        {
          kind: "text",
          html: "Support and resistance are areas of <strong>market memory</strong> where buyers or sellers have acted before. Fibonacci levels are areas where pullbacks statistically stall. When memory and statistics agree, more traders place orders there, which makes the reaction more likely and often sharper — the essence of confluence from an earlier module.",
        },
        {
          kind: "heading",
          text: "How to trade the overlap",
        },
        {
          kind: "text",
          html: "<strong>How to use it:</strong> mark your horizontal levels first from the higher timeframes, then draw the retracement. If a level such as 61.8% sits inside a known support zone, treat that as a <strong>primary decision area</strong>. Wait for a reaction — a rejection candle or a small structure shift — before entering, with a stop just beyond both the Fibonacci level and the horizontal zone.",
        },
        {
          kind: "list",
          items: [
            "Draw horizontal support and resistance before the Fibonacci tool.",
            "Prioritise Fibonacci levels that sit on tested horizontal zones.",
            "Wait for a reaction candle rather than a blind limit order.",
            "Stop goes just beyond the combined zone, not inside it.",
          ],
        },
        {
          kind: "heading",
          text: "Order matters: levels first, Fibonacci second",
        },
        {
          kind: "text",
          html: "<strong>Why the order matters:</strong> if you draw the Fibonacci first, you will unconsciously 'find' support wherever the 61.8% happens to land — that is confirmation bias, not analysis. Mark the horizontal levels <strong>before</strong> the tool touches the chart, using zones price has already respected, then see which Fibonacci level coincides. Genuine overlap is discovered, not manufactured.",
        },
        {
          kind: "example",
          title: "Fibonacci-on-support long on USD/JPY (€1,000 account)",
          steps: [
            "On USD/JPY 4-hour, you first mark a well-tested horizontal support at <strong>156.00</strong> — price bounced there twice last month.",
            "The recent impulse ran from <strong>155.50</strong> up to <strong>157.50</strong> (200 pips). You draw the retracement: <strong>50% = 156.50</strong>, <strong>61.8% = 156.26</strong>, <strong>78.6% = 155.93</strong>.",
            "The <strong>78.6% (155.93)</strong> sits right on your 156.00 support — a genuine overlap you found, not forced. Price dips in and prints a bullish rejection at <strong>156.00</strong>.",
            "Entry <strong>156.10</strong>, stop below both the level and zone at <strong>155.60</strong> = <strong>50 pips</strong>. Risk 1% of €1,000 = €10; on USD/JPY ~€0.06/pip per 0.01 lot, size ≈ <strong>0.03 lots</strong>.",
            "Target the prior high at <strong>157.50</strong> (~140 pips) for about <strong>2.8:1</strong>. Two reasons defended 156.00, so a break below 155.60 cleanly voids the idea.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common Fibonacci-plus-S/R mistakes",
          items: [
            "<strong>Drawing Fibonacci first, then 'finding' support.</strong> That is bias. Mark the horizontal zones before the tool so the overlap is genuine.",
            "<strong>Using untested horizontal levels.</strong> A line price has never reacted to is not support. Prioritise zones with a real reaction history.",
            "<strong>Treating the overlap as a guarantee.</strong> Two reasons raise the odds; they do not remove failure. Combined zones still break, so keep the stop.",
            "<strong>Placing the stop inside the zone.</strong> A stop between the Fibonacci level and the support gets nicked by normal noise. Put it just beyond the whole zone.",
            "<strong>Entering with no reaction candle.</strong> The overlap tells you where; a rejection or structure shift tells you when. Blind limits skip the confirmation.",
          ],
        },
        {
          kind: "key",
          text: "A Fibonacci level sitting on tested support or resistance is far stronger than either signal alone.",
        },
      ],
    },

    /* ============================================================ */
    /* 7. Fibonacci with SMC                                        */
    /* ============================================================ */
    {
      slug: "fibonacci-with-smc",
      title: "Fibonacci with SMC",
      summary:
        "Pair Fibonacci retracements with smart-money concepts like order blocks and fair value gaps to refine entries.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to combine Fibonacci retracements with order blocks and other smart-money zones.",
      blocks: [
        {
          kind: "text",
          html: "<strong>What it is:</strong> Smart-money concepts (SMC) describe how large players leave footprints on the chart — <strong>order blocks</strong>, fair value gaps and liquidity pools. Fibonacci pairs naturally with SMC because both try to answer the same question: where is price likely to react on its way back into a trend?",
        },
        {
          kind: "image",
          src: "/learn/fibonacci/07-with-smc.png",
          alt: "Fibonacci retracement into an order block",
          caption:
            "A retracement pulling back into an order block aligned with a Fibonacci level.",
        },
        {
          kind: "heading",
          text: "Retracing into an order block",
        },
        {
          kind: "text",
          html: "An order block is the last opposing candle before a strong impulsive move — a zone where institutional orders are thought to rest. When a Fibonacci retracement pulls price back <strong>into an order block</strong>, and especially when that block sits near the 61.8%–78.6% area, you have a smart-money zone and a Fibonacci zone pointing to the same price.",
        },
        {
          kind: "text",
          html: "Fair value gaps — imbalances left by fast candles — often sit inside the same retracement band and act as magnets for price. Aligning a Fibonacci level with a <strong>fair value gap</strong> or a swept liquidity level gives a precise, evidence-based entry rather than a round guess.",
        },
        {
          kind: "list",
          items: [
            "Mark the order block or fair value gap from the impulsive leg.",
            "Overlay the retracement; look for the block inside the 61.8%–78.6% zone.",
            "Enter on a reaction inside the block, stop beyond it.",
            "SMC and Fibonacci are both interpretive — demand confirmation.",
          ],
        },
        {
          kind: "heading",
          text: "Why the two frameworks agree",
        },
        {
          kind: "text",
          html: "<strong>Why it works:</strong> both tools are really describing the same thing — where resting orders sit. An order block marks the candle that launched the move (unfilled orders left behind); the deep Fibonacci band marks where the crowd expects the pullback to end. When they coincide, you have <strong>institutional footprints and retail expectation</strong> at one price. That said, SMC labelling is highly <strong>subjective</strong>: two traders draw different order blocks on the same chart, so treat the overlap as a lead to confirm, not proof.",
        },
        {
          kind: "example",
          title: "Fibonacci-into-order-block long on EUR/USD (€1,000)",
          steps: [
            "EUR/USD prints a strong bullish impulse from <strong>1.0900</strong> to <strong>1.1000</strong> (100 pips). The last bearish candle before the impulse — the bullish order block — sits at <strong>1.0925–1.0935</strong>.",
            "Draw the retracement of the 1.0900→1.1000 leg: <strong>61.8% = 1.0938</strong>, <strong>78.6% = 1.0921</strong>. The order block (1.0925–1.0935) sits squarely in the <strong>61.8%–78.6% band</strong>.",
            "There is also a small fair value gap at <strong>1.0930</strong> inside the block. Price retraces in and prints a bullish engulfing at <strong>1.0932</strong> — reaction inside the block.",
            "Entry <strong>1.0936</strong>, stop below the block at <strong>1.0916</strong> = <strong>20 pips</strong>. Risk 1% of €1,000 = €10, size ≈ <strong>0.050 lots</strong> (~€0.50/pip).",
            "Target the prior high at <strong>1.1000</strong> (~64 pips) for about <strong>3.2:1</strong>. The tight stop comes from the precise block; a break below 1.0916 means the smart-money read was wrong and you are out.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common Fibonacci-plus-SMC mistakes",
          items: [
            "<strong>Drawing order blocks to fit the Fibonacci.</strong> SMC is subjective — if you nudge the block until it hits 61.8%, you are manufacturing confluence, not finding it.",
            "<strong>Treating SMC as objective truth.</strong> Order blocks and FVGs are interpretations, not facts. Two traders mark them differently; demand a reaction, not faith.",
            "<strong>Ignoring the trend.</strong> A bullish order block in a broken-down market is just a level price falls through. SMC entries still need trend alignment.",
            "<strong>Stops inside the block.</strong> A stop within the order block gets swept by the very liquidity grab the block represents. Place it just beyond the block.",
            "<strong>Chasing every FVG.</strong> Not every imbalance fills or reacts. Wait for the confluence with the deep Fibonacci band and a confirming candle.",
          ],
        },
        {
          kind: "key",
          text: "When a Fibonacci level overlaps an order block or fair value gap, you have both smart-money and Fibonacci logic pointing to one entry.",
        },
      ],
    },

    /* ============================================================ */
    /* 8. Optimal Trade Entry (OTE)                                 */
    /* ============================================================ */
    {
      slug: "optimal-trade-entry",
      title: "Optimal Trade Entry (OTE)",
      summary:
        "The OTE concept: entering in the deep 62%–79% retracement zone for the best reward-to-risk in a trend continuation.",
      readingMinutes: 12,
      objective:
        "After this module you'll be able to define the OTE zone and understand its reward-to-risk logic within a trend.",
      blocks: [
        {
          kind: "text",
          html: "<strong>What it is:</strong> Optimal Trade Entry, or <strong>OTE</strong>, is a concept popularised by smart-money traders that focuses on entering trades in the <strong>deep retracement zone</strong>. Rather than buying a shallow dip, OTE waits for price to pull back into the 62%–79% area, where the reward-to-risk on a trend continuation is at its best.",
        },
        {
          kind: "image",
          src: "/learn/fibonacci/08-ote.png",
          alt: "The 62 to 79 percent OTE zone",
          caption:
            "The OTE zone spans roughly the 62% to 79% retracement of the prior leg.",
        },
        {
          kind: "heading",
          text: "Why enter deep?",
        },
        {
          kind: "text",
          html: "The logic is arithmetic. Entering near the <strong>78.6% level</strong> puts your stop only a little below the origin swing, while your target back toward the extreme and beyond is far away. That geometry produces a <strong>high reward-to-risk</strong> ratio — often 3:1 or better — which means you can be wrong more often than right and still come out ahead.",
        },
        {
          kind: "heading",
          text: "The trade-off",
        },
        {
          kind: "text",
          html: "The catch is that deep retracements have a <strong>higher failure rate</strong>: by the time price reaches 79%, the trend is under real pressure and may be reversing. OTE therefore demands confirmation — a rejection, a lower-timeframe structure shift — and a firm stop just beyond the origin swing, because if that breaks the whole idea is void.",
        },
        {
          kind: "list",
          items: [
            "OTE zone: roughly 62% to 79% retracement of the leg.",
            "Entry near the deep end maximises reward-to-risk.",
            "Stop sits just beyond the swing that started the move.",
            "Deeper entries mean better R:R but a higher chance of failure.",
          ],
        },
        {
          kind: "heading",
          text: "The R:R and win-rate trade-off in numbers",
        },
        {
          kind: "text",
          html: "<strong>Why it matters:</strong> a shallow 38.2% entry has a higher chance of holding but poor geometry — small target, wide-ish stop. A deep 78.6% entry flips that: <strong>excellent geometry, lower hit-rate</strong>. If your OTE trades pay 3:1, you only need to win about 1 in 3 to break even. That is the whole point — OTE trades survival maths, not being right often. But do not romanticise it: the deeper you go, the more the trend is under strain, so a stop beyond the origin swing is non-negotiable.",
        },
        {
          kind: "example",
          title: "OTE long in the 62%–79% zone — GBP/USD (€1,000)",
          steps: [
            "GBP/USD trends up on the 15-minute. The latest impulse runs from swing low <strong>1.2700</strong> to swing high <strong>1.2800</strong> (100 pips).",
            "You draw the retracement and mark the OTE band: <strong>62% = 1.2738</strong> to <strong>79% = 1.2721</strong>. The 70.5% midpoint sits at <strong>1.2730</strong> — your ideal fill.",
            "Price pushes deep into the band and prints a bullish rejection wick at <strong>1.2726</strong>, plus a lower-timeframe higher low. Confirmation. Entry <strong>1.2730</strong>.",
            "Stop just below the origin swing at <strong>1.2695</strong> = <strong>35 pips</strong>. Risk 1% of €1,000 = €10, size ≈ <strong>0.028 lots</strong> (~€0.28/pip).",
            "Target the prior high 1.2800 and the 127.2% extension at <strong>1.2827</strong> (~97 pips) — about <strong>2.8:1</strong>. Deep entry = tight stop = strong geometry, but if 1.2695 breaks the trend read is void and you are out.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common OTE mistakes",
          items: [
            "<strong>Buying the OTE with no confirmation.</strong> The deep zone fails often. A blind limit at 70% catches every pullback that keeps falling. Wait for rejection or a structure shift.",
            "<strong>Widening the stop below the origin swing.</strong> The whole R:R advantage comes from a tight stop just past the origin. Widen it and you destroy the only reason to enter deep.",
            "<strong>Using OTE against the trend.</strong> OTE is a continuation tool. In a downtrend, the 'deep pullback' up is a shorting zone, not a place to buy the reversal.",
            "<strong>Over-sizing because R:R looks great.</strong> Better geometry does not mean bet bigger. Keep fixed 1% risk — the higher failure rate punishes over-leverage fast.",
            "<strong>Treating 3:1 as a promise.</strong> The reward-to-risk is potential, not guaranteed. Many OTE trades stop out; the edge only shows across many trades with disciplined risk.",
          ],
        },
        {
          kind: "key",
          text: "OTE trades the deep 62%–79% zone for maximum reward-to-risk — great geometry, but only with confirmation and a stop beyond the origin swing.",
        },
      ],
    },

    /* ============================================================ */
    /* 9. Harmonic Patterns                                         */
    /* ============================================================ */
    {
      slug: "harmonic-patterns",
      title: "Harmonic Patterns",
      summary:
        "An introduction to harmonic patterns — five-point XABCD structures built from precise Fibonacci ratios.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to describe the XABCD structure and how Fibonacci ratios define a harmonic pattern.",
      blocks: [
        {
          kind: "text",
          html: "<strong>What it is:</strong> Harmonic patterns are geometric price structures whose legs conform to specific <strong>Fibonacci ratios</strong>. Instead of eyeballing a shape, harmonic traders measure each leg and only trade the pattern when its proportions fall within tight tolerances. The reward is a precise <strong>reversal zone</strong> with clearly defined risk.",
        },
        {
          kind: "image",
          src: "/learn/fibonacci/09-harmonic-intro.png",
          alt: "An XABCD harmonic pattern structure",
          caption:
            "Every harmonic pattern is built from five points: X, A, B, C and D.",
        },
        {
          kind: "heading",
          text: "The XABCD structure",
        },
        {
          kind: "text",
          html: "Nearly all harmonic patterns share the same skeleton: five points labelled <strong>X, A, B, C and D</strong>, forming four legs (XA, AB, BC, CD). Point D is the <strong>potential reversal zone (PRZ)</strong> — the price where the pattern completes and a trade is considered. What separates a Gartley from a Bat or a Crab is simply the ratio each leg must meet.",
        },
        {
          kind: "text",
          html: "The universal trade idea is to <strong>enter at D</strong> in the direction opposite to the CD leg, expecting a reversal, and to place a <strong>stop beyond X</strong>. If price pushes through X, the pattern has failed and the structure no longer holds — a clean, objective invalidation point.",
        },
        {
          kind: "list",
          items: [
            "X, A, B, C, D — four legs and one completion point.",
            "D is the potential reversal zone where you consider a trade.",
            "Entry at D, targeting a retrace of the CD or AD leg.",
            "Stop beyond X — the level that invalidates the whole pattern.",
          ],
        },
        {
          kind: "heading",
          text: "Why the ratios matter — and their limits",
        },
        {
          kind: "text",
          html: "<strong>Why it works:</strong> the appeal is <strong>objective risk</strong>. Because every leg must hit a ratio and D is a precise price, you know your entry, stop and invalidation before the pattern even completes — no guessing. The reversal itself is counter-trend, so the tight geometry is what makes the reward worth the risk. But be honest: harmonic patterns are <strong>counter-trend reversal bets</strong>, they are subjective to spot, and plenty complete then fail. The ratios define the trade; they do not guarantee the reversal.",
        },
        {
          kind: "example",
          title: "Anatomy of a bearish XABCD short — EUR/USD (€1,000)",
          steps: [
            "You spot a five-point structure on EUR/USD 1-hour: <strong>X = 1.0700</strong>, <strong>A = 1.0850</strong>, <strong>B = 1.0757</strong> (a 61.8% retrace of XA), <strong>C = 1.0810</strong>, and price now approaching D near <strong>1.0870</strong>.",
            "D projects just beyond X's opposite side and completes the pattern's ratios. The PRZ is <strong>1.0868–1.0875</strong>. You wait — a pattern is not a trade until D reacts.",
            "Price tags <strong>1.0872</strong> and prints a bearish engulfing candle — confirmation at D for a short (opposite the up CD leg).",
            "Entry <strong>1.0865</strong>, stop beyond the structure at <strong>1.0895</strong> = <strong>30 pips</strong>. Risk 1% of €1,000 = €10, size ≈ <strong>0.033 lots</strong> (~€0.33/pip).",
            "Target a retrace of CD toward C at <strong>1.0810</strong> (~55 pips, ~1.8:1) then A at <strong>1.0850</strong>. If price closes beyond the invalidation, the pattern failed — you take the small loss, no debate.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common harmonic-pattern mistakes",
          items: [
            "<strong>Forcing the ratios.</strong> If B is at 55% and the pattern needs 61.8%, it is not that pattern. Loose tolerances turn harmonics into wishful drawing.",
            "<strong>Entering at D with no reaction.</strong> D is a potential reversal zone, not a signal. Wait for a rejection or structure shift before committing.",
            "<strong>Trusting the shape over the stop.</strong> A textbook pattern still fails often. The stop beyond X is the whole risk model — never widen or remove it.",
            "<strong>Ignoring that it is counter-trend.</strong> You are betting on a reversal against the CD leg. Respect that these are lower-probability, higher-R:R trades.",
            "<strong>Over-trading messy structures.</strong> Not every wiggle is a Gartley. If you have to squint, there is no pattern.",
          ],
        },
        {
          kind: "key",
          text: "Harmonic patterns are XABCD shapes defined by Fibonacci ratios — enter at D, target a retrace, and place the stop beyond X.",
        },
        {
          kind: "text",
          html: "Be realistic: harmonic patterns are <strong>subjective to identify</strong> and no pattern completes perfectly every time. Treat the ratios as tolerances, always wait for <strong>confirmation at D</strong>, and never abandon your stop just because the shape looked textbook.",
        },
      ],
    },

    /* ============================================================ */
    /* 10. Gartley Pattern                                          */
    /* ============================================================ */
    {
      slug: "gartley-pattern",
      title: "Gartley Pattern",
      summary:
        "The Gartley — the original harmonic pattern — with its defining 61.8% B-point and 78.6% D-point retracements.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to recognise a Gartley by its ratios and understand its D-point entry logic.",
      blocks: [
        {
          kind: "text",
          html: "<strong>What it is:</strong> The Gartley is the <strong>original harmonic pattern</strong>, and its D-point sits inside the prior XA move, making it the most conservative of the family. It looks like a stretched 'M' or 'W' and represents a deep pullback that completes just before the trend is expected to resume.",
        },
        {
          kind: "image",
          src: "/learn/fibonacci/10-gartley.png",
          alt: "The Gartley harmonic pattern",
          caption:
            "A Gartley: B retraces 61.8% of XA and D completes near 78.6% of XA.",
        },
        {
          kind: "heading",
          text: "Defining ratios",
        },
        {
          kind: "list",
          items: [
            "B retraces 61.8% of the XA leg.",
            "BC retraces 38.2% to 88.6% of AB.",
            "CD extends 127.2% to 161.8% of BC.",
            "D completes at 78.6% of XA — inside the XA range.",
          ],
        },
        {
          kind: "text",
          html: "The signature of the Gartley is the <strong>78.6% D-point</strong>: because D does not exceed X, the pattern stays contained within the original move. That containment is what makes it the safest harmonic to trade, though 'safest' still means it needs confirmation.",
        },
        {
          kind: "heading",
          text: "Trading the Gartley",
        },
        {
          kind: "text",
          html: "<strong>How to use it:</strong> enter at <strong>point D</strong> in the direction of the original trend — long on a bullish Gartley, short on a bearish one — after a reaction confirms the level. Place the <strong>stop just beyond X</strong>; if price runs past X, the pattern is void. Targets are typically the C point and then the A point, often taken in stages.",
        },
        {
          kind: "text",
          html: "<strong>Why it's the safest:</strong> because D at 78.6% stays inside XA, the pattern is really a deep <strong>trend-continuation pullback</strong> dressed in harmonic ratios — you are broadly with the larger move, not fighting a fresh extreme. That is why it fails less often than a Butterfly or Crab. 'Less often', not 'rarely' — the stop beyond X still does the real work.",
        },
        {
          kind: "example",
          title: "Bullish Gartley long on GBP/USD (€1,000)",
          steps: [
            "GBP/USD prints a bullish Gartley: <strong>X = 1.2500</strong>, <strong>A = 1.2700</strong> (XA = 200 pips), <strong>B = 1.2576</strong> (61.8% of XA), <strong>C = 1.2650</strong>.",
            "D completes at <strong>78.6% of XA = 1.2543</strong> — inside the XA range. The PRZ is <strong>1.2540–1.2548</strong>.",
            "Price dips to <strong>1.2544</strong> and prints a bullish pin bar — confirmation at D. Entry <strong>1.2550</strong>.",
            "Stop just beyond X at <strong>1.2490</strong> = <strong>60 pips</strong>. Risk 1% of €1,000 = €10, size ≈ <strong>0.016 lots</strong> (~€0.16/pip).",
            "Target C at <strong>1.2650</strong> (~100 pips, ~1.6:1) taking half, then A at <strong>1.2700</strong> (~150 pips, ~2.5:1) for the rest. A close below 1.2490 voids the Gartley and you are out.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common Gartley mistakes",
          items: [
            "<strong>Accepting a loose B-point.</strong> The Gartley needs B near 61.8% of XA. If B is at 78.6%, you may be looking at a Butterfly — a different trade with a different stop.",
            "<strong>Letting D exceed X.</strong> If D pushes past X, it is no longer a Gartley (D must stay inside XA). Do not force the label onto a broken structure.",
            "<strong>Entering at D with no reaction.</strong> 'Safest harmonic' still means wait for a rejection candle. A blind limit at 78.6% catches the failures too.",
            "<strong>Removing the stop beyond X.</strong> Containment does not mean safety. Past X the pattern is void — respect the invalidation every time.",
            "<strong>Holding the full position to A.</strong> Price often stalls at C. Scaling out at C then A banks profit instead of round-tripping a winner.",
          ],
        },
        {
          kind: "key",
          text: "The Gartley completes at 78.6% of XA with a 61.8% B-point — enter at D, stop beyond X, and target C then A.",
        },
      ],
    },

    /* ============================================================ */
    /* 11. Butterfly Pattern                                        */
    /* ============================================================ */
    {
      slug: "butterfly-pattern",
      title: "Butterfly Pattern",
      summary:
        "The Butterfly — an extension harmonic where the D-point projects beyond X at 127.2%–161.8% of XA.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to distinguish a Butterfly from a Gartley by its extended D-point beyond X.",
      blocks: [
        {
          kind: "text",
          html: "<strong>What it is:</strong> The Butterfly is an <strong>extension pattern</strong>: unlike the Gartley, its completion point D pushes <strong>beyond X</strong>, projecting to a new extreme. It aims to catch reversals at the exhausted end of a move rather than inside a pullback, which makes it more aggressive.",
        },
        {
          kind: "image",
          src: "/learn/fibonacci/11-butterfly.png",
          alt: "The Butterfly harmonic pattern",
          caption:
            "A Butterfly: B retraces 78.6% of XA and D extends to 127.2%–161.8% of XA.",
        },
        {
          kind: "heading",
          text: "Defining ratios",
        },
        {
          kind: "list",
          items: [
            "B retraces 78.6% of the XA leg.",
            "BC retraces 38.2% to 88.6% of AB.",
            "CD extends 161.8% to 224% of BC.",
            "D projects to 127.2% to 161.8% of XA — beyond X.",
          ],
        },
        {
          kind: "text",
          html: "The defining feature is the <strong>78.6% B-point</strong> combined with a D that reaches the <strong>127.2%–161.8% extension</strong> of XA. Because D sits past X, the Butterfly targets a fresh high or low where the prior move is stretched thin and prone to snapping back.",
        },
        {
          kind: "heading",
          text: "Trading the Butterfly",
        },
        {
          kind: "text",
          html: "<strong>How to use it:</strong> enter at D as price reaches the extension zone and shows rejection, expecting a reversal. Because D is already an extreme, the <strong>stop sits just beyond D</strong> — a short distance past the 161.8% projection — since there is no X to hide behind on the far side. Confirmation matters even more here, as catching an extended reversal is inherently harder.",
        },
        {
          kind: "text",
          html: "<strong>Why it's more aggressive:</strong> where the Gartley buys a contained pullback, the Butterfly <strong>fades a fresh extreme</strong> — price is making a new high or low when you take the counter-trade. That is genuinely harder: momentum is against you at the moment of entry, so the false-completion rate is higher. The pay-off is a tight stop just past D and a large target back toward the origin, but only confirmation keeps you out of the moves that keep extending.",
        },
        {
          kind: "example",
          title: "Bearish Butterfly short on EUR/USD (€1,000)",
          steps: [
            "EUR/USD prints a bearish Butterfly: <strong>X = 1.0800</strong>, <strong>A = 1.0700</strong> (XA = 100 pips), <strong>B = 1.0779</strong> (78.6% of XA), <strong>C = 1.0730</strong>.",
            "D projects to <strong>127.2% of XA = 1.0827</strong> (beyond X at 1.0800) — a fresh high. The PRZ is <strong>1.0824–1.0832</strong>.",
            "Price spikes to <strong>1.0829</strong> and prints a bearish rejection wick — confirmation at D. Entry <strong>1.0824</strong>.",
            "Stop just beyond D at <strong>1.0844</strong> = <strong>20 pips</strong>. Risk 1% of €1,000 = €10, size ≈ <strong>0.050 lots</strong> (~€0.50/pip).",
            "Target C at <strong>1.0730</strong> (~94 pips, ~4.7:1) and A at <strong>1.0700</strong>. The tight stop past D gives strong geometry — but you are fading a new high, so a close above 1.0844 means the move kept extending and you take the small loss.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common Butterfly mistakes",
          items: [
            "<strong>Confusing it with a Gartley.</strong> The Butterfly needs B at 78.6% and D beyond X. If D stays inside XA, it is not a Butterfly — check the ratios before labelling.",
            "<strong>Putting the stop beyond X.</strong> There is no X on the far side of D here. The stop goes just past the 161.8% extension, or your risk balloons.",
            "<strong>Fading with no rejection.</strong> You are shorting a fresh high — the riskiest entry there is. No rejection candle, no trade.",
            "<strong>Ignoring strong momentum through D.</strong> If price closes cleanly beyond the extension, the move is not exhausted. Do not add against it.",
            "<strong>Over-sizing on the great R:R.</strong> The tight stop tempts bigger bets, but extended reversals fail often. Keep fixed 1% risk.",
          ],
        },
        {
          kind: "key",
          text: "The Butterfly reverses beyond X at the 127.2%–161.8% extension of XA — enter at D on rejection, stop just past the extension.",
        },
      ],
    },

    /* ============================================================ */
    /* 12. Bat Pattern                                              */
    /* ============================================================ */
    {
      slug: "bat-pattern",
      title: "Bat Pattern",
      summary:
        "The Bat — a precise retracement harmonic completing at 88.6% of XA with a tight, favourable stop.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to identify a Bat by its 88.6% D-point and understand its tight-stop advantage.",
      blocks: [
        {
          kind: "text",
          html: "<strong>What it is:</strong> The Bat is a <strong>deep retracement pattern</strong> that, like the Gartley, completes inside the XA move — but even deeper, at the <strong>88.6% level</strong>. Its appeal is a very tight stop: because D sits so close to X, the invalidation point is only a short distance away, giving excellent reward-to-risk.",
        },
        {
          kind: "image",
          src: "/learn/fibonacci/12-bat.png",
          alt: "The Bat harmonic pattern",
          caption:
            "A Bat: a shallow 38.2%–50% B-point and a deep 88.6% D-point of XA.",
        },
        {
          kind: "heading",
          text: "Defining ratios",
        },
        {
          kind: "list",
          items: [
            "B retraces 38.2% to 50% of the XA leg — shallower than a Gartley.",
            "BC retraces 38.2% to 88.6% of AB.",
            "CD extends 161.8% to 261.8% of BC.",
            "D completes at 88.6% of XA — a deep but contained retracement.",
          ],
        },
        {
          kind: "text",
          html: "The Bat is distinguished from the Gartley by its <strong>shallower B-point</strong> (38.2%–50% rather than 61.8%) and its deeper <strong>88.6% D-point</strong>. That deep completion so near to X is exactly what enables the pattern's characteristically tight stop.",
        },
        {
          kind: "heading",
          text: "Trading the Bat",
        },
        {
          kind: "text",
          html: "<strong>How to use it:</strong> enter at D in the trend's direction once the 88.6% level reacts, and place the <strong>stop just beyond X</strong>. Because X is close, the risk is small relative to the target back toward A, which is why the Bat is prized for its geometry. As always, wait for <strong>confirmation</strong> — a deep pullback that keeps going becomes a failed pattern.",
        },
        {
          kind: "text",
          html: "<strong>Why the geometry is so good:</strong> D at 88.6% sits a hair inside X, so the distance from entry to the invalidation is tiny while the distance back to A is large. That naturally produces a <strong>high reward-to-risk</strong> — often 3:1 or 4:1. The flip side: 88.6% is so deep that the trend is under real strain, so the pattern fails more than its clean geometry suggests. The tight stop and confirmation are what make the maths work over many trades.",
        },
        {
          kind: "example",
          title: "Bullish Bat long on GBP/USD (€1,000)",
          steps: [
            "GBP/USD prints a bullish Bat: <strong>X = 1.2600</strong>, <strong>A = 1.2800</strong> (XA = 200 pips), <strong>B = 1.2700</strong> (50% of XA — shallow), <strong>C = 1.2760</strong>.",
            "D completes at <strong>88.6% of XA = 1.2623</strong> — deep, but still inside X. The PRZ is <strong>1.2620–1.2628</strong>.",
            "Price dips to <strong>1.2624</strong> and prints a bullish engulfing — confirmation at D. Entry <strong>1.2628</strong>.",
            "Stop just beyond X at <strong>1.2590</strong> = <strong>38 pips</strong>. Risk 1% of €1,000 = €10, size ≈ <strong>0.026 lots</strong> (~€0.26/pip).",
            "Target C at <strong>1.2760</strong> (~132 pips, ~3.5:1) taking half, then A at <strong>1.2800</strong>. The tight 38-pip stop next to X is the Bat's whole edge — a close below 1.2590 voids it.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common Bat mistakes",
          items: [
            "<strong>Confusing it with a Gartley.</strong> The Bat needs a shallow B (38.2%–50%) and a deep 88.6% D. A 61.8% B is a Gartley — different D, different plan.",
            "<strong>Widening the stop past X.</strong> The entire advantage is the tiny X-to-D gap. Widen the stop and you throw away the reward-to-risk you came for.",
            "<strong>Trusting the deep entry without confirmation.</strong> 88.6% is nearly a full reversal. If the trend is dying, price sails through — wait for the reaction candle.",
            "<strong>Chasing a late fill.</strong> Enter near 88.6%, not after price has already bounced 30 pips. A late entry ruins the geometry.",
            "<strong>Over-leveraging on the R:R.</strong> Great geometry tempts oversizing, but deep patterns fail often. Fixed 1% risk, always.",
          ],
        },
        {
          kind: "key",
          text: "The Bat completes at 88.6% of XA with a shallow B-point — its closeness to X allows a tight stop and strong reward-to-risk.",
        },
      ],
    },

    /* ============================================================ */
    /* 13. Crab Pattern                                             */
    /* ============================================================ */
    {
      slug: "crab-pattern",
      title: "Crab Pattern",
      summary:
        "The Crab — the most extreme harmonic, projecting D to 161.8% of XA for reversals at stretched extremes.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to recognise a Crab by its extreme 161.8% D-point projection.",
      blocks: [
        {
          kind: "text",
          html: "<strong>What it is:</strong> The Crab is the most <strong>extreme harmonic pattern</strong>, projecting its completion point far beyond X to the <strong>161.8% extension</strong> of XA. It is designed to catch sharp reversals at deeply stretched extremes, where a move has run much further than usual and momentum is exhausted.",
        },
        {
          kind: "image",
          src: "/learn/fibonacci/13-crab.png",
          alt: "The Crab harmonic pattern",
          caption:
            "A Crab: D projects all the way to the 161.8% extension of XA.",
        },
        {
          kind: "heading",
          text: "Defining ratios",
        },
        {
          kind: "list",
          items: [
            "B retraces 38.2% to 61.8% of the XA leg.",
            "BC retraces 38.2% to 88.6% of AB.",
            "CD extends 261.8% to 361.8% of BC — a very long final leg.",
            "D projects to 161.8% of XA — the pattern's signature.",
          ],
        },
        {
          kind: "text",
          html: "The Crab's hallmark is that long, sharp <strong>CD leg</strong> that drives D out to the 161.8% extension. Because the reversal is caught at such an extreme, the pattern can offer huge targets, but the extended move also means false completions are common.",
        },
        {
          kind: "heading",
          text: "Trading the Crab",
        },
        {
          kind: "text",
          html: "<strong>How to use it:</strong> enter at D as the 161.8% zone shows rejection, with a <strong>stop just beyond D</strong> since it is already an extreme. The Crab can produce the <strong>best reward-to-risk</strong> of the harmonics because the stop is tight relative to the reversal target — but only if you wait for real confirmation and accept that fighting a strong move is risky by nature.",
        },
        {
          kind: "text",
          html: "<strong>Why it's the riskiest:</strong> the Crab fades the <strong>most stretched extreme</strong> of the whole family — price has blown past X to 161.8% and you are betting it snaps back. When it works, the tiny stop past D and the huge move back give spectacular R:R. When it fails, the market was simply trending hard and you were standing in front of it. This is the pattern where confirmation and a firm stop matter most; without them it is just picking a top or bottom in a runaway move.",
        },
        {
          kind: "example",
          title: "Bearish Crab short on EUR/USD (€1,000)",
          steps: [
            "EUR/USD prints a bearish Crab: <strong>X = 1.0700</strong>, <strong>A = 1.0600</strong> (XA = 100 pips), <strong>B = 1.0638</strong> (61.8% of XA), <strong>C = 1.0660</strong>.",
            "D projects to <strong>161.8% of XA = 1.0762</strong> — far beyond X, a deeply stretched high. The PRZ is <strong>1.0758–1.0766</strong>.",
            "Price spikes to <strong>1.0763</strong> and prints a bearish pin bar — confirmation at the extreme. Entry <strong>1.0758</strong>.",
            "Stop just beyond D at <strong>1.0778</strong> = <strong>20 pips</strong>. Risk 1% of €1,000 = €10, size ≈ <strong>0.050 lots</strong> (~€0.50/pip).",
            "Target C at <strong>1.0660</strong> (~98 pips, ~4.9:1) and A at <strong>1.0600</strong>. Superb geometry — but you are fading a runaway high, so a close above 1.0778 means the trend won and you take the small loss immediately.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common Crab mistakes",
          items: [
            "<strong>Picking the top with no rejection.</strong> Fading a 161.8% extreme with no confirming candle is just guessing where a strong move ends. Wait for the rejection.",
            "<strong>Treating the R:R as free money.</strong> The tight stop looks amazing, but the Crab has the highest failure rate of the family. Great potential R:R ≠ high win rate.",
            "<strong>Averaging down when D is exceeded.</strong> If price closes beyond the stop, the move is still trending. Adding against it turns a small loss into a large one.",
            "<strong>Confusing it with a Butterfly.</strong> The Crab projects D to 161.8% of XA (further than the Butterfly's 127.2%) with a different CD extension. Check ratios before labelling.",
            "<strong>Over-sizing on the geometry.</strong> The temptation to bet big on 5:1 is exactly how extreme-reversal traders blow up. Keep fixed 1% risk.",
          ],
        },
        {
          kind: "key",
          text: "The Crab projects D to 161.8% of XA — an extreme reversal trade with excellent reward-to-risk but a high need for confirmation.",
        },
      ],
    },

    /* ============================================================ */
    /* 14. Shark Pattern                                            */
    /* ============================================================ */
    {
      slug: "shark-pattern",
      title: "Shark Pattern",
      summary:
        "The Shark — a newer five-point harmonic using 0-X-A-B-C labelling and an 88.6%–113% completion zone.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to describe the Shark pattern's distinctive labelling and completion ratios.",
      blocks: [
        {
          kind: "text",
          html: "<strong>What it is:</strong> The Shark is a <strong>newer harmonic pattern</strong> with its own distinctive labelling. Instead of XABCD, it is mapped as <strong>0-X-A-B-C</strong>, and it completes at point C. It often precedes deeper harmonic structures and is known for aggressive, fast reversals after a liquidity grab.",
        },
        {
          kind: "image",
          src: "/learn/fibonacci/14-shark.png",
          alt: "The Shark harmonic pattern",
          caption:
            "A Shark: completion at C in the 88.6%–113% zone of the 0-X leg.",
        },
        {
          kind: "heading",
          text: "Defining ratios",
        },
        {
          kind: "list",
          items: [
            "AB extends 113% to 161.8% of the XA leg.",
            "BC extends 161.8% to 224% of AB.",
            "C completes in the 88.6% to 113% zone of the 0-X leg.",
            "The pattern uses 0-X-A-B-C rather than XABCD labelling.",
          ],
        },
        {
          kind: "text",
          html: "The Shark's completion zone around <strong>88.6%–113%</strong> means C can slightly overshoot the 0 point, sweeping liquidity before reversing. This makes it feel like a <strong>stop hunt</strong> followed by a snap-back, which is why confirmation right at C is essential.",
        },
        {
          kind: "heading",
          text: "Trading the Shark",
        },
        {
          kind: "text",
          html: "<strong>How to use it:</strong> enter at C as the completion zone reacts, with a <strong>stop just beyond C</strong>. Because the Shark often runs into a deeper pattern next, many traders take a quick target and stay nimble rather than holding for a large move. Treat it, like all harmonics, as <strong>subjective and probabilistic</strong> — never a certainty.",
        },
        {
          kind: "text",
          html: "<strong>Why the overshoot matters:</strong> the 88.6%–113% zone lets C poke just past the 0 point, tripping the stops resting beyond it. That <strong>liquidity sweep</strong> is often what fuels the snap-back — the very traders who got stopped provide the reversal's momentum. It also means the Shark is a quick, reactive trade: take profit promptly, because a Shark that keeps going frequently morphs into a deeper Crab or Bat against you.",
        },
        {
          kind: "example",
          title: "Bearish Shark short on GBP/USD (€1,000)",
          steps: [
            "GBP/USD prints a bearish Shark mapped 0-X-A-B-C, with the 0-X leg from <strong>0 = 1.2650</strong> to <strong>X = 1.2750</strong> (100 pips).",
            "The extension legs complete and C projects into the <strong>88.6%–113% zone of 0-X = 1.2739–1.2763</strong>. C tags <strong>1.2758</strong>, sweeping the highs above X — a liquidity grab.",
            "Price snaps back and prints a bearish engulfing at C — confirmation. Entry <strong>1.2752</strong>.",
            "Stop just beyond C at <strong>1.2772</strong> = <strong>20 pips</strong>. Risk 1% of €1,000 = €10, size ≈ <strong>0.050 lots</strong> (~€0.50/pip).",
            "Quick target back toward the B point / prior structure at <strong>1.2700</strong> (~52 pips, ~2.6:1) — you bank promptly because a Shark that keeps running often becomes a deeper pattern against you. A close above 1.2772 voids it.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common Shark mistakes",
          items: [
            "<strong>Using XABCD labelling.</strong> The Shark is 0-X-A-B-C and completes at C, not D. Mislabel it and your entry and stop land in the wrong place.",
            "<strong>Entering before the sweep reverses.</strong> C often overshoots the 0 point first. Buying/selling into the grab with no snap-back confirmation gets you run over.",
            "<strong>Holding for a big move.</strong> The Shark is a quick reversal that often rolls into a deeper pattern. Take profit promptly instead of overstaying.",
            "<strong>Treating the sweep as certain.</strong> Not every poke past 0 reverses — sometimes it is a genuine breakout. Wait for the reaction candle at C.",
            "<strong>Skipping the stop beyond C.</strong> The overshoot zone is noisy. Without a firm stop just past C, one more spike wipes the trade.",
          ],
        },
        {
          kind: "key",
          text: "The Shark completes at C in the 88.6%–113% zone using 0-X-A-B-C labelling — a fast reversal trade with a stop just beyond C.",
        },
      ],
    },

    /* ============================================================ */
    /* 15. Building a Fibonacci Setup                               */
    /* ============================================================ */
    {
      slug: "fibonacci-setup",
      title: "Building a Fibonacci Setup",
      summary:
        "Bring it all together into a repeatable, five-step Fibonacci setup with a written plan and strict risk control.",
      readingMinutes: 12,
      objective:
        "After this module you'll be able to combine everything into a repeatable Fibonacci checklist for planning trades.",
      blocks: [
        {
          kind: "text",
          html: "<strong>What it is:</strong> Everything in this course only pays off when it becomes a <strong>repeatable process</strong>. A good Fibonacci setup is not a single magic level — it is a checklist that stacks trend, confluence and confirmation, then defines the exact price where you are wrong before you ever click buy or sell.",
        },
        {
          kind: "image",
          src: "/learn/fibonacci/15-setup.png",
          alt: "A five-step Fibonacci setup checklist",
          caption:
            "A five-step routine turns Fibonacci from a guess into a repeatable plan.",
        },
        {
          kind: "heading",
          text: "The five-step routine",
        },
        {
          kind: "list",
          items: [
            "1. Read structure — is the market trending up, down or ranging?",
            "2. Draw the retracement from a clean swing in the trend direction.",
            "3. Find confluence — support, an order block or a second Fibonacci level.",
            "4. Wait for confirmation at the level before entering.",
            "5. Set the stop beyond the level and project targets with extensions.",
          ],
        },
        {
          kind: "text",
          html: "Notice how each step <strong>filters out weak trades</strong>. If structure is unclear, you skip it. If there is no confluence, you skip it. If confirmation never comes, you skip it. The best setups are the rare ones where every box is ticked, and discipline means being happy to <strong>do nothing</strong> the rest of the time.",
        },
        {
          kind: "heading",
          text: "Why the checklist beats a magic level",
        },
        {
          kind: "text",
          html: "<strong>Why it works:</strong> a single Fibonacci level in isolation is roughly a coin flip. The checklist stacks <strong>independent filters</strong> — trend, confluence, confirmation — so that by the time you enter, several things agree and the low-quality trades have already been thrown out. The edge is not in any one step; it is in the <strong>discipline to only take the rare setup</strong> where all of them line up, sized so no single loss hurts.",
        },
        {
          kind: "example",
          title: "Running the full five-step checklist — EUR/USD (€1,000)",
          steps: [
            "<strong>Step 1 — Structure:</strong> EUR/USD is in a clean 4-hour uptrend (higher highs, higher lows). You only look for longs.",
            "<strong>Step 2 — Retracement:</strong> draw from swing low <strong>1.0800</strong> to high <strong>1.0950</strong> (150 pips). Levels: 38.2% = 1.0893, 50% = 1.0875, <strong>61.8% = 1.0857</strong>.",
            "<strong>Step 3 — Confluence:</strong> a tested horizontal support sits at <strong>1.0855</strong> and a bullish order block at 1.0850–1.0858 — both hug the 61.8%. Three factors, one zone.",
            "<strong>Step 4 — Confirmation:</strong> price dips to 1.0856 and prints a bullish engulfing. Only now do you act. Entry <strong>1.0860</strong>.",
            "<strong>Step 5 — Risk & targets:</strong> stop below the zone at <strong>1.0835</strong> = <strong>25 pips</strong>. Risk 1% of €1,000 = €10, size ≈ <strong>0.040 lots</strong> (~€0.40/pip). Targets: 127.2% extension <strong>1.0991</strong> (~131 pips, ~5:1) scaling out, 161.8% <strong>1.1043</strong>. Every box ticked — a close below 1.0835 voids it.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes building a setup",
          items: [
            "<strong>Skipping steps when impatient.</strong> Taking a trade with structure but no confluence, or confluence but no confirmation, defeats the whole filter. All boxes or no trade.",
            "<strong>Forcing setups in a range.</strong> If step 1 says 'ranging', there is no trend to trade the pullback of. Do nothing until structure is clear.",
            "<strong>Moving the stop to avoid being wrong.</strong> The invalidation is set in step 5 for a reason. Widening it mid-trade turns a planned 1% loss into a real one.",
            "<strong>Risking more than 1% because 'this one is perfect'.</strong> Perfect-looking setups still fail. Fixed risk is what keeps a losing streak survivable.",
            "<strong>Expecting Fibonacci to win most trades.</strong> It will not. The edge is a positive expectancy across many trades with tight risk — not a high hit-rate on any one.",
          ],
        },
        {
          kind: "key",
          text: "A repeatable setup — structure, retracement, confluence, confirmation, defined risk — beats any single 'magic' Fibonacci level.",
        },
        {
          kind: "text",
          html: "Finally, keep expectations honest. Fibonacci and harmonics are <strong>probabilistic tools</strong>, not guarantees, and no method offers signals that always win or a shortcut to riches. Your survival comes from <strong>risk management</strong> — fixed risk per trade, a defined stop, and a written plan you actually follow.",
        },
      ],
    },
  ],
};
