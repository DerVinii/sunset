/**
 * Zentrale Site-Konfiguration.
 *
 * Hier steht ausschließlich, was der Unternehmer bestätigt hat. Telefonnummer,
 * E-Mail, PLZ, Steuernummer und eine eigene Domain liegen noch nicht vor und
 * fehlen deshalb bewusst, statt als Platzhalter durch die Seite zu laufen.
 * Sobald sie da sind, trägt man sie hier ein und sie erscheinen überall.
 */

export const site = {
  name: "Sunset Events",
  region: "Sachsen-Anhalt",
  city: "Staßfurt",
  address: {
    street: "Atzendorfer Straße 2",
    city: "Staßfurt",
  },
  /** Aktuelle Adresse der Seite. Wird ersetzt, sobald die eigene Domain steht. */
  domain: "https://sunset-psi-seven.vercel.app",
} as const;

export type Anlass =
  | "firmenfeier"
  | "hochzeit"
  | "geburtstag"
  | "jugendweihe-taufe-kommunion"
  | "equipment-miete"
  | "sonstiges";

export const anlassLabels: Record<Anlass, string> = {
  firmenfeier: "Firmenfeier",
  hochzeit: "Hochzeit",
  geburtstag: "Geburtstag oder Jubiläum",
  "jugendweihe-taufe-kommunion": "Jugendweihe, Taufe oder Kommunion",
  "equipment-miete": "Equipment mieten",
  sonstiges: "Etwas anderes",
};
