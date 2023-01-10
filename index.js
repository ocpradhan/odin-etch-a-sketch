"use: strict";

// Targeting the elements
const container = document.querySelector(".container");
const content = document.querySelector(".content");
const btn = document.querySelector(".btn");

// Function for creating multiple divs according to the squares/side.
const createDivs = (squaresOnSide) => {
  for (let i = 0; i < squaresOnSide * squaresOnSide; i++) {
    let divElement = document.createElement("div");
    divElement.className = "box";
    content.appendChild(divElement);
  }
  content.style.gridTemplateColumns = `repeat(${squaresOnSide}, 2fr)`;
  content.style.gridTemplateRows = `repeat(${squaresOnSide}, 2fr)`;
};

// Function for taking input from the user
const inputUser = () => {
  promptUser = Number(prompt("Enter the number of squares/side"));

  if (promptUser <= 100) {
    createDivs(promptUser);
  } else {
    alert("Please enter a number less than or equal to 0");
  }
};

// Event Listeners
btn.addEventListener("click", (e) => {
  e.preventDefault();

  // Removing the previous blocks and then creating a new divs
  content.innerHTML = "";

  // Taking inout from the user
  inputUser();
});
