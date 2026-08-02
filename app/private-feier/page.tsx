import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, CtaButton, H2, Lead, Section } from "@/components/ui-basics";
import { FaqSection } from "@/components/faq";
import { faqLocation } from "@/lib/faq-data";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: `Geburtstag, Jugendweihe und Familienfeier in ${site.city}`,
  description: `Private Feiern bei ${site.name} in ${site.city}: Raum für rund 100 Gäste, Außenhof, Hüpfburg für die Kinder, Buffet aus eigenem Haus.`,
};

export default function PrivateFeierPage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Geburtstag, Jugendweihe, Familienfeier.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Feiern, ohne hinterher die eigene Küche wieder in Ordnung bringen zu müssen. Der Raum fasst rund 100 Gäste,
            der Hof kommt dazu, und das Buffet machen wir.
          </p>
          <div className="mt-7">
            <CtaButton href="#anfrage">Anfrage stellen</CtaButton>
          </div>
        </Container>
      </div>

      <Section>
        <H2>Was den Tag leichter macht</H2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "Die Hüpfburg steht schon da",
              d: "Wenn Kinder mitkommen, ist die Frage nach der Beschäftigung damit erledigt. Boxautomat und Kickertisch gibt es für die Größeren.",
            },
            {
              t: "Zu Hause bleibt zu Hause",
              d: "Kein Umräumen im Wohnzimmer, kein Abwasch um Mitternacht, keine Sorge, wo die Nachbarn parken.",
            },
            {
              t: "Draußen und drinnen",
              d: "Im Sommer läuft der halbe Nachmittag auf dem Hof. Wenn es umschlägt, geht es einfach rein.",
            },
            {
              t: "Oder wir kommen zu Ihnen",
              d: "Wer lieber im eigenen Garten feiert, mietet nur das Equipment: Bierwagen, Zelte, Tische und Bänke.",
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
        <div className="mt-6">
          <CtaButton href="/mieten" variant="secondary">
            Equipment ansehen
          </CtaButton>
        </div>
      </Section>

      <Section id="anfrage" className="bg-stone-100/70 dark:bg-stone-900/40">
        <H2>Anfrage</H2>
        <Lead>Sag uns kurz, was ansteht. Den Rest klären wir miteinander.</Lead>
        <div className="mt-7 max-w-2xl">
          <InquiryForm
            funnel="privat"
            submitLabel="Anfrage abschicken"
            fields={[
              { name: "name", label: "Dein Name", required: true },
              { name: "email", label: "E-Mail", type: "email", required: true },
              { name: "phone", label: "Telefon", type: "tel" },
              { name: "date", label: "Wann soll gefeiert werden?", type: "date" },
              { name: "gaeste", label: "Wie viele Gäste?", type: "number" },
              {
                name: "anlass",
                label: "Anlass",
                type: "select",
                options: ["Geburtstag oder Jubiläum", "Jugendweihe, Taufe oder Kommunion", "Familienfeier", "Etwas anderes"],
              },
              {
                name: "nachricht",
                label: "Worum geht es?",
                type: "textarea",
                placeholder: "Zum Beispiel: 60. Geburtstag, 50 Gäste, mit Buffet und Kaffee am Nachmittag.",
              },
            ]}
          />
        </div>
      </Section>

      <FaqSection items={faqLocation} />
    </>
  );
}
