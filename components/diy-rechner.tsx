"use client";

import { useState } from "react";

/**
 * DIY-Vergleichsrechner (Plan 5.4): "Selbst organisieren vs. Paket".
 * Ehrliche Vollkostenrechnung aus dem Research: Kühlanhänger ~120 €, Transport ~80 €,
 * Endreinigung ~150 €, Kaution/Bruch, 15–20 Std. eigene Arbeit.
 * Beispielwerte vor Launch nachrechnen (Rechen-Regel Kap. 1).
 */
export function DiyRechner() {
  const [gaeste, setGaeste] = useState(50);

  const proKopfDiy = 22; // Metzger-Platten + Getränke Einkauf [RICHTWERT]
  const diyFix = 120 + 80 + 150 + 40; // Kühlanhänger + Transport + Reinigung + Bruch/Kleinkram
  const diySumme = gaeste * proKopfDiy + diyFix;
  const paketProKopf = 32; // [PAKET-PREIS DES UNTERNEHMERS]
  const paketSumme = gaeste * paketProKopf;
  const stunden = "15–20";

  const fmt = (n: number) =>
    n.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <label className="block max-w-xs text-sm font-medium">
        Wie viele Gäste kommen?
        <input
          type="number"
          min={20}
          max={150}
          value={gaeste}
          onChange={(e) => setGaeste(Math.max(0, Number(e.target.value)))}
          className="mt-1 h-11 w-full rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950"
        />
      </label>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-stone-200 p-4 dark:border-stone-700">
          <p className="font-semibold">Selbst organisieren</p>
          <ul className="mt-2 space-y-1 text-sm text-stone-600 dark:text-stone-400">
            <li>Essen &amp; Getränke (Einkauf): {fmt(gaeste * proKopfDiy)}</li>
            <li>Kühlanhänger mieten: ca. 120 €</li>
            <li>Transport &amp; Sprit: ca. 80 €</li>
            <li>Endreinigung: ca. 150 €</li>
            <li>Bruch, Kaution, Kleinkram: ca. 40 €</li>
          </ul>
          <p className="mt-3 text-xl font-bold">{fmt(diySumme)}</p>
          <p className="text-sm font-medium text-amber-700 dark:text-amber-500">+ {stunden} Stunden deine Arbeit</p>
        </div>
        <div className="rounded-lg border-2 border-amber-500 p-4">
          <p className="font-semibold">Unser Paket</p>
          <ul className="mt-2 space-y-1 text-sm text-stone-600 dark:text-stone-400">
            <li>Essen &amp; Getränke komplett</li>
            <li>Lieferung, Aufbau, Abbau</li>
            <li>Kühlung &amp; Equipment inklusive</li>
            <li>Reinigung inklusive</li>
            <li>Du feierst einfach mit</li>
          </ul>
          <p className="mt-3 text-xl font-bold">{fmt(paketSumme)}</p>
          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">+ 0 Stunden deine Arbeit</p>
        </div>
      </div>
      <p className="mt-4 text-xs text-stone-500">
        Beispielrechnung mit Richtwerten — dein Angebot enthält einen verbindlichen Festpreis.
      </p>
    </div>
  );
}
