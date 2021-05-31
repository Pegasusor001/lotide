const tail = require('../tail')
const eqArrays = require('../eqArrays')

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 'a']))
console.log(tail([1,2,3,4]))