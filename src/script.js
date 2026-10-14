const display = document.getElementById("display");
const expression = document.getElementById("expression");
const buttons = document.querySelectorAll(".btn");
let bracketOpen = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    if (value === "AC") {
      display.value = "";
      expression.innerText = "";
      bracketOpen = false;
    } else if (value === "⌫") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        expression.innerText = display.value + " =";
        let exp = display.value.replace(/×/g, "*").replace(/÷/g, "/");
        display.value = eval(exp);
      } catch {
        display.value = "Error";
      }
    } else if (value === "( )") {
      display.value += bracketOpen ? ")" : "(";
      bracketOpen = !bracketOpen;
    } else {
      display.value += value;
    }
  });
});