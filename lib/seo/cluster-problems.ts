import type { Lesson } from '../lessons';

/**
 * Problem-solving / troubleshooting cluster.
 * Answers real, high-volume "why / how do I fix" beginner trading problems:
 * withdrawals, margin calls, stop-outs, scams, platform issues, KYC, swaps,
 * slippage, negative balance, and recovery.
 *
 * Tone: plain English, honest about risk, practical step-by-step. Where money,
 * withdrawals or scams are involved, readers are pointed to official regulator
 * registers (FCA, AMF, CySEC, ASIC, etc.) and to file complaints properly.
 * Neutral: this is education, not a recommendation to trade or to use any broker.
 */
export const CLUSTER_PROBLEMS: Lesson[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'why-cant-i-withdraw-from-my-broker',
    title: "Why can't I withdraw money from my broker?",
    summary:
      "A calm troubleshooting guide to withdrawal problems: the ordinary reasons withdrawals stall, the warning signs that something is wrong, and the exact steps to take to get your money back.",
    category: 'basics',
    level: 'beginner',
    readingMinutes: 7,
    body: [
      {
        heading: 'First, separate "slow" from "blocked"',
        paragraphs: [
          "A withdrawal that is taking a few working days is annoying but usually normal. A withdrawal that is refused, endlessly delayed, or met with new demands each time you ask is a very different problem. Before you panic, work out which situation you are actually in.",
          "With a legitimate, regulated broker, a withdrawal typically takes anywhere from a few hours to several business days, depending on the method. Card and e-wallet withdrawals are often faster than bank transfers. Weekends, bank holidays and the broker's own processing cut-off times all add delay that has nothing to do with anything sinister.",
          "So your first job is simply to check the broker's stated withdrawal timeframe and count the actual business days that have passed. Many 'my broker won't pay me' worries are just impatience during a normal processing window.",
        ],
      },
      {
        heading: 'The ordinary, fixable reasons',
        paragraphs: [
          "Most withdrawal blocks come down to unfinished paperwork or a mismatch between how you deposited and how you are trying to withdraw. Common causes: your identity verification (KYC) is incomplete; you are trying to withdraw to a different card or bank than the one you deposited from; you have not withdrawn to the original funding source first (many brokers require this for anti-money-laundering reasons); or you still have open trades tying up your balance.",
          "Bonus terms are another frequent trap. If you accepted a deposit 'bonus', you may have agreed to trade a certain volume before you can withdraw. This is one reason many careful traders avoid bonuses entirely — they can lock up your own money.",
          "Go through this checklist calmly: confirm your account is fully verified, withdraw back to your original payment method, close open positions if required, and read the withdrawal terms you agreed to. Fixing one of these resolves the large majority of ordinary cases.",
        ],
      },
      {
        heading: 'The warning signs that it is not ordinary',
        paragraphs: [
          "Some patterns are genuine red flags. Be alarmed if: your 'account manager' pressures you to deposit more before you can withdraw; you are told you must pay a 'tax', 'fee' or 'insurance' up front to release your own money; the goalposts keep moving every time you comply; or the broker suddenly cannot be found on its regulator's register. None of these are how a legitimate firm behaves.",
          "The 'pay a fee to unlock your withdrawal' demand is especially telling — it is a classic scam mechanic. A real broker deducts any genuine fees from your balance; it never asks you to send fresh money to get your existing money out.",
        ],
      },
      {
        heading: 'Step-by-step: how to escalate',
        paragraphs: [
          "1) Put your request in writing (email or the platform's ticket system) so you have a dated record. 2) Ask specifically which requirement is outstanding and quote the broker's own stated timeframe. 3) If you get no clear answer, check the broker is still listed and authorised on its regulator's public register — for example the FCA register in the UK, CySEC in Cyprus, ASIC in Australia, or your national regulator's register in your country.",
          "4) If the broker is regulated and still refuses, file a formal complaint with the broker, then escalate to the regulator or the relevant ombudsman/dispute scheme (such as the Financial Ombudsman Service in the UK). 5) Keep every email, screenshot and transaction record. Written evidence is what these bodies act on.",
          "If the broker turns out to be unregulated or not who it claimed to be, treat it as a possible scam and read our guides on checking regulation and reporting a scam broker. Acting quickly and in writing gives you the best chance of recovery.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'why-was-my-withdrawal-rejected',
    title: 'Why was my withdrawal rejected?',
    summary:
      "A rejected withdrawal usually has a specific, fixable cause. Here are the common reasons brokers reject withdrawals and exactly how to get the request approved.",
    category: 'basics',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'A rejection is a message, not a wall',
        paragraphs: [
          "A rejected withdrawal is frustrating, but it is usually the system telling you a rule was not met — not that your money is gone. The fastest route to your cash is to find out precisely which rule tripped, rather than resubmitting the same request and hoping.",
          "Look first for a reason code or note in the rejection email or your account history. Regulated brokers are generally required to give you a reason. If none is shown, that itself is a question worth raising in writing.",
        ],
      },
      {
        heading: 'The usual reasons',
        paragraphs: [
          "The most common causes are: incomplete identity verification (KYC); trying to withdraw more than your available (non-margin) balance while trades are open; requesting a payout to a card or account that is not the one you deposited from; a name mismatch between your trading account and your bank account; or a minimum-withdrawal threshold you have not reached.",
          "Others include unmet bonus wagering conditions, a pending deposit that has not fully cleared, or the broker running periodic security checks. Each of these has a clear fix, and none of them requires you to send more money.",
        ],
      },
      {
        heading: 'How to fix it, in order',
        paragraphs: [
          "1) Complete every verification step — usually a photo ID, proof of address dated within the last three months, and sometimes a photo of the payment card. 2) Close or reduce open positions so your withdrawable balance covers the amount. 3) Withdraw to your original funding source first, matching the name exactly. 4) Check you meet the minimum withdrawal amount and that any bonus conditions are cleared or the bonus is removed.",
          "Do all of this in writing where possible, and keep a copy. If you correct the obvious issues and the withdrawal is still rejected without a valid reason, that is when you escalate.",
        ],
      },
      {
        heading: 'When a rejection is a red flag',
        paragraphs: [
          "Be suspicious if the reason given is that you must first pay a fee, tax or deposit to 'release' the funds, or if requirements multiply every time you satisfy one. Legitimate brokers deduct real fees from your balance; they do not demand new deposits to free your existing money.",
          "If the broker cannot be found on its claimed regulator's public register, or refuses to give any lawful reason, stop depositing, gather your evidence, and escalate to the regulator and any relevant dispute scheme. Our guides on checking regulation and reporting a scam broker walk through exactly how.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'what-to-do-if-broker-wont-return-my-money',
    title: "What to do if a broker won't return your money",
    summary:
      "A practical, step-by-step escalation plan for when a broker refuses to return your funds: how to build your case, who to complain to, and how to give yourself the best chance of recovery.",
    category: 'risk',
    level: 'beginner',
    readingMinutes: 8,
    body: [
      {
        heading: 'Stay calm and stop depositing',
        paragraphs: [
          "If a broker is refusing to return your money, the most important first move is to stop sending more. Scam operations often extract the largest sums after the victim is already worried, by promising that 'one more payment' — a tax, a fee, a top-up — will unlock everything. It never does.",
          "Take a breath and shift into evidence mode. Your goal now is not to argue with the broker but to document everything and route your complaint to people who can actually act.",
        ],
      },
      {
        heading: 'Build your evidence file',
        paragraphs: [
          "Gather, in one place: every deposit receipt and bank/card statement showing money sent; all emails, chat logs and messages; screenshots of your account balance and any withdrawal requests and rejections; the broker's name, website, company registration details and any regulator/licence number it claims; and the names or handles of anyone who contacted you.",
          "Dates matter. A clear timeline — when you deposited, when you asked to withdraw, what you were told — makes your complaint far stronger and helps regulators and banks act quickly.",
        ],
      },
      {
        heading: 'Check whether the broker is actually regulated',
        paragraphs: [
          "Look up the firm on the official public register of the regulator it claims to hold a licence from — for example the FCA in the UK, the AMF in France, CySEC in Cyprus, ASIC in Australia, or BaFin in Germany. Match the exact company name, licence number and website. Clone firms often copy a real firm's details, so verify the contact details on the register, not the ones the broker gave you.",
          "If the firm is genuinely regulated, you have formal complaint routes. If it is not on any register — or is on a regulator's public warning list — treat it as a scam and prioritise reporting it to police/fraud lines and your bank.",
        ],
      },
      {
        heading: 'Escalate in the right order',
        paragraphs: [
          "1) File a formal written complaint with the broker and give it the deadline stated in its complaints policy. 2) If it is regulated, escalate to the regulator and to any applicable ombudsman or investor-compensation scheme (for example the Financial Ombudsman Service in the UK, or an investor compensation fund where one exists). 3) Contact your bank or card provider immediately about a chargeback or payment recall — there are time limits, so do this early. 4) Report the fraud to your national fraud/cybercrime service and, where relevant, to the regulator's scam-reporting line.",
          "Be realistic and honest with yourself: recovery is possible but not guaranteed, especially with offshore or unregulated firms. The sooner you act and the better your records, the better your odds.",
        ],
      },
      {
        heading: 'Protect yourself from "recovery scams"',
        paragraphs: [
          "After a loss, you may be approached by someone promising to recover your money for an up-front fee. This is almost always a second scam that targets known victims — sometimes run by the same people. No legitimate recovery service asks for payment up front to 'unlock' funds.",
          "Only trust official channels: your regulator, your bank, and law-enforcement fraud services. Anyone who contacts you out of the blue offering to get your money back should be treated as a fresh threat, not a solution.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'how-to-check-if-a-broker-is-regulated',
    title: 'How to check if a broker is regulated (step by step)',
    summary:
      "The single most important check before you deposit: how to verify a broker on official regulator registers, spot clone firms, and read warning lists — with the exact registers to use.",
    category: 'basics',
    level: 'beginner',
    readingMinutes: 7,
    body: [
      {
        heading: 'Why this one check matters most',
        paragraphs: [
          "Whether a broker is genuinely regulated by a serious authority is the closest thing to a make-or-break test you have. Regulation does not guarantee profits or even good service, but it means the firm must follow rules on holding client money, treating you fairly, and giving you complaint and compensation routes if things go wrong. An unregulated firm owes you none of that.",
          "The good news: checking is free, quick, and done on official public registers that anyone can search. Never rely on the broker's own website badges or claims — verify independently.",
        ],
      },
      {
        heading: 'Find the right register',
        paragraphs: [
          "Identify which regulator the broker claims to be authorised by, then go to that regulator's official register directly (type the regulator's name into a search engine rather than clicking the broker's link). Major registers include: the FCA in the UK, the AMF (and ORIAS/REGAFI) in France, CySEC in Cyprus, ASIC in Australia, BaFin in Germany, CONSOB in Italy, the CNMV in Spain, and the CFTC/NFA in the United States.",
          "Regulators are not equal. A licence from a strict, well-known authority carries far more weight than one from an obscure offshore jurisdiction. If a broker is only 'regulated' somewhere you have never heard of, treat that as a caution, not reassurance.",
        ],
      },
      {
        heading: 'What to match — and how clone firms trick people',
        paragraphs: [
          "On the register, match four things: the exact company name, the licence/reference number, the website domain, and the contact details. A common scam is the 'clone firm' — fraudsters copy a legitimate, regulated firm's name and number but give you a slightly different website, phone number or email.",
          "So always use the phone number and website listed on the official register, not the ones the broker sent you. If the details do not match precisely, or the broker's domain differs from the registered one, walk away.",
        ],
      },
      {
        heading: 'Check the warning lists too',
        paragraphs: [
          "Regulators publish public warning lists of firms operating without authorisation or suspected of being scams. The FCA, AMF, CySEC, ASIC, CONSOB and others all maintain these, and IOSCO hosts an international investor-alerts portal that aggregates many of them. Searching the broker's name across these lists takes minutes and can save you everything.",
          "If a firm appears on any warning list, that is a decisive stop. Combined with a register check, these two searches are the most valuable ten minutes you can spend before depositing a single cent.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'is-my-broker-a-scam-how-to-check',
    title: 'Is my broker a scam? How to check',
    summary:
      "A clear, evidence-based way to judge whether the broker you are using is legitimate or a scam: the red flags, the green flags, and the checks that settle it.",
    category: 'risk',
    level: 'beginner',
    readingMinutes: 7,
    body: [
      {
        heading: 'Trust the checks, not the feeling',
        paragraphs: [
          "A polished website, a friendly 'account manager', and even a working platform prove nothing — scam operations invest heavily in looking legitimate. Equally, a clunky interface or a slow withdrawal does not automatically mean fraud. Instead of going on vibes, run a short set of concrete checks that are hard to fake.",
          "The aim is to move from 'I have a bad feeling' to 'here is verifiable evidence one way or the other'. That evidence is also exactly what you would need if you later had to complain or report the firm.",
        ],
      },
      {
        heading: 'The strongest red flags',
        paragraphs: [
          "Treat these as serious warning signs: the firm is not on any credible regulator's register, or appears on a warning list; you are pressured to deposit quickly or to add more to 'unlock' profits or withdrawals; you are promised guaranteed or unrealistic returns; someone else is trading 'on your behalf' and only ever asks for deposits; you are told to pay a tax or fee to withdraw your own money; or you were recruited via social media, dating apps, or a stranger in a chat group.",
          "Any single one of these justifies stopping deposits immediately. Several together mean you should assume it is a scam and switch straight into evidence-and-escalation mode.",
        ],
      },
      {
        heading: 'The green flags that reassure (a little)',
        paragraphs: [
          "Signs that point towards legitimacy: verifiable authorisation on a strict regulator's register with matching details; clear, published fees and terms; a normal KYC process; no pressure and no bonuses with hidden strings; and small test withdrawals that arrive within the stated timeframe.",
          "A useful, practical test if you are unsure: deposit only a small amount, then try to withdraw a portion of it before doing anything else. A legitimate broker returns it smoothly. A scam will suddenly find reasons you cannot have it back.",
        ],
      },
      {
        heading: 'Make the call and act',
        paragraphs: [
          "Put your findings together. If the regulation check fails or any major red flag is present, do not deposit more and begin gathering evidence: statements, chats, screenshots, and the firm's claimed details. Then follow our guides on checking regulation and reporting a scam broker to escalate to the regulator, your bank, and fraud authorities.",
          "If the checks pass and there are no red flags, you are on firmer ground — but stay alert. Legitimacy today does not excuse you from ongoing basics like small deposits, no bonuses with strings, and never risking money you cannot afford to lose.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'how-to-report-a-scam-broker',
    title: 'How to report a scam broker to regulators',
    summary:
      "If you have been scammed by a broker, reporting it properly matters — for your own recovery and to protect others. Here is who to contact, in what order, and what they need from you.",
    category: 'risk',
    level: 'beginner',
    readingMinutes: 7,
    body: [
      {
        heading: 'Why reporting is worth your time',
        paragraphs: [
          "Reporting a scam broker does two things. First, it can trigger action that helps you or others recover funds or stop the operation. Second, your report adds to the warning lists and intelligence that regulators use to protect the next person. Even if your own recovery is uncertain, the report has value.",
          "You do not need to be certain it is a scam to report it. Regulators would rather receive a report about a suspicious firm than miss one. Report what you experienced, factually.",
        ],
      },
      {
        heading: 'Prepare your report',
        paragraphs: [
          "Before contacting anyone, assemble: the firm's name, website and any company/licence numbers it claimed; how you found or were contacted by them; the dates and amounts of every deposit; the payment methods used; copies of all communications and screenshots; and a short, factual timeline of what happened.",
          "A clear, well-organised report is acted on faster. Stick to facts and dates rather than emotion, and keep the originals safe in case you are asked for more.",
        ],
      },
      {
        heading: 'Who to contact, in order',
        paragraphs: [
          "1) The financial regulator — file with the authority the firm claimed to be regulated by, and with your own country's regulator (FCA, AMF, CySEC, ASIC, BaFin, CONSOB, CNMV, or your national body). Most have online scam-report forms. 2) Your bank or card provider — report the payments immediately and ask about chargebacks or recalls; time limits apply. 3) Your national fraud / cybercrime service (for example Action Fraud in the UK) and, where relevant, the police.",
          "If you paid by crypto, tell the exchange you used and your fraud service — some transfers can be traced or frozen if you act fast. Note reference numbers from each report; you may need them when following up.",
        ],
      },
      {
        heading: 'After you report',
        paragraphs: [
          "Keep copies of every report and reference number, and follow up if you hear nothing within the timeframe each body states. Regulatory action can be slow and outcomes are not guaranteed, especially with offshore operators — be honest with yourself about that while still doing everything you can.",
          "Finally, guard hard against 'recovery' scammers who target reported victims with promises to get your money back for an up-front fee. That is a second scam. Only ever work through official channels: your regulator, your bank, and law enforcement.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'what-to-do-if-you-fell-for-a-trading-scam',
    title: 'What to do if you fell for a trading scam',
    summary:
      "The first 48 hours matter most. A calm, ordered action plan for the moment you realise you have been scammed — how to limit the damage and protect yourself from a second hit.",
    category: 'risk',
    level: 'beginner',
    readingMinutes: 7,
    body: [
      {
        heading: 'It is not your fault — now act quickly',
        paragraphs: [
          "Realising you have been scammed is shocking and often shaming, but these operations are professional and deliberately manipulative. Falling for one does not make you foolish. What matters now is acting quickly and calmly, because the first hours give you the best chance to limit the loss.",
          "Two rules from the outset: stop sending any more money, no matter what you are told, and do not delete anything. The messages and records you have are your most valuable assets from here.",
        ],
      },
      {
        heading: 'Immediate steps (the first 48 hours)',
        paragraphs: [
          "1) Contact your bank or card provider straight away, report the payments as fraud, and ask about chargebacks, recalls, or freezing further transfers. Time limits apply, so this comes first. 2) If you shared card numbers, passwords or gave remote access to your device, change passwords, enable two-factor authentication, and consider that the account may be compromised. 3) Screenshot and export everything — chats, emails, the trading dashboard, transaction records — before access is cut off.",
          "If you granted remote-access software to anyone, remove it and run a security check; scammers sometimes use it to reach your banking. Treat any account they touched as at risk.",
        ],
      },
      {
        heading: 'Report it properly',
        paragraphs: [
          "File with the relevant financial regulator (FCA, AMF, CySEC, ASIC, or your national authority), report to your country's fraud/cybercrime service, and, if crypto was involved, notify the exchange you used. Our guide on reporting a scam broker sets out the full order and what each body needs.",
          "Keep every reference number. A methodical set of reports is not just about recovery — it also builds the case that can stop the operation and protect others.",
        ],
      },
      {
        heading: 'Protect yourself from the second wave',
        paragraphs: [
          "Once you are a known victim, expect 'recovery' approaches: people who claim they can retrieve your money for a fee, sometimes posing as lawyers, officials, or even the regulator. This is a well-documented follow-up scam, and paying feeds it. No legitimate body charges an up-front fee to return stolen funds.",
          "Take care of yourself, too. A financial loss like this hits hard emotionally. Talk to someone you trust, and if it is affecting your wellbeing, reach out for support. Our guide on recovering from a big loss covers the practical and mental side of getting back on your feet.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'why-did-my-trade-close-automatically',
    title: 'Why did my trade close automatically?',
    summary:
      "A trade that vanished on its own usually hit a stop-out, a stop-loss, or an expiry. Here is how to tell which happened, why it happened, and how to stop it catching you off guard.",
    category: 'risk',
    level: 'beginner',
    readingMinutes: 7,
    body: [
      {
        heading: 'Automatic closes are almost always a rule you set (or agreed to)',
        paragraphs: [
          "If a position closed without you clicking anything, the platform did it for one of a few defined reasons. It is rarely a glitch. The three usual culprits are a stop-loss you placed, a broker stop-out because your account ran low on margin, or an expiry/rollover on certain instruments.",
          "The fix starts with reading your trade history. Regulated platforms log the reason a position closed — 'sl' for stop-loss, 'so' or a margin note for stop-out, and so on. Identifying the reason tells you exactly what to change.",
        ],
      },
      {
        heading: 'Stop-loss triggered',
        paragraphs: [
          "If you set a stop-loss, the platform closed the trade when price reached it. That is the stop doing its job — capping your loss — even if it stings. Sometimes price 'wicks' briefly to your level and then reverses, which feels unfair, but the stop simply executed the instruction you gave.",
          "If you are being stopped out constantly, the usual cause is a stop placed too tight for the market's normal movement, so ordinary noise hits it. Widening the stop while trading a smaller position keeps the same total risk but gives the trade room to breathe.",
        ],
      },
      {
        heading: 'Margin stop-out',
        paragraphs: [
          "If you had no stop-loss but the trade still closed, your account likely hit the broker's stop-out level. When losses eat into your usable margin past a set point, the broker force-closes positions to stop your balance going negative. This is the margin-call/stop-out mechanism, and it typically strikes when a position is too large for the account and moving against you.",
          "The remedy is position sizing and leverage discipline: trade smaller, use less leverage, and keep spare margin so a normal move cannot push you to the stop-out level. Our guides on margin calls and stop-outs cover the maths.",
        ],
      },
      {
        heading: 'Expiry, rollover, and other causes',
        paragraphs: [
          "Some instruments — certain futures-based or dated CFD products — expire or roll over on a schedule, closing your position automatically at that time. Others close if you accepted terms that liquidate positions under specific conditions. Check the instrument's contract details so these never surprise you.",
          "Whatever the cause, the takeaway is the same: automatic closes are the system following rules. Learn which rule closed your trade, and you can adjust your stops, sizing, or instrument choice so it happens on your terms, not by accident.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'what-is-a-margin-call-and-how-to-avoid-it',
    title: 'What is a margin call and how to avoid it?',
    summary:
      "A margin call is your broker's warning that your account is running out of the cushion that keeps positions open. Here is what triggers it, what happens next, and how to keep it from happening.",
    category: 'risk',
    level: 'beginner',
    readingMinutes: 7,
    body: [
      {
        heading: 'What a margin call actually is',
        paragraphs: [
          "When you trade with leverage, you put up only a fraction of a position's value as 'margin' — a deposit that acts as a cushion against losses. A margin call is the broker warning you that losses have eaten too far into that cushion and your account no longer has enough free margin to support your open trades.",
          "Think of it as a low-fuel light. It is not the crash; it is the warning before it. If you ignore it and losses continue, the broker will start force-closing your positions to protect itself — the 'stop-out'.",
        ],
      },
      {
        heading: 'What triggers it',
        paragraphs: [
          "Margin calls are driven by your margin level — roughly your account equity compared with the margin your open trades require. As open positions lose money, your equity falls, the margin level drops, and once it crosses the broker's margin-call threshold, you are warned.",
          "The deeper cause is almost always the same combination: positions that are too large for the account and too much leverage. A small adverse move then produces an outsized loss relative to your balance, and the cushion disappears fast.",
        ],
      },
      {
        heading: 'What happens if you ignore it',
        paragraphs: [
          "If the market keeps moving against you and your margin level keeps falling, it reaches the stop-out level, and the broker automatically closes positions — usually starting with the biggest loser — until the account is back within safe limits. You do not choose which trades close or when; the platform does, often at the worst possible moment.",
          "This is why a margin call should be treated as a serious prompt to act, not a notification to dismiss. By the time the stop-out hits, your choices are gone.",
        ],
      },
      {
        heading: 'How to avoid margin calls',
        paragraphs: [
          "The reliable fixes are all about sizing and cushion: use low leverage, keep each position small relative to your account, and always leave plenty of free margin rather than trading close to the limit. Use stop-losses so a losing trade closes on your terms at a small, planned loss — long before margin becomes an issue.",
          "A simple habit helps: before opening a trade, ask what happens to your margin level if this position moves, say, a normal day's range against you. If the answer is 'I'd be near a margin call', the position is too big. Trade smaller and the margin call largely takes care of itself.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'why-did-i-lose-more-than-my-stop-loss',
    title: 'Why did I lose more than my stop-loss? (slippage and gapping)',
    summary:
      "Stops usually work — but in fast or gapping markets a trade can close well past your level. Here is why slippage and gaps happen and how to reduce the damage.",
    category: 'risk',
    level: 'beginner',
    readingMinutes: 7,
    body: [
      {
        heading: 'A stop-loss is a request, not a guarantee',
        paragraphs: [
          "A standard stop-loss tells the broker: 'if price reaches this level, close my trade at the next available price.' In calm markets, that next price is right at your level. But in fast-moving or thin markets, the next available price can be worse — sometimes much worse — and you are filled there. That difference is slippage, and it is why a loss can exceed the number you planned.",
          "This is not usually the broker cheating you. It reflects how markets actually work: prices move in jumps, and there is not always a buyer or seller waiting at exactly your price when it matters most.",
        ],
      },
      {
        heading: 'Slippage in fast markets',
        paragraphs: [
          "When big news hits or liquidity dries up, prices can leap several points in an instant. If your stop sits inside that leap, it triggers but fills at the price on the other side of the jump. High-impact economic releases, central-bank surprises, and the first seconds after a market opens are classic slippage moments.",
          "Slippage cuts both ways — it can occasionally fill you better than expected — but on stops it usually hurts. The main defences are trading smaller so any slippage is a small share of your account, and being cautious around scheduled high-impact news.",
        ],
      },
      {
        heading: 'Gapping over weekends and news',
        paragraphs: [
          "A 'gap' is when a market closes at one price and reopens at a very different one, with no trading in between. Weekend gaps in currencies, and overnight gaps in shares reacting to news, are the common examples. If your stop is inside the gap, it cannot fill at your level because that price simply never traded — you are filled at the reopening price.",
          "This is a particular risk for anyone holding positions over the weekend or through earnings and events. If you cannot tolerate a gap against you, the honest answer is often not to hold that position through the event at all.",
        ],
      },
      {
        heading: 'How to limit the damage',
        paragraphs: [
          "Practical steps: keep positions small so a worse-than-planned fill is survivable; avoid holding size through scheduled high-impact news and over weekends unless you have accepted the gap risk; and understand that 'guaranteed stop-loss' orders, where a broker offers them, fill exactly at your level for a fee — useful for event risk but not free.",
          "Most importantly, plan for the bad fill rather than assuming the perfect one. If your risk maths only works when your stop fills exactly, your position is probably too large. Sizing for the occasional ugly fill is what keeps a normal event from becoming a disaster.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'why-is-my-spread-so-wide',
    title: 'Why is my spread so wide right now?',
    summary:
      "Spreads widen for real, understandable reasons — time of day, news, and low liquidity. Here is why your spread blew out and how to avoid trading when it costs the most.",
    category: 'basics',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'The spread is not fixed',
        paragraphs: [
          "The spread — the gap between the buy and sell price — is a live number that moves with the market. A pair that shows a tight spread during busy hours can widen dramatically at quiet times or around news. If your spread suddenly looks huge, it is usually the market, not a broker bug.",
          "Because you pay the spread on every trade, widening spreads directly raise your costs and can trip stop-losses or make a trade unprofitable before it even moves. Knowing when spreads widen lets you avoid the expensive moments.",
        ],
      },
      {
        heading: 'Liquidity and time of day',
        paragraphs: [
          "Spreads are tightest when lots of buyers and sellers are active. For major currencies that means the busy overlaps of the main trading sessions. Late at night, during the daily rollover period, on weekends for products that trade then, and around holidays, activity thins out and spreads widen — sometimes several times their normal size.",
          "The lesson is simple: the same instrument can be cheap to trade at one hour and expensive at another. If you can, trade the liquid hours for whatever you are trading and steer clear of the thin ones.",
        ],
      },
      {
        heading: 'News and volatility',
        paragraphs: [
          "Right before and during major economic releases or central-bank announcements, market makers widen spreads to protect themselves from the sudden, unpredictable moves. Spreads can balloon in the seconds around the release and then settle again. Trading straight into that window means paying a much higher cost and risking slippage on top.",
          "Less-traded instruments — exotic currency pairs, small stocks, some commodities — carry wider spreads all the time because fewer participants trade them. That is a structural cost of the instrument, not a temporary blip.",
        ],
      },
      {
        heading: 'What you can do about it',
        paragraphs: [
          "Practical steps: check the live spread before entering rather than assuming the 'typical' number; favour major, heavily traded instruments during their liquid hours; and avoid opening trades in the moments around scheduled high-impact news unless that is your deliberate strategy.",
          "If your broker's spreads are consistently far wider than others' for the same instrument at the same time, that is worth questioning — but a spread that widens at 2 a.m. or during a rate decision is normal market behaviour, and the answer is usually just to trade at a better time.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'why-are-my-profits-gone-overnight-swap',
    title: 'Why did my profits disappear overnight? (swap and rollover fees)',
    summary:
      "If a position shrank while you slept and the market barely moved, swap fees are the likely culprit. Here is what overnight swap/rollover charges are and how to manage them.",
    category: 'basics',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'The hidden cost of holding overnight',
        paragraphs: [
          "If you hold a leveraged position past the daily cut-off (often around 5 p.m. New York time), most brokers apply a 'swap' or 'rollover' charge — a small daily fee (or occasionally a credit) for keeping the position open overnight. Over days and weeks, these charges quietly erode profits or deepen losses, even when the price itself has barely moved.",
          "This is why a trade can look flat or slightly up when you go to bed and slightly down when you wake up. The market did not have to move; the swap was deducted.",
        ],
      },
      {
        heading: 'Why swaps exist',
        paragraphs: [
          "Because you are effectively borrowing to hold a leveraged position, there is an interest cost, based on the difference between the interest rates of the two things you are trading (for a currency pair) or a financing rate (for indices, commodities and shares). Depending on direction, this can be a charge or, less commonly, a small credit.",
          "Two quirks catch beginners out. Many brokers apply a 'triple swap' on one day of the week to account for the weekend, so that day's charge is three times the usual. And swaps are typically larger, and always charged, on some instruments more than others.",
        ],
      },
      {
        heading: 'How to see and manage swaps',
        paragraphs: [
          "You can usually view the swap rates for each instrument in your platform's contract specifications, and the actual charges appear in your account history against each held position. Check them before you hold anything overnight, especially on the triple-swap day.",
          "To manage them: prefer shorter-term trades that you close before the daily cut-off if swaps are eating your edge; factor the daily swap into any trade you plan to hold for days or weeks; and be aware that on some positions the overnight cost can quietly exceed the profit you were hoping for.",
        ],
      },
      {
        heading: 'A note on "swap-free" accounts',
        paragraphs: [
          "Some brokers offer 'swap-free' or Islamic accounts that do not charge conventional swap. These can suit those who need them, but read the terms: brokers often replace the swap with an administration or holding fee, and there may be limits on how long you can hold. 'Swap-free' rarely means 'cost-free'.",
          "The general takeaway: overnight costs are real and predictable. Once you know they exist and where to find them, they stop being a nasty surprise and become just another cost you plan around.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'what-is-negative-balance-am-i-liable',
    title: 'What is a negative balance and do I have to pay it?',
    summary:
      "A negative balance means a trade lost more than the money in your account. Whether you owe it depends on where you trade and negative balance protection — here is how to know.",
    category: 'risk',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'How an account goes negative',
        paragraphs: [
          "Normally, a stop-out closes your positions before your balance reaches zero. But in a violent, gapping market — a shock announcement, a currency being repriced overnight — price can jump so far, so fast, that the broker cannot close your position until it is already past zero. The result is a negative balance: you have lost more than you deposited.",
          "This is rare, but it is exactly the scenario that can turn a bad trade into a debt. It is driven by leverage plus a sudden gap, and it is why leverage deserves real caution.",
        ],
      },
      {
        heading: 'Negative balance protection',
        paragraphs: [
          "Many regulated brokers, especially for retail clients in certain regions, offer 'negative balance protection'. This means that if your account goes negative, the broker resets it to zero and does not pursue you for the shortfall — your maximum loss is what you put in. In some jurisdictions this protection is a regulatory requirement for retail accounts.",
          "But it is not universal. It may not apply to professional-classified clients, may be absent at offshore or unregulated brokers, and terms vary. Whether you are liable for a negative balance depends heavily on your broker's policy and where it is regulated.",
        ],
      },
      {
        heading: 'How to find out where you stand',
        paragraphs: [
          "Before you trade, check the broker's terms and your regulator's rules for whether negative balance protection applies to your account type. If you are unsure, ask the broker directly, in writing, and keep the answer. This is one of those clauses worth reading before, not after, a shock event.",
          "If you already have a negative balance and your broker provides protection, it should be cleared automatically; query it in writing if it is not. If there is no protection, the broker may treat the shortfall as a debt — another reason unregulated, high-leverage accounts are so risky.",
        ],
      },
      {
        heading: 'How to avoid the situation entirely',
        paragraphs: [
          "The surest protection is not relying on protection at all: use low leverage, keep positions small, and avoid holding leveraged size through weekends and major scheduled events where gaps are most likely. A modest position simply cannot gap far enough to bury a well-funded account.",
          "In short: negative balance is a leverage-and-gap problem. Choose a regulated broker that offers negative balance protection for your account, understand its terms, and size your trades so you are never depending on that backstop in the first place.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'why-is-my-broker-not-letting-me-trade',
    title: "Why is my broker not letting me trade?",
    summary:
      "'Trade disabled', 'market closed', 'not enough margin' — several different things can block a trade. Here is how to diagnose why you can't place one and how to fix it.",
    category: 'basics',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'Read the exact error first',
        paragraphs: [
          "Being unable to place a trade almost always comes with a specific message, and that message is the fastest route to the fix. 'Market closed', 'not enough money/margin', 'trade disabled', 'invalid volume' and 'off quotes' all mean different things. Note the wording precisely before assuming the platform is broken.",
          "Many 'my broker won't let me trade' problems are ordinary and instantly fixable once you match the message to its cause.",
        ],
      },
      {
        heading: 'Account-side reasons',
        paragraphs: [
          "Common account causes: your identity verification is incomplete, so trading is limited until KYC is done; your account is not funded, or your free margin is too low to open the position you want; you are trying to trade a size below the minimum or above the maximum allowed; or your account type simply does not offer that instrument.",
          "Fixes are direct: finish verification, deposit or reduce your intended position size so you have enough free margin, and check the instrument's minimum/maximum trade size in its contract specifications. If free margin is the issue, closing or shrinking an existing position frees some up.",
        ],
      },
      {
        heading: 'Market-side reasons',
        paragraphs: [
          "Even a perfect account cannot trade a closed market. Every instrument has trading hours; shares, indices and commodities close overnight and on weekends, and some pause around daily rollover or during scheduled maintenance. 'Off quotes' or 'no prices' often just means the market is closed or extremely illiquid at that moment.",
          "Check the instrument's trading hours and the current session. If it is outside hours, the fix is simply to wait for the market to open. Our platform-connection guide covers the case where prices are missing but the market should be open.",
        ],
      },
      {
        heading: 'When to escalate',
        paragraphs: [
          "If your account is verified and funded, the market is open, your size is valid, and you still cannot trade, contact the broker's support with the exact error message and a screenshot. A genuine technical fault is their job to resolve, and a written record helps if it recurs.",
          "One caution: if a broker blocks you from closing losing trades specifically, or only ever lets you deposit but never trade or withdraw, treat that as a red flag and verify the firm on its regulator's register. Ordinary trade blocks have ordinary explanations; selective blocking does not.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'metatrader-wont-connect-no-prices',
    title: "MetaTrader won't connect or shows no prices — what to do",
    summary:
      "A 'no connection' status or frozen prices in MetaTrader is usually a login, server, or market-hours issue. Here is a quick fix checklist to get connected again.",
    category: 'basics',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'Spot the symptom',
        paragraphs: [
          "In MetaTrader (MT4 or MT5), connection status shows in the bottom-right corner. 'No connection' or a red icon means the platform cannot reach your broker's server. Prices that are frozen or blank, while the status looks connected, usually point to a market that is closed or to the specific symbols not being enabled.",
          "Knowing which of these two you are seeing — no connection versus no prices — points you straight at the right fix.",
        ],
      },
      {
        heading: 'Fixing "no connection"',
        paragraphs: [
          "Work through these in order: 1) Check your own internet connection with any website. 2) Confirm you selected the correct trading server for your account — brokers often have several (demo vs live, and numbered servers), and choosing the wrong one causes 'invalid account' or no connection. 3) Re-enter your login number and password carefully; a wrong password shows as a failed connection. 4) Restart MetaTrader, and if needed re-add the account via File then Login to Trade Account.",
          "If it still won't connect, a firewall, VPN, or public/office network may be blocking the platform's ports. Try a different network (such as a phone hotspot) to test. Persistent failures across networks may mean the broker's server is down — check its status page or support.",
        ],
      },
      {
        heading: 'Fixing "connected but no prices"',
        paragraphs: [
          "If the status is fine but a chart shows no ticks, first check whether that market is actually open — shares, indices and many instruments are closed overnight and at weekends, so prices legitimately stop. Second, make sure the symbol is enabled: open Market Watch, right-click, choose 'Show All', and the missing symbols usually appear and start updating.",
          "If some symbols update and others don't during open hours, the broker may not offer that instrument on your account type, or it may be temporarily suspended. Support can confirm which it is.",
        ],
      },
      {
        heading: 'When it is the broker, not you',
        paragraphs: [
          "If you have verified your internet, server, login, and symbols, and the market is open, the problem is likely on the broker's side — a server outage or maintenance. Contact support with the exact status message and a screenshot, and check for any announced maintenance window.",
          "Keep a record if outages are frequent during important market hours. Occasional downtime happens to everyone, but a platform that regularly drops out when you most need it — for example, only when you are trying to close a losing trade — is worth questioning, and worth checking the broker's regulation over.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'why-does-my-order-get-requoted-or-rejected',
    title: 'Why does my order keep getting requoted or rejected?',
    summary:
      "Requotes and 'off quotes' errors frustrate beginners but usually have plain causes: fast markets, wide spreads, or broker execution type. Here is what they mean and how to reduce them.",
    category: 'basics',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'What a requote actually is',
        paragraphs: [
          "A requote happens when you click to trade at a shown price, but by the time your order reaches the broker the price has already moved, so the broker offers you a new price to accept or decline instead of filling your original one. An 'off quotes' or 'no prices' rejection is similar — the platform cannot fill at the price you asked for.",
          "This is most common when prices are moving fast. It is not necessarily the broker being difficult; it is the gap between the price you saw and the price available a fraction of a second later.",
        ],
      },
      {
        heading: 'Common causes',
        paragraphs: [
          "Requotes and rejections cluster around: high volatility and news releases, when prices jump between your click and the fill; low liquidity, such as late-night or holiday sessions, when there is no counterparty at your price; and very tight limits you set, where even a tiny move breaches your accepted price.",
          "Execution model also matters. Dealing-desk (market-maker) brokers can issue requotes; many 'straight-through' or ECN-style brokers instead fill at the next available price (which can mean slippage rather than a requote). Neither is automatically better, but it explains why you see requotes on one platform and slippage on another.",
        ],
      },
      {
        heading: 'How to reduce them',
        paragraphs: [
          "Practical steps: avoid firing orders straight into major news releases; trade liquid instruments during their busy hours; and use the platform's 'deviation' or 'maximum slippage' setting to allow a small tolerance, so a tiny move fills at a slightly different price instead of bouncing back as a requote.",
          "For entering or exiting at a specific level, consider pending orders (limit and stop orders) rather than trying to click a fast-moving live price. They wait patiently at your level instead of chasing a number that keeps changing.",
        ],
      },
      {
        heading: 'When it looks abusive',
        paragraphs: [
          "Occasional requotes in fast markets are normal. Persistent requotes that only ever appear when a trade is going your way, or that consistently give you worse prices while never giving better ones, are worth scrutinising. Keep records of the times and prices.",
          "If the pattern is one-sided and the broker's answers are vague, verify the firm on its regulator's register and consider whether its execution is being run fairly. Legitimate execution issues have neutral, market-based explanations; systematically one-sided ones do not.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'why-cant-i-open-an-account-kyc-verification',
    title: "Why can't I open an account with a broker? (KYC and verification)",
    summary:
      "Rejected or stuck at sign-up? Account opening fails for specific KYC, document, and eligibility reasons. Here is why brokers reject applications and how to get verified.",
    category: 'basics',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'Why brokers verify you at all',
        paragraphs: [
          "Regulated brokers are legally required to know who their customers are — 'Know Your Customer' (KYC) and anti-money-laundering rules. That means checking your identity, address, and sometimes your suitability to trade before they let you deposit or fully activate an account. A hold-up at sign-up is usually one of these checks, not a mistake.",
          "This is actually a good sign in one respect: a firm that does no verification at all is a warning flag, because proper regulated brokers must run these checks.",
        ],
      },
      {
        heading: 'Document problems (the usual cause)',
        paragraphs: [
          "The most common reason verification fails is the documents. Typical requirements are a valid government photo ID (passport or ID card) and a proof of address — a utility bill or bank statement, usually dated within the last three months, showing your full name and address. Rejections happen when a document is expired, blurry, cropped, edited, a different name, or too old.",
          "Fixes: photograph documents in good light, showing all four corners and the full page; make sure the name matches your application exactly; and use a recent, address-bearing document for proof of address. Re-uploading clean, in-date documents clears most cases.",
        ],
      },
      {
        heading: 'Eligibility and location reasons',
        paragraphs: [
          "Some rejections are about where you live or who you are. Brokers cannot legally accept clients from certain countries, so a broker may not serve residents of your jurisdiction at all. You may need to be over 18, and some products are restricted for retail clients in certain regions. A suitability or knowledge questionnaire can also gate certain account types.",
          "If you are rejected on eligibility grounds, no amount of re-uploading will help — the answer is to find a broker that is authorised to serve clients in your country. Which leads to an important safety point.",
        ],
      },
      {
        heading: "Don't 'fix' rejections the wrong way",
        paragraphs: [
          "If a regulated broker cannot accept you because of where you live, do not try to get around it with a VPN or false details. Beyond breaking the terms, it can leave you with no regulatory protection and can cause withdrawals to be frozen later when the mismatch surfaces.",
          "Instead, look for a broker properly authorised to serve your country — check its regulator's register to confirm. Being verifiably eligible and regulated is worth far more than sneaking into a broker that was never meant to serve you.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'why-is-my-demo-different-from-live',
    title: 'Why is my demo account different from live trading?',
    summary:
      "Your strategy worked on demo but struggles on live — a very common experience. Here is why demo and live differ, and how to make demo practice more realistic.",
    category: 'psychology',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'Demo and live are genuinely different',
        paragraphs: [
          "It is extremely common for a strategy to look great on a demo account and then struggle with real money. This is not you imagining things, and it is not necessarily the broker rigging the demo. Demo and live differ in real, structural ways — some technical, and one very human.",
          "Understanding the differences stops you from concluding either that you are hopeless or that the broker cheated. Usually it is neither.",
        ],
      },
      {
        heading: 'The technical differences',
        paragraphs: [
          "On live accounts you experience real execution frictions that demos often smooth over: slippage on stops and entries in fast markets, requotes, variable spreads that widen around news, and swap charges applied exactly. Demo fills are frequently instant and ideal in ways live fills are not, which quietly flatters your results.",
          "Latency and liquidity also bite in live conditions. A demo may fill you at the perfect price during a news spike; live, that same order might slip or be rejected. So a strategy that depends on flawless fills can look far better on demo than it ever will in reality.",
        ],
      },
      {
        heading: 'The human difference (the big one)',
        paragraphs: [
          "The largest gap is emotional. On demo, nothing is at stake, so you follow your plan calmly, hold winners, and cut losers without flinching. The moment real money is on the line, fear and greed arrive: you close winners too early, hesitate on entries, move stops, and abandon the very plan that worked on demo.",
          "This is why many people are consistently profitable on demo and then falter live. The strategy did not change; the trader did. Recognising this is the first step to managing it.",
        ],
      },
      {
        heading: 'How to bridge the gap',
        paragraphs: [
          "Make demo more realistic: trade a demo balance close to the real amount you would use, so position sizes feel true; respect spreads and factor in swaps and likely slippage rather than assuming perfect fills; and follow every rule exactly as you would with real money.",
          "Then transition gently. Start live with the smallest possible size — the goal is to practise handling real emotion, not to earn. Expect a performance dip and treat it as the emotional skill-building it is. Our guides on trading psychology and starting small cover this in more depth.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'how-to-recover-from-a-big-trading-loss',
    title: 'How to recover from a big trading loss (mentally and practically)',
    summary:
      "A big loss hurts and clouds judgement. A grounded, honest plan for the aftermath: how to stop the bleeding, protect your mindset, and decide what to do next.",
    category: 'psychology',
    level: 'beginner',
    readingMinutes: 8,
    body: [
      {
        heading: 'First, stop trading',
        paragraphs: [
          "After a big loss, the single most important thing is to stop trading — not for an hour, but for long enough to let the emotional storm pass. The urge to 'win it back' immediately is powerful and is exactly how one bad loss becomes a catastrophic one. Revenge trading has ruined more accounts than any strategy ever did.",
          "Close the platform. Step away. The market will still be there next week, and no good decision has ever been made in the grip of that particular panic. Giving yourself distance is not weakness; it is the professional move.",
        ],
      },
      {
        heading: 'Protect your mindset',
        paragraphs: [
          "A large loss can trigger real distress — shame, anxiety, disrupted sleep. Take it seriously. Talk to someone you trust rather than carrying it alone, and if the money involved affects your rent, bills, or wellbeing, treat that as a priority to address, not a trading problem to solve with more trading.",
          "Be honest, too, about whether trading has started to feel like gambling — chasing losses, hiding it, or risking money you need. If it has, the healthiest recovery may be to step back for a long time or stop entirely, and to seek support if you cannot. There is no prize for continuing.",
        ],
      },
      {
        heading: 'Do a calm post-mortem',
        paragraphs: [
          "Once you are steadier, review what happened factually, ideally using your trading journal. Was the loss a single oversized position? No stop-loss? Revenge trading after an earlier loss? Too much leverage? Nearly always, a big loss traces back to a risk-management failure rather than bad luck.",
          "Write down the specific mistake in plain terms and the specific rule that would have prevented it — for example, 'I risked far more than 1% on one trade; the fix is to size every trade to a small, fixed risk.' This turns a painful loss into the one thing it can usefully become: data.",
        ],
      },
      {
        heading: 'Rebuild slowly, or don\'t',
        paragraphs: [
          "If you choose to continue, rebuild deliberately: go back to a demo account to re-cement your rules; then return to live with the smallest possible size; and rebuild trust in yourself through discipline, not through a big comeback trade. Never top up an account with money you cannot afford to lose in an attempt to recover faster — that is how a big loss becomes a life-changing one.",
          "And genuinely consider not continuing. Deciding that trading is not for you after a hard lesson is a mature, valid choice that saves many people a great deal of money and stress. Whichever you choose, choose it calmly and on purpose — not from the wound of the loss itself.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'why-cant-i-close-my-trade',
    title: "Why can't I close my trade?",
    summary:
      "Being unable to close a position is stressful. The reasons range from market hours and connection drops to serious broker red flags. Here is how to diagnose and act.",
    category: 'risk',
    level: 'beginner',
    readingMinutes: 6,
    body: [
      {
        heading: 'Work out which kind of problem it is',
        paragraphs: [
          "Not being able to close a trade falls into two very different buckets: ordinary technical or market reasons, and serious broker misconduct. Most cases are the first kind and are quickly resolved. But because a broker that blocks you from closing losing trades is a classic scam behaviour, it is worth diagnosing carefully.",
          "Start with the error message or status, exactly as with any platform issue, and check the simple explanations before assuming the worst — or dismissing a genuine red flag.",
        ],
      },
      {
        heading: 'The ordinary reasons',
        paragraphs: [
          "Common, harmless causes: the market for that instrument is closed (you often cannot close shares or indices outside their trading hours); your platform lost its connection, so the close order never reached the server; a fast-moving market is requoting or rejecting your close; or you are hitting a minimum-distance rule where a stop/limit is too close to the current price.",
          "Fixes mirror other platform issues: confirm the market is open, check and restore your connection, allow a small slippage tolerance when closing in a fast market, and try again. In most cases the position closes on the next clean attempt.",
        ],
      },
      {
        heading: 'The serious red flags',
        paragraphs: [
          "Be very alert if you can open trades but mysteriously cannot close profitable ones, if the platform freezes only when you try to take a profit or cut a loss, or if support tells you that you must deposit more before you can close or withdraw. These are not normal technical faults — they are hallmarks of a scam operation controlling your outcomes.",
          "If you see this pattern, screenshot everything immediately — the open position, the failed close attempts, the times, and any messages — while you still have access.",
        ],
      },
      {
        heading: 'What to do',
        paragraphs: [
          "For ordinary issues: contact the broker's support with the exact error and a screenshot, and keep a record if it recurs during important moments. A legitimate broker will resolve a genuine technical fault.",
          "For the red-flag pattern: stop depositing, verify the firm on its regulator's official register, and if it fails that check or the blocking continues, escalate to the regulator and your bank following our guides on checking regulation and reporting a scam broker. Being unable to close a trade to your disadvantage, on demand, is not something to explain away.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'most-common-beginner-trading-mistakes-and-fixes',
    title: 'The most common beginner trading mistakes (and how to fix each)',
    summary:
      "The mistakes that catch out almost every beginner are predictable — which means they are avoidable. A checklist of the big ones, each with a concrete fix.",
    category: 'risk',
    level: 'beginner',
    readingMinutes: 7,
    body: [
      {
        heading: 'Why the same mistakes repeat',
        paragraphs: [
          "Beginners across the world make a strikingly similar set of mistakes, because they come from the same sources: unrealistic expectations, emotions, and a rush to trade before learning to manage risk. The upside is that predictable mistakes are preventable ones. Knowing them in advance is half the battle.",
          "None of these are exotic. They are the boring fundamentals — and getting the fundamentals right is what separates people who last from those who quietly blow up in the first few months.",
        ],
      },
      {
        heading: 'Risking too much and using too much leverage',
        paragraphs: [
          "The most damaging mistake is trading too big. A single oversized position, or heavy leverage, means one normal move against you can gut the account or trigger a margin call. It is the direct cause of most rapid beginner blow-ups.",
          "The fix: risk only a small, fixed fraction of your account per trade (many use around 1%), keep leverage low, and size positions to your stop-loss rather than to your ambition. Small size is what keeps a losing streak — which everyone has — survivable.",
        ],
      },
      {
        heading: 'No plan, no stops, and letting emotions drive',
        paragraphs: [
          "Close behind is trading without a plan: no defined entry, no stop-loss, no idea where you will exit. This leaves every decision to be made in the heat of the moment, where fear and greed win. Related errors include moving stops further away to avoid a loss, closing winners too early, overtrading out of boredom, and revenge trading after a loss.",
          "The fix: write a simple plan before each trade — entry, stop, and target — and follow it. Set the stop before you enter and respect it. When you feel the urge to revenge trade or overtrade, stop for the day. A trading journal makes these habits visible and honest.",
        ],
      },
      {
        heading: 'Chasing tips, hype, and "guaranteed" returns',
        paragraphs: [
          "Beginners often chase social-media 'gurus', paid signals, hot tips, and anything promising guaranteed profits. These waste money and are a common on-ramp to scams. Jumping between strategies after a couple of losses — never giving anything time to work — belongs here too.",
          "The fix: ignore anyone promising certainty, learn to make your own decisions, and pick one approach to test properly on demo before judging it. Be especially wary of pressure and urgency; nothing legitimate in trading requires you to act right now.",
        ],
      },
      {
        heading: 'Skipping the boring safety checks',
        paragraphs: [
          "Finally, many beginners deposit before checking the broker, take bonuses with hidden withdrawal strings, and trade real money before they can afford to lose it. Any of these can turn an ordinary learning curve into a serious loss.",
          "The fix: verify the broker on its regulator's official register before depositing, avoid bonuses you do not understand, start on demo, then start live with money you would be genuinely fine losing. Get these unglamorous basics right and you have already avoided the ways most beginners fail.",
        ],
      },
    ],
  },
];

export default CLUSTER_PROBLEMS;
