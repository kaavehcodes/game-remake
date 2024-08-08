import { PADDLE_WIDTH, PADDLE_HEIGHT } from "./config";

export default class Paddle {
  x: number;
  y: number;
  width: number;
  height: number;
  speedX: number;

  constructor(x: number, y: number, width: number = PADDLE_WIDTH, height: number = PADDLE_HEIGHT, speedX: number = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = speedX;
  }

  update() {

  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
  }
}