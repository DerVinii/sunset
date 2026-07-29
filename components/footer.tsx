import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 pb-24 pt-14 text-stone-300 lg:pb-14">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold text-white">{site.name}</p>
          <p className="mt-2 text-sm text-stone-400">
            {site.address.street}
            <br />
            {site.address.zip} {site.address.city}, {site.region}
          </p>
          <p className="mt-2 text-sm text-stone-400">
            Telefon: {site.phoneDisplay}
            <br />
            <span className="text-xs">({site.phoneHours} persönlich, am Wochenende sind wir auf Events)</span>
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Anlässe</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link className="hover:underline" href="/firmenfeier">Firmenfeier</Link></li>
            <li><Link className="hover:underline" href="/hochzeit">Hochzeit</Link></li>
            <li><Link className="hover:underline" href="/private-feier">Private Feier</Link></li>
            <li><Link className="hover:underline" href="/partyraum-mieten">Partyraum mieten</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Leistungen</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link className="hover:underline" href="/location">Eventlocation</Link></li>
            <li><Link className="hover:underline" href="/catering">Catering</Link></li>
            <li><Link className="hover:underline" href="/partyservice">Partyservice</Link></li>
            <li><Link className="hover:underline" href="/mieten">Equipment &amp; Bierwagen</Link></li>
            <li><Link className="hover:underline" href="/eventservice">Eventservice</Link></li>
            <li><Link className="hover:underline" href="/preise">Preise &amp; Budget-Rechner</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Gut zu wissen</p>
          <ul className="mt-2 space-y-1 text-sm text-stone-400">
            <li>{site.responsePromise.sie}</li>
            <li>Einzugsgebiet: {site.serviceAreas.location.label}</li>
            <li>{site.serviceAreas.catering.label}</li>
            <li>{site.serviceAreas.equipment.label}</li>
          </ul>
          <ul className="mt-3 space-y-1 text-sm">
            <li><Link className="hover:underline" href="/kontakt">Kontakt</Link></li>
            <li><Link className="hover:underline" href="/impressum">Impressum</Link></li>
            <li><Link className="hover:underline" href="/datenschutz">Datenschutz</Link></li>
            <li><Link className="hover:underline" href="/agb">AGB</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl px-4 text-xs text-stone-500 sm:px-6">
        © {new Date().getFullYear()} {site.name} · Alle B2C-Preise inkl. MwSt. (Bruttopreise), B2B-Angaben netto zzgl. gesetzl. MwSt.
      </div>
    </footer>
  );
}
