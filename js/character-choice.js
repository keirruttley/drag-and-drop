const image = document.getElementById("character");
const characterName = document.getElementById("character-name");
const button = document.getElementById("my-button");
const submitButton = document.getElementById("submit-button");
const inputField = document.getElementById("character-input");


const imageOne = {
  src: "assets/characters/bulbasaur.avif",
  alt: "pokemon Bulbasaur",
  defaultName: "Bulbasaur",
};

const imageTwo = {
  src: "assets/characters/charmander.avif",
  alt: "pokemon Charmander",
  defaultName: "Charmander",
};

const imageThree = {
  src: "assets/characters/squirtle.avif",
  alt: "pokemon Squirtle",
  defaultName: "Squirtle",
};

function changeText() {
  paragraph.innerHTML = "New Text";
}

let index = 0;

function onclick() {
  // add one more tho the number of button clicks
  index = index + 1;

  if (index == 1) {
    image.src = imageOne.src;
    image.alt = imageOne.alt;
    characterName.innerHTML = imageOne.defaultName;
  }
  if (index == 2) {
    image.src = imageTwo.src;
    image.alt = imageTwo.alt;
    characterName.innerHTML = imageTwo.defaultName;
  }
  if (index == 3) {
    index = 0;
    image.src = imageThree.src;
    image.alt = imageThree.alt;
    characterName.innerHTML = imageThree.defaultName;
  }
}

function onSubmitButton() {
  characterName.innerHTML = inputField.value;
}

button.onclick = onclick;
submitButton.onclick = onSubmitButton;
