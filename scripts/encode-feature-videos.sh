#!/usr/bin/env bash
# Re-encode landing-page feature clips for web: smaller files, H.264, fast start, no audio.
# Requires ffmpeg (macOS: brew install ffmpeg).
#
# Optional: BACKUP_ORIGINALS=1 copies each file to public/videos/originals/ before overwriting.
#
# Usage (from repo root):
#   bash scripts/encode-feature-videos.sh
#   pnpm videos:encode

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VID="$ROOT/public/videos"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg not found. Install it (e.g. brew install ffmpeg) and run this script again." >&2
  exit 1
fi

shopt -s nullglob
files=("$VID"/*.mp4)
if [[ ${#files[@]} -eq 0 ]]; then
  echo "No .mp4 files in $VID" >&2
  exit 1
fi

for input in "${files[@]}"; do
  base="$(basename "$input")"

  if [[ "${BACKUP_ORIGINALS:-}" == "1" ]]; then
    mkdir -p "$VID/originals"
    cp -f "$input" "$VID/originals/$base"
    echo "Backed up to originals/$base"
  fi

  tmp="$(mktemp "${TMPDIR:-/tmp}/rysmaan-video.XXXXXX.mp4")"
  echo "Encoding: $base"

  ffmpeg -hide_banner -loglevel error -stats -y -i "$input" \
    -vf "scale='min(1280,iw)':-2" \
    -c:v libx264 -preset medium -crf 28 \
    -pix_fmt yuv420p \
    -movflags +faststart \
    -an \
    "$tmp"

  mv "$tmp" "$input"
  echo "Done: $base ($(du -h "$input" | cut -f1))"
done

echo "All videos encoded."
