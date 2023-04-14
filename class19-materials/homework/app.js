//JSWay Arrays
// let musketeers = ["Athos", "Porthos", "Aramis"];
// function showMusketeers(musketeers) {
//   for (const m in musketeers) {
//     console.log(musketeers[m]);
//   }
// }

// showMusketeers(musketeers);
// musketeers.push("D'Artagnan");
// console.log(musketeers);

// musketeers.forEach((m) => {
//   console.log(m);
// });
// musketeers.splice(2, 1);
// console.log(musketeers);

// for (const m of musketeers) {
//   console.log(m);
// }

// const values = [3, 11, 7, 2, 9, 10];

// console.log(values.reduce((a, b) => a + b, 0));

// function getMax(arr) {
//   let max = arr[0];
//   let next = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     } else {
//       next = arr[i];
//     }
//   }
//   let result = max;
//   return result;
// }

// console.log(getMax(values));

//JSWay Objects

// const aurora = {
//   name: "Aurora",
//   health: 150,
//   strength: 25,
//   xp: 0,

//   // Return the character description
//   describe() {
//     return `${this.name} has ${this.health} health points, ${this.xp} experience, and ${this.strength} as strength`;
//   },
// };

// console.log(aurora.describe());

// const dog = {
//   name: "Fido",
//   species: "Wolfhound",
//   size: "80",
//   bark() {
//     return "WOOF! WOOF! WOOF!";
//   },
// };

// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
// const circle = {
//   radius: r,
//   circumference() {
//     return (r * 3.14 * 2).toFixed(2);
//   },
//   area() {
//     return (r * r * 3.14).toFixed(2);
//   },
// };

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

// const bankAccount = {
//   name: "Rodolpho Fantastico",
//   balance: 25000,
//   credit(value) {
//     return (this.balance += value);
//   },
//   describe() {
//     return `Name: ${this.name}, Balance: ${this.balance}`;
//   },
// };

// console.log(bankAccount.describe());
// console.log(bankAccount.credit(500));
// console.log(bankAccount.describe());

//javascript.info Arrays

// function camelize(str) {
//   let s = str.split("-");
//   return s
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }

// console.log(camelize("background-color"));

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//   return arr.filter((item) => {
//     if (item >= a && b >= item) {
//       return item;
//     }
//   });
// }

// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);

// function filterRangeInPlace(arr, a, b) {
//   let filtered = [];
//   arr.map((item) => {
//     if (item >= a && item <= b) {
//       filtered.push(item);
//     }
//   });
//   return filtered;
// }

// console.log(filterRangeInPlace(arr, 1, 4));

// let arr = [5, 2, 1, -10, 8];

// function sortedArray(arr) {
//   return arr.sort((a, b) => b - a);
// }

// console.log(sortedArray(arr));

// let arr2 = ["HTML", "JavaScript", "CSS"];

// let sorted = arr2.slice().sort();

// console.log(sorted);
// console.log(arr2);

let john = { name: "John", surname: "Smith", id: 1, age: 25 };
let pete = { name: "Pete", surname: "Hunt", id: 2, age: 30 };
let mary = { name: "Mary", surname: "Key", id: 3, age: 28 };

let users = [john, pete, mary];

// let names = (users) => {
//   return users.map((user) => user.name);
// };

// console.log(names(users));

// let usersMapped = users.map((user) => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id,
// }));

// console.log(usersMapped);

// function sortByAge(arr) {
//   return arr.sort((a, b) => a.age - b.age);
// }
// console.log(sortByAge(users));

// let arr = [1, 2, 3];

// function shuffle(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// }

// console.log(shuffle(arr));

// function getAverageAge(arr) {
//   return arr.reduce((acc, cur) => acc + cur.age, 0) / arr.length;
// }

// console.log(getAverageAge(users));

// function unique(arr) {
//   let uniqueArray = [];
//   for (let item of arr) {
//     if (!uniqueArray.includes(item)) {
//       uniqueArray.push(item);
//     }
//   }
//   return uniqueArray;
// }

// let strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// alert(unique(strings)); // Hare, Krishna, :-O

// function usersById(users) {
//   return users.reduce((obj, value) => {
//     obj[value.name] = value;
//     return obj;
//   }, {});
// }

// console.log(usersById(users));

// complete the function
