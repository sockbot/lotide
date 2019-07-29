const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const countLetters = function(str) {
  let letterCount = {};
  for (let char of str) {
    debugger;
    if (letterCount[char]) {
      letterCount[char] += 1;
    } else {
      letterCount[char] = 1;
    } 
  };
  console.log(letterCount);
  return letterCount;
};

let sentence = "lighthouse in the house";
let result = countLetters(sentence);

assertEqual(result.l, 1);
assertEqual(result.i, 2);
assertEqual(result.g, 1);
assertEqual(result.h, 4);
