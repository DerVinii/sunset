"use client";

import { useEffect, useRef } from "react";
import { mountScrollWorld } from "@/lib/scroll-world/scrub-engine";

/**
 * Scroll-World "Ein Tag mit Sunset Events" (Scroll-World-Skill, Architektur B):
 * Scrollen scrubbt eine durchgehende Kamerafahrt durch 5 Clay-Diorama-Szenen —
 * vom späten Nachmittag (Location) bis Mitternacht (Firmenfeier + CTA).
 *
 * Assets liegen in /public/world/ (Higgsfield, seedance_2_0 in 1080p):
 * dive-N.mp4 = Kameraflug in die Szene, conn-N.mp4 = Überflug zur nächsten,
 * *-m.mp4 = derselbe Clip in 720p/15 fps für unterwegs (reine ffmpeg-Umkodierung).
 * Ablauf und Prompts: world-gen/README.md. Copy folgt dem validierten Plan
 * (einfache Sprache, Ab-Preise als [PLATZHALTER], CTA → #termincheck).
 */

const worldConfig = {
  // Kein eigener Balken: der Seiten-Header (Header.tsx) ist auf allen Seiten derselbe und
  // liegt über der Welt. Zwei Kopfleisten übereinander wären doppelt und verdecken sich.
  // Wegweiser innerhalb der Welt sind die Punkte am rechten Rand.
  brand: null,
  nav: false,
  progress: false, // Fortschritt zeigen die Punkte am rechten Rand
  hint: "Scrollen — wir fliegen los",
  atmosphere: true,
  diveScroll: 1.25,
  connScroll: 0.85,
  crossfade: 0.16,
  sections: [
    {
      id: "location",
      label: "Location",
      still: "/world/still-1.webp",
      stillMobile: "/world/still-1-m.webp",
      clip: "/world/dive-1.mp4",
      clipMobile: "/world/dive-1-m.mp4",
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
      still: "/world/still-2.webp",
      stillMobile: "/world/still-2-m.webp",
      clip: "/world/dive-2.mp4",
      clipMobile: "/world/dive-2-m.mp4",
      accent: "#ea580c",
      eyebrow: "Goldene Stunde",
      title: "Essen, über das man noch lange redet.",
      body: "Buffet, Menü oder BBQ — frisch aus unserer Küche. Vegetarisch ist immer dabei.",
      tags: ["Buffet · Menü · BBQ", "ab [25] € pro Person"],
    },
    {
      id: "garten",
      label: "Bierwagen",
      still: "/world/still-3.webp",
      stillMobile: "/world/still-3-m.webp",
      clip: "/world/dive-3.mp4",
      clipMobile: "/world/dive-3-m.mp4",
      accent: "#d97706",
      eyebrow: "Sonnenuntergang",
      title: "Geliefert. Aufgebaut. Eingeschenkt.",
      body: "Bierwagen, Zapfanlage, Garnituren und Zelte — wir bringen die Party in deinen Garten.",
      tags: ["Bierwagen ab [250] €/Tag", "Aufbau inklusive"],
    },
    {
      id: "hochzeit",
      label: "Hochzeit",
      still: "/world/still-4.webp",
      stillMobile: "/world/still-4-m.webp",
      clip: "/world/dive-4.mp4",
      clipMobile: "/world/dive-4-m.mp4",
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
      still: "/world/still-5.webp",
      stillMobile: "/world/still-5-m.webp",
      clip: "/world/dive-5.mp4",
      clipMobile: "/world/dive-5-m.mp4",
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
  // Handy-Satz: dieselben Aufnahmen in 720p/15 fps (ffmpeg-Umkodierung der Master,
  // keine Neugenerierung) — 15 statt 71 MB, damit die Clips unterwegs rechtzeitig da sind.
  connectorsMobile: ["/world/conn-1-m.mp4", "/world/conn-2-m.mp4", "/world/conn-3-m.mp4", "/world/conn-4-m.mp4"],
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

  // Der Seiten-Header ist 65 px hoch (h-16 + Trennlinie) und halbtransparent. Die Welt
  // wird um genau diese Höhe hochgezogen und läuft darunter durch — sonst startete die
  // Bühne zu tief und der Scroll-Hinweis am unteren Rand wäre beim Laden abgeschnitten.
  return <div id="welt" ref={ref} className="sw-root -mt-[65px]" />;
}
