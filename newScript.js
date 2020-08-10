// make createPlayer factory for player creation
const playerFactory = (name, mark) => {
  // player has a displayMark function
  const displayMark = () => {
    return mark;
  }
  // return the playerFactory methods
  return { displayMark, mark };
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
  let playBoardArray = ['', '', '', '', '', '', '', '', '']
  // initialize currentPlayer to null
  let currentPlayer = player1;
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
  let winningArrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  // check for a winner
  const checkWinner = (currentPlayer) => {
    const p = playBoardArray
    const JS = JSON.stringify;
    const xCheck = JS(['X', 'X', 'X'])
    const oCheck = JS(['O', 'O', 'O'])
    
    
    let xArray = [];
    let oArray = [];
    cellElements.forEach((cell, i) => {
      let letter = cell.innerText
      if (letter == 'X') {
        xArray.push(i)
      } else if (letter == 'O'){
        oArray.push(i)
      }
       
    })
    checkArrays(xArray, oArray);
    // console.log(xArray, oArray)
    //  return {xArray, oArray}
  }

  const checkArrays = (xArray, oArray) => {
    winningArrays.forEach(combo => {
      console.log(`xArray: ${xArray}`, `combo: ${combo}`)
      if (xArray === combo) {
        return 'xArray'
      } else if (oArray === combo) {
        return 'oArray'
      }
    console.log(xArray)
    })
  }


  // return all of the necessary functions
  return { render, reset, checkWinner, cellElements, currentPlayer }
})()

// create a playGame module 
const playGame = (() => {
  currentPlayer = gameModule.currentPlayer
  cellElements = gameModule.cellElements;
  // make switchTurns function
  const switchTurns = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }

  // make a player 1 move by changing the elements to x
  const playerMove = () => {
    cellElements.forEach((cell, i) => {
      cell.addEventListener('click', (e) =>{
        let target = e.target;
        if (target.innerText == '') {
          target.innerText = currentPlayer.displayMark();
          switchTurns();
          gameModule.checkWinner(currentPlayer);
        }
      })
    })
  }

  return { playerMove }
})();

document.addEventListener('onload', gameModule.render(), playGame.playerMove())


// gameInit function that makes 2 players and changes the currentTurn
const gameInit = () => {
  
  

  // return { player1, player2 }
}