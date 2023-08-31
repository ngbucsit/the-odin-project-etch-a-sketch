let gridSize = 0;
const INIT_GRID_SIZE = 16;

const container = document.querySelector("#container");

function calcFlexBasis(size) {
  return 800 / size;
}

function drawGrid(size) {
  gridSize = size;
  container.textContent = "";
  for (i = 1; i <= gridSize; i++) {
    for (j = 1; j <= gridSize; j++) {
      const div = document.createElement("div");
      div.id = `${i}-${j}`;
      div.classList.add("box");
      container.appendChild(div);
      div.style["flex"] = `1 0 ${calcFlexBasis(gridSize)}px`;
    }
  }
  const boxes = document.querySelectorAll(".box");

  let isMouseDown = false;

  boxes.forEach((box) => {
    box.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isMouseDown = true;
    });
    box.addEventListener("mousemove", (e) => {
      e.preventDefault();
      if (isMouseDown) {
        e.target.style["background-color"] = "#000";
      }
    });
  });

  window.addEventListener("mouseup", (e) => {
    isMouseDown = false;
  });
}

drawGrid(INIT_GRID_SIZE);

const gridSizeButton = document.querySelector("#grid-size-btn");
gridSizeButton.addEventListener("click", () => {
  gridSize = +prompt("Enter grid size:", 16);
  drawGrid(gridSize);
});

const plusButton = document.querySelector("#plus");
plusButton.addEventListener("click", () => {
  drawGrid(++gridSize);
});

const minusButton = document.querySelector("#minus");
minusButton.addEventListener("click", () => {
  drawGrid(--gridSize);
});
