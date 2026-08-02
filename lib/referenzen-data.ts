/**
 * Referenzprojekte für /referenzen und die Detailseiten.
 *
 * Sunset Events hat noch keine dokumentierten Events. Diese drei Einträge
 * sind darum ausdrücklich Beispielprojekte: Sie zeigen, wie ein Bericht
 * aufgebaut sein wird, sobald echte Events gelaufen sind. Jede Karte und
 * jede Detailseite kennzeichnet das sichtbar. Kunde, Jahr, Gästezahl und
 * Zitate bleiben [PLATZHALTER], bis echte Daten sie ersetzen.
 */

export type ReferenzTyp = "Firmenfeier" | "Tagung" | "Private Feier";

export type Referenz = {
  slug: string;
  titel: string;
  typ: ReferenzTyp;
  kunde: string;
  jahr: string;
  gaeste: string;
  location: string;
  teaser: string;
  aufgabe: string;
  loesung: string;
  ergebnis: string;
  stimme: string;
  bildLabel: string;
};

export const referenzTypen: ReferenzTyp[] = ["Firmenfeier", "Tagung", "Private Feier"];

export const referenzen: Referenz[] = [
  {
    slug: "beispiel-sommerfest",
    titel: "Sommerfest auf dem Hof",
    typ: "Firmenfeier",
    kunde: "[KUNDE]",
    jahr: "[JAHR]",
    gaeste: "[GÄSTEZAHL]",
    location: "Sunset Events, Staßfurt",
    teaser: "Ein Unternehmen lagert sein Sommerfest komplett aus: Hof, Buffet, Bierwagen und Programm von einer Adresse.",
    aufgabe:
      "Ein Unternehmen aus der Region will sein Sommerfest nicht mehr selbst stemmen. Bisher haben Mitarbeiter Bänke geschleppt, Essen bestellt und nach Feierabend aufgeräumt. Genau das soll aufhören. Gesucht ist ein Ort mit Platz draußen, Essen und Getränken vor Ort und einem Ansprechpartner für alles.",
    loesung:
      "Der Hof wird zur Festfläche, mit Zelten als Schattenplätzen und Tischen und Bänken von uns. Das Buffet kommt aus unserer Küche, das Bier vom Fass aus dem Bierwagen. Für den Nachmittag stehen Hüpfburg und Kickertisch bereit, abends öffnet der Cocktailwagen. Die Firma liefert die Gästeliste, den Rest übernehmen wir.",
    ergebnis:
      "So wird dieser Abschnitt später aussehen: mit echten Zahlen zum Ablauf, zur Gästezahl und dazu, was am Abend am besten funktioniert hat. [ERGEBNIS folgt nach dem ersten Event dieser Art]",
    stimme: "[KUNDENSTIMME: kommt aus dem Feedback-Gespräch nach dem Event]",
    bildLabel: "Foto vom Sommerfest",
  },
  {
    slug: "beispiel-hochzeit",
    titel: "Hochzeit drinnen und draußen",
    typ: "Private Feier",
    kunde: "[BRAUTPAAR]",
    jahr: "[JAHR]",
    gaeste: "[GÄSTEZAHL]",
    location: "Sunset Events, Staßfurt",
    teaser: "Empfang auf dem Hof, Essen und Tanz im Saal: eine Hochzeit, bei der das Paar nichts mehr organisieren muss.",
    aufgabe:
      "Ein Paar sucht einen Ort für rund 100 Gäste, an dem Empfang, Essen und Party stattfinden können, ohne dass zwischendurch alle umziehen müssen. Wichtig sind eine echte Tanzfläche, ein Plan für schlechtes Wetter und die Gewissheit, dass sich am Tag selbst jemand anderes kümmert.",
    loesung:
      "Der Empfang beginnt auf dem Hof, bei Regen unter Zelten. Zum Essen geht es in den Saal, wo das Buffet aufgebaut ist. Die Tanzfläche gehört fest zum Raum, es muss also nichts weggeräumt werden, wenn die Musik anfängt. Der Cocktailwagen übernimmt den Abend, der überdachte Raucherbereich hält die Tür frei.",
    ergebnis:
      "Hier stehen später die Eckdaten der Feier: wie der Tag ablief, was das Paar delegiert hat und was die Gäste am längsten beschäftigt hat. [ERGEBNIS folgt nach der ersten Hochzeit]",
    stimme: "[KUNDENSTIMME: kommt vom Paar nach der Feier]",
    bildLabel: "Foto von der Hochzeit",
  },
  {
    slug: "beispiel-versammlung",
    titel: "Mitarbeiterversammlung mit Verpflegung",
    typ: "Tagung",
    kunde: "[KUNDE]",
    jahr: "[JAHR]",
    gaeste: "[GÄSTEZAHL]",
    location: "Sunset Events, Staßfurt",
    teaser: "Ein halber Tag Programm, eine warme Mahlzeit, keine eigene Organisation: eine Versammlung als Rundum-Paket.",
    aufgabe:
      "Ein Betrieb braucht einen Raum für seine jährliche Versammlung. Alle sollen sitzen, alle sollen etwas hören können, und in der Pause soll es mehr geben als Kaffee aus der Thermoskanne. Der eigene Pausenraum ist dafür zu klein.",
    loesung:
      "Der Innenbereich wird für die Versammlung bestuhlt, die Technik richtet sich nach dem Programm. In der Pause steht das Buffet bereit, danach geht es weiter. Wer mag, hängt hinterher noch eine Stunde auf dem Hof an. Der Betrieb schickt die Einladung, wir machen den Rest.",
    ergebnis:
      "Dieser Abschnitt bekommt später die Zahlen: Teilnehmer, Ablauf, Dauer und das, was der Kunde beim nächsten Mal wieder so machen würde. [ERGEBNIS folgt nach der ersten Versammlung]",
    stimme: "[KUNDENSTIMME: kommt vom Auftraggeber]",
    bildLabel: "Foto von der Versammlung",
  },
];

export function getReferenz(slug: string): Referenz | undefined {
  return referenzen.find((r) => r.slug === slug);
}
