var score = {player: 0, comp: 0};
var submit = document.querySelectorAll('button');
var playerScore = document.getElementById('player-score');
var computerScore = document.getElementById('computer-score');
var result;

submit.forEach(function(btn){
  btn.addEventListener('click', playRound);
});

function playRound(event) {
  var playerChoice = event.target.id;
  compareResult(playerChoice, computerPlay());
  console.log(result);
  console.log(score);
}

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

function compareResult (player, computer){
  if (player == "r") {
    switch (computer) {
      case "rock":
        result = "tie";
        break;
      case "paper":
        result = "lose";
        score.comp++;
        postResult;
        break;
      default:
        result = "win";
        score.player++;
    }
  } else if (player == "p") {
    switch (computer) {
      case "rock":
        result = "win";
        score.player++;
        break;
      case "paper":
        result = "tie";
        break;
      default:
        result = "lose";
        score.comp++;
    }
  } else {
    switch (computer) {
      case "rock":
        result = "lose";
        score.comp++;
        break;
      case "paper":
        result = "win";
        score.player++;
        break;
      default:
        result = "tie";
    }
  }
  postResult();
}

function postResult() {
  playerScore.textContent = score.player;
  computerScore.textContent = score.comp;
}
