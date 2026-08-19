import type { Metadata } from "next";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Work",
  description: "Ish, mahsulotlar, botlar va o‘rganish loyihalari.",
};

export default function WorkPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 md:px-8">
      <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">
        Index
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-6xl">
        Work
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Maqsad, vazifa, stack va shu ish nima o‘rgatgani — har bir sahifada.
      </p>
      <div className="mt-10">
        <WorkGrid />
      </div>
    </main>
  );
}
