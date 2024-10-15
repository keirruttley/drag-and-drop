// define sources for each character choice
const imageSources = ["assets/arbiter.webp", "assets/cortana.png", "assets/master_chief.png"];

// define altenative text for each character choice
const altSources = ["Initial Halo arbiter","Initial Halo cortana","Initial Halo masterchief" ];

// define text for paragraph for each character choice
const characterSource = ["Arbiter", "Cortana", "Masterchief"];

// define HTML Element constants - character selection
const characterButton = document.getElementById("character-button");
const characterText = document.getElementById("character-text");
const characterImage = document.getElementById("character-img");

// define HTML elements constants - character naming
const characterNameInput = document.getElementById ("name-change-input");
const changeNameButton = document.getElementById("button-change-name");

// store which character is currently being displayed
let characterCounter = 1;

/**
 * Update character counter and display next character.
 * Sets counter back to 1 if 3 has been surpassed.
 * @returns when character is chosen
 */

function clickFunction() {
  // update character counter
  characterCounter = characterCounter + 1;

  // if beyond 3 -> set character counter to 1
  if (characterCounter > 3) {
    characterCounter = 1;
  }

  // update paragraph text with new character
  characterText.innerHTML = "I am on character" + characterCounter;


  // find image related to specific character
  // Images are 0,1,2 so image sources -1 to each character counter to select correct image
  characterImage.src = imageSources[characterCounter - 1];
  characterImage.alt = altSources[characterCounter - 1];
  characterText.innerHTML = characterSource[characterCounter - 1];
}

/** 
 * update character name to watch is stored in the input field
*/

function changeNameButtonFunction () {
  characterText.innerHTML = characterNameInput.value;
}


// Assignment area for functions
characterButton.onclick = clickFunction;
changeNameButton.onclick = changeNameButtonFunction;