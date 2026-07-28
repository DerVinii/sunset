import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container, H2, Lead, Section } from "@/components/ui-basics";
import { AvailabilityCheck } from "@/components/availability-check";
import { InquiryForm } from "@/components/inquiry-form";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: `Kontakt — ${site.name} in ${site.region}`,
  description: `Kontakt zu ${site.name}: Formular, Telefon (${site.phoneHours}), WhatsApp. Antwort bis zum nächsten Werktag, 12:00 Uhr. Express-Verfügbarkeits-Check für Ihren Wunschtermin.`,
};

export default function KontaktPage() {
  return (
    <>
      <div className="border-b border-stone-200 bg-gradient-to-b from-stone-50 to-stone-50 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
        <Container className="py-14 sm:py-20">
          <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">So erreichen Sie uns.</h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            {site.responsePromise.sie} Am Wochenende sind wir oft selbst auf Events — Ihre Anfrage geht trotzdem sofort
            bei uns ein.
          </p>
        </Container>
      </div>

      <Section>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-stone-200 p-5 dark:border-stone-800">
            <p className="font-semibold">Telefon</p>
            <a href={`tel:${site.phone}`} className="mt-1 block text-lg font-bold text-amber-700 dark:text-amber-500">
              {site.phoneDisplay}
            </a>
            <p className="mt-1 text-xs text-stone-500">
              {site.phoneHours} persönlich. Außerhalb: Mailbox — wir rufen bis zum nächsten Werktag, 12:00 Uhr zurück.
            </p>
          </div>
          <div id="whatsapp" className="rounded-xl border border-stone-200 p-5 dark:border-stone-800">
            <p className="font-semibold">WhatsApp</p>
            <div className="mt-2">
              <WhatsAppButton />
            </div>
            <p className="mt-2 text-xs text-stone-500">
              Für Kurzfragen — auch abends. Antwort spätestens am nächsten Werktag bis 12:00 Uhr.
            </p>
          </div>
          <div className="rounded-xl border border-stone-200 p-5 dark:border-stone-800">
            <p className="font-semibold">E-Mail &amp; Anfahrt</p>
            <a href={`mailto:${site.email}`} className="mt-1 block text-sm font-medium underline">
              {site.email}
            </a>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
              {site.address.street}, {site.address.zip} {site.address.city}
              <br />
              [ANZAHL] Parkplätze am Haus · [KARTEN-EINBINDUNG]
            </p>
          </div>
        </div>
      </Section>

      <Section id="termincheck" className="bg-stone-50 dark:bg-stone-900/40">
        <H2>Express-Verfügbarkeits-Check</H2>
        <Lead>Wunschtermin eingeben — Sie sehen sofort, ob unsere Location frei ist.</Lead>
        <div className="mt-6 max-w-xl">
          <AvailabilityCheck calendar="location" labelSubject="Unsere Location" tone="sie" ctaTargetId="anfrage" />
        </div>
      </Section>

      <Section id="anfrage-sektion">
        <H2>Oder schreiben Sie uns direkt</H2>
        <div className="mt-6 max-w-2xl">
          <InquiryForm
            funnel="kontakt"
            submitLabel="Nachricht senden"
            promise="Antwort bis zum nächsten Werktag, 12:00 Uhr."
            fields={[
              { name: "name", label: "Ihr Name", required: true },
              { name: "email", label: "E-Mail", type: "email", required: true },
              { name: "nachricht", label: "Ihre Nachricht", type: "textarea", required: true },
              { name: "phone", label: "Telefon (optional)", type: "tel" },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
