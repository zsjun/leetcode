export default (n, v, cArr = [], wArr = []) => {
  // 设置n个物品，res[i][v] 表示把i个物品放到空间为v的背包中
  let res = [];
  for (let i = 0; i <= n; i++) {
    res[i] = [];
  }
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= v; j++) {
      res[i][j] = 0;
    }
  }
  // 把1个物品放到0-v的空间里边，获取动态规划的初始值
  for (let i = 0; i <= v; i++) {
    for (let j = 0; j < wArr.length; j++) {
      if (wArr[j] > res[1][i] && cArr[j] <= i) {
        res[1][i] = wArr[j];
      }
    }
  }
  // i 表示n个物品
  // j表示背包的体积
  //
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= v; j++) {
      if (i >= 1 && j >= cArr[i - 1]) {
        res[i][j] = Math.max(res[i - 1][j], res[i - 1][j - cArr[i - 1]] + wArr[i - 1]);
      }
    }
  }
  return res[n][v];
};
