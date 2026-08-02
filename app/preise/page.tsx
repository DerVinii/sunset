import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container, H2, Lead, Section } from "@/components/ui-basics";
import { BudgetRechner } from "@/components/budget-rechner";
import { DiyRechner } from "@/components/diy-rechner";

export const metadata: Metadata = {
  title: `Preise & Budget-Rechner, Feiern in ${site.region}`,
  description: `Alle Preise auf einen Blick: Location ab [X] €, Catering ab [25] €/Person, Bierwagen ab [250] €/Tag. Budget-Rechner: dein Richtpreis in 60 Sekunden, keine versteckten Kosten.`,
};

export default function PreisePage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-gradient-to-b from-stone-50 to-stone-50 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Unsere Preise, offen und ehrlich.
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Kein „Preis auf Anfrage&quot;. {site.priceLogic.sie}
          </p>
        </Container>
      </div>

      <Section>
        <H2>Alle Ab-Preise auf einen Blick</H2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-left dark:border-stone-800 dark:bg-stone-900">
                <th className="p-3 font-semibold">Leistung</th>
                <th className="p-3 font-semibold">Preis (inkl. MwSt.)</th>
                <th className="p-3 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Eventlocation (Tagesmiete)", "ab [X] €", <Link key="l" href="/location" className="underline">Location</Link>],
                ["Partyraum (bis 100 Gäste)", "ab [X] €", <Link key="pr" href="/partyraum-mieten" className="underline">Partyraum</Link>],
                ["Catering-Buffet", "ab [29,75] € / Person", <Link key="c" href="/catering" className="underline">Catering</Link>],
                ["Partyservice-Buffet", "ab [X] € / Person", <Link key="p" href="/partyservice" className="underline">Partyservice</Link>],
                ["Bierwagen", "Werktag ab [250] € · Wochenende ab [420] €", <Link key="b" href="/mieten" className="underline">Verleih</Link>],
                ["Bierzeltgarnitur", "[15] € / Tag", <Link key="g" href="/mieten" className="underline">Verleih</Link>],
                ["Eventplanung", "Pauschale ab [500] €, bei Komplettpaketen inklusive", <Link key="e" href="/eventservice" className="underline">Eventservice</Link>],
                ["Firmenfeier-Pakete (B2B)", "ab [39] € / Person netto", <Link key="f" href="/firmenfeier" className="underline">B2B-Seite (netto + brutto)</Link>],
                ["Hochzeit (80 Gäste)", "ab [9.400] €", <Link key="h" href="/hochzeit" className="underline">Hochzeit</Link>],
              ].map(([l, p, d], i) => (
                <tr key={i} className="border-b border-stone-100 last:border-0 dark:border-stone-800/60">
                  <td className="p-3 font-medium">{l}</td>
                  <td className="p-3">{p}</td>
                  <td className="p-3">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-stone-500">
          B2C-Preise brutto inkl. MwSt. (PAngV) · B2B-Angaben netto zzgl. gesetzl. MwSt. mit Brutto-Zweitausweis ·
          Lieferzonen: {site.deliveryZones.map((z) => `Zone ${z.zone} (${z.range}) ${z.price} €`).join(" · ")}, Anlieferung und Abholung inklusive.
        </p>
      </Section>

      <Section id="rechner" className="bg-stone-50 dark:bg-stone-900/40">
        <H2>Budget-Rechner: dein Richtpreis in 60 Sekunden</H2>
        <Lead>Alle Pflicht-Nebenkosten sind schon eingerechnet, keine versteckten Kosten.</Lead>
        <div className="mt-6">
          <BudgetRechner />
        </div>
      </Section>

      <Section>
        <H2>Selbst organisieren oder machen lassen?</H2>
        <div className="mt-6 max-w-2xl">
          <DiyRechner />
        </div>
      </Section>

      <Section className="bg-stone-50 dark:bg-stone-900/40">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="font-bold">Direktbucher-Vorteil</p>
          <p className="mt-1 text-sm text-stone-700 dark:text-stone-300">
            Bei Buchung über unsere Website: [VORTEIL, z. B. Licht-Paket oder Endreinigung im Wert von 150 €] kostenfrei dazu.
          </p>
        </div>
      </Section>
    </>
  );
}
