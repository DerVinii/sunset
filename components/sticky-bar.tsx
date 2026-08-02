"use client";

import Link from "next/link";

/**
 * Mobile Aktionsleiste. Es gibt genau einen Weg zu uns, solange Telefonnummer und
 * WhatsApp-Nummer nicht feststehen: das Formular.
 */
export function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-stone-50/95 p-2 backdrop-blur lg:hidden dark:border-stone-800 dark:bg-stone-950/95">
      <Link
        href="/kontakt#anfrage"
        className="flex h-11 items-center justify-center rounded-lg bg-sunset px-4 text-sm font-semibold text-white"
      >
        Anfrage stellen
      </Link>
    </div>
  );
}
