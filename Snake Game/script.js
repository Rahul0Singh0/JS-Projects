// We develop this game using JS and try to understand DOM manipulation

// DOMContentLoaded does not depends on external resources.
// When the DOM is fully loaded and parsed (before images, CSS, etc.).
// Ensure that the DOM is fully available before you manipulate or interact with it.
// Avoid issues where your script tries to access DOM elements that haven't been created yet.

document.addEventListener('DOMContentLoaded', function() {
    const gameArena = document.getElementById('game-arena');
    const arenaSize = 600;
    const cellSize = 20;
    let score = 0; // Score of the game
    let gameStarted = false; // Game Status
    let food = {x: 300, y: 200}; // depends on cell size {x: 15*20, y: 10*20} // -> cell coordinate -> pixels// top-left pixels of that cell
    // [head, body, tail]
    let snake = [{x: 160, y: 200}, {x: 140, y: 200}, {x: 120, y: 200}]; // at starting time, snake position always fixed

    let dx = cellSize; // +20
    let dy = 0;

    function updateSnake() {
        const newHead = {x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(newHead); // Add new head to the snake

        // check collision with food
        if(newHead.x === food.x && newHead.y === food.y) {
            score += 10;
        } else {
            snake.pop(); // remove tail
        }
    }

    function changeDirection(e) {
        // for corner case
        const isGoingDown = dy === cellSize;
        const isGoingUp = dy === -cellSize;
        const isGoingRight = dx === cellSize;
        const isGoingLeft = dx === -cellSize;
        if(e.key === 'ArrowUp' && !isGoingDown) {
            dx = 0;
            dy = -cellSize;
        } else if(e.key === 'ArrowDown' && !isGoingUp) {
            dx = 0;
            dy = cellSize;
        } else if(e.key === 'ArrowLeft' && !isGoingRight) {
            dx = -cellSize;
            dy = 0;
        } else if(e.key === 'ArrowRight' && !isGoingLeft) {
            dx = cellSize;
            dy = 0;
        }
    }

    function drawDiv(x, y, className) {
        const divElement = document.createElement('div');
        divElement.classList.add(className);
        divElement.style.top = `${y}px`;
        divElement.style.left = `${x}px`;
        return divElement;
    }

    function drawFoodAndSnake() {
        gameArena.innerHTML = ''; // clear the game arena
        // wipe out everything and redraw with new positions

        snake.forEach((snakeCell) => {
            const snakeElement = drawDiv(snakeCell.x, snakeCell.y, 'snake');
            gameArena.appendChild(snakeElement);
        });

        const foodElement = drawDiv(food.x, food.y, 'food');
        gameArena.appendChild(foodElement);
    }

    function runGame() {
        if(!gameStarted) {
            gameStarted = true;
            document.addEventListener('keydown', changeDirection);
            drawFoodAndSnake();
            // gameLoop(); // TODO: implement game loop

        }
    }

    function initiateGame() {
        const scoreBoard = document.createElement('div');
        scoreBoard.id = 'score-board';
        
        document.body.insertBefore(scoreBoard, gameArena); // Insert score board before game arena
        
        const startButton = document.createElement('button');
        startButton.textContent = 'Start Game';
        startButton.classList.add('start-button');

        startButton.addEventListener('click', function startGame() {
            startButton.style.display = 'none';

            runGame();
        });

        document.body.appendChild(startButton); // Append start button to the body
    }

    initiateGame();
});