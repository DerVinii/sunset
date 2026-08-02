"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { submitEventAnfrageAction, type AnfrageState } from "@/app/actions";

/**
 * Dreistufiges Anfrageformular (Struktur 7.2).
 * Schritt 1: Eventtyp als Kacheln, Klick springt direkt weiter.
 * Schritt 2: Eckdaten, alles optional, Schätzen ist ausdrücklich okay.
 * Schritt 3: Kontaktdaten und Freitext, dann Absenden.
 * Bei Erfolg leitet die Server-Action auf /danke weiter.
 */

const EVENTTYPEN = [
  { id: "firmenfeier", label: "Firmenfeier", hint: "Weihnachtsfeier, Sommerfest, Jubiläum" },
  { id: "tagung", label: "Tagung", hint: "Konferenz, Versammlung" },
  { id: "produktpraesentation", label: "Produktpräsentation", hint: "Launch, Roadshow, Messe" },
  { id: "incentive", label: "Teamevent", hint: "Teamtag, Incentive" },
  { id: "privat", label: "Private Feier", hint: "Hochzeit, Geburtstag, Jugendweihe" },
  { id: "anderes", label: "Etwas anderes", hint: "Erzähl uns im letzten Schritt davon" },
] as const;

const BUDGETS = [
  "Bis 2.500 €",
  "2.500 bis 5.000 €",
  "5.000 bis 10.000 €",
  "Über 10.000 €",
  "Weiß ich noch nicht",
];

const initialState: AnfrageState = { status: "idle", message: "" };

const inputClass =
  "mt-1 h-11 w-full rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950";

export function EventAnfrageForm({ id = "anfrage" }: { id?: string }) {
  const [state, formAction, pending] = useActionState(submitEventAnfrageAction, initialState);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [eventtyp, setEventtyp] = useState("");
  const [datum, setDatum] = useState("");
  const [gaeste, setGaeste] = useState("");
  const [ort, setOrt] = useState("");
  const [budget, setBudget] = useState("");

  const typLabel = EVENTTYPEN.find((t) => t.id === eventtyp)?.label ?? "";

  return (
    <div
      id={id}
      className="scroll-mt-24 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 dark:border-stone-800 dark:bg-stone-900"
    >
      {/* Fortschritt */}
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-stone-500 dark:text-stone-400">
          Schritt {step} von 3
          {step > 1 && typLabel ? ` · ${typLabel}` : ""}
        </p>
        <div className="flex gap-1.5" aria-hidden>
          {[1, 2, 3].map((s) => (
            <span
              key={s}
              className={`h-1.5 w-8 rounded-full ${
                s <= step ? "bg-amber-600" : "bg-stone-200 dark:bg-stone-700"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Schritt 1: Eventtyp */}
      {step === 1 && (
        <div className="mt-5">
          <h3 className="text-lg font-semibold">Worum geht es?</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {EVENTTYPEN.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setEventtyp(t.id);
                  setStep(2);
                }}
                className={`cursor-pointer rounded-xl border p-4 text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-amber-500 hover:shadow-sm ${
                  eventtyp === t.id
                    ? "border-amber-600 bg-amber-50 dark:bg-amber-950/30"
                    : "border-stone-200 dark:border-stone-700"
                }`}
              >
                <span className="block font-semibold">{t.label}</span>
                <span className="mt-0.5 block text-sm text-stone-500 dark:text-stone-400">{t.hint}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Schritt 2: Eckdaten */}
      {step === 2 && (
        <div className="mt-5">
          <h3 className="text-lg font-semibold">Die Eckdaten</h3>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            So genau es geht. Schätzen ist okay, leer lassen auch.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Datum oder Zeitraum
              <input
                type="text"
                value={datum}
                onChange={(e) => setDatum(e.target.value)}
                placeholder="z. B. 14.08. oder Sommer 2027"
                className={inputClass}
              />
            </label>
            <label className="block text-sm font-medium">
              Ungefähre Gästezahl
              <input
                type="text"
                inputMode="numeric"
                value={gaeste}
                onChange={(e) => setGaeste(e.target.value)}
                placeholder="z. B. 80"
                className={inputClass}
              />
            </label>
            <label className="block text-sm font-medium">
              Ort
              <input
                type="text"
                value={ort}
                onChange={(e) => setOrt(e.target.value)}
                placeholder="Bei uns in Staßfurt oder eure Adresse"
                className={inputClass}
              />
            </label>
            <label className="block text-sm font-medium">
              Budgetrahmen
              <select value={budget} onChange={(e) => setBudget(e.target.value)} className={inputClass}>
                <option value="">Bitte wählen (optional)</option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="cursor-pointer text-sm font-medium text-stone-500 underline-offset-2 hover:underline"
            >
              Zurück
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="cta-glow cursor-pointer rounded-xl bg-sunset px-6 py-3 font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Weiter
            </button>
          </div>
        </div>
      )}

      {/* Schritt 3: Kontakt + Absenden */}
      {step === 3 && (
        <form action={formAction} className="mt-5">
          <h3 className="text-lg font-semibold">Wie erreichen wir dich?</h3>

          {/* Werte aus Schritt 1 und 2 */}
          <input type="hidden" name="eventtyp" value={eventtyp} />
          <input type="hidden" name="datum" value={datum} />
          <input type="hidden" name="gaeste" value={gaeste} />
          <input type="hidden" name="ort" value={ort} />
          <input type="hidden" name="budget" value={budget} />

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Name *
              <input type="text" name="name" required className={inputClass} />
            </label>
            <label className="block text-sm font-medium">
              E-Mail *
              <input type="email" name="email" required className={inputClass} />
            </label>
            <label className="block text-sm font-medium sm:col-span-2">
              Telefon (optional)
              <input type="tel" name="phone" className={inputClass} />
            </label>
            <label className="block text-sm font-medium sm:col-span-2">
              Was sollen wir noch wissen?
              <textarea
                name="nachricht"
                rows={3}
                placeholder="Alles, was dir wichtig ist"
                className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 dark:border-stone-700 dark:bg-stone-950"
              />
            </label>
          </div>

          <label className="mt-4 flex items-start gap-2 text-xs text-stone-600 dark:text-stone-400">
            <input type="checkbox" name="consent" required className="mt-0.5" />
            <span>
              Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage genutzt werden. Details in der{" "}
              <Link href="/datenschutz" className="underline">
                Datenschutzerklärung
              </Link>
              . *
            </span>
          </label>

          {state.status === "error" && (
            <p className="mt-3 text-sm font-medium text-red-700 dark:text-red-400" role="alert">
              {state.message}
            </p>
          )}

          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="cursor-pointer text-sm font-medium text-stone-500 underline-offset-2 hover:underline"
            >
              Zurück
            </button>
            <button
              type="submit"
              disabled={pending}
              className="cta-glow cursor-pointer rounded-xl bg-sunset px-6 py-3 font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-50"
            >
              {pending ? "Wird gesendet …" : "Anfrage absenden"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
