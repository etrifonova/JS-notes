// иЗУЧИТЬ: 1) добавлять элементы в пустой массив; 2) кодировка букв в ASCII


/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

Шаги:

1) преобразовать строку в массив через split;
2) удалить небуквенные символы, либо выбрать только буквенные символы;
3) сравнить полученный массив с перевернутым через reverse;



function palindrome(str) {
  let a = str.toLowerCase().split('').map( letter => letter.match(/^[a-z0-9]+$/i) ).join('');
  let b = str.toLowerCase().split('').map( letter => letter.match(/^[a-z0-9]+$/i) ).reverse().join('');
  return a === b;
}

console.log(palindrome("1 eye for of 1 eye."));

*/




// ^[a-z0-9]+$/i - for checking if a character is alphanumeric; /[a-z]/i - for checking if a character is a letter


/* Replace With Alphabet Position

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  return text;
}

My solution (big & clumsy!):

function alphabetPosition(text) {
  let textArray = text.split('');
  let numberArray = '';
  for (let i = 0; i < textArray.length - 1; i++) {
    if (textArray[i].length === 1 && textArray[i].match(/[a-z]/i)) {
      numberArray += textArray[i].toLowerCase().charCodeAt(0) - 97 + 1 + " ";
  }
}
if (textArray[textArray.length - 1].length === 1 && textArray[textArray.length - 1].match(/[a-z]/i)) {
  numberArray += textArray[textArray.length - 1].toLowerCase().charCodeAt(0) - 97 + 1;
} else {
  numberArray = numberArray.slice(0, -1);
}
  return numberArray;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")) 

Other solutions from codewars:

1.
function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

2. 
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

3. 
function alphabetPosition(text) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text.toLowerCase().split('')
  .filter( letter => {
    let index = alphabet.indexOf(letter);
    return index > -1;
  }  )
  .map( letter => alphabet.indexOf(letter) + 1 )
  .join(' ')
}


*/



/* Jaden Casing Strings
Моё первое самостоятельное (без поиска задачи на Ютубе) решение:
Решение громоздкое, но пока в рамках моих знаний. Надо учиться более рациональным решениям.


String.prototype.toJadenCase = function () {
  
  let array = this.split(" ");
  let capitalizedString = [];
  let capitalizedWord;
  for (let i = 0; i < array.length - 1; i++) {
    capitalizedWord = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    capitalizedString += capitalizedWord + " ";
  }
  capitalizedString += array[array.length-1].charAt(0).toUpperCase() + array[array.length-1].slice(1);
  return capitalizedString;
};

const someStuff = "here we go yo";

console.log(someStuff.toJadenCase());

Варианты других пользователей:
1.
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

2.
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

3.
String.prototype.toJadenCase = function () {

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return this.split(' ').map(capitalizeFirstLetter).join(' ');
};



*/



/* DESCENDING ORDER

function descendingOrder(n){
  return parseInt(String(n).split('').sort((a, b) => a - b).reverse().join(""));
}

console.log(descendingOrder(436285));
1) Параметры
string
Значение, которое необходимо проинтерпретировать. Если значение параметра string не принадлежит строковому типу, оно преобразуется в него (с помощью абстрактной операции ToString). Пробелы в начале строки не учитываются.

radix
Целое число в диапазоне между 2 и 36, представляющее собой основание системы счисления числовой строки string, описанной выше. В основном пользователи используют десятичную систему счисления и указывают 10. Всегда указывайте этот параметр, чтобы исключить ошибки считывания и гарантировать корректность исполнения и предсказуемость результата. Когда основание системы счисления не указано, разные реализации могут возвращать разные результаты.

Возвращаемое значение
Целое число, полученное парсингом (разбором и интерпретацией) переданной строки. Если первый символ не получилось сконвертировать в число, то возвращается NaN.

В решении не указан radix. Возможно, по умолчанию исп-ся десятичная система.

2) Далее преобразуем число в строку

3) Преобразуем строку в массив

4) Вычисляем из пар чисел большее и меньшее и ставим по возрастанию

5) Меняем порядок в массиве - от большего к меньшему

6) Преобразуем массив в число
*/

//   return parseInt(String(n).split("").sort((a,b) => a - b).reverse().join(""));



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