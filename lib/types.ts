export type ProjectKind = "ish" | "mahsulot" | "bot" | "oquv";

export type BentoSize = "lg" | "md" | "sm";

export type Project = {
  slug: string;
  title: string;
  year?: string;
  kind: ProjectKind;
  url?: string;
  repo?: string;
  summary: string;
  purpose: string;
  tasks: string[];
  stack: string[];
  learned: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  place?: string;
  url?: string;
  points: string[];
};
