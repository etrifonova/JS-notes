



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

