import './style.css';
import { FPS } from './config';

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

window.onload = function () {
  // Loading game elements
  loadGame();

  // Game loop
  setInterval(() => {
    update();
    draw();
  }, 1000 / FPS);
}

// Loading game elements
function loadGame() {
  // Get window size
  // let width: number = window.innerWidth;
  // let height: number = window.innerHeight;

  canvas = document.getElementById("pong") as HTMLCanvasElement;
  ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
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

