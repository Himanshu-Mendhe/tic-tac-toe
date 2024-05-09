let winner = document.getElementById('winner');
let winnerDeclared = false;
let currentPlayer = 'X';
let gameState = ['','','','','','','','',''];
const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkWinner(){
    for(let i=0; i<8; i++){
        let a = winCondition[i][0];
        let b = winCondition[i][1];
        let c = winCondition[i][2];
        if(gameState[a] == currentPlayer &&
            gameState[b] == currentPlayer &&
            gameState[c] == currentPlayer   
        ) {
            winnerDeclared = true;
            winner.innerHTML = "winner is "+ currentPlayer
        }
    }
}

function checkDraw(){
    if(!gameState.includes('') && winnerDeclared == false){
        winner.innerHTML = "game is draw"
    }
}

function handleClick() {
    let td = event.target
    console.log(td)
    let index = td.getAttribute('index')
    if (td.innerHTML==''){
        td.innerHTML = currentPlayer;
        gameState[index] = currentPlayer; 
    }
    checkWinner();
    checkDraw();
    changePlayer();
}

function changePlayer(){
    currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
}

function init() {
    let tdCells = document.getElementsByTagName('td');
    console.log (tdCells)

    for(let i=0; i<9; i++){
        tdCells[i].addEventListener('click', handleClick)
    }
}


init();
