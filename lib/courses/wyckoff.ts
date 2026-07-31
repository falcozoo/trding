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
      readingMinutes: 6,
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
          kind: "text",
          html: "The method is an <strong>interpretation</strong>, not a mechanical signal generator. It gives you a story to test against the chart, and that story is only useful when it is confirmed by what price and volume actually do. Real charts are far messier than the tidy diagrams in a textbook.",
        },
        {
          kind: "key",
          text: "Wyckoff frames the market as a repeating cycle — accumulation, markup, distribution, markdown — driven by the balance between supply and demand.",
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
      readingMinutes: 5,
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
          kind: "key",
          text: "The composite operator is a thinking tool — imagine one informed hand behind the range and ask what it is trying to achieve.",
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
      readingMinutes: 5,
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
          kind: "key",
          text: "Three laws, three questions: which way, how far, and is it real? — supply/demand, cause/effect, effort/result.",
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
      readingMinutes: 6,
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
          kind: "key",
          text: "Price rises when demand overpowers supply and falls when supply overpowers demand — read who is winning at the range edges.",
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
      readingMinutes: 6,
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
          kind: "key",
          text: "A trading range is stored cause; the trend that follows is the effect — bigger, longer ranges can fuel bigger moves.",
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
      readingMinutes: 6,
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
          kind: "key",
          text: "Volume is effort, price movement is result — when heavy effort produces little result, the opposing side is quietly taking over.",
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
      readingMinutes: 7,
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
          kind: "key",
          text: "Accumulation is a range where selling is absorbed near the lows — the quiet groundwork for a later markup.",
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
      readingMinutes: 7,
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
          kind: "key",
          text: "Distribution is a range where buying is absorbed near the highs — the quiet groundwork for a later markdown.",
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
      readingMinutes: 6,
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
          kind: "key",
          text: "Re-accumulation is accumulation inside an uptrend — a pause that stores fuel for the next leg up.",
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
      readingMinutes: 6,
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
          kind: "key",
          text: "Re-distribution is distribution inside a downtrend — a pause that stores fuel for the next leg down.",
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
      readingMinutes: 7,
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
          kind: "key",
          text: "A spring is a shakeout below support that recovers fast — enter on the reclaim or test, with a stop below the spring low.",
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
      readingMinutes: 7,
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
          kind: "key",
          text: "An upthrust is a failed breakout above resistance — enter short on the reclaim failure, with a stop above the upthrust high.",
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
      readingMinutes: 6,
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
          kind: "key",
          text: "A sign of strength is a wide, high-volume rally out of the range — demand confirming the start of a possible markup.",
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
      readingMinutes: 6,
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
          kind: "key",
          text: "A sign of weakness is a wide, high-volume break down out of the range — supply confirming the start of a possible markdown.",
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
      readingMinutes: 8,
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
          kind: "key",
          text: "Schematics are a vocabulary for the accumulation and distribution sequence — read the story they tell, not the exact shape.",
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
      readingMinutes: 7,
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
          kind: "key",
          text: "Use Wyckoff for context and price action for the trigger — act only when the candles confirm the story.",
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
      readingMinutes: 7,
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
          kind: "key",
          text: "Phase, laws, event, trigger, risk — five steps, and if any is missing there is no trade.",
        },
        {
          kind: "text",
          html: "The Wyckoff method is a <strong>framework for interpretation</strong>, not a source of certainty. Schematics are idealised, real charts are messier, and no range resolves the same way twice. Used with strict risk management it can structure your thinking — but it offers no signals, guarantees, or shortcuts to easy money.",
        },
      ],
    },
  ],
};
