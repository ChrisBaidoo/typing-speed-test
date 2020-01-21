const testWrapper = document.querySelector(".test-wrapper");
const textArea = document.querySelector("#text-area");
let originText = document.querySelector("#origin-text p");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const beginnerButton = document.querySelector("#beginner");
const intermediateButton = document.querySelector("#intermediate");
const advanceButton = document.querySelector("#advanced");

var interval = "";
var timerRunning = false;

var beginner = [
  "A virtual assistant (typically abbreviated to VA) is generally self-employed and provides professional administrative, technical, or creative assistance to clients remotely from a home office."
];

var intermediate = [
  "Z88DK - Z88DK is a Small-C-derived cross compiler for a long list of Z80 based computers. The name derives for that it was originally developed to target the Cambridge Z88. Z88DK is much developed from Small-C and accepts many features of ANSI C with the notable exception of multi-dimensional arrays and function pointers."
];

var advance = [
  'Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available. If you don\'t like a test prompt, you can get a different (random) prompt with the "change test" button - or select a specific paragraph to type from the list below. To find out how fast you type, just start typing in the blank textbox on the right of the test prompt. You will see your progress, including errors on the left side as you type. In order to complete the test and save your score, you need to get 100% accuracy. You can fix errors as you go, or correct them at the end with the help of the spell checker.'
];
// Add leading zero to numbers 9 or below (purely for aesthetics):

function leadingZero(time) {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
}

var timer = [0, 0, 0, 0];

// Run a standard minute/second/hundredths timer:
function runTimer() {
  let currentTime =
    leadingZero(timer[0]) +
    ":" +
    leadingZero(timer[1]) +
    ":" +
    leadingZero(timer[2]);
  theTimer.innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor(timer[3] / 100 / 60);
  timer[1] = Math.floor(timer[3] / 100 - timer[0] * 60);
  timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000);
}

// Match the text entered with the static provided text on the page:
function spellCheck() {
  var textEntered = textArea.value;
  let originTextMatch = originText.innerHTML.substring(0, textEntered.length);
  if (textEntered == originText.innerHTML) {
    clearInterval(interval);
    testWrapper.style.borderColor = "green";
  } else if (textEntered == originTextMatch) {
    testWrapper.style.borderColor = "blue";
  } else {
    testWrapper.style.borderColor = "orange";
  }
  console.log(textEntered);
}

// Start the timer and assign the interval variable
function start() {
  let textEnteredLength = textArea.value.length;
  if (textEnteredLength === 0 && !timerRunning) {
    timerRunning = true;
    interval = setInterval(runTimer, 10);
  }
}

function populateText(e) {
  if (e.target.id === "beginner") {
    originText.innerHTML = beginner;
  } else if (e.target.id === "intermediate") {
    originText.innerHTML = intermediate;
  } else if (e.target.id === "advanced") {
    originText.innerHTML = advance;
  }
}

// Reset everything:
function reset() {
  clearInterval(interval);
  interval = null;
  timer = [0, 0, 0, 0];
  timerRunning = false;

  textArea.value = "";
  theTimer.innerHTML = "00:00:00";
  testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset button:
textArea.addEventListener("keypress", start, false);
textArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
beginnerButton.addEventListener("click", populateText, false);
intermediateButton.addEventListener("click", populateText, false);
advanceButton.addEventListener("click", populateText, false);
