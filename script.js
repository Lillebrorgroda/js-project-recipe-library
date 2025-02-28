
//Box for messages to the user
const messageBox = document.getElementById("more-filter")

//Varibles
const mediterraneanFood = document.getElementById("mediterranean")
const middleEasternFood = document.getElementById("middle-eastern")
const asianFood = document.getElementById("asian")
const italianFood = document.getElementById("italian")
const mexicanFood = document.getElementById("mexican")
const ascendingButton = document.getElementById("ascending")
const descendingButton = document.getElementById("descending")

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



// Event listeners for sorting on time
ascendingButton.addEventListener("click", () => {
  selectedSorting("ascending", ascendingButton);
});

descendingButton.addEventListener("click", () => {
  selectedSorting("descending", descendingButton);
});


// Event listeners for kitchen filter
mediterraneanFood.addEventListener("click", () => {
  console.log("Button  for Mediterranean food is clicked")
  selectedFood("mediterranean")
  mediterraneanFood.classList.toggle("selectedButton")
})

middleEasternFood.addEventListener("click", () => {
  console.log("Button for Middle Eastern food is clicked")
  selectedFood("middle-eastern")
  middleEasternFood.classList.toggle("selectedButton")
})

asianFood.addEventListener("click", () => {
  console.log("Button for Asian food is clicked")
  selectedFood("asian")
  asianFood.classList.toggle("selectedButton")
})

italianFood.addEventListener("click", () => {
  console.log("Button for Italian food is clicked")
  selectedFood("italian")
  italianFood.classList.toggle("selectedButton")
})

mexicanFood.addEventListener("click", () => {
  console.log("Button for mexican food is clicked")
  selectedFood("mexican")
  mexicanFood.classList.toggle("selectedButton")

})
