import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, CtaButton, H2, Lead, Section } from "@/components/ui-basics";
import { FaqSection } from "@/components/faq";
import { faqLocation } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: `Eventlocation in ${site.city} mieten`,
  description: `Unsere Location in ${site.city}: Innenbereich für rund 100 Gäste mit fester Tanzfläche, großer Außenhof, überdachter Raucherbereich, Cocktailwagen und Parkplätze am Haus.`,
};

/** EventVenue-Schema. Nur belegte Angaben, deshalb ohne PLZ und ohne Preisspanne. */
const venueJsonLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: site.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.region,
    addressCountry: "DE",
  },
  maximumAttendeeCapacity: 100,
};

const ausstattung = [
  {
    t: "Innenbereich für rund 100 Gäste",
    d: "Genug Platz für eine Hochzeit, eine Betriebsfeier oder einen runden Geburtstag, ohne dass jemand am Katzentisch sitzt.",
  },
  {
    t: "Feste Tanzfläche",
    d: "Die Tanzfläche gehört zum Raum. Es muss also nichts umgeräumt werden, wenn die Musik lauter wird.",
  },
  {
    t: "Großer Außenhof",
    d: "Der Hof kommt zum Innenbereich dazu. Platz für den Empfang, zum Grillen oder einfach zum Rausgehen zwischendurch.",
  },
  {
    t: "Überdachter Raucherbereich",
    d: "Separat und mit Dach. Bei Regen steht niemand in der Tür und die Wärme bleibt drinnen.",
  },
  {
    t: "Cocktailwagen",
    d: "Steht bei uns vor Ort. Für den Sektempfang draußen genauso wie für die zweite Hälfte des Abends.",
  },
  {
    t: "Parkplätze am Haus",
    d: "Ausreichend vorhanden. Ihre Gäste müssen nicht erst durch den Ort fahren und eine Lücke suchen.",
  },
];

export default function LocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(venueJsonLd) }} />

      <div className="border-b border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Unsere Location in {site.city}.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Ein Innenbereich für rund 100 Gäste, eine Tanzfläche, die schon da ist, und ein Hof, auf dem man auch mal
            durchatmen kann. Das Essen und das Equipment bekommen Sie bei uns gleich mit.
          </p>
          <p className="mt-3 text-stone-600 dark:text-stone-400">
            {site.address.street}, {site.address.city}
          </p>
          <div className="mt-7">
            <CtaButton href="/kontakt#anfrage">Termin anfragen</CtaButton>
          </div>
        </Container>
      </div>

      <Section>
        <H2>Was zur Location gehört</H2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {ausstattung.map((a) => (
            <div
              key={a.t}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
            >
              <p className="font-semibold">{a.t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{a.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <H2>Drinnen und draußen zusammen gedacht</H2>
        <Lead>
          Die meisten Feiern spielen sich nicht an einem Fleck ab. Der Empfang läuft auf dem Hof, gegessen wird drinnen,
          und wenn es später wird, wandert die Runde zwischen Tanzfläche und Cocktailwagen hin und her. Beides liegt bei
          uns beieinander, Sie müssen also nicht zwischen zwei Adressen pendeln.
        </Lead>
        <div className="mt-6">
          <CtaButton href="/kontakt#anfrage" variant="secondary">
            Feier beschreiben
          </CtaButton>
        </div>
      </Section>

      <FaqSection items={faqLocation} />
    </>
  );
}
