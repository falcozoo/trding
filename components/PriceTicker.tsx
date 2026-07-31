import { getPrices, formatUsd, type CoinPrice } from "@/lib/markets";

/**
 * Live crypto prices strip (BTC / ETH / SOL).
 * Server component with a baked-in graceful fallback — never throws.
 *
 * Pass `data` to reuse already-fetched prices, otherwise it fetches on its own.
 */
export async function PriceTicker({
  data,
}: {
  data?: CoinPrice[] | null;
}) {
  const prices = data !== undefined ? data : await getPrices();

  if (!prices || prices.length === 0) {
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
      <h2 className="text-lg font-semibold">Live prices</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {prices.map((c) => {
          const up = c.change24h >= 0;
          return (
            <div
              key={c.id}
              className="rounded-xl border border-line bg-cream px-4 py-3"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-semibold text-ink">{c.symbol}</span>
                <span className="text-xs text-muted">{c.name}</span>
              </div>
              <div className="mt-1 text-xl font-bold text-ink">
                {formatUsd(c.price)}
              </div>
              <div
                className={`mt-0.5 text-sm font-medium ${
                  up ? "text-green-600" : "text-red-600"
                }`}
              >
                {up ? "▲" : "▼"} {Math.abs(c.change24h).toFixed(2)}%
                <span className="font-normal text-muted"> · 24h</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
