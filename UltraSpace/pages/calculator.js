//Here we define the variables.
var num1Button = document.getElementById("num1");
var num2Button = document.getElementById("num2");
var plusButton = document.getElementById("plus");
var minusButton = document.getElementById("minus");
var timesButton = document.getElementById("times");
var divideButton = document.getElementById("divide");
var solveButton = document.getElementById("solve");
var num1 = 0;
var num2 = 0;
var op = 0;
var solvd="Something went wrong"

var answer = document.getElementById("answer");
//Here we test that num1Button and num2Button are connected to their elements.
console.log(num1Button);
console.log(num2Button);
//Test end. Now come the event listeners...
num1Button.addEventListener('click', setNum1, true);

num2Button.addEventListener('click', setNum2, true);

plusButton.addEventListener('click', setPlus, false);

minusButton.addEventListener('click', setMinus, false);

timesButton.addEventListener('click', setTimes, false);

divideButton.addEventListener('click', setDivide, false);

solveButton.addEventListener('click', setAnswer, false);
//...and now the functions.
function setNum1(
    ) {
      num1 = prompt("Enter a number.");
}	
function setNum2() {
	 num2 = prompt("Enter a number.");
}

function setAnswer() {
  num1 = parseInt(num1, 10);
  num2 = parseInt(num2, 10);
 if (op == "+"){
     solvd= num1 + num2;
 }
 else if (op == "-"){
     solvd= num1 - num2;
 }
 else if (op == "*"){
     solvd= num1 * num2;
 }
 else if (op == "/"){
     solvd= num1 / num2;
 }
answer.textContent = solvd;
}
function setPlus() {
    op= "+";
}
function setMinus() {
    op= "-";
}
function setTimes() {
    op= "*";
}
function setDivide() {
    op= "/";
}

