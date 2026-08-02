import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowIcon, BadgeDark, H2, Lead, Section } from "@/components/ui-basics";
import { FaqSection } from "@/components/faq";
import { faqTeaserStart } from "@/lib/faq-data";
import { ablaufKurz, leistungen } from "@/lib/leistungen-data";
import { referenzen } from "@/lib/referenzen-data";
import { KontaktCta } from "@/components/kontakt-cta";
import { Testimonials } from "@/components/testimonials";
import { MediaPlatzhalter, LogoPlatzhalter } from "@/components/media-platzhalter";
import { EventAnfrageForm } from "@/components/event-anfrage-form";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";

export const metadata: Metadata = {
  title: `Eventagentur in ${site.city}: Firmenfeiern, Tagungen, private Feste`,
  description: `${site.name} richtet Events aus: eigene Location für rund 100 Gäste in ${site.city}, Buffet-Catering und Equipment von einer Adresse.`,
};

export default function Home() {
  return (
    <>
      {/* 1.1 Hero: Claim, Subline, zwei CTAs. Die Bildfläche wartet auf echtes Eventmaterial. */}
      <section className="relative flex min-h-[85svh] items-center overflow-hidden bg-stone-950 text-white">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(110% 130% at 80% 115%, rgba(245,158,11,0.55) 0%, rgba(234,88,12,0.4) 30%, rgba(190,18,60,0.25) 55%, transparent 78%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 100% at 15% -10%, rgba(120,113,108,0.35) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Eventagentur in {site.city}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Feiern, ohne selbst zu organisieren.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-300">
            {site.name} plant dein Event, baut auf und räumt weg: Firmenfeier, Tagung oder privates
            Fest. Du lädst ein. Den Rest machen wir.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/kontakt#anfrage"
              className="cta-glow inline-flex cursor-pointer items-center justify-center rounded-xl bg-sunset px-7 py-4 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Event anfragen
            </a>
            <Link
              href="/referenzen"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-white/25 px-7 py-4 text-base font-semibold text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/5"
            >
              Referenzen ansehen
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <BadgeDark>Eigene Location für rund 100 Gäste</BadgeDark>
            <BadgeDark>Buffet und Getränke von uns</BadgeDark>
            <BadgeDark>Ein Ansprechpartner für alles</BadgeDark>
          </div>
        </div>
        <p className="absolute bottom-4 right-4 text-xs text-white/35">
          [Platzhalter: Vollbild-Foto oder Loop-Video von einem echten Event]
        </p>
      </section>

      {/* 1.2 Trust-Leiste: Kundenlogos und Kennzahlen, beide ehrlich als offen markiert */}
      <div className="border-b border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {[1, 2, 3, 4, 5].map((n) => (
              <LogoPlatzhalter key={n} nummer={n} />
            ))}
          </div>
          <div className="mt-8 grid gap-6 text-center sm:grid-cols-3">
            {[
              { wert: "[ZAHL]", label: "Events ausgerichtet" },
              { wert: "[ZAHL]", label: "Jahre Erfahrung" },
              { wert: "[ZAHL]", label: "Gäste bewirtet" },
            ].map((k) => (
              <div key={k.label}>
                <p className="font-display text-3xl font-semibold text-stone-400 dark:text-stone-500">{k.wert}</p>
                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{k.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-stone-400 dark:text-stone-500">
            Logos und Zahlen tragen wir nach, sobald die ersten Events gelaufen sind. Erfinden werden
            wir sie nicht.
          </p>
        </div>
      </div>

      {/* 1.3 Leistungen: fünf Karten, je eine pro Eventtyp */}
      <Section>
        <Reveal>
          <H2>Was wir ausrichten</H2>
          <Lead>
            Fünf Arten von Events, ein Prinzip: Raum, Essen, Getränke und Ausstattung kommen von
            einer Adresse.
          </Lead>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leistungen.map((l) => (
            <RevealItem key={l.id}>
              <Link
                href={`/leistungen#${l.id}`}
                className="group block h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-md dark:border-stone-800 dark:bg-stone-900"
              >
                <p className="flex items-center justify-between font-semibold">
                  {l.name}
                  <ArrowIcon className="h-4 w-4 text-amber-600 transition-transform duration-200 group-hover:translate-x-1" />
                </p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-amber-700/80 dark:text-amber-500/80">
                  {l.beispiele}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{l.kurz}</p>
              </Link>
            </RevealItem>
          ))}
          <RevealItem>
            <Link
              href="/leistungen"
              className="group flex h-full items-center justify-center rounded-2xl border border-dashed border-stone-300 p-5 text-center font-semibold text-stone-500 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-700 dark:border-stone-700 dark:text-stone-400"
            >
              Alle Leistungen ansehen
            </Link>
          </RevealItem>
        </RevealStagger>
      </Section>

      {/* 1.4 Referenzen-Teaser */}
      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <Reveal>
          <H2>Projekte</H2>
          <Lead>
            Drei Beispiele zeigen, wie wir Events dokumentieren werden. Echte Berichte mit echten
            Zahlen folgen nach den ersten Veranstaltungen.
          </Lead>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-3">
          {referenzen.map((r) => (
            <RevealItem key={r.slug}>
              <Link
                href={`/referenzen/${r.slug}`}
                className="group block h-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-stone-800 dark:bg-stone-900"
              >
                <MediaPlatzhalter label={r.bildLabel} ratio="aspect-[3/2]" className="rounded-none border-0 border-b-2" />
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-amber-700/80 dark:text-amber-500/80">
                    {r.typ} · Beispielprojekt
                  </p>
                  <p className="mt-1 font-semibold group-hover:text-amber-700 dark:group-hover:text-amber-500">
                    {r.titel}
                  </p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
        <Reveal className="mt-6">
          <Link href="/referenzen" className="inline-flex items-center gap-1.5 font-semibold text-amber-700 hover:underline dark:text-amber-500">
            Alle Projekte ansehen <ArrowIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>

      {/* 1.5 Ablauf: vier Schritte in einer Zeile */}
      <Section>
        <Reveal>
          <H2>So läuft das ab</H2>
          <Lead>Vier Schritte vom ersten Anruf bis zur Abrechnung. Ohne Kleingedrucktes zwischendrin.</Lead>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ablaufKurz.map((s, i) => (
            <RevealItem key={s.titel}>
              <div className="h-full rounded-2xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900">
                <p className="font-display text-2xl font-semibold text-amber-600">{i + 1}</p>
                <p className="mt-2 font-semibold">{s.titel}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{s.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
        <Reveal className="mt-6">
          <Link href="/ablauf" className="inline-flex items-center gap-1.5 font-semibold text-amber-700 hover:underline dark:text-amber-500">
            Den ganzen Ablauf ansehen <ArrowIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>

      {/* 1.6 Über-uns-Teaser: macht die Agentur zur Person */}
      <Section className="bg-stone-100/70 dark:bg-stone-900/40">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <MediaPlatzhalter label="Portrait des Teams" ratio="aspect-[4/3]" />
          </Reveal>
          <Reveal delay={0.1}>
            <H2>Wer dahinter steckt</H2>
            <Lead>
              {site.name} ist neu, und wir verstecken das nicht. Was wir haben: eine eigene Location
              in {site.city}, eine Küche für das Buffet und die Zeit, uns dein Event wirklich
              anzuhören. Du bist bei uns nicht Veranstaltung Nummer 87 in diesem Jahr.
            </Lead>
            <div className="mt-6">
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-1.5 font-semibold text-amber-700 hover:underline dark:text-amber-500"
              >
                Mehr über uns <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 1.7 Testimonials */}
      <Testimonials />

      {/* 1.8 FAQ-Teaser */}
      <FaqSection title="Die häufigsten Fragen" items={faqTeaserStart} />
      <div className="mx-auto -mt-8 w-full max-w-6xl px-4 pb-4 sm:px-6">
        <Link href="/faq" className="inline-flex items-center gap-1.5 font-semibold text-amber-700 hover:underline dark:text-amber-500">
          Alle Fragen und Antworten <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>

      {/* 1.9 Kontakt-CTA mit eingebettetem Formular */}
      <KontaktCta
        titel="Erzähl uns von deinem Event."
        text="Drei kurze Schritte, dann liegt deine Anfrage bei uns auf dem Tisch."
      >
        <div className="max-w-2xl">
          <EventAnfrageForm id="anfrage" />
        </div>
      </KontaktCta>
    </>
  );
}
