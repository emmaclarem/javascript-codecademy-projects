// OBJECTIVE: We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

//After we create these data structures in this project, feel free to challenge yourself to gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.

const team = {
    _players: [ //list of players
      {firstName: 'Daichi', lastName: 'Sawamura', age: 18},
      {firstName: 'Asahi', lastName: 'Azumane', age: 17},
      {firstName: 'Koshi', lastName: 'Sugawara', age: 18}
    ],
    _games: [ //list of games
      {opponent: 'Tokonami', teamPoints: 2, opponentPoints: 0},
      {opponent: 'Kakugawa', teamPoints: 2, opponentPoints: 0},
      {opponent: 'Date Tech', teamPoints: 0, opponentPoints: 2}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) { //create new player object & push to the existing array
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) { //create new game object & push to the existing array
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this._games.push(game);
    }
  };
  
  //add new player, add new game, log both to check everything is working
  team.addPlayer('Yu', 'Nishinoya', 18);
  team.addGame('Nekoma', 0, 1);
  console.log(team._players);
  console.log(team._games);
  