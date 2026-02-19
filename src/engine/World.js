export class World {
  constructor(width = 105, height = 68) {
    this.width = width;
    this.height = height;
    this.teams = [];
    this.ball = null;
  }

  addTeam(team) {
    this.teams.push(team);
  }

  setBall(ball) {
    this.ball = ball;
  }

  getAllPlayers() {
    return this.teams.flatMap(t => t.players);
  }
}
