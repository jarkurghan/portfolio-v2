import type { Metadata } from "next";
import { Timeline } from "@/components/timeline";
import { experience } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description: "Ish va o‘qish yo‘li — universitetdan hozirgi kungacha.",
};

export default function ExperiencePage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 md:px-8">
      <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">
        Timeline
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-6xl">
        Tajriba
      </h1>
      <div className="mt-10">
        <Timeline items={experience} detailed />
      </div>
    </main>
  );
}
