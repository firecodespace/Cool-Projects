let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function placeSymbol(cellIndex) {
    if (gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerHTML = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].classList.add(currentPlayer);
        if (checkWin(currentPlayer)) {
            alert(currentPlayer + ' wins!');
            resetBoard();
        } else if (gameBoard.indexOf('') === -1) {
            alert('It\'s a tie!');
            resetBoard();
        } else {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
    }
}

function checkWin(player) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        if (
            gameBoard[combination[0]] === player &&
            gameBoard[combination[1]] === player &&
            gameBoard[combination[2]] === player
        ) {
            return true;
        }
    }

    return false;
}

function resetBoard() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerHTML = '';
        cell.classList.remove('X');
        cell.classList.remove('O');
    }
}
