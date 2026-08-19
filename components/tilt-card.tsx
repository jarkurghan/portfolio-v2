"use client";

import { type ReactNode, useRef } from "react";

export function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`tilt-wrap h-full ${className}`}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--ry", `${px * 10}deg`);
        el.style.setProperty("--rx", `${-py * 10}deg`);
      }}
      onPointerLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty("--ry", "0deg");
        el.style.setProperty("--rx", "0deg");
      }}
    >
      <div className="tilt-card h-full">{children}</div>
    </div>
  );
}
