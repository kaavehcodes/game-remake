import { BALL_RADIUS, BALL_START_SPEED_X, BALL_START_SPEED_Y, BALL_STYLE } from "./config";

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

    // Wall bounce
    if (this.y <= 0) {
      this.speedY *= -1;
    }

    if (this.x >= canvas.height || this.x <= 0) {
      this.speedX *= -1;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = BALL_STYLE;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.fill();
  }
}