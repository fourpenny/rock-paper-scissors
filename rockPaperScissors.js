var score = {player: 0, comp: 0};
var submit = document.querySelectorAll('button');
console.log(submit);

submit.forEach(function(btn){
  btn.addEventListener('click', function(event) {
    var rps = event.target.id;
  })
})

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

function playerChoice(choice) {
  console.log(choice);
}
