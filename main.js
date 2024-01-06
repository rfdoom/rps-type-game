let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const showPlayerScore = document.getElementById('player-score')
const showComputerScore = document.getElementById('computer-score')

const options = {
  rock: {losesTo: 'paper', winsTo: 'scissors', message: 'rock crushes scissors'},
  paper: {losesTo: 'scissors', winsTo: 'rock', message: 'paper suffocates rock'},
  scissors: {losesTo: 'rock', winsTo: 'paper', message: 'scissors shred paper'},
  outcomes: ['Win', 'Lose', 'Tie']
};

let history = [];

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
  const win = options.outcomes[0]
  const lose = options.outcomes[1]
  const tie = options.outcomes[2]
  // compares the computer choice to the players choice to determine the winner
  // sets the message that will be displayed in the html
  // adds the results of the game round to an array of the history of the game session
  let result;
    options[playerChoice].winsTo === computerChoice ? (result = `${options[playerChoice].message}. You win!`, history.push([playerChoice, computerChoice, win]), playerScore++)
    : options[playerChoice] === options[computerChoice] ? (result = 'This is a tie.', history.push([playerChoice, computerChoice, tie]))
    : (result = `${options[computerChoice].message}. You lose.`, history.push([playerChoice, computerChoice, lose]), computerScore++);
  console.log('player ', playerScore, 'cpu ', computerScore);
  //gameHistory();
  showComputerScore.innerText = computerScore;
  showPlayerScore.innerText = playerScore;
  return document.getElementById('results').innerText = result;
}

const computerTurn = () => {

  // Object.keys(dictionary) gets me all the keys from whatever dictionary i pass as args
  // the brackets get a random number that selects the top level of the dictionary (rock, paper, or scissors)

  computerChoice = Object.keys(options)[getRandomInt()];
  getWinner(playerChoice, computerChoice);
}

// const gameHistory = () => {
//   for (let i = 0; i < history.length; i++) {
//     // creates one major sub array
//     const subArr = document.createElement('div');
//     subArr.classList.add('history-element');
//     for (let j = 0; j < history[i].length; j++) {
//       const elementDiv = document.createElement('div');
//       // gives each new element div the class named 'history-element'
//       elementDiv.classList.add('history-elements');
//       // creates a new div for each element inside the innermost array in the history array
//       elementDiv.textContent = history[i][j];
//       // adds each new array to the end of the major sub array, like an array of arrays
//       subArr.appendChild(elementDiv);
//     }
//     document.getElementById('history-list').appendChild(subArr);
//   }
// }

// const gameHistory = () => {
//   const historyList = document.getElementById('history-list');
//   historyList.innerHTML = history.map(i => i.map(x => `<li>${x}</li>`)).join('');
// }