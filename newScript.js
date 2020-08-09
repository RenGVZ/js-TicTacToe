// make createPlayer factory for player creation
const playerFactory = (name, mark) => {
  // player has a displayMark function
  const displayMark = () => {
    return mark;
  }
  // return the playerFactory methods
  return { displayMark };
};

const player1 = playerFactory('Player1', 'X');
const player2 = playerFactory('Player2', 'O');

// make a gameModule that represents the logic in the game
const gameModule = (() => {
  // grab the board
  const board = document.querySelector('#grid');
  // grab all of the cellElements
  const cellElements = document.querySelectorAll('.grid-item');
  // create the playBoardArray  
  let playBoardArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
  // initialize currentPlayer to null
  let currentPlayer = player2;
  // make the winningArray
  const winningArrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
  ]
  // make render function
  const render = () => {
    cellElements.forEach((cell, i) => {
      cell.innerText = playBoardArray[i]
    })
  }
  // make reset method
  const reset = () => {
    cellElements.forEach((cell, i) => {
      cell.innerText = ''
    })
    currentPlayer = null;
  }
  // check for a winner
  const checkWinner = () => {
    console.log(winningArrays)
  }

  // return all of the necessary functions
  return { render, reset, checkWinner, cellElements, currentPlayer }
})()

// create a playGame module 
const playGame = (() => {
  currentPlayer = gameModule.currentPlayer
  cellElements = gameModule.cellElements;
  // make a player 1 move by changing the elements to x
  const playerMove = () => {
    cellElements.forEach(cell => {
      cell.addEventListener('click', (e) => {
        let target = e.target;
        if (currentPlayer == player1) {
          target.innerText = player1.displayMark();
        } else if (currentPlayer == player2) {
          target.innerText = player2.displayMark();
        }
      })
    })
  }

  return { playerMove }
})();




// gameInit function that makes 2 players and changes the currentTurn
const gameInit = () => {
  
  

  // return { player1, player2 }
}