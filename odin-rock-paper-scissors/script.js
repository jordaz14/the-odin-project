// Counter variables to track endGame status
let computerWins = 0;
let playerWins = 0;
let gameTies = 0;

// Gather random R,P,S choice from Computer
function getComputerChoice() {
  let computerOptions = ["rock", "paper", "scissors"];
  return computerOptions[Math.floor(Math.random() * 3)];
}

// Query for buttons in DOM
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

// Query for div in DOM
const roundStatus = document.querySelector("#roundStatus");

// Assigns player choice to Rock Button, initiates game
rockButton.addEventListener("click", () => {
  playerChoice = rockButton.textContent;
  let result = playRound(getComputerChoice(), playerChoice);
  tallyResults(result);
  checkEndGame(result);
});

// Assigns player choice to Paper Button, initiates game
paperButton.addEventListener("click", () => {
  playerChoice = paperButton.textContent;
  let result = playRound(getComputerChoice(), playerChoice);
  tallyResults(result);
  checkEndGame(result);
});

// Assigns player choice to Scissors Button, initiates game
scissorsButton.addEventListener("click", () => {
  playerChoice = scissorsButton.textContent;
  let result = playRound(getComputerChoice(), playerChoice);
  tallyResults(result);
  checkEndGame(result);
});

// Returns result of one round
function playRound(computerChoice, playerChoice) {
  return computerChoice == playerChoice
    ? "Tie."
    : computerChoice == "rock" && playerChoice == "scissors"
    ? "Computer wins. Rock beats Scissors"
    : computerChoice == "paper" && playerChoice == "rock"
    ? "Computer wins. Paper beats Rock"
    : computerChoice == "scissors" && playerChoice == "paper"
    ? "Computer wins. Scissors beats Paper"
    : `You win. ${playerChoice} beats ${computerChoice}`;
}

// Tallies results from any given round and notifies user of game status
function tallyResults(result) {
  result == "Tie."
    ? gameTies++
    : result.includes("You win.")
    ? playerWins++
    : computerWins++;
  roundStatus.innerText = `${result} \n Ties: ${gameTies}, Computer: ${computerWins}, Player: ${playerWins}`;
}

// Resets counter variables once player or computer reaches 5 wins, notifies user
function checkEndGame(result) {
  if (computerWins == 5 || playerWins == 5) {
    roundStatus.innerText = `${result} \n Ties: ${gameTies}, Computer: ${computerWins}, Player: ${playerWins} \n GAME OVER. Scores will now reset.`;
    computerWins = 0;
    playerWins = 0;
    gameTies = 0;
  }
}
