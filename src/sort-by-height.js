/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArray = [...arr];
  const sortedArray = arr.sort((a, b) => a - b).filter((elem) => elem !== -1);
  if(sortedArray.length === arr.length) return sortedArray;
  let indexArray = 0;
  for(let i = 0; i < newArray.length; i++) {
    if(newArray[i] === -1) {
      continue
    }
    newArray[i] = sortedArray[indexArray];
    indexArray++;
  }
  return newArray;
}

module.exports = {
  sortByHeight
};