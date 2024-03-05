console.log("Hello World");

function addNums(n1, n2) {
  return n1 + n2;
}

function subtractNums(n1, n2) {
  return n1 - n2;
}

function multiplyNums(n1, n2) {
  return n1 * n2;
}

function divideNums(n1, n2) {
  return n1 / n2;
}

let firstNum = 0;
let secondNum = 0;
let operator;

function calcNums(operator, firstNum, secondNum) {
  return operator == "+"
    ? addNums(firstNum, secondNum)
    : operator == "-"
    ? subtractNums(firstNum, secondNum)
    : operator == "*"
    ? multiplyNums(firstNum, secondNum)
    : operator == "/"
    ? divideNums(firstNum, secondNum)
    : "ERR";
}

let calcScreen = document.querySelector(".calc-container-screen");

let operandButtons = Array.from(document.querySelectorAll(".operand"));

operandButtons.forEach((button) => {
  button.addEventListener(
    "click",
    () => (calcScreen.textContent += button.textContent)
  );
});

let operatorButtons = Array.from(document.querySelectorAll(".operator"));

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent == "=") {
      secondNum = calcScreen.textContent;
      calcScreen.textContent = calcNums(
        operator,
        Number(firstNum),
        Number(secondNum)
      );
    } else {
      firstNum = calcScreen.textContent;
      operator = button.textContent;
      calcScreen.textContent = "";
    }
  });
});
