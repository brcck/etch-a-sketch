'use strict';

function drawColor(e) {
  colorToggle ? e.currentTarget.style.backgroundColor  = incrementColor() :
  e.currentTarget.style.backgroundColor  = "black";
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

let container = document.querySelector(".container");
let currentHue = 120;
let colorToggle = true;
let size = 16;

createCanvas(size);

let resetButton = document.querySelector(".reset");
resetButton.onclick = promptForSize;

let colorButton = document.querySelector(".color");
colorButton.onclick = function() {
  colorToggle = !colorToggle
  destroyCanvas();
  createCanvas(size);
  this.innerHTML === "black" ? this.innerHTML = "color" : this.innerHTML = "black";
};
