import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, H2, Lead, Section } from "@/components/ui-basics";
import { InquiryForm } from "@/components/inquiry-form";
import { FaqSection } from "@/components/faq";
import { faqEventservice } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: `Eventplanung & Service in ${site.region}, Organisation aus einer Hand`,
  description: `Eventplanung in ${site.region}: Ablauf, Personal, Technik und Eventleitung vor Ort. Planungspauschale ab [500] €, bei Komplettpaketen inklusive.`,
};

export default function EventservicePage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-gradient-to-b from-stone-50 to-stone-50 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Eventplanung &amp; Service: Wir kümmern uns, Sie feiern.
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Ablauf, Personal, Technik, Koordination: Unsere Eventleitung hält Ihnen den Rücken frei, vor und während
            der Veranstaltung.
          </p>
        </Container>
      </div>

      <Section>
        <H2>Was wir übernehmen</H2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Ablauf-Planung", d: "Zeitplan, Gewerke, Absprachen, alles aus einer Hand." },
            { t: "Service-Personal", d: "Faustregel: 1 Kraft pro 20–25 Gäste (Buffet), 1 pro 10–12 (Menü). [30–45] €/Std." },
            { t: "Technik & Aufbau", d: "Ton, Licht, Strom: Aufbau 2–4 Std. vorher, Abbau ~2 Std. danach." },
            { t: "Eventleitung vor Ort", d: "Ein fester Ansprechpartner den ganzen Abend, auch wenn sich der Ablauf ändert." },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-stone-200 p-5 dark:border-stone-800">
              <p className="font-semibold">{x.t}</p>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-stone-50 dark:bg-stone-900/40">
        <H2>Was es kostet</H2>
        <Lead>
          Planungspauschale ab [500] €, oder [10–15] % des Event-Budgets. Buchen Sie Location, Catering und Equipment
          bei uns, ist die Grundplanung inklusive. [BESTÄTIGEN] {site.priceLogic.sie}
        </Lead>
        <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">
          Gut zu wissen: Unser Betrieb ist über eine Betriebshaftpflicht versichert [POLICE]. Öffentliche Veranstaltungen
          melden wir mit Ihnen 4–6 Wochen vorher beim Ordnungsamt an.
        </p>
      </Section>

      <Section id="anfrage-sektion">
        <H2>Anfrage</H2>
        <Lead>{site.responsePromise.sie}</Lead>
        <div className="mt-6 max-w-2xl">
          <InquiryForm
            funnel="b2b"
            submitLabel="Eventservice anfragen"
            promise={site.responsePromise.sie}
            fields={[
              { name: "name", label: "Ihr Name", required: true },
              { name: "email", label: "E-Mail", type: "email", required: true },
              { name: "date", label: "Wunschtermin", type: "date", required: true },
              { name: "personen", label: "Gästezahl (ungefähr)", type: "number", required: true },
              { name: "phone", label: "Telefon (optional)", type: "tel" },
              { name: "nachricht", label: "Was ist geplant? (optional)", type: "textarea" },
            ]}
          />
        </div>
      </Section>

      <FaqSection title="Häufige Fragen zur Eventplanung" items={faqEventservice} />
    </>
  );
}
