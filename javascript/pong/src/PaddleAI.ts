import Ball from "./Ball";
import Paddle from "./Paddle";

export default class PaddleAI extends Paddle {
  constructor(x: number, y: number) {
    super(x, y);
  }

  update(ball: Ball) {
    if (ball.y > this.y + this.height / 2 + 30) {
      this.speedY = 6;
    } else if (ball.y < this.y + this.height / 2 - 30) {
      this.speedY = -6;
    } else {
      this.speedY = 0;
    }

    super.update();
  }
}