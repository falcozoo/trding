import type { Config } from "tailwindcss";

/**
 * Design tokens for Trding.io.
 * Light, calm palette. Single amber accent (#E08A2E).
 * No dark backgrounds, no gradients/glow.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-[#E85D5D]",
    "bg-[#3E7BD6]",
    "bg-[#E0A030]",
    "bg-[#3FA66A]",
    "ring-[#C23B3B]",
    "ring-[#295CAA]",
    "ring-[#B97F1F]",
    "ring-[#2C7C4C]",
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutrals
        cream: "#FBF8F3",
        paper: "#FFFFFF",
        ink: "#1F2933",
        muted: "#5B6470",
        line: "#E7E2D9",
        // Single accent
        amber: {
          DEFAULT: "#E08A2E",
          soft: "#F6E7D2",
          dark: "#B96F1F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 3px rgba(31,41,51,0.06), 0 1px 2px rgba(31,41,51,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
