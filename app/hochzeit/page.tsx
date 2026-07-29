import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, GuaranteeBox, H2, Lead, Section } from "@/components/ui-basics";
import { AvailabilityCheck } from "@/components/availability-check";
import { InquiryForm } from "@/components/inquiry-form";
import { FaqSection } from "@/components/faq";
import { faqHochzeit } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: `Hochzeitslocation in ${site.region}, ein Ort, ein Team, ein Festpreis`,
  description: `Heiraten in ${site.region}: Location, Catering, Deko und Service aus einer Hand. Termin-Check in 10 Sekunden, transparente Beispielpreise, Probeessen inklusive.`,
};

export default function HochzeitPage() {
  return (
    <>
      {/* Hero + Termin-Checker above the fold (Plan 5.3) */}
      <div className="border-b border-stone-200 bg-gradient-to-b from-rose-50 to-stone-50 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Eure Hochzeit in {site.region}, ein Ort, ein Team, ein Festpreis.
          </h1>
          <p className="mt-3 text-lg text-stone-600 dark:text-stone-300">
            Platz für [MIN]–[MAX] Personen, bequem mit Tanzfläche für 80 Gäste. Eröffnungssaison [JAHR]: viele Wunschtermine noch verfügbar.
          </p>

          {/* Hero-Visual: gelabeltes 3D-Rendering des echten Saals, KEINE fremden Hochzeitsfotos */}
          <div className="mt-6 flex aspect-[21/9] items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-100 text-center text-sm text-stone-500 dark:border-stone-700 dark:bg-stone-900">
            3D-Visualisierung: Saal in Hochzeitsdeko (Tag/Nacht-Szenen) [RENDERING]
          </div>

          <div id="termincheck" className="mt-8 max-w-xl scroll-mt-24">
            <p className="mb-2 text-lg font-semibold">Ist euer Wunschtermin noch frei?</p>
            <AvailabilityCheck calendar="location" labelSubject="Unsere Location" tone="du" ctaTargetId="anfrage" />
          </div>
        </Container>
      </div>

      {/* Beispiel-Kalkulation + Drin/Dazu (Plan 5.3) */}
      <Section>
        <H2>Was kostet eure Hochzeit bei uns?</H2>
        <Lead>
          Ehrliche Richtpreise statt „Preis auf Anfrage&quot;. {site.priceLogic.du}
        </Lead>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50 text-left dark:border-stone-800 dark:bg-stone-900">
                  <th className="p-3 font-semibold">Gäste</th>
                  <th className="p-3 font-semibold">Beispielpreis*</th>
                  <th className="p-3 font-semibold">Pro Kopf</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { g: "60", p: "ab [7.500] €", k: "[125] €" },
                  { g: "80", p: "ab [9.400] €", k: "[118] €" },
                  { g: "100", p: "ab [11.200] €", k: "[112] €" },
                ].map((r) => (
                  <tr key={r.g} className="border-b border-stone-100 last:border-0 dark:border-stone-800/60">
                    <td className="p-3">{r.g} Gäste</td>
                    <td className="p-3 font-semibold">{r.p}</td>
                    <td className="p-3">{r.k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="p-3 text-xs text-stone-500">
              * Beispiel gerechnet bis 24:00 Uhr, inkl. Raum, Buffet, Getränken, Service und Grunddeko.
              Jede weitere Stunde: Service [X] €/h + Getränke ca. [Y] € pro Person. [VERLÄNGERUNGS-KONDITIONEN]
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/40">
              <p className="font-semibold text-emerald-900 dark:text-emerald-200">Das ist drin</p>
              <ul className="mt-2 space-y-1 text-sm text-emerald-900/85 dark:text-emerald-100/85">
                <li>✓ Raum bis [UHRZEIT]</li>
                <li>✓ Buffet oder Menü</li>
                <li>✓ Getränke bis 24 Uhr</li>
                <li>✓ Service-Personal</li>
                <li>✓ Grunddeko &amp; Licht</li>
                <li>✓ Feste Ansprechpartnerin</li>
              </ul>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900">
              <p className="font-semibold">Das kommt je nach Wunsch dazu</p>
              <ul className="mt-2 space-y-1 text-sm text-stone-700 dark:text-stone-300">
                <li>+ DJ oder Band</li>
                <li>+ Fotograf/in</li>
                <li>+ Blumen-Deko</li>
                <li>+ Verlängerung nach 24 Uhr</li>
                <li>+ Mitternachtssnack</li>
              </ul>
              <p className="mt-2 text-xs text-stone-500">Keine Posten, die erst im Angebot auftauchen.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Risiko-Umkehr + Garantien */}
      <Section className="bg-stone-50 dark:bg-stone-900/40">
        <H2>Warum ihr bei uns sicher seid, obwohl wir neu sind</H2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <GuaranteeBox title="Probeessen inklusive">
            Bei eurer Besichtigung probiert ihr euer Menü vorab, kostenlos. [PROBEESSEN BESTÄTIGEN]
            Dazu unser Eröffnungsvorteil: [ERÖFFNUNGSANGEBOT, z. B. Deko-/Licht-Paket gratis gegen Fotoerlaubnis].
          </GuaranteeBox>
          <GuaranteeBox title="Faire Preise, garantiert">
            [VERSION A: Kein Korkgeld.] [VERSION B: Korkgeld: [X] € pro Flasche. Steht genau so auch im Angebot.]
            Keine versteckten Teller- oder Reinigungsgelder. Service nach 24 Uhr: transparent [SATZ] €/h.
          </GuaranteeBox>
          <GuaranteeBox title="Schlechtwetter-Plan">
            Freie Trauung im Garten geplant? Bei Regen zieht ihr kostenfrei in den Innenbereich
            (Platz für bis zu [X] Gäste [INNENKAPAZITÄT BESTÄTIGEN]). Ab 22 Uhr feiern wir drinnen weiter, ohne Zeitlimit.
          </GuaranteeBox>
        </div>

        <div className="mt-6 rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
          <p className="font-bold">Anzahlung &amp; Storno, fair geregelt</p>
          <p className="mt-2 text-sm text-stone-700 dark:text-stone-300">
            Nur [X] % Anzahlung. Den Rest zahlt ihr [Y] Tage vor der Feier. Storno-Staffel: [STAFFEL DES UNTERNEHMERS].
            Alles steht im Vertrag. [ABSICHERUNG DER ANZAHLUNG]
          </p>
        </div>
      </Section>

      {/* Location + Team */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <H2>Euer Ort zum Feiern</H2>
            <Lead>
              Saal mit Platz für [MIN]–[MAX] Gäste, Garten für die Freie Trauung [BESTÄTIGEN], Tanzfläche,
              Parkplätze direkt am Haus. Schaut euch im 3D-Rundgang um, mit Bestuhlungsplänen und Licht-Szenen für Tag und Nacht.
            </Lead>
            <div className="mt-4 flex aspect-video items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-100 text-sm text-stone-500 dark:border-stone-700 dark:bg-stone-900">
              Interaktiver 3D-Rundgang [EINBETTUNG]
            </div>
          </div>
          <div>
            <H2>Eure Ansprechpartnerin</H2>
            <Lead>
              Ich bin [NAME]. Ich begleite euch von der ersten Anfrage bis zum letzten Tanz. Ihr erreicht mich direkt,
              nicht über eine Hotline. Und weil wir gerade starten: Ihr seid uns nicht Hochzeit Nr. 87 in diesem Jahr.
            </Lead>
            <div className="mt-4 flex aspect-square max-w-[240px] items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-100 text-sm text-stone-500 dark:border-stone-700 dark:bg-stone-900">
              [GRÜNDER-FOTO]
            </div>
          </div>
        </div>
      </Section>

      {/* Primärpfad: Anfrage (Schritt 1) + Besichtigung als Schritt 2 */}
      <Section id="anfrage-sektion" className="bg-stone-50 dark:bg-stone-900/40">
        <H2>Schritt 1: Angebot + Terminvormerkung anfragen</H2>
        <Lead>
          4 Felder, keine Pflicht-Telefonnummer. Ist euer Termin frei, merken wir ihn nach der Anfrage für euch vor,
          7 Tage, exklusiv. <strong>Schritt 2</strong> kommt danach: Besichtigung mit Probeessen. Im Angebot schlagen
          wir euch 3 Termine vor.
        </Lead>
        <div className="mt-6 max-w-2xl">
          <InquiryForm
            funnel="hochzeit"
            submitLabel="Angebot + Terminvormerkung anfragen"
            promise={site.responsePromise.du}
            fields={[
              { name: "name", label: "Eure Namen", required: true },
              { name: "email", label: "E-Mail", type: "email", required: true },
              { name: "date", label: "Wunschdatum", type: "date", required: true },
              { name: "gaeste", label: "Gästezahl (ungefähr)", type: "number", required: true },
              { name: "phone", label: "Telefon (freiwillig, für schnelle Rückfragen)", type: "tel" },
              { name: "antwortkanal", label: "Wie dürfen wir antworten? (optional)", type: "select", options: ["E-Mail", "WhatsApp", "Anruf"] },
              { name: "nachricht", label: "Was sollten wir wissen? (optional)", type: "textarea" },
            ]}
          />
        </div>
        <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">
          Kurze Frage vorab? Schreibt uns per{" "}
          <a href="/kontakt#whatsapp" className="underline">
            WhatsApp
          </a>
          , auch abends vom Sofa.
        </p>
      </Section>

      <FaqSection title="Häufige Fragen zur Hochzeit" items={faqHochzeit} />
    </>
  );
}
