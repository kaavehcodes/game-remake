import { BALL_START_X, BALL_RADIUS, BALL_START_SPEED_X, BALL_START_SPEED_Y, BALL_STYLE } from "./config";
import Paddle from "./Paddle";

export default class Ball {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;

  constructor(x: number, y: number = Math.round(Math.random() * 450 + 75), radius: number = BALL_RADIUS, speedX: number = BALL_START_SPEED_X, speedY: number = BALL_START_SPEED_Y) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update(canvas: HTMLCanvasElement) {
    // Movement
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce
    if (this.y > canvas.height || this.y < 0) {
      this.speedY *= -1;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = BALL_STYLE;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.fill();
  }

  bounce(paddle: Paddle, canvas: HTMLCanvasElement) {
    this.speedY = paddle.getSpeed(this.y);
    this.speedX *= -1;

    if (this.x < canvas.width / 2) {
      this.x = paddle.x + paddle.width;
    } else {
      this.x = paddle.x;
    }
  }

  // Accelerate each time ball is hit
  accelerate() {
    this.speedX = this.speedX + 1 * Math.sign(this.speedX);
  }

  reset() {
    this.x = BALL_START_X;
    this.y = Math.round(Math.random() * 450 + 75);
    this.speedX = BALL_START_SPEED_X;
    this.speedY = BALL_START_SPEED_Y;
  }
}