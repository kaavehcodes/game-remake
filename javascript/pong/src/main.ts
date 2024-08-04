import './style.css';
import { FPS, BALL_START_X } from './config';
import Background from './Background';

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let background: Background;

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
}

// Update loop
function update() {

}

function draw() {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fill();
}

