let res = document.getElementById("res");

let firstNumber = "";
let secondNumber = "";
let isFirstNumber = true;
let isSecondNumber = false;
let operand = "";

function handleDigit(e) {
  if (isFirstNumber) {
    firstNumber += e.target.innerText;
    res.innerText = firstNumber;
  } else {
    secondNumber += e.target.innerText;
    res.innerText = secondNumber;
  }
}

function clearAll() {
  res.innerText = "";
  firstNumber = "";
  secondNumber = "";
  isFirstNumber = true;
  isSecondNumber = false;
}

function getOparand(e) {
  isFirstNumber = false;
  isSecondNumber = true;
  operand = e.target.innerText;
}

function calculate() {
  let first = parseInt(firstNumber);
  let second = parseInt(secondNumber);
  let result = 0;
  if (operand == "+") {
    result = first + second;
  } else if (operand == "-") {
    result = first - second;
  } else if (operand == "*") {
    result = first * second;
  } else {
    result = first / second;
  }

  res.innerText = result.toString(2);
}
