// add player and cpu variables

// make boardFull variable and set it to false

// make the board in an array with empty items

// grab gameStatus html element

// grab the grid


// make checkBoardComplete function to check if the board is full

  // declare a flag and set it to true
  
  // for each element on playBoard, make sure that it does not equal player nor cpu
  
  
  // if this is true, set flag to false
     
  // boardFull is equal to flag
  

// make check line function that takes 3 params, a, b and c

  // returns if they are all equal to the next value AND whether playBoard[a] equals player or cpu
  

// make checkMatch function to compare the checkLine function against rows and columns

  // use for loop for rows using a set of 3 i's. do it 9 times. i should increment 3 times each pass through (to start on a new row in the grid).
  
    // make if statement and  Plug i into the checkLine function, incrementing i twice (for 2 subsequent parameters)
    
      // return the playBoard at index i
      

  // do another for loop for the columns, 3 times. i should increment only 1 time
  
    // another if statement checking the checkLine function. The subsequent i's should be incremented by 3 to match the indexes of each next column
    
      // return the playBoard at index i
      

  // use checkLine to see if the diagonal positions have been taken
  
    // if so, return the player in the starting position of the diagonal
    

  // another if statement for the opposite diagonal
  

  // return an empty string
  

// make a function checkForWinner

  // set a res variable equal to checkMatch function (declared later)
  
  // if the res is player, add inner 'player wins' text and change class of gameStatus also boardFull should be true
  


  // else if res is cpu add inner 'cpu wins' text and change class of gameStatus also boardFull should be true
   


  // else the board is fulll and draw should be displayed in gameStatus as well as a draw class
  

  // boardFull = true;


// render the playBoard array into the boardContainer. First make a renderBoard function

  // set the innerHTML of boardContainer to empty
  
  // iterate over each playBoard array item and insert them into the boardContainer using innerHTML += and add an onclick function addPlayerMove and insert the individual playBoard value using i
  

    // if the el is equal to player or computer, that square's class should be .occupied
    



// make gameLoop function

  // inside gameLoop call renderBoard and checkBoardComplete and checkForWinner(when complete)
  


// make addPlayerMove function

  // if the board is not full and playerBoard[e] is empty, the value of player is assigned to playerBorad[e]
  

    // call gameLoop
    
    // call the addComputerMove function
    



// make addComputerMove function

  // if check for boardFull
  
    // do loop here
    
      // make a variable selected which is Math floor and inside Math random  * 9
      
      // add while after do. while playboard with the selected index is not empty, assign it to computer
    
      // call gameLoop
      


// make resetBoard function

  // reset playBoard to 9 empty values, boardFull to false, remove all gameStatus classes, make gameStatus text empty and renderBoard at the end
  

// make the initial renderBoard call
