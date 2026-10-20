# Tetris

Stack the falling pieces and complete horizontal rows to clear them. The game ends when a new piece has no room to appear.

## Play

Open `index.html` in any modern browser, or open the library's root `index.html` and pick **Tetris**.

## Rules

- Pieces come from a shuffled bag of all seven shapes, so you never wait too long for any one of them.
- **Hold** stores the current piece for later (once per piece). The ghost shows where the piece will land.
- Rotation follows the standard SRS system, including wall kicks.
- A piece locks half a second after it touches down. Moving or rotating resets that delay, up to 15 times.
- The level goes up every 10 lines, and pieces fall faster at each level. You can start at level 1, 5 or 10.

## Scoring

| Action | Points |
|---|---|
| Single / Double / Triple / Tetris | 100 / 300 / 500 / 800 × level |
| Soft drop | 1 per row |
| Hard drop | 2 per row |

The best score is kept in `localStorage`.

## Controls

| Action | Keyboard | Touch |
|---|---|---|
| Move | ← → or A D | Drag sideways on the board, or ◀ ▶ |
| Soft drop | ↓ or S | ▼ (hold) |
| Hard drop | Space | Flick down on the board, or ⤓ |
| Rotate right | ↑, X or W | Tap the board, or ⟳ |
| Rotate left | Z or Ctrl | ⟲ |
| Hold | C or Shift | Hold |
| Pause / resume | P | Pause button |
| Pause | Esc | |
