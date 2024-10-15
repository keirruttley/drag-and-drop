// define sources for each character choice
const imageSources = ["assets/arbiter.webp", "assets/cortana.png", "assets/master_chief.png"];

// define altenative text for each character choice
const altSources = ["Initial Halo arbiter","Initial Halo cortana","Initial Halo masterchief" ];

// define text for paragraph for each character choice
const characterSource = ["Arbiter", "Cortana", "Masterchief"];

// define HTML Element constants
const submimtButton = document.getElementById("button-change-name");
const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img");

// store which character is currently being displayed
let characterCounter = 1;

/**
 * Update character counter and display next character.
 * Sets counter back to 1 if 3 has been surpassed.
 * @returns when character is chosen
 */

function clickFunction() {
  console.log("============== NEW TESTING STARTED ==============");

  // update character counter
  characterCounter = characterCounter + 1;

  // if beyond 3 -> set character counter to 1
  if (characterCounter > 3) {
    characterCounter = 1;
  }

  // update paragraph text with new character
  myParagraph.innerHTML = "I am on character" + characterCounter;


  // find image related to specific character
  characterImage.src = imageSources[characterCounter - 1];
  characterImage.alt = altSources[characterCounter - 1];
  myParagraph.innerHTML = characterSource[characterCounter - 1];
}

myButton.onclick = clickFunction;

