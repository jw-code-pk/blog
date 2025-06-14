window.onload = main;

function onGridClick(event) {
  event.target.className = "container-element-01"
}

function populateGrid() {
  const buttonGrid = document.getElementById("button-grid");

  for (i = 0; i < 256; i++) {
    const currentDiv = document.createElement("div");
    currentDiv.className = "container-element-hidden";
    currentDiv.addEventListener("click", onGridClick, false);
    buttonGrid.appendChild(currentDiv);
  }
}


function main() {
  populateGrid();
}
