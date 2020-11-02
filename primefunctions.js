// eslint-disable-next-line import/no-extraneous-dependencies
const _ = require('underscore'); // silencing error due to IntelliJ not seeing Underscore
// feel free to delete initial comment if IntelliJ chooses to play nice

function primeGen(limit) { // return list of prime numbers up to the limit
  const array = [limit]; // create array of correct size
  const upBound = Math.sqrt(limit); // create a binding to lower operation time
  const output = []; // create array to hold output
  for (let i = 0; i < limit; i++) { // activate all array members
    array.push(true);
  }
  for (let i = 2; i <= upBound; i++) { // for 2 through sqrt limit
    if (array[i] === true) { // if array member exists
      for (let j = i * i; j < limit; j += i) { // for square of i until the limit (orig. values wont get trimmed)
        array[j] = false; // set multiples to false (not prime)
      }
    }
  }
  for (let i = 2; i < limit; i++) { // for each number
    if (array[i] === true) { // if prime
      output.push(i); // push to output
    }
  }
  return output; // method used is more complicated but much faster than _.reject method
}

function cumulativeSum(list) { // produce a cumulative sum for list passed in
  const retArray = [list.length]; // array to output
  const first = list[0];
  retArray[0] = first; // loaded with initial value
  for (let i = 1; i < list.length; i++) {
    const hold = list[i]; //
    retArray[i] = retArray[i - 1] + hold;
  }
  return retArray;
}

function maxPrimeSum(limit) {
  let primes = primeGen(limit); // list of prime numbers to limit
  let primeSums = _.reject(cumulativeSum(primes), function (num) { return num >= limit; });
  // list of sequential sums of primes, trimmed to max at limit
  let hold = primeSums.length; // a way to hold a length while manipulating
  const arr = []; // what will be returned
  while (hold > 0) { // while not an empty list of prime sums
    for (let i = primeSums.length - 1; i >= 0; i--) {
      if (_.contains(primes, _.last(primeSums))) { // if the highest value of primeSums is prime
        arr.push([_.last(primeSums), primeSums.length]); // push it and the consecutive prime length
      }
      primeSums = _.initial(primeSums); // trim the end off
    }
    primes = _.rest(primes); // trim the beginning off
    primeSums = _.reject(cumulativeSum(primes), function (num) { return num >= limit; });
    // update prime sums from trimmed list
    hold--; // decrement hold
  }
  return _.max(arr, function (ar) { return ar[1]; }); // return whatever has the highest consecutive list
}
console.log(maxPrimeSum(100)); // added to remove ESLint notice
