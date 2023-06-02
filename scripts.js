/**ETCH A SKETCH
 * This page will be a basic etch a sketch with 10 randomized colors options.  Future options will be added
*/

//ESTABLISHING VARS
//First color is Black
let chosenColor = "black";

//Checks if mouse is pressed for the drawing function
let mousePressedDown = false;
document.addEventListener("mousedown", () => {mousePressedDown = true;});
document.addEventListener("mouseup", () => {mousePressedDown = false;});

//Initial size of drawing grid.  Can be changed to a maximum of 100
let squareChoice  = 16;

//Establish our body for appending
const body = document.querySelector('body');

//BUTTON DIV
const buttonDiv = document.createElement("div");
buttonDiv.classList.add("buttondiv")
body.appendChild(buttonDiv)

//NEW SIZE BUTTON
//Create the New Size Grid Button
const newButton = document.createElement('button');
newButton.textContent = "New Size Grid?";
newButton.style.marginBottom = '16px';
buttonDiv.appendChild(newButton);
//Setup newSizeButton event and function
newButton.addEventListener("click", newSize)

//RESET BUTTON
//Create the reset button
const resetButton = document.createElement('button');
resetButton.textContent = "RESET";
resetButton.style.marginBottom = '16px';
buttonDiv.appendChild(resetButton);
//Setup reset event
resetButton.addEventListener("click", resetGrid)

//Create the canvas container to have color options on the 
//Right of the canvas
const canvasContainer = document.createElement('div')
canvasContainer.classList.add('canvasContainer')
body.appendChild(canvasContainer)

const container = document.createElement('div');
container.classList.add("container")
canvasContainer.appendChild(container);

//Update is called to regenerate the grid at the desired size.  This runs on load to draw original 16 x 16 grid
update();
function update() {
    for (let i = 0; i < squareChoice; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('divrow');
    for (let j = 0; j < squareChoice; j++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newRow.appendChild(newSquare);
    }
    container.appendChild(newRow);
    }
    //Setup the drawing function for each square of the grid
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener("mousemove", paint);
    })
}


//Function for random RGB values
function getRandomColor() {
    return Math.floor(Math.random() * 255);
}

//Create the colorContainer div and populate with random colors
const colorContainer = document.createElement('div');
colorContainer.classList.add("colorcontainer")
for (let i = 0; i < 10; i++){
    const colorSquare = document.createElement('div');
    colorSquare.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    colorSquare.classList.add("colorsquare")
    colorContainer.appendChild(colorSquare);
}
canvasContainer.appendChild(colorContainer)

//Setup color chooser to change draw color to new color
const colors = document.querySelectorAll('.colorsquare');
colors.forEach((color) => {
    color.addEventListener("click", newColorChosen);
})

function newColorChosen() {
    chosenColor = this.style.backgroundColor;
}



//Colour's the square that is hovered over
function paint() {
        if (mousePressedDown == true) {
            this.style.backgroundColor = chosenColor;
}}



//New size button with number < 100 validation
function newSize() {
    let choice = 101;
    while (choice > 100){
    choice = prompt("Enter new size for grid.")
    if (choice > 100){
        alert("Please chose a number less than 100")
    }
    }
    squareChoice = choice;
    container.innerHTML  = "";
    update();
    
}

//Reset the grid to all white
function resetGrid() {
    container.innerHTML = "";
    update()
}