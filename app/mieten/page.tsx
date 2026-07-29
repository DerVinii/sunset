import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, H2, Lead, Section } from "@/components/ui-basics";
import { AvailabilityCheck } from "@/components/availability-check";
import { MietAnfrage } from "@/components/miet-anfrage";
import { FaqSection } from "@/components/faq";
import { faqEquipment } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: `Bierwagen & Equipment mieten in ${site.region}, klare Tagespreise`,
  description: `Bierwagen mieten ab [250] €/Tag, Bierzeltgarnituren, Zelte, Zapfanlagen in ${site.region}. Feste Lieferpauschalen, Wochenend-Tarif Fr–Mo, geliefert und aufgebaut, oder zum Selbstabholen.`,
};

export default function MietenPage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-gradient-to-b from-stone-50 to-stone-50 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Bierwagen, Zelte &amp; Equipment mieten in {site.region}.
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Klare Preise für Werktag und Wochenende. Geliefert, aufgebaut und eingewiesen, oder zum Selbstabholen.
          </p>

          {/* Bierwagen-Kalender: Launch-Pflicht (Plan 5.8) */}
          <div className="mt-8 max-w-xl">
            <p className="mb-2 font-semibold">Ist der Bierwagen an deinem Termin frei?</p>
            <AvailabilityCheck calendar="bierwagen" labelSubject="Der Bierwagen" tone="du" ctaTargetId="anfrage" />
          </div>
          <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
            Lieber anrufen? {site.phoneDisplay}, {site.phoneHours} persönlich. Außerhalb: Mailbox mit Rückruf bis zum
            nächsten Werktag, 12:00 Uhr. Schneller geht&apos;s per WhatsApp.
          </p>
        </Container>
      </div>

      {/* Beispiel-Box: Thomas' 2-Minuten-Kopfrechnung */}
      <Section>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="font-bold">Typische Gartenparty, einmal durchgerechnet:</p>
          <p className="mt-1 text-sm text-stone-700 dark:text-stone-300">
            50 Gäste, Samstag: Bierwagen (Wochenend-Tarif [420] €) + 8 Bierzeltgarnituren ([120] €) + Lieferung Zone B
            ([69] €) = <strong>[609] € komplett</strong>, geliefert, aufgebaut, eingewiesen, abgeholt, gereinigt.
          </p>
        </div>
      </Section>

      {/* Katalog + Mietkorb */}
      <Section id="katalog" className="bg-stone-50 dark:bg-stone-900/40">
        <H2>Equipment auswählen</H2>
        <Lead>
          Alle Preise inkl. MwSt. Wochenend-Tarif heißt: Freitag holen oder geliefert bekommen, Montag zurück, ein Preis. [BESTÄTIGEN]
        </Lead>
        <div className="mt-6">
          <MietAnfrage />
        </div>
      </Section>

      {/* Regeln einfach erklärt */}
      <Section>
        <H2>Die Regeln, einfach erklärt</H2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Reinigung", d: "Rückgabe speiserein reicht. Die Endreinigung übernehmen wir. [EINE REGELUNG WÄHLEN]" },
            { t: "Kaputt oder verloren?", d: "Wird zum Wiederbeschaffungswert berechnet. Kaution [BETRAG] € gibt's binnen 7 Tagen zurück." },
            { t: "Stornieren & ändern", d: "Zubuchungen (z. B. Regen-Zelt) kostenfrei stornierbar bis [X] Tage vorher. Stückzahlen anpassbar bis [Y] Tage vorher." },
            { t: "Defekt am Festtag?", d: "Jedes Gerät wird vor Auslieferung geprüft und dir vorgeführt. Bei Defekt: Soforthilfe per Telefon, Ersatz soweit verfügbar, sonst anteilige Erstattung. [REGELUNG]" },
          ].map((r) => (
            <div key={r.t} className="rounded-xl border border-stone-200 p-5 dark:border-stone-800">
              <p className="font-semibold">{r.t}</p>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{r.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <FaqSection title="Häufige Fragen zum Verleih" items={faqEquipment} />
    </>
  );
}
