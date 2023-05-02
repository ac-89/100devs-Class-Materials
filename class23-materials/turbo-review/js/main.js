// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
// let sentence = "Is this a question?";
// console.log(sentence[sentence.length - 1]);

// function isQuestion(sentence) {
//   if (sentence[sentence.length - 1] === "?") {
//     alert("This is a question");
//   } else {
//     alert("This is not a question");
//   }
// }

// isQuestion(sentence);

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let sentence2 = "This is a jr. dev position";

function noJr(sentence) {
  return sentence.replace("jr. dev", "Software Engineer");
}

console.log(noJr(sentence2));
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rps() {
  let choice = Math.random() * 3;
  if (choice <= 1) {
    return "rock";
  } else if (choice <= 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

let p1 = rps();

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function rpsGame(player) {
  let compChoice = rps();
  if (player === compChoice) {
    console.log(
      `P1 picks ${player}, Computer picks ${compChoice}. It's a draw!`
    );
  } else if (
    (player === "rock" && compChoice === "paper") ||
    (player === "paper" && compChoice === "scissors") ||
    (player === "scissors" && compChoice === "rock")
  ) {
    console.log(
      `P1 picks ${player}, Computer picks ${compChoice}. Computer wins!`
    );
  } else {
    console.log(
      `P1 picks ${player}, Computer picks ${compChoice}. Player 1 Wins!`
    );
  }
}

rpsGame(p1);

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

let gameArray = ["paper", "scissors", "rock", "scissors", "rock", "paper"];

function multiGame(arr) {
  return arr.forEach((game) => rpsGame(game));
}

console.log(multiGame(gameArray));
