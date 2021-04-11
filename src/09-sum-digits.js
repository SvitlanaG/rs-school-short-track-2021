/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n === 0) return 0;
  let sumOfDigits = 0;
  sumOfDigits = Math.floor((n % 10) + getSumOfDigits(n / 10));
  if (sumOfDigits / 10 >= 1) {
    sumOfDigits = getSumOfDigits(sumOfDigits);
  }
  return sumOfDigits;
}
module.exports = getSumOfDigits;
