/**
 * Häufige Fragen in fünf Gruppen (Struktur /faq 6.2).
 *
 * Es steht nur drin, was wir ehrlich beantworten können. Wo eine Regelung
 * noch fehlt (Preise, Zahlung, Storno), sagt die Antwort genau das, statt
 * etwas zu erfinden. Konkrete Werte werden nachgetragen, sobald der Kunde
 * sie festlegt.
 */

export type FaqItem = { q: string; a: string };

export type FaqGruppe = { id: string; titel: string; items: FaqItem[] };

export const faqGruppen: FaqGruppe[] = [
  {
    id: "zusammenarbeit",
    titel: "Zusammenarbeit und Leistungen",
    items: [
      {
        q: "Was macht ihr genau?",
        a: "Wir richten Events aus: Firmenfeiern, Tagungen, private Feste. Der Raum in Staßfurt, das Buffet und die Ausstattung kommen von uns. Du hast einen Ansprechpartner statt fünf Telefonnummern.",
      },
      {
        q: "Übernehmt ihr auch nur einen Teil?",
        a: "Ja. Du kannst auch nur das Buffet oder nur Equipment wie den Bierwagen anfragen. Sag uns, was dir fehlt, den Rest hast du vielleicht schon.",
      },
      {
        q: "Macht ihr Events auch außerhalb von Staßfurt?",
        a: "Frag uns mit deinem Ort an. Wir sagen dir ehrlich, ob wir das gut hinbekommen oder ob dir ein Anbieter vor Ort mehr bringt.",
      },
      {
        q: "Wie groß darf ein Event bei euch sein?",
        a: "Drinnen haben rund 100 Gäste Platz. Dazu kommt der große Außenhof. Wenn es mehr Leute werden, reden wir über Zelte auf dem Hof.",
      },
    ],
  },
  {
    id: "kosten",
    titel: "Kosten und Abrechnung",
    items: [
      {
        q: "Was kostet ein Event bei euch?",
        a: "Eine Preisliste, hinter der wir stehen, gibt es noch nicht. Schreib uns Anlass, Datum und Gästezahl. Du bekommst ein Angebot mit einer Zahl für dein Event, nicht mit einer Spanne, in der am Ende alles möglich ist.",
      },
      {
        q: "Womit muss ich ungefähr rechnen?",
        a: "Den größten Unterschied machen Gästezahl, Essen und Technik. Richtwerte tragen wir hier nach, sobald unsere Preisliste steht.",
      },
      {
        q: "Wann und wie bezahle ich?",
        a: "Die Zahlungsschritte legen wir gerade fest. Sie stehen in deinem Angebot, bevor du irgendetwas unterschreibst.",
      },
      {
        q: "Kommen später Kosten dazu?",
        a: "Du bekommst vor der Buchung ein schriftliches Angebot, und da steht drin, was enthalten ist. Wenn du nachträglich etwas dazubuchen willst, besprechen wir das vorher und nicht erst auf der Rechnung.",
      },
    ],
  },
  {
    id: "planung",
    titel: "Planung und Vorlauf",
    items: [
      {
        q: "Wie früh sollte ich anfragen?",
        a: "Je gefragter der Termin, desto früher. Ein Samstag im Juni ist schneller weg als ein Donnerstag im November. Im Zweifel einfach fragen, wir schauen in den Kalender.",
      },
      {
        q: "Was braucht ihr von mir für ein Angebot?",
        a: "Anlass, Datum oder Zeitraum und eine ungefähre Gästezahl. Wenn du schon einen Budgetrahmen hast, hilft der. Alles andere klären wir im Gespräch.",
      },
      {
        q: "Kann ich mir die Location vorher ansehen?",
        a: "Ja. Schreib uns, dann machen wir einen Termin aus und gehen zusammen durch.",
      },
      {
        q: "Was ist, wenn sich die Gästezahl ändert?",
        a: "Sag uns so früh wie möglich Bescheid, dann passen wir Bestuhlung und Buffet an. Kurz vorher geht vieles auch noch, aber nicht mehr alles.",
      },
    ],
  },
  {
    id: "technik",
    titel: "Technik und Location",
    items: [
      {
        q: "Was gehört zur Location?",
        a: "Ein Innenbereich für rund 100 Gäste mit fester Tanzfläche, ein großer Außenhof, ein separater überdachter Raucherbereich, ein Cocktailwagen und Parkplätze in ausreichender Anzahl direkt am Haus.",
      },
      {
        q: "Habt ihr Ton- und Lichttechnik?",
        a: "Sag uns, was dein Programm braucht. Was wir nicht selbst da haben, organisieren wir dazu oder sagen dir ehrlich, wo du es bekommst.",
      },
      {
        q: "Kann ich einen eigenen Caterer oder DJ mitbringen?",
        a: "Sprich uns darauf an, bevor du buchst. Dann gibt es am Tag selbst keine Überraschungen.",
      },
      {
        q: "Gibt es genug Parkplätze?",
        a: "Ja, direkt am Haus und in ausreichender Anzahl. Deine Gäste müssen nicht durch den Ort kurven und suchen.",
      },
    ],
  },
  {
    id: "storno",
    titel: "Absage und Stornierung",
    items: [
      {
        q: "Was passiert, wenn ich absagen muss?",
        a: "Die genauen Fristen und Kosten legen wir gerade fest. Sie stehen im Vertrag, den du vor der Buchung liest. Versteckt wird da nichts.",
      },
      {
        q: "Kann ich umbuchen statt abzusagen?",
        a: "Frag so früh wie möglich. Wenn der neue Termin frei ist, ist Umbuchen meist die bessere Lösung für beide Seiten.",
      },
      {
        q: "Was ist bei schlechtem Wetter?",
        a: "Drinnen ist Platz für rund 100 Gäste, und für den Hof haben wir Zelte. Ein Plan B gehört bei uns in jede Planung.",
      },
      {
        q: "Was ist, wenn bei euch etwas ausfällt?",
        a: "Dann rufen wir dich an, so früh es geht, und suchen mit dir eine Lösung. Garantien, die wir nicht halten können, versprechen wir erst gar nicht.",
      },
    ],
  },
];

/** Die vier häufigsten Fragen für den Teaser auf der Startseite (1.8). */
export const faqTeaserStart: FaqItem[] = [
  faqGruppen[1].items[0],
  faqGruppen[0].items[3],
  faqGruppen[2].items[0],
  faqGruppen[0].items[1],
];

/** Teaser für /ablauf (4.6): Fragen rund um Planung und Verbindlichkeit. */
export const faqTeaserAblauf: FaqItem[] = [
  faqGruppen[2].items[3],
  faqGruppen[1].items[2],
  faqGruppen[4].items[0],
  faqGruppen[4].items[2],
];
