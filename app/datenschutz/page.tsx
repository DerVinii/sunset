import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, Section } from "@/components/ui-basics";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <Section>
      <Container className="prose prose-stone max-w-2xl dark:prose-invert">
        <h1>Datenschutz</h1>

        <h2>Wer die Daten verarbeitet</h2>
        <p>
          Verantwortlich ist {site.name}, {site.address.street}, {site.address.city}. Eine Kontaktmöglichkeit für
          Datenschutzanfragen ergänzen wir, sobald die geschäftliche E-Mail-Adresse eingerichtet ist.
        </p>

        <h2>Wenn Sie das Formular ausfüllen</h2>
        <p>
          Wir verarbeiten die Angaben, die Sie im Anfrageformular machen: Ihren Namen, Ihre Kontaktdaten und das, was
          Sie uns zu Ihrer Veranstaltung schreiben. Wir nutzen diese Angaben ausschließlich, um Ihre Anfrage zu
          beantworten. Rechtsgrundlage ist Artikel 6 Absatz 1 Buchstabe b der Datenschutz-Grundverordnung, also die
          Anbahnung eines Vertrags.
        </p>
        <p>
          Ihre Anfrage wird als E-Mail an uns zugestellt. Für den Versand nutzen wir einen Dienstleister, der die
          Nachricht in unserem Auftrag verarbeitet. Darüber hinaus geben wir Ihre Angaben nicht weiter.
        </p>
        <p>
          Wir bewahren die Angaben so lange auf, wie wir sie für die Bearbeitung Ihrer Anfrage und eine mögliche
          Beauftragung brauchen, danach im Rahmen der gesetzlichen Aufbewahrungsfristen.
        </p>

        <h2>Wenn Sie die Seite besuchen</h2>
        <p>
          Beim Aufruf der Seite verarbeitet unser Hoster technische Zugriffsdaten wie IP-Adresse, Zeitpunkt und
          aufgerufene Adresse. Das ist nötig, damit die Seite ausgeliefert werden kann, und dient der Sicherheit des
          Betriebs. Rechtsgrundlage ist Artikel 6 Absatz 1 Buchstabe f der Datenschutz-Grundverordnung.
        </p>
        <p>Wir setzen keine Cookies zu Werbe- oder Analysezwecken ein und binden keine externen Tracking-Dienste ein.</p>

        <h2 id="cookies">Cookie-Einstellungen</h2>
        <p>
          Diese Seite setzt derzeit keine Cookies, die eine Einwilligung brauchen. Es gibt deshalb auch nichts
          einzustellen. Sollten wir künftig Dienste einbinden, die Cookies setzen, etwa eine eingebettete Karte,
          erscheint an dieser Stelle ein Schalter, mit dem Sie Ihre Einwilligung erteilen und widerrufen können.
        </p>

        <h2>Ihre Rechte</h2>
        <p>
          Sie können Auskunft über Ihre gespeicherten Daten verlangen, deren Berichtigung oder Löschung, die
          Einschränkung der Verarbeitung sowie die Übertragung Ihrer Daten. Einer Verarbeitung auf Grundlage
          berechtigter Interessen können Sie widersprechen. Außerdem können Sie sich bei einer
          Datenschutz-Aufsichtsbehörde beschweren.
        </p>
      </Container>
    </Section>
  );
}
