let getStatistics = function (players) {
  let totalGoals = 0;
  for (j = 0; j < players.length; j++) {
    totalGoals += players[j].goals;
  }
  
  for (let i = 0; i < players.length; i++) {
    players[i].coefficient = players[i].goals * 2 + players[i].passes;
    players[i].percent = Math.round(players[i].goals * 100 / totalGoals);
  }
  return playersList;
};

let playerOne = {
  'name': 'Lampard',
  'goals': 2,
  'passes': 2
}

let playerTwo = {
  'name': 'Terry',
  'goals': 10,
  'passes': 1
}

let playerThree = {
  'name': 'Drogba',
  'goals': 3,
  'passes': 2
}

let playersList = [playerOne, playerTwo, playerThree];

console.log(getStatistics(playersList));
console.log(playersList);



/* Descending Order

!!! Что значат a и b? !!!

Code golf (short code):

function descendingOrder(n){
  return parseInt(String(n).split("").sort((a,b) => a - b).reverse().join(""));
}

descendingOrder();

longer version:

function descendingOrder(n){
  let strNum = String(n);
      strNumArr = strNum.split("");
      strNumArrSorted = strNumArr.sort((a,b) => a - b);
      strNumArrSorted = strNumArrSorted.reverse();
      strNum = strNumArrSorted.join("");
      return parseInt(strNum);
}

other versions:
1
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

2
function descendingOrder(n){
  return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}

3
function descendingOrder(n){
  return parseInt(n.toString().split('').sort().reverse().join(''), 10);
}

*/