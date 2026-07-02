# Tic Tac Toe vs AI

A small browser game of Tic Tac Toe against the computer. Everything lives in a single `index.html` file: no build step, no dependencies. Just open the file in a browser and play.

## How to play

1. Open `index.html` in any modern browser.
2. On the setup screen, choose a difficulty and who makes the first move (you, the AI, or random).
3. Press **Start Game** and place your X marks by clicking (or by keyboard: Tab to a cell, then Enter or Space).
4. When the round ends, press **New Game** to return to the setup screen.

## Difficulty levels

The difficulty controls the strategy the AI uses to pick each move:

* **Easy**: the AI picks a random empty cell every turn. It has no strategy at all, so it is very beatable and good for casual play or for kids.
* **Medium**: the AI follows three simple rules in order. First, if it can complete a line and win this turn, it does. Second, if you are about to complete a line, it blocks you. Otherwise, it plays a random empty cell. It punishes obvious mistakes but has no long term plan, so forks (creating two threats at once) will beat it.
* **Hard**: the AI uses the minimax algorithm to explore every possible continuation of the game and always plays a perfect move. It prefers faster wins and slower losses. It can never be beaten: the best result you can achieve against it is a draw.

## Features

* Three AI difficulty levels (see above)
* Setup screen to pick difficulty and first player before each round
* Winning line highlight and end of round summary
* Keyboard accessible board and screen reader friendly status announcements
