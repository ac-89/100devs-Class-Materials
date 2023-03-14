// let total = 0;

// document.querySelector("#pumpkin").addEventListener("click", makeZero);
// document.querySelector("#dominosPizza").addEventListener("click", jumanji);
// document.querySelector("#zebra").addEventListener("click", add9);
// document.querySelector("#cantThinkOfAnything").addEventListener("click", sub2);

// function makeZero() {
//   total = 0;
//   document.querySelector("#placeToPutResult").innerText = total;
// }

// function jumanji() {
//   total = total + 3;
//   document.querySelector("#placeToPutResult").innerText = total;
// }

// function add9() {
//   total = total + 9;
//   document.querySelector("#placeToPutResult").innerHTML = total;
// }

// function sub2() {
//   total = total - 2;
//   document.querySelector("#placeToPutResult").innerHTML = total;
// }

let total = 0;

document.querySelector("#pumpkin").addEventListener("click", toZero);
document.querySelector("#dominosPizza").addEventListener("click", add3);
document.querySelector("#zebra").addEventListener("click", add9);
document.querySelector("#cantThinkOfAnything").addEventListener("click", sub2);
document.querySelector("#timesThree").addEventListener("click", mul3);
document.querySelector("#divideFive").addEventListener("click", div5);
const totalDisplay = document.querySelector("#placeToPutResult");

function toZero() {
  total = 0;
  totalDisplay.innerHTML = total;
}

function add3() {
  total = total + 3;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function add9() {
  total = total + 9;
  totalDisplay.innerHTML = total;
}

function sub2() {
  total = total - 2;
  totalDisplay.innerHTML = total;
}
function mul3() {
  total = total * 3;
  totalDisplay.innerHTML = total;
}
function div5() {
  total = total / 5;
  totalDisplay.innerHTML = total;
}
