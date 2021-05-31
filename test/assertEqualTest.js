const assertEqual = require('../assertEqual');
const head = require('../head')

// test code 
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const test = require('./index');
console.log(test.letterPositions('aabc bdd'))