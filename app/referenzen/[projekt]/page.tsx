import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, H2, Section } from "@/components/ui-basics";
import { getReferenz, referenzen } from "@/lib/referenzen-data";
import { MediaPlatzhalter } from "@/components/media-platzhalter";
import { KontaktCta } from "@/components/kontakt-cta";
import { Reveal } from "@/components/reveal";

/**
 * Referenz-Detail (Struktur 3.T): ein Template, n Projekte.
 * Derzeit sind alle Projekte gekennzeichnete Beispiele; der Hinweiskasten
 * oben macht das auch für eilige Leser unübersehbar.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return referenzen.map((r) => ({ projekt: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projekt: string }>;
}): Promise<Metadata> {
  const { projekt } = await params;
  const referenz = getReferenz(projekt);
  if (!referenz) return {};
  return {
    title: `${referenz.titel} (Beispielprojekt)`,
    description: referenz.teaser,
    robots: { index: false },
  };
}

export default async function ReferenzDetailPage({
  params,
}: {
  params: Promise<{ projekt: string }>;
}) {
  const { projekt } = await params;
  const referenz = getReferenz(projekt);
  if (!referenz) notFound();

  const weitere = referenzen.filter((r) => r.slug !== referenz.slug);

  const meta = [
    { label: "Kunde", wert: referenz.kunde },
    { label: "Jahr", wert: referenz.jahr },
    { label: "Gäste", wert: referenz.gaeste },
    { label: "Location", wert: referenz.location },
  ];

  return (
    <>
      {/* Hero: Projektbild + Metadaten */}
      <div className="border-b border-stone-200 bg-stone-100/70 dark:border-stone-800 dark:bg-stone-900/40">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-500">
            {referenz.typ} · Beispielprojekt
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {referenz.titel}
          </h1>
          <div className="mt-8">
            <MediaPlatzhalter label={referenz.bildLabel} ratio="aspect-[21/9]" />
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label} className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
                <dt className="text-xs font-medium uppercase tracking-wide text-stone-500">{m.label}</dt>
                <dd className="mt-1 text-sm font-semibold">{m.wert}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      {/* Ehrlichkeits-Hinweis */}
      <Container className="mt-10">
        <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
          <p className="font-semibold">Das hier ist ein Beispiel.</p>
          <p className="mt-1">
            Es zeigt, wie wir Projekte dokumentieren werden. Kunde, Zahlen, Fotos und Zitat kommen
            aus echten Events, sobald sie gelaufen sind. Bis dahin bleiben die Klammern sichtbar.
          </p>
        </div>
      </Container>

      {/* Aufgabe */}
      <Section>
        <Reveal>
          <H2>Die Aufgabe</H2>
          <p className="mt-4 max-w-3xl leading-relaxed text-stone-600 dark:text-stone-300">{referenz.aufgabe}</p>
        </Reveal>
      </Section>

      {/* Lösung */}
      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <Reveal>
          <H2>Die Lösung</H2>
          <p className="mt-4 max-w-3xl leading-relaxed text-stone-600 dark:text-stone-300">{referenz.loesung}</p>
        </Reveal>
      </Section>

      {/* Bildergalerie */}
      <Section>
        <Reveal>
          <H2>Bilder</H2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <MediaPlatzhalter label="Eventfoto 1" />
          <MediaPlatzhalter label="Eventfoto 2" />
          <MediaPlatzhalter label="Eventfoto 3" />
        </div>
      </Section>

      {/* Ergebnis */}
      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <Reveal>
          <H2>Das Ergebnis</H2>
          <p className="mt-4 max-w-3xl leading-relaxed text-stone-600 dark:text-stone-300">{referenz.ergebnis}</p>
        </Reveal>
      </Section>

      {/* Kundenstimme */}
      <Section>
        <Reveal>
          <figure className="mx-auto max-w-3xl rounded-2xl border border-dashed border-stone-300 bg-white/60 p-8 text-center dark:border-stone-700 dark:bg-stone-900/40">
            <blockquote className="text-lg text-stone-500 dark:text-stone-400">„{referenz.stimme}“</blockquote>
            <figcaption className="mt-4 text-sm text-stone-400 dark:text-stone-500">
              {referenz.kunde}
            </figcaption>
          </figure>
        </Reveal>
      </Section>

      {/* Weitere Projekte */}
      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <Reveal>
          <H2>Weitere Projekte</H2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {weitere.map((r) => (
            <Link
              key={r.slug}
              href={`/referenzen/${r.slug}`}
              className="group block h-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-stone-800 dark:bg-stone-900"
            >
              <MediaPlatzhalter label={r.bildLabel} ratio="aspect-[3/2]" className="rounded-none border-0 border-b-2" />
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-amber-700/80 dark:text-amber-500/80">
                  {r.typ} · Beispielprojekt
                </p>
                <p className="mt-1 font-semibold group-hover:text-amber-700 dark:group-hover:text-amber-500">{r.titel}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <KontaktCta />
    </>
  );
}
