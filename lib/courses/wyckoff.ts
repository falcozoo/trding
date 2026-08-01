import type { Course } from "../courses";

export const wyckoffCourse: Course = {
  id: "wyckoff",
  title: "The Wyckoff Method",
  tagline: "Read accumulation and distribution like the pros.",
  description:
    "Master the Wyckoff method: understand the composite operator, the three laws of supply and demand, cause and effect and effort versus result, read accumulation and distribution ranges, and spot springs and upthrusts to time your entries.",
  level: "advanced",
  accent: "amber",
  modules: [
    /* ============================================================ */
    /* 1. Introduction to the Wyckoff Method                        */
    /* ============================================================ */
    {
      slug: "introduction-wyckoff",
      title: "Introduction to the Wyckoff Method",
      summary:
        "What the Wyckoff method is, where it came from, and how it frames markets as a repeating cycle of accumulation, markup, distribution and markdown.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to explain what the Wyckoff method is and describe the four-phase market cycle it is built around.",
      blocks: [
        {
          kind: "text",
          html: "The Wyckoff method is a framework for reading price and volume together to judge where the balance of <strong>supply and demand</strong> is shifting. Developed by Richard Wyckoff in the early twentieth century, it treats the market as a cycle that repeats across timeframes rather than a series of random moves.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/01-intro.png",
          alt: "Accumulation to markup Wyckoff schematic",
          caption:
            "The classic cycle: accumulation, markup, distribution, markdown — then repeat.",
        },
        {
          kind: "heading",
          text: "The four-phase cycle",
        },
        {
          kind: "text",
          html: "Wyckoff described price as moving through four repeating stages. Large operators <strong>accumulate</strong> quietly at low prices, drive a <strong>markup</strong> as demand takes over, then <strong>distribute</strong> their holdings near highs before a <strong>markdown</strong> carries price back down. The cycle then begins again at a new level.",
        },
        {
          kind: "list",
          items: [
            "Accumulation: a sideways range where buying absorbs supply.",
            "Markup: an uptrend as demand overpowers supply.",
            "Distribution: a sideways range where holdings are sold into strength.",
            "Markdown: a downtrend as supply overpowers demand.",
          ],
        },
        {
          kind: "heading",
          text: "Why the cycle exists",
        },
        {
          kind: "text",
          html: "The cycle exists because <strong>large positions cannot be built or unwound instantly</strong>. Someone who wants to buy a huge amount cannot simply lift every offer without spiking the price against themselves; they must buy patiently while sellers are still willing to hand over stock cheaply. That patient buying is accumulation. The same constraint in reverse — you cannot dump a huge position into a thin market without crashing it — is what forces distribution to happen slowly, sideways, near the highs. Wyckoff read the sideways ranges as the <strong>real work</strong> and the trends as the payoff.",
        },
        {
          kind: "heading",
          text: "How to spot which phase you are in",
        },
        {
          kind: "text",
          html: "The fastest orientation is to ask what came <strong>before</strong> the current sideways action. A range that follows a long decline and forms near obvious lows is a candidate for <strong>accumulation</strong>; a range that follows a long rally and forms near highs is a candidate for <strong>distribution</strong>. Then read volume: absorption near the lows (heavy selling that fails to push price lower) hints at accumulation, while stalling rallies near the highs (buying that fails to make new highs) hint at distribution. The phase is a hypothesis you keep testing, not a label you stamp once.",
        },
        {
          kind: "heading",
          text: "How to use the cycle in practice",
        },
        {
          kind: "text",
          html: "You do not trade the cycle by predicting it — you trade by <strong>positioning with it once it confirms</strong>. In accumulation you look for buys only after a sign of strength; in distribution you look for shorts only after a sign of weakness. The cycle gives you a bias and a place to be patient. The individual events inside each phase — springs, upthrusts, tests — give you the actual entries, and every one of them still needs a stop.",
        },
        {
          kind: "example",
          title: "Reading the cycle on a fresh chart",
          steps: [
            "On the daily chart of a stock you see a long decline into <strong>€18.00</strong>, then six weeks of sideways chop between €18.00 and €20.00. The prior downtrend plus the low location makes this a <strong>candidate accumulation</strong> range.",
            "You check volume: the dips to €18.00 come on <strong>shrinking volume</strong> while the last dip barely undercut the low and snapped back. That absorption tells you sellers are running out — the phase read strengthens.",
            "A wide, high-volume rally then breaks up through €20.00 to €20.60 — a <strong>sign of strength</strong> signalling the markup may be starting. You do not chase it.",
            "You wait for the pullback. Price eases back to <strong>€20.10</strong> and holds above the old range top on light volume — a higher low. You buy there, entry <strong>€20.10</strong>, stop under the pullback low at <strong>€19.60</strong> (risk €0.50 per share).",
            "Account <strong>€1,000</strong>, risking <strong>1% = €10</strong>. With €0.50 risk per share you buy about <strong>20 shares</strong> (€402 notional). A move back toward the cause-based target near €22.00 would be roughly <strong>3.8:1</strong>.",
            "One rule: a <strong>daily close back below €19.60</strong> means the markup read was wrong and you are out — the cycle gave the bias, the stop keeps being wrong cheap.",
          ],
        },
        {
          kind: "key",
          text: "Wyckoff frames the market as a repeating cycle — accumulation, markup, distribution, markdown — driven by the balance between supply and demand.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with the Wyckoff cycle",
          items: [
            "<strong>Forcing every range into a phase.</strong> Plenty of sideways action is just noise that breaks either way. If the prior trend and the volume behaviour don't line up, there is no clean phase — leave it alone.",
            "<strong>Trading the phase before it confirms.</strong> Buying inside a 'looks-like-accumulation' range before any sign of strength is guessing. Wait for the markup to actually begin.",
            "<strong>Treating the tidy schematic as reality.</strong> The four-phase diagram is idealised. Real charts skip steps, extend for months, and fake you out — the cycle is a lens, not a template price obeys.",
            "<strong>Confusing distribution with re-accumulation.</strong> A range near highs can resolve up just as easily as down. Never short a 'top' until weakness is confirmed.",
            "<strong>Dropping stops because the story feels obvious.</strong> A convincing cycle read does not remove risk. Every entry still needs a defined level where you are wrong and a small position size.",
          ],
        },
        {
          kind: "text",
          html: "Across this course we build from the underlying logic — the composite operator and the three laws — up to reading full ranges and timing entries with springs and upthrusts. No phase resolves the same way every time, so <strong>risk management</strong> stays essential throughout.",
        },
      ],
    },

    /* ============================================================ */
    /* 2. The Composite Operator                                    */
    /* ============================================================ */
    {
      slug: "composite-operator",
      title: "The Composite Operator",
      summary:
        "The mental model at the heart of Wyckoff — a single imaginary operator who accumulates low, marks up, distributes high and marks down.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to use the composite operator as a lens for interpreting why a range behaves the way it does.",
      blocks: [
        {
          kind: "text",
          html: "Wyckoff suggested imagining that all the large, informed money in a market acts as a single <strong>composite operator</strong>. This is a mental model, not a literal conspiracy — but thinking this way helps you interpret ranges as deliberate campaigns rather than noise.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/02-composite-operator.png",
          alt: "One composite operator buying lows and selling highs",
          caption:
            "The composite operator: a single lens for the collective behaviour of large money.",
        },
        {
          kind: "heading",
          text: "How the operator behaves",
        },
        {
          kind: "text",
          html: "The composite operator wants to <strong>buy low and sell high</strong> in size. Because large orders move price, they cannot simply buy everything at once — they must accumulate patiently in a range where the public is fearful, then distribute into a range where the public is greedy.",
        },
        {
          kind: "text",
          html: "This is why ranges matter so much in Wyckoff. A sideways market is where a big position is <strong>quietly built or unloaded</strong> without alarming the crowd. Sharp shakeouts and false breaks are read as the operator absorbing supply or triggering stops before the real move.",
        },
        {
          kind: "list",
          items: [
            "Accumulate cheaply while sentiment is negative.",
            "Mark price up once enough supply has been absorbed.",
            "Distribute into strength while sentiment is euphoric.",
            "Mark price down once holdings are gone.",
          ],
        },
        {
          kind: "heading",
          text: "How to spot the operator's footprints",
        },
        {
          kind: "text",
          html: "You never see the operator directly, but the campaign leaves <strong>tells on the chart</strong>. Sharp shakeouts that immediately reverse, high-volume down-bars that fail to make new lows, and rallies that meet a wall of selling at the same price again and again are all footprints of large hands working. The key question to ask at every suspicious move is simple: <strong>who benefits</strong>? A stop-run below support that snaps back benefits a buyer absorbing panic; a spike to new highs that fails benefits a seller unloading into greed.",
        },
        {
          kind: "heading",
          text: "How to use the lens without abusing it",
        },
        {
          kind: "text",
          html: "The operator model is useful when it makes you <strong>patient and structured</strong> — waiting for the campaign to reveal itself before you act. It is dangerous when it turns into a story you cannot falsify, where every move 'proves' the operator is doing something. Keep the lens honest by always pairing it with a <strong>defined invalidation</strong>: if price does X, the campaign read is wrong and you exit. The model should sharpen your reading, never replace your stop.",
        },
        {
          kind: "example",
          title: "Using the operator lens to interpret a shakeout",
          steps: [
            "GBP/USD has chopped sideways for three weeks between <strong>1.2600</strong> support and 1.2750 resistance after a long decline. You suspect an operator is accumulating.",
            "Price suddenly stabs down to <strong>1.2560</strong> — 40 pips below support — on a spike of volume, then closes the day back at 1.2620, inside the range. You ask who benefits: a big buyer just absorbed every panic sell below support.",
            "You wait for a low-volume <strong>test</strong>. Two days later price dips to 1.2595 on thin volume and holds — supply is gone. You enter long at <strong>1.2615</strong>.",
            "Stop goes below the shakeout low at <strong>1.2545</strong> — if price returns there the operator read was wrong. Risk = <strong>70 pips</strong>.",
            "Account <strong>€1,000</strong>, risk <strong>1% = €10</strong>. A 70-pip stop means about <strong>0.014 lots</strong> so a full stop costs ~€10. Target the range top and beyond near 1.2800, roughly <strong>2.6:1</strong>.",
            "Discipline: a <strong>close back under 1.2545</strong> and you are out, no story about 'the operator shaking harder' allowed to keep you in.",
          ],
        },
        {
          kind: "key",
          text: "The composite operator is a thinking tool — imagine one informed hand behind the range and ask what it is trying to achieve.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with the composite operator",
          items: [
            "<strong>Believing in a literal cartel.</strong> There is no single villain moving your chart. The operator is a simplifying lens for many large participants acting alike — treating it as a real conspiracy leads to paranoid, unfalsifiable reads.",
            "<strong>Explaining every candle away.</strong> If every move 'proves' the operator's plan, the model has stopped helping. A read you cannot be wrong about is worthless.",
            "<strong>Assuming smart money always wins.</strong> Large operators get trapped too. A shakeout can keep going; absorption can fail. The lens tilts odds, it does not remove them.",
            "<strong>Ignoring the invalidation.</strong> 'The operator is just shaking harder' is how traders talk themselves out of stops. Define where the campaign read is wrong and honour it.",
            "<strong>Front-running the campaign.</strong> Buying deep in a range because 'someone must be accumulating' is guessing. Wait for the footprints — shakeout, test, sign of strength — before committing.",
          ],
        },
        {
          kind: "text",
          html: "Treat the operator as a <strong>working hypothesis</strong>, not a fact. It is valuable when it makes you ask who benefits from a move; it is dangerous if it makes you invent intentions that the chart does not actually support.",
        },
      ],
    },

    /* ============================================================ */
    /* 3. The Three Wyckoff Laws                                    */
    /* ============================================================ */
    {
      slug: "three-laws",
      title: "The Three Wyckoff Laws",
      summary:
        "An overview of the three laws — supply and demand, cause and effect, and effort versus result — that anchor every Wyckoff read.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to name the three Wyckoff laws and explain what each one tells you about the chart.",
      blocks: [
        {
          kind: "text",
          html: "Everything in Wyckoff rests on <strong>three laws</strong>. They are not indicators but principles for judging price and volume together, and the modules that follow examine each one in depth.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/03-three-laws.png",
          alt: "The three Wyckoff laws checklist",
          caption:
            "Three lenses applied to the same chart: direction, size of move, and conviction.",
        },
        {
          kind: "heading",
          text: "The three laws at a glance",
        },
        {
          kind: "list",
          items: [
            "Supply & Demand — which side is in control decides direction.",
            "Cause & Effect — the size of a range builds the fuel for the move that follows.",
            "Effort vs Result — volume is effort; the resulting price move shows whether that effort worked.",
          ],
        },
        {
          kind: "text",
          html: "Used together they answer different questions. Supply and demand tells you <strong>which way</strong> price is likely to break; cause and effect gives a sense of <strong>how far</strong> it might travel; and effort versus result tells you whether the move you are seeing is <strong>backed by conviction</strong> or likely to fail.",
        },
        {
          kind: "heading",
          text: "How to apply all three at once",
        },
        {
          kind: "text",
          html: "The power of the laws is in <strong>stacking them</strong>. A single law rarely decides a trade, but when all three agree the case is much stronger. Read the chart in order: first supply and demand for direction, then cause and effect for room to run, then effort versus result for confirmation the move is genuine. If two laws point up and one points sideways, you have a partial case — a watch-list item, not a trade. Only when the evidence <strong>lines up cleanly</strong> do you commit, and even then you commit with a stop.",
        },
        {
          kind: "heading",
          text: "How to spot each law on the chart",
        },
        {
          kind: "list",
          items: [
            "<strong>Supply/demand</strong> — read range edges: which side absorbs the other's pushes and refuses to give ground.",
            "<strong>Cause/effect</strong> — read range width and duration: a big, long base stores more fuel than a quick, narrow one.",
            "<strong>Effort/result</strong> — read volume against candle spread: heavy volume with tiny progress means the opposing side is absorbing.",
          ],
        },
        {
          kind: "example",
          title: "Stacking the three laws into one decision",
          steps: [
            "A stock has built a <strong>wide 8-week base</strong> between €40 and €44 after a decline — that width is stored <strong>cause</strong>, hinting a break could run several euros.",
            "At the range lows near €40 you watch heavy selling repeatedly <strong>fail to make new lows</strong> — <strong>supply and demand</strong> says buyers have the edge.",
            "A rally then breaks €44 on a <strong>wide bar with volume triple the average</strong> — <strong>effort matches result</strong>, confirming genuine demand rather than a thin push.",
            "All three laws align up, so you buy the pullback to <strong>€44.20</strong> with a stop at <strong>€42.90</strong> (risk €1.30 per share).",
            "Account <strong>€1,000</strong>, risk <strong>1% = €10</strong>. With €1.30 risk per share you buy <strong>7 shares</strong> (≈€309). The cause projects toward ~€48, roughly <strong>2.9:1</strong>.",
            "If price closes back under <strong>€42.90</strong>, one of the laws was misread and you are out for a small, planned loss.",
          ],
        },
        {
          kind: "key",
          text: "Three laws, three questions: which way, how far, and is it real? — supply/demand, cause/effect, effort/result.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with the three laws",
          items: [
            "<strong>Leaning on a single law.</strong> A big base (cause) means nothing if supply and demand still favours the downside. The laws are strongest stacked, weakest alone.",
            "<strong>Reading volume without context.</strong> 'High volume' is meaningless unless compared to recent average and to the candle's spread. Effort vs result needs both halves.",
            "<strong>Turning cause into a price guarantee.</strong> A projected target from range width is a rough estimate, not a promise. Price often falls short or overshoots.",
            "<strong>Ignoring conflicting evidence.</strong> When two laws agree and one disagrees, beginners take the trade anyway. A partial case is a reason to wait, not to force.",
            "<strong>Skipping the stop because 'all three agree'.</strong> Aligned laws improve odds; they do not remove the chance of being wrong. Size and stop still decide survival.",
          ],
        },
        {
          kind: "text",
          html: "None of the laws is a crystal ball. They are ways to <strong>weigh evidence</strong>, and even when all three point the same way a move can still fail — which is exactly why position sizing and stops remain non-negotiable.",
        },
      ],
    },

    /* ============================================================ */
    /* 4. Law of Supply & Demand                                    */
    /* ============================================================ */
    {
      slug: "law-supply-demand",
      title: "Law of Supply & Demand",
      summary:
        "The first law — when demand exceeds supply price rises, when supply exceeds demand it falls — and how to read that imbalance on the chart.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to judge whether demand or supply has the upper hand by reading price behaviour and volume.",
      blocks: [
        {
          kind: "text",
          html: "The first law is the foundation: when <strong>demand exceeds supply</strong> price rises, and when supply exceeds demand it falls. Everything else in Wyckoff is a refinement of how to detect this imbalance before it fully plays out.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/04-supply-demand.png",
          alt: "Demand overcoming supply lifting price",
          caption:
            "When buyers absorb all offered supply, price has room to lift.",
        },
        {
          kind: "heading",
          text: "Reading the imbalance",
        },
        {
          kind: "text",
          html: "You cannot see the order book directly, so you infer the balance from how price responds. Rallies on <strong>rising volume</strong> that hold their gains suggest demand is in charge; declines that stall and can't make new lows suggest supply is drying up. The tape leaves clues even when you can't see every order.",
        },
        {
          kind: "text",
          html: "Pay close attention to what happens at range edges. If price pushes into resistance but is met by heavy selling and falls back, <strong>supply is present</strong>. If it dips to support and is bought aggressively, <strong>demand is present</strong>. Repeated tests reveal which side is being exhausted.",
        },
        {
          kind: "list",
          items: [
            "Wide up-candles on strong volume: demand in control.",
            "Wide down-candles on strong volume: supply in control.",
            "Failure to extend despite heavy volume: the opposing side is absorbing.",
            "Narrowing ranges near an edge: one side may be running out.",
          ],
        },
        {
          kind: "heading",
          text: "How to use the imbalance in a trade",
        },
        {
          kind: "text",
          html: "Reading the imbalance is only half the job — you act on it at a <strong>defined level with a stop</strong>. When demand looks dominant at a support edge, you wait for proof (absorption, a failure to make new lows, a strong up-bar) and then buy with your stop just beyond the point that would prove demand had actually failed. The imbalance tells you the <strong>likely direction</strong>; the level and stop tell you exactly where you are wrong and keep the loss small when the read misses.",
        },
        {
          kind: "example",
          title: "Trading a demand-dominant support edge",
          steps: [
            "On the 4-hour chart, EUR/USD has held a <strong>support zone at 1.0750</strong> three times. Each dip there comes on <strong>lighter volume</strong> and the down-bars keep shrinking — demand looks dominant.",
            "The latest dip to 1.0755 prints a <strong>wide bullish bar on rising volume</strong> that closes near its high — buyers absorbing supply. Effort and result agree to the upside.",
            "You enter long at <strong>1.0770</strong>, placing the stop below the zone at <strong>1.0725</strong>. Risk = <strong>45 pips</strong> — a close there means supply actually won.",
            "Account <strong>€1,000</strong>, risk <strong>1% = €10</strong>. A 45-pip stop sizes to about <strong>0.022 lots</strong> so a full stop costs ~€10.",
            "Target the range top near <strong>1.0860</strong>, ~90 pips away — roughly <strong>2:1</strong>. Plan is fixed before entry: in 1.0770, out at 1.0725 or 1.0860.",
            "No exceptions: a <strong>4-hour close under 1.0725</strong> and the demand read is invalidated — you exit, no averaging down.",
          ],
        },
        {
          kind: "key",
          text: "Price rises when demand overpowers supply and falls when supply overpowers demand — read who is winning at the range edges.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes reading supply and demand",
          items: [
            "<strong>Confusing high volume with a direction.</strong> Heavy volume only tells you effort was spent — you must check whether price actually moved. Big volume with no progress is absorption, often against the obvious direction.",
            "<strong>Buying support on touch alone.</strong> A level touching is not proof buyers showed up. Wait for a failure to make new lows or a strong up-bar before assuming demand won.",
            "<strong>Ignoring exhaustion of your own side.</strong> Narrowing up-bars into resistance mean demand is thinning even while price rises. The imbalance can flip before the trend does.",
            "<strong>Reading one candle in isolation.</strong> A single wide bar proves nothing; the imbalance shows in repeated tests. Let the range reveal which side is being worn down.",
            "<strong>Trading without a level where the read is wrong.</strong> 'Demand looks stronger' is not a plan until you know the exact price that would prove it false. That price is your stop.",
          ],
        },
        {
          kind: "text",
          html: "This law is a <strong>probabilistic read</strong>, not certainty. Absorption can continue longer than expected, and a side that looks exhausted can find fresh participants. Confirm the imbalance with follow-through before committing.",
        },
      ],
    },

    /* ============================================================ */
    /* 5. Law of Cause & Effect                                     */
    /* ============================================================ */
    {
      slug: "law-cause-effect",
      title: "Law of Cause & Effect",
      summary:
        "The second law — a trading range is the cause, and the move that follows is the proportional effect — and how Wyckoff traders estimate it.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to interpret a trading range as stored cause and reason about the size of the move it may produce.",
      blocks: [
        {
          kind: "text",
          html: "The second law states that a period of preparation is the <strong>cause</strong>, and the trend that follows is the proportional <strong>effect</strong>. A large, well-built trading range stores more fuel than a small one and can produce a larger move.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/05-cause-effect.png",
          alt: "A trading range as cause and the following move as effect",
          caption:
            "The sideways range is the cause; the move out of it is the effect.",
        },
        {
          kind: "heading",
          text: "Why the range is the cause",
        },
        {
          kind: "text",
          html: "During accumulation the composite operator is absorbing supply; during distribution it is unloading. The longer this takes, the <strong>bigger the position</strong> being built or exited — and therefore the larger the move needed to realise it. Time and width in the range translate into distance in the trend.",
        },
        {
          kind: "text",
          html: "Wyckoff traders traditionally used point-and-figure counts across a range to <strong>estimate targets</strong>, projecting the horizontal width of the cause into a vertical price objective. Modern traders often use it more loosely — a big base implies a big potential move, a small base a small one.",
        },
        {
          kind: "heading",
          text: "How to estimate the effect",
        },
        {
          kind: "text",
          html: "A practical shortcut on a normal candlestick chart is to measure the <strong>height of the range</strong> and project it from the breakout point. If a base runs from €50 to €55 — five points tall — a first objective sits near €60 once price breaks up out of it. This is deliberately rough: a wide, choppy range that took many weeks to build stores more cause than a tight, quick one of the same height. Use the projection as a <strong>planning aid</strong> for where to bank partial profit, never as a price the market owes you.",
        },
        {
          kind: "heading",
          text: "How to use cause in a trade plan",
        },
        {
          kind: "text",
          html: "Cause and effect shapes <strong>which trades are worth taking</strong>. A setup out of a large base offers room for a healthy reward relative to a stop just beyond the range; a setup out of a tiny base may not clear a sensible reward-to-risk once spread and stop distance are counted. Before committing, compare the <strong>projected effect to your stop distance</strong> — if the estimated move barely doubles your risk, the trade is marginal and often worth skipping.",
        },
        {
          kind: "example",
          title: "Sizing a trade from a measured cause",
          steps: [
            "A stock builds a <strong>7-week base</strong> between €50.00 and €55.00 after a long decline — a range height of <strong>€5.00</strong> of stored cause.",
            "A wide, high-volume bar breaks up through €55.00. You project the €5.00 height from the breakout to a first objective near <strong>€60.00</strong>.",
            "You buy the pullback to <strong>€55.40</strong>, stop just back inside the range at <strong>€53.90</strong>. Risk = <strong>€1.50 per share</strong>.",
            "Account <strong>€1,000</strong>, risk <strong>1% = €10</strong>. €1.50 risk per share sizes to <strong>6 shares</strong> (≈€332 notional).",
            "The projected effect (~€60.00) is €4.60 of upside against €1.50 of risk — about <strong>3:1</strong>, so the trade clears your minimum. You bank part at €60 and trail the rest.",
            "If price closes back under <strong>€53.90</strong>, the breakout failed and you exit — the cause estimate never overrides the stop.",
          ],
        },
        {
          kind: "key",
          text: "A trading range is stored cause; the trend that follows is the effect — bigger, longer ranges can fuel bigger moves.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with cause and effect",
          items: [
            "<strong>Treating a projected target as a promise.</strong> Counts and range-height projections are estimates. Price frequently stops short or blows past — manage the trade on the way, don't sit waiting for the number.",
            "<strong>Ignoring range quality.</strong> Two ranges of equal height are not equal cause. A long, well-tested base is stronger fuel than a quick, thin one that just happens to be the same size.",
            "<strong>Taking marginal setups out of tiny bases.</strong> A small cause rarely justifies the stop distance and spread. If the projected effect barely beats your risk, skip it.",
            "<strong>Forgetting the direction check.</strong> Cause tells you how far, not which way. A big base can break down as easily as up — pair it with the supply/demand read.",
            "<strong>Moving the stop to chase the target.</strong> Widening a stop so a trade 'has room to reach' the projection turns a small planned loss into a large one. The stop is fixed by the range, not the target.",
          ],
        },
        {
          kind: "text",
          html: "Treat any count as a <strong>rough estimate</strong>, never a promise. Targets are frequently overshot or undershot, ranges can extend before resolving, and a projected objective is a planning aid — not a reason to ignore what price is actually doing on the way there.",
        },
      ],
    },

    /* ============================================================ */
    /* 6. Law of Effort vs Result                                   */
    /* ============================================================ */
    {
      slug: "law-effort-result",
      title: "Law of Effort vs Result",
      summary:
        "The third law — volume is effort and price movement is result — and how divergence between the two reveals hidden strength or weakness.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to compare volume and price movement to spot when effort and result disagree.",
      blocks: [
        {
          kind: "text",
          html: "The third law compares <strong>effort and result</strong>: volume is the effort expended, and the resulting price move shows whether that effort achieved anything. When the two agree, the move is healthy; when they disagree, something is being hidden.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/06-effort-result.png",
          alt: "High volume effort with small price result",
          caption:
            "Heavy volume but little price progress — effort meeting an opposing force.",
        },
        {
          kind: "heading",
          text: "When effort and result diverge",
        },
        {
          kind: "text",
          html: "Imagine a large down-candle on <strong>huge volume</strong> that fails to make a meaningful new low. That is enormous selling effort with little downward result — a sign that buyers are absorbing everything offered, hinting at hidden demand beneath the surface.",
        },
        {
          kind: "text",
          html: "The same logic works in reverse. A push to new highs on <strong>shrinking volume</strong> is a large result achieved with little effort, which can mean the move is running on fumes. Divergence between effort and result is one of Wyckoff's most useful early warnings.",
        },
        {
          kind: "list",
          items: [
            "High volume, small result: absorption — the opposing side is stepping in.",
            "Low volume, large result: little resistance, but momentum may be thin.",
            "High volume with a wide, closing move: effort and result agree — genuine strength.",
            "A climactic bar that reverses: exhaustion of the prevailing side.",
          ],
        },
        {
          kind: "heading",
          text: "How to read effort vs result correctly",
        },
        {
          kind: "text",
          html: "The read only works when you compare volume to the <strong>right baseline</strong>. 'High volume' means high relative to the recent average, and 'small result' means a narrow candle spread and a close that gives back most of the move. Always judge the two together: a wide bar closing on its high with triple-average volume is effort <strong>confirming</strong> result; a wide bar that opens strong but closes back at its low on the same volume is effort being <strong>absorbed</strong>. The close inside the bar often matters more than where it reached.",
        },
        {
          kind: "heading",
          text: "How to use divergence in a trade",
        },
        {
          kind: "text",
          html: "Effort-versus-result divergence is best used as <strong>early confirmation</strong>, not a standalone entry. A huge-volume down-bar that fails to make a new low at range support builds your case for demand — but you still wait for a structural trigger before buying, and you still place a stop below the bar. Divergence tells you the <strong>opposing side is quietly winning</strong>; the structure and stop turn that into a survivable trade.",
        },
        {
          kind: "example",
          title: "Trading a bullish effort-vs-result divergence",
          steps: [
            "At the base of a range near <strong>1.3200</strong> on GBP/USD, a down-bar prints on <strong>volume double the average</strong> but its spread is tiny and it closes back at 1.3215 — huge effort, almost no downward result.",
            "That is absorption: sellers threw everything and price barely moved. You mark <strong>1.3200</strong> as demand and wait for a trigger.",
            "Next session a <strong>wide up-bar closes near its high</strong> on rising volume — effort and result now agree upward. You enter long at <strong>1.3230</strong>.",
            "Stop below the absorption bar's low at <strong>1.3180</strong>. Risk = <strong>50 pips</strong>.",
            "Account <strong>€1,000</strong>, risk <strong>1% = €10</strong>. A 50-pip stop sizes to about <strong>0.02 lots</strong> so a full stop costs ~€10. Target the range top near 1.3350, ~120 pips, roughly <strong>2.4:1</strong>.",
            "If price closes back under <strong>1.3180</strong>, the absorption failed — you exit. One divergence never justifies holding through a broken stop.",
          ],
        },
        {
          kind: "key",
          text: "Volume is effort, price movement is result — when heavy effort produces little result, the opposing side is quietly taking over.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with effort vs result",
          items: [
            "<strong>Judging volume with no baseline.</strong> A bar is only 'high volume' relative to its recent average. Without that comparison the whole read is guesswork.",
            "<strong>Ignoring the close.</strong> Where a bar reaches matters far less than where it closes. A spike that gives it all back is absorption, not strength.",
            "<strong>Treating one divergent bar as a signal.</strong> A single high-effort-low-result bar is a clue, not an entry. Wait for structure to confirm before committing.",
            "<strong>Fighting a genuine trend on thin evidence.</strong> Low-volume new highs can persist far longer than expected. 'Running on fumes' is not the same as reversing.",
            "<strong>Skipping the stop after a clean-looking divergence.</strong> Absorption fails regularly. The bar that looked like hidden demand can be blown straight through — size and stop still decide the outcome.",
          ],
        },
        {
          kind: "text",
          html: "Volume interpretation is <strong>an art, not a formula</strong>. Data quality varies by market, a single bar rarely decides anything, and apparent divergences sometimes resolve against you. Use effort versus result to build a case, then confirm it with structure.",
        },
      ],
    },

    /* ============================================================ */
    /* 7. Accumulation Phase                                        */
    /* ============================================================ */
    {
      slug: "accumulation",
      title: "Accumulation Phase",
      summary:
        "How a bottoming trading range works — supply being absorbed near lows before a markup — and the behaviour that hints demand is winning.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to recognise the behaviour that characterises an accumulation range and why it precedes a markup.",
      blocks: [
        {
          kind: "text",
          html: "Accumulation is a sideways trading range that forms after a decline, where <strong>supply is being absorbed</strong> near the lows. The composite operator buys patiently from discouraged sellers, building a position without pushing price up prematurely.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/07-accumulation.png",
          alt: "Accumulation trading range before markup",
          caption:
            "A range that absorbs selling near the lows before an eventual markup.",
        },
        {
          kind: "heading",
          text: "What it looks like",
        },
        {
          kind: "text",
          html: "The range often begins with a <strong>selling climax</strong> — a sharp, high-volume drop as panicked holders capitulate — followed by a bounce and a period of testing the lows. Over time, downward pushes lose force and the lows stop making progress, hinting that demand is quietly overtaking supply.",
        },
        {
          kind: "text",
          html: "A telltale sign is <strong>drying-up volume</strong> on dips into support: fewer sellers remain to be absorbed. Later in the range, rallies begin to show more strength than declines, another clue that the balance is shifting toward buyers.",
        },
        {
          kind: "list",
          items: [
            "Follows a downtrend, often after a climactic sell-off.",
            "Price chops sideways as buying absorbs supply.",
            "Dips into support show diminishing volume and downside progress.",
            "Late-stage rallies widen while declines narrow.",
          ],
        },
        {
          kind: "heading",
          text: "How to spot the phase progressing",
        },
        {
          kind: "text",
          html: "Accumulation reveals itself as a <strong>sequence</strong>, not a single moment. The selling climax and automatic rally define the range; secondary tests probe the lows on lighter volume; a spring may shake out the last sellers; then a sign of strength breaks the range top. You are looking for evidence that each dip <strong>matters less</strong> than the last — narrower down-bars, thinner volume, higher lows creeping in — while rallies begin to travel further. When the range top finally gives way on wide, high-volume bars, the phase is resolving up.",
        },
        {
          kind: "heading",
          text: "How to use accumulation in a trade",
        },
        {
          kind: "text",
          html: "You do not buy just because a range 'looks like accumulation' — you wait for a <strong>confirming event</strong>. The lower-risk entries are on a successful spring test or on the pullback after a sign of strength (the last point of support), with a stop below the level that would prove the phase read wrong. The range gives you context and a natural stop location; the event gives you the trigger; sizing keeps a failed read small.",
        },
        {
          kind: "example",
          title: "Buying the last point of support after accumulation",
          steps: [
            "A stock spends nine weeks basing between <strong>€24.00</strong> and <strong>€27.00</strong> after a long decline. Dips to €24.00 come on <strong>shrinking volume</strong> — supply is drying up.",
            "A wide bar breaks €27.00 to <strong>€27.80</strong> on volume well above average — a <strong>sign of strength</strong> flipping structure up. You do not chase it.",
            "Price eases back to <strong>€27.20</strong> and holds above the old range top on light volume — a higher low, the <strong>last point of support</strong>. You buy there.",
            "Stop below the LPS at <strong>€26.30</strong>. Risk = <strong>€0.90 per share</strong> — a close there means the markup read failed.",
            "Account <strong>€1,000</strong>, risk <strong>1% = €10</strong>. €0.90 risk per share sizes to <strong>11 shares</strong> (≈€299). The cause (a €3 base) projects toward ~€30, roughly <strong>3:1</strong>.",
            "Discipline: a <strong>daily close under €26.30</strong> and you are out — no adding to the position hoping the base holds.",
          ],
        },
        {
          kind: "key",
          text: "Accumulation is a range where selling is absorbed near the lows — the quiet groundwork for a later markup.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with accumulation",
          items: [
            "<strong>Calling every low a bottom.</strong> Most sideways stretches after a decline just break lower. A range is only accumulation once strength confirms it — until then it's a candidate.",
            "<strong>Buying inside the range with no event.</strong> Picking a spot in the middle of the chop is guessing. Wait for a spring test or a sign of strength before committing.",
            "<strong>Chasing the sign-of-strength bar.</strong> Buying the wide breakout bar puts your stop miles away. The LPS pullback offers a tighter, cheaper entry.",
            "<strong>Ignoring that it might be redistribution.</strong> A range near a low can be distribution before more downside. If it breaks the lows on strong supply, respect that.",
            "<strong>Averaging down when the base breaks.</strong> Adding to a losing 'accumulation' trade as it fails is how a small planned loss becomes an account-threatening one. Honour the stop.",
          ],
        },
        {
          kind: "text",
          html: "Not every range is accumulation. Many sideways stretches simply <strong>break lower</strong>, and a range that looks like a bottom can be redistribution before more downside. Wait for confirmation — a sign of strength and a successful test — before assuming the low is in.",
        },
      ],
    },

    /* ============================================================ */
    /* 8. Distribution Phase                                        */
    /* ============================================================ */
    {
      slug: "distribution",
      title: "Distribution Phase",
      summary:
        "How a topping trading range works — large holdings sold into strength near highs before a markdown — and the signs that supply is taking over.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to recognise the behaviour that characterises a distribution range and why it precedes a markdown.",
      blocks: [
        {
          kind: "text",
          html: "Distribution is the mirror of accumulation: a sideways range after an uptrend where large holdings are <strong>sold into strength</strong> near the highs. The composite operator unloads into eager buyers without collapsing price too soon.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/08-distribution.png",
          alt: "Distribution trading range before markdown",
          caption:
            "A range that soaks up buying near the highs before an eventual markdown.",
        },
        {
          kind: "heading",
          text: "What it looks like",
        },
        {
          kind: "text",
          html: "Distribution often opens with a <strong>buying climax</strong> — a sharp, high-volume surge as the crowd chases the top — followed by a sell-off and repeated tests of the highs. As the range matures, upward pushes fail to extend, revealing that supply is meeting every attempt to rally.",
        },
        {
          kind: "text",
          html: "Watch for rallies to the top of the range on <strong>weakening volume</strong> and reversals on strong volume. When declines within the range begin to look more forceful than the rallies, the balance is tipping toward sellers and a markdown may be approaching.",
        },
        {
          kind: "list",
          items: [
            "Follows an uptrend, often after a climactic surge.",
            "Price chops sideways as selling meets incoming demand.",
            "Pushes to resistance lose momentum and volume.",
            "Late-stage declines widen while rallies narrow.",
          ],
        },
        {
          kind: "heading",
          text: "How to spot the phase progressing",
        },
        {
          kind: "text",
          html: "Like accumulation in reverse, distribution unfolds as a <strong>sequence</strong>. A buying climax and automatic reaction define the range; secondary tests probe the highs on lighter volume; an upthrust may trap the last buyers; then a sign of weakness breaks the range low. Watch for each rally to <strong>achieve less</strong> than the last — narrower up-bars, thinner volume, lower highs creeping in — while declines start travelling further. When the range floor gives way on wide, high-volume down-bars, the phase is resolving down.",
        },
        {
          kind: "heading",
          text: "How to use distribution in a trade",
        },
        {
          kind: "text",
          html: "You do not short just because a range 'looks toppy' — you wait for a <strong>confirming event</strong>. The lower-risk shorts are on a failed upthrust test or on the weak bounce after a sign of weakness (the last point of supply), with a stop above the level that would prove the read wrong. Shorting a market that has been rising carries real risk, so the stop and position size do the heavy lifting.",
        },
        {
          kind: "example",
          title: "Shorting the last point of supply after distribution",
          steps: [
            "A stock chops for eight weeks between <strong>€88.00</strong> and <strong>€94.00</strong> after a long rally. Pushes to €94.00 come on <strong>fading volume</strong> — buyers are thinning.",
            "A wide down-bar breaks €88.00 to <strong>€86.80</strong> on volume well above average — a <strong>sign of weakness</strong> flipping structure down. You do not chase it.",
            "Price bounces weakly to <strong>€87.60</strong> on light volume and stalls below the old range floor — a lower high, the <strong>last point of supply</strong>. You short there.",
            "Stop above the LPSY at <strong>€89.10</strong>. Risk = <strong>€1.50 per share</strong> — a close there means supply did not win.",
            "Account <strong>€1,000</strong>, risk <strong>1% = €10</strong>. €1.50 risk per share sizes to <strong>6 shares</strong> (short). The €6 cause projects toward ~€82, roughly <strong>3.7:1</strong>.",
            "Discipline: a <strong>daily close above €89.10</strong> and you cover — no holding a short that has reclaimed the range.",
          ],
        },
        {
          kind: "key",
          text: "Distribution is a range where buying is absorbed near the highs — the quiet groundwork for a later markdown.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with distribution",
          items: [
            "<strong>Calling every high a top.</strong> Ranges near highs resolve up as often as down. It is only distribution once weakness confirms it — until then it's a candidate.",
            "<strong>Shorting inside the range with no event.</strong> Picking a spot in the chop and shorting is guessing against a market that was recently rising. Wait for an upthrust or sign of weakness.",
            "<strong>Chasing the sign-of-weakness bar.</strong> Selling the wide breakdown bar puts your stop far away. The LPSY bounce offers a tighter, cheaper short.",
            "<strong>Confusing it with re-accumulation.</strong> A pause near highs can store fuel for another leg up. If it reclaims the highs on strong demand, drop the bearish read.",
            "<strong>Adding to a losing short as price rises.</strong> 'It has to top eventually' has blown up many accounts. Honour the stop; a range that keeps making highs is not distributing.",
          ],
        },
        {
          kind: "text",
          html: "Distribution and re-accumulation can look <strong>almost identical</strong> in real time, and a suspected top may simply resolve upward. Never assume a range is distribution until a sign of weakness and a failed test confirm supply has won.",
        },
      ],
    },

    /* ============================================================ */
    /* 9. Re-Accumulation                                           */
    /* ============================================================ */
    {
      slug: "re-accumulation",
      title: "Re-Accumulation",
      summary:
        "A pause inside an existing uptrend where price consolidates before continuing higher, and how to tell it apart from distribution.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to identify a re-accumulation range and understand why it favours trend continuation.",
      blocks: [
        {
          kind: "text",
          html: "Re-accumulation is a trading range that forms <strong>inside an uptrend</strong> rather than at a bottom. Price pauses, consolidates, and absorbs profit-taking before resuming higher. It is a rest stop, not a reversal.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/09-re-accumulation.png",
          alt: "Re-accumulation pause inside an uptrend",
          caption:
            "A consolidation within an uptrend that stores fresh cause for the next leg.",
        },
        {
          kind: "heading",
          text: "Why it happens",
        },
        {
          kind: "text",
          html: "After a strong markup, some holders take profits and new buyers hesitate at higher prices. A re-accumulation range lets demand <strong>absorb that supply</strong> and build a fresh cause for the next leg up. The prior trend context is the key clue that a range is continuation rather than a top.",
        },
        {
          kind: "text",
          html: "The internal behaviour looks like accumulation — drying volume on dips, tests that hold, and eventual signs of strength — but it occurs <strong>above prior structure</strong>, with higher lows still intact on the larger view. That location tilts the odds toward continuation.",
        },
        {
          kind: "heading",
          text: "How to tell it from distribution",
        },
        {
          kind: "text",
          html: "The honest problem is that a pause near highs could be re-accumulation <strong>or</strong> a top. Two clues tilt the odds: first, <strong>context</strong> — a healthy uptrend with higher lows favours continuation, while a climactic, over-extended run favours a top. Second, <strong>behaviour at the range edges</strong> — dips that get bought on shrinking volume and hold above prior structure suggest re-accumulation, while rallies that fail on thinning volume and lower highs suggest distribution. You do not need to be certain in advance; you let the range resolve and trade the confirmation.",
        },
        {
          kind: "heading",
          text: "How to trade the continuation",
        },
        {
          kind: "text",
          html: "The cleanest re-accumulation entry is on the <strong>break and pullback</strong> out of the pause — a sign of strength up out of the range, then a higher-low last point of support that holds. Your stop goes below that pullback, and because the trade is <strong>with the larger trend</strong> the odds and the reward-to-risk are often favourable. If instead the range breaks its lows on strong supply, you stand aside — that is the distribution outcome and the read was wrong.",
        },
        {
          kind: "example",
          title: "Trading a re-accumulation continuation",
          steps: [
            "In a clear uptrend, EUR/USD pauses and chops between <strong>1.0900</strong> and <strong>1.0980</strong> for two weeks. Dips to 1.0900 come on <strong>lighter volume</strong> and hold — the prior higher lows are intact.",
            "A wide up-bar breaks <strong>1.0980</strong> to 1.1010 on rising volume — a sign of strength out of the pause. You wait for the pullback rather than chasing.",
            "Price eases back to <strong>1.0990</strong> and holds above the old range top — a last point of support. You enter long at <strong>1.0995</strong>.",
            "Stop below the LPS at <strong>1.0955</strong>. Risk = <strong>40 pips</strong> — a close there means the continuation read failed.",
            "Account <strong>€1,000</strong>, risk <strong>1% = €10</strong>. A 40-pip stop sizes to about <strong>0.025 lots</strong>. Target the next leg near 1.1100, ~105 pips, roughly <strong>2.6:1</strong>.",
            "If price instead breaks <strong>1.0900</strong> on strong supply, the pause was a top — you never entered, and you stand aside.",
          ],
        },
        {
          kind: "key",
          text: "Re-accumulation is accumulation inside an uptrend — a pause that stores fuel for the next leg up.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with re-accumulation",
          items: [
            "<strong>Assuming continuation because 'the trend is up'.</strong> Trends end. A pause after a climactic run can be the top, not a rest stop — read the edges before you commit.",
            "<strong>Entering before the break confirms.</strong> Buying deep inside the pause on faith is guessing. Wait for the sign of strength and the last-point-of-support pullback.",
            "<strong>Ignoring a break of the range lows.</strong> If the pause cracks its floor on strong supply, that is the distribution outcome. Respect it instead of hoping it recovers.",
            "<strong>Placing the stop too tight inside the noise.</strong> A stop inside the range's chop gets clipped by normal wiggle. Put it below the structure the trade actually relies on.",
            "<strong>Over-sizing because the trend 'feels safe'.</strong> Continuation trades fail too. Risk the same fixed percentage regardless of how confident the trend makes you feel.",
          ],
        },
        {
          kind: "text",
          html: "The honest difficulty is that re-accumulation and distribution can be <strong>indistinguishable early on</strong>. If the range starts breaking prior swing lows on strong supply, respect that it may be a top instead. Let the range resolve and confirm before assuming continuation.",
        },
      ],
    },

    /* ============================================================ */
    /* 10. Re-Distribution                                          */
    /* ============================================================ */
    {
      slug: "re-distribution",
      title: "Re-Distribution",
      summary:
        "A pause inside an existing downtrend where price consolidates before continuing lower, and how to distinguish it from accumulation.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to identify a re-distribution range and understand why it favours continued downside.",
      blocks: [
        {
          kind: "text",
          html: "Re-distribution is the mirror of re-accumulation: a trading range that forms <strong>inside a downtrend</strong>. Price pauses and consolidates while supply is redistributed, then continues lower. It is a rest stop in a falling market, not a bottom.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/10-re-distribution.png",
          alt: "Re-distribution pause inside a downtrend",
          caption:
            "A consolidation within a downtrend that stores cause for the next leg down.",
        },
        {
          kind: "heading",
          text: "Why it happens",
        },
        {
          kind: "text",
          html: "After a sharp markdown, short-covering and bargain hunters create a pause. A re-distribution range lets sellers <strong>distribute into that demand</strong> and build the cause for another leg down. The surrounding downtrend is the clue that the pause is continuation rather than a genuine bottom.",
        },
        {
          kind: "text",
          html: "Internally it behaves like distribution — rallies fade on weak volume, tests of the highs fail, and supply reasserts — but it forms <strong>below prior structure</strong>, with lower highs still intact on the larger view. That location tilts the odds toward more downside.",
        },
        {
          kind: "heading",
          text: "How to tell it from accumulation",
        },
        {
          kind: "text",
          html: "A pause near lows could be re-distribution <strong>or</strong> a genuine bottom. Two clues help: <strong>context</strong> — an orderly downtrend with lower highs favours continuation, while a climactic, exhausted flush favours a bottom — and <strong>edge behaviour</strong> — rallies that fail on thin volume and stay below prior structure suggest re-distribution, while dips that get bought on shrinking volume and reclaim structure suggest accumulation. You never need certainty in advance; you let the range resolve and trade the confirmed direction.",
        },
        {
          kind: "heading",
          text: "How to trade the continuation",
        },
        {
          kind: "text",
          html: "The cleanest re-distribution short is on the <strong>break and weak bounce</strong> out of the pause — a sign of weakness down out of the range, then a lower-high last point of supply that fails. Your stop goes above that bounce, and because the trade is <strong>with the larger downtrend</strong> the odds and reward-to-risk are often favourable. If the range instead reclaims its highs on strong demand, you stand aside — that is the accumulation outcome.",
        },
        {
          kind: "example",
          title: "Trading a re-distribution continuation",
          steps: [
            "In a clear downtrend, a stock pauses and chops between <strong>€40.00</strong> and <strong>€44.00</strong> for two weeks. Rallies to €44.00 come on <strong>fading volume</strong> and fail — lower highs are intact.",
            "A wide down-bar breaks <strong>€40.00</strong> to €39.20 on rising volume — a sign of weakness out of the pause. You wait for the bounce rather than chasing the break.",
            "Price bounces weakly to <strong>€39.90</strong> on light volume and stalls below the old range floor — a last point of supply. You short at <strong>€39.80</strong>.",
            "Stop above the LPSY at <strong>€41.00</strong>. Risk = <strong>€1.20 per share</strong> — a close there means the continuation read failed.",
            "Account <strong>€1,000</strong>, risk <strong>1% = €10</strong>. €1.20 risk per share sizes to <strong>8 shares</strong> (short). The €4 cause projects toward ~€36, roughly <strong>3.2:1</strong>.",
            "If price instead reclaims <strong>€44.00</strong> on strong demand, the pause was a bottom — you never entered, and you stand aside.",
          ],
        },
        {
          kind: "key",
          text: "Re-distribution is distribution inside a downtrend — a pause that stores fuel for the next leg down.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with re-distribution",
          items: [
            "<strong>Assuming more downside because 'the trend is down'.</strong> Downtrends end. A pause after a climactic flush can be the bottom, not a rest stop — read the edges first.",
            "<strong>Shorting before the break confirms.</strong> Selling deep inside the pause on faith is guessing. Wait for the sign of weakness and the last-point-of-supply bounce.",
            "<strong>Ignoring a reclaim of the range highs.</strong> If the pause pushes back above its ceiling on strong demand, that is the accumulation outcome. Drop the bearish read.",
            "<strong>Catching the falling knife instead.</strong> Buying a 'cheap' level inside a downtrend pause because it looks oversold fights the trend and the read. Trade with the direction that confirms.",
            "<strong>Over-sizing a short that 'can't bounce'.</strong> Bounces in downtrends can be violent. Risk the same fixed percentage and keep the stop above the structure.",
          ],
        },
        {
          kind: "text",
          html: "As with its bullish twin, re-distribution can look just like accumulation in real time. If the range starts reclaiming prior swing highs on <strong>strong demand</strong>, be willing to abandon the bearish read. Wait for confirmation before committing to continuation.",
        },
      ],
    },

    /* ============================================================ */
    /* 11. The Spring                                               */
    /* ============================================================ */
    {
      slug: "spring",
      title: "The Spring",
      summary:
        "The spring — a false break below support that shakes out sellers before a markup — and honest entry and stop logic for trading it.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to recognise a spring, understand why it works, and reason about entry and stop placement.",
      blocks: [
        {
          kind: "text",
          html: "A spring is a <strong>false break below support</strong> at the end of an accumulation range. Price dips beneath the obvious low, triggers stops and tempts fresh shorts, then quickly recovers back into the range — trapping sellers as demand takes over.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/11-spring.png",
          alt: "A spring dipping below support then recovering",
          caption:
            "Price pokes below support, then snaps back inside — a spring.",
        },
        {
          kind: "heading",
          text: "Why the spring works",
        },
        {
          kind: "text",
          html: "The dip below support flushes out the last weak holders and lets the composite operator <strong>absorb their supply</strong> cheaply. The fast recovery on strong demand shows sellers could not hold their advantage — a classic effort-versus-result tell that buyers are now in charge.",
        },
        {
          kind: "text",
          html: "The best springs recover <strong>quickly and decisively</strong>, ideally on rising volume as price climbs back inside the range. A spring that is followed by a low-volume test which holds above the spring low is especially constructive.",
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "A common approach is to enter as price reclaims support, or on the successful test that follows, and to place the <strong>stop below the spring low</strong>. If price falls back beneath that low and stays there, the spring has failed and the setup is invalid — a clearly defined risk point.",
        },
        {
          kind: "heading",
          text: "How to spot a genuine spring",
        },
        {
          kind: "text",
          html: "Not every dip below support is a spring. A genuine one has three features: it happens at the end of a <strong>mature accumulation range</strong>, not mid-chop; the recovery back inside is <strong>fast and decisive</strong>, ideally closing the bar back above support; and it is often followed by a <strong>low-volume test</strong> that holds above the spring low. Heavy volume on the stab down that gets absorbed, then thin volume on the test, is the classic effort-versus-result tell that supply is exhausted.",
        },
        {
          kind: "example",
          title: "Trading a spring with a defined stop",
          steps: [
            "GBP/USD has accumulated for weeks between <strong>1.2500</strong> support and 1.2650 resistance. Price stabs down to <strong>1.2465</strong> — 35 pips below support — on a volume spike, then closes the bar back at 1.2510, inside the range.",
            "That is a candidate spring. You wait for the <strong>test</strong>: two bars later price dips to 1.2495 on thin volume and holds above the spring low. Supply is gone.",
            "You enter long at <strong>1.2520</strong> as price reclaims support with conviction.",
            "Stop below the spring low at <strong>1.2450</strong>. Risk = <strong>70 pips</strong> — a close there means the spring failed.",
            "Account <strong>€1,000</strong>, risk <strong>1% = €10</strong>. A 70-pip stop sizes to about <strong>0.014 lots</strong> so a full stop costs ~€10. Target the range top near 1.2650, ~130 pips, roughly <strong>1.9:1</strong>; a run beyond it improves the ratio.",
            "Rule: a <strong>close back below 1.2450</strong> invalidates the spring and you exit — no second-guessing.",
          ],
        },
        {
          kind: "key",
          text: "A spring is a shakeout below support that recovers fast — enter on the reclaim or test, with a stop below the spring low.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with springs",
          items: [
            "<strong>Buying the stab down itself.</strong> Catching the dip below support before it recovers is guessing — that break might be a real breakdown. Wait for the reclaim or the test.",
            "<strong>Calling every break below support a spring.</strong> Plenty of supports just break and keep going. A spring needs a fast, decisive recovery back inside; without it, respect the breakdown.",
            "<strong>Placing the stop just under support.</strong> A spring is designed to poke below support — a stop there gets swept. The stop belongs below the spring low, giving the shakeout room.",
            "<strong>Ignoring the test.</strong> The low-volume test that holds is the highest-confidence entry. Skipping it for a faster fill often means worse odds.",
            "<strong>Over-sizing because it 'looks perfect'.</strong> The cleanest springs still fail. Risk the same fixed percentage; a failed spring must be a small, survivable loss.",
          ],
        },
        {
          kind: "text",
          html: "Not every break below support is a spring; sometimes it is simply a <strong>genuine breakdown</strong>. That is precisely why the stop matters — the setup tells you exactly where it is wrong, and sizing keeps a failed spring small.",
        },
      ],
    },

    /* ============================================================ */
    /* 12. The Upthrust                                             */
    /* ============================================================ */
    {
      slug: "upthrust",
      title: "The Upthrust",
      summary:
        "The upthrust — a false break above resistance that traps buyers before a markdown — and honest entry and stop logic for trading it.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to recognise an upthrust, understand why it works, and reason about entry and stop placement.",
      blocks: [
        {
          kind: "text",
          html: "An upthrust is the mirror of a spring: a <strong>false break above resistance</strong> near the end of a distribution range. Price spikes above the obvious high, triggers breakout buyers and stops on shorts, then fails back into the range as supply overwhelms demand.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/12-upthrust.png",
          alt: "An upthrust spiking above resistance then failing",
          caption:
            "Price spikes above resistance, then falls back inside — an upthrust.",
        },
        {
          kind: "heading",
          text: "Why the upthrust works",
        },
        {
          kind: "text",
          html: "The spike above resistance lures in eager buyers and lets the operator <strong>sell into that demand</strong> at premium prices. The quick failure back inside the range shows buyers could not sustain the breakout — an effort-versus-result signal that supply has taken control.",
        },
        {
          kind: "text",
          html: "A powerful variant is the <strong>upthrust after distribution</strong> (UTAD), which occurs late in the range on a final push to new highs that promptly fails. The more decisively price rejects the breakout, the stronger the signal.",
        },
        {
          kind: "heading",
          text: "Entry and stop logic",
        },
        {
          kind: "text",
          html: "Traders often enter short as price falls back below resistance, or on a weak rally that fails to reclaim it, and place the <strong>stop above the upthrust high</strong>. A close back above that high invalidates the setup — a clean, pre-defined risk boundary.",
        },
        {
          kind: "heading",
          text: "How to spot a genuine upthrust",
        },
        {
          kind: "text",
          html: "A genuine upthrust appears at the end of a <strong>mature distribution range</strong>, spikes above resistance and then <strong>fails back inside decisively</strong>, ideally closing the bar below the old resistance. The most powerful version is the UTAD — a final push to a fresh high on thinning or climactic volume that promptly rejects. Watch for the <strong>weak retest</strong>: a bounce that fails on light volume below resistance is the last-point-of-supply short trigger.",
        },
        {
          kind: "example",
          title: "Trading an upthrust with a defined stop",
          steps: [
            "A stock has distributed for weeks between <strong>€118</strong> and <strong>€124</strong> resistance. Price spikes to <strong>€126.50</strong> on a volume surge, then closes the day back at €123 — below resistance.",
            "That is a candidate upthrust (UTAD). You wait for the <strong>weak retest</strong>: price bounces to €124.20 on light volume and stalls — a lower-high last point of supply.",
            "You short at <strong>€123.60</strong> as the bounce fails and price rolls back below resistance.",
            "Stop above the upthrust high at <strong>€126.90</strong>. Risk = <strong>€3.30 per share</strong> — a close there means the breakout was real.",
            "Account <strong>€1,000</strong>, risk <strong>1% = €10</strong>. €3.30 risk per share sizes to <strong>3 shares</strong> (short). The €6 cause projects toward ~€117, roughly <strong>2:1</strong>; a deeper markdown improves it.",
            "Rule: a <strong>daily close above €126.90</strong> invalidates the upthrust and you cover — shorting new highs demands the stop do the work.",
          ],
        },
        {
          kind: "key",
          text: "An upthrust is a failed breakout above resistance — enter short on the reclaim failure, with a stop above the upthrust high.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with upthrusts",
          items: [
            "<strong>Shorting the spike itself.</strong> Selling into the push above resistance before it fails is guessing — that breakout might be real. Wait for the failure back inside.",
            "<strong>Calling every break above resistance an upthrust.</strong> Many breakouts are genuine and run. An upthrust needs a decisive failure back inside; without it, respect the breakout.",
            "<strong>Placing the stop just above resistance.</strong> An upthrust is built to poke above resistance — a stop there gets swept. The stop belongs above the upthrust high.",
            "<strong>Underestimating shorting risk.</strong> Shorting a market that just made new highs into momentum is dangerous. Keep size small and the stop honest.",
            "<strong>Holding through the invalidation.</strong> 'It has to roll over' after a close back above the high is how a small planned loss becomes a large one. Cover when the setup is invalid.",
          ],
        },
        {
          kind: "text",
          html: "A break above resistance can also be a <strong>real breakout</strong>, so an upthrust is only confirmed by the failure back inside. Because shorting a market that has just made new highs carries real risk, the stop and position size do the heavy lifting.",
        },
      ],
    },

    /* ============================================================ */
    /* 13. Sign of Strength (SOS)                                   */
    /* ============================================================ */
    {
      slug: "sign-of-strength",
      title: "Sign of Strength (SOS)",
      summary:
        "The sign of strength — a decisive, high-volume rally out of an accumulation range — and how it confirms demand has taken control.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to recognise a sign of strength and use it to confirm that a markup may be beginning.",
      blocks: [
        {
          kind: "text",
          html: "A sign of strength, or <strong>SOS</strong>, is a decisive rally out of an accumulation range on expanding volume and wide up-candles. It is the market confirming that demand has finally overpowered supply after the range did its absorbing work.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/13-sos.png",
          alt: "A strong rally out of the range, sign of strength",
          caption:
            "A wide, high-volume rally breaking up out of the range — a sign of strength.",
        },
        {
          kind: "heading",
          text: "What makes it convincing",
        },
        {
          kind: "text",
          html: "A genuine SOS shows <strong>effort matching result</strong>: strong volume and wide spread carrying price clearly above the range highs, with little overhead resistance able to stop it. The move usually breaks prior swing highs, flipping structure from sideways to up.",
        },
        {
          kind: "text",
          html: "The pullback after an SOS is often called the <strong>last point of support</strong> (LPS) — a higher low that holds above the breakout on lighter volume. That pullback frequently offers a lower-risk entry than chasing the initial thrust.",
        },
        {
          kind: "heading",
          text: "How to trade the LPS instead of the breakout",
        },
        {
          kind: "text",
          html: "Chasing the SOS bar means buying an extended candle with your stop far below — poor reward-to-risk. The disciplined play is to <strong>wait for the LPS</strong>: the first pullback that holds above the broken range top on thinning volume. You buy there with a stop just below the higher low, which sits much closer than a stop under the whole range. Same idea, tighter risk, and the market has already proven demand won by breaking out.",
        },
        {
          kind: "example",
          title: "Buying the last point of support after an SOS",
          steps: [
            "A stock accumulates between <strong>€30</strong> and <strong>€33</strong>. A wide bar breaks €33 to <strong>€34.20</strong> on volume triple the average — a clear <strong>sign of strength</strong>. You do not chase it.",
            "Price pulls back over the next few days to <strong>€33.30</strong> on <strong>light volume</strong> and holds above the old range top — the last point of support, a higher low.",
            "You enter long at <strong>€33.40</strong> as the pullback stalls and turns up.",
            "Stop below the LPS at <strong>€32.60</strong>. Risk = <strong>€0.80 per share</strong> — a close there means the breakout is failing.",
            "Account <strong>€1,000</strong>, risk <strong>1% = €10</strong>. €0.80 risk per share sizes to <strong>12 shares</strong> (≈€401). The €3 cause projects toward ~€36, roughly <strong>3.25:1</strong>.",
            "Rule: a <strong>daily close under €32.60</strong> and you exit — an SOS confirms strength but never guarantees the trend continues.",
          ],
        },
        {
          kind: "key",
          text: "A sign of strength is a wide, high-volume rally out of the range — demand confirming the start of a possible markup.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with the sign of strength",
          items: [
            "<strong>Chasing the breakout bar.</strong> Buying the wide SOS candle puts your stop far below and buys the high tick. The LPS pullback offers a tighter, cheaper entry.",
            "<strong>Accepting a low-volume 'SOS'.</strong> A break that lacks expanding volume and wide spread is weak and prone to failing back into the range. Demand the effort.",
            "<strong>Trusting the SOS to guarantee a trend.</strong> Breakouts still fail and turn into upthrusts. An SOS shifts odds; it does not remove the need for a stop.",
            "<strong>Missing that the LPS must hold.</strong> If the pullback slices back into the range on strong volume, the breakout is failing — that is not a dip to buy, it's a reason to stand aside.",
            "<strong>Ignoring the higher-timeframe context.</strong> An SOS against a strong higher-timeframe downtrend is lower-odds. Prefer breakouts that agree with the bigger picture.",
          ],
        },
        {
          kind: "text",
          html: "An SOS confirms strength but <strong>does not guarantee</strong> a lasting trend; breakouts still fail and can turn into upthrusts. Prefer entries on the LPS with a stop below it, and let the market prove continuation rather than assuming it.",
        },
      ],
    },

    /* ============================================================ */
    /* 14. Sign of Weakness (SOW)                                   */
    /* ============================================================ */
    {
      slug: "sign-of-weakness",
      title: "Sign of Weakness (SOW)",
      summary:
        "The sign of weakness — a decisive, high-volume break down out of a distribution range — and how it confirms supply has taken control.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to recognise a sign of weakness and use it to confirm that a markdown may be beginning.",
      blocks: [
        {
          kind: "text",
          html: "A sign of weakness, or <strong>SOW</strong>, is the mirror of the SOS: a decisive break down out of a distribution range on expanding volume and wide down-candles. It confirms that supply has finally overpowered demand.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/14-sow.png",
          alt: "A sharp break down, sign of weakness",
          caption:
            "A wide, high-volume break below the range — a sign of weakness.",
        },
        {
          kind: "heading",
          text: "What makes it convincing",
        },
        {
          kind: "text",
          html: "A genuine SOW shows <strong>effort and result agreeing</strong> to the downside: heavy volume and wide spread driving price clearly below the range lows, with demand unable to defend support. It typically breaks prior swing lows, flipping structure from sideways to down.",
        },
        {
          kind: "text",
          html: "The weak rally that follows is often the <strong>last point of supply</strong> (LPSY) — a lower high that fails on light volume beneath the broken support. That failed bounce frequently offers a lower-risk short than selling the initial break.",
        },
        {
          kind: "heading",
          text: "How to trade the LPSY instead of the breakdown",
        },
        {
          kind: "text",
          html: "Selling the SOW bar means shorting an extended down-candle with your stop far above — poor reward-to-risk. The disciplined play is to <strong>wait for the LPSY</strong>: the first bounce that fails below the broken range floor on thinning volume. You short there with a stop just above the lower high, which sits much closer than a stop above the whole range. The market has already proven supply won by breaking down; you are just getting a cheaper entry.",
        },
        {
          kind: "example",
          title: "Shorting the last point of supply after an SOW",
          steps: [
            "A stock distributes between <strong>€70</strong> and <strong>€75</strong>. A wide bar breaks €70 to <strong>€68.60</strong> on volume triple the average — a clear <strong>sign of weakness</strong>. You do not chase it.",
            "Price bounces over the next few days to <strong>€69.70</strong> on <strong>light volume</strong> and stalls below the old range floor — the last point of supply, a lower high.",
            "You short at <strong>€69.50</strong> as the bounce fails and price rolls back down.",
            "Stop above the LPSY at <strong>€70.80</strong>. Risk = <strong>€1.30 per share</strong> — a close there means the breakdown is failing.",
            "Account <strong>€1,000</strong>, risk <strong>1% = €10</strong>. €1.30 risk per share sizes to <strong>7 shares</strong> (short). The €5 cause projects toward ~€65, roughly <strong>3.5:1</strong>.",
            "Rule: a <strong>daily close above €70.80</strong> and you cover — an SOW confirms weakness but never guarantees the markdown continues.",
          ],
        },
        {
          kind: "key",
          text: "A sign of weakness is a wide, high-volume break down out of the range — supply confirming the start of a possible markdown.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with the sign of weakness",
          items: [
            "<strong>Chasing the breakdown bar.</strong> Shorting the wide SOW candle puts your stop far above and sells the low tick. The LPSY bounce offers a tighter, cheaper entry.",
            "<strong>Accepting a low-volume 'SOW'.</strong> A break lacking expanding volume and wide spread is weak and prone to snapping back into the range as a spring. Demand the effort.",
            "<strong>Trusting the SOW to guarantee a downtrend.</strong> Breakdowns fail and turn into springs. An SOW shifts odds; it does not remove the need for a stop.",
            "<strong>Missing that the LPSY must fail.</strong> If the bounce reclaims the range on strong volume, the breakdown is failing — cover or stand aside rather than adding.",
            "<strong>Ignoring the higher-timeframe context.</strong> An SOW against a strong higher-timeframe uptrend is lower-odds. Prefer breakdowns that agree with the bigger picture.",
          ],
        },
        {
          kind: "text",
          html: "An SOW confirms weakness but <strong>is not a guarantee</strong>; breakdowns fail and can turn into springs. Prefer entries on the LPSY with a stop above it, keep size sensible, and let price confirm the markdown rather than front-running it.",
        },
      ],
    },

    /* ============================================================ */
    /* 15. Wyckoff Schematics                                       */
    /* ============================================================ */
    {
      slug: "wyckoff-schematics",
      title: "Wyckoff Schematics",
      summary:
        "The labelled event maps for accumulation and distribution — PS, SC, AR, ST, Spring, Test, SOS, LPS and their distribution mirrors — and how to use them.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to name the key events in the Wyckoff schematics and read them as a sequence rather than isolated points.",
      blocks: [
        {
          kind: "text",
          html: "Wyckoff summarised his ideas in <strong>schematic diagrams</strong> that label the events inside accumulation and distribution ranges. They are idealised maps — a shared vocabulary for the sequence of behaviour, not templates that any real chart will match exactly.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/15-schematics.png",
          alt: "Wyckoff accumulation schematic with labeled events SC AR ST Spring Test SOS LPS",
          caption:
            "The accumulation schematic with its labelled events — an idealised map.",
        },
        {
          kind: "heading",
          text: "Accumulation events",
        },
        {
          kind: "list",
          items: [
            "PS (preliminary support): early buying appears as the decline slows.",
            "SC (selling climax): a sharp, high-volume capitulation low.",
            "AR (automatic rally): a sharp bounce as selling dries up, setting the range top.",
            "ST (secondary test): a return toward the SC lows on lighter volume.",
            "Spring: a false break below support that shakes out sellers.",
            "Test: a low-volume retest confirming supply is gone.",
            "SOS (sign of strength): a wide, high-volume rally out of the range.",
            "LPS (last point of support): a higher low on the pullback after the SOS.",
          ],
        },
        {
          kind: "heading",
          text: "Distribution events (the mirror)",
        },
        {
          kind: "list",
          items: [
            "BC (buying climax): a sharp, high-volume surge that marks the top.",
            "AR (automatic reaction): a sharp drop that sets the range bottom.",
            "ST (secondary test): a return toward the highs on lighter volume.",
            "UTAD (upthrust after distribution): a final failed break above resistance.",
            "SOW (sign of weakness): a wide, high-volume break down out of the range.",
            "LPSY (last point of supply): a lower high on the bounce after the SOW.",
          ],
        },
        {
          kind: "text",
          html: "The value is in the <strong>sequence and logic</strong>, not the labels themselves. A climax leads to an automatic move, which defines the range; tests probe the extremes; a spring or upthrust shakes the wrong side; and a sign of strength or weakness confirms the resolution.",
        },
        {
          kind: "heading",
          text: "How to use the schematic as a checklist",
        },
        {
          kind: "text",
          html: "Do not hunt for a chart that matches the diagram pixel-for-pixel — use the schematic as a <strong>sequence checklist</strong>. Ask in order: has there been a climax and automatic move to define the range? Have the extremes been tested on lighter volume? Has a spring or upthrust shaken the obvious side? And has a sign of strength or weakness confirmed direction? The more events you can tick off <strong>in order</strong>, the higher-confidence the read. Missing or out-of-order events mean a lower-confidence setup, not an automatic no-trade.",
        },
        {
          kind: "example",
          title: "Walking an accumulation schematic on a live chart",
          steps: [
            "A stock sells off into a <strong>selling climax (SC)</strong> at €48 on huge volume, then bounces to €53 — the <strong>automatic rally (AR)</strong> — defining a range of €48–€53.",
            "Price returns to <strong>€48.50 (secondary test, ST)</strong> on lighter volume — supply is thinning. The range is maturing.",
            "Weeks later a <strong>spring</strong> stabs to €47.20 and snaps back inside; a low-volume <strong>test</strong> holds at €48.80. The last sellers are out.",
            "A wide bar breaks €53 to <strong>€54.50 (SOS)</strong> on heavy volume. You wait for the <strong>LPS</strong> pullback to €53.30 and buy at <strong>€53.40</strong>, stop at <strong>€52.40</strong> (risk €1.00).",
            "Account <strong>€1,000</strong>, risk <strong>1% = €10</strong>, so <strong>10 shares</strong> (≈€534). The €5 cause projects toward ~€58, roughly <strong>4.6:1</strong>.",
            "Because you ticked every event in order, this is a high-confidence read — but a <strong>close under €52.40</strong> still means out.",
          ],
        },
        {
          kind: "key",
          text: "Schematics are a vocabulary for the accumulation and distribution sequence — read the story they tell, not the exact shape.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes with schematics",
          items: [
            "<strong>Force-fitting the diagram onto every chart.</strong> Real charts skip events, reorder them, and repeat them. If you have to squint to see the schematic, it probably isn't there.",
            "<strong>Labelling in hindsight and calling it skill.</strong> It is easy to name a spring after the rally. In real time the same bar could be a genuine breakdown — the labels are provisional.",
            "<strong>Treating a single event as a trade.</strong> One ST or one AR is not a setup. The edge is in the sequence confirming, not in spotting a lone label.",
            "<strong>Waiting for a 'perfect' schematic and missing the trade — or forcing an imperfect one.</strong> Balance matters: demand enough of the sequence to trust it, but accept that clean textbook shapes are rare.",
            "<strong>Dropping risk management because the schematic 'confirmed'.</strong> A fully-labelled range still fails. Every entry needs a stop beyond the event and a small position size.",
          ],
        },
        {
          kind: "text",
          html: "Real charts <strong>rarely match</strong> the textbook. Events appear out of order, get skipped, or repeat, and hindsight makes labelling look easier than it is in real time. Use the schematic as a checklist of what to look for, then defer to what price and volume actually do.",
        },
      ],
    },

    /* ============================================================ */
    /* 16. Wyckoff + Price Action                                   */
    /* ============================================================ */
    {
      slug: "wyckoff-price-action",
      title: "Wyckoff + Price Action",
      summary:
        "How to combine a Wyckoff read of the range with a price-action trigger — for example pairing a spring with a bullish reversal candle.",
      readingMinutes: 10,
      objective:
        "After this module you'll be able to use Wyckoff for context and price action for a precise, lower-risk entry trigger.",
      blocks: [
        {
          kind: "text",
          html: "Wyckoff tells you <strong>where and why</strong> to look; price action gives you a precise <strong>trigger and stop</strong>. Combining them means you only act on a Wyckoff idea when the individual candles confirm it, which sharpens entries and defines risk.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/16-wyckoff-pa.png",
          alt: "Combining a spring with a bullish price action trigger",
          caption:
            "A spring for context plus a bullish reversal candle for the trigger.",
        },
        {
          kind: "heading",
          text: "Pairing context with a trigger",
        },
        {
          kind: "text",
          html: "Suppose you identify a spring at the bottom of an accumulation range. Rather than buying the moment price dips below support, you wait for a <strong>bullish reversal candle</strong> — a strong close back inside the range, or a pin bar off the spring low — to confirm buyers have actually shown up.",
        },
        {
          kind: "text",
          html: "The distribution side works the same way. An upthrust plus a <strong>bearish rejection candle</strong> at resistance gives both the Wyckoff reason and the price-action confirmation to consider a short, with the candle's high marking a natural risk point.",
        },
        {
          kind: "list",
          items: [
            "Context: spring, upthrust, SOS or SOW from the range read.",
            "Trigger: a confirming reversal or breakout candle.",
            "Stop: beyond the spring low or upthrust high the trigger relies on.",
            "Alignment: prefer trades that agree with the higher-timeframe trend.",
          ],
        },
        {
          kind: "heading",
          text: "How the trigger tightens your risk",
        },
        {
          kind: "text",
          html: "The practical payoff of pairing the two is a <strong>tighter, cleaner stop</strong>. Instead of buying somewhere in the range and stopping under the whole thing, you wait for a reversal candle at the spring low and stop just below <strong>that candle's low</strong>. The Wyckoff context tells you the shakeout is likely genuine; the candle gives you a precise entry and a nearby invalidation. Smaller risk per share at the same account risk means a <strong>larger, safer size</strong> or a better reward-to-risk.",
        },
        {
          kind: "example",
          title: "Spring context plus a pin-bar trigger",
          steps: [
            "EUR/USD accumulates between <strong>1.0800</strong> and 1.0920. Price springs to <strong>1.0770</strong> and snaps back — Wyckoff context says the shakeout is likely genuine.",
            "Rather than buying blind, you wait for the trigger: a <strong>bullish pin bar</strong> forms off the spring low with a long lower wick, closing back at 1.0815.",
            "You enter long at <strong>1.0820</strong>, just above the pin bar's high, once the next bar confirms.",
            "Stop below the <strong>pin bar's low</strong> at 1.0765 — a tight 55 pips, far closer than a stop under the whole range would be. Risk = <strong>55 pips</strong>.",
            "Account <strong>€1,000</strong>, risk <strong>1% = €10</strong>. A 55-pip stop sizes to about <strong>0.018 lots</strong>. Target the range top near 1.0920, ~100 pips, roughly <strong>1.8:1</strong>; a break beyond improves it.",
            "Invalidation is clean: a <strong>close below 1.0765</strong> and you exit — the candle you relied on has failed.",
          ],
        },
        {
          kind: "key",
          text: "Use Wyckoff for context and price action for the trigger — act only when the candles confirm the story.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes combining the two",
          items: [
            "<strong>Taking the context without a trigger.</strong> 'It's a spring' is not an entry. Without a confirming candle you are buying hope with a distant stop.",
            "<strong>Taking a trigger with no context.</strong> A pretty pin bar in the middle of nowhere is just a candle. It needs the Wyckoff location — spring, upthrust, SOS, SOW — to mean anything.",
            "<strong>Believing confirmation removes risk.</strong> Two tools agreeing lowers some false starts but guarantees nothing. Triggers fail; the stop still has to be there.",
            "<strong>Chasing after the trigger fires.</strong> Entering three bars late gives back the tight stop the candle offered. Enter at the trigger or skip it.",
            "<strong>Fighting the higher timeframe.</strong> A confirmed long against a strong daily downtrend is lower-odds. Prefer setups that agree with the bigger picture.",
          ],
        },
        {
          kind: "text",
          html: "Combining tools reduces some false starts but <strong>removes no risk</strong>. Confirmation can still fail, and waiting for it sometimes means a worse price. The point is a cleaner, definable stop — not certainty about the outcome.",
        },
      ],
    },

    /* ============================================================ */
    /* 17. Building a Wyckoff Setup                                 */
    /* ============================================================ */
    {
      slug: "wyckoff-setup",
      title: "Building a Wyckoff Setup",
      summary:
        "A five-step checklist that turns the whole method into a repeatable process — from identifying the phase to defining entry, stop and target.",
      readingMinutes: 11,
      objective:
        "After this module you'll be able to walk a chart through a repeatable Wyckoff checklist and define a complete trade with risk in mind.",
      blocks: [
        {
          kind: "text",
          html: "The final step is turning the method into a <strong>repeatable process</strong>. A checklist keeps you honest, stops you forcing trades, and makes it easy to review what worked and what didn't after the fact.",
        },
        {
          kind: "image",
          src: "/learn/wyckoff/17-setup.png",
          alt: "A five-step Wyckoff setup checklist",
          caption:
            "Five steps: phase, law check, event, trigger, and risk plan.",
        },
        {
          kind: "heading",
          text: "The five-step checklist",
        },
        {
          kind: "list",
          items: [
            "1. Identify the phase — accumulation, distribution, or a re-phase within a trend.",
            "2. Apply the three laws — supply/demand direction, cause size, and effort vs result.",
            "3. Wait for a key event — a spring, upthrust, SOS or SOW.",
            "4. Get a trigger — a confirming price-action candle at the level.",
            "5. Define risk — entry, stop beyond the event, and a target from the cause.",
          ],
        },
        {
          kind: "text",
          html: "Notice that <strong>risk comes last but decides everything</strong>. The stop sits beyond the spring low or upthrust high, position size is set so a full stop is a small, survivable loss, and the target is a reasoned estimate from the cause — never a promise.",
        },
        {
          kind: "text",
          html: "If any step is missing, there is <strong>no trade</strong>. A phase without a confirming event, or an event without a trigger, is a watch-list item — not a reason to commit capital. Discipline in skipping incomplete setups is what protects the account over time.",
        },
        {
          kind: "heading",
          text: "How to size and manage the trade",
        },
        {
          kind: "text",
          html: "Sizing flows mechanically from the stop. Fix your <strong>account risk per trade</strong> — 1% of a €1,000 account is €10 — then divide by the distance from entry to stop to get position size. Never widen the stop to fit a bigger position; if the stop is too far for a sensible size, the trade is <strong>too expensive</strong> and you skip it. Once in, manage the same way every time: bank part near the cause-based target, trail the rest behind structure, and let the invalidation take you out without debate.",
        },
        {
          kind: "example",
          title: "A full setup walked through the checklist",
          steps: [
            "<strong>Phase:</strong> a stock has accumulated for weeks between €60 and €65 after a decline — a candidate accumulation range.",
            "<strong>Laws:</strong> dips to €60 come on shrinking volume (supply/demand favours buyers), the €5 base stores decent cause, and a recent absorption bar showed effort without downside result.",
            "<strong>Event:</strong> a spring stabs to €58.80 and recovers inside; a low-volume test holds at €60.40.",
            "<strong>Trigger:</strong> a bullish outside bar closes at €61.20. You enter at <strong>€61.30</strong>, stop below the test at <strong>€59.90</strong> — risk <strong>€1.40 per share</strong>.",
            "<strong>Risk:</strong> account €1,000, 1% = €10. €1.40 risk per share → <strong>7 shares</strong> (≈€429). The €5 cause projects toward ~€66, roughly <strong>3.4:1</strong>. You bank half at €66 and trail the rest.",
            "Invalidation: a <strong>daily close under €59.90</strong> and you are out for a planned ~€10 loss — every step present, risk defined before entry.",
          ],
        },
        {
          kind: "key",
          text: "Phase, laws, event, trigger, risk — five steps, and if any is missing there is no trade.",
        },
        {
          kind: "mistakes",
          title: "Common beginner mistakes building a setup",
          items: [
            "<strong>Skipping steps because a chart 'looks ready'.</strong> A phase with no event, or an event with no trigger, is incomplete. Trading it anyway is how the checklist gets abandoned.",
            "<strong>Widening the stop to fit a bigger size.</strong> This inverts the whole method. Size follows the stop, never the reverse — if the stop is too far, skip the trade.",
            "<strong>Forcing setups out of boredom.</strong> No qualifying setup means no trade. Sitting on your hands is a position, and often the correct one.",
            "<strong>Treating the cause target as a guarantee.</strong> The projected objective is an estimate. Bank partials, trail the rest, and manage what price actually does on the way.",
            "<strong>Over-risking a 'high-confidence' read.</strong> A fully-checked setup still fails regularly. Risk the same fixed percentage every time so no single loss can hurt the account.",
          ],
        },
        {
          kind: "text",
          html: "The Wyckoff method is a <strong>framework for interpretation</strong>, not a source of certainty. Schematics are idealised, real charts are messier, and no range resolves the same way twice. Used with strict risk management it can structure your thinking — but it offers no signals, guarantees, or shortcuts to easy money.",
        },
      ],
    },
  ],
};
