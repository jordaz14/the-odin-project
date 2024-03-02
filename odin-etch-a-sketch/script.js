const container = document.querySelector(".container");
const resetButton = document.querySelector("#resetButton");

resetButton.addEventListener("click", () => {
  let gridSize = prompt("Please enter grid size (e.g. X by X grids): ");
  if (gridSize < 16 || gridSize > 100) {
    alert("Invalid grid size. Please try again");
  } else {
    container.innerHTML = "";
    createGrid(gridSize);
  }
});

function createGrid(gridSize) {
  for (i = 0; i < gridSize; i++) {
    const containerRow = document.createElement("div");
    containerRow.classList.add("container-row");
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

createGrid(16);
