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

## Handy-Satz (`*-m.mp4`, `*-m.webp`) — Pflicht, keine Credits

Ein Clip wird komplett geladen, bevor er das erste Bild zeigen kann. Mit den 1080p-Mastern
wiegt die Welt 80 MB — unterwegs kommen die Clips damit nicht rechtzeitig an und man sieht
nur das Standbild, bis hart zur nächsten Szene geschnitten wird (gemessen bei 10 Mbit/s:
kein einziger Kameraflug rechtzeitig da). Deshalb liegt neben jedem Master eine leichte
Fassung. Das ist eine reine ffmpeg-Umkodierung der vorhandenen Master — **keine
Neugenerierung, 0 Credits**:

```bash
# Clips: 1280x720, 15 fps, dichte Keyframes fürs Scrubben  → ~2 MB statt ~10 MB
ffmpeg -i dive-N.mp4 -vf "fps=15,scale=1280:720:flags=lanczos" -c:v libx264 -preset slow \
  -crf 29 -g 4 -keyint_min 4 -sc_threshold 0 -pix_fmt yuv420p -movflags +faststart -an dive-N-m.mp4
# Poster: WebP statt PNG (9 MB → 1,3 MB)
cwebp -q 86 still-N.png -o still-N.webp          # Desktop, native Größe
cwebp -q 80 -resize 1280 0 still-N.png -o still-N-m.webp   # Handy
```

Warum 720p reicht: auf einem Hochkant-Handy zeigt `object-fit: cover` nur die mittleren
~26 % der Bildbreite. Der sichtbare Ausschnitt ist bei 720p von dem des Masters nicht zu
unterscheiden — geprüft im 390-px-Ausschnitt.

Ergebnis: Handy-Gewicht 80 MB → 15 MB, alle neun Segmente laufen bei 10 Mbit/s durchgehend
(auch bei schnellem Scrollen), bei 5 Mbit/s zeigt nur der allererste Clip kurz sein Poster.

## Zwei iOS-Eigenheiten, an denen Szenen sonst auf dem Standbild hängenbleiben

Beide sind in der Engine gelöst; wer sie umbaut, sollte sie kennen:

1. **iOS lädt Videodaten erst bei `play()`.** `preload="auto"` wird ignoriert. Wer das
   Anstoßen (stummes `play()`→`pause()`) an ein Ereignis wie `loadeddata` hängt, wartet
   ewig: das Ereignis setzt genau die Daten voraus, die ohne `play()` nie geholt werden.
   Angestoßen wird deshalb sofort beim Anhängen des Elements — und zusätzlich bei jeder
   Berührung für alles, was noch keine Daten hat (jedes Wischen beginnt mit `touchstart`,
   die Seite repariert sich also selbst).
2. **iOS gibt einer Seite nur wenige gleichzeitige Video-Dekoder.** Sind sie belegt,
   dekodieren weitere Szenen still und leise gar nicht. Deshalb sind Herunterladen und
   Abspielen getrennt: die Daten bleiben als Blob liegen, ein `<video>`-Element bekommen
   aber nur die Szenen rund um die aktuelle (höchstens drei statt neun).

Achtung beim Testen: Playwrights WebKit ist macOS-WebKit und zeigt **keine** dieser beiden
Eigenheiten — es lädt eifrig vor. Ein grüner WebKit-Lauf beweist hier nichts; er zeigt nur,
dass nichts anderes kaputt ist. Echte Prüfung nur auf einem iPhone.

NSFW-Fehlalarme (Seedance mag „Hochzeit/Wein/Bett"-Kontexte nicht): 1) neu rollen,
2) Triggerwörter entfernen + „empty, no people, architectural, tasteful", 3) einzelnen Clip
auf `kling3_0` mit denselben Frames (Filter anders), 4) Connector-Slot auf `null` (Engine
blendet direkt über).
