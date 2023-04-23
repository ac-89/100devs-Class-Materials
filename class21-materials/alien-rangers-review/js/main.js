//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ["Cheers", "Friends", "Curb"];

function showLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

showLoop(tvShows);

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numArray = [1, 2, 3, 4, 5];

function evens(arr) {
  let evenArray = [];
  arr.forEach((item) => (item % 2 === 0 ? evenArray.push(item) : undefined));
  return evenArray;
}

console.log(evens(numArray));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function alertSum(arr) {
  console.log(arr);
  arr.sort((a, b) => a - b);
  let sum = arr[1] + arr[arr.length - 2];
  alert(`The sum of ${arr[1]} and ${arr[arr.length - 2]} is ${sum}`);
  console.log(arr);
}
let sumArray = [5, 9645, 2, 45, 964, 14, 1, 6, 45];

alertSum(sumArray);
