import "server-only";
import { promises as fs } from "fs";
import path from "path";

/**
 * Mail-Zustellung (Plan Kap. 11).
 * Produktion: Resend (RESEND_API_KEY als Env-Variable in Vercel setzen).
 * Entwicklung/ohne Key: Anfragen landen als JSON-Dateien in data/inbox/,
 * so ist der komplette Flow ohne externen Dienst testbar.
 */

export type MailPayload = {
  subject: string;
  text: string;
  replyTo?: string;
};

export async function deliverToOperator(payload: MailPayload): Promise<{ ok: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.OPERATOR_EMAIL;

  if (apiKey && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.MAIL_FROM ?? "anfragen@sunset-events.example",
        to,
        subject: payload.subject,
        text: payload.text,
        reply_to: payload.replyTo,
      }),
    });
    return { ok: res.ok };
  }

  const inboxDir = path.join(process.cwd(), "data", "inbox");
  await fs.mkdir(inboxDir, { recursive: true });
  const file = path.join(inboxDir, `${Date.now()}-anfrage.json`);
  await fs.writeFile(file, JSON.stringify(payload, null, 2), "utf-8");
  return { ok: true };
}
