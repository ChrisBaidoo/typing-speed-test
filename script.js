const testWrapper = document.querySelector(".test-wrapper");
const textArea = document.querySelector("#text-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

// Add leading zero to numbers 9 or below (purely for aesthetics):

// Run a standard minute/second/hundredths timer:

// Match the text entered with the provided text on the page:
function spellCheck() {
  let textEntered = textArea.value;
  console.log(textEntered);
}

// Start the timer:
function start() {
  let textEnteredLength = textArea.value.length;
  console.log(textEnteredLength);
}

// Reset everything:

// Event listeners for keyboard input and the reset button:
textArea.addEventListener("keypress", start, false);
textArea.addEventListener("keyup", spellCheck, false);
