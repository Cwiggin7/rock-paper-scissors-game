const gameContainer = document.getElementById('game-container');

document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('starter-container').remove()
    gameContainer.style.display = 'flex'
})

class Game {
    playerScore = 0
    computerScore = 0
    
    constructor(playerScoreDisplay, computerScoreDisplay, resultsText) {
        this.playerScoreDisplay = playerScoreDisplay
        this.computerScoreDisplay = computerScoreDisplay
        this.resultsText = resultsText
    }

    clear() {
        this.playerScore = 0
        this.computerScore = 0
        playerScoreDisplay.innerText = playerScoreDisplay.innerText.slice(0, -1) + '0'
        computerScoreDisplay.innerText = computerScoreDisplay.innerText.slice(0, -1) + '0'
    }

    playRound(playerChoice) {
        const computerChoice = this.computerChoose()
        if (computerChoice === playerChoice) {
            resultsText.innerText = 'Tie round!'
        }
        else if ((computerChoice === 'rock' && playerChoice === 'scissors') ||
                (computerChoice === 'paper' && playerChoice === 'rock') ||
                (computerChoice === 'scissors' && playerChoice === 'paper')) {
                    resultsText.innerText = `Computer won this round. ${computerChoice} beats ${playerChoice}`
                    this.computerScore++
                    computerScoreDisplay.innerText = computerScoreDisplay.innerText.slice(0, -1) + this.computerScore
                }
        else {
            resultsText.innerText = `You won this round! ${playerChoice} beats ${computerChoice}`
            this.playerScore++
            playerScoreDisplay.innerText = playerScoreDisplay.innerText.slice(0, -1) + this.playerScore
        }
        this.checkForWin()
    }

    computerChoose() {
        let choices = ['rock', 'paper', 'scissors']
        return choices[~~(choices.length * Math.random())]
    }

    checkForWin() {
        if (this.playerScore === 5) {
            resultsText.innerText = 'You won the game!'
            this.clear()
        }
        else if (this.computerScore === 5) {
            resultsText.innerText = 'The computer won the game - better luck next time'
            this.clear()
        }
    }
}

const playerScoreDisplay = document.getElementById('player-score-display')
const computerScoreDisplay = document.getElementById('computer-score-display')
const resultsText = document.getElementById('results-text')

const game = new Game(playerScoreDisplay, computerScoreDisplay, resultsText)

document.getElementById('rock').addEventListener('click', () => {
    game.playRound('rock')
})

document.getElementById('paper').addEventListener('click', () => {
    game.playRound('paper')
})

document.getElementById('scissors').addEventListener('click', () => {
    game.playRound('scissors')
})
