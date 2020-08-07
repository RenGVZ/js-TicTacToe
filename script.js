// add player and cpu variables
let player = 'O';
let computer = 'X';
// make the board in an array
let playBoard = ['', '', '', '', '', '', '', '', ''];
// grab the grid
const boardContainer = document.querySelector('.grid-container');

// render the playBoard array into the boardContainer. First make a renderBoard function
const renderBoard = () => {
  // set the innerHTML of boardContainer to empty
  boardContainer.innerHTML = '';
  // iterate over each playBoard array item and insert them into the boardContainer using innerHTML += and add an onclick function addPlayerMove and insert the individual playBoard value using idx
  playBoard.forEach((el, idx) => {
    boardContainer.innerHTML += `<div class='grid-item' id='block_${idx}' onclick='addPlayerMove(${idx})'>${playBoard[idx]}</div>`
    // if the el is equal to player or computer, that square's class should be .occupied
    if(el == player || el == computer) {
      document.querySelector(`#block_${idx}`).classList.add('occupied');
    }
  });
}
renderBoard();

// make addPlayerMove function
const addPlayerMove = e => {
  // If playerBoard[e] is empty, the value of player is assigned to it
  if (playBoard[e] == '') {
    playBoard[e] = player;
    // render the board
    renderBoard();
    // call the addComputerMove function
    addComputerMove();
  }
};

// make addComputerMove function
const addComputerMove = () => {
  // do loop here
  do {
    // make a variable selected which is Math floor and inside Math random  * 9
    selected = Math.floor(Math.random() * 9);
    console.log(selected);
    // add while after do. while playboard with the selected index is not empty, assign it to computer
  } while (playBoard[selected] !== '') {
    playBoard[selected] = computer;
  }
  // call render function
  renderBoard();
}