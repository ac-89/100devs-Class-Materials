//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let array = [21, 5, 5, 1, 4, 7, 45];

function arrSum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

console.log(arrSum(array));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function arrSquared(arr) {
  return arr.map((item) => item * item);
}

console.log(arrSquared(array));

//Create a function that takes string
//Print the reverse of that string to the console
let string = "Hello world!";

function strReverse(str) {
  return str.split("").reverse().join("");
}

console.log(strReverse(string));
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str) {
  let reversed = strReverse(str);
  if (str === reversed) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}
let string2 = "racecar";

palindrome(string);
palindrome(string2);
