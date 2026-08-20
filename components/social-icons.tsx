import type { ReactNode } from "react";
import { site } from "@/lib/content";

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M4 6.5h16v11H4v-11Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m5 8 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTelegram() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M20.7 4.3 3.9 10.7c-1.1.4-1.1 1 0 1.3l4.2 1.3 1.6 5c.2.7.4.9 1.1.9.5 0 .7-.2 1-.6l2.3-3.8 4.4 3.3c.8.6 1.4.3 1.6-.7l2.9-13.5c.3-1.2-.4-1.8-1.3-1.6Z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M6.5 9.5H4V20h2.5V9.5ZM5.2 4C4.3 4 3.5 4.8 3.5 5.8S4.3 7.5 5.2 7.5 7 6.7 7 5.8 6.2 4 5.2 4ZM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6-1.1 0-1.7.7-2 1.4-.1.2-.1.6-.1.9V20H11s.1-9.2 0-10.2h2.5v1.6c.5-.8 1.5-2 3.7-2 2.6 0 4.6 1.7 4.6 5.4V20Z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function IconLeetCode() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M8 8 4.5 12 8 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 8h3.5M16 16h3.5M10.5 19.5 15 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCv() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M7 3.5h7.5L19 8v12.5H7V3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 3.5V8H19M9.5 12h5M9.5 15.5h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconNpm() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M4 4h16v16H4V4Zm3.2 3.2v9.6h4.8V8.8h3.2v8h3.2V7.2H7.2Z" />
    </svg>
  );
}

const items: { href: string; label: string; external: boolean; icon: ReactNode }[] =
  [
    { href: site.links.email, label: "Email", external: false, icon: <IconMail /> },
    {
      href: site.links.telegram,
      label: "Telegram",
      external: true,
      icon: <IconTelegram />,
    },
    {
      href: site.links.linkedin,
      label: "LinkedIn",
      external: true,
      icon: <IconLinkedIn />,
    },
    {
      href: site.links.github,
      label: "GitHub",
      external: true,
      icon: <IconGitHub />,
    },
    {
      href: site.links.leetcode,
      label: "LeetCode",
      external: true,
      icon: <IconLeetCode />,
    },
    {
      href: site.links.npm,
      label: "npm",
      external: true,
      icon: <IconNpm />,
    },
    {
      href: site.links.cv,
      label: "CV",
      external: true,
      icon: <IconCv />,
    },
  ];

export function SocialIcons() {
  return (
    <nav aria-label="Aloqa" className="flex flex-wrap gap-3">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-label={item.label}
          title={item.label}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-cyan/50 hover:text-cyan"
          {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
}
