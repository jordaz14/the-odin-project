console.log("I love Math.");

// Set variables for calculator screen limit, 1st calc number, 2nd calc number,
// operator, & total calc number
const DIGITLIMIT = 99999999;

let firstNum = "";
let secondNum = "";
let operator = "";
let totalNum = "";

// Adds two nums, scientific notation for DIGITLIMIT + 1
function addNums(n1, n2) {
  return n1 + n2 > DIGITLIMIT ? (n1 + n2).toExponential(2) : n1 + n2;
}

// Subtracts two nums, scientific notation for DIGITLIMIT +/- 1
function subtractNums(n1, n2) {
  if (n1 - n2 > DIGITLIMIT) {
    return (n1 - n2).toExponential(2);
  } else if (n1 - n2 < -DIGITLIMIT) {
    return (n1 - n2).toExponential(2);
  } else {
    return n1 - n2;
  }
}

// Multiplies two nums, scientific notation for DIGITLIMIT +1
function multiplyNums(n1, n2) {
  return n1 * n2 > DIGITLIMIT ? (n1 * n2).toExponential(2) : n1 * n2;
}

// Divides two numbs, scientific notation for DIGITLIMIT +1
function divideNums(n1, n2) {
  if (n2 == 0) {
    return "Nope.";
  } else if (n1 / n2 > DIGITLIMIT) {
    return (n1 / n2).toExponential(2);
  } else {
    return n1 / n2;
  }
}

// Evaluates expression based on inputted operator, 1st number, & 2nd number
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

// Query for calculator screen
let displayValue = document.querySelector(".calc-container-screen");

// Query for operand buttons, turn into array
let operandButtons = Array.from(document.querySelectorAll(".operand"));

// Add click event listener to each button
operandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Limit screen length to 9 digits
    if (displayValue.textContent.length == 9) {
      return;
    } // If screen displays totalNum, wipe screen and move to next num
    else if (totalNum) {
      displayValue.textContent = "";
      displayValue.textContent += button.textContent;
      totalNum = "";
    } // Else, add digits to screen based on user input
    else {
      displayValue.textContent += button.textContent;
    }
  });
});

// Query for operator buttons
let operatorButtons = Array.from(document.querySelectorAll(".operator"));

// Add click event listener to each button
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Equal button case
    if (button.textContent == "=") {
      if (totalNum) {
        return;
      } // Set 2nd num to screen value, run calcNums function, and return result to screen
      else {
        secondNum = displayValue.textContent;
        totalNum = calcNums(operator, +firstNum, +secondNum);
        displayValue.textContent = totalNum;
      }
    } // All other operator buttons case
    else {
      // If screen reflects totalNum, reset operator and set first number to TotalNum (i.e. begin sequence again)
      if (totalNum) {
        operator = button.textContent;
        firstNum = totalNum;
        secondNum = "";
      } // If user doesn't select '=' and continues use of operators, run sequence as if '=' was selected
      else if (firstNum) {
        secondNum = displayValue.textContent;
        totalNum = calcNums(operator, +firstNum, +secondNum);
        displayValue.textContent = totalNum;
        operator = button.textContent;
        firstNum = totalNum;
        secondNum = "";
      } // Else, assign first num to screen value, then clear screen
      else {
        operator = button.textContent;
        firstNum = displayValue.textContent;
        displayValue.textContent = "";
      }
    }
  });
});

// Query for AC button
let clearButton = document.querySelector("#clearButton");

// On click, AC button sets all varianbles to false
clearButton.addEventListener("click", () => {
  displayValue.textContent = "";
  firstNum = "";
  secondNum = "";
  totalNum = "";
});

// Query for +/- button
let signButton = document.querySelector("#signButton");

// On clck, sign button adds +/- depending on current sign of on-screen value
signButton.addEventListener("click", () => {
  if (totalNum) {
    if (+displayValue.textContent > 0) {
      displayValue.textContent = `-${displayValue.textContent}`;
      totalNum = displayValue.textContent;
    } else {
      displayValue.textContent = -1 * Number(displayValue.textContent);
      totalNum = displayValue.textContent;
    }
  } else {
    +displayValue.textContent > 0
      ? (displayValue.textContent = `-${displayValue.textContent}`)
      : (displayValue.textContent = -1 * Number(displayValue.textContent));
  }
});
