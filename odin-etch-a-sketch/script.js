const container = document.querySelector(".container");
const resetButton = document.querySelector("#resetButton");

function createGrid(dimension) {
  for (i = 0; i < dimension; i++) {
    const containerRow = document.createElement("div");
    containerRow.classList.add("container-row");
    for (j = 0; j < dimension; j++) {
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
