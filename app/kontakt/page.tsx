import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, H2, Lead, Section } from "@/components/ui-basics";
import { EventAnfrageForm } from "@/components/event-anfrage-form";
import { MediaPlatzhalter } from "@/components/media-platzhalter";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Kontakt: Erzähl uns von deinem Event",
  description: `Anfrage in drei kurzen Schritten. ${site.name}, ${site.address.street} in ${site.address.city}, mit Parkplätzen direkt am Haus.`,
};

const routenLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.city}`
)}`;

/** Die eigentliche Conversion-Seite (Struktur 7). */
export default function KontaktPage() {
  return (
    <>
      {/* 7.1 Page-Hero */}
      <div className="border-b border-stone-200 bg-stone-100/70 dark:border-stone-800 dark:bg-stone-900/40">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-500">
            Kontakt
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Erzähl uns von deinem Event.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Drei kurze Schritte: Was du planst, die Eckdaten, deine Kontaktdaten. Dauert keine zwei
            Minuten, und du legst dich damit auf nichts fest.
          </p>
        </Container>
      </div>

      {/* 7.2 Anfrageformular in drei Schritten */}
      <Section id="anfrage-bereich">
        <div className="mx-auto max-w-2xl">
          <EventAnfrageForm id="anfrage" />
        </div>
      </Section>

      {/* 7.3 Direktkontakt + 7.4 Ansprechpartner + 7.5 Erwartung */}
      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <div className="grid gap-4 lg:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
              <p className="font-semibold">Lieber direkt?</p>
              <ul className="mt-3 space-y-2 text-sm text-stone-500 dark:text-stone-400">
                <li>Telefon: [TELEFON]</li>
                <li>E-Mail: [E-MAIL]</li>
                <li>WhatsApp: [WHATSAPP]</li>
              </ul>
              <p className="mt-3 text-xs text-stone-400 dark:text-stone-500">
                Die Nummern werden gerade eingerichtet und stehen dann hier. Bis dahin ist das
                Formular der sichere Weg.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="h-full rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
              <p className="font-semibold">Wer deine Anfrage liest</p>
              <div className="mt-3 flex items-center gap-3">
                <MediaPlatzhalter label="Portrait" ratio="aspect-square" klein className="max-w-[64px] rounded-full" />
                <div className="text-sm text-stone-500 dark:text-stone-400">
                  <p className="font-semibold text-stone-600 dark:text-stone-300">[NAME]</p>
                  <p>[ROLLE]</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
                Deine Anfrage landet nicht in einem Postfach, das niemand liest. Sie geht direkt an
                den Inhaber.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
              <p className="font-semibold">Was danach passiert</p>
              <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm text-stone-600 dark:text-stone-400">
                <li>Wir lesen deine Anfrage.</li>
                <li>Du bekommst eine Antwort. Eine feste Antwortzeit versprechen wir erst, wenn wir sie sicher halten können: [ANTWORTZEIT].</li>
                <li>Wir klären den Rest im Gespräch, am Telefon oder bei einem Rundgang.</li>
              </ol>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 7.6 Karte + Anfahrt */}
      <Section>
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <Reveal>
            <MediaPlatzhalter label="Kartenausschnitt (Einbindung folgt mit Cookie-Lösung)" ratio="aspect-[4/3]" />
          </Reveal>
          <Reveal delay={0.08}>
            <H2>So findest du uns</H2>
            <Lead>
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.city}, {site.region}
            </Lead>
            <p className="mt-4 max-w-xl text-stone-600 dark:text-stone-400">
              Parkplätze gibt es direkt am Haus und in ausreichender Anzahl. Deine Gäste müssen also
              nicht durch den Ort kurven.
            </p>
            <a
              href={routenLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 font-semibold text-amber-700 hover:underline dark:text-amber-500"
            >
              Route planen (öffnet Google Maps)
            </a>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
