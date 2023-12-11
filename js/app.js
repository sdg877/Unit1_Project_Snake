function init() {

//! ELEMENTS
let grid = document.querySelector('.grid') // create grid

// play again button
// let playAgain = document.querySelector(".playAgain")


//! VARIABLES
// board config
const width = 15
const height = 15
const cellCount = width * height
let cells = []

//character config
const startingPosition = 0
let currentPosition = startingPosition

//! FUNCTIONS

let applePosition = -1
let snake = [0] // store snake position as an array

function placeApple(position){
    cells[position].classList.add('apple')
    applePosition = position
}

function generateRandomPosition(){
    return Math.floor(Math.random() * cellCount)
}

function createGrid(){
    for (let i = 0; i < cellCount; i++){  // use cell count to create grid cells
        const cell = document.createElement('div')  //create cell div
        // cell.innerText = i // add index to div element
        cell.dataset.index = i  // add index as attribute
        cell.style.height = `${100 / height}%`  // add height and width to each grid cell (div)
        cell.style.width = `${100 / width}%`
        grid.appendChild(cell)    // Add cell to grid
        cells.push(cell) // add newly created div to cell to cells array
    }

placeApple(generateRandomPosition()) // call place apple function

addSnake(startingPosition) // add snake to starting position
}

function addSnake(position) {
   // console.log('SNAKE BEING ADDED TO THE FOLLOWING CELL ->', position)
    snake.push(position)
    cells[position].classList.add('snake')
}

function removeSnake(){ // remove snake class
   // console.log('snake removed')
    const tail = snake.shift()
    
    if(tail !== undefined && cells[tail]) { //stimulating movement of the snake 
        cells[tail].classList.remove('snake')
    }
}

// handle movement
function handleMovement(event){
    const key = event.key
    const up  = "ArrowUp"
    const down = "ArrowDown"
    const left = "ArrowLeft"
    const right = "ArrowRight"

// remove snake from previous position before updating
removeSnake()

let newPosition = currentPosition

    // check which key was pressed 
    if (key === up && currentPosition >= width) {
        console.log('up')
        currentPosition -= width
    } else if (key === down && currentPosition + width <= cellCount - 1) {
        console.log('down')
        currentPosition += width
    } else if (key === left && currentPosition % width !== 0) {
        currentPosition--
        console.log('left')
    } else if (key === right && currentPosition % width !== width - 1) {
        console.log('right') 
        currentPosition++
    } else {
        console.log('invalid key')
    }

//check for wall collision
if (newPosition < 0 || newPosition >= cellCount){
    console.log('Game over! Snake hit a wall')
    return
}

if (currentPosition === applePosition) {
   // console.log('Snake ate the apple')
    cells[applePosition].classList.remove('apple')
    placeApple(generateRandomPosition())
    snake.push(currentPosition)
} else { 
    tail = snake.shift()
    snake.push(currentPosition)
    console.log(snake.length)
}

addSnake(currentPosition)
}   

//! EVENTS
document.addEventListener('keyup', handleMovement)


//! PAGE LOAD
createGrid()
}


window.addEventListener('DOMContentLoaded', init)


