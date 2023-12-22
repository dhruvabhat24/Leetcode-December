/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let oneCount = 0
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '1') oneCount++
    }
    let res = 0,
        zeroCount = s[0] === '0' ? 1 : 0
    for (let i = 1; i < s.length; i++) {
        if (zeroCount + oneCount > res) res = zeroCount + oneCount
        if (s[i] === '0') zeroCount++
        else oneCount--
    }
    return res
};
