import Background from './Background';
import './style.css'

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let background: Background;

window.onload = function () {
  loadGame();
}

function loadGame() {
  canvas = document.getElementById("brick-breaker") as HTMLCanvasElement;
  ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.textAlign = "center";
  background = new Background(canvas.width, canvas.height);
}
