"use: strict";

// Targeting the elements
const content = document.querySelector(".content");
const btn = document.querySelector(".btn");

// Function for creating multiple divs
const createDivs = (divs) => {
  for (let i = 0; i < divs * divs; i++) {
    let divElement = document.createElement("div");
    divElement.className = "box";
    content.appendChild(divElement);
  }
  content.style.gridTemplateColumns = `repeat(${divs}, 3rem)`;
  content.style.gridTemplateRows = `repeat(${divs}, 3rem)`;
};

createDivs(10);
