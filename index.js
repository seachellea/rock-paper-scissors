// Variables
const winnerResult = document.getElementById('winner-result'); // will display who won (PLAYER WINS)
const roundDescription = document.getElementById('round-descrip'); // will display details of that round (Paper beats Rock)

const playerChoiceContainer = document.getElementById('player-result'); // parent element/container of the icon that will display the choices of computer and player
const playerChoiceIcon = document.getElementById('player-choice'); // icon that will display the choice of player
const computerChoiceContainer = document.getElementById('computer-result'); // parent element/container of the icon that will display computer choice
const computerChoiceIcon = document.getElementById('computer-choice'); // icon that will display the choice of comp

const rockBtn = document.querySelector('#rock-btn'); // button of rock that user will click
const paperBtn = document.querySelector('#paper-btn'); // button of paper that user will click
const scissorsBtn = document.querySelector('#scissors-btn'); // button of scissors that user will click

const displayPlayerScore = document.querySelector('#player-score');
const displayComputerScore = document.querySelector('#computer-score');

let playerScore = 0;
let computerScore = 0;
let playerChoice, computerChoice;

const getComputerChoice = () => {
    // the generated random number is stored in the displayComputerChoice
    // the result will also be displayed in the UI
    
    const random = Math.floor(Math.random() * 1000);

    if (random % 3 === 0) {
        computerChoiceIcon.classList.remove('fa-question');
        computerChoiceIcon.classList.remove('fa-hand-scissors');
        computerChoiceIcon.classList.remove('fa-hand');
        computerChoiceIcon.classList.add('fa-hand-back-fist', 'fa-rotate-270', 'fa-2x');
        computerChoiceContainer.style.padding = '10px 19px';
        return 'Rock';
    } else if (random % 3 === 1) {
        computerChoiceIcon.classList.remove('fa-question');
        computerChoiceIcon.classList.remove('fa-hand-back-fist', 'fa-rotate-270', 'fa-2x');
        computerChoiceIcon.classList.remove('fa-hand-scissors');
        computerChoiceIcon.classList.add('fa-hand', 'fa-2x');
        computerChoiceContainer.style.padding = '10px 15px';
        return 'Paper';
    } else {
        computerChoiceIcon.classList.remove('fa-question');
        computerChoiceIcon.classList.remove('fa-hand-back-fist', 'fa-rotate-270', 'fa-2x');
        computerChoiceIcon.classList.remove('fa-hand');
        computerChoiceIcon.classList.add('fa-hand-scissors');
        computerChoiceContainer.style.padding = '10px 15px';
        return 'Scissors';
    }
}

const getPlayerChoice = (buttonId) => {
    // Reset player icon choice
    playerChoiceIcon.classList.remove('fa-question', 'fa-hand', 'fa-hand-back-fist', 'fa-rotate-90', 'fa-hand-scissors', 'fa-flip-horizontal');
    
    // Determine player's choice based on the button clicked
    if (buttonId === 'rock-btn') {
        playerChoiceIcon.classList.add('fa-hand-back-fist', 'fa-rotate-90', 'fa-2x');
        playerChoiceContainer.style.padding = '10px 17px';
        return 'Rock';
    } else if (buttonId === 'paper-btn') {
        playerChoiceIcon.classList.add('fa-hand', 'fa-1x');
        playerChoiceContainer.style.padding = '10px 13px';
        return 'Paper';
    } else if (buttonId === 'scissors-btn') {
        playerChoiceIcon.classList.add('fa-hand-scissors', 'fa-flip-horizontal', 'fa-1x');
        playerChoiceContainer.style.padding = '10px 13px';
        return 'Scissors';
    }
};

rockBtn.addEventListener('click', () => {
    playerChoice = getPlayerChoice('rock-btn');
    computerChoice = getComputerChoice();
    evaluateRound(computerChoice, playerChoice);
});

paperBtn.addEventListener('click', () => {
    playerChoice = getPlayerChoice('paper-btn');
    computerChoice = getComputerChoice();
    evaluateRound(computerChoice, playerChoice);
});

scissorsBtn.addEventListener('click', () => {
    playerChoice = getPlayerChoice('scissors-btn');
    computerChoice = getComputerChoice();
    evaluateRound(computerChoice, playerChoice);
});

const updateScoreboard = (result) => {
    if (result === 'TIE') {
        winnerResult.innerText = "IT'S A TIE";
        roundDescription.innerText = "Both entered the same choice";
    } else if (result === 'COMPUTER') {
        winnerResult.innerText = "COMPUTER WINS";
        roundDescription.innerText = `${computerChoice} beats ${playerChoice}`;
        computerScore++;
        displayComputerScore.innerText = `Computer: ${computerScore}`;
    } else if (result === 'PLAYER') {
        winnerResult.innerText = "YOU WIN";
        roundDescription.innerText = `${playerChoice} beats ${computerChoice}`;
        playerScore++;
        displayPlayerScore.innerText = `Player: ${playerScore}`;
    }
};

const evaluateRound = (computerChoice, playerChoice) => {
    if (playerChoice === computerChoice) {
        updateScoreboard('TIE');
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper" ||
    playerChoice === "Paper" && computerChoice === "Rock" ||
    playerChoice === "Rock" && computerChoice === "Scissors") {
        updateScoreboard('PLAYER');
    }
    else {
        updateScoreboard('COMPUTER');
    }
}