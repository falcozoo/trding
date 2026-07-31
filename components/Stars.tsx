/** Star rating display (out of 5), amber filled. Presentation only. */
export function Stars({
  value,
  size = "md",
}: {
  value: number;
  size?: "sm" | "md" | "lg";
}) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const sizes = { sm: "text-sm", md: "text-lg", lg: "text-2xl" };
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < full) return "full";
    if (i === full && half) return "half";
    return "empty";
  });

  return (
    <span
      className={`inline-flex items-center gap-0.5 ${sizes[size]}`}
      aria-label={`${value} out of 5`}
      role="img"
    >
      {stars.map((s, i) => (
        <span key={i} className="leading-none">
          {s === "full" ? (
            <span className="text-amber">★</span>
          ) : s === "half" ? (
            <span className="relative inline-block text-line">
              ★
              <span className="absolute inset-0 w-1/2 overflow-hidden text-amber">
                ★
              </span>
            </span>
          ) : (
            <span className="text-line">★</span>
          )}
        </span>
      ))}
    </span>
  );
}
