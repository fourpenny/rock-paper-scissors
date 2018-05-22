//Variables used for storing and displaying the score
var score = {player: 0, comp: 0};
var submit = document.querySelectorAll('button');
var playerScore = document.getElementById('player-score');
var computerScore = document.getElementById('computer-score');

//Variables for logging the results
var result;
var resultText;
var resultsList = document.querySelector('ul');

submit.forEach(function(btn){
  btn.addEventListener('click', playRound);
});

function playRound(event) {
  var playerChoice = event.target.id;
  compareResult(playerChoice, computerPlay());
  postResult(resultText);
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
    //Switch for rock
    switch (computer) {
      case "rock":
        result = "tie";
        resultText = "Rock and rock... It's a tie!"
        break;
      case "paper":
        result = "lose";
        score.comp++;
        resultText = "Paper covers rock. You lose."
        break;
      default:
        result = "win";
        score.player++;
        resultText = "Rock smashes scissors. You win!"
    }
  } else if (player == "p") {
    //Switch for paper
    switch (computer) {
      case "rock":
        result = "win";
        score.player++;
        resultText = "Paper covers rock. You win!."
        break;
      case "paper":
        result = "tie";
        resultText = "Paper and paper... It's a tie."
        break;
      default:
        result = "lose";
        score.comp++;
        resultText = "Scissors cut paper. You lose."
    }
  } else {
    //Switch for scissors
    switch (computer) {
      case "rock":
        result = "lose";
        score.comp++;
        resultText = "Rock smashes scissors. You lose.";
        break;
      case "paper":
        result = "win";
        score.player++;
        resultText = "Scissors cut paper. You win!"
        break;
      default:
        result = "tie";
        resultText = "Scissors and scissors... It's a tie.";
    }
  }
}

function postResult(resultText) {
  playerScore.textContent = score.player;
  computerScore.textContent = score.comp;

  var li = document.createElement('li');
  li.className = 'list';
  li.appendChild(document.createTextNode(resultText));
  var img = document.createElement('img');
  img.className = 'status';
  img.src = "assets/" + result + ".png";
  li.appendChild(img);
  resultsList.appendChild(li);
}
