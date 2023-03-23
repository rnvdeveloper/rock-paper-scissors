let choices = ["Rock", "Paper", "Scissors"];

let randomNumber = Math.floor(Math.random() * choices.length);

function getComputerChoice() {
    return choices[randomNumber];
}

let computerSelection = getComputerChoice();