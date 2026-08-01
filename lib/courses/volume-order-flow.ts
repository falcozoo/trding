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
      readingMinutes: 10,
      objective:
        "After this module you'll be able to explain what volume represents and read a volume panel to judge the conviction behind a price move.",
      blocks: [
        {
          kind: "text",
          html: "Volume is the amount of activity behind a price move — how many contracts, shares or ticks changed hands during a period. Price answers <strong>where</strong> the market went; volume answers <strong>how much conviction</strong> stood behind it. The same 30-pip move can mean two completely different things: on heavy volume it means a crowd agreed and pushed together, while on thin volume it can be a handful of orders drifting through an empty book. Volume is the second dimension that turns a price chart from a line into a story about participation.",
        },
        {
          kind: "text",
          html: "The panel sits beneath the candles, and each volume bar lines up with exactly one candle — it measures the <strong>effort spent</strong> producing that single period. The habit to build is reading them as a pair: never look at a candle without glancing at the bar under it. Rising price on <strong>expanding volume</strong> suggests genuine participation and fresh money; rising price on shrinking volume hints the move is coasting on momentum and running low on fuel.",
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
          html: "Every transaction needs a buyer and a seller in equal measure, so volume itself is <strong>directionally neutral</strong> — it counts activity, never direction. Its whole value is as a measure of interest. A breakout backed by a surge in volume shows many participants agreeing with the new price and committing capital to it; a quiet breakout can be a few resting orders that fade the moment the pressure lifts. This is why volume is treated as confirmation rather than a signal: it tells you whether to trust what price is doing.",
        },
        {
          kind: "text",
          html: "The single most useful skill is judging volume <strong>relative to recent bars</strong>, not against some absolute number. A 50,000-contract bar means nothing on its own — but 50,000 when the last ten bars averaged 20,000 is a spike worth respecting. Train your eye to see each bar as tall, average, or thin compared with its neighbours, because that relative reading is what turns raw volume into information.",
        },
        {
          kind: "list",
          items: [
            "<strong>Volume measures effort</strong> or participation, not direction on its own.",
            "<strong>Read each bar against</strong> the candle directly above it — never in isolation.",
            "<strong>Expanding volume confirms</strong> interest; contracting volume warns of fading interest.",
            "<strong>Judge bars relatively</strong> — tall or thin versus recent bars, not absolute counts.",
            "Volume is <strong>context for price</strong> — it rarely gives a tradable signal by itself.",
          ],
        },
        {
          kind: "example",
          title: "Reading conviction into a breakout with volume",
          steps: [
            "On the 1-hour DAX chart, price has ranged between <strong>18,000</strong> and <strong>18,120</strong> for hours, and the volume bars under the range average about <strong>4,000 contracts</strong>.",
            "A candle closes above 18,120 and its volume bar prints <strong>11,000 contracts</strong> — nearly three times the range average. That surge is your read that the break has real participation behind it, not a lone order.",
            "You enter long at <strong>18,130</strong> on the close of the breakout candle, treating the expanding volume as confirmation rather than the trigger by itself.",
            "Your stop goes back inside the range at <strong>18,085</strong> — a return there means the break failed. Risk = <strong>45 points</strong>.",
            "Account is <strong>€5,000</strong> and you risk <strong>1%</strong> = €50. With DAX at €1 per point per micro-contract and a 45-point stop, you size about <strong>1 micro-contract</strong> so a full stop costs ~€45.",
            "You target the prior swing high near <strong>18,260</strong>, ~130 points away — roughly <strong>2.9:1 reward-to-risk</strong>. Every number is fixed before you click.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes reading volume for the first time",
          items: [
            "<strong>Reading volume as directional.</strong> A tall bar does not mean 'buyers' — it means activity. The candle's colour and close tell you who won; the bar only tells you how hard they fought.",
            "<strong>Chasing absolute numbers.</strong> 'High volume' means high versus recent bars. Comparing today's raw count to a number in a book or another instrument tells you nothing.",
            "<strong>Ignoring the bar under the candle.</strong> A beautiful breakout candle on below-average volume is a warning, not a green light. Always pair the two.",
            "<strong>Trading volume as a standalone signal.</strong> Volume confirms or questions a price event — it never generates one on its own. Wait for the price setup first, then check the bar.",
            "<strong>Forgetting the stop because the spike looked convincing.</strong> Heavy volume raises the odds; it removes none of the risk. The setup can still fail on the next bar.",
          ],
        },
        {
          kind: "key",
          text: "Volume is the conviction behind price — it tells you how much the market cared about a move, not which way it will go next.",
        },
        {
          kind: "text",
          html: "Throughout this course we build from raw volume to profiles, VWAP and order-flow tools like delta. No single volume tool wins every time, so treat everything here as <strong>context, not certainty</strong>, and keep risk management central to every decision — the spike that looks obvious in hindsight was just a probability in real time.",
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
      readingMinutes: 10,
      objective:
        "After this module you'll be able to explain what tick volume is, why it differs from true exchange volume, and how to use it with appropriate caution.",
      blocks: [
        {
          kind: "text",
          html: "On centralised exchanges — stocks, futures — volume is a real count of shares or contracts traded and reported to everyone through the same tape. In CFDs and spot forex there is <strong>no central exchange</strong>: trades happen bilaterally between you and a broker or across a fragmented network of banks. No single authority sees every trade, so your broker cannot show true market-wide volume. What appears on your panel is almost always <strong>tick volume</strong> instead, and understanding that difference keeps you honest about what you are actually reading.",
        },
        {
          kind: "text",
          html: "Tick volume is simply a <strong>count of price changes</strong> — how many times the quoted price updated during a period, not how much money changed hands. If the price ticked 400 times in an hour, the tick volume for that hour is roughly 400, whether each tick moved one lot or one thousand. It is a proxy for activity, never a true traded quantity, and the gap between 'number of updates' and 'size traded' is exactly where the tool can mislead you.",
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
          html: "Tick volume tends to <strong>correlate with real activity</strong> in liquid markets, because busy periods genuinely produce more price changes — studies on major forex pairs during active sessions show a reasonably strong relationship. But it is only a proxy: a market can tick rapidly on tiny orders, a quiet market can move in large clips with few ticks, and two brokers can report different tick counts for the same instrument because they draw from different liquidity feeds.",
        },
        {
          kind: "text",
          html: "The practical consequence is that you should read CFD volume as <strong>relative and shape-based</strong>, never as an exact figure. A tick-volume spike three times the recent average still means 'unusually busy', which is genuinely useful. But comparing your EUR/USD tick count to a friend's on another broker, or treating the number as literal contracts, is reading precision into a tool that does not have it.",
        },
        {
          kind: "list",
          items: [
            "<strong>Tick volume counts</strong> price updates, not contracts or lots traded.",
            "<strong>It usually rises</strong> and falls with genuine participation in liquid markets.",
            "<strong>Different brokers</strong> can show different tick volume for the same asset.",
            "<strong>Read it relatively</strong> — a spike versus recent bars, never as exact size.",
            "Be <strong>more sceptical</strong> than a futures or stock trader who sees true volume.",
          ],
        },
        {
          kind: "example",
          title: "Using tick volume honestly on a forex breakout",
          steps: [
            "On the 15-minute GBP/USD chart, tick-volume bars during the quiet Asian session average around <strong>120 ticks</strong> per bar.",
            "At the London open, price breaks a level at <strong>1.2650</strong> and the breakout bar prints <strong>410 ticks</strong> — over three times the recent average, so you treat the break as backed by real session activity.",
            "You do not read '410' as any traded size — only as 'much busier than the last hour'. You enter long at <strong>1.2655</strong> on the breakout close.",
            "Stop goes back below the level at <strong>1.2632</strong>; a return there invalidates the break. Risk = <strong>23 pips</strong>.",
            "Account <strong>£3,000</strong>, risking <strong>1%</strong> = £30. On a 23-pip stop that sizes to about <strong>0.13 lots</strong> (≈£1.30 per pip) so a full stop costs ~£30.",
            "Target the next resistance near <strong>1.2720</strong>, ~65 pips away — about <strong>2.8:1</strong>. The tick spike raised your confidence; the stop still defines the risk.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with CFD and forex volume",
          items: [
            "<strong>Treating tick volume as traded size.</strong> It counts updates, not lots. A high tick count on a fast, thin market can overstate genuine participation.",
            "<strong>Comparing volume across brokers.</strong> Two feeds produce two different counts for the same pair. Only compare a bar to other bars on the same chart and broker.",
            "<strong>Trusting absolute numbers.</strong> There is no 'right' tick volume figure. Everything is relative to the recent bars in front of you.",
            "<strong>Applying stock-market volume rules blindly.</strong> Techniques built on true exchange volume need extra scepticism on CFDs, where the data is a proxy.",
            "<strong>Ignoring session context.</strong> Tick volume naturally swells at session opens and news. Judge a spike against the same time of day, not a dead overnight bar.",
          ],
        },
        {
          kind: "key",
          text: "CFD and forex volume is usually tick volume — a count of price changes, not real traded size — so treat it as a useful proxy with real limits.",
        },
        {
          kind: "text",
          html: "The honest takeaway: you can still apply every volume concept in this course to CFDs, but read them as <strong>relative and approximate</strong>. Compare each bar to recent ones, respect that the tool is a proxy, and let that scepticism keep your position sizing conservative when the data itself is uncertain.",
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
      readingMinutes: 10,
      objective:
        "After this module you'll be able to read a volume profile and identify the price levels where the market was most and least active.",
      blocks: [
        {
          kind: "text",
          html: "A volume profile turns the volume question on its side. A normal volume panel shows volume <strong>per period of time</strong> — one bar per candle. A profile instead shows volume <strong>per price level</strong>: a horizontal histogram drawn beside the chart, with longer bars at the prices where more activity took place. Rotating the axis from time to price is a small change with a big payoff, because most decisions traders care about are about <strong>prices</strong>, not clock time.",
        },
        {
          kind: "text",
          html: "This answers a different question. A time-based panel tells you \"when was the market busy?\"; a profile tells you \"<strong>where did the market trade most?</strong>\" Prices with long profile bars are areas of agreement where buyers and sellers were both comfortable transacting; prices with short bars are areas the market passed through quickly because few wanted to deal there. That single shift lets you see structure a candle chart hides.",
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
          html: "The overall shape tells a story before you look at any single level. A profile with one fat bulge in the middle shows a <strong>balanced, accepted</strong> price area — the market found value and rotated around it. A profile with several separate bulges shows the market found value at <strong>more than one place</strong>, often meaning a trend that paused, moved, and paused again. The peaks and valleys of the profile become the specific levels — POC, value area, HVN and LVN — studied in the next modules.",
        },
        {
          kind: "text",
          html: "The profile you build depends entirely on the <strong>range you select</strong>. A single-session profile answers intraday questions about today's fair value; a profile drawn over an entire trend answers where <strong>long-term value</strong> sits. Match the range to the timeframe you actually trade, and be aware that the same chart produces very different profiles depending on where you start and end the calculation.",
        },
        {
          kind: "list",
          items: [
            "<strong>The profile plots</strong> volume by price, not by time.",
            "<strong>Long bars mark</strong> prices the market accepted and traded around.",
            "<strong>Short bars mark</strong> prices the market rejected or passed through fast.",
            "<strong>Shape matters</strong> — one bulge is balance, several bulges is multi-distribution.",
            "<strong>Choose the range</strong> carefully — session, day, week or a whole swing.",
          ],
        },
        {
          kind: "example",
          title: "Building and reading a session profile",
          steps: [
            "On the 5-minute S&P 500 futures chart you select the whole cash session and draw a <strong>volume profile</strong> over it.",
            "The histogram shows one dominant bulge centred near <strong>5,320</strong>, where the longest bars cluster — the market's most-traded zone for the day.",
            "Above and below, the bars shrink quickly, telling you the session accepted price mainly in a tight band from <strong>5,308</strong> to <strong>5,332</strong>.",
            "You note the fat middle as your reference for tomorrow: if price opens back inside it, expect rotation; if it opens outside and holds, the market may be seeking new value.",
            "You do not trade the profile blindly — you use it to plan. A long only makes sense if price returns to the lower edge near <strong>5,308</strong> and buyers actually show up there.",
            "This read is context: it tells you where the crowd agreed today, which frames every decision the next modules build into a trade.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes reading a volume profile",
          items: [
            "<strong>Using the wrong range.</strong> A profile over a random window produces meaningless levels. Anchor it to a session, a day, or a complete swing you actually care about.",
            "<strong>Confusing the profile with a signal.</strong> A long bar shows where trading happened, not which way price goes next. It is a map, not an arrow.",
            "<strong>Reading absolute lengths.</strong> What matters is which bars are long relative to the rest of the profile, not the raw numbers behind them.",
            "<strong>Ignoring the shape.</strong> A double-bulge profile means something very different from a single fat bulge. Read the whole silhouette before zooming into levels.",
            "<strong>Forgetting the data caveat on CFDs.</strong> A profile built on tick volume is an approximation. Treat the levels as zones, not exact prices.",
          ],
        },
        {
          kind: "key",
          text: "A volume profile maps where the market traded most — turning volume from a timeline into a map of accepted and rejected prices.",
        },
        {
          kind: "text",
          html: "Everything that follows — point of control, value area, high and low volume nodes — is just a way of <strong>naming the features</strong> of this profile. Learn to read the shape first, and the specific levels become obvious rather than arbitrary.",
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
      readingMinutes: 10,
      objective:
        "After this module you'll be able to locate the point of control on a volume profile and use it as a reference for entries and stops.",
      blocks: [
        {
          kind: "text",
          html: "The point of control, or <strong>POC</strong>, is the single price level with the highest traded volume in a profile — the longest bar on the histogram. It marks the price at which buyers and sellers were <strong>most in agreement</strong>, the fairest price over the range you selected. Of every level a profile produces, the POC is the one to find first, because more business was transacted there than anywhere else.",
        },
        {
          kind: "text",
          html: "Because so much business was done at that price, the POC often behaves like a <strong>magnet</strong>: price that drifts away can be drawn back to it, and price that reaches it can pause, because it is a level nearly everyone recognises as fair value. This pulling behaviour is why intraday traders watch the prior day's POC so closely — it is a shared reference the whole market can see.",
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
          html: "Traders use the POC as a <strong>reference level</strong>, much like a support or resistance line, but with the added meaning that it is where the most trading occurred. In a range, price rejecting the POC from below can offer a short back toward the value edges; accepting above it can favour longs. The key question is always which side of that level price is trading, because that tells you whether the crowd currently sees fair value above or below.",
        },
        {
          kind: "text",
          html: "For entries, a common approach is to act as price <strong>tests the POC</strong> and place a stop just beyond it, since a decisive move through the fairest price means your read on control was wrong. The prior day's POC (often written as pd-POC) that price revisits the next session is a particularly watched level, because it combines volume significance with a fresh, un-traded reaction.",
        },
        {
          kind: "list",
          items: [
            "<strong>POC = the price</strong> with the most volume in the profile.",
            "<strong>It acts as a magnet</strong> and a fair-value reference, not a guaranteed turn.",
            "<strong>Watch acceptance</strong> above versus rejection below to read the current bias.",
            "<strong>Place stops beyond</strong> the POC when you trade a reaction at it.",
            "<strong>The prior day's POC</strong> is one of the most-watched revisit levels.",
          ],
        },
        {
          kind: "example",
          title: "Fading a POC rejection back toward the value edge",
          steps: [
            "On the 30-minute crude oil chart, yesterday's profile placed the <strong>POC at 78.40</strong>. Today price rallies back up into it from below.",
            "You do not short the touch. You wait: price stalls at <strong>78.40</strong> and prints a bearish rejection candle with a long upper wick — sellers defending the fair-value level.",
            "You enter short at <strong>78.30</strong> on the close of that rejection candle, reading the POC as resistance because price failed to accept above it.",
            "Your stop goes just beyond the POC at <strong>78.62</strong> — a decisive move above the fairest price means your read was wrong. Risk = <strong>32 cents</strong>.",
            "Account <strong>$8,000</strong>, risking <strong>1%</strong> = $80. On crude at $10 per 0.01 per contract... you size 1 micro-contract ($1 per 0.01), so 32 ticks ≈ $32 — comfortably within budget.",
            "You target the value-area low near <strong>77.60</strong>, ~80 cents away — about <strong>2.5:1</strong>. Entry 78.30, stop 78.62, defined before the click.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes trading the point of control",
          items: [
            "<strong>Treating the POC as a guaranteed turn.</strong> It is a magnet and reference, not a wall. Price accepts through it regularly — wait for a reaction before fading.",
            "<strong>Entering on the touch with no confirmation.</strong> A test of the POC is a decision point, not a signal. Let price show rejection or acceptance first.",
            "<strong>Placing the stop at the POC itself.</strong> Normal noise will clip a stop sitting on the level. Put it clearly beyond the fair-value price.",
            "<strong>Using a stale profile.</strong> A POC from an irrelevant range is just a line. Anchor it to the session or swing that actually matters now.",
            "<strong>Ignoring which side price is on.</strong> The same POC is support when price is above and resistance when below. Read acceptance versus rejection, not the line alone.",
          ],
        },
        {
          kind: "key",
          text: "The point of control is the market's fairest price over your range — a magnet and reference level, but never a certainty on its own.",
        },
        {
          kind: "text",
          html: "The POC is most powerful when it lines up with other evidence — structure, a VWAP, or a value-area edge. Alone it is a <strong>magnet, not a signal</strong>; in confluence with a price-action reaction it becomes a level worth risking a defined stop on.",
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
      readingMinutes: 10,
      objective:
        "After this module you'll be able to identify the value area high and low and use them as boundaries between fair value and extremes.",
      blocks: [
        {
          kind: "text",
          html: "The value area is the band of prices where the bulk of trading happened — by convention, about <strong>70 percent of the volume</strong> in the profile, centred on the POC. Its upper edge is the <strong>value area high (VAH)</strong> and its lower edge the value area low (VAL). Where the POC is a single price, the value area is a whole zone, and that zone is where the market genuinely agreed price was fair.",
        },
        {
          kind: "text",
          html: "Inside the value area, price was <strong>accepted as fair</strong> — the market spent most of its time and traded most of its volume there. Outside it, price was comparatively rejected, visited briefly before returning. That makes VAH and VAL natural <strong>boundaries between value and extreme</strong>, and much of intraday trading is really about whether price stays inside value or breaks out to seek new value.",
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
          html: "In a balanced market, price often <strong>rotates within the value area</strong>: a push to the VAH that fails can rotate back toward the POC or VAL, and vice versa. Fading the edges back toward the middle is a classic range approach, with a stop just outside the value area — because if price accepts beyond the edge, the range read is wrong and you want out cheaply.",
        },
        {
          kind: "text",
          html: "The edges also matter for breakouts. Price that leaves the value area and <strong>accepts beyond it</strong> — trading and holding there rather than snapping back — signals the market is seeking new value, and traders may follow that direction instead of fading it. The single most useful judgement at an edge is <strong>acceptance versus rejection</strong>: does price hold outside, or does it come straight back in?",
        },
        {
          kind: "list",
          items: [
            "<strong>Value area = roughly</strong> 70% of volume around the POC.",
            "<strong>VAH and VAL mark</strong> the transition from fair value to extreme.",
            "<strong>In balance, price</strong> tends to rotate between the edges and the POC.",
            "<strong>Acceptance beyond an edge</strong> hints the market is moving to new value.",
            "<strong>Read the edge</strong> as accept-or-reject, not a fixed line.",
          ],
        },
        {
          kind: "example",
          title: "Fading the value area high back to the POC",
          steps: [
            "On the 15-minute Nasdaq futures chart, today's developing profile gives <strong>VAL 18,200</strong>, <strong>POC 18,260</strong>, <strong>VAH 18,320</strong>.",
            "Price rotates up to the <strong>VAH at 18,320</strong> in a balanced, rangey session. You wait rather than short the touch.",
            "A bearish rejection candle prints right at the VAH — buyers can't accept above value. You enter short at <strong>18,312</strong>.",
            "Your stop goes just outside the value area at <strong>18,340</strong>; acceptance above VAH would mean the range is breaking. Risk = <strong>28 points</strong>.",
            "Account <strong>$10,000</strong>, risking <strong>1%</strong> = $100. On micro-Nasdaq at $2 per point, 28 points ≈ $56 per contract, so <strong>1 contract</strong> keeps risk under budget.",
            "You target the <strong>POC at 18,260</strong>, ~52 points away — about <strong>1.9:1</strong> — the natural rotation objective inside value. Entry 18,312, stop 18,340.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with the value area",
          items: [
            "<strong>Fading every edge blindly.</strong> Value-area edges only reliably reject in balanced conditions. In a trend, price blows through the VAH or VAL and keeps going.",
            "<strong>Ignoring acceptance.</strong> The whole edge trade hinges on whether price holds outside. If it accepts beyond VAH, stop fading and respect the breakout.",
            "<strong>Using a still-developing profile as if it were final.</strong> An intraday value area shifts as the session builds. Levels early in the day are provisional.",
            "<strong>Placing the stop inside the value area.</strong> A rotation trade needs its stop outside the edge, or normal noise takes you out before the idea plays.",
            "<strong>Forgetting the 70% is a convention.</strong> The exact percentage is a rule of thumb, not a law. Treat VAH and VAL as zones, not precise prices.",
          ],
        },
        {
          kind: "key",
          text: "The value area frames where price was fair; its high and low are the lines between rotation inside value and a move to find new value.",
        },
        {
          kind: "text",
          html: "Combined with the POC, the value area gives you a complete map of a session: a middle magnet and two edges. Read whether price is <strong>rotating or breaking</strong>, and let acceptance — not a single touch — decide which game you are playing.",
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
      readingMinutes: 10,
      objective:
        "After this module you'll be able to spot high volume nodes and use them as areas where price is likely to consolidate or find support and resistance.",
      blocks: [
        {
          kind: "text",
          html: "A high volume node, or <strong>HVN</strong>, is a local peak on the volume profile — a price level where an unusually large amount of trading occurred. Unlike the single POC, a profile can hold <strong>several HVNs</strong>, each marking a zone of strong agreement where buyers and sellers were both willing to transact heavily. They are the profile's thick, sticky bands.",
        },
        {
          kind: "text",
          html: "Because so much business was settled there, price tends to <strong>slow down and consolidate</strong> around an HVN. When price returns to one, it often stalls, chops sideways, or reverses, because the market again finds plenty of willing counterparties on both sides. An HVN is where momentum goes to die and ranges are born.",
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
          html: "HVNs act like thick <strong>support and resistance zones</strong>. Approaching an HVN from above, you might expect it to act as support; from below, as resistance. A reasonable plan is to wait for price to react at the node and enter with a <strong>stop beyond the node</strong>, since a clean break all the way through it means agreement has shifted and your reason for the trade is gone.",
        },
        {
          kind: "text",
          html: "Do not expect a precise turn. An HVN is a <strong>zone, not a line</strong>, and price can grind through the middle of it before deciding — that is exactly why momentum stalls there. Use it to anticipate <strong>where a move may pause</strong>, then let price confirm with a reaction before committing, rather than front-running the node.",
        },
        {
          kind: "list",
          items: [
            "<strong>HVN = a volume peak</strong>, a price of heavy agreement.",
            "<strong>Price tends to</strong> consolidate, stall or reverse around it.",
            "<strong>Treat it as a thick</strong> support/resistance zone, not a single line.",
            "<strong>A decisive break</strong> through an HVN signals a shift in agreement.",
            "<strong>Wait for a reaction</strong> in the zone before entering, with a stop beyond it.",
          ],
        },
        {
          kind: "example",
          title: "Trading a bounce off an HVN as support",
          steps: [
            "On the 1-hour gold chart, the swing profile shows a clear <strong>HVN centred at 2,340</strong>, a zone roughly from 2,336 to 2,344 where heavy trading occurred.",
            "Price is trending up and pulls back down into the top of the HVN. You expect the thick node to act as support and slow the decline.",
            "You wait for proof: a bullish rejection candle forms inside the node at <strong>2,341</strong> with a long lower wick. Buyers are defending the agreement zone.",
            "You enter long at <strong>2,343</strong> on the close. Your stop goes below the whole node at <strong>2,333</strong> — a clean break through the HVN means agreement shifted. Risk = <strong>$10</strong>.",
            "Account <strong>$6,000</strong>, risking <strong>1%</strong> = $60. On gold at $1 per $0.10 per micro-contract, a $10 stop = $100 per micro... so you size <strong>0.5 micro-equivalent</strong> (or drop to a broker offering fractional) to keep risk near $60.",
            "You target the prior swing high near <strong>2,375</strong>, ~$32 away — about <strong>3:1</strong>. The HVN gave the level; the rejection candle gave the trigger.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes trading high volume nodes",
          items: [
            "<strong>Treating the node as a precise line.</strong> An HVN is a thick zone. Price grinds inside it before deciding — expect chop, not a clean pivot.",
            "<strong>Entering without a reaction.</strong> The node marks where price may stall, not a guaranteed turn. Wait for a rejection candle before committing.",
            "<strong>Placing the stop inside the node.</strong> A stop within the HVN gets clipped by the normal churn there. Put it beyond the whole zone.",
            "<strong>Fading a strong trend into an HVN.</strong> In a powerful move, price can plough straight through the node. Respect the higher-timeframe trend first.",
            "<strong>Ignoring a decisive break.</strong> When price closes firmly through an HVN on strong volume, agreement has shifted — stop expecting support or resistance there.",
          ],
        },
        {
          kind: "key",
          text: "High volume nodes are the market's comfort zones — price tends to slow and stick there, making them natural areas for reactions.",
        },
        {
          kind: "text",
          html: "Paired with the LVNs in the next module, HVNs give you a map of where price will <strong>slow down and where it will speed up</strong>. That rhythm — sticky nodes and thin gaps — is one of the most practical outputs of the whole volume profile.",
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
      readingMinutes: 10,
      objective:
        "After this module you'll be able to identify low volume nodes and understand why price tends to move fast through them and reject at their edges.",
      blocks: [
        {
          kind: "text",
          html: "A low volume node, or <strong>LVN</strong>, is a valley on the volume profile — a price level where very little trading took place. It marks an area the market <strong>rejected</strong>, passing through quickly because few participants wanted to transact there. Where an HVN is a thick, sticky band, an LVN is a thin gap in the profile.",
        },
        {
          kind: "text",
          html: "LVNs are the mirror image of high volume nodes. Where an HVN slows price, an LVN <strong>accelerates it</strong>: because there is little resting interest, price can travel through a low volume gap fast, with few counterparties to absorb the move. That is why a market can look like it 'jumps' across certain prices — it is crossing an LVN with nothing to slow it down.",
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
          html: "First, as <strong>rejection edges</strong>: the boundary between an HVN and an adjacent LVN often acts as support or resistance, because it separates a zone of agreement from a zone of disinterest. Price stalling at that edge can offer an entry with a stop just inside the low volume gap, since crossing into the void means the edge failed.",
        },
        {
          kind: "text",
          html: "Second, as <strong>fast-travel zones</strong>: once price enters an LVN with momentum, it can move quickly to the next high volume node. Some traders target the far side of a low volume area rather than fading inside it, since fading a thin zone offers little support — there is simply nothing there to lean on if the trade goes wrong.",
        },
        {
          kind: "list",
          items: [
            "<strong>LVN = a volume valley</strong>, a price the market rejected.",
            "<strong>Price tends to move</strong> through low volume areas quickly.",
            "<strong>The edge between</strong> an HVN and LVN often acts as support or resistance.",
            "<strong>Consider targeting</strong> the next HVN across a low volume gap.",
            "<strong>Do not fade</strong> inside a thin zone — there is nothing to support the trade.",
          ],
        },
        {
          kind: "example",
          title: "Targeting the next HVN across an LVN",
          steps: [
            "On the 15-minute EUR/USD chart, the profile shows an <strong>HVN at 1.0850</strong>, a thin <strong>LVN from 1.0855 to 1.0885</strong>, then another <strong>HVN at 1.0890</strong>.",
            "Price breaks up out of the lower HVN on expanding volume and pushes into the LVN — the thin zone where little trading happened.",
            "You enter long at <strong>1.0858</strong> as price enters the gap, reasoning that with few counterparties inside it, price should travel quickly to the next node.",
            "Your stop goes back inside the lower HVN at <strong>1.0844</strong> — a return there means the breakout failed. Risk = <strong>14 pips</strong>.",
            "Account <strong>€4,000</strong>, risking <strong>1%</strong> = €40. On a 14-pip stop that sizes to about <strong>0.28 lots</strong> (≈€2.80 per pip) so a full stop costs ~€40.",
            "You target the upper <strong>HVN at 1.0890</strong>, ~32 pips away — about <strong>2.3:1</strong>. The LVN is the fast-travel zone; the HVN above is the natural target where price slows.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes trading low volume nodes",
          items: [
            "<strong>Fading inside the gap.</strong> An LVN offers no support to lean on. Taking a countertrend trade in the middle of a thin zone is a fast way to get run over.",
            "<strong>Setting targets inside the LVN.</strong> Price rushes through the void — it slows at the next HVN. Aim for the node beyond the gap, not the middle of it.",
            "<strong>Placing the stop in the void.</strong> A stop inside a thin zone gives price room to whip. Anchor it to the adjacent HVN edge instead.",
            "<strong>Ignoring momentum.</strong> LVNs accelerate price only when there is momentum behind the entry. A tired push into the gap can stall rather than fly.",
            "<strong>Forgetting the profile can change.</strong> As the market trades, today's LVN can fill in and become an HVN. Re-read the profile as it develops.",
          ],
        },
        {
          kind: "key",
          text: "Low volume nodes are the market's no-man's-land — thin areas price rushes through, with the strongest reactions at their edges.",
        },
        {
          kind: "text",
          html: "Together, HVNs and LVNs turn a static profile into a <strong>dynamic map</strong>: nodes where price sticks, gaps where it flies, and edges where reactions happen. Read them as a pair and you can anticipate the rhythm of a move before it unfolds.",
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
      readingMinutes: 11,
      objective:
        "After this module you'll be able to read VWAP as a fair-value line and use it for basic entry and stop logic with honest limits.",
      blocks: [
        {
          kind: "text",
          html: "VWAP stands for <strong>volume-weighted average price</strong>. Unlike a simple moving average, which just averages closing prices, VWAP weights each price by the volume traded there — so a price that saw heavy trading counts far more than one that saw little. The result reflects the average price the market <strong>actually paid</strong> during the session, the level around which most business was done.",
        },
        {
          kind: "text",
          html: "That makes VWAP a widely watched <strong>fair-value benchmark</strong>. Large institutions use it to judge whether their fills beat or missed the day's average, and many are literally measured against it. Because so much real money references the line, it attracts genuine attention and can influence how price behaves around it — a rare case where a tool matters partly <strong>because everyone watches it</strong>.",
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
          html: "The simplest read is directional. Price trading <strong>above VWAP</strong> means buyers are paying more than the session average — a bullish lean; price <strong>below VWAP</strong> is the opposite. The slope of the line adds context: a rising VWAP supports longs, a flat VWAP suggests balance, and a falling one supports shorts. Combined, side and slope give you a quick bias in one glance.",
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "A common intraday approach is the <strong>VWAP pullback</strong>: in an uptrend that holds above VWAP, wait for price to dip back to the line, look for buyers returning, and enter with a stop just below VWAP. If price closes decisively on the other side of the line, the fair-value read has flipped and the trade is invalid — a clean, pre-defined point of failure.",
        },
        {
          kind: "list",
          items: [
            "<strong>VWAP weights price</strong> by volume — the session's true average.",
            "<strong>Above VWAP leans</strong> bullish; below leans bearish.",
            "<strong>The slope adds</strong> context — rising supports longs, falling supports shorts.",
            "<strong>Pullbacks to VWAP</strong> in a trend can offer defined-risk entries.",
            "<strong>A decisive cross</strong> invalidates the idea — stop just beyond the line.",
          ],
        },
        {
          kind: "example",
          title: "Trading a VWAP pullback long",
          steps: [
            "On the 5-minute S&P 500 futures chart, price has been trending up and holding <strong>above a rising VWAP</strong> all session — a clean bullish bias.",
            "Price pulls back down to the VWAP line, currently at <strong>5,312</strong>. You wait for proof rather than buying the touch.",
            "A bullish rejection candle forms right on the line, closing back up at <strong>5,316</strong> — buyers stepping in at fair value. You enter long there.",
            "Your stop goes just below VWAP at <strong>5,305</strong>; a decisive close below flips the fair-value read. Risk = <strong>11 points</strong>.",
            "Account <strong>$15,000</strong>, risking <strong>1%</strong> = $150. On the E-mini at $50 per point, 11 points = $550 per contract, so you trade the <strong>micro</strong> ($5/point): 11 points = $55, size ~2 micros ≈ $110 risk.",
            "You target the prior session high near <strong>5,344</strong>, ~28 points away — about <strong>2.5:1</strong>. Entry 5,316, stop 5,305, all fixed before the click.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes trading VWAP",
          items: [
            "<strong>Buying the touch with no confirmation.</strong> A dip to VWAP is a decision point, not a signal. Wait for buyers to actually show up before entering.",
            "<strong>Using VWAP across sessions.</strong> VWAP resets each day, so it is an intraday tool. Carrying yesterday's line into today reads a benchmark that no longer means anything.",
            "<strong>Trading VWAP in chop.</strong> In a rangey, directionless market price whipsaws across the line repeatedly. VWAP pullbacks work best in trending or orderly conditions.",
            "<strong>Placing the stop right on the line.</strong> Price commonly pokes across VWAP before resuming. Give the stop a little room beyond, not exactly on it.",
            "<strong>Treating a touch as a guaranteed turn.</strong> VWAP is a magnet and benchmark, not a wall. Pair it with structure and never bet the account on the line alone.",
          ],
        },
        {
          kind: "key",
          text: "VWAP is the volume-weighted fair price of the session — a benchmark for bias and pullback entries, best used with structure and honest stops.",
        },
        {
          kind: "text",
          html: "VWAP resets each session, so it is mainly an <strong>intraday tool</strong>. It works best in trending or orderly conditions and can whipsaw in choppy markets, so pair it with structure and never treat a touch of the line as a guaranteed turn. The next module shows how to keep VWAP running past a single session by anchoring it to an event.",
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
          html: "Anchored from a swing low, the line often acts as <strong>dynamic support</strong> while an uptrend holds, because buyers since the low are collectively in profit and inclined to defend it. Anchored from a high, it can act as resistance in the same way for trapped buyers who are underwater and eager to exit at breakeven when price returns.",
        },
        {
          kind: "text",
          html: "Use it as a reference, not a rule. A well-chosen anchor gives a meaningful line; a random one gives noise. As with any tool, wait for price to <strong>react at the line</strong> and confirm before acting, and place stops beyond it. The quality of an anchored VWAP is only ever as good as the quality of the event you anchored it to.",
        },
        {
          kind: "example",
          title: "Anchoring a VWAP to a swing low for support",
          steps: [
            "On the daily Bitcoin chart, price made a clear <strong>swing low at 58,000</strong> after a sell-off. You anchor a VWAP to that low candle.",
            "Over the next weeks price rallies, and the anchored VWAP climbs beneath it — everyone who bought since the low is on average in profit and inclined to defend the line.",
            "Price pulls back to the anchored VWAP, now at <strong>63,500</strong>. You wait for proof and get a bullish rejection candle closing at <strong>63,900</strong>.",
            "You enter long at <strong>64,000</strong>. Your stop goes below the anchored line at <strong>62,600</strong> — a decisive break means buyers-since-the-low have given up. Risk = <strong>1,400 points</strong>.",
            "Account <strong>$20,000</strong>, risking <strong>1%</strong> = $200. On a spot position that sizes to about <strong>0.14 BTC</strong> (1,400 × 0.14 ≈ $196) so a full stop costs ~$196.",
            "You target the prior high near <strong>71,000</strong>, ~7,000 points away — roughly <strong>5:1</strong>. The anchor gave the level; the rejection candle gave the trigger.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with anchored VWAP",
          items: [
            "<strong>Anchoring to a random candle.</strong> The whole tool depends on the anchor being meaningful — a real swing, news event, or breakout. A random start point produces a meaningless line.",
            "<strong>Buying the touch with no reaction.</strong> Like session VWAP, a touch is a decision point. Wait for price to actually react at the line before committing.",
            "<strong>Anchoring too many at once.</strong> Ten anchored VWAPs turn the chart into spaghetti. Keep one or two anchored to the events that genuinely matter.",
            "<strong>Ignoring the trend context.</strong> An anchored VWAP acts as support only while the trend from the anchor holds. In a reversal, price slices through it.",
            "<strong>Placing the stop on the line.</strong> Price often pokes across the anchored line before resuming. Put the stop clearly beyond it, not exactly on it.",
          ],
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
      readingMinutes: 10,
      objective:
        "After this module you'll be able to compare a bar's spread with its volume and spot effort-versus-result mismatches.",
      blocks: [
        {
          kind: "text",
          html: "Volume spread analysis, or <strong>VSA</strong>, studies the relationship between three things on each bar: its range (the spread from high to low), where it <strong>closes</strong> within that range, and its volume. The core question is whether <strong>effort matches result</strong> — whether the volume spent produced a matching move. It is the practical, bar-by-bar application of Wyckoff's effort-versus-result idea.",
        },
        {
          kind: "text",
          html: "When a bar has high volume and a wide range in one direction, effort and result agree — the move is genuine. When a bar has <strong>high volume but a narrow range</strong>, a lot of effort produced little movement, which suggests the other side is quietly absorbing the pressure. That mismatch is the single most valuable thing VSA teaches you to see.",
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
            "<strong>High volume + wide range</strong> = effort and result agree; move is genuine.",
            "<strong>High volume + narrow range</strong> = heavy effort, little result — possible absorption.",
            "<strong>Low volume + wide range</strong> = a move on thin participation — treat with caution.",
            "<strong>Low volume on a pullback</strong> = healthy lack of opposing interest.",
            "<strong>Where it closes</strong> in the range matters as much as the range itself.",
          ],
        },
        {
          kind: "text",
          html: "A classic VSA warning is a <strong>climax bar</strong>: enormous volume with a wide range at the end of a long trend, often followed by a stall. It suggests the last participants have piled in and there is little fresh demand left to push price further — the effort was maximal, but it will turn out to be the exhaustion of the move rather than its continuation.",
        },
        {
          kind: "example",
          title: "Reading a high-volume narrow-range bar at support",
          steps: [
            "On the 1-hour FTSE chart, price sells off into a support level at <strong>8,100</strong> after a long decline.",
            "A bar prints at support with <strong>huge volume</strong> — three times the recent average — but a <strong>narrow range</strong> and a close near its high. Effort was massive; downward result was tiny.",
            "You read this as absorption: sellers hit the market hard and a large buyer soaked it all up. You wait for a confirming bullish candle, which closes at <strong>8,120</strong>.",
            "You enter long at <strong>8,125</strong>. Your stop goes below the absorption bar's low at <strong>8,088</strong> — a break there means the buyer failed. Risk = <strong>37 points</strong>.",
            "Account <strong>£10,000</strong>, risking <strong>1%</strong> = £100. On FTSE CFD at £1 per point, a 37-point stop sizes to about <strong>2.7 units</strong> so a full stop ≈ £100.",
            "You target the prior swing high near <strong>8,210</strong>, ~85 points away — about <strong>2.3:1</strong>. VSA flagged the absorption; the confirming candle triggered the entry.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with volume spread analysis",
          items: [
            "<strong>Reading one bar in isolation.</strong> A single VSA bar rarely decides anything. It gains meaning only at a key level and in context with the bars around it.",
            "<strong>Ignoring the close.</strong> A wide-range bar that closes in the middle tells a different story from one that closes on its extreme. Where it closes is half the signal.",
            "<strong>Treating VSA as a mechanical trigger.</strong> It is interpretive. Use it to raise or lower confidence, then wait for a price-action confirmation before acting.",
            "<strong>Trusting VSA on thin CFD data.</strong> On tick-volume feeds the spread-to-volume read is noisier. Be more sceptical than a futures trader would be.",
            "<strong>Forgetting the stop.</strong> Even a textbook absorption bar can fail. The bar's extreme gives you a natural, defined risk point — use it.",
          ],
        },
        {
          kind: "key",
          text: "VSA asks whether effort matches result — heavy volume that fails to move price is often the tell that the other side is absorbing it.",
        },
        {
          kind: "text",
          html: "VSA is interpretive, not mechanical. It works best read <strong>at key levels</strong> and in context with structure, and any single bar can mislead. Use it to raise or lower your confidence in a move, then confirm with price before you commit real risk.",
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
      readingMinutes: 10,
      objective:
        "After this module you'll be able to recognise absorption and understand why stalled price on heavy volume can precede a reversal.",
      blocks: [
        {
          kind: "text",
          html: "Absorption happens when one side pushes hard — heavy volume, aggressive orders — but price <strong>barely moves</strong>. The pushing side's orders are being soaked up by large resting orders on the other side, like waves breaking on a sea wall that does not shift. It is one of the clearest examples of effort without result, seen through the lens of order flow.",
        },
        {
          kind: "text",
          html: "The mechanism matters. If sellers hit the market with size and price refuses to fall, a <strong>large buyer is absorbing</strong> that selling, filling their position against the pressure. Once the sellers exhaust themselves, there is little left to stop price rising — which is why absorption often precedes a turn. The absorbing side is quietly building a position while the aggressive side spends itself.",
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
          html: "Look for a <strong>cluster of high-volume bars</strong> at a level where price stops making progress — repeated pushes into support or resistance that fail to break it. On lower timeframes this shows as large volume with tiny candle bodies stacking up at one price, and on order-flow tools as heavy volume printing without the price ticking through.",
        },
        {
          kind: "list",
          items: [
            "<strong>Heavy volume with stalled price</strong> is the signature of absorption.",
            "<strong>It shows a large passive order</strong> soaking up aggressive flow.",
            "<strong>It often clusters</strong> at a key support or resistance level.",
            "<strong>When the aggressive side</strong> exhausts, price can turn sharply.",
            "<strong>It is a clue, not a trigger</strong> — the absorbing side can still fail.",
          ],
        },
        {
          kind: "example",
          title: "Trading a reversal after absorption at support",
          steps: [
            "On the 5-minute Nasdaq futures chart, price grinds down into support at <strong>18,000</strong> and three bars in a row print <strong>huge volume</strong> with tiny bodies — sellers hitting the bid but price refusing to fall.",
            "You read this as a large buyer absorbing the selling. You do not buy yet; you wait for the aggressive sellers to exhaust and price to lift.",
            "A bullish candle finally closes back up at <strong>18,030</strong>, breaking away from the absorption cluster. You enter long there.",
            "Your stop goes below the absorption zone at <strong>17,978</strong> — a break there means the buyer failed and support is gone. Risk = <strong>52 points</strong>.",
            "Account <strong>$12,000</strong>, risking <strong>1%</strong> = $120. On micro-Nasdaq at $2 per point, 52 points = $104 per contract, so <strong>1 contract</strong> keeps risk near budget.",
            "You target the session VWAP overhead near <strong>18,120</strong>, ~90 points away — about <strong>1.7:1</strong>. The absorption flagged the battle; the breakout candle confirmed who won.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes trading absorption",
          items: [
            "<strong>Buying into the absorption itself.</strong> While the battle rages you don't yet know who wins. Wait for price to actually break away from the cluster before entering.",
            "<strong>Assuming the absorber always wins.</strong> A large passive order can be overwhelmed. Absorption raises the odds of a turn — it does not guarantee one.",
            "<strong>Ignoring the level.</strong> Absorption matters most at a key support or resistance. The same stalled volume in the middle of nowhere means much less.",
            "<strong>Placing the stop inside the zone.</strong> The absorption cluster is noisy. Put the stop beyond the whole zone so normal churn doesn't clip you.",
            "<strong>Over-trusting it on CFD tick data.</strong> True absorption is clearest with real bid/ask flow. On a tick proxy, read it as a weaker hint and confirm with price.",
          ],
        },
        {
          kind: "key",
          text: "Absorption is heavy volume meeting a wall of resting orders — when the aggressors run out, the stalled price can reverse hard.",
        },
        {
          kind: "text",
          html: "Absorption is a clue, not a signal. It tells you a <strong>battle is underway</strong> at a level, but the absorbing side can still fail. Wait for price to actually reject the level and confirm before trading the anticipated reversal, with a stop beyond the absorption zone.",
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
      readingMinutes: 10,
      objective:
        "After this module you'll be able to use volume to confirm or reject breakouts and add a volume filter to your entries.",
      blocks: [
        {
          kind: "text",
          html: "Volume confirmation is the practical heart of volume trading: using volume to judge whether a price move is <strong>real or hollow</strong>. A breakout backed by a surge in volume shows broad participation; the same breakout on thin volume is often a trap. It is the single filter that turns everything earlier in this course into a usable trading edge.",
        },
        {
          kind: "text",
          html: "The logic is simple. For price to break a well-watched level and keep going, it needs <strong>fresh buyers or sellers</strong> stepping in. Expanding volume is the footprint of that fresh participation; flat or falling volume suggests only a few orders pushed price through, and the move may quickly reverse once they are done. Volume tells you whether the crowd came along.",
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
          html: "One honest approach: only take a breakout when the breakout candle shows <strong>clearly expanding volume</strong> versus recent bars. Enter on the close beyond the level or on a volume-backed retest, and place your stop back inside the range — a return there means the confirmed break has failed and you want out cheaply.",
        },
        {
          kind: "list",
          items: [
            "<strong>Expanding volume on a break</strong> = genuine participation, higher confidence.",
            "<strong>Flat or thin volume</strong> on a break = weak move, higher chance of a fake.",
            "<strong>Rising volume on a retest</strong> adds further confirmation.",
            "<strong>Stop goes back inside</strong> the range the breakout left.",
            "<strong>No volume, no trade</strong> — treat the filter as a hard rule, not a suggestion.",
          ],
        },
        {
          kind: "example",
          title: "Filtering a breakout with a volume rule",
          steps: [
            "On the 1-hour EUR/USD chart, price has capped at resistance <strong>1.0900</strong> three times. Volume bars in the range average about <strong>90 ticks</strong>.",
            "A candle closes above 1.0900 and its volume bar prints <strong>260 ticks</strong> — nearly three times the range average. Your filter is satisfied, so you take the break.",
            "You enter long at <strong>1.0905</strong> on the breakout close. Had the break come on thin, below-average volume, you would have skipped it entirely.",
            "Your stop goes back inside the range at <strong>1.0882</strong> — a return there means the confirmed break failed. Risk = <strong>23 pips</strong>.",
            "Account <strong>€5,000</strong>, risking <strong>1%</strong> = €50. On a 23-pip stop that sizes to about <strong>0.22 lots</strong> (≈€2.20 per pip) so a full stop costs ~€50.",
            "You target the next resistance near <strong>1.0965</strong>, ~60 pips away — about <strong>2.6:1</strong>. The volume surge was the filter; the stop defines the risk.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with volume confirmation",
          items: [
            "<strong>Taking every breakout regardless of volume.</strong> A break on thin volume is the classic fakeout. If volume doesn't expand, the filter says pass — so pass.",
            "<strong>Comparing to an absolute threshold.</strong> 'Expanding' means high versus the recent range bars, not against some fixed number. Read it relatively, every time.",
            "<strong>Chasing far past the level.</strong> Confirmation lets you enter near the break or on a retest, not 40 pips into the move. Late entries ruin the reward-to-risk.",
            "<strong>Ignoring the failed-break stop.</strong> Even a volume-backed break can reverse. Keep the stop back inside the range and honour it without debate.",
            "<strong>Over-trusting the filter on CFDs.</strong> Tick volume is a proxy, so a spike is suggestive, not certain. Keep size disciplined even when the volume looks convincing.",
          ],
        },
        {
          kind: "key",
          text: "Let volume confirm the move — a breakout on expanding volume earns more trust, while a thin-volume break deserves suspicion.",
        },
        {
          kind: "text",
          html: "Volume confirmation improves odds; it does not remove risk. Volume can spike and still fail, and on CFDs you are reading tick volume as a proxy. Use it as a <strong>filter, not a promise</strong>, and keep your stop and position size disciplined on every trade.",
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
      readingMinutes: 11,
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
          kind: "text",
          html: "HOW to trade it in practice: wait for price to reach a level you already respect, then let delta <strong>confirm or veto</strong>. A green push-up bar into resistance that prints a large negative delta is telling you buyers hit the wall and sellers absorbed them — that is your permission to fade, not chase.",
        },
        {
          kind: "example",
          title: "Fading a delta divergence at resistance (€1000 account)",
          steps: [
            "Instrument: EUR/USD futures proxy, price grinds up to a resistance shelf at 1.0920.",
            "The final push prints a new high candle at 1.0922 but delta on that bar is -1,800 (aggressive sellers dominated the up-move).",
            "Read: price up, delta negative = bearish divergence, buyers were absorbed.",
            "Entry: short at 1.0918 once the next bar closes back below the shelf.",
            "Stop: 1.0930, just above the delta-negative high — a 12-pip risk.",
            "Risk 1% of €1000 = €10. At €1 per pip that is a size of ~0.8 mini-lots (€10 / 12 pips).",
            "Target: prior value-area low at 1.0882 = 36 pips, roughly 3R.",
            "Outcome logged either way — the setup is defined before entry, not after.",
          ],
        },
        {
          kind: "mistakes",
          title: "Delta mistakes that cost money",
          items: [
            "Trusting delta on a CFD or forex feed that only estimates it from ticks — you are trading a guess dressed as data.",
            "Treating one positive delta bar as a buy signal with no level or structure behind it.",
            "Chasing a big green delta bar at the top of an extended move — that is often the last aggressive buyer, not the first.",
            "Ignoring divergence because 'price is still going up' — divergence is a warning, and warnings arrive early.",
            "Sizing off gut feel instead of stop distance, so one wide-stop delta trade wipes three winners.",
          ],
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
      readingMinutes: 11,
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
          kind: "text",
          html: "HOW to use it: mark the swing where price and the cumulative delta line last agreed, then watch the next test of that price. If price returns but cumulative delta cannot reclaim its old level, aggressive flow has <strong>quietly reversed</strong> — wait for a price trigger in that direction before you commit.",
        },
        {
          kind: "example",
          title: "Trading a cumulative-delta divergence (€1000 account)",
          steps: [
            "Instrument: index CFD, price makes a new session high at 18,240.",
            "Cumulative delta at the first high was +4,200; at the new price high it only reads +2,600 — a lower high in flow.",
            "Read: price higher, flow lower = bearish divergence, the new high was not bought.",
            "Entry: short at 18,232 after a lower-high candle confirms the roll-over.",
            "Stop: 18,258, above the divergent high — a 26-point risk.",
            "Risk 1% of €1000 = €10. At €0.5 per point, size ≈ 0.77 units (€10 / (26 × €0.5)).",
            "Target: session VWAP at 18,180 = 52 points, about 2R, then trail the rest.",
            "If cumulative delta makes a fresh high instead, the divergence is void — no trade.",
          ],
        },
        {
          kind: "mistakes",
          title: "Cumulative delta mistakes that cost money",
          items: [
            "Shorting the instant delta diverges — flow can lead price by many bars, so you need a price trigger too.",
            "Forgetting cumulative delta resets each session, then comparing today's line against yesterday's absolute level.",
            "Reading the line on a CFD that fakes delta from ticks and treating the divergence as gospel.",
            "Confusing a flat line for a bearish signal — no build-up just means balance, not a reversal.",
            "Holding a losing trade because 'delta still diverges' after price already invalidated the level.",
          ],
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
      readingMinutes: 11,
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
          kind: "text",
          html: "HOW to act on it: never trade the footprint alone. Wait until price gives you a <strong>defined trigger</strong> at the level where accumulation showed up, place your stop where the footprint would be proven wrong, and only then size the position. The trace picks the location; price picks the timing.",
        },
        {
          kind: "example",
          title: "Joining accumulation after a footprint (€1000 account)",
          steps: [
            "Instrument: gold CFD, price ranges near 2,318 for hours with repeated high-volume bars but no breakdown.",
            "Footprint read: heavy volume plus absorption on every dip = a large buyer quietly accumulating.",
            "Trigger: price breaks the range top at 2,322 on expanding volume with positive delta.",
            "Entry: long at 2,323 on the breakout close.",
            "Stop: 2,315, below the accumulation zone where the thesis fails — an 8-point (80-pip) risk.",
            "Risk 1% of €1000 = €10. At €0.10 per pip, size ≈ 1.25 mini-lots (€10 / (80 × €0.10)).",
            "Target: next HVN above at 2,339 = 160 pips, roughly 2R.",
            "If price breaks 2,315 instead, the 'accumulation' was distribution — take the small loss and move on.",
          ],
        },
        {
          kind: "mistakes",
          title: "Institutional-flow mistakes that cost money",
          items: [
            "Believing an indicator that claims to show 'real institutional orders' — no retail feed can see them.",
            "Trading the footprint with no price trigger, so you are long into a level that keeps failing.",
            "Assuming heavy volume must be a big buyer when it can equally be a big seller distributing.",
            "Reading footprints off CFD volume as if it were exchange truth — it is only a tick proxy.",
            "Marrying the narrative — holding a loser because 'the institutions are accumulating' after price already broke your stop.",
          ],
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
      readingMinutes: 12,
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
          kind: "example",
          title: "Running the full five-step checklist (€1000 account)",
          steps: [
            "Level: EUR/USD pulls back to 1.0855, an HVN that also sits on the value-area low.",
            "Bias: price is above a rising VWAP at 1.0851 and structure shows higher lows — longs favoured.",
            "Confirmation: the pullback stalls and a bullish bar closes on expanding volume.",
            "Flow: delta flips positive and cumulative delta holds its higher low — flow agrees.",
            "Entry: long at 1.0858 on the confirmation close.",
            "Stop: 1.0843, below the HVN and VWAP where the thesis fails — a 15-pip risk.",
            "Risk 1% of €1000 = €10. At €1 per pip, size ≈ 0.66 mini-lots (€10 / 15 pips).",
            "Target: next HVN / value-area high at 1.0903 = 45 pips, roughly 3R; only take the trade if all five boxes tick.",
          ],
        },
        {
          kind: "mistakes",
          title: "Setup mistakes that cost money",
          items: [
            "Taking the trade with only three of five boxes ticked because you are impatient — a checklist you skip is not a checklist.",
            "Sizing the position first and forcing the stop to fit, instead of sizing from a fixed 1% risk and the stop distance.",
            "Adding more indicators after a loss rather than reviewing the journal to see what actually failed.",
            "Moving the stop wider mid-trade to avoid being wrong — that turns a planned 1% loss into a 3% one.",
            "Believing the setup should win every time; even a good process has losing streaks, and over-leverage is what ends accounts.",
          ],
        },
        {
          kind: "key",
          text: "A written volume checklist plus strict risk management beats any single indicator — process, not prediction, is the real edge.",
        },
      ],
    },
  ],
};
