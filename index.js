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
console.log(computerChoice);

// ======== PROMPT PLAYER CHOICE ============ //

const getPlayerChoice = () => {
    let pChoice = prompt("What is your pick? (Rock, Paper, Scissors): ");
    pChoice = pChoice.charAt(0).toUpperCase() + pChoice.slice(1).toLowerCase();

    if (pChoice === "Rock" || pChoice === "Paper" || pChoice === "Scissors") {
        return pChoice;
    } else {
        return "Invalid choice";
    }
}

const playerChoice = getPlayerChoice();
console.log(playerChoice);

// ======== PROMPT PLAYER CHOICE ============ //

const playRound = (playerChoice, computerChoice) => {
    
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    else if (playerChoice === "Scissors" && computerChoice === "Paper" ||
    playerChoice === "Paper" && computerChoice === "Rock" ||
    playerChoice === "Rock" && computerChoice === "Scissors") {
        return `Player wins this round! ${playerChoice} beats ${computerChoice}.`;
    }
    else {
        return `Computer wins this round. ${computerChoice} beats ${playerChoice}.`;
    }
}

const roundResult = playRound(playerChoice, computerChoice);
console.log(roundResult);