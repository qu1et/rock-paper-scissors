let playerWins = 0,
computerWins = 0;

let computersScore = () => computerWins++;
let playersScore = () => playerWins++;

function computerPlay() {
let options = ["rock", "paper", "scissors"];
return options[Math.floor(Math.random() * options.length)];
}

function playerSelection() {
const playerChoice = prompt("Enter rock, paper or scissors: ", "");
return playerChoice.toLocaleLowerCase();
}

function playRound(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
    return console.log("Draw!");
} else if (playerSelection === "rock" && computerSelection === "scissors") {
    playersScore();
    return console.log("You win! " + playerSelection + " beats " + computerSelection);
} else if (playerSelection === "paper" && computerSelection === "rock") {
    playersScore();
    return console.log("You win! " + playerSelection + " beats " + computerSelection);
} else if (playerSelection === "scissors" && computerSelection === "paper") {
    playersScore();
    return console.log("You win! " + playerSelection + " beats " + computerSelection);
} else if (playerSelection === "rock" && computerSelection === "paper") {
    computersScore();
    return console.log("You lose! " + computerSelection + " beats " + playerSelection);
} else if (playerSelection === "paper" && computerSelection === "scissors") {
    computersScore();
    return console.log("You lose! " + computerSelection + " beats " + playerSelection);
} else if (playerSelection === "scissors" && computerSelection === "paper") {
    computersScore();
    return console.log("You lose! " + computerSelection + " beats " + playerSelection);
}
}

function game() {
for (let i = 0; i < 5; i++) {
    playRound(playerSelection(), computerPlay());
}

if (playerWins > computerWins) {
    return console.log("You win!\nScore: Player " + playerWins + " - " + computerWins + "Computer");
} else if (computerWins > playerWins) {
    return console.log("You lose!\nScore: Player " + playerWins + " - " + computerWins + "Computer");
} else {
    return console.log("Draw!\nScore: Player " + playerWins + " - " + computerWins + "Computer");
}
}

game();
