let z = 0;

function checkScope(a) {
  a++;
  return a;
}

checkScope(z);
console.log(z);
// Function Arguments
// Function arguments (parameters) work as local variables inside functions.

myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}

console.log("My car is a " + carName)


console.log(checkScope(z));
// It looks like here we're console.logging what happens inside the function, so it shows the changes to the z variable;

let one = 1;
let two = 2;
let three;

function someFunction() {
  three = one + two;
}

console.log(someFunction()); //this works like a function call, but it displays "undefined" because there's no return-statement in the function
console.log(three); // this works only if there's a function call; otherwise it says "undefined"

/* Glossary
scope область видимости
function scope область видимости на уровне функции
global scope  область видимости на глобальном уровне
module scope  область видимости на уровне модуля
block scope область видимости на уровне блока (для let и const)


*/

/* Notes
Source https://www.w3schools.com/js/js_scope.asp
Variables declared with the var keyword can NOT have block scope.

Automatically Global
If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

This code example will declare a global variable carName, even if the value is assigned inside a function.

Example
myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}

console.log("My car is a " + carName) - this will display "My car is a Volvo"

Source https://www.w3schools.com/jsref/jsref_return.asp

a return statement is not necessary (=optional)

*/