const tail = require('../tail')
const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')
const assertEqual = require('../assertEqual');
const head = require('../head')

// TEST CODE
// console.log(eqArrays([1, 2, 3], [1, 2, 'a']))
// console.log(tail([1,2,3,4]))
// console.log(assertArraysEqual([1, 2, 3], [1, 2, 'a']))
// console.log(middle([1,2,3,4,5]), middle([1,2,3,4,5,6]), middle([1]))

module.exports = {
  tail: tail,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  middle: middle,
  assertEqual: assertEqual,
  head: head
};
