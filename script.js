let humanScore = 0;
let computerScore = 0;
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";



const container = document.querySelector('#container')

const Rock = document.createElement('button');
Rock.textContent = "Rock";
Rock.addEventListener("click", () => {
    humanChoice = rock
    playRound();
})
container.appendChild(Rock)
const Paper = document.createElement('button');
Paper.textContent = "Paper";
Paper.addEventListener("click", () => {
    humanChoice = paper;
    playRound();
})
container.appendChild(Paper)
const Scissors = document.createElement('button');
Scissors.textContent = "Scissors";
Scissors.addEventListener("click", () => {
    humanChoice = scissors;
    playRound();
})
container.appendChild(Scissors)

const textContainer = document.createElement('div')
textContainer.classList.add('textContainer')
container.appendChild(textContainer)

//functions part(functionality)

function getComputerChoice(){//1.Function to get choice of computer
    function threeRandomValues(num){
        return Math.floor(Math.random()*num)
    };
    let randomInt = threeRandomValues(3);
    if (randomInt == 0){
        return rock;
    }
    else if (randomInt == 1){
        return paper;
    }
    else if(randomInt == 2){
        return scissors;
    } 
};


let roundsPlayed = 0;
const totalRounds = 5;

function playRound() {
    if (roundsPlayed >= totalRounds) return; // Prevent extra rounds

    let computerChoice = getComputerChoice();
    if (humanChoice == computerChoice) {
        textContainer.textContent = "It's a tie!";
    }
    else if (
        humanChoice == "Rock" && computerChoice == "Scissors" ||
        humanChoice == "Scissors" && computerChoice == "Paper" ||
        humanChoice == "Paper" && computerChoice == "Rock"
    ) {
        textContainer.textContent = `You win, ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    }
    else {
        textContainer.textContent = `You lose, ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    }

    roundsPlayed++;
    textContainer.textContent += `\nScore: You ${humanScore} - Computer ${computerScore} (Round ${roundsPlayed}/${totalRounds})`;

    if (roundsPlayed === totalRounds) {
        // Disable buttons
        Rock.disabled = true;
        Paper.disabled = true;
        Scissors.disabled = true;

        // Show final result
        if (humanScore > computerScore) {
            textContainer.textContent += `\nYou won the match!`;
        } else if (humanScore < computerScore) {
            textContainer.textContent += `\nUnfortunately, you lost.`;
        } else {
            textContainer.textContent += `\nUnexpectedly, it's a tie.`;
        }
    }
}
