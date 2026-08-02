/**
 * Zentrale Site-Konfiguration.
 * Arbeitsmarke "Sunset Events": Umbenennung = nur diese Datei ändern.
 * [PLATZHALTER] werden vom Unternehmer geliefert (siehe website-plan.md Kap. 10).
 */

export const site = {
  name: "Sunset Events",
  legalName: "[FIRMENNAME / INHABER]",
  domain: "https://sunset-events.example", // [DOMAIN]
  region: "Sachsen-Anhalt",
  city: "Staßfurt",
  address: {
    street: "Atzendorfer Straße 2",
    zip: "[PLZ — vom Unternehmer nachzureichen]",
    city: "Staßfurt",
  },
  phone: "+49 000 0000000", // [TELEFONNUMMER]
  phoneDisplay: "0000 / 000 00 00", // [TELEFONNUMMER]
  phoneHours: "Mo–Fr 9–17 Uhr", // [ZEITEN BESTÄTIGEN]
  whatsapp: "+49 000 0000000", // [WHATSAPP-BUSINESS-NUMMER]
  email: "info@sunset-events.example", // [E-MAIL]
  /**
   * DIE eine zentrale Textquelle für das Antwortzeit-Versprechen (Plan Kap. 1).
   * Wird überall referenziert: Badges, Formulare, Auto-Reply, Kontaktseite.
   */
  responsePromise: {
    sie: "Ihr Angebot bis zum nächsten Werktag, 12:00 Uhr.",
    du: "Euer Angebot bis zum nächsten Werktag, 12:00 Uhr.",
    duSingular: "Dein Angebot bis zum nächsten Werktag, 12:00 Uhr.",
  },
  priceLogic: {
    sie: "Online sehen Sie Richtpreise zur Orientierung. Ihr Angebot enthält einen verbindlichen Festpreis, danach keine Nachberechnungen.",
    du: "Online seht ihr Richtpreise zur Orientierung. Euer Angebot enthält einen verbindlichen Festpreis, danach keine Nachberechnungen.",
  },
  serviceAreas: {
    location: { radiusKm: 25, label: "Location: 0–25 km" },
    catering: { radiusKm: 40, label: "Catering & Service: 0–40 km" },
    equipment: { radiusKm: 80, label: "Equipment & Bierwagen: 0–80 km" },
  },
  /** Feste Liefer-Zonenpauschalen inkl. Anlieferung UND Abholung (Plan 5.8). [PREISE BESTÄTIGEN] */
  deliveryZones: [
    { zone: "A", range: "0–20 km", price: 39 },
    { zone: "B", range: "21–40 km", price: 69 },
    { zone: "C", range: "41–80 km", price: 119 },
  ],
  /**
   * Referenzpunkt für die Zonenberechnung: der Standort Staßfurt.
   * [PLZ NACHREICHEN] — solange hier keine echte Staßfurter PLZ steht, greift im
   * Formular die manuelle Entfernungswahl statt der automatischen Zuordnung.
   */
  basePlz: "[PLZ]",
  social: {
    instagram: "https://instagram.com/[PROFIL]",
    googleBusiness: "[GOOGLE-BUSINESS-PROFIL-URL]",
  },
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
  geburtstag: "Geburtstag / Jubiläum",
  "jugendweihe-taufe-kommunion": "Jugendweihe / Taufe / Kommunion",
  "equipment-miete": "Equipment-Miete",
  sonstiges: "Etwas anderes",
};
