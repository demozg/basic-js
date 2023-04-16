/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (!names.length) return [];
  const newNames = new Array(names.length);
  newNames[0] = names[0];
  for (let i = 1; i < names.length; i++) {
    const checkedName = names[i];
    if (!newNames.includes(checkedName)) {
      newNames[i] = checkedName;
      continue;
    }
    let supposedName = checkedName;
    let countNames = 0;
    for (let j = 0; j < i; j++) {
      if (newNames[j] === supposedName) {
        countNames++;
        supposedName = `${checkedName}(${countNames})`;
      }
    }
    newNames[i] = supposedName;
  }
  return newNames;
}

module.exports = {
  renameFiles
};