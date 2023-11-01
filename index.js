// Grab container div for grid and append initial default grid of 16x16 squares

const gridContainer = document.querySelector('.gridContainer');

//set default value of grid size to 16x16

let gridHeight = 16;
let gridWidth = 16;

// create a function to create the intial 16x16 grid

function createGrid(gridHeight, gridWidth) {
    gridSize = gridHeight * gridWidth;
    
    // create loop to append a new gridItem into the container for the size of the grid
    for(let i = 0; i < gridSize; i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        let flexBasisPct = (1 / gridWidth) * 100;
        gridItem.setAttribute('style', `flex: 1 1 ${flexBasisPct}%`);
        gridContainer.append(gridItem);
    }
}

createGrid(gridHeight, gridWidth);
