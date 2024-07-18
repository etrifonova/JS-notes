const outputOne = document.getElementById("outputOne");
const outputTwo = document.getElementById("outputTwo");
const outputThree = document.getElementById("outputThree");
const outputFour = document.getElementById("outputFour");
const outputFive = document.getElementById("outputFive");
const outputSix = document.getElementById("outputSix");

// push()
const stackOne = ["HTML", "CSS", "JS"];
const lengthOne = stackOne.push("React.js");
outputOne.innerHTML = `console: <span class="output-value">${lengthOne}</span><br><span class="output-comment">(the length of the stack array after \'React.js\' was pushed to its end)</span>`;

// shift()
const stackTwo = ["React", "Vue", "Gatsby"];
const shiftedItem = stackTwo.shift();
outputTwo.innerHTML = `console: <span class="output-value">${shiftedItem}</span><br><span class="output-comment">(the first element of the array that has been removed from it)</span>`;

// pop()
const stackThree = ["Git", "VS Code", "Node.js"];
const poppedItem = stackThree.pop();
outputThree.innerHTML = `console: <span class="output-value">${poppedItem}</span><br><span class="output-comment">(the last element of the array that has been removed from it)</span>`;

// unshift()
const stackFour = ["Git", "VS Code", "Node.js"];
const lengthTwo = stackFour.unshift("Webpack");
outputFour.innerHTML = `console: <span class="output-value">${lengthTwo}</span><br><span class="output-comment">(the length of the stack array after \'Webpack\' was pushed to its beginning)</span>`;

// concat()
const array1 = ["grid", "flexbox", "block"];
const array2 = ["inline", "inline-block", "none"];
const array3 = array1.concat(array2);
outputFive.innerHTML = `console: <span class="output-value">${array3}</span><br><span class="output-comment">(array2 has been added to the end of array1)</span>`;

// filter()
const words = ["bug", "error", "failure", "application", "crash"];
const result = words.filter((word) => word.length > 6);
outputSix.innerHTML = `console: <span class="output-value">${result}</span><br><span class="output-comment">(words containing more than 6 letters are displayed)</span>`;
