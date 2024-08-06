import './style.css';
import { FPS, BALL_START_X, PADDLE_PLAYER_START_X, PADDLE_PLAYER_START_Y, PADDLE_WIDTH, PADDLE_HEIGHT } from './config';
import Background from './Background';
import Ball from './Ball';
import Paddle from './Paddle';
import PaddleAI from './PaddleAI';
import Score from './Score';

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let background: Background;
let ball: Ball;
let leftPaddle: Paddle;
let rightPaddle: Paddle;
let score: Score;
let gameState: number;
let gameEnded: boolean;

window.onload = function () {
  // Loading game assets
  loadGame();

  // Manage player input
  canvas.addEventListener("mousemove", (event: MouseEvent) => {
    let mousePos = getMousePosition(event);
    leftPaddle.y = mousePos.y - (leftPaddle.height / 2);
  });

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "w") {
      leftPaddle.y -= 13;
    } else if (event.key === "s") {
      leftPaddle.y += 13;
    }
  });

  // Game loop
  setInterval(() => {
    update();
    draw();
  }, 1000 / FPS);
}

// Loading game assets
function loadGame() {
  // Get window size
  // let width: number = window.innerWidth;
  // let height: number = window.innerHeight;

  canvas = document.getElementById("pong") as HTMLCanvasElement;
  ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.textAlign = "center";

  background = new Background(canvas.width, canvas.height);
  ball = new Ball(BALL_START_X);
  leftPaddle = new Paddle(PADDLE_PLAYER_START_X, PADDLE_PLAYER_START_Y);
  rightPaddle = new PaddleAI(800 - PADDLE_WIDTH, 400 - PADDLE_HEIGHT / 2);

  score = new Score();
  gameState = 0;
  gameEnded = false;
}

// Update loop
function update() {
  // Game state
  gameState = checkScore();

  // When game ends
  if (gameState != 0) {
    if (!gameEnded) {
      showEndScreen(ctx);
      canvas.addEventListener("click", (event: MouseEvent) => {
        if (gameState != 0) {
          reset();
        }
      });
      gameEnded = true;
    }
    return;
  }

  // Game logic
  if (gameState == 0) {
    ball.update(canvas);
    leftPaddle.update();
    rightPaddle.update(ball);

    console.log(leftPaddle.width);
    console.log(ball.x);

    // Collision detection
    if (ball.x <= leftPaddle.width) {
      // Ball collides with paddle
      // Player One
      if (ball.y >= leftPaddle.y - ball.radius / 2 && ball.y <= leftPaddle.y + leftPaddle.height + ball.radius / 2) {
        ball.bounce(leftPaddle, canvas);
      } else {
        if (ball.x < 0) {
          score.playerTwoScores();
          // Reset ball unless the game is ended
          if (checkScore() == 0) {
            ball.reset();
          }
        }
      }
    }

    // Player Two
    if (ball.x > canvas.width - rightPaddle.width) {
      if (ball.y >= rightPaddle.y - ball.radius / 2 && ball.y <= rightPaddle.y + rightPaddle.height + ball.radius / 2) {
        ball.bounce(rightPaddle, canvas);
      } else {
        if (ball.x > canvas.width) {
          score.playerOneScores();
          if (checkScore() == 0) {
            ball.reset();
          }
        }
      }
    }
  }
}

function draw() {
  if (gameState == 0) {
    background.draw(ctx);
    ball.draw(ctx);
    leftPaddle.draw(ctx);
    rightPaddle.draw(ctx);
  }

  showScore(ctx);
}

// Reset the game
function reset() {
  score.reset();
  ball.reset();
  gameEnded = false;
  gameState = 0;
}

// Get mouse position on canvas
function getMousePosition(event: MouseEvent) {
  let clientBCRect = canvas.getBoundingClientRect();
  let root = document.documentElement;
  let mouseX = event.clientX - clientBCRect.left - root.scrollLeft;
  let mouseY = event.clientY - clientBCRect.top - root.scrollTop;

  return {
    x: mouseX,
    y: mouseY
  }
}

// Show score
function showScore(ctx: CanvasRenderingContext2D) {
  ctx.fillText(score.playerOneScore + " : " + score.playerTwoScore, canvas.width / 2, 20);
}

// Check score
function checkScore() {
  if (score.playerOneScore == 5) {
    return 1;
  } else if (score.playerTwoScore == 5) {
    return 2;
  } else {
    return 0;
  }
}

// Show end game screen
function showEndScreen(ctx: CanvasRenderingContext2D) {
  background.draw(ctx);
  ctx.fillStyle = "white";

  if (gameState == 1) {
    ctx.fillText("player One Wins!", canvas.width / 2, canvas.height / 2);
  } else if (gameState == 2) {
    ctx.fillText("Player Two Wins!", canvas.width / 2, canvas.height / 2);
  }

  setTimeout(() => {
    ctx.fillText("Click to play again", canvas.width / 2, canvas.height / 2 + 50);
  }, 1000);
}
