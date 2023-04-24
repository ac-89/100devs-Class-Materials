//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let numArray = [5, 9, 2, 4, 7, 6, 21];

function sumArray(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
console.log(sumArray(numArray));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const arrSquared = (arr) => arr.map((x) => x * x);

console.log(arrSquared(numArray));

//Create a function that takes string
//Print the reverse of that string to the console
let str = "Panama";

const strReversed = (str) => Array.from(str).reverse().join("");

console.log(strReversed(str));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
let str2 = "racecar";
const palindrome = (str) => {
  let rts = Array.from(str).reverse().join("");
  if (str === rts) {
    alert("palindrome detected");
  } else {
    alert("Not a palindrome");
  }
};

palindrome(str);
palindrome(str2);
