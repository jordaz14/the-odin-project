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
  if (n2 == 0) {
    return "Nope.";
  }
  return n1 / n2;
}

let firstNum;
let secondNum;
let operator;
let result;

function calcNums(operator, firstNum, secondNum) {
  return operator == "+"
    ? addNums(firstNum, secondNum)
    : operator == "-"
    ? subtractNums(firstNum, secondNum)
    : operator == "*"
    ? multiplyNums(firstNum, secondNum)
    : operator == "/"
    ? divideNums(firstNum, secondNum)
    : "";
}

let calcScreen = document.querySelector(".calc-container-screen");

let operandButtons = Array.from(document.querySelectorAll(".operand"));

operandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (result) {
      result = "";
      firstNum = "";
      secondNum = "";
      operator = "";
      calcScreen.textContent = "";
      calcScreen.textContent += button.textContent;
    } else {
      calcScreen.textContent += button.textContent;
    }
  });
});

let operatorButtons = Array.from(document.querySelectorAll(".operator"));

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent == "=") {
      if (firstNum) {
        secondNum = calcScreen.textContent;
        result = calcNums(operator, Number(firstNum), Number(secondNum));
        calcScreen.textContent = result;
      } else {
        firstNum = calcScreen.textContent;
      }
    } else {
      if (result) {
        firstNum = result;
        result = "";
        secondNum = 0;
        calcScreen.textContent = "";
      } else if (firstNum) {
        secondNum = calcScreen.textContent;
        result = calcNums(operator, Number(firstNum), Number(secondNum));
        calcScreen.textContent = result;
      } else {
        firstNum = calcScreen.textContent;
        operator = button.textContent;
        calcScreen.textContent = "";
      }
    }
  });
});

let clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => {
  calcScreen.textContent = "";
  firstNum = "";
  secondNum = "";
  operator = "";
});
