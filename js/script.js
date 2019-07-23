//Initialize variables
//Score variable and "start/stop" variable 
let playerScore = 0;
let computerScore = 0;
let gameStart = false;

// Username
let userName;

//DOM manipulation
const startButton = document.getElementById('str');
const header = document.getElementById('hdr');
const resultMessage = document.getElementById('result');
const scoreDisplay = document.getElementById('display');
const rockButton = document.getElementById('r');
const paperButton = document.getElementById('p');
const scissorsButton = document.getElementById('s');


//Make buttons (rock-paper-scissors) enable/disable
rockButton.setAttribute('disabled', 'disabled');
paperButton.setAttribute('disabled', 'disabled');
scissorsButton.setAttribute('disabled', 'disabled');

function changeButtonClickability() {
    if (rockButton.hasAttribute('disabled')) {
        rockButton.removeAttribute('disabled');
        paperButton.removeAttribute('disabled');
        scissorsButton.removeAttribute('disabled');
    } else {
        rockButton.setAttribute('disabled', 'disabled');
        paperButton.setAttribute('disabled', 'disabled');
        scissorsButton.setAttribute('disabled', 'disabled');
    }
}

//Changing button Start/Cancel
function changeButton() {
    startButton.classList.toggle('cancel');
    if (startButton.textContent === 'Start') {
        startButton.textContent = `Cancel`;
    } else {
        startButton.textContent = `Start`;
    }
}

//Choice of computer
function choiceOfComputer() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

//Scoring
let countComputerWins = () => computerScore++;
let countPlayerWins = () => playerScore++;

function playGame(game, playerSelection, computerSelection) {
    if (game && playerScore !== 5 && computerScore !== 5) {
        if (playerSelection === computerSelection && playerSelection !== '' && computerSelection !== '') {
            resultMessage.textContent = `Draw! ${playerSelection} x ${computerSelection}`;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            countPlayerWins();
            resultMessage.textContent = `You win! rock beats scissors`;
            scoreDisplay.textContent = `${userName} ${playerScore} : ${computerScore} Computer`;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            countPlayerWins();
            resultMessage.textContent = `You win! paper beats rock`;
            scoreDisplay.textContent = `${userName} ${playerScore} : ${computerScore} Computer`;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            countPlayerWins();
            resultMessage.textContent = `You win! scissors beats paper`;
            scoreDisplay.textContent = `${userName} ${playerScore} : ${computerScore} Computer`;
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            countComputerWins();
            resultMessage.textContent = `You lose! paper beats rock`;
            scoreDisplay.textContent = `${userName} ${playerScore} : ${computerScore} Computer`;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            countComputerWins();
            resultMessage.textContent = `You lose! scissors beats paper`;
            scoreDisplay.textContent = `${userName} ${playerScore} : ${computerScore} Computer`;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            countComputerWins();
            resultMessage.textContent = `You lose! rock beats scissors`;
            scoreDisplay.textContent = `${userName} ${playerScore} : ${computerScore} Computer`;
        }
    } else if (game === false) {
        playerScore = 0;
        computerScore = 0;
        resultMessage.textContent = ``;
        scoreDisplay.textContent = `User 0 : 0 Computer`;
        changeButton();
        changeButtonClickability();
    } else if (playerScore === 5) {
        alert(`Congratulations! You win!\n${userName} ${playerScore} : ${computerScore} Computer`);
        playerScore = 0;
        computerScore = 0;
        resultMessage.textContent = ``;
        scoreDisplay.textContent = `User 0 : 0 Computer`;
        gameStart = false;
        changeButton();
        changeButtonClickability();
    } else {
        alert(`Oops... You lose!\n${userName} ${playerScore} : ${computerScore} Computer`);
        playerScore = 0;
        computerScore = 0;
        resultMessage.textContent = ``;
        scoreDisplay.textContent = `User 0 : 0 Computer`;
        gameStart = false;
        changeButton();
        changeButtonClickability();
    }
}

// Start/Stop event
startButton.addEventListener('click', function() {
    if (gameStart === true) {
        gameStart = false;
        changeButton();
        changeButtonClickability();
        playerScore = 0;
        computerScore = 0;
        resultMessage.textContent = ``;
        scoreDisplay.textContent = `User 0 : 0 Computer`;
    } else {
        gameStart = true;
        changeButton();
        changeButtonClickability();
        userName = prompt('Enter your name:', '');
        scoreDisplay.textContent = `${userName} ${playerScore} : ${computerScore} Computer`;
    }
});

rockButton.addEventListener('click', () => playGame(gameStart, 'rock', choiceOfComputer()));
paperButton.addEventListener('click', () => playGame(gameStart, 'paper', choiceOfComputer()));
scissorsButton.addEventListener('click', () => playGame(gameStart, 'scissors', choiceOfComputer()));
