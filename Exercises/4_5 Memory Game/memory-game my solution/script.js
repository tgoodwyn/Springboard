const gameContainer = document.getElementById("game");
let card1 = null
let card2 = null
let cardsCompleted = 0
let freezeGame = false

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];


// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}



// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card

function createDivsForColors(colorArray) {
  let counter = colorArray.length;

  for (let i=0; i < counter; i++) {
    const newDiv = document.createElement("div");

    newDiv.dataset.cardColor = colorArray[i]
    newDiv.dataset.visible = false
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);

  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  if (freezeGame) return;
  let currentCard = event.target
  if (JSON.parse(currentCard.dataset.visible)) return;

  currentCard.dataset.visible = true
  currentCard.style.backgroundColor = currentCard.dataset.cardColor
  if (!card1) {
    card1 = currentCard;
    return
  }

  card2 = currentCard;

  if (card1.dataset.cardColor === card2.dataset.cardColor) {
    cardsCompleted += 2
    card1.removeEventListener("click", handleCardClick)
    card2.removeEventListener("click", handleCardClick)
    card1 = null
    card2 = null
  } else {
    freezeGame = true
    setTimeout(function () {
      card1.dataset.visible = false
      card2.dataset.visible = false
      card1.style.backgroundColor = ""
      card2.style.backgroundColor = ""
      card1 = null
      card2 = null
      freezeGame = false
    }, 1000)
  }

  

  if (cardsCompleted == COLORS.length) {
    freezeGame = true
    setTimeout(function() {
      window.alert("You won!")
    }, 250)
  }

  console.log("you just clicked", event.target);
  
}

let shuffledColors = shuffle(COLORS);

// when the DOM loads
createDivsForColors(shuffledColors);
