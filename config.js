let choices = ["Rock", "Paper", "Scissors"];

let randomNumber = Math.floor(Math.random() * choices.length);

function getComputerChoice() {
    return choices[randomNumber];
}

let computerSelection = getComputerChoice();
let controlInput = true;
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

console.log(playerSelection);