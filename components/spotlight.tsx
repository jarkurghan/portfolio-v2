"use client";

import { useEffect } from "react";

export function Spotlight() {
  useEffect(() => {
    const root = document.documentElement;
    const onMove = (e: PointerEvent) => {
      root.style.setProperty("--spot-x", `${e.clientX}px`);
      root.style.setProperty("--spot-y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return <div className="spotlight" aria-hidden />;
}
