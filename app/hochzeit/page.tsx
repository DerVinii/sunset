import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, CtaButton, H2, Lead, Section } from "@/components/ui-basics";
import { FaqSection } from "@/components/faq";
import { faqLocation } from "@/lib/faq-data";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: `Hochzeitslocation in ${site.city}`,
  description: `Heiraten bei ${site.name} in ${site.city}: Saal für rund 100 Gäste mit fester Tanzfläche, großer Außenhof, Cocktailwagen und Buffet aus eigenem Haus.`,
};

export default function HochzeitPage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Eure Hochzeit in {site.city}.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Ein Saal für rund 100 Gäste, eine Tanzfläche, die schon da ist, und ein Hof für den Teil des Tages, an dem
            alle draußen stehen wollen.
          </p>
          <div className="mt-7">
            <CtaButton href="#anfrage">Termin anfragen</CtaButton>
          </div>
        </Container>
      </div>

      <Section>
        <H2>Wie der Tag bei uns aussehen kann</H2>
        <Lead>
          Empfang auf dem Hof, Essen im Saal, und wenn es dunkel wird, ist der Weg zur Tanzfläche zwei Schritte lang.
          Der Cocktailwagen steht ohnehin da.
        </Lead>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "Platz für rund 100 Gäste",
              d: "Innen. Der Außenhof kommt dazu, wenn ihr ihn braucht.",
            },
            {
              t: "Tanzfläche gehört zum Raum",
              d: "Niemand muss nach dem Hauptgang Tische schieben.",
            },
            {
              t: "Buffet aus demselben Haus",
              d: "Das Essen kommt von uns. Ein Gespräch weniger in eurer Planung.",
            },
            {
              t: "Raucherbereich mit Dach",
              d: "Separat und überdacht. Auch im November.",
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

      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <H2>Wir sind neu, und das ist ehrlich gesagt euer Vorteil</H2>
        <Lead>
          Bei uns seid ihr nicht die vierte Hochzeit im Monat. Wir haben Zeit, uns euren Tag anzuhören, bevor wir über
          Termine und Zahlen reden. Kommt vorbei und schaut euch den Saal an, dann merkt ihr schnell, ob es passt.
        </Lead>
      </Section>

      <Section id="anfrage">
        <H2>Schreibt uns</H2>
        <Lead>
          Datum, Gästezahl und ein paar Sätze dazu, wie ihr euch den Tag vorstellt. Alles Weitere klären wir
          miteinander.
        </Lead>
        <div className="mt-7 max-w-2xl">
          <InquiryForm
            funnel="hochzeit"
            submitLabel="Anfrage abschicken"
            promise="Wir melden uns bei euch und klären den Rest persönlich."
            fields={[
              { name: "name", label: "Eure Namen", required: true },
              { name: "email", label: "E-Mail", type: "email", required: true },
              { name: "phone", label: "Telefon", type: "tel" },
              { name: "date", label: "Wunschtermin", type: "date" },
              { name: "gaeste", label: "Wie viele Gäste?", type: "number" },
              { name: "besichtigung", label: "Wir würden uns den Saal gern vorher ansehen", type: "checkbox" },
              {
                name: "nachricht",
                label: "Erzählt uns von eurem Tag",
                type: "textarea",
                placeholder: "Zum Beispiel: freie Trauung auf dem Hof, danach Buffet und Party bis spät.",
              },
            ]}
          />
        </div>
      </Section>

      <FaqSection items={faqLocation} />
    </>
  );
}
