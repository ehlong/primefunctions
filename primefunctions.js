// eslint-disable-next-line import/no-extraneous-dependencies
let _ = require('underscore');

function primeGen(limit) { // return list of prime numbers up to the limit
  const array = [limit]; // create array of correct size
  const upBound = Math.sqrt(limit); // create a binding to lower operation time
  const output = []; // create array to hold output
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

function cumulativeSum(list) { // produce a cumulative sum for list passed in
  const retArray = [list.length];
  const first = list[0];
  retArray[0] = first;
  for (let i = 1; i < list.length; i++){
    const hold = list[i];
    retArray[i] = retArray[i - 1] + hold;
  }
  return retArray;
}

const x = primeGen(10);
console.log(cumulativeSum(x)); // works
