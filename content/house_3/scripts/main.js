window.onload = main


function main() {
  const buttonGrid = document.getElementById("button-grid");

  for (i = 0; i < 256; i++) {
    const currentDiv = document.createElement("div");
    buttonGrid.appendChild(currentDiv);
  }
}
