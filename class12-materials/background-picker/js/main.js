// document.getElementById('purple').onclick = partyPurple
// document.getElementById('green').onclick = partyGreen
// document.getElementById('blue').onclick = partyBlue

// function partyPurple() {
//   document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyGreen() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyBlue() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
//   document.querySelector('body').style.color = 'white'
// }

document.getElementById("purple").onclick = partyPurple;
document.getElementById("green").onclick = partyGreen;
document.getElementById("blue").onclick = partyBlue;
document.getElementById("red").onclick = partyRed;
document.getElementById("pink").onclick = partyPink;
document.getElementById("orange").onclick = partyOrange;
document.getElementById("reset").onclick = partyReset;
let bg = document.querySelector("body");

function partyPurple() {
  bg.style.backgroundColor = "rgba(241,63,247,1)";
  bg.style.color = "white";
}
function partyGreen() {
  bg.style.backgroundColor = "rgba(0,253,81,1)";
  bg.style.color = "darkgreen";
}
function partyBlue() {
  bg.style.backgroundColor = "rgba(0,254,255)";
  bg.style.color = "darkblue";
}
function partyRed() {
  bg.style.backgroundColor = "red";
  bg.style.color = "white";
}
function partyPink() {
  bg.style.backgroundColor = "pink";
  bg.style.color = "purple";
}
function partyOrange() {
  bg.style.backgroundColor = "orange";
  bg.style.color = "maroon";
}
function partyReset() {
  bg.style.backgroundColor = "white";
  bg.style.color = "black";
}
