const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");

myButton.onclick = clickFunction;

function clickFunction() {
  myParagraph.innerHTML = "My new paragraph";
}
