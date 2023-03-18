// *Variables*
// Create a variable and console log the value
let plug = 10;
console.log(plug);
// Create a variable, add 10 to it, and alert the value
let harry = 5;
alert(harry + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(num1, num2, num3, num4) {
  alert(num1 - num2 - num3 - num4);
}

// Create a function that divides one number by another and returns the remainder
function divide(num1, num2) {
  return num1 / num2;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function Jumanji(a, b) {
  if (a + b > 50) {
    alert("Jumanji");
  }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplys(num1, num2, num3) {
  if ((num1 * num2 * num3) % 3 == 0) {
    alert("ZEBRA");
  }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function repeat(num, word) {
  for (let i = 1; i < num; i++) {
    console.log(word);
  }
}
