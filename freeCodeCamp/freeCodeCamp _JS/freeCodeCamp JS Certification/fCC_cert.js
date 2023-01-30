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


/* Roman Numeral Converter

function convertedNum (num) {
  const numConverter = [
  { arabicNum: 0,  romanNum: '' },
  { arabicNum: 1,  romanNum: 'I' },
  { arabicNum: 2,  romanNum: 'II' },
  { arabicNum: 3,  romanNum: 'III' },
  { arabicNum: 4,  romanNum: 'IV' },
  { arabicNum: 5,  romanNum: 'V' },
  { arabicNum: 6,  romanNum: 'VI' },
  { arabicNum: 7,  romanNum: 'VII' },
  { arabicNum: 8,  romanNum: 'VIII' },
  { arabicNum: 9,  romanNum: 'IX' },
  { arabicNum10: 0,  romanNum: '' },
  { arabicNum10: 1,  romanNum: 'X' },
  { arabicNum10: 2,  romanNum: 'XX' },
  { arabicNum10: 3,  romanNum: 'XXX' },
  { arabicNum10: 4,  romanNum: 'XL' },
  { arabicNum10: 5,  romanNum: 'L' },
  { arabicNum10: 6,  romanNum: 'LX' },
  { arabicNum10: 7,  romanNum: 'LXX' },
  { arabicNum10: 8,  romanNum: 'LXXX' },
  { arabicNum10: 9,  romanNum: 'XC' },
  { arabicNum100: 0,  romanNum: '' },
  { arabicNum100: 1,  romanNum: 'C' },
  { arabicNum100: 2,  romanNum: 'CC' },
  { arabicNum100: 3,  romanNum: 'CCC' },
  { arabicNum100: 4,  romanNum: 'CD' },
  { arabicNum100: 5,  romanNum: 'D' },
  { arabicNum100: 6,  romanNum: 'DC' },
  { arabicNum100: 7,  romanNum: 'DCC' },
  { arabicNum100: 8,  romanNum: 'DCCC' },
  { arabicNum100: 9,  romanNum: 'CM' },
  { arabicNum1000: 1,  romanNum: 'M' },
  { arabicNum1000: 2,  romanNum: 'MM' },
  { arabicNum1000: 3,  romanNum: 'MMM' }

]
  if (num.toString().length === 4) {
    const numArray = num.toString().split('');
    const newRoman = numConverter.find((number) => {
      return number.arabicNum1000 == numArray[0]; 
    }).romanNum + numConverter.find((number) => {
      return number.arabicNum100 == numArray[1]; 
    }).romanNum + numConverter.find((number) => {
      return number.arabicNum10 == numArray[2]; 
    }).romanNum + numConverter.find((number) => {
      return number.arabicNum == numArray[3]; 
    }).romanNum;
    console.log(newRoman);
    return newRoman;
  } else if (num.toString().length === 3) {
    const numArray = num.toString().split('');
    const newRoman = numConverter.find((number) => {
      return number.arabicNum100 == numArray[0]; 
    }).romanNum + numConverter.find((number) => {
      return number.arabicNum10 == numArray[1]; 
    }).romanNum + numConverter.find((number) => {
      return number.arabicNum == numArray[2]; 
    }).romanNum;
    console.log(newRoman);
    return newRoman;
  } else if (num.toString().length === 2) {
    const numArray = num.toString().split('');
    const newRoman = numConverter.find((number) => {
      return number.arabicNum10 == numArray[0]; 
    }).romanNum + numConverter.find((number) => {
      return number.arabicNum == numArray[1]; 
    }).romanNum;
    console.log(newRoman);
    return newRoman;
  } else {
    return numConverter.find((number) => {
    return number.arabicNum === num; 
  }).romanNum;
  }
}

console.log(convertedNum(3970));

*/
