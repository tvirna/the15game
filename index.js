// Here we store the coordinates of the empty cell
let emptyX = 3; // Initially the empty cell is at the bottom right
let emptyY = 3;

// This function moves a cell to the empty space
function moveToEmptyPlace(cell) {
  // Swap the coordinates of the cell and the empty space
  const x = emptyX;
  const y = emptyY;

  emptyX = cell.x;
  emptyY = cell.y;

  cell.x = x;
  cell.y = y;

  // Set the new position using CSS
  cell.style.left = `${x * 25}%`;
  cell.style.top = `${y * 25}%`;
}

// Find and shuffle the cells
const cells = [...document.querySelectorAll(".cell")];
cells.sort(() => Math.random() - 0.5);

// Arrange the cells from the top left corner
let x = 0; // left
let y = 0; // top

// Iterate over all cells
for (let cell of cells) {
  // Set the initial coordinates
  cell.x = x;
  cell.y = y;

  // Position the cell correctly
  cell.style.left = `${x * 25}%`;
  cell.style.top = `${y * 25}%`;

  console.log(`Cell ${cell.textContent} positioned at (${x}, ${y})`);

  // Update x and y for the next cell
  x += 1;
  if (x === 4) {
    x = 0;
    y += 1;
  }

  // Now wait for a click
  cell.onclick = function () {
    // Calculate the distance to the empty space
    let dX = cell.x - emptyX; // may be < 0 if to the left
    let dY = cell.y - emptyY; // may be < 0 if above

    // Get the distance modulus |dX| + |dY|
    let distance = Math.abs(dX) + Math.abs(dY);

    if (distance === 1) {
      moveToEmptyPlace(cell); // Move to the empty space
    }
  };
}
