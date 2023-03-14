document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();

  //Conditionals go here
  if (day == "saturday" || day == "sunday") {
    alert("Ladies and gentlemen, the weekend!");
  } else if (day == "tuesday" || day == "thursday") {
    alert("Class time!");
  } else {
    alert("I got nuthin'");
  }
}
