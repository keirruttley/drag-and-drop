const draggable = document.getElementById("complement-one");
const dropZone = document.getElementById("character-img");

function onDrop(event) {
  draggable.style.left = event.clientX + "px";
  draggable.style.top = event.clientY + "px";
}

function onDragOver(event) {
  event.preventDefault();
}

function onDragStart() {
}

draggable.ondragstart = onDragStart;
dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;
