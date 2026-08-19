import Link from "next/link";
import { TiltCard } from "@/components/tilt-card";
import { kindLabel } from "@/lib/content";
import type { BentoSize, Project } from "@/lib/types";

const sizeClass: Record<BentoSize, string> = {
  lg: "md:col-span-2 md:row-span-2 min-h-[280px]",
  md: "md:col-span-1 min-h-[200px]",
  sm: "min-h-[160px]",
};

export function BentoCard({
  project,
  size,
}: {
  project: Project;
  size: BentoSize;
}) {
  return (
    <TiltCard className={sizeClass[size]}>
      <Link
        href={`/work/${project.slug}`}
        className="beam group flex h-full flex-col rounded-3xl border border-line bg-bg-card p-6 backdrop-blur-md"
      >
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted">
          <span className="text-cyan">{kindLabel[project.kind]}</span>
          <span>{project.year}</span>
        </div>
        <h3
          className={`mt-4 font-medium tracking-tight text-ink group-hover:text-cyan ${
            size === "lg" ? "text-3xl md:text-4xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
        <p className="mt-4 font-mono text-xs text-violet">open →</p>
      </Link>
    </TiltCard>
  );
}
