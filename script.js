"use strict";

let secNum = Math.trunc(Math.random() * 20) + 1;

let score = Number(document.querySelector(".score").textContent);
let highScore = 0;

const checkGuess = function () {
  const userGuess = document.querySelector(".guess").value;
  console.log(userGuess, secNum);

  if (score > 0) {
    if (userGuess > secNum) {
      document.querySelector(".message").textContent = "📈 Too high ";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (secNum > userGuess) {
      document.querySelector(".message").textContent = "📉 Too low ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🎉 Correct guess ";

      document.querySelector(".number").textContent = secNum;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    }
  } else {
    document.querySelector(".message").textContent = "😭 You lost the game ";
  }
};

document.querySelector(".check").addEventListener("click", checkGuess);

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing... ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  secNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && document.querySelector(".guess").value) {
    checkGuess();
  }
});
