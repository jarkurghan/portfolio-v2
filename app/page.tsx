import Link from "next/link";
import { BentoCard } from "@/components/bento-card";
import { SkillMarquee } from "@/components/skill-marquee";
import { SocialIcons } from "@/components/social-icons";
import { Timeline } from "@/components/timeline";
import {
  about,
  experience,
  featuredProjects,
  site,
} from "@/lib/content";

export default function Home() {
  const featured = featuredProjects();

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 pb-16 md:px-8">
      <section className="flex min-h-[72vh] flex-col justify-center py-10">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-cyan">
          {site.role}
        </p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
          {site.name}
        </h1>
        <p className="mt-2 font-mono text-sm text-violet">Frontend · Backend · Telegram Bot</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Loyihalar
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

      <section id="now" className="grid gap-4 md:grid-cols-3">
        {featured.map((project) => (
          <BentoCard key={project.slug} project={project} size="sm" />
        ))}
        <div className="rounded-3xl border border-line bg-bg-card p-6 md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">
            Stack
          </p>
          <div className="mt-4">
            <SkillMarquee />
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">
            Men haqimda
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Qisqacha</h2>
        </div>
        <p className="whitespace-pre-line text-sm leading-7 text-muted">
          {about}
        </p>
      </section>

      <section className="mt-16">
        <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">
          Timeline
        </p>
        <Timeline
          items={experience.filter((job) => job.kind !== "education")}
        />
      </section>

      <section className="mt-8 pb-4">
        <SocialIcons />
      </section>
    </main>
  );
}
