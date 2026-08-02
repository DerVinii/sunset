import type { FaqItem } from "@/lib/faq-data";
import { H2, Section } from "@/components/ui-basics";

/**
 * Accordion-Sektion für häufige Fragen.
 * Das FAQPage-Schema trägt nur die Seite /faq (schema-Prop), damit Google
 * nicht dieselben Fragen mehrfach auf verschiedenen Seiten gemeldet bekommt.
 */
export function FaqSection({
  title = "Häufige Fragen",
  items,
  id = "faq",
  schema = false,
}: {
  title?: string;
  items: FaqItem[];
  id?: string;
  schema?: boolean;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <Section id={id}>
      <H2>{title}</H2>
      <FaqAccordion items={items} className="mt-6" />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Section>
  );
}

/** Nur das Accordion, für Seiten, die Überschrift und Layout selbst setzen. */
export function FaqAccordion({ items, className = "" }: { items: FaqItem[]; className?: string }) {
  return (
    <div
      className={`divide-y divide-stone-200 rounded-xl border border-stone-200 bg-white dark:divide-stone-800 dark:border-stone-800 dark:bg-stone-900 ${className}`}
    >
      {items.map((item) => (
        <details key={item.q} className="group px-5 py-4">
          <summary className="cursor-pointer list-none font-medium marker:hidden">
            <span className="mr-2 inline-block transition-transform group-open:rotate-90">›</span>
            {item.q}
          </summary>
          <p className="mt-2 pl-5 text-sm text-stone-600 dark:text-stone-300">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
