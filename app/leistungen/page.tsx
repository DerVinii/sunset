import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container, H2, Lead, Section } from "@/components/ui-basics";

export const metadata: Metadata = {
  title: `Leistungen: Location, Catering, Verleih & Eventservice in ${site.region}`,
  description: `Vier Leistungen, ein Ansprechpartner: Eventlocation, Catering & Partyservice, Equipment- & Bierwagen-Verleih, Eventplanung in ${site.region}.`,
};

const saeulen = [
  {
    title: "Location & Raumvermietung",
    text: "Eventlocation in [ORT] für [30]–[120] Gäste, mit Technik, Parkplätzen und klarer Preisstruktur.",
    preis: "Miete ab [X] €",
    links: [
      { href: "/location", label: "Zur Location" },
      { href: "/partyraum-mieten", label: "Partyraum für private Feiern" },
    ],
  },
  {
    title: "Catering & Partyservice",
    text: "Buffet, Menü, BBQ oder geliefertes Partybuffet, für Firmen, Hochzeiten und Familienfeiern.",
    preis: "Buffet ab [25] €/Person",
    links: [
      { href: "/catering", label: "Catering (Firmen & Hochzeit)" },
      { href: "/partyservice", label: "Partyservice (privat)" },
    ],
  },
  {
    title: "Equipment- & Bierwagen-Verleih",
    text: "Bierwagen, Zapfanlagen, Garnituren, Zelte, geliefert und aufgebaut oder zum Selbstabholen.",
    preis: "Bierwagen ab [250] €/Tag",
    links: [{ href: "/mieten", label: "Zum Verleih-Katalog" }],
  },
  {
    title: "Eventmanagement & Service",
    text: "Planung, Personal, Technik und Eventleitung vor Ort, ein Ansprechpartner für alles.",
    preis: "Pauschale ab [500] €",
    links: [{ href: "/eventservice", label: "Zum Eventservice" }],
  },
];

export default function LeistungenPage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-gradient-to-b from-stone-50 to-stone-50 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Vier Leistungen, ein Vertrag, ein Ansprechpartner.
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Alles aus einer Hand heißt: null Abstimmungsrisiko zwischen Location, Küche, Verleih und Personal.
            Und ein Festpreis im Angebot statt vier Rechnungen mit Überraschungen.
          </p>
        </Container>
      </div>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {saeulen.map((s) => (
            <div key={s.title} className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
              <p className="text-lg font-bold">{s.title}</p>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{s.text}</p>
              <p className="mt-3 font-semibold text-amber-700 dark:text-amber-500">{s.preis}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {s.links.map((l) => (
                  <Link key={l.href} href={l.href} className="text-sm font-medium underline">
                    {l.label} →
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/preise"
            className="inline-flex items-center rounded-lg bg-amber-600 px-5 py-3 font-semibold text-white hover:bg-amber-700"
          >
            Alle Preise & Budget-Rechner
          </Link>
        </div>
      </Section>
    </>
  );
}
