// eslint-disable-next-line import/no-extraneous-dependencies
let _ = require('underscore');

function primeGen(limit) {
  let array = [limit]; // create array of correct size
  let upBound = Math.sqrt(limit); // create a binding to lower operation time
  let output = []; // create array to hold output
  for (let i = 0; i < limit; i++) { // activate all array members
    array.push(true);
  }
  for (let i = 2; i <= upBound; i++) { // for 2 through sqrt limit
    if (array[i] === true) { // if array member exists
      for (let j = i * i; j < limit; j += i) { // for square of i until the limit
        array[j] = false; // set multiples to false (not prime)
      }
    }
  }

  for (let i = 2; i < limit; i++) {
    if (array[i] === true) {
      output.push(i);
    }
  }
  return output;
}
