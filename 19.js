/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (g) {
  const m = g.length
  const n = g[0].length
  const g2 = Array.from({ length: m }, (e) => new Array(n))
  for (let currRow = 0; currRow < m; currRow++) {
    const previousRow = currRow - 1
    const nextRow = currRow + 1
    for (let currCol = 0; currCol < n; currCol++) {
      const previousCol = currCol - 1
      const nextCol = currCol + 1
      let sum = 0
      let count = 0
      if (previousRow >= 0) {
        if (previousCol >= 0) {
          sum += g[previousRow][previousCol]
          count++
        }
        sum += g[previousRow][currCol]
        count++
        if (nextCol < n) {
          sum += g[previousRow][nextCol]
          count++
        }
      }
      if (currRow >= 0 && currRow < m) {
        if (previousCol >= 0) {
          sum += g[currRow][previousCol]
          count++
        }
        sum += g[currRow][currCol] || 0
        count++
        if (nextCol < n) {
          sum += g[currRow][nextCol] || 0
          count++
        }
      }
      if (nextRow < m) {
        if (previousCol >= 0) {
          sum += g[nextRow][previousCol] || 0
          count++
        }
        sum += g[nextRow][currCol] || 0
        count++
        if (nextCol < n) {
          sum += g[nextRow][nextCol] || 0
          count++
        }
      }
      g2[currRow][currCol] = Math.floor(sum / count)
    }
  }
  return g2
}
