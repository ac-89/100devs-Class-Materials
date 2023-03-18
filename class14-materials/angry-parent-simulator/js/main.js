// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//   //Add what you should be doing - conditionals go here

//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }

// const yellArea = document.querySelector("#placeToYell");
// const supplement = [
//   "So help me God...",
//   "get your butt in here!",
//   "do your homework!",
//   "behave yourself!",
//   "you're late for school!",
// ];

// const arrNum = Math.floor(Math.random() * supplement.length);
// console.log(arrNum);
// const suppChoice = supplement[arrNum];

// const momYell = () => {
//   const firstName = document.querySelector("#firstName").value;
//   const firstMiddle = document.querySelector("#firstMiddle").value;
//   const lastMiddle = document.querySelector("#lastMiddle").value;
//   const lastName = document.querySelector("#lastName").value;
//   yellArea.innerText = `${firstName} ${firstMiddle} ${lastMiddle} ${lastName}, ${suppChoice}`;
// };

// const yellBtn = document
//   .querySelector("#yell")
//   .addEventListener("click", momYell);

function camelize(str) {
  let newArr = str.split("-");
  console.log(newArr);
  return newArr
    .map((word, i) => {
      if (i === 0) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join("");
}

function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}
