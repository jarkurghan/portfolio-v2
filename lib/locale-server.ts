import { cookies } from "next/headers";
import { LOCALE_COOKIE, parseLocale, type Locale } from "@/lib/locale";

export async function getRequestLocale(): Promise<Locale> {
  return parseLocale((await cookies()).get(LOCALE_COOKIE)?.value);
}
