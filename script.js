var secondsLeft = 75;
var timeEl = document.querySelector("#timer");
var startGame = document.querySelector("#startGame");
var quizMain = document.querySelector("#quizMain");
// var questionPage = document.querySelector("#questionPage")
// var arrayOfQuestions = document.querySelector("arrayOfQuestions");

// var arrayOfQuestions = [
//   {
//     questionPrompt: "Commonly used data types DO NOT include:",
//     selections: ["strings", "Booleans", "alerts", "numbers"],
//     answer: "alerts",
//   },

//   {
//     questionPrompt:
//       "The condition in an if/else statement is enclosed within ______.",
//     selections: ["quotes", "curly brackets", "parenthesis", "square brackets"],
//     answer: "parenthesis",
//   },

//   {
//     questionPrompt: "Arrays in Javascript can be used to store _______.",
//     selections: [
//       "numbers & strings",
//       "other arrays",
//       "booleans",
//       "all of the above",
//     ],
//     answer: "all of the above",
//   },

//   {
//     questionPrompt:
//       "String values must be enclosed within ______ when being assigned to variables.",
//     selections: ["commas", "curly brackets", "quotes", "parenthesis"],
//     answer: "quotes",
//   },

//   {
//     questionPrompt:
//       "A very usefool tool during development and debugging for printing content to the debugger is:",
//     selections: ["Javascript", "terminal/bash", "for loops", "console.log"],
//     answer: "console.log",
//   },
// ];
function setTime() {
  startGame.addEventListener("click", function setTime() {
    quizMain.style.display = "none";
    // questionPrompt.style.display = "block";
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  });
}

setTime();

