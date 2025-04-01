let display = document.getElementById("display");

function appendToDisplay(input) {
  let lastChar = display.value.slice(-1);
  const operators = ["+", "-", "/", "*", "%"];
  if (display.value === "" && operators.includes(input)) return;
  if (operators.includes(input) && operators.includes(lastChar)) return;
  if (input == "." && display.value.match(/[\d]*\.[\d]*$/)) return;
  display.value += input;
}

function clearr() {
  display.value = "";
}

function calculate() {
  try {
    let result = new Function("return " + display.value)();
    display.value = result;
  } catch {
    display.value = "ERROR";
  }
}

function del() {
  display.value = display.value.slice(0, -1);
}
