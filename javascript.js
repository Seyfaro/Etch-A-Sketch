//Connect to grid in HTML
const container = document.getElementById('grid-container');

//Create the grid
for (let i =0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        //Create a single cell to be repeated the 16 times
        let cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.style.gridRow = i + 1;
        cell.style.gridColumn = j + 1;

        //Insert cell into container
        container.appendChild(cell);
    }
}