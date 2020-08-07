// Make a playerFactory with name and mark as properties
const playerFactory = (name, mark) => {
  // Make a playTurn method taking board and cell as properties
  const playTurn = (board, cell) => {
  // make a variable named idx and call a findIndex function on the board and cells, this will be named as position which will be equal to cell
  const idx = board.cells.findIndex(position => position === cell);
  // if the idx of board.squaresArray is an empty string, render the board and return the idx
    if(board.squaresArray(idx) === '') {
      board.render();
      // then return null
      return null;
    }
  }
  // return name, mark and playTurn
  return { name, mark, playTurn }
}

// Make a gameboard module
let gameboard = (function() {
  // create a gameboard array set to empty values for each square
  let squaresArray = ["", "", "", "", "", "", "", "", ""];
  // grab the gameboard
  const board = document.querySelector('#grid');
  // crab the cells in an array
  const cells = document.querySelectorAll('.grid-item')
  // set the winner variable to null
  let winner = null
  // make a render function
  const render = () => {
    // make each cell's text content equal to the squareArray's text content- linking the JS array to the HTML cells
    squaresArray.forEach((mark, idx) => {
      cells[idx].textContent = squaresArray[idx];
    });
  }
  // make a clearBoard function that resets all the squaresArray items to empty strings
  const clearBoard = () => {
    squaresArray = ["", "", "", "", "", "", "", "", ""];
  };
  // make a checkWins function that is an object of all possible winning arrays
  const checkWins = () => {
    // Make an array of the winning arrays
    const winningArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    // for each array set of winningArray, compare squaresArray's index number's value (the index number is winningArrays' 0th - 2nd elements]) they must all be equal to eachother
    winningArray.forEach((combo) => {
      if (squaresArray[combo[0]] 
        && squaresArray[combo[0]] === squaresArray[combo[1]] 
        && squaresArray[combo[0]] === squaresArray[combo[2]]) {
          // reset winner variable to 'current'
          winnner = 'current';
        };
    })
    // return winner or null or tie depending on if the squares array includes empty strings
   return winner || (squaresArray.includes('')? null : 'Tie');
  }
  // return all of the variables
  return {render, board, cells, clearBoard, checkWins, squaresArray}
})();

// Make  a gamePlay module to store all of the game logic
let gameplay = (() => {
  // Create 2 players from the player factory function and declare a currentPlayer variable
  let player1;
  let player2;
  let currentPlayer;

  // make a switchTurn method that checks if the current player is player1, if not the current player is player2
  const switchTurn = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  // make a game round function for displaying who's turn it is and showing the winner
  const gameRound = () => {
    // declare a variable for the gameboard module
    const board = document.querySelector('#grid');
    // grab the game-status from index
    let status = document.getElementById('game-status');
    // if the current player's name is not empty, diplay 'name's turn' in the game-status element
    if (currentPlayer.name !== '') {
      status.innerText = `${currentPlayer.name}'s turn`
    }
     // else game-status reads 'no-name:'
      else {
        status.innerText = "No-name's turn"
      }
    // add a click event listener to the gameboard module
    gameboard.board.addEventListener('click', (event) => {
      // prev default
      event.preventDefault();
      // make const play that calls playTurn on current player using the parameters board and event.target
      const play = currentPlayer.playTurn(board, event.target);
      // if play is not = to null, replace the boar.squaredArrray play index with the mark of the current player -quote literals-
      if (play !== null) {
        board.squaresArray[play] `${currentPlayer.mark}`;
        // render the board
        gameboard.render();
        // create a variable winStatus that checks the gameboards checkWins method
        let winStatus = gameboard.checkWins()
        // if the winStatus is a tie, diplay that tie in the status bar
        if (winStatus === 'Tie') {
          status.innerText = "The game is a tie"
          // if the winStatus is null , switchTurn and have status display current player's turn
        } else if (winStatus === null){
          switchTurn();
          status.innerText = `${currentPlayer}'s turn`
        } else {
          // if none of these, display the current player is winner 
          status.innerText = `The winner is ${currentPlayer}!`
          // clear the gameboard
          gameboard.clearBoard();
          // render again
          gameboard.render();
        }
      }
    });
  };
  // create a gameInit function
  const gameInit = () => {

      player1 = playerFactory('Gav', 'X');
      player2 = playerFactory('CPU', 'O');
      currentPlayer = player1;
      gameRound();
    
  };

  // return gameInit
  return { gameInit };

})();

// call gameInit
gameplay.gameInit()



// // GameBoard module
// let gameboard = (function() {
//   // let gameArray = 
//   const board = (document.querySelector('#grid'));
//   const squares = Array.from(board.children);
//   const render = () => {
//     gameArray.forEach((mark, ind) => {
//       squares[ind].textContent = gameArray[ind];
//     })
//   }

  

// })();

// // displayController module
// let displayController = (function() {

//   function clearBoard() {
//     const board = Array.from(document.querySelector('#grid').children)
//     for (let i = 0; i < board.length; i++) {
//       board[i].textContent = ''
//     }
//   }

//   return {clearBoard}
// })();

// // Player factory function
// const playerFactory = (name, marker) => {
//   const squares = document.querySelector('#grid').children
  
//   return {name, marker}
// }

// const player1 = playerFactory('Bob', 'x');
// const reset = document.getElementById('reset').addEventListener('click', displayController.clearBoard);