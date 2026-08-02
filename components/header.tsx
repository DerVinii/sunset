"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "/location", label: "Location" },
  { href: "/catering", label: "Buffet" },
  { href: "/mieten", label: "Verleih" },
  { href: "/hochzeit", label: "Hochzeit" },
  { href: "/firmenfeier", label: "Firmenfeier" },
  { href: "/private-feier", label: "Private Feier" },
];

export function Header() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-stone-50/85 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/85">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight">
          {site.name.split(" ")[0]}
          <span className="text-sunset"> {site.name.split(" ").slice(1).join(" ")}</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-amber-700 dark:hover:text-amber-500 ${
                pathname.startsWith(item.href) ? "text-amber-700 dark:text-amber-500" : "text-stone-700 dark:text-stone-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/kontakt#anfrage"
            className="cta-glow hidden cursor-pointer rounded-xl bg-sunset px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            Anfrage stellen
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-stone-300 lg:hidden dark:border-stone-700"
            aria-expanded={open}
            aria-label="Menü öffnen"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-stone-200 bg-stone-50 px-4 py-3 lg:hidden dark:border-stone-800 dark:bg-stone-950" aria-label="Mobile Navigation">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-base font-medium hover:bg-stone-100 dark:hover:bg-stone-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/kontakt#anfrage"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-sunset px-3 py-2.5 text-center text-base font-semibold text-white"
              >
                Anfrage stellen
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
