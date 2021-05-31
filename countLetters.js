const countLetters = function(sentense) {
  sentense = sentense.split('');
  let result = {};

  for (let letter1 of sentense) {
    result[letter1] = 0;
    for (let letter2 of sentense) {
      if (letter1 === letter2)
        result[letter1] ++
    }
  }
  return result
}

module.exports = countLetters;
// console.log(countLetters('LHLHJJ'))