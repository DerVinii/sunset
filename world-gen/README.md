# Scroll-World-Generierung „Ein Tag mit Sunset Events"

Status: **Vorbereitet, noch nicht generiert** (User-Entscheidung: Budget-Ziel ≤ 200 Credits).
Aktuell liegen ffmpeg-Platzhalter in `public/world/` — die Generierung ersetzt sie 1:1
(gleiche Dateinamen), am Code ändert sich nichts.

## Freigegebene Parameter

- Art-Direction: **Clay-Diorama, warm** (Skill-Default)
- Route: **5 Szenen** — Tagesreise vom späten Nachmittag bis Mitternacht
- Mobile: **nein** (Engine-Fallback reicht; native 9:16-Kette später nachrüstbar)
- Architektur: **B** (Dive-in + Aerial-Connector — Insel-Hop passt zum Diorama)

## Kostenplan (Draft-Tier, im 200er-Ziel — Stand Preflight 28.07.2026)

| Posten | Modell | Stück | Credits |
|---|---|---|---|
| Szenen-Stills | `gpt_image_2` (2k, high, 3:2) | 5 × 7 | 35 |
| Dive-Clips 8 s | `seedance_2_0_mini` (720p) | 5 × 20 | 100 |
| Connector-Clips 5 s | `seedance_2_0_mini` | 4 × 12,5 | 50 |
| **Summe planmäßig** | | | **185** |

Jeder Re-Roll (NSFW-Fehlalarm/Ausreißer): +12,5–20. Upgrade-Pfad: einzelne Legs später
auf `seedance_2_0` (72/45) neu rendern — Draft bleibt frame-locked, also nahtlos.

## Ablauf (über Higgsfield-MCP)

1. **Stills:** je `prompts/still-*.txt` → `generate_image` (gpt_image_2, aspect_ratio 3:2,
   resolution 2k, quality high). Kohärenz-Check: gleicher Winkel, Palette, Licht — Ausreißer
   einzeln neu rollen. Ergebnis herunterladen → `public/world/still-N.png` (Platzhalter ersetzen).
2. **Dives:** je `prompts/dive-*.txt` → Still hochladen (`media_upload` + confirm) →
   `generate_video` (seedance_2_0_mini, mode std, 16:9, duration 8,
   medias: [{value: media_id, role: "start_image"}]).
3. **Frames extrahieren:** `ffmpeg -sseof -0.15 -i dive-i.mp4 -frames:v 1 last-i.png` und
   `ffmpeg -ss 0 -i dive-j.mp4 -frames:v 1 first-j.png` — Connector-Endpunkte sind IMMER
   die echten gerenderten Frames, nie die Stills (Seam-Regel!).
4. **Connectors:** je `prompts/conn-*.txt` → beide Frames hochladen → `generate_video`
   (mini, duration 5, start_image = last-i, end_image = first-j).
5. **Encoding:** native Auflösung, `-an -vf unsharp=5:5:0.8:5:5:0.0 -crf 20 -g 8
   -keyint_min 8 -sc_threshold 0 -movflags +faststart` → nach `public/world/` (Namen beibehalten).
6. **QA:** Seams screenshotten (kurz vor/nach jeder Naht — Frames müssen fast identisch sein),
   `video.seekable > 0`, reduced-motion zeigt Stills.

NSFW-Fehlalarme (Seedance mag „Hochzeit/Wein/Bett"-Kontexte nicht): 1) neu rollen,
2) Triggerwörter entfernen + „empty, no people, architectural, tasteful", 3) einzelnen Clip
auf `kling3_0` mit denselben Frames (Filter anders), 4) Connector-Slot auf `null` (Engine
blendet direkt über).
