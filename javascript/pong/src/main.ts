import './style.css';
import { FPS, BALL_START_X, PADDLE_PLAYER_START_X, PADDLE_PLAYER_START_Y } from './config';
import Background from './Background';
import Ball from './Ball';
import Paddle from './Paddle';

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let background: Background;
let ball: Ball;
let leftPaddle: Paddle;

window.onload = function () {
  // Loading game assets
  loadGame();

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
  leftPaddle = new Paddle(PADDLE_PLAYER_START_X, PADDLE_PLAYER_START_Y)
}

// Update loop
function update() {

}

function draw() {
  background.draw(ctx);
  ball.draw(ctx);
  leftPaddle.draw(ctx);
}
