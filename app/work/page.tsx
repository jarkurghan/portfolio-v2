import type { Metadata } from "next";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Loyihalar",
  description: "Ish, mahsulotlar, botlar va o‘rganish loyihalari.",
};

export default function WorkPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-8 md:py-10">
      <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">
        Index
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-6xl">
        Loyihalar
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Vazifa, nima o‘rgatgani va stack — har bir sahifada.
      </p>
      <div className="mt-10">
        <WorkGrid />
      </div>
    </main>
  );
}
