/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const counts = {};

  arr.forEach((x) => (counts[x] = counts[x] ? counts[x] + 1 : 1));

  for (const [key, value] of Object.entries(counts)) {
    if (value > arr.length / 4) {
      return +key;
    }
  }
};
