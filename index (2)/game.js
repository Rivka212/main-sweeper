'use strict'

const MINE = '&#128163'
const FLAG = '&#127987'

var gBoard
var gLevel
// var Intreval
var cell

gBoard = [
    cell = {
        minesAroundCount: 4,
        isShown: false,
        isMine: false,
        isMarked: true,
    }
]
gLevel = { SIZE: 4, MINES: 2 }

const gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0,
}


function onInit() {
    console.log('hello')

}

console.log(buildBoard())
gBoard = buildBoard()
renderBoard(gBoard, '.board-container')

function buildBoard() {
    const size = 4
    const board = []
    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {
          
            board[i][j] = cell
        }
    }
    board[2][2].isMine = true
    board[1][1].isMine = true

    return board
}


function onCellClicked(elCell, i, j) {
    const cell = gBoard[i][j]
    if (!cell.isMine) 
     cell.minesAroundCount[i][j]

    elCell.classList.toggle('selected')
}


function setMinesNegsCount() {
    var minesAroundCount = 0;
    for (var i = Pos.i - 1; i <= Pos.i + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue;
        for (var j = Pos.j - 1; j <= Pos.j + 1; j++) {
            if (j < 0 || j >= gBoard[i].length) continue;
            if (i === Pos.i && j === Pos.j) continue;
            const cell = gBoard[i][j]
            if (cell.isMine) minesAroundCount++
        }
    }
    var elNgsCount = document.querySelector('.negs-count span')
    elNgsCount.innerText = negsCount
}

