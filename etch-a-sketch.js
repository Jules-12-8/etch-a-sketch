const nbrOfCells = 16;
const axisSize = Math.sqrt(nbrOfCells); 

const gridContainer = document.getElementById("grid-container");

for (let i = 0; i < axisSize; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add(`row-${i}`);
    gridContainer.appendChild(rowDiv);

    const row = document.querySelector("div.row-"+i);

    for (let i = 0; i < axisSize; i++) {
        const div = document.createElement("div");
        console.log(div);
        div.classList.add("grid-cell");
        row.appendChild(div);
    }
}