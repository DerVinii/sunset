"use client";

import { useState } from "react";

/**
 * B2B-Budget-Rechner (Plan 5.2): Personenzahl × Paket → Richtbudget netto/brutto
 * + Hinweis zur 110-€-Grenze. Richtwerte = [PLATZHALTER-PREISE des Unternehmers].
 */
const PAKETE = [
  { key: "sommerfest", label: "Sommerfest-Paket", netto: 39, allInBrutto: 62 },
  { key: "weihnachtsfeier", label: "Weihnachtsfeier-Paket", netto: 49, allInBrutto: 78 },
  { key: "premium", label: "Premium-Paket", netto: 69, allInBrutto: 105 },
];

const MWST = 0.19;

export function B2bBudgetRechner() {
  const [personen, setPersonen] = useState(50);
  const [paketKey, setPaketKey] = useState(PAKETE[0].key);

  const paket = PAKETE.find((p) => p.key === paketKey) ?? PAKETE[0];
  const netto = personen * paket.netto;
  const brutto = netto * (1 + MWST);
  const allIn = personen * paket.allInBrutto;
  const inFreibetrag = paket.allInBrutto <= 110;

  const fmt = (n: number) =>
    n.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <div className="grid gap-4 sm:grid-cols-2">
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
          Paket
          <select
            value={paketKey}
            onChange={(e) => setPaketKey(e.target.value)}
            className="mt-1 h-11 w-full rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950"
          >
            {PAKETE.map((p) => (
              <option key={p.key} value={p.key}>
                {p.label} (ab {p.netto} €/Person netto)
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-5 rounded-lg bg-stone-50 p-4 dark:bg-stone-950">
        <p className="text-sm text-stone-500">Ihr Richtbudget ({personen} Personen):</p>
        <p className="mt-1 text-2xl font-bold">
          {fmt(netto)} <span className="text-base font-medium text-stone-500">netto</span>
        </p>
        <p className="text-sm text-stone-600 dark:text-stone-400">{fmt(brutto)} brutto (Catering-Anteil)</p>
        <p className="mt-2 text-sm">
          All-in brutto pro Person (zählt für die 110-€-Prüfung): <strong>{paket.allInBrutto} €</strong>
          {inFreibetrag ? (
            <span className="font-medium text-emerald-700 dark:text-emerald-400">, passt in den 110-€-Freibetrag ✓</span>
          ) : (
            <span className="font-medium text-amber-700 dark:text-amber-400">, über 110 €: der Mehrbetrag wird versteuert</span>
          )}
        </p>
        <p className="mt-2 text-xs text-stone-500">
          Im Richtbudget enthalten: Raum, Buffet, Getränke, Service, Grundtechnik. Kommt je nach Wunsch dazu: DJ,
          Deko-Upgrades, Programm. Richtpreise zur Orientierung. Ihr Angebot enthält einen verbindlichen Festpreis.
        </p>
      </div>

      <a
        href="#anfrage"
        className="mt-4 inline-flex h-11 items-center rounded-lg bg-amber-600 px-5 font-semibold text-white hover:bg-amber-700"
      >
        Dieses Richtbudget als Angebot anfragen
      </a>
    </div>
  );
}
