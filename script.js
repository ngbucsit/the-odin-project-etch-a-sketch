const container = document.querySelector("#container");
for (i = 1; i <= 16; i++) {
  for (j = 1; j <= 16; j++) {
    const div = document.createElement("div");
    div.id = `${i}-${j}`;
    div.classList.add("box");
    container.appendChild(div);
  }
}
