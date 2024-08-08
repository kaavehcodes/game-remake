import Background from './Background';
import Ball from './Ball';
import { FPS, BALL_START_X, BALL_START_Y, PADDLE_START_X, PADDLE_START_Y } from './config';
import Paddle from './Paddle';
import './style.css'

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let background: Background;
let ball: Ball;
let paddle: Paddle;

window.onload = function () {
  loadGame();

  // Game loop
  setInterval(() => {
    update();
    draw();
  }, 1000 / FPS);
}

function loadGame() {
  canvas = document.getElementById("brick-breaker") as HTMLCanvasElement;
  ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.textAlign = "center";
  background = new Background(canvas.width, canvas.height);
  ball = new Ball(BALL_START_X, BALL_START_Y);
  paddle = new Paddle(PADDLE_START_X, PADDLE_START_Y);
}

function update() {
  ball.update(canvas);
}

function draw() {
  background.draw(ctx);
  paddle.draw(ctx);
  ball.draw(ctx);
}
