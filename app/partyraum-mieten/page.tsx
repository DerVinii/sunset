import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container, H2, Lead, Section } from "@/components/ui-basics";
import { AvailabilityCheck } from "@/components/availability-check";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: `Partyraum mieten in ${site.region} — Raum für 30 bis 80 Personen`,
  description: `Partyraum mieten in ${site.region}: Platz für 30–80 Personen, Tische und Stühle inklusive, klare Miete ab [PREIS] €, Musik bis [UHRZEIT]. Termin sofort prüfen.`,
};

/**
 * Schlanke Ads-/SEO-Landingpage (Plan 5.4a) für die private Suchintention
 * "partyraum mieten [ort]" — bewusst einfache Sprache, Du-Ton, Bruttopreise.
 */
export default function PartyraumPage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-gradient-to-b from-amber-50 to-stone-50 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Partyraum mieten in [ORT] — für 30 bis 80 Gäste.
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Feiern ohne Stress mit den Nachbarn: Raum, Tische, Stühle und Küche — Miete ab [PREIS] €, alles inklusive MwSt.
          </p>
          <div id="termincheck" className="mt-8 max-w-xl scroll-mt-24">
            <AvailabilityCheck calendar="location" labelSubject="Unser Partyraum" tone="du" ctaTargetId="anfrage" />
          </div>
        </Container>
      </div>

      <Section>
        <H2>Was du bekommst</H2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Platz für 30 / 50 / 80 Personen", d: "Je nach Bestuhlung — sag uns einfach deine Gästezahl." },
            { t: "Miete ab [PREIS] €", d: "Endreinigung: [PREIS] € Pauschale. Kaution: [BETRAG] €. Keine versteckten Kosten." },
            { t: "Tische & Stühle inklusive", d: "Plus Küche/Theke zum Mitbenutzen. [AUSSTATTUNG BESTÄTIGEN]" },
            { t: "Musik bis [UHRZEIT]", d: "Drinnen feiern ohne Zeitlimit — draußen gilt ab 22 Uhr Nachtruhe." },
            { t: "[ANZAHL] Parkplätze", d: "Direkt am Haus — deine Gäste müssen nicht suchen." },
            { t: "Essen & Getränke dazu?", d: "Partyservice und Bierwagen bekommst du bei uns gleich mit." },
          ].map((f) => (
            <div key={f.t} className="rounded-xl border border-stone-200 p-5 dark:border-stone-800">
              <p className="font-semibold">{f.t}</p>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{f.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">
          Mehr Details zur Location:{" "}
          <Link href="/location" className="underline">Fakten, Grundriss &amp; Technik</Link> · Essen dazu:{" "}
          <Link href="/partyservice" className="underline">Partyservice</Link> · Ausstattung:{" "}
          <Link href="/mieten" className="underline">Equipment-Verleih</Link>
        </p>
      </Section>

      <Section id="anfrage-sektion" className="bg-stone-50 dark:bg-stone-900/40">
        <H2>Raum anfragen</H2>
        <Lead>{site.responsePromise.duSingular}</Lead>
        <div className="mt-6 max-w-2xl">
          <InquiryForm
            funnel="privat"
            submitLabel="Partyraum anfragen"
            promise={site.responsePromise.duSingular}
            fields={[
              { name: "name", label: "Dein Name", required: true },
              { name: "email", label: "E-Mail", type: "email", required: true },
              { name: "date", label: "Wunschtermin", type: "date", required: true },
              { name: "gaeste", label: "Gästezahl (ungefähr)", type: "number", required: true },
              { name: "phone", label: "Telefon (freiwillig)", type: "tel" },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
