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
  "x": { "msg": "It's a wall.", "type": "tile-x" },
}

let infoPanel = null;

function displayMapInfo(msg) {
  infoPanel.innerText = msg;
}

function onGridClick(event) {
  const target = event.target;
  const tileX = target.attributes["x"];
  const tileY = target.attributes["y"]

  const tile = map[tileY][tileX];
  const p = props[tile];

  if (p != null) {
    const type = p["type"];
    const msg = p["msg"];

    if (type != null) {
      target.className = type;
      target.innerText = tile;
    }

    if (msg != null) {
      displayMapInfo(msg);
    }

  } else {
    target.className = "tile-nothing";
    target.innerText = ".";
    displayMapInfo("...nothing.");
  }

  console.log(`Handle click at: <${tileX}, <${tileY}>`);
}


function populateGrid() {
  const buttonGrid = document.getElementById("map-display");
  const mapDim = 16;

  for (i = 0; i < 256; i++) {
    const currentDiv = document.createElement("div");

    const mapX = Math.floor(i % mapDim);
    const mapY = Math.floor(i / mapDim);

    const tile = map[mapY][mapX];

    currentDiv.className = "tile-hidden";
    currentDiv.innerText = "#";
    currentDiv.attributes["x"] = mapX;
    currentDiv.attributes["y"] = mapY;

    currentDiv.addEventListener("click", onGridClick, false);
    buttonGrid.appendChild(currentDiv);
  }
}


function main() {
  infoPanel = document.getElementById("map-info");
  populateGrid();
}
