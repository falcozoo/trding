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
      readingMinutes: 11,
      objective:
        "After this module you'll be able to explain what price action is, read a bare chart, and describe what buyers and sellers are doing at any moment — without a single indicator.",
      blocks: [
        {
          kind: "text",
          html: "Price action is the study of how price moves over time, read directly from the chart itself. Instead of stacking indicators on top of each other, a price action trader reads <strong>candles, swings, and levels</strong> to understand one thing: the ongoing fight between buyers and sellers. Every candle is a receipt for that fight over a fixed period — its open, high, low and close tell you where the battle started, how far each side pushed, and who won by the close.",
        },
        {
          kind: "image",
          src: "/learn/price-action/01-intro.png",
          alt: "Clean candlestick chart showing swings and a pullback without indicators",
          caption:
            "A bare chart: candles, swing highs, swing lows and one small pullback — this is all you need to start.",
        },
        {
          kind: "heading",
          text: "What price action actually is",
        },
        {
          kind: "text",
          html: "At its core, a market is an <strong>auction</strong>. Buyers bid prices up when they are eager; sellers offer prices down when they want out. A single candle is a snapshot of that auction: a long green body means buyers dominated the whole period, a long black body means sellers did, and a small body with long wicks means both sides fought and neither won. You are not predicting the future — you are reading who is currently winning and betting they keep winning until proven otherwise.",
        },
        {
          kind: "heading",
          text: "Why read raw price instead of indicators?",
        },
        {
          kind: "text",
          html: "Almost every indicator is just <strong>math applied to price</strong> — a moving average is the average of past closes, RSI is a ratio of past gains to losses. Because they are built from history, they <strong>lag behind</strong> what price is already showing you on the chart. By reading price directly you react to the market as it happens rather than to a smoothed, delayed echo of it. This does not make indicators worthless, but it does mean price is the primary source and everything else is a derivative. Learn to read the source first.",
        },
        {
          kind: "text",
          html: "The mechanism is simple: at every price, someone is willing to buy and someone is willing to sell. Where <strong>buyers overpower sellers</strong>, price rises; where sellers overpower buyers, price falls. Your entire job as a price action trader is to find the few spots where one side is clearly in control and the potential reward is larger than the risk you must take to find out.",
        },
        {
          kind: "heading",
          text: "The three tools you actually need",
        },
        {
          kind: "list",
          items: [
            "<strong>Candles</strong> — the open, high, low and close of each period. Body size and wick length tell you conviction: a big body is strength, a long wick is rejection.",
            "<strong>Swings</strong> — the highs and lows that price prints. Read left to right, they reveal the trend and its turning points (covered in Market Structure).",
            "<strong>Levels</strong> — prices where the market has reacted before and may react again. Support, resistance, and supply/demand zones are all levels.",
            "<strong>Context</strong> — the bigger picture. The same candle means different things in an uptrend versus a range, so higher-timeframe context decides whether a signal is worth taking.",
          ],
        },
        {
          kind: "heading",
          text: "How to read a bare chart, step by step",
        },
        {
          kind: "text",
          html: "Reading price is a <strong>routine, not a talent</strong>. When you open any chart, run the same three questions every time and the story appears on its own.",
        },
        {
          kind: "example",
          title: "Reading a fresh chart from scratch",
          steps: [
            "Strip the chart. Remove every indicator so you see nothing but <strong>bare candles</strong>. If you feel lost without them, that is exactly the skill this course builds.",
            "Read the trend. Scan left to right and ask: are the peaks and troughs generally <strong>rising, falling, or flat</strong>? Rising = uptrend (favour buys), falling = downtrend (favour sells), flat = range (wait or fade the edges).",
            "Read the last few candles. Are the recent bodies <strong>big or small</strong>? Big green bodies into a high = buyers in control; long upper wicks at a high = buyers being rejected. Conviction lives in the bodies, hesitation lives in the wicks.",
            "Mark the one level that matters. Find the nearest price the market has clearly reacted to before and note it. That single <strong>reference level</strong> is where your next decision will happen.",
            "Say the state out loud: \"uptrend, big bullish bodies, holding above the last swing low — I am only looking for buys near support.\" If you cannot say a clean sentence like that, there is no trade yet.",
          ],
        },
        {
          kind: "key",
          text: "Price action is reading the market from the chart itself — the raw, real-time story of buyers versus sellers, told by candles, swings and levels.",
        },
        {
          kind: "example",
          title: "Turning a bare-chart read into a sized trade",
          steps: [
            "On the 1-hour EUR/USD chart you read the state: rising swings, big green bodies, price holding above the last swing low at <strong>1.0820</strong> — an uptrend, so you only look for buys.",
            "Price pulls back to your reference level near <strong>1.0840</strong> and prints a <strong>long lower wick</strong> — rejection, buyers stepping back in. You enter long at <strong>1.0850</strong>.",
            "Your stop goes just below the swing low at <strong>1.0815</strong> — a close there means the uptrend read was wrong. Risk = <strong>35 pips</strong>.",
            "Account is <strong>€1,000</strong> and you risk <strong>1%</strong> = €10. With a 35-pip stop, you size so 35 pips against you costs ~€10 — about <strong>0.028 lots</strong> on EUR/USD.",
            "You target the next resistance near <strong>1.0960</strong>, ~110 pips away — roughly <strong>3:1 reward-to-risk</strong>. The plan is complete before you click: entry 1.0850, stop 1.0815, risk €10.",
            "One rule, no debate: <strong>a close below 1.0815</strong> and you are out. The read gave you a direction; risk management gave you a way to survive being wrong.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes when starting out",
          items: [
            "<strong>Drowning the chart in indicators.</strong> Five overlapping tools do not add five edges — they add noise and conflicting signals. Start bare and add at most one thing only once you know why.",
            "<strong>Treating price action as magic.</strong> It is not a crystal ball. It tells you who is winning now, not what happens next with certainty. Every read is a probability, never a promise.",
            "<strong>Reading candle-by-candle with no context.</strong> A single bullish candle in a strong downtrend is usually just a bounce to be sold. Always zoom out and read the trend before reacting to one candle.",
            "<strong>Skipping risk management because 'the read looks obvious'.</strong> The cleanest-looking setups still fail regularly. No amount of chart-reading skill removes the need for a stop and a sensible position size.",
          ],
        },
        {
          kind: "text",
          html: "Throughout this course we build from the ground up: levels, then structure, then repeatable setups, and finally a written plan. No setup wins every time, so <strong>risk management</strong> matters as much as chart reading — a point we return to in every single module. Master the reading, but never trade without a defined level where you are wrong.",
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
      readingMinutes: 11,
      objective:
        "After this module you'll be able to mark meaningful support and resistance zones, explain why they form, and plan a trade with a concrete entry and stop at a level.",
      blocks: [
        {
          kind: "text",
          html: "Support and resistance are the most important concepts in all of price action — almost every other setup is built on top of them. <strong>Support</strong> is a price area where buyers have historically stepped in and stopped price from falling further. <strong>Resistance</strong> is where sellers have stepped in and capped a rise. They are <strong>areas, not exact lines</strong> — think of them as zones a few pips wide where the balance of buyers and sellers has flipped before.",
        },
        {
          kind: "image",
          src: "/learn/price-action/02-support-resistance.png",
          alt: "Chart with horizontal support and resistance levels touched several times",
          caption:
            "Price bounces off support twice and rejects resistance twice — the more touches, the more the level matters.",
        },
        {
          kind: "heading",
          text: "Why levels form in the first place",
        },
        {
          kind: "text",
          html: "Levels form because market participants <strong>remember prices</strong>. Three groups create the reaction every time price returns: traders who bought at a level want to defend it and add; traders who missed the last move from that level want a second chance to enter; and traders who are trapped on the wrong side want to exit at breakeven. This <strong>collective memory</strong> concentrates fresh orders at the same prices, which is why the same level gets respected again and again — until it doesn't.",
        },
        {
          kind: "heading",
          text: "How to draw levels that actually matter",
        },
        {
          kind: "text",
          html: "Drop to a <strong>higher timeframe</strong> first (daily or 4-hour) and mark only the prices where price has clearly reversed more than once. Use the area where <strong>candle bodies and wicks</strong> cluster, not a single wick tip. The strongest levels are the ones price has touched several times, and the very best are those that have acted as <strong>both support and resistance</strong> at different times. Keep it clean — a handful of strong levels beats twenty weak ones that turn your chart into spaghetti.",
        },
        {
          kind: "list",
          items: [
            "<strong>More touches</strong> usually mean a more significant level — but each touch also drains a little strength from it.",
            "<strong>Round numbers</strong> (whole figures like 1.1000 or 2000) often act as psychological levels even with no prior touch.",
            "Treat levels as <strong>zones a few pips wide</strong>, not a single pixel — the market rarely turns on the exact price twice.",
            "A level broken with conviction can <strong>flip role</strong> (old resistance becomes new support) — see the Retest module.",
          ],
        },
        {
          kind: "heading",
          text: "How to trade a level, step by step",
        },
        {
          kind: "text",
          html: "You never buy support just because price touched it — you wait for <strong>proof</strong> that buyers are actually defending it, then trade with a stop just beyond the zone so your risk is small and defined.",
        },
        {
          kind: "example",
          title: "Buying a support bounce with a defined stop",
          steps: [
            "On the 4-hour EUR/USD chart you mark a <strong>support zone at 1.0800</strong> — price has bounced there twice already.",
            "Price sells off into 1.0800 and you wait. You do not buy the touch; you wait for a <strong>bullish rejection candle</strong> (a long lower wick or a strong green close) to confirm buyers are stepping in.",
            "That confirmation candle closes at <strong>1.0820</strong>. You enter a long there.",
            "You place your stop just below the zone at <strong>1.0785</strong> — a break there means support failed and your reason for the trade is gone. Risk = 35 pips.",
            "You target the resistance overhead at <strong>1.0960</strong> for roughly 140 pips of potential reward — about a <strong>4:1 reward-to-risk</strong> before costs.",
            "With a €2,000 account risking 1% (€20) on a 35-pip stop, you size around <strong>0.05 lots</strong>, and your plan is complete before you click buy: entry 1.0820, stop 1.0785, target 1.0960.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with support & resistance",
          items: [
            "<strong>Buying the exact touch with no confirmation.</strong> Price often pokes through a zone before turning. Wait for a rejection candle instead of front-running the level.",
            "<strong>Drawing too many levels.</strong> If everything is a level, nothing is. Keep only the prices a stranger would circle at a glance.",
            "<strong>Placing the stop inside the zone.</strong> A level is a zone, so a stop one pip below the line gets clipped by normal noise. Put it beyond the whole zone.",
            "<strong>Treating a level as permanent.</strong> Every level eventually breaks. When price closes firmly through it with a big body, stop fading it and respect the break.",
            "<strong>Ignoring the higher timeframe.</strong> A level that looks strong on the 5-minute may sit in the middle of nowhere on the daily. Anchor levels on the higher timeframe first.",
          ],
        },
        {
          kind: "key",
          text: "Support and resistance are zones of memory where buyers or sellers have acted before — wait for proof they are acting again, then trade with a stop just beyond the zone.",
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
      readingMinutes: 11,
      objective:
        "After this module you'll be able to mark supply and demand zones from the base of strong moves, grade their quality, and plan a limit entry with a stop beyond the zone.",
      blocks: [
        {
          kind: "text",
          html: "Supply and demand zones are the areas from which a strong, impulsive move began. A <strong>demand zone</strong> is the base where aggressive buying launched price upward; a <strong>supply zone</strong> is the base where aggressive selling drove price down. They mark where a <strong>large order imbalance</strong> existed — so many buyers (or sellers) that price could not stay still and had to move fast. When price returns to that base, the theory is that leftover unfilled orders are still waiting there.",
        },
        {
          kind: "image",
          src: "/learn/price-action/03-supply-demand.png",
          alt: "Chart marked with a demand zone and a supply zone at the origin of strong moves",
          caption:
            "A tight base, then an explosive departure. The base — not the middle of the move — is the zone.",
        },
        {
          kind: "heading",
          text: "How zones differ from lines",
        },
        {
          kind: "text",
          html: "A support or resistance line is a <strong>single price</strong> defined by past reactions; a supply or demand zone is a <strong>rectangle</strong> drawn around the small consolidation that existed just before an explosive candle. The distinction matters because a zone is a decision area you prepare in advance — often before price has ever returned — whereas a level is confirmed by repeated touches. Zones let you plan an entry into an area price has not tested yet, which is both their strength and their risk.",
        },
        {
          kind: "heading",
          text: "How to spot a valid zone",
        },
        {
          kind: "text",
          html: "Look for a <strong>tight base</strong> — a few small candles going nowhere — followed by a <strong>strong departure</strong>, one or more large candles that leave the base fast and do not look back. The sharper and faster the exit, the bigger the imbalance and the better the zone. A <strong>fresh zone</strong> that has not yet been retested tends to react more cleanly than one price has already grazed several times, because each touch consumes the leftover orders.",
        },
        {
          kind: "list",
          items: [
            "Find the <strong>origin</strong> of a strong move, not the middle of it — the base is where the orders sat.",
            "Draw the box around the <strong>base candles</strong> before the impulse, from the body cluster to the extreme wick.",
            "<strong>Fresh, untested</strong> zones are generally higher quality than ones already revisited.",
            "The <strong>strength of the departure</strong> grades the zone: explosive exit = strong imbalance; a lazy drift out = weak, skip it.",
          ],
        },
        {
          kind: "heading",
          text: "How to trade a zone, step by step",
        },
        {
          kind: "text",
          html: "Because a fresh zone often reacts on the first return, many traders place a <strong>resting limit order</strong> at its edge rather than waiting to react. The stop always goes beyond the far side of the zone: if price trades all the way through it, the imbalance was already absorbed and the idea is invalid.",
        },
        {
          kind: "example",
          title: "Buying a fresh demand zone with a limit order",
          steps: [
            "On the 1-hour GBP/USD chart you spot a <strong>tight 3-candle base</strong> between 1.2500 and 1.2520, followed by an explosive rally to 1.2650. That base is your demand zone.",
            "You mark the zone from the base low <strong>1.2500</strong> to the base high <strong>1.2520</strong> — a 20-pip-wide rectangle.",
            "Rather than chase, you leave a <strong>buy limit at 1.2520</strong> (the near edge of the zone), so you get filled the moment price returns.",
            "Your stop goes just below the far edge at <strong>1.2485</strong> — if price closes through the whole zone the imbalance is gone. Risk = 35 pips.",
            "You target the prior swing high at <strong>1.2650</strong>, about 130 pips away — roughly a <strong>3.7:1 reward-to-risk</strong>.",
            "On a €3,000 account risking 1% (€30) with a 35-pip stop, you size around <strong>0.08 lots</strong>. If price never returns, no harm done — the order simply never fills.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with supply & demand",
          items: [
            "<strong>Drawing the zone on the impulse candle.</strong> The zone is the quiet base that came before the big move, not the big move itself.",
            "<strong>Trusting every zone equally.</strong> A weak, slow departure is not a real imbalance. Only trade zones born from an explosive exit.",
            "<strong>Reusing a tested zone.</strong> Once price has traded back into a zone and out again, most of the resting orders are gone. Prefer fresh zones.",
            "<strong>Making zones too wide.</strong> A 200-pip 'zone' is just a guess with a big stop. Tight base = tight zone = tight, sensible risk.",
            "<strong>Blindly trusting a limit order.</strong> Price can slice straight through a zone in a strong trend. The stop beyond the far edge is what keeps a bad zone from becoming a bad loss.",
          ],
        },
        {
          kind: "key",
          text: "Zones mark the origin of strong moves — the footprints of the orders that pushed price hard. Trade fresh zones born from explosive departures, and put your stop beyond the far edge.",
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
      readingMinutes: 12,
      objective:
        "After this module you'll be able to open any chart, mark its swing points, classify the trend as up, down or ranging, and know which trades fit that structure.",
      blocks: [
        {
          kind: "text",
          html: "Market structure is the <strong>skeleton of price action</strong>. Before you think about a single trade, you read structure to answer one question: who is in control right now — buyers, sellers, or nobody? Get this wrong and every other tool you own points the wrong way. Get it right and you already have an edge, because you are trading in the direction the market is actually moving.",
        },
        {
          kind: "text",
          html: "Structure is built from just two things: <strong>swing highs</strong> and <strong>swing lows</strong>. A swing high is a peak that has a lower candle on each side of it — price pushed up, ran out of buyers, and turned down. A swing low is the mirror image: a trough with a higher candle on each side, where price fell, ran out of sellers, and turned back up. Every trend, no matter how complex it looks, is just a chain of these two points.",
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
          kind: "text",
          html: "A market is only ever doing one of three things. Learn to name the state out loud before you do anything else — it forces you to trade the chart in front of you instead of the one you wish you had.",
        },
        {
          kind: "list",
          items: [
            "<strong>Uptrend</strong> — higher highs (HH) and higher lows (HL). Each rally clears the last peak, each dip stops above the last trough. Buyers are in control: look for buys, ignore sells.",
            "<strong>Downtrend</strong> — lower highs (LH) and lower lows (LL). Each drop breaks the last low, each bounce fails below the last peak. Sellers are in control: look for sells, ignore buys.",
            "<strong>Range</strong> — highs and lows are roughly level. Price bounces between a ceiling and a floor. Neither side is in control: either trade the edges, or stand aside until it breaks.",
          ],
        },
        {
          kind: "heading",
          text: "How to mark structure on a live chart",
        },
        {
          kind: "text",
          html: "This is where most guides stop and most beginners get stuck. Marking structure is a <strong>mechanical routine</strong>, not an art. Follow the same steps every time and the trend names itself.",
        },
        {
          kind: "example",
          title: "Reading a chart step by step",
          steps: [
            "Zoom out first. Drop to a <strong>higher timeframe</strong> (e.g. the 4-hour or daily). Structure on a 1-minute chart is noise; structure on the daily is the real trend everyone is reacting to.",
            "Find the obvious peaks and troughs. Mark every clear <strong>swing high</strong> (peak with a lower candle each side) and <strong>swing low</strong> (trough with a higher candle each side). Ignore tiny wiggles — you want the points a human would circle at a glance.",
            "Read them left to right. Ask: is each new high <strong>above</strong> the last high? Is each new low <strong>above</strong> the last low? Two yeses in a row = uptrend.",
            "Name the state out loud: \"higher highs and higher lows — this is an uptrend, I only look for buys.\" If the highs and lows are flat, say \"range — I wait or fade the edges.\"",
            "Mark the <strong>most recent swing low</strong> (in an uptrend). That level is your line in the sand: while price holds above it, the uptrend is intact. If price closes firmly below it, the structure has changed and your bias is no longer valid.",
          ],
        },
        {
          kind: "heading",
          text: "Why the last swing point is your objective invalidation",
        },
        {
          kind: "text",
          html: "The single most practical use of structure is that it gives you a <strong>non-negotiable exit</strong> decided by the market, not by your emotions. In an uptrend, the most recent higher low is the level that must hold. If it breaks, buyers have failed to defend their last footprint — the reason you were long has gone. This is how structure turns into a real, sizable trade with a defined risk.",
        },
        {
          kind: "example",
          title: "Turning structure into a sized trade",
          steps: [
            "You spot an uptrend on EUR/USD: price made a higher low at <strong>1.0850</strong> and is now pulling back toward it.",
            "You decide to buy the hold of that higher low, entering at <strong>1.0870</strong>.",
            "Your invalidation is a close below the swing low, so you place your stop just under it at <strong>1.0840</strong> — a 30-pip risk.",
            "Your account is <strong>€1,000</strong> and you risk <strong>1%</strong> = €10. With a 30-pip stop, you size the position so that 30 pips against you costs about €10 — roughly <strong>0.03 lots</strong> on EUR/USD.",
            "You now have a complete plan before entering: entry 1.0870, stop 1.0840, risk €10, and a clear rule — <strong>if 1.0840 breaks, the uptrend is over and you are out</strong>, no debate.",
          ],
        },
        {
          kind: "text",
          html: "Notice what happened there: structure didn't just tell you the direction, it told you <strong>exactly where to be wrong</strong>. That is the whole point. A trade without a structural invalidation is a hope; a trade with one is a plan.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with structure",
          items: [
            "<strong>Reading structure on too low a timeframe.</strong> A 1-minute chart flips between 'uptrend' and 'downtrend' every few minutes. Anchor your bias on a higher timeframe first, then zoom in only to time entries.",
            "<strong>Forcing a trend that isn't there.</strong> If highs and lows are flat, it's a range — not 'about to break out'. Trading a range as if it were a trend is one of the fastest ways to get chopped up.",
            "<strong>Fighting the structure.</strong> Buying in a clean downtrend because it 'looks cheap' is trading your opinion against the market's proof. Trade with structure until you have real experience.",
            "<strong>Moving your invalidation.</strong> When price nears the swing low that should get you out, it's tempting to slide the stop lower 'to give it room'. That's just choosing to lose more. The level was objective when you set it — respect it.",
            "<strong>Marking every wiggle as a swing.</strong> Over-marking turns the chart into spaghetti. Only mark the peaks and troughs a stranger would circle at a glance.",
          ],
        },
        {
          kind: "heading",
          text: "Trade with structure, not against it",
        },
        {
          kind: "text",
          html: "The single most useful habit in all of price action is to <strong>favour longs in an uptrend and shorts in a downtrend</strong>. Counter-trend trading is possible, but it is statistically harder and demands precise timing you won't have as a beginner. Master trend-aligned trading first: it lets the overall drift of the market work for you instead of against you.",
        },
        {
          kind: "key",
          text: "Read the swings first. Structure tells you whether to be looking for buys, sells, or nothing at all — and it hands you the exact level where you're proven wrong.",
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
      readingMinutes: 10,
      objective:
        "After this module you'll be able to confirm an uptrend from its higher highs and higher lows, buy a pullback into a fresh higher low, and place a stop that respects structure.",
      blocks: [
        {
          kind: "text",
          html: "An uptrend is defined by two things repeating: <strong>higher highs (HH)</strong> and <strong>higher lows (HL)</strong>. Each rally pushes above the previous peak, and each dip stops above the previous trough. As long as this staircase holds, buyers are in control and the path of least resistance is up. The moment price fails to make a higher high, or breaks a higher low, that control is in question.",
        },
        {
          kind: "image",
          src: "/learn/price-action/05-hh-hl.png",
          alt: "Uptrend making a clean sequence of higher highs and higher lows",
          caption:
            "Each peak clears the last (HH) and each dip stops above the last trough (HL) — the fingerprint of an uptrend.",
        },
        {
          kind: "heading",
          text: "Why the higher low matters most",
        },
        {
          kind: "text",
          html: "Of the two, the higher low is the more important — and the more tradable. It shows that <strong>buyers stepped in early</strong>, unwilling to let price fall as far as it did last time. That impatience is exactly the strength you want to bet on. When a fresh higher low forms and holds, it often gives the cleanest, lowest-risk entry into a continuing uptrend, because your stop can sit just below it where the structure would break.",
        },
        {
          kind: "heading",
          text: "How to confirm the sequence",
        },
        {
          kind: "text",
          html: "Read the swings left to right and check two boxes: is each new high <strong>above the last high</strong>, and is each new low <strong>above the last low</strong>? Two yeses in a row and you have a confirmed uptrend. A useful filter is to require a <strong>candle close</strong> above the prior high, not just a wick poke — wicks lie, closes commit.",
        },
        {
          kind: "heading",
          text: "How to trade it, step by step",
        },
        {
          kind: "text",
          html: "The highest-probability play is not chasing the breakout — it is buying the <strong>pullback into a fresh higher low</strong> once buyers show up again. That gives you a tight stop and a big potential move if the trend continues.",
        },
        {
          kind: "example",
          title: "Buying a pullback to a higher low",
          steps: [
            "On the 1-hour chart, gold prints a higher high at <strong>2050</strong> after a prior swing high of 2030 — the uptrend is confirmed.",
            "Price pulls back and stalls at <strong>2028</strong>, comfortably above the previous higher low of 2010. This is your fresh higher low forming.",
            "You wait for a <strong>bullish confirmation candle</strong> (a strong green close off 2028) rather than catching the falling knife, and enter at <strong>2032</strong>.",
            "Your stop goes just below the higher low at <strong>2024</strong> — if that breaks, the HL failed and the trade thesis is dead. Risk = 8 points.",
            "You target the measured continuation toward <strong>2075</strong> (a new higher high), about 43 points away — roughly a <strong>5:1 reward-to-risk</strong> before costs.",
            "Your whole plan exists before entry: buy 2032, stop 2024, target 2075, and one rule — <strong>a close below 2024 and you're out</strong>.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with HH/HL",
          items: [
            "<strong>Chasing the high instead of the low.</strong> Buying as price prints a new high gives you a far-away stop and terrible risk. Buy the higher low, not the breakout candle.",
            "<strong>Calling a wick a higher high.</strong> A wick above the last peak that closes back below is not a higher high. Wait for the close.",
            "<strong>Ignoring a broken higher low.</strong> Once price closes firmly below the last HL, the uptrend is in doubt — stop buying dips until structure repairs.",
            "<strong>Assuming trends are forever.</strong> Every HH/HL sequence eventually ends. Take partial profit or trail your stop; don't marry the trade.",
            "<strong>Buying with no confirmation.</strong> A pullback can keep falling. Waiting for buyers to actually show up costs a few pips of entry but saves you from catching knives.",
          ],
        },
        {
          kind: "key",
          text: "As long as price prints higher highs and higher lows, the path of least resistance is up — buy the pullback into a fresh higher low and put your stop just below it.",
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
      readingMinutes: 10,
      objective:
        "After this module you'll be able to confirm a downtrend from its lower highs and lower lows, short a bounce into a fresh lower high, and place a stop that respects structure.",
      blocks: [
        {
          kind: "text",
          html: "A downtrend is the mirror image of an uptrend: <strong>lower highs (LH)</strong> and <strong>lower lows (LL)</strong>. Each rally fails below the previous peak and each decline breaks the previous trough. Sellers are in control, and every bounce is being sold into rather than bought. As long as this descending staircase holds, the path of least resistance is down — and the moment price makes a higher high, that control is in doubt.",
        },
        {
          kind: "image",
          src: "/learn/price-action/06-lh-ll.png",
          alt: "Downtrend making a clean sequence of lower highs and lower lows",
          caption:
            "Each bounce fails below the last peak (LH) and each drop breaks the last trough (LL) — the fingerprint of a downtrend.",
        },
        {
          kind: "heading",
          text: "Why the lower high matters most",
        },
        {
          kind: "text",
          html: "In a downtrend the lower high is the key tell — and the tradable one. It shows that <strong>sellers stepped in early</strong>, capping the bounce before it could reach the previous high. That eagerness to sell is the weakness you want to bet on. A rally that stalls into a fresh lower high gives you a favourable short entry with a tight, clearly defined risk point right above it.",
        },
        {
          kind: "heading",
          text: "How to confirm the sequence",
        },
        {
          kind: "text",
          html: "Read the swings left to right and check two boxes: is each new low <strong>below the last low</strong>, and is each bounce topping <strong>below the last high</strong>? Two yeses and the downtrend is confirmed. Require a <strong>candle close</strong> below the prior low rather than a wick — a wick that pokes lower and closes back up is often a trap, not a real lower low.",
        },
        {
          kind: "heading",
          text: "How to trade it, step by step",
        },
        {
          kind: "text",
          html: "The cleaner play is not shorting the fresh low in a panic — it is selling the <strong>bounce into a fresh lower high</strong> once sellers reappear. This gives you a tight stop above the swing high and a large potential move if the decline continues.",
        },
        {
          kind: "example",
          title: "Shorting a bounce into a lower high",
          steps: [
            "On the 1-hour US30 chart, price prints a lower low at <strong>38,000</strong> after a prior swing low of 38,300 — the downtrend is confirmed.",
            "Price bounces and stalls at <strong>38,250</strong>, comfortably below the previous lower high of 38,500. This is your fresh lower high forming.",
            "You wait for a <strong>bearish confirmation candle</strong> (a strong red close off 38,250) instead of shorting into strength, and enter at <strong>38,210</strong>.",
            "Your stop goes just above the lower high at <strong>38,300</strong> — a close above it means the LH failed and the thesis is dead. Risk = 90 points.",
            "You target the measured continuation toward <strong>37,750</strong> (a new lower low), about 460 points away — roughly a <strong>5:1 reward-to-risk</strong> before costs.",
            "Your plan is set before entry: sell 38,210, stop 38,300, target 37,750, and one rule — <strong>a close above 38,300 and you're out</strong>.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with LH/LL",
          items: [
            "<strong>Shorting the fresh low instead of the high.</strong> Selling as price makes a new low puts your stop far away and your entry into potential support. Sell the bounce into the lower high.",
            "<strong>Calling a wick a lower low.</strong> A wick below the last trough that closes back above is not a lower low — it may be a bear trap. Wait for the close.",
            "<strong>Ignoring a broken lower high.</strong> Once price closes firmly above the last LH, the downtrend is in doubt — stop shorting bounces until structure repairs.",
            "<strong>Forgetting that shorting has its own risks.</strong> Falling markets can snap back violently on short squeezes. Size carefully and never move a stop wider 'to give it room'.",
            "<strong>Shorting with no confirmation.</strong> A bounce can keep rising into a full reversal. Waiting for sellers to actually resume costs a little entry but avoids fighting a real trend change.",
          ],
        },
        {
          kind: "key",
          text: "As long as price prints lower highs and lower lows, the path of least resistance is down — sell the bounce into a fresh lower high and put your stop just above it.",
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
        "Learn what a break of structure is, how it confirms trend continuation, how to require a proper close, and how to turn it into a sized trade.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to mark the last swing in a trend, confirm a break of structure by candle close, tell it apart from a change of character, and build a trade with entry, stop and target around it.",
      blocks: [
        {
          kind: "text",
          html: "A break of structure, or <strong>BOS</strong>, is the market re-confirming the trend that is already in motion. In an uptrend, a BOS is a decisive break above the <strong>last swing high</strong>; in a downtrend, it is a break below the last swing low. Nothing about the trend has to change for a BOS to happen — it is simply price completing another leg in the same direction and leaving <strong>fresh proof</strong> that the side in control is still winning. It is the market's way of ticking off another rung on the staircase.",
        },
        {
          kind: "text",
          html: "<strong>Why it matters:</strong> a trend is nothing more than a chain of broken swing points. Each time buyers push price above the previous peak, they print a new <strong>higher high</strong>, and the uptrend earns the right to continue. A BOS is the exact moment that proof arrives. Until it does, a pullback is just a pullback — it could be the pause before continuation, or the start of a reversal. The BOS <strong>resolves that ambiguity</strong> in the trend's favour and tells you it is safe to keep hunting entries in the trend direction.",
        },
        {
          kind: "image",
          src: "/learn/price-action/07-bos.png",
          alt: "Uptrend breaking the last swing high, a break of structure",
          caption:
            "An uptrend prints higher highs and higher lows, then a strong candle closes above the last swing high — that break is the BOS.",
        },
        {
          kind: "heading",
          text: "How to spot a BOS on a live chart",
        },
        {
          kind: "text",
          html: "Spotting a BOS is a <strong>mechanical routine</strong>, not a judgement call. First, name the trend on a higher timeframe. Second, mark the <strong>last relevant swing</strong> — the most recent higher high in an uptrend, or lower low in a downtrend. Third, watch that level: the BOS is a candle body that <strong>closes clearly beyond</strong> it in the trend direction. If you find yourself squinting to decide whether a level broke, it probably didn't — a real BOS is obvious.",
        },
        {
          kind: "heading",
          text: "BOS versus CHoCH — same event, opposite meaning",
        },
        {
          kind: "text",
          html: "The most common confusion is between a BOS and a change of character (CHoCH). The mechanics are identical — price breaks a swing point — but the <strong>direction decides everything</strong>. A BOS breaks a swing in the direction of the existing trend and confirms continuation. A CHoCH breaks a swing against the trend and warns of a possible reversal. Read them as a pair: BOS tells you the trend is <strong>healthy</strong>, CHoCH tells you its character just cracked.",
        },
        {
          kind: "list",
          items: [
            "<strong>Uptrend BOS</strong> — a close above the last higher high. Buyers still in control; keep looking for longs.",
            "<strong>Downtrend BOS</strong> — a close below the last lower low. Sellers still in control; keep looking for shorts.",
            "<strong>CHoCH (contrast)</strong> — the first break against the trend. Not a BOS; it is a warning, covered in its own module.",
          ],
        },
        {
          kind: "heading",
          text: "Demand a close, not a wick",
        },
        {
          kind: "text",
          html: "The single most useful filter is to require a <strong>candle close</strong> beyond the swing point, not just a wick poking through it. Wicks through levels are extremely common — they are stop-runs and liquidity grabs that snap straight back. A body that closes clearly beyond the level tells you the break was <strong>accepted, not rejected</strong>. Beginners who count every wick as a BOS end up chasing dozens of fake breaks; traders who wait for the close trade far fewer, far cleaner ones. On lower timeframes, some traders demand two closes beyond the level for extra confidence.",
        },
        {
          kind: "heading",
          text: "How to use a BOS in a real trade",
        },
        {
          kind: "text",
          html: "A confirmed BOS gives you two things: a <strong>direction</strong> to trade and a <strong>fresh swing low</strong> (or high) to define your risk against. The play is not to chase the breakout candle but to wait for the pullback it usually produces, then enter with your stop parked just beyond the new structural point. That way the trade is sized off a real level the market just drew, not a round number you guessed.",
        },
        {
          kind: "example",
          title: "Turning a BOS into a sized EUR/USD trade",
          steps: [
            "On the 4-hour EUR/USD chart, mark the <strong>last swing high</strong> of the uptrend at <strong>1.0850</strong> — the peak price must clear.",
            "Price pulls back and makes a fresh <strong>higher low</strong> at 1.0810, holding above the previous higher low. Structure is intact.",
            "A strong bullish candle rallies and <strong>closes at 1.0872</strong>, well above 1.0850 — not the earlier wick that only tagged 1.0853. That close is your confirmed BOS.",
            "You wait for the pullback rather than chasing. Price drifts back to the broken 1.0850 level, which flips to support, and you enter on the hold at <strong>1.0858</strong>.",
            "Stop below the fresh higher low at <strong>1.0828</strong> — a <strong>30-pip risk</strong>. On a €1,000 account risking <strong>1% (€10)</strong>, a 30-pip stop sizes to roughly <strong>0.03 lots</strong>.",
            "Target the measured next leg near <strong>1.0918</strong> (60 pips) — about a <strong>2:1</strong> reward-to-risk trade built entirely around the BOS. One rule: a close back below 1.0828 and you're out.",
          ],
        },
        {
          kind: "heading",
          text: "Why chasing the break is the weakest entry",
        },
        {
          kind: "text",
          html: "The candle that makes the BOS is usually the <strong>worst place to enter</strong>: it is extended, your stop has to sit far away back below the swing, and you are buying right where short-term traders take profit. The higher-quality play is to let the BOS confirm the trend, then wait for the retracement. The broken level often becomes <strong>support</strong> (or resistance in a downtrend), giving you a tighter stop and a much better reward-to-risk — the same role-flip idea covered in the Retest module.",
        },
        {
          kind: "mistakes",
          title: "Common mistakes with break of structure",
          items: [
            "<strong>Counting wicks as breaks.</strong> A wick through the swing high is not a BOS. Wait for a body to close beyond it, or you'll be trapped by every stop-run.",
            "<strong>Confusing BOS with CHoCH.</strong> A break with the trend confirms it; a break against the trend warns of reversal. Always ask which direction the broken swing sits relative to the trend.",
            "<strong>Chasing the breakout candle.</strong> Entering on the extended BOS candle puts your stop miles away and buys into profit-taking. Prefer the pullback after the break.",
            "<strong>Marking the wrong swing.</strong> The BOS is about the <em>last</em> relevant swing, not a random old high. Mark the peak a stranger would circle at a glance.",
            "<strong>Ignoring the higher timeframe.</strong> A BOS on the 1-minute chart means little if the daily is in a strong opposing trend. Anchor the trend on a higher timeframe first.",
          ],
        },
        {
          kind: "key",
          text: "A break of structure re-confirms the trend — price closes beyond the last swing in the trend's own direction. Demand a close, not a wick, and prefer entering the pullback that follows over chasing the break itself.",
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
        "Discover the change of character — the first structural break against a trend that warns of a possible reversal — and how to act on it without jumping the gun.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to spot a change of character, tell it apart from a break of structure, treat it as an early warning to protect trades, and wait for real confirmation before betting on a reversal.",
      blocks: [
        {
          kind: "text",
          html: "A change of character, or <strong>CHoCH</strong>, is the first time price breaks structure <strong>against</strong> the prevailing trend. In an uptrend it is the first lower low that breaks a previous higher low; in a downtrend it is the first higher high that breaks a previous lower high. It is the earliest structural hint that the side in control may be losing its grip — the first crack, not the collapse.",
        },
        {
          kind: "text",
          html: "<strong>Why it matters:</strong> think of a healthy uptrend as a staircase of higher highs and higher lows. Every higher low that holds is the buyers saying \"we are still defending.\" A CHoCH is the moment one of those higher lows <strong>fails</strong> — price closes below a level that, in a healthy trend, should have held. That failure doesn't guarantee a reversal, but it is the <strong>first objective evidence</strong> that something has changed. Ignoring it is how traders ride a winning trend all the way back to breakeven and beyond.",
        },
        {
          kind: "image",
          src: "/learn/price-action/08-choch.png",
          alt: "First lower low breaking a prior higher low, a change of character",
          caption:
            "An uptrend making higher highs, then a candle closes below the prior higher low — the first break against the trend is the CHoCH.",
        },
        {
          kind: "heading",
          text: "How to spot a CHoCH on a live chart",
        },
        {
          kind: "text",
          html: "To spot a CHoCH you first need the trend clearly marked. In an uptrend, identify the <strong>last defended higher low</strong> — the trough buyers protected on the previous dip. The CHoCH is a candle that <strong>closes below</strong> that higher low for the first time. In a downtrend, it is the first close above the last lower high. The word 'first' matters: it is the initial break against the trend, not the third or fourth. Demand a body close, not a wick, exactly as you would for a BOS.",
        },
        {
          kind: "heading",
          text: "CHoCH versus BOS — the direction is everything",
        },
        {
          kind: "text",
          html: "A CHoCH and a BOS are the same mechanical event — price breaking a swing point — separated only by <strong>direction relative to the trend</strong>. A BOS breaks a swing <em>with</em> the trend and confirms it will continue. A CHoCH breaks a swing <em>against</em> the trend and warns it may be ending. If you read them together, you have a simple running commentary on any chart: BOS after BOS means the trend is healthy; the first CHoCH means the character has shifted and you stop looking for continuation entries.",
        },
        {
          kind: "list",
          items: [
            "<strong>In an uptrend</strong> — BOS = new higher high; CHoCH = first lower low breaking a higher low.",
            "<strong>In a downtrend</strong> — BOS = new lower low; CHoCH = first higher high breaking a lower high.",
            "<strong>The tell</strong> — a BOS keeps you in the trend; a CHoCH tells you to protect open trades and reassess.",
          ],
        },
        {
          kind: "heading",
          text: "A warning, not a reversal signal",
        },
        {
          kind: "text",
          html: "Here is the honest part most guides skip: a CHoCH is a <strong>warning, not a guarantee</strong>. Trends routinely dip, break a minor higher low, then resume. If you flip short on every first crack, you will get chopped up counter-trend. The correct response to a CHoCH is <strong>defensive first</strong>: tighten or trail your stop, take partial profit, and stop hunting for trend-continuation entries. Only after a <strong>second confirmation</strong> — such as a new opposing structure (a lower high followed by a fresh lower low) — should you consider actually trading the reversal.",
        },
        {
          kind: "heading",
          text: "How to use a CHoCH — protect first, then trade the confirmed turn",
        },
        {
          kind: "text",
          html: "Use the CHoCH in two stages. Stage one is <strong>defence</strong>: the instant the level fails, protect any open trend trade — move to breakeven, trail, or bank partial profit. Stage two is <strong>opportunity</strong>: if a full opposing structure then forms, you can trade the reversal with your risk defined against the new counter-trend swing. The example below walks through both stages with concrete numbers and proper position sizing.",
        },
        {
          kind: "example",
          title: "Acting on a CHoCH step by step (EUR/USD)",
          steps: [
            "You are long EUR/USD in an uptrend. The last defended higher low sits at <strong>1.0850</strong>, and your open trade's stop is currently at 1.0820.",
            "Price stalls, makes a lower high, then a bearish candle <strong>closes at 1.0838</strong> — below the 1.0850 higher low. That close is your CHoCH.",
            "You do not immediately flip short. First you <strong>protect</strong>: you move your stop up to 1.0845 to lock the long near breakeven, or take partial profit.",
            "You wait for confirmation. Price bounces to <strong>1.0872</strong> (a lower high) then breaks down again, closing below 1.0838 — now a lower high and a lower low: a new bearish structure.",
            "Only now do you consider a short: entry on the retest at <strong>1.0860</strong>, stop above the 1.0872 lower high at <strong>1.0890</strong> — a <strong>30-pip risk</strong>. On a €1,000 account risking <strong>1% (€10)</strong>, that sizes to about <strong>0.03 lots</strong>.",
            "Target the prior demand near <strong>1.0770</strong> (90 pips) — roughly <strong>3:1</strong> reward-to-risk: a reversal the CHoCH warned you about, but the second break confirmed.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with change of character",
          items: [
            "<strong>Treating a CHoCH as a confirmed reversal.</strong> It is the first crack, not the break. Flipping instantly on every CHoCH bleeds you counter-trend. Wait for a second, opposing structure.",
            "<strong>Ignoring it entirely.</strong> The opposite error — riding a winning trend straight through the first CHoCH and giving back all the profit. Use it at least to protect the trade.",
            "<strong>Counting a wick as the break.</strong> As with a BOS, demand a candle <em>close</em> beyond the swing, not a wick that pierces and snaps back.",
            "<strong>Reading it on too low a timeframe.</strong> A 1-minute CHoCH inside a strong daily uptrend is noise. Anchor the trend on a higher timeframe and read the CHoCH there.",
            "<strong>Forgetting which swing matters.</strong> The CHoCH is the break of the <em>last defended</em> higher low (or lower high), not any old level. Mark the swing that actually held the trend together.",
          ],
        },
        {
          kind: "key",
          text: "A change of character is the first structural break against the trend — an early warning to protect open trades and stop chasing continuation, not proof of a reversal. Wait for a second opposing structure before trading the turn.",
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
        "Learn how to trade breakouts from consolidation, judge breakout quality honestly, and manage entries, stops and targets around the level.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to identify a genuine breakout setup, choose an aggressive or conservative entry, place a logical stop back inside the range, and size the trade so a fake breakout stays small.",
      blocks: [
        {
          kind: "text",
          html: "A breakout occurs when price escapes a period of consolidation — a range, triangle or tight band — with <strong>force</strong>. The logic is simple: while price coils inside a range, orders build up on both sides of it. Once price clears a well-defined level, trapped traders on the wrong side are forced to exit, and momentum traders pile in on the right side. Those two flows together can fuel a fresh directional move.",
        },
        {
          kind: "text",
          html: "The key word is <strong>force</strong>. A breakout is not just price touching the edge of a range — it is price leaving the range and refusing to come back. That distinction is everything, because ranges spend most of their life faking traders out at the edges. A good breakout looks obviously different from those pokes: it is decisive, wide, and closes clear of the level. Learning to tell the two apart is most of the skill in breakout trading.",
        },
        {
          kind: "image",
          src: "/learn/price-action/09-breakout.png",
          alt: "Price breaking out of a tight consolidation range with a strong candle",
          caption:
            "Price coils in a tight range, then a strong wide candle closes clearly above the ceiling — a genuine breakout.",
        },
        {
          kind: "heading",
          text: "What a good breakout actually looks like",
        },
        {
          kind: "text",
          html: "Quality breakouts share a recognisable fingerprint. They come after a <strong>tight consolidation</strong>, not a loose sloppy one — the tighter the coil, the more explosive the release. They break with a <strong>strong, wide candle</strong> that closes clearly beyond the level, not a small indecisive one that just tags it. And context matters: a breakout in the direction of the <strong>higher-timeframe trend</strong> is far more reliable than one fighting it. A break that stalls the moment it clears the level, or breaks on a tiny candle, is exactly the kind that snaps back and traps you.",
        },
        {
          kind: "list",
          items: [
            "<strong>Tight coil</strong> — a narrow, well-defined range beats a wide messy one.",
            "<strong>Strong close</strong> — the breakout candle closes clearly beyond the level, not just wicks through it.",
            "<strong>Trend alignment</strong> — breaks with the higher-timeframe trend fail less often than counter-trend breaks.",
            "<strong>Volume or momentum</strong> — a genuine break usually arrives with visible expansion, not a quiet drift.",
          ],
        },
        {
          kind: "heading",
          text: "Two honest entries: aggressive and conservative",
        },
        {
          kind: "text",
          html: "There are two legitimate ways to enter, and each has a real trade-off. The <strong>aggressive entry</strong> is on the close of the breakout candle itself — you get in early but risk buying a fake break. The <strong>conservative entry</strong> is to wait for price to retest the broken level and hold, entering there with tighter risk — you get a better price and confirmation, but some strong breakouts run without ever retesting, and you miss them. Neither is \"correct\"; pick the one that fits your temperament and be consistent.",
        },
        {
          kind: "example",
          title: "Trading a range breakout step by step (EUR/USD)",
          steps: [
            "EUR/USD consolidates for hours in a tight range between a floor of <strong>1.0820</strong> and a ceiling of <strong>1.0850</strong> — a 30-pip band.",
            "A strong bullish candle expands and <strong>closes at 1.0858</strong> — clearly above the 1.0850 ceiling, not just a wick. That is your breakout.",
            "Aggressive plan: enter at <strong>1.0858</strong> on the close, stop back inside the range at <strong>1.0838</strong> (a <strong>20-pip risk</strong>), because a return inside means the break failed.",
            "Conservative plan: skip the break, wait for a pullback to retest 1.0850, enter on the hold at <strong>1.0852</strong>, stop tighter at <strong>1.0838</strong> (a 14-pip risk).",
            "Sizing: on a €1,000 account risking <strong>1% (€10)</strong>, the 20-pip aggressive stop sizes to about <strong>0.05 lots</strong>; the tighter retest stop lets you carry a slightly larger position for the same €10 risk.",
            "Target with a <strong>measured move</strong>: the range was 30 pips tall, so project 30 pips up from the break for a first target near <strong>1.0880</strong> — a clean, pre-defined objective either way.",
          ],
        },
        {
          kind: "heading",
          text: "Breakouts fail often — that is the whole risk",
        },
        {
          kind: "text",
          html: "Be honest with yourself: <strong>breakouts fail frequently</strong>. The fake breakout is common enough that it has its own module. This is not a reason to avoid them — it is the reason your <strong>stop and position size</strong> matter more here than almost anywhere else. A logical stop sits back inside the consolidation the breakout left, because a return there proves the break wrong. Size the trade so that being wrong costs you a small, planned amount, and a run of failed breakouts stays survivable.",
        },
        {
          kind: "mistakes",
          title: "Common mistakes with breakout trading",
          items: [
            "<strong>Entering on a wick, not a close.</strong> Price tags the level and you jump in, then it closes back inside. Wait for the candle to close beyond the level.",
            "<strong>Chasing an extended break.</strong> Buying far above the level after the move has already run puts your stop miles away and your reward-to-risk upside down.",
            "<strong>Trading loose ranges.</strong> Breakouts from wide, messy consolidations are far less reliable than those from tight coils. Wait for a clean range.",
            "<strong>Ignoring the higher timeframe.</strong> A breakout against a strong daily trend is fighting the current. Prefer breaks aligned with the bigger picture.",
            "<strong>No stop inside the range.</strong> Without a defined invalidation back inside the consolidation, a fake breakout can turn into a large, undefined loss.",
          ],
        },
        {
          kind: "key",
          text: "Trade breakouts that leave tight ranges with force and a strong close. Choose the aggressive break entry or the conservative retest, always place your stop back inside the range, and size small — because breakouts fail often.",
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
        "Trade pullbacks within an established trend to enter at better prices with clearly defined risk — and know when a pullback becomes a reversal.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to enter a trend on a pullback instead of chasing, use structure to define your risk, wait for confirmation at your level, and tell a healthy pullback apart from a failing trend.",
      blocks: [
        {
          kind: "text",
          html: "A pullback is a temporary counter-move within a trend — a dip in an uptrend or a bounce in a downtrend. Trading pullbacks is one of the highest-value habits in price action because it lets you join a trend at a <strong>better price</strong> and with a <strong>tighter stop</strong> than chasing the move at its extreme. Instead of buying the top of a rally and hoping, you wait for the market to come back to you.",
        },
        {
          kind: "text",
          html: "The difference this makes to your numbers is enormous. Chasing an extended move forces your stop far away, which either shrinks your position or widens your risk. Buying a pullback into a logical level puts your stop just beyond that level — often a fraction of the distance — which means the same trade idea can offer <strong>two or three times</strong> the reward-to-risk. Same direction, same trend, far better entry. That is the entire case for patience.",
        },
        {
          kind: "image",
          src: "/learn/price-action/10-pullback.png",
          alt: "Entering on a pullback to support within an uptrend",
          caption:
            "An uptrend rallies, pulls back to a prior support level, holds, then resumes — the pullback is the entry, not the top of the rally.",
        },
        {
          kind: "heading",
          text: "Where healthy pullbacks stop",
        },
        {
          kind: "text",
          html: "Pullbacks don't fall randomly — healthy ones stall at <strong>logical areas</strong> where buyers are waiting. The most common are a prior <strong>support or resistance level</strong>, a supply or demand zone, a previous swing point that flipped role, or a moving average many traders watch. When a pullback reaches one of these areas and shows the trend resuming, you have a defined place to enter and, crucially, a defined place to be wrong. A pullback that ignores every level and keeps going is telling you something.",
        },
        {
          kind: "list",
          items: [
            "<strong>Prior swing / support</strong> — the last higher low or a broken level that flipped to support.",
            "<strong>Supply or demand zone</strong> — an area price reacted strongly from before.",
            "<strong>Confluence</strong> — the best pullbacks land where two or more of these line up.",
            "<strong>Only with the trend</strong> — buy dips in an uptrend, sell rallies in a downtrend, never the reverse.",
          ],
        },
        {
          kind: "heading",
          text: "Wait for confirmation — don't catch a falling knife",
        },
        {
          kind: "text",
          html: "The biggest error is entering mid-pullback, before price reaches your level or shows any sign of turning. A pullback in progress is still moving against you; buying into it is catching a falling knife. The discipline is to <strong>let price come to your level</strong> and then wait for a sign the trend is resuming — a strong candle back in the trend direction, a rejection wick, or a small structure forming in your favour. Confirmation costs you a few pips of entry but saves you from the pullbacks that don't stop.",
        },
        {
          kind: "example",
          title: "Buying a pullback step by step",
          steps: [
            "EUR/USD is in a clear uptrend. A rally runs from 1.0800 to <strong>1.0900</strong>, then starts to pull back. You do not chase near 1.0900.",
            "You mark your level: the prior swing high at <strong>1.0850</strong> that price broke on the way up, which should now flip to support.",
            "Price dips into 1.0850 and prints a <strong>strong bullish rejection candle</strong> — the sign of the trend resuming. That is your confirmation.",
            "You enter at <strong>1.0860</strong> on the close of that candle, and place your stop just below the pullback's low at <strong>1.0835</strong> — a tight <strong>25-pip risk</strong>.",
            "Sizing: on a €1,000 account risking <strong>1% (€10)</strong>, a 25-pip stop sizes the position to roughly <strong>0.04 lots</strong> on EUR/USD — small enough that being wrong costs a planned €10.",
            "Your target is a new higher high beyond 1.0900, say <strong>1.0960</strong> — a 100-pip move for 25 pips of risk, roughly <strong>4:1</strong> reward-to-risk, all because you waited for the dip instead of chasing the rally.",
          ],
        },
        {
          kind: "heading",
          text: "When a pullback is really a reversal",
        },
        {
          kind: "text",
          html: "Here is the honest risk: not every pullback resumes. A pullback that <strong>breaks structure against you</strong> — closing below the last higher low in an uptrend — is no longer a pullback, it is a potential reversal, and your trade idea is invalid. Deep pullbacks that slice through the level without reacting are a warning that the trend is weakening. Respect your stop: the whole point of entering at a level is that the level either holds or it doesn't, and you exit cleanly if it doesn't.",
        },
        {
          kind: "mistakes",
          title: "Common mistakes with pullback trading",
          items: [
            "<strong>Entering mid-pullback.</strong> Buying while price is still falling toward your level is catching a knife. Wait for price to reach the level and confirm.",
            "<strong>Trading pullbacks against the trend.</strong> A 'pullback' is only valid with the trend. Buying a bounce in a downtrend is just a counter-trend trade in disguise.",
            "<strong>Moving the stop when the level breaks.</strong> If price closes through your higher low, the trade is invalid. Sliding the stop lower to 'give it room' just turns a small loss into a big one.",
            "<strong>Ignoring pullback depth.</strong> A pullback that blows past the last swing is a red flag the trend may be turning — not a deeper discount to load up on.",
            "<strong>No confirmation.</strong> Entering on the level alone, with no sign of the trend resuming, means you're guessing where the dip ends. Let price show you first.",
          ],
        },
        {
          kind: "key",
          text: "Pullbacks let you buy the dip or sell the rally with the trend — better price, tighter risk, same direction. Let price come to a logical level, wait for confirmation, and treat a break of structure against you as an immediate exit.",
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
        "Learn how broken levels flip role and how to trade the retest of a broken level as new support or resistance with defined, tighter risk.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to trade the retest of a broken level using the support-becomes-resistance principle, wait for the hold, size the trade with a tight stop, and accept when a clean retest never comes.",
      blocks: [
        {
          kind: "text",
          html: "When a level breaks, it often <strong>flips role</strong>: broken resistance can become new support, and broken support can become new resistance. The retest is the moment price returns to that broken level to test it from the other side. It is one of the highest-quality entries in all of price action, because it combines a confirmed break with a precise, low-risk place to enter.",
        },
        {
          kind: "text",
          html: "The retest solves the biggest problem with breakouts: <strong>where to enter without chasing</strong>. Instead of buying an extended breakout candle with a stop miles away, you let the break happen, wait for price to come back to the level, and enter only if the level holds in its new role. Your stop sits just on the far side of the level, so your risk is a fraction of what chasing the break would have cost — the same trade idea with far better numbers.",
        },
        {
          kind: "image",
          src: "/learn/price-action/11-retest.png",
          alt: "Broken resistance retested as new support before continuing higher",
          caption:
            "Old resistance is broken by a strong candle, price returns to retest it, the level holds as new support, and the move continues.",
        },
        {
          kind: "heading",
          text: "Why levels flip role",
        },
        {
          kind: "text",
          html: "The flip is driven by <strong>order flow and memory</strong>, not magic. Think about who is positioned around a broken resistance. Traders who sold at that resistance are now underwater and want out at breakeven — if price returns, their buying-to-close adds support. Breakout buyers who missed the initial move want a second chance and buy the retest. And traders who were already long defend their level. All three flows push in the same direction, which is exactly why a broken level so often holds when it's tested from the other side. This <strong>role reversal</strong> is the same mechanism behind ordinary support and resistance — the market remembers price.",
        },
        {
          kind: "heading",
          text: "Wait for the hold, then enter",
        },
        {
          kind: "text",
          html: "The discipline is patience. Rather than chasing the breakout, you wait for price to <strong>return to the broken level</strong> and show it holding — ideally with a rejection candle that closes back in the breakout direction. You enter on that confirmation and place your <strong>stop on the far side of the level</strong>, because price closing back through it means the flip has failed and your reason for the trade is gone. Done right, the retest gives you tighter risk than the initial break and a clean, objective invalidation.",
        },
        {
          kind: "example",
          title: "Trading a broken-resistance retest step by step (EUR/USD)",
          steps: [
            "EUR/USD has repeatedly failed at resistance of <strong>1.0900</strong>. A strong bullish candle finally breaks and <strong>closes at 1.0918</strong> — a confirmed break.",
            "You do not chase at 1.0918. You mark 1.0900 as the level that should now flip from resistance to <strong>support</strong>, and wait.",
            "Price pulls back over the next candles and dips into <strong>1.0902</strong>, right at the old level. You watch for it to hold.",
            "A bullish <strong>rejection candle</strong> forms at the level and closes back up at 1.0910 — the retest held. You enter at <strong>1.0912</strong> on that close.",
            "Your stop goes just below the level at <strong>1.0888</strong> — a tight <strong>24-pip risk</strong>. On a €1,000 account risking <strong>1% (€10)</strong>, that sizes to roughly <strong>0.04 lots</strong>.",
            "Target the next resistance or a measured move near <strong>1.0972</strong> (60 pips), giving roughly <strong>2.5:1</strong> reward-to-risk from a confirmed, low-risk entry — with one rule: a close back below 1.0888 and you're out.",
          ],
        },
        {
          kind: "heading",
          text: "Not every breakout offers a retest",
        },
        {
          kind: "text",
          html: "Be honest about the trade-off: <strong>strong moves sometimes run</strong> without ever looking back, and you will miss those waiting for a retest that never comes. That is fine — <strong>skipping a trade</strong> that never gives your setup is itself good discipline, not a failure. The retest is a quality-over-quantity approach: you take fewer trades, but each one has a confirmed break behind it and a tight, defined stop. Don't force an entry just because you're impatient for the pullback.",
        },
        {
          kind: "mistakes",
          title: "Common mistakes with the retest strategy",
          items: [
            "<strong>Entering before the hold.</strong> Buying as price falls back into the level, before it confirms, is guessing. Wait for a rejection candle that closes in your direction.",
            "<strong>Chasing when there's no retest.</strong> If a strong move runs without pulling back, jumping in late at the extreme abandons the whole point of the retest — a tight entry.",
            "<strong>Stop on the wrong side.</strong> Your stop belongs just beyond the level, because a close back through it means the flip failed. Placing it too tight inside the noise gets you stopped on a normal wick.",
            "<strong>Trading an unconfirmed break.</strong> A retest only matters after a genuine break — a candle close beyond the level, not a wick that pierced and snapped back.",
            "<strong>Forcing every level.</strong> Not every broken level flips cleanly. Weak, unclear levels give messy retests; favour the obvious levels many traders are watching.",
          ],
        },
        {
          kind: "key",
          text: "Broken resistance becomes support and broken support becomes resistance — the retest lets you trade that flip with a confirmed break and a tight stop just beyond the level. Wait for the hold, and accept that some strong moves simply won't offer one.",
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
      readingMinutes: 11,
      objective:
        "After this module you'll be able to tell a real breakout from a stop-run, avoid getting trapped, and trade the reversal that a failed break often produces.",
      blocks: [
        {
          kind: "text",
          html: "A fake breakout — also called a <strong>false break</strong> or <strong>stop-run</strong> — is when price pokes beyond an obvious level, triggers the traders who bought (or sold) the breakout and the stops resting there, then <strong>reverses violently back</strong> into the range. It is one of the most common and most expensive ways new traders lose money, precisely because it targets the most 'textbook' behaviour: buying a clean break of resistance.",
        },
        {
          kind: "text",
          html: "What makes fakeouts brutal is the psychology. The break looks exactly like the setup you were taught to trade — price clears the level, momentum spikes, it feels obvious. You enter, and within a candle or two price is back below the level and heading the other way, with your stop directly in the path of everyone else's. Understanding <strong>why</strong> this happens is what turns it from a recurring trap into an opportunity.",
        },
        {
          kind: "image",
          src: "/learn/price-action/12-fake-breakout.png",
          alt: "A false breakout spiking above a level then snapping back down",
          caption:
            "Price spikes through the level, runs the stops, then snaps violently back into the range.",
        },
        {
          kind: "heading",
          text: "Why fakeouts happen",
        },
        {
          kind: "text",
          html: "Resting <strong>stop orders cluster</strong> just beyond obvious levels — the stops of range traders sit above resistance, and breakout traders place their entry orders there too. That pool of orders is a magnet: a push through the level triggers them all at once, providing a burst of <strong>liquidity</strong> that larger participants can sell into (or buy from). Once that liquidity is absorbed and there are no more buyers left above the level, price has nowhere to go but back down — and it <strong>snaps back</strong>, leaving the breakout crowd trapped on the wrong side, forced to sell at a loss and adding fuel to the reversal.",
        },
        {
          kind: "heading",
          text: "How to protect yourself — and profit",
        },
        {
          kind: "text",
          html: "The primary defence is to demand a <strong>candle close</strong> beyond the level, not a wick. A wick through the level that closes back inside is the classic fakeout footprint; a strong close beyond it, ideally with follow-through, is a far more reliable break. Be especially suspicious of breaks on <strong>low conviction</strong> or after a long, tired run into the level — those are the ones most likely to fail.",
        },
        {
          kind: "text",
          html: "The failure is also a <strong>tradeable setup</strong> in its own right. When price fakes out beyond a level and then <strong>reclaims it with force</strong> — closing back inside the range — you can enter in the reversal direction with a tight <strong>stop beyond the fakeout wick</strong>, targeting the opposite side of the range. Because the stop is small (just past the extreme) and the target is far (the other edge), these trades often carry excellent reward-to-risk.",
        },
        {
          kind: "example",
          title: "Trading a failed breakout step by step",
          steps: [
            "EUR/USD has clear resistance at <strong>1.0900</strong>, tested three times in a tight range with support at <strong>1.0840</strong>.",
            "Price spikes up to <strong>1.0915</strong>, running the stops above 1.0900 — breakout buyers pile in. But the candle <strong>closes back at 1.0895</strong>, below resistance. That's the fakeout footprint.",
            "You wait for the reclaim: the next candle closes firmly back inside at <strong>1.0890</strong>. Now you <strong>sell</strong>, betting the trapped breakout buyers will fuel a drop.",
            "Entry <strong>1.0888</strong>, stop just above the fakeout wick at <strong>1.0920</strong> — a 32-pip risk. Target the opposite edge of the range at <strong>1.0845</strong>, about 43 pips, plus room if it breaks — roughly <strong>1.3–2R</strong> to the first target.",
            "Your invalidation is explicit: <strong>if price closes back above 1.0900</strong>, the break was real after all and you're out. The trap only works while price stays trapped below.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with fake breakouts",
          items: [
            "<strong>Reacting to the wick.</strong> Entering the instant price pierces the level, before any candle has closed, is exactly the behaviour fakeouts are designed to punish. Wait for the close.",
            "<strong>Chasing tired breaks.</strong> Buying a break of resistance after a long rally straight into it, on fading momentum, is low-quality — that's prime fakeout territory.",
            "<strong>No plan for the snap-back.</strong> If you're long the breakout and price closes back inside, that is your signal to exit, not to 'give it room'. Trapped traders who hope lose the most.",
            "<strong>Fading every break as a fake.</strong> Not all breaks fail — strong, high-conviction breaks with follow-through are real. Only fade a break once it has actually reclaimed the level, not on assumption.",
            "<strong>Stop on the wrong side of the wick.</strong> Placing your reversal stop inside the fakeout range means the next probe stops you out. Put it beyond the fakeout extreme.",
          ],
        },
        {
          kind: "text",
          html: "The honest takeaway is that a level everyone can see is a level everyone's stops sit behind — which is exactly why price so often <strong>hunts it before the real move</strong>. Once you stop trusting the first poke and start waiting for the close and the reclaim, the fakeout stops being the thing that traps you and becomes one of your cleaner setups.",
        },
        {
          kind: "key",
          text: "A break that snaps back into the range is a trap — demand a candle close before trusting any breakout, and when a break fails and reclaims the level, the trapped traders often fuel a strong move the other way.",
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
      readingMinutes: 11,
      objective:
        "After this module you'll be able to identify a clean range, fade its edges on rejection with defined risk, and switch to breakout thinking the moment it breaks.",
      blocks: [
        {
          kind: "text",
          html: "A range is a market moving <strong>sideways between two levels</strong> — a fairly flat range high (resistance) and a fairly flat range low (support). Neither buyers nor sellers are in control, so price bounces back and forth between the ceiling and the floor. This is not a broken or 'boring' market to be avoided — markets spend a large share of their time ranging, so a trader who can only trade trends is sitting on their hands most of the year.",
        },
        {
          kind: "text",
          html: "The logic of a range is the mirror image of a trend. In a trend you <strong>buy strength and sell weakness</strong>; in a range you do the opposite — you <strong>sell into strength</strong> at the top and <strong>buy into weakness</strong> at the bottom, betting that price will revert back toward the middle. Getting this backwards — buying breakouts inside a range — is one of the fastest ways to get chopped up.",
        },
        {
          kind: "image",
          src: "/learn/price-action/13-range-trading.png",
          alt: "Trading between clean horizontal range support and resistance",
          caption:
            "Buy near support, sell near resistance — and respect the edges when they break.",
        },
        {
          kind: "heading",
          text: "The basic range playbook",
        },
        {
          kind: "text",
          html: "The core idea is to <strong>sell near the top</strong> of the range and <strong>buy near the bottom</strong>, fading each move back toward the middle. The single most important discipline is to trade only at the <strong>edges</strong>. The middle of a range is no-man's-land: there is no clear level to lean on, no obvious place for a stop, and price can go either way. Wait for price to reach an edge and, crucially, to <strong>show rejection</strong> — a wick that pierces the level and closes back inside — before you enter.",
        },
        {
          kind: "heading",
          text: "Entry, stop and the breakout risk",
        },
        {
          kind: "text",
          html: "Enter near an edge on a rejection signal and place your <strong>stop just outside the range</strong>. This is what makes range trading efficient: because your entry is right at the level, your stop is tight, and your target — the opposite edge — is far away, giving a naturally good reward-to-risk. A <strong>close beyond the edge</strong>, by contrast, is not noise to ride out; it is the signal that the range is breaking and you should be out. Every range eventually breaks, so never fight a decisive breakout.",
        },
        {
          kind: "example",
          title: "Fading the top of a range step by step",
          steps: [
            "Gold has been ranging for two days between support at <strong>$2,320</strong> and resistance at <strong>$2,360</strong> — a clean $40 range.",
            "Price rallies back up to <strong>$2,360</strong> and prints a bearish rejection candle: a wick above 2,360 that closes back at <strong>$2,356</strong>.",
            "You <strong>sell</strong> the rejection at $2,356, with a stop just above the range high at <strong>$2,366</strong> — a $10 risk.",
            "Your first target is the opposite edge (support) at <strong>$2,322</strong>, about $34 away — roughly <strong>3.4R</strong>. Many traders take partial profit at the range midpoint (~$2,340) and trail the rest.",
            "Your rule is explicit: <strong>if price closes above $2,360</strong>, the range is breaking, your short is invalid, and you're out — no hoping it comes back.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with range trading",
          items: [
            "<strong>Trading the middle.</strong> Entering in the centre of the range gives you no level to lean on and no logical stop. Only the edges offer an edge.",
            "<strong>Entering without rejection.</strong> Assuming an edge will hold and selling into it before price rejects means you're often short right as the range breaks up. Wait for the wick and close-back-inside.",
            "<strong>Stops too tight against the edge.</strong> Ranges are noisy and edges get probed. A stop one tick beyond the level gets picked off constantly — give it a little room just outside the range, not on top of it.",
            "<strong>Fighting the breakout.</strong> When price closes decisively outside and keeps going, re-entering the fade 'because it's still a range' turns a small loss into a large one. The range is over — switch to breakout thinking.",
            "<strong>Forcing a range onto a trend.</strong> Calling a shallow trend pullback a 'range' and fading it means selling in an uptrend. Confirm the highs and lows are genuinely flat first.",
          ],
        },
        {
          kind: "text",
          html: "Range trading is high-probability but low-glory: many small, clean wins between the edges, punctuated by the occasional break that you must respect instantly. The traders who do well in ranges are the ones who are <strong>disciplined about the edges</strong> and quick to admit when the range is finished.",
        },
        {
          kind: "key",
          text: "Fade the edges of a range on rejection with a stop just outside it — but the moment price closes decisively beyond an edge, the range is over and you switch to breakout thinking.",
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
      readingMinutes: 11,
      objective:
        "After this module you'll be able to identify a confirmed reversal using a change of character and a structure flip — rather than guessing tops and bottoms — and enter on the first pullback with defined risk.",
      blocks: [
        {
          kind: "text",
          html: "A reversal is a <strong>change in the overall trend direction</strong> — a downtrend turning into an uptrend, or the reverse. Called correctly, reversals are some of the most rewarding trades on the chart because you enter right as a new trend begins, near the extreme. Called badly, they are where accounts quietly bleed out, because traders <strong>try to pick tops and bottoms</strong> on hope, adding to losers as price keeps trending against them.",
        },
        {
          kind: "text",
          html: "The difference between the two outcomes is one word: <strong>confirmation</strong>. Amateurs predict reversals — 'this has fallen too far, it must bounce'. Professionals react to them — 'the structure has actually flipped, now I can trade the new direction'. This module is about turning reversal trading from a guess into a rules-based sequence you can wait for.",
        },
        {
          kind: "image",
          src: "/learn/price-action/14-reversal.png",
          alt: "A downtrend reversing to an uptrend after a break of structure",
          caption:
            "A downtrend gives way to an uptrend only once structure breaks and rebuilds the other way.",
        },
        {
          kind: "heading",
          text: "How to confirm a reversal with structure",
        },
        {
          kind: "text",
          html: "The disciplined way to trade reversals uses structure, in two stages. First look for a <strong>change of character</strong> (CHoCH) — the first break against the prevailing trend, the first time price does something the old trend shouldn't allow (for a downtrend, the first higher high). A CHoCH is a warning, not a green light. Then wait for price to <strong>build the opposite structure</strong>: after a bottom, that means a higher high followed by a higher low. Only when structure has genuinely flipped — old trend broken, new trend confirmed — do you have a real reversal.",
        },
        {
          kind: "text",
          html: "This two-stage rule is what protects you from the endless 'it looks like a bottom' traps. A single strong candle against the trend is <strong>not a reversal</strong> — downtrends are full of violent bounces that fail. You are waiting for the market to break its own structure and then confirm the new one, which filters out the vast majority of false turns.",
        },
        {
          kind: "heading",
          text: "Entry, stop and target",
        },
        {
          kind: "text",
          html: "The safer entry is on the <strong>first pullback</strong> after structure flips — for example the new higher low that forms after a bottom — with a stop just below that low. This lets the market prove the turn before you commit a cent. Because reversals fail more often than trend-continuation trades, keep <strong>size modest</strong> and accept the trade-off: waiting for confirmation means you give up the exact low or high in exchange for far better odds.",
        },
        {
          kind: "example",
          title: "Trading a confirmed bottom step by step",
          steps: [
            "GBP/USD has been in a downtrend, printing lower highs and lower lows. The last lower low is at <strong>1.2400</strong>; the last lower high before it was <strong>1.2520</strong>.",
            "<strong>Change of character:</strong> price rallies off 1.2400 and, for the first time in the move, closes <strong>above 1.2520</strong> — breaking the last lower high. That's the CHoCH. You do not buy yet.",
            "<strong>Structure flip:</strong> price pulls back and forms a higher low at <strong>1.2470</strong> (above the 1.2400 bottom), then pushes to a higher high. Structure is now up.",
            "<strong>Entry:</strong> you buy the hold of that higher low, entering near <strong>1.2485</strong> as it turns back up.",
            "<strong>Stop & target:</strong> stop below the higher low at <strong>1.2450</strong> (35-pip risk); first target the next resistance at <strong>1.2590</strong>, about 105 pips — roughly <strong>3R</strong>. If 1.2450 breaks, the reversal has failed and you're out cheaply.",
          ],
        },
        {
          kind: "mistakes",
          title: "Common mistakes with reversals",
          items: [
            "<strong>Shorting strength or buying weakness on hope.</strong> 'It's gone too far' is not a signal. A strong trend can run far past what looks reasonable — you need structure to break first.",
            "<strong>Treating one candle as a reversal.</strong> A single big counter-trend candle is a bounce until structure confirms. Trends are full of them, and most fail.",
            "<strong>Skipping the pullback.</strong> Entering on the CHoCH breakout itself, at the extreme, gives you a wide stop and worse odds. Wait for the higher low (or lower high) to form.",
            "<strong>Sizing reversals like trend trades.</strong> Reversal calls are wrong more often, so full size magnifies the extra losses. Keep them modest until you've proven the skill.",
            "<strong>Averaging down.</strong> Adding to a losing counter-trend position because you're 'sure' it will turn is the single fastest way to turn a small loss into a catastrophic one.",
          ],
        },
        {
          kind: "text",
          html: "The honest truth about reversals is that they demand more patience than any other setup and still fail more often. That's not a reason to avoid them — it's a reason to <strong>wait for the structure</strong> and keep risk small. A confirmed reversal caught on the first pullback is a high-reward trade; a guessed reversal is just a bet against the market's own evidence.",
        },
        {
          kind: "key",
          text: "Reversals are confirmed by structure, not predicted by hope — wait for a change of character, then a genuine structure flip, then enter on the first pullback with a small, defined risk.",
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
      readingMinutes: 10,
      objective:
        "After this module you'll be able to use a higher timeframe to set your bias and a lower timeframe to time entries, and to spot the timeframe conflicts that produce most low-quality trades.",
      blocks: [
        {
          kind: "text",
          html: "Multi-timeframe analysis means reading the <strong>same market on more than one timeframe</strong> at once. A single chart only ever tells you part of the story: a five-minute chart ripping higher can be a tiny bounce inside a daily downtrend. The principle that fixes this is simple and non-negotiable — use the <strong>higher timeframe for direction</strong> and the <strong>lower timeframe for entry</strong>. One decides which way you're allowed to trade; the other decides exactly when to pull the trigger.",
        },
        {
          kind: "text",
          html: "Think of it like <strong>zooming a map</strong>. The higher timeframe is the country view: it tells you the trend everyone is reacting to and where the big levels sit. The lower timeframe is the street view: it shows the precise turn where you can enter with a tight stop. Traders who skip the country view get lost in noise; traders who never zoom in enter sloppily and pay for it with a wide stop.",
        },
        {
          kind: "image",
          src: "/learn/price-action/15-mtf.png",
          alt: "Higher timeframe bias zone with a lower timeframe entry",
          caption:
            "The higher timeframe marks the bias zone; the lower timeframe times the entry inside it.",
        },
        {
          kind: "heading",
          text: "A practical three-timeframe framework",
        },
        {
          kind: "text",
          html: "You don't need dozens of charts. A clean routine uses <strong>three related timeframes</strong>, each with one job. A common set is daily / 1-hour / 5-minute, or 4-hour / 15-minute / 3-minute — the exact numbers matter less than keeping them roughly a 4x–6x step apart and using them the same way every time.",
        },
        {
          kind: "list",
          items: [
            "<strong>Higher timeframe (bias):</strong> establish the trend, mark the key levels and supply/demand zones. This is where you decide 'buys only' or 'sells only'.",
            "<strong>Trading timeframe (setup):</strong> locate the actual setup within that bias — a pullback, a retest, a range edge lining up with the higher-timeframe zone.",
            "<strong>Lower timeframe (entry):</strong> fine-tune the entry and tighten the stop, using a candle close or rejection to trigger with precision.",
          ],
        },
        {
          kind: "example",
          title: "Aligning three timeframes on one trade",
          steps: [
            "<strong>Higher timeframe (daily):</strong> EUR/USD is in a clear uptrend — higher highs and higher lows. Bias is <strong>buys only</strong>. You mark a demand zone at <strong>1.0800–1.0820</strong> where the last rally started.",
            "<strong>Trading timeframe (1-hour):</strong> Price pulls back into that 1.0800–1.0820 zone. Now the setup is defined — a pullback into higher-timeframe demand, in line with the daily bias.",
            "<strong>Lower timeframe (5-minute):</strong> Inside the zone you wait. A bullish engulfing candle closes back up through <strong>1.0815</strong> — that is your trigger.",
            "<strong>Entry & stop:</strong> You enter at <strong>1.0818</strong> with a stop just below the zone at <strong>1.0795</strong> — a tight 23-pip risk you could only get by zooming in.",
            "<strong>Target:</strong> The prior daily swing high at <strong>1.0910</strong>, over 90 pips away — roughly <strong>4R</strong>. The higher timeframe justified the trade; the lower timeframe made the risk small.",
          ],
        },
        {
          kind: "heading",
          text: "Timeframe conflict: the trap to avoid",
        },
        {
          kind: "text",
          html: "The most common multi-timeframe mistake is a <strong>timeframe conflict</strong> — going long on a five-minute breakout while the daily chart is in a clear downtrend. The lower timeframe looks bullish, so you buy; then the dominant higher-timeframe trend reasserts itself and stops you out. Aligning your timeframes so they point the same way filters out a large share of low-quality trades and keeps you on the right side of the bigger move.",
        },
        {
          kind: "text",
          html: "When timeframes disagree, the honest answer is usually <strong>no trade</strong>. You are not obliged to force a setup out of a chart that is arguing with itself. The best multi-timeframe trades are the ones where all three views quietly agree — bias, setup and trigger all pointing the same direction.",
        },
        {
          kind: "mistakes",
          title: "Common mistakes with multiple timeframes",
          items: [
            "<strong>Letting the low timeframe set direction.</strong> Entering because the 5-minute looks strong while the daily trends the other way is backwards — the big timeframe always wins the argument.",
            "<strong>Using too many timeframes.</strong> Stacking six charts leads to <strong>analysis paralysis</strong> and contradictory signals. Two or three is plenty; more just gives you an excuse to never pull the trigger.",
            "<strong>Changing your timeframes trade to trade.</strong> Switching sets depending on mood destroys consistency. Fix your set and use it the same way every time.",
            "<strong>Zooming in to justify a bad idea.</strong> Dropping to a lower timeframe until you find a candle that supports the trade you already wanted is not analysis — it's confirmation bias.",
            "<strong>Ignoring the higher-timeframe level.</strong> A great lower-timeframe trigger in the middle of nowhere is still a bad trade. The trigger only counts when it lands at a higher-timeframe level or zone.",
          ],
        },
        {
          kind: "key",
          text: "Let the higher timeframe decide direction and mark the level; let the lower timeframe decide timing and tighten the stop — never the other way around. When the timeframes disagree, stand aside.",
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
      readingMinutes: 11,
      objective:
        "After this module you'll be able to write a simple, repeatable price action trading plan, run every trade through the same checklist, and size positions from your stop instead of your emotions.",
      blocks: [
        {
          kind: "text",
          html: "Everything in this course — structure, levels, breakouts, pullbacks, fakeouts, ranges, reversals, timeframes — is scattered knowledge until you <strong>connect it into one process</strong>. A trading plan is that process written down: a fixed set of rules telling you what to trade, when to enter, where to exit, and how much to risk. Its whole job is to remove improvisation at the exact moment your money is on the line and your judgement is worst — when price is moving fast and your pulse is up.",
        },
        {
          kind: "text",
          html: "Beginners lose not because they lack setups but because they <strong>trade differently every time</strong>: bigger size after a loss, no stop when it 'looks obvious', chasing an entry that already ran. A written plan converts trading from a series of one-off gut decisions into a repeatable experiment you can measure and improve. This final module is the recap that ties the whole course together into that plan.",
        },
        {
          kind: "image",
          src: "/learn/price-action/16-plan.png",
          alt: "A recap chart showing structure, level, entry and stop",
          caption:
            "The four things a plan pins down: structure, level, entry, and stop.",
        },
        {
          kind: "heading",
          text: "The five-step checklist",
        },
        {
          kind: "text",
          html: "Run <strong>every potential trade</strong> through the same five questions, in order. If any step fails, there is no trade — you do not skip ahead. This is deliberately boring: the consistency is the edge, not the cleverness.",
        },
        {
          kind: "list",
          items: [
            "<strong>Bias</strong> — what is the higher-timeframe structure? Up, down, or range? This decides whether you are hunting buys, sells, or standing aside.",
            "<strong>Level</strong> — is price at a meaningful level, supply/demand zone, or structural swing point? No level, no trade.",
            "<strong>Setup</strong> — does a defined setup you know appear here (breakout, pullback, retest, range edge, confirmed reversal)?",
            "<strong>Trigger</strong> — is there a real confirmation to enter, such as a candle close or a rejection wick, rather than a hope that it 'should' turn?",
            "<strong>Risk</strong> — where exactly is the stop, where is the target, and does the reward justify the risk (aim for at least 1.5–2R)?",
          ],
        },
        {
          kind: "heading",
          text: "Sizing from the stop, not the other way around",
        },
        {
          kind: "text",
          html: "The single rule that keeps beginners alive is to <strong>risk a small fixed percentage</strong> of the account per trade — commonly 1%. You never decide 'how many lots feels right'. You decide your stop from the chart, then let that distance dictate the size so that being wrong always costs the same small amount. Position size is an output of your stop, never an input.",
        },
        {
          kind: "example",
          title: "Running the checklist on one live trade",
          steps: [
            "<strong>Bias:</strong> On the 4-hour, GBP/USD prints higher highs and higher lows — a clean uptrend. You only look for buys.",
            "<strong>Level:</strong> Price pulls back to a prior swing high that flipped to support at <strong>1.2700</strong> — a meaningful structural level, not mid-air.",
            "<strong>Setup:</strong> This is a pullback-to-support in an uptrend, a setup you know and trust.",
            "<strong>Trigger:</strong> On the 15-minute you get a bullish rejection candle that closes back above 1.2700. You enter at <strong>1.2710</strong>.",
            "<strong>Risk:</strong> Stop goes below the pullback low at <strong>1.2680</strong> — a 30-pip risk. Target is the recent swing high at <strong>1.2800</strong>, 90 pips away, so roughly <strong>3R</strong>.",
            "Sizing: account <strong>€5,000</strong>, risk 1% = €50. A 30-pip stop means you size so 30 pips costs €50 — about <strong>0.16 lots</strong>. If 1.2680 breaks you lose €50 and no more; if 1.2800 hits you make roughly €150.",
          ],
        },
        {
          kind: "text",
          html: "Notice that not one decision in that trade was improvised. The bias, the level, the setup, the trigger, the stop and the size were all <strong>decided by rules</strong> before a single euro was committed. That is what a plan buys you: freedom from having to be brilliant in the moment.",
        },
        {
          kind: "heading",
          text: "Making the plan stick",
        },
        {
          kind: "text",
          html: "A plan you don't follow is worthless. Keep a <strong>trading journal</strong> of every trade — a screenshot, the setup name, the outcome, and one honest line: did I follow my rules? Over time the journal, not your memory, tells you which setups actually pay and which you should cut. Progress comes from refining one clear process across many trades, not from swapping strategy every week because the last three lost.",
        },
        {
          kind: "mistakes",
          title: "Common mistakes with trading plans",
          items: [
            "<strong>Not writing it down.</strong> A plan 'in your head' bends under pressure. If it isn't written, it isn't a plan — it's a mood.",
            "<strong>Sizing by feeling.</strong> Picking lot size before knowing the stop, or going bigger to 'win it back', is how accounts blow up in a single afternoon. Fixed percent, sized from the stop, every time.",
            "<strong>Skipping checklist steps.</strong> Taking a trade with a great setup but no clear invalidation, or entering with no trigger because you're impatient, breaks the whole process.",
            "<strong>Overcomplicating it.</strong> A five-line plan you follow beats a twenty-page plan you ignore. Start simple and only add rules the journal proves you need.",
            "<strong>Judging the plan on one trade.</strong> Any good plan loses regularly. You measure it over dozens of trades, not by whether the last one worked.",
          ],
        },
        {
          kind: "text",
          html: "Finally, stay honest about the limits. <strong>No setup wins every time</strong>, drawdowns are normal, and consistency comes from discipline, patience and protecting capital — not from predicting the future. The market owes you nothing; the plan just makes sure that when you're wrong it's cheap, and when you're right it counts.",
        },
        {
          kind: "key",
          text: "A written plan plus strict, stop-based risk management beats any single setup. Run every trade through the same checklist and size from your stop — the repeatable process is the real edge.",
        },
      ],
    },
  ],
};
