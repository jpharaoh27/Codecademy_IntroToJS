//Mate Ma'a Tonga!
const team = {
  _players: [
    {firstName: "Jason", lastName: "Taumalolo", age: 25},
    {firstName: "Andrew", lastName: "Fifita", age: 29},
    {firstName: "Tuimoala", lastName: "Lolohea", age: 23},
  ],
  
  _games: [
    {opponent: "England", teamPoints: 18, opponentPoints: 20},
    {opponent: "Lebanon", teamPoints: 24, opponentPoints: 22},
    {opponent: "New Zealand", teamPoints: 28, opponentPoints: 22},
  ],
  
  get players() {
    return this._players;
  },
  
  get games() {
    return this._games;
  },

addPlayer(firstName, lastName, age) {
  let player = {firstName: firstName, lastName: lastName, age: age};
  this.players.push(player);
  },
  
addGame(op, ourPts, opPts) {
  let game = {opponent: op, teamPoints: ourPts, opponentPoints: opPts};
  this.games.push(game);
  }
};

team.addPlayer("Bugs", "Bunny", 76)
team.addPlayer("Goofy", "Goofy", 86)
team.addPlayer("Mickey", "Mouse", 90)
console.log(team.players)

team.addGame("Samoa", 32, 18)
team.addGame("Scotland", 50, 4)
team.addGame("Italy", 16, 6)
console.log(team.games)