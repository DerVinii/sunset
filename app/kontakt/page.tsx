import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, H2, Lead, Section } from "@/components/ui-basics";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: `Kontakt zu ${site.name}`,
  description: `${site.name}, ${site.address.street} in ${site.address.city}. Schreiben Sie uns über das Formular, was Sie planen.`,
};

export default function KontaktPage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            So erreichen Sie uns.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Am schnellsten geht es über das Formular. Schreiben Sie hinein, was Sie vorhaben, dann können wir gleich
            mit etwas Konkretem antworten.
          </p>
          <p className="mt-6 text-stone-600 dark:text-stone-400">
            {site.name}
            <br />
            {site.address.street}
            <br />
            {site.address.city}, {site.region}
          </p>
        </Container>
      </div>

      <Section id="anfrage">
        <H2>Schreiben Sie uns</H2>
        <Lead>
          Je mehr wir über Ihre Feier wissen, desto genauer wird die Antwort. Datum, Gästezahl und Anlass reichen für
          den Anfang.
        </Lead>
        <div className="mt-7 max-w-2xl">
          <InquiryForm
            funnel="kontakt"
            submitLabel="Nachricht abschicken"
            promise="Wir melden uns bei Ihnen und klären den Rest persönlich."
            fields={[
              { name: "name", label: "Ihr Name", required: true },
              { name: "email", label: "E-Mail", type: "email", required: true },
              { name: "phone", label: "Telefon", type: "tel" },
              { name: "date", label: "Wunschtermin", type: "date" },
              { name: "gaeste", label: "Wie viele Gäste?", type: "number" },
              {
                name: "nachricht",
                label: "Ihre Nachricht",
                type: "textarea",
                required: true,
                placeholder: "Worum geht es?",
              },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
