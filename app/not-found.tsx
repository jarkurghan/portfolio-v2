import type { Metadata } from "next";
import Link from "next/link";
import { getRequestLocale } from "@/lib/locale-server";
import { getNav } from "@/lib/messages/nav";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const nav = getNav(locale);
  return { title: nav.notFound };
}

export default async function NotFound() {
  const locale = await getRequestLocale();
  const nav = getNav(locale);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-5 py-24">
      <p className="font-mono text-xs text-cyan">404</p>
      <h1 className="mt-2 text-3xl font-semibold">{nav.notFound}</h1>
      <Link href="/" className="mt-6 text-sm text-violet hover:text-cyan">
        {nav.home}
      </Link>
    </main>
  );
}
