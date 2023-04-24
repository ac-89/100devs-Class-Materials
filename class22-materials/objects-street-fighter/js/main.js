// //Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

// function StreetFighter(charName, charhp, charSpecialMove, charTaunt) {
//   this.name = charName;
//   this.hp = charhp;
//   this.specialMove = charSpecialMove;
//   this.taunt = charTaunt;
//   this.punch = function () {
//     console.log("punch");
//   };
//   this.kick = function () {
//     console.log("kick");
//   };
//   this.performSpecialMove = function () {
//     console.log(`${this.specialMove} HADOUKEN!`);
//   };
// }

// let ken = new StreetFighter("Ken", 100, "Shoryureppa", "Kakatte ki na!");
// let chunLi = new StreetFighter(
//   "Chun LI",
//   85,
//   "Senretsukyaku",
//   "Kakugo wa ii wa ne?"
// );

// console.log(chunLi.performSpecialMove());
// console.log(ken.taunt);

// let box = {
//   height: 10,
//   width: 20,
//   color: "Red",
// };

// let style = {
//   color: "Blue",
//   borderStyle: "solid",
// };

// let styleBox = Object.assign({}, box, style);

// console.log(styleBox);

// function StopWatch(currentTime) {
//     let currentTime = 0;
//     let start = function{

//     }
// }

function solution(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      return string.split("").splice(i, 0, " ").join(" ");
    }
  }
  //   console.log(strSplit);
}

console.log(solution("camelCase"));
