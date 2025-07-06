"use strict";

const bands = [
  "Van Halen",
  "Guns N' Roses",
  "Mötley Crüe",
  "Metallica",
  "Megadeth",
  "Poison",
  "KISS",
  "Scorpions",
  "Def Leppard",
  "AC/DC",
  "Judas Priest",
  "Twisted Sister",
  "Dio",
  "Quiet Riot",
  "Whitesnake",
  "Ratt",
  "Skid Row",
  "Ozzy Osbourne",
  "Tesla",
  "Slayer",
  "Cinderella",
  "Great White",
  "Bon Jovi",
  "Accept",
  "Motörhead",
  "L.A. Guns",
  "Sebastian Bach",
  "David Lee Roth",
  "Sammy Hagar",
  "The Cult",
  "Billy Idol",
  "Black Sabbath",
  "Alice Cooper",
  "Iron Maiden",
  "Thin Lizzy",
  "Foghat",
  "Boston",
  "Loverboy",
  "REO Speedwagon",
  "Cheap Trick",
];

// Selecting Elements
const guessEl = document.querySelector(".guess-input");
const message = document.querySelector(".message");
const hint = document.querySelector(".hint");
const scoreEl = document.querySelector(".score-value");
const btnCheck = document.querySelector(".btn--check");
const btnNew = document.querySelector(".btn--new");

let currentScore = 10;
let bandName = bands[Math.floor(Math.random() * bands.length)];

// Starting Conditions
const init = function () {
  currentScore = 10;
  scoreEl.textContent = currentScore;
  bandName = bands[Math.floor(Math.random() * bands.length)];
  message.textContent = "Start guessing...";
  hint.classList.remove("hidden");
  message.classList.remove("winner");
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to top left, #753682 0%, #191589 100%)";
  guessEl.value = "";
};
init();

//"Check Your Answer" Functionality
btnCheck.addEventListener("click", function () {
  const guess = guessEl.value;

  console.log(bandName);

  // When there is no input
  if (!guess) {
    message.textContent = "❗ You forgot to enter a band!";
  }
  // When player wins
  else if (guess.toLowerCase() === bandName.toLowerCase()) {
    message.textContent = "Nailed It! Rock On! 🤘";
    hint.classList.add("hidden");
    document.body.style.backgroundImage =
      "linear-gradient(to top left,rgb(12, 105, 63) 0%,rgb(91, 218, 144)  100%)";
    message.classList.add("winner");
    return;
  } else {
    currentScore--;
    scoreEl.textContent = currentScore;
    // If player loses
    if (currentScore <= 0) {
      message.textContent = "👎 You Lost! Play Again 👇";
      document.body.style.backgroundImage =
        "linear-gradient(to top left,rgb(105, 12, 12) 0%,rgb(227, 76, 76)  100%)";
      return;
    }
    // If guess is wrong
    else if (guess.toLowerCase() !== bandName.toLowerCase()) {
      message.textContent = "❌ Wrong! Try Again";
    }
  }
});
//
//
//"Play Again" Functionality
btnNew.addEventListener("click", function () {
  init();
});
