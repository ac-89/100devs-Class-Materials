//Write your pseduo code first!

// create form
// create html element for result
// take form value
// run value through calculation
// output value
// fill html element with result

const submitBtn = document.querySelector("#check");
submitBtn.addEventListener("click", convert);

function convert(value) {
  const celsius = document.querySelector("#celsius").value;
  document.querySelector("#output").innerHTML = celsius * 1.8 + 32;
}
