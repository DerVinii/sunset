"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ablauf", label: "Ablauf" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/faq", label: "FAQ" },
];

/**
 * Globaler Header: sticky, schrumpft beim Scrollen, CTA immer sichtbar.
 * Mobil öffnet der Burger ein Fullscreen-Overlay statt eines Dropdowns.
 */
export function Header() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body-Scroll sperren, solange das Overlay offen ist
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40">
      {/* backdrop-blur liegt bewusst auf dieser inneren Leiste: auf dem <header>
          selbst würde der Filter einen Containing Block erzeugen, und das
          fixed-Overlay unten wäre an der Header-Box statt am Viewport verankert. */}
      <div
        className={`border-b backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-stone-200/70 bg-stone-50/95 shadow-sm dark:border-stone-800 dark:bg-stone-950/95"
            : "border-transparent bg-stone-50/85 dark:bg-stone-950/85"
        }`}
      >
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "h-14" : "h-20"
        }`}
      >
        <Link href="/" className="font-display text-xl font-semibold tracking-tight" onClick={() => setOpen(false)}>
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

        <div className="flex items-center gap-2 sm:gap-3">
          {/* CTA bleibt in jeder Breite sichtbar (Strukturvorgabe) */}
          <Link
            href="/kontakt"
            className="cta-glow inline-flex cursor-pointer rounded-xl bg-sunset px-3.5 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 sm:px-4"
          >
            Event anfragen
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-stone-300 lg:hidden dark:border-stone-700"
            aria-expanded={open}
            aria-label="Menü öffnen"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      </div>

      {/* Fullscreen-Overlay-Menü (mobil) */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-stone-950 text-stone-50 lg:hidden">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6">
            <Link href="/" onClick={() => setOpen(false)} className="font-display text-xl font-semibold tracking-tight">
              {site.name.split(" ")[0]}
              <span className="text-sunset"> {site.name.split(" ").slice(1).join(" ")}</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-stone-700"
              aria-label="Menü schließen"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-1 px-6" aria-label="Mobile Navigation">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display rounded-xl px-3 py-3 text-3xl font-semibold tracking-tight hover:bg-stone-900"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-10">
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="cta-glow block rounded-xl bg-sunset px-6 py-4 text-center text-lg font-semibold text-white"
            >
              Event anfragen
            </Link>
            <p className="mt-4 text-center text-sm text-stone-400">
              {site.name} · {site.address.street}, {site.address.city}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
