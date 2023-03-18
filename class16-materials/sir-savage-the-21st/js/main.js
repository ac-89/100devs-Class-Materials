//Create a function that has a loop that prints '21' 21 times to the console and then call that function
const printArea = document.querySelector("#savageSays");

let print21 = () => {
  for (let i = 0; i < 21; i++) {
    console.log("21");
    printArea.innerHTML += "21 ";
  }
};

print21();
//Bonus can you make it print '21' 21 times to the dom?
