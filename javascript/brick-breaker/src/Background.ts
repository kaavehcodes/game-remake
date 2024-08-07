import { BACKGROUND_STYLE } from "./config";

export default class Background {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = BACKGROUND_STYLE;
    ctx.fillRect(0, 0, this.width, this.height);
  }
}