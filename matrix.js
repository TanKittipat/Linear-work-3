function createMatrix(rows, columns) {
  matrix = new Array(rows);
  for (i = 0; i < rows; i++) {
    matrix[i] = new Array(columns).fill(0);
  }
  return matrix;
}

function multiplyMatrices(matrixA, matrixB) {
  let rowsA = matrixA.length,
    columnsA = matrixA[0].length,
    rowsB = matrixB.length,
    columnsB = matrixB[0].length;
  let resultMatrix = createMatrix(rowsA, columnsB);

  //   if (columnsA !== rowsB) {
  //     return null; // ไม่สามารถคูณได้
  //   }

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < columnsB; j++) {
      for (let k = 0; k < columnsA; k++) {
        resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  return resultMatrix;
}

let matrixA = [
  [9, 9, 9],
  [8, 8, 8],
];
let matrixB = [
  [7, 7],
  [6, 6],
  [5, 5],
  [4, 4],
];
console.log(matrixA);
console.log(matrixB);
console.log(multiplyMatrices(matrixA, matrixB));
