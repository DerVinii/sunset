import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, CtaButton, H2, Lead, Section } from "@/components/ui-basics";

export const metadata: Metadata = {
  title: `Über ${site.name}`,
  description: `${site.name} in ${site.city}: Eventlocation, Buffet-Catering und Equipment-Verleih aus einer Hand.`,
};

export default function UeberUnsPage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Wer wir sind.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            {site.name} ist ein junger Betrieb in {site.city}. Wir vermieten unsere Location, machen das Buffet dazu
            und verleihen das Equipment, das auf einer Feier sonst fehlt.
          </p>
        </Container>
      </div>

      <Section>
        <H2>Warum alles aus einer Hand</H2>
        <Lead>
          Die meisten Feiern scheitern nicht am Essen oder am Raum, sondern an den Übergaben dazwischen. Wer den Saal
          woanders bucht als das Catering und das Zelt bei einem Dritten, verbringt Wochen damit, Termine und
          Zuständigkeiten abzugleichen. Bei uns liegt beides an derselben Adresse, und es gibt nur eine Nummer, unter
          der nachgefragt wird.
        </Lead>
      </Section>

      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <H2>Wir stehen am Anfang</H2>
        <Lead>
          Das schreiben wir bewusst hin, statt so zu tun, als gäbe es uns seit zwanzig Jahren. Es heißt: Unsere
          Preisliste ist noch nicht fertig, und wir haben noch keine Wand voller Referenzfotos. Es heißt aber auch,
          dass wir Zeit für Ihre Veranstaltung haben und nicht nach Schema F planen.
        </Lead>
        <div className="mt-6">
          <CtaButton href="/kontakt#anfrage">Feier beschreiben</CtaButton>
        </div>
      </Section>
    </>
  );
}
