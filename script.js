const container = document.querySelector("#container");
for (i = 1; i <= 16; i++) {
  for (j = 1; j <= 16; j++) {
    const div = document.createElement("div");
    div.id = `${i}-${j}`;
    div.classList.add("box");
    container.appendChild(div);
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
