import './style.css'

let canvas: HTMLElement | null;

window.onload = function () {
  canvas = document.getElementById("game");

  const ctx = canvas?.getContext("2d");

  ctx?.fillStyle;
  ctx?.fillRect(0, 0, canvas?.width, canvas?.height);

}
