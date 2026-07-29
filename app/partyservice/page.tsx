import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container, H2, Lead, Section } from "@/components/ui-basics";
import { InquiryForm } from "@/components/inquiry-form";
import { FaqSection } from "@/components/faq";
import { faqCatering } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: `Partyservice in ${site.region}: Buffet liefern lassen`,
  description: `Partyservice in ${site.region}: Buffet für Geburtstag, Jubiläum oder Vereinsfest, geliefert oder zum Abholen. Buffet für 50 Gäste ab [PREIS] €, alles inkl. MwSt.`,
};

/**
 * Säulen-Seite Partyservice (Plan 5.7b): privat/ländlich, "Du".
 * Bewusst eigene Seite mit eigener Intention (kein Duplicate Content zu /catering).
 */
export default function PartyservicePage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-gradient-to-b from-amber-50 to-stone-50 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Partyservice in {site.region}, gutes Essen für deine Feier.
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Buffet zum Liefern oder Abholen, für Geburtstag, Jubiläum, Vereinsfest oder die Feier im Garten.
            Alle Preise inkl. MwSt.
          </p>
        </Container>
      </div>

      <Section>
        <H2>Was auf den Tisch kommt</H2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { t: "Buffet klassisch", p: "ab [X] € / Person", d: "Herzhaft & gutbürgerlich: [BEISPIELGERICHTE]" },
            { t: "Grillpakete", p: "ab [X] € / Person", d: "Vom Rost, mit Salaten und Beilagen" },
            { t: "Gartenparty-Komplett", p: "ab [X] €", d: "Essen + Bierwagen + Garnituren, geliefert & aufgebaut" },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
              <p className="font-semibold">{x.t}</p>
              <p className="mt-1 text-lg font-bold text-amber-700 dark:text-amber-500">{x.p}</p>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
          Beispiel: Buffet für 50 Gäste ab [PREIS] €, geliefert, warmgehalten, mit Geschirr wenn du willst.
        </p>
      </Section>

      <Section className="bg-stone-50 dark:bg-stone-900/40">
        <H2>Wie viele Getränke brauchst du?</H2>
        <Lead>
          Faustregel für 6 Stunden Feier: 1 bis 1,5 Liter Alkoholfreies plus etwa 1 Liter Bier oder Wein pro Person.
          Oder du nimmst unsere Getränke-Pauschale: fester Preis pro Kopf, wir kümmern uns um Nachschub und Kühlung.
        </Lead>
        <p className="mt-4 text-sm">
          Dazu passt: <Link href="/mieten" className="underline">Bierwagen &amp; Zapfanlage mieten</Link> ·{" "}
          <Link href="/partyraum-mieten" className="underline">Partyraum mieten</Link>
        </p>
      </Section>

      <Section id="anfrage-sektion">
        <H2>Partyservice anfragen</H2>
        <Lead>{site.responsePromise.duSingular}</Lead>
        <div className="mt-6 max-w-2xl">
          <InquiryForm
            funnel="privat"
            submitLabel="Partyservice anfragen"
            promise={site.responsePromise.duSingular}
            fields={[
              { name: "name", label: "Dein Name", required: true },
              { name: "email", label: "E-Mail", type: "email", required: true },
              { name: "date", label: "Wunschtermin", type: "date", required: true },
              { name: "gaeste", label: "Gästezahl (ungefähr)", type: "number", required: true },
              { name: "lieferung", label: "Liefern oder abholen? (optional)", type: "select", options: ["Bitte liefern", "Ich hole ab", "Noch offen"] },
              { name: "phone", label: "Telefon (freiwillig)", type: "tel" },
            ]}
          />
        </div>
        <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">
          Oder ruf an: {site.phoneDisplay} ({site.phoneHours} persönlich, sonst Mailbox mit Rückruf bis zum nächsten Werktag, 12:00 Uhr).
        </p>
      </Section>

      <FaqSection
        title="Häufige Fragen zum Partyservice"
        items={[faqCatering[2], faqCatering[3], faqCatering[8], faqCatering[4], faqCatering[6], faqCatering[5]]}
      />
    </>
  );
}
