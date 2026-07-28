"use client";

import { useMemo, useState } from "react";
import { useActionState } from "react";
import Link from "next/link";
import { submitInquiryAction, type InquiryState } from "@/app/actions";
import { equipment } from "@/lib/equipment-data";
import { site } from "@/lib/site";

/**
 * Mietkorb + Anfrage (Plan 5.8):
 * - Wochenend-/Werktag-Tarif wählbar (Samstags-Feier = Standard)
 * - PLZ → feste Zonenpauschale sofort sichtbar (inkl. Anlieferung UND Abholung)
 * - Grobe Gesamtsumme VOR dem Absenden
 * - max. 5 Pflichtfelder
 */

const initialState: InquiryState = { status: "idle", message: "" };

/**
 * Zonen-Zuordnung per PLZ: Launch-Version über Entfernungswahl des Nutzers,
 * wenn die PLZ nicht in der gepflegten Liste steht. [PLZ-LISTE VOM UNTERNEHMER]
 */
const plzZonen: Record<string, "A" | "B" | "C"> = {
  // Beispiel-Einträge — [VOM UNTERNEHMER FÜR SEIN LIEFERGEBIET PFLEGEN]
  "39104": "A",
  "39106": "A",
  "39114": "A",
  "39218": "B",
  "39240": "B",
  "06886": "C",
};

export function MietAnfrage() {
  const [tarif, setTarif] = useState<"wochenende" | "werktag">("wochenende");
  const [mengen, setMengen] = useState<Record<string, number>>({});
  const [plz, setPlz] = useState("");
  const [abholung, setAbholung] = useState(false);
  const [state, formAction, pending] = useActionState(submitInquiryAction, initialState);

  const zone = useMemo(() => {
    if (abholung) return null;
    if (plz.length === 5 && plzZonen[plz]) return plzZonen[plz];
    return undefined; // unbekannt
  }, [plz, abholung]);

  const lieferpauschale = useMemo(() => {
    if (abholung) return 0;
    if (zone) return site.deliveryZones.find((z) => z.zone === zone)?.price ?? 0;
    return null; // unbekannt → Spanne zeigen
  }, [zone, abholung]);

  const positionen = equipment
    .map((item) => ({ item, anzahl: mengen[item.id] ?? 0 }))
    .filter((p) => p.anzahl > 0);

  const equipmentSumme = positionen.reduce(
    (sum, p) => sum + p.anzahl * (tarif === "wochenende" ? p.item.wochenende : p.item.werktag),
    0
  );

  const fmt = (n: number) =>
    n.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

  const auswahlText = positionen
    .map((p) => `${p.anzahl}× ${p.item.name}`)
    .join(", ");

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/40">
        <p className="text-lg font-semibold text-emerald-900 dark:text-emerald-200">Anfrage eingegangen ✓</p>
        <p className="mt-2 text-emerald-900/90 dark:text-emerald-100/90">{state.message}</p>
        {state.holdNote && (
          <p className="mt-3 rounded-lg bg-white/70 p-3 text-sm font-medium text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100">
            {state.holdNote}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      {/* Katalog */}
      <div>
        <div className="mb-4 inline-flex rounded-lg border border-stone-300 p-1 dark:border-stone-700">
          {(
            [
              ["wochenende", "Wochenende (Fr–Mo)"],
              ["werktag", "Werktag"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setTarif(key)}
              className={`rounded-md px-4 py-2 text-sm font-semibold ${
                tarif === key ? "bg-amber-600 text-white" : "text-stone-600 dark:text-stone-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {equipment.map((item) => (
            <div key={item.id} className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900">
              <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-stone-300 bg-stone-100 text-xs text-stone-500 dark:border-stone-700 dark:bg-stone-950">
                [FOTO: {item.name}]
              </div>
              <p className="mt-3 font-semibold">{item.name}</p>
              <p className="mt-1 text-sm">
                <span className={tarif === "werktag" ? "font-bold text-amber-700 dark:text-amber-500" : ""}>
                  Werktag {fmt(item.werktag)}
                </span>
                {" · "}
                <span className={tarif === "wochenende" ? "font-bold text-amber-700 dark:text-amber-500" : ""}>
                  Wochenende {fmt(item.wochenende)}
                </span>
              </p>
              <p className="text-xs text-stone-500">{item.einheit}</p>
              {item.hinweis && <p className="mt-2 text-xs text-stone-600 dark:text-stone-400">{item.hinweis}</p>}
              <label className="mt-3 flex items-center gap-2 text-sm">
                Anzahl:
                <input
                  type="number"
                  min={0}
                  max={item.maxAnzahl}
                  value={mengen[item.id] ?? 0}
                  onChange={(e) =>
                    setMengen((m) => ({ ...m, [item.id]: Math.min(item.maxAnzahl, Math.max(0, Number(e.target.value))) }))
                  }
                  className="h-9 w-20 rounded-lg border border-stone-300 px-2 dark:border-stone-700 dark:bg-stone-950"
                />
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Mietkorb + Formular */}
      <div className="lg:sticky lg:top-20 lg:self-start">
        <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <p className="font-bold">Dein Mietkorb</p>
          {positionen.length === 0 ? (
            <p className="mt-2 text-sm text-stone-500">Wähle links dein Equipment aus.</p>
          ) : (
            <ul className="mt-2 space-y-1 text-sm">
              {positionen.map((p) => (
                <li key={p.item.id} className="flex justify-between gap-2">
                  <span>
                    {p.anzahl}× {p.item.name}
                  </span>
                  <span className="font-medium">
                    {fmt(p.anzahl * (tarif === "wochenende" ? p.item.wochenende : p.item.werktag))}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Lieferung / PLZ-Widget */}
          <div className="mt-4 border-t border-stone-200 pt-3 dark:border-stone-800">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={abholung} onChange={(e) => setAbholung(e.target.checked)} />
              Ich hole selbst ab (kostenlos)
            </label>
            {!abholung && (
              <>
                <label className="mt-2 block text-sm font-medium">
                  Deine PLZ — Lieferpreis sofort sehen
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={5}
                    value={plz}
                    onChange={(e) => setPlz(e.target.value.replace(/\D/g, ""))}
                    placeholder="z. B. 39104"
                    className="mt-1 h-10 w-full rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950"
                  />
                </label>
                {lieferpauschale !== null ? (
                  <p className="mt-2 text-sm">
                    Lieferung Zone {zone}: <strong>{fmt(lieferpauschale)}</strong>{" "}
                    <span className="text-xs text-stone-500">(Anlieferung UND Abholung inklusive)</span>
                  </p>
                ) : (
                  <p className="mt-2 text-xs text-stone-500">
                    Feste Zonen inkl. Anlieferung + Abholung:{" "}
                    {site.deliveryZones.map((z) => `Zone ${z.zone} (${z.range}): ${z.price} €`).join(" · ")}
                    {plz.length === 5 && " — deine PLZ ordnen wir dir im Angebot zu."}
                  </p>
                )}
              </>
            )}
          </div>

          {/* Summe */}
          <div className="mt-3 border-t border-stone-200 pt-3 dark:border-stone-800">
            <p className="flex justify-between text-sm">
              <span>Equipment ({tarif === "wochenende" ? "Wochenend-Tarif" : "Werktag"}):</span>
              <strong>{fmt(equipmentSumme)}</strong>
            </p>
            {!abholung && lieferpauschale !== null && (
              <p className="flex justify-between text-sm">
                <span>Lieferung:</span>
                <strong>{fmt(lieferpauschale)}</strong>
              </p>
            )}
            <p className="mt-1 flex justify-between text-base font-bold">
              <span>Richtpreis gesamt:</span>
              <span>{fmt(equipmentSumme + (lieferpauschale ?? 0))}</span>
            </p>
            <p className="mt-1 text-xs text-stone-500">
              Alle Preise inkl. MwSt. Dein Angebot enthält einen verbindlichen Festpreis. Dazu: Kaution [BETRAG] €
              (zurück binnen 7 Tagen).
            </p>
          </div>

          {/* Formular (max. 5 Pflichtfelder) */}
          <form id="anfrage" action={formAction} className="mt-4 border-t border-stone-200 pt-4 dark:border-stone-800">
            <input type="hidden" name="funnel" value="equipment" />
            <input type="hidden" name="equipment" value={auswahlText || "Noch keine Auswahl"} />
            <input type="hidden" name="tarif" value={tarif} />
            <input
              type="hidden"
              name="richtpreis"
              value={fmt(equipmentSumme + (lieferpauschale ?? 0))}
            />
            <div className="space-y-3">
              <label className="block text-sm font-medium">
                Dein Name *
                <input name="name" required className="mt-1 h-10 w-full rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950" />
              </label>
              <label className="block text-sm font-medium">
                E-Mail oder Telefon *
                <input
                  name="email"
                  placeholder="E-Mail"
                  className="mt-1 h-10 w-full rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950"
                />
                <input
                  name="phone"
                  placeholder="oder Telefonnummer"
                  className="mt-2 h-10 w-full rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950"
                />
              </label>
              <label className="block text-sm font-medium">
                Wunschtermin *
                <input name="date" type="date" required className="mt-1 h-10 w-full rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950" />
              </label>
              <label className="block text-sm font-medium">
                Lieferort (PLZ) {abholung ? "" : "*"}
                <input
                  name="lieferort"
                  required={!abholung}
                  defaultValue={plz}
                  placeholder={abholung ? "Selbstabholung" : "PLZ"}
                  className="mt-1 h-10 w-full rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950"
                />
              </label>
              <label className="block text-sm font-medium">
                Wann dürfen wir dich anrufen? (optional)
                <input name="anrufzeit" placeholder="z. B. abends ab 18 Uhr" className="mt-1 h-10 w-full rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950" />
              </label>
              <label className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-400">
                <input type="checkbox" name="consent" required className="mt-0.5" />
                <span>
                  Einverstanden, dass meine Angaben zur Bearbeitung genutzt werden (<Link href="/datenschutz" className="underline">Datenschutz</Link>). *
                </span>
              </label>
            </div>
            {state.status === "error" && (
              <p className="mt-2 text-sm font-medium text-red-700 dark:text-red-400" role="alert">
                {state.message}
              </p>
            )}
            <button
              type="submit"
              disabled={pending}
              className="mt-3 h-11 w-full rounded-lg bg-amber-600 font-semibold text-white hover:bg-amber-700 disabled:opacity-50"
            >
              {pending ? "Wird gesendet …" : "Verfügbarkeit anfragen"}
            </button>
            <p className="mt-2 text-xs font-medium text-stone-600 dark:text-stone-400">
              ✓ Verfügbarkeits-Bestätigung bis zum nächsten Werktag, 12:00 Uhr
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
