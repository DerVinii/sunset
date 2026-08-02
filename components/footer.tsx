import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 pb-24 pt-14 text-stone-300 lg:pb-14">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-white">{site.name}</p>
          <p className="mt-2 text-sm text-stone-400">
            {site.address.street}
            <br />
            {site.address.city}, {site.region}
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Bei uns feiern</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link className="hover:underline" href="/location">Die Location</Link></li>
            <li><Link className="hover:underline" href="/catering">Buffet</Link></li>
            <li><Link className="hover:underline" href="/mieten">Equipment mieten</Link></li>
            <li><Link className="hover:underline" href="/hochzeit">Hochzeit</Link></li>
            <li><Link className="hover:underline" href="/firmenfeier">Firmenfeier</Link></li>
            <li><Link className="hover:underline" href="/private-feier">Private Feier</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Sonst noch</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link className="hover:underline" href="/ueber-uns">Über uns</Link></li>
            <li><Link className="hover:underline" href="/kontakt">Kontakt</Link></li>
            <li><Link className="hover:underline" href="/impressum">Impressum</Link></li>
            <li><Link className="hover:underline" href="/datenschutz">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl px-4 text-xs text-stone-500 sm:px-6">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
