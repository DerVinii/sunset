/**
 * Equipment-Katalog (Plan 5.8).
 *
 * BESTAND (vom Unternehmer bestätigt): Bierwagen inkl. Zapfanlage, Zelte, Hüpfburg,
 * Bänke und Tische (= Bierzeltgarnituren), Boxautomat, Kickertisch.
 * NICHT bestätigt und deshalb sichtbar markiert: Stehtische, Geschirr-Sets.
 *
 * ALLE PREISE SIND WEITERHIN [PLATZHALTER DES UNTERNEHMERS] — Marktkorridore aus dem
 * Research als Startwerte. Sie MÜSSEN vor dem Livegang ersetzt werden: der Rechner
 * summiert sie zu einer Gesamtsumme, die der Kunde als echte Zahl liest.
 * Beide Tarife gleich groß anzeigen (Werktag/Wochenende). Fast jede private Feier
 * ist samstags.
 */

export type EquipmentItem = {
  id: string;
  name: string;
  werktag: number;
  wochenende: number;
  einheit: string;
  hinweis?: string;
  maxAnzahl: number;
};

export const equipment: EquipmentItem[] = [
  {
    id: "bierwagen",
    name: "Bierwagen",
    werktag: 250,
    wochenende: 420,
    einheit: "pro Tag / Wochenende (Fr–Mo)",
    hinweis:
      "Kommt einsatzbereit mit Kühlung & CO2. Fassbier über uns ([SORTEN], 50-l-Fass ab [PREIS] €, nicht angezapfte Fässer nehmen wir zurück), oder bring dein eigenes Bier mit. Endreinigung von Zapfanlage & Leitungen übernehmen wir. [REGELUNG BESTÄTIGEN]",
    maxAnzahl: 1,
  },
  {
    id: "zapfanlage",
    name: "Zapfanlage (2-leitig, mit Kühlung)",
    werktag: 85,
    wochenende: 130,
    einheit: "pro Tag / Wochenende",
    maxAnzahl: 3,
  },
  {
    id: "garnitur",
    name: "Bierzeltgarnitur (1 Tisch, 2 Bänke)",
    werktag: 15,
    wochenende: 15,
    einheit: "pro Stück & Tag",
    maxAnzahl: 40,
  },
  {
    id: "stehtisch",
    name: "Stehtisch (mit Husse) [IM BESTAND?]",
    werktag: 12,
    wochenende: 12,
    einheit: "pro Stück & Tag",
    maxAnzahl: 30,
  },
  {
    id: "zelt-6x8",
    name: "Festzelt 6×8 m (bis ~50 Personen mit Garnituren)",
    werktag: 290,
    wochenende: 390,
    einheit: "pro Wochenende inkl. Aufbau",
    hinweis: "Kostenfrei stornierbar bis [X] Tage vorher, praktisch als Regen-Absicherung.",
    maxAnzahl: 2,
  },
  {
    id: "huepfburg",
    name: "Hüpfburg",
    werktag: 120,
    wochenende: 180,
    einheit: "pro Tag / Wochenende",
    hinweis: "Der Klassiker, wenn Kinder mitfeiern. Aufbau und Abbau übernehmen wir.",
    maxAnzahl: 1,
  },
  {
    id: "boxautomat",
    name: "Boxautomat",
    werktag: 150,
    wochenende: 220,
    einheit: "pro Tag / Wochenende",
    hinweis: "Sorgt zuverlässig für Wettbewerb unter den Gästen. [PREIS BESTÄTIGEN]",
    maxAnzahl: 1,
  },
  {
    id: "kicker",
    name: "Kickertisch",
    werktag: 60,
    wochenende: 90,
    einheit: "pro Tag / Wochenende",
    hinweis: "Für drinnen und für überdachte Außenbereiche. [PREIS BESTÄTIGEN]",
    maxAnzahl: 1,
  },
  {
    id: "geschirr",
    name: "Geschirr & Gläser (Set für 10 Personen) [IM BESTAND?]",
    werktag: 12,
    wochenende: 12,
    einheit: "pro Set & Event",
    hinweis: "Rückgabe speiserein. Die Endreinigung übernehmen wir. [REGELUNG]",
    maxAnzahl: 20,
  },
];
