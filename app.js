"use strict";

// * Variables
let numbersArray = [];
let secretNumber = -1;
let attempts = 1;
let maxNumber = 10;

// * Functions
function assignTextEL(el, txt) {
  document.querySelector(el).textContent = txt;
  return;
}

function generateSecretNumber() {
  let generatedNumber = Math.floor(Math.random() * maxNumber) + 1;

  if (numbersArray.length === maxNumber) {
    alert(`Todos los numeros han sido descubiertos..`);
  } else {
    // Check if generatedNumber is in the array
    if (numbersArray.includes(generatedNumber)) {
      return generateSecretNumber();
    } else {
      numbersArray.push(generatedNumber);
      console.log(`Array list: ${numbersArray}`);
      return generatedNumber;
    }
  }
}

function clearInput(input) {
  document.querySelector(input).value = ``;
}

function verifyAttempt() {
  // * Logic
  let userNumber = +document.querySelector(`.container__input`).value;

  console.log(`attempt #${attempts}`);
  console.log(`Secret number = ${secretNumber}`);

  if (userNumber === secretNumber) {
    // ? User Wins
    assignTextEL(
      `p`,
      `Acertaste el numero en ${attempts} ${attempts === 1 ? `vez` : `veces`}`
    );
    document.querySelector(`#reiniciar`).removeAttribute(`disabled`);
  } else {
    // ! User fails
    if (userNumber > secretNumber) {
      assignTextEL(`p`, `Secret number is less ⬇️`);
    } else {
      assignTextEL(`p`, `Secret number is greater ⬆️`);
    }

    // Increase attempts' counter
    attempts++;

    // Clear input
    clearInput(`.container__input`);
  }

  return;
}

function initialConditions() {
  assignTextEL(`h1`, `Juego del numero secreto`);
  assignTextEL(`p`, `Indica un numero del 1 al ${maxNumber}`);
  secretNumber = generateSecretNumber();
  attempts = 1;
}

function resetGame() {
  //Clear input
  clearInput(`.container__input`);
  //Show msg
  //Generate random number
  //Set attempts to 1
  initialConditions();
  //Deactivate btn
  document.querySelector(`#reiniciar`).setAttribute(`disabled`, `true`);
}

// ? Logic
document
  .querySelector(`.container_btn_intentar`)
  .addEventListener(`click`, verifyAttempt);
document.querySelector(`#reiniciar`).addEventListener(`click`, resetGame);

initialConditions();
