/* https://learn.javascript.ru/array-methods#tasks

*/

/* https://learn.javascript.ru/array-methods#tasks

*/

/* Сортировать в порядке по убыванию https://learn.javascript.ru/array-methods#tasks


function sortedArr(arr) {
  return arr.sort((a, b) => b - a);
}
let arr1 = [15, -6, 2, 1, -10, 8, 15, -55];

console.log(sortedArr(arr1)); 

*/





/* Фильтрация по диапазону "на месте"

Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); 


function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    if (a > arr[i] || arr[i] > b) {
      arr.splice(i, 1);
    } 
  }
}

console.log(arr);



*/


/* Фильтрация по диапазону https://learn.javascript.ru/array-methods#tasks


важность: 4
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.

Например:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);


alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)


function filterRange(arr, a, b) {
  return arr.filter(item => a <= item && item <= b);

};

let arr = [5,3,8,1];
let filtered = filterRange(arr, 1, 5);

console.log(arr)
console.log(filtered)

*/


/* Переведите текст вида border-left-width в borderLeftWidth https://learn.javascript.ru/array-methods#tasks



function camelize(str) {
  return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

// забываю ставить скобки после методов

console.log(camelize('hello-my-friend'))

*/

