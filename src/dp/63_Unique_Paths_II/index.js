/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
export default (obstacleGrid) => {
  let dp = [];
  for (let i = 0; i < obstacleGrid.length; i++) {
    dp[i] = [];
  }
  if (obstacleGrid[0][0] !== 1) {
    dp[0][0] = 1;
  } else {
    return 0;
  }

  if (obstacleGrid.length === 1) {
    for (let i = 0; i < obstacleGrid[0].length; i++) {
      if (obstacleGrid[0][i] === 1) {
        return 0;
      }
    }
    return 1;
  }
  if (obstacleGrid[0].length === 1) {
    for (let i = 0; i < obstacleGrid.length; i++) {
      if (obstacleGrid[i][0] === 1) {
        return 0;
      }
    }
    return 1;
  }
  if (obstacleGrid[0][1] === 0) {
    dp[0][1] = 1;
  } else {
    dp[0][1] = 0;
  }

  if (obstacleGrid[1][0] === 0) {
    dp[1][0] = 1;
  } else {
    dp[1][0] = 0;
  }

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[i].length; j++) {
      if (i >= 1 && j >= 1) {
        if (obstacleGrid[i][j] !== 1) {
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        } else {
          dp[i][j] = 0;
        }
      } else if (i > 1 && j < 1) {
        if (obstacleGrid[i][j] !== 1) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = 0;
        }
      } else if (j > 1 && i < 1) {
        if (obstacleGrid[i][j] !== 1) {
          dp[i][j] = dp[i][j - 1];
        } else {
          dp[i][j] = 0;
        }
      }
    }
  }
  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1
    ? 0
    : dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};
