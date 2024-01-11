const gridContainer = document.getElementById("grid-container");

for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.className = "grid-cell";

    gridContainer.appendChild(div);
}