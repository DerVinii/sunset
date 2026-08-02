"use client";

import { useActionState } from "react";
import Link from "next/link";
import { submitInquiryAction, type Funnel, type InquiryState } from "@/app/actions";

type FieldSpec = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "number" | "textarea" | "select" | "checkbox";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  hint?: string;
};

const initialState: InquiryState = { status: "idle", message: "" };

/**
 * Konfigurierbares Anfrageformular.
 *
 * Die Zeile unter dem Knopf nennt bewusst keine Antwortzeit: Wie schnell der
 * Unternehmer antwortet, steht noch nicht fest, und eine Frist, die im Alltag
 * reißt, kostet mehr Vertrauen, als sie vorher gewinnt.
 */
export function InquiryForm({
  funnel,
  fields,
  submitLabel,
  promise = "Wir melden uns bei dir und klären den Rest persönlich.",
  id = "anfrage",
}: {
  funnel: Funnel;
  fields: FieldSpec[];
  submitLabel: string;
  promise?: string;
  id?: string;
}) {
  const [state, formAction, pending] = useActionState(submitInquiryAction, initialState);

  if (state.status === "success") {
    return (
      <div id={id} className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/40">
        <p className="text-lg font-semibold text-emerald-900 dark:text-emerald-200">Anfrage eingegangen ✓</p>
        <p className="mt-2 text-emerald-900/90 dark:text-emerald-100/90">{state.message}</p>
      </div>
    );
  }

  return (
    <form id={id} action={formAction} className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <input type="hidden" name="funnel" value={funnel} />
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={f.type === "textarea" || f.type === "checkbox" ? "sm:col-span-2" : ""}>
            {f.type === "checkbox" ? (
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" name={f.name} className="mt-1" />
                <span>{f.label}</span>
              </label>
            ) : (
              <label className="block text-sm font-medium">
                {f.label}
                {f.required ? " *" : ""}
                {f.type === "textarea" ? (
                  <textarea
                    name={f.name}
                    required={f.required}
                    placeholder={f.placeholder}
                    rows={3}
                    className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 dark:border-stone-700 dark:bg-stone-950"
                  />
                ) : f.type === "select" ? (
                  <select
                    name={f.name}
                    required={f.required}
                    className="mt-1 h-11 w-full rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950"
                  >
                    <option value="">Bitte wählen</option>
                    {f.options?.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={f.type ?? "text"}
                    name={f.name}
                    required={f.required}
                    placeholder={f.placeholder}
                    className="mt-1 h-11 w-full rounded-lg border border-stone-300 px-3 dark:border-stone-700 dark:bg-stone-950"
                  />
                )}
                {f.hint && <span className="mt-1 block text-xs font-normal text-stone-500">{f.hint}</span>}
              </label>
            )}
          </div>
        ))}
      </div>

      <label className="mt-4 flex items-start gap-2 text-xs text-stone-600 dark:text-stone-400">
        <input type="checkbox" name="consent" required className="mt-0.5" />
        <span>
          Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage genutzt werden. Details in der{" "}
          <Link href="/datenschutz" className="underline">
            Datenschutzerklärung
          </Link>
          . *
        </span>
      </label>

      {state.status === "error" && (
        <p className="mt-3 text-sm font-medium text-red-700 dark:text-red-400" role="alert">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-4 h-12 w-full rounded-lg bg-amber-600 px-6 font-semibold text-white hover:bg-amber-700 disabled:opacity-50 sm:w-auto"
      >
        {pending ? "Wird gesendet …" : submitLabel}
      </button>
      <p className="mt-3 text-sm font-medium text-stone-700 dark:text-stone-300">✓ {promise}</p>
    </form>
  );
}
