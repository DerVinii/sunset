import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowIcon, Badge, Container, CtaButton, H2, Lead, Section } from "@/components/ui-basics";
import { FaqSection } from "@/components/faq";
import { faqCatering, faqEquipment, faqLocation } from "@/lib/faq-data";
import { ScrollWorld } from "@/components/scroll-world";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";

export const metadata: Metadata = {
  title: `Eventlocation in ${site.city}: Raum, Buffet und Equipment`,
  description: `Sunset Events in ${site.city}: Innenbereich für rund 100 Gäste mit Tanzfläche, großer Außenhof, Cocktailwagen. Dazu Buffet-Catering und Equipment zum Mieten.`,
};

const einstiege = [
  {
    href: "/firmenfeier",
    title: "Firmenfeier",
    text: "Ein Raum für die Belegschaft, Buffet dazu, und der Boxautomat sorgt für den Rest des Abends.",
  },
  {
    href: "/hochzeit",
    title: "Hochzeit",
    text: "Tanzfläche drinnen, Außenhof für den Empfang, Cocktailwagen für später.",
  },
  {
    href: "/private-feier",
    title: "Geburtstag und Familienfeier",
    text: "Vom runden Geburtstag bis zur Jugendweihe. Die Hüpfburg für die Kinder steht schon da.",
  },
];

const saeulen = [
  {
    href: "/location",
    title: "Die Location",
    text: "Innenbereich für rund 100 Gäste mit fester Tanzfläche, dazu ein großer Außenhof und ein überdachter Raucherbereich.",
  },
  {
    href: "/catering",
    title: "Buffet",
    text: "Das Essen kommt von uns. Ein Ansprechpartner für Raum und Buffet statt zwei Terminen im Kalender.",
  },
  {
    href: "/mieten",
    title: "Equipment mieten",
    text: "Bierwagen mit Zapfanlage, Zelte, Tische und Bänke, Hüpfburg, Boxautomat, Kickertisch.",
  },
];

export default function Home() {
  return (
    <>
      {/* Scroll-World "Ein Tag mit Sunset Events". Scroll scrubbt die Kamerafahrt */}
      <ScrollWorld />

      {/* Weicher Übergang vom Creme der Welt in die Seitenfläche (auch im Dunkelmodus) */}
      <div aria-hidden className="h-20 bg-gradient-to-b from-[#f7efe3] to-stone-50 dark:to-stone-950" />

      {/* Server-gerenderte Hero-Summary direkt unter der Welt (SEO-H1 + Einstiege) */}
      <div className="border-b border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-500">
            {site.name} · {site.city}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Ein Ort in {site.city}, an dem <span className="text-sunset">alles an einem Platz</span> steht.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Der Raum, das Essen und die Ausstattung kommen bei uns von derselben Adresse. Sie müssen also nicht drei
            Anbieter koordinieren, die sich untereinander nicht kennen.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>Rund 100 Gäste im Innenbereich</Badge>
            <Badge>Tanzfläche und großer Außenhof</Badge>
            <Badge>Buffet und Equipment von uns</Badge>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {einstiege.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-md dark:border-stone-800 dark:bg-stone-900"
              >
                <p className="flex items-center justify-between font-semibold">
                  {e.title}
                  <ArrowIcon className="h-4 w-4 text-amber-600 transition-transform duration-200 group-hover:translate-x-1" />
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{e.text}</p>
              </Link>
            ))}
          </div>
        </Container>
      </div>

      <Section>
        <Reveal>
          <H2>Was bei uns steht</H2>
          <Lead>
            Drei Dinge, die Sie sonst einzeln zusammensuchen: den Raum, das Essen und das, was auf dem Hof und im Saal
            steht.
          </Lead>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-3">
          {saeulen.map((s) => (
            <RevealItem key={s.href}>
              <Link
                href={s.href}
                className="group block h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-stone-800 dark:bg-stone-900"
              >
                <p className="font-semibold">{s.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{s.text}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <H2>Wir fangen gerade an</H2>
            <Lead>
              Sunset Events ist neu. Das heißt für Sie: Wir haben Zeit, uns Ihre Feier wirklich anzuhören, und Sie sind
              nicht Veranstaltung Nummer 87 in diesem Jahr. Was wir haben, steht auf dieser Seite. Was wir noch nicht
              haben, schreiben wir nicht hin.
            </Lead>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl bg-stone-950 p-7 text-stone-50">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-400">Zum Thema Preise</p>
              <p className="font-display mt-3 text-2xl font-semibold leading-snug">
                Eine Preisliste steht hier noch nicht.
              </p>
              <p className="mt-3 leading-relaxed text-stone-400">
                Wir stellen sie gerade zusammen. Bis dahin gilt: Sagen Sie uns, was Sie vorhaben, wie viele Gäste kommen
                und wann. Dann bekommen Sie eine Zahl für Ihre Feier statt einer Spanne, in der am Ende alles möglich
                ist.
              </p>
              <div className="mt-5">
                <CtaButton href="/kontakt#anfrage">Feier beschreiben</CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <FaqSection
        title="Häufige Fragen"
        items={[faqLocation[0], faqLocation[1], faqCatering[0], faqEquipment[0], faqLocation[4], faqLocation[6]]}
      />

      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-stone-950 p-9 text-white sm:p-14">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(90% 120% at 85% 120%, rgba(245,158,11,0.5) 0%, rgba(234,88,12,0.35) 35%, rgba(190,18,60,0.2) 60%, transparent 80%)",
              }}
            />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">Erzählen Sie uns von Ihrer Feier.</h2>
              <p className="mt-3 max-w-xl text-stone-300">
                Datum, Gästezahl, Anlass. Mehr brauchen wir für den Anfang nicht.
              </p>
              <div className="mt-6">
                <a
                  href="/kontakt#anfrage"
                  className="cta-glow inline-flex cursor-pointer items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold text-stone-950 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Anfrage schreiben
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
