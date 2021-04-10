/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0;
  let tempStringToCompare = '';
  let smallString = '';
  let counter = 0;
  if (s1.length > s2.length) {
    tempStringToCompare = s1;
    smallString = s2;
  } else {
    tempStringToCompare = s2;
    smallString = s1;
  }
  for (let i = 0; i < tempStringToCompare.length; i++) {
    if (smallString.includes(tempStringToCompare[i])) {
      smallString = smallString.replace(
        tempStringToCompare[i],
        // eslint-disable-next-line comma-dangle
        '/'
      );
      counter++;
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;
