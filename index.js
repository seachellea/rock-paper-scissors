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

const rockIcon = document.querySelector('#rock-icon'); // actual rock icon

let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);

    if (random === 0) {
        return "Rock";
    } else if (random === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

const computerChoice = getComputerChoice();
console.log(`Computer choice is: ${computerChoice}`);

// ============= FUNCTIONS TO DISPLAY PLAYER CHOICES =============

const playerChoiceRock = () => {
    if(playerIconChoice.classList.contains('fa-question')) {
        playerIconChoice.classList.remove('fa-question')
        playerIconChoice.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-rotate-90', 'fa-2x');
        playerIconChoice.style.backgroundColor = '#fddd8b';
        playerChoiceContainer.style.padding = '10px 17px';
    } else if (playerIconChoice.classList.contains('fa-hand')) {
        playerIconChoice.classList.remove('fa-hand')
        playerIconChoice.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-rotate-90', 'fa-2x');
        playerIconChoice.style.backgroundColor = '#fddd8b';
        playerChoiceContainer.style.padding = '10px 17px';
    } else if (playerIconChoice.classList.contains('fa-hand-scissors', 'fa-flip-horizontal')) {
        playerIconChoice.classList.remove('fa-hand-scissors', 'fa-flip-horizontal');
        playerIconChoice.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-rotate-90', 'fa-2x');
        playerIconChoice.style.backgroundColor = '#fddd8b';
        playerChoiceContainer.style.padding = '10px 17px';
    }
}

const playerChoicePaper = () => {
    if(playerIconChoice.classList.contains('fa-question')) {
        playerIconChoice.classList.remove('fa-question')
        playerIconChoice.classList.add('fa-regular', 'fa-hand', 'fa-1x');
        playerIconChoice.style.backgroundColor = '#fddd8b';
        playerChoiceContainer.style.padding = '10px 13px';
    } else if (playerIconChoice.classList.contains('fa-hand-back-fist', 'fa-rotate-90')) {
        playerIconChoice.classList.remove('fa-hand-back-fist', 'fa-rotate-90')
        playerIconChoice.classList.add('fa-regular', 'fa-hand', 'fa-1x');
        playerIconChoice.style.backgroundColor = '#fddd8b';
        playerChoiceContainer.style.padding = '10px 13px';
    } else if (playerIconChoice.classList.contains('fa-hand-scissors', 'fa-flip-horizontal')) {
        playerIconChoice.classList.remove('fa-hand-scissors', 'fa-flip-horizontal');
        playerIconChoice.classList.add('fa-regular', 'fa-hand', 'fa-1x');
        playerIconChoice.style.backgroundColor = '#fddd8b';
        playerChoiceContainer.style.padding = '10px 13px';
    }
}

const playerChoiceScissors = () => {
    if(playerIconChoice.classList.contains('fa-question')) {
        playerIconChoice.classList.remove('fa-question')
        playerIconChoice.classList.add('fa-regular', 'fa-hand-scissors', 'fa-flip-horizontal', 'fa-1x');
        playerIconChoice.style.backgroundColor = '#fddd8b';
        playerChoiceContainer.style.padding = '10px 13px';
    } else if (playerIconChoice.classList.contains('fa-hand-back-fist', 'fa-rotate-90')) {
        playerIconChoice.classList.remove('fa-hand-back-fist', 'fa-rotate-90')
        playerIconChoice.classList.add('fa-regular', 'fa-hand-scissors', 'fa-flip-horizontal', 'fa-1x');
        playerIconChoice.style.backgroundColor = '#fddd8b';
        playerChoiceContainer.style.padding = '10px 13px';
    } else if (playerIconChoice.classList.contains('fa-hand')) {
        playerIconChoice.classList.remove('fa-hand')
        playerIconChoice.classList.add('fa-regular', 'fa-hand-scissors', 'fa-flip-horizontal', 'fa-1x');
        playerIconChoice.style.backgroundColor = '#fddd8b';
        playerChoiceContainer.style.padding = '10px 13px';
    }
}



const displayComputerChoice = () => {
    if(computerChoice === "Rock") {
        if (computerIconChoice.classList.contains('fa-question')) {
            computerIconChoice.classList.remove('fa-question');
            computerIconChoice.classList.add('fa-regular', 'fa-hand-back-fist', 'fa-rotate-270','fa-2x');
            computerIconChoice.style.backgroundColor = '#fddd8b';
            computerChoiceContainer.style.padding = '10px 17px';
        } 
    }
}

displayComputerChoice();

rockBtn.addEventListener('click', () => {
    console.log(`Player choice: Rock`);
    playerChoiceRock();

    // function that will inform computer that playerchoice is rock
    // const getPlayerChoice = () => {
    //     return "Rock";
    // }
    // const playerChoice = getPlayerChoice();
    // console.log(`Player choice is: ${playerChoice}`);
})

paperBtn.addEventListener('click', () => {
    console.log("Player choice: Paper");
    playerChoicePaper(); 
})

scissorsBtn.addEventListener('click', () => {
    console.log("Player choice: Scissors");
    playerChoiceScissors(); 
})


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