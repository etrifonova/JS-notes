/*

*/

/*

*/

/* Переведите текст вида border-left-width в borderLeftWidth 

Фильтрация по диапазону
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


/* Переведите текст вида border-left-width в borderLeftWidth



function camelize(str) {
  return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

// забываю ставить скобки после методов

console.log(camelize('hello-my-friend'))

*/

