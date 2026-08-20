import { site } from "@/lib/content";

const channels = [
  { href: site.links.email, label: site.email, external: false },
  { href: site.links.telegram, label: "Telegram", external: true },
  { href: site.links.linkedin, label: "LinkedIn", external: true },
  { href: site.links.github, label: "GitHub", external: true },
  { href: site.links.leetcode, label: "LeetCode", external: true },
  { href: site.links.npm, label: "npm", external: true },
  { href: site.links.cv, label: "CV", external: true },
];

export function ContactLinks() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
      {channels.map((item, i) => (
        <a
          key={item.href}
          className={
            i === 0
              ? "text-cyan hover:underline"
              : "text-muted hover:text-cyan"
          }
          href={item.href}
          {...(item.external
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
