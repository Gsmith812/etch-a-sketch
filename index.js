// Grab container div for grid and append initial default grid of 16x16 squares

const gridContainer = document.querySelector('.gridContainer');
const gridSlider = document.querySelector('.gridSlider');
const sizeLabel = document.querySelector('label');


//set default value of grid size to 16x16 and label text to match
gridSlider.value = 16;
sizeLabel.innerText = `${gridSlider.value} x ${gridSlider.value}`

// Create a handler function to handle changes to gridSlider value



gridSlider.addEventListener('change', e => {
    gridSlider.value = e.target.value;
    clearGrid();
    createGrid(gridSlider.value);
})

gridSlider.addEventListener('mousemove', e => {
    gridSlider.value = e.target.value;
    sizeLabel.innerText = `${gridSlider.value} x ${gridSlider.value}`
})

// create a function to create the intial 16x16 grid

function createGrid(gridSliderVal) {
    gridSize = gridSliderVal ** 2;
    
    // create loop to append a new gridItem into the container for the size of the grid
    for(let i = 0; i < gridSize; i++){
        const gridItem = document.createElement('div');
    
        let flexBasisPct = (1 / gridSliderVal) * 100;

        gridItem.classList.add('gridItem');
        gridItem.setAttribute('style', `flex: 1 1 ${flexBasisPct}%`);
        gridContainer.append(gridItem);
    }

    const squares = document.querySelectorAll('.gridItem');

    // add event listener to each individual square in the grid

    squares.forEach(square => {
        square.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = 'black';
        })
    });
}

// create function to clear grid when slider value changes

function clearGrid(){
    while(gridContainer.firstChild) {
        gridContainer.firstChild.remove();
    }
}

// Create default grid

createGrid(gridSlider.value);


