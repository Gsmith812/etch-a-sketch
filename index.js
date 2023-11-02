const gridContainer = document.querySelector('.gridContainer');
const gridSlider = document.querySelector('.gridSlider');
const sizeLabel = document.querySelector('label');
const fillColor = document.querySelector('.fillColor');
const clearBtn = document.querySelector('.clear');
const rainbowBtn = document.querySelector('.rainbow');
const eraserBtn = document.querySelector('.eraser');

//set default value of grid size to 16x16 and label text to match
gridSlider.value = 16;
sizeLabel.innerText = `${gridSlider.value} x ${gridSlider.value}`
fillColor.value = '#000000';

// Setup a toggle for selected controls with default to fill color

let selectedCtrl = fillColor;

// Create a handler function to handle changes to gridSlider value


gridSlider.addEventListener('change', e => {
    gridSlider.value = e.target.value;
    clearGrid();
})

gridSlider.addEventListener('mousemove', e => {
    gridSlider.value = e.target.value;
    sizeLabel.innerText = `${gridSlider.value} x ${gridSlider.value}`
});


// Add Event listeners to toggle between selected control options

fillColor.addEventListener('click', () => selectedCtrl = fillColor);

rainbowBtn.addEventListener('click', () => selectedCtrl = rainbowBtn);

eraserBtn.addEventListener('click', () => selectedCtrl = eraserBtn);

clearBtn.addEventListener('click', clearGrid);


// Create function to randomize an rgb color

function getRandomColor() {
    const randomRbg = () => Math.floor(Math.random() * 255);

    return `rgb(${randomRbg()}, ${randomRbg()}, ${randomRbg()})`;
}

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
            if(selectedCtrl === fillColor) {
                e.target.style.backgroundColor = fillColor.value;
            } else if (selectedCtrl === rainbowBtn) {
                e.target.style.backgroundColor = getRandomColor();
            } else {
                e.target.style.backgroundColor = '#FFFFFF';
            }
            
        })
    });
}

// create function to clear grid when slider value changes

function clearGrid(){
    while(gridContainer.firstChild) {
        gridContainer.firstChild.remove();
    }
    createGrid(gridSlider.value);
}

// Create default grid

createGrid(gridSlider.value);


