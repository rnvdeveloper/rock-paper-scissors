let choices = ["rock", "paper", "scissors"];

let randomNumber = Math.floor(Math.random() * choices.length);

function getComputerChoice() {
    return choices[randomNumber];
}

let computerSelection = getComputerChoice(); // Podia jogar a funcao direto em playRound()?
let controlInput = true;

// This can be a function?
let playerSelection = prompt("Rock, Paper or Scissors?", "").toLowerCase();


while (controlInput) {
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {

        playerSelection = prompt("Rock, Paper or Scissors?", "").toLowerCase();
    }
    else {
        playerSelection = playerSelection;
        controlInput = false;
    }
}

console.log(computerSelection);
console.log(playerSelection);

function playRound(computerSelection, playerSelection) {
    computerSelection = computerSelection;
    playerSelection = playerSelection;

    if (computerSelection == playerSelection) {
        return "It's a tie!";
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You Lose! Rock beats Scissors";
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You Win! Paper beats Rock";
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You Lose! Paper beats Rock";
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You Win! Scissors beats Paper";
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You Lose! Scissors beats Paper";
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You Win! Rock beats Scissors";
    }
}

console.log(playRound(computerSelection, playerSelection));