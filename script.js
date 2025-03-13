


//Box for messages to the user
const messageBox = document.getElementById("more-filter")

//Varibles
const allFood = document.getElementById("all")
const mediterraneanFood = document.getElementById("mediterranean")
const middleEasternFood = document.getElementById("middle-eastern")
const asianFood = document.getElementById("asian")
const italianFood = document.getElementById("italian")
const mexicanFood = document.getElementById("mexican")
const randomFood = document.getElementById("random")
const ascendingButton = document.getElementById("ascending")
const descendingButton = document.getElementById("descending")
const recipesContainer = document.getElementById("recipe-container")

const URL = "https://api.spoonacular.com/recipes/random?number=12&apiKey=11307b44ec204bb4aba527e2affcfab0"
const BASE_URL = "https://api.spoonacular.com/recipes/"

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



//Functions



const selectedSorting = (userSelectedSorting, button) => {
  let declarationOfSelectedSorting = userSelectedSorting === "ascending"
    ? `You want to impress on someone`
    : `You in a hurry mate`


  messageBox.innerHTML = `<p>${declarationOfSelectedSorting}</p>`

  // First take away any activemode on buttons in this function and then add on the selected on.
  // Only one button can be active of the timesorting buttons.
  ascendingButton.classList.remove("selectedButton")
  descendingButton.classList.remove("selectedButton")
  button.classList.add("selectedButton")
};

//List of ingridients must be fixed!
const loadRecipies = (recipesArray) => {
  recipesContainer.innerHTML = "" //resets the container before we load recepies
  recipesArray.forEach(recept => {
    recipesContainer.innerHTML += ` <a href=${recept.sourceUrl}><div class="card">
        <img src=${recept.image} alt=${recept.title}>
        <h2>${recept.title}</h2>
        <p>Cousine: ${recept.cuisines}</p> 
        <p>Time: ${recept.readyInMinutes} minutes</p>
        <p>Servings: ${recept.servings}</p>
        <p>Diet: ${recept.diets}</p>
        <p>Ingredients:<ul>${recept.ingredients}</ul></p>
        <p>Price per serving: ${recept.pricePerServing} dollar</p>
        <p>Popularity: ${recept.popularity}</p>
      
        
      </div>  </a>`

  });
}

const selectedFood = (userSelectedFood) => {
  console.log("revealSelectedFood function is running")
  let declarationOfFoodChoice = ""

  if (userSelectedFood === "mediterranean") {
    declarationOfFoodChoice = `You like olive oil and vegetables`
  } else if (userSelectedFood === "middle-eastern") {
    declarationOfFoodChoice = `You like hummus and falafel`
  } else if (userSelectedFood === "asian") {
    declarationOfFoodChoice = `You like Peking duck and Nasi Goureng`
  } else if (userSelectedFood === "italian") {
    declarationOfFoodChoice = `You like pizza and pasta. Pappa jag vill ha en italienare!
    Uppfödd på pizza och pasta`
  } else {
    declarationOfFoodChoice = `You enjoy chilli, beans and corn`
  }

  messageBox.innerHTML += `<p>${declarationOfFoodChoice}</p>`
}

const filtrateRecipies = (value) => {

  if (value.toLowerCase() === "all") {
    loadRecipies(recipes)
  } else {
    const filteredRecipies = recipes.filter(meal => meal.cuisine.toLowerCase() === value.toLowerCase())
    loadRecipies(filteredRecipies)
  }
}

//Sorting on ascending and decending

const compareTime = (a, b) => {
  return a.readyInMinutes - b.readyInMinutes
}

const sortRecipes = (ascending = true) => {
  recipes.sort((a, b) => ascending ? compareTime(a, b) : compareTime(b, a));
  loadRecipies(recipes)
}

const generateRandomRecipies = () => {
  const randomIndex = Math.floor(Math.random() * recipes.length)
  const randomRecipe = recipes[randomIndex];

  loadRecipies([randomRecipe])
  console.log("Random recipie: ", randomRecipe)
}

// loadRecipies(recipes)


// Event listeners for sorting on time
ascendingButton.addEventListener("click", () => {
  selectedSorting("ascending", ascendingButton)
  sortRecipes(ascending)
})

descendingButton.addEventListener("click", () => {
  selectedSorting("descending", descendingButton)
  sortRecipes(false)
});


// Event listeners for kitchen filter
randomFood.addEventListener("click", () => {
  generateRandomRecipies()
  randomFood.classList.toggle("selectedButton")
})

allFood.addEventListener("click", () => {
  filtrateRecipies("all")
  allFood.classList.toggle("selectedButton")
})
mediterraneanFood.addEventListener("click", () => {
  console.log("Button  for Mediterranean food is clicked")
  selectedFood("mediterranean")
  filtrateRecipies("mediterranean")
  mediterraneanFood.classList.toggle("selectedButton")
})

middleEasternFood.addEventListener("click", () => {
  console.log("Button for Middle Eastern food is clicked")
  selectedFood("middle-eastern")
  filtrateRecipies("middle eastern")
  middleEasternFood.classList.toggle("selectedButton")
})

asianFood.addEventListener("click", () => {
  console.log("Button for Asian food is clicked")
  selectedFood("asian")
  filtrateRecipies("Asian")
  asianFood.classList.toggle("selectedButton")
})

italianFood.addEventListener("click", () => {
  console.log("Button for Italian food is clicked")
  selectedFood("italian")
  filtrateRecipies("italian")
  italianFood.classList.toggle("selectedButton")
})

mexicanFood.addEventListener("click", () => {
  console.log("Button for mexican food is clicked")
  selectedFood("mexican")
  filtrateRecipies("mexican")
  mexicanFood.classList.toggle("selectedButton")

})
