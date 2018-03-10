//Here we define the variables.
var num1Button = document.getElementById("num1");
var num2Button = document.getElementById("num2");
var plusButton = document.getElementById("plus");
var minusButton = document.getElementById("minus");
var timesButton = document.getElementById("times");
var divideButton = document.getElementById("divide");
var solveButton = document.getElementById("solve");
var greatButton = document.getElementById(">");
var lessButton = document.getElementById("<");
var moduloButton = document.getElementById("modulo");
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

greatButton.addEventListener('click', setGreat, false);

lessButton.addEventListener('click', setLess, false);

moduloButton.addEventListener('click', setModulo, false);
//...and now the functions.
function setNum1(
    ) {
      num1 = prompt("Enter a number.");
}	
function setNum2() {
	 num2 = prompt("Enter a number.");
}

function setAnswer() {
    //Convert the strings...
  num1 = parseInt(num1, 10);
  num2 = parseInt(num2, 10);
  //...and now the operators: plus,
 if (op == "+"){
     solvd= num1 + num2;
 } //minus,
 else if (op == "-"){
     solvd= num1 - num2;
 } //multiplication,
 else if (op == "*"){
     solvd= num1 * num2;
 } //division,
 else if (op == "/"){
     solvd= num1 / num2;
 } //greater than,
 else if (op == ">"){
     solvd= num1 > num2;
     if (solvd == true){
         solvd = "True.";
     }
     else if (solvd == false){
         solvd = "No, you fool.";
     }
     else{
         solvd = "Something went wrong.";
     }
 } //less than,
 else if (op == "<"){
     solvd= num1 < num2;
      if (solvd == true){
         solvd = "True.";
     }
     else if (solvd == false){
         solvd = "No, you fool.";
     }
     else{
         solvd = "Something went wrong.";
     }
 } //and remainder.
 else if (op == "R"){
     solvd= num1 % num2;
 }
 alert("Necrozma used Photon Geyser to reveal the answer!");
 alert("Necrozma: Lie... Lie... Liight!");
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
function setGreat() {
    op= ">";
}
function setLess() {
    op= "<";
}
function setModulo() {
    op= "%";
}
// Is the branch function working?

