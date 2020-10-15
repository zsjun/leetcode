/**
 * @param {string} s
 * @return {number}
 */
export default (s) => {
  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;

  if (s.charAt(0) == "0") {
    return 0;
  }
  if (s.charAt(0) === "*") {
    dp[1] = 9;
  } else {
    dp[1] = 1;
  }
  for (let i = 2; i <= s.length; i++) {
    // // 最后一个字母
    // const firstLetter = s.charAt(i - 1);
    // // 倒数第二个字母
    // const secondLetter = s.charAt(i - 2);
    if (s.charAt(i - 1) === "*") {
      dp[i] = 9 * dp[i - 1];
    } else if (+s.charAt(i - 1) < 10 && +s.charAt(i - 1) > 0) {
      dp[i] = dp[i - 1];
    }

    if (s.charAt(i - 1) === "*") {
      if (s.charAt(i - 2) === "*") {
        dp[i] += 15 * dp[i - 2];
      } else {
        if (s.charAt(i - 2) === "1") {
          dp[i] += 9 * dp[i - 2];
        } else if (s.charAt(i - 2) === "2") {
          dp[i] += 6 * dp[i - 2];
        }
      }
    } else if (+s.charAt(i - 1) < 7) {
      if (s.charAt(i - 2) === "*") {
        dp[i] += 2 * dp[i - 2];
      } else {
        if (s.charAt(i - 2) === "1") {
          dp[i] += dp[i - 2];
        } else if (s.charAt(i - 2) === "2") {
          dp[i] += dp[i - 2];
        }
      }
    } else if (+s.charAt(i - 1) >= 7) {
      if (s.charAt(i - 2) === "*") {
        dp[i] += dp[i - 2];
      } else {
        if (s.charAt(i - 2) === "1") {
          dp[i] += dp[i - 2];
        }
      }
    }
    dp[i] = dp[i] % 1000000007;
  }
  return dp[s.length];
};
