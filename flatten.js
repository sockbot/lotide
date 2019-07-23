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

const flatten = function(srcArray) {
  let resultsArray = [];
  for (let i = 0; i < srcArray.length; i++) {
    if (Array.isArray(srcArray[i])) {
      for (let j = 0; j < srcArray[i].length; j++) {
        resultsArray.push(srcArray[i][j]);
      }
    } else {
      resultsArray.push(srcArray[i]);
    }
  }
  return resultsArray;
};

let testArray = [1, 2, [3, 4], 5, [6]];
console.log(testArray);
console.log(flatten(testArray));
assertArraysEqual(flatten(testArray), [1,2,3,4,5,6]);