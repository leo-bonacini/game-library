# Checkers

Draughts on an 8×8 board against a bot. Move diagonally on the dark squares, jump over the bot's pieces to capture them, and reach the far row to crown a king (♛). You win when the bot has no legal move left.

## Play

Open `index.html` in any modern browser, or open the library's root `index.html` and pick **Checkers**.

## Rules

Pick one on the start screen. Captures are mandatory in both, and a piece that can keep jumping must continue.

| | American | Brazilian |
|---|---|---|
| First move | Dark | Light |
| Men capture backward | No | Yes |
| Kings | Move and capture one square at a time | Fly: move any distance along a diagonal and capture from a distance, landing on any empty square past the captured piece |
| Choice between captures | Any capture | Must take the sequence that captures the most pieces |
| Man reaches the far row mid-capture | Becomes a king and the move ends | Only crowned if the move ends there |

Captured pieces are removed when the move ends and cannot be jumped twice. The game is a draw after 25 moves each with no capture and no man moved.

## Bot

- **Easy:** looks two moves ahead and sometimes plays a random move.
- **Medium:** looks four moves ahead.
- **Hard:** searches as deep as it can in under a second.

The bot always follows through on exchanges that are already in progress before judging a position. Your win, loss and draw record is kept in `localStorage`.

## Controls

- Click or tap one of your pieces (outlined when it can move), then a highlighted square. For a multi-jump, tap each landing square in turn.
- Keyboard: Tab or arrow keys move between dark squares, Enter or Space selects. Esc cancels a selection.
- **↶** takes back your last move and the bot's reply.
