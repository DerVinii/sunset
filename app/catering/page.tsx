import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, CtaButton, H2, Lead, Section } from "@/components/ui-basics";
import { FaqSection } from "@/components/faq";
import { faqCatering } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: `Buffet-Catering in ${site.city}`,
  description: `Buffet-Catering von ${site.name} in ${site.city}. Das Essen kommt vom selben Anbieter wie der Raum, dazu Cocktailwagen und Bierwagen mit Zapfanlage.`,
};

export default function CateringPage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Das Buffet kommt von uns.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Wer den Raum bei uns bucht, muss sich um das Essen nicht separat kümmern. Ein Ansprechpartner, ein Termin,
            eine Absprache.
          </p>
          <div className="mt-7">
            <CtaButton href="/kontakt#anfrage">Buffet anfragen</CtaButton>
          </div>
        </Container>
      </div>

      <Section>
        <H2>Wie das abläuft</H2>
        <Lead>
          Sie sagen uns, wie viele Gäste kommen, wann gefeiert wird und was für ein Anlass es ist. Daraus machen wir
          einen Vorschlag fürs Buffet. Wenn etwas nicht passt, ändern wir es, bevor irgendetwas verbindlich wird.
        </Lead>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { n: "01", t: "Erzählen", d: "Anlass, Datum, Gästezahl. Und was Ihre Gäste gern essen." },
            { n: "02", t: "Vorschlag bekommen", d: "Wir stellen ein Buffet zusammen, das zur Runde passt." },
            { n: "03", t: "Feiern", d: "Am Tag selbst kümmern wir uns um Aufbau und Essen." },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
            >
              <p className="font-display text-3xl font-semibold text-sunset">{s.n}</p>
              <p className="mt-2 text-lg font-semibold">{s.t}</p>
              <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <H2>Zu trinken gibt es auch etwas</H2>
        <Lead>
          Ein Cocktailwagen steht bei uns vor Ort. Und wenn Bier vom Fass laufen soll, kommt der Bierwagen mit
          Zapfanlage dazu. Der lässt sich übrigens auch einzeln mieten, wenn Sie woanders feiern.
        </Lead>
        <div className="mt-6">
          <CtaButton href="/mieten" variant="secondary">
            Zum Verleih
          </CtaButton>
        </div>
      </Section>

      <FaqSection items={faqCatering} />
    </>
  );
}
