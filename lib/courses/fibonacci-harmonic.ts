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
      readingMinutes: 5,
      objective:
        "After this module you'll be able to explain what Fibonacci ratios are and why traders apply them to price pullbacks.",
      blocks: [
        {
          kind: "text",
          html: "Fibonacci trading applies a set of ratios derived from a famous number sequence to the swings on a chart. The idea is that after a strong move, price rarely retraces in a random way — pullbacks often stall near <strong>predictable percentages</strong> of the prior move before the trend resumes. Traders use these levels to plan entries, stops and targets.",
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
          kind: "key",
          text: "Fibonacci levels mark where pullbacks tend to stall — a probabilistic guide, not a magic price that price must obey.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to draw a Fibonacci retracement from swing to swing and identify where a pullback may find support.",
      blocks: [
        {
          kind: "text",
          html: "A Fibonacci retracement measures how far price pulls <strong>back against a move</strong>. You anchor the tool to a clear swing and it divides that range into horizontal levels at 23.6%, 38.2%, 50%, 61.8% and 78.6%. Those levels become candidate areas where the pullback could end and the original trend resume.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to project Fibonacci extension targets and use them to plan where to take profit.",
      blocks: [
        {
          kind: "text",
          html: "If retracements tell you where a pullback might end, <strong>extensions</strong> tell you where the next leg might go. Extensions project levels <strong>beyond 100%</strong> of a move, giving objective targets for taking profit once the trend resumes. They turn a vague 'ride the trend' plan into specific price zones.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to spot confluence zones where a Fibonacci level overlaps with other technical evidence.",
      blocks: [
        {
          kind: "text",
          html: "A single Fibonacci level on its own is weak evidence. It becomes powerful when it <strong>overlaps with other factors</strong> — a support zone, a moving average, a trendline or a second Fibonacci reading. Where several tools point to the same price, we call it a <strong>confluence zone</strong>, and reactions there tend to be sharper.",
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
          kind: "text",
          html: "The more evidence that agrees at one price, the more seriously you treat it — but confluence <strong>improves odds, not certainty</strong>. Even a beautiful confluence zone can fail, so you still enter with a defined stop and only risk what you can afford to lose on the idea.",
        },
        {
          kind: "key",
          text: "One Fibonacci level is a guess; a level stacked with support, a trendline or a second reading is a confluence zone worth trading.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to use Fibonacci retracements to time trend-aligned entries on pullbacks.",
      blocks: [
        {
          kind: "text",
          html: "Fibonacci works best when it is used <strong>with the trend</strong>, not against it. In a healthy uptrend, each pullback into a Fibonacci level is a chance to join the move at a discount; in a downtrend, each bounce into a level is a chance to sell into strength. Trend direction decides which levels you care about.",
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
          kind: "text",
          html: "Shallow retracements to 23.6%–38.2% signal a <strong>strong trend</strong> that offers little discount but high momentum. Deeper pulls to 61.8%–78.6% give better prices but demand more caution, because the deeper the retrace, the greater the risk the trend is done. Match your entry style to how far price has pulled back.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to combine Fibonacci levels with horizontal support and resistance for stronger decision zones.",
      blocks: [
        {
          kind: "text",
          html: "Horizontal support and resistance are the bedrock of price action, and Fibonacci layers neatly on top of them. When a retracement level lands <strong>exactly on a prior level</strong> that price has respected before, you get two independent reasons to expect a reaction at the same spot.",
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
          html: "Mark your horizontal levels first from the higher timeframes, then draw the retracement. If a level such as 61.8% sits inside a known support zone, treat that as a <strong>primary decision area</strong>. Wait for a reaction — a rejection candle or a small structure shift — before entering, with a stop just beyond both the Fibonacci level and the horizontal zone.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to combine Fibonacci retracements with order blocks and other smart-money zones.",
      blocks: [
        {
          kind: "text",
          html: "Smart-money concepts (SMC) describe how large players leave footprints on the chart — <strong>order blocks</strong>, fair value gaps and liquidity pools. Fibonacci pairs naturally with SMC because both try to answer the same question: where is price likely to react on its way back into a trend?",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to define the OTE zone and understand its reward-to-risk logic within a trend.",
      blocks: [
        {
          kind: "text",
          html: "Optimal Trade Entry, or <strong>OTE</strong>, is a concept popularised by smart-money traders that focuses on entering trades in the <strong>deep retracement zone</strong>. Rather than buying a shallow dip, OTE waits for price to pull back into the 62%–79% area, where the reward-to-risk on a trend continuation is at its best.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to describe the XABCD structure and how Fibonacci ratios define a harmonic pattern.",
      blocks: [
        {
          kind: "text",
          html: "Harmonic patterns are geometric price structures whose legs conform to specific <strong>Fibonacci ratios</strong>. Instead of eyeballing a shape, harmonic traders measure each leg and only trade the pattern when its proportions fall within tight tolerances. The reward is a precise <strong>reversal zone</strong> with clearly defined risk.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to recognise a Gartley by its ratios and understand its D-point entry logic.",
      blocks: [
        {
          kind: "text",
          html: "The Gartley is the <strong>original harmonic pattern</strong>, and its D-point sits inside the prior XA move, making it the most conservative of the family. It looks like a stretched 'M' or 'W' and represents a deep pullback that completes just before the trend is expected to resume.",
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
          html: "Enter at <strong>point D</strong> in the direction of the original trend — long on a bullish Gartley, short on a bearish one — after a reaction confirms the level. Place the <strong>stop just beyond X</strong>; if price runs past X, the pattern is void. Targets are typically the C point and then the A point, often taken in stages.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to distinguish a Butterfly from a Gartley by its extended D-point beyond X.",
      blocks: [
        {
          kind: "text",
          html: "The Butterfly is an <strong>extension pattern</strong>: unlike the Gartley, its completion point D pushes <strong>beyond X</strong>, projecting to a new extreme. It aims to catch reversals at the exhausted end of a move rather than inside a pullback, which makes it more aggressive.",
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
          html: "Enter at D as price reaches the extension zone and shows rejection, expecting a reversal. Because D is already an extreme, the <strong>stop sits just beyond D</strong> — a short distance past the 161.8% projection — since there is no X to hide behind on the far side. Confirmation matters even more here, as catching an extended reversal is inherently harder.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to identify a Bat by its 88.6% D-point and understand its tight-stop advantage.",
      blocks: [
        {
          kind: "text",
          html: "The Bat is a <strong>deep retracement pattern</strong> that, like the Gartley, completes inside the XA move — but even deeper, at the <strong>88.6% level</strong>. Its appeal is a very tight stop: because D sits so close to X, the invalidation point is only a short distance away, giving excellent reward-to-risk.",
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
          html: "Enter at D in the trend's direction once the 88.6% level reacts, and place the <strong>stop just beyond X</strong>. Because X is close, the risk is small relative to the target back toward A, which is why the Bat is prized for its geometry. As always, wait for <strong>confirmation</strong> — a deep pullback that keeps going becomes a failed pattern.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to recognise a Crab by its extreme 161.8% D-point projection.",
      blocks: [
        {
          kind: "text",
          html: "The Crab is the most <strong>extreme harmonic pattern</strong>, projecting its completion point far beyond X to the <strong>161.8% extension</strong> of XA. It is designed to catch sharp reversals at deeply stretched extremes, where a move has run much further than usual and momentum is exhausted.",
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
          html: "Enter at D as the 161.8% zone shows rejection, with a <strong>stop just beyond D</strong> since it is already an extreme. The Crab can produce the <strong>best reward-to-risk</strong> of the harmonics because the stop is tight relative to the reversal target — but only if you wait for real confirmation and accept that fighting a strong move is risky by nature.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to describe the Shark pattern's distinctive labelling and completion ratios.",
      blocks: [
        {
          kind: "text",
          html: "The Shark is a <strong>newer harmonic pattern</strong> with its own distinctive labelling. Instead of XABCD, it is mapped as <strong>0-X-A-B-C</strong>, and it completes at point C. It often precedes deeper harmonic structures and is known for aggressive, fast reversals after a liquidity grab.",
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
          html: "Enter at C as the completion zone reacts, with a <strong>stop just beyond C</strong>. Because the Shark often runs into a deeper pattern next, many traders take a quick target and stay nimble rather than holding for a large move. Treat it, like all harmonics, as <strong>subjective and probabilistic</strong> — never a certainty.",
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
      readingMinutes: 6,
      objective:
        "After this module you'll be able to combine everything into a repeatable Fibonacci checklist for planning trades.",
      blocks: [
        {
          kind: "text",
          html: "Everything in this course only pays off when it becomes a <strong>repeatable process</strong>. A good Fibonacci setup is not a single magic level — it is a checklist that stacks trend, confluence and confirmation, then defines the exact price where you are wrong before you ever click buy or sell.",
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
          kind: "text",
          html: "Finally, keep expectations honest. Fibonacci and harmonics are <strong>probabilistic tools</strong>, not guarantees, and no method offers signals that always win or a shortcut to riches. Your survival comes from <strong>risk management</strong> — fixed risk per trade, a defined stop, and a written plan you actually follow.",
        },
        {
          kind: "key",
          text: "A repeatable setup — structure, retracement, confluence, confirmation, defined risk — beats any single 'magic' Fibonacci level.",
        },
      ],
    },
  ],
};
