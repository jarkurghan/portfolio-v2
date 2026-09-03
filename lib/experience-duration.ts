import { site } from "@/lib/content";
import type { Locale } from "@/lib/locale";

function parseUtcDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return { year, month, day };
}

function utcToday() {
  const now = new Date();
  return {
    year: now.getUTCFullYear(),
    month: now.getUTCMonth() + 1,
    day: now.getUTCDate(),
  };
}

export function getExperienceDuration(from = site.careerStart) {
  const start = parseUtcDate(from);
  const now = utcToday();

  let years = now.year - start.year;
  let months = now.month - start.month;

  if (now.day < start.day) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return {
    years: Math.max(0, years),
    months: Math.max(0, months),
  };
}

function ruPlural(n: number, one: string, few: string, many: string) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

function formatYears(locale: Locale, n: number) {
  if (locale === "uz") return `${n} yil`;
  if (locale === "ru") return `${n} ${ruPlural(n, "год", "года", "лет")}`;
  return `${n} ${n === 1 ? "year" : "years"}`;
}

function formatMonths(locale: Locale, n: number) {
  if (locale === "uz") return `${n} oy`;
  if (locale === "ru") return `${n} ${ruPlural(n, "месяц", "месяца", "месяцев")}`;
  return `${n} ${n === 1 ? "month" : "months"}`;
}

export function formatExperienceDuration(locale: Locale, from = site.careerStart) {
  const { years, months } = getExperienceDuration(from);
  const parts: string[] = [];

  if (years > 0) parts.push(formatYears(locale, years));
  if (months > 0) parts.push(formatMonths(locale, months));

  return parts.join(" · ");
}
