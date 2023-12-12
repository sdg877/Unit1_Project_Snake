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
    let direction = "right"
    
    //character config
    const startingPosition = 2
    let currentPosition = startingPosition
    
    //! FUNCTIONS
    
    let applePosition = -1
    let snake = [0, 1] // store snake position as an array
    
    function placeApple(position){
        if (snake.includes(position)) {
            const newNumber = generateRandomPosition()
            placeApple(newNumber)
            return
        }
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
        snake.push(position)
        snake.forEach(cell => {
            cells[cell].classList.add('snake')
        })
    }
    
    function removeSnake(){ // remove snake class
        const tail = snake.shift()
        if(tail !== undefined && cells[tail]) { //stimulating movement of the snake 
            cells[tail].classList.remove('snake')
        }
    }

    function checkBoundaries() {
        if(snake.length !== new Set(snake).size) {
           alert("You lose")
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
            direction = "up"
            currentPosition -= width
        } else if (key === down && currentPosition + width <= cellCount - 1) {
            direction = "down"
            currentPosition += width
        } else if (key === left && currentPosition % width !== 0) {
            currentPosition--
            direction = "left"
        } else if (key === right && currentPosition % width !== width - 1) {
            direction = "right"
            currentPosition++
        }
    
        addSnake(currentPosition)
        checkBoundaries()

    if (currentPosition === applePosition) {
        cells[applePosition].classList.remove('apple')
        placeApple(generateRandomPosition())
        snake.unshift(currentPosition)
        cells[currentPosition].classList.add('snake')
    }
    }   
    
    //! EVENTS
    document.addEventListener('keyup', handleMovement)
    
    
    //! PAGE LOAD
    createGrid()
    }
    
    
    window.addEventListener('DOMContentLoaded', init)