"use strict";

// initilize X first for the player
let playerSymbol = 'X';

// check whether game end
let gameEnd = false;

//winning conditions
let winningCond = [
  [1, 2, 3], [4, 5, 6],
  [7, 8, 9], [1, 4, 7],
  [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7],
];

//side-check for draw
let isDraw = true;

//Checking iteration for draw
let countForDraw = 0;

//winner check 
function checkWin(){
  for(let i = 0; i < winningCond.length; i++ ){
    let winCondForPlayer1 = (document.getElementById(`_${winningCond[i][0]}`).innerHTML === 'X' &&
                             document.getElementById(`_${winningCond[i][1]}`).innerHTML === 'X' &&
                             document.getElementById(`_${winningCond[i][2]}`).innerHTML === 'X');

    let winCondForPlayer2 =  (document.getElementById(`_${winningCond[i][0]}`).innerHTML === 'O' &&
                              document.getElementById(`_${winningCond[i][1]}`).innerHTML === 'O' &&
                              document.getElementById(`_${winningCond[i][2]}`).innerHTML === 'O');
    if(winCondForPlayer1){
        document.getElementById(`_${winningCond[i][0]}`).classList.add('winning');
        document.getElementById(`_${winningCond[i][1]}`).classList.add('winning');
        document.getElementById(`_${winningCond[i][2]}`).classList.add('winning');
        gameEnd = true;
        isDraw = false;
        setTimeout(function(){alert(`Player \"1\" has won!`)}, 500);
    }else if(winCondForPlayer2){
        document.getElementById(`_${winningCond[i][0]}`).classList.add('winning');
        document.getElementById(`_${winningCond[i][1]}`).classList.add('winning');
        document.getElementById(`_${winningCond[i][2]}`).classList.add('winning');
        gameEnd = true;
        isDraw = false;
        setTimeout(function(){alert(`Player \"2\" has won!`)}, 500);
    }
  }  
};

//draw check
function draw(){
  if ( countForDraw == 9){
    if(isDraw){
      setTimeout(function(){alert('Draw!')}, 550);
    }
  }
};

for (let i = 1; i <= 9; i++) {
  document.getElementById(`_${i}`).addEventListener('click', function(){
    if(this.innerHTML === "" && !gameEnd){
      this.innerHTML = playerSymbol;            //populate cells
      countForDraw++;
      checkWin();                               //check after every movement if a player wins
      draw();                                   //check after every movement if
      if (playerSymbol == 'X'){                 //swapping
        playerSymbol = 'O';
        document.getElementById(`_${i}`).classList.add('player_X');  //styling X
      }else{
        playerSymbol = 'X';
        document.getElementById(`_${i}`).classList.add('player_O');  //styling O
      };
    }})};

    let resetButton = document.getElementById('resetButton');        //reset all
    resetButton.addEventListener('click', function(){
      for (let i = 1; i <= 9; i++){
        document.getElementById(`_${i}`).classList.remove('player_X','player_O','winning');
        document.getElementById(`_${i}`).innerHTML = "";
        gameEnd = false;
        isDraw = true;
        countForDraw = 0;
        playerSymbol = 'X';
      }
    });
