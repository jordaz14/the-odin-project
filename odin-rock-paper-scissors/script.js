let computerWins = 0;
let playerWins = 0;
let gameTies = 0;

function getComputerChoice() {
  let computerOptions = ["rock", "paper", "scissors"];
  return computerOptions[Math.floor(Math.random() * 3)];
}

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

const roundStatus = document.querySelector("#roundStatus");
const gameStatus = document.querySelector("#roundStatus");

rockButton.addEventListener("click", () => {
  playerChoice = rockButton.textContent;
  let result = playRound(getComputerChoice(), playerChoice);
  tallyResults(result);
  checkEndGame(result);
});

paperButton.addEventListener("click", () => {
  playerChoice = paperButton.textContent;
  let result = playRound(getComputerChoice(), playerChoice);
  tallyResults(result);
  checkEndGame(result);
});

scissorsButton.addEventListener("click", () => {
  playerChoice = scissorsButton.textContent;
  let result = playRound(getComputerChoice(), playerChoice);
  tallyResults(result);
  checkEndGame(result);
});

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

function tallyResults(result) {
  result == "Tie."
    ? gameTies++
    : result.includes("You win.")
    ? playerWins++
    : computerWins++;
  roundStatus.innerText = `${result} \n Ties: ${gameTies}, Computer: ${computerWins}, Player: ${playerWins}`;
}

function checkEndGame(result) {
  if (computerWins == 5 || playerWins == 5) {
    roundStatus.innerText = `${result} \n Ties: ${gameTies}, Computer: ${computerWins}, Player: ${playerWins} \n GAME OVER. Scores will now reset.`;
    computerWins = 0;
    playerWins = 0;
    gameTies = 0;
  }
}
