import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/ui-basics";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <Container className="prose prose-neutral max-w-3xl py-16 dark:prose-invert">
      <h1>Datenschutzerklärung</h1>
      <p>
        [VOR LAUNCH DURCH VOLLSTÄNDIGE, RECHTLICH GEPRÜFTE DATENSCHUTZERKLÄRUNG ERSETZEN, z. B. über einen
        Datenschutz-Generator mit anschließender Prüfung. Die folgende Gliederung deckt die auf dieser Website
        tatsächlich vorhandenen Verarbeitungen ab.]
      </p>
      <h2>1. Verantwortlicher</h2>
      <p>
        {site.legalName}, {site.address.street}, {site.address.zip} {site.address.city}, E-Mail: {site.email}
      </p>
      <h2>2. Anfrageformulare</h2>
      <p>
        Ihre Angaben aus den Anfrageformularen (Name, Kontaktdaten, Termin- und Eventdaten) verarbeiten wir
        ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden per E-Mail an uns
        zugestellt und nicht an Dritte weitergegeben. [SPEICHERFRISTEN ERGÄNZEN]
      </p>
      <h2>3. WhatsApp (2-Klick-Lösung)</h2>
      <p>
        WhatsApp wird erst nach Ihrem ausdrücklichen zweiten Klick geöffnet. Dabei werden Daten an Meta Platforms
        Ireland Ltd. übertragen. Rechtsgrundlage: Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
      </p>
      <h2>4. E-Mail-Zustellung</h2>
      <p>
        Für den Versand von Bestätigungs-E-Mails nutzen wir [RESEND / ANBIETER, AVV ABSCHLIESSEN]. E-Mail-Adressen
        werden rein transaktional genutzt; werbliche E-Mails versenden wir nur mit gesondertem Double-Opt-in.
      </p>
      <h2>5. Webanalyse &amp; Cookies</h2>
      <p>
        [FALLS TRACKING EINGESETZT WIRD (Google Tag Manager etc.): Consent-Banner, Rechtsgrundlagen und Tools hier
        beschreiben. Ohne Tracking entfällt dieser Abschnitt. Die Website setzt derzeit keine Marketing-Cookies.]
      </p>
      <h2>6. Hosting</h2>
      <p>[HOSTING-ANBIETER: Vercel Inc., Server-Log-Daten, AVV, Übermittlung in Drittländer beschreiben.]</p>
      <h2>7. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit und Widerspruch sowie ein Beschwerderecht bei einer Aufsichtsbehörde.
      </p>
    </Container>
  );
}
