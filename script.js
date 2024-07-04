let humanScore = 0;
let computerScore = 0;

alert("Welcome to the Game: Rock Paper Scissors");
console.log("Welcome to the Game: Rock Paper Scissors");

// Get a random choice from the computer from - "Rock" or "Paper" or "Scissors".
function getComputerChoice() {
    let computerChoice;
    // Generate a random natural number using "Math.random()" between 1 and 100.
    let randomNumber = Math.floor(Math.random()*100)+1;
    // Generate a random choice by using random numbers.
    if (randomNumber <= 33) {
        computerChoice = "Rock";
    } else if (randomNumber > 33 && randomNumber <= 66) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    console.log("Computer's Choice was: "+computerChoice);
    return computerChoice;
}



// Get the choice of the user.
function getHumanChoice() {
    let humanChoice = prompt("Enter your choice (Rock/Paper/Scissors):", '');
    // Capitallize the choice to ensure case-insensitivity.
    let newHumanChoice = humanChoice.toUpperCase();
    // Check if the user entered the valid choice.
    if (newHumanChoice==="ROCK" || newHumanChoice==="PAPER" || newHumanChoice==="SCISSORS") {
        console.log("Your choice was: "+newHumanChoice);
        return newHumanChoice;
    } else {
        alert("Invalid Choice! Try again!");
        getHumanChoice();   //Call the function again.
    }
}



function playRound(humanChoice, computerChoice) {
    let newHumanChoice = humanChoice.toUpperCase();
    let newComputerChoice = computerChoice.toUpperCase();

    if (newHumanChoice==="ROCK" && newComputerChoice==="SCISSORS") {
        alert("You won! Rock beats scissors");
        console.log("RESULT: You won! Rock beats scissors");
        humanScore++;
    } else if (newHumanChoice==="PAPER" && newComputerChoice==="ROCK") {
        alert("You won! Paper beats rock");
        console.log("RESULT: You won! Paper beats rock");
        humanScore++;
    } else if (newHumanChoice==="SCISSORS" && newComputerChoice==="PAPER") {
        alert("You won! Scissors beats paper");
        console.log("RESULT: You won! Scissors beats paper");
        humanScore++;
    } else if (newHumanChoice==="ROCK" && newComputerChoice==="PAPER") {
        alert("You lost! Paper beats rock");
        console.log("RESULT: You lost! Paper beats rock");
        computerScore++;
    } else if (newHumanChoice==="SCISSORS" && newComputerChoice==="ROCK") {
        alert("You lost! Rock beats Scissors");
        console.log("RESULT: You lost! Rock beats Scissors");
        computerScore++;
    } else if (newHumanChoice==="PAPER" && newComputerChoice==="SCISSORS") {
        alert("You lost! Scissors beats paper");
        console.log("RESULT: You lost! Scissors beats paper");
        computerScore++;
    } else if (newHumanChoice===newComputerChoice) {
        alert("It's a draw.");
        console.log("RESULT: It's a draw.");
        computerScore++;
        humanScore++;
    }
}



function playGame() {
    for (let i = 0; i < 5; i++) {
        alert("Round "+(i+1));
        console.log("-------Round "+(i+1)+"---------");
        const humanSelection = getHumanChoice();    // Store humanChoice
        const computerSelection = getComputerChoice();  // Store computerChoice
        playRound(humanSelection, computerSelection);
    }
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if (humanScore > computerScore) {
        alert("You Won the match!");
        console.log("RESULT: You Won the match!");
    } else if (computerScore > humanScore) {
        alert("Computer Wins! You lose!");
        console.log("RESULT: Computer Wins! You lose!");
    } else {
        alert("It's a draw");
        console.log("RESULT: It's a draw");
    }
}

playGame();
