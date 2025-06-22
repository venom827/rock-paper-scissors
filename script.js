let humanScore = 0;
let computerScore = 0;
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

//DOM or UI part

const container = document.querySelector('div')

const Rock = document.createElement('button');
Rock.textContent = "Rock";
Rock.addEventListener("click", () => {
    playRound();
})
container.appendChild(Rock)
const Paper = document.createElement('button');
Paper.textContent = "Paper";
Paper.addEventListener("click", () => {
    playRound();
})
container.appendChild(Paper)
const Scissors = document.createElement('button');
Scissors.textContent = "Scissors";
Scissors.addEventListener("click", () => {
    playRound();
})
container.appendChild(Scissors)

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

function getHumanChoice(){
    let userInput = prompt("What do you choose?");
    if (userInput.toUpperCase() == "ROCK"){
        return rock
    }
    else if (userInput.toUpperCase() == "PAPER"){
        return paper
    }
    else if (userInput.toUpperCase() == "SCISSORS"){
        return scissors
    }
};
function playRound(){//2.Game rules
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice == computerChoice){
        console.log("It's a tie!")
    }
    else if(
        humanChoice == "Rock" && computerChoice == "Scissors" ||
        humanChoice == "Scissors" && computerChoice == "Paper" ||
        humanChoice == "Paper" && computerChoice == "Rock" 
    )
    {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`)
        humanScore++
    }
    else {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}!`)
        computerScore++
    }
};

function playGame(){//3.Playing games
        playRound();
        console .log(`You won ${humanScore} matches while computer won ${computerScore} matches!`)
};

playGame();
if (humanScore>computerScore){
    console.log("You won the match!")
}
else if( humanScore<computerScore){
    console.log("Unfortunately. you lost")
}
else{
    console.log("Unexpectedly, it'a a tie")
}
