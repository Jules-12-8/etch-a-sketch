const gridWidth = 600;
const axisSize = 4;

const rootElem = document.querySelector(":root");

function setCellSize(gridWidth, axisSize) {
    //600 is the size of the container, make sure it match the css value
    rootElem.style.setProperty("--cellSize", (gridWidth / axisSize) + "px");
}

setCellSize(gridWidth, axisSize);


const gridContainer = document.querySelector("#grid-container");

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const columnDiv = document.createElement("div");
        columnDiv.classList.add(`column-${i}`);
        gridContainer.appendChild(columnDiv);

        const column = document.querySelector("div.column-" + i);

        for (let i = 0; i < size; i++) {
            const div = document.createElement("div");
            div.classList.add("grid-cell");
            column.appendChild(div);
        }
    }
}

createGrid(axisSize);


function createDrawListeners() {
    const gridCells = document.querySelectorAll(".grid-cell");

    gridCells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.style.background = "coral"
        });
    });
}

createDrawListeners();


function computeRandValue() {
    return Math.trunc(Math.random() * 256);
}

function getRandRgbValue() {
    return "rgb("+computeRandValue()+","+computeRandValue()+","+computeRandValue()+")";
}

function createRandDrawListeners() {
    const gridCells = document.querySelectorAll(".grid-cell");

    gridCells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.style.background = getRandRgbValue();
        });
    });
}


const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    const gridCells = document.querySelectorAll(".grid-cell");

    gridCells.forEach((cell) => cell.style.background = "lightgrey");
});


const sizeControl = document.querySelector("#size-control");

//Populate the select element with the options
for (let i = 4; i <= 124; i = (i*1.5 + (i*1.5%2))) {
    // console.log(i);
    const option = document.createElement("option");

    option.value = i;
    option.text = i;
    sizeControl.appendChild(option);
}


const sizeOption = document.querySelectorAll("option");

sizeOption.forEach((option) => {
    option.addEventListener("click", () => {
        const cellsDivs = document.querySelectorAll("div[class^='column']");

        cellsDivs.forEach((col) => {
            col.remove();
        });

        const size = sizeControl.value;

        setCellSize(gridWidth, size);
        createGrid(size);
        createDrawListeners();
    });
})