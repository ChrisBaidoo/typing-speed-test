const testWrapper = document.querySelector(".test-wrapper");
const textArea = document.querySelector("#text-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

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

  timer[0] = Math.floor(leadingZero(timer[3]) / 100 / 60);
  timer[1] = Math.floor(leadingZero(timer[3]) / 100 - timer[0] * 60);
  timer[2] = Math.floor(
    leadingZero(timer[3]) - timer[1] * 100 - timer[0] * 6000
  );
}

// Match the text entered with the provided text on the page:
function spellCheck() {
  let textEntered = textArea.value;
  console.log(textEntered);
}

// Start the timer:
function start() {
  let textEnteredLength = textArea.value.length;
  if (textEnteredLength === 0) {
    setInterval(runTimer, 10);
  }
}

// Reset everything:
function reset() {
  console.log("Reset button has been clicked");
}

// Event listeners for keyboard input and the reset button:
textArea.addEventListener("keypress", start, false);
textArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
