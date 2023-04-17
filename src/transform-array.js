/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const discardNext = "--discard-next";
  const discardPrev = "--discard-prev";
  const doubleNext = "--double-next";
  const doublePrev = "--double-prev";
  let transformArray = [...arr];
  for (let i = 0; i < transformArray.length; i++) {
    let current = transformArray[i];
    if (current === discardPrev) {
      transformArray[i - 1] = null;
      transformArray[i] = null;
      continue;
    }
    if (current === doublePrev) {
      transformArray[i] = transformArray[i - 1];
      continue;
    }
    if (current === doubleNext) {
      transformArray[i] = transformArray[i + 1];
      continue;
    }
    if (current === discardNext) {
      transformArray[i] = null;
      transformArray[i + 1] = null;
      continue;
    }
  }
  return transformArray.filter(Boolean);
}

module.exports = {
  transform
};