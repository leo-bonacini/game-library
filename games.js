// Game registry: the library page renders one card per entry.
// scripts/new-game.sh adds new entries above the marker at the end of the list.
window.GAMES = [
  {
    slug: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    icon: "⭕",
    color: "#e85d75",
    description: "Classic 3×3 against a rule based bot: random, heuristic, or unbeatable minimax.",
    tags: ["board", "bot", "quick"],
  },
  {
    slug: "battleship",
    title: "Battleship",
    icon: "⚓",
    color: "#3a86ff",
    description: "Place your fleet and sink the bot's ships before it sinks yours. Three difficulty levels.",
    tags: ["board", "bot", "strategy"],
  },
  {
    slug: "ludo",
    title: "Ludo",
    icon: "🎲",
    color: "#f4a261",
    description: "Pick a color and race your four tokens home against three bots.",
    tags: ["board", "bot", "dice"],
  },
  {
    slug: "minesweeper",
    title: "Minesweeper",
    icon: "💣",
    color: "#8338ec",
    description: "Clear the field without hitting a mine. Four presets, custom boards, six themes, stats.",
    tags: ["puzzle", "solo"],
  },
  {
    slug: "sudoku",
    title: "Sudoku",
    icon: "🔢",
    color: "#2a9d8f",
    description: "Generated puzzles with unique solutions, notes, hints, undo/redo, and a daily challenge.",
    tags: ["puzzle", "solo"],
  },
  // @new-games
];
