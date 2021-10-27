const startGameBtn = document.getElementById('start-game-btn');
const rockBtn = document.querySelector('.ROCK');
const scissorsBtn = document.querySelector('.SCISSORS');
const paperBtn = document.querySelector('.PAPER');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER_WINS';
const RESULT_PLAYER_LOSE = 'PLAYER_LOST';
let gameIsRunning = false;

const getPlayerChoice = function () {
   const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();
   if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
      alert(`invalid choice !!, we chose ${DEFAULT_USER_CHOICE} for you)`);
      return ROCK;
   }
   {
      return selection;
   }
};

const getComputerChoice = function () {
   const randomValue = Math.random();
   if (randomValue < 0.34) {
      return ROCK;
   } else if (randomValue < 0.67) {
      return PAPER;
   } else if (randomValue < 0.99) {
      return SCISSORS;
   }
};
function startGame() {
   if (gameIsRunning) {
      return;
   }
   gameIsRunning = true;
   console.log('Game is starting....');
   const playerChoice = getPlayerChoice();
   const computerChoice = getComputerChoice();
   const winner = getResult(playerChoice, computerChoice);
   console.log(playerChoice);
   console.log(computerChoice);
   alert (winner);
}
const getResult = function (pChoice, cChoice) {
   if (pChoice === cChoice) {
      return RESULT_DRAW;
   } else if (
      (pChoice === ROCK && cChoice === SCISSORS) ||
      (pChoice === SCISSORS && cChoice === PAPER) ||
      (pChoice === PAPER && cChoice === ROCK)
   ) {
      return RESULT_PLAYER_WIN;
   } else {
      return RESULT_PLAYER_LOSE;
   }
};
startGameBtn.addEventListener('click', startGame);
