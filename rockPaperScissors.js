var score = {player: 0, comp: 0};

function computerPlay() {
  var ran = Math.floor(Math.random() * 3);

  switch(ran) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    default:
      return "scissors";
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice.toLowerCase() == "rock") {
    switch (computerChoice) {
      case "rock":
        return "Rock and rock... It's a tie!";
        break;
      case "paper":
        computerWins++;
        return "Paper covers rock. You lose.";
        break;
      default:
        playerWins++;
        return "Rock smashes scissors. You win!";
      }
  } else if (playerChoice.toLowerCase() == "paper") {
    switch (computerChoice) {
      case "rock":
        playerWins++;
        return "Paper covers rock. You win!";
        break;
      case "paper":
        return "Paper and paper... It's a tie!";
        break;
      default:
        computerWins++;
        return "Scissors cut paper. You lose.";
      }
  } else if (playerChoice.toLowerCase() == "scissors") {
    switch (computerChoice) {
      case "rock":
        computerWins++;
        return "Rock smashes scissors. You lose.";
        break;
      case "paper":
        playerWins++;
        return "Scissors cut paper. You win!";
        break;
      default:
        return "Scissors and scissors... It's a tie.";}
  } else {
    playerChoice = prompt("Let's try that again. Rock, paper, or scissors?")
  }
}

for (playerWins = 0; playerWins < 5 && computerWins <5;) {
  playerChoice = prompt("Rock, paper, or scissors?");
  computerChoice = computerPlay();
  console.log(playRound(playerChoice, computerChoice));
  console.log("The score is player: " + playerWins + " to computer: " + computerWins + ".");
}

if (playerWins = 4) {
  console.log("You won five games in a row! Congrats!");
}

if (computerWins = 4) {
  console.log("Aww, you lost five games in a row. Bummer.");
}