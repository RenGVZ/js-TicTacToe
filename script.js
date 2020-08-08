// add player and cpu variables
let player = 'O';
let computer = 'X';
// make boardFull variable and set it to false
let boardFull = false;
// make the board in an array
let playBoard = ['', '', '', '', '', '', '', '', ''];
// grab gameStatus html element
const gameStatus = document.querySelector('#game-status');
// grab the grid
const boardContainer = document.querySelector('.grid-container');

// make checkBoardComplete function to check if the board is full
const checkBoardComplete = () => {
  // declare a flag and set it to true
  let flag = true;
  // for each element on playBoard, make sure that it does not equal player nor cpu
  playBoard.forEach(e => { 
    if (e != player && e != computer) {
  // if this is true, set flag to false
      flag = false
    }
  });
// boardFull is the opposite of flag
  boardFull = flag;
}

// make check line function that takes 3 params, a, b and c and checks if they match the playBoard indexes
const checkLine = (a, b, c) => {
  // returns true if they all equal the next value AND whether playBoard[a] equals player or cpu
  return (
    playBoard[a] === playBoard[b] &&
    playBoard[b] === playBoard[c] &&
    (playBoard[a] == player || playBoard[a] == computer)
  );
}
// make checkMatch function to compare the checkLine function against rows and columns
const checkMatch = () => {
  // use for loop for rows using a set of 3 i's. do it 9 times. i should increment 3 times each pass through (to start on a new row in the grid).
  for (i = 0; i < 9; i += 3) {
    // make if statement and  Plug i into the checkLine function, incrementing i twice (for 2 subsequent parameters)
    if (checkLine(i, i + 1, i +2)) {
      // return the playBoard at index i
      return playBoard[i]
    }
  }
  // do another for loop for the columns, 3 times. i should increment only 1 time
  for (i = 0; i < 3; i++) {
    // another if statement checking the checkLine function. The subsequent i's should be incremented by 3 to match the indexes of each next column
    if (checkLine(i, i + 3, i + 6)) {
      // return the playBoard at index i
      return playBoard[i];
    }
  }
  // use checkLine to see if the diagonal positions have been taken
  if (checkLine(0, 4, 8)){
    // if so, return the player in the starting position of the diagonal
    return playBoard[0];
  }
  // another if statement for the opposite diagonal
  if (checkLine(2, 4, 6)) {
    return playBoard[2];
  }
  // return an empty string
  return '';
}

// make a function checkForWinner
const checkForWinner = () => {
  // set a res variable equal to checkMatch function (declared later)
  let res = checkMatch();
  // if the res is player, add inner 'player wins' text and change class of gameStatus also boardFull should be true
  if (res == player) {
    gameStatus.innerText = 'Player wins!';
    gameStatus.classList.add('player-winner');
    boardFull = true;
  } else if (res == computer) {
  // else if res is cpu add inner 'cpu wins' text and change class of gameStatus also boardFull should be true
    gameStatus.innerText = "Computer wins!";
    gameStatus.classList.add('computer-winner');
    boardFull = true;
  } else {
    // else the board is fulll and draw should be displayed in gameStatus as well as a draw class
    gameStatus.innerText == "It's a Tie!";
    gameStatus.classList.add('draw');
    // boardFull = true;
  }
}

// render the playBoard array into the boardContainer. First make a renderBoard function
const renderBoard = () => {
  // set the innerHTML of boardContainer to empty
  boardContainer.innerHTML = '';
  // iterate over each playBoard array item and insert them into the boardContainer using innerHTML += and add an onclick function addPlayerMove and insert the individual playBoard value using idx
  playBoard.forEach((e, i) => {
    boardContainer.innerHTML += `<div class='grid-item' id='block_${i}' onclick='addPlayerMove(${i})'>${playBoard[i]}</div>`
    // if the el is equal to player or computer, that square's class should be .occupied
    if (e == player || e == computer) {
      document.querySelector(`#block_${i}`).classList.add('occupied');
    }
  });
}

// make gameLoop function
const gameLoop = () => {
  // inside gameLoop call renderBoard and checkBoardComplete
  renderBoard();
  checkBoardComplete();
  checkForWinner();
}

// make addPlayerMove function
const addPlayerMove = e => {
  // If playerBoard[e] is empty, the value of player is assigned to it
  if (!boardFull && playBoard[e] == '') {
    playBoard[e] = player;
    // call gameLoop
    gameLoop();
    // call the addComputerMove function
    addComputerMove();
  }
};

// make addComputerMove function
const addComputerMove = () => {
  // if check for boardFull
  if (!boardFull) {
    // do loop here
    do {
      // make a variable selected which is Math floor and inside Math random  * 9
      selected = Math.floor(Math.random() * 9);
      // add while after do. while playboard with the selected index is not empty, assign it to computer
    } while (playBoard[selected] != '') {
      playBoard[selected] = computer;
      // call gameLoop
      gameLoop();
    }
  }
}

// make resetBoard function
const resetBoard = () => {
  playBoard = ['', '', '', '', '', '', '', '', ''];
  boardFull = false;
  gameStatus.classList.remove = 'player-win';
  gameStatus.classList.remove = 'computer-win';
  gameStatus.classList.remove = 'draw';
  gameStatus.innerText = ''
  renderBoard();
}
console.log('yo')

// make the initial renderBoard call
renderBoard();