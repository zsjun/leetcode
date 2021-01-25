/**
 * @param {string} s
 * @return {string}
 */

export default (s) => {
  const len = s.length;
  const dp = [];

  if (s.length <= 1) {
    return s;
  }
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false);
    dp[i][i] = true;
  }
  let begin = 0;
  let end = 1;

  for (let len1 = 2; len1 <= len; len1++) {
    for (let j = 0; j < len + 1 - len1; j++) {
      if (s.charAt(j) === s.charAt(j + len1 - 1)) {
        if (len1 === 2 || (dp[j + 1][j + len1 - 2] && j <= j + len1 - 3)) {
          dp[j][j + len1 - 1] = true;
          if (len1 > end - begin) {
            begin = j;
            end = j + len1;
          }
        }
      }
    }
  }
  return s.substring(begin, end);
};
