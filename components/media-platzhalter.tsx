/**
 * Sichtbar gekennzeichnete Platzhalterfläche für Fotos, Videos, Logos und Karten.
 *
 * Die Struktur der Seite steht, echtes Bildmaterial vom Kunden fehlt noch.
 * Statt Stockfotos, die später doch niemand austauscht, zeigt die Fläche
 * offen, was hier hingehört. Ausgetauscht wird sie gegen <Image>, sobald
 * das Material da ist.
 */

export function MediaPlatzhalter({
  label,
  ratio = "aspect-[3/2]",
  className = "",
  klein = false,
}: {
  label: string;
  ratio?: string;
  className?: string;
  klein?: boolean;
}) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-stone-300 bg-stone-100/80 px-4 text-center dark:border-stone-700 dark:bg-stone-900/60 ${ratio} ${className}`}
      role="img"
      aria-label={`Platzhalter: ${label}`}
    >
      <svg
        className={klein ? "h-5 w-5 text-stone-400" : "h-8 w-8 text-stone-400"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
      {!klein && (
        <p className="text-xs font-medium text-stone-500 dark:text-stone-400">
          Platzhalter: {label}
        </p>
      )}
    </div>
  );
}

/** Graue Logo-Kachel für die Trust-Leiste und die Logo-Wand. */
export function LogoPlatzhalter({ nummer }: { nummer: number }) {
  return (
    <div className="flex h-14 items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-100/60 px-4 text-sm font-medium text-stone-400 dark:border-stone-700 dark:bg-stone-900/40 dark:text-stone-600">
      [LOGO {nummer}]
    </div>
  );
}
