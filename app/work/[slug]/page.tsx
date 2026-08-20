import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, kindLabel, projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Loyihalar" };
  return { title: project.title, description: project.summary };
}

export default async function WorkSlugPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="mx-auto grid w-full max-w-6xl flex-1 gap-12 px-5 py-10 md:grid-cols-[240px_1fr] md:px-8">
      <aside className="md:sticky md:top-8 md:self-start">
        <Link
          href="/work"
          className="font-mono text-xs text-muted hover:text-cyan"
        >
          ← loyihalar
        </Link>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-cyan">
          {kindLabel[project.kind]}
        </p>
        {project.year ? (
          <p className="mt-2 font-mono text-xs text-muted">{project.year}</p>
        ) : null}
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <div className="mt-6 flex flex-col gap-2 font-mono text-xs">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="text-cyan hover:underline"
            >
              live →
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-violet hover:underline"
            >
              repo →
            </a>
          ) : null}
        </div>
      </aside>

      <div className="space-y-14 pb-8">
        <p className="text-lg leading-relaxed text-muted">{project.summary}</p>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-cyan">
            Maqsad
          </h2>
          <p className="mt-3 text-base leading-8 text-ink/90">{project.purpose}</p>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-cyan">
            Vazifa
          </h2>
          <ul className="mt-3 space-y-3 text-base leading-7 text-muted">
            {project.tasks.map((task) => (
              <li key={task} className="relative pl-5">
                <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-violet" />
                {task}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-cyan">
            Stack
          </h2>
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

        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-cyan">
            Nima o‘rgatdi
          </h2>
          <p className="mt-3 text-base leading-8 text-muted">{project.learned}</p>
        </section>
      </div>
    </main>
  );
}
