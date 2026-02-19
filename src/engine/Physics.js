export class Physics {
  constructor(friction = 0.9) {
    this.friction = friction;
  }

  applyFriction(entity, dt) {
    entity.vx *= Math.pow(this.friction, dt);
    entity.vy *= Math.pow(this.friction, dt);
  }

  applyBallDrag(ball, dt) {
    ball.vx *= 1 - ball.airDrag * dt;
    ball.vy *= 1 - ball.airDrag * dt;
  }

  keepInBounds(entity, world) {
    if (entity.x < 0) { entity.x = 0; entity.vx *= -0.5; }
    if (entity.y < 0) { entity.y = 0; entity.vy *= -0.5; }
    if (entity.x > world.width) { entity.x = world.width; entity.vx *= -0.5; }
    if (entity.y > world.height) { entity.y = world.height; entity.vy *= -0.5; }
  }

  updateWorld(world, dt) {
    const entities = [...world.getAllPlayers(), world.ball].filter(Boolean);

    for (const e of entities) {
      e.update(dt);
      this.applyFriction(e, dt);
      this.keepInBounds(e, world);

      if (e === world.ball) {
        this.applyBallDrag(world.ball, dt);
      }
    }
  }
}
