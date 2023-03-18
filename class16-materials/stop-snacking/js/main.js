//Create a function that grabs the number of snacks from the input and tells you to stop that many times
const btnStop = document.querySelector("#help");
const stops = document.querySelector("#stops");

btnStop.addEventListener("click", () => {
  let snacks = Number(document.querySelector("input").value);
  stops.innerHTML = "";
  for (let i = 0; i < snacks; i++) {
    stops.innerHTML += " Stop!";
  }
});
