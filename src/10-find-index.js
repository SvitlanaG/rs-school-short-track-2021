/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let index = -1;
  let startSearch = 0;
  let endSearch = array.length - 1;

  while (startSearch <= endSearch) {
    const middleOfArray = Math.floor((startSearch + endSearch) / 2);

    if (array[middleOfArray] === value) index = middleOfArray;
    if (array[middleOfArray] < value) startSearch = middleOfArray + 1;
    else endSearch = middleOfArray - 1;
  }
  return index;
}

module.exports = findIndex;
