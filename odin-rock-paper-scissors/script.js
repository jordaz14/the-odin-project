let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

function getComputerChoice() {
  let computerOptions = ["rock", "paper", "scissors"];
  return computerOptions[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  return prompt("Please enter 'Rock', 'Paper', or 'Scissors'").toLowerCase();
}

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

function playGame() {
  let computerWins = 0;
  let playerWins = 0;
  let gameTies = 0;
  for (let i = 0; i < 5; i++) {
    let result = playRound();
    result == "Tie."
      ? gameTies++
      : result.includes("You win.")
      ? playerWins++
      : computerWins++;

    console.log(
      `Ties: ${gameTies}, Computer: ${computerWins}, Player: ${playerWins}`
    );
  }
  console.log("Thanks for playing!");
}

playGame();
