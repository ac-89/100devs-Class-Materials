//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value

//   if(day === "tuesday" || day === "thursday"){
//     console.log("YOU HAVE CLASS")
//   }else if( day === "saturday" || day === "sunday"){
//     console.log("Its The Weekend")
//   }else{
//     console.log("BORING")
//   }

// }

const checkBtn = document.querySelector("#check");
const placeToSee = document.querySelector("#placeToSee");

checkBtn.addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();
  if (day === "saturday" || day === "friday") {
    placeToSee.innerHTML = "It's the weekend!";
  } else if (day === "tuesday" || day === "thursday") {
    placeToSee.innerHTML = "It's time for class!";
  } else if (day === "monday") {
    placeToSee.innerHTML = "Tell me why...";
  } else if (day === "wednesday") {
    placeToSee.innerHTML = "Hump day, baby!";
  } else if (day === "sunday") {
    placeToSee.innerHTML = "Dreading tomorrow...";
  } else {
    placeToSee.innerHTML = "Not a valid day";
  }
}
