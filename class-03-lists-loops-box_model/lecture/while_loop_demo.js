'use strict';

var number;
var counter = 1;

while (number !== 20) {
  number = parseInt(prompt('What is your favorite number?'));
  if (number < 20) {
    alert('guessed too low');
    counter++;
  } else if (number > 20) {
    alert('guessed too high');
    counter++;
  } else if (number === NaN || number === null) {
    alert('enter a number please');
    counter++;
  }
}

console.log('counter:', counter);
