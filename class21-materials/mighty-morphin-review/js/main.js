// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = "Halloween";

holiday = "Christmas Day";

console.log(holiday.toUpperCase());

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = "Hello";

console.log(str.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function minus100(n1, n2, n3, n4, n5) {
  let start = 100 - n1 - n2 - n3 - n4 - n5;
  return Math.abs(start);
}

console.log(minus100(54, 4, 9, 5, 6));
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowAndHigh(n1, n2, n3) {
  let arr = [n1, n2, n3];
  arr.sort((a, b) => a - b);
  console.log(arr[0], arr[arr.length - 1]);
}
lowAndHigh(5, 7, 1);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
  let choice = Math.random() - 0.5;
  if (choice < 0) {
    return "Tails";
  } else {
    return "Heads";
  }
}

console.log(headsOrTails());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function loops(n) {
  for (let i = 0; i < n; i++) {
    console.log(headsOrTails());
  }
}

loops(3);
