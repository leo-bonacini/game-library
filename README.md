# 🕹️ Game Library

A collection of browser games in one repository. Every game is plain HTML, CSS and JavaScript: no frameworks, no build step, no installation.

Open `index.html` in any modern browser to browse the library and pick a game. The site also works as-is on GitHub Pages.

## Games

| Game | Folder | Description |
|---|---|---|
| ⭕ Tic-Tac-Toe | [`games/tic-tac-toe`](games/tic-tac-toe) | 3×3 against a rule based bot with three difficulty levels |
| ⚓ Battleship | [`games/battleship`](games/battleship) | Place your fleet and sink the bot's ships |
| 🎲 Ludo | [`games/ludo`](games/ludo) | Race four tokens home against three bots |
| 💣 Minesweeper | [`games/minesweeper`](games/minesweeper) | Classic Minesweeper with themes, stats and custom boards |
| 🔢 Sudoku | [`games/sudoku`](games/sudoku) | Generated puzzles with notes, hints and a daily challenge |

Each game folder has its own README with rules and controls.

## Structure

```
index.html              Library page: search, tag filters, one card per game
games.js                Game registry (title, icon, color, description, tags)
games/<slug>/           One self-contained game per folder, entry point index.html
templates/blank-game/   Starting point for new games
scripts/new-game.sh     Scaffolds a new game and registers it
```

## Adding a new game

```bash
scripts/new-game.sh snake "Snake" "Eat, grow, and don't bite your own tail." "🐍" "#06d6a0"
```

This copies `templates/blank-game` into `games/snake/`, fills in the title, description, icon and color, and adds an entry to `games.js`. Then:

1. Build the game in `games/snake/index.html` (split into `css/` and `js/` files if it grows).
2. Set its `tags` in `games.js` so it shows up under the right filters.
3. Open the root `index.html` to see it in the library.

To add a game by hand, create `games/<slug>/index.html` and add an object to the `GAMES` array in `games.js`.

### Conventions

- Keep each game self-contained inside its folder and use relative paths only, so it runs both from the library and on its own.
- No build step and no runtime dependencies.
- Prefix `localStorage` keys with the game's slug: all games share one origin on GitHub Pages.
