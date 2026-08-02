/**
 * Leistungsblöcke für /leistungen und die Karten auf der Startseite.
 *
 * Bestätigte Fakten (Location, Buffet, Verleih) stehen direkt im Text.
 * Alles Unbestätigte trägt einen [PLATZHALTER] und wird erst ersetzt,
 * wenn der Kunde die Angabe liefert. Richtpreise sind durchgehend offen,
 * weil es noch keine Preisliste gibt.
 */

export type Leistung = {
  id: string;
  name: string;
  beispiele: string;
  kurz: string;
  beschreibung: string;
  umfang: string[];
  richtpreis: string;
  bildLabel: string;
};

export const leistungen: Leistung[] = [
  {
    id: "firmenfeier",
    name: "Firmenfeier",
    beispiele: "Weihnachtsfeier, Sommerfest, Jubiläum",
    kurz: "Die Feier für die Belegschaft, ohne dass jemand aus dem Team dafür Überstunden macht.",
    beschreibung:
      "Eine Firmenfeier steht und fällt mit der Organisation. Wir übernehmen sie komplett: Raum, Essen, Getränke und das Drumherum. Bei uns in Staßfurt haben rund 100 Leute Platz, drinnen mit Tanzfläche, draußen auf dem großen Hof. Niemand aus deinem Team muss an dem Abend Bier holen oder Tische rücken.",
    umfang: [
      "Raum für rund 100 Gäste mit fester Tanzfläche",
      "Buffet von uns, Getränke über Bierwagen und Cocktailwagen",
      "Boxautomat und Kickertisch für den Abend",
      "Überdachter Raucherbereich und Parkplätze am Haus",
    ],
    richtpreis: "[RICHTPREIS]",
    bildLabel: "Foto einer Firmenfeier",
  },
  {
    id: "tagung",
    name: "Tagung",
    beispiele: "Konferenz, Kongress, Mitarbeiterversammlung",
    kurz: "Ein Raum, in dem alle Platz haben, und einer, der sich um den Rest kümmert.",
    beschreibung:
      "Für eine Versammlung oder Tagung braucht es keinen Ballsaal. Es braucht einen Raum, in dem alle sitzen, etwas zu essen in der Pause und jemanden, der den Tag am Laufen hält. Unser Innenbereich fasst rund 100 Personen. Tische und Bänke stellen wir, andere Bestuhlung klären wir vorher mit dir.",
    umfang: [
      "Innenbereich für bis zu 100 Personen",
      "Buffet und Pausenverpflegung aus einer Hand",
      "Bestuhlung nach Absprache",
      "Technik nach Bedarf: [TECHNIK-AUSSTATTUNG]",
    ],
    richtpreis: "[RICHTPREIS]",
    bildLabel: "Foto einer Tagung",
  },
  {
    id: "produktpraesentation",
    name: "Produktpräsentation",
    beispiele: "Launch, Roadshow, Messeauftritt",
    kurz: "Du zeigst dein Produkt. Wir bauen den Rahmen darum.",
    beschreibung:
      "Wenn du etwas Neues zeigen willst, soll der Abend sich um dein Produkt drehen und nicht um die Frage, wer den Aufbau macht. Wir stellen die Fläche, planen den Ablauf mit dir und versorgen deine Gäste. Keine zwei Präsentationen sind gleich, deshalb fängt diese Leistung immer mit einem Gespräch an.",
    umfang: [
      "Fläche drinnen oder auf dem Hof",
      "Ablaufplanung gemeinsam mit dir",
      "Catering für Gäste und Standpersonal",
      "Aufbauten und Technik: [TECHNIK-AUSSTATTUNG]",
    ],
    richtpreis: "[RICHTPREIS]",
    bildLabel: "Foto einer Produktpräsentation",
  },
  {
    id: "incentive",
    name: "Teamevent",
    beispiele: "Teamtag, Incentive, Kundenreise",
    kurz: "Ein Nachmittag, nach dem das Team wieder miteinander redet.",
    beschreibung:
      "Ein Teamevent muss kein Hochseilgarten sein. Manchmal reichen ein Hof, ein Bierwagen und ein Kickertisch, damit Leute ins Gespräch kommen, die sonst nur Mails wechseln. Wir stellen das Programm mit dir zusammen und kümmern uns um Essen und Getränke. Du bringst das Team mit, mehr nicht.",
    umfang: [
      "Hof und Innenbereich als Basis",
      "Hüpfburg, Boxautomat, Kickertisch",
      "Buffet und Getränke",
      "Programmbausteine: [PROGRAMM-ANGEBOTE]",
    ],
    richtpreis: "[RICHTPREIS]",
    bildLabel: "Foto eines Teamevents",
  },
  {
    id: "privat",
    name: "Private Feier",
    beispiele: "Hochzeit, Geburtstag, Familienfeier",
    kurz: "Hochzeit, runder Geburtstag, Jugendweihe. Zu Hause bleibt es sauber.",
    beschreibung:
      "Die Feiern, für die dieser Ort gebaut ist. Du bekommst den Raum, das Buffet und die Ausstattung von einer Adresse. Die Tanzfläche gehört fest zum Raum, der Hof ist groß genug für den Empfang, und für die Kinder steht die Hüpfburg schon da. Am nächsten Morgen räumst nicht du auf.",
    umfang: [
      "Innenbereich mit Tanzfläche für rund 100 Gäste",
      "Großer Außenhof, Zelte falls das Wetter kippt",
      "Buffet von uns, Cocktailwagen für den Abend",
      "Hüpfburg, Boxautomat und Kickertisch zum Dazumieten",
    ],
    richtpreis: "[RICHTPREIS]",
    bildLabel: "Foto einer privaten Feier",
  },
];

export type Zusatzleistung = {
  name: string;
  text: string;
};

export const zusatzleistungen: Zusatzleistung[] = [
  {
    name: "Technik",
    text: "Ton, Licht, Leinwand: Sag uns, was dein Programm braucht. Was wir nicht selbst da haben, organisieren wir dazu oder sagen dir ehrlich, wo du es bekommst.",
  },
  {
    name: "Catering",
    text: "Buffet aus unserer Küche, Bier vom Fass aus dem Bierwagen, Cocktails vom Cocktailwagen. Das ist der Teil, den wir komplett selbst machen.",
  },
  {
    name: "Location-Suche",
    text: "Unsere Location kennst du jetzt. Wenn sie für dein Event nicht passt, sag uns, was du suchst. Dann schauen wir gemeinsam, was in Frage kommt.",
  },
  {
    name: "Moderation",
    text: "Für Bühne und Programm arbeiten wir mit Partnern: [MODERATIONS-PARTNER]. Frag uns an, wir stellen den Kontakt her.",
  },
  {
    name: "Foto und Video",
    text: "Damit von der Feier mehr bleibt als Handyfotos: [FOTO-VIDEO-PARTNER]. Auch hier vermitteln wir und du entscheidest.",
  },
];

/** Die 4 Schritte für Startseite (1.5) und die Kurzfassung auf /leistungen (2.5). */
export const ablaufKurz = [
  { titel: "Erstgespräch", text: "Du erzählst, wir hören zu. Kostet nichts." },
  { titel: "Konzept", text: "Du bekommst ein Angebot mit einer festen Zahl." },
  { titel: "Umsetzung", text: "Wir bauen auf, wir sind da, du feierst." },
  { titel: "Nachbereitung", text: "Abrechnung wie besprochen, keine offenen Enden." },
];
