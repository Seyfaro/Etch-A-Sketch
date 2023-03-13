//Connect to grid in HTML, assign it to the 'container' variable
const container = document.getElementById('grid-container');

// Generate a random color
let randomColor = Math.floor(Math.random()*16777215).toString(16);

document.body.addEventListener("click", function(event) {
    // Check if the clicked element is a div with class name "div.grid-cell"
    if (event.target.matches("div.grid-cell")) {
      // Modify the selected div
      event.target.style.backgroundColor = '#' + randomColor;
    }
  });

//Create the grid
//Outer loop: uses 'i' to loop 16 times, i.e 16 x16 = 256 cells
//Inner loop: creates 16 grid cells, to be looped 16 times
for (let i =0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        //Create a single cell to be repeated the 16 times
        //Each cell should be a div created in the HTML 
        let cell = document.createElement('div');
        //Adds a CSS class to the created div. This can be selected in the styles.cc file to style each cell
        cell.classList.add('grid-cell');
        //gridRow and gridColumn determine which row or column the cell will be placed in. The +1 is because grids start from 1 in CSS and not 0
        cell.style.gridRow = i + 1;
        cell.style.gridColumn = j + 1;

        //Insert cell into container
        container.appendChild(cell);


    }
}

