/**
 * Geography data for the interactive country picker.
 *
 * Step 1: user clicks a continent on a world map.
 * Step 2: user picks their country (with flag) from that continent.
 *
 * `code` maps onto the broker `CountryCode` union where a broker explicitly
 * serves that market; everything else falls back to "Other" for filtering.
 */

import type { CountryCode } from "./brokers";

export type ContinentId =
  | "europe"
  | "north-america"
  | "south-america"
  | "africa"
  | "asia"
  | "oceania";

export interface Country {
  name: string;
  flag: string; // emoji flag
  /** Maps to broker filtering. Specific markets use their code; rest = "Other". */
  filter: CountryCode;
}

export interface Continent {
  id: ContinentId;
  label: string;
  countries: Country[];
}

export const CONTINENTS: Continent[] = [
  {
    id: "europe",
    label: "Europe",
    countries: [
      { name: "United Kingdom", flag: "🇬🇧", filter: "UK" },
      { name: "Netherlands", flag: "🇳🇱", filter: "Netherlands" },
      { name: "Sweden", flag: "🇸🇪", filter: "Sweden" },
      { name: "Norway", flag: "🇳🇴", filter: "Norway" },
      { name: "Denmark", flag: "🇩🇰", filter: "Denmark" },
      { name: "Finland", flag: "🇫🇮", filter: "Finland" },
      { name: "Ireland", flag: "🇮🇪", filter: "Other" },
      { name: "Germany", flag: "🇩🇪", filter: "Other" },
      { name: "France", flag: "🇫🇷", filter: "Other" },
      { name: "Spain", flag: "🇪🇸", filter: "Other" },
      { name: "Italy", flag: "🇮🇹", filter: "Other" },
      { name: "Portugal", flag: "🇵🇹", filter: "Other" },
      { name: "Belgium", flag: "🇧🇪", filter: "Other" },
      { name: "Switzerland", flag: "🇨🇭", filter: "Other" },
      { name: "Austria", flag: "🇦🇹", filter: "Other" },
      { name: "Poland", flag: "🇵🇱", filter: "Other" },
    ],
  },
  {
    id: "north-america",
    label: "North America",
    countries: [
      { name: "United States", flag: "🇺🇸", filter: "USA" },
      { name: "Canada", flag: "🇨🇦", filter: "Other" },
      { name: "Mexico", flag: "🇲🇽", filter: "Other" },
    ],
  },
  {
    id: "south-america",
    label: "South America",
    countries: [
      { name: "Brazil", flag: "🇧🇷", filter: "Other" },
      { name: "Argentina", flag: "🇦🇷", filter: "Other" },
      { name: "Chile", flag: "🇨🇱", filter: "Other" },
      { name: "Colombia", flag: "🇨🇴", filter: "Other" },
    ],
  },
  {
    id: "africa",
    label: "Africa",
    countries: [
      { name: "South Africa", flag: "🇿🇦", filter: "Other" },
      { name: "Nigeria", flag: "🇳🇬", filter: "Other" },
      { name: "Kenya", flag: "🇰🇪", filter: "Other" },
      { name: "Egypt", flag: "🇪🇬", filter: "Other" },
      { name: "Morocco", flag: "🇲🇦", filter: "Other" },
    ],
  },
  {
    id: "asia",
    label: "Asia",
    countries: [
      { name: "United Arab Emirates", flag: "🇦🇪", filter: "Other" },
      { name: "Singapore", flag: "🇸🇬", filter: "Other" },
      { name: "India", flag: "🇮🇳", filter: "Other" },
      { name: "Malaysia", flag: "🇲🇾", filter: "Other" },
      { name: "Indonesia", flag: "🇮🇩", filter: "Other" },
      { name: "Philippines", flag: "🇵🇭", filter: "Other" },
      { name: "Japan", flag: "🇯🇵", filter: "Other" },
    ],
  },
  {
    id: "oceania",
    label: "Oceania",
    countries: [
      { name: "Australia", flag: "🇦🇺", filter: "Other" },
      { name: "New Zealand", flag: "🇳🇿", filter: "Other" },
    ],
  },
];

export function continentById(id: ContinentId): Continent | undefined {
  return CONTINENTS.find((c) => c.id === id);
}
