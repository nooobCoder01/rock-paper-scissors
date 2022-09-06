// 
const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")

// gather all the possible choices/buttons under one varibale
const possibleChoices = document.querySelectorAll(".options")


//For each click on one of the buttons we want ot do these thing
//Evene listeneer added to pick up all the clicks that we have.
let playerScore = 0;
let compScore = 0;

possibleChoices.forEach(possibleChoice =>{
    possibleChoice.addEventListener("click", function () {
        if (playerScore < 5 && compScore < 5){
            const pInput = this.value;
            const cInput = generateComputerChoice()

            computerChoiceDisplay.innerHTML = compScore
            userChoiceDisplay.innerHTML = playerScore

            roundWinner = getResult(cInput, pInput)

            if (roundWinner === "player") { playerScore++}
            if (roundWinner === "computer") { compScore++ }

            computerChoiceDisplay.innerHTML = compScore
            userChoiceDisplay.innerHTML = playerScore
        } 
        else {
            const winner = playerScore === 5 
            ? "Congratulations!! You win the game!" 
            : "Try again! Computer wins the game :("

            resultDisplay.innerHTML = winner
        }
        
        
    })
})

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    
    if (randomNumber === 1){
        return computerChoice = "rock"
    }

    if (randomNumber === 2){
        return computerChoice = "scissors"
    }

    if (randomNumber === 3){
        return computerChoice = "paper"
    }
    // computerChoiceDisplay.innerHTML = computerChoice
}


function getResult(computerChoice, userChoice) {
    if (computerChoice === userChoice){
        result = "It's a draw"
        resultDisplay.innerHTML = result
    }

    if (computerChoice === "rock" && userChoice === "paper"){
        result = "Woohoo you win! paper beats rock!"
        resultDisplay.innerHTML = result
        return "player"
    }
    if (computerChoice === "rock" && userChoice === "scissors"){
        result = "Oh no you lose! rock beats scissors!"
        resultDisplay.innerHTML = result
        return "computer"
    }
    if (computerChoice === "paper" && userChoice === "scissors"){
        result = "Woohoo you win! scissors beats paper!"
        resultDisplay.innerHTML = result
        return "player"
    }
    if (computerChoice === "paper" && userChoice === "rock"){
        result = "Oh no you lose! paper beats rock!"
        resultDisplay.innerHTML = result
        return "computer"
    }
    if (computerChoice === "scissors" && userChoice === "rock"){
        result = "Woohoo you win! rock beats scissors!"
        resultDisplay.innerHTML = result
        return "player"
    }
    if (computerChoice === "scissors" && userChoice === "paper"){
        result = "Oh no you lose! scissors beats paper!"
        resultDisplay.innerHTML = result
        return "computer"
    }

    
}

function updateScores(playerScore, compScore, roundWinner){
    if (roundWinner === "player") { playerScore++}
    if (roundWinner === "computer") { compScore++ }

    computerChoiceDisplay.innerHTML = compScore
    userChoiceDisplay.innerHTML = playerScore
}

function findWinner() {
    const winner = playerScore === 5 
    ? "Congratulations!! You win the game!" 
    : "Try again! Computer wins the game :("
}