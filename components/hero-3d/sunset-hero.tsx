"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";

/**
 * Wrapper für den 3D-Hero:
 * - Canvas wird lazy geladen (kein LCP-Blocker — der Text steht sofort)
 * - prefers-reduced-motion oder fehlendes WebGL → statischer Gradient-Fallback
 * - Der CSS-Verlauf liegt IMMER darunter, damit nie ein schwarzes Loch entsteht
 */
const SunsetScene = dynamic(() => import("./sunset-scene"), { ssr: false });

export function SunsetHero({ children }: { children: ReactNode }) {
  const [show3d, setShow3d] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) setShow3d(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-stone-950 text-stone-50">
      {/* Statischer Sunset-Verlauf als Basis + Fallback */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 118%, rgba(245,158,11,0.42) 0%, rgba(234,88,12,0.30) 30%, rgba(190,18,60,0.22) 52%, rgba(12,10,9,0) 78%), linear-gradient(180deg, #0c0a09 0%, #1c1210 55%, #2a1310 100%)",
        }}
      />
      {show3d && (
        <div className="absolute inset-0 opacity-90">
          <SunsetScene />
        </div>
      )}
      {/* Lesbarkeits-Schleier über der Szene, unter dem Text */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-stone-950/55 via-transparent to-stone-950/70" />
      <div className="relative">{children}</div>
    </section>
  );
}
