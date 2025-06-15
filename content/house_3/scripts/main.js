window.onload = main;

const map = [
  "................",
  "vvxxnx..........",
  "vvxoox..........",
  "vvxoox..........",
  "xHxooxxxxnxxxx..",
  "xoooooooooooox..",
  "xxnxxxxoxxx.xx..",
  "x....xooox...x..",
  "x....xooox...x..",
  "x....x...x...x..",
  "x....x...x...x..",
  "xxxxxx...xxxxxxx",
  "..x............x",
  "..x............x",
  "..xxxxxxxxxxxxxx",
  "................",
]

const props = {
  "x": { "alert": "hi!", "type": "tile-x"  }
}


function onGridClick(event) {
  const target = event.target;
  const tileX = target.attributes["x"];
  const tileY = target.attributes["y"]

  const tile = map[tileY][tileX];
  const p = props[tile];

  if (p != null) {
    const type = p["type"];

    if (type != null) {
      target.className = type; 
    }
  } else {
    target.className = "tile-nothing";
  }

  console.log(`Handle click at: <${tileX}, <${tileY}>`);
}


function populateGrid() {
  const buttonGrid = document.getElementById("button-grid");
  const mapDim = 16;

  for (i = 0; i < 256; i++) {
    const currentDiv = document.createElement("div");

    const mapX = Math.floor(i % mapDim);
    const mapY = Math.floor(i / mapDim);

    const tile = map[mapY][mapX];

    currentDiv.className = "tile-hidden";
    currentDiv.attributes["x"] = mapX;
    currentDiv.attributes["y"] = mapY;

    currentDiv.addEventListener("click", onGridClick, false);
    buttonGrid.appendChild(currentDiv);
  }
}


function main() {
  populateGrid();
}
