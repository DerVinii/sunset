import { H2, Lead, Section } from "@/components/ui-basics";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";

/**
 * Kundenstimmen-Sektion (Startseite 1.7, /referenzen 3.5).
 *
 * Es gibt noch keine echten Stimmen, und erfundene Zitate mit erfundenen
 * Namen wären schlimmer als gar keine. Die Karten zeigen darum offen den
 * Platzhalter, der Einleitungstext erklärt warum.
 */

const platzhalterStimmen = [
  {
    zitat: "[KUNDENSTIMME: kommt aus dem Feedback nach einem echten Event]",
    name: "[NAME]",
    firma: "[FIRMA ODER ANLASS]",
  },
  {
    zitat: "[KUNDENSTIMME: kommt aus dem Feedback nach einem echten Event]",
    name: "[NAME]",
    firma: "[FIRMA ODER ANLASS]",
  },
];

export function Testimonials() {
  return (
    <Section className="bg-stone-100/70 dark:bg-stone-900/40">
      <Reveal>
        <H2>Was Kunden sagen</H2>
        <Lead>
          Noch nichts, und das sagen wir lieber offen, als hier erfundene Zitate hinzustellen.
          Nach den ersten Events fragen wir jeden Kunden um eine ehrliche Einschätzung, und die
          steht dann hier. Auch die kritischen.
        </Lead>
      </Reveal>
      <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-2">
        {platzhalterStimmen.map((s, i) => (
          <RevealItem key={i}>
            <figure className="h-full rounded-2xl border border-dashed border-stone-300 bg-white/60 p-6 dark:border-stone-700 dark:bg-stone-900/40">
              <blockquote className="text-stone-500 dark:text-stone-400">„{s.zitat}“</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span
                  className="h-10 w-10 shrink-0 rounded-full border border-dashed border-stone-300 bg-stone-100 dark:border-stone-700 dark:bg-stone-800"
                  aria-hidden
                />
                <span className="text-sm">
                  <span className="block font-semibold text-stone-600 dark:text-stone-300">{s.name}</span>
                  <span className="text-stone-400 dark:text-stone-500">{s.firma}</span>
                </span>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  );
}
