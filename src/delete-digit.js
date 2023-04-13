/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numString = `${n}`;
  const numbers = [];
  for (let i = 0; i < numString.length; i++) {
    const digit = Number(numString.replace(numString[i], ''));
    numbers.push(digit);
  }
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};