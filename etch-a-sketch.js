const axisSize = 12;
const nbrOfCells = axisSize**2;

const rootElem = document.querySelector(":root");
//600 is the size of the container, make sure it match the css value
rootElem.style.setProperty("--cellSize", (600 / axisSize)+"px");



const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < axisSize; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add(`column-${i}`);
    gridContainer.appendChild(columnDiv);

    const column = document.querySelector("div.column-" + i);

    for (let i = 0; i < axisSize; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-cell");
        column.appendChild(div);
    }
}



const gridCells = document.querySelectorAll(".grid-cell");

gridCells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        cell.style.background = "coral"
    });
});


const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    gridCells.forEach((cell) => cell.style.background = "lightgrey");
});