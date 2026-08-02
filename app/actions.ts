"use server";

import { deliverToOperator } from "@/lib/mail";

export type Funnel = "b2b" | "hochzeit" | "privat" | "equipment" | "kontakt";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message: string;
};

const funnelLabels: Record<Funnel, string> = {
  b2b: "Firmenfeier",
  hochzeit: "Hochzeit",
  privat: "Private Feier",
  equipment: "Equipment mieten",
  kontakt: "Kontakt",
};

/**
 * Die Bestätigung nennt bewusst keine Antwortzeit. Wie schnell der Unternehmer
 * antwortet, ist noch nicht festgelegt, und eine Frist zu versprechen, die im
 * Alltag reißt, schadet mehr als sie bringt.
 */
export async function submitInquiryAction(
  _prev: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  const funnel = (formData.get("funnel") as Funnel) ?? "kontakt";
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const consent = formData.get("consent");

  if (!name) {
    return { status: "error", message: "Bitte gib deinen Namen an." };
  }
  if (!email && !phone) {
    return { status: "error", message: "Bitte gib E-Mail oder Telefonnummer an, damit wir antworten können." };
  }
  if (!consent) {
    return { status: "error", message: "Bitte bestätige die Datenschutz-Einwilligung." };
  }

  const lines: string[] = [`Neue Anfrage: ${funnelLabels[funnel]}`, ""];
  for (const [key, value] of formData.entries()) {
    if (key === "consent" || typeof value !== "string" || !value.trim()) continue;
    lines.push(`${key}: ${value.trim()}`);
  }

  const delivery = await deliverToOperator({
    subject: `[Website] ${funnelLabels[funnel]}, ${name}${date ? `, ${date}` : ""}`,
    text: lines.join("\n"),
    replyTo: email || undefined,
  });

  if (!delivery.ok) {
    return {
      status: "error",
      message: "Das Absenden hat gerade nicht geklappt. Bitte versuch es in ein paar Minuten noch einmal.",
    };
  }

  return {
    status: "success",
    message: "Deine Anfrage ist bei uns angekommen. Wir melden uns bei dir und klären alles Weitere persönlich.",
  };
}
