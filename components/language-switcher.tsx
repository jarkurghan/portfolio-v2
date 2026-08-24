"use client";

import { LOCALES } from "@/lib/locale";
import { useLocale } from "@/components/locale-provider";
import { getNav } from "@/lib/messages/nav";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const nav = getNav(locale);

  return (
    <nav aria-label={nav.language}>
      <ul className="flex items-center gap-0.5 rounded-full border border-line bg-bg-elev/90 p-1 shadow-[0_0_40px_rgba(103,232,249,0.08)] backdrop-blur-xl md:gap-1 md:p-1.5">
        {LOCALES.map((code) => {
          const active = locale === code;
          return (
            <li key={code}>
              <button
                type="button"
                onClick={() => setLocale(code)}
                aria-pressed={active}
                className={`rounded-full px-2 py-1.5 text-center font-mono text-[10px] uppercase tracking-wide transition-colors md:px-3 md:py-2 md:text-xs md:tracking-wider ${
                  active ? "bg-cyan/15 text-cyan" : "text-muted hover:text-ink"
                }`}
              >
                {code}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
