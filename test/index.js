const tail = require('../tail')
const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')
const assertEqual = require('../assertEqual');
const head = require('../head');
const assertObjectsEqual = require('../assertObjectsEqual');
const countLetters = require('../countLetters');
const countOnly = require('../countOnly');
const findKey = require('../findKey.js');
const findKeyByValue = require('../findKeyByValue');
const letterPositions = require('../letterPositions');

module.exports = {
  tail,
  eqArrays,
  assertArraysEqual,
  middle,
  assertEqual,
  head,
  assertObjectsEqual,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  letterPositions,
};


// TEST CODE
// console.log(eqArrays([1, 2, 3], [1, 2, 'a']))
// console.log(tail([1,2,3,4])Í)
// console.log(assertArraysEqual([1, 2, 3], [1, 2, 'a']))
// console.log(middle([1,2,3,4,5]), middle([1,2,3,4,5,6]), middle([1]))
// console.log(letterPositions('aabc bdd'))