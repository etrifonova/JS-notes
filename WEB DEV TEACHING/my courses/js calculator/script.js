let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');
// declare, assign, initialize, target, it will show, whose - чей, consist of - состоять из, if-statement, comparison - сравнение, reassign

let string = ""; // "" empty string
let arr = Array.from(button);
arr.forEach(button => {
  button.addEventListener('click', (e) => { // e - event
    if (e.target.innerHTML == '=') {
      try {
        let result = new Function('return ' + string)();
        string = result.toString();
        input.value = result;
        console.log(result);
      } catch (error) {
        input.value = 'Error';
      }
    }
    else if (e.target.innerHTML == 'AC') { // (else) if-statement, AC - all clear (очистить всё)
      string = "";
      input.value = string;
    }
    else if (e.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string;
    }
    else {
      string += e.target.innerHTML;
      input.value = string;
    }
  }
)
})
