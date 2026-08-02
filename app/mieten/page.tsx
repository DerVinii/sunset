import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, CtaButton, H2, Lead, Section } from "@/components/ui-basics";
import { FaqSection } from "@/components/faq";
import { faqEquipment } from "@/lib/faq-data";
import { equipment } from "@/lib/equipment-data";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: `Bierwagen, Zelte und Equipment mieten in ${site.city}`,
  description: `Bei ${site.name} in ${site.city} mieten: Bierwagen mit Zapfanlage, Zelte, Tische und Bänke, Hüpfburg, Boxautomat und Kickertisch.`,
};

export default function MietenPage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Equipment für deine Feier.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Du feierst zu Hause, im Garten oder im Vereinsheim? Dann kommt das, was fehlt, von uns. Vom Bierwagen bis
            zur Hüpfburg.
          </p>
          <div className="mt-7">
            <CtaButton href="#anfrage">Anfrage stellen</CtaButton>
          </div>
        </Container>
      </div>

      <Section>
        <H2>Das haben wir da</H2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {equipment.map((e) => (
            <div
              key={e.id}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
            >
              <p className="font-semibold">{e.name}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{e.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-stone-600 dark:text-stone-400">
          Du brauchst etwas, das hier nicht steht? Frag trotzdem. Wir haben noch mehr Veranstaltungstechnik im Bestand,
          als auf diese Seite passt.
        </p>
      </Section>

      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <H2>Anfrage</H2>
        <Lead>
          Kreuze an, was du brauchst, und schreib dazu, wie viele Gäste kommen. Dann sagen wir dir, welche Mengen
          sinnvoll sind, was an deinem Termin frei ist und was es kostet.
        </Lead>
        <div className="mt-7 max-w-2xl">
          <InquiryForm
            funnel="equipment"
            submitLabel="Anfrage abschicken"
            fields={[
              { name: "name", label: "Dein Name", required: true },
              { name: "email", label: "E-Mail", type: "email", required: true },
              { name: "phone", label: "Telefon (falls Rückruf lieber)", type: "tel" },
              { name: "date", label: "Wann feierst du?", type: "date" },
              { name: "gaeste", label: "Wie viele Gäste kommen?", type: "number" },
              ...equipment.map((e) => ({ name: e.id, label: e.name, type: "checkbox" as const })),
              {
                name: "nachricht",
                label: "Worum geht es?",
                type: "textarea" as const,
                placeholder: "Zum Beispiel: Gartenparty zum 40. Geburtstag, wir bräuchten Bierwagen und Sitzplätze für 45 Leute.",
              },
            ]}
          />
        </div>
      </Section>

      <FaqSection items={faqEquipment} />
    </>
  );
}
