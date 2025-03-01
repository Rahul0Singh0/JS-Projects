document.addEventListener('DOMContentLoaded', function() {

    let table = document.getElementById('ping-pong-table');
    let ball = document.getElementById('ball'); 
    let paddle = document.getElementById('paddle');

    // here the ballX and ballY will be helping us to set a starting point of ball w.r.t to table
    let ballX = 10; // distance of the top of the ball w.r.t ping pong table
    let ballY = 10; // distance of the left of the ball w.r.t ping pong table

    let dx = 2; // displacement factor in x-direction, 2 -> you will displace by 2 px in positive x-direction, -2 -> you will displace by 2 px in negative x-direction
    let dy = 2; // displacement factor in y-direction, 2 -> you will displace by 2 px in positive y-direction, -2 -> you will displace by 2 px in negative y-direction

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    setInterval(function exec() {
    
        ballX += dx;
        ballY += dy;
    
        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;
    
        // if(ballX > 700-20 || ballX <= 0) dx *= -1;
        // if(ballY > 400-20 || ballY <= 0) dy *= -1;
    
        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1; // change x-direction
        if(ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1; // change y-direction

    }, 1);

    let paddleY = 0;
    let dPy = 5; // displacement for paddle in y-direction
    document.addEventListener("keydown", (event) => {
        if(event.keyCode == 38 && paddleY > 0) {
            // up arrow
            paddleY += (-1)*dPy;
        } else if(event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight) {
            // down arrow
            paddleY += dPy;
        }

        paddle.style.top = `${paddleY}px`;
    });

});