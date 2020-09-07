// 金矿的数量n，工人数设为m，每个金矿的含有的金子数量为g[],采集每个金矿需要的人数为p[]
export default (n, m, g = [], p = []) => {
  let preResults = [];
  let res = [];

  // for(let i = 0; i<=m;i++) {

  // }
  for (let i = 0; i <= m; i++) {
    if (i < p[0]) {
      preResults[i] = 0;
    } else {
      preResults[i] = g[0];
    }
  }

  // 金矿数
  for (let i = 2; i <= n; i++) {
    // 工人数
    for (let j = 0; j <= m; j++) {
      if (j < p[i - 1]) {
        res[j] = preResults[j];
      } else {
        if (j >= p[i - 1] && i >= 1) {
          const _temp = preResults[j - p[i - 1]] || 0;
          res[j] = Math.max(preResults[j], _temp + g[i - 1]);
        }
      }
    }
    if (i < n) {
      preResults = [...res];
    }
  }
  // console.log(res);

  return res[m];
};
