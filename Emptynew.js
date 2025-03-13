// Hämta data från API
// Visa datan som jag väljer
// Filtrera och sortera
// Få fram ett random recept


// Varibles for fetching data from API

const URL = "https://api.spoonacular.com/recipes/random?number=12&apiKey=11307b44ec204bb4aba527e2affcfab0"
const BASE_URL = "https://api.spoonacular.com/recipes/"
const recipesContainer = document.getElementById("recipe-container")

//Fetching the data from API

const fetchRecipeData = () => {
  fetch(URL)
    .then((response) => {
      console.log("Respons", response)
      return response.json()
    })
    .then((data) => {
      console.log("What is data now:", data)
      loadRecipies(data.recipes)
    })
}

fetchRecipeData()

//Show the data 

//List of ingridients must be fixed!
const loadRecipies = (recipesArray) => {
  recipesContainer.innerHTML = "" //resets the container before we load recepies
  recipesArray.forEach(recept => {
    const allIngredients = recept.extendedIngredients.map(ing => `<li>${ing.original}</li>`).join("")


    // const allIngredients = recept.extendedIngredients
    //   ? recept.extendedIngredients.map(ing => `<li>${ing.original}</li>`).join("")
    //   : "No ingredients available"
    recipesContainer.innerHTML += ` 
      <a href=${recept.sourceUrl}><div class="card">
        <img src=${recept.image} alt="${recept.title}">
        <h2>${recept.title}</h2>
        <p>Cousine: ${recept.cuisines.join(", ") || "Unknown"}</p> 
        <p>Time: ${recept.readyInMinutes} minutes</p>
        <p>Servings: ${recept.servings}</p>
        <p>Diet: ${recept.diets.join(", ") || "None"}</p>
        <p>Ingredients:</p> <ul>${allIngredients}</ul>
        <p>Price per serving: ${recept.pricePerServing.toFixed(2)} USD</p>
        <p>Popularity: ${recept.popularity}</p>
      </div>  </a>`



  });
}



