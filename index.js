// Variables
const winnerResult = document.getElementById('winner-result'); // will display who won (PLAYER WINS)
const roundDescription = document.getElementById('round-descrip'); // will display details of that round (Paper beats Rock)

const playerChoiceContainer = document.getElementById('player-result'); // parent element/container of the icon that will display the choices of computer and player
const playerIconChoice = document.getElementById('player-choice'); // icon that will display the choice of player
const computerChoiceContainer = document.getElementById('computer-result'); // parent element/container of the icon that will display computer choice
const computerIconChoice = document.getElementById('computer-choice'); // icon that will display the choice of comp

const rockBtn = document.querySelector('#rock-btn'); // button of rock that user will click
const paperBtn = document.querySelector('#paper-btn'); // button of paper that user will click
const scissorsBtn = document.querySelector('#scissors-btn'); // button of scissors that user will click

const rockIcon = document.querySelector('#rock-icon');
const displayPlayerScore = document.querySelector('#player-score');
const displayComputerScore = document.querySelector('#computer-score');

let playerScore = 0;
let computerScore = 0;

const initializeComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);

    switch(random) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

// ============= FUNCTIONS TO DISPLAY PLAYER CHOICES ============= //

const playerChoiceRock = () => {
    if(playerIconChoice.classList.contains('fa-question')) {
        playerIconChoice.classList.remove('fa-question')
        playerIconChoice.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-rotate-90', 'fa-2x');
        playerChoiceContainer.style.padding = '10px 17px';
    } else if (playerIconChoice.classList.contains('fa-hand')) {
        playerIconChoice.classList.remove('fa-hand')
        playerIconChoice.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-rotate-90', 'fa-2x');
        playerChoiceContainer.style.padding = '10px 17px';
    } else if (playerIconChoice.classList.contains('fa-hand-scissors', 'fa-flip-horizontal')) {
        playerIconChoice.classList.remove('fa-hand-scissors', 'fa-flip-horizontal');
        playerIconChoice.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-rotate-90', 'fa-2x');
        playerChoiceContainer.style.padding = '10px 17px';
    }
}

const playerChoicePaper = () => {
    if(playerIconChoice.classList.contains('fa-question')) {
        playerIconChoice.classList.remove('fa-question')
        playerIconChoice.classList.add('fa-regular', 'fa-hand', 'fa-1x');
        playerChoiceContainer.style.padding = '10px 13px';
    } else if (playerIconChoice.classList.contains('fa-hand-back-fist', 'fa-rotate-90')) {
        playerIconChoice.classList.remove('fa-hand-back-fist', 'fa-rotate-90')
        playerIconChoice.classList.add('fa-regular', 'fa-hand', 'fa-1x');
        playerChoiceContainer.style.padding = '10px 13px';
    } else if (playerIconChoice.classList.contains('fa-hand-scissors', 'fa-flip-horizontal')) {
        playerIconChoice.classList.remove('fa-hand-scissors', 'fa-flip-horizontal');
        playerIconChoice.classList.add('fa-regular', 'fa-hand', 'fa-1x');
        playerChoiceContainer.style.padding = '10px 13px';
    }
}

const playerChoiceScissors = () => {
    if(playerIconChoice.classList.contains('fa-question')) {
        playerIconChoice.classList.remove('fa-question')
        playerIconChoice.classList.add('fa-regular', 'fa-hand-scissors', 'fa-flip-horizontal', 'fa-1x');
        playerChoiceContainer.style.padding = '10px 13px';
    } else if (playerIconChoice.classList.contains('fa-hand-back-fist', 'fa-rotate-90')) {
        playerIconChoice.classList.remove('fa-hand-back-fist', 'fa-rotate-90')
        playerIconChoice.classList.add('fa-regular', 'fa-hand-scissors', 'fa-flip-horizontal', 'fa-1x');
        playerChoiceContainer.style.padding = '10px 13px';
    } else if (playerIconChoice.classList.contains('fa-hand')) {
        playerIconChoice.classList.remove('fa-hand')
        playerIconChoice.classList.add('fa-regular', 'fa-hand-scissors', 'fa-flip-horizontal', 'fa-1x');
        playerChoiceContainer.style.padding = '10px 13px';
    }
}

// ============= END: FUNCTIONS TO DISPLAY PLAYER CHOICES ============= //

// ============= FUNCTIONS TO DISPLAY COMPUTER CHOICES ============= //

const computerChoiceRock = () => {
    if (computerIconChoice.classList.contains('fa-question')) {
        computerIconChoice.classList.remove('fa-question');
        computerIconChoice.classList.add('fa-hand-back-fist', 'fa-rotate-270','fa-2x');
        computerChoiceContainer.style.padding = '10px 17px';
    } else if (computerIconChoice.classList.contains('fa-hand')) {
        computerIconChoice.classList.remove('fa-hand');
        computerIconChoice.classList.add('fa-hand-back-fist', 'fa-rotate-270','fa-2x');
        computerChoiceContainer.style.padding = '10px 17px';
    } else if (computerIconChoice.classList.contains('fa-hand-scissors')) {
        computerIconChoice.classList.remove('fa-hand-scissors');
        computerIconChoice.classList.add('fa-hand-back-fist', 'fa-rotate-270','fa-2x');
        computerChoiceContainer.style.padding = '10px 17px';
    }
}

const computerChoicePaper = () => {
    if (computerIconChoice.classList.contains('fa-question')) {
        computerIconChoice.classList.remove('fa-question');
        computerIconChoice.classList.add('fa-hand', 'fa-1x');
        computerChoiceContainer.style.padding = '10px 13px';
    } else if (computerIconChoice.classList.contains('fa-hand-back-fist', 'fa-rotate-270')) {
        computerIconChoice.classList.remove('fa-hand-back-fist', 'fa-rotate-270');
        computerIconChoice.classList.add('fa-hand', 'fa-1x');
        computerChoiceContainer.style.padding = '10px 13px';
    } else if (computerIconChoice.classList.contains('fa-hand-scissors')) {
        computerIconChoice.classList.remove('fa-hand-scissors');
        computerIconChoice.classList.add('fa-hand', 'fa-1x');
        computerChoiceContainer.style.padding = '10px 13px';
    }
}

const computerChoiceScissors = () => {
    if (computerIconChoice.classList.contains('fa-question')) {
        computerIconChoice.classList.remove('fa-question');
        computerIconChoice.classList.add('fa-hand-scissors');
        computerChoiceContainer.style.padding = '10px 13px';
    } else if (computerIconChoice.classList.contains('fa-hand-back-fist', 'fa-rotate-270')) {
        computerIconChoice.classList.remove('fa-hand-back-fist', 'fa-rotate-270');
        computerIconChoice.classList.add('fa-hand-scissors');
        computerChoiceContainer.style.padding = '10px 13px';
    } else if (computerIconChoice.classList.contains('fa-hand')) {
        computerIconChoice.classList.remove('fa-hand');
        computerIconChoice.classList.add('fa-hand-scissors');
        computerChoiceContainer.style.padding = '10px 13px';
    }
}

// ============= END: FUNCTIONS TO DISPLAY COMPUTER CHOICES ============= //


const displayComputerChoice = () => {
    const computerChoice = initializeComputerChoice();

    switch (computerChoice) {
        case "Rock":
            computerChoiceRock();
            break;
        case "Paper":
            computerChoicePaper();
            break;
        case "Scissors":
            computerChoiceScissors();
            break;
    }  

    return computerChoice;
}


rockBtn.addEventListener('click', () => {
    const playerChoice = "Rock"
    computerChoice = displayComputerChoice();

    playerChoiceRock();

    if (playerChoice === "Rock" && computerChoice === "Rock") {
        winnerResult.innerText = "IT'S A TIE";
        roundDescription.innerText = "Both entered the same choice";
    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
        winnerResult.innerText = "COMPUTER WINS";
        roundDescription.innerText = "Paper beats Rock";
        computerScore++
        displayComputerScore.innerText = `Computer: ${computerScore}`;
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        winnerResult.innerText = "YOU WIN";
        roundDescription.innerText = "Rock beats Scissor";
        playerScore++;
        displayPlayerScore.innerText = `Player: ${playerScore}`;
    }
})

paperBtn.addEventListener('click', () => {
    const playerChoice = "Paper";
    computerChoice = displayComputerChoice();
    playerChoicePaper();

    if (playerChoice === "Paper" && computerChoice === "Paper") {
        winnerResult.innerText = "IT'S A TIE";
        roundDescription.innerText = "Both entered the same choice";
    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        winnerResult.innerText = "COMPUTER WINS";
        roundDescription.innerText = "Scissors beats Paper";
        computerScore++
        displayComputerScore.innerText = `Computer: ${computerScore}`;
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        winnerResult.innerText = "YOU WIN";
        roundDescription.innerText = "Paper beats Rock";
        playerScore++;
        displayPlayerScore.innerText = `Player: ${playerScore}`;
    }
})

scissorsBtn.addEventListener('click', () => {
    const playerChoice = "Scissors";
    computerChoice = displayComputerChoice();
    playerChoiceScissors(); 

    if (playerChoice === "Scissors" && computerChoice === "Scissors") {
        winnerResult.innerText = "IT'S A TIE";
        roundDescription.innerText = "Both entered the same choice";
    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        winnerResult.innerText = "COMPUTER WINS";
        roundDescription.innerText = "Rock beats Scissors";
        computerScore++
        displayComputerScore.innerText = `Computer: ${computerScore}`;
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        winnerResult.innerText = "YOU WIN";
        roundDescription.innerText = "Scissors beats Paper";
        playerScore++;
        displayPlayerScore.innerText = `Player: ${playerScore}`;
    }
})

const displayModal = () => {
    if (playerScore === 5 || computerScore === 5) {
        // insert modal here
    }
}


// // ======== GAME LOOP FOR 5 ROUNDS ============ //

// const game = () => {

//     for (round = 1; round <= 5; round ++) {

//         console.log(`Round #${round}`);

//         // ======== PROMPT PLAYER CHOICE ============ //
//         const getPlayerChoice = () => {
//             let pChoice = prompt("What is your pick? (Rock, Paper, Scissors): ");
//             pChoice = pChoice.charAt(0).toUpperCase() + pChoice.slice(1).toLowerCase();

//             if (pChoice === "Rock" || pChoice === "Paper" || pChoice === "Scissors") {
//                 return pChoice;
//             } else {
//                 return "Invalid choice";
//             }
//         }

//         const playerChoice = getPlayerChoice();
//         const computerChoice = getComputerChoice();

//         // ======== PLAYER & COMPUTER CHOICE VERIFICATION ============ //
        // const playRound = (playerChoice, computerChoice) => {
    
        //     if (playerChoice === computerChoice) {
        //         return "It's a tie!";
        //     }
        //     else if (playerChoice === "Scissors" && computerChoice === "Paper" ||
        //     playerChoice === "Paper" && computerChoice === "Rock" ||
        //     playerChoice === "Rock" && computerChoice === "Scissors") {
        //         playerScore++;
        //         return `You win! ${playerChoice} beats ${computerChoice}.`;

        //     }
        //     else {
        //         computerScore++;
        //         return `Computer wins. ${computerChoice} beats ${playerChoice}.`;
        //     }
        // }
        
//         console.log(`You chose: ${playerChoice}; Computer chose: ${computerChoice}`);
//         const roundResult = playRound(playerChoice, computerChoice);
//         console.log(roundResult);
//         console.log(`Your score: ${playerScore} | Computer score: ${computerScore}`); 
//     }

//     if (playerScore > computerScore) {
//         console.log("FINAL RESULT: You win the game! Congratulations!");
//     }
//     else {
//         console.log("FINAL RESULT: Computer won the game. Better luck next time!");
//     }
// }

// game();