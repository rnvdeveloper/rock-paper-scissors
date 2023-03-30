'use strict'

const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let userScore = 0;

// const getPlayerChoice = () => {
//     // Aqui eu tentei fazer um handler pro prompt, mas ai ele executa uma vez e encerra ou trava.
//     //let handlePlayerInput = prompt("Rock, Paper or Scissors?").toLowerCase();
//     // playerInput = handlePlayerInput

//     playerInput = prompt("Rock, Paper or Scissors?").toLowerCase();
//     while (!choices.includes(playerInput))
//         playerInput = prompt("Rock, Paper or Scissors?").toLowerCase();
//     return playerInput;
// }

const getComputerChoice = () => {
    let computerRandomSelection =
        choices[Math.floor(Math.random() * choices.length)];
    return computerRandomSelection;
};

const getPlayerChoice = () => {
    let playerInput = prompt("Rock, Paper or Scissors?").toLowerCase();
    while (!choices.includes(playerInput))
        playerInput = prompt("Rock, Paper or Scissors?").toLowerCase();
    return playerInput;
};

const playRound = () => {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    const messageForTie = "It's a tie!";
    const messageForPlayerWin = `You win, ${playerChoice} beats ${computerChoice}!`;
    const messageForPlayerDefeat = `You Lose, ${computerChoice} beats ${playerChoice}!`;
    const roundPossibleResults = {
        tieRound: playerChoice === computerChoice,
        playerWins: (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
    }

    if (roundPossibleResults.tieRound) return messageForTie;
    if (roundPossibleResults.playerWins) {
        userScore++;
        return messageForPlayerWin;
    } else {
        computerScore++;
        return messageForPlayerDefeat;
    }
};

(function mainGame(rounds) {
    const messagePlayerWinner = "You are a winner!";
    const messagePlayerLoser = "You are a loser!";
    const messageForNoWinner = "Total Tie, no winner this time!";

    for (let i = 0; i < rounds; i++) {
        console.log(playRound());
    }

    // Aqui eu inseri a verificação do empate porque ele retornava aleatoreamente winner ou looser e não entendi o critério.
    if (userScore === computerScore) return console.log(messageForNoWinner);
    if (userScore > computerScore) return console.log(messagePlayerWinner);
    if (userScore < computerScore) return console.log(messagePlayerLoser);
})(5);