// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function arrayCheck(arr) {
  if (arr[0] < arr[arr.length - 1]) {
    console.log("HI");
  } else if (arr[0] > arr[arr.length - 1]) {
    console.log("BYE");
  } else if (arr[0] === arr[arr.length - 1]) {
    console.log("We close in an hour");
  }
}
let arr = [7, 6, 9, 2, 7];

arrayCheck(arr);
