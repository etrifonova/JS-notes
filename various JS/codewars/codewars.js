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

4) Вычисляем из пар чисео большее и меньшее и ставим по возрастанию

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