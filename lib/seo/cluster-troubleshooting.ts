import type { Lesson } from '../lessons';

/**
 * SEO cluster: troubleshooting and error pages.
 * One page per specific error or problem a trader searches when stuck.
 * Plain English, honest, anonymous ("we"/"you"), no hype.
 * Technically correct for MetaTrader 4/5 and CFD/forex accounts.
 */
export const CLUSTER_TROUBLESHOOTING: Lesson[] = [
  {
    slug: 'mt4-off-quotes-error-fix',
    title: "MT4/MT5 'Off quotes' error: what it means and how to fix it",
    summary:
      "The 'Off quotes' message stops your order going through. Here is what it actually means, the common causes, and how to get your trade filled.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What the message means',
        paragraphs: [
          "'Off quotes' appears when the platform cannot execute your order at the price you asked for, because the current price the broker is willing to trade at has moved away from the one shown on your screen. In plain terms, the price you clicked is no longer valid, so the order is rejected rather than filled at a random level.",
          "It is not a bug in most cases. It is the platform refusing to guess. MetaTrader would rather return 'Off quotes' than fill you at a price you did not agree to.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "Fast-moving markets are the usual reason. Around major news releases, at the market open, or during thin liquidity, prices jump so quickly that the quote on your screen is already stale by the time you click.",
          "A weak or laggy internet connection can also do it: your quotes update slowly, so what you see is behind the real market. A market that is closed or nearly closed (for example just before the weekend) can produce it too, as can a broker with no live pricing for that symbol at that moment.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "First, check the connection indicator in the bottom-right corner of MetaTrader. If it shows red or a low number, your data feed is the problem — fix your internet or reconnect.",
          "Try again a moment later so a fresh quote loads. If you use the order window, increase the 'Deviation' (maximum price slippage) setting so the platform is allowed to fill you within a small range rather than demanding the exact price. On MT5, enabling 'Market Execution' rather than 'Instant Execution' often removes the error entirely.",
          "If it keeps happening on one symbol only, that symbol may be closed or restricted — check its trading hours in the Market Watch specification.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Avoid clicking market orders in the first seconds of a big news event. Use pending orders if you want a specific price, and allow a sensible deviation so normal price movement does not reject you.",
          "Keep a stable connection and, if you trade actively, consider a VPS close to your broker's server so quotes stay fresh.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Usually it is neither party being unfair — it is genuine price movement. But if you see constant 'Off quotes' in calm markets on a normal connection, that can point to a broker with poor pricing or one that is slow to fill. Test the same trade at a quiet time; if it still fails, raise it with support and consider whether the broker is fit for the way you trade.",
        ],
      },
    ],
  },
  {
    slug: 'mt4-trade-context-is-busy-fix',
    title: "'Trade context is busy' in MetaTrader: how to clear it",
    summary:
      "This error blocks new orders while another is still being processed. Here is why it appears and the quick way to get moving again.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'What it means',
        paragraphs: [
          "MetaTrader processes one trade command at a time. 'Trade context is busy' means the platform is still handling a previous order — opening, closing, or modifying — and cannot accept another until that one finishes.",
          "It is a safety lock, not a fault. It stops two conflicting commands from firing at once.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "Clicking too fast: pressing buy or sell repeatedly before the first order confirms. An Expert Advisor (EA) and your manual clicks competing for the same trade thread. A slow connection that makes each command take longer to complete.",
          "Sometimes a stuck or crashing EA holds the context open and never releases it.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Wait a couple of seconds and try once — do not spam the button. Check the Journal tab to see if a previous order is still pending.",
          "If an EA is running, it may be mid-operation; pause it (turn off AutoTrading) and retry your manual order. If the platform seems frozen, close and reopen MetaTrader, then confirm the trade state in the Trade tab before doing anything else.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Give each order a moment to confirm before sending the next. If you run multiple EAs, be aware they share the trade context and can collide. A stable connection makes each command finish faster, which shrinks the window where this error can appear.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "This one is almost always local — it is your platform or your clicking, not the broker. The exception is when a very slow server keeps commands open too long. If your connection is fine but commands routinely take many seconds, the broker's execution may be the underlying issue.",
        ],
      },
    ],
  },
  {
    slug: 'mt4-invalid-sl-tp-error-fix',
    title: "'Invalid S/L or T/P' error: why your stop or target is rejected",
    summary:
      "MetaTrader rejects stop-loss and take-profit levels that are too close to price or on the wrong side. Here is how to set them correctly.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What it means',
        paragraphs: [
          "The platform will not accept the stop-loss (S/L) or take-profit (T/P) price you entered. Something about the level breaks the broker's rules for that symbol, so the whole order is refused.",
          "The order itself may be fine — it is only the protective level that is wrong.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "The most common cause is placing the stop or target too close to the current price. Every symbol has a minimum 'stops level' (a minimum distance in points) that your S/L and T/P must respect.",
          "Others: putting the level on the wrong side (a stop-loss above entry on a buy, or below entry on a sell); entering a price with too many or too few decimals; or trying to modify a level while the market has moved so your once-valid price is now too close.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Right-click the symbol in Market Watch, open 'Specification', and read the 'Stops level' value. Make sure your S/L and T/P are at least that many points away from the current price.",
          "Check the direction: on a buy, the stop-loss sits below your entry and the take-profit above; on a sell, the reverse. Re-enter the price with the correct number of digits for that instrument, then submit again.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Give your stop and target a little breathing room beyond the minimum distance. If you trade very tight setups, choose instruments and brokers with a small or zero stops level. When modifying an open trade, remember price keeps moving, so leave a margin.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "This is a rules issue, not a fault. The broker sets a stops level partly for legitimate reasons around fast markets. It only becomes a concern if the required distance is unusually large, which makes tight risk management awkward — worth comparing across brokers if it affects your style.",
        ],
      },
    ],
  },
  {
    slug: 'mt4-not-enough-money-error-fix',
    title: "'Not enough money' error in MetaTrader: what to check",
    summary:
      "Your order is rejected because your account cannot cover the margin. Here is how to work out the right size and avoid the error.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What it means',
        paragraphs: [
          "'Not enough money' means the trade you are trying to open needs more margin than your account has available. Margin is the deposit the broker holds while a leveraged position is open. If your free margin is below what the order requires, the platform refuses it.",
          "It is not saying your balance is zero — it is saying this particular position is too big for what is free right now.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "The lot size is too large for your balance. You already have open trades using up margin, leaving little free. Your account leverage is lower than you assumed, so each lot ties up more money. Or the symbol has a high margin requirement (some indices, metals, and crypto CFDs need far more per lot than major currency pairs).",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Look at the Trade tab: check 'Free Margin'. Then reduce your lot size and try again — halving the volume roughly halves the margin needed.",
          "Close or reduce other open positions to free up margin. Confirm your account leverage in the account details or with support. If you genuinely need a bigger position, you may need to deposit more, but never deposit money you cannot afford to lose just to force a trade through.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Size positions from your balance and risk per trade, not from what the platform will let you get away with. Learn the margin requirement of each symbol before trading it. Keep a buffer of free margin so normal price moves do not push you into trouble.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "This is on your side — it is a sizing and margin issue, not a broker fault. It is actually the platform protecting you from over-leveraging. Treat it as a useful warning that the trade is too large.",
        ],
      },
    ],
  },
  {
    slug: 'mt4-market-is-closed-error-fix',
    title: "'Market is closed' when it looks open: why and how to fix",
    summary:
      "You see prices moving but MetaTrader says the market is closed. Here is why that happens and what to check.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What it means',
        paragraphs: [
          "'Market is closed' means the broker is not currently accepting orders on that symbol, even though you may see a recent price or a chart. Trading hours vary by instrument and by broker, and they are not the same as the underlying exchange's hours.",
          "A last-known price on the chart does not mean live trading is available right now.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "It genuinely is outside trading hours for that symbol — many CFDs on shares and indices trade only during their exchange session, and forex closes over the weekend. A daily trading break (some instruments pause for an hour or so each day) can catch you out.",
          "Public holidays shorten or cancel sessions. Your computer clock or timezone being wrong can also make you misjudge when a session opens. Occasionally the symbol is set to 'close only' or disabled by the broker.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Right-click the symbol, open 'Specification', and check the exact trading sessions and any daily break. Compare them with the current server time shown in Market Watch, not your local time.",
          "If it is a holiday, wait for the next session. If the hours look right and it still refuses, contact support to confirm the symbol is enabled for your account.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Know the sessions of what you trade, especially share and index CFDs. Watch for holidays. Set pending orders to trigger when the market reopens rather than trying to force a trade during a closed period.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Usually neither — it is simply the market being closed as scheduled. It becomes a concern only if a broker keeps a symbol closed during its normal session with no explanation, which is worth questioning.",
        ],
      },
    ],
  },
  {
    slug: 'mt4-no-connection-failed-fix',
    title: "'No connection' in MetaTrader: how to get back online",
    summary:
      "A 'No connection' or 'Connection failed' message means the platform cannot reach the broker's server. Here is how to restore it.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What it means',
        paragraphs: [
          "The status bar in the bottom-right corner shows 'No connection' when MetaTrader cannot talk to the trading server. Prices stop updating and you cannot place or manage trades until it reconnects.",
          "The bars in that corner tell the story: red or grey means no link; green with numbers means you are connected and shows the signal quality.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "Your own internet is down or unstable. A firewall or antivirus is blocking MetaTrader. The wrong trading server is selected in the login. The server is temporarily down for maintenance. Or your session was logged out (for example because you logged in elsewhere with the same account).",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Check your internet works in a browser. Click the connection status bars and pick 'Rescan servers' or try re-logging in. Confirm you selected the correct server name from the list your broker gave you.",
          "Allow MetaTrader through your firewall and antivirus. Restart the platform. If nothing works, restart your router. If it is still down, check whether the broker has announced maintenance.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Use a reliable connection, and a VPS if you rely on trades running around the clock. Keep the platform allowed in your security software. Note your exact server name so you can reconnect quickly.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Most of the time it is your local connection or settings. If your internet is clearly fine and other people using the same broker report outages, the server is the problem — a broker with frequent, unannounced downtime is a real red flag for anyone who needs reliability.",
        ],
      },
    ],
  },
  {
    slug: 'mt4-trade-is-disabled-error-fix',
    title: "'Trade is disabled' in MetaTrader: why you can't place orders",
    summary:
      "This message means trading is switched off for your account or the symbol. Here is how to find out which and fix it.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What it means',
        paragraphs: [
          "'Trade is disabled' means the platform will not let you open or change positions. Either trading is turned off at the account level, or it is blocked for the specific symbol, or the platform itself is in a read-only state.",
          "Nothing is broken — permission to trade is simply switched off somewhere.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "You may be logged into an 'investor' (read-only) password rather than the main trading password. The account might be a demo that has expired, or a live account that is not fully activated, restricted, or archived. The specific symbol could be set to 'close only' or disabled. Some accounts are read-only during verification or after a compliance hold.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Check whether you logged in with the investor password — if the title bar or account status hints at read-only, log out and use your main (master) password.",
          "Try a different, clearly open symbol to see if the block is account-wide or symbol-specific. Check the symbol's specification for a 'close only' state. If the account itself is disabled, contact support and ask exactly why — verification, funding, or a hold are the usual reasons.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Keep your master and investor passwords clearly labelled. Complete account verification promptly. Watch demo expiry dates. Read any emails from the broker about restrictions on your account.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Often it is a login or activation issue on your side. But if a broker disables trading on a funded, verified account without a clear, lawful reason — especially when you have open profits or want to close positions — that is serious and you should escalate and document everything.",
        ],
      },
    ],
  },
  {
    slug: 'mt4-invalid-volume-error-fix',
    title: "'Invalid volume' error: setting a lot size MetaTrader accepts",
    summary:
      "MetaTrader rejects lot sizes that break the symbol's rules. Here is how to find the minimum, maximum, and step so your order goes through.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'What it means',
        paragraphs: [
          "'Invalid volume' means the lot size you typed is not allowed for that symbol. Every instrument has a smallest lot, a largest lot, and a step size in between. Your number has to fit those limits exactly.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "The volume is below the minimum (for example 0.001 when the minimum is 0.01). It is above the maximum allowed in a single order. Or it does not match the step — if the step is 0.01, then 0.015 is invalid because it is not a whole multiple of the step.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Open the symbol's 'Specification' and read 'Volume min', 'Volume max', and 'Volume step'. Enter a size that is at least the minimum, no more than the maximum, and a clean multiple of the step.",
          "If you need a bigger position than the maximum, split it into two orders. If you need a smaller position than the minimum, that symbol simply cannot be traded that small on this account.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Round your calculated position size to a valid step before entering it. Keep a note of the min, max, and step for the symbols you trade most, as they differ between instruments and brokers.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "This is a settings issue on your side, not a fault. It is a good prompt to check whether the minimum lot on your account matches how small you want to risk — some accounts do not allow the tiny sizes a small balance really needs.",
        ],
      },
    ],
  },
  {
    slug: 'mt4-order-is-locked-error-fix',
    title: "'Order is locked' in MetaTrader: what to do",
    summary:
      "This message appears when an order is already being processed. Here is why, and how to avoid duplicate commands.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'What it means',
        paragraphs: [
          "'Order is locked' means the platform (or an EA) is already acting on that specific order and will not accept a second command on it until the first one finishes. It prevents two operations colliding on the same ticket.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "Sending a close or modify command twice in quick succession. An EA and your manual click both targeting the same order. A slow connection stretching out how long the first command holds the lock.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Wait a moment and check the Trade tab to see whether the order actually changed — often the first command did succeed and the second was simply blocked.",
          "If an EA manages that order, avoid touching it manually at the same time; pause AutoTrading first if you need to intervene. If the platform seems stuck, restart it and re-check the order's true state before sending anything else.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Do not double-click close or modify. Decide whether an order is managed by you or by an EA, not both at once. A stable connection shortens the lock window.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "This is a local, timing-related lock, so it is on your side. Slow server responses can make it more frequent, which is worth noting if it happens constantly on a good connection.",
        ],
      },
    ],
  },
  {
    slug: 'mt4-requote-explained-fix',
    title: 'Requote explained: why the price changed before your order filled',
    summary:
      "A requote offers you a new price because the old one moved. Here is what it means, when it is normal, and how to reduce it.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What a requote is',
        paragraphs: [
          "A requote is the broker saying: 'the price you asked for is gone, here is a new one — do you still want it?' It happens on Instant Execution accounts, where you request a specific price and the broker either fills it or offers an updated one.",
          "It is not the same as slippage. With a requote you get a chance to accept or decline; with slippage you are simply filled at a slightly different price.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "Fast markets where price moves between your click and the broker receiving it. News releases and the market open. A slow connection adding delay. And, in some cases, an execution model that requotes more than a competitive broker would.",
        ],
      },
      {
        heading: 'How to reduce it',
        paragraphs: [
          "Set a 'maximum deviation' in the order window so small price moves are accepted automatically instead of triggering a requote. Consider a Market Execution account (common on MT5), which fills at the best available price rather than requoting.",
          "Avoid firing market orders in the first seconds of major news. Improve your connection so there is less lag between click and fill.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Choose an execution type that matches your style, allow a sensible deviation, and trade around news rather than into it. Pending orders can also sidestep the click-to-fill delay.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Occasional requotes in fast markets are normal and fair. Frequent requotes in calm conditions, or requotes that always seem to move against you, suggest an execution model worth questioning — compare the same trading on another broker if you can.",
        ],
      },
    ],
  },
  {
    slug: 'mt4-common-error-order-fix',
    title: "Order 'Common error' in MetaTrader: how to diagnose it",
    summary:
      "The vague 'Common error' can have several causes. Here is a practical checklist to narrow it down and get your order through.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What it means',
        paragraphs: [
          "'Common error' is MetaTrader's catch-all message when an order fails for a reason it cannot describe more precisely. It tells you the order did not go through, but not exactly why — so you have to investigate.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "A brief connection drop at the moment you sent the order. A temporary server hiccup. Conflicting or malformed order parameters. An EA sending an invalid request. Or simply a fast market where the request timed out.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Open the Journal tab (or the Experts tab if an EA sent it) and read the lines around the failure — they often contain a more specific reason underneath the generic message.",
          "Check the connection status. Try the order once more after a short pause. Simplify the order (remove S/L and T/P temporarily) to see if a parameter was the issue. If an EA caused it, review its log and inputs.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Keep a stable connection, avoid firing orders during the most violent seconds of news, and make sure any EA sends valid, well-formed requests. Reading the Journal habitually turns 'Common error' from a mystery into a solvable clue.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "It can be either. A one-off around news or a connection blip is normal. If it recurs on a good connection in calm markets, the server or your EA is likely at fault — the Journal is the way to tell them apart.",
        ],
      },
    ],
  },
  {
    slug: 'why-was-my-order-rejected',
    title: 'Why was my order rejected? A checklist of reasons',
    summary:
      "Orders get rejected for a handful of predictable reasons. Here is how to work out which one applied to yours and fix it.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What a rejection means',
        paragraphs: [
          "A rejected order is one the broker refused to accept. Nothing opens, nothing changes, and you are back where you started. The key is finding the specific reason, which the platform usually records even if the pop-up was vague.",
        ],
      },
      {
        heading: 'The common reasons',
        paragraphs: [
          "Not enough free margin for the size. An invalid stop-loss or take-profit (too close, or wrong side). An invalid lot size. The market closed for that symbol. Trading disabled on the account or symbol. A price that moved ('off quotes' or a declined requote). Or a connection drop at the wrong moment.",
        ],
      },
      {
        heading: 'How to diagnose it',
        paragraphs: [
          "Read the Journal tab — it logs the reason for each failed order. Match what you see there against the list above. Then test the smallest possible change: reduce size, widen the stop, or pick a clearly open symbol, and see which fix lets the order through.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Size within your free margin, respect the stops level and volume step, trade during open sessions, and keep a stable connection. Most rejections disappear once these basics are habitual.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "The overwhelming majority of rejections are on your side and easily fixed. Genuine broker-side problems — trading disabled without reason, or refusal to let you close a position — are the exception and deserve a written complaint and a hard look at whether to stay.",
        ],
      },
    ],
  },
  {
    slug: 'why-my-stop-loss-did-not-trigger',
    title: 'Why my stop loss did not trigger (or trigger where I expected)',
    summary:
      "A stop loss that seems to miss is usually working exactly as designed. Here is how stops really fire, and what can go wrong.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'How a stop loss actually works',
        paragraphs: [
          "A stop loss is an instruction to close your trade once the price reaches a level. On a buy, it triggers when the bid falls to your stop; on a sell, when the ask rises to it. The crucial point is that it triggers, then fills at the next available price — which in a fast market can be worse than your stop level.",
          "So a stop does not guarantee your exact exit price. It guarantees an attempt to exit once the level is touched.",
        ],
      },
      {
        heading: 'Common reasons it seems not to trigger',
        paragraphs: [
          "You watched the wrong price. A buy's stop uses the bid, but the chart often shows only one line; a sell's stop uses the ask, which sits a spread away. So price can look like it hit your level while the relevant side did not.",
          "The stop was never actually set, or was rejected earlier for being invalid. The platform was disconnected, so a manual close could not happen (though a server-side stop still works when you are offline). Or a weekend or news gap jumped straight past your level.",
        ],
      },
      {
        heading: 'Common reasons it filled worse than expected',
        paragraphs: [
          "Slippage in fast markets: once triggered, the stop fills at the next tradeable price, which can be several points away during news or thin liquidity. Gaps over the weekend or around events can fill far from your stop, because there simply was no price in between.",
        ],
      },
      {
        heading: 'How to prevent surprises',
        paragraphs: [
          "Set stops with a little room and understand they are server-side, so they work even if your platform is closed. Account for the spread when placing a stop on the ask/bid side. Expect slippage around news and over weekends, and size positions so a gap cannot do disproportionate damage. A guaranteed stop, where offered, removes gap risk for a fee.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "A stop filling worse in a genuinely fast or gapping market is normal, not manipulation. But if stops are repeatedly filled well beyond the level in ordinary conditions, that is worth investigating. Check the tick data around the fill and compare with another price source before concluding anything.",
        ],
      },
    ],
  },
  {
    slug: 'why-did-i-get-stopped-out',
    title: 'Why did I get stopped out? Understanding the fill on your stop',
    summary:
      "Getting stopped out feels bad, but it usually means your protection did its job. Here is what happened and how to place better stops.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What "stopped out" means',
        paragraphs: [
          "Being stopped out means price reached your stop-loss level and the trade was closed to limit your loss. That is the stop working as intended — it is not a malfunction, even though the result is a loss.",
          "Note this is different from a 'stop-out' caused by margin, where the broker force-closes trades because your account ran too low. This page is about your own stop-loss firing.",
        ],
      },
      {
        heading: 'Why it happened',
        paragraphs: [
          "Price simply moved against you and hit the level you chose. Sometimes it was a normal fluctuation, and the stop was placed too tight for the instrument's usual movement (its volatility). Sometimes a sharp move or a news spike ran through it. And remember the relevant side (bid for buys, ask for sells) plus the spread can touch a stop before the mid-price looks like it did.",
        ],
      },
      {
        heading: 'How to place stops that survive noise',
        paragraphs: [
          "Base the stop on the market's structure and typical range, not on a round number or on how much you are willing to lose alone. Give it room beyond normal noise, and then size the position so that this wider stop still keeps your risk per trade small.",
          "Avoid placing stops exactly at obvious levels many others use, where price often briefly overshoots.",
        ],
      },
      {
        heading: 'How to prevent needless stop-outs',
        paragraphs: [
          "Match stop distance to volatility, allow for the spread, and avoid trading tiny stops through news. If you are being stopped out constantly, the problem is usually stop placement or entry timing, not bad luck.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Almost always yours in the sense that the stop did what you asked. Genuine concern only arises if fills sit far outside real market prices repeatedly — otherwise, treat a stop-out as feedback on your placement.",
        ],
      },
    ],
  },
  {
    slug: 'why-did-my-trade-close-by-itself',
    title: 'Why did my trade close automatically? The usual explanations',
    summary:
      "A position that closes on its own is almost always a rule doing its job. Here are the reasons, from stops to margin to expiry.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What "closed automatically" means',
        paragraphs: [
          "It means the platform or broker closed your position without you clicking close. The trade tab will show it as closed, usually with a comment that hints at the reason. The trick is reading that comment.",
        ],
      },
      {
        heading: 'The common reasons',
        paragraphs: [
          "Your stop-loss or take-profit was hit — the most frequent cause. A margin stop-out, where the broker force-closed trades because your margin level fell too low. A trailing stop catching up to price. An expiry on certain CFDs or futures-based instruments. Or an EA closing the trade by its own logic.",
        ],
      },
      {
        heading: 'How to find out which',
        paragraphs: [
          "Open the closed trade in the account history and read the comment field: 'sl', 'tp', 'so' (stop-out), or an EA note tell you a lot. Check the price and time of the close against your stop, target, and margin level at that moment.",
        ],
      },
      {
        heading: 'How to prevent unwanted auto-closes',
        paragraphs: [
          "Know where your stop and target sit before you walk away. Keep enough free margin that a normal move will not trigger a stop-out. Understand any expiry on the instrument. If an EA manages trades, know its rules so its closes do not surprise you.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Nearly always a rule you set or a margin situation you created — not a fault. The rare exception is an unexplained close with no matching stop, target, margin event, or expiry, which you should query with support and document.",
        ],
      },
    ],
  },
  {
    slug: 'why-my-profit-disappeared-swap-commission',
    title: 'Why my profit disappeared: swap, commission, and the spread',
    summary:
      "A trade that looked green can settle lower once costs come out. Here is where the money goes and how to see it coming.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'What is happening',
        paragraphs: [
          "The profit MetaTrader shows on an open trade is the raw price move. Your actual result also includes costs: the spread you paid to enter, any commission, and swap (overnight financing) if you held the trade past the daily rollover. Once those are counted, a small 'profit' can turn into a small loss.",
        ],
      },
      {
        heading: 'The three costs, explained',
        paragraphs: [
          "The spread is the gap between buy and sell price — you start slightly behind by exactly that amount. Commission is a per-lot fee some accounts charge instead of a wider spread. Swap is a daily credit or debit for holding a leveraged position overnight, based on interest rate differences; it is often a cost, and it can be large on some instruments.",
          "Hold a position for several nights and swap can quietly eat a meaningful chunk of your gain.",
        ],
      },
      {
        heading: 'How to see it clearly',
        paragraphs: [
          "In the trade tab, add the 'Commission' and 'Swap' columns so you can watch them accrue. In your account history, the profit shown for a closed trade already nets these off — compare it with the raw price move to see the true cost.",
        ],
      },
      {
        heading: 'How to prevent surprises',
        paragraphs: [
          "Check a symbol's swap rates before holding overnight, especially over a weekend (many brokers charge three days of swap on one day). Factor spread and commission into whether a trade is worth taking. For short-term trading, costs matter more than beginners expect.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "These are disclosed costs, not tricks — the responsibility is to understand them before trading. That said, unusually high spreads, commissions, or swaps are a fair reason to compare brokers, since costs directly shrink your results.",
        ],
      },
    ],
  },
  {
    slug: 'why-cant-i-withdraw-my-money',
    title: "Why can't I withdraw my money? Reasons and what to do",
    summary:
      "A blocked withdrawal has legitimate causes and, sometimes, serious ones. Here is how to tell them apart and act.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'What is going on',
        paragraphs: [
          "You requested a withdrawal and it will not go through, or the option is greyed out. Some reasons are routine and quickly resolved. Others are warning signs, particularly with brokers you cannot verify are properly regulated.",
        ],
      },
      {
        heading: 'The routine reasons',
        paragraphs: [
          "Verification (KYC) is not complete, so the broker cannot legally pay out. You are trying to withdraw to a method different from the one you deposited with — most brokers must return funds to the original source first. An unmet bonus or deposit condition is locking funds. Open positions are using margin, so your withdrawable balance is lower than your equity. Or the withdrawal is simply still processing.",
        ],
      },
      {
        heading: 'The serious reasons',
        paragraphs: [
          "Endless new document requests, sudden extra 'fees' or 'taxes' you must pay before you can withdraw, an account manager pressuring you to keep trading, or a broker that stops replying — these are classic signs of a scam or an unregulated operation holding your money.",
        ],
      },
      {
        heading: 'What to do',
        paragraphs: [
          "Complete verification fully and withdraw to your original deposit method. Close positions or clear bonus conditions if those are the block. Get every promise in writing. Never pay an upfront 'fee' or 'tax' to release your own funds — legitimate brokers deduct nothing like that.",
          "If the broker stalls or dodges, check its regulation, file a formal complaint, and if it is regulated, escalate to the regulator or an ombudsman. Keep records of everything.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "If it is verification, method, bonus terms, or margin, the fix is on your side and straightforward. If a broker invents obstacles or demands payment to release money, that is on them — and it is often the point at which people realise they are dealing with a scam.",
        ],
      },
    ],
  },
  {
    slug: 'why-is-my-withdrawal-delayed',
    title: 'Why is my withdrawal delayed? Normal timelines vs red flags',
    summary:
      "Withdrawals take time, but there is a line between slow and stuck. Here is what normal looks like and when to worry.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What a delay usually means',
        paragraphs: [
          "Most withdrawals are not instant. The broker reviews and approves the request, then your bank or payment provider processes it. Each step takes time, and weekends and holidays pause bank transfers.",
        ],
      },
      {
        heading: 'Normal reasons for a wait',
        paragraphs: [
          "Broker processing windows (often a few business days). Bank transfer times on top of that. First-time withdrawals sometimes needing extra verification. Card refunds routing back to the original card, which can be slow. And cut-off times meaning a Friday request only starts moving the next week.",
        ],
      },
      {
        heading: 'When a delay becomes a red flag',
        paragraphs: [
          "If the broker's own stated processing time has clearly passed with no explanation, if support goes quiet, if new document demands keep appearing, or if you are asked to pay a fee to 'unlock' the payment, those are not normal delays — they are warning signs.",
        ],
      },
      {
        heading: 'What to do',
        paragraphs: [
          "First, check the broker's published withdrawal times and whether banking days have actually elapsed. Confirm your verification is complete and the destination matches your deposit method. Then ask support for a status and a reference in writing.",
          "If the broker's own timeframe has passed with no progress, escalate — a complaint in writing, then the regulator if it is regulated. Keep every message and receipt.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Within stated timeframes, a delay is usually just process and banking, not fault. Past those timeframes with silence or new hurdles, the fault shifts to the broker, and persistent stalling is a hallmark of an operation you should be wary of.",
        ],
      },
    ],
  },
  {
    slug: 'why-hasnt-my-deposit-arrived',
    title: "Why hasn't my deposit arrived in my trading account?",
    summary:
      "A deposit that has not shown up is usually a timing or detail issue. Here is how to track it down safely.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What is happening',
        paragraphs: [
          "You sent money to fund your account but the balance has not updated. Most of the time the funds are in transit or attached to the wrong reference, not lost. A calm, methodical check finds them.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "Bank transfers taking one to several business days, longer for international payments. A missing or wrong payment reference, so the broker cannot match your money to your account. Card payments pending or declined by your bank. Sending to the wrong account details. Or the deposit sitting in a manual review queue on first funding.",
        ],
      },
      {
        heading: 'Step-by-step check',
        paragraphs: [
          "Confirm the money actually left your account and note the reference. Check you used the exact bank details and reference the broker provided. Allow the normal processing time for your method before chasing.",
          "If time has passed, contact support with proof of payment (a screenshot or receipt) and the reference. For card issues, check with your bank whether the charge was declined or is pending.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Always include the exact reference the broker asks for, double-check destination details, and keep the payment receipt. Deposit small first if you are unsure, so any mistake is minor.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Usually it is banking time or a reference/detail slip on your side, and easily traced. If you can prove funds arrived at the broker and it still will not credit them after a reasonable time, that is on the broker — and a broker that cannot resolve a documented deposit is a concern.",
        ],
      },
    ],
  },
  {
    slug: 'why-was-my-kyc-rejected',
    title: 'Why was my KYC rejected? Fixing document verification',
    summary:
      "KYC rejections are common and almost always about document quality or a mismatch. Here is how to pass on the next try.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What KYC is and why it matters',
        paragraphs: [
          "KYC ('know your customer') is the identity check regulated brokers must run before you can trade or withdraw. A rejection means the documents you sent did not satisfy the requirements — not that you did anything wrong, usually just that something was unclear.",
        ],
      },
      {
        heading: 'Common reasons for rejection',
        paragraphs: [
          "A blurry, cropped, or glare-covered photo. An expired ID. A proof-of-address document that is too old (many require it to be within three months) or in a different name. Details on the document not matching what you entered at sign-up. A screenshot instead of a full, original document. Or a selfie or ID check that did not match.",
        ],
      },
      {
        heading: 'How to fix it',
        paragraphs: [
          "Re-take photos in good light, flat, with all four corners visible and no glare. Use a current, unexpired ID. For proof of address, use a recent utility bill or bank statement in your name showing your full address. Make sure your registered name, address, and date of birth match the documents exactly. If in doubt, ask support precisely which document failed and why.",
        ],
      },
      {
        heading: 'How to prevent repeat rejections',
        paragraphs: [
          "Prepare clear, current documents before you start. Enter your details to match them exactly. Keep a recent proof of address handy, since old ones are a frequent cause.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "KYC is a legal requirement, so being asked is normal and correct. The fix is almost always on your side — better photos and matching details. Endless, vague rejections at withdrawal time (rather than at sign-up), though, can be a delaying tactic worth noting with an unverified broker.",
        ],
      },
    ],
  },
  {
    slug: 'why-did-the-spread-suddenly-widen',
    title: 'Why did the spread suddenly widen? Causes and what to do',
    summary:
      "A spread that jumps costs you more to trade. Here is why it happens, when it is normal, and how to avoid the worst of it.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What a widening spread means',
        paragraphs: [
          "The spread is the gap between the buy and sell price, and it is a cost you pay on every trade. When it widens, that cost rises — a stop can be reached sooner, and it takes a bigger move just to break even. Spreads are not fixed; they breathe with the market.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "Low liquidity: overnight, at the daily rollover, at the Friday close and Sunday open, and on holidays, fewer participants mean wider spreads. Major news releases, where uncertainty spikes. Volatile instruments and exotic pairs that are naturally wide. And the specific moment of rollover, when spreads on many symbols balloon briefly.",
        ],
      },
      {
        heading: 'How to avoid the worst of it',
        paragraphs: [
          "Trade during the busy overlap of major sessions, when spreads are tightest. Avoid the seconds around big news and the daily rollover for entries and exits. Watch the live spread before clicking, and be cautious with thin instruments.",
        ],
      },
      {
        heading: 'How to protect yourself',
        paragraphs: [
          "Do not place tight stops just before news or at rollover, when a temporary spread spike can trigger them. Factor the typical and worst-case spread into your plan for each symbol.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Spreads widening at illiquid times and around news is normal market behaviour, not manipulation. Persistently wide spreads in busy hours, or spikes far beyond what other brokers show at the same moment, are a legitimate reason to compare pricing and consider switching.",
        ],
      },
    ],
  },
  {
    slug: 'why-did-i-get-a-margin-call',
    title: 'Why did I get a margin call? What it is and how to respond',
    summary:
      "A margin call is a warning that your account is running low on usable funds. Here is what triggers it and how to act calmly.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What a margin call is',
        paragraphs: [
          "A margin call is a warning that your losing positions have eaten into the funds backing them. Your 'margin level' (equity divided by used margin, as a percentage) has fallen to the broker's call threshold. It is a signal to add funds or reduce risk before things get worse.",
          "It is not yet a forced closure — that is the stop-out, which comes at a lower level if you do nothing.",
        ],
      },
      {
        heading: 'Why it happened',
        paragraphs: [
          "Positions moved against you and unrealised losses shrank your equity. You were over-leveraged — too large a position for the account. You had several correlated trades all losing at once. Or swap and other costs quietly reduced your equity over time.",
        ],
      },
      {
        heading: 'How to respond',
        paragraphs: [
          "Do not panic-add money to defend a bad trade. First, look at whether the positions still make sense; often the right move is to reduce or close the weakest ones to restore your margin level. Cutting size is usually safer than adding funds to a losing position.",
          "If you do add funds, add only what you can afford to lose, and understand you are increasing your exposure, not fixing the underlying trade.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Use modest leverage, size positions so a normal adverse move cannot threaten your account, keep free margin in reserve, and use stop-losses. Margin calls are almost always a symptom of positions that were too big.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "A margin call is the mechanics working as intended, driven by your own position sizing — it is on your side. It is best treated as a hard lesson about leverage rather than something to blame the broker for.",
        ],
      },
    ],
  },
  {
    slug: 'what-is-a-stop-out-and-how-to-avoid-it',
    title: 'What is a stop-out and how do you avoid it?',
    summary:
      "A stop-out is when the broker force-closes your trades to stop losses running past your funds. Here is how it works and how to stay clear.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What a stop-out is',
        paragraphs: [
          "A stop-out is the broker automatically closing your positions — starting with the biggest loser — because your margin level fell to the stop-out threshold. It happens after the margin call warning if losses keep growing. The purpose is to prevent your losses from exceeding what your account can cover.",
        ],
      },
      {
        heading: 'How the level works',
        paragraphs: [
          "Brokers set a margin-call level and a lower stop-out level (for example, a call at 100% and stop-out at 50% of margin level — the exact numbers vary). When equity falls to the stop-out percentage of used margin, positions are closed one by one until the level is restored.",
        ],
      },
      {
        heading: 'Why it hits',
        paragraphs: [
          "Over-leverage is the root cause: positions too large for the account, so a modest adverse move drives the margin level down fast. No stop-losses, correlated trades losing together, or a sharp market move can all accelerate it.",
        ],
      },
      {
        heading: 'How to avoid it',
        paragraphs: [
          "Trade small relative to your balance, so a normal move barely dents your margin level. Always use stop-losses to cap each trade before margin ever becomes the issue. Keep plenty of free margin, avoid stacking correlated positions, and know your broker's call and stop-out levels in advance.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "A stop-out is a protective mechanism operating as designed, and it is driven by your sizing — so it is on your side. Being stopped out is a strong signal that leverage was too high, and the fix is smaller positions, not blaming the broker.",
        ],
      },
    ],
  },
  {
    slug: 'why-is-my-ea-not-trading',
    title: 'Why is my EA not trading? A troubleshooting checklist',
    summary:
      "An Expert Advisor that sits idle is usually blocked by a setting, not broken. Here is the checklist to get it placing trades.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'What is happening',
        paragraphs: [
          "Your EA is attached to a chart but no trades appear. In most cases the code is fine and something is switched off, missing, or misconfigured. Work through the checks below in order.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "AutoTrading is off (the button in the toolbar is not green). The EA's own 'Allow live trading' box was not ticked when you attached it. There is no smiley face on the chart, meaning the EA is not actually running. The EA's rules simply have not met their entry conditions yet. The symbol or timeframe is wrong for the EA. Trading is disabled for the account or symbol. Or the connection dropped.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Confirm the AutoTrading button in the toolbar is green. Check the top-right of the chart shows a smiley face, not a sad face or an 'x'. Re-attach the EA and, in its settings, enable 'Allow live trading'. In Options, make sure algorithmic trading is allowed and any needed URLs are whitelisted.",
          "Read the Experts and Journal tabs for messages — they usually say exactly why the EA is idle. Verify you are on the chart, symbol, and timeframe the EA expects, and that the market is open.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Turn on AutoTrading and enable live trading whenever you attach an EA. Test on demo first, watch the Experts log, and confirm the smiley face. Keep the platform connected — a VPS helps if the EA must run continuously.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Nearly always a local setting on your side, quickly fixed. The exception is 'AutoTrading disabled by server', where the broker's server has switched off algorithmic trading — a separate issue covered on its own.",
        ],
      },
    ],
  },
  {
    slug: 'autotrading-disabled-by-server-fix',
    title: "'AutoTrading disabled by server': what it means and what to do",
    summary:
      "This message means the broker's server, not your platform, has switched off automated trading. Here is why and how to respond.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'What it means',
        paragraphs: [
          "Unlike a local setting, 'AutoTrading disabled by server' is set on the broker's side. Even with AutoTrading on and your EA enabled, the server is refusing automated orders on that account. Your manual trading may still work.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "The account type does not permit EAs (some accounts block algorithmic trading). Automated trading is temporarily disabled during maintenance or over the weekend. The broker restricts EAs on certain symbols or in certain conditions. Or a compliance setting on your specific account.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "First rule out the local causes — confirm AutoTrading is green and live trading is enabled — so you know it really is the server. Then check whether the market and automated trading are simply closed for the weekend. If it persists during open hours, contact the broker and ask whether EAs are allowed on your account type and, if not, whether an account that permits them is available.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Before relying on an EA, confirm with the broker that your account type supports automated trading. Read the account terms. Choose a broker and account that explicitly allow EAs if that is central to how you trade.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "This is a broker-side setting, so the cause is on their end — but it is often a legitimate account policy rather than a fault. The real question is whether their policy fits your needs; if EAs are essential to you, pick a broker that supports them.",
        ],
      },
    ],
  },
  {
    slug: 'why-did-my-indicator-disappear',
    title: 'Why did my indicator disappear from the chart?',
    summary:
      "An indicator that vanished is almost always a display or file issue, not lost work. Here is how to bring it back.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'What is happening',
        paragraphs: [
          "You had an indicator on your chart and now it is gone. In most cases it was removed by a template change, hidden, or the platform failed to load it — the file itself is usually still there.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "You switched or reset the chart template, which replaced everything on it. The indicator was removed via the indicators list. A platform update or crash cleared the chart. The indicator file was deleted, moved, or failed to compile. Or the indicator is set to show only on certain timeframes and you changed the timeframe.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Re-add it: use the Insert menu or the Navigator panel to drag the indicator back onto the chart. Check the chart's indicators list to see if it is present but hidden. If it is missing from Navigator entirely, confirm the file is still in the correct indicators folder and refresh Navigator.",
          "If you had a set-up you liked, load a saved template. If the file was deleted, reinstall it. Check the Experts/Journal tab for compile errors if it refuses to appear.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Save a chart template once your indicators are arranged the way you want, so you can restore the whole layout in one click. Keep backups of custom indicator files. Be careful applying templates, as they overwrite the current chart.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "This is a local platform matter, not a broker issue. It is almost always recoverable with a re-add or a saved template.",
        ],
      },
    ],
  },
  {
    slug: 'mt4-invalid-account-cant-log-in-fix',
    title: "MetaTrader won't log in ('invalid account'): how to fix it",
    summary:
      "An 'invalid account' message usually means a wrong detail, not a lost account. Here is the checklist to get logged in.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What it means',
        paragraphs: [
          "'Invalid account' means the platform could not log you in with the login number, password, and server you entered. Usually one of those three is wrong, or the account is on a different server or platform version than the one you are using.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "A mistyped login number or password (passwords are case-sensitive). The wrong trading server selected. Using MT4 credentials in an MT5 terminal or vice versa. A demo account that has expired. An account that is not yet activated, is archived, or was reset by the broker. Or copy-pasting a password with a stray space.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Re-enter the login number and password carefully, watching for case and spaces. Select the exact server name your broker provided from the drop-down — if it is missing, add it or 'scan' for it. Make sure you are using the right terminal: MT4 credentials work only in MT4, MT5 only in MT5.",
          "If it still fails, the account may be expired or inactive — ask the broker to confirm the account status and resend your correct login details and server.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Store your login number, password, and exact server name together. Keep demo expiry dates in mind. Install the platform version (MT4 or MT5) that matches your account.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Most 'invalid account' errors are a typo or wrong server on your side. If your details are definitely correct and the account still will not connect, the broker may have archived or disabled it — worth confirming why, especially if you were not warned.",
        ],
      },
    ],
  },
  {
    slug: 'server-not-found-in-login-list-fix',
    title: "'Server not found' in the MetaTrader login list: how to add it",
    summary:
      "If your broker's server is missing from the login drop-down, you can usually add it manually. Here is how.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'What is happening',
        paragraphs: [
          "When you try to log in, the server your broker gave you is not in the list to choose from. Without the correct server selected, the login cannot succeed even with the right number and password.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "You installed a generic copy of MetaTrader rather than the one from your broker, so it does not include their servers. The server list has not refreshed. You typed the server name slightly differently from the official one. Or the broker recently changed or renamed its servers.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "The most reliable fix is to download MetaTrader directly from your broker — that build ships with their servers preloaded. Alternatively, in the login window choose to add a new broker/server and type the exact server address your broker provided, then let it scan and appear in the list.",
          "Double-check the spelling of the server name against the broker's instructions; even a small difference stops it connecting.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Always install the platform from your broker's own download link. Keep a note of the precise server name. If the broker announces a server change, follow their update instructions.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Usually it is having the wrong or generic install on your side, easily fixed by using the broker's own version. If the broker cannot tell you a working server name at all, that is a basic failing worth taking seriously.",
        ],
      },
    ],
  },
  {
    slug: 'chart-shows-no-prices-fix',
    title: 'Chart shows no prices or is frozen: how to get data flowing',
    summary:
      "A blank or stuck chart usually means a data or connection problem. Here is how to restore live prices.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'What is happening',
        paragraphs: [
          "The chart is empty, stuck on an old candle, or shows 'Waiting for update'. This almost always points to a break in the price feed rather than a problem with the chart itself.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "No connection to the server (check the bottom-right status). The market is closed for that symbol, so no new ticks arrive. The symbol was removed from Market Watch. A brief data outage. Or the platform needs to reload history.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Check the connection status in the corner; reconnect if it is red. Confirm the market is actually open for that symbol via its specification. Make sure the symbol is present in Market Watch — right-click and 'Show All' if needed. Then refresh: change the timeframe and back, or close and reopen the chart to force it to reload data.",
          "If prices still do not move during open hours with a good connection, restart the platform.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Keep a stable connection, know your symbols' trading hours, and restart the platform occasionally if it has been running a long time.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Usually connection or the market being closed — on your side or simply expected. Persistent missing data during open hours on a good connection points to a broker feed problem worth reporting.",
        ],
      },
    ],
  },
  {
    slug: 'pending-order-did-not-fill-fix',
    title: "My pending order didn't fill: why price passed it by",
    summary:
      "A pending order that did not trigger usually just was not reached the right way. Here is how pending orders really fill.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'How pending orders fill',
        paragraphs: [
          "A pending order (limit or stop) sits until price reaches its level, then becomes a market order. The subtlety: it triggers on the relevant side of the market. A buy pending triggers off the ask, a sell pending off the bid — so the price that must reach your level is not always the one shown on a single-line chart.",
        ],
      },
      {
        heading: 'Common reasons it did not fill',
        paragraphs: [
          "Price only touched your level on the wrong side. The chart line you watched was the bid, but your buy needed the ask (a spread higher). Price gapped over your level at a weekend or news event, so there was no trade at your price. The order expired before price arrived. Or you were disconnected — though a server-side pending order still works while you are offline.",
        ],
      },
      {
        heading: 'How to check',
        paragraphs: [
          "Look at the exact high/low around the time and account for the spread. Confirm whether the order had an expiry. Check the account history to see if it triggered and then something else happened. Remember a gap can jump straight past a level without ever trading there.",
        ],
      },
      {
        heading: 'How to prevent surprises',
        paragraphs: [
          "Place levels with the spread in mind, especially for the ask/bid side that must reach them. Be aware of gaps around weekends and news. Set a realistic expiry, or none, so the order is still live when price arrives.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Almost always a matter of how pending orders and spreads work, not a fault. Genuine concern only if an order clearly should have filled (price traded well through it on the correct side) and did not — then check the tick data and raise it.",
        ],
      },
    ],
  },
  {
    slug: 'slippage-explained-fill-price-differed',
    title: 'Slippage explained: why my fill price differed from the click',
    summary:
      "Slippage means your order filled at a slightly different price than you saw. Here is why it happens and how to limit it.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What slippage is',
        paragraphs: [
          "Slippage is the difference between the price you expected and the price you actually got. Between your click and the broker executing, the market can move, so you fill a little better or worse. It works both ways, though people notice the bad fills more.",
        ],
      },
      {
        heading: 'When it happens',
        paragraphs: [
          "Fast markets around news, the open, or thin liquidity. When a stop-loss triggers in a sharp move and fills at the next available price. Over weekend and news gaps, where price jumps with no trades in between. And with large orders that cannot all fill at one price.",
        ],
      },
      {
        heading: 'How to limit it',
        paragraphs: [
          "Set a 'maximum deviation' on market orders so you only accept fills within a small range. Use limit orders when you want a specific price and are willing to risk not filling. Avoid entering and exiting in the most violent seconds of news. Trade liquid instruments in busy hours, where slippage is smallest.",
        ],
      },
      {
        heading: 'How to plan around it',
        paragraphs: [
          "Assume some slippage on stops during fast moves and gaps, and size positions so a worse-than-expected fill is survivable. A guaranteed stop, where offered for a fee, removes gap slippage on that exit.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Symmetric slippage in genuinely fast markets is normal execution, not manipulation. If slippage is always against you, or huge in calm conditions, that is a red flag — compare fills with another price source and consider whether the broker's execution is fair.",
        ],
      },
    ],
  },
  {
    slug: 'invalid-lot-size-error-fix',
    title: "'Invalid' lot size when placing a trade: how to fix it",
    summary:
      "A lot size flagged as invalid breaks a symbol's volume rules. Here is how to pick a size the platform accepts.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'What it means',
        paragraphs: [
          "The platform will not accept the volume you entered because it does not fit the symbol's rules for minimum size, maximum size, or the step between allowed sizes. It is closely related to the 'invalid volume' error and fixed the same way.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "A size below the symbol's minimum lot. A size above its maximum for one order. A size that is not a multiple of the volume step (for example 0.03 when the step is 0.05). A decimal typo. Or an EA calculating a size that rounds to something invalid.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Open the symbol specification and note 'Volume min', 'Volume max', and 'Volume step'. Enter a size that meets the minimum, stays under the maximum, and is a clean multiple of the step. If your calculated size falls between valid steps, round it to the nearest valid one.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "When calculating position size from risk, round the result to a valid step before entering it. If you use an EA, make sure it normalises volume to the symbol's step. Keep the volume rules of your main symbols handy.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "A settings issue on your side, not a fault. It is a good reminder to check whether the minimum lot lets you risk as little as your balance really needs.",
        ],
      },
    ],
  },
  {
    slug: 'negative-balance-explained',
    title: 'Negative balance explained: how it happens and whether you owe it',
    summary:
      "A balance below zero is rare but real. Here is how it can occur, and what negative balance protection means for you.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What a negative balance is',
        paragraphs: [
          "A negative balance means your account lost more than the money in it — you are, on paper, in debt to the broker. It happens when a position moves so fast that the stop-out cannot close it before losses exceed your funds, typically during a violent move or a large gap.",
        ],
      },
      {
        heading: 'How it happens',
        paragraphs: [
          "A sudden gap over a weekend or a shock event jumps far past your stop and past the stop-out level, all in one move with no tradeable prices in between. High leverage magnifies the effect. By the time positions close, the loss is bigger than the account balance.",
        ],
      },
      {
        heading: 'Do you owe the money?',
        paragraphs: [
          "It depends on negative balance protection. Many regulated brokers, especially for retail clients in certain regions, offer it and will reset a negative balance to zero, so you cannot lose more than you deposited. Without such protection, you could in principle be asked to cover the shortfall. Check your broker's terms and your regulatory protections.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Use modest leverage and small positions so a gap cannot wipe you out. Be especially cautious holding leveraged trades over weekends and through major events. Prefer brokers that clearly offer negative balance protection, and consider guaranteed stops where the risk warrants it.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "The underlying cause is usually leverage and gap risk on your side. But whether you are chased for the shortfall depends entirely on the broker's protection and your regulatory status — which is exactly why those protections matter when choosing where to trade.",
        ],
      },
    ],
  },
  {
    slug: 'account-archived-for-inactivity-fix',
    title: 'Account archived for inactivity: what it means and how to reactivate',
    summary:
      "A dormant account may be archived or charged an inactivity fee. Here is what that involves and how to restore access.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 4,
    body: [
      {
        heading: 'What it means',
        paragraphs: [
          "If you do not log in or trade for a long period, many brokers archive the account (move it to inactive status) and some charge an inactivity fee from any remaining balance. Archiving does not usually mean your money is gone — it means the account is dormant and needs reactivating.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "No trading activity for the period set in the broker's terms (often several months to a year). No logins for a long stretch. An expired demo. Sometimes an inactivity fee gradually reducing a small leftover balance.",
        ],
      },
      {
        heading: 'How to reactivate',
        paragraphs: [
          "Log in through the platform or client area; some accounts reactivate on their own. If it will not connect, contact support and ask them to reactivate it and confirm any remaining balance. You may need to re-verify your identity if a long time has passed. Ask specifically about any inactivity fees charged and the current balance.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "If you plan a break, withdraw funds you are not using rather than leaving them to inactivity fees. Log in occasionally to keep the account live. Read the broker's terms on inactivity so the timeline is no surprise.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Archiving and disclosed inactivity fees are normal policy, not a fault, as long as they were in the terms. If a broker refuses to reactivate or cannot account for your balance, that is a serious problem to escalate.",
        ],
      },
    ],
  },
  {
    slug: 'weekend-gaps-explained',
    title: 'Weekend gaps explained: why price jumped while the market was closed',
    summary:
      "Markets can reopen at a very different price after the weekend. Here is why gaps happen and how to protect against them.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What a gap is',
        paragraphs: [
          "A gap is a jump between the closing price on Friday and the opening price on Sunday or Monday, with no trading in between. Because the market was closed, price did not move continuously — it simply reopened wherever supply and demand put it, which can be well away from Friday's close.",
        ],
      },
      {
        heading: 'Why gaps happen',
        paragraphs: [
          "News over the weekend — economic, political, or company-specific — changes what people are willing to pay before trading resumes. With no market open to absorb it gradually, the adjustment shows up all at once as a gap when trading reopens.",
        ],
      },
      {
        heading: 'Why gaps matter for your trades',
        paragraphs: [
          "A stop-loss cannot fill inside a gap because no price traded there; it fills at the reopening price instead, which can be far worse than your stop. The same applies to pending orders. This is how a position can lose much more than the stop distance suggested, and in extreme cases contribute to a negative balance.",
        ],
      },
      {
        heading: 'How to protect yourself',
        paragraphs: [
          "Consider whether to hold leveraged positions over the weekend at all. Keep size small so a gap is survivable. Use a guaranteed stop where offered, since it honours your level even through a gap for a fee. Avoid over-leverage, which turns a gap into a catastrophe.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Gaps are a feature of markets, not broker behaviour. A stop filling at the reopening price after a gap is correct execution. Managing the risk — through size, weekend decisions, and guaranteed stops — is on your side.",
        ],
      },
    ],
  },
  {
    slug: 'why-is-my-pl-different-from-expected',
    title: 'Why is my profit/loss different from what I expected?',
    summary:
      "The final result on a trade often differs from the raw price move. Here is what accounts for the gap.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What is happening',
        paragraphs: [
          "You calculated a profit or loss from the price move, but the account shows a different number. The difference is normal: your real result includes costs and pricing details that a simple price calculation ignores.",
        ],
      },
      {
        heading: 'What makes up the difference',
        paragraphs: [
          "The spread: you enter on one side and exit on the other, so you start behind by the spread. Commission per lot on some accounts. Swap for holding overnight, which can be a credit or a charge. The exact pip value and contract size for that instrument, which affect how much each point is worth. And any currency conversion if the instrument is priced in a currency other than your account's.",
        ],
      },
      {
        heading: 'How to reconcile it',
        paragraphs: [
          "In the account history, look at the closed trade and read the profit, commission, and swap fields separately, then compare with the raw entry-to-exit move. Confirm the contract size and pip value for the symbol. The pieces will add up once you include spread, commission, swap, and conversion.",
        ],
      },
      {
        heading: 'How to plan for it',
        paragraphs: [
          "Learn the pip value and contract size of what you trade, and always include spread, commission, and swap when estimating a result. For short holds, costs can be a large share of the outcome, so factor them in before entering.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "This is usually a calculation gap on your side, closed once you count all the costs. If the numbers still do not reconcile after including spread, commission, swap, and conversion, ask support for a breakdown of the trade.",
        ],
      },
    ],
  },
  {
    slug: 'broker-voided-my-trade-explained',
    title: 'The broker voided or cancelled my trade: why it can happen',
    summary:
      "A cancelled or adjusted trade is unsettling. Here is when it is legitimate, when it is not, and what to do.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What "voided" means',
        paragraphs: [
          "Voiding a trade means the broker cancels or re-prices a fill after the fact, so the trade is removed or adjusted as if it happened at a different price. It is rare and should always come with a clear explanation, usually referencing a specific clause in the terms.",
        ],
      },
      {
        heading: 'Legitimate reasons it can happen',
        paragraphs: [
          "A clear pricing error — an 'off-market' or erroneous quote where the fill was at an obviously wrong price, which many terms allow to be corrected. A technical fault or feed glitch that produced a bad tick. Trades that breach specific rules in the client agreement. These corrections, done transparently and consistently, are generally within the terms.",
        ],
      },
      {
        heading: 'When it is a red flag',
        paragraphs: [
          "Voiding only your winning trades while leaving losers, vague or shifting explanations, no reference to any term, or a pattern of cancelling profitable trades — these suggest unfair treatment rather than genuine error correction. A broker that voids selectively is one to be very wary of.",
        ],
      },
      {
        heading: 'What to do',
        paragraphs: [
          "Ask for the exact reason and the specific clause in writing. Compare the fill price against an independent price source to see whether it truly was erroneous. Keep screenshots and the trade history. If the explanation does not hold up, complain in writing and, if the broker is regulated, escalate to the regulator.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Correcting a genuine, documented pricing error can be legitimate. Selective or unexplained voiding is a serious problem on the broker's side and a strong reason to move your money, since it undermines the fairness of every trade you place.",
        ],
      },
    ],
  },
  {
    slug: 'order-filled-at-worse-price-fix',
    title: 'My order filled at a worse price than shown: why?',
    summary:
      "Getting a worse fill than the screen price is usually slippage or the spread. Here is how to tell what happened.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What is happening',
        paragraphs: [
          "You clicked at one price but the trade opened or closed at a less favourable one. In most cases this is normal market mechanics — the spread and slippage — rather than a mistake, but it is worth confirming which.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "The spread: you buy at the ask and sell at the bid, so a chart showing a single line will look 'off' by the spread. Slippage: in a fast market, price moved between click and fill. A market order filled at the next available price rather than the last shown. Or a stop that triggered and filled beyond its level during a sharp move or gap.",
        ],
      },
      {
        heading: 'How to check',
        paragraphs: [
          "Compare the fill against the correct side of the market (ask for buys, bid for sells) at that instant, not the single chart line. Look at whether the market was moving fast or gapping. For a triggered stop, expect a fill at the next price, which can be worse in volatility.",
        ],
      },
      {
        heading: 'How to reduce it',
        paragraphs: [
          "Set a maximum deviation on market orders, use limit orders when you need a precise price, and avoid trading in the most violent seconds of news. Trade liquid instruments in busy hours for the tightest pricing.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "The spread and occasional slippage in fast markets are normal. If your fills are consistently worse than the true market on the correct side, or one-sided against you, that points to an execution problem worth investigating and comparing against another broker.",
        ],
      },
    ],
  },
  {
    slug: 'why-cant-i-close-my-position-fix',
    title: "Why can't I close my position? Causes and fixes",
    summary:
      "Being unable to close a trade is stressful. Here are the reasons and how to get out, calmly and correctly.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What is happening',
        paragraphs: [
          "You try to close a trade and it will not go through — an error appears, or nothing happens. Most causes are the same as those that block opening an order, plus a few specific to closing. Work through them methodically.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "No connection, so the close command cannot reach the server. The market is closed for that symbol, so no price is available to trade against. An 'off quotes' or requote as price moves in a fast market. Another command already processing on the order ('trade context busy' or 'order is locked'). Trading disabled on the account. Or a platform freeze.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Check the connection status first. Confirm the symbol's market is open. Increase the allowed deviation and try again if price is moving. Wait a moment if another command is processing, and avoid double-clicking. If the platform is frozen, restart it and re-check whether the trade is still open before acting.",
          "If nothing works and you must limit risk, some brokers let you close via a web or mobile version of the platform — try that as a backup route.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Keep a stable connection, know your symbols' hours, and have a backup way to access your account (mobile or web) in case the desktop platform fails at a bad moment.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Connection, closed markets, and moving prices are usually not the broker's fault. But being unable to close during open hours on a good connection, with trading mysteriously disabled, is serious — document it and escalate, because being trapped in a position is one of the strongest reasons to distrust a broker.",
        ],
      },
    ],
  },
  {
    slug: 'platform-freezes-or-crashes-fix',
    title: 'MetaTrader freezes or crashes: how to stabilise it',
    summary:
      "A platform that freezes at the wrong moment is dangerous. Here is how to fix the common causes and reduce the risk.",
    category: 'troubleshooting',
    level: 'beginner',
    readingMinutes: 5,
    body: [
      {
        heading: 'What is happening',
        paragraphs: [
          "The platform stops responding, lags badly, or closes on its own. Because this can strike while you have open trades, it is worth fixing the causes and having a backup route to your account.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "Too many charts, indicators, or EAs running at once, overloading your computer. A heavy or badly written custom indicator or EA. Not enough memory or a slow machine. A poor connection causing timeouts. Corrupted history or profile files. Or an outdated platform version.",
        ],
      },
      {
        heading: 'Step-by-step fix',
        paragraphs: [
          "Reduce the load: close charts you do not need, remove unused indicators and EAs, and lower the number of bars in history. Restart the platform, and the computer if needed. Update to the latest platform build. If a specific indicator or EA triggers the freeze, remove it and test. If profiles are corrupted, reset to a clean template.",
          "For serious, always-on trading, a VPS gives a stable, dedicated environment and keeps trades running even if your own device fails.",
        ],
      },
      {
        heading: 'How to prevent it',
        paragraphs: [
          "Keep the workspace lean, run trustworthy indicators and EAs only, keep the platform updated, and use adequate hardware or a VPS. Always know how to reach your account by mobile or web if the desktop freezes.",
        ],
      },
      {
        heading: "Broker's fault or yours?",
        paragraphs: [
          "Freezes are usually local — hardware, connection, or overloaded software on your side — not the broker. The important thing is having a backup way to manage positions so a freeze never leaves you unable to act on a live trade.",
        ],
      },
    ],
  },
];

export default CLUSTER_TROUBLESHOOTING;
