# Code Breaker

Work out the hidden color code. After each guess you get two clues:

- **●** one for every peg with the right color in the right position
- **○** one for every peg with the right color in the wrong position

The clues are not tied to particular positions.

## Play

Open `index.html` in any modern browser, or open the library's root `index.html` and pick **Code Breaker**.

## Difficulty

| Level | Pegs | Colors | Repeated colors | Guesses |
|---|---|---|---|---|
| Easy | 4 | 6 | No | 10 |
| Normal | 4 | 6 | Yes | 10 |
| Hard | 5 | 8 | Yes | 12 |

Each color also shows a number, so the game can be played without telling colors apart. The number of solved codes and the fewest guesses for each level are kept in `localStorage`.

## Controls

| Action | Keyboard | Mouse / touch |
|---|---|---|
| Place a color | 1–8 | Tap a color below the board |
| Pick a position | ← → | Tap a peg in the current row |
| Erase | Backspace | Clear button |
| Check guess | Enter | Check button |

## Name

This is the classic pen-and-paper code-breaking game (also known as Bulls and Cows). The names of commercial board game versions are trademarks, so they are not used here.
