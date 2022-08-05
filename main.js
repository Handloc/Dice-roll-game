"use strict";

const roll = document.querySelector("#roll-dice-button");
const hold = document.querySelector("#hold-button");
const newGame = document.querySelector("#new-game-button");
const dice = document.querySelector("#dice-image");
const playerOneBox = document.querySelector("#player1-box");
const playerTwoBox = document.querySelector("#player2-box");
const playerBoxes = [playerOneBox, playerTwoBox];
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

function winner() {
  playerBoxes[activePlayer].classList.toggle("winner");
  roll.style.display = "none";
  hold.style.display = "none";
  dice.style.display = "none";
  newGame.style.backgroundColor = "#8f1630";
  newGame.style.color = "white";
  newGame.classList.toggle("hidden");
  document
    .querySelector(`.winner${String(activePlayer)}`)
    .classList.toggle("hidden");
}

function startNewGame() {
  globalPoints = [0, 0];
  currentPoints = 0;
  playerBoxes[activePlayer].classList.remove("winner");
  document
    .querySelector(`.winner${String(activePlayer)}`)
    .classList.toggle("hidden");
  activePlayer = 0;
  playerOneBox.classList.add("active");
  playerTwoBox.classList.remove("active");
  roll.style.display = "block";
  hold.style.display = "block";
  newGame.classList.toggle("hidden");

  globalPointsText[0].textContent = 0;
  globalPointsText[1].textContent = 0;
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
}

function holdPoints() {
  if (currentPoints !== 0) {
    globalPoints[activePlayer] += currentPoints;
    globalPointsText[activePlayer].textContent = globalPoints[activePlayer];
    currentPointsText[activePlayer].textContent = 0;
    if (globalPoints[activePlayer] >= 100) {
      winner();
    } else {
      switchPlayers();
      currentPoints = 0;
    }
  }
}

roll.addEventListener("click", rollDice);
hold.addEventListener("click", holdPoints);
newGame.addEventListener("click", startNewGame);
