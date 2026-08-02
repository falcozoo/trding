/**
 * Technical trading tutorials for trding.io.
 *
 * How-to guides targeting real, low-competition technical search queries
 * (install an EA, backtest on MT5, position sizing...). These are strong
 * backlink magnets: forums, EA vendors and Reddit link to a clear reference
 * page. Authored by Falco (E-E-A-T). Rendered by app/tutorials/[slug]/page.tsx.
 * Shares the ArticleBlock shape with lib/articles.ts.
 */

import type { ArticleBlock } from "./articles";

export interface Tutorial {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  datePublished: string;
  dateModified: string;
  summary: string;
  blocks: ArticleBlock[];
}

export const TUTORIALS: Tutorial[] = [
  {
    slug: "how-to-download-install-metatrader-5",
    title: "How to Download and Install MetaTrader 5 (MT5): Step-by-Step Guide",
    seoTitle: "How to Download & Install MetaTrader 5 (MT5)",
    description: "Step-by-step guide to download and install MetaTrader 5 on Windows and Mac, connect a demo account, and avoid common Mac pitfalls.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    summary: "MetaTrader 5 (MT5) is the industry-standard trading platform for forex and CFDs, and installing it correctly is the first step before you place a single trade. The safest route is to download MT5 directly from your regulated broker's website rather than a random third-party link, since the broker's build comes pre-configured with the correct servers. On Windows the installer is native and takes minutes; on Mac there is no true native app, so you'll rely on the broker's web terminal or a compatibility layer, which is where most beginners get stuck. Always start with a free demo account to learn the interface before risking real money.",
    blocks: [
    {
      heading: "Introduction",
      paragraphs: [
        "MetaTrader 5 (MT5) is the most widely used trading platform for forex and CFDs, offering charting, order execution, technical indicators, and automated trading. Before you can analyze a chart or place an order, you need MT5 installed and connected to a broker server.",
        "This guide walks you through downloading and installing MT5 on both Windows and Mac, explains the difference between getting it from your broker versus MetaQuotes (the software's developer), and shows you how to connect a free demo account so you can practice risk-free. We'll also flag the pitfalls that trip up beginners, especially on Mac.",
      ],
    },
    {
      heading: "1. Choose Where to Download MT5: Broker vs MetaQuotes",
      paragraphs: [
        "You have two main sources for the MT5 installer, and this choice matters more than most beginners realize.",
      ],
      list: [
        "From your broker (recommended): Most regulated brokers host their own branded MT5 download. This version is pre-configured to connect to that broker's servers, so you skip manually searching for the right server name.",
        "From MetaQuotes (the developer): You can download a generic MT5 build from the official MetaQuotes website or app stores. This works, but you'll then have to manually find and select your broker's trading server.",
        "Rule of thumb: If you already have (or are opening) an account with a specific broker, download MT5 from that broker. It's the smoothest path and guarantees you're on the correct server.",
      ],
      bullets: true,
    },
    {
      heading: "2. Install MT5 on Windows",
      paragraphs: [
        "Windows is the platform MT5 was built for, so installation is native and straightforward.",
      ],
      list: [
        "Download the installer file (usually named mt5setup.exe) from your broker or MetaQuotes.",
        "Double-click the .exe file to launch the installer.",
        "Read and accept the license agreement, then click 'Next'.",
        "The installer downloads the platform files and completes automatically, usually in one to three minutes.",
        "Once finished, MT5 opens on its own, or you can launch it from the desktop shortcut.",
      ],
      bullets: true,
    },
    {
      heading: "3. Install MT5 on Mac (and the Mac Pitfalls)",
      paragraphs: [
        "This is where beginners struggle. MetaQuotes does NOT offer a true, fully native macOS application the way it does for Windows. You have three realistic options, each with trade-offs.",
        "Understand this before you start: the smoothest Mac experience is often the web terminal or the mobile app, not a desktop install. Don't waste an afternoon fighting an installer when a browser tab does the job.",
      ],
      list: [
        "Option A - Web terminal (easiest): Most brokers offer 'MT5 WebTrader', a browser-based version. No installation, works on any Mac, fastest way to start. Just log in with your account credentials.",
        "Option B - Broker's Mac build via compatibility layer: Some brokers package MT5 for Mac using a bundled compatibility layer (based on Wine/CrossOver). Download the .dmg, drag the app to Applications, and open it. On newer macOS you may need to right-click the app and choose 'Open' to bypass Gatekeeper.",
        "Option C - Run Windows MT5 on Mac: Use a virtual machine (Parallels) or a compatibility tool (CrossOver/Wine) to run the Windows .exe. Full functionality but more setup.",
        "Apple Silicon (M1/M2/M3) note: Older MetaTrader Mac builds relied on 32-bit compatibility that Apple removed. If a legacy download won't open, use the web terminal or a modern compatibility layer instead.",
      ],
      bullets: true,
    },
    {
      heading: "4. Create or Connect a Demo Account",
      paragraphs: [
        "A demo account uses virtual money on live market prices - the perfect place to learn MT5 before risking real funds.",
      ],
      list: [
        "Open MT5 and go to the 'File' menu, then select 'Open an Account' (or 'Login to Trade Account' if you already have credentials).",
        "Search for and select your broker's server. If you downloaded from your broker, the correct server usually appears automatically.",
        "Choose 'Open a demo account', fill in the basic details, and pick a virtual balance (e.g. $10,000) and leverage.",
        "MT5 generates a login number and password - save these somewhere safe.",
        "To connect an existing account, choose 'Login to Trade Account', enter your login number, password, and server, then click 'Login'.",
        "You're connected when live prices tick in the 'Market Watch' panel and your balance shows in the 'Toolbox' > 'Trade' tab.",
      ],
      bullets: true,
    },
    {
      heading: "Common Pitfalls to Avoid",
      list: [
        "Downloading from unofficial third-party sites: Only use your broker's site or the official MetaQuotes source. Random 'MT5 crack' or mirror downloads can carry malware.",
        "Selecting the wrong server: If prices don't load, you're almost certainly on the wrong trading server. Double-check the exact server name against your broker's instructions.",
        "Assuming a native Mac app exists: There isn't a full native one. Save time by starting with WebTrader on Mac.",
        "Losing your login details: Write down your login number, password, and server the moment MT5 generates them.",
        "Practicing on demo forever without a plan: Demo is for learning the tools, not for endless dabbling.",
      ],
      bullets: true,
    },
    {
      heading: "An Honest Word on Risk",
      paragraphs: [
        "Installing MT5 is the easy part. Trading forex and CFDs carries a high risk of losing money rapidly due to leverage - the majority of retail trader accounts lose money. A demo account feels identical to live trading but removes the emotional weight of real losses, which is exactly why so many traders who are profitable on demo blow up on their first live account.",
        "Take the demo phase seriously, learn proper risk and position-sizing before funding a real account, and never trade money you can't afford to lose. The platform is just a tool; your risk management is what actually protects you.",
      ],
    },
    ],
  },

  {
    slug: "how-to-install-expert-advisor-ea-metatrader-5-mt5",
    title: "How to Install an Expert Advisor (EA) on MetaTrader 5 (MT5)",
    seoTitle: "How to Install an EA on MetaTrader 5 (MT5)",
    description: "Step-by-step guide to install an Expert Advisor (EA) on MetaTrader 5: copy the file, enable AutoTrading, fix common errors.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    summary: "Installing an Expert Advisor (EA) on MetaTrader 5 means copying its .ex5 or .mq5 file into the platform's MQL5/Experts folder, restarting or refreshing MT5, dragging the EA onto a chart, and enabling AutoTrading with 'Allow Algo Trading' ticked. This guide walks beginners through every click, flags the traps that stop an EA from running — wrong folder, AutoTrading switched off, blocked DLL imports — and reminds you that no EA guarantees profit: backtest results are not live results, and most retail traders lose money.",
    blocks: [
    {
      heading: "What is an Expert Advisor, and why this guide?",
      paragraphs: [
        "An Expert Advisor (EA) is an automated trading program that runs inside MetaTrader 5. It reads the price chart, applies rules its author coded, and can open, manage, and close trades for you without manual clicks. EAs are written in the MQL5 language and arrive as either compiled .ex5 files (ready to run) or .mq5 source files (which MT5 compiles for you).",
        "The install itself is quick, but beginners routinely get stuck because MT5 hides the folder where EAs must live, or because AutoTrading is off by default. This tutorial removes the guesswork with exact, numbered steps and a troubleshooting section, so your EA actually appears in the Navigator and is allowed to trade.",
      ],
    },
    {
      heading: "Before you start",
      list: [
        "MetaTrader 5 installed and logged into a trading account (a demo account is strongly recommended for first tests).",
        "The EA file from its author or vendor — a .ex5 file (compiled, most common) or a .mq5 file (source code).",
        "Any extra files the EA requires, such as a .set preset file or included libraries, kept together with the EA.",
        "A note of exactly where you saved the download, for example your Downloads folder.",
      ],
      bullets: true,
    },
    {
      heading: "Step 1 — Locate your EA file (.ex5 or .mq5)",
      paragraphs: [
        "Find the file you downloaded. A .ex5 file is a compiled, ready-to-run EA and is the most common format. A .mq5 file is human-readable source code that MT5 will compile into an .ex5 automatically the first time it is opened in the platform.",
        "If the EA came inside a .zip archive, unzip it first. Never try to install a still-zipped file — MT5 cannot read it.",
      ],
    },
    {
      heading: "Step 2 — Open the MT5 data folder",
      paragraphs: [
        "In MetaTrader 5, click the top menu: File > Open Data Folder. A Windows Explorer (or Finder) window opens showing the exact folder MT5 reads from. This is the only reliable way to find it — do not browse to the Program Files install directory, because MT5 stores your EAs elsewhere (in a user AppData path).",
      ],
    },
    {
      heading: "Step 3 — Copy the EA into MQL5\\Experts",
      paragraphs: [
        "In the window that opened, double-click the MQL5 folder, then open the Experts subfolder. Copy your .ex5 or .mq5 file here. You can create subfolders inside Experts to stay organised (for example MQL5\\Experts\\MyStrategy) — MT5 will still find it.",
        "If the EA ships with indicator files (.ex5/.mq5 indicators) or libraries, place indicators in MQL5\\Indicators and libraries in MQL5\\Libraries. Any .set preset files can go in MQL5\\Presets.",
      ],
    },
    {
      heading: "Step 4 — Restart or refresh MetaTrader 5",
      paragraphs: [
        "Go back to MT5. Either close and reopen the platform, or right-click the 'Expert Advisors' branch inside the Navigator panel (View > Navigator, or Ctrl+N) and choose Refresh. Your EA should now appear in the list under Expert Advisors.",
      ],
    },
    {
      heading: "Step 5 — Attach the EA to a chart",
      paragraphs: [
        "Open a chart for the instrument and timeframe your EA is designed for (File > New Chart). In the Navigator, find your EA under Expert Advisors, then double-click it or drag it directly onto the chart.",
        "A settings window opens. On the 'Common' tab, tick 'Allow Algo Trading' (older builds call this 'Allow automated trading'). On the 'Inputs' tab, adjust parameters or load a .set preset if the vendor supplied one. Click OK.",
      ],
    },
    {
      heading: "Step 6 — Enable AutoTrading",
      paragraphs: [
        "Look at the top toolbar for the 'Algo Trading' (AutoTrading) button. Click it so it turns green — this is the master switch that lets any EA place live orders. When it is on and the EA is attached correctly, you will see a smiling face in the top-right corner of the chart. A frowning (sad) face means AutoTrading is off or the EA is not permitted to trade.",
      ],
    },
    {
      heading: "Step 7 — Confirm the EA is running",
      list: [
        "Smiling face in the top-right corner of the chart = EA is active and allowed to trade.",
        "The 'Algo Trading' toolbar button is green (pressed in).",
        "Open the Toolbox (Ctrl+T) and check the 'Experts' tab — you should see initialisation messages from your EA, and the 'Journal' tab for platform-level events.",
      ],
      bullets: true,
    },
    {
      heading: "Common traps to avoid",
      list: [
        "EA does not appear in the Navigator: you copied it to the wrong folder. It MUST be inside MQL5\\Experts, reached via File > Open Data Folder — not the Program Files directory. Refresh the Navigator afterwards.",
        "Sad/frowning face on the chart: AutoTrading is switched off, or 'Allow Algo Trading' was not ticked in the EA settings. Click the green Algo Trading button and re-check the EA's Common tab.",
        "EA needs DLL imports: some EAs call external DLLs. In the EA settings 'Common' tab (and under Tools > Options > Expert Advisors) you must tick 'Allow DLL imports'. Only enable this for EAs from a source you trust — DLLs can run arbitrary code.",
        "Wrong symbol or timeframe: many EAs are built for a specific pair and timeframe. Running them elsewhere can produce no trades or unexpected behaviour.",
        "'Algo Trading' disabled by broker or account: check the Journal tab for a message; some accounts restrict automated trading.",
      ],
      bullets: true,
    },
    {
      heading: "Troubleshooting",
      list: [
        "Nothing happens after attaching the EA: open Toolbox > Experts and Toolbox > Journal to read error messages — they usually name the exact problem.",
        "'AutoTrading is disabled' message: click the Algo Trading toolbar button until it is green, then re-attach the EA.",
        "EA compiles with errors (for .mq5): open it in MetaEditor (right-click the EA > Modify) and press F7 to compile; missing include files are the usual cause.",
        "EA shows but never trades: confirm the market is open, spread and account balance meet the EA's minimums, and inputs (lot size, risk) are set correctly.",
        "Still stuck: remove the EA (right-click chart > Expert Advisors > Remove), restart MT5 completely, then repeat Steps 5–6. Test on a demo account first.",
      ],
      bullets: true,
    },
    {
      heading: "An honest word on risk",
      paragraphs: [
        "Installing an EA correctly is a technical task — it says nothing about whether the EA is any good. No Expert Advisor guarantees a profit. A strategy that looks flawless in a backtest can lose money live, because backtests use historical data under idealised conditions (no slippage surprises, perfect fills, tidy spreads) that real markets do not honour.",
        "The majority of retail traders lose money, and automation does not change that arithmetic — it only executes the rules faster. Always test on a demo account, understand what the EA actually does, risk only money you can afford to lose, and treat any vendor promising guaranteed or 'risk-free' returns as a red flag. Nothing here is financial advice.",
      ],
    },
    ],
  },

  {
    slug: "how-to-install-expert-advisor-ea-metatrader-4-mt4",
    title: "How to Install an Expert Advisor (EA) on MetaTrader 4 (MT4)",
    seoTitle: "How to Install an EA on MetaTrader 4 (MT4)",
    description: "Beginner step-by-step guide to install an Expert Advisor (EA) on MetaTrader 4: copy the file, enable AutoTrading, fix errors.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    summary: "Installing an Expert Advisor (EA) on MetaTrader 4 means copying its .ex4 or .mq4 file into the platform's MQL4/Experts folder, restarting or refreshing MT4, dragging the EA onto a chart, and enabling AutoTrading with 'Allow live trading' ticked. This guide walks beginners through every step, flags the classic traps — wrong folder, AutoTrading off, blocked DLL imports — and reminds you honestly that no EA guarantees profit: a good backtest is not a promise of live results, and most retail traders lose money.",
    blocks: [
    {
      heading: "What is an Expert Advisor, and why this guide?",
      paragraphs: [
        "An Expert Advisor (EA) is an automated trading robot that runs inside MetaTrader 4. It watches the chart, applies the rules its author programmed, and can open, manage, and close trades without you clicking anything. On MT4, EAs are written in MQL4 and come as compiled .ex4 files (ready to run) or .mq4 source files (which MT4 compiles for you).",
        "The steps are simple, but the two things that trip up almost every beginner are putting the file in the wrong folder and forgetting to switch AutoTrading on. This tutorial gives you exact, numbered steps plus a troubleshooting section so your EA shows up in the Navigator and is actually permitted to trade.",
      ],
    },
    {
      heading: "Before you start",
      list: [
        "MetaTrader 4 installed and logged into a trading account (use a demo account for first tests).",
        "The EA file: a .ex4 file (compiled, most common) or a .mq4 file (source code).",
        "Any companion files the EA needs, such as a .set preset or custom indicators, kept together.",
        "The location of your download noted, for example your Downloads folder.",
      ],
      bullets: true,
    },
    {
      heading: "Step 1 — Locate your EA file (.ex4 or .mq4)",
      paragraphs: [
        "Find the file you downloaded. A .ex4 file is a compiled, ready-to-run EA — the most common format. A .mq4 file is editable source code that MT4 compiles into an .ex4 the first time it is opened in the platform.",
        "If the EA arrived in a .zip archive, unzip it first. MT4 cannot read files that are still inside a zip.",
      ],
    },
    {
      heading: "Step 2 — Open the MT4 data folder",
      paragraphs: [
        "In MetaTrader 4, click the top menu: File > Open Data Folder. A file-explorer window opens at the exact folder MT4 reads from. Always use this menu item — do not browse manually to the Program Files install directory, because MT4 keeps your EAs in a separate user data folder.",
      ],
    },
    {
      heading: "Step 3 — Copy the EA into MQL4\\Experts",
      paragraphs: [
        "In the window that opened, double-click the MQL4 folder, then open the Experts subfolder. Copy your .ex4 or .mq4 file here. You may create subfolders inside Experts to keep things tidy — MT4 will still list the EA.",
        "If the EA ships with custom indicators, place those .ex4/.mq4 indicator files in MQL4\\Indicators. Library files go in MQL4\\Libraries, and any .set preset files can be kept in MQL4\\Presets.",
      ],
    },
    {
      heading: "Step 4 — Restart or refresh MetaTrader 4",
      paragraphs: [
        "Return to MT4. Either close and reopen the platform, or right-click the 'Expert Advisors' branch in the Navigator panel (View > Navigator, or Ctrl+N) and choose Refresh. Your EA should now appear under Expert Advisors.",
      ],
    },
    {
      heading: "Step 5 — Attach the EA to a chart",
      paragraphs: [
        "Open a chart for the instrument and timeframe the EA expects (File > New Chart). In the Navigator, find your EA under Expert Advisors, then double-click it or drag it onto the chart.",
        "A settings window opens. On the 'Common' tab, tick 'Allow live trading'. On the 'Inputs' tab, set the parameters or load a .set preset if the vendor provided one, then click OK.",
      ],
    },
    {
      heading: "Step 6 — Enable AutoTrading",
      paragraphs: [
        "Find the 'AutoTrading' button in the top toolbar and click it so it turns green — this is the master switch that permits any EA to place live orders. When AutoTrading is on and the EA is attached correctly, a smiling face appears in the top-right corner of the chart. A frowning (sad) face means AutoTrading is off or the EA is not allowed to trade.",
      ],
    },
    {
      heading: "Step 7 — Confirm the EA is running",
      list: [
        "Smiling face in the top-right corner of the chart = EA is active and allowed to trade.",
        "The 'AutoTrading' toolbar button is green.",
        "Open the Terminal (Ctrl+T) and check the 'Experts' tab for initialisation messages, and the 'Journal' tab for platform-level events.",
      ],
      bullets: true,
    },
    {
      heading: "Common traps to avoid",
      list: [
        "EA does not appear in the Navigator: it is in the wrong folder. It MUST be inside MQL4\\Experts, reached via File > Open Data Folder — not the Program Files directory. Refresh the Navigator after copying.",
        "Sad/frowning face on the chart: AutoTrading is off, or 'Allow live trading' was not ticked in the EA's Common tab. Click the green AutoTrading button and re-check the settings.",
        "EA needs DLL imports: some EAs call external DLLs. Tick 'Allow DLL imports' in the EA's Common tab (and under Tools > Options > Expert Advisors). Only enable this for EAs from a source you trust — DLLs can run arbitrary code on your machine.",
        "Wrong symbol or timeframe: many MT4 EAs are built for one specific pair and timeframe; running them elsewhere may produce no trades or odd behaviour.",
        "AutoTrading blocked: check the Journal tab — some brokers or account types restrict automated trading.",
      ],
      bullets: true,
    },
    {
      heading: "Troubleshooting",
      list: [
        "Nothing happens after attaching the EA: open Terminal > Experts and Terminal > Journal to read the error messages — they usually pinpoint the cause.",
        "'AutoTrading is disabled' warning: click the AutoTrading toolbar button until it is green, then re-attach the EA.",
        "EA compiles with errors (for .mq4): open it in MetaEditor (right-click the EA > Modify) and press F7; missing include or indicator files are the common reason.",
        "EA shows but never trades: confirm the market is open, that spread, lot size, and balance meet the EA's requirements, and that inputs are set correctly.",
        "Still stuck: remove the EA (right-click chart > Expert Advisors > Delete), restart MT4 fully, then repeat Steps 5–6. Always test on a demo account first.",
      ],
      bullets: true,
    },
    {
      heading: "An honest word on risk",
      paragraphs: [
        "Getting the installation right is purely technical — it tells you nothing about whether the EA will make money. No Expert Advisor guarantees a profit. A strategy that shines in a backtest can still lose live, because backtests rely on historical data and idealised conditions (clean fills, no nasty slippage, tidy spreads) that real markets do not respect.",
        "Most retail traders lose money, and automation does not rewrite that reality — it just executes the rules faster, in both directions. Test on a demo account, make sure you understand exactly what the EA does, risk only money you can afford to lose, and be sceptical of anyone promising guaranteed or 'risk-free' returns. None of this is financial advice.",
      ],
    },
    ],
  },

  {
    slug: "how-to-backtest-trading-strategy-metatrader-5",
    title: "How to Backtest a Trading Strategy on MetaTrader 5 (Strategy Tester)",
    seoTitle: "How to Backtest a Strategy on MetaTrader 5",
    description: "Step-by-step guide to backtesting a trading strategy in the MetaTrader 5 Strategy Tester, plus the pitfalls that fool most beginners.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    summary: "Backtesting in the MetaTrader 5 Strategy Tester lets you run an Expert Advisor or strategy against historical price data to see how it would have behaved before you risk real money. This tutorial walks you through opening the tester (View > Strategy Tester or Ctrl+R), selecting your EA, pair and timeframe, setting the modelling mode to 'Every tick based on real ticks' for maximum accuracy, defining the date range and deposit, running the test, and reading the key metrics: profit factor, drawdown and total trades. Crucially, it also explains what a backtest does NOT prove: a beautiful equity curve on historical data is not a promise of future profit, and the majority of retail traders still lose money.",
    blocks: [
    {
      heading: "Why backtest, and what it actually proves",
      paragraphs: [
        "A backtest replays your trading strategy against historical market data so you can see how it would have performed in the past, without spending a single real dollar. In MetaTrader 5 (MT5), this is done inside the built-in Strategy Tester, which can run Expert Advisors (EAs, i.e. automated strategies) and some indicators over months or years of price history in minutes.",
        "A well-run backtest CAN prove useful things: that your strategy's logic executes without errors, roughly how often it trades, how large its historical drawdowns were, and whether its edge survived different market conditions. It is a filter to reject bad ideas cheaply.",
        "A backtest does NOT prove that your strategy will make money in the future. Past price behaviour is not a contract for future price behaviour. It cannot fully model live-market realities like variable spreads, slippage, requotes, gaps, or your own emotions when real money is on the line. Treat a good backtest as necessary but nowhere near sufficient.",
      ],
    },
    {
      heading: "Before you start: what you need",
      list: [
        "MetaTrader 5 installed and logged in to a broker account (a demo account is fine for testing).",
        "An Expert Advisor or a strategy compiled and visible in the Navigator panel under 'Expert Advisors'.",
        "Historical price data downloaded for the symbol and timeframe you want to test (MT5 can download this automatically, but real tick data may need to be synced first).",
        "A clear idea of the pair (symbol), timeframe, date range and starting deposit you want to test.",
      ],
      bullets: true,
    },
    {
      heading: "Step 1 — Open the Strategy Tester",
      paragraphs: [
        "In MetaTrader 5, open the Strategy Tester panel by clicking View > Strategy Tester in the top menu, or simply press Ctrl+R. A tabbed panel appears at the bottom of the terminal with several sub-tabs: Settings, Inputs, Agents, Journal and (after a run) Results, Graph and Report.",
      ],
    },
    {
      heading: "Step 2 — Select the Expert Advisor or indicator to test",
      paragraphs: [
        "On the Settings tab, use the 'Expert' dropdown to choose the EA you want to backtest. Only EAs that are compiled and present in the terminal's MQL5\\Experts folder will appear here. If your EA is missing, make sure it compiled without errors in MetaEditor and restart MT5 if needed.",
        "Note that the Strategy Tester is designed primarily for Expert Advisors. Testing a manual strategy or a raw indicator requires either an EA wrapper around that logic or using the visual mode to eyeball how the indicator behaved historically.",
      ],
    },
    {
      heading: "Step 3 — Choose the symbol (pair) and timeframe",
      paragraphs: [
        "In the 'Symbol' dropdown, select the instrument you want to test, for example EURUSD, XAUUSD or a specific CFD. Make sure it is exactly the symbol your broker offers, because spreads and contract specifications differ between brokers.",
        "In the 'Period' dropdown, choose the chart timeframe your strategy operates on (M1, M5, H1, D1, etc.). This should match the timeframe the strategy was designed for — a strategy built for H1 will behave very differently if tested on M5.",
      ],
    },
    {
      heading: "Step 4 — Set the modelling mode for accuracy",
      paragraphs: [
        "Find the 'Modelling' (sometimes shown as 'Model') dropdown. This controls how precisely MT5 reconstructs price movement between candles, and it is one of the biggest factors in how trustworthy your result is.",
        "For the most realistic test, choose 'Every tick based on real ticks'. This uses actual tick-by-tick data downloaded from your broker, giving the closest approximation to how prices really moved. 'Every tick' (generated ticks) is the next best option if real ticks are unavailable. Avoid the faster 'OHLC 1 minute' and '1 minute OHLC' style modes for any strategy that is sensitive to intrabar movement, stop-loss placement or scalping — they can produce misleadingly clean results.",
      ],
      list: [
        "Every tick based on real ticks — most accurate, uses real broker tick data.",
        "Every tick — generated ticks, good when real ticks are not downloaded.",
        "1 minute OHLC / Open prices only — much faster but far less realistic; use only for rough logic checks.",
      ],
      bullets: true,
    },
    {
      heading: "Step 5 — Define the date range and starting deposit",
      paragraphs: [
        "Tick the 'Use date' box and set a 'From' and 'To' date range. Choose a period long enough to include different market regimes — trends, ranges, high and low volatility. A test covering only a few weeks of a single trend tells you almost nothing about robustness.",
        "Set the 'Deposit' field to a realistic starting balance and select the deposit currency and leverage that match how you actually intend to trade. The leverage and deposit affect position sizing and margin, which in turn affect whether the strategy would have survived its worst drawdowns.",
      ],
    },
    {
      heading: "Step 6 — Configure inputs and run the test",
      paragraphs: [
        "Switch to the 'Inputs' tab to review and adjust the EA's parameters (lot size, stop-loss, take-profit, indicator periods, etc.). Leave these at sensible defaults for a first honest run rather than hunting for the 'best' numbers.",
        "Optionally enable 'Visual mode' on the Settings tab to watch trades play out on a chart — slower, but excellent for understanding what the EA is actually doing. When you are ready, click the 'Start' button. MT5 will download any missing history, run the simulation, and populate the Results, Graph and Report tabs.",
      ],
    },
    {
      heading: "Step 7 — Read the results that matter",
      paragraphs: [
        "When the run finishes, open the 'Results' and 'Report' tabs. Do not fixate on total net profit alone — the balance of these metrics tells the real story.",
      ],
      list: [
        "Profit Factor — gross profit divided by gross loss. Above 1.0 means profitable historically; many robust strategies sit between 1.2 and 2.0. Very high numbers (e.g. 5+) on a short test often signal over-fitting, not genius.",
        "Maximal Drawdown (and Relative Drawdown %) — the largest peak-to-trough drop in equity. This is your pain threshold; if you couldn't stomach it live, the strategy is not tradable for you regardless of profit.",
        "Total Trades — how many trades the sample contains. A handful of trades is statistically meaningless; you generally want dozens to hundreds before any metric is trustworthy.",
        "Expected Payoff, Sharpe Ratio and Recovery Factor — supporting measures of per-trade edge, risk-adjusted return and how quickly the account recovers from losses.",
        "Modelling Quality — shown as a percentage; the higher, the more faithfully MT5 reconstructed price movement for this test.",
      ],
      bullets: true,
    },
    {
      heading: "Why modelling quality and data quality are critical",
      paragraphs: [
        "The Strategy Tester reports a 'Modelling Quality' percentage. This reflects how completely and accurately your historical data covered the tested period. Low modelling quality — caused by missing bars, gaps in tick data, or a coarse modelling mode — means MT5 was guessing at intrabar price movement, and your results are built on that guesswork.",
        "Garbage in, garbage out applies absolutely here. A strategy that relies on precise stop-loss or take-profit hits, or on tight scalping entries, can look wildly profitable on low-quality data and then fall apart on real ticks. Always download real tick data for your broker's exact symbol, aim for high modelling quality, and be sceptical of any result produced on incomplete history.",
      ],
    },
    {
      heading: "The pitfalls that fool almost everyone",
      paragraphs: [
        "Most losing backtests are not honest failures — they are results that were quietly rigged, usually by accident. Watch for these traps:",
      ],
      list: [
        "Over-fitting / curve-fitting — tuning parameters until the strategy looks perfect on your test period. Such settings are memorised to the past and typically collapse in live trading. Prefer robust parameters that work 'well enough' across many settings over a single magic combination.",
        "Too little data — testing on a few weeks or a single market condition. Test across years and across trends, ranges and crises so you see how the strategy behaves when the market changes.",
        "Ignoring spread, slippage and swap — a backtest with a fixed tiny spread and zero slippage can turn a losing strategy into a 'winner'. Use realistic (or variable) spreads, account for slippage on entries and exits, and include overnight swap/rollover costs, especially for strategies that hold positions.",
        "Confusing a backtest with a live result — historical simulation has no requotes, no broker execution delays, no widening spreads during news, and no emotional interference. Live performance is almost always worse than the backtest.",
        "Look-ahead bias and repainting indicators — some strategies accidentally use information that would not have been available at the time, producing impossible results that never reproduce live.",
      ],
      bullets: true,
    },
    {
      heading: "Troubleshooting common issues",
      list: [
        "EA not appearing in the Expert dropdown — confirm it compiled with no errors in MetaEditor and lives in MQL5\\Experts; restart MT5 to refresh the list.",
        "'No history data' or empty results — MT5 needs to download history; open a chart of the symbol, scroll back to force a download, or let the tester sync. For real ticks, ensure tick data has been downloaded for that symbol.",
        "Low modelling quality percentage — switch the modelling mode to 'Every tick based on real ticks', re-download history, and make sure there are no large gaps in the data.",
        "Test runs but places zero trades — check the Inputs tab (lot size, enabled settings), verify the date range actually contains data, and read the Journal tab for error messages about margin, symbol or trading permissions.",
        "Results look 'too good to be true' — they usually are. Suspect over-optimistic spread settings, low-quality modelling, over-fitted inputs, or a repainting indicator, and re-test with realistic conditions.",
        "Symbol not found — the exact symbol name must match your broker's (e.g. 'EURUSD.i' vs 'EURUSD'); pick it from the dropdown rather than typing it.",
      ],
      bullets: true,
    },
    {
      heading: "An honest final word",
      paragraphs: [
        "A clean backtest with a healthy profit factor, a survivable drawdown and hundreds of trades is a genuinely good sign — but it guarantees nothing. History does not repeat on demand, and even a robust edge can stop working when the market's structure changes.",
        "The realistic path is: backtest honestly, then forward-test on a demo account, then trade tiny live size, scaling up only if real-money results hold up. Even then, understand the base rate — the large majority of retail traders lose money over time. Backtesting is a tool to lose less and think more clearly, not a shortcut to guaranteed profit. Never risk money you cannot afford to lose.",
      ],
    },
    ],
  },

  {
    slug: "how-to-calculate-position-size-manage-risk-forex",
    title: "How to Calculate Position Size and Manage Risk in Forex (with Formula)",
    seoTitle: "Forex Position Size Calculator & Risk Formula",
    description: "Learn the forex position sizing formula with a full worked example, the 1-2% risk rule, and the pip-value pitfalls that wipe out beginners.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    summary: "Position sizing is the single most important skill separating traders who survive from those who blow up their accounts. The core formula is: Position size (in lots) = (Account balance x Risk %) / (Stop-loss in pips x pip value per lot). Using a $5,000 account risking 1% ($50) with a 20-pip stop-loss and a $10 pip value per standard lot, the correct position size is exactly 0.25 lots. By risking only 1-2% of your account per trade, you ensure that no single loss can destroy you. Master this math before you worry about entries, indicators, or strategy.",
    blocks: [
    {
      heading: "Introduction",
      paragraphs: [
        "Ask any consistently profitable trader what kept them in the game, and they'll rarely mention a secret indicator or entry signal. They'll talk about risk management - and at the heart of risk management is position sizing.",
        "Position sizing answers one question: given how much I'm willing to lose on this trade, how big should my trade be? Get this right and a losing streak is a survivable inconvenience. Get it wrong and a single bad trade can erase weeks of gains - or your whole account. This guide gives you the exact formula, a full worked example, the 1-2% rule, and the pitfalls that quietly destroy beginner accounts.",
      ],
    },
    {
      heading: "1. Why Position Sizing Is THE Skill That Separates Survivors",
      paragraphs: [
        "Most beginners obsess over when to enter a trade. But even a strategy that wins 60% of the time will produce losing streaks - and if each loss is too big, you'll be wiped out before your edge can play out.",
        "Position sizing decouples your survival from any single trade. When you risk a small, fixed percentage of your account, no individual loss can hurt you badly, and you always have capital left to trade tomorrow. This is precisely why professionals treat sizing as non-negotiable and amateurs treat it as an afterthought.",
      ],
    },
    {
      heading: "2. The Position Sizing Formula",
      paragraphs: [
        "Here is the core formula every forex trader should have memorized:",
      ],
      list: [
        "Position size (in lots) = (Account balance x Risk %) / (Stop-loss in pips x pip value per lot)",
        "Account balance x Risk % = the dollar amount you're willing to lose on this trade (your risk in $).",
        "Stop-loss in pips = the distance from your entry to your stop-loss, measured in pips.",
        "Pip value per lot = how much one pip is worth per standard lot (typically $10 for a standard lot on USD-quoted pairs like EUR/USD).",
        "In plain English: divide the dollars you're willing to lose by how many dollars you'd lose per lot if your stop is hit. The result is your correct lot size.",
      ],
      bullets: true,
    },
    {
      heading: "3. A Full Worked Example (Step by Step)",
      paragraphs: [
        "Let's plug in real numbers. Assume the following setup:",
      ],
      list: [
        "Account balance: $5,000",
        "Risk per trade: 1%",
        "Stop-loss: 20 pips",
        "Pip value: $10 per pip per standard lot (e.g. EUR/USD)",
      ],
      bullets: true,
    },
    {
      heading: "Do the Math",
      list: [
        "Step 1 - Risk in dollars: $5,000 x 1% = $50. This is the maximum you'll lose if the trade hits your stop.",
        "Step 2 - Loss per lot: 20 pips x $10 = $200. If you traded one full standard lot, a 20-pip loss would cost $200.",
        "Step 3 - Position size: $50 / $200 = 0.25 lots.",
        "Result: You should trade 0.25 standard lots. If your 20-pip stop is hit, you lose exactly $50 - your predetermined 1% risk. No guessing, no emotion.",
      ],
      bullets: true,
    },
    {
      heading: "4. The 1-2% Risk Rule",
      paragraphs: [
        "The formula tells you HOW to size a trade, but it needs an input: how much of your account to risk. The widely accepted answer is 1-2% of your account balance per trade - and never more.",
      ],
      list: [
        "Risking 1% means you could lose 20 trades in a row and still have roughly 80% of your account intact.",
        "Risking 2% is the aggressive end of prudent - acceptable for experienced traders with a proven edge.",
        "Risking 5%, 10%, or more per trade means a normal losing streak can cut your account in half. This is how most beginners blow up.",
        "Beginners should start at 1% (or even less). The goal early on is survival and learning, not fast growth.",
      ],
      bullets: true,
    },
    {
      heading: "5. Why the Small Percentage Matters (The Drawdown Math)",
      paragraphs: [
        "Losses hurt more than equivalent gains help, because of how percentages compound. If you lose 50% of your account, you then need a 100% gain just to get back to breakeven. Lose 90%, and you need a 900% gain to recover.",
        "Small, fixed-percentage risk keeps your drawdowns shallow and recoverable. This is the quiet math that lets consistent traders stay in the game for years while over-leveraged gamblers flame out in weeks.",
      ],
    },
    {
      heading: "6. Adjust Pip Value for the Pair You Trade",
      paragraphs: [
        "The $10-per-pip figure only holds cleanly for standard lots on pairs where USD is the quote currency (the second currency), like EUR/USD or GBP/USD. Ignore this and your risk calculation will be silently wrong.",
      ],
      list: [
        "USD as the quote currency (EUR/USD, GBP/USD, AUD/USD): pip value is about $10 per standard lot. The simple case.",
        "USD as the base currency (USD/JPY, USD/CHF, USD/CAD): pip value varies with the exchange rate and must be calculated per pair, not assumed at $10.",
        "JPY pairs: a pip is the second decimal place (0.01), not the fourth - a common source of sizing errors.",
        "Cross pairs with no USD (EUR/GBP, GBP/JPY): pip value depends on the exchange rate to your account currency and needs conversion.",
        "The safe habit: use a reliable pip-value calculator (most brokers and MT5 provide one) rather than assuming $10 for every pair.",
      ],
      bullets: true,
    },
    {
      heading: "Common Pitfalls to Avoid",
      list: [
        "Risking too much per trade: The number one account killer. Anything above 2% per trade turns a normal losing streak into a catastrophe.",
        "Assuming pip value is always $10: It's only about $10 for standard lots on USD-quoted pairs. Wrong pip value means wrong position size and wrong risk.",
        "Sizing by 'gut feel' instead of the formula: If you're picking lot sizes emotionally, you're not managing risk - you're gambling.",
        "Ignoring lot size units: 1.0 = standard lot ($10/pip), 0.1 = mini lot ($1/pip), 0.01 = micro lot ($0.10/pip). Mixing these up can 10x your intended risk.",
        "Moving or removing the stop-loss after entry: Your whole calculation assumes the stop holds. Widening it mid-trade breaks the math and your risk plan.",
        "Forgetting leverage amplifies losses too: Leverage lets you control large positions with little capital, but it magnifies losses just as fast as gains.",
      ],
      bullets: true,
    },
    {
      heading: "An Honest Word on Risk",
      paragraphs: [
        "Position sizing and the 1-2% rule don't make you profitable - they keep you alive long enough to find out if your strategy has an edge. Trading forex and CFDs carries a high risk of rapid loss due to leverage, and the majority of retail trader accounts lose money.",
        "No amount of correct math turns a losing strategy into a winning one. But bad sizing will reliably turn even a winning strategy into a blown account. Learn this formula, apply it on every single trade, and never risk money you can't afford to lose.",
      ],
    },
    ],
  },
];

export function getTutorial(slug: string): Tutorial | undefined {
  return TUTORIALS.find((t) => t.slug === slug);
}

export function getAllTutorialSlugs(): string[] {
  return TUTORIALS.map((t) => t.slug);
}
