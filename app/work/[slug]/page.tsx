import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/back-link";
import { formatRoles, projects } from "@/lib/content";
import { LOCALE_COOKIE, parseLocale } from "@/lib/locale";
import { getWorkChrome, getWorkProject } from "@/lib/messages/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const locale = parseLocale((await cookies()).get(LOCALE_COOKIE)?.value);
  const project = getWorkProject(locale, slug);
  const chrome = getWorkChrome(locale);
  if (!project) return { title: chrome.title };
  return { title: project.title, description: project.summary };
}

export default async function WorkSlugPage({ params }: Props) {
  const { slug } = await params;
  const locale = parseLocale((await cookies()).get(LOCALE_COOKIE)?.value);
  const project = getWorkProject(locale, slug);
  if (!project) notFound();

  const t = getWorkChrome(locale);

  return (
    <main className="mx-auto grid w-full max-w-6xl flex-1 gap-5 px-4 py-8 md:grid-cols-[240px_1fr] md:gap-12 md:px-8 md:py-10">
      <aside className="min-w-0 md:sticky md:top-8 md:w-[240px] md:max-w-[240px] md:self-start">
        <BackLink
          href="/work"
          className="inline-flex items-center font-mono text-xs text-muted transition-colors hover:text-cyan"
        >
          {t.back}
        </BackLink>

        <h1 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">{project.title}</h1>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mt-2 font-mono text-xs text-violet">
            {formatRoles(project.roles, t.roleLabel)}
          </span>
          <span className="mt-2 rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan">
            {t.kindLabel[project.kind]}
          </span>
        </div>
        {project.url || project.botUrl || project.repo || project.npmUrl ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-ink transition-colors hover:border-violet/50 hover:text-violet"
              >
                {t.live}
              </a>
            ) : null}
            {project.botUrl ? (
              <a
                href={project.botUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-ink transition-colors hover:border-violet/50 hover:text-violet"
              >
                {t.bot}
              </a>
            ) : null}
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-ink transition-colors hover:border-violet/50 hover:text-violet"
              >
                {t.github}
              </a>
            ) : null}
            {project.npmUrl ? (
              <a
                href={project.npmUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-ink transition-colors hover:border-violet/50 hover:text-violet"
              >
                {t.npm}
              </a>
            ) : null}
          </div>
        ) : null}
      </aside>

      <div className="space-y-8 pb-8 md:space-y-14">
        <p className="text-base leading-relaxed text-muted md:text-lg">{project.summary}</p>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-cyan">{t.purpose}</h2>
          <p className="mt-3 text-base leading-7 text-ink/90 md:leading-8">{project.purpose}</p>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-cyan">{t.learned}</h2>
          <ul className="mt-3 space-y-3 text-base leading-7 text-muted">
            {project.learned.map((item) => (
              <li key={item} className="relative pl-5">
                <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-violet" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-cyan">{t.stack}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 font-mono text-xs text-cyan shadow-[0_0_16px_rgba(103,232,249,0.12)]"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
