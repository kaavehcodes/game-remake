import Ball from "./Ball";
import { PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_STYLE, BALL_START_SPEED_Y } from "./config";

export default class Paddle {
  x: number;
  y: number;
  width: number;
  height: number;
  speedY: number;

  constructor(x: number, y: number, width: number = PADDLE_WIDTH, height: number = PADDLE_HEIGHT, speedY: number = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedY = speedY;
  }

  update(ball?: Ball) {
    this.y += this.speedY;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = PADDLE_STYLE;
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
  }

  getSpeed(ballY: number) {
    return Math.round(BALL_START_SPEED_Y * (ballY - (this.y + this.height / 2)) / this.height * 5);
  }
}