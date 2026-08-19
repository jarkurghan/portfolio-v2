import Link from "next/link";
import { site } from "@/lib/content";

export function TopBar() {
  return (
    <header className="relative z-20 flex items-center justify-between px-5 py-5 md:px-8">
      <Link href="/" className="font-mono text-sm tracking-tight text-ink">
        nazirov<span className="text-cyan">.</span>dev
      </Link>
      <a
        href={site.links.email}
        className="font-mono text-xs text-muted transition-colors hover:text-cyan"
      >
        {site.email}
      </a>
    </header>
  );
}
