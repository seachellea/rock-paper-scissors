// Variables for the scoreboard heading for result modification
const winnerResult = document.getElementById('winner-result'); // will display who won (PLAYER WINS)
const roundDescription = document.getElementById('round-descrip'); // will display details of that round (Paper beats Rock)

// variables for the icon container and icon itself 
const playerChoiceContainer = document.getElementById('player-result'); // container/parent element of the icon that will display player choice
const playerChoiceIcon = document.getElementById('player-choice'); 
const computerChoiceContainer = document.getElementById('computer-result'); // container/parent element of the icon that will display computer choice
const computerChoiceIcon = document.getElementById('computer-choice'); 

// variables for buttons that will be given an eventlistener method
const rockBtn = document.querySelector('#rock-btn'); 
const paperBtn = document.querySelector('#paper-btn'); 
const scissorsBtn = document.querySelector('#scissors-btn'); 

// variables for score modification
const displayPlayerScore = document.querySelector('#player-score');
const displayComputerScore = document.querySelector('#computer-score');

// variables for modal
let modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('#modal');
const playAgainBtn = document.querySelector('#modal-button');
const modalMessage = document.querySelector('#modal-message');
const finalResult = document.querySelector('#final-result');

let playerScore = 0;
let computerScore = 0;

// assigning it as a global variable for easier access
let playerChoice, computerChoice;

const getComputerChoice = () => {
    // initializes a random number for the computer choice
    // And has the capability to modify the icon to be displayed
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
    // And edits the icon to be displayed in the player choice icon part (left container)
    // It also returns the value which is stored in the playerChoice variable
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
    // contains the event listeners for the buttons
    // computerChoice is invoked here because it is only right for the computer choice to display
        // once the user clicks on a button
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
    // updateScoreBoard is placed here because this function evaluate both player choices
    // the showModal function is invoked here because along with it is the 
        // updateScoreboard which increments and displays the score every round
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

    showModal();
}

const updateScoreboard = (result) => {
    // Modifies the scoreboard heading based on the result of each round
    // Increments player/computer score if win
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
        // Displays modal when one of the players reaches 5 points
        modalContainer.style.display = 'block';

        if(playerScore === 5) {
            modalMessage.innerText = "CONGRATULATIONS!";
            finalResult.innerText = `You won by a ${playerScore - computerScore}-point lead`;

        } else if (computerScore === 5) {
            modalMessage.innerText = "BETTER LUCK NEXT TIME";
            modal.style.width = '480px';
            modal.style.height = '230px';
            finalResult.innerText = `Computer won by a ${computerScore - playerScore}-point lead`;

        } else {
            modalMessage.innerText = "IT'S A TIE";

        }
        
    } else {
        // Hides modal until one of the players reaches 5 points
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
    
    // Reset round descriptions
    winnerResult.innerText = 'CHOOSE YOUR WEAPON';
    roundDescription.innerText = 'First to score 5 points wins the game';

    // Reset icons
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
    modal.style.width = '380px';
    modal.style.height = '210px';

    // Hide modal
    modalContainer.style.display = 'none';
};

playGame();
showModal();