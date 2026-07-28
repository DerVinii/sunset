#!/bin/bash
# Platzhalter-Assets für die Scroll-World (0 Credits).
# 5 Stills (Gradient + Label) + 5 Dive-Clips (8s Zoom) + 4 Connector-Clips (5s Blende).
# Encoding nach Scroll-World-Skill: -g 8, faststart, kein Audio.
# Die Higgsfield-Renderings ersetzen diese Dateien später 1:1 (gleiche Namen).
set -euo pipefail

OUT="$(cd "$(dirname "$0")/.." && pwd)/public/world"
mkdir -p "$OUT"
FONT="/System/Library/Fonts/Helvetica.ttc"

# Szene: Name | Farbe oben | Farbe unten (Tagesreise: Nachmittag -> Mitternacht)
SCENES=(
  "Location|0xF7B267|0xF4845F"
  "Catering|0xF4845F|0xF25C54"
  "Bierwagen-Garten|0xF25C54|0xB23A48"
  "Hochzeit|0x8A4162|0x3C2A4D"
  "Firmenfeier|0x2B2140|0x14101F"
)

for i in 1 2 3 4 5; do
  IFS='|' read -r NAME C0 C1 <<< "${SCENES[$((i-1))]}"
  # Still 1536x1024 (3:2 wie gpt_image_2) — reiner Gradient (dieser ffmpeg-Build hat kein drawtext)
  ffmpeg -y -v error -f lavfi -i "gradients=s=1536x1024:c0=${C0}:c1=${C1}:x0=768:y0=0:x1=768:y1=1024:d=1" \
    -frames:v 1 "$OUT/still-${i}.png"
  # Dive: 8s langsamer Zoom auf dem Still
  ffmpeg -y -v error -loop 1 -i "$OUT/still-${i}.png" -t 8 \
    -vf "scale=1280:854,zoompan=z='1+0.15*in/200':d=200:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=25" \
    -an -c:v libx264 -preset fast -crf 23 -pix_fmt yuv420p \
    -g 8 -keyint_min 8 -sc_threshold 0 -movflags +faststart "$OUT/dive-${i}.mp4"
done

# Connectors: 5s Überblendung letzter Dive-Frame i -> erster Dive-Frame i+1
for i in 1 2 3 4; do
  j=$((i+1))
  ffmpeg -y -v error -sseof -0.15 -i "$OUT/dive-${i}.mp4" -frames:v 1 -q:v 2 "$OUT/_last-${i}.png"
  ffmpeg -y -v error -ss 0 -i "$OUT/dive-${j}.mp4" -frames:v 1 -q:v 2 "$OUT/_first-${j}.png"
  ffmpeg -y -v error \
    -loop 1 -t 5 -i "$OUT/_last-${i}.png" \
    -loop 1 -t 5 -i "$OUT/_first-${j}.png" \
    -filter_complex "[0:v]scale=1280:720,setsar=1[a];[1:v]scale=1280:720,setsar=1[b];[a][b]xfade=transition=fade:duration=4:offset=0.5,fps=25" \
    -an -c:v libx264 -preset fast -crf 23 -pix_fmt yuv420p \
    -g 8 -keyint_min 8 -sc_threshold 0 -movflags +faststart "$OUT/conn-${i}.mp4"
  rm -f "$OUT/_last-${i}.png" "$OUT/_first-${j}.png"
done

echo "Fertig:" && ls -la "$OUT"
