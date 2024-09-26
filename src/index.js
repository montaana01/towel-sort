module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }
    if (!matrix.length) {
        return matrix;
    }
    let array = [];
    for (let i = 0; i < matrix.length; i++) {  // Проходим по каждой строке матрицы
        if (i % 2 === 0) {
            array =  array.concat(matrix[i]);
        } else {
            array = array.concat(matrix[i].reverse());
        }
    }

    return array;
}
