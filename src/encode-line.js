/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodeString = '';
  let countLetters = 1;
  for(let i = 0; i < str.length; i++) {
    let letter = str[i];
    if(letter === str[i + 1]) {
      countLetters++;
      continue
    }
    encodeString += countLetters === 1 ? letter : `${countLetters}${letter}`;
    countLetters = 1;
  }
  return encodeString
}

module.exports = {
  encodeLine
};