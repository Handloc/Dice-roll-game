"use strict";

const hold = document.querySelector("#roll-dice-button");
const dice = document.querySelector("#dice-image");
let currentPointsText = document.querySelectorAll(".current-points");
let globalPoints = 0;
let currentPoints = 0;

function rollDice() {
  const dicePoints = Math.trunc(Math.random() * 6) + 1;
  console.log(dicePoints);
  dice.classList.remove("hidden");
  dice.src = `images/dice-${dicePoints}.svg`;
  currentPoints += dicePoints;
  if (dicePoints === 1) {
    currentPointsText.textContent = 0;
    currentPoints = 0;
  } else {
    currentPointsText[0].textContent = currentPoints;
  }
}

hold.addEventListener("click", rollDice);
