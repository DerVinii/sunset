import Link from "next/link";
import { ArrowIcon, Container } from "@/components/ui-basics";

/** 404 mit Rückweg in die Hauptnavigation (Struktur: /404). */
export default function NotFound() {
  const ziele = [
    { href: "/", label: "Startseite" },
    { href: "/leistungen", label: "Leistungen" },
    { href: "/referenzen", label: "Referenzen" },
    { href: "/ablauf", label: "Ablauf" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <Container className="py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <p className="font-display text-6xl font-semibold text-amber-600">404</p>
        <h1 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Diese Seite gibt es nicht.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
          Vielleicht ist der Link alt, vielleicht hat sich ein Tippfehler eingeschlichen. So oder so:
          Hier geht es zurück.
        </p>
        <ul className="mt-8 space-y-2">
          {ziele.map((z) => (
            <li key={z.href}>
              <Link
                href={z.href}
                className="inline-flex items-center gap-1.5 font-semibold text-amber-700 hover:underline dark:text-amber-500"
              >
                {z.label} <ArrowIcon className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
