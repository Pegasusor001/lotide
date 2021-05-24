// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let semiCommaA = '';
  let semiCommaB = '';
  
  if (typeof(actual) === 'string') {
    semiCommaA = '"';
  } else {
    semiCommaA = '';
  }

  if (typeof(expected) === 'string') {
    semiCommaB = '"';
  } else {
    semiCommaB = '';
  }
  
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: ' + semiCommaA + actual + semiCommaA + ' === ' + semiCommaB + expected + semiCommaB);
  } else {
    console.log('🛑🛑🛑 Assertion Failed: ' + semiCommaA + actual + semiCommaA + ' !== ' + semiCommaB + expected + semiCommaB);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);