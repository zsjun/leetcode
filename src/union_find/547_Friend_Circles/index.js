/**
 * @param {number[][]} M
 * @return {number}
 */
export default (M) => {
  let rowLen = M.length;

  let unionArr = [];

  // 初始化数组
  for (let i = 0; i < rowLen; i++) {
    unionArr.push([i]);
  }
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < M[i].length; j++) {
      if (M[i][j] === 1 && i !== j) {
        let temp = -1;
        for (let k = 0; k < unionArr.length; k++) {
          if (unionArr[k].includes(i) && !unionArr[k].includes(j)) {
            if (temp === -1) {
              temp = k;
            } else {
              unionArr[temp] = [...unionArr[temp], ...unionArr[k]];
              unionArr.splice(k, 1);
            }
          } else if (unionArr[k].includes(j) && !unionArr[k].includes(i)) {
            if (temp === -1) {
              temp = k;
            } else {
              unionArr[temp] = [...unionArr[temp], ...unionArr[k]];
              unionArr.splice(k, 1);
            }
          }
        }
      }
    }
  }
  // console.log(unionArr);
  return unionArr.length;
};
