# Ludo

A single-file, browser-based Ludo game. Pick a color and play against three bots, right in your browser with no build step or dependencies.

Play it by opening `index.html` in any modern browser.

## Features

- Classic 4-player Ludo board (red, green, yellow, blue) with smooth token animations
- Play as one color against 3 computer-controlled opponents
- Keyboard controls: `Space` to roll, `←`/`→` to select a token, `Enter` to confirm a move
- Dice roll history, turn log, and live game stats
- Light/dark theme toggle
- Undo support
- Sound effects

## Rules

- Roll a 6 to bring a token out of your yard and onto the board.
- Each roll moves one of your tokens that many spaces around the ring.
- Land exactly on an opponent's token (off a ★ safe cell) to send it back to its yard.
- Two of your own tokens sharing a cell form a block: no opponent can land on it.
- Rolling a 6 earns another roll, but three 6s in a row forfeits the turn.
- Bring all 4 tokens home with an exact roll to finish; the game ends once 3 players finish.

## Running locally

No build tools or server required, just open `index.html` directly in a browser, or serve the directory with any static file server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
