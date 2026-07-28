import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/ui-basics";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <Container className="prose prose-neutral max-w-3xl py-16 dark:prose-invert">
      <h1>Impressum</h1>
      <p>
        <strong>Angaben gemäß § 5 DDG</strong>
      </p>
      <p>
        {site.legalName}
        <br />
        {site.address.street}
        <br />
        {site.address.zip} {site.address.city}
      </p>
      <p>
        Telefon: {site.phoneDisplay}
        <br />
        E-Mail: {site.email}
      </p>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [UST-ID]
        <br />
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: [NAME, ANSCHRIFT]
      </p>
      <p>
        [WEITERE PFLICHTANGABEN JE NACH RECHTSFORM — z. B. Registereintrag, Aufsichtsbehörde für Gaststättenbetrieb.
        Vor Launch rechtlich prüfen lassen.]
      </p>
      <h2>Streitschlichtung</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>
    </Container>
  );
}
