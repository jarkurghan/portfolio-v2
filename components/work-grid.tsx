"use client";

import { useMemo, useState } from "react";
import { BentoCard } from "@/components/bento-card";
import { projectMatchesRole, projects, roleLabel } from "@/lib/content";
import type { ProjectRole } from "@/lib/types";

const filters: Array<{ id: "all" | ProjectRole; label: string }> = [
    { id: "all", label: "All" },
    { id: "frontend", label: roleLabel.frontend },
    { id: "backend", label: roleLabel.backend },
    { id: "fullstack", label: roleLabel.fullstack },
    { id: "bot", label: roleLabel.bot },
];

export function WorkGrid() {
    const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

    const list = useMemo(() => {
        if (filter === "all") return projects;
        return projects.filter((p) => projectMatchesRole(p, filter));
    }, [filter]);

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
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {list.map((project) => (
                    <BentoCard key={project.slug} project={project} size="sm" />
                ))}
            </div>
        </div>
    );
}
