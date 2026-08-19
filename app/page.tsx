import Link from "next/link";
import { BentoCard } from "@/components/bento-card";
import { SkillMarquee } from "@/components/skill-marquee";
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
            Work
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
          <BentoCard
            key={project.slug}
            project={project}
            size={project.size}
          />
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
            Haqida
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Signal</h2>
        </div>
        <p className="whitespace-pre-line text-sm leading-7 text-muted">
          {about}
        </p>
      </section>

      <section className="mt-16">
        <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">
          Timeline
        </p>
        <ol className="mt-6 space-y-0">
          {experience.map((job, i) => (
            <li key={job.company} className="flex gap-6">
              <div className="flex w-10 flex-col items-center">
                <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_12px_var(--cyan)]" />
                {i < experience.length - 1 ? (
                  <span className="w-px flex-1 bg-line" />
                ) : null}
              </div>
              <div className="pb-10">
                <p className="font-mono text-xs text-muted">{job.period}</p>
                <h3 className="mt-1 text-lg font-medium">
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan"
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <p className="text-sm text-violet">{job.role}</p>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  {job.points[0]}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="aloqa"
        className="mt-8 rounded-3xl border border-line bg-bg-card p-8 md:p-12"
      >
        <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">
          Ping
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Aloqa</h2>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
          <a className="text-cyan hover:underline" href={site.links.email}>
            {site.email}
          </a>
          <a
            className="text-muted hover:text-cyan"
            href={site.links.telegram}
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
          <a
            className="text-muted hover:text-cyan"
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-muted hover:text-cyan"
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-muted hover:text-cyan"
            href={site.links.leetcode}
            target="_blank"
            rel="noreferrer"
          >
            LeetCode
          </a>
        </div>
      </section>
    </main>
  );
}
