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

const bandHints = {
  "Van Halen": "Tapping technique, red-striped guitar.",
  "Guns N' Roses": "Debut album shook the jungle.",
  "Mötley Crüe": "Wild rides, umlauts, Hollywood sleaze.",
  Metallica: "Black album. Puppets pulled the strings.",
  Megadeth: "Thrash pioneers, Rust in Peace.",
  Poison: "Glam metal with a catchy “Talk Dirty.”",
  KISS: "Makeup, fire, and rock and roll.",
  Scorpions: "Wind of Change blew from Germany.",
  "Def Leppard": "Pyromania and catchy choruses.",
  "AC/DC": "High voltage rock from down under.",
  "Judas Priest": "Leather-clad metal gods.",
  "Twisted Sister": "We’re Not Gonna Take It rebels.",
  Dio: "Rainbow’s frontman with the metal horns.",
  "Quiet Riot": "Cum On Feel the Noize fame.",
  Whitesnake: "Here I Go Again power ballads.",
  Ratt: "Round and round in glam mode.",
  "Skid Row": "Youth gone wild on hard rock.",
  "Ozzy Osbourne": "Prince of Darkness solo era.",
  Tesla: "Love Song ballads and rock riffs.",
  Slayer: "Speed metal kings of aggression.",
  Cinderella: "Long Cold Winter bluesy rock.",
  "Great White": "Once Bitten bluesy hard rock.",
  "Bon Jovi": "Livin’ on a Prayer anthem.",
  Accept: "Balls to the wall metal.",
  Motörhead: "Lemmy’s roaring speed rock.",
  "L.A. Guns": "Hollywood sleaze rock crew.",
  "Sebastian Bach": "Skid Row’s powerful frontman.",
  "David Lee Roth": "Van Halen’s wild frontman.",
  "Sammy Hagar": "Red Rocker’s solo fire.",
  "The Cult": "She Sells Sanctuary vibes.",
  "Billy Idol": "Rebel yell, punk meets rock.",
  "Black Sabbath": "Metal’s dark origins.",
  "Alice Cooper": "Shock rock’s theatrical master.",
  "Iron Maiden": "Eddie’s metal legacy.",
  "Thin Lizzy": "Whiskey in the jar legends.",
  Foghat: "Slow ride blues rock.",
  Boston: "More than a Feeling sound.",
  Loverboy: "Working for the Weekend hit.",
  "REO Speedwagon": "Can’t Fight This Feeling.",
  "Cheap Trick": "I Want You to Want Me.",
};

// Selecting Elements
const guessEl = document.querySelector(".guess-input");
const message = document.querySelector(".message");
const hintEl = document.querySelector(".hint");
const scoreEl = document.querySelector(".score-value");
const btnCheck = document.querySelector(".btn--check");
const btnNew = document.querySelector(".btn--new");

let currentScore = 3;
let bandName = bands[Math.floor(Math.random() * bands.length)];

// Starting Conditions
const init = function () {
  currentScore = 3;
  scoreEl.textContent = currentScore;
  bandName = bands[Math.floor(Math.random() * bands.length)];
  message.textContent = "Start guessing...";
  hintEl.classList.remove("hidden");
  message.classList.remove("winner");
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to top left, #753682 0%, #191589 100%)";
  guessEl.value = "";
  hintEl.textContent = "(HINT: They are from the 80s)";
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
    hintEl.classList.add("hidden");
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
      hintEl.textContent = bandHints[bandName];
    }
  }
});
//
//
//"Play Again" Functionality
btnNew.addEventListener("click", function () {
  init();
});
