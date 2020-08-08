// create 2 variables, xClass and oClass and set them to x and o values
const xClass = 'xClass'
const oClass = 'oClass'
// Grab all cellElents (grid-items)
const cellElements = document.querySelectorAll('.grid-item');
// grab the grid and name it board
const board = document.querySelector('.grid-container');
// make a variable called circleTurn, don't set it yet. If it's true it will be O's turn and if not it's X's turn
let circleTurn;
// do a forEach method on the sell elements
cellElements.forEach(cell => {
  // give each an event listener and a (3rd) object property of once: true
  cell.addEventListener('click', handleClick, { once: true })
});

// make the handleClick function
function handleClick(e) {
  // make cell var which will be the target
  const cell = e.target
  // make currentClass which is a ternary operator based on the state of circkleTurn, xClass or oClass
  const currentClass = circleTurn ? oClass : xClass;
  // placeMark function that gets the cell and the currentClass. Define function outside
  placeMark(cell, currentClass)
  // check for win
  // check for draw
  // call the switchTurns function
  switchTurns();
  // call the setBoardHoverClass function
  setBoardHoverClass();
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
