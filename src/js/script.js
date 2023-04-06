"use strict";

const playerChoices = document.querySelectorAll('.choice')
const result = document.querySelector('.result')
const btnPlay = document.querySelector('.btnPlay')
const choices = ["rock", "paper", "scissors"];
let rounds = 5;
let computerScore = 0;
let userScore = 0;

const getComputerChoice = choices[Math.floor(Math.random() * choices.length)]
console.log(getComputerChoice);

const getPlayerChoice = playerChoices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let choiceMade = choice.getAttribute('value')
        console.log(choiceMade);
        return choiceMade
    })
});

const playRound = () => {
    const computerChoice = getComputerChoice
    const playerChoice = getPlayerChoice
    const messageForTie = "It's a tie!";
    const messageForPlayerWin = `You win, ${playerChoice} beats ${computerChoice}!`;
    const messageForPlayerDefeat = `You Lose, ${computerChoice} beats ${playerChoice}!`;
    const roundPossibleResults = {
        tieRound: playerChoice === computerChoice,
        playerWins: (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper"),
    };

    if (roundPossibleResults.tieRound) {
        result.innerHTML = messageForTie;
    }
    if (roundPossibleResults.playerWins) {
        userScore++;
        console.log('user Score ' + userScore);
        result.innerHTML = messageForPlayerWin;
    } else {
        computerScore++;
        console.log('Computer Scrore ' + computerScore);
        result.innerHTML = messageForPlayerDefeat;
    }
};

function playFullGame(rounds) {
    const messagePlayerWinner = "You are a winner!";
    const messagePlayerLoser = "You are a loser!";
    const messageForNoWinner = "Total Tie, no winner this time!";

    for (let i = 0; i < rounds; i++) {
        playRound()
        console.log(playRound());
    }

    if (userScore === computerScore) {
        result.innerHTML = messageForNoWinner;
    }
    if (userScore > computerScore) {
        result.innerHTML = messagePlayerWinner;
    }
    if (userScore < computerScore) {
        result.innerHTML = messagePlayerLoser;
    }
}
btnPlay.addEventListener('click', playFullGame(5))


// Inserir um block no loop para cada round antes da escolha do player
// const getPlayerChoice = () => {
//     while (!choices.includes(playerChose)) return playerChose;
//     console.log(playerChose);
// };