/**
 * Long-tail, high-intent broker topic pages for Trding.io.
 *
 * The SEO audit found the site over-invested in un-winnable "best broker"
 * head terms and left the WINNABLE long-tail empty. This module powers a
 * dynamic route — /brokers/[slug]/[topic] — that answers the specific,
 * high-buying-intent questions people actually type:
 *
 *   "[broker] withdrawal time", "[broker] minimum deposit", "[broker] fees",
 *   "is [broker] regulated", "is [broker] safe"
 *
 * Low volume each, low competition, reachable for a young domain, and every
 * word of copy is DERIVED FROM REAL BROKER DATA (lib/brokers.ts) — nothing is
 * invented. Because this is YMYL content, the regulation/safety topics are
 * scrupulously honest: if a broker is unregulated/offshore or scores low, the
 * page says so plainly, with the risk implication.
 *
 * Only NON-flagged brokers get topic pages (flagged brokers are a neutrality
 * signal, never a destination we optimise for).
 */

import {
  getBrokers,
  getBrokerBySlug,
  type Broker,
} from "@/lib/brokers";
import { getRegulator } from "@/lib/regulators";
import { getRegulatorClarity } from "@/lib/regulatorClarity";
import { SITE, formatWithdrawal } from "@/lib/site";

/** A single visible Q&A that also feeds FAQPage JSON-LD. */
export interface TopicFaq {
  q: string;
  a: string;
}

/** Structured, data-derived content for one broker × topic page. */
export interface TopicContent {
  /** The bold, 1-2 sentence DIRECT ANSWER shown first (audit point 7). */
  directAnswer: string;
  /** Supporting paragraphs (plain strings, rendered in order). */
  paragraphs: string[];
  /** Small key-facts list: [label, value] pairs. */
  facts: Array<[string, string]>;
  /** 2-3 FAQ entries (visible + JSON-LD). */
  faqs: TopicFaq[];
  /**
   * Optional risk / caution note rendered in a highlighted callout. Used on
   * YMYL topics (regulation, safety) and whenever the data warrants it.
   */
  riskNote?: string;
}

/** A topic definition. All copy functions read only from `broker`. */
export interface Topic {
  /** URL slug segment, e.g. "withdrawal-time". */
  slug: string;
  /** Short label used in breadcrumbs and sibling links. */
  shortLabel: string;
  /** H1 / <title> builder. */
  title: (broker: Broker) => string;
  /** Meta description builder (kept under ~158 chars by the page). */
  metaDescription: (broker: Broker) => string;
  /** Structured content builder. */
  build: (broker: Broker) => TopicContent;
}

// --- Small shared helpers (all derived from real data) ---------------------

function commissionStr(b: Broker): string {
  return b.commissionPerLot === 0
    ? "commission-free"
    : `$${b.commissionPerLot} commission per standard lot`;
}

/** Does any of the broker's regulators map to a real, tiered authority? */
function isUnregulated(b: Broker): boolean {
  // Treat as unregulated when the regulation score is at the floor AND no
  // mapped regulator carries a genuine licence register.
  const hasLicensedReg = b.regulators.some((id) => {
    const info = getRegulator(id);
    return info !== undefined && info.registerUrl !== undefined;
  });
  const looksUnregulated = b.regulators.some((id) =>
    /unregulated|offshore|no eu|limited oversight/i.test(id)
  );
  return looksUnregulated || (!hasLicensedReg && b.regulationScore <= 1);
}

/** Human phrase describing regulator strength, honest about offshore/none. */
function regulationPhrase(b: Broker): string {
  if (isUnregulated(b)) {
    return "operates without oversight from a recognised financial regulator";
  }
  const tiers = b.regulators
    .map((id) => getRegulator(id)?.tier)
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  const hasTier1 = tiers.includes("Tier 1");
  if (b.regulationScore >= 4 || hasTier1) {
    return `is regulated by ${b.regulators.join(", ")}`;
  }
  return `holds ${b.regulators.join(", ")} oversight`;
}

// --- TOPIC DEFINITIONS ------------------------------------------------------

export const ALL_TOPICS: Topic[] = [
  // 1) WITHDRAWAL TIME -------------------------------------------------------
  {
    slug: "withdrawal-time",
    shortLabel: "Withdrawal time",
    title: (b) => `How Long Does ${b.name} Take to Withdraw? (2026)`,
    metaDescription: (b) =>
      `${b.name} typically processes withdrawals in ${formatWithdrawal(
        b.withdrawalDays
      ).toLowerCase()}. See real timings, methods and what can slow a payout.`,
    build: (b) => {
      const w = formatWithdrawal(b.withdrawalDays).toLowerCase();
      const fast = b.withdrawalDays <= 1;
      const slow = b.withdrawalDays >= 3;
      const directAnswer = `${b.name} typically processes withdrawals in ${w}${
        fast ? " — among the fastest in our dataset" : ""
      }.`;
      return {
        directAnswer,
        paragraphs: [
          `The ${w} figure is ${b.name}'s internal processing time — how long the broker takes to approve and release your funds. The money then still has to travel through your chosen payment method, so the total time you wait can be a little longer depending on your bank or e-wallet.`,
          slow
            ? `At ${formatWithdrawal(
                b.withdrawalDays
              ).toLowerCase()}, ${b.name} is slower than the quickest brokers we track, which clear withdrawals same-day. If fast access to your cash matters, factor that in before funding a large balance.`
            : `${b.name}'s processing speed sits at the ${
                fast ? "quick" : "typical"
              } end of the brokers we track. Weekends and bank holidays can still add a day or two on the banking side, regardless of how fast the broker itself is.`,
          `First-time withdrawals often take longest because the broker must complete identity (KYC) checks before releasing funds. Completing verification when you open the account — rather than at withdrawal time — is the single best way to avoid delays.`,
        ],
        facts: [
          ["Broker processing time", formatWithdrawal(b.withdrawalDays)],
          ["Speed vs our set", fast ? "Fast" : slow ? "Slower" : "Typical"],
          ["Segregated client funds", b.segregatedFunds ? "Yes" : "No"],
          [
            "Negative balance protection",
            b.negativeBalanceProtection ? "Yes" : "No",
          ],
          ["Regulators", b.regulators.join(", ")],
        ],
        faqs: [
          {
            q: `How long do ${b.name} withdrawals take?`,
            a: `${b.name} processes withdrawals in ${w}. Actual arrival depends on your payment method — cards and e-wallets are usually quicker than bank transfers, and weekends can add time on the banking side.`,
          },
          {
            q: `Why is my ${b.name} withdrawal taking longer than expected?`,
            a: `The most common cause is incomplete identity (KYC) verification, which must be finished before a payout is released. Bank holidays, mismatched payment details, or withdrawing to a different method than you deposited with can also add delays.`,
          },
          {
            q: `Does ${b.name} charge withdrawal fees?`,
            a: `Withdrawal fees vary by payment method and can change, so confirm the current schedule inside your ${b.name} account or with support before you request a payout. Your bank or e-wallet may apply its own charge separately.`,
          },
        ],
      };
    },
  },

  // 2) MINIMUM DEPOSIT -------------------------------------------------------
  {
    slug: "minimum-deposit",
    shortLabel: "Minimum deposit",
    title: (b) => `${b.name} Minimum Deposit (2026): What You Actually Need`,
    metaDescription: (b) =>
      `${b.name}'s real minimum deposit is ${
        b.minDeposit === 0 ? "€0 (no minimum)" : `€${b.minDeposit}`
      }. See what you actually need to start, and a sensible budget for managing risk.`,
    build: (b) => {
      const min =
        b.minDeposit === 0 ? "no minimum deposit (€0)" : `€${b.minDeposit}`;
      const directAnswer =
        b.minDeposit === 0
          ? `${b.name} has no minimum deposit — you can open and fund an account with any amount.`
          : `${b.name}'s real minimum first deposit is €${b.minDeposit}.`;
      return {
        directAnswer,
        paragraphs: [
          `${b.name} requires ${min} to open a live account. That is the hard floor set by the broker — but the amount you should actually deposit depends on how you plan to manage risk, not on the minimum.`,
          `Depositing only the bare minimum leaves very little room to size trades sensibly or absorb a losing streak. As a general starting point we suggest budgeting around €${SITE.recommendedMinDeposit}, which gives you more flexibility to apply proper risk management. This is a guideline, not a requirement, and never money you can't afford to lose.`,
          `Remember that leverage (up to 1:${b.maxLeverage} at ${b.name}) means your deposit controls a much larger position. A small deposit does not make trading low-risk — it simply caps how much you can lose to what you put in${
            b.negativeBalanceProtection
              ? ", and negative balance protection helps stop you going below zero"
              : ". Note that this broker does not offer negative balance protection"
          }.`,
        ],
        facts: [
          [
            "Real minimum deposit",
            b.minDeposit === 0 ? "€0 (none)" : `€${b.minDeposit}`,
          ],
          ["Suggested starting budget", `€${SITE.recommendedMinDeposit}`],
          ["Max leverage", `1:${b.maxLeverage}`],
          ["Demo account", b.demoAccount ? "Yes (free)" : "No"],
          [
            "Negative balance protection",
            b.negativeBalanceProtection ? "Yes" : "No",
          ],
        ],
        faqs: [
          {
            q: `What is the minimum deposit at ${b.name}?`,
            a: `The real minimum first deposit at ${b.name} is ${
              b.minDeposit === 0 ? "€0 — there is no minimum" : `€${b.minDeposit}`
            }. We suggest budgeting around €${SITE.recommendedMinDeposit} for a more comfortable start with room to manage risk.`,
          },
          {
            q: `Can I start trading at ${b.name} with a small amount?`,
            a: `Yes — the ${min} floor keeps the barrier low${
              b.demoAccount
                ? `, and ${b.name}'s free demo account lets you practise with virtual funds before risking real money`
                : ""
            }. Just remember a small balance still carries real risk once leverage is applied.`,
          },
          {
            q: `Is the minimum deposit the same as the recommended deposit?`,
            a: `No. €${
              b.minDeposit
            } is the broker's hard minimum; the €${SITE.recommendedMinDeposit} figure we cite is a sensible starting budget for risk management, not a rule set by ${b.name}.`,
          },
        ],
      };
    },
  },

  // 3) FEES & SPREADS --------------------------------------------------------
  {
    slug: "fees",
    shortLabel: "Fees & spreads",
    title: (b) => `${b.name} Fees & Spreads Explained (2026)`,
    metaDescription: (b) =>
      `${b.name} fees 2026: ${b.avgSpreadEurUsd} pip average EUR/USD spread and ${
        b.commissionPerLot === 0
          ? "no per-lot commission"
          : `$${b.commissionPerLot} commission per lot`
      }. See the real cost of trading, broken down.`,
    build: (b) => {
      const directAnswer = `${b.name} charges a typical EUR/USD spread of ${b.avgSpreadEurUsd} pips and is ${commissionStr(
        b
      )}.`;
      const tightSpread = b.avgSpreadEurUsd <= 0.4;
      return {
        directAnswer,
        paragraphs: [
          `Your real cost to trade at ${b.name} comes from two parts: the spread (the gap between buy and sell price, here about ${b.avgSpreadEurUsd} pips on EUR/USD) and any commission (${commissionStr(
            b
          )}). Together these make up the round-turn cost of opening and closing a position.`,
          b.commissionPerLot === 0
            ? `Because ${b.name} is commission-free on the headline account, the spread is effectively your whole trading cost. A ${b.avgSpreadEurUsd} pip EUR/USD spread is ${
                tightSpread ? "tight by the standards of our set" : "reasonable, though not the tightest we track"
              }, but a wider spread can offset the lack of commission on high-volume strategies.`
            : `${b.name} runs a commission model: a ${b.avgSpreadEurUsd} pip spread plus $${b.commissionPerLot} per standard lot. Commission accounts often pair a tighter raw spread with a fixed fee, which can work out cheaper for larger trades — run your own volume through our cost tool to see which side you fall on.`,
          `Beyond spread and commission, watch for non-trading costs that don't show on this page: overnight swap/financing on positions held past the daily rollover, and any inactivity or payment-method fees. Always confirm the current schedule in your ${b.name} account, as fees can change.`,
        ],
        facts: [
          ["Avg EUR/USD spread", `${b.avgSpreadEurUsd} pips`],
          [
            "Commission per lot",
            b.commissionPerLot === 0 ? "None" : `$${b.commissionPerLot}`,
          ],
          [
            "Cost model",
            b.commissionPerLot === 0 ? "Spread-only" : "Spread + commission",
          ],
          ["Spread vs our set", tightSpread ? "Tight" : "Mid / wider"],
          ["Platforms", b.platforms.join(", ")],
        ],
        faqs: [
          {
            q: `How much does it cost to trade at ${b.name}?`,
            a: `The core cost is a ${b.avgSpreadEurUsd} pip EUR/USD spread${
              b.commissionPerLot === 0
                ? " with no per-lot commission"
                : ` plus $${b.commissionPerLot} commission per standard lot`
            }. Overnight swap and any account fees are separate — check the live schedule in your account.`,
          },
          {
            q: `Is ${b.name} commission-free?`,
            a:
              b.commissionPerLot === 0
                ? `The headline ${b.name} account is commission-free, so the ${b.avgSpreadEurUsd} pip spread is effectively your whole trading cost. Other account types may price differently.`
                : `No. ${b.name} charges $${b.commissionPerLot} per standard lot in addition to the spread. That is normal for a raw-spread account and can be cheaper on larger trades.`,
          },
          {
            q: `Does ${b.name} have hidden fees?`,
            a: `The costs that catch traders out are usually overnight swap/financing on held positions and any inactivity or withdrawal fees, rather than the headline spread. Review ${b.name}'s current fee schedule directly before trading.`,
          },
        ],
      };
    },
  },

  // 4) REGULATION ------------------------------------------------------------
  {
    slug: "regulation",
    shortLabel: "Regulation",
    title: (b) => `Is ${b.name} Regulated? Who Oversees It (2026)`,
    metaDescription: (b) =>
      isUnregulated(b)
        ? `${b.name} operates without oversight from a recognised financial regulator. Understand exactly what that means for your money before you deposit.`
        : `${b.name} is regulated by ${b.regulators.join(
            ", "
          )}. See the authorities, their registers and what protection you actually get.`,
    build: (b) => {
      const unreg = isUnregulated(b);
      const clarity = getRegulatorClarity(b.slug);
      const directAnswer = unreg
        ? `${b.name} is NOT regulated by a recognised financial authority — it ${regulationPhrase(
            b
          )}. That means little to no external protection or recourse if something goes wrong.`
        : `Yes — ${b.name} ${regulationPhrase(b)}, and scores ${b.regulationScore}/5 on our regulation and safety scale.`;

      const regParas: string[] = [];
      for (const id of b.regulators) {
        const info = getRegulator(id);
        if (info && info.registerUrl) {
          regParas.push(
            `${info.acronym} — the ${info.fullName} (${info.jurisdiction}) — is a ${info.tier} authority. You can verify ${b.name}'s status yourself on the ${info.registerLabel}. Independently confirming a licence on the official register is the single most reliable safety check a trader can do.`
          );
        } else if (info) {
          regParas.push(
            `${info.acronym}: ${info.fullName} (${info.jurisdiction}). ${info.registerLabel}.`
          );
        } else {
          regParas.push(
            `"${id}" does not correspond to a recognised licensing register we can point you to. Where a broker cannot be verified on an official regulator's register, treat any implied protection with caution.`
          );
        }
      }

      const paragraphs: string[] = [
        unreg
          ? `${b.name} ${regulationPhrase(
              b
            )}. In practice that means no mandated capital rules, no compensation scheme, and no independent authority to appeal to if you have a dispute over your funds. Your money's safety rests entirely on the company's own conduct.`
          : `${b.name} ${regulationPhrase(
              b
            )}. Regulation matters because a licensed broker must meet capital, conduct and client-money rules, and you have an official authority to escalate to if something goes wrong.`,
        ...regParas,
        `Client funds at ${b.name} are ${
          b.segregatedFunds
            ? "held in segregated accounts, meaning they are kept separate from the company's own operating money"
            : "NOT held in segregated accounts, so they may not be ring-fenced from the company's own funds — a meaningful risk"
        }, and negative balance protection is ${
          b.negativeBalanceProtection
            ? "in place, so you cannot lose more than your balance"
            : "NOT offered, so in extreme moves your losses could in theory exceed your deposit"
        }.`,
      ];

      return {
        directAnswer,
        paragraphs,
        facts: [
          ["Regulators", b.regulators.join(", ")],
          ...(clarity
            ? ([
                ["Verified regulator", clarity.verifiedRegulator],
                ["Verified on", clarity.verifiedOn],
              ] as Array<[string, string]>)
            : []),
          ["Our regulation score", `${b.regulationScore}/5`],
          ["Segregated client funds", b.segregatedFunds ? "Yes" : "No"],
          [
            "Negative balance protection",
            b.negativeBalanceProtection ? "Yes" : "No",
          ],
          ["Founded", String(b.founded)],
        ],
        riskNote: unreg
          ? `${b.name} operates without recognised regulatory oversight. Trading with an unregulated or offshore broker carries elevated risk: there is no compensation scheme and limited recourse if you cannot access your funds. Never deposit money you cannot afford to lose, and consider a strongly regulated alternative if safety is your priority.`
          : b.regulationScore <= 2
          ? `${b.name}'s oversight sits at the lighter end of our set (${b.regulationScore}/5). That is not the top-tier, FCA/ASIC-first protection some traders insist on, so weigh the higher counterparty risk before funding a large balance.`
          : undefined,
        faqs: [
          {
            q: `Is ${b.name} regulated?`,
            a: unreg
              ? `No. ${b.name} ${regulationPhrase(
                  b
                )}, so it is not overseen by a recognised financial authority. This means no compensation scheme and limited recourse — a significant consideration before depositing.`
              : `Yes. ${b.name} ${regulationPhrase(
                  b
                )} and scores ${b.regulationScore}/5 on our regulation scale. You can confirm its licence on the relevant authority's official public register.`,
          },
          {
            q: `How can I verify ${b.name}'s licence myself?`,
            a: unreg
              ? `${b.name} is not on a recognised regulator's register, so there is no official licence to verify — which is itself an important warning sign.`
              : `Search for ${b.name} on the official register of its regulator (${b.regulators.join(
                  ", "
                )}). If a firm claims a licence it doesn't hold, it will not appear — always check the source directly.`,
          },
          {
            q: `Are my funds protected at ${b.name}?`,
            a: `Client funds are ${
              b.segregatedFunds ? "held in segregated accounts" : "not segregated"
            } and negative balance protection is ${
              b.negativeBalanceProtection ? "provided" : "not provided"
            }. ${
              unreg
                ? "Without regulatory oversight, these protections are self-declared rather than externally enforced."
                : "These protections are part of what its regulatory status requires."
            }`,
          },
          ...(clarity
            ? [
                {
                  q: `Why do different sites list different regulators for ${b.name}?`,
                  a: `Comparison sites often copy each other or cite out-of-date entity details, which is why claims conflict. Based on primary sources (the broker's own legal documents and official registers), the verified position as of ${clarity.verifiedOn} is: ${clarity.verifiedRegulator}. ${clarity.caveat}`,
                },
              ]
            : []),
        ],
      };
    },
  },

  // 5) IS IT SAFE ------------------------------------------------------------
  {
    slug: "is-it-safe",
    shortLabel: "Is it safe?",
    title: (b) => `Is ${b.name} Safe? An Evidence-Based Look (2026)`,
    metaDescription: (b) =>
      `Is ${b.name} safe? We weigh its ${b.regulationScore}/5 regulation, fund protection, ${b.trustpilotRating}/5 Trustpilot rating and withdrawals — neutrally, no guarantees.`,
    build: (b) => {
      const unreg = isUnregulated(b);
      const strong =
        b.regulationScore >= 4 &&
        b.segregatedFunds &&
        b.negativeBalanceProtection;
      const directAnswer = unreg
        ? `${b.name} shows elevated risk: it operates without recognised regulation, so we cannot call it "safe." Weigh the evidence below carefully before depositing.`
        : strong
        ? `On the evidence, ${b.name} carries the core safeguards traders look for — ${b.regulators.join(
            ", "
          )} regulation, segregated funds and negative balance protection — though no broker can be called risk-free.`
        : `${b.name} has a mixed safety profile: some safeguards are in place, others are not. No broker is risk-free, so weigh the specifics below against your own priorities.`;

      const trust =
        b.trustpilotRating >= 4.4
          ? "strong"
          : b.trustpilotRating >= 3.8
          ? "reasonable"
          : "weak";

      return {
        directAnswer,
        paragraphs: [
          `"Safe" isn't a yes/no badge — it's the sum of several checkable factors. Here's what the data says about ${b.name}, so you can decide for yourself rather than take a claim at face value.`,
          `Regulation: ${b.name} ${regulationPhrase(
            b
          )}, which we score ${b.regulationScore}/5. ${
            unreg
              ? "This is the single biggest risk factor — without a recognised licence there is no compensation scheme and limited recourse."
              : b.regulationScore >= 4
              ? "That is a genuine strength and the most important safety signal."
              : "That is adequate rather than top-tier, so more cautious traders may prefer a strongly regulated alternative."
          }`,
          `Fund protection: client money is ${
            b.segregatedFunds ? "held in segregated accounts" : "NOT segregated"
          }, and negative balance protection is ${
            b.negativeBalanceProtection ? "in place" : "NOT offered"
          }. These determine what happens to your money if the broker fails or the market gaps violently against you.`,
          `Public sentiment: ${b.name} holds a ${b.trustpilotRating}/5 Trustpilot rating across ${b.trustpilotReviews.toLocaleString()} reviews — ${trust} feedback, though review scores can be gamed and should never be your only check. On the operational side, withdrawals process in ${formatWithdrawal(
            b.withdrawalDays
          ).toLowerCase()}, ${
            b.withdrawalDays <= 2
              ? "which is a healthy sign that clients can access their money"
              : "which is slower than the quickest brokers and worth factoring in"
          }.`,
        ],
        facts: [
          ["Regulation score", `${b.regulationScore}/5`],
          ["Regulators", b.regulators.join(", ")],
          ["Segregated funds", b.segregatedFunds ? "Yes" : "No"],
          [
            "Negative balance protection",
            b.negativeBalanceProtection ? "Yes" : "No",
          ],
          [
            "Trustpilot",
            `${b.trustpilotRating}/5 (${b.trustpilotReviews.toLocaleString()} reviews)`,
          ],
          ["Withdrawal time", formatWithdrawal(b.withdrawalDays)],
        ],
        riskNote: unreg
          ? `Trading with ${b.name} means trading with an unregulated/offshore broker. This carries elevated risk of losing your funds with limited recourse. Trading CFDs is high-risk regardless of broker; only ever use money you can afford to lose, and strongly consider a regulated alternative.`
          : `No broker is risk-free, and CFD trading itself is high-risk — most retail accounts lose money. Treat the evidence above as inputs to your own decision, not a guarantee, and never deposit money you cannot afford to lose.`,
        faqs: [
          {
            q: `Is ${b.name} safe to trade with?`,
            a: unreg
              ? `${b.name} operates without recognised regulation, which is a significant risk factor — we cannot describe it as safe. If safety is your priority, a strongly regulated broker is a lower-risk choice.`
              : strong
              ? `${b.name} has the core safeguards — ${b.regulators.join(
                  ", "
                )} regulation, segregated funds and negative balance protection — but "safe" is never absolute, and CFD trading itself carries a high risk of loss.`
              : `${b.name} offers some safeguards but not all; review its ${b.regulationScore}/5 regulation, fund protection and track record above and weigh them against your own risk tolerance.`,
          },
          {
            q: `Is my money protected if ${b.name} goes bust?`,
            a: `${
              b.segregatedFunds
                ? "Client funds are held in segregated accounts, which is designed to keep them separate from the company's own money"
                : "Client funds are not segregated, so they may not be ring-fenced if the company fails"
            }. ${
              unreg
                ? "Without regulation there is also no compensation scheme to fall back on."
                : "Protection ultimately depends on the rules of its regulator."
            }`,
          },
          {
            q: `Does ${b.name} have good reviews?`,
            a: `${b.name} holds a ${b.trustpilotRating}/5 Trustpilot rating from ${b.trustpilotReviews.toLocaleString()} reviews (${trust} feedback). Reviews are one useful signal, but they can be manipulated — combine them with regulatory and fund-protection checks.`,
          },
        ],
      };
    },
  },

  // 6) PLATFORMS / METATRADER ------------------------------------------------
  {
    slug: "platforms",
    shortLabel: "Platforms (MT4/MT5)",
    title: (b) =>
      `${b.name} Trading Platforms (2026): ${b.platforms.join(", ")}`,
    metaDescription: (b) =>
      `Which platforms does ${b.name} offer? It runs ${b.platforms.join(
        ", "
      )}. See MetaTrader versions, what each is best for, and how to get started.`,
    build: (b) => {
      const hasMt4 = b.platforms.some((p) => /mt4|metatrader 4/i.test(p));
      const hasMt5 = b.platforms.some((p) => /mt5|metatrader 5/i.test(p));
      const hasMeta = hasMt4 || hasMt5;
      const list = b.platforms.join(", ");
      const mtStr = hasMt4 && hasMt5
        ? "both MetaTrader 4 (MT4) and MetaTrader 5 (MT5)"
        : hasMt5
        ? "MetaTrader 5 (MT5)"
        : hasMt4
        ? "MetaTrader 4 (MT4)"
        : "no MetaTrader platform";

      const directAnswer = hasMeta
        ? `${b.name} runs on ${mtStr}${
            b.platforms.length > (hasMt4 && hasMt5 ? 2 : 1)
              ? `, alongside ${list}`
              : ""
          }, so you can trade on the industry-standard MetaTrader software.`
        : `${b.name} offers ${list} rather than the MetaTrader (MT4/MT5) platforms.`;

      return {
        directAnswer,
        paragraphs: [
          `${b.name} gives you access to ${list}. ${
            hasMeta
              ? `That includes ${mtStr}, the most widely used retail trading software in the world — which means charts, indicators and expert advisors (EAs) you may already know will work here.`
              : `These are not the MetaTrader platforms, so if you specifically want MT4 or MT5 you should confirm availability with the broker before opening an account.`
          }`,
          hasMt4 && hasMt5
            ? `The practical difference between the two MetaTrader versions: MT4 is the older, lighter platform built around forex and simple, reliable order execution — many traders prefer it for its huge library of custom indicators and EAs. MT5 is the newer, heavier platform that adds more timeframes, more built-in indicators, an economic calendar and broader asset coverage (stocks, futures). For a beginner, either works well; pick MT4 if you want simplicity, MT5 if you want the extra tools.`
            : hasMt5
            ? `MetaTrader 5 (MT5) is the newer MetaTrader version. Compared with MT4 it offers more timeframes, more built-in indicators, a built-in economic calendar and support for a wider range of assets. It runs on desktop, web browser and mobile, so you can manage positions from anywhere.`
            : hasMt4
            ? `MetaTrader 4 (MT4) is the classic, battle-tested trading platform. It is lighter than MT5 and built around forex trading, with an enormous library of free custom indicators and automated strategies (expert advisors). It runs on desktop, web and mobile.`
            : `Because ${b.name} uses ${list}, take time in the free demo (if available) to learn where the order ticket, charts and — most importantly — the withdrawal screen live before funding real money.`,
          `Whichever platform you use, the software itself does not change your risk. Leverage of up to 1:${b.maxLeverage} at ${b.name} means a small deposit controls a much larger position. Learn the platform on a ${
            b.demoAccount ? "free demo account first" : "small balance first"
          }, place a test trade, and locate the withdrawal process early so nothing surprises you later.`,
        ],
        facts: [
          ["Platforms offered", list],
          ["MetaTrader 4 (MT4)", hasMt4 ? "Yes" : "No"],
          ["MetaTrader 5 (MT5)", hasMt5 ? "Yes" : "No"],
          ["Demo account", b.demoAccount ? "Yes (free)" : "No"],
          ["Max leverage", `1:${b.maxLeverage}`],
        ],
        faqs: [
          {
            q: `Does ${b.name} offer MetaTrader 4 or MetaTrader 5?`,
            a: hasMeta
              ? `${b.name} offers ${mtStr}. ${
                  hasMt4 && hasMt5
                    ? "You can choose whichever suits you — MT4 for simplicity, MT5 for extra tools."
                    : hasMt5
                    ? "MT5 is the newer version with more indicators, timeframes and asset coverage."
                    : "MT4 is the classic, lightweight forex-focused platform."
                }`
              : `${b.name} does not advertise MetaTrader (MT4/MT5); it offers ${list}. Confirm current platform availability with the broker directly.`,
          },
          {
            q: `What is the difference between MT4 and MT5?`,
            a: `MT4 is the older, lighter platform focused on forex with a massive library of custom indicators and automated strategies. MT5 is newer and heavier, adding more timeframes, more built-in indicators, an economic calendar and support for more asset classes. Neither is "better" for a beginner — MT4 is simpler, MT5 has more features.`,
          },
          {
            q: `Can I use ${b.name} on my phone?`,
            a: hasMeta
              ? `Yes. The MetaTrader apps (${
                  hasMt4 && hasMt5 ? "MT4 and MT5" : hasMt5 ? "MT5" : "MT4"
                }) are available on iOS and Android, so you can monitor and manage ${b.name} positions from your phone. Always double-check trade sizes on a small screen before confirming.`
              : `${b.name} offers ${list} — check the broker's site for its mobile app options. Whatever you use, confirm trade sizes carefully on mobile before confirming an order.`,
          },
        ],
      };
    },
  },
];

// --- Lookups & enumeration --------------------------------------------------

/** Get a topic definition by its slug (undefined if unknown). */
export function getTopic(topicSlug: string): Topic | undefined {
  return ALL_TOPICS.find((t) => t.slug === topicSlug);
}

/** All topic slugs, in canonical order. */
export const TOPIC_SLUGS: string[] = ALL_TOPICS.map((t) => t.slug);

/**
 * Every valid (brokerSlug, topicSlug) pair for NON-FLAGGED brokers only.
 * This is the single source of truth for generateStaticParams and the sitemap,
 * guaranteeing flagged brokers never get topic pages.
 */
export function getAllBrokerTopicPairs(): Array<{
  slug: string;
  topic: string;
}> {
  const pairs: Array<{ slug: string; topic: string }> = [];
  for (const broker of getBrokers()) {
    if (broker.flagged) continue;
    for (const topic of ALL_TOPICS) {
      pairs.push({ slug: broker.slug, topic: topic.slug });
    }
  }
  return pairs;
}

/**
 * Resolve a (slug, topic) request to a broker + topic, or null if invalid —
 * treating flagged brokers as not-found so they never render a topic page.
 */
export function resolveBrokerTopic(
  slug: string,
  topicSlug: string
): { broker: Broker; topic: Topic } | null {
  const broker = getBrokerBySlug(slug);
  if (!broker || broker.flagged) return null;
  const topic = getTopic(topicSlug);
  if (!topic) return null;
  return { broker, topic };
}

/**
 * Sibling topic links for a broker: the OTHER topics for the same broker,
 * used for internal linking between a broker's quick-answer pages.
 */
export function siblingTopicLinks(
  broker: Broker,
  currentTopicSlug: string,
  max = 3
): Array<{ href: string; label: string; sub?: string }> {
  return ALL_TOPICS.filter((t) => t.slug !== currentTopicSlug)
    .slice(0, max)
    .map((t) => ({
      href: `/brokers/${broker.slug}/${t.slug}`,
      label: t.title(broker),
      sub: t.shortLabel,
    }));
}
