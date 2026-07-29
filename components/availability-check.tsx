"use client";

import { useState, useTransition } from "react";
import { checkDateAction } from "@/app/actions";
import type { AvailabilityResult } from "@/lib/availability";

/**
 * Einzelabfrage-Widget (Plan Kap. 4): Wunschdatum → frei/belegt.
 * KEINE offene Kalenderansicht (Anti-Social-Proof bei leerem Kalender).
 * Antworten sind immer gelabelt ("Unsere Location ist am … frei") und tragen
 * den zentralen Kalender-Disclaimer. "vorgemerkt" wird als "auf Anfrage" angezeigt.
 */
export function AvailabilityCheck({
  calendar,
  labelSubject,
  tone = "sie",
  ctaTargetId,
}: {
  calendar: "location" | "bierwagen";
  labelSubject: string; // z. B. "Unsere Location" | "Der Bierwagen"
  tone?: "sie" | "du";
  ctaTargetId?: string; // Anker zum Formular, wenn frei
}) {
  const [date, setDate] = useState("");
  const [result, setResult] = useState<AvailabilityResult | null>(null);
  const [pending, startTransition] = useTransition();

  const disclaimer =
    tone === "sie"
      ? "Anzeige unverbindlich. Wir bestätigen Ihren Termin bis zum nächsten Werktag, 12:00 Uhr."
      : "Anzeige unverbindlich. Wir bestätigen deinen Termin bis zum nächsten Werktag, 12:00 Uhr.";

  function onCheck() {
    if (!date) return;
    startTransition(async () => {
      setResult(await checkDateAction(calendar, date));
    });
  }

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor={`date-${calendar}`}>
          Wunschtermin
        </label>
        <input
          id={`date-${calendar}`}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="h-11 flex-1 rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950"
        />
        <button
          type="button"
          onClick={onCheck}
          disabled={pending || !date}
          className="h-11 rounded-lg bg-amber-600 px-5 font-semibold text-white hover:bg-amber-700 disabled:opacity-50"
        >
          {pending ? "Prüfe …" : "Termin prüfen"}
        </button>
      </div>

      {result && (
        <div className="mt-3 text-sm" role="status">
          {result.status === "frei" && (
            <p className="font-medium text-emerald-700 dark:text-emerald-400">
              {labelSubject} ist am {formatDate(result.date)} frei.{" "}
              {ctaTargetId && (
                <a href={`#${ctaTargetId}`} className="underline">
                  Jetzt anfragen. Datum wird übernommen.
                </a>
              )}
            </p>
          )}
          {result.status === "auf-anfrage" && (
            <p className="font-medium text-amber-700 dark:text-amber-400">
              Für den {formatDate(result.date)} liegt bereits eine Anfrage vor. {tone === "sie" ? "Fragen Sie" : "Frag"} gern trotzdem an, wir melden uns mit dem Stand.
            </p>
          )}
          {result.status === "belegt" && (
            <p className="font-medium text-stone-700 dark:text-stone-300">
              {labelSubject} ist am {formatDate(result.date)} leider schon belegt.{" "}
              {tone === "sie" ? "Prüfen Sie" : "Prüf"} gern einen Ausweichtermin.
            </p>
          )}
          {result.status === "unbekannt" && (
            <p className="text-stone-600 dark:text-stone-400">
              Das konnten wir gerade nicht prüfen. {tone === "sie" ? "Nutzen Sie" : "Nutz"} bitte das Anfrageformular.
            </p>
          )}
        </div>
      )}

      <p className="mt-3 text-xs text-stone-500">{disclaimer}</p>
    </div>
  );
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}
