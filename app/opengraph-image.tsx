import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Trding.io — Neutral broker comparison & trading education";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#FBF9F4",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            color: "#20242C",
            letterSpacing: "-0.02em",
          }}
        >
          trding<span style={{ color: "#E8A63A" }}>.io</span>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 40,
            fontWeight: 700,
            color: "#20242C",
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          Compare brokers. Learn to trade. Free & neutral.
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "#6B7280",
            maxWidth: 900,
          }}
        >
          Objective broker scores, 7 in-depth courses, and free trading tools.
        </div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 16,
          }}
        >
          {["Neutral", "No account needed", "Honest about risk"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                backgroundColor: "#F6E6C8",
                color: "#B87A1E",
                padding: "10px 22px",
                borderRadius: 999,
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
