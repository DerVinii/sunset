import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, H2, Lead, Section } from "@/components/ui-basics";

export const metadata: Metadata = {
  title: `Über uns — die Gründer hinter ${site.name}`,
  description: `Wer hinter ${site.name} steht: Gründer-Story, Erfahrung in Gastronomie & Events, Zertifikate und der Anspruch, Feiern in ${site.region} einfacher zu machen.`,
};

/** Zentrale Kaltstart-Vertrauensseite (Plan 5.11). Alle Fakten [VOM UNTERNEHMER] — nichts erfinden. */
export default function UeberUnsPage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-gradient-to-b from-amber-50 to-stone-50 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Wir sind [NAMEN] — und wir glauben, dass Feiern einfacher gehen muss.
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            [GRÜNDER-STORY: Warum gegründet, regionale Wurzeln in {site.region}, Werdegang in Gastronomie &amp; Events —
            vom Unternehmer zu liefern, nichts erfinden.]
          </p>
        </Container>
      </div>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-100 text-sm text-stone-500 dark:border-stone-700 dark:bg-stone-900">
            [GRÜNDER-FOTO — echt, kein Stock]
          </div>
          <div>
            <H2>Erfahrung statt Behauptungen</H2>
            <ul className="mt-4 space-y-3 text-sm text-stone-700 dark:text-stone-300">
              <li>
                <strong>[NAME 1]</strong> — [BERUFLICHE STATIONEN / JAHRE IN GASTRO &amp; EVENTS]
              </li>
              <li>
                <strong>[NAME 2]</strong> — [BERUFLICHE STATIONEN]
              </li>
            </ul>
            <ul className="mt-6 space-y-2 text-sm">
              <li>✓ Gastro-Hygienenachweis (HACCP) [NACHWEIS]</li>
              <li>✓ Betriebshaftpflicht [POLICE]</li>
              <li>✓ Eingetragenes Gewerbe: Gastronomie, Eventservice, Vermietung [GEWERBEANSCHLUSS]</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-stone-50 dark:bg-stone-900/40">
        <H2>So arbeiten wir</H2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { t: "Ehrliche Preise", d: "Richtpreise online, Festpreis im Angebot. Kein Kostenposten taucht erst auf der Rechnung auf." },
            { t: "Eine Ansprechperson", d: "Vom ersten Anruf bis zum letzten Glas — ihr sprecht immer mit demselben Menschen." },
            { t: "Ehrliche Bilder", d: "Wir zeigen nur unsere echten Räume — als gelabelte 3D-Visualisierung oder echte Fotos. Keine fremden Eventfotos." },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
              <p className="font-semibold">{x.t}</p>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <H2>Vorher / Nachher</H2>
        <Lead>Leerer Raum → fertiges Event. So sieht unsere Arbeit aus (Fotos aus unseren Pilot-Events):</Lead>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {["Vorher: leerer Saal", "Nachher: eingedeckt & beleuchtet"].map((l) => (
            <div key={l} className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-100 text-sm text-stone-500 dark:border-stone-700 dark:bg-stone-900">
              [{l} — PILOT-EVENT-FOTO]
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-stone-500">
          Stimmen unserer ersten Kunden erscheinen hier, sobald die Pilot-Events gelaufen sind — echt und mit Einverständnis, keine gekauften Bewertungen.
        </p>
      </Section>
    </>
  );
}
