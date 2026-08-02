"use server";

import { redirect } from "next/navigation";
import { deliverToOperator } from "@/lib/mail";

export type AnfrageState = {
  status: "idle" | "error";
  message: string;
};

const typLabels: Record<string, string> = {
  firmenfeier: "Firmenfeier",
  tagung: "Tagung",
  produktpraesentation: "Produktpräsentation",
  incentive: "Teamevent",
  privat: "Private Feier",
  anderes: "Anderes Event",
};

/**
 * Nimmt das dreistufige Anfrageformular entgegen und leitet bei Erfolg
 * auf /danke weiter. Die Bestätigung nennt bewusst keine Antwortzeit:
 * Die ist noch nicht festgelegt, und eine Frist, die im Alltag reißt,
 * kostet mehr Vertrauen, als sie vorher gewinnt.
 */
export async function submitEventAnfrageAction(
  _prev: AnfrageState,
  formData: FormData
): Promise<AnfrageState> {
  const eventtyp = String(formData.get("eventtyp") ?? "").trim();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const datum = String(formData.get("datum") ?? "").trim();
  const consent = formData.get("consent");

  if (!eventtyp || !typLabels[eventtyp]) {
    return { status: "error", message: "Bitte wähle in Schritt 1 aus, um welches Event es geht." };
  }
  if (!name) {
    return { status: "error", message: "Bitte gib deinen Namen an." };
  }
  if (!email && !phone) {
    return { status: "error", message: "Bitte gib E-Mail oder Telefonnummer an, damit wir antworten können." };
  }
  if (!consent) {
    return { status: "error", message: "Bitte bestätige die Datenschutz-Einwilligung." };
  }

  const feldLabels: Record<string, string> = {
    eventtyp: "Eventtyp",
    datum: "Datum",
    gaeste: "Gästezahl",
    ort: "Ort",
    budget: "Budgetrahmen",
    name: "Name",
    email: "E-Mail",
    phone: "Telefon",
    nachricht: "Nachricht",
  };

  const lines: string[] = [`Neue Event-Anfrage: ${typLabels[eventtyp]}`, ""];
  for (const [key, label] of Object.entries(feldLabels)) {
    const value = String(formData.get(key) ?? "").trim();
    if (!value) continue;
    lines.push(`${label}: ${key === "eventtyp" ? typLabels[eventtyp] : value}`);
  }

  const delivery = await deliverToOperator({
    subject: `[Website] ${typLabels[eventtyp]}, ${name}${datum ? `, ${datum}` : ""}`,
    text: lines.join("\n"),
    replyTo: email || undefined,
  });

  if (!delivery.ok) {
    return {
      status: "error",
      message: "Das Absenden hat gerade nicht geklappt. Bitte versuch es in ein paar Minuten noch einmal.",
    };
  }

  redirect("/danke");
}
