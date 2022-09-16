function getComputerChoice(){
    let x = Math.floor(Math.random()*3)
    if(x === 0){
        return "rock"
    } else if(x === 1){
        return "paper"
    } else{
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "tie"
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "player"
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "computer"
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        return "player"
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        return "computer"
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "player"
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "computer"
    }
}

function game(){
    let playerScore = 0
    let computerScore = 0
    let tieNum = 0
    while(computerScore < 4 || playerScore < 4){
        let playerChoice = prompt("Please enter your choice of either rock, paper, or scissors.")
        let winner = playRound(playerChoice,getComputerChoice())
        if(winner === "player"){
            prompt("Player wins")
            playerScore += 1
        }else if(winner === "computer"){
            prompt("Computer wins")
            computerScore += 1
        }else if(winner === "tie"){
            prompt("It was a tie!")
            tieNum += 1
        }
        prompt(`The current score is: Player with: ${playerScore} and the computer with: ${computerScore}`)
    }

    if(playerScore === 5){
        prompt("The player wins!")
    }else{
        prompt("The computer won :(")
    }


}

console.log(getComputerChoice())
console.log(playRound("paper","scissors"))
game()
