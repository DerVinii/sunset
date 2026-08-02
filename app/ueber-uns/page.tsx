import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, H2, Lead, Section } from "@/components/ui-basics";
import { KontaktCta } from "@/components/kontakt-cta";
import { MediaPlatzhalter, LogoPlatzhalter } from "@/components/media-platzhalter";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Über uns",
  description: `Wer hinter ${site.name} steckt: eine junge Eventagentur mit eigener Location in ${site.city}, eigenem Buffet und eigenem Equipment.`,
};

const werte = [
  {
    titel: "Ehrlich bleiben",
    text: "Was wir nicht können, sagen wir vorher. Auf dieser Website steht nichts, was wir nicht halten können. Deshalb stehen hier auch sichtbare Lücken statt erfundener Zahlen.",
  },
  {
    titel: "Ein Ansprechpartner",
    text: "Du sollst nicht drei Firmen koordinieren, die sich gegenseitig nicht kennen. Raum, Essen und Ausstattung kommen von uns, und bei Fragen rufst du eine Nummer an.",
  },
  {
    titel: "Erst zuhören, dann planen",
    text: "Kein Event von der Stange. Das Erstgespräch ist zum Zuhören da, geplant wird danach. Manchmal raten wir dabei auch von Dingen ab, an denen wir verdienen würden.",
  },
  {
    titel: "Am Ende ist es deine Feier",
    text: "Wir drängen uns nicht in den Vordergrund. Wenn alles läuft, merkt man uns kaum, und genau so soll es sein.",
  },
];

const team = [
  { name: "[NAME]", rolle: "[ROLLE]", kontakt: "[E-MAIL]" },
  { name: "[NAME]", rolle: "[ROLLE]", kontakt: "[E-MAIL]" },
  { name: "[NAME]", rolle: "[ROLLE]", kontakt: "[E-MAIL]" },
];

const fakten = [
  { wert: "Rund 100", label: "Gäste passen in den Innenbereich" },
  { wert: "1", label: "Adresse für Raum, Buffet und Equipment" },
  { wert: "6", label: "Equipment-Posten im Verleih, vom Bierwagen bis zum Kicker" },
  { wert: "[ZAHL]", label: "Events ausgerichtet, Stand folgt" },
];

const partnerKategorien = ["Locations", "Technik", "Catering"];

export default function UeberUnsPage() {
  return (
    <>
      {/* 5.1 Page-Hero mit Teamfoto */}
      <div className="border-b border-stone-200 bg-stone-100/70 dark:border-stone-800 dark:bg-stone-900/40">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-500">
            Über uns
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Wer hinter {site.name} steckt.
          </h1>
          <div className="mt-8">
            <MediaPlatzhalter label="Teamfoto" ratio="aspect-[21/9]" />
          </div>
        </Container>
      </div>

      {/* 5.2 Story */}
      <Section>
        <Reveal>
          <H2>Wie es dazu kam</H2>
          <div className="mt-4 max-w-3xl space-y-4 leading-relaxed text-stone-600 dark:text-stone-300">
            <p>
              Wer in der Region eine Feier plant, kennt das Spiel: ein Anbieter für den Raum, einer
              für das Essen, einer für die Biertischgarnituren. Drei Verträge, drei Telefonnummern,
              und wenn etwas schiefgeht, zeigt jeder auf den anderen.
            </p>
            <p>
              {site.name} ist die Antwort darauf. Eine Adresse in {site.city}: die Atzendorfer
              Straße 2. Dort stehen der Saal mit Tanzfläche, der große Hof, die Küche für das Buffet
              und das Lager mit dem Equipment. Wer bei uns feiert, bekommt alles aus einer Hand, und
              wer woanders feiert, kann sich Teile davon mieten.
            </p>
            <p>
              Wir stehen am Anfang. Die Gründung ist frisch, vieles wird gerade aufgebaut, und diese
              Website wächst mit. Was du hier liest, stimmt, und was noch fehlt, ist als Lücke
              gekennzeichnet statt mit schönen Worten zugedeckt.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 5.3 Werte */}
      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <Reveal>
          <H2>Woran wir uns halten</H2>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-2">
          {werte.map((w) => (
            <RevealItem key={w.titel}>
              <div className="h-full rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
                <p className="font-semibold">{w.titel}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{w.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* 5.4 Team-Grid */}
      <Section>
        <Reveal>
          <H2>Das Team</H2>
          <Lead>
            Namen, Gesichter und direkte Kontakte tragen wir nach, sobald sie feststehen. Anfragen
            landen bis dahin nicht in einem anonymen Postfach, sondern beim Inhaber.
          </Lead>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t, i) => (
            <RevealItem key={i}>
              <div className="h-full rounded-2xl border border-dashed border-stone-300 bg-white/60 p-6 dark:border-stone-700 dark:bg-stone-900/40">
                <MediaPlatzhalter label="Portrait" ratio="aspect-square" klein className="max-w-[96px] rounded-full" />
                <p className="mt-4 font-semibold text-stone-500 dark:text-stone-400">{t.name}</p>
                <p className="text-sm text-stone-400 dark:text-stone-500">{t.rolle}</p>
                <p className="mt-2 text-sm text-stone-400 dark:text-stone-500">{t.kontakt}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* 5.5 Zahlen und Fakten */}
      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <Reveal>
          <H2>Zahlen und Fakten</H2>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fakten.map((f) => (
            <RevealItem key={f.label}>
              <div className="h-full rounded-2xl border border-stone-200 bg-white p-5 text-center dark:border-stone-800 dark:bg-stone-900">
                <p className="font-display text-3xl font-semibold text-amber-600">{f.wert}</p>
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{f.label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* 5.6 Partnernetzwerk */}
      <Section>
        <Reveal>
          <H2>Partnernetzwerk</H2>
          <Lead>
            Für alles, was wir nicht selbst machen, bauen wir gerade ein Netz aus Partnern auf:
            zusätzliche Locations, Technik, besondere Catering-Wünsche. Die Logos folgen, sobald die
            ersten Partnerschaften stehen.
          </Lead>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {partnerKategorien.map((kategorie, i) => (
            <div key={kategorie}>
              <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">{kategorie}</p>
              <div className="mt-2 grid gap-2">
                <LogoPlatzhalter nummer={i * 2 + 1} />
                <LogoPlatzhalter nummer={i * 2 + 2} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5.7 Kontakt-CTA */}
      <KontaktCta
        titel="Lern uns kennen."
        text="Am einfachsten bei einem Rundgang durch die Location. Schreib uns, wir machen einen Termin aus."
      />
    </>
  );
}
