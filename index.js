// let playerScore = 0;
// let computerScore = 0;

// const getComputerChoice = () => {
//     let random = Math.floor(Math.random() * 3);

//     if (random === 0) {
//         return "Rock";
//     } else if (random === 1) {
//         return "Paper";
//     } else {
//         return "Scissors";
//     }
// }

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
//         const playRound = (playerChoice, computerChoice) => {
    
//             if (playerChoice === computerChoice) {
//                 return "It's a tie!";
//             }
//             else if (playerChoice === "Scissors" && computerChoice === "Paper" ||
//             playerChoice === "Paper" && computerChoice === "Rock" ||
//             playerChoice === "Rock" && computerChoice === "Scissors") {
//                 playerScore++;
//                 return `You win! ${playerChoice} beats ${computerChoice}.`;

//             }
//             else {
//                 computerScore++;
//                 return `Computer wins. ${computerChoice} beats ${playerChoice}.`;
//             }
//         }
        
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