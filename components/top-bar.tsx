import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";

export function TopBar() {
  return (
    <header className="relative z-20 flex items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-5">
      <Link href="/" className="shrink-0 font-mono text-sm tracking-tight text-ink">
        nazirov<span className="text-cyan">.</span>dev
      </Link>
      <LanguageSwitcher />
    </header>
  );
}
