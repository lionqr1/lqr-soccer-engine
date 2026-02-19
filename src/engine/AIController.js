export class AIController {
  constructor(world) {
    this.world = world;
  }

  update(dt) {
    const ball = this.world.ball;
    if (!ball) return;

    for (const team of this.world.teams) {
      for (const player of team.players) {
        if (player.isGoalkeeper) {
          const goalX = team.id === "A" ? 5 : this.world.width - 5;
          const goalY = this.world.height / 2;
          const dist = Math.hypot(ball.x - goalX, ball.y - goalY);

          if (dist < 20) {
            player.moveTowards(ball.x, ball.y, dt);
          } else {
            player.moveTowards(goalX, goalY, dt);
          }
          continue;
        }

        const distToBall = Math.hypot(ball.x - player.x, ball.y - player.y);

        if (distToBall < 30) {
          player.moveTowards(ball.x, ball.y, dt);
        }
      }
    }
  }
}
