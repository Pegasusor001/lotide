const letterPositions = function(sentence) {
  const result = {};

  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (result[sentence[i]]) {
      result[sentence[i]].push(i)
    } else if (sentence[i] === ' ') {
      continue;
    } else {
      result[sentence[i]] = [i];
    }
  }
  return result;
};

module.exports = letterPositions;

// console.log(letterPositions('aabc bdd'))
// console.log(' ', typeof ' ', ' ' === ' ')