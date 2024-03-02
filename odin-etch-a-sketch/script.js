const container = document.querySelector(".container");

for (i = 0; i < 16; i++) {
  const containerSquare = document.createElement("div");
  containerSquare.classList.add("container-square");

  container.appendChild(containerSquare);
}
