import type { ReactNode } from "react";
import { Section } from "@/components/ui-basics";
import { Reveal } from "@/components/reveal";

/**
 * Abschlussblock am Ende fast jeder Seite (Struktur: "Kontakt-CTA").
 * Auf der Startseite trägt er zusätzlich das eingebettete Anfrageformular
 * (children), überall sonst nur den Button zur Kontaktseite.
 */
export function KontaktCta({
  titel = "Erzähl uns von deinem Event.",
  text = "Anlass, Datum, Gästezahl. Mehr brauchen wir für den Anfang nicht.",
  buttonLabel = "Event anfragen",
  children,
}: {
  titel?: string;
  text?: string;
  buttonLabel?: string;
  children?: ReactNode;
}) {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-stone-950 p-8 text-white sm:p-14">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(90% 120% at 85% 120%, rgba(245,158,11,0.5) 0%, rgba(234,88,12,0.35) 35%, rgba(190,18,60,0.2) 60%, transparent 80%)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">{titel}</h2>
            <p className="mt-3 max-w-xl text-stone-300">{text}</p>
            {children ? (
              <div className="mt-8">{children}</div>
            ) : (
              <div className="mt-6">
                <a
                  href="/kontakt#anfrage"
                  className="cta-glow inline-flex cursor-pointer items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold text-stone-950 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {buttonLabel}
                </a>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
