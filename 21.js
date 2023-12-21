/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const xIdxs = points.map(e => e[0]).sort((a, b) => a - b),
        diffX = xIdxs.slice(1).map((e, i) => e - xIdxs[i])

    return diffX.reduce((a, b) => a > b ? a : b, 0)
};
