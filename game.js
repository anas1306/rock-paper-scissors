 function getComputerChoice() {
     randomNum = Math.random()
     if (randomNum < 0.33) {
         computerChoice = "Rock";
     } else if (randomNum >= 0.33 && randomNum <= 0.66) {
         computerChoice = "Paper";
     } else if (randomNum > 0.66) {
         computerChoice = "Scissors";
     }
     return computerChoice;
 }

 function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        winner = "You win! Rock beats Scissors.";
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        winner = "You lose! Paper beats Rock.";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        winner = "You win! Scissors beat Paper.";
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        winner = "You lose! Rock beats Scissors.";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        winner = "You win! Paper beats Rock.";
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        winner = "You lose! Scissors beats Paper.";
    } else {
        winner = `Draw! You both chose ${humanChoice}.`;
    }
    return winner;
}

function win() {
    const endText = document.createElement("div");
    endText.textContent = "You won the game!! Congratulations.";
    endText.style.backgroundColor = "green";
    endText.style.fontSize = "30px"
    i = box.children.length
    while (i > 1) {
        box.removeChild(box.lastElementChild)
        i -= 1;
    }
    box.appendChild(endText)
}

function lose() {
    const endText = document.createElement("div");
    endText.textContent = "You lost the game!! Boohoo.";
    endText.style.backgroundColor = "red";
    endText.style.fontSize = "30px"
    i = box.children.length
    while (i > 1) {
        box.removeChild(box.lastElementChild)
        i -= 1;
    }
    box.appendChild(endText)
}

const box = document.querySelector(".resultBox");

const rock = document.querySelector("#choice1");
const paper = document.querySelector("#choice2");
const scissors = document.querySelector("#choice3");
let won = 0;
let lost = 0;

rock.addEventListener("click", () => {
    if (won === 5) {
        win()
        won = 0;
        lost = 0;
    } else if (lost === 5) {
        lose()
        won = 0;
        lost = 0;
    } else {
        const result = playRound(`${rock.textContent}`, getComputerChoice());
        const resultText = document.createElement("div");
        resultText.textContent = result;
        if (result === "You win! Rock beats Scissors.") {
            resultText.classList.add("win");
            box.appendChild(resultText);
            won = won + 1;
        } else if (result === "You lose! Paper beats Rock.") {
            resultText.classList.add("lose")
            box.appendChild(resultText)
            lost = lost + 1;
        } else {
            resultText.classList.add("draw");
            box.appendChild(resultText);
        }
    }
})
paper.addEventListener("click", () => {
    if (won === 5) {
        win()
        won = 0;
    } else if (lost === 5) {
        lose()
        lost = 0;
    } else {
        const result = playRound(`${paper.textContent}`, getComputerChoice());
        const resultText = document.createElement("div");
        resultText.textContent = result;
        if (result === "You win! Paper beats Rock.") {
            resultText.classList.add("win");
            box.appendChild(resultText);
            won = won + 1;
        } else if (result === "You lose! Scissors beats Paper.") {
            resultText.classList.add("lose");
            box.appendChild(resultText);
            lost = lost + 1;
        } else {
            resultText.classList.add("draw");
            box.appendChild(resultText);
        }
    }
})
scissors.addEventListener("click", () => {
    if (won === 5) {
        win()
        won = 0;
    } else if (lost === 5) {
        lose()
        lost = 0;
    } else {
        const result = playRound(`${scissors.textContent}`, getComputerChoice());
        const resultText = document.createElement("div");
        resultText.textContent = result;
        if (result === "You win! Scissors beats Paper.") {
            resultText.classList.add("win");
            box.appendChild(resultText);
            won = won + 1;
        } else if (result === "You lose! Rock beats Scissors.") {
            resultText.classList.add("lose");
            box.appendChild(resultText);
            lost = lost + 1;
        } else {
            resultText.classList.add("draw")
            box.appendChild(resultText)
        }
    }
})
