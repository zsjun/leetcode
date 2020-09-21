/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  // dp[i]表示s[0, i]是否可以被wordDict表示
  let dp = [];
  // dp[]
  dp[0] = "";
  let max = 0;
  let min = Infinity;
  if (wordDict.length === 0) {
    return [];
  }
  if (wordDict.length === 0) {
    return [];
  }
  if (wordDict.length === 1) {
    return wordDict[0] === s ? wordDict : [];
  }
  for (let i = 0; i < wordDict.length; i++) {
    min = Math.min(min, wordDict[i].length);
    max = Math.max(max, wordDict[i].length);
  }
  for (let i = 1; i <= s.length; i++) {
    // dp[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j + min <= i && j + max >= i) {
        let str1 = s.substring(j, i);
        if (wordDict.includes(str1)) {
          if (!dp[j] && i === str1.length) {
            dp[i] = str1;
          } else {
            // for (let k = 0; k < dp[j].length; k++) {
            //   dp[i].push([...dp[j][k], str1]);
            // }
            let arrDp = dp[j] && dp[j].indexOf(",") > -1 ? dp[j].split(",") : dp[j] ? [dp[j]] : [];

            for (let k = 0; k < arrDp.length; k++) {
              if (arrDp[k]) {
                arrDp[k] = arrDp[k] + " " + str1;
              }
            }
            if (dp[i]) {
              if (arrDp.length > 0) {
                dp[i] = dp[i] + "," + arrDp.join(",");
              }
            } else {
              dp[i] = arrDp.join(",");
            }
          }
        }
      }
    }
  }
  if (dp[s.length]) {
    return dp[s.length].split(",").filter((item) => {
      return item.replace(/\s+/g, "").length === s.length;
    });
  } else {
    return [];
  }
};

export default wordBreak;
