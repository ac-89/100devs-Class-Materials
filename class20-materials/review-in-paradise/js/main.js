// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let faveFood = "Pancakes";
alert(faveFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = "Hello, world";
alert(str[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function mathFun(n1, n2, n3) {
  alert(n1 / n2) * n3;
}

mathFun(5, 9, 2);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(n) {
  console.log(Math.cbrt(n));
}

cubeRoot(9);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function monthSeason(month) {
  if (month === "may" || month === "june" || month === "july") {
    alert("YAY!");
  } else {
    alert("BOOO!");
  }
}

monthSeason(prompt("Choose a month..."));

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function numLoop(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 !== 0) {
      console.log(i);
    }
  }
}
numLoop(26);
