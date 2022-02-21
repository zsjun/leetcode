// 整个算法过程很简单，就是从头开始找到最大的回文字符串，然后把剩下的反转进行合并
var shortestPalindrome = function (s) {
  // reverse string
  let r = s.split("").reverse().join("");

  let str = s + "*" + r;

  // 最长的字符串
  const n = str.length;
  // 这个思路很有意思，把问题给转换之后，选择其中最小的回文字符串
  const lps = new Array(n).fill(0);
  let i = 0; // prefix
  let j = 1; // suffix

  // s = ab
  // r = ba
  // str = ab*ba
  while (j < n) {
    // 这里其实就是kmp算法中求取next数组的过程
    if (str[i] !== str[j]) {
      if (i === 0) {
        // must start at the beginning
        lps[j] = 0;
        j++;
      } else {
        // prefix goes back
        i = lps[i - 1];
      }
    } else {
      // matched
      lps[j] = i + 1; // matched length is 1 based
      i++;
      j++;
    }
  }
  const insertStr = r.slice(0, s.length - lps[n - 1]);
  return insertStr + s;
};
