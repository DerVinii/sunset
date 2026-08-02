/**
 * Häufige Fragen.
 *
 * Es steht nur drin, was wir wirklich beantworten können. Zu Preisen, Anzahlung,
 * Stornofristen, Technik und Lieferung gibt es noch keine festgelegten Antworten,
 * deshalb fehlen diese Fragen hier, statt mit ausweichenden Sätzen gefüllt zu werden.
 */

export type FaqItem = { q: string; a: string };

const preisAntwort =
  "Dafür haben wir noch keine Liste, die wir guten Gewissens veröffentlichen könnten. " +
  "Schreib uns, was du vorhast, wie viele Gäste kommen und wann. Dann bekommst du eine " +
  "Zahl, die zu deiner Feier passt, statt einer Spanne, in der am Ende alles möglich ist.";

export const faqLocation: FaqItem[] = [
  {
    q: "Wie viele Gäste passen rein?",
    a: "Im Innenbereich haben rund 100 Gäste Platz. Dazu kommt der Außenhof, der ist groß und lässt sich zusätzlich nutzen.",
  },
  {
    q: "Gibt es eine Tanzfläche?",
    a: "Ja, die Tanzfläche ist fest im Innenbereich und muss nicht erst freigeräumt werden.",
  },
  {
    q: "Kann man bei euch auch draußen feiern?",
    a: "Dafür gibt es den Außenhof. Der ist groß genug, dass sich die Gäste verteilen können, ohne dass drinnen alles leer wirkt.",
  },
  {
    q: "Wo können Gäste rauchen?",
    a: "Der Raucherbereich ist separat und überdacht. Bei Regen steht also niemand im Nassen oder in der Tür.",
  },
  {
    q: "Gibt es Parkplätze?",
    a: "Ja, direkt am Haus und in ausreichender Anzahl. Deine Gäste müssen nicht erst durch den Ort fahren und suchen.",
  },
  {
    q: "Wo genau seid ihr?",
    a: "In Staßfurt, Atzendorfer Straße 2.",
  },
  { q: "Was kostet die Miete?", a: preisAntwort },
];

export const faqCatering: FaqItem[] = [
  {
    q: "Macht ihr auch das Essen?",
    a: "Ja, wir machen Buffet-Catering. Du musst dich also nicht parallel um einen zweiten Anbieter kümmern.",
  },
  {
    q: "Gibt es auch etwas zu trinken?",
    a: "Ein Cocktailwagen steht vor Ort. Für Bier vom Fass haben wir einen Bierwagen mit Zapfanlage.",
  },
  {
    q: "Kann ich das Buffet auch ohne den Raum buchen?",
    a: "Sprich uns darauf an. Sag uns, wo und wann gefeiert wird, dann klären wir, was wir davon übernehmen können.",
  },
  { q: "Was kostet das Buffet?", a: preisAntwort },
];

export const faqEquipment: FaqItem[] = [
  {
    q: "Was kann man bei euch mieten?",
    a: "Bierwagen mit Zapfanlage, Zelte, Tische und Bänke, eine Hüpfburg, einen Boxautomaten und einen Kickertisch. Wenn du etwas suchst, das hier nicht steht, frag trotzdem.",
  },
  {
    q: "Ist die Zapfanlage beim Bierwagen dabei?",
    a: "Ja, der Bierwagen kommt mit Zapfanlage.",
  },
  {
    q: "Reicht das Equipment für meine Gästezahl?",
    a: "Sag uns in der Anfrage, wie viele Gäste kommen. Dann sagen wir dir, wie viele Tische und Bänke du brauchst und was davon frei ist.",
  },
  { q: "Was kostet die Miete?", a: preisAntwort },
];
