'use strict';

var stuff = ['pencil', 'fish', 'popcorn', 'comb', 'box'];
var answer = prompt('What is one of my favorite things?');
var flag;

for (var i = 0; i < stuff.length; i++) {
  console.log('current thing: ', stuff[i]);

  if (answer === stuff[i]) {
    alert('Nice job!  You know what my favorite thing is');
    flag = true;
    break;
  }
}

if (!flag) {
  alert('Wrong... nice try!');
}
