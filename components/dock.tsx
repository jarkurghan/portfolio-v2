"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Asosiy" },
  { href: "/experience", label: "Tajriba" },
  { href: "/work", label: "Loyihalar" },
  { href: "/contact", label: "Aloqa" },
];

export function Dock() {
  const pathname = usePathname();

  return (
    <nav className="pointer-events-none fixed inset-x-0 bottom-3 z-40 flex justify-center px-3 md:bottom-5 md:px-4">
      <ul className="pointer-events-auto flex w-full max-w-md items-center justify-between gap-0.5 rounded-full border border-line bg-bg-elev/90 p-1 shadow-[0_0_40px_rgba(103,232,249,0.08)] backdrop-blur-xl md:w-auto md:max-w-none md:justify-center md:gap-1 md:p-1.5">
        {items.map((item) => {
          const path = item.href.split("#")[0];
          const active =
            item.href === "/"
              ? pathname === "/"
              : path !== "/" && pathname.startsWith(path);
          return (
            <li key={item.href} className="min-w-0 flex-1 md:flex-none">
              <Link
                href={item.href}
                className={`block rounded-full px-2 py-2 text-center font-mono text-[10px] uppercase tracking-wide transition-colors md:px-4 md:text-xs md:tracking-wider ${
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
