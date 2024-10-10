const imageOne = "assets/chikorita.jpeg";
const imageTwo = "assets/cyndaquil.png";
const imageThree = "assets/totodile.png";

const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img");

let characterCounter = 1;

function clickFunction() {
  console.log("============== NEW TESTING STARTED ==============");

  characterCounter = characterCounter + 1;

  if (characterCounter > 3) {
    characterCounter = 1;
  }

  myParagraph.innerHTML = "I am on character " + characterCounter;

  console.log("Testing if character counter is one");
  if (characterCounter === 1) {
    characterImage.src = imageOne;
    return;
  }

  console.log("Testing if character counter is two");
  if (characterCounter === 2) {
    characterImage.src = imageTwo;
    return;
  }

  console.log("Testing if character counter is three");
  if (characterCounter === 3) {
    characterImage.src = imageThree;
    return;
  }

  console.log("No more testing to do");
}

myButton.onclick = clickFunction;
