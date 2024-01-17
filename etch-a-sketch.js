const gridWidth = 600;
const axisSize = 4;
let drawStyle = "monochromatic";

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


function computeRandValue() {
    return Math.trunc(Math.random() * 256);
}

function getRandRgbValue() {
    return "rgb(" + computeRandValue() + "," + computeRandValue() + "," + computeRandValue() + ")";
}

function darkenRgb(previousValue) {
    let value = previousValue.slice(4, 7);
    if (isNaN(value.at(1))) {
        return previousValue;
    } else if (isNaN(value.at(2))) {
        value = value.slice(0, 2);
        value = +value - 21;
    } else {
        value = +value - 21;
    }
    return `rgb(${value}, ${value}, ${value})`;
}
    

function createDrawListeners(drawStyle) {
    const gridCells = document.querySelectorAll(".grid-cell");

    switch (drawStyle) {
        case "monochromatic":
            gridCells.forEach((cell) => {
                cell.addEventListener("mouseenter", () => {
                    cell.style.background = "coral"
                });
            });
            break;
        case "rainbow":
            gridCells.forEach((cell) => {
                cell.addEventListener("mouseenter", () => {
                    cell.style.background = getRandRgbValue();
                });
            });
            break;
        case "shades":
            gridCells.forEach((cell) => {
                cell.addEventListener("mouseenter", () => {
                    const style = window.getComputedStyle(cell);
                    cell.style.background = darkenRgb(style.getPropertyValue("background-color"));
                });
            });
            break;
    }
}

createDrawListeners(drawStyle);


//UI

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    const gridCells = document.querySelectorAll(".grid-cell");

    gridCells.forEach((cell) => cell.style.background = "lightgrey");
});

const monochromaticButton = document.querySelector("#monochromatic");
monochromaticButton.addEventListener("click", () => {
    drawStyle = "monochromatic";
    changeParameters();
});

const rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", () => {
    drawStyle = "rainbow";
    changeParameters();
});

const shadesButton = document.querySelector("#shades");
shadesButton.addEventListener("click", () => {
    drawStyle = "shades";
    changeParameters();
});

const sizeControl = document.querySelector("#size-control");

//Populate the select element with the options
for (let i = 4; i <= 124; i = (i * 1.5 + (i * 1.5 % 2))) {
    const option = document.createElement("option");

    option.value = i;
    option.text = i;
    sizeControl.appendChild(option);
}

sizeControl.addEventListener("change", () => changeParameters());


function changeParameters() {
    const cellsDivs = document.querySelectorAll("div[class^='column']");

    cellsDivs.forEach((col) => {
        col.remove();
    });

    const size = sizeControl.value;

    setCellSize(gridWidth, size);
    createGrid(size);
    createDrawListeners(drawStyle);
}