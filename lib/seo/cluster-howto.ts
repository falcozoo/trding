import type { Lesson } from '../lessons';

/**
 * Step-by-step "how to actually do it" tutorial cluster.
 * Plain-English, beginner-focused, neutral, honest about risk.
 * Each guide answers one concrete "how to do X" task a beginner types
 * into Google or YouTube, with explicit numbered steps and, where money
 * is involved, an honest risk note. Anonymous/impersonal tone throughout:
 * we use "we" and "you", never any person's name. Correct for MetaTrader
 * (MT4/MT5) where relevant.
 */
export const CLUSTER_HOWTO: Lesson[] = [
  /* =============================================================== */
  /* (1) Place your first trade on MT4/MT5                           */
  /* =============================================================== */
  {
    slug: 'how-to-place-a-trade-on-mt4-mt5',
    title: 'How to place your first trade on MT4/MT5 (step by step)',
    summary:
      'A calm, numbered walkthrough of opening your first order in MetaTrader 4 or 5: finding the instrument, opening the order window, choosing volume, and confirming.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'Before you start',
        paragraphs: [
          'Placing a trade in MetaTrader takes about ten seconds once you know where the buttons are, but those ten seconds can cost you real money if you rush. The screen is dense and easy to misread, so it is worth practising the whole sequence on a demo account until it feels boring before you ever do it for real.',
          'This guide assumes you already have the platform installed and logged in. We will keep it to the essentials: pick a market, open the order window, set a small size, and confirm. Everything else — stops, targets, partial closes — has its own guide.',
        ],
      },
      {
        heading: 'The numbered steps',
        paragraphs: [
          'Step 1: Open the Market Watch panel (View → Market Watch, or Ctrl+M). This is the list of instruments with their live buy and sell prices. Find the market you want, for example EURUSD.',
          'Step 2: Double-click the instrument name, or right-click it and choose "New Order". A window titled "Order" opens showing the current Bid and Ask prices.',
          'Step 3: Check the "Volume" box. This is your trade size in lots. Set it small — 0.01 is the minimum on most accounts and is the sensible place to start. Do not accept the default of 1.00 without thinking; that is a full lot and is far too big for a beginner.',
          'Step 4: Leave "Type" as "Market Execution" for now, which means "trade at the current price". Ignore the pending-order options until you have read the guide on them.',
          'Step 5: Click the blue "Buy by Market" button if you expect the price to rise, or the red "Sell by Market" button if you expect it to fall. The window confirms your order and it appears in the "Trade" tab of the Terminal at the bottom of the screen.',
        ],
      },
      {
        heading: 'How to read what just happened',
        paragraphs: [
          'Once the trade is open, look at the Terminal (Ctrl+T) and the "Trade" tab. You will see the instrument, your volume, the price you got in at, and a floating profit-or-loss figure that updates every tick. Red means you are currently down, blue or green means up.',
          'That floating number is not real until you close the trade. It swings around constantly, and watching it too closely is a fast route to emotional decisions. The number matters only at the moment you exit.',
        ],
      },
      {
        heading: 'How to close the trade',
        paragraphs: [
          'To close, right-click the open position in the Trade tab and choose "Close Order", then confirm on the yellow "Close" button. On MT5 you can also close directly from the position row. The trade disappears and the result is added to your balance.',
          'Get comfortable opening and closing on demo until the sequence is second nature. Fumbling the close button while real money moves against you is exactly the kind of avoidable stress you want to have already trained away.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'A market order fills immediately at whatever price is available, which in fast conditions can be slightly worse than the price you saw. More importantly, a trade with no stop-loss has no built-in limit on how much it can lose. Before trading real money, read the guide on setting a stop-loss and take-profit so that every position you open has a planned exit.',
          'Start with the smallest size your broker allows, keep your first real trades tiny, and treat the early ones as tuition rather than income. Most beginners lose money at first; small sizes keep that lesson cheap.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (2) Move stop loss to break-even                               */
  /* =============================================================== */
  {
    slug: 'how-to-move-stop-loss-to-break-even',
    title: 'How to move a stop loss to break-even in MetaTrader',
    summary:
      'A step-by-step guide to shifting your stop-loss to your entry price once a trade moves in your favour, so a winner cannot turn back into a loser.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What "break-even" means',
        paragraphs: [
          'Moving your stop to break-even means dragging your stop-loss up to the price you entered at, so that if the market turns around and comes back, the trade closes for roughly zero rather than a loss. It is a simple way to protect a position that has started to work.',
          'It is not a magic trick. Moving to break-even too early is one of the most common ways beginners get stopped out of good trades by normal market noise, only to watch the price go on without them. Timing matters as much as the mechanics.',
        ],
      },
      {
        heading: 'The numbered steps in MetaTrader',
        paragraphs: [
          'Step 1: Wait until the trade is genuinely in profit and has moved a sensible distance — often traders wait until the price has moved at least as far as their original risk before touching the stop.',
          'Step 2: Open the Terminal (Ctrl+T), go to the "Trade" tab, and double-click the "S/L" value of your open position — or right-click the position and choose "Modify or Delete Order".',
          'Step 3: In the order window, set the "Stop Loss" price equal to your entry price (shown as the open price of the trade). Add a tiny buffer past entry if you want to cover the spread and commission so break-even is truly zero cost.',
          'Step 4: Click "Modify" to confirm. The stop-loss line on your chart jumps to your entry level, and the trade can no longer close for a loss (barring a price gap).',
        ],
      },
      {
        heading: 'Doing it on the chart or on mobile',
        paragraphs: [
          'On the desktop chart you can simply drag the dashed stop-loss line with your mouse up to the entry line, then release; the platform asks you to confirm the modification. On the mobile app, tap the open position, choose to modify it, and type the new stop-loss price.',
          'However you do it, double-check that you edited the stop-loss and not the take-profit, and that you are working on the correct position if you have several open at once.',
        ],
      },
      {
        heading: 'When not to rush it',
        paragraphs: [
          'The danger with break-even is impatience. If you tighten the stop the moment a trade is barely green, ordinary back-and-forth movement will often knock you out at zero and then continue in your original direction. Give the trade room to breathe based on where the market naturally moves, not on how nervous you feel.',
          'A stop moved to break-even removes downside on that trade, which feels good, but it also removes the buffer the trade needed to survive noise. There is a genuine trade-off, and no single rule fits every market or timeframe.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'Break-even protects you from a reversal but not from a price gap — in fast news or over a weekend, the price can jump straight past your stop, closing you at a worse level. It reduces risk; it does not remove it. Never treat a break-even stop as a guarantee that a trade cannot lose.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (3) Set a take profit                                          */
  /* =============================================================== */
  {
    slug: 'how-to-set-a-take-profit-order',
    title: 'How to set a take profit in MetaTrader (step by step)',
    summary:
      'How to attach a take-profit level to a trade so it closes automatically at your target, plus how to think about where the target should sit.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What a take-profit does',
        paragraphs: [
          'A take-profit is an order that automatically closes your trade once the price reaches a level you choose in your favour. It locks in a gain without you having to sit and watch the screen, and it takes the emotional decision of "when to sell" out of the heat of the moment.',
          'Setting a take-profit in advance, while you are calm, is one of the simplest ways to trade with a plan instead of reacting to every wiggle. It also lets you define your reward before you enter, which you can weigh against your risk.',
        ],
      },
      {
        heading: 'The numbered steps',
        paragraphs: [
          'Step 1: Decide your target price before or as you enter the trade. A common approach is to base it on a chart level — a previous high, a round number, or a distance that is a sensible multiple of your stop-loss distance.',
          'Step 2: If you are opening a new trade, type the target into the "Take Profit" field of the order window before clicking Buy or Sell. For a buy, the take-profit must sit above the current price; for a sell, below it.',
          'Step 3: To add or change a take-profit on an already-open trade, open the Terminal (Ctrl+T), double-click the "T/P" cell of the position, enter your target price, and click "Modify".',
          'Step 4: Confirm that the take-profit line appears on your chart at the right level and on the correct side of the price. When the market touches it, the trade closes automatically and the profit is added to your balance.',
        ],
      },
      {
        heading: 'Where to put the target',
        paragraphs: [
          'A take-profit that is too close gets hit constantly for tiny gains that barely cover costs; one that is too far away rarely gets reached. Many beginners find it helpful to relate the target to their stop distance — for example aiming for a reward at least as large as the amount risked — but there is no universally correct ratio.',
          'Chart structure often matters more than a fixed formula. Placing a target just before an obvious level where the price has previously stalled tends to work better than placing it just beyond, where the market may turn around before reaching you.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'A take-profit only closes you at your target if the market actually reaches it. Prices frequently come close and then reverse, so a fixed target will sometimes leave gains on the table and sometimes miss entirely. It is a tool for consistency, not a promise of profit.',
          'A take-profit is not a substitute for a stop-loss. The take-profit protects your upside plan; only a stop-loss limits your downside. Every trade should have both.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (4) Partial close of a position                                */
  /* =============================================================== */
  {
    slug: 'how-to-partially-close-a-position',
    title: 'How to do a partial close of a position in MetaTrader',
    summary:
      'How to close part of a trade to bank some profit or reduce risk while keeping the rest of the position running.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'Why traders close part of a trade',
        paragraphs: [
          'A partial close means shutting down only some of your position — for example closing half of it — while leaving the rest open. Traders do this to take some profit off the table, reduce their exposure, or free up margin while still keeping a stake in a move they think may continue.',
          'It is a middle path between the all-or-nothing choice of holding the whole trade or closing it entirely. Used sensibly it can smooth out results; used constantly it just multiplies your trading costs.',
        ],
      },
      {
        heading: 'The numbered steps in MetaTrader',
        paragraphs: [
          'Step 1: Open the Terminal (Ctrl+T) and go to the "Trade" tab. Right-click the open position you want to reduce and choose "Close Order" (on MT5, this opens the order/close dialog).',
          'Step 2: In the close window, change the "Volume" field to the amount you want to close, not the full size. If your position is 0.10 lots and you want to close half, enter 0.05.',
          'Step 3: Click the yellow "Close #... for ... by Market" button. The platform closes the volume you specified and leaves the remainder open as a separate, smaller position.',
          'Step 4: Check the Trade tab afterwards. You should now see the reduced position still running, with your remaining volume, entry price, and any stop-loss or take-profit still attached (you may need to reapply them on some setups).',
        ],
      },
      {
        heading: 'What happens to your stop and target',
        paragraphs: [
          'After a partial close you are holding a smaller position, so the money at risk from your stop-loss is now smaller too, and the money your take-profit would deliver is smaller as well. Many traders use a partial close together with moving the remaining stop to break-even, so the leftover portion is a "free" runner.',
          'Double-check that a stop-loss is still attached to the remaining position. If for any reason it is not, the leftover trade is running unprotected, which defeats the purpose of banking part of it for safety.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'Each partial close is a separate trade and carries its own share of spread and, on some accounts, commission. Doing it repeatedly out of nerves will quietly erode your results. Partial closing is a planned tool, not something to reach for every time a trade wobbles.',
          'Taking some profit early feels safe, but it also caps how much your best trades can earn. There is a real trade-off between locking in gains and letting winners run, and no setting is right for everyone.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (5) Set a trailing stop                                        */
  /* =============================================================== */
  {
    slug: 'how-to-set-a-trailing-stop',
    title: 'How to set a trailing stop in MetaTrader',
    summary:
      'How to attach a trailing stop that follows the price in your favour, plus the important limitation that it only works while the platform is running.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What a trailing stop is',
        paragraphs: [
          'A trailing stop is a stop-loss that automatically follows the price as it moves in your favour, staying a fixed distance behind. If the price keeps rising on a buy, the stop rises with it, locking in more and more of the gain; if the price then turns and falls by your chosen distance, the trade closes.',
          'The appeal is that it lets a winning trade run while still protecting the profit already made, without you having to babysit the chart. The catch, explained below, is a real one that catches many beginners out.',
        ],
      },
      {
        heading: 'The numbered steps in MetaTrader',
        paragraphs: [
          'Step 1: Open the trade first — a trailing stop can only be attached to a position that already exists.',
          'Step 2: In the Terminal (Ctrl+T), go to the "Trade" tab and right-click your open position. Choose "Trailing Stop" from the menu.',
          'Step 3: Pick a distance in points from the list (for example 15, 25, or 50 points), or choose "Custom" to type your own. This is how far behind the price the stop will trail.',
          'Step 4: The stop now moves automatically in your favour as the price advances, and never moves backwards. To switch it off, return to the same menu and choose "Delete All" or "None".',
        ],
      },
      {
        heading: 'The limitation you must know',
        paragraphs: [
          'In standard MetaTrader, a trailing stop is handled by the platform on your own computer, not by the broker\'s server. That means it only updates while MetaTrader is open and connected. If you close the platform or lose your internet connection, the trailing stop stops trailing and your protection freezes at its last level.',
          'For that reason, many traders also set a normal, server-side stop-loss as a backstop. The trailing stop then manages the profit while you are watching, and the fixed stop protects you if your platform goes offline.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'A trailing stop set too tight will get knocked out by ordinary market noise, closing you early and often. Set too wide, it gives back a lot of profit before triggering. There is no perfect distance; it depends on how much the market you trade normally moves.',
          'Like any stop, a trailing stop cannot protect against a price gap that jumps clean past it. It reduces risk and automates good habits, but it is not a guarantee against a larger-than-expected loss.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (6) Calculate lot size / position size                         */
  /* =============================================================== */
  {
    slug: 'how-to-calculate-lot-size-for-a-trade',
    title: 'How to calculate lot size (position sizing) with an example',
    summary:
      'A worked, step-by-step method for sizing a trade so a loss costs a fixed, small amount, based on your account, your risk percentage, and your stop distance.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 7,
    body: [
      {
        heading: 'Why sizing comes before entering',
        paragraphs: [
          'Position sizing decides how large your trade is so that, if your stop-loss is hit, you lose only a small, pre-decided amount. It is the single most powerful risk tool you have, and getting it right matters far more than being right about direction.',
          'The logic runs backwards from most beginners\' instincts. You do not pick a lot size and hope; you decide how much you are willing to lose, decide where your stop goes, and let those two numbers tell you the correct size.',
        ],
      },
      {
        heading: 'The three numbers you need',
        paragraphs: [
          'You need: (a) how much money you are willing to risk on the trade — often a small percentage of your account, such as 1%; (b) your stop-loss distance in pips — how far the price would have to move against you to hit your stop; and (c) the value of one pip per lot for the instrument you are trading.',
          'The pip value depends on the instrument and your account currency. Your platform or your broker\'s specification shows it, and MetaTrader has a built-in trading calculator; you do not have to memorise it.',
        ],
      },
      {
        heading: 'The numbered method, with a worked example',
        paragraphs: [
          'Step 1: Find your risk amount. On a €1,000 account risking 1%, that is €10.',
          'Step 2: Decide your stop distance in pips. Say your plan puts the stop 20 pips away.',
          'Step 3: Work out risk per pip: divide your risk amount by your stop distance. €10 ÷ 20 pips = €0.50 per pip. That is the most each pip of movement may cost you.',
          'Step 4: Convert to lots using the pip value. On a standard forex pair, one full lot is roughly €10 per pip, and 0.01 lots (a micro lot) is roughly €0.10 per pip. To get €0.50 per pip you need about 0.05 lots.',
          'Step 5: Round down, never up. If the exact figure is 0.053, use 0.05. Rounding up quietly increases your risk beyond the amount you decided on.',
        ],
      },
      {
        heading: 'Let the platform check your maths',
        paragraphs: [
          'MetaTrader includes a trading calculator, and most brokers offer a position-size calculator on their website. Use one to confirm your hand calculation until the numbers feel familiar. It is easy to slip a decimal place, and a slipped decimal can turn a 1% risk into a 10% risk.',
          'Whatever you use, the discipline is the same every single time: set the risk, set the stop, then size the trade to fit. Never size the trade to fit the profit you are hoping for.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'Correct sizing caps your intended loss, but the actual loss can be larger if the price gaps past your stop, and pip values shift with exchange rates on cross pairs. Treat your calculation as a careful estimate, not a hard ceiling.',
          'Beginners almost universally trade too big. If in doubt, size smaller. A position that feels almost too small to bother with is usually about right while you are learning.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (7) Read a candlestick                                         */
  /* =============================================================== */
  {
    slug: 'how-to-read-a-single-candlestick',
    title: 'How to read a candlestick (open, close, wicks)',
    summary:
      'A beginner walkthrough of what a single candlestick tells you: body, wicks, colour, and how to read one step by step without over-reading it.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What one candle represents',
        paragraphs: [
          'Each candlestick summarises the price action over one slice of time — one minute, one hour, one day, whatever your chart\'s timeframe is set to. It packs four numbers into a single shape: the open, the close, the highest price, and the lowest price during that period.',
          'Learning to read one candle at a glance is a genuinely useful skill. Reading too much into a single candle, on the other hand, is a common beginner trap; candles are hints about behaviour, not signals to trade on their own.',
        ],
      },
      {
        heading: 'The anatomy',
        paragraphs: [
          'The thick middle part is the "body", stretching between the open and the close. The thin lines above and below are the "wicks" (or shadows), reaching to the highest and lowest prices touched during the period.',
          'Colour shows direction. A bullish candle (often green or white) closed higher than it opened. A bearish candle (often red or black) closed lower than it opened. The colours are just a convention you can change in the platform settings.',
        ],
      },
      {
        heading: 'How to read one, step by step',
        paragraphs: [
          'Step 1: Note the colour. Green or hollow means buyers won that period; red or filled means sellers won.',
          'Step 2: Look at the body size. A long body means the price moved decisively from open to close. A short body means the open and close finished close together — indecision.',
          'Step 3: Look at the wicks. A long lower wick means the price dropped but buyers pushed it back up. A long upper wick means it rose but sellers pushed it back down. Wicks show where a move was rejected.',
          'Step 4: Read the whole shape in context. A small body with long wicks on both sides is a "doji"-like candle suggesting a balance of buyers and sellers, but it only means something relative to the candles around it.',
        ],
      },
      {
        heading: 'Reading candles in sequence, not alone',
        paragraphs: [
          'The real information is in how candles line up. A run of long green bodies tells a different story from a single green candle after a long fall. Always read a candle against its neighbours and the broader trend rather than in isolation.',
          'Beginners often memorise fancy candlestick pattern names and then trade every one they spot. That tends to lose money. Patterns can add a little context, but they are not reliable buy or sell signals by themselves.',
        ],
      },
      {
        heading: 'An honest note',
        paragraphs: [
          'No candlestick predicts the future. It describes what already happened in one period. Treat candles as a way to read the mood of the market, not as instructions, and never risk money on a single candle "pattern" alone.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (8) Buy limit vs buy stop                                      */
  /* =============================================================== */
  {
    slug: 'how-to-place-buy-limit-vs-buy-stop',
    title: 'How to place a buy limit vs a buy stop order',
    summary:
      'The difference between a buy limit and a buy stop, when each is used, and the exact steps to place either one in MetaTrader.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'The core difference',
        paragraphs: [
          'Both are "pending" orders — instructions to buy later, only if the price reaches a level you set. The difference is which side of the current price that level sits on. A buy limit is placed below the current price ("buy it if it drops to here"). A buy stop is placed above the current price ("buy it if it rises to here").',
          'The simple memory aid: a limit waits for a better price, a stop waits for confirmation that the price is already moving your way. They suit opposite ideas about what the market will do next.',
        ],
      },
      {
        heading: 'When each one is used',
        paragraphs: [
          'A buy limit suits a trader who thinks the price will dip to a support level and then bounce upward — they want to buy the dip at a cheaper price. A buy stop suits a trader who wants to buy only if the price breaks upward through a level, confirming momentum before committing.',
          'Neither is better; they express different plans. Using the wrong one for your idea is a classic beginner slip that puts your entry on the wrong side of the price.',
        ],
      },
      {
        heading: 'The numbered steps in MetaTrader',
        paragraphs: [
          'Step 1: Double-click the instrument in Market Watch to open the "Order" window.',
          'Step 2: Change the "Type" dropdown from "Market Execution" to "Pending Order".',
          'Step 3: In the pending-order "Type" field, choose "Buy Limit" if your price is below the current market, or "Buy Stop" if it is above. The platform will reject the wrong choice for the side you picked.',
          'Step 4: Enter the trigger price in the "at price" field, set your Volume small, and optionally add a Stop Loss and Take Profit.',
          'Step 5: Click "Place" to submit. The pending order appears on your chart as a dashed line and in the Trade tab, waiting; it becomes a live trade only if the price reaches your level.',
        ],
      },
      {
        heading: 'Managing a pending order',
        paragraphs: [
          'A pending order that never gets reached simply sits there doing nothing until it expires or you delete it. To remove or change one, right-click it in the Trade tab and choose "Modify or Delete Order". You can also drag its line on the chart to a new price.',
          'It is easy to forget about pending orders you left in place days ago. Review them regularly, because a stale order can suddenly fire on old logic when the market finally reaches it.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'A pending order can fill during fast news at a worse price than the level you set (slippage), and a buy stop in particular often triggers right as a breakout fails. Always attach a stop-loss to a pending order so a bad fill still has a defined limit.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (9) Set a pending order                                        */
  /* =============================================================== */
  {
    slug: 'how-to-set-a-pending-order',
    title: 'How to set a pending order in MetaTrader (all four types)',
    summary:
      'What a pending order is, the four types explained simply, and the steps to place, edit, and expire one so it fires only when you want it to.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'What a pending order is',
        paragraphs: [
          'A pending order is an instruction that turns into a real trade only when the price reaches a level you choose. Instead of trading now, you tell the platform "trade for me later, but only if the price gets here". It lets you plan an entry in advance and walk away.',
          'This is useful when you have identified a level worth trading but do not want to sit and watch for it, or when you want the discipline of a pre-set entry rather than clicking impulsively.',
        ],
      },
      {
        heading: 'The four types',
        paragraphs: [
          'Buy Limit: buy if the price falls to a level below the current price. Sell Limit: sell if the price rises to a level above it. Both "limit" orders wait for a better price than now.',
          'Buy Stop: buy if the price rises to a level above the current price. Sell Stop: sell if the price falls to a level below it. Both "stop" orders wait for the price to move first and confirm a direction.',
          'The two "limit" orders assume the price will reverse from your level; the two "stop" orders assume it will keep going through your level. Choosing the right one is about what you expect the price to do next.',
        ],
      },
      {
        heading: 'The numbered steps',
        paragraphs: [
          'Step 1: Double-click the instrument in Market Watch to open the order window.',
          'Step 2: Set "Type" to "Pending Order".',
          'Step 3: Choose one of the four types from the pending "Type" dropdown; the platform only allows the ones valid for the price you enter.',
          'Step 4: Enter your trigger price, a small Volume, and optionally a Stop Loss and Take Profit.',
          'Step 5: Optionally set an "Expiry" so the order deletes itself automatically if it is not triggered by a certain time. This stops old orders from firing on outdated logic.',
          'Step 6: Click "Place". The order waits as a dashed line on the chart until the market reaches it.',
        ],
      },
      {
        heading: 'Editing or cancelling',
        paragraphs: [
          'To change a pending order, right-click it in the Trade tab and choose "Modify or Delete Order", or drag its line on the chart. To cancel it entirely, choose "Delete" from the same menu. Nothing happens to your account until the order actually triggers.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'A pending order can fill at a worse price than its trigger during fast markets, and it may fire while you are away from the screen — so it should always carry a stop-loss. Set expiry times on orders based on a specific event, so a level you cared about last week does not surprise you next month.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (10) Close all trades at once                                  */
  /* =============================================================== */
  {
    slug: 'how-to-close-all-trades-at-once',
    title: 'How to close all your trades at once in MetaTrader',
    summary:
      'The fastest ways to flatten every open position — from the desktop menu to a one-click panel — and when doing so is the sensible move.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'Why you might want to',
        paragraphs: [
          'Sometimes you want out of everything quickly — before major news, at the end of your trading session, or because you have hit your daily loss limit and need to stop. Closing positions one by one is slow and stressful in those moments, so it helps to know the shortcuts.',
          'Closing everything is a legitimate risk control, but doing it in a panic is not. Know the buttons in advance so that when you decide to flatten, you can do it calmly and correctly.',
        ],
      },
      {
        heading: 'The numbered steps in MetaTrader 5',
        paragraphs: [
          'Step 1: Open the Toolbox (Ctrl+T) and go to the "Trade" tab, where every open position is listed.',
          'Step 2: Right-click anywhere in the list of open positions.',
          'Step 3: Choose the bulk option from the menu — MT5 offers items such as "Close all positions", and can also close all profitable, all losing, or all in one direction.',
          'Step 4: Confirm. The platform closes each position at the current market price, one after another, and the Trade tab empties.',
        ],
      },
      {
        heading: 'On MT4 and mobile',
        paragraphs: [
          'MT4 does not have a native "close all" button in the standard build; you close positions individually, or you use the one-click trading panel or a small helper tool if your broker provides one. On both MT4 and MT5 mobile apps, you generally close positions one at a time by tapping each and choosing close.',
          'If you rely on being able to flatten fast, test exactly how your platform and broker handle it on a demo account first, so you are not learning the process under pressure.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'Closing everything at market means you take whatever price is available right now, which in fast conditions can be poor. That is usually an acceptable price to pay for certainty, but be aware you are choosing speed over price. Bulk-closing does not undo losses already incurred; it simply stops them growing.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (11) Add an indicator                                          */
  /* =============================================================== */
  {
    slug: 'how-to-add-an-indicator-on-mt4-mt5',
    title: 'How to add an indicator on MT4/MT5',
    summary:
      'The steps to attach a built-in indicator like a moving average to your chart, adjust its settings, and remove it — with a caution against indicator overload.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What an indicator is',
        paragraphs: [
          'An indicator is a calculation drawn on top of your chart to help you read price action — a moving average, for instance, smooths the price into a line so a trend is easier to see. MetaTrader ships with dozens of built-in indicators, and you can add downloaded ones too.',
          'Indicators do not predict the future; they summarise the past in a particular way. Used sparingly they can clarify what you are looking at. Piled on top of each other they mostly create noise and false confidence.',
        ],
      },
      {
        heading: 'The numbered steps',
        paragraphs: [
          'Step 1: Open the Navigator panel (Ctrl+N) and expand the "Indicators" list, or use the top menu Insert → Indicators.',
          'Step 2: Find the indicator you want — for example "Moving Average" under Trend. Double-click it, or drag it onto your chart.',
          'Step 3: A settings window opens. Adjust the parameters (for a moving average, the period and the method) and the colour, then click OK.',
          'Step 4: The indicator appears on your chart. Some sit on the price itself (like moving averages); others open in a separate panel below (like the RSI or MACD).',
        ],
      },
      {
        heading: 'Editing and removing',
        paragraphs: [
          'To change an indicator later, right-click on it (or right-click the chart and choose "Indicators List"), select it, and open its properties. To remove one, right-click it and choose "Delete Indicator", or delete it from the Indicators List window.',
          'On MT5 the menus look slightly different but the ideas are identical: Navigator to add, right-click to edit or remove.',
        ],
      },
      {
        heading: 'A caution against clutter',
        paragraphs: [
          'It is tempting to add five indicators at once, but beginners who do this usually end up more confused, not less. Each indicator is just a re-arrangement of the same price data, so several of them often say the same thing in different colours.',
          'Start with one, learn what it actually tells you, and only add another if it answers a different question. A clean chart with one well-understood tool beats a crowded one you cannot read.',
        ],
      },
      {
        heading: 'An honest note',
        paragraphs: [
          'No indicator, and no combination of indicators, is a reliable buy or sell signal on its own. They are aids to reading the market, not a system that removes the risk of loss. Be especially wary of any downloaded indicator sold as a guaranteed money-maker.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (12) Open a demo account                                       */
  /* =============================================================== */
  {
    slug: 'how-to-open-a-demo-trading-account',
    title: 'How to open a demo trading account',
    summary:
      'How to open a free practice account with fake money and real prices, plus how to use it well so it actually teaches you something.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What a demo account is',
        paragraphs: [
          'A demo (or practice) account lets you place trades with pretend money on real, live prices. It costs nothing, risks nothing, and is by far the best place to make your beginner mistakes. Almost every regulated broker offers one, and MetaTrader can create one directly.',
          'The point of a demo is to learn the mechanics and test ideas without paying for the lesson in real money. Used properly it can save you a lot; skipped, it usually costs you.',
        ],
      },
      {
        heading: 'The numbered steps',
        paragraphs: [
          'Step 1: Choose a broker you can verify is properly regulated, or simply open a demo inside the MetaTrader platform itself.',
          'Step 2: In MetaTrader, go to File → Open an Account, choose a demo server, and fill in the basic form (name, a virtual balance, and a leverage setting). No deposit or ID is required for a pure demo.',
          'Step 3: Set the starting balance to something realistic — close to what you might actually trade with. A demo with a fantasy €1,000,000 balance teaches nothing useful about sizing.',
          'Step 4: Submit the form. The platform gives you a login and connects you to live prices with virtual funds. You can now place trades exactly as you would on a real account.',
        ],
      },
      {
        heading: 'How to use it well',
        paragraphs: [
          'Treat the demo money as if it were real. Trade the same small sizes you would use for real, keep a journal, and follow a plan. If you gamble on demo because "it doesn\'t matter", you are practising the exact habits that will hurt you later.',
          'Spend weeks here, not hours. Learn to place and close trades, set stops and targets, size positions, and read your profit and loss — until all of it is boring and automatic.',
        ],
      },
      {
        heading: 'An honest limitation',
        paragraphs: [
          'Demo trading feels different from real trading because you feel nothing when nothing is at stake. It teaches the mechanics but not the emotions, and demo fills can be more forgiving than live ones. Doing well on demo is a good start, not proof you will do well with real money.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (13) Switch demo to live                                       */
  /* =============================================================== */
  {
    slug: 'how-to-switch-from-demo-to-live-account',
    title: 'How to switch from a demo to a live account',
    summary:
      'How to move from practice to real money the careful way: the account steps, and the honest checklist to run before you deposit anything.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'This is a bigger step than it looks',
        paragraphs: [
          'Switching from demo to live is not just changing a login — it is the moment your decisions start costing and earning real money, and where the emotions that demo could never simulate finally show up. Take it slowly and deliberately.',
          'There is no rush. The market is not going anywhere. Moving to live before you are genuinely consistent on demo is one of the most common and most expensive beginner mistakes.',
        ],
      },
      {
        heading: 'A readiness checklist first',
        paragraphs: [
          'Before you deposit, ask honestly: Are you consistently following a written plan on demo? Do you size every trade to risk a small, fixed amount? Have you traded through both winning and losing streaks without abandoning your rules? Can you place, size, and manage trades without fumbling?',
          'If the answer to any of these is no, more demo time is the cheaper choice. Real money punishes gaps in your process that demo lets you get away with.',
        ],
      },
      {
        heading: 'The numbered steps to go live',
        paragraphs: [
          'Step 1: Confirm your broker is properly regulated by a serious authority. Never deposit with a broker you cannot verify.',
          'Step 2: Open a live account with the broker, which requires identity verification (KYC) — usually a photo ID and proof of address. This is normal and a sign the broker follows the rules.',
          'Step 3: In MetaTrader, log in to the live server with your new live credentials (File → Login to Trade Account), keeping the demo available so you can still practise.',
          'Step 4: Deposit a small amount you would be completely fine losing entirely — think of it as tuition. Set your leverage low.',
          'Step 5: Trade tiny sizes at first, smaller even than felt necessary on demo, until you have proven to yourself that your process survives real emotions.',
        ],
      },
      {
        heading: 'Expect it to feel different',
        paragraphs: [
          'Almost everyone behaves differently once real money is on the line, even a small amount. Trades you would have held on demo suddenly feel unbearable; targets you would have waited for suddenly feel too tempting to pass. This is normal and is exactly why you start small.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'Regulators consistently report that most retail traders lose money. Going live means accepting that you might lose everything you deposit. Only ever fund a live account with genuinely spare money, and know that deciding trading is not for you is a valid, sensible outcome.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (14) Modify an open trade                                      */
  /* =============================================================== */
  {
    slug: 'how-to-modify-an-open-trade',
    title: 'How to modify an open trade in MetaTrader',
    summary:
      'How to change the stop-loss or take-profit on a position you already hold, on desktop, chart, and mobile — and the discipline of when not to.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'What you can and cannot change',
        paragraphs: [
          'On an open trade you can add, move, or remove the stop-loss and take-profit. You cannot change the direction, the entry price, or the size of the original fill — though you can reduce size with a partial close. Modifying a trade is really about managing its exits.',
          'Knowing how to do this cleanly matters, but so does knowing when to leave a trade alone. The mechanics are easy; the discipline is the hard part.',
        ],
      },
      {
        heading: 'The numbered steps on desktop',
        paragraphs: [
          'Step 1: Open the Terminal (Ctrl+T) and go to the "Trade" tab.',
          'Step 2: Right-click the open position and choose "Modify or Delete Order" — or simply double-click the S/L or T/P value in the row.',
          'Step 3: In the window, type the new Stop Loss and/or Take Profit price. The platform will refuse values that are on the wrong side of the current price or too close to it.',
          'Step 4: Click "Modify" to apply. The stop and target lines on your chart jump to the new levels.',
        ],
      },
      {
        heading: 'On the chart and on mobile',
        paragraphs: [
          'On the desktop chart you can drag the stop-loss or take-profit line directly to a new price and confirm. On the mobile app, tap the open position, choose to modify it, and enter the new levels. The result is identical.',
          'Whichever route you use, double-check you edited the right line on the right trade, especially with several positions open at once.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'The most damaging modification is widening a stop-loss on a losing trade "to give it room". That is really just choosing to lose more, and it turns small, planned losses into large, unplanned ones. Move stops in your favour or leave them; moving them against yourself is how accounts get wrecked. Set your exits calmly before you enter, and resist editing them in the heat of the moment.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (15) Hedge a position                                          */
  /* =============================================================== */
  {
    slug: 'how-to-hedge-a-position',
    title: 'How to hedge a position in MetaTrader (and whether you should)',
    summary:
      'What hedging means, how to open an offsetting trade where the account allows it, and an honest look at why it is rarely the beginner solution it seems.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'What hedging means',
        paragraphs: [
          'Hedging, in its simplest form, means holding a buy and a sell on the same instrument at the same time, so that further movement in either direction is offset. The idea is to freeze your net exposure temporarily without closing the original trade.',
          'It sounds like a clever way to "pause" a losing trade, and that is exactly why beginners are drawn to it. In practice it often adds cost and complexity while solving nothing, so understanding the honest trade-offs matters as much as the mechanics.',
        ],
      },
      {
        heading: 'When it is even possible',
        paragraphs: [
          'Hedging only works if your account is a "hedging" account, not a "netting" one. On a netting account, opening an opposite trade simply reduces or closes your existing position instead of creating a second one. MT5 offers both types; MT4 is hedging by default. Some jurisdictions restrict or ban this practice entirely.',
          'Check your account type before assuming you can hedge. On MT5 it is shown in the account details, and your broker sets which types are available.',
        ],
      },
      {
        heading: 'The numbered steps (on a hedging account)',
        paragraphs: [
          'Step 1: Confirm your account allows hedging, and that it is permitted where you trade.',
          'Step 2: With your original trade open — say a buy — open the order window for the same instrument.',
          'Step 3: Place an opposite trade (a sell) of the size you want to hedge, using market execution.',
          'Step 4: You now hold both positions. Their floating profit and loss move in opposite directions, so your net exposure is roughly flat until you close one of them.',
        ],
      },
      {
        heading: 'Why it is rarely the answer',
        paragraphs: [
          'A perfect hedge locks in your current loss rather than fixing it — you are simply paying spread (and possibly swap on both legs) to hold a position that can no longer move for you or against you. You still have to decide when to unwind it, which is the same hard decision you were avoiding, plus extra cost.',
          'For almost every beginner, the honest alternative is simpler and cheaper: if you no longer want the exposure, just close the trade. A stop-loss set in advance does the protective job far more cleanly than a hedge does.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'Hedging doubles your trading costs, can incur overnight fees on both legs, and adds a second decision you now have to time correctly. It does not remove risk; it defers and complicates it. Treat it as an advanced tool with narrow uses, not as a rescue for a trade that has gone wrong.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (16) Set a price alert                                         */
  /* =============================================================== */
  {
    slug: 'how-to-set-a-price-alert',
    title: 'How to set a price alert in MetaTrader',
    summary:
      'How to have the platform notify you when a market reaches a level, so you can wait for your setup without staring at the screen all day.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'Why alerts beat staring',
        paragraphs: [
          'A price alert tells the platform to notify you — with a sound, a pop-up, or a push notification — when an instrument reaches a price you set. It frees you from watching the chart all day, which is both exhausting and a reliable route to impulsive, boredom-driven trades.',
          'Alerts let you decide your levels calmly in advance and then step away, returning only when the market actually does something you care about.',
        ],
      },
      {
        heading: 'The numbered steps on desktop',
        paragraphs: [
          'Step 1: Open the Toolbox (Ctrl+T) and click the "Alerts" tab at the bottom of the screen.',
          'Step 2: Right-click in the Alerts area and choose "Create".',
          'Step 3: Set the Symbol, choose the condition (for example "Bid >" a certain price, or "Ask <"), and type the price level you want to be alerted at.',
          'Step 4: Pick the action — a sound, or a "Notification" to push to the MetaTrader mobile app if you have linked it via your MetaQuotes ID.',
          'Step 5: Click OK. The alert waits quietly and fires once the price meets your condition.',
        ],
      },
      {
        heading: 'Getting alerts on your phone',
        paragraphs: [
          'To receive push notifications on mobile, install the MetaTrader app, find your MetaQuotes ID in the app settings, and enter it under Tools → Options → Notifications on the desktop platform. Then the "Notification" alert action reaches your phone even when the desktop is closed but running.',
          'Test one alert to confirm it actually arrives before you rely on it for anything important.',
        ],
      },
      {
        heading: 'An honest note',
        paragraphs: [
          'An alert is a reminder, not a trade. When one fires, resist the urge to jump in automatically — the alert only means the price reached your level, not that your full plan is met. Alerts help you wait patiently; they do not decide anything for you.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (17) One-click trading panel                                   */
  /* =============================================================== */
  {
    slug: 'how-to-use-the-one-click-trading-panel',
    title: 'How to use the one-click trading panel in MetaTrader',
    summary:
      'How to enable and use the fast buy/sell panel on the chart — and the real reasons to be careful with a feature that removes the confirmation step.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'What one-click trading is',
        paragraphs: [
          'One-click trading puts a small buy/sell panel in the top corner of the chart so you can place a trade with a single click, skipping the usual confirmation window. It is built for speed, which is exactly why it deserves a warning as much as a walkthrough.',
          'For most beginners the confirmation window is a feature, not a nuisance — it is the pause that catches a mistyped size or a wrong-direction click. Turn one-click on only once you truly understand what you are removing.',
        ],
      },
      {
        heading: 'The numbered steps',
        paragraphs: [
          'Step 1: Go to Tools → Options → Trade (on MT5, similar under Options) and tick "One Click Trading", then accept the disclaimer the platform shows you.',
          'Step 2: On the chart, click the small arrow in the top-left corner to unfold the one-click panel, or press Alt+T to toggle it.',
          'Step 3: Set the volume in the panel\'s box — carefully, because there is no second confirmation to catch an error.',
          'Step 4: Click "Sell" (left) or "Buy" (right). The trade is placed instantly at market with no pop-up. It appears in the Trade tab like any other position.',
        ],
      },
      {
        heading: 'The catch',
        paragraphs: [
          'With one-click on, a single misclick opens a real trade at whatever size is in the box, in whatever direction you clicked. There is no "are you sure?" There is no easy undo. The trade is live the instant you click.',
          'Because there is no confirmation, it is also easy to open a much larger position than intended if the volume box was left on a big number. Always glance at the volume before clicking.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'One-click trading also does not attach a stop-loss automatically, so a fat-fingered trade can be both instant and unprotected. If you use it, get into the habit of adding a stop immediately after, or leave one-click off until fast entries are genuinely part of your plan. For most beginners, keeping the confirmation window is the safer default.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (18) Read the margin level                                     */
  /* =============================================================== */
  {
    slug: 'how-to-read-your-margin-level',
    title: 'How to read your margin level in MetaTrader',
    summary:
      'What balance, equity, margin, free margin, and margin level mean in the Terminal, how to read the percentage, and why it warns you before a margin call.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'Where to find these numbers',
        paragraphs: [
          'Open the Terminal (Ctrl+T) and look at the "Trade" tab. When you have positions open, a summary row shows Balance, Equity, Margin, Free Margin, and Margin Level. These five numbers together tell you how much room your account has before the broker starts closing trades on you.',
          'They look intimidating at first, but each one has a plain meaning, and reading them is a core survival skill. Ignoring them is how beginners get surprised by a forced closure.',
        ],
      },
      {
        heading: 'What each number means',
        paragraphs: [
          'Balance is your account before counting open trades. Equity is your balance plus or minus the floating profit and loss of open trades — your account "right now". Margin is the deposit the broker is holding to keep your positions open. Free Margin is equity minus margin: what is left to open new trades or absorb losses.',
          'Margin Level is the key percentage: equity divided by used margin, times 100. A high percentage means plenty of breathing room; a low one means you are close to trouble.',
        ],
      },
      {
        heading: 'How to read the margin level, step by step',
        paragraphs: [
          'Step 1: Find the "Margin Level" figure in the Trade tab summary, shown as a percentage.',
          'Step 2: Understand the direction: it falls as your open trades move against you (equity drops) or as you add more positions (margin rises).',
          'Step 3: Know your broker\'s thresholds. Many brokers issue a margin call warning around 100% and begin automatically closing your worst positions (a "stop out") somewhere lower, such as 50%. These numbers are in your account terms.',
          'Step 4: Treat a falling margin level as an early warning. Well before it nears the stop-out level, you should be reducing size or closing trades — not hoping it recovers.',
        ],
      },
      {
        heading: 'Keeping the level healthy',
        paragraphs: [
          'The simplest way to keep a comfortable margin level is to trade small and not to open too many positions at once. Heavy leverage and oversized trades are what push the level down fast, leaving no cushion for normal market swings.',
          'If you never see the margin level get anywhere near the warning zone, you are probably sizing sensibly. If it dips low regularly, that is a clear signal you are trading too big.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'When the margin level hits the stop-out point, the broker closes positions for you, at market, whether you like it or not — often at the worst possible moment. That is not a glitch; it is the system protecting itself, and it can crystallise large losses instantly. Watching your margin level and sizing conservatively is how you avoid ever meeting it.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (19) Withdraw profits                                          */
  /* =============================================================== */
  {
    slug: 'how-to-withdraw-your-trading-profits',
    title: 'How to withdraw your trading profits',
    summary:
      'The normal steps to withdraw money from a regulated broker, why the same-method rule exists, and the red flags that signal a broker you should not have trusted.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'Withdrawing should be boring',
        paragraphs: [
          'With a properly regulated broker, taking your money out should be a routine, unremarkable process. You request a withdrawal, it is processed, and the funds arrive. If a broker makes this hard, that is one of the clearest warning signs there is.',
          'Knowing the normal steps helps you spot when something is not normal — because scam operations reliably make deposits effortless and withdrawals a nightmare.',
        ],
      },
      {
        heading: 'The numbered steps',
        paragraphs: [
          'Step 1: Make sure your account is fully verified (KYC complete). Brokers are legally required to confirm your identity before releasing funds, so do this early, not at withdrawal time.',
          'Step 2: Log in to the broker\'s client portal (not usually MetaTrader itself) and find the "Withdraw" or "Cashier" section.',
          'Step 3: Enter the amount and choose your method. Regulators generally require withdrawals to go back to the same source you deposited from — same card, same bank, same e-wallet — up to the amount deposited. This anti-fraud rule is normal.',
          'Step 4: Submit the request. The broker reviews it, and the money is sent. Card and e-wallet withdrawals are often quicker; bank transfers can take several business days.',
        ],
      },
      {
        heading: 'Why it can legitimately take a few days',
        paragraphs: [
          'A short processing delay is normal: the broker checks the request against anti-money-laundering rules, and the banking system itself adds time. A regulated broker will give you a clear timeframe and a status you can track.',
          'What is not normal is being unable to withdraw at all, being asked to trade a certain volume first before you can take out your own deposit, or being pressured to deposit more to "unlock" a withdrawal.',
        ],
      },
      {
        heading: 'Red flags to take seriously',
        paragraphs: [
          'Be alarmed if a broker demands a "tax", "fee", or "insurance" payment before releasing your funds; invents endless new verification steps only once you try to withdraw; freezes your account after a withdrawal request; or simply goes quiet. These are classic tactics of unregulated and fraudulent operations.',
          'If any of this happens, stop depositing immediately, gather your records, and check whether the broker is genuinely regulated. The guides on scam brokers and reporting them cover the next steps.',
        ],
      },
      {
        heading: 'An honest note',
        paragraphs: [
          'The best protection against withdrawal problems is chosen before you ever deposit: use only brokers you can verify are regulated by a serious authority, and test a small withdrawal early. Money you cannot get back was never really yours to count.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (20) Set leverage                                              */
  /* =============================================================== */
  {
    slug: 'how-to-set-your-leverage',
    title: 'How to set your leverage (and why lower is often wiser)',
    summary:
      'Where leverage is chosen, how to change it, and an honest explanation of why a high number is a risk multiplier rather than an opportunity.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What leverage actually is',
        paragraphs: [
          'Leverage lets you control a large position with a small amount of your own money. A leverage of 1:30 means €1 of your money can control €30 of position. It is marketed as a way to make bigger profits — but it magnifies losses exactly as much as gains, and it is a leading reason beginners lose money quickly.',
          'The number you choose is a ceiling on how much you can borrow, not an amount you must use. The real risk comes from how big you size your trades, which leverage merely permits.',
        ],
      },
      {
        heading: 'Where and how to set it',
        paragraphs: [
          'Step 1: Leverage is usually chosen at the account level, in the broker\'s client portal, not inside MetaTrader. Log in to the portal and find your account settings.',
          'Step 2: Look for a "Leverage" or "Maximum leverage" option, often a dropdown of values like 1:10, 1:30, 1:100 (regulated caps for retail clients are commonly around 1:30 on major pairs).',
          'Step 3: Choose the leverage you want and confirm. Some brokers apply it instantly; others require you to have no open trades first.',
          'Step 4: Verify the change in MetaTrader by opening the account information (right-click the account in the Navigator, or check the Journal), where the current leverage is shown.',
        ],
      },
      {
        heading: 'Why beginners should lean low',
        paragraphs: [
          'A lower leverage cap makes it physically harder to open a recklessly large position, which is a helpful guardrail while you are learning. With very high leverage, a small move against you can wipe out your deposit before you have time to react.',
          'Whatever the cap, your actual risk is decided by your position size and your stop-loss, not by the leverage number itself. Sensible sizing on high leverage can be safe; huge sizing on low leverage can still be dangerous. Leverage sets the maximum rope you are given — how much you use is up to you.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'Regulators repeatedly report that a large majority of retail traders lose money, and heavy leverage is a big part of why. Treat a high leverage offer as a warning sign of how much damage is possible, not as a perk. As a beginner, keep leverage modest and let your position sizing, not the leverage dial, control your risk.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (21) Change chart timeframe                                    */
  /* =============================================================== */
  {
    slug: 'how-to-change-the-chart-timeframe',
    title: 'How to change the chart timeframe in MetaTrader',
    summary:
      'The quick steps to switch between one-minute, hourly, daily and other timeframes, and how to pick one that suits how you actually trade.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'What the timeframe controls',
        paragraphs: [
          'The timeframe sets how much time each candlestick on your chart represents. On the M1 (one-minute) chart, every candle is one minute; on the D1 (daily) chart, every candle is a whole day. Switching timeframes does not change the price data — only how it is grouped.',
          'Zooming from a fast timeframe to a slow one is like stepping back from a painting: the detail blurs but the overall shape becomes clearer. Both views are useful for different questions.',
        ],
      },
      {
        heading: 'The numbered steps',
        paragraphs: [
          'Step 1: With a chart open, find the timeframe toolbar (View → Toolbars → Timeframes if it is hidden) — a row of buttons like M1, M5, M15, M30, H1, H4, D1, W1, MN.',
          'Step 2: Click the timeframe you want; the same chart instantly redraws with candles of that size.',
          'Step 3: Alternatively, right-click the chart, choose "Timeframes", and select from the menu. On the mobile app, tap the timeframe label at the top of the chart and choose from the list.',
          'Step 4: Confirm the change by checking the timeframe label shown on the chart or in its title bar.',
        ],
      },
      {
        heading: 'Choosing a timeframe that fits you',
        paragraphs: [
          'Fast timeframes (M1, M5) suit very short-term trading and demand constant attention; slower ones (H4, D1) suit trades held for days and let you check in occasionally. Beginners usually do better on slower timeframes, which give time to think and generate fewer, calmer decisions.',
          'Many traders glance at a higher timeframe for the overall trend and a lower one for timing, but jumping frantically between timeframes to justify a trade you already want is a common trap. Pick timeframes that match your plan and stick with them.',
        ],
      },
      {
        heading: 'An honest note',
        paragraphs: [
          'A lower timeframe shows more detail but also more noise — random wiggles that mean nothing and can trick you into overtrading. Faster is not better; for most beginners it is simply harder and more expensive. There is no risk to changing a timeframe itself, but the style it pulls you toward carries real risk.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (22) Save a chart template                                     */
  /* =============================================================== */
  {
    slug: 'how-to-save-a-chart-template',
    title: 'How to save and apply a chart template in MetaTrader',
    summary:
      'How to save your chart setup — indicators, colours, and settings — as a template so you can apply it to any chart in one click.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'What a template saves you',
        paragraphs: [
          'A chart template stores your whole setup — the indicators you have added, their settings, the colours, and the chart style — so you can apply all of it to any other chart in a single click. It saves you rebuilding the same layout over and over.',
          'It is a small time-saver with a real benefit: consistency. Looking at every market with the same familiar layout helps you read them the same way and avoid silly oversights.',
        ],
      },
      {
        heading: 'The numbered steps to save one',
        paragraphs: [
          'Step 1: Set up a chart exactly how you like it — add your indicators, adjust colours, and choose candlesticks or bars.',
          'Step 2: Right-click the chart and choose Template → Save Template (or use the Charts menu).',
          'Step 3: Give the template a clear name and save. On MT5 you can also set a template as the default so every new chart opens with it.',
          'Step 4: To apply it elsewhere, open any chart, right-click, choose Template → and pick your saved template. The new chart instantly takes on your whole layout.',
        ],
      },
      {
        heading: 'Handy variations',
        paragraphs: [
          'You can keep several templates for different purposes — one clean layout for reviewing a trend, another with more tools for closer analysis. Switching between them is just a couple of clicks.',
          'Templates travel with the platform installation, so if you move computers you may need to copy the template files across or rebuild them. Keeping your setups simple makes that painless.',
        ],
      },
      {
        heading: 'An honest note',
        paragraphs: [
          'A template is purely cosmetic and organisational — it saves layout, not trades, and carries no risk itself. Just remember that a tidy chart full of indicators does not improve your odds; it only improves your comfort. The discipline still lives in your plan, not your template.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (23) Backtest in Strategy Tester                               */
  /* =============================================================== */
  {
    slug: 'how-to-backtest-in-strategy-tester',
    title: 'How to backtest in the MetaTrader Strategy Tester',
    summary:
      'How to run a strategy or expert advisor against historical data in the Strategy Tester, read the basic results, and treat them with healthy scepticism.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'What the Strategy Tester does',
        paragraphs: [
          'The Strategy Tester runs an automated strategy (an "expert advisor", or EA) against past price data to see how it would have performed. It is built into MetaTrader and is the fastest way to get a rough sense of whether a rule-based idea has any merit before risking money.',
          'Backtesting is genuinely useful, but it is also one of the easiest tools in trading to fool yourself with. Learning to read the results honestly matters as much as running them.',
        ],
      },
      {
        heading: 'The numbered steps',
        paragraphs: [
          'Step 1: Open the Strategy Tester (View → Strategy Tester, or Ctrl+R). A panel appears at the bottom of the platform.',
          'Step 2: Choose the expert advisor you want to test, then the symbol (instrument) and the timeframe.',
          'Step 3: Set the date range for the test and, importantly, the modelling quality or tick source — poor-quality historical data produces misleading results.',
          'Step 4: Set the starting deposit and any inputs the EA exposes, then click "Start". The tester replays history and simulates every trade.',
          'Step 5: When it finishes, open the "Results", "Graph", and "Report" tabs to see the simulated equity curve, number of trades, and summary statistics.',
        ],
      },
      {
        heading: 'Reading the results without kidding yourself',
        paragraphs: [
          'Look beyond the final profit. Check how deep the worst drawdown was (the biggest peak-to-trough drop), how many trades there were (a handful proves nothing), and how smooth or lucky the equity curve looks. A strategy that only made money because of two enormous trades is fragile.',
          'Be deeply suspicious of a backtest that "optimised" dozens of settings to fit the past perfectly. That is called curve-fitting, and it almost always falls apart on new data. A result that looks too good usually is.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'A backtest shows what a strategy would have done, using historical data, ideal fills, and hindsight — none of which match live trading, where spreads widen, orders slip, and conditions change. Good past results are not a promise of future ones, and many strategies that shine in the tester lose money live. Always forward-test on a demo account before ever considering real money, and treat the tester as a filter for bad ideas rather than proof of good ones.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (24) Install an EA / indicator                                 */
  /* =============================================================== */
  {
    slug: 'how-to-install-an-ea-or-indicator',
    title: 'How to install an EA or custom indicator in MetaTrader',
    summary:
      'The steps to add a downloaded expert advisor or indicator via the Data Folder, plus firm cautions about where files come from.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What you are installing',
        paragraphs: [
          'An expert advisor (EA) is an automated trading program; a custom indicator is an add-on that draws extra analysis on your chart. Both come as files you place into MetaTrader\'s folders. Installing them is straightforward, but where the file comes from matters enormously.',
          'Before anything else, an honest warning: the world of downloadable EAs and indicators is full of scams and outright malware. Treat every file with suspicion until proven otherwise.',
        ],
      },
      {
        heading: 'The numbered steps',
        paragraphs: [
          'Step 1: In MetaTrader, open File → Open Data Folder. This opens the exact folder the platform reads from — do not guess the path elsewhere.',
          'Step 2: Open the "MQL4" folder (MT4) or "MQL5" folder (MT5). Inside, put an EA file into the "Experts" subfolder, or an indicator file into the "Indicators" subfolder.',
          'Step 3: Copy the .ex4/.ex5 (compiled) or .mq4/.mq5 (source) file into the correct subfolder.',
          'Step 4: Back in MetaTrader, right-click the "Navigator" panel and choose "Refresh". Your EA or indicator now appears in the Navigator list, ready to drag onto a chart.',
        ],
      },
      {
        heading: 'Getting it onto a chart',
        paragraphs: [
          'Drag the EA or indicator from the Navigator onto an open chart, adjust its settings in the window that appears, and click OK. For an EA to trade, you also need auto-trading enabled — see the separate guide on that.',
          'If the item does not show up after refreshing, double-check you put it in the right subfolder and that the file matches your platform (MQL4 files do not run on MT5 and vice versa).',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'A downloaded EA can place real trades with your real money the moment you enable it, and a malicious file can steal credentials or drain an account. Never install anything from an untrusted source, never enter your account password into a third-party tool, and never run an unknown EA on a live account. Test everything on a demo first, and be sceptical of any EA sold with promises of guaranteed profit — those promises are the surest sign of a scam.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (25) Enable auto-trading                                       */
  /* =============================================================== */
  {
    slug: 'how-to-enable-auto-trading',
    title: 'How to enable auto-trading (AutoTrading) in MetaTrader',
    summary:
      'How to switch on the AutoTrading button so expert advisors can run, how to confirm it is active, and why the off switch matters more than the on.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'What the button does',
        paragraphs: [
          'The AutoTrading button is a master switch that allows expert advisors (automated programs) to place trades on your behalf. When it is off, EAs are loaded but cannot trade; when it is on, they can. It is a single global control that overrides everything.',
          'Because an EA can trade real money automatically, this button is the most important safety control in the platform. Knowing how to turn it off instantly is more valuable than knowing how to turn it on.',
        ],
      },
      {
        heading: 'The numbered steps',
        paragraphs: [
          'Step 1: Find the "AutoTrading" (MT5) or "AutoTrading"/"Expert Advisors" (MT4) button on the top toolbar — a prominent button that turns green when active and red when off.',
          'Step 2: Click it once to enable. It should turn green, and any EA on a chart should show a smiling face rather than a sad or crossed-out one in the chart\'s top-right corner.',
          'Step 3: Confirm in the chart corner: a green ▶ or smiley next to the EA name means it is allowed to trade; a red ■ or frown means it is not.',
          'Step 4: To stop everything at once, click the AutoTrading button again. It turns red and no EA can place a new automated trade — this is your emergency stop.',
        ],
      },
      {
        heading: 'Common reasons an EA still will not trade',
        paragraphs: [
          'If AutoTrading is green but the EA still shows a frown, check the EA\'s own "Allow Algo Trading" setting in its properties, make sure the market is open, and confirm the EA is attached to the correct chart. On MT4, the older setting "Allow live trading" must also be ticked in the EA properties.',
          'It is worth confirming all of this on a demo account, where an EA misbehaving costs nothing.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'With AutoTrading on, an EA can open and close real positions without asking you, as fast as the market moves — including while you are asleep. A buggy or malicious EA can do serious damage quickly. Never leave an untested EA running on live money, keep the AutoTrading off switch within reach, and check on any running EA regularly rather than trusting it blindly.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (26) Set risk per trade to 1%                                  */
  /* =============================================================== */
  {
    slug: 'how-to-set-risk-per-trade-to-1-percent',
    title: 'How to set your risk per trade to 1%',
    summary:
      'A worked, step-by-step method to make sure any single trade can only lose about 1% of your account, using your stop distance and position size.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What the 1% rule really means',
        paragraphs: [
          'Risking 1% per trade means arranging your position size and stop-loss so that, if the stop is hit, you lose only about 1% of your account on that trade. On a €2,000 account, that is roughly €20 of risk per trade — not a €20 trade, but a trade where the loss is capped near €20.',
          'The point is survival. At 1% risk, you could lose ten trades in a row and still keep most of your account and your composure. It turns an inevitable losing streak from a disaster into a bump.',
        ],
      },
      {
        heading: 'The numbered method',
        paragraphs: [
          'Step 1: Work out 1% of your account. €2,000 × 1% = €20. This is the most you will let this trade cost you.',
          'Step 2: Decide where your stop-loss goes based on the chart, and measure that distance in pips — say 25 pips.',
          'Step 3: Find your allowed risk per pip: risk amount ÷ stop distance. €20 ÷ 25 = €0.80 per pip.',
          'Step 4: Convert to a lot size using the instrument\'s pip value (roughly €10 per pip per full lot on a standard forex pair; about €0.10 per pip at 0.01 lots). To get €0.80 per pip you need about 0.08 lots.',
          'Step 5: Round down and place the trade at that size, with the stop where you planned. Now the worst case really is about 1%.',
        ],
      },
      {
        heading: 'Making it a habit',
        paragraphs: [
          'The discipline is to run this calculation before every trade, every time, in the same order: 1% of the account, stop distance, risk per pip, lot size. A position-size calculator or MetaTrader\'s built-in calculator can do the arithmetic so you just check the result.',
          'As your account grows or shrinks, 1% changes with it, which naturally scales your risk up in good times and down in bad — a healthy, automatic feedback loop.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          '"1% risk" caps your intended loss, not your guaranteed loss: a price gap can jump past your stop and cost more, and several 1% trades open at once can add up to much larger combined exposure. The rule protects you only if you also limit how many positions you hold and respect every stop. Even perfectly applied, it does not make trading profitable — it just keeps you in the game long enough to learn.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (27) Journal a trade                                           */
  /* =============================================================== */
  {
    slug: 'how-to-journal-a-single-trade',
    title: 'How to journal a trade (what to record and why)',
    summary:
      'A simple, repeatable routine for logging a trade before, during, and after — so your journal becomes an honest teacher rather than a chore.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'Why a journal beats memory',
        paragraphs: [
          'A trading journal is a record of what you traded, why, and what happened. Memory quietly rewrites the story — we remember our good calls and forget our bad ones — so a written journal is the only honest mirror of your real habits. It is the closest thing to a coach a self-taught trader has.',
          'The goal is not a beautiful spreadsheet. It is a habit consistent enough that, over weeks, patterns in your own behaviour become impossible to ignore.',
        ],
      },
      {
        heading: 'The numbered routine for one trade',
        paragraphs: [
          'Step 1: Before entering, write down the instrument, the direction, your reason for the trade, your planned entry, stop-loss, and take-profit, and how much you are risking (ideally around 1%).',
          'Step 2: Take a quick screenshot of the chart at entry, marking the levels. A picture captures context that words miss.',
          'Step 3: While the trade is open, note anything you did that was not in the plan — moving a stop, closing early, adding size — and, crucially, how you felt.',
          'Step 4: After it closes, record the result in money and in pips, whether you followed your plan, and one honest sentence on what you would repeat or change.',
        ],
      },
      {
        heading: 'What to actually review',
        paragraphs: [
          'The single most valuable column is not profit or loss — it is "did I follow my plan?". A losing trade taken correctly is a good trade; a winning trade taken by breaking your rules is a warning. Judging yourself on process rather than outcome is what separates learning from gambling.',
          'Once a week, read back over your entries. Look for repeated mistakes — overtrading when bored, moving stops when scared, sizing up after a win. Those patterns are where your real improvement lies.',
        ],
      },
      {
        heading: 'An honest note',
        paragraphs: [
          'Start journaling on day one, including on demo. A journal only helps if it is honest, so record the embarrassing trades too — those are usually the most instructive. It costs no money and risks nothing, and it is one of the few genuinely reliable edges a beginner can build.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (28) Spot the spread on a chart                                */
  /* =============================================================== */
  {
    slug: 'how-to-spot-the-spread-on-a-chart',
    title: 'How to spot the spread on a chart',
    summary:
      'How to see the gap between the buy and sell price on your chart and in the order window, why it matters on every trade, and when it widens.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'What the spread is',
        paragraphs: [
          'The spread is the gap between the price you can buy at (the Ask) and the price you can sell at (the Bid). It is one of the main ways brokers get paid, and it means every trade starts at a small loss equal to that gap — the price has to move in your favour just to break even.',
          'Because you pay it on every single trade, seeing the spread clearly is a basic skill. On frequent, short-term trading it is often the biggest cost you face.',
        ],
      },
      {
        heading: 'The numbered steps to see it',
        paragraphs: [
          'Step 1: Look at the Market Watch panel (Ctrl+M): each instrument shows a Bid and an Ask price side by side. The difference between them is the spread.',
          'Step 2: Open the order window (double-click the instrument). The Bid and Ask are shown large; note how many pips apart they are.',
          'Step 3: To see it on the chart itself, right-click the chart, choose Properties (F8), and enable "Show Ask line" — a second price line appears above the Bid line, and the gap between the two lines is the live spread.',
          'Step 4: Some platforms and brokers also display the current spread as a number near the price. Watch how it changes through the day.',
        ],
      },
      {
        heading: 'Why it moves around',
        paragraphs: [
          'Spreads are not fixed. They tend to be tightest when a market is busy and liquid, and they widen — sometimes dramatically — around major news, at market opens and closes, and overnight. A spread that is 1 pip most of the day can blow out to many pips for a few seconds around an announcement.',
          'Watching the Ask line jump away from the Bid line around news is a vivid way to understand why trading straight into big announcements is expensive and risky.',
        ],
      },
      {
        heading: 'An honest note',
        paragraphs: [
          'The spread is a real, guaranteed cost you pay up front on every trade, before the market has moved at all. Placing many small trades multiplies this cost quickly, which is one reason frequent trading is harder to profit from than it looks. Always factor the spread — and its habit of widening at the worst moments — into where you set stops and targets.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (29) Place a trade on mobile                                   */
  /* =============================================================== */
  {
    slug: 'how-to-place-a-trade-on-mobile',
    title: 'How to place a trade on the MetaTrader mobile app',
    summary:
      'The steps to open, manage, and close a trade from the phone app, plus the extra mistakes a small screen and a spare moment make easy.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'Trading from your phone',
        paragraphs: [
          'The MetaTrader mobile app lets you place and manage real trades from your phone, using the same account as the desktop platform. It is convenient, but the small screen and the temptation to trade in idle moments introduce mistakes the desktop makes less likely.',
          'Learn the sequence on a demo first. Fat-fingering a size or a direction on a phone is easy, and there is no mouse-hover pause to slow you down.',
        ],
      },
      {
        heading: 'The numbered steps',
        paragraphs: [
          'Step 1: Open the app and go to the "Quotes" tab, which lists instruments with live Bid and Ask prices.',
          'Step 2: Tap the instrument you want, then tap "Trade" (or "New Order").',
          'Step 3: Set the "Volume" carefully — it is easy to spin the size selector too far on a touchscreen, so double-check the number before doing anything else.',
          'Step 4: Optionally set a Stop Loss and Take Profit in the same screen. Then tap "Sell by Market" or "Buy by Market" for the direction you want.',
          'Step 5: Confirm, and check the "Trade" tab to see your open position and its floating profit and loss.',
        ],
      },
      {
        heading: 'Managing and closing on mobile',
        paragraphs: [
          'To change a trade, tap the open position in the Trade tab, choose to modify it, and adjust the stop or target. To close, tap the position and choose "Close". The steps mirror the desktop, just with taps instead of clicks.',
          'Because the screen is small, it is worth zooming the chart and double-checking you are acting on the right position when you have several open.',
        ],
      },
      {
        heading: 'An honest risk note',
        paragraphs: [
          'A phone in your pocket makes impulsive, boredom-driven trades far too easy — checking the app in a queue and "just having a go" is a classic way to overtrade. The convenience that helps you manage trades also tempts you to place bad ones. A trade on mobile risks exactly the same real money as one on desktop, so keep the same plan, the same small sizes, and the same stop-loss on every position.',
        ],
      },
    ],
  },

  /* =============================================================== */
  /* (30) Log a trade result                                        */
  /* =============================================================== */
  {
    slug: 'how-to-log-a-trade-result',
    title: 'How to log a trade result (and read your account history)',
    summary:
      'How to find a closed trade in MetaTrader\'s history, export the details, and record the result so your numbers tell you the truth over time.',
    category: 'howto',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'Why the result, not the feeling, is the record',
        paragraphs: [
          'After a trade closes, the honest record is the number, not your memory of how it went. Logging results consistently lets you see your real win rate, your average win versus average loss, and whether you are actually improving — none of which you can judge by feel.',
          'MetaTrader already stores every closed trade; your job is to pull the details out reliably and put them somewhere you will actually review.',
        ],
      },
      {
        heading: 'The numbered steps in MetaTrader',
        paragraphs: [
          'Step 1: Open the Terminal (Ctrl+T) and click the "History" tab (on MT5, the "History" section of the Toolbox). This lists your closed trades.',
          'Step 2: Right-click and set the period (for example "Last month" or a custom range) so you see the trades you want.',
          'Step 3: For each closed trade, note the instrument, direction, open and close price, size, and the profit or loss in money. The tab shows all of it.',
          'Step 4: To keep a copy, right-click and choose "Report" (or "Save as Report" / an HTML or Excel export). This gives you a file with every trade and summary statistics like total profit, number of trades, and largest loss.',
          'Step 5: Transfer the key figures into your own journal or spreadsheet, alongside the plan and notes you recorded when you took the trade.',
        ],
      },
      {
        heading: 'What to track over time',
        paragraphs: [
          'Beyond individual results, watch a few running numbers: your win rate, the average size of your wins compared with your losses, your biggest single loss, and whether you followed your plan. A high win rate with huge losses is a warning; a modest win rate with small losses can be perfectly healthy.',
          'Reviewing these regularly turns a pile of trades into feedback. Without the log, every month feels like starting over; with it, the trend of your own progress becomes clear.',
        ],
      },
      {
        heading: 'An honest note',
        paragraphs: [
          'Log the losing trades as faithfully as the winners — a record that quietly omits the bad days is worse than useless, because it flatters you into repeating mistakes. Logging results costs nothing and risks nothing, but it is only useful if it is complete and honest. The numbers are there to teach you, not to reassure you.',
        ],
      },
    ],
  },
];

export default CLUSTER_HOWTO;
