const container = document.getElementById("container");
const clearBtn = document.getElementById("clear");
const adjustSizeBtn = document.getElementById("size");

createDiv(10);

//create an n x n grid of sqaures
function createDiv(sizeOfSquare) {
    container.innerHTML = '';
    //each square is curently 20px x 20px
    container.style.gridTemplateColumns = `repeat(${sizeOfSquare}, 20px)`;
    container.style.gridTemplateRows = `repeat(${sizeOfSquare}, 20px)`;
    for (let i=0; i<(sizeOfSquare*sizeOfSquare); i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "cell"); 
        div.setAttribute("id", i);   
        container.appendChild(div);
    }
    randomColor();
}

//change size of n x n grid according to user input
function adjustSize() {
    let userInputSize = window.prompt("Create a square grid by typing in a number");
    //confirm if user input is a positive integer
    if (!Number.isInteger(userInputSize) || userInputSize < 0) {
        window.confirm("Please enter a positive integer");
    //limit warning due to restrictions on computer resources
    } else if (userInputSize <= 50) { 
        createDiv(userInputSize);
    } else {
        // alert("recommended limit is 50 x 50");
        if (window.confirm(`recommended limit is 50 x 50, proceed with ${userInputSize}`) == true) {
            createDiv(userInputSize);
        }
    }
}

//when mouse hovers over squares change to random color
function randomColor() {
    let cellTarget = document.getElementById("container").querySelectorAll("div");
    cellTarget.forEach(id => id.addEventListener("mouseenter", () => { 
        let redValue = Math.floor(Math.random() * 255);
        let greenValue = Math.floor(Math.random() * 255);
        let blueValue = Math.floor(Math.random() * 255);
        id.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}))}

//clear grid squares by making the grid all black
function clearStyle() {
    let cellTarget = document.getElementById("container").querySelectorAll("div");
    cellTarget.forEach( id => id.removeAttribute("style"))
}

clearBtn.addEventListener("click", clearStyle);
adjustSizeBtn.addEventListener("click", adjustSize);