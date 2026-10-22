# Nonogram

Fill in grid cells so that every row and column matches its number clues. The clues list the lengths of the filled runs in that line, in order, with at least one empty cell between runs.

## Play

Open `index.html` in any modern browser, or open the library's root `index.html` and pick **Nonogram**.

## Puzzles

- Sizes 5×5, 10×10 and 15×15.
- Every puzzle is generated on the spot and kept only if a line-by-line solver can finish it, so it has exactly one solution and never needs guessing.
- A clue turns gray once its line matches it. The puzzle is solved when every line matches.
- **✓** marks wrong cells (filled where it should be empty, or crossed where it should be filled). **↶** undoes the last stroke.

The best time for each size is kept in `localStorage`.

## Controls

| Action | Mouse | Keyboard | Touch |
|---|---|---|---|
| Fill / clear | Click or drag | Space, Enter or F | Tap or drag in Fill mode |
| Cross out | Right-click or Shift+click | X | Tap or drag in Cross mode |
| Move | | Arrow keys | |
| Undo | ↶ button | Ctrl+Z | ↶ button |

A drag only changes cells that started in the same state as the first one, and stays on the row or column it started along.

## Name

"Nonogram" is the generic name for this kind of puzzle. Other names for it are trademarks of their publishers, so they are not used here.
