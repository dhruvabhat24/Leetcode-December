/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sum = 0

    if (s.length !== t.length) {
        return false
    }

    for (let i = 0; i < s.length; i++) {
        sum = sum + Math.sqrt(s[i].charCodeAt()) - Math.sqrt(t[i].charCodeAt())
    }

    return Math.abs(sum) < s.length * 10 * Number.EPSILON
};
