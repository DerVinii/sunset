import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Badge, Container, GuaranteeBox, H2, Lead, Section } from "@/components/ui-basics";
import { AvailabilityCheck } from "@/components/availability-check";
import { InquiryForm } from "@/components/inquiry-form";
import { FaqSection } from "@/components/faq";
import { faqB2b } from "@/lib/faq-data";
import { B2bBudgetRechner } from "./budget-rechner";

export const metadata: Metadata = {
  title: `Firmenfeier in ${site.region}, Location, Catering & Service aus einer Hand`,
  description: `Firmenfeiern für 20–150 Personen in ${site.region}: Pakete passend zum 110-€-Freibetrag (§ 19 EStG), netto + brutto, Angebot bis zum nächsten Werktag 12 Uhr. Weiterleitbares PDF für Ihre Geschäftsführung.`,
};

/** B2B-Pakete (Plan 5.2). Preise = [PLATZHALTER DES UNTERNEHMERS], netto + brutto + All-in. */
const pakete = [
  {
    name: "Sommerfest-Paket",
    netto: "[39] € / Person netto",
    brutto: "[46,41] € / Person brutto",
    allIn: "All-in brutto pro Person: [62] €, alles, was in die 110 € zählt",
    inklusive: ["Raum & Außenbereich", "BBQ-Buffet", "Getränke 4 Std.", "Service-Personal", "Grundtechnik"],
  },
  {
    name: "Weihnachtsfeier-Paket",
    netto: "[49] € / Person netto",
    brutto: "[58,31] € / Person brutto",
    allIn: "All-in brutto pro Person: [78] €, alles, was in die 110 € zählt",
    inklusive: ["Festlich eingedeckter Saal", "3-Gang-Buffet oder Menü", "Getränke 5 Std.", "Service-Personal", "Licht & Ton"],
  },
  {
    name: "Premium-Paket",
    netto: "[69] € / Person netto",
    brutto: "[82,11] € / Person brutto",
    allIn: "All-in brutto pro Person: [105] €, knapp unter der 110-€-Grenze",
    inklusive: ["Exklusive Raumnutzung", "Erweitertes Menü", "Getränke bis Ende", "Eventleitung vor Ort", "Deko-Paket"],
  },
];

export default function FirmenfeierPage() {
  return (
    <>
      {/* Above the Fold (Plan 5.2): Seite muss allein funktionieren */}
      <div className="border-b border-stone-200 bg-gradient-to-b from-stone-50 to-stone-50 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Firmenfeiern in {site.region}, Location, Catering &amp; Service aus einer Hand.
          </h1>
          <p className="mt-3 text-lg font-medium">
            Platz für bis zu [X] Personen bestuhlt / [Y] Personen beim Stehempfang.
          </p>
          <p className="mt-1 text-stone-600 dark:text-stone-400">
            [ORT], [X] km von Magdeburg · [ANZAHL] Parkplätze direkt am Haus ·{" "}
            <a href="/kontakt" className="underline">Anfahrt</a>
          </p>
          <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
            [NAME], [X] Jahre Gastronomie &amp; Events, Ihre feste Ansprechpartnerin.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>Kalkuliert für den 110-€-Freibetrag (§ 19 EStG)</Badge>
            <Badge>Angebot bis zum nächsten Werktag, 12:00 Uhr</Badge>
          </div>

          {/* Raumvisualisierungen: [3D-RENDERINGS], ehrlich gelabelt */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Saal, Bankett-Bestuhlung", "Saal, Stehempfang", "Außenbereich"].map((label) => (
              <div
                key={label}
                className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-100 text-center text-sm text-stone-500 dark:border-stone-700 dark:bg-stone-900"
              >
                3D-Visualisierung: {label}
                <br />
                [RENDERING]
              </div>
            ))}
          </div>

          {/* Termin-Check above the fold, Terminfrage vor Preisfrage */}
          <div id="termincheck" className="mt-8 max-w-xl scroll-mt-24">
            <p className="mb-2 font-semibold">Ist Ihr Wunschtermin frei? Gerade Dezember-Termine sind schnell vergeben.</p>
            <AvailabilityCheck calendar="location" labelSubject="Unsere Location" tone="sie" ctaTargetId="anfrage" />
          </div>
        </Container>
      </div>

      {/* Pakete */}
      <Section>
        <H2>Pakete mit klaren Pro-Kopf-Preisen</H2>
        <Lead>{site.priceLogic.sie}</Lead>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {pakete.map((p) => (
            <div key={p.name} className="flex flex-col rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
              <p className="text-lg font-bold">{p.name}</p>
              <p className="mt-2 text-2xl font-bold text-amber-700 dark:text-amber-500">{p.netto}</p>
              <p className="text-sm text-stone-500">{p.brutto} · zzgl. gesetzl. MwSt. ausgewiesen</p>
              <p className="mt-2 rounded-lg bg-amber-50 p-2 text-xs font-medium text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
                {p.allIn}
              </p>
              <ul className="mt-4 space-y-1 text-sm text-stone-700 dark:text-stone-300">
                {p.inklusive.map((i) => (
                  <li key={i}>✓ {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Budget-Rechner */}
      <Section className="bg-stone-50 dark:bg-stone-900/40">
        <H2>Ihr Richtbudget in 30 Sekunden</H2>
        <div className="mt-6 max-w-2xl">
          <B2bBudgetRechner />
        </div>
      </Section>

      {/* Steuer-Hinweis */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-stone-200 p-6 dark:border-stone-800">
            <p className="font-bold">Was zählt in die 110 €?</p>
            <p className="mt-2 text-sm text-stone-700 dark:text-stone-300">
              Alle Kosten der Feier brutto, auch Raum, Deko und Service, geteilt durch die anwesenden Teilnehmer.
              Begleitpersonen zählen zum jeweiligen Mitarbeiter. Bis 110 € pro Person bleibt die Feier steuerfrei;
              nur der Betrag darüber wird versteuert.
            </p>
            <p className="mt-2 text-xs text-stone-500">
              Hinweis: Das ist keine Steuerberatung. Details klärt Ihre Buchhaltung.
            </p>
            <p className="mt-3 text-sm text-stone-700 dark:text-stone-300">
              Ihre Rechnung kommt mit getrennt ausgewiesener Umsatzsteuer: Speisen (7 %/19 %) und Getränke/Service (19 %).
            </p>
          </div>
          <div className="rounded-xl border border-stone-200 p-6 dark:border-stone-800">
            <p className="font-bold">So läuft die Zahlung</p>
            <ul className="mt-2 space-y-1 text-sm text-stone-700 dark:text-stone-300">
              <li>· Anzahlung: [X] %, bzw. keine Anzahlung bis [BETRAG] € [BESTÄTIGEN]</li>
              <li>· Restzahlung bequem auf Rechnung, [Y] Tage nach dem Event [BESTÄTIGEN]</li>
              <li>· Zahlungsziel: [Z] Tage</li>
            </ul>
            <p className="mt-3 text-sm text-stone-700 dark:text-stone-300">
              Stornobedingungen: fair gestaffelt, [STORNOSTAFFEL], transparent im Angebot.
            </p>
          </div>
        </div>
      </Section>

      {/* Sicherheit + PDF */}
      <Section className="bg-stone-50 dark:bg-stone-900/40">
        <div className="grid gap-6 lg:grid-cols-2">
          <GuaranteeBox title="Ausfallsicherheit">
            [GARANTIE-VERSION NACH SCHRIFTLICHER BESTÄTIGUNG:] Fällt bei uns Personal oder Technik aus, stellen wir
            innerhalb von [X] Stunden Ersatz über [BENANNTE PARTNER]. Gelingt das nicht, erlassen wir Ihnen [NACHLASS].
            [FALLBACK:] Jedes Event wird von [NAME] persönlich geleitet; Technik wird vor jedem Event geprüft.
          </GuaranteeBox>
          <div className="rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
            <p className="font-bold">Event-Katalog für Ihre Geschäftsführung</p>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
              Alle Pakete, Preise (netto/brutto), Inklusivleistungen und Stornobedingungen als druckfähiges PDF,
              ohne Anmeldung, direkt weiterleitbar.
            </p>
            <a
              href="/b2b-event-katalog.pdf"
              className="mt-4 inline-flex rounded-lg border border-stone-300 px-4 py-2 text-sm font-semibold hover:bg-stone-50 dark:border-stone-700 dark:hover:bg-stone-800"
            >
              PDF herunterladen (ohne E-Mail-Eingabe)
            </a>
          </div>
        </div>
      </Section>

      {/* Express-Anfrage */}
      <Section id="anfrage-sektion">
        <H2>Express-Anfrage</H2>
        <Lead>
          Maximal 5 Felder. Ihr konkretes, kalkuliertes Angebot: bis zum nächsten Werktag, 12:00 Uhr.
        </Lead>
        <div className="mt-6 max-w-2xl">
          <InquiryForm
            funnel="b2b"
            submitLabel="Angebot anfordern"
            promise={site.responsePromise.sie}
            fields={[
              { name: "firma", label: "Firma", required: true },
              { name: "name", label: "Ihr Name", required: true },
              { name: "email", label: "E-Mail", type: "email", required: true },
              { name: "personen", label: "Personenzahl", type: "number", required: true },
              { name: "date", label: "Wunschtermin", type: "date", required: true },
              { name: "anlass", label: "Anlass (optional)", type: "select", options: ["Weihnachtsfeier", "Sommerfest", "Firmenjubiläum", "Teamevent", "Anderer Anlass"] },
              { name: "phone", label: "Telefon (optional)", type: "tel" },
              { name: "besichtigung", label: "Wir möchten die Location vorab besichtigen.", type: "checkbox" },
              { name: "nachricht", label: "Nachricht (optional)", type: "textarea" },
            ]}
          />
        </div>
      </Section>

      <FaqSection title="Häufige Fragen zur Firmenfeier" items={faqB2b} />
    </>
  );
}
