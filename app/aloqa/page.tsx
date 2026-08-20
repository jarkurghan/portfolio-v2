import type { Metadata } from "next";
import { ContactLinks } from "@/components/contact-links";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aloqa",
  description: "Email, Telegram va boshqa kanallar.",
};

export default function AloqaPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 md:px-8">
      <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">
        Ping
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-6xl">
        Aloqa
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Yozish uchun Telegram yoki email qulay. Qisqa savol ham, ish taklifi
        ham — shu yerdan chiqadi.
      </p>
      <p className="mt-3 font-mono text-xs text-muted">
        {site.languages.join(" · ")}
      </p>
      <div className="mt-10 rounded-3xl border border-line bg-bg-card p-8 md:p-12">
        <ContactLinks />
      </div>
    </main>
  );
}
