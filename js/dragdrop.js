const energySword = document.getElementById("complement-one");
const dropZone = document.getElementById ("character-img");

function onDrop(event) { 
    // bring energy sword to the postition (clientX clientY)
    energySword.style.left = event.clientX + "px";
    energySword.style.top = event.clientY + "px";
    console.log("Element has been dropped");
}

function onDragOver(event) {
    event.preventDefault();
    console.log("Something is being dragged over me!");
}

function onDragStart() {
    console.log ("I'm being dragged")
}

dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;
energySword.ondragstart = onDragStart;
