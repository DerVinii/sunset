"use client";

import { useMemo, useState } from "react";
import { site } from "@/lib/site";

/**
 * Zentraler Budget-Rechner (Plan 5.10):
 * Anlass + Personenzahl + Säulen → Richtbudget, IMMER zweigeteilt (Drin/Dazu).
 * PLZ optional: mit PLZ echte Zonenpauschale, ohne PLZ sichtbare Zone-A-Annahme.
 * Richtwerte = [PLATZHALTER DES UNTERNEHMERS].
 */

type AnlassKey = "firmenfeier" | "hochzeit" | "geburtstag";

const ANLAESSE: Record<AnlassKey, { label: string; proKopf: number; grundkosten: number; dazu: string[] }> = {
  firmenfeier: {
    label: "Firmenfeier",
    proKopf: 46,
    grundkosten: 300,
    dazu: ["DJ oder Programm", "Deko-Upgrades", "Verlängerung nach Vereinbarung"],
  },
  hochzeit: {
    label: "Hochzeit",
    proKopf: 118,
    grundkosten: 0,
    dazu: ["DJ oder Band", "Fotograf/in", "Blumen-Deko", "Verlängerung nach 24 Uhr"],
  },
  geburtstag: {
    label: "Geburtstag / private Feier",
    proKopf: 32,
    grundkosten: 250,
    dazu: ["Extra-Getränkepakete", "Deko-Wünsche", "Musik/DJ"],
  },
};

const plzZonen: Record<string, "A" | "B" | "C"> = {
  "39104": "A",
  "39106": "A",
  "39114": "A",
  "39218": "B",
  "39240": "B",
  "06886": "C",
};

export function BudgetRechner() {
  const [anlass, setAnlass] = useState<AnlassKey>("firmenfeier");
  const [personen, setPersonen] = useState(50);
  const [plz, setPlz] = useState("");

  const cfg = ANLAESSE[anlass];
  const zone = useMemo(() => (plz.length === 5 ? plzZonen[plz] : undefined), [plz]);
  const zoneA = site.deliveryZones[0];
  const lieferung = zone
    ? site.deliveryZones.find((z) => z.zone === zone)?.price ?? zoneA.price
    : zoneA.price;

  const summe = personen * cfg.proKopf + cfg.grundkosten + lieferung;
  const fmt = (n: number) =>
    n.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block text-sm font-medium">
          Anlass
          <select
            value={anlass}
            onChange={(e) => setAnlass(e.target.value as AnlassKey)}
            className="mt-1 h-11 w-full rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950"
          >
            {Object.entries(ANLAESSE).map(([key, a]) => (
              <option key={key} value={key}>
                {a.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium">
          Personenzahl
          <input
            type="number"
            min={10}
            max={300}
            value={personen}
            onChange={(e) => setPersonen(Math.max(0, Number(e.target.value)))}
            className="mt-1 h-11 w-full rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950"
          />
        </label>
        <label className="block text-sm font-medium">
          PLZ (optional, für echte Lieferkosten)
          <input
            type="text"
            inputMode="numeric"
            maxLength={5}
            value={plz}
            onChange={(e) => setPlz(e.target.value.replace(/\D/g, ""))}
            placeholder="z. B. 39104"
            className="mt-1 h-11 w-full rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950"
          />
        </label>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_1fr]">
        <div className="rounded-lg bg-stone-50 p-4 dark:bg-stone-950">
          <p className="text-sm text-stone-500">Dein Richtbudget ({personen} Personen):</p>
          <p className="mt-1 text-3xl font-bold">{fmt(summe)}</p>
          <p className="mt-1 text-xs text-stone-500">
            {zone
              ? `Lieferung Zone ${zone}: ${fmt(lieferung)} (echte Zonenpauschale)`
              : `Gerechnet mit Zone A (${zoneA.range}): ${fmt(zoneA.price)}, Zone B +${
                  site.deliveryZones[1].price - zoneA.price
                } €, Zone C +${site.deliveryZones[2].price - zoneA.price} €`}
          </p>
        </div>
        <div className="grid gap-3">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm dark:border-emerald-900 dark:bg-emerald-950/40">
            <p className="font-semibold text-emerald-900 dark:text-emerald-200">Im Richtbudget enthalten:</p>
            <p className="mt-1 text-emerald-900/85 dark:text-emerald-100/85">
              Essen &amp; Getränke, Service, Raum/Equipment-Grundausstattung, und alle Pflicht-Nebenkosten
              (Lieferung, Endreinigung) schon eingerechnet.
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-stone-50 p-3 text-sm dark:border-stone-800 dark:bg-stone-950">
            <p className="font-semibold">Kommt je nach Wunsch dazu:</p>
            <p className="mt-1 text-stone-600 dark:text-stone-400">{cfg.dazu.join(", ")}</p>
          </div>
        </div>
      </div>

      {/* Primärer CTA direkt unter dem Ergebnis (Plan 5.10) */}
      <a
        href={`/${anlass === "geburtstag" ? "private-feier" : anlass}#anfrage`}
        className="mt-5 inline-flex h-12 items-center rounded-lg bg-amber-600 px-6 font-semibold text-white hover:bg-amber-700"
      >
        Dieses Richtbudget als unverbindliches Angebot anfragen
      </a>
      <p className="mt-3 text-xs text-stone-500">
        Richtpreise zur Orientierung. Dein Angebot enthält einen verbindlichen Festpreis. Keine Nachberechnungen.
      </p>
    </div>
  );
}
