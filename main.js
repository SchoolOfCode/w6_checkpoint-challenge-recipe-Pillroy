const MY_APP_ID = "e20da38d";
const MY_APP_KEY = "b632725c80114f9c0295ebb2553e7d39";

let recipeLabel = document.querySelector("#recipe-label");

let foodToSearch = null;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}
// runs fetchRecipe function once user clicks 'Give me a recipe!'

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}
// assigns USER INPUT to js variable 'foodToSearch' onchange


async function fetchRecipe(food) {
  //--- write your code below ---
  let response = await fetch(`https://api.edamam.com/search?q=${foodToSearch}&app_id=${MY_APP_ID}&app_key=${MY_APP_KEY}`);
  let data = await response.json();
  // console.log(data.hits[0].recipe);
  recipeLabel.innerHTML = data.hits[0].recipe.label;
  // console.log(recipeLabel);
  recipeLabel.href = data.hits[0].recipe.url;
  //--- write your code above ---
}


// Search database using USER INPUT (foodToSearch) as query
// Assign RESPONSE to a variable
// Assign .JSON method to a variable
// Use first recipe from received data to CREATE ELEMENT in HTML


