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

let firstNum = "";
let secondNum = "";
let operator = "";
let totalNum = "";

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

let displayValue = document.querySelector(".calc-container-screen");

let operandButtons = Array.from(document.querySelectorAll(".operand"));

operandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (displayValue.textContent.length == 9) {
      return;
    } else if (totalNum) {
      displayValue.textContent = "";
      displayValue.textContent += button.textContent;
      totalNum = "";
    } else {
      displayValue.textContent += button.textContent;
    }
  });
});

let operatorButtons = Array.from(document.querySelectorAll(".operator"));

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent == "=") {
      if (totalNum) {
        return;
      } else {
        secondNum = displayValue.textContent;
        totalNum = calcNums(operator, +firstNum, +secondNum);
        displayValue.textContent = totalNum;
      }
    } else {
      if (totalNum) {
        operator = button.textContent;
        firstNum = totalNum;
        secondNum = "";
      } else if (firstNum) {
        secondNum = displayValue.textContent;
        totalNum = calcNums(operator, +firstNum, +secondNum);
        displayValue.textContent = totalNum;
        operator = button.textContent;
        firstNum = totalNum;
        secondNum = "";
      } else {
        operator = button.textContent;
        firstNum = displayValue.textContent;
        displayValue.textContent = "";
      }
    }
  });
});

let clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => {
  displayValue.textContent = "";
  firstNum = "";
  secondNum = "";
  totalNum = "";
});
