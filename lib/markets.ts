/**
 * Live "markets" freshness layer.
 *
 * Uses FREE, no-key public APIs:
 *  - Alternative.me Crypto Fear & Greed Index  (https://api.alternative.me/fng/)
 *  - CoinGecko simple price API                (https://api.coingecko.com/api/v3/simple/price)
 *
 * Every fetch is server-side, ISR-cached (revalidate: 900s = 15 min) and wrapped
 * in try/catch. If an API is unreachable (or the sandbox has no network) the
 * helpers return `null`, and the UI renders a graceful "temporarily unavailable"
 * placeholder — the build and pages never break.
 */

const REVALIDATE_SECONDS = 900; // 15 minutes

export interface FearGreed {
  value: number; // 0-100
  label: string; // "Extreme Fear" … "Extreme Greed"
}

export interface CoinPrice {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number; // percent
}

/**
 * Crypto Fear & Greed Index from Alternative.me.
 * Returns null on any failure (never throws).
 */
export async function getFearGreed(): Promise<FearGreed | null> {
  try {
    const res = await fetch("https://api.alternative.me/fng/?limit=1", {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;

    const json: unknown = await res.json();
    const entry = (json as { data?: Array<{ value?: string; value_classification?: string }> })
      ?.data?.[0];
    if (!entry) return null;

    const value = Number(entry.value);
    const label = entry.value_classification;
    if (!Number.isFinite(value) || !label) return null;

    return { value, label };
  } catch {
    return null;
  }
}

const COINS: Array<{ id: string; name: string; symbol: string }> = [
  { id: "bitcoin", name: "Bitcoin", symbol: "BTC" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH" },
  { id: "solana", name: "Solana", symbol: "SOL" },
];

/**
 * A few crypto prices + 24h change from CoinGecko.
 * Returns null on any failure (never throws).
 */
export async function getPrices(): Promise<CoinPrice[] | null> {
  try {
    const ids = COINS.map((c) => c.id).join(",");
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`;
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;

    const json = (await res.json()) as Record<
      string,
      { usd?: number; usd_24h_change?: number }
    >;

    const out: CoinPrice[] = [];
    for (const coin of COINS) {
      const row = json[coin.id];
      if (!row || typeof row.usd !== "number") continue;
      out.push({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        price: row.usd,
        change24h: typeof row.usd_24h_change === "number" ? row.usd_24h_change : 0,
      });
    }

    return out.length ? out : null;
  } catch {
    return null;
  }
}

/** Colour token for a Fear & Greed value, matched to the site palette-ish scale. */
export function fearGreedColor(value: number): { text: string; ring: string; dot: string } {
  if (value <= 24) return { text: "text-red-600", ring: "ring-red-200", dot: "bg-red-500" };
  if (value <= 44) return { text: "text-orange-600", ring: "ring-orange-200", dot: "bg-orange-500" };
  if (value <= 55) return { text: "text-amber-dark", ring: "ring-amber-200", dot: "bg-amber" };
  if (value <= 74) return { text: "text-lime-600", ring: "ring-lime-200", dot: "bg-lime-500" };
  return { text: "text-green-600", ring: "ring-green-200", dot: "bg-green-500" };
}

/** Format a USD price sensibly (no cents for large numbers). */
export function formatUsd(price: number): string {
  const opts: Intl.NumberFormatOptions =
    price >= 100
      ? { maximumFractionDigits: 0 }
      : { maximumFractionDigits: 2 };
  return "$" + price.toLocaleString("en-US", opts);
}
