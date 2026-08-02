import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, CtaButton, H2, Lead, Section } from "@/components/ui-basics";
import { FaqSection } from "@/components/faq";
import { faqLocation } from "@/lib/faq-data";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: `Firmenfeier in ${site.city}: Raum, Buffet und Programm`,
  description: `Firmenfeier bei ${site.name} in ${site.city}: Innenbereich für rund 100 Gäste, großer Außenhof, Buffet aus eigenem Haus, dazu Boxautomat und Kickertisch.`,
};

export default function FirmenfeierPage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Firmenfeier in {site.city}.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Platz für rund 100 Gäste im Innenbereich, ein großer Hof davor und das Buffet aus demselben Haus. Sie
            organisieren eine Feier, keine Lieferkette.
          </p>
          <div className="mt-7">
            <CtaButton href="#anfrage">Anfrage stellen</CtaButton>
          </div>
        </Container>
      </div>

      <Section>
        <H2>Warum das für eine Betriebsfeier funktioniert</H2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "Ein Ansprechpartner",
              d: "Raum, Essen und Ausstattung laufen über dieselbe Stelle. Sie müssen nicht zwischen Location, Caterer und Verleih vermitteln, wenn sich etwas ändert.",
            },
            {
              t: "Der Hof entlastet den Saal",
              d: "Empfang draußen, Essen drinnen. Das nimmt Druck aus dem Raum, gerade wenn alle gleichzeitig ankommen.",
            },
            {
              t: "Es gibt etwas zu tun",
              d: "Boxautomat und Kickertisch stehen bereit. Erfahrungsgemäß rettet das den Teil des Abends, an dem die Reden vorbei sind und die Tanzfläche noch leer ist.",
            },
            {
              t: "Getränke ohne Zusatzanbieter",
              d: "Cocktailwagen vor Ort, Bierwagen mit Zapfanlage im Bestand. Beides muss nicht extra angemietet werden.",
            },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
            >
              <p className="font-semibold">{x.t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="anfrage" className="bg-stone-100/70 dark:bg-stone-900/40">
        <H2>Anfrage</H2>
        <Lead>
          Schreiben Sie uns kurz, worum es geht. Wir melden uns mit einem Vorschlag und einer Zahl, die zu Ihrer
          Veranstaltung passt.
        </Lead>
        <div className="mt-7 max-w-2xl">
          <InquiryForm
            funnel="b2b"
            submitLabel="Anfrage abschicken"
            promise="Wir melden uns bei Ihnen und klären den Rest persönlich."
            fields={[
              { name: "name", label: "Ihr Name", required: true },
              { name: "firma", label: "Firma" },
              { name: "email", label: "E-Mail", type: "email", required: true },
              { name: "phone", label: "Telefon", type: "tel" },
              { name: "date", label: "Wunschtermin", type: "date" },
              { name: "gaeste", label: "Wie viele Personen?", type: "number" },
              {
                name: "nachricht",
                label: "Was ist geplant?",
                type: "textarea",
                placeholder: "Zum Beispiel: Weihnachtsfeier für 60 Leute, Buffet, ab 18 Uhr.",
              },
            ]}
          />
        </div>
      </Section>

      <FaqSection items={faqLocation} />
    </>
  );
}
