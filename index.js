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

let modalContainer = document.querySelector('.modal-container');
const playAgainBtn = document.querySelector('#modal-button');
const modalMessage = document.querySelector('#modal-message');

let playerScore = 0;
let computerScore = 0;
let playerChoice, computerChoice;

const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 1000);

    if (random % 3 === 0) {
        computerChoiceIcon.classList.remove('fa-question');
        computerChoiceIcon.classList.remove('fa-hand-scissors');
        computerChoiceIcon.classList.remove('fa-hand');
        computerChoiceIcon.classList.add('fa-hand-back-fist', 'fa-rotate-270');
        computerChoiceContainer.style.padding = '10px 17px';
        return 'Rock';
    } else if (random % 3 === 1) {
        computerChoiceIcon.classList.remove('fa-question');
        computerChoiceIcon.classList.remove('fa-hand-back-fist', 'fa-rotate-270');
        computerChoiceIcon.classList.remove('fa-hand-scissors');
        computerChoiceIcon.classList.add('fa-hand');
        computerChoiceContainer.style.padding = '10px 13px';
        return 'Paper';
    } else {
        computerChoiceIcon.classList.remove('fa-question');
        computerChoiceIcon.classList.remove('fa-hand-back-fist', 'fa-rotate-270');
        computerChoiceIcon.classList.remove('fa-hand');
        computerChoiceIcon.classList.add('fa-hand-scissors');
        computerChoiceContainer.style.padding = '10px 13px';
        return 'Scissors';
    }
}

const getPlayerChoice = (buttonId) => {
    // Reset player icon choice
    playerChoiceIcon.classList.remove('fa-question', 'fa-hand', 'fa-hand-back-fist', 'fa-rotate-90', 'fa-hand-scissors', 'fa-flip-horizontal');
    
    // Determine player's choice based on the button clicked
    if (buttonId === 'rock-btn') {
        playerChoiceIcon.classList.add('fa-hand-back-fist', 'fa-rotate-90',);
        playerChoiceContainer.style.padding = '10px 17px';
        return 'Rock';
    } else if (buttonId === 'paper-btn') {
        playerChoiceIcon.classList.add('fa-hand');
        playerChoiceContainer.style.padding = '10px 13px';
        return 'Paper';
    } else if (buttonId === 'scissors-btn') {
        playerChoiceIcon.classList.add('fa-hand-scissors', 'fa-flip-horizontal');
        playerChoiceContainer.style.padding = '10px 13px';
        return 'Scissors';
    }
};

const playGame = () => {
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
}

const evaluateRound = (computerChoice, playerChoice) => {
    if (playerChoice === computerChoice) {
        updateScoreboard('TIE');
        showModal();
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper" ||
    playerChoice === "Paper" && computerChoice === "Rock" ||
    playerChoice === "Rock" && computerChoice === "Scissors") {
        updateScoreboard('PLAYER');
        showModal();
    }
    else {
        updateScoreboard('COMPUTER');
        showModal();
    }
}

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

const showModal = () => {
    if (playerScore === 5 || computerScore === 5) {
        modalContainer.style.display = 'block';

        if(playerScore === 5) {
            modalMessage.innerText = "YOU WON";
        } else if (computerScore === 5) {
            modalMessage.innerText = "YOU LOST";
        } else {
            modalMessage.innerText = "IT'S A TIE";
        }
        
    } else {
        modalContainer.style.display = 'none';
    }
}

playAgainBtn.addEventListener('click', () => {
    resetGame();
})

const resetGame = () => {
    // Reset scores
    playerScore = 0;
    computerScore = 0;
    
    winnerResult.innerText = 'CHOOSE YOUR WEAPON';
    roundDescription.innerText = 'First to score 5 points wins the game';

    playerChoiceIcon.classList.remove('fa-question', 'fa-hand', 'fa-hand-back-fist', 'fa-rotate-90', 'fa-hand-scissors', 'fa-flip-horizontal');
    playerChoiceIcon.classList.add('fa-question');
    playerChoiceContainer.style.padding = '10px 25px';
    computerChoiceIcon.classList.remove('fa-question', 'fa-hand', 'fa-hand-back-fist', 'fa-rotate-90', 'fa-hand-scissors', 'fa-flip-horizontal', 'fa-rotate-270');
    computerChoiceIcon.classList.add('fa-question');
    computerChoiceContainer.style.padding = '10px 25px';

    // Reset score displays
    displayPlayerScore.innerText = 'Player: 0';
    displayComputerScore.innerText = 'Computer: 0';

    // Reset modal message
    modalMessage.innerText = '';

    // Hide modal
    modalContainer.style.display = 'none';
};

playGame();
showModal();