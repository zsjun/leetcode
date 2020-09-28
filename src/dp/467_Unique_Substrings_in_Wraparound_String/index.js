/**
 * @param {string} p
 * @return {number}
 */
export default (p) => {
  const s = "zabcdefghijklmnopqrstuvwxy";
  if (!p) return 0;
  if (p.length === 1 && s.indexOf(p) > -1) {
    return 1;
  }
  const maxDivide = Math.ceil(p.length / 26);
  let allS = "";
  // const allsMap = new Map();
  for (let i = 0; i <= maxDivide; i++) {
    allS += s;
  }
  // console.log(allS.length);
  // for (let j = 0; j < allS.length; j++) {
  //   for (let k = j + 1; k <= allS.length; k++) {
  //     allsMap.set(allS.substring(j, k), true);
  //   }
  // }
  let dp = [];
  dp[0] = 0;
  dp[1] = s.indexOf(p.substring(0, 1)) > -1 ? 1 : 0;
  const hashMap = new Map();
  hashMap.set(p.substring(0, 1), true);

  for (let j = 1; j < p.length; j++) {
    dp[j + 1] = dp[j];
    // const oldS = p.substring(0, j);
    for (let i = 0; i <= j; i++) {
      let s1 = p.substring(i, j + 1);
      // let s2 = p.substring(i, j);
      if (!hashMap.has(s1)) {
        // dp[j + 1] = dp[j + 1] + 1;
        // hashMap.set(s1, true);
        if (allS.includes(s1)) {
          dp[j + 1] = dp[j + 1] + 1;
          hashMap.set(s1, true);
        }
        // for (let k = 0; k < allS.length; k++) {
        //   if (allS.substring(k, k + s1.length) === s1) {
        //     dp[j + 1] = dp[j + 1] + 1;
        //     hashMap.set(s1, true);
        //     break;
        //   }
        // }
      } else {
        break;
      }
    }
  }
  console.log(dp);
  return dp[p.length];
};
