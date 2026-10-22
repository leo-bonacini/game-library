# Game Library

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
| 🐍 Snake | [`games/snake`](games/snake) | Arcade snake with three speeds and solid or wrap-around edges |
| 🔷 2048 | [`games/2048`](games/2048) | Slide and merge tiles on 3×3 to 6×6 boards, with undo and saved progress |
| 🧱 Tetris | [`games/tetris`](games/tetris) | Falling blocks with hold, ghost piece, SRS rotation and three starting levels |
| 🃏 Solitaire | [`games/solitaire`](games/solitaire) | Klondike with draw 1 or 3, drag and drop, undo, hints and auto-finish |
| 💥 Bricks | [`games/bricks`](games/bricks) | Paddle and ball brick breaker with five layouts and three speeds |

Each game folder has its own README with rules and controls.

## Structure

```
index.html              Library page: search, tag filters, one card per game
games.js                Game registry (title, icon, color, description, tags)
shared/theme.css        Shared look: color tokens (--gl-*), light/dark theme, top bar
shared/layout.js        Shared layout: top bar with back link, game title and theme toggle
games/<slug>/           One self-contained game per folder, entry point index.html
templates/blank-game/   Starting point for new games
scripts/new-game.sh     Scaffolds a new game and registers it
```

## Shared layout and theme

Every page (the library and each game) loads the same two files in `<head>`:

```html
<link rel="stylesheet" href="../../shared/theme.css">
<script src="../../games.js"></script>
<script src="../../shared/layout.js" data-game="<slug>"></script>
```

- `layout.js` adds the top bar: **← Library** on the left, the game's icon and title (taken from `games.js`) in the center, and the light/dark toggle on the right.
- The theme is saved once (`localStorage` key `gl-theme`) and applies to the whole library. Without a saved choice it follows the system setting.
- Start and selection screens that cover the bar (overlays, menus) include `<a class="gl-back-link" href="../../index.html">← Back to library</a>`.
- Buttons marked with `data-gl-action` are moved into the bar next to the theme toggle, e.g. `<button id="sound-btn" data-gl-action>🔊</button>`.
- Games use the `--gl-*` tokens (`--gl-bg`, `--gl-surface`, `--gl-surface-2`, `--gl-fg`, `--gl-muted`, `--gl-border`, `--gl-accent`, `--gl-success`, `--gl-danger`, `--gl-radius`, `--gl-shadow`, ...) instead of hardcoded colors, and switch game-specific colors with `:root[data-theme="dark"]`.

## Adding a new game

```bash
scripts/new-game.sh word-search "Word Search" "Find every hidden word in the grid." "🔤" "#ef476f"
```

This copies `templates/blank-game` into `games/word-search/`, fills in the title, description, icon and color, and adds an entry to `games.js`. Then:

1. Build the game in `games/word-search/index.html` (split into `css/` and `js/` files if it grows). The template already includes the shared layout.
2. Set its `tags` in `games.js` so it shows up under the right filters.
3. Open the root `index.html` to see it in the library.

To add a game by hand, create `games/<slug>/index.html` with the shared `<head>` lines above, and add an object to the `GAMES` array in `games.js`.

### Conventions

- Keep each game self-contained inside its folder and use relative paths only, so it runs both from the library and on its own.
- No build step and no runtime dependencies.
- Use the shared layout and `--gl-*` tokens; don't add a separate title header or theme switcher.
- Prefix `localStorage` keys with the game's slug: all games share one origin on GitHub Pages.
