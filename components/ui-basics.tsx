import type { ReactNode } from "react";

/** Design-System-Basiskomponenten "Sunset Warmth" (Schritt 5). */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-14 sm:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{children}</h2>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg dark:text-stone-300">{children}</p>;
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-200/80 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-stone-800 shadow-sm backdrop-blur dark:border-stone-700 dark:bg-stone-900/80 dark:text-stone-100">
      <CheckIcon className="h-4 w-4 text-amber-600" />
      {children}
    </span>
  );
}

/** Badge-Variante für dunkle Hero-Flächen. */
export function BadgeDark({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-stone-100 backdrop-blur">
      <CheckIcon className="h-4 w-4 text-amber-400" />
      {children}
    </span>
  );
}

export function GuaranteeBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/40">
      <p className="flex items-center gap-2 font-semibold text-emerald-900 dark:text-emerald-200">
        <ShieldIcon className="h-5 w-5" />
        {title}
      </p>
      <div className="mt-1.5 text-sm leading-relaxed text-emerald-900/80 dark:text-emerald-100/80">{children}</div>
    </div>
  );
}

export function CtaButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex cursor-pointer items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-sunset text-white cta-glow hover:-translate-y-0.5"
      : "border border-stone-300 bg-white text-stone-900 hover:border-stone-400 hover:bg-stone-50 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

/* Inline-SVG-Icons (Lucide-Formen) — keine Emoji-Icons (Design-Checkliste) */
export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ShieldIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
