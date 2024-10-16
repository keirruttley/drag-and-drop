// store HTML elements of class complement in complents
const energySword = document.getElementById("complement-one");

// drop zone is the area where complements can be dropped
const dropZone = document.getElementById ("character-img");

// offsetX and offsetY store the initial offset from clicking on the dragged image
let offsetX = 0;
let offsetY = 0;

// draggedImage store the curretly dragged image
let draggedImage = undefined;

/**
 * when something is dropped in the dropzone, update the draggedImage style accordingly
 * @param {Event} event stores information related to the current drop event
 */

function onDrop(event) { 
    // bring energy sword to the postition (clientX clientY)
    // calculate initial offset (offsetX offsetY)
    energySword.style.left = event.clientX - offsetX + "px";
    energySword.style.top = event.clientY - offsetY + "px";
    console.log("Element has been dropped");
}

/**
 * prevent the event default to allow dropping to happen
 * @param {Event} event stores information related to the current dragover event
 */

function onDragOver(event) {
    event.preventDefault();
    console.log("Something is being dragged over me!");
}

/**
 * store draggedImage as the event target and compute initial offsetX and offsetY
 * @param {Event} event stores information related to the current dragover event
 */
function onDragStart(event) {
    console.log ("I'm being dragged")

    draggedImage = event.target;

    const style = window.getComputedStyle(draggedImage);

    offsetX = event.clientX - parseInt(style.left);
    offsetX = event.clientY - parseInt(style.left);
}


dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;

for(let complement of energySword) {
    energySword.ondragstart = onDragStart;
    energySword.onDragOver = onDragOver;
    energySword.ondrop = onDrop;
}
// energySword.ondragstart = onDragStart;
