export const LOCALES = ["uz", "ru", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "uz";

export const LOCALE_COOKIE = "locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function parseLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function cvHref(locale: Locale): string {
  return `/cv_${locale}.pdf`;
}

export function localeCookieString(locale: Locale): string {
  const maxAge = 60 * 60 * 24 * 365;
  return `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}
