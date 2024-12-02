const inputEl = document.querySelector("input");
const guessEl = document.querySelector(".guess");
const checkBtnEl = document.querySelector("button");
const remainingChancesTextEl = document.querySelector(".chances");
const remainingChancesEl = document.querySelector(".chance");

let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let totalChances = 10;

checkBtnEl.addEventListener("click", () => {
  let inputValue = Number(inputEl.value); // Convert input to a number

  totalChances--;

  if (totalChances === 0 && inputValue !== randomNumber) {
    // No chances left and the guess is wrong
    inputValue = "";
    inputEl.disabled = true;
    guessEl.textContent = "Oops...! Bad luck😥, You lost the game.";
    guessEl.style.color = "red";
    checkBtnEl.textContent = "Play Again...😉";
    remainingChancesTextEl.textContent = "No chances left.";
  } else if (inputValue === randomNumber) {
    // Player guessed correctly
    guessEl.textContent = "Congratulations 🎉! You guessed the right number.";
    guessEl.style.color = "green";
    inputEl.disabled = true;
    checkBtnEl.textContent = "Play Again...😉";
    remainingChancesTextEl.textContent = `You guessed it in ${
      10 - totalChances
    } attempts!`;
  } else if (inputValue > randomNumber && inputValue <= 100) {
    // Guess is too high
    guessEl.textContent = "Your guess is too high 👍.";
    remainingChancesEl.textContent = totalChances;
    guessEl.style.color = "#1446a0";
  } else if (inputValue < randomNumber && inputValue >= 1) {
    // Guess is too low
    guessEl.textContent = "Your guess is too low 👎.";
    remainingChancesEl.textContent = totalChances;
    guessEl.style.color = "#1446a0";
  } else {
    // Invalid input
    guessEl.textContent =
      "Invalid input! Please enter a number between 1 and 100.";
    guessEl.style.color = "red";
  }
});
