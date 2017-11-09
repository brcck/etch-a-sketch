"esversion: 6";
"use strict";

function drawColor(e) {
  e.currentTarget.style.backgroundColor = incrementColor();
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
    container.removeChild(container.firstChild);
  }
}

function promptForSize() {
  let size = prompt("Squares per side:", "16");
  destroyCanvas();
  createCanvas(size);
}

function incrementColor() {
  currentHue += 20;
  return "hsl(" + currentHue + ", 100%, 70%)"
}

let makeVisible = (e) => {e.currentTarget.style.opacity = 1};
let makeInvisible = (e) => {e.currentTarget.style.opacity = 0.3};

let container = document.querySelector("div");
let currentHue = 120;

createCanvas(16);

let resetButton = document.querySelector(".reset");
resetButton.addEventListener("mouseover", makeVisible);
resetButton.addEventListener("mouseout", makeInvisible);
resetButton.onclick = promptForSize;
