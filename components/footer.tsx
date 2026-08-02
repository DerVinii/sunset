import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Footer mit vier Spalten und Rechtsleiste (Strukturvorgabe GLOBAL).
 * Telefon, E-Mail, Antwortzeit und Social-Profile sind [PLATZHALTER],
 * bis der Kunde die Angaben liefert. "Cookie-Einstellungen" führt zur
 * Erklärung im Datenschutz: Die Seite setzt derzeit keine Cookies,
 * es gibt also nichts einzustellen.
 */
export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 pt-14 text-stone-300">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {/* Spalte 1: Marke, Claim, Adresse, Social */}
        <div>
          <p className="font-display text-xl font-semibold text-white">{site.name}</p>
          <p className="mt-2 text-sm text-stone-400">Feiern, ohne selbst zu organisieren.</p>
          <p className="mt-4 text-sm text-stone-400">
            {site.address.street}
            <br />
            {site.address.city}, {site.region}
          </p>
          <div className="mt-4 flex items-center gap-2" aria-hidden>
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-stone-700 text-[10px] text-stone-600"
              >
                [{n}]
              </span>
            ))}
          </div>
          <p className="mt-2 text-xs text-stone-600">[SOCIAL-PROFILE folgen]</p>
        </div>

        {/* Spalte 2: Leistungen mit Ankern */}
        <div>
          <p className="font-semibold text-white">Leistungen</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link className="hover:underline" href="/leistungen#firmenfeier">Firmenfeier</Link></li>
            <li><Link className="hover:underline" href="/leistungen#tagung">Tagung</Link></li>
            <li><Link className="hover:underline" href="/leistungen#produktpraesentation">Produktpräsentation</Link></li>
            <li><Link className="hover:underline" href="/leistungen#incentive">Teamevent</Link></li>
            <li><Link className="hover:underline" href="/leistungen#privat">Private Feier</Link></li>
          </ul>
        </div>

        {/* Spalte 3: Agentur */}
        <div>
          <p className="font-semibold text-white">Agentur</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link className="hover:underline" href="/referenzen">Referenzen</Link></li>
            <li><Link className="hover:underline" href="/ablauf">Ablauf</Link></li>
            <li><Link className="hover:underline" href="/ueber-uns">Über uns</Link></li>
            <li><Link className="hover:underline" href="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Spalte 4: Direktkontakt */}
        <div>
          <p className="font-semibold text-white">Direktkontakt</p>
          <ul className="mt-2 space-y-1 text-sm text-stone-400">
            <li>Telefon: [TELEFON folgt]</li>
            <li>E-Mail: [E-MAIL folgt]</li>
            <li>Antwortzeit: [ANTWORTZEIT folgt]</li>
          </ul>
          <Link
            href="/kontakt"
            className="mt-4 inline-flex rounded-xl border border-stone-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-stone-500"
          >
            Event anfragen
          </Link>
        </div>
      </div>

      {/* Rechtsleiste */}
      <div className="mt-12 border-t border-stone-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link className="hover:underline" href="/impressum">Impressum</Link></li>
            <li><Link className="hover:underline" href="/datenschutz">Datenschutz</Link></li>
            <li><Link className="hover:underline" href="/datenschutz#cookies">Cookie-Einstellungen</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
