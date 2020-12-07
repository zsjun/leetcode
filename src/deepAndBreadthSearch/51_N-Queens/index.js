/**
 * @param {number} n
 * @return {string[][]}
 */
const copy = (dfsRes) => {
  const res = [];
  for (let i = 0; i < dfsRes.length; i++) {
    for (let j = 0; j < dfsRes[0].length; j++) {
      res[j] = new Array(dfsRes[0].length).fill(0);
    }
  }
  for (let i = 0; i < dfsRes.length; i++) {
    for (let j = 0; j < dfsRes[0].length; j++) {
      res[i][j] = dfsRes[i][j];
    }
  }
  return res;
};
const dfs = (dfsRes, level, res) => {
  if (level === dfsRes.length) {
    let temp = [];
    dfsRes.forEach((item) => {
      temp.push(item.join(""));
    });
    console.log(temp);
    res.push(temp);
    return;
  }
  for (let i = 0; i < dfsRes.length; i++) {
    if (canSet(dfsRes, level, i)) {
      dfsRes[level][i] = "Q";
      const temp = copy(dfsRes);
      dfs(temp, level + 1, res);
      dfsRes[level][i] = ".";
    }
  }
};

const canSet = (dfsRes, curI, curJ) => {
  for (let i = 0; i < dfsRes.length; i++) {
    for (let j = 0; j < dfsRes[0].length; j++) {
      if (dfsRes[i][j] === "Q") {
        if (i === curI || j === curJ) {
          return false;
        }
        const n = dfsRes.length;
        // 设置i,j对角线不可放置
        let nextI = i;
        let nextJ = j;
        while (nextI >= 1 && nextJ >= 1 && nextI < n + 1 && nextJ < n + 1) {
          nextI = nextI - 1;
          nextJ = nextJ - 1;
          if (nextI === curI && nextJ === curJ) {
            return false;
          }
        }
        let nextI1 = i;
        let nextJ1 = j;
        while (nextI1 >= -1 && nextJ1 >= -1 && nextI1 < n - 1 && nextJ1 < n - 1) {
          nextI1 = nextI1 + 1;
          nextJ1 = nextJ1 + 1;
          if (nextI1 === curI && nextJ1 === curJ) {
            return false;
          }
        }

        let nextI2 = i;
        let nextJ2 = j;
        while (nextI2 >= -1 && nextJ2 >= 1 && nextI2 < n - 1 && nextJ2 < n + 1) {
          nextI2 = nextI2 + 1;
          nextJ2 = nextJ2 - 1;
          if (nextI2 === curI && nextJ2 === curJ) {
            return false;
          }
        }

        let nextI3 = i;
        let nextJ3 = j;
        while (nextI3 >= 1 && nextJ3 >= -1 && nextI3 < n + 1 && nextJ3 < n - 1) {
          nextI3 = nextI3 - 1;
          nextJ3 = nextJ3 + 1;
          if (nextI3 === curI && nextJ3 === curJ) {
            return false;
          }
        }
      }
    }
  }
  return true;
};
const creatRes = (n) => {
  const dfsRes = [];
  for (let j = 0; j < n; j++) {
    dfsRes[j] = new Array(n).fill(".");
  }
  return dfsRes;
};
export default (n) => {
  let res = [];
  const visited = [];
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(n).fill(0);
  }
  for (let i = 0; i < n; i++) {
    const dfsRes = creatRes(n);
    if (canSet(dfsRes, 0, i)) {
      dfsRes[0][i] = "Q";
      dfs(dfsRes, 1, res);
      dfsRes[0][i] = ".";
    }
  }
  return res;
};
