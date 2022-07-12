/* OBJECTIVE: In this project, you’ll write four functions in script.js. We’ve provided some additional JavaScript code in game.js that will call your functions based on user interactions, but you don’t need to look at game.js and shouldn’t edit it if you want your project to work as intended. As you complete this project, make sure that all of your functions are named exactly as specified within these tasks so that they can be called correctly when the game is played. In this project, your JavaScript functions are incorporated into a website that also uses HTML/CSS. */

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generate target number
const generateTarget = () => {
    target = Math.floor(Math.random() * 9);
    return target;
}

// find absolute distance between guesses and target
const compareGuesses = (userGuess, compGuess, targetNumber) => {
  const userDiff = Math.abs(userGuess - targetNumber);
  const compDiff = Math.abs(compGuess - targetNumber);
  if (userDiff < compDiff) {
    return true;
  } else {
    return false;
  }
}

// update the score based on the guess with least absolute distance 
const updateScore = winner => {
  switch (winner) {
    case 'human':
      humanScore += 1;
    case 'computer':
      computerScore += 1;
  }
}

// advance counter to the following round
const advanceRound = () => {
  currentRoundNumber += 1;
}
