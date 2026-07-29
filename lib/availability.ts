import "server-only";
import { promises as fs } from "fs";
import path from "path";

/**
 * Verfügbarkeits-Datenquelle (Plan Kap. 4):
 * Zwei manuell gepflegte Pflicht-Kalender: Location (Einzelabfrage überall)
 * und Bierwagen (Engpass-Gerät, Tages-Ebene).
 *
 * Status-Logik (kollisionssicher):
 * - "belegt": vom Betreiber gepflegt.
 * - "vorgemerkt": vom System geschrieben, sobald eine Vormerkungs-Zusage ausgespielt
 *   wurde (Vormerkungs-Rückschreibung, Plan Kap. 4). Wird im Checker wie
 *   "auf Anfrage" behandelt, nie als "frei" an einen zweiten Anfrager.
 *
 * Launch-Version: einfache JSON-Datei (vom Betreiber ohne Technik-Kenntnisse pflegbar).
 * Hinweis Produktion/Vercel: Das Dateisystem ist dort nicht dauerhaft beschreibbar.
 * Die Rückschreibung braucht in Phase 2 einen kleinen Datenspeicher (z. B. Vercel KV).
 * Struktur und Logik bleiben identisch.
 */

export type CalendarKey = "location" | "bierwagen";

type CalendarEntry = { belegt: string[]; vorgemerkt: string[] };
type AvailabilityData = Record<CalendarKey, CalendarEntry>;

const dataFile = () => path.join(process.cwd(), "data", "availability.json");

async function loadData(): Promise<{ raw: Record<string, unknown>; data: AvailabilityData }> {
  const raw = JSON.parse(await fs.readFile(dataFile(), "utf-8"));
  const norm = (key: CalendarKey): CalendarEntry => ({
    belegt: raw[key]?.belegt ?? [],
    vorgemerkt: raw[key]?.vorgemerkt ?? [],
  });
  return { raw, data: { location: norm("location"), bierwagen: norm("bierwagen") } };
}

export type AvailabilityResult = {
  status: "frei" | "belegt" | "auf-anfrage" | "unbekannt";
  date: string;
  calendar: CalendarKey;
};

export async function checkAvailability(
  calendar: CalendarKey,
  isoDate: string
): Promise<AvailabilityResult> {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) {
    return { status: "unbekannt", date: isoDate, calendar };
  }
  try {
    const { data } = await loadData();
    if (data[calendar].belegt.includes(isoDate)) {
      return { status: "belegt", date: isoDate, calendar };
    }
    if (data[calendar].vorgemerkt.includes(isoDate)) {
      return { status: "auf-anfrage", date: isoDate, calendar };
    }
    return { status: "frei", date: isoDate, calendar };
  } catch {
    return { status: "unbekannt", date: isoDate, calendar };
  }
}

/**
 * Vormerkungs-Rückschreibung: markiert ein Datum als "vorgemerkt", damit der
 * Termin-Checker es keinem zweiten Anfrager als frei anzeigt.
 * Gibt false zurück, wenn nicht geschrieben werden konnte (z. B. read-only FS).
 * Der Aufrufer spielt dann KEINE Vormerkungs-Zusage aus (Regel: nie blind zusagen).
 */
export async function markHold(calendar: CalendarKey, isoDate: string): Promise<boolean> {
  try {
    const { raw, data } = await loadData();
    if (
      data[calendar].belegt.includes(isoDate) ||
      data[calendar].vorgemerkt.includes(isoDate)
    ) {
      return false;
    }
    const entry = (raw[calendar] ?? {}) as { belegt?: string[]; vorgemerkt?: string[] };
    entry.vorgemerkt = [...(entry.vorgemerkt ?? []), isoDate];
    (raw as Record<string, unknown>)[calendar] = entry;
    await fs.writeFile(dataFile(), JSON.stringify(raw, null, 2), "utf-8");
    return true;
  } catch {
    return false;
  }
}
