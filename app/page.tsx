import Link from "next/link";
import { BentoCard } from "@/components/bento-card";
import { SkillMarquee } from "@/components/skill-marquee";
import { SocialIcons } from "@/components/social-icons";
import { Timeline } from "@/components/timeline";
import { featuredSlugs, site } from "@/lib/content";
import { getRequestLocale } from "@/lib/locale-server";
import { getExperiencePage } from "@/lib/messages/experience";
import { getHomePage } from "@/lib/messages/home";
import { getNav } from "@/lib/messages/nav";
import { getWorkPage } from "@/lib/messages/work";

export default async function Home() {
  const locale = await getRequestLocale();
  const home = getHomePage(locale);
  const nav = getNav(locale);
  const work = getWorkPage(locale);
  const experience = getExperiencePage(locale);

  const featured = featuredSlugs
    .map((slug) => work.projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const jobs = experience.items.filter((job) => job.kind !== "education");

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-12 md:px-8 md:pb-16">
      <section className="flex flex-col justify-center py-6 md:min-h-[72vh] md:py-10">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-cyan">
          {home.role}
        </p>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl md:mt-6 md:text-7xl">
          {site.name}
        </h1>
        <p className="mt-2 font-mono text-sm text-violet">Frontend · Backend · Telegram Bot</p>
        <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
          <Link
            href="/work"
            className="rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            {home.projectsCta}
          </Link>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-5 py-2.5 text-sm text-ink hover:border-cyan/50"
          >
            GitHub
          </a>
        </div>
      </section>

      <section id="now" className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
        {featured.map((project) => (
          <BentoCard
            key={project.slug}
            project={project}
            size="sm"
            kindLabels={work.kindLabel}
            roleLabels={work.roleLabel}
            openLabel={work.open}
          />
        ))}
        <div className="rounded-2xl border border-line bg-bg-card p-4 md:col-span-3 md:rounded-3xl md:p-6">
          <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">Stack</p>
          <div className="mt-4">
            <SkillMarquee />
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:mt-16 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">
            {home.aboutEyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            {home.aboutTitle}
          </h2>
        </div>
        <p className="whitespace-pre-line text-sm leading-7 text-muted">{home.about}</p>
      </section>

      <section className="mt-10 md:mt-16">
        <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">Timeline</p>
        <Timeline items={jobs} />
      </section>

      <section className="mt-8 pb-4">
        <SocialIcons ariaLabel={nav.contactNav} locale={locale} />
      </section>
    </main>
  );
}
