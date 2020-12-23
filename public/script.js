const boardContainer = document.getElementById('board-container')

const gameBoard = () => {
    const playerFactor = (name, symbol, ai, turn) => {
        return {
            name,
            symbol,
            ai,
            turn
        }
    }

    const player1 = playerFactor('Player 1', 'X', false, true)
    const player2 = playerFactor('Player 2', 'O', true, false)

    const winConditions = [
        [0,1,2], // Horizontal
        [0,3,6], // Vertical
        [3,4,5], // Horizontal
        [6,7,8], // Horizontal
        [1,4,7], // Vertical
        [2,4,6], // Diagonal
        [2,5,8], // Vertical
        [0,4,8] // Diagonal
    ]

    let winner = null
    let turnsCounter = 0
    let board = []
    let winnerCombo = []

}