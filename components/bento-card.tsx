import Link from "next/link";
import { TiltCard } from "@/components/tilt-card";
import { kindLabel, formatRoles } from "@/lib/content";
import type { BentoSize, Project } from "@/lib/types";

const sizeClass: Record<BentoSize, string> = {
  lg: "md:col-span-2 md:row-span-2 md:min-h-[280px]",
  md: "md:col-span-1 md:min-h-[200px]",
  sm: "md:min-h-[160px]",
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
        className="beam group flex h-full min-h-0 flex-col rounded-2xl border border-line bg-bg-card p-4 md:rounded-3xl md:p-6"
      >
        <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest text-muted md:text-[11px]">
          <span className="truncate text-cyan">{kindLabel[project.kind]}</span>
          <span className="truncate text-right">{formatRoles(project.roles)}</span>
        </div>
        <h3
          className={`mt-3 font-medium tracking-tight text-ink group-hover:text-cyan md:mt-4 ${
            size === "lg" ? "text-xl md:text-4xl" : "text-lg md:text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted md:mt-3 md:line-clamp-none md:flex-1">
          {project.summary}
        </p>
        <p className="mt-3 font-mono text-xs text-violet md:mt-4">open →</p>
      </Link>
    </TiltCard>
  );
}
