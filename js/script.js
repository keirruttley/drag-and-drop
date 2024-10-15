// define sources for each character choice
const imageSources = ["assets/arbiter.webp", "assets/cortana.png", "assets/master_chief.png"];

// define altenative text for each character choice

const altSources = ["Initial Halo arbiter","Initial Halo cortana","Initial Halo masterchief" ];

// define text for paragraph for each character choice
const characterSource = ["Arbiter", "Cortana", "Masterchief"];

// define HTML Element constants
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
  myParagraph.innerHTML = "I am on character " + characterCounter;

  // find image related to specific character counter
  console.log("Testing if character counter is one");
  if (characterCounter === 1) {
    characterImage.src = imageSources [0];
    characterImage.alt = altSources [0];
    myParagraph.innerHTML = characterSource [0];
    return;
  }

  console.log("Testing if character counter is two");
  if (characterCounter === 2) {
    characterImage.src = imageSources [1];
    characterImage.alt = altSources [1];
    myParagraph.innerHTML = characterSource [1];
    return;
  }

  console.log("Testing if character counter is three");
  if (characterCounter === 3) {
    characterImage.src = imageSources [2];
    characterImage.alt = altSources [2];
    myParagraph.innerHTML = characterSource [2];
    return;
  }

  console.log("No more testing to do");
}

myButton.onclick = clickFunction;
