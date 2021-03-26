/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
export default (matrix) => {
  const rowLen = matrix.length;
  if (rowLen === 0) return [];
  if (!Array.isArray(matrix[0]) || matrix[0].length === 0) {
    return [];
  }
  const colLen = matrix[0].length;
  const pacificMatrix = new Array(rowLen);
  const allanticMatrix = new Array(rowLen);

  for (let i = 0; i < rowLen; i++) {
    pacificMatrix[i] = new Array(colLen).fill(-1);
    allanticMatrix[i] = new Array(colLen).fill(-1);
  }

  for (let i = 0; i < colLen; i++) {
    pacificMatrix[0][i] = 0;
    allanticMatrix[rowLen - 1][i] = 0;
  }

  for (let i = 0; i < rowLen; i++) {
    pacificMatrix[i][0] = 0;
    allanticMatrix[i][colLen - 1] = 0;
  }
  for (let i = 0; i < colLen; i++) {
    const nodes = [[0, i]];
    while (nodes.length > 0) {
      const obj = nodes.shift();
      for (let j = 0; j < dirs.length; j++) {
        if (Array.isArray(obj)) {
          const x1 = obj[0] + dirs[j][0];
          const y1 = obj[1] + dirs[j][1];
          if (x1 >= 0 && x1 < rowLen && y1 >= 0 && y1 < colLen) {
            if (matrix[x1][y1] >= matrix[obj[0]][obj[1]] && pacificMatrix[x1][y1] === -1) {
              nodes.push([x1, y1]);
              pacificMatrix[x1][y1] = 0;
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < rowLen; i++) {
    const nodes = [[i, 0]];
    while (nodes.length > 0) {
      const obj = nodes.shift();
      for (let j = 0; j < dirs.length; j++) {
        if (Array.isArray(obj)) {
          const x1 = obj[0] + dirs[j][0];
          const y1 = obj[1] + dirs[j][1];
          if (x1 >= 0 && x1 < rowLen && y1 >= 0 && y1 < colLen) {
            if (matrix[x1][y1] >= matrix[obj[0]][obj[1]] && pacificMatrix[x1][y1] === -1) {
              nodes.push([x1, y1]);
              pacificMatrix[x1][y1] = 0;
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < colLen; i++) {
    const nodes = [[rowLen - 1, i]];
    while (nodes.length > 0) {
      const obj = nodes.shift();
      for (let j = 0; j < dirs.length; j++) {
        if (Array.isArray(obj)) {
          const x1 = obj[0] + dirs[j][0];
          const y1 = obj[1] + dirs[j][1];
          if (x1 >= 0 && x1 < rowLen && y1 >= 0 && y1 < colLen) {
            if (matrix[x1][y1] >= matrix[obj[0]][obj[1]] && allanticMatrix[x1][y1] === -1) {
              nodes.push([x1, y1]);
              allanticMatrix[x1][y1] = 0;
            }
          }
        }
      }
    }
  }
  for (let i = 0; i < rowLen; i++) {
    const nodes = [[i, colLen - 1]];
    while (nodes.length > 0) {
      const obj = nodes.shift();
      for (let j = 0; j < dirs.length; j++) {
        if (Array.isArray(obj)) {
          const x1 = obj[0] + dirs[j][0];
          const y1 = obj[1] + dirs[j][1];
          if (x1 >= 0 && x1 < rowLen && y1 >= 0 && y1 < colLen) {
            if (matrix[x1][y1] >= matrix[obj[0]][obj[1]] && allanticMatrix[x1][y1] === -1) {
              nodes.push([x1, y1]);
              allanticMatrix[x1][y1] = 0;
            }
          }
        }
      }
    }
  }
  const res = [];

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (allanticMatrix[i][j] === 0 && pacificMatrix[i][j] === 0) {
        res.push([i, j]);
      }
    }
  }
  return res;
};
