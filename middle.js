const assertArraysEqual = require('./assertArraysEqual')

const middle = function(array) {
  let returnArray = [];
  let midpointIndex = Math.floor(array.length / 2);
  // if array has 1 or 2 elements return []
  if (array.length <= 2) {
    return returnArray;
  } else if (array.length % 2 === 0) {
    // else if array is even
    returnArray.unshift(array[midpointIndex]);
    returnArray.unshift(array[midpointIndex - 1]);
    return returnArray;
  } else {
    // else array is odd
    returnArray.unshift(array[midpointIndex]);
    return returnArray;
  }
};

module.exports = middle;