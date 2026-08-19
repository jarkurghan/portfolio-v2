"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/#now", label: "Now" },
  { href: "/#aloqa", label: "Aloqa" },
];

export function Dock() {
  const pathname = usePathname();

  return (
    <nav className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-4">
      <ul className="pointer-events-auto flex items-center gap-1 rounded-full border border-line bg-bg-elev/80 p-1.5 shadow-[0_0_40px_rgba(103,232,249,0.08)] backdrop-blur-xl">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : item.href.startsWith("/work") && pathname.startsWith("/work");
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                  active
                    ? "bg-cyan/15 text-cyan"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
