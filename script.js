// När jag trycker på Mediterranean så ska det komma upp en text i placeholder för filter och sortering. Knappen ska också byta färg till mörk blå.

const messageBox = document.getElementById("more-filter") // En plats att skriva meddelande till användaren.

//variabler som finns som alternativ till filter
const mediterraneanFood = document.getElementById("mediterranean")
const middleEasternFood = document.getElementById("middle-eastern")
const asianFood = document.getElementById("asian")
const italianFood = document.getElementById("italian")
const mexicanFood = document.getElementById("mexican")




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

  messageBox.innerHTML = `<h2>${declarationOfFoodChoice}</h2>`
}



mediterraneanFood.addEventListener("click", () => {
  console.log("Button  for Mediterranean food is clicked")
  selectedFood("mediterranean")
})

middleEasternFood.addEventListener("click", () => {
  console.log("Button for Middle Eastern food is clicked")
  selectedFood("middle-eastern")
})

asianFood.addEventListener("click", () => {
  console.log("Button for Asian food is clicked")
  selectedFood("asian")
})

italianFood.addEventListener("click", () => {
  console.log("Button for Italian food is clicked")
  selectedFood("italian")
})

mexicanFood.addEventListener("click", () => {
  console.log("Button for mexican food is clicked")
  selectedFood("mexican")
})
