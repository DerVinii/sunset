import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container, GuaranteeBox, H2, Lead, Section } from "@/components/ui-basics";
import { AvailabilityCheck } from "@/components/availability-check";
import { InquiryForm } from "@/components/inquiry-form";
import { FaqSection } from "@/components/faq";
import { DiyRechner } from "@/components/diy-rechner";
import { faqCatering, faqEquipment, faqLocation } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: `Private Feiern in ${site.region} — Geburtstag, Jubiläum, Jugendweihe`,
  description: `Runder Geburtstag, Jubiläum, Jugendweihe, Taufe oder Kommunion in ${site.region}: bei uns im Saal oder bei dir im Garten. Partyservice, Equipment und Raum — mit klaren Preisen.`,
};

export default function PrivateFeierPage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-gradient-to-b from-amber-50 to-stone-50 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Dein runder Geburtstag in {site.region} — feiern ohne Schlepperei.
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Zwei Wege, ein Versprechen: Du feierst, wir arbeiten.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a href="#bei-uns" className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md dark:border-stone-800 dark:bg-stone-900">
              <p className="text-lg font-bold">Feier bei uns in der Location →</p>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                Saal, Essen, Getränke, Service — Komplettpaket ab [1.900] € für 50 Gäste.
              </p>
            </a>
            <a href="#bei-dir" className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md dark:border-stone-800 dark:bg-stone-900">
              <p className="text-lg font-bold">Feier bei dir zu Hause / im Verein →</p>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                Partyservice + Bierwagen + Garnituren kommen zu dir — Gartenparty-Paket ab [X] €.
              </p>
            </a>
          </div>
        </Container>
      </div>

      <Section id="bei-uns">
        <H2>Feier bei uns: Saal + Essen + Service</H2>
        <Lead>
          Beispiel: Runder Geburtstag, 50 Gäste, im Saal — ab [1.900] € inklusive Raum, Buffet, Getränke-Grundpaket und Service.
          {" "}{site.priceLogic.du}
        </Lead>
        <div id="termincheck" className="mt-6 max-w-xl scroll-mt-24">
          <p className="mb-2 font-semibold">Ist unser Saal an deinem Wunschtermin frei?</p>
          <AvailabilityCheck calendar="location" labelSubject="Unsere Location" tone="du" ctaTargetId="anfrage" />
        </div>
      </Section>

      <Section id="bei-dir" className="bg-stone-50 dark:bg-stone-900/40">
        <H2>Feier bei dir: Partyservice + Equipment</H2>
        <Lead>
          Gartenparty-Paket: Bierwagen + 8 Bierzeltgarnituren + Zapfanlage, geliefert und aufgebaut — ab [X] €.
          Essen dazu vom <Link href="/partyservice" className="underline">Partyservice</Link>, Equipment einzeln im{" "}
          <Link href="/mieten" className="underline">Verleih</Link>.
        </Lead>
        <div className="mt-6">
          <GuaranteeBox title="Plug-&-Play-Garantie">
            Lieferung, Aufbau, Einweisung und Abholung sind inklusive. Du musst nichts schleppen, nichts zurückfahren,
            nichts schrubben.
          </GuaranteeBox>
        </div>
      </Section>

      <Section>
        <H2>Selbst organisieren oder machen lassen?</H2>
        <Lead>Rechne ehrlich nach — mit allen Nebenkosten, die beim Selbermachen gern vergessen werden:</Lead>
        <div className="mt-6 max-w-2xl">
          <DiyRechner />
        </div>
      </Section>

      <Section className="bg-stone-50 dark:bg-stone-900/40">
        <H2>Jugendweihe, Taufe, Kommunion</H2>
        <Lead>
          Die Frühjahrs-Termine (April–Juni) sind jedes Jahr zuerst weg — gerade zur Jugendweihe-Saison. Sichere dir
          deinen Termin am besten schon im Winter. Familien-Pakete ab [PREIS] € für [X] Gäste.
        </Lead>
      </Section>

      <Section id="anfrage-sektion">
        <H2>Frag einfach an</H2>
        <Lead>4 Felder, fertig. {site.responsePromise.duSingular}</Lead>
        <div className="mt-6 max-w-2xl">
          <InquiryForm
            funnel="privat"
            submitLabel="Unverbindlich anfragen"
            promise={site.responsePromise.duSingular}
            fields={[
              { name: "name", label: "Dein Name", required: true },
              { name: "email", label: "E-Mail", type: "email", required: true },
              { name: "date", label: "Wunschtermin", type: "date", required: true },
              { name: "gaeste", label: "Gästezahl (ungefähr)", type: "number", required: true },
              { name: "wo", label: "Wo willst du feiern? (optional)", type: "select", options: ["Bei euch in der Location", "Bei mir zu Hause / im Garten", "Im Verein / woanders", "Weiß ich noch nicht"] },
              { name: "phone", label: "Telefon (freiwillig)", type: "tel" },
              { name: "nachricht", label: "Was planst du? (optional)", type: "textarea" },
            ]}
          />
        </div>
        <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">
          Lieber anrufen? {site.phoneDisplay} ({site.phoneHours} persönlich — sonst Mailbox mit Rückruf bis zum nächsten
          Werktag, 12:00 Uhr).
        </p>
      </Section>

      <FaqSection
        title="Häufige Fragen zu privaten Feiern"
        items={[faqLocation[0], faqLocation[2], faqCatering[3], faqEquipment[0], faqEquipment[7], faqLocation[9]]}
      />
    </>
  );
}
