const assertEqual = require('../assertEqual');
const head = require('../head')
//
// console.log(head["Hello", "Lighthouse", "Labs"])
// console.log(assertEqual('a','a'))

assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

