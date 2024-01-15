//nbrOfCells must be a square number (16 25 36 49 64 81 100)
const nbrOfCells = 16;
const axisSize = Math.sqrt(nbrOfCells); 

const gridContainer = document.getElementById("grid-container");

for (let i = 0; i < axisSize; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add(`column-${i}`);
    gridContainer.appendChild(columnDiv);

    const column = document.querySelector("div.column-"+i);

    for (let i = 0; i < axisSize; i++) {
        const div = document.createElement("div");
        console.log(div);
        div.classList.add("grid-cell");
        column.appendChild(div);
    }
}