"use client";

import { useState } from "react";
import type { ContinentId } from "@/lib/geo";

/**
 * Simplified interactive world map. Each continent is a clickable/hoverable
 * blob. Hover highlights it green; click selects it. Not geographically exact —
 * intentionally stylised and game-like, matching the playful quiz.
 */

type Shape = {
  id: ContinentId;
  label: string;
  /** SVG path (stylised) */
  d: string;
  /** label position */
  lx: number;
  ly: number;
};

const SHAPES: Shape[] = [
  {
    id: "north-america",
    label: "N. America",
    d: "M60,60 L200,50 L230,120 L180,150 L150,210 L120,200 L110,150 L70,130 Z",
    lx: 140,
    ly: 120,
  },
  {
    id: "south-america",
    label: "S. America",
    d: "M180,230 L230,220 L245,300 L210,370 L180,340 L175,270 Z",
    lx: 208,
    ly: 300,
  },
  {
    id: "europe",
    label: "Europe",
    d: "M370,70 L440,60 L460,110 L420,140 L380,130 L360,100 Z",
    lx: 410,
    ly: 100,
  },
  {
    id: "africa",
    label: "Africa",
    d: "M380,150 L460,150 L480,230 L440,320 L400,300 L380,220 Z",
    lx: 430,
    ly: 235,
  },
  {
    id: "asia",
    label: "Asia",
    d: "M470,60 L640,55 L680,130 L620,190 L520,180 L480,130 L465,100 Z",
    lx: 570,
    ly: 115,
  },
  {
    id: "oceania",
    label: "Oceania",
    d: "M620,270 L700,260 L720,320 L660,350 L620,320 Z",
    lx: 668,
    ly: 305,
  },
];

export function WorldMap({
  onSelect,
}: {
  onSelect: (id: ContinentId) => void;
}) {
  const [hover, setHover] = useState<ContinentId | null>(null);

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 760 400"
        className="h-auto w-full select-none"
        role="group"
        aria-label="Select your continent"
      >
        <rect x="0" y="0" width="760" height="400" fill="#F1F5F9" rx="16" />
        {SHAPES.map((s) => {
          const active = hover === s.id;
          return (
            <g
              key={s.id}
              onMouseEnter={() => setHover(s.id)}
              onMouseLeave={() => setHover(null)}
              onClick={() => onSelect(s.id)}
              className="cursor-pointer"
              role="button"
              aria-label={s.label}
            >
              <path
                d={s.d}
                fill={active ? "#22A06B" : "#CBD5E1"}
                stroke={active ? "#15804F" : "#94A3B8"}
                strokeWidth={active ? 3 : 1.5}
                className="transition-colors duration-150"
              />
              <text
                x={s.lx}
                y={s.ly}
                textAnchor="middle"
                className="pointer-events-none text-[13px] font-semibold"
                fill={active ? "#FFFFFF" : "#475569"}
              >
                {s.label}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="mt-3 text-center text-sm text-muted">
        Tap your region on the map
      </p>
    </div>
  );
}
