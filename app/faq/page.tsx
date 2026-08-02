import type { Metadata } from "next";
import { Container, Section } from "@/components/ui-basics";
import { FaqAccordion } from "@/components/faq";
import { faqGruppen } from "@/lib/faq-data";
import { KontaktCta } from "@/components/kontakt-cta";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "FAQ: Fragen und Antworten",
  description:
    "Antworten auf die häufigsten Fragen zu Zusammenarbeit, Kosten, Planung, Technik und Stornierung. Ehrlich, auch da, wo noch etwas offen ist.",
};

export default function FaqPage() {
  /* FAQPage-Schema über alle Gruppen, nur auf dieser Seite (Struktur 6.4) */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGruppen.flatMap((g) =>
      g.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <>
      {/* 6.1 Page-Hero */}
      <div className="border-b border-stone-200 bg-stone-100/70 dark:border-stone-800 dark:bg-stone-900/40">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-500">
            FAQ
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Fragen und Antworten.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Hier steht, was Kunden uns am häufigsten fragen. Wo eine Regelung noch nicht fest ist,
            sagen wir das offen, statt drumherum zu schreiben.
          </p>
          <nav className="mt-6 flex flex-wrap gap-2" aria-label="Zu den Themen springen">
            {faqGruppen.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:border-amber-500 hover:text-amber-700 dark:border-stone-700 dark:bg-stone-900 dark:hover:text-amber-500"
              >
                {g.titel}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* 6.2 Accordion-Gruppen */}
      {faqGruppen.map((gruppe, i) => (
        <Section key={gruppe.id} id={gruppe.id} className={i % 2 === 1 ? "bg-stone-100/70 dark:bg-stone-900/40" : ""}>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{gruppe.titel}</h2>
            <FaqAccordion items={gruppe.items} className="mt-5" />
          </Reveal>
        </Section>
      ))}

      {/* 6.3 Frage nicht dabei? */}
      <KontaktCta
        titel="Deine Frage war nicht dabei?"
        text="Dann stell sie uns direkt. Du bekommst eine ehrliche Antwort, auch wenn sie 'wissen wir noch nicht' lautet."
        buttonLabel="Frage stellen"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
