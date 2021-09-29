const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';

const getPlayerChoice = function () {
   const selection = prompt('Pock, Paper or scissors?');
   if (selection ) {
      
   }
};
function startGame() {
   console.log('Game is starting....');
}

startGameBtn.addEventListener('click', startGame);
