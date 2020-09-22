const wordBreak = (s, wordDict) => {
  let dp = [];
  // dp[]
  dp[0] = [];
  let max = 0;
  let min = Infinity;
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
  const wordMap = new Map();
  for (let i = 0; i < wordDict.length; i++) {
    if (!wordMap.has(wordDict[i])) {
      wordMap.set(wordDict[i], true);
    }
  }
  const res = new Map();
  for (let i = 1; i <= s.length; i++) {
    dp[i] = [];
    for (let j = 0; j <= i; j++) {
      if (wordMap.get(s.substring(j, i))) {
        console.log(j, i);
        if (!res.has(s.substring(j, i))) {
          // dp[i].push([s.substring(j, i)]);
          res.set(s.substring(j, i), [s.substring(j, i)]);
        } else {
          let temp = [];
          for (let k = 0; k < res.get(s.substring(0, j + 1)).length; k++) {
            temp.push(res.get(s.substring(0, j + 1))[k] + " " + s.substring(j, i));
          }
          res.set(s.substring(0, i), temp);
        }
      }
    }
    console.log(res);
  }

  // for (let i = 0; i < dp[s.length].length; i++) {
  //   if (dp[s.length][i].join("").length !== s.length) {
  //     dp[s.length][i] = "";
  //   } else {
  //     dp[s.length][i] = dp[s.length][i].join(" ");
  //   }
  // }
  // return dp[s.length].filter((item) => item);
};
export default wordBreak;
