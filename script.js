"esversion: 6";
"use strict";

function drawColor(e) {
  e.currentTarget.style.backgroundColor = "black";
}

function createCanvas(side) {
  if (container.hasChildNodes()) destroyCanvas();
  let size = side**2;
  for (let i = 0; i <= size - 1; i++) {
    let div = document.createElement("div");
    div.id = i;
    div.style.width = 100 / side + "%";
    div.addEventListener("mouseover", drawColor);
    container.appendChild(div);
  }
}

function destroyCanvas() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild)
  }
}

function promptForSize() {
  let size = prompt("Squares per side:");
  destroyCanvas();
  createCanvas(size);
}

let makeVisible = (e) => {e.currentTarget.style.opacity = 1}
let makeInvisible = (e) => {e.currentTarget.style.opacity = 0.25}

let container = document.querySelector("div");

createCanvas(16);

let resetButton = document.querySelector(".reset");
resetButton.addEventListener("mouseover", makeVisible);
resetButton.addEventListener("mouseout", makeInvisible);
resetButton.onclick = promptForSize;
