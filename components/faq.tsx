import type { FaqItem } from "@/lib/faq-data";
import { H2, Section } from "@/components/ui-basics";

/**
 * FAQ-Sektion mit FAQPage-Schema (AEO, Plan Kap. 8).
 * Antworten enthalten Preiskorridore, direkt zitierfähig für Featured Snippets / KI-Antworten.
 */
export function FaqSection({
  title = "Häufige Fragen",
  items,
  id = "faq",
}: {
  title?: string;
  items: FaqItem[];
  id?: string;
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
      <div className="mt-6 divide-y divide-stone-200 rounded-xl border border-stone-200 bg-white dark:divide-stone-800 dark:border-stone-800 dark:bg-stone-900">
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Section>
  );
}
