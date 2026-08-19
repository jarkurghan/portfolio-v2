"use client";

import { useMemo, useState } from "react";
import { BentoCard } from "@/components/bento-card";
import { kindLabel, projects } from "@/lib/content";
import type { ProjectKind } from "@/lib/types";

const filters: Array<{ id: "all" | ProjectKind; label: string }> = [
  { id: "all", label: "All" },
  { id: "ish", label: kindLabel.ish },
  { id: "mahsulot", label: kindLabel.mahsulot },
  { id: "bot", label: kindLabel.bot },
  { id: "oquv", label: kindLabel.oquv },
];

export function WorkGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

  const list = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.kind === filter);
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((item) => {
          const count =
            item.id === "all"
              ? projects.length
              : projects.filter((p) => p.kind === item.id).length;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`rounded-full border px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                filter === item.id
                  ? "border-cyan bg-cyan/15 text-cyan"
                  : "border-line text-muted hover:text-ink"
              }`}
            >
              {item.label}
              <span className="ml-1.5 opacity-60">{count}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((project) => (
          <BentoCard key={project.slug} project={project} size="sm" />
        ))}
      </div>
    </div>
  );
}
