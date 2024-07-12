let humanScore = 0, computerScore=0;
console.log("Welcome to the Game: Rock Paper Scissors");

let humanChoose;

// Get a random choice from the computer from - "Rock" or "Paper" or "Scissors".
function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random()*3)+1;   // Create a random number: 1, 2, or 3.

    // Select "Rock", "Paper" or "Scissors" based on the randomNumber.
    if (randomNumber === 1) {
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    console.log("Computer's Choice was: "+computerChoice);
    return computerChoice;
}



// Get the choice of the user.
// function getHumanChoice() {
//     let humanChoice = prompt("Enter your choice (Rock/Paper/Scissors):", '');
//     // Capitallize the choice to ensure case-insensitivity.
//     let newHumanChoice = humanChoice.toUpperCase();
//     // Check if the user entered the valid choice.
//     if (newHumanChoice==="ROCK" || newHumanChoice==="PAPER" || newHumanChoice==="SCISSORS") {
//         console.log("Your choice was: "+newHumanChoice);
//         return newHumanChoice;
//     } else {
//         alert("Invalid Choice! Try again!");
//         getHumanChoice();   //Call the function again.
//     }
// }


function callPlayRound(hChoice) {
    while ((humanScore<5) && (computerScore<5)) {
        playRound(hChoice, getComputerChoice());
        break;
    }
    
    let winner = document.querySelector('.winner');
    if (humanScore>=5 || computerScore>=5) {
        if (humanScore > computerScore) {
            winner.textContent = 'You Won!';
        } else if (computerScore > humanScore) {
            winner.textContent = 'Computer Wins!';
        }
    }
}


function playRound(humanChoice, computerChoice) {

    let newHumanChoice = humanChoice.toUpperCase();
    let newComputerChoice = computerChoice.toUpperCase();
    
    let dispText;

    if (newHumanChoice==="ROCK" && newComputerChoice==="SCISSORS") {
        dispText = "RESULT: You won! Rock beats scissors";
        display.textContent = dispText;
        humanScore++;
    } else if (newHumanChoice==="PAPER" && newComputerChoice==="ROCK") {
        dispText = "RESULT: You won! Paper beats rock";
        display.textContent = dispText;
        humanScore++;
    } else if (newHumanChoice==="SCISSORS" && newComputerChoice==="PAPER") {
        dispText = "RESULT: You won! Scissors beats paper";
        display.textContent = dispText;
        humanScore++;
    } else if (newHumanChoice==="ROCK" && newComputerChoice==="PAPER") {
        dispText = "RESULT: You lost! Paper beats rock";
        display.textContent = dispText;
        computerScore++;
    } else if (newHumanChoice==="SCISSORS" && newComputerChoice==="ROCK") {
        dispText = "RESULT: You lost! Rock beats Scissors";
        display.textContent = dispText;
        computerScore++;
    } else if (newHumanChoice==="PAPER" && newComputerChoice==="SCISSORS") {
        dispText = "RESULT: You lost! Scissors beats paper";
        display.textContent = dispText;
        computerScore++;
    } else if (newHumanChoice===newComputerChoice) {
        dispText = "RESULT: It's a draw.";
        display.textContent = dispText;
    }
    score.textContent = `HUMAN SCORE: ${humanScore}, COMPUTER SCORE: ${computerScore}`;
}


let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let display = document.querySelector('.display');
let score = document.querySelector('.score');

rock.addEventListener('click', () => {
    humanChoose = 'rock';
    callPlayRound(humanChoose);
});
paper.addEventListener('click', () => {
    humanChoose = 'paper';
    callPlayRound(humanChoose);
});
scissors.addEventListener('click', () => {
    humanChoose = 'scissors';
    callPlayRound(humanChoose);
});



// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         alert("Round "+(i+1));
//         console.log("-------Round "+(i+1)+"---------");
//         const humanSelection = getHumanChoice();    // Store humanChoice
//         const computerSelection = getComputerChoice();  // Store computerChoice
//         playRound(humanSelection, computerSelection);
//     }
//     console.log(`Your Score: ${humanScore}`);
//     console.log(`Computer Score: ${computerScore}`);
//     if (humanScore > computerScore) {
//         alert("You Won the match!");
//         console.log("RESULT: You Won the match!");
//     } else if (computerScore > humanScore) {
//         alert("Computer Wins! You lose!");
//         console.log("RESULT: Computer Wins! You lose!");
//     } else {
//         alert("It's a draw");
//         console.log("RESULT: It's a draw");
//     }
// }


// playGame();
