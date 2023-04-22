//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

function multiply(arr) {
  return arr.reduce((acc, num) => acc * num);
}

let array = [10, 2, 3];

console.log(multiply(array));
console.log(array);
