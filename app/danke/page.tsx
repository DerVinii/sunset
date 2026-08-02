import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, CheckIcon, Container } from "@/components/ui-basics";

export const metadata: Metadata = {
  title: "Danke für deine Anfrage",
  description: "Deine Anfrage ist angekommen. Hier steht, was als Nächstes passiert.",
  robots: { index: false },
};

/** Bestätigung nach dem Absenden (Struktur: /danke). */
export default function DankePage() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/60">
          <CheckIcon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="font-display mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
          Deine Anfrage ist raus.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
          Danke dafür. Sie liegt jetzt bei uns auf dem Tisch, und zwar wirklich auf dem Tisch des
          Inhabers, nicht in einem Sammelpostfach.
        </p>

        <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
          <p className="font-semibold">Die nächsten Schritte</p>
          <ol className="mt-3 list-decimal space-y-2 pl-4 text-stone-600 dark:text-stone-400">
            <li>Wir lesen, was du geschrieben hast.</li>
            <li>Wir melden uns bei dir, per E-Mail oder Telefon, je nachdem, was du angegeben hast.</li>
            <li>Dann klären wir alles Weitere persönlich, gern bei einem Rundgang durch die Location.</li>
          </ol>
          <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
            Wenn dir in der Zwischenzeit noch etwas einfällt, schick es einfach hinterher, sobald du
            unsere Antwort hast.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/ablauf" className="inline-flex items-center gap-1.5 font-semibold text-amber-700 hover:underline dark:text-amber-500">
            So geht es weiter: der Ablauf <ArrowIcon className="h-4 w-4" />
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 font-semibold text-stone-600 hover:underline dark:text-stone-300">
            Zur Startseite
          </Link>
        </div>
      </div>
    </Container>
  );
}
