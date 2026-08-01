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

// ---------------------------------------------------------------------------
// Traditional markets (Gold, FX, indices) + a live financial news feed.
// Source: Yahoo Finance public endpoints — free, no API key.
// ---------------------------------------------------------------------------

export interface MarketQuote {
  symbol: string;
  label: string;
  price: number;
  changePct: number;
  unit: string; // "$" | "" | ...
  decimals: number;
}

const MARKET_SYMBOLS: Array<{
  symbol: string;
  label: string;
  unit: string;
  decimals: number;
}> = [
  { symbol: "GC=F", label: "Gold", unit: "$", decimals: 2 },
  { symbol: "EURUSD=X", label: "EUR/USD", unit: "", decimals: 4 },
  { symbol: "^GSPC", label: "S&P 500", unit: "", decimals: 2 },
  { symbol: "^IXIC", label: "Nasdaq", unit: "", decimals: 2 },
  { symbol: "BTC-USD", label: "Bitcoin", unit: "$", decimals: 0 },
];

async function fetchYahooQuote(
  meta: (typeof MARKET_SYMBOLS)[number],
): Promise<MarketQuote | null> {
  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
      meta.symbol,
    )}?interval=1d&range=5d`;
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as {
      chart?: {
        result?: Array<{
          meta?: {
            regularMarketPrice?: number;
            chartPreviousClose?: number;
            previousClose?: number;
          };
        }>;
      };
    };
    const m = json?.chart?.result?.[0]?.meta;
    const price = m?.regularMarketPrice;
    const prev = m?.chartPreviousClose ?? m?.previousClose;
    if (typeof price !== "number" || typeof prev !== "number" || prev === 0)
      return null;
    return {
      symbol: meta.symbol,
      label: meta.label,
      price,
      changePct: ((price - prev) / prev) * 100,
      unit: meta.unit,
      decimals: meta.decimals,
    };
  } catch {
    return null;
  }
}

/** Gold, EUR/USD, S&P 500, Nasdaq, Bitcoin. Null entries are dropped. */
export async function getMarketPrices(): Promise<MarketQuote[] | null> {
  try {
    const results = await Promise.all(MARKET_SYMBOLS.map(fetchYahooQuote));
    const out = results.filter((q): q is MarketQuote => q !== null);
    return out.length ? out : null;
  } catch {
    return null;
  }
}

export interface NewsItem {
  title: string;
  link: string;
  source: string; // which market bucket it came from
  publishedAt: number; // epoch ms
}

const NEWS_FEEDS: Array<{ symbol: string; source: string }> = [
  { symbol: "^GSPC", source: "Stocks" },
  { symbol: "^IXIC", source: "Tech" },
  { symbol: "GC=F", source: "Gold" },
  { symbol: "EURUSD=X", source: "Forex" },
  { symbol: "CL=F", source: "Oil" },
];

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

async function fetchFeed(feed: (typeof NEWS_FEEDS)[number]): Promise<NewsItem[]> {
  try {
    const url = `https://feeds.finance.yahoo.com/rss/2.0/headline?s=${encodeURIComponent(
      feed.symbol,
    )}&region=US&lang=en-US`;
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items: NewsItem[] = [];
    const itemRe = /<item>([\s\S]*?)<\/item>/g;
    let m: RegExpExecArray | null;
    while ((m = itemRe.exec(xml)) !== null) {
      const block = m[1];
      const title = block.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim();
      const link = block.match(/<link>([\s\S]*?)<\/link>/)?.[1]?.trim();
      const pub = block.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]?.trim();
      if (!title || !link) continue;
      const ts = pub ? Date.parse(pub) : Date.now();
      items.push({
        title: decodeEntities(title),
        link,
        source: feed.source,
        publishedAt: Number.isFinite(ts) ? ts : Date.now(),
      });
    }
    return items;
  } catch {
    return [];
  }
}

/**
 * Aggregated, de-duplicated, newest-first financial news feed across
 * stocks, tech, gold, forex and oil. Returns null only on total failure.
 */
export async function getMarketNews(limit = 30): Promise<NewsItem[] | null> {
  try {
    const all = (await Promise.all(NEWS_FEEDS.map(fetchFeed))).flat();
    if (!all.length) return null;
    const seen = new Set<string>();
    const deduped = all.filter((n) => {
      const key = n.title.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    deduped.sort((a, b) => b.publishedAt - a.publishedAt);
    return deduped.slice(0, limit);
  } catch {
    return null;
  }
}

/** Human "time ago" string from an epoch-ms timestamp. */
export function timeAgo(ts: number): string {
  const diff = Date.now() - ts;
  const mins = Math.round(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.round(hrs / 24);
  return `${days}d ago`;
}
