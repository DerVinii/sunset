import type { Metadata } from "next";
import { CheckIcon, Container, H2, Lead, Section } from "@/components/ui-basics";
import { FaqSection } from "@/components/faq";
import { faqTeaserAblauf } from "@/lib/faq-data";
import { KontaktCta } from "@/components/kontakt-cta";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Ablauf: So läuft ein Event mit uns",
  description:
    "Fünf Schritte vom Erstgespräch bis zur Nachbereitung. Wer was übernimmt, wann du anfragen solltest und was den Preis bestimmt.",
};

/**
 * Nimmt Erstkunden die Unsicherheit (Strukturvorgabe 4).
 * Dauerangaben nur, wo sie ehrlich möglich sind. Feste Fristen, die noch
 * niemand zugesagt hat, stehen hier bewusst nicht.
 */

const schritte = [
  {
    titel: "Erstgespräch",
    dauer: "Etwa 30 Minuten, am Telefon oder bei uns",
    ergebnis: "Wir wissen, was du vorhast. Du weißt, ob wir zu dir passen.",
    text: "Du erzählst, was du planst: Anlass, Datum, Gästezahl, Vorstellungen. Wir fragen nach, was uns fehlt, und sagen dir ehrlich, ob wir das leisten können. Das Gespräch kostet nichts und verpflichtet zu nichts.",
  },
  {
    titel: "Konzept und Angebot",
    dauer: "Den Termin dafür nennen wir dir im Erstgespräch",
    ergebnis: "Ein schriftliches Angebot mit einer festen Zahl.",
    text: "Wir setzen uns hin und planen dein Event durch: Raum, Essen, Getränke, Ausstattung, Personal. Daraus wird ein Angebot, in dem eine Zahl steht und nicht eine Spanne. Was drinsteht, gilt.",
  },
  {
    titel: "Feinplanung",
    dauer: "Bis zum Event, so viele Abstimmungen wie nötig",
    ergebnis: "Ein Ablaufplan, den beide Seiten kennen.",
    text: "Menüfragen, Sitzordnung, Musik, Ablauf des Abends: Alles, was noch offen ist, klären wir Schritt für Schritt. Wenn sich bei dir etwas ändert, sag Bescheid. Je früher, desto einfacher bauen wir es ein.",
  },
  {
    titel: "Der Event-Tag",
    dauer: "Von Aufbau bis Abbau sind wir da",
    ergebnis: "Du bist Gast auf deiner eigenen Veranstaltung.",
    text: "Wir bauen auf, bevor deine Gäste kommen, und sind den ganzen Abend ansprechbar. Wenn etwas klemmt, lösen wir es, ohne dass du davon erfährst. Aufräumen ist am nächsten Tag unser Problem, nicht deins.",
  },
  {
    titel: "Nachbereitung",
    dauer: "In den Tagen nach dem Event",
    ergebnis: "Abrechnung wie im Angebot, keine offenen Enden.",
    text: "Du bekommst die Rechnung, die zum Angebot passt. Dazu ein kurzes Gespräch: Was war gut, was machen wir beim nächsten Mal besser? Wenn du magst, wird dein Event danach ein Bericht auf unserer Referenzen-Seite.",
  },
];

const wirUebernehmen = [
  "Raum, Aufbau und Abbau",
  "Buffet, Getränke und Personal dafür",
  "Equipment: vom Bierwagen bis zur Hüpfburg",
  "Zeitplan und Koordination am Event-Tag",
  "Absprachen mit Partnern, wenn welche dazukommen",
];

const beiDirBleibt = [
  "Gästeliste und Einladungen",
  "Die Entscheidungen: Wir schlagen vor, du wählst aus",
  "Der Budgetrahmen",
  "Inhalte deines Programms, etwa Reden oder Ehrungen",
];

const vorlauf = [
  { event: "Hochzeit", zeit: "6 bis 12 Monate" },
  { event: "Weihnachtsfeier", zeit: "Am besten schon im Sommer" },
  { event: "Sommerfest und Firmenfeier", zeit: "2 bis 4 Monate" },
  { event: "Tagung", zeit: "2 bis 3 Monate" },
  { event: "Geburtstag und private Feier", zeit: "4 bis 8 Wochen" },
];

const preistreiber = [
  "Die Gästezahl, denn sie bestimmt Essen, Getränke und Personal",
  "Der Umfang des Buffets",
  "Technik und Sonderwünsche",
  "Die Dauer der Veranstaltung",
  "Wochentag und Saison",
];

export default function AblaufPage() {
  return (
    <>
      {/* 4.1 Page-Hero */}
      <div className="border-b border-stone-200 bg-stone-100/70 dark:border-stone-800 dark:bg-stone-900/40">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-500">
            Ablauf
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            So läuft ein Event mit uns.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Wenn du noch nie ein Event in fremde Hände gegeben hast, willst du vorher wissen, worauf
            du dich einlässt. Hier steht es, Schritt für Schritt.
          </p>
        </Container>
      </div>

      {/* 4.2 Timeline: fünf Schritte vertikal */}
      <Section>
        <ol className="relative space-y-10 border-l border-stone-200 pl-8 dark:border-stone-800">
          {schritte.map((s, i) => (
            <li key={s.titel} className="relative">
              <span className="font-display absolute -left-8 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-amber-600 text-sm font-semibold text-white">
                {i + 1}
              </span>
              <Reveal>
                <h2 className="font-display text-2xl font-semibold tracking-tight">{s.titel}</h2>
                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{s.dauer}</p>
                <p className="mt-3 max-w-2xl leading-relaxed text-stone-600 dark:text-stone-300">{s.text}</p>
                <p className="mt-3 flex max-w-2xl items-start gap-2 text-sm font-medium text-stone-800 dark:text-stone-200">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  Ergebnis: {s.ergebnis}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* 4.3 Aufgabenteilung */}
      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <Reveal>
          <H2>Wer macht was</H2>
          <Lead>Damit keine Aufgabe zwischen zwei Stühlen landet, hier die Arbeitsteilung.</Lead>
        </Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
              <p className="font-semibold">Das übernehmen wir</p>
              <ul className="mt-3 space-y-2">
                {wirUebernehmen.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
              <p className="font-semibold">Das bleibt bei dir</p>
              <ul className="mt-3 space-y-2">
                {beiDirBleibt.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-stone-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 4.4 Vorlaufzeiten */}
      <Section>
        <Reveal>
          <H2>Wann du anfragen solltest</H2>
          <Lead>
            Faustregeln, keine Gesetze. Je gefragter der Termin, desto früher lohnt sich die Anfrage.
            Und kurzfristig fragen kostet nichts: Manchmal ist genau dein Termin noch frei.
          </Lead>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {vorlauf.map((v) => (
            <RevealItem key={v.event}>
              <div className="rounded-2xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
                <p className="font-semibold">{v.event}</p>
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{v.zeit} vorher</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* 4.5 Budget-Transparenz */}
      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <H2>Was den Preis bestimmt</H2>
            <ul className="mt-5 space-y-2">
              {preistreiber.map((p) => (
                <li key={p} className="flex items-start gap-2 text-stone-700 dark:text-stone-300">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-amber-600" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl bg-stone-950 p-7 text-stone-50">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-400">Zu den Zahlen</p>
              <p className="font-display mt-3 text-2xl font-semibold leading-snug">
                Einen öffentlichen Preisrahmen gibt es noch nicht.
              </p>
              <p className="mt-3 leading-relaxed text-stone-400">
                Wir stellen unsere Preisliste gerade zusammen und veröffentlichen Richtwerte, sobald
                sie belastbar sind. Bis dahin gilt: Du bekommst vor jeder Buchung ein schriftliches
                Angebot mit einer festen Zahl. Entschieden wird erst danach.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 4.6 FAQ-Teaser */}
      <FaqSection title="Fragen zur Planung" items={faqTeaserAblauf} />

      {/* 4.7 Kontakt-CTA */}
      <KontaktCta
        titel="Schritt 1 kostet nichts."
        text="Das Erstgespräch ist unverbindlich. Danach weißt du, ob wir die Richtigen sind."
      />
    </>
  );
}
