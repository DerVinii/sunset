"use client";

import { useEffect, useRef } from "react";
import { mountScrollWorld } from "@/lib/scroll-world/scrub-engine";

/**
 * Scroll-World "Ein Tag mit Sunset Events" (Scroll-World-Skill, Architektur B):
 * Scrollen scrubbt eine durchgehende Kamerafahrt durch 5 Clay-Diorama-Szenen —
 * vom späten Nachmittag (Location) bis Mitternacht (Firmenfeier + CTA).
 *
 * Assets liegen in /public/world/. Aktuell: PLATZHALTER-Renderings (ffmpeg,
 * 0 Credits) — die Higgsfield-Generierung ersetzt sie 1:1 bei gleichen Dateinamen
 * (Prompts + Ablauf: world-gen/README.md). Copy folgt dem validierten Plan
 * (einfache Sprache, Ab-Preise als [PLATZHALTER], CTA → #termincheck).
 */

const worldConfig = {
  brand: { name: "Sunset Events", href: "#welt" },
  hint: "Scrollen — wir fliegen los",
  nav: true,
  atmosphere: true,
  diveScroll: 1.25,
  connScroll: 0.85,
  sections: [
    {
      id: "location",
      label: "Location",
      still: "/world/still-1.png",
      clip: "/world/dive-1.mp4",
      accent: "#f59e0b",
      eyebrow: "Später Nachmittag",
      title: "Ein Ort, an dem alles passt.",
      body: "Unsere Location in [ORT]: Platz für 30 bis 120 Gäste — mit Technik, Tanzfläche und Parkplätzen direkt am Haus.",
      tags: ["Bis [120] Gäste", "Technik inklusive"],
      scroll: 1.5,
      linger: 0.4,
    },
    {
      id: "catering",
      label: "Catering",
      still: "/world/still-2.png",
      clip: "/world/dive-2.mp4",
      accent: "#ea580c",
      eyebrow: "Goldene Stunde",
      title: "Essen, über das man noch lange redet.",
      body: "Buffet, Menü oder BBQ — frisch aus unserer Küche. Vegetarisch ist immer dabei.",
      tags: ["Buffet · Menü · BBQ", "ab [25] € pro Person"],
    },
    {
      id: "garten",
      label: "Bierwagen",
      still: "/world/still-3.png",
      clip: "/world/dive-3.mp4",
      accent: "#d97706",
      eyebrow: "Sonnenuntergang",
      title: "Geliefert. Aufgebaut. Eingeschenkt.",
      body: "Bierwagen, Zapfanlage, Garnituren und Zelte — wir bringen die Party in deinen Garten.",
      tags: ["Bierwagen ab [250] €/Tag", "Aufbau inklusive"],
    },
    {
      id: "hochzeit",
      label: "Hochzeit",
      still: "/world/still-4.png",
      clip: "/world/dive-4.mp4",
      accent: "#be123c",
      eyebrow: "Blaue Stunde",
      title: "Euer Tag. Unser Job.",
      body: "Freie Trauung im Garten, festlicher Saal, ein Festpreis — und ein Probeessen, bevor ihr euch entscheidet.",
      tags: ["Festpreis im Angebot", "Probeessen inklusive"],
      scroll: 1.5,
      linger: 0.45,
    },
    {
      id: "firmenfeier",
      label: "Firmenfeier",
      still: "/world/still-5.png",
      clip: "/world/dive-5.mp4",
      accent: "#f59e0b",
      eyebrow: "Mitternacht",
      title: "Feiern, bis der Chef tanzt.",
      body: "Firmenfeiern komplett organisiert — budgetsicher kalkuliert für den 110-€-Freibetrag. Angebot bis zum nächsten Werktag, 12:00 Uhr.",
      tags: ["Alles aus einer Hand"],
      scroll: 1.6,
      linger: 0.4,
      cta: {
        primary: { label: "Verfügbarkeit prüfen", href: "#termincheck" },
        secondary: { label: "Unsere Pakete ansehen", href: "/firmenfeier" },
      },
    },
  ],
  connectors: ["/world/conn-1.mp4", "/world/conn-2.mp4", "/world/conn-3.mp4", "/world/conn-4.mp4"],
};

export function ScrollWorld() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.swMounted) return;
    el.dataset.swMounted = "1";
    mountScrollWorld(el, worldConfig);
    return () => {
      // Best-effort-Aufräumen (die Engine bringt kein Unmount-API mit):
      document.getElementById("sw-css")?.remove();
      el.replaceChildren();
      delete el.dataset.swMounted;
    };
  }, []);

  return <div id="welt" ref={ref} className="sw-root" />;
}
