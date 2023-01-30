/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

Шаги:

1) преобразовать строку в массив через split;
2) удалить небуквенные символы, либо выбрать только буквенные символы;
3) сравнить полученный массив с перевернутым через reverse;

^[a-z0-9]+$/i - for checking if a character is alphanumeric; /[a-z]/i - for checking if a character is a letter

function palindrome(str) {
  let a = str.toLowerCase().split('').map( letter => letter.match(/^[a-z0-9]+$/i) ).join('');
  let b = str.toLowerCase().split('').map( letter => letter.match(/^[a-z0-9]+$/i) ).reverse().join('');
  return a === b;
}

console.log(palindrome("1 eye for of 1 eye."));


*/

// Можно использовать встроенный метод Object.keys. Результатом вызова такого метода будет массив ключей переданного объекта.

// Похожим образом работает метод Object.values, только на выходе получаем массив значений, а не ключей.

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
  return student.house === 'Gryffindor';
})

console.log(foundStudent)


const numConverter = [
  { arabicNum: '1',  romanNum: 'I' },
  { arabicNum: '2',  romanNum: 'II' },
  { arabicNum: '3',  romanNum: 'III' },
  { arabicNum: '4',  romanNum: 'IV' },
  { arabicNum: '5',  romanNum: 'V' },
  { arabicNum: '6',  romanNum: 'VII' },
  { arabicNum: '7',  romanNum: 'VIII' }
]

 
//  console.log(convertToRoman(3));

function convertedNum (number) {
  return numConverter.find((num) => {
    return num.arabicNum === number; 
  }).romanNum;
}

console.log (convertedNum('4'));


// let array = Object.entries(numConverter).join(', ');

// console.log (array);





/*Roman Numeral Converter
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.

Шаги:

1) создать объект с соответствием римских и арабских чисел
2) 





*/
