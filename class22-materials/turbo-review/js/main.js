// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let faveDrink = " Coke ";

console.log(faveDrink.trim());

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let wordString = "pear strawberry apple banana";

if (wordString.includes("apple")) {
  console.log("true");
} else {
  console.log("False");
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps() {
  let choose = Math.random() * 3;
  if (choose < 1) {
    return "Rock";
  } else if (choose < 2) {
    return "Paper";
  } else if (choose < 3) {
    return "Scissors";
  }
}
let choose2 = Math.random() * 3;

rps();

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function rpsGame(choice) {
  let p1 = rps();
  let p2 = choice || rps();
  console.log(p1, p2);
  if (p1 === p2) {
    console.log(`Both players choose ${p1}. It's a draw!`);
  } else if (
    (p1 === "Rock" && p2 === "Paper") ||
    (p1 === "Paper" && p2 === "Scissors") ||
    (p1 === "Scissors" && p2 === "Rock")
  ) {
    console.log(`P1: ${p1}, P2: ${p2}. Player 2 wins!`);
  } else {
    console.log(`P1: ${p1}, P2: ${p2}. Player 1 wins!`);
  }
}

rpsGame();

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let choiceArray = [
  "Paper",
  "Rock",
  "Rock",
  "Scissors",
  "Paper",
  "Scissors",
  "Paper",
];

const gameRun = (choiceArray) => {
  // let p1 = rps(choose);
  choiceArray.forEach((choice) => rpsGame(rps(), choice));
};

console.log(gameRun(choiceArray));
