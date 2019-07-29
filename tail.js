/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
}; */

/*
const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray[i - 1] = array[i];
  }
  return newArray;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
*/

// const assertEqual = require('./assertEqual');

const tail = function(arr) {
  if (arr.length > 2) {
    
    /* The slice() method returns a shallow copy of a portion of an array into a new array object selected 
    from begin to end (end not included) where begin and end represent the index of items in that array. 
    The original array will not be modified. */
    return arr.slice(1);
  } 
  else {
    return [];
  }
};

module.exports = tail;

/*
const words =  [ "Yo Yo", "Lighthouse", "Labs" ];
console.log(tail(words));
console.log(tail(words).length);
*/