const container = document.querySelector(".container");

for (i = 0; i < 16; i++) {
  const containerRow = document.createElement("div");
  containerRow.classList.add("container-row");
  for (j = 0; j < 16; j++) {
    const containerSquare = document.createElement("div");
    containerSquare.classList.add("container-square");
    containerRow.appendChild(containerSquare);
  }
  container.appendChild(containerRow);
}
