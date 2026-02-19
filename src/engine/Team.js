export class Team {
  constructor(id, players = []) {
    this.id = id;
    this.players = players;
    this.score = 0;
  }

  addPlayer(player) {
    this.players.push(player);
  }
}
