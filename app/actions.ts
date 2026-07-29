"use server";

import { checkAvailability, markHold, type AvailabilityResult, type CalendarKey } from "@/lib/availability";
import { deliverToOperator } from "@/lib/mail";
import { site } from "@/lib/site";

/** Einzelabfrage gegen einen der beiden Pflicht-Kalender (Plan Kap. 4). */
export async function checkDateAction(
  calendar: CalendarKey,
  isoDate: string
): Promise<AvailabilityResult> {
  return checkAvailability(calendar, isoDate);
}

export type Funnel = "b2b" | "hochzeit" | "privat" | "equipment" | "kontakt";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Vormerkungs-Zusage nur bei nachweislich freiem Kalender (kollisionssichere Regel, Plan Kap. 4). */
  holdNote?: string;
};

const funnelLabels: Record<Funnel, string> = {
  b2b: "Firmenfeier (B2B)",
  hochzeit: "Hochzeit",
  privat: "Private Feier",
  equipment: "Equipment-Miete",
  kontakt: "Kontakt",
};

function confirmationFor(funnel: Funnel): string {
  switch (funnel) {
    case "b2b":
      return `Vielen Dank! Ihre Anfrage ist eingegangen. ${site.responsePromise.sie} Meist sind wir schneller.`;
    case "hochzeit":
      return `Danke euch! Eure Anfrage ist eingegangen. ${site.responsePromise.du}`;
    case "equipment":
      return `Danke dir! Deine Anfrage ist eingegangen. Verfügbarkeits-Bestätigung bis zum nächsten Werktag, 12:00 Uhr.`;
    default:
      return `Vielen Dank! Ihre Nachricht ist eingegangen. Antwort bis zum nächsten Werktag, 12:00 Uhr.`;
  }
}

/**
 * Vormerkungs-Regel (Plan Kap. 4, kollisionssicher):
 * Zusage NUR wenn der Kalender frei zeigt UND die Rückschreibung gelingt,
 * sonst neutrale Eingangs-Bestätigung. B2B spielt keine Vormerkung aus.
 */
async function holdNoteFor(funnel: Funnel, isoDate: string | undefined): Promise<string | undefined> {
  if (!isoDate) return undefined;
  if (funnel === "hochzeit") {
    const check = await checkAvailability("location", isoDate);
    if (check.status === "frei" && (await markHold("location", isoDate))) {
      return "Euer Wunschtermin ist für euch vorgemerkt. Wir bestätigen bis zum nächsten Werktag, 12:00 Uhr, und halten euch den Termin danach 7 Tage frei, während ihr in Ruhe entscheidet. Kein anderes Paar bekommt ihn in dieser Zeit zugesagt. Anfragen bearbeiten wir in Eingangsreihenfolge.";
    }
    return undefined;
  }
  if (funnel === "equipment") {
    const check = await checkAvailability("bierwagen", isoDate);
    if (check.status === "frei" && (await markHold("bierwagen", isoDate))) {
      return "Dein Wunschtermin ist bis zu unserer Bestätigung (nächster Werktag, 12:00 Uhr) für dich reserviert. Anfragen bearbeiten wir in Eingangsreihenfolge.";
    }
    return "Deine Anfrage wird in Eingangsreihenfolge bearbeitet. Bestätigung bis zum nächsten Werktag, 12:00 Uhr.";
  }
  return undefined;
}

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
      message: `Das hat leider nicht geklappt. Bitte ruf uns an: ${site.phoneDisplay} (${site.phoneHours}).`,
    };
  }

  return {
    status: "success",
    message: confirmationFor(funnel),
    holdNote: await holdNoteFor(funnel, date || undefined),
  };
}
