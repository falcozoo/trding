import {
  getMarketPrices,
  type MarketQuote,
} from "@/lib/markets";

/**
 * Multi-asset live prices strip: Gold, EUR/USD, S&P 500, Nasdaq, Bitcoin.
 * Server component with a graceful fallback — never throws.
 */
export async function MarketPrices({
  data,
}: {
  data?: MarketQuote[] | null;
}) {
  const quotes = data !== undefined ? data : await getMarketPrices();

  if (!quotes || quotes.length === 0) {
    return (
      <div className="rounded-xl2 border border-line bg-paper p-6 shadow-card">
        <h2 className="text-lg font-semibold">Live prices</h2>
        <p className="mt-3 text-sm text-muted">
          Price data temporarily unavailable. Please check back shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl2 border border-line bg-paper p-6 shadow-card">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-semibold">Markets now</h2>
        <span className="text-xs text-muted">vs. previous close</span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {quotes.map((q) => {
          const up = q.changePct >= 0;
          const priceStr =
            q.unit +
            q.price.toLocaleString("en-US", {
              minimumFractionDigits: q.decimals,
              maximumFractionDigits: q.decimals,
            });
          return (
            <div
              key={q.symbol}
              className="rounded-xl border border-line bg-cream px-4 py-3"
            >
              <div className="text-xs font-medium text-muted">{q.label}</div>
              <div className="mt-1 text-lg font-bold text-ink">{priceStr}</div>
              <div
                className={`mt-0.5 text-sm font-semibold ${
                  up ? "text-green-600" : "text-red-600"
                }`}
              >
                {up ? "▲" : "▼"} {Math.abs(q.changePct).toFixed(2)}%
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
