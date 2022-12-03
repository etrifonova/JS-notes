const hogwartsStudents = [1, 2, 3, 4, 5]

const includesTwo = hogwartsStudents.includes(4)

console.log(includesTwo)

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

5) some - checks if the array contains the specified value and prints true/false depending on whether it does or not

const hogwartsStudents = [
  { name: 'Harry',  house: 'Gryffindor' },
  { name: 'Ron',  house: 'Gryffindor' },
  { name: 'Hermione',  house: 'Gryffindor' },
  { name: 'Draco',  house: 'Slytherin' },
  { name: 'Voldemort',  house: 'Slytherin' },
  { name: 'Luna',  house: 'Ravenclaw' },
  { name: 'Cedric',  house: 'Hufflepuff' }
]

const evilStudents = hogwartsStudents.some((student) => {
 return student.house === 'Hufflepuff';
})

console.log(evilStudents)

6) every - checks if every items complies with the condition

const hogwartsStudents = [
  { name: 'Harry',  house: 'Gryffindor', siblings: 0 },
  { name: 'Ron',  house: 'Gryffindor', siblings: 6 },
  { name: 'Hermione',  house: 'Gryffindor', siblings: 0 },
  { name: 'Draco',  house: 'Slytherin', siblings: 0 },
  { name: 'Voldemort',  house: 'Slytherin', siblings: 0 },
  { name: 'Luna',  house: 'Ravenclaw', siblings: 0 },
  { name: 'Cedric',  house: 'Hufflepuff', siblings: 0 }
]

const evilStudents = hogwartsStudents.every((student) => {
 return student.siblings > 0;
})

console.log(evilStudents)

7) reduce - not just returns sth, but performs some operation first

reduce runs a function on every single item
the currentTotal is whatever the previous iteration returned
"student" is the actual item in the array
"0" is the initial value of currentTotal 
the function takes currentTotal as the first parameter

const hogwartsStudents = [
  { name: 'Harry',  house: 'Gryffindor', siblings: 0 },
  { name: 'Ron',  house: 'Gryffindor', siblings: 6 },
  { name: 'Hermione',  house: 'Gryffindor', siblings: 0 },
  { name: 'Draco',  house: 'Slytherin', siblings: 0 },
  { name: 'Voldemort',  house: 'Slytherin', siblings: 0 },
  { name: 'Luna',  house: 'Ravenclaw', siblings: 0 },
  { name: 'Cedric',  house: 'Hufflepuff', siblings: 0 }
]

const totalSiblings = hogwartsStudents.reduce((currentTotal, student) => {
 return student.siblings + currentTotal
}, 0)

console.log(totalSiblings)

8) includes - it doesn't take a function but a single argument


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