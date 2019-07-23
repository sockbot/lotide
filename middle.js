const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

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

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);