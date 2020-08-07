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
    // take each winning array and compare it to the index position of the squaresArray
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
    winningArray.forEach((combo) => {
      console.log([combo[0]])
      if (squaresArray[combo[0]] 
        && squaresArray[combo[0]] === squaresArray[combo[1]] 
        && squaresArray[combo[0]] === squaresArray[combo[2]]) {
          winnner = 'current';
        };
    })
    // reset winner variable to 'current'

    // return winner or null or tie depending on if the squares array includes empty strings
  }
  // return all of the variables
  return {render, clearBoard, checkWins}
})();
  

// Make  a gamePlay module to stroe all of the game logic

// Make a factoryFunction to create players with their own names and markers



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