const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img");

let clickCounter = 0;

function clickFunction() {
  clickCounter = clickCounter + 1;

  characterImage.src = "assets/cyndaquil.png";
  myParagraph.innerHTML = "I have been clicked " + clickCounter + " time(s)";
}

myButton.onclick = clickFunction;
