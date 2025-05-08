function getComputerChoice() {
    randomNum = Math.random()
    if (randomNum < 0.33) {
        computerChoice = "rock";
    } else if (randomNum >= 0.33 && randomNum <= 0.66) {
        computerChoice = "paper";
    } else if (randomNum > 0.66) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    humanChoice = prompt("rock, paper, or scissors?").toLowerCase()
    return humanChoice;
}

function playGame() {

    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            winner = "You win! Rock beats Scissors.";
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            winner = "You lose! Paper beats Rock.";
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            winner = "You win! Scissors beat Paper.";
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            winner = "You lose! Rock beats Scissors.";
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            winner = "You win! Paper beats Rock.";
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            winner = "You lose! Scissors beats Paper.";
        } else {
            winner = `Draw! You both chose ${humanChoice}.`;
        }
        return winner;
    }
    return(playRound(humanSelection, computerSelection))
}

let humanScore = 0;
let computerScore = 0;

while (humanScore < 5 && computerScore < 5) {
    conclusion = playGame()
    if (conclusion.includes("win")) {
        humanScore++;
    } else if (conclusion.includes("lose")) {
        computerScore++;
    }
    console.log(conclusion)
    console.log(`Player: ${humanScore}`)
    console.log(`Computer: ${computerScore}`)
}

if (humanScore === 5) {
    console.log("%cYou won the game! Great Job.", 'font-size: 16px; color: green;')
} else if (computerScore === 5) {
    console.log("%cYou lost the game! Better luck next time.", 'font-size: 16px; color: red;')
}
