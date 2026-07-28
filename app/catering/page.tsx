import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container, H2, Lead, Section } from "@/components/ui-basics";
import { InquiryForm } from "@/components/inquiry-form";
import { FaqSection } from "@/components/faq";
import { faqCatering } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: `Catering in ${site.region} — für Firmenfeiern & Hochzeiten`,
  description: `Catering in ${site.region} für Firmen und Hochzeiten: Buffet ab [25] €/Person, Menü, BBQ, Getränke-Pauschalen. Netto- und Bruttopreise, Angebot bis zum nächsten Werktag 12 Uhr.`,
};

/** Säulen-Seite Catering (Plan 5.7a) — B2B & Hochzeit, "Sie". Caterer-Schema. */
const catererJsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: `${site.name} — Catering`,
  servesCuisine: "Regional, BBQ, Buffet, Menü",
  telephone: site.phone,
  areaServed: `${site.serviceAreas.catering.label} um ${site.address.city}`,
};

export default function CateringPage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-gradient-to-b from-stone-50 to-stone-50 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Catering in {site.region} — für Firmenfeiern und Hochzeiten.
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Vom Buffet bis zum Menü — mit Personal, Getränken und Equipment. Sie feiern, wir liefern und servieren.
          </p>
        </Container>
      </div>

      <Section>
        <H2>Formate &amp; Preise</H2>
        <Lead>Nettopreise zzgl. gesetzl. MwSt. — Bruttowert jeweils daneben. {site.priceLogic.sie}</Lead>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Buffet", p: "ab [25] € netto", b: "[29,75] € brutto / Person", d: "Marktüblich 25–45 €" },
            { t: "Full-Service (Menü)", p: "ab [60] € netto", b: "[71,40] € brutto / Person", d: "Inkl. Service am Tisch" },
            { t: "Getränke-Pauschale", p: "ab [20] € netto", b: "[23,80] € brutto / Person", d: "Planungssicher, 4–5 Std." },
            { t: "Geschirr & Spülservice", p: "ab [3,50] € netto", b: "[4,17] € brutto / Person", d: "Komplett gedeckt" },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
              <p className="font-semibold">{x.t}</p>
              <p className="mt-1 text-lg font-bold text-amber-700 dark:text-amber-500">{x.p}</p>
              <p className="text-xs text-stone-500">{x.b}</p>
              <p className="mt-1 text-xs text-stone-500">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">
          Vegetarisch/vegan sind standardmäßig 20–30 % der Speisen — ohne Aufpreis. Weitere Bedürfnisse (glutenfrei,
          halal) nach Absprache. [BESTÄTIGEN]
        </p>
      </Section>

      <Section className="bg-stone-50 dark:bg-stone-900/40">
        <H2>Beispiel-Menüs</H2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {[
            { t: "Firmenfeier-Buffet", d: "[MENÜ 1 — KONKRETE GERICHTE DES UNTERNEHMERS]" },
            { t: "Hochzeits-Menü", d: "[MENÜ 2 — KONKRETE GERICHTE]" },
            { t: "BBQ / Grill-Buffet", d: "[MENÜ 3 — KONKRETE GERICHTE]" },
          ].map((m) => (
            <div key={m.t} className="rounded-xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
              <p className="font-semibold">{m.t}</p>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{m.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm">
          Liefergebiet: {site.serviceAreas.catering.label} um {site.address.city}. Für Firmenpakete mit Raum:{" "}
          <Link href="/firmenfeier" className="underline">Firmenfeier-Pakete (110-€-Freibetrag)</Link> · Für private
          Feiern: <Link href="/partyservice" className="underline">Partyservice</Link>
        </p>
      </Section>

      <Section id="anfrage-sektion">
        <H2>Catering anfragen</H2>
        <Lead>{site.responsePromise.sie}</Lead>
        <div className="mt-6 max-w-2xl">
          <InquiryForm
            funnel="b2b"
            submitLabel="Catering anfragen"
            promise={site.responsePromise.sie}
            fields={[
              { name: "name", label: "Ihr Name", required: true },
              { name: "email", label: "E-Mail", type: "email", required: true },
              { name: "date", label: "Wunschtermin", type: "date", required: true },
              { name: "personen", label: "Personenzahl", type: "number", required: true },
              { name: "format", label: "Format (optional)", type: "select", options: ["Buffet", "Menü", "BBQ/Grill", "Noch offen"] },
              { name: "phone", label: "Telefon (optional)", type: "tel" },
            ]}
          />
        </div>
      </Section>

      <FaqSection title="Häufige Fragen zum Catering" items={faqCatering} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catererJsonLd) }} />
    </>
  );
}
