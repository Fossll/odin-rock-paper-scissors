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


while (playerSelection !=='rock' && playerSelection !=='paper' && playerSelection !=='scissors'){
    playerSelection = prompt('Enter Input (Rock, Paper or Scissors): ').toLowerCase();
}


function playRound(playerSelection, computerSelection) {
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
    
}



console.log(playRound(playerSelection, computerSelection));

function game() {
 for (let i = 0; i < 5; i++) {
    playRound();
 }

}

function gameOver() {
    return playerScore === 5 || computerScore === 5
}