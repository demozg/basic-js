/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let addresses = n.split("-");
  if (addresses.length < 6) return false;
  for (let address of addresses) {
    if (address.length !== 2) return false;
    for (let letter of address) {
      if (["A", "B", "C", "D", "E", "F"].includes(letter) || (+letter >= 0 && +letter <= 9))
        continue;
      return false;
    }
  }
  return true;
}
module.exports = {
  isMAC48Address
};