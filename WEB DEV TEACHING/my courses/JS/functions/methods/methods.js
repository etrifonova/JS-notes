const outputOne = document.getElementById("outputOne")

// push()
const stack = ['HTML', 'CSS', 'JS'];
const length = stack.push('React.js');
outputOne.innerHTML = `console: ${length} <br><span class="output-comment">(the length of the stack array after \'React.js\' was pushed to its end)</span>`;