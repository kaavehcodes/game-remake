import './style.css'
import { setupCounter } from './counter.js'

let canvas;
let ctx;

window.onload = function () {
  canvas = document.getElementById("pong");
  canvas.width = 800;
  canvas.height = 600;

  ctx = canvas.getContext("2d");

  render();
}

function render() {
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function update() {
  console.log("Update");
}
