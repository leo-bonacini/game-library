# Solitaire

Klondike, the classic patience game. Move every card to the four foundations, building each one up from Ace to King in a single suit.

## Play

Open `index.html` in any modern browser, or open the library's root `index.html` and pick **Solitaire**.

## Rules

- **Tableau:** seven columns. Stack cards down in alternating colors (a red 9 on a black 10). You can move a face-up run as a group. Only a King can go into an empty column. The top card of each column turns face up on its own.
- **Foundations:** one per suit, built up from Ace to King. A card on a foundation can be moved back to the tableau.
- **Stock and waste:** click the stock to turn over 1 or 3 cards. When the stock is empty, click its place to turn the waste back over. There is no limit on passes.
- When the stock and waste are empty and every card is face up, the game finishes itself.

## Options

- **Draw:** 1 card (easier) or 3 cards (classic). Each mode keeps its own fastest win time.
- **Undo** steps back through your moves. **Hint** highlights a useful move, or the stock if you need to draw.

The game in progress is saved in `localStorage`, so you can close the tab and pick it up later.

## Controls

| Action | Mouse / touch | Keyboard |
|---|---|---|
| Move cards | Drag them, or click to send a card to the best spot | |
| Draw | Click the stock | D |
| Undo | ↶ button | U or Ctrl/Cmd+Z |
| Hint | ? button | H |
| New game | ↻ button | N |
