const gameContainer = document.getElementById('game-container');

document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('starter-container').remove()
    gameContainer.style.display = 'flex'
})