import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowIcon, Badge, Container, CtaButton, H2, Lead, Section } from "@/components/ui-basics";
import { AvailabilityCheck } from "@/components/availability-check";
import { FaqSection } from "@/components/faq";
import { faqCatering, faqEquipment, faqLocation } from "@/lib/faq-data";
import { ScrollWorld } from "@/components/scroll-world";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";

export const metadata: Metadata = {
  title: `Feiern in ${site.region} — Location, Catering & Equipment aus einer Hand`,
  description: `Eventlocation, Catering, Bierwagen & Equipment und Eventplanung in ${site.region}. Klare Preise, Angebot bis zum nächsten Werktag 12 Uhr, Festpreis im Angebot.`,
};

const einstiege = [
  {
    href: "/firmenfeier",
    title: "Ich plane eine Firmenfeier",
    text: "Komplett organisiert und budgetsicher — Pakete passend zum 110-€-Freibetrag.",
  },
  {
    href: "/hochzeit",
    title: "Wir planen unsere Hochzeit",
    text: "Ein Ort, ein Team, ein Festpreis — mit Termin-Check und Probeessen.",
  },
  {
    href: "/mieten",
    title: "Ich miete Equipment / Bierwagen",
    text: "Klare Tagespreise, geliefert und aufgebaut — oder zum Selbstabholen.",
  },
];

const saeulen = [
  { href: "/location", title: "Location & Räume", text: "Eventlocation in [ORT] mit Platz für [30]–[120] Gäste.", preis: "Miete ab [X] €" },
  { href: "/catering", title: "Catering & Partyservice", text: "Vom Buffet bis zum Foodtruck — für Firmen und Familien.", preis: "Buffet ab [25] €/Person" },
  { href: "/mieten", title: "Equipment & Bierwagen", text: "Bierwagen, Zelte, Garnituren, Zapfanlagen und mehr.", preis: "Bierwagen ab [250] €/Tag" },
  { href: "/eventservice", title: "Eventplanung & Service", text: "Planung, Personal und Eventleitung vor Ort.", preis: "Pauschale ab [500] €" },
];

export default function Home() {
  return (
    <>
      {/* Scroll-World "Ein Tag mit Sunset Events" — Scroll scrubbt die Kamerafahrt */}
      <ScrollWorld />

      {/* Server-gerenderte Hero-Summary direkt unter der Welt (SEO-H1 + Conversion-Einstiege) */}
      <div className="border-b border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-500">
            {site.name} · {site.region}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Ihr Event — <span className="text-sunset">ein Ansprechpartner</span>, klare Preise, null Stress.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Location, Catering, Equipment und Organisation aus einer Hand. Wir planen und richten Ihr Event aus —
            verlässlich und flexibel.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>Angebot bis zum nächsten Werktag, 12:00 Uhr</Badge>
            <Badge>Festpreis im Angebot — keine Nachberechnungen</Badge>
            <Badge>Alles aus einer Hand</Badge>
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

      {/* So einfach geht's */}
      <Section>
        <Reveal>
          <H2>So einfach geht&apos;s</H2>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { nr: "01", t: "Anfragen", d: "In 2 Minuten — Wunschtermin, Gästezahl, fertig." },
            { nr: "02", t: "Angebot erhalten", d: "Bis zum nächsten Werktag, 12:00 Uhr. Mit Festpreis." },
            { nr: "03", t: "Entspannt feiern", d: "Wir kümmern uns um Raum, Essen, Technik und Ablauf." },
          ].map((s) => (
            <RevealItem key={s.nr}>
              <div className="h-full rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                <p className="font-display text-3xl font-semibold text-sunset">{s.nr}</p>
                <p className="mt-2 text-lg font-semibold">{s.t}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{s.d}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* 4 Säulen */}
      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <Reveal>
          <H2>Vier Leistungen — ein Ansprechpartner</H2>
          <Lead>
            Location, Essen, Ausstattung und Organisation kommen bei uns aus einer Hand. Das spart Ihnen Absprachen mit
            vier verschiedenen Anbietern — und Überraschungen auf der Rechnung.
          </Lead>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {saeulen.map((s) => (
            <RevealItem key={s.href + s.title}>
              <Link
                href={s.href}
                className="group block h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-stone-800 dark:bg-stone-900"
              >
                <p className="font-semibold">{s.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{s.text}</p>
                <p className="mt-4 text-sm font-semibold text-amber-700 dark:text-amber-500">{s.preis}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* Vertrauensblock Kaltstart */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <H2>Wer hinter {site.name} steht</H2>
            <Lead>
              Wir sind [NAMEN DER GRÜNDER] aus [ORT] — mit [X] Jahren Erfahrung in Gastronomie und Events. Bei uns haben
              Sie eine feste Ansprechperson: vom ersten Anruf bis zum letzten Glas.
            </Lead>
            <ul className="mt-5 space-y-2.5 text-sm text-stone-700 dark:text-stone-300">
              <li>✓ Gastro-Hygienenachweis (HACCP) [NACHWEIS]</li>
              <li>✓ Betriebshaftpflicht versichert [POLICE]</li>
              <li>✓ Regional verwurzelt in {site.region}</li>
            </ul>
            <div className="mt-6">
              <CtaButton href="/ueber-uns" variant="secondary">
                Mehr über uns
              </CtaButton>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl bg-stone-950 p-7 text-stone-50">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-400">Preistransparenz</p>
              <p className="font-display mt-3 text-2xl font-semibold leading-snug">
                Keine versteckten Nebenkosten — Ihr Richtbudget in 60 Sekunden.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">{site.priceLogic.sie}</p>
              <div className="mt-5">
                <CtaButton href="/preise">Zum Budget-Rechner</CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* On-Page-Termin-Check (Ziel des Header-CTAs) */}
      <Section id="termincheck" className="bg-stone-100/70 dark:bg-stone-900/40">
        <Reveal>
          <H2>Ist Ihr Wunschtermin frei?</H2>
          <Lead>Datum eingeben — Sie sehen sofort, ob unsere Location an Ihrem Tag frei ist.</Lead>
          <div className="mt-7 max-w-xl">
            <AvailabilityCheck calendar="location" labelSubject="Unsere Location" tone="sie" />
          </div>
        </Reveal>
      </Section>

      {/* Kurz-FAQ */}
      <FaqSection
        title="Die häufigsten Fragen"
        items={[faqLocation[0], faqCatering[1], faqEquipment[0], faqCatering[5], faqLocation[2]]}
      />

      {/* Abschluss-CTA */}
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
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">Bereit? Prüfen Sie Ihren Termin.</h2>
              <p className="mt-3 max-w-xl text-stone-300">{site.responsePromise.sie} Meist sind wir schneller.</p>
              <div className="mt-6">
                <a
                  href="#termincheck"
                  className="cta-glow inline-flex cursor-pointer items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold text-stone-950 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Verfügbarkeit prüfen
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
