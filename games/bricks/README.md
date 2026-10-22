# Bricks

Keep the ball in play with your paddle and knock out every brick. Clear a layout to move to the next one.

## Play

Open `index.html` in any modern browser, or open the library's root `index.html` and pick **Bricks**.

## Rules

- You have 3 lives. Losing the ball past the paddle costs one.
- Where the ball hits the paddle sets its angle: the edges send it off sharply, the center sends it straight up.
- Gray bricks take two hits.
- There are five layouts. After the last one they start again, and the ball gets a little faster each level.
- **Speed** on the start screen sets the starting ball speed. Each speed keeps its own best score in `localStorage`.

## Scoring

| Action | Points |
|---|---|
| Brick broken | 10 × level |
| Gray brick cracked | 5 |
| Layout cleared | 100 |

## Controls

| Action | Keyboard | Mouse / touch |
|---|---|---|
| Move | ← → or A D | Move the pointer or drag on the field |
| Launch | Space | Click or tap the field |
| Pause / resume | P | Pause button |
| Pause | Esc | |

## Name

The original 1976 arcade game's name is a trademark, so this version uses a plain descriptive name. Layouts, colors and sounds are original to this repository.
