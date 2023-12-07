/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    for (let i = num.length - 1; i >= 0; i--)
        if (num[i] % 2 !== 0) return num.slice(0, i + 1);
    return "";
};
