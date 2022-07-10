/*Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:
Rock destroys scissors.
Scissors cut paper.
Paper covers rock.

If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:
Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.*/

// get user choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
  } else {
    return console.log('Error, try again')
  }
  }

  // get computer choice
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }

  // function to determine the winner
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper'){
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors'){
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock'){
        return 'The computer won!';
      } else {
        return 'The user won!';
      }
    }
  }

  // function to play the game
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    console.log('You threw: ' + userChoice);
    const computerChoice = getComputerChoice();
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame()
  