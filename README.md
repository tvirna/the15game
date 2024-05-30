# The 15 Game

This is a simple implementation of the classic 15 Puzzle game using HTML, CSS, and JavaScript. The objective of the game is to arrange the numbered tiles in order from 1 to 15 by sliding them into the empty space.

## Demo

You can play the game [here](https://yuliakinda.github.io/the15game/).

## Table of Contents

- [Installation](#installation)
- [How to Play](#how-to-play)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run the game locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yuliakinda/the15game.git
   ```

2. Navigate to the project directory:

   ```bash
   cd the15game
   ```

3. Open `index.html` in your web browser to play the game.

## How to Play

1. **Objective**: The goal of the game is to arrange the tiles in ascending order from 1 to 15. The grid is a 4x4 matrix, where one space is empty, allowing the tiles to move.

2. **Gameplay**:
   - The game starts with the tiles shuffled randomly.
   - Click on a tile that is adjacent to the empty space to slide it into the empty space.
   - Tiles can only move if they are directly next to the empty space either horizontally or vertically.

3. **Winning the Game**: The game is won when the tiles are arranged in ascending numerical order from the top-left corner to the bottom-right corner, leaving the bottom-right corner empty.

4. **Example**:
   - The initial state might look like this (with `E` representing the empty space):

     ```
     2 8 5 13
     10 7 1 12
     6 11 3 14
     15 4 9 E
     ```

   - After some moves, the tiles should be rearranged back into this order to win:

     ```
     1  2  3  4
     5  6  7  8
     9 10 11 12
     13 14 15  E
     ```

5. **Tips**:
   - Start by arranging the tiles in the top row and leftmost column.
   - Solve the puzzle in smaller sections, progressively moving the empty space to arrange the remaining tiles.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
