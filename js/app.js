function init() {

    //! ELEMENTS
    let grid = document.querySelector('.grid') // create grid
    
    const playAgainButton = document.querySelector(".playAgain")

    let crunchSoundAudio = document.querySelector('#crunchSound')
    crunchSoundAudio.src = './assets/apple.mp3'

    let gameOverAudio = document.querySelector('#gameOver')
    gameOverAudio.src ='./assets/gameOver.mp3'

    //! VARIABLES
    // board config
    const width = 15
    const height = 15
    const cellCount = width * height
    let cells = []
    let direction = "right"
    let gameRunning = false
    const startingPosition = 2   //character config
    let currentPosition = startingPosition
    let highScore = localStorage.getItem('snakeHighScore') || 0
    const highScoreElement = document.getElementById('highScore')
    highScoreElement.textContent = highScore
    let snakeSpeed = 500
    
 

    //! FUNCTIONS
    function updateHighScore(score) { // highscore
        if (score > highScore) {
            highScore = score
            localStorage.setItem('snakeHighScore' , highScore)
            highScoreElement.textContent = highScore
        }
    }

    function playCrunchSound() {
        crunchSoundAudio.play()
    }

    function resetGame() { // resetting game after pressing play again button
        snake = [0 ,1]
        direction = "right"
        currentPosition = startingPosition
        snakeSpeed = 500
        gameRunning = false

        cells.forEach(cell => {
            cell.remove()
        })
        cells = []
        createGrid()

        document.addEventListener('keyup', handleMovement)
    }

    function startGame() {
        gameRunning = true
        moveSnake()
    }

    function stopGame() {
        gameRunning = false

        snake.forEach(cell => {
            cells[cell].classList.remove('snake')
            cells[cell].classList.add('dead')
        })
        gameOverAudio.play()
    }

    function moveSnake() {
        if (!gameRunning) return

        removeSnake()

        let newPosition = currentPosition
        if (direction === "up" && currentPosition >= width) {
            newPosition -= width
        } else if (direction === "down" && currentPosition + width <= cellCount - 1) {
            newPosition += width
        } else if (direction === "left" && currentPosition % width !== 0) {
            newPosition--
        } else if (direction === "right" && currentPosition % width !== width - 1) {
            newPosition++
        }

        if (snake.includes(newPosition) || newPosition < 0 || newPosition >= cellCount) {
            stopGame()
            // alert("GAME OVER - YOU LOSE!!")
            document.removeEventListener('keyup', handleMovement)
            const currentScore = snake.length
            updateHighScore(currentScore)
            return
        }
      
        currentPosition = newPosition
        addSnake(currentPosition)

        if (currentPosition === applePosition) {
            cells[applePosition].classList.remove('apple')
            placeApple(generateRandomPosition())
            snake.unshift(currentPosition)
            cells[currentPosition].classList.add('snake')
            crunchSoundAudio.play()

            snakeSpeed -= 25
            if (snakeSpeed < 250) {
                snakeSpeed = 250
            }
        }
        setTimeout(moveSnake, snakeSpeed)
    }

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
        }
    }
    
    // handle movement
    function handleMovement(event){
        const key = event.key
        const up  = "ArrowUp"
        const down = "ArrowDown"
        const left = "ArrowLeft"
        const right = "ArrowRight"
    
        removeSnake()  // remove snake from previous position before updating

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
            crunchSoundAudio.play()
            }   

    if (!gameRunning) {
        startGame()
    }
}
    //! EVENTS
    document.addEventListener('keyup', handleMovement)
    playAgainButton.addEventListener('click', resetGame)

    //! PAGE LOAD
    createGrid()
    }
    
    window.addEventListener('DOMContentLoaded', init)