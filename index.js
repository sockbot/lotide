const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue')
const flatten = flatten('./flatten');
const head = require('./head');
const letterPositions = require('./head');
const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  eqArrays:         eqArrays,
  eqObjects:        eqObjects,
  findKey:          findKey,
  findKeyByValue:   findKeyByValue,
  flatten:          flatten,
  head:             head,
  letterPositions:  letterPositions,
  map:              map,
  middle:           middle,
  tail:             tail,
  takeUntil:        takeUntil,
  without:          without
}