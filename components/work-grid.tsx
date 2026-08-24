"use client";

import { useMemo, useState } from "react";
import { BentoCard } from "@/components/bento-card";
import { projectMatchesRole } from "@/lib/content";
import type { Project, ProjectKind, ProjectRole } from "@/lib/types";

export function WorkGrid({
  projects,
  filters,
  kindLabel,
  roleLabel,
  openLabel,
}: {
  projects: Project[];
  filters: Array<{ id: "all" | ProjectRole; label: string }>;
  kindLabel: Record<ProjectKind, string>;
  roleLabel: Record<ProjectRole, string>;
  openLabel: string;
}) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

  const list = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => projectMatchesRole(p, filter));
  }, [filter, projects]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
              filter === item.id ? "border-cyan bg-cyan/15 text-cyan" : "border-line text-muted hover:text-ink"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:mt-8 lg:grid-cols-3">
        {list.map((project) => (
          <BentoCard
            key={project.slug}
            project={project}
            size="sm"
            kindLabels={kindLabel}
            roleLabels={roleLabel}
            openLabel={openLabel}
          />
        ))}
      </div>
    </div>
  );
}
