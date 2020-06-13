var secondsLeft = 60;
var timeEl = document.querySelector("#timer");
var startGame = document.querySelector("#startGame");
var quizMain = document.querySelector("#quizMain");
var firstQuestion = document.querySelector("#firstQuestion");
var startPage = document.querySelector("#startPage");
var correctAnswer = document.querySelector("#correctAnswer");
var incorrectAnswer = document.querySelector("#incorrectAnswer");
var q1_strings = document.querySelector("#q1-strings");
var q1_booleans = document.querySelector("#q1-booleans");
var q1_alerts = document.querySelector("#q1-alerts");
var q1_numbers = document.querySelector("#q1-numbers");
var q2_quotes = document.querySelector("#q2-quotes");
var q2_curlyBrackets = document.querySelector("#q2-curlyBrackets");
var q2_parenthesis = document.querySelector("#q2-parenthesis");
var q2_squareBrackets = document.querySelector("#q2-squareBrackets");
var q3_numbersAndStrings = document.querySelector("#q3-numbersAndStrings");
var q3_otherArrays = document.querySelector("#q3-otherArrays");
var q3_booleans = document.querySelector("#q3-booleans");
var q3_allOfTheAbove = document.querySelector("#q3-allOfTheAbove");
var q4_commas = document.querySelector("#q4-commas");
var q4_curlyBrackets = document.querySelector("#q4-curlyBrackets");
var q4_quotes = document.querySelector("#q4-quotes");
var q4_parenthesis = document.querySelector("#q4-parenthesis");
var q5_javascript = document.querySelector("#q5-javascript");
var q5_terminalOrBash = document.querySelector("#q5-terminalOrbash");
var q5_forLoops = document.querySelector("#q5-forLoops");
var q5_consoleLog = document.querySelector("#q5-consoleLog");

startPage.style.display = "block";
firstQuestion.style.display = "none";
incorrectAnswer.style.display = "none";
correctAnswer.style.display = "none";
secondQuestion.style.display = "none";
thirdQuestion.style.display = "none";
fourthQuestion.style.display = "none";
fifthQuestion.style.display = "none";

startGame.addEventListener("click", function () {
  startPage.style.display = "none";
  firstQuestion.style.display = "block";
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
});

// first question page
q1_strings.addEventListener("click", function () {
  showIncorrectAnswer();
});
q1_booleans.addEventListener("click", function () {
  showIncorrectAnswer();
});
q1_alerts.addEventListener("click", function () {
  showCorrectAnswer();
});
q1_numbers.addEventListener("click", function () {
  showIncorrectAnswer();
});

// second question page
q2_quotes.addEventListener("click", function () {
  showIncorrectAnswer();
});
q2_curlyBrackets.addEventListener("click", function () {
  showIncorrectAnswer();
});
q2_parenthesis.addEventListener("click", function () {
  showCorrectAnswer();
});
q2_squareBrackets.addEventListener("click", function () {
  showIncorrectAnswer();
});

// third question page
q3_numbersAndStrings.addEventListener("click", function () {
  showIncorrectAnswer();
});
q3_otherArrays.addEventListener("click", function () {
  showIncorrectAnswer();
});
q3_booleans.addEventListener("click", function () {
  showIncorrectAnswer();
});
q3_allOfTheAbove.addEventListener("click", function () {
  showCorrectAnswer();
});

// fourth question page
q4_commas.addEventListener("click", function () {
  showIncorrectAnswer();
});
q4_curlyBrackets.addEventListener("click", function () {
  showIncorrectAnswer();
});
q4_quotes.addEventListener("click", function () {
  showCorrectAnswer();
});
q4_parenthesis.addEventListener("click", function () {
  showIncorrectAnswer();
});

// fifth question page
q5_javascript.addEventListener("click", function () {
  showIncorrectAnswer();
});
q5_terminalOrBash.addEventListener("click", function () {
  showIncorrectAnswer();
});
q5_forLoops.addEventListener("click", function () {
  showIncorrectAnswer();
});
q5_consoleLog.addEventListener("click", function () {
  showCorrectAnswer();
});

// displays correct or incorrect at the bottom
function showCorrectAnswer() {
  correctAnswer.style.display = "block";
}
function showIncorrectAnswer() {
  incorrectAnswer.style.display = "block";
  secondsLeft -= 10;
}
