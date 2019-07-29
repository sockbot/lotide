# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sockbot/lotide`

**Require it:**

`const _ = require('@sockbot/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

1. countLetters(string): Given a string of letters, it returns an object with the number of occurrences for each.
2. countOnly(allItems, itemsToCount): Given an object and a list of values, it returns the number of occurrences of each.
3. eqArrays(array1, array2): Tests if two arrays are the same.
4. eqObjects(object1, object2): Tests if two objects are the same.
5. findKey(object, callback): Given an object and a callback, it returns the key associated with it.
6. findKeyByValue(obj, obj_value): Given an object and a value, it returns the key associated with it.
7. flatten(array): Given a nested array, it returns a flat array of the same elements.
8. head(array): Given an array, it returns the first element.
9. letterPositions(string): Given a string, it returns an object with an array of positions for each.
10. map(array, callback): Given an array and a callback function, it returns an array with the callback applied.
11. middle(array): Returns the middle element of an array. If the array is even, it will return both middle ones. If the array is odd it will return the middle one.
12. tail(array): Returns the last element of an array.
13. takeUntil(array, callback): Given an array and a callback function, it returns all elements up to a match.
14. without(array, array): Given an array and an exclusion list, returns a new array without excluded elements.

## Tests

Lotide project uses mocha and chai Unit Tests. To run the tests for the node.js integration:
* run mocha in the Terminal in the root path of the repository package.
