let result_div = document.getElementById('result');
let restart_btn = document.getElementById('restart');
let boxes = Array.from(document.getElementsByClassName('box'));

const O ='O'
const X ='X'
let currentPlayer = X;
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id;
    
    if(!spaces[id])
    {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerHasWon()!==false) 
        {
            result_div.innerHTML=`${currentPlayer} has WON !!`;
        }

        currentPlayer = currentPlayer == X ? O :X //if cureentPlayer is X true then return O or X
    }
}

const winningCombination = 
[ [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6] ]

function playerHasWon() {
    for( const condition of winningCombination) 
    {
        let [a,b,c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c]))
        {
            return [a,b,c]
        }
    }
    return false

}

restart_btn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)
    boxes.forEach(box => {
        box.innerText=''
    })
    currentPlayer=X;
    result_div.innerHTML=''
}

startGame();