const display = document.getElementById("display");
let currentInput = "0";

function appendToDisplay(value) {
  if (currentInput === "0") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  display.textContent = currentInput;
}

function calculateResult() {
  try {
    currentInput = eval(currentInput);
    display.textContent = currentInput;
  } catch (error) {
    currentInput = "Error";
    display.textContent = "Error";
  }
}

function clearDisplay() {
  currentInput = "0";
  display.textContent = currentInput;
}
