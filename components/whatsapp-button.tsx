"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * DSGVO-konforme 2-Klick-Lösung für WhatsApp (Plan Kap. 4):
 * Erster Klick zeigt den Hinweis, erst der zweite öffnet WhatsApp.
 */
export function WhatsAppButton() {
  const [armed, setArmed] = useState(false);

  if (!armed) {
    return (
      <button
        type="button"
        onClick={() => setArmed(true)}
        className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
      >
        WhatsApp-Chat starten
      </button>
    );
  }

  return (
    <div className="rounded-lg border border-stone-200 p-3 text-sm dark:border-stone-700">
      <p className="text-xs text-stone-600 dark:text-stone-400">
        Mit Klick auf „Jetzt öffnen&quot; wird WhatsApp (Meta Platforms Ireland Ltd.) geöffnet und deine Telefonnummer
        dorthin übertragen. Details in der Datenschutzerklärung.
      </p>
      <a
        href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
      >
        Jetzt öffnen
      </a>
    </div>
  );
}
