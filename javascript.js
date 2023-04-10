console.log('Hello World!');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}

let computerSelection = getComputerChoice();
//console.log(computerSelection);

let playerSelection = prompt('Enter Input: ').toLowerCase();
//console.log(playerSelection);



function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    console.log('Player Selection', playerSelection);
    console.log('Computer Selection', computerSelection);

    if (playerSelection === computerSelection) {
        console.log('It\'s a draw');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You Win!')

    } else {
        console.log('Computer Wins')
    }
}


console.log(playRound(playerSelection));

