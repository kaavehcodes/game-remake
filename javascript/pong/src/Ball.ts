import { BALL_STYLE } from "./config";

export default class Ball {
  ballX: number;
  ballY: number;
  ballRadius: number;
  ballSpeedX: number;
  ballSpeedY: number;

  constructor(ballX: number, ballY: number, ballRadius: number, ballSpeedX: number, ballSpeedY: number) {
    this.ballX = ballX;
    this.ballY = ballY;
    this.ballRadius = ballRadius;
    this.ballSpeedX = ballSpeedX;
    this.ballSpeedY = ballSpeedY;
  }

  update(canvas: HTMLCanvasElement) {
    // Movement
    this.ballX += this.ballSpeedX;
    this.ballY += this.ballSpeedY;

    // Bounce
    if (this.ballY > canvas.height || this.ballY < 0) {
      this.ballSpeedY *= -1;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = BALL_STYLE;
    ctx.beginPath();
    ctx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI * 2, true);
    ctx.fill();
  }
}