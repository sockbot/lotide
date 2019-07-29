const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// let result1 = eqArrays([[2, 3], [4]], [[2, 3], [4]]); // => true
// let result2 = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
// let result3 = eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false
// console.log(result1);
// console.log(result2);
// console.log(result3);
