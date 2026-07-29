import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container, H2, Lead, Section } from "@/components/ui-basics";
import { AvailabilityCheck } from "@/components/availability-check";
import { FaqSection } from "@/components/faq";
import { faqLocation } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: `Eventlocation in [ORT], ${site.region}, Platz für [30]–[120] Gäste`,
  description: `Eventlocation mieten in ${site.region}: Kapazitäten, Technik, Parkplätze, Preise, alle Fakten auf einen Blick. Tagesmiete ab [PREIS] €, transparente Endreinigungs-Pauschale.`,
};

/** Säulen-Seite Location (Plan 5.6): harte Fakten, EventVenue-Schema. */
const eventVenueJsonLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: `${site.name}, Eventlocation`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressRegion: site.region,
    addressCountry: "DE",
  },
  maximumAttendeeCapacity: "[KAPAZITÄT]",
  telephone: site.phone,
};

export default function LocationPage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-gradient-to-b from-stone-50 to-stone-50 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Eventlocation in [ORT], Platz für [30]–[120] Gäste.
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Alle Fakten auf einen Blick: Kapazität, Technik, Preise. Keine Überraschungen.
          </p>
          <div className="mt-6 flex aspect-[21/9] items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-100 text-sm text-stone-500 dark:border-stone-700 dark:bg-stone-900">
            3D-Visualisierung / Fotos der Location [BILDMATERIAL]
          </div>
        </Container>
      </div>

      <Section>
        <H2>Die Fakten</H2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-800">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Kapazität Bankett (Tische & Stühle)", "[X] Personen"],
                ["Kapazität Stehempfang", "[Y] Personen"],
                ["Kapazität mit Tanzfläche", "[Z] Personen"],
                ["Fläche", "[X] m²"],
                ["Technik", "Tonanlage, Funkmikrofone, Beamer & Leinwand [BESTAND BESTÄTIGEN]"],
                ["Strom", "230 V + Starkstrom CEE 16A/32A [VERFÜGBARKEIT]"],
                ["Parkplätze", "[ANZAHL] direkt am Haus"],
                ["Barrierefreiheit", "Stufenloser Zugang, Rollstuhl-WC [BESTÄTIGEN]"],
                ["Musik / Lärmschutz", "Innen ohne Zeitlimit, außen bis 22:00 Uhr [AUFLAGEN]"],
                ["Deko-Zugang", "Am Feiertag ab 10:00 Uhr, Vorabend nach Absprache"],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-stone-100 last:border-0 dark:border-stone-800/60">
                  <td className="p-3 font-medium">{k}</td>
                  <td className="p-3 text-stone-600 dark:text-stone-300">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="bg-stone-50 dark:bg-stone-900/40">
        <H2>Preise, transparent</H2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { t: "Grundmiete", p: "ab [PREIS] €", d: "[Wochentag/Wochenende-Staffel]" },
            { t: "Endreinigung", p: "[PREIS] € Pauschale", d: "Steht von Anfang an im Angebot" },
            { t: "Kaution", p: "[BETRAG] €", d: "Zurück binnen 7 Tagen nach schadenfreier Übergabe" },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
              <p className="font-semibold">{x.t}</p>
              <p className="mt-1 text-xl font-bold text-amber-700 dark:text-amber-500">{x.p}</p>
              <p className="mt-1 text-xs text-stone-500">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">{site.priceLogic.sie}</p>
        <p className="mt-4 text-sm">
          Für private Geburtstage &amp; Familienfeiern:{" "}
          <Link href="/partyraum-mieten" className="underline">Partyraum für 30–80 Gäste</Link> · Raum + Essen kombinieren:{" "}
          <Link href="/catering" className="underline">Catering</Link>
        </p>
      </Section>

      <Section id="termincheck">
        <H2>Wunschtermin prüfen</H2>
        <div className="mt-6 max-w-xl">
          <AvailabilityCheck calendar="location" labelSubject="Unsere Location" tone="sie" />
        </div>
      </Section>

      <FaqSection title="Häufige Fragen zur Location" items={faqLocation} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventVenueJsonLd) }} />
    </>
  );
}
