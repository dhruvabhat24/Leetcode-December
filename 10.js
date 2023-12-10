var transpose = function(matrix) {
    let result = []
    let matrixRow = matrix.length;
    let matrixColumn = matrix[0].length;
    let outputRow = matrixColumn;
    let outputColumn = matrixRow;
    
    for (let i = 0 ; i < outputRow; i++) {
        let row = [];
        for (let j = 0; j < outputColumn; j++) {
            if (matrix[j]) {
                row.push(matrix[j].shift());    
            }
        }
        result.push(row);
    }
    return result;
};
