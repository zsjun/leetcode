// Runtime: 76 ms, faster than 84.58% of JavaScript online submissions for Generate Parentheses.
// Memory Usage: 40.7 MB, less than 21.43% of JavaScript online submissions for Generate Parentheses.
// 此种解法很简单，就是把（）分别插入到前面，同时保证插入的中间位置是合法的
export default (n) => {
  if (n < 0) return [];
  const dp = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    dp[i] = [];
  }
  dp[0] = [""];
  for (let i = 1; i <= n; ++i)
    for (let j = 0; j < i; ++j)
      for (let s1 of dp[j])
        for (let s2 of dp[i - 1 - j]) {
          dp[i].push("(" + s1 + ")" + s2);
        }
  return dp[n];
};
