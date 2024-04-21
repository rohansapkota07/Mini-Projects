const choices = document.querySelectorAll(".choice")
let userScore = 0
let compScore = 0
let displayMsg = document.querySelector("#msg")
let playerScoreBoard = document.querySelector(".player-score")
let compScoreBoard = document.querySelector(".comp-score")

const genCompChoice = () => {
    let compChoices = ["rock", "paper", "scissors"]
    let randInd = Math.floor(Math.random() * 3)
    return compChoices[randInd];
}
const updateScore = (userScore, compScore) => {
    playerScoreBoard.innerText = userScore
    compScoreBoard.innerText = compScore

}
const displayWinner = (userWin, userChoice, compChoice) => {
    if (userChoice === compChoice) {
        displayMsg.innerText = "Game Was Draw! Play Again."
        displayMsg.style.backgroundColor = "black"
    }
    else if (userWin === true) {
        displayMsg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        displayMsg.style.backgroundColor = "green"
        userScore = userScore + 1
    } else {
        displayMsg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`
        displayMsg.style.backgroundColor = "red"
        compScore = compScore + 1
    }
    updateScore(userScore, compScore)
}
const checkWinner = (userChoice, compChoice) => {
    let userWin
    if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true
        console.log(userWin)
    } else if (userChoice === "paper") {
        userWin = compChoice === "rock" ? true : false
        console.log(userWin)
    } else {
        userWin = compChoice === "rock" ? false : true
        console.log(userWin)
    }
    displayWinner(userWin, userChoice, compChoice)
}
const playGame = (choices) => {
    choices.forEach(choice => {
        choice.addEventListener("click", () => {
            const userChoice = choice.id
            // const userChoice = choice.getAttribute("id")

            let compChoice = genCompChoice()
            checkWinner(userChoice, compChoice)
        })
    });
}
playGame(choices)
