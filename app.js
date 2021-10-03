const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER_WINS';
const RESULT_PLAYER_LOSE = 'PLAYER_LOST';
let gameIsRunning = false;

const getPlayerChoice = function () {
   const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase;
   if (
      selection !== ROCK &&
      selection !== PAPER &&
      selection !== SCISSORS
      ) {
      alert( `invalid choice !!, we chose ${DEFAULT_USER_CHOICE} for you)`);
      return ROCK;
   }
   {
      return selection;
   }
};
function startGame() {
   console.log('Game is starting....');
   const playerChoice = getPlayerChoice();
   console.log(playerChoice);
}

startGameBtn.addEventListener('click', startGame);
