import type { Metadata } from "next";
import { Container } from "@/components/ui-basics";

export const metadata: Metadata = {
  title: "AGB",
  robots: { index: false },
};

export default function AgbPage() {
  return (
    <Container className="prose prose-neutral max-w-3xl py-16 dark:prose-invert">
      <h1>Allgemeine Geschäftsbedingungen</h1>
      <p>
        [VOR LAUNCH RECHTLICH GEPRÜFTE AGB EINSETZEN. Laut Website-Plan (Kap. 5.14) müssen sie konsistent zu den
        Seiten-Angaben enthalten:]
      </p>
      <ul>
        <li>Storno-Staffeln für alle drei Bereiche: Firmenfeiern (B2B), Hochzeiten und Equipment-Miete</li>
        <li>Änderungs- und Stornofristen für Zubuchungen (z. B. Zelt: kostenfrei bis [X] Tage vorher, Stückzahlen bis [Y] Tage)</li>
        <li>Anzahlungsregelungen (B2B: [X] % / Rechnung; Hochzeit: [X] %, Rest [Y] Tage vorher; Equipment: [REGELUNG])</li>
        <li>Kautionen (Location [BETRAG] €, Equipment [BETRAG] €) und Rückzahlung binnen 7 Tagen</li>
        <li>Haftung (Veranstalter haftet für Gäste-Schäden; Betriebshaftpflicht des Anbieters)</li>
        <li>Bruch/Verlust zum Wiederbeschaffungswert; Reinigungsregelung (speiserein / Spülpauschale, EINE Variante)</li>
        <li>Verlängerungs-Konditionen nach 24 Uhr (Service €/h, Getränke €/Person)</li>
      </ul>
    </Container>
  );
}
