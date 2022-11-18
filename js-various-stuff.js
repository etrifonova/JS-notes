const hogwartsStudents = [
  { name: 'Harry',  house: 'Gryffindor' },
  { name: 'Ron',  house: 'Gryffindor' },
  { name: 'Hermione',  house: 'Gryffindor' },
  { name: 'Draco',  house: 'Slytherin' },
  { name: 'Voldemort',  house: 'Slytherin' },
  { name: 'Luna',  house: 'Ravenclaw' },
  { name: 'Cedric',  house: 'Hufflepuff' }
]

hogwartsStudents.forEach((student) => {
  console.log(student.house);
})


/* 8 Must Know JavaScript Array Methods
https://youtu.be/R8rmfD9Y5-c

1) filter - based on true/false

the items complying with the condition are included in the new array, while the others aren't.

const hogwartsStudents = [
  { name: 'Harry',  house: 'Gryffindor' },
  { name: 'Ron',  house: 'Gryffindor' },
  { name: 'Hermione',  house: 'Gryffindor' },
  { name: 'Draco',  house: 'Slytherin' },
  { name: 'Voldemort',  house: 'Slytherin' },
  { name: 'Luna',  house: 'Ravenclaw' },
  { name: 'Cedric',  house: 'Hufflepuff' }
]

const filteredStudents = hogwartsStudents.filter((student) => {
  return student.house === 'Gryffindor'
})

console.log(filteredStudents)

2) map - finds the value of the specified property

const hogwartsStudents = [
  { name: 'Harry',  house: 'Gryffindor' },
  { name: 'Ron',  house: 'Gryffindor' },
  { name: 'Hermione',  house: 'Gryffindor' },
  { name: 'Draco',  house: 'Slytherin' },
  { name: 'Voldemort',  house: 'Slytherin' },
  { name: 'Luna',  house: 'Ravenclaw' },
  { name: 'Cedric',  house: 'Hufflepuff' }
]

const studentNames = hogwartsStudents.map((student) => {
  return student.house;
})

console.log(studentNames)

3) find - finds the items with the specified value

const hogwartsStudents = [
  { name: 'Harry',  house: 'Gryffindor' },
  { name: 'Ron',  house: 'Gryffindor' },
  { name: 'Hermione',  house: 'Gryffindor' },
  { name: 'Draco',  house: 'Slytherin' },
  { name: 'Voldemort',  house: 'Slytherin' },
  { name: 'Luna',  house: 'Ravenclaw' },
  { name: 'Cedric',  house: 'Hufflepuff' }
]

const foundStudent = hogwartsStudents.find((student) => {
  return student.house === 'Dumbledore';
})

console.log(foundStudent)

4) forEach - prints the values of each of the specified properties

const hogwartsStudents = [
  { name: 'Harry',  house: 'Gryffindor' },
  { name: 'Ron',  house: 'Gryffindor' },
  { name: 'Hermione',  house: 'Gryffindor' },
  { name: 'Draco',  house: 'Slytherin' },
  { name: 'Voldemort',  house: 'Slytherin' },
  { name: 'Luna',  house: 'Ravenclaw' },
  { name: 'Cedric',  house: 'Hufflepuff' }
]

hogwartsStudents.forEach((student) => {
  console.log(student.house);
})

5) 


*/


/* let getStatistics = function (players) {
  let totalGoals = 0;
  for (j = 0; j < players.length; j++) {
    totalGoals += players[j].goals;
  }
  
  for (let i = 0; i < players.length; i++) {
    players[i].coefficient = players[i].goals * 2 + players[i].passes;
    players[i].percent = Math.round(players[i].goals * 100 / totalGoals);
  }
  return players;
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

*/

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