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



// const recipes = [
//   {
//     id: 1,
//     title: "Vegan Lentil Soup",
//     image: "./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
//     readyInMinutes: 30,
//     servings: 4,
//     sourceUrl: "https://example.com/vegan-lentil-soup",
//     diets: ["vegan"],
//     cuisine: "Mediterranean",
//     ingredients: [
//       "red lentils",
//       "carrots",
//       "onion",
//       "garlic",
//       "tomato paste",
//       "cumin",
//       "paprika",
//       "vegetable broth",
//       "olive oil",
//       "salt"
//     ],
//     pricePerServing: 2.5,
//     popularity: 85
//   },
//   {
//     id: 2,
//     title: "Vegetarian Pesto Pasta",
//     image: "./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
//     readyInMinutes: 25,
//     servings: 2,
//     sourceUrl: "https://example.com/vegetarian-pesto-pasta",
//     diets: ["vegetarian"],
//     cuisine: "Italian",
//     ingredients: [
//       "pasta",
//       "basil",
//       "parmesan cheese",
//       "garlic",
//       "pine nuts",
//       "olive oil",
//       "salt",
//       "black pepper"
//     ],
//     pricePerServing: 3.0,
//     popularity: 92
//   },
//   {
//     id: 3,
//     title: "Gluten-Free Chicken Stir-Fry",
//     image: "./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
//     readyInMinutes: 20,
//     servings: 3,
//     sourceUrl: "https://example.com/gluten-free-chicken-stir-fry",
//     diets: ["gluten-free"],
//     cuisine: "Asian",
//     ingredients: [
//       "chicken breast",
//       "broccoli",
//       "bell pepper",
//       "carrot",
//       "soy sauce (gluten-free)",
//       "ginger",
//       "garlic",
//       "sesame oil",
//       "cornstarch",
//       "green onion",
//       "sesame seeds",
//       "rice"
//     ],
//     pricePerServing: 4.0,
//     popularity: 78
//   },
//   {
//     id: 4,
//     title: "Dairy-Free Tacos",
//     image: "./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
//     readyInMinutes: 15,
//     servings: 2,
//     sourceUrl: "https://example.com/dairy-free-tacos",
//     diets: ["dairy-free"],
//     cuisine: "Mexican",
//     ingredients: [
//       "corn tortillas",
//       "ground beef",
//       "taco seasoning",
//       "lettuce",
//       "tomato",
//       "avocado"
//     ],
//     pricePerServing: 2.8,
//     popularity: 88
//   },
//   {
//     id: 5,
//     title: "Middle Eastern Hummus",
//     image: "./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
//     readyInMinutes: 10,
//     servings: 4,
//     sourceUrl: "https://example.com/middle-eastern-hummus",
//     diets: ["vegan", "gluten-free"],
//     cuisine: "Middle Eastern",
//     ingredients: [
//       "chickpeas",
//       "tahini",
//       "garlic",
//       "lemon juice",
//       "olive oil"
//     ],
//     pricePerServing: 1.5,
//     popularity: 95
//   },
//   {
//     id: 6,
//     title: "Quick Avocado Toast",
//     image: "./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
//     readyInMinutes: 5,
//     servings: 1,
//     sourceUrl: "https://example.com/quick-avocado-toast",
//     diets: ["vegan"],
//     cuisine: "Mediterranean",
//     ingredients: [
//       "bread",
//       "avocado",
//       "lemon juice",
//       "salt"
//     ],
//     pricePerServing: 2.0,
//     popularity: 90
//   },
//   {
//     id: 7,
//     title: "Beef Stew",
//     image: "./assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
//     readyInMinutes: 90,
//     servings: 5,
//     sourceUrl: "https://example.com/beef-stew",
//     diets: [],
//     cuisine: "European",
//     ingredients: [
//       "beef chunks",
//       "potatoes",
//       "carrots",
//       "onion",
//       "garlic",
//       "tomato paste",
//       "beef broth",
//       "red wine",
//       "bay leaves",
//       "thyme",
//       "salt",
//       "black pepper",
//       "butter",
//       "flour",
//       "celery",
//       "mushrooms"
//     ],
//     pricePerServing: 5.5,
//     popularity: 80
//   }
// ]

//Varibles for fetching data
