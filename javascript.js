console.log('Hello World!');

let playerSelection = '';
let computerSelection = getComputerChoice();
let roundResult = '';
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}


function playRound(playerSelection, computerSelection) {

    while (playerSelection !=='rock' && playerSelection !=='paper' && playerSelection !=='scissors'){
        playerSelection = prompt('Enter Input (Rock, Paper or Scissors): ').toLowerCase();
    }

    computerSelection = getComputerChoice();
    console.log('Player Selection', playerSelection);
    console.log('Computer Selection', computerSelection);

    if (playerSelection === computerSelection) {
        console.log('It\'s a draw');
        roundResult = 'draw'


    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        roundResult = 'player'
        playerScore++
        


    } else {
        console.log(`Computer Wins ${computerSelection} beats ${playerSelection}`)
        roundResult = 'computer'
        computerScore++
   
    }
    
    console.log(`At the end of the round, your score is ${playerScore}, and the computer score is ${computerScore}.`)
    return roundResult;
}



function game() {
    for (let i = 1; i <= 5; i++) {
      console.log(`Round ${i}:`);
      let result = playRound(playerSelection, computerSelection);
      console.log(result);
    }
    console.log(`Final score: Player ${playerScore}, Computer ${computerScore}`);
  }
  
  game();

