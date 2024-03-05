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

let firstNum;
let secondNum;
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
