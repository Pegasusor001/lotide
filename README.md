# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lun_ji/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `tail (array)`: return an array without the first item. 
* `eqArrays(array1, array2)`: compare two array, return 'they are the same' if they are the same. 
* `assertArraysEqual(array1, array2)`: compare two arraries, return true if they are the same. 
* `middle(array)`: return the middle items for an array, return middle one if it contain odd number of items, return middle two if it contain even number of items. 
* `assertEqual(array1, array2)`:
* `head(array)`: return the first item of an array. 
* `assertObjectsEqual(object1, object2)`: compare two objects and return "they are the same" if all the keys and items in the two objects are the same. 
* `countLetters(string)`: count the number of each letter in a string, an object will be returned. 
* `countOnly(string, 'X')`: count the frequency of the letter 'X' in the string. 
* `findKey(object, 'key')`: find the value of the input key in the given object. 
* `findKeyByValue(object value)`: find the first key of the given value in the object. 
* `letterPositions(string, 'X')`: return the first index of letter 'X' in the given string. 