"use: strict";

// Targeting the elements
const container = document.querySelector(".container");

const createDivs = (divs) => {
  for (let i = 0; i < divs; i++) {
    let divElement = document.createElement("div");
    divElement.className = "box";
    container.appendChild(divElement);
  }
};

createDivs(256);
