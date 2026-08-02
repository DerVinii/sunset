"use client";

import { useState } from "react";
import Link from "next/link";
import { referenzen, referenzTypen, type ReferenzTyp } from "@/lib/referenzen-data";
import { MediaPlatzhalter } from "@/components/media-platzhalter";

/**
 * Filterleiste und Projekt-Grid (Struktur 3.2 + 3.3).
 * Gefiltert wird clientseitig nach Eventtyp; "Alle" hebt den Filter auf.
 */
export function ReferenzenGrid() {
  const [filter, setFilter] = useState<ReferenzTyp | null>(null);
  const sichtbar = filter ? referenzen.filter((r) => r.typ === filter) : referenzen;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Nach Eventtyp filtern">
        {[null, ...referenzTypen].map((typ) => {
          const aktiv = filter === typ;
          return (
            <button
              key={typ ?? "alle"}
              type="button"
              onClick={() => setFilter(typ)}
              aria-pressed={aktiv}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                aktiv
                  ? "border-amber-600 bg-amber-600 text-white"
                  : "border-stone-300 bg-white text-stone-700 hover:border-amber-500 hover:text-amber-700 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300 dark:hover:text-amber-500"
              }`}
            >
              {typ ?? "Alle"}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sichtbar.map((r) => (
          <Link
            key={r.slug}
            href={`/referenzen/${r.slug}`}
            className="group block h-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-stone-800 dark:bg-stone-900"
          >
            <MediaPlatzhalter label={r.bildLabel} ratio="aspect-[3/2]" className="rounded-none border-0 border-b-2" />
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-amber-700/80 dark:text-amber-500/80">
                {r.typ} · Beispielprojekt
              </p>
              <p className="mt-1 font-semibold group-hover:text-amber-700 dark:group-hover:text-amber-500">
                {r.titel}
              </p>
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                {r.kunde} · {r.jahr}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
