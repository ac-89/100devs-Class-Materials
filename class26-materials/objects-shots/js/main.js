// Get reference to the element where the cocktail data will be displayed
const cocktailList = document.getElementById("cocktail-list");

// Function to fetch data from the API and display it on the webpage
function displayCocktails(formValue) {
  // Clear previous results
  cocktailList.innerHTML = "";

  // Fetch data from the API
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${formValue}`)
    .then((response) => response.json())
    .then((data) => {
      const cocktails = data.drinks;

      // Check if there are any cocktails found
      if (cocktails === null) {
        cocktailList.innerHTML = "No cocktails found.";
        return;
      }

      // Loop through each cocktail and display its details
      cocktails.forEach((cocktail) => {
        const name = cocktail.strDrink;
        const photo = cocktail.strDrinkThumb;
        const instructions = cocktail.strInstructions;

        // Create elements for cocktail details
        const cocktailContainer = document.createElement("div");
        cocktailContainer.classList.add("cocktail-container");
        const cocktailNameElement = document.createElement("h2");
        cocktailNameElement.textContent = name;

        const cocktailPhotoElement = document.createElement("img");
        cocktailPhotoElement.src = photo;
        cocktailPhotoElement.alt = name;

        const cocktailInstructionsElement = document.createElement("p");
        cocktailInstructionsElement.textContent = instructions;

        // Append cocktail details to the cocktail list element
        cocktailList.appendChild(cocktailContainer);
        cocktailContainer.appendChild(cocktailNameElement);
        cocktailContainer.appendChild(cocktailPhotoElement);
        cocktailContainer.appendChild(cocktailInstructionsElement);
      });
    })
    .catch((error) => {
      // Display error message if there's an issue with the API request
      cocktailList.innerHTML = "Error fetching cocktails. Please try again.";
      console.error(error);
    });
}

// Example usage: Call the displayCocktails function when a form is submitted
const form = document.getElementById("drinkForm"); // Replace 'your-form-id' with the actual ID of your form element

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  const formValue = document.getElementById("drinkInput").value; // Replace 'form.value' with the actual value of your form input field
  console.log(formValue);
  displayCocktails(formValue);
});
