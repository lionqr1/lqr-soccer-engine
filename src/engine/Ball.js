import { Entity } from './Entity.js';

export class Ball extends Entity {
  constructor(id = "ball", x = 0, y = 0) {
    super(id, x, y);
    this.radius = 0.11;
    this.airDrag = 0.02;
  }
}
