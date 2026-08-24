import type { Metadata } from "next";
import { cookies } from "next/headers";
import { LOCALE_COOKIE, parseLocale } from "@/lib/locale";
import { getContactPage } from "@/lib/messages/contact";

export async function generateMetadata(): Promise<Metadata> {
  const locale = parseLocale((await cookies()).get(LOCALE_COOKIE)?.value);
  const page = getContactPage(locale);
  return {
    title: page.title,
    description: page.metaDescription,
  };
}

export default async function ContactPage() {
  const locale = parseLocale((await cookies()).get(LOCALE_COOKIE)?.value);
  const page = getContactPage(locale);

  return (
    <main className="mx-auto grid w-full max-w-6xl flex-1 gap-6 px-4 py-8 md:grid-cols-[260px_1fr] md:gap-16 md:px-8 md:py-10">
      <aside className="md:sticky md:top-8 md:self-start">
        <h1 className="mt-0 text-3xl font-semibold tracking-tight md:mt-2 md:text-4xl">
          {page.title}
        </h1>

        <dl className="mt-8 hidden space-y-3 font-mono text-xs text-muted md:block">
          {page.facts.map((item) => (
            <div
              key={item.label}
              className="flex justify-between gap-4 border-b border-line pb-2"
            >
              <dt>{item.label}</dt>
              <dd className="text-right text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-col gap-3 font-mono text-sm md:mt-8">
          {page.write.map((channel) => (
            <a
              key={channel.id}
              href={channel.href}
              className="text-cyan hover:underline"
              {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {channel.label} {channel.cta}
            </a>
          ))}
        </div>
      </aside>

      <div className="min-w-0 space-y-10 pb-8 md:space-y-16">
        <section>
          <h2 className="hidden font-mono text-[11px] uppercase tracking-widest text-cyan md:block">
            {page.presenceTitle}
          </h2>
          <ul className="md:mt-6">
            {page.channels.map((channel) => (
              <li key={channel.id} className="border-t border-line last:border-b">
                <a
                  href={channel.href}
                  className="group grid gap-1 py-4 md:grid-cols-[140px_minmax(0,1fr)_auto] md:items-baseline md:gap-6 md:py-5"
                  {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span className="font-medium tracking-tight group-hover:text-cyan">
                    {channel.label}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-mono text-xs text-violet">
                      {channel.handle}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">
                      {channel.hint}
                    </span>
                  </span>
                  <span className="font-mono text-xs text-violet">{channel.cta}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-cyan">
            {page.writeAbout.title}
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            {page.writeAbout.items.map((item, i) => (
              <li key={item}>
                <span className="mr-2 font-mono text-xs text-violet">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
