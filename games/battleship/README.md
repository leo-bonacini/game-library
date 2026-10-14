# ⚓ Battleship

A complete Battleship game in a single HTML file: pure HTML, CSS and JavaScript, with no external libraries. Place your fleet, then take turns against a bot with three difficulty levels.

## Play

Open `index.html` in any modern browser. Nothing to install, nothing to build. The game also works out of the box on GitHub Pages.

## How to play

1. **Place your fleet.** Hover the board to preview a position, click to place. Rotate with the button or the `R` key. You can also use **Auto Place** to position everything at random, or **Clear Board** to start over.
2. **Start the battle.** Click cells on the enemy board to fire. After each of your shots, the bot fires back.
3. **Sink the entire enemy fleet** before the bot sinks yours.

The fleet panels beside the boards track which ships are still afloat on each side. Hit progress on a ship is hidden until it fully sinks, so a hit never reveals which ship it belongs to.

## The fleet

Each ship class has its own top-down drawing:

| Ship | Size | Look |
|---|---|---|
| Aircraft Carrier | 5 | Flat flight deck, dashed runway, side island |
| Battleship | 4 | Two twin-barrel turrets, superstructure and funnel |
| Cruiser | 3 (×2) | Slender hull, forward turret and bridge |
| Submarine | 2 | Capsule hull, sail and periscope |

Ships never touch each other (not even diagonally).

## Bot difficulties

- 🟢 **Easy**: fires at random.
- 🟡 **Medium**: after a hit, hunts the neighboring cells.
- 🔴 **Hard**: full hunt and target strategy. It detects the ship's direction after a second hit, extends along the line, reverses from the first hit when it runs off the end, and never abandons a wounded ship. It never repeats a shot.

The difficulty is chosen before the battle and locked while a game is in progress.

## Features

- Manual placement with live green/red preview, rotation, auto placement
- Whole-ship SVG artwork overlaid on the board, with a wreck reveal when a ship sinks
- Turn-by-turn status bar showing your result and the bot's together
- Keyboard play: `Tab` to a cell, `Enter`/`Space` to fire or place, `R` to rotate
- Screen reader support: live status announcements and per-cell labels (`B7: hit`)
- Touch support: on touch screens the first tap previews a placement, the second confirms
- Responsive board that fits small screens

## Project layout

Everything lives in `index.html`: styles in `<style>`, game logic in `<script>`.
