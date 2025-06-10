let humanScore = 0;
let computerScore = 0;
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getComputerChoice(){
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

function playRound(){
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
    }
    else {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}!`)
    }
};

function playGame(){
    for (let i = 0; i<5; i++) {
        playRound()
    }
};

playGame();