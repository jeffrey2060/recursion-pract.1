/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


function range(start, end) {
  // base case: if end # is <= start #
  if (end <= start) {
    return [];
  }
  // recursive case: include start# and call range with next #
  return [start].concat(range(start + 1, end));
}

console.log(range(1, 5));
console.log(range(3, 4));
console.log(range(7, 6));



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
