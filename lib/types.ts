export type ProjectKind = "ish" | "mahsulot" | "bot" | "oquv";

export type ProjectRole = "frontend" | "backend" | "fullstack" | "bot";

export type BentoSize = "lg" | "md" | "sm";

export type Project = {
  slug: string;
  title: string;
  kind: ProjectKind;
  roles: ProjectRole[];
  url?: string;
  repo?: string;
  summary: string;
  purpose: string;
  stack: string[];
  learned: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  definition?: string;
  place?: string;
  url?: string;
  points: string[];
  kind?: "work" | "education";
};
