/**
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content Made by Jacob!!';

container.appendChild(content);
 */


const newDiv = document.createElement('button');
const body = document.querySelector('body');
newDiv.textContent = "New Size Grid?";
body.appendChild(newDiv);
let squareChoice  = 16;
const newSizeButton  = document.querySelector('button');
newSizeButton.style.marginBottom = '16px';
newSizeButton.addEventListener("click", newSize)
const container = document.createElement('div');
body.appendChild(container);
let chosenColor = "red";

update();
/*16 x 16 grid of square divs into container*/

function getRandomColor() {
    return Math.floor(Math.random() * 255);
}

const colorContainer = document.createElement('div');
colorContainer.classList.add("colorcontainer")
for (let i = 0; i < 10; i++){
    const colorSquare = document.createElement('div');
    colorSquare.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    colorSquare.classList.add("colorsquare")
    colorContainer.appendChild(colorSquare);
}

body.appendChild(colorContainer)

const colors = document.querySelectorAll('.colorsquare');
colors.forEach((color) => {
    color.addEventListener("click", newColorChosen);
})

function newColorChosen() {
    chosenColor = this.style.backgroundColor;
}


//Used to update the size of the box.  Also used on 
//first load to get the initial size
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

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
    square.addEventListener("mouseover", hovering);
    })
}

//Colour's the square that is hovered over
function hovering() {
    this.style.backgroundColor = chosenColor;
}

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