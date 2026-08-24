import type { Metadata } from "next";
import { cookies } from "next/headers";
import { WorkGrid } from "@/components/work-grid";
import { LOCALE_COOKIE, parseLocale } from "@/lib/locale";
import { getWorkPage } from "@/lib/messages/work";

export async function generateMetadata(): Promise<Metadata> {
  const locale = parseLocale((await cookies()).get(LOCALE_COOKIE)?.value);
  const page = getWorkPage(locale);
  return {
    title: page.title,
    description: page.metaDescription,
  };
}

export default async function WorkPage() {
  const locale = parseLocale((await cookies()).get(LOCALE_COOKIE)?.value);
  const page = getWorkPage(locale);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-8 md:py-10">
      <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">
        {page.eyebrow}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-6xl">
        {page.title}
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        {page.intro}
      </p>
      <div className="mt-6 md:mt-10">
        <WorkGrid
          projects={page.projects}
          filters={page.filters}
          kindLabel={page.kindLabel}
          roleLabel={page.roleLabel}
          openLabel={page.open}
        />
      </div>
    </main>
  );
}
