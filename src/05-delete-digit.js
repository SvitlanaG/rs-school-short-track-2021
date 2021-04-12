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
  let newDigit = n;
  if (n < 0) newDigit = n * -1;
  const tempArr = newDigit.toString().split('');
  const oldLength = tempArr.length;
  for (let i = 1; i < tempArr.length; i++) {
    if (tempArr[i] > tempArr[i - 1]) {
      tempArr.splice([i - 1], 1);
      break;
    }
  }
  if (tempArr.length === oldLength) tempArr.pop();
  return Number(tempArr.join(''));
}
module.exports = deleteDigit;
