/**
 * Was wir vermieten.
 *
 * Nur bestätigter Bestand. Preise stehen bewusst nirgends: Es gibt noch keine
 * Preisliste, und geschätzte Zahlen wären für den Mieter dasselbe wie falsche.
 * Stückzahlen fehlen aus dem gleichen Grund, deshalb fragt das Formular sie als
 * Freitext ab statt in einem Auswahlfeld mit erfundenem Maximum.
 */

export type EquipmentItem = {
  id: string;
  name: string;
  text: string;
};

export const equipment: EquipmentItem[] = [
  {
    id: "bierwagen",
    name: "Bierwagen mit Zapfanlage",
    text: "Kommt komplett mit Zapfanlage. Das Herzstück für jede Feier, bei der Bier vom Fass laufen soll.",
  },
  {
    id: "zelte",
    name: "Zelte",
    text: "Für den Fall, dass das Wetter nicht mitspielt, oder als fester Platz zum Sitzen im Freien.",
  },
  {
    id: "garnituren",
    name: "Tische und Bänke",
    text: "Die klassische Bestuhlung für draußen. Sag uns, wie viele Gäste kommen, dann rechnen wir dir die Menge aus.",
  },
  {
    id: "huepfburg",
    name: "Hüpfburg",
    text: "Wenn Kinder mitfeiern, ist die Frage nach der Beschäftigung damit erledigt.",
  },
  {
    id: "boxautomat",
    name: "Boxautomat",
    text: "Sorgt zuverlässig dafür, dass abends jemand seinen Highscore verteidigen will.",
  },
  {
    id: "kicker",
    name: "Kickertisch",
    text: "Passt drinnen wie unter ein Zelt und hält Gäste zusammen, die sich vorher nicht kannten.",
  },
];
