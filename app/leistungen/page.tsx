import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowIcon, CheckIcon, Container, CtaButton, H2, Lead, Section } from "@/components/ui-basics";
import { ablaufKurz, leistungen, zusatzleistungen } from "@/lib/leistungen-data";
import { KontaktCta } from "@/components/kontakt-cta";
import { MediaPlatzhalter } from "@/components/media-platzhalter";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Leistungen: Firmenfeier, Tagung, Produktpräsentation, Teamevent, private Feier",
  description: `Was ${site.name} ausrichtet: Firmenfeiern, Tagungen, Produktpräsentationen, Teamevents und private Feste, mit eigener Location in ${site.city}.`,
};

export default function LeistungenPage() {
  return (
    <>
      {/* 2.1 Page-Hero mit Sprungnavigation */}
      <div className="border-b border-stone-200 bg-stone-100/70 dark:border-stone-800 dark:bg-stone-900/40">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-500">
            Leistungen
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Ein Ansprechpartner, egal was du feierst.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Fünf Arten von Events richten wir aus. Bei allen gilt dasselbe: Du musst nicht drei
            Anbieter koordinieren, die sich untereinander nicht kennen.
          </p>
          <nav className="mt-6 flex flex-wrap gap-2" aria-label="Sprungnavigation">
            {leistungen.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:border-amber-500 hover:text-amber-700 dark:border-stone-700 dark:bg-stone-900 dark:hover:text-amber-500"
              >
                {l.name}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* 2.2 Positionierung */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <H2>Wofür wir stehen</H2>
            <Lead>
              Für Events, bei denen der Gastgeber Gast sein kann. Wir haben eine eigene Location in{" "}
              {site.city}, ein eigenes Buffet und eigenes Equipment. Deshalb können wir zusagen, was
              wir zusagen: Es hängt nicht an einem Subunternehmer, den wir selbst kaum kennen.
            </Lead>
          </Reveal>
          <Reveal delay={0.1}>
            <H2>Und wofür nicht</H2>
            <Lead>
              Wir sind kein Konzern mit vierzig Gewerken. Wenn dein Event eine Nummer zu groß für uns
              ist, sagen wir dir das im ersten Gespräch und nicht nach der Anzahlung. Ehrlich absagen
              gehört bei uns zur Leistung.
            </Lead>
          </Reveal>
        </div>
      </Section>

      {/* 2.3 Leistungsblöcke, je ein Anker */}
      {leistungen.map((l, i) => (
        <Section
          key={l.id}
          id={l.id}
          className={i % 2 === 1 ? "bg-stone-100/70 dark:bg-stone-900/40" : ""}
        >
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <MediaPlatzhalter label={l.bildLabel} ratio="aspect-[4/3]" />
            </Reveal>
            <Reveal delay={0.08} className={i % 2 === 1 ? "lg:order-1" : ""}>
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-500">
                {l.beispiele}
              </p>
              <H2>{l.name}</H2>
              <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-300">{l.beschreibung}</p>
              <ul className="mt-5 space-y-2">
                {l.umfang.map((u) => (
                  <li key={u} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    {u}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-stone-500 dark:text-stone-400">
                Richtpreis: {l.richtpreis} · Preise veröffentlichen wir, sobald unsere Liste steht.
                Bis dahin bekommst du ein Angebot mit einer festen Zahl für dein Event.
              </p>
              <div className="mt-6">
                <CtaButton href="/kontakt#anfrage">{l.name} anfragen</CtaButton>
              </div>
            </Reveal>
          </div>
        </Section>
      ))}

      {/* 2.4 Zusatzleistungen */}
      <Section>
        <Reveal>
          <H2>Dazu buchbar</H2>
          <Lead>Bausteine, die ein Event runder machen. Manche kommen von uns, manche über Partner.</Lead>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {zusatzleistungen.map((z) => (
            <RevealItem key={z.name}>
              <div className="h-full rounded-2xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
                <p className="font-semibold">{z.name}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{z.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* 2.5 Ablauf-Kurzfassung */}
      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <Reveal>
          <H2>Und so läuft es ab</H2>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ablaufKurz.map((s, i) => (
            <RevealItem key={s.titel}>
              <div className="h-full rounded-2xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
                <p className="font-display text-2xl font-semibold text-amber-600">{i + 1}</p>
                <p className="mt-2 font-semibold">{s.titel}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{s.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
        <Reveal className="mt-6">
          <Link href="/ablauf" className="inline-flex items-center gap-1.5 font-semibold text-amber-700 hover:underline dark:text-amber-500">
            Ablauf im Detail <ArrowIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>

      {/* 2.6 Kontakt-CTA */}
      <KontaktCta text="Sag uns, welche Art von Event du planst. Wir sagen dir, was wir dafür tun können." />
    </>
  );
}
