/**
 * @param {number[][]} triangle
 * @return {number}
 */
export default (triangle) => {
  let dp = [];
  for (let i = 0; i < triangle.length; i++) {
    dp[i] = [];
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] = triangle[i][j];
    }
  }
  for (let i = 0; i < triangle.length - 1; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        triangle[i + 1][j] = triangle[i][j] + triangle[i + 1][j];
        triangle[i + 1][j + 1] = triangle[i][j] + triangle[i + 1][j + 1];
      } else {
        triangle[i + 1][j] = Math.min(triangle[i + 1][j], triangle[i][j] + dp[i + 1][j]);
        triangle[i + 1][j + 1] = triangle[i][j] + triangle[i + 1][j + 1];
      }
    }
  }
  let min = Infinity;
  for (let j = 0; j < triangle[triangle.length - 1].length; j++) {
    min = Math.min(min, triangle[triangle.length - 1][j]);
  }
  return min;
};
