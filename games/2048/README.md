# 2048

Slide the tiles on the board. When two tiles with the same number touch, they merge into one with their sum. Reach the 2048 tile to win, then keep going if you like.

## Play

Open `index.html` in any modern browser, or open the library's root `index.html` and pick **2048**.

## Rules

- Every move slides all tiles as far as they go in that direction. A new 2 (or sometimes a 4) appears after each move.
- A tile merges only once per move, so `2 2 2 2` slid left becomes `4 4`.
- Each merge adds the new tile's value to your score.
- The game ends when the board is full and no neighbouring tiles match.

## Options

- **Board:** 3×3, 4×4 (classic), 5×5 or 6×6. Each size keeps its own best score.
- **Undo:** step back up to 20 moves, even after the game ends.

The game in progress is saved in `localStorage`, so you can close the tab and pick it up later.

## Controls

| Action | Keyboard | Touch |
|---|---|---|
| Slide | Arrow keys or WASD | Swipe on the board |
| Undo | U or Ctrl/Cmd+Z | ↶ button |
| New game | N | ↻ button |
