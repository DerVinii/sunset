import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, H2, Lead, Section } from "@/components/ui-basics";
import { LogoPlatzhalter } from "@/components/media-platzhalter";
import { ReferenzenGrid } from "@/components/referenzen-grid";
import { KontaktCta } from "@/components/kontakt-cta";
import { Testimonials } from "@/components/testimonials";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Referenzen",
  description: `Projekte von ${site.name}: So dokumentieren wir Events, sobald die ersten gelaufen sind. Drei Beispielberichte zeigen den Aufbau.`,
};

export default function ReferenzenPage() {
  return (
    <>
      {/* 3.1 Page-Hero */}
      <div className="border-b border-stone-200 bg-stone-100/70 dark:border-stone-800 dark:bg-stone-900/40">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-500">
            Referenzen
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Unsere Projekte.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Wir sind neu, und deshalb steht hier noch kein echtes Event. Die drei Beispiele zeigen,
            wie wir jedes Projekt dokumentieren werden: Aufgabe, Lösung, Ergebnis, Kundenstimme.
            Nichts davon wird erfunden sein.
          </p>
        </Container>
      </div>

      {/* 3.2 Filterleiste + 3.3 Projekt-Grid */}
      <Section>
        <ReferenzenGrid />
      </Section>

      {/* 3.4 Kundenlogo-Wand */}
      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <Reveal>
          <H2>Kunden</H2>
          <Lead>
            Diese Wand füllt sich mit den Logos der Firmen, die bei uns gefeiert haben. Mit deren
            Erlaubnis, versteht sich.
          </Lead>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <LogoPlatzhalter key={n} nummer={n} />
          ))}
        </div>
      </Section>

      {/* 3.5 Testimonials */}
      <Testimonials />

      {/* 3.6 Kontakt-CTA */}
      <KontaktCta
        titel="Dein Event könnte das erste hier sein."
        text="Erzähl uns, was du vorhast. Dann steht in ein paar Monaten dein Projekt auf dieser Seite."
      />
    </>
  );
}
