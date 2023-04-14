//Create an array of movie titles. Loop through the array and each element to the h2.
const movies = ["National Treasure", "Avatar", "Coraline"];
const h2 = document.querySelector("h2");

for (let i = 0; i <= movies.length - 1; i++) {
  h2.innerHTML += `${movies[i]} `;
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numArray = [5, 3, 98, 41, 1, 63, 8];

console.log(
  numArray.map((num) => {
    return num + 3;
  })
);

//Find the average of all the numbers from question three
let arrLength = numArray.length;
console.log(
  numArray.reduce((acc, num) => {
    return acc + num;
  })
);
