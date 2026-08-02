import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, Section } from "@/components/ui-basics";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

/**
 * Noch unvollständig: Rechtsform, Inhabername, Postleitzahl, Telefonnummer,
 * E-Mail und Umsatzsteuer-Identifikationsnummer liegen nicht vor. Diese Seite
 * muss vor dem Livegang ergänzt und rechtlich geprüft werden.
 */
export default function ImpressumPage() {
  return (
    <Section>
      <Container className="prose prose-stone max-w-2xl dark:prose-invert">
        <h1>Impressum</h1>

        <p className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm not-prose dark:border-amber-900 dark:bg-amber-950/40">
          Diese Angaben sind noch nicht vollständig. Die Seite ist eine Vorschau und noch nicht öffentlich
          angekündigt.
        </p>

        <h2>Anbieter</h2>
        <p>
          {site.name}
          <br />
          {site.address.street}
          <br />
          {site.address.city}
        </p>

        <h2>Kontakt</h2>
        <p>Bitte nutzen Sie bis auf Weiteres das Anfrageformular auf dieser Seite.</p>

        <h2>Umsatzsteuer</h2>
        <p>Der Betrieb ist umsatzsteuerpflichtig.</p>

        <h2>Streitschlichtung</h2>
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </Container>
    </Section>
  );
}
