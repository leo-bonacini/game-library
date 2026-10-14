#!/usr/bin/env bash
# Scaffold a new game from templates/blank-game and register it in games.js.
# Usage: scripts/new-game.sh <slug> "<Title>" ["<description>"] ["<icon>"] ["<#color>"]
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
slug="${1:-}"
title="${2:-}"
description="${3:-A new game.}"
icon="${4:-🎮}"
color="${5:-#ff006e}"

if [[ -z "$slug" || -z "$title" ]]; then
  echo "Usage: $0 <slug> \"<Title>\" [\"<description>\"] [\"<icon>\"] [\"<#color>\"]" >&2
  exit 1
fi
if [[ ! "$slug" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
  echo "Slug must be lowercase kebab-case, e.g. snake or connect-four" >&2
  exit 1
fi

dest="$root/games/$slug"
if [[ -e "$dest" ]]; then
  echo "games/$slug already exists" >&2
  exit 1
fi

# Escape values for sed replacement and for a double-quoted JS string.
sed_escape() { printf '%s' "$1" | sed -e 's/[\\&|]/\\&/g'; }
js_escape() { printf '%s' "$1" | sed -e 's/\\/\\\\/g' -e 's/"/\\"/g'; }

cp -r "$root/templates/blank-game" "$dest"
for f in "$dest"/*; do
  sed -i \
    -e "s|__SLUG__|$slug|g" \
    -e "s|__TITLE__|$(sed_escape "$title")|g" \
    -e "s|__DESCRIPTION__|$(sed_escape "$description")|g" \
    -e "s|__ICON__|$(sed_escape "$icon")|g" \
    -e "s|__COLOR__|$(sed_escape "$color")|g" \
    "$f"
done

ENTRY="  {
    slug: \"$slug\",
    title: \"$(js_escape "$title")\",
    icon: \"$(js_escape "$icon")\",
    color: \"$(js_escape "$color")\",
    description: \"$(js_escape "$description")\",
    tags: [\"new\"],
  }," awk '/^  \/\/ @new-games/ { print ENVIRON["ENTRY"] } { print }' "$root/games.js" > "$root/games.js.tmp"
mv "$root/games.js.tmp" "$root/games.js"

echo "Created games/$slug and registered it in games.js"
echo "Next: edit games/$slug/index.html, adjust its tags in games.js, and open index.html"
