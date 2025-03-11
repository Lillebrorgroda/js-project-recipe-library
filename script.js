
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
const recipes = [
  {
    id: 1,
    title: "Vegan Lentil Soup",
    image: "./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "red lentils",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "cumin",
      "paprika",
      "vegetable broth",
      "olive oil",
      "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
  },
  {
    id: 2,
    title: "Vegetarian Pesto Pasta",
    image: "./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
    readyInMinutes: 25,
    servings: 2,
    sourceUrl: "https://example.com/vegetarian-pesto-pasta",
    diets: ["vegetarian"],
    cuisine: "Italian",
    ingredients: [
      "pasta",
      "basil",
      "parmesan cheese",
      "garlic",
      "pine nuts",
      "olive oil",
      "salt",
      "black pepper"
    ],
    pricePerServing: 3.0,
    popularity: 92
  },
  {
    id: 3,
    title: "Gluten-Free Chicken Stir-Fry",
    image: "./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
    readyInMinutes: 20,
    servings: 3,
    sourceUrl: "https://example.com/gluten-free-chicken-stir-fry",
    diets: ["gluten-free"],
    cuisine: "Asian",
    ingredients: [
      "chicken breast",
      "broccoli",
      "bell pepper",
      "carrot",
      "soy sauce (gluten-free)",
      "ginger",
      "garlic",
      "sesame oil",
      "cornstarch",
      "green onion",
      "sesame seeds",
      "rice"
    ],
    pricePerServing: 4.0,
    popularity: 78
  },
  {
    id: 4,
    title: "Dairy-Free Tacos",
    image: "./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
    readyInMinutes: 15,
    servings: 2,
    sourceUrl: "https://example.com/dairy-free-tacos",
    diets: ["dairy-free"],
    cuisine: "Mexican",
    ingredients: [
      "corn tortillas",
      "ground beef",
      "taco seasoning",
      "lettuce",
      "tomato",
      "avocado"
    ],
    pricePerServing: 2.8,
    popularity: 88
  },
  {
    id: 5,
    title: "Middle Eastern Hummus",
    image: "./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
    readyInMinutes: 10,
    servings: 4,
    sourceUrl: "https://example.com/middle-eastern-hummus",
    diets: ["vegan", "gluten-free"],
    cuisine: "Middle Eastern",
    ingredients: [
      "chickpeas",
      "tahini",
      "garlic",
      "lemon juice",
      "olive oil"
    ],
    pricePerServing: 1.5,
    popularity: 95
  },
  {
    id: 6,
    title: "Quick Avocado Toast",
    image: "./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
    readyInMinutes: 5,
    servings: 1,
    sourceUrl: "https://example.com/quick-avocado-toast",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "bread",
      "avocado",
      "lemon juice",
      "salt"
    ],
    pricePerServing: 2.0,
    popularity: 90
  },
  {
    id: 7,
    title: "Beef Stew",
    image: "./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
    readyInMinutes: 90,
    servings: 5,
    sourceUrl: "https://example.com/beef-stew",
    diets: [],
    cuisine: "European",
    ingredients: [
      "beef chunks",
      "potatoes",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "beef broth",
      "red wine",
      "bay leaves",
      "thyme",
      "salt",
      "black pepper",
      "butter",
      "flour",
      "celery",
      "mushrooms"
    ],
    pricePerServing: 5.5,
    popularity: 80
  }
]

//Functions

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

// const selectedSorting = (userSelectedSorting) => {
//   let declarationOfSelectedSorting = ""

//   if (userSelectedSorting === "ascending") {
//     declarationOfSelectedSorting = `You want to impress on someone`
//   } else {
//     declarationOfSelectedSorting = `You in a hurry mate`
//   }

//   messageBox.innerHTML += `<p>${declarationOfSelectedSorting}</p>`
// }

// ascendingButton.addEventListener("click", () => {
//   selectedSorting("ascending")
//   ascendingButton.classList.toggle("selectedButton")
// })

// descendingButton.addEventListener("click", () => {
//   selectedSorting("descending")
//   descendingButton.classList.toggle("selectedButton")
// })



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
        <p>Cousine: ${recept.cuisine}</p>
        <p>Time: ${recept.readyInMinutes} minutes</p>
        <p>Servings: ${recept.servings}</p>
        <p>Diet: ${recept.diets}</p>
        <p>Ingredients:<ul>${recept.ingredients}</ul></p>
        <p>Price per serving: ${recept.pricePerServing} dollar</p>
        <p>Popularity: ${recept.popularity}</p>
      
        
      </div>  </a>`

  });
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

loadRecipies(recipes)


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
