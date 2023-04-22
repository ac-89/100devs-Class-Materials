//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenArray(arr) {
  let result = [];
  arr.forEach((item) => {
    if (item % 2 === 0) {
      result.push(item);
    }
  });
  return result;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(evenArray(array));
