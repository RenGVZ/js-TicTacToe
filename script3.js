// create 2 variables, xClass and oClass and set them to x and o values
const xClass = 'xClass'
const oClass = 'oClass'
// create an array of all of the winning combos
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
// Grab all cellElents (grid-items)
const cellElements = document.querySelectorAll('.grid-item');
// grab the grid and name it board
const board = document.querySelector('.grid-container');
// create a winningMessageTextElement
const winningMessageTextElement = document.querySelector('#game-status');
// grab the restart button
const reset = document.getElementById('reset');
// make a variable called circleTurn, don't set it yet. If it's true it will be O's turn and if not it's X's turn
let circleTurn;

// call startGame 
startGame();

reset.addEventListener('click', startGame)

// make startGame function and put all of the cellElements inside
function startGame() {
  // instantiate circleTurn to false
  circleTurn = false;
  // do a forEach method on the sell elements
  cellElements.forEach(cell => {
    // Reset functionality- remove all of the cell's classLists (for oClass)
    cell.classList.remove(xClass);
    // remove all of the cell's classLists (for oClass)
    cell.classList.remove(oClass);
    // remove the eventListener handleClick
    cell.removeEventListener('click', handleClick)
    // give each an event listener and a (3rd) object property of once: true
    cell.addEventListener('click', handleClick, { once: true })
});
  // call the setBoardHoverClass
  setBoardHoverClass();
  // for resetting
  // set the winningMessageTextElement text to empty
  winningMessageTextElement.innerText = '';

}

// make the handleClick function
function handleClick(e) {
  // make cell var which will be the target
  const cell = e.target
  // make currentClass which is a ternary operator based on the state of circkleTurn, xClass or oClass
  const currentClass = circleTurn ? oClass : xClass;
  // placeMark function that gets the cell and the currentClass. Define function outside
  placeMark(cell, currentClass)
  // add an if statement to check for win, passing in the currentClass and create checkWin function outside
  if (checkWin(currentClass)) {
    // call endGame function with a false parameter
    endGame(false);
    // else if check for draw, calling the isDraw function
  } else if (isDraw()) {
    endGame(true);
  } else {
    // call the switchTurns function
    switchTurns();
    // call the setBoardHoverClass function
    setBoardHoverClass();
  }
}

// make endGame function
function endGame(draw) {
  // if there's a draw
  if(draw) {
    // set the text as 'draw' for the winningMessageTextElement
    winningMessageTextElement.innerText = 'Draw'
  } else {
    // else make aternary operator displaying the name of the winning team + 'win'
    winningMessageTextElement.innerText = `${circleTurn? "O's" : "X's"} win!`
  }
  // can be added later
  // winningMessageTextElement.classList.add('show')
}

// make the isDraw function
function isDraw() {
  // check if every element of the cell has a class, first you have to destructure the cellElements into an array
  return [...cellElements].every(cell => {
    return cell.classList.contains(xClass) || 
    cell.classList.contains(oClass);
  })
}

// make aplaceMark function that takes the cell and the currentClass
function placeMark(cell, currentClass) {
  // change the cell's classList to currentClass
  cell.classList.add(currentClass)
}

// make switchTurns function
function switchTurns() {
  circleTurn = !circleTurn
}

// make the setBoardHoverClass function and change the classList of board
function setBoardHoverClass() {
  // remove the xClass and the oClass from the board
  board.classList.remove(xClass);
  board.classList.remove(oClass);
  // if it's the circleTurn, add the oClass
  if (circleTurn) {
    board.classList.add(oClass);
  // else add the xClass
  } else {
    board.classList.add(xClass);
  }
}

// create checkWin function
function checkWin(currentClass) {
  // call a some method on wiiningArrays
  return winningArrays.some(combo => {
    // call an every method on the winningArray's elements
    return combo.every(i => {
      // check if the value of the cellElement at the index of this iterated element contains the current class's classList
      return cellElements[i].classList.contains(currentClass)
    })
  })
}
