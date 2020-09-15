/**
 * @param {string} s
 * @return {number}
 */
const map = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  J: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};
export default (s) => {
  let dp = [];
  if (s === "0") return 0;
  dp[0] = 0;
  if (s.charAt(0) === "0") {
    dp[1] = 0;
  } else {
    dp[1] = 1;
  }
  if (s.length >= 2) {
    let _s = s.substring(0, 2);
    if (_s === "10" || _s === "20") {
      dp[2] = 1;
      dp[1] = 0;
    } else if (+_s >= 1 && +_s <= 26 && s.charAt(0) !== "0") {
      dp[2] = 2;
    } else if (+_s > 26 && s.charAt(1) !== "0") {
      dp[2] = 1;
    } else if (+_s > 26 && s.charAt(1) === "0") {
      return 0;
    } else {
      dp[2] = 0;
    }
  }
  for (let i = 2; i < s.length; i++) {
    if (s.charAt(i) === "0") {
      if (s.charAt(i - 1) !== "0" && +s.substring(i - 1, i + 1) < 27) {
        dp[i + 1] = dp[i - 1];
      } else {
        return 0;
      }
    } else {
      console.log(+s.substring(i - 1, i + 1));
      if (+s.substring(i - 1, i + 1) > 26 || s.charAt(i - 1) === "0") {
        dp[i + 1] = dp[i];
      } else {
        dp[i + 1] = dp[i - 1] + dp[i];
      }
    }
  }
  console.log(dp);
  return dp[s.length];
};
