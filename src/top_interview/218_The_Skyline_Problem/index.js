/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
export default (buildings) => {
  let dp = [];
  if (buildings.length <= 0 || !buildings) return [];
  dp[0] = [[buildings[0][0], buildings[0][2]]];
  for (let i = 1; i < buildings.length; i++) {
    if (buildings[i][0] > buildings[i - 1][1]) {
      dp[i] = dp[i - 1];
      dp[i].push([buildings[i - 1][1], 0]);
      dp[i].push([buildings[i][0], buildings[i][2]]);
    } else {
      let flag = true;
      for (let j = i - 1; j >= 0; j--) {
        if (buildings[j][2] === buildings[i][2]) {
          if (buildings[i][0] <= buildings[j][1]) {
            dp[i] = dp[i - 1];
            flag = false;
          }
        }
      }
      if (!flag) {
        continue;
      } else {
        if (buildings[i][2] > buildings[i - 1][2]) {
          dp[i] = dp[i - 1];
          dp[i].push([buildings[i][0], buildings[i][2]]);
        } else {
          dp[i] = dp[i - 1];
          if (buildings[i - 1][1] > buildings[i][0] && buildings[i - 1][0] !== buildings[i][0]) {
            console.log(buildings[i - 1][1], buildings[i][0]);
            dp[i].push([buildings[i - 1][1], buildings[i][2]]);
          } else {
            dp[i].push([buildings[i - 1][0], buildings[i][2]]);
          }
        }
      }
    }
  }
  const len = buildings.length - 1;
  dp[len].push([buildings[len][1], 0]);

  let res = [];
  res.push(dp[len][0]);
  for (let i = 1; i < dp[len].length; i++) {
    if (res[res.length - 1][0] === dp[len][i][0]) {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], dp[len][i][1]);
    } else {
      res.push(dp[len][i]);
    }
  }
  return res;
};
