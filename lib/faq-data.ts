/**
 * FAQ-Inhalte aus dem Deep Research (AEO-ready, je Seite mit FAQPage-Schema ausgespielt).
 * Sprache: einfach, kurze Sätze. Preise = Marktkorridore aus dem Research;
 * [PLATZHALTER] ersetzt der Unternehmer durch eigene Werte.
 */

export type FaqItem = { q: string; a: string };

export const faqCatering: FaqItem[] = [
  {
    q: "Was kostet ein Catering pro Person bei einer Hochzeit?",
    a: "Ein Hochzeits-Catering kostet in Deutschland meist zwischen 45 und 90 € pro Person für Buffet oder Menü. Mit Getränke-Pauschale (20–50 €) und Service rechnet ihr mit 70 bis 140 € pro Gast. Euer genauer Preis steht im Angebot — als Festpreis.",
  },
  {
    q: "Wie viel Budget brauche ich für eine Firmenfeier pro Mitarbeiter?",
    a: "Die meisten Firmen orientieren sich am Steuer-Freibetrag von 110 € brutto pro Mitarbeiter (§ 19 EStG). Ein Event-Buffet kostet etwa 35–60 € pro Person, dazu eine Getränke-Pauschale von 20–40 €. Unsere Pakete sind so kalkuliert, dass sie in die 110 € passen.",
  },
  {
    q: "Was ist der Unterschied zwischen Partyservice und Catering?",
    a: "Partyservice heißt: Wir liefern fertig zubereitetes Essen. Catering heißt: Wir bringen zusätzlich Personal, Getränke, Geschirr und kümmern uns vor Ort um alles.",
  },
  {
    q: "Wie viele Getränke brauche ich für 50 Gäste?",
    a: "Als Faustregel für 6 Stunden Feier: 1 bis 1,5 Liter alkoholfreie Getränke plus etwa 1 Liter Bier oder Wein pro Person. Mit einer Getränke-Pauschale seid ihr auf der sicheren Seite — da zahlt ihr einen festen Preis pro Person.",
  },
  {
    q: "Gibt es vegetarische und vegane Gerichte?",
    a: "Ja. Bei uns sind vegetarische und vegane Gerichte fester Teil jedes Buffets — ohne Aufpreis. Andere Bedürfnisse (z. B. glutenfrei) sagt ihr uns einfach bei der Anfrage.",
  },
  {
    q: "Wie früh muss ich das Catering buchen?",
    a: "Für Termine von Mai bis September am besten 6 bis 12 Monate vorher. Firmenfeiern und private Feiern klappen oft auch 4 bis 8 Wochen vorher. Fragt einfach an — wir sagen euch sofort, was geht.",
  },
  {
    q: "Sind Geschirr und Besteck beim Catering dabei?",
    a: "Geschirr, Besteck und Gläser inklusive Spülen könnt ihr für etwa 3,50 bis 6 € pro Person dazubuchen. Das steht transparent im Angebot.",
  },
  {
    q: "Was kostet ein Imbisswagen für eine private Feier?",
    a: "Für den Einsatz eines Imbisswagens gilt meist ein Mindestumsatz von 500 bis 800 €. Das entspricht etwa 40 bis 60 Portionen.",
  },
  {
    q: "Wie bleibt das Essen warm?",
    a: "Wir liefern in professionellen Warmhalte-Behältern, bauen alles auf und halten die Speisen auf Temperatur.",
  },
  {
    q: "Können wir eigene Getränke mitbringen?",
    a: "Nach Absprache ja. Ob und welches Korkgeld dafür anfällt, steht klar auf unserer Preisseite und im Angebot — keine Überraschungen. [KORKGELD-REGELUNG]",
  },
];

export const faqEventservice: FaqItem[] = [
  {
    q: "Was kostet die Planung einer Firmenfeier?",
    a: "Die Planung kostet meist 10 bis 15 % vom Event-Budget oder eine feste Pauschale ab 500 €. Wenn ihr Location, Catering und Equipment bei uns bucht, ist die Grundplanung oft schon drin.",
  },
  {
    q: "Was macht die Eventleitung vor Ort?",
    a: "Sie steuert den Ablauf, das Service-Personal und die Technik, koordiniert Künstler oder DJs — und ist euer fester Ansprechpartner den ganzen Abend.",
  },
  {
    q: "Wie viel Personal brauche ich für meine Feier?",
    a: "Beim Buffet rechnet man 1 Servicekraft für 20 bis 25 Gäste. Beim servierten Menü 1 Kraft für 10 bis 12 Gäste. Eine Servicekraft kostet etwa 30 bis 45 € pro Stunde.",
  },
  {
    q: "Muss ich meine Feier anmelden?",
    a: "Private Feiern in geschlossenen Räumen: nein. Öffentliche Feste oder Feiern auf öffentlichem Grund: ja, mindestens 4 bis 6 Wochen vorher beim Ordnungsamt. Wir helfen dabei.",
  },
  {
    q: "Wer haftet, wenn etwas kaputt geht?",
    a: "Für Schäden durch Gäste haftet der Veranstalter. Unser Betrieb ist über eine Betriebshaftpflicht versichert.",
  },
  {
    q: "Wie lange dauern Aufbau und Abbau?",
    a: "Aufbau: meist 2 bis 4 Stunden vor Beginn. Abbau: etwa 2 Stunden nach Ende. Das planen wir mit ein — ihr müsst euch um nichts kümmern.",
  },
  {
    q: "Was passiert bei schlechtem Wetter?",
    a: "Für Feiern im Freien planen wir immer eine Absicherung ein: Zelte, Pavillons oder eine Ausweichfläche drinnen. Das steht vorher fest im Angebot.",
  },
  {
    q: "Wer kümmert sich um den Müll?",
    a: "Wir stellen Behälter und entsorgen alles fachgerecht. Das ist Teil der Reinigungspauschale.",
  },
  {
    q: "Welchen Stromanschluss brauche ich?",
    a: "Kleine Formate laufen über normale Steckdosen (230 V). Für Kühlwagen oder große Technik braucht es Starkstrom (16 oder 32 Ampere). Wir prüfen das vorab mit euch.",
  },
  {
    q: "Kann der Ablauf am Abend noch angepasst werden?",
    a: "Ja. Unsere Eventleitung stimmt Verschiebungen — etwa bei Reden oder Essenszeiten — direkt mit Küche und Service ab.",
  },
];

export const faqEquipment: FaqItem[] = [
  {
    q: "Was kostet ein Bierwagen für ein Wochenende?",
    a: "Die Tagesmiete startet bei etwa 250 € (werktags). Fürs Wochenende gilt eine Pauschale von etwa 350 bis 500 € — Abholung Freitag, Rückgabe Montag. Dazu kommt die Lieferpauschale nach Zone, wenn wir liefern sollen. [PREISE DES UNTERNEHMERS]",
  },
  {
    q: "Ist das Bier beim Bierwagen dabei?",
    a: "Der Wagen kommt einsatzbereit mit Kühlung und CO2. Fassbier könnt ihr direkt über uns bestellen ([SORTEN], 50-Liter-Fass ab [PREIS] €) — nicht angezapfte Fässer nehmen wir zurück. Oder ihr bringt euer eigenes Bier mit. Die Endreinigung von Zapfanlage und Leitungen übernehmen wir. [REGELUNG BESTÄTIGEN]",
  },
  {
    q: "Was kostet eine Bierzeltgarnitur?",
    a: "Eine Garnitur (1 Tisch, 2 Bänke) kostet 13 bis 18 € pro Tag. Passende Hussen gibt es für etwa 9 bis 13 € dazu.",
  },
  {
    q: "Was kosten Stühle für eine Hochzeit?",
    a: "Einfache Klappstühle: 2 bis 5 € pro Stück. Elegante Hochzeitsstühle: 5,50 bis 8 € pro Stück.",
  },
  {
    q: "Was kostet die Lieferung?",
    a: "Feste Zonenpreise, Anlieferung UND Abholung inklusive: Zone A (0–20 km) [PREIS] €, Zone B (21–40 km) [PREIS] €, Zone C (41–80 km) [PREIS] €. Selbstabholung ist kostenlos. Gib oben deine PLZ ein — dann siehst du deinen Preis sofort.",
  },
  {
    q: "Muss ich das Geschirr spülen?",
    a: "Nein. Rückgabe einfach speiserein (grob abgeräumt) — die Endreinigung übernehmen wir. [REGELUNG: OHNE AUFPREIS ODER SPÜLPAUSCHALE — EINE VARIANTE]",
  },
  {
    q: "Was passiert, wenn etwas kaputt geht?",
    a: "Kaputtes oder fehlendes Material berechnen wir zum Wiederbeschaffungswert. Die Kaution gibt es nach der Rückgabe innerhalb von 7 Tagen zurück.",
  },
  {
    q: "Welches Zelt brauche ich für 50 Gäste?",
    a: "Mit Bierzeltgarnituren: etwa 1 m² pro Person, also rund 50 m² — z. B. ein Zelt mit 6×8 m oder 5×10 m. Mit Tischen und Stühlen: etwa 1,5 m² pro Person, also rund 75 m² — z. B. 6×12 m.",
  },
  {
    q: "Kann ich Equipment wieder abbestellen, wenn ich es doch nicht brauche?",
    a: "Ja. Zubuchungen wie das Regen-Zelt kannst du bis [X] Tage vorher kostenfrei stornieren. Stückzahlen (z. B. Garnituren) passt du bis [Y] Tage vorher an. [FRISTEN BESTÄTIGEN]",
  },
  {
    q: "Kann ich sonntags zurückgeben?",
    a: "Der Wochenend-Tarif läuft bis Montag — du gibst einfach am Montag zurück, ohne Aufpreis. [BESTÄTIGEN]",
  },
];

export const faqLocation: FaqItem[] = [
  {
    q: "Was kostet die Eventlocation für einen Tag?",
    a: "Unsere Grundmiete: ab [PREIS] € (je nach Wochentag). Dazu kommen eine transparente Endreinigungs-Pauschale von [PREIS] € und eine Kaution von [BETRAG] €. Marktüblich sind je nach Ausstattung 300 bis 3.500 €. Alles steht klar im Angebot — als Festpreis.",
  },
  {
    q: "Wie viele Gäste passen rein?",
    a: "Mit Bestuhlung: bis [X] Personen. Beim Stehempfang: bis [Y] Personen. Mit Tanzfläche empfehlen wir bis [Z] Gäste. [KAPAZITÄT BESTÄTIGEN]",
  },
  {
    q: "Bis wann dürfen wir feiern?",
    a: "Drinnen: ohne Zeitlimit. Draußen gilt ab 22 Uhr die gesetzliche Nachtruhe — dann geht die Party drinnen weiter. [AUFLAGEN BESTÄTIGEN]",
  },
  {
    q: "Ist die Endreinigung im Preis?",
    a: "Die Endreinigung berechnen wir als feste Pauschale von [PREIS] € — sie steht von Anfang an im Angebot, nicht erst auf der Rechnung.",
  },
  {
    q: "Ist die Location barrierefrei?",
    a: "[JA/DETAILS BESTÄTIGEN: stufenloser Zugang, rollstuhlgerechtes WC.]",
  },
  {
    q: "Welche Technik ist vorhanden?",
    a: "Zur Grundausstattung gehören Tonanlage, Funkmikrofone und Beamer mit Leinwand. [BESTAND BESTÄTIGEN]",
  },
  {
    q: "Wann können wir dekorieren?",
    a: "Am Feiertag ab 10 Uhr — oder nach Absprache schon am Vorabend.",
  },
  {
    q: "Gibt es Parkplätze?",
    a: "Ja, [ANZAHL] Parkplätze direkt am Haus. [BESTÄTIGEN]",
  },
  {
    q: "Geht eine Freie Trauung im Außenbereich?",
    a: "[JA — GARTENBEREICH BESTÄTIGEN:] Unser Garten bietet Platz für eure Freie Trauung mit Bestuhlung.",
  },
  {
    q: "Wie hoch ist die Kaution?",
    a: "Die Kaution beträgt [BETRAG] € (üblich sind 300 bis 1.000 €). Nach schadenfreier Übergabe bekommt ihr sie innerhalb von 7 Tagen zurück.",
  },
];

export const faqB2b: FaqItem[] = [
  {
    q: "Passt eine Feier bei Ihnen in unser 110-€-Budget pro Mitarbeiter?",
    a: "Ja — unsere B2B-Pakete sind genau dafür kalkuliert. Sie sehen bei jedem Paket den All-in-Preis pro Person (brutto), also alles, was in die 110 € zählt: Raum, Essen, Getränke, Service und Deko.",
  },
  {
    q: "Was zählt alles in die 110 € Freibetrag?",
    a: "Alle Kosten der Feier brutto — auch Raum, Deko und Service — geteilt durch die anwesenden Teilnehmer. Begleitpersonen zählen zum jeweiligen Mitarbeiter. Bis 110 € pro Person bleibt die Feier steuerfrei; nur der Betrag darüber wird versteuert. Hinweis: Das ist keine Steuerberatung — Details klärt Ihre Buchhaltung.",
  },
  {
    q: "Bekommen wir eine Rechnung, die unsere Buchhaltung akzeptiert?",
    a: "Ja. Wir weisen die Umsatzsteuer getrennt aus: Speisen (7 %/19 %) und Getränke/Service (19 %). Das Angebot ist als PDF direkt an Ihre Geschäftsführung weiterleitbar.",
  },
  {
    q: "Wie schnell bekommen wir ein Angebot?",
    a: "Ihr konkretes, kalkuliertes Angebot erhalten Sie bis zum nächsten Werktag, 12:00 Uhr. Meist sind wir schneller.",
  },
  {
    q: "Wie läuft die Zahlung?",
    a: "Anzahlung: [X] % bzw. keine Anzahlung bis [BETRAG] €. Restzahlung auf Rechnung [Y] Tage nach dem Event. [KONDITIONEN BESTÄTIGEN]",
  },
  {
    q: "Was passiert, wenn bei Ihnen Personal ausfällt?",
    a: "[GARANTIE-VERSION NACH BESTÄTIGUNG:] Fällt Personal oder Technik aus, stellen wir Ersatz über unser Partner-Netzwerk. [FALLBACK:] Jedes Event wird von [NAME] persönlich geleitet; Technik wird vor jedem Event geprüft.",
  },
  {
    q: "Können wir die Location vorher besichtigen?",
    a: "Gern. Setzen Sie im Anfrageformular einfach das Häkchen bei „Besichtigung gewünscht' — wir schlagen Ihnen Termine vor.",
  },
  {
    q: "Wie kurzfristig können wir buchen?",
    a: "Je nach Termin sind auch 4 bis 8 Wochen Vorlauf möglich. Dezember-Termine sind am knappsten — prüfen Sie Ihren Wunschtermin am besten sofort oben auf dieser Seite.",
  },
  {
    q: "Wie sind die Stornobedingungen?",
    a: "Unsere Storno-Staffel ist fair und steht transparent im Angebot: [STORNOSTAFFEL DES UNTERNEHMERS].",
  },
  {
    q: "Organisieren Sie auch Programm und Technik?",
    a: "Ja. Ablauf, Technik, Personal und die Abstimmung mit DJs oder Künstlern übernimmt unsere Eventleitung — Sie haben einen festen Ansprechpartner.",
  },
];

export const faqHochzeit: FaqItem[] = [
  {
    q: "Was kostet eine Hochzeit bei euch ungefähr?",
    a: "Als Orientierung: [BEISPIELE, z. B. 60 Gäste ab X €, 80 Gäste ab Y €, 100 Gäste ab Z €] — gerechnet bis 24:00 Uhr, inklusive Raum, Buffet, Getränken, Service und Grunddeko. Jede weitere Stunde: Service [X] €/h plus Getränke ca. [Y] € pro Person. Euer Angebot enthält einen Festpreis.",
  },
  {
    q: "Ist unser Wunschtermin noch frei?",
    a: "Das prüft ihr in 10 Sekunden mit dem Termin-Checker oben auf dieser Seite. Wenn er frei ist, merken wir ihn nach eurer Anfrage 7 Tage für euch vor.",
  },
  {
    q: "Was ist im Preis drin — und was nicht?",
    a: "Drin: Raum, Buffet/Menü, Getränke bis 24 Uhr, Service, Grunddeko. Dazu kommen je nach Wunsch: DJ, Fotograf, Blumen-Deko, Verlängerung nach Mitternacht. Das zeigen wir euch ehrlich in der Drin/Dazu-Box — vor der Anfrage, nicht danach.",
  },
  {
    q: "Nehmt ihr Korkgeld?",
    a: "[VERSION A: Nein — bei uns gibt es kein Korkgeld.] [VERSION B: Korkgeld: X € pro Flasche — steht genau so auch im Angebot.] [REGELUNG BESTÄTIGEN]",
  },
  {
    q: "Wie hoch ist die Anzahlung — und was passiert, wenn wir stornieren?",
    a: "Anzahlung: nur [X] %. Rest [Y] Tage vor der Feier. Storno-Staffel: [STAFFEL]. Alles steht im Vertrag — fair und transparent. [KONDITIONEN BESTÄTIGEN]",
  },
  {
    q: "Was passiert bei Regen?",
    a: "[GARANTIE-VERSION:] Ihr bekommt kostenfrei unser Ausweichkonzept in den Innenbereich (Platz für bis zu [X] Gäste). Das planen wir von Anfang an mit.",
  },
  {
    q: "Wie viele Gäste passen rein — mit Tanzfläche?",
    a: "Bequem mit Tanzfläche: bis [X] Gäste. Maximal bestuhlt: [Y]. [KAPAZITÄT BESTÄTIGEN]",
  },
  {
    q: "Bis wann darf gefeiert werden?",
    a: "Drinnen ohne Zeitlimit. Draußen gilt ab 22 Uhr Nachtruhe — danach geht es drinnen weiter.",
  },
  {
    q: "Gibt es ein Probeessen?",
    a: "[BESTÄTIGEN:] Ja — bei eurer Besichtigung ist ein Probeessen inklusive. So wisst ihr vorher genau, was eure Gäste bekommen.",
  },
  {
    q: "Warum sollten wir bei einem neuen Anbieter buchen?",
    a: "Ehrliche Antwort: Wir sind neu — deshalb bekommt ihr Konditionen, die etablierte Locations nicht bieten: [ERÖFFNUNGSVORTEIL], eine niedrige Anzahlung, Probeessen inklusive und einen Festpreis ohne Überraschungen. Und wir haben Zeit für euch: Ihr seid uns nicht Hochzeit Nr. 87 in diesem Jahr.",
  },
];
