'esversion: 6';
'use strict';

function changeColor(e) {
  e.currentTarget.classList.add("hover");
}

function resetColor(e) {
  e.currentTarget.classList.remove("hover");
}

let container = document.querySelector('div');

for (let i = 0; i <= 256; i++) {
  let div = document.createElement('div');
  div.id = i;
  div.addEventListener("mouseover", changeColor);
  // div.addEventListener("mouseout", resetColor);
  container.appendChild(div);
}
