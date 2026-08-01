"use client";

import { useEffect, useState } from "react";

/**
 * Language selector (flags) with on-the-fly translation via Google Translate.
 *
 * The site is authored in English. Clicking the French flag translates the
 * whole page client-side through Google's translate widget — no need to
 * maintain 341 translated pages by hand. English is the default (funnel EN).
 *
 * The native Google widget UI is hidden with CSS (globals.css) and we drive
 * it programmatically via the `googtrans` cookie + a hidden <select>, so the
 * user only ever sees two clean flags.
 */

const LANGS = [
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
] as const;

type LangCode = (typeof LANGS)[number]["code"];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          opts: Record<string, unknown>,
          el: string,
        ) => void;
      };
    };
  }
}

function setGoogTransCookie(target: LangCode) {
  // Format Google Translate expects: /en/<target>
  const value = target === "en" ? "" : `/en/${target}`;
  const domain = typeof location !== "undefined" ? location.hostname : "";
  // Set on both host and root domain so it sticks across pages.
  document.cookie = `googtrans=${value};path=/`;
  if (domain) {
    document.cookie = `googtrans=${value};path=/;domain=${domain}`;
    document.cookie = `googtrans=${value};path=/;domain=.${domain}`;
  }
}

function getCurrentLang(): LangCode {
  if (typeof document === "undefined") return "en";
  const m = document.cookie.match(/googtrans=\/en\/(\w+)/);
  return (m?.[1] as LangCode) || "en";
}

export function LanguageSelector() {
  const [current, setCurrent] = useState<LangCode>("en");

  useEffect(() => {
    setCurrent(getCurrentLang());

    // Inject the Google Translate script once.
    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        if (window.google?.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,fr",
              autoDisplay: false,
            },
            "google_translate_element",
          );
        }
      };
      const s = document.createElement("script");
      s.id = "google-translate-script";
      s.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(s);
    }
  }, []);

  function switchTo(code: LangCode) {
    if (code === current) return;
    setGoogTransCookie(code);
    setCurrent(code);
    // Reload so the widget re-applies translation for the whole page.
    location.reload();
  }

  return (
    <>
      {/* Hidden mount point required by Google Translate */}
      <div id="google_translate_element" className="hidden" aria-hidden />
      <div className="flex items-center gap-1" role="group" aria-label="Language">
        {LANGS.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => switchTo(l.code)}
            aria-pressed={current === l.code}
            title={l.label}
            className={`rounded-md px-1.5 py-1 text-base leading-none transition ${
              current === l.code
                ? "opacity-100"
                : "opacity-40 hover:opacity-80"
            }`}
          >
            <span aria-hidden>{l.flag}</span>
            <span className="sr-only">{l.label}</span>
          </button>
        ))}
      </div>
    </>
  );
}
