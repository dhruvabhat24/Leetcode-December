/**
* @param {number[][]} mat
* @return {number}
*/
var numSpecial = function (mat) {
    let specialNumberCount = 0;
    for (let i = 0; i < mat.length; i++) {
        const colIndex = checkRow(mat, i);
        if (colIndex !== undefined) {
            const result = checkColumn(mat, colIndex);
            if (result == 1) {
                specialNumberCount++;
            }
        }
    }
    return specialNumberCount
};


var checkRow = function (mat, i) {
    let sum = 0;
    mat[i].forEach((item) => {
        sum += item;
    });
    if (sum == 1) {
        return mat[i].indexOf(1);
    }
};

var checkColumn = function (mat, column) {
    let sum = 0;
    for (let j = 0; j < mat.length; j++) {
        sum += mat[j][column];
    }
    return sum;
};
