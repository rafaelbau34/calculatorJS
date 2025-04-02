let display = document.getElementById("display");
let shouldClear = false;

function appendToDisplay(input) {
  let lastChar = display.value.slice(-1);
  const operators = ["+", "-", "/", "*", "%"];

  if (shouldClear) {
    display.value = "";
    shouldClear = false;
  }

  if (display.value === "" && operators.includes(input)) return;
  if (operators.includes(input) && operators.includes(lastChar)) return;
  if (
    input == "." &&
    display.value
      .split(/\+|-|\*|\//)
      .pop()
      .includes(".")
  )
    return;
  display.value += input;
}

function clearr() {
  display.value = "";
  shouldClear = false;
}

function calculate() {
  try {
    let result = new Function("return " + display.value)();
    display.value = result;
    shouldClear = true;
  } catch {
    display.value = "ERROR";
    shouldClear = true;
  }
}

function del() {
  if (shouldClear) {
    clearr();
    return;
  }
  display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", function (event) {
  let key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "%", "."].includes(key)) {
    appendToDisplay(key);
  }

  if (key === "Enter") {
    calculate();
  }

  if (key === "Backspace") {
    del();
  }

  if (key === "Escape") {
    clearr();
  }
});
