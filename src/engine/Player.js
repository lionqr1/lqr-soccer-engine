import { Entity } from './Entity.js';

export class Player extends Entity {
  constructor(id, x, y, teamId, isGoalkeeper = false) {
    super(id, x, y);
    this.teamId = teamId;
    this.speed = 6;
    this.stamina = 100;
    this.hasBall = false;
    this.isGoalkeeper = isGoalkeeper;
  }

  applyStamina(dt) {
    const moving = Math.hypot(this.vx, this.vy) > 0.1;
    if (moving) {
      this.stamina = Math.max(0, this.stamina - 5 * dt);
      this.speed = 3 + (this.stamina / 100) * 3;
    }
  }

  moveTowards(tx, ty, dt) {
    const dx = tx - this.x;
    const dy = ty - this.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 0.001) return;

    const nx = dx / dist;
    const ny = dy / dist;

    this.vx = nx * this.speed;
    this.vy = ny * this.speed;

    this.update(dt);
    this.applyStamina(dt);
  }
}
