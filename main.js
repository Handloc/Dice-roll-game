"use strict";

const roll = document.querySelector("#roll-dice-button");
const hold = document.querySelector("#hold-button");
const dice = document.querySelector("#dice-image");
const playerOneBox = document.querySelector("#player1-box");
const playerTwoBox = document.querySelector("#player2-box");
let globalPointsText = document.querySelectorAll(".global-points");
let currentPointsText = document.querySelectorAll(".current-points");
let globalPoints = [0, 0];
let currentPoints = 0;
let activePlayer = 0;

function switchPlayers() {
  dice.style.display = "none";
  if (activePlayer === 0) {
    activePlayer = 1;
    playerOneBox.classList.toggle("active");
    playerTwoBox.classList.toggle("active");
  } else {
    activePlayer = 0;
    playerOneBox.classList.toggle("active");
    playerTwoBox.classList.toggle("active");
  }
}

function rollDice() {
  dice.style.display = "block";
  const dicePoints = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.src = `images/dice-${dicePoints}.svg`;
  currentPoints += dicePoints;
  if (dicePoints === 1) {
    currentPointsText[activePlayer].textContent = 0;
    currentPoints = 0;
    switchPlayers();
  } else {
    currentPointsText[activePlayer].textContent = currentPoints;
  }
  console.log(`Global: ${globalPoints}
Current: ${currentPoints}`);
}

function holdPoints() {
  if (currentPoints !== 0) {
    globalPoints[activePlayer] += currentPoints;
    globalPointsText[activePlayer].textContent = globalPoints[activePlayer];
    currentPointsText[activePlayer].textContent = 0;
    switchPlayers();
    currentPoints = 0;
  }
}

roll.addEventListener("click", rollDice);
hold.addEventListener("click", holdPoints);
