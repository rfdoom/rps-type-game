let playerChoice;
let computerChoice;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const options = {
  rock: {losesTo: 'paper', winsTo: 'scissors'},
  paper: {losesTo: 'scissors', winsTo: 'rock'},
  scissors: {losesTo: 'rock', winsTo: 'paper'}
};


// rock.addEventListener('click', () => {
//   playerChoice = Object.keys(options)[0];
//   computerTurn();
// })

// paper.addEventListener('click', () => {
//   playerChoice = Object.keys(options)[1];
//   computerTurn();
// })

// scissors.addEventListener('click', () => {
//   playerChoice = Object.keys(options)[2];
//   computerTurn();
// })

const whichOne = (e) => {
  // to get the keys from the objects dictionary into an array [rock, paper, scissors]
  play = Object.keys(options);

  // to find which key in the array matches the id of the target button
  playerChoice = play.find((x) => x === e.target.id);
  computerTurn();
}

rock.addEventListener('click', whichOne);
paper.addEventListener('click', whichOne);
scissors.addEventListener('click', whichOne);

const getRandomInt = () => {
  return (Math.floor(Math.random() * 3));
}

const getWinner = (playerChoice, computerChoice) => {
  console.log('player: ',  playerChoice);
  console.log('computer', computerChoice);
  return options[playerChoice].winsTo === computerChoice ? console.log('win')
  : options[playerChoice] === options[computerChoice] ? console.log('draw')
  : console.log('lose');
}

const computerTurn = () => {

  // Object.keys(dictionary) gets me all the keys from whatever dictionary i pass as args
  // the brackets get a random number that selects the top level of the dictionary (rock, paper, or scissors)

  computerChoice = Object.keys(options)[getRandomInt()];
  getWinner(playerChoice, computerChoice);
}