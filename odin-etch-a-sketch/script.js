// Query for DOM elements
const container = document.querySelector(".container");
const resetButton = document.querySelector("#resetButton");

// Click reset button to prompt for user input on grid size
resetButton.addEventListener("click", () => {
  let gridSize = prompt("Please enter grid size (e.g. X by X grids): ");
  // Deny request if grid size too small or large
  if (gridSize < 16 || gridSize > 100) {
    alert("Invalid grid size. Please try again");
  } else {
    container.innerHTML = "";
    createGrid(gridSize);
  }
});

// Creates an X by X grid per gridSize parameter
function createGrid(gridSize) {
  // Creates X rows
  for (i = 0; i < gridSize; i++) {
    const containerRow = document.createElement("div");
    containerRow.classList.add("container-row");
    // Creates X squares in row
    for (j = 0; j < gridSize; j++) {
      const containerSquare = document.createElement("div");
      containerSquare.classList.add("container-square");
      containerSquare.addEventListener("mouseover", () => {
        containerSquare.classList.add("container-square-hover");
      });
      containerRow.appendChild(containerSquare);
    }
    container.appendChild(containerRow);
  }
}

// Run initial 16x16 grid size
createGrid(16);
