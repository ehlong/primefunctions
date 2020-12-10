function primeGen(limit) { // return list of prime numbers up to the limit
  const list = [limit]; // all underscore removed to speed up processing time
  const upBound = Math.sqrt(limit); // binding to lower operation time
  const out = [];

  for (let i = 0; i < limit; i++) { // activate all array members
    list.push(true);
  }

  for (let j = 2; j <= upBound; j++) {
    if (list[j]) {
      for (let k = j * j; k < limit; k += j) { // trim multiples
        list[k] = false; // not a prime
      }
    }
  }

  for (let l = 2; l < limit; l++) {
    if (list[l]) {
      out.push(l); // if value true, is a prime, push to out
    }
  }
  return out;
}

function cumulativeSum(list) { // produce a cumulative sum for list passed in
  const arr = [list.length]; // array to output
  const first = list[0];
  arr[0] = first; // loaded with initial value
  for (let i = 1; i < list.length; i++) {
    const hold = list[i]; //
    arr[i] = arr[i - 1] + hold;
  }
  return arr;
}

function maxPrimeSum(limit) { // no changed needed here, only in primeGen
  let primes = primeGen(limit); // list of prime numbers to limit
  let primeSums = _.reject(cumulativeSum(primes), function (num) {
    return num >= limit;
  });
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
    primeSums = _.reject(cumulativeSum(primes), function (num) {
      return num >= limit;
    });
    // update prime sums from trimmed list
    hold--; // decrement hold
  }
  return _.max(arr, function (ar) {
    return ar[1];
  }); // return whatever has the highest consecutive list
}

maxPrimeSum(10);
