/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// Runtime: 4132 ms, faster than 5.02% of JavaScript online submissions for Implement strStr().
// Memory Usage: 40 MB, less than 27.63% of JavaScript online submissions for Implement strStr().
const getNextArr = (needle) => {
  const len = needle.length;
  const next = new Array(len).fill(0);
  next[0] = -1;
  // k指向前缀和的最后一个字符的指针
  let k = -1;
  // bcbcbea
  for (let i = 1; i < len; i++) {
    //我们此时知道了 [0,i-1]的最长前后缀，但是k+1的指向的值和i不相同时，我们则需要回溯
    //因为 next[k]就时用来记录子串的最长公共前后缀的尾坐标（即长度）
    //就要找 k+1前一个元素在next数组里的值,即next[k+1]
    while (k != -1 && needle[k + 1] != needle[i]) {
      k = next[k];
    }
    // 相同情况，就是 k的下一位，和 i 相同时，此时我们已经知道 [0,i-1]的最长前后缀
    //然后 k - 1 又和 i 相同，最长前后缀加1，即可
    if (needle[i] === needle[k + 1]) {
      ++k;
    }
    next[i] = k;
  }
  return next;
};
// Runtime: 80 ms, faster than 70.49% of JavaScript online submissions for Implement strStr().
// Memory Usage: 39.5 MB, less than 38.88% of JavaScript online submissions for Implement strStr().
export default (haystack, needle) => {
  if (!needle) return 0;
  if (haystack.length === 0) {
    return -1;
  }
  let k = -1;
  const haystackLen = haystack.length;
  const needleLen = needle.length;
  const next = getNextArr(needle);
  for (let i = 0; i < haystackLen; i++) {
    while (k > -1 && needle[k + 1] != haystack[i]) {
      k = next[k]; // 有部分匹配，往前回溯
    }
    if (needle[k + 1] === haystack[i]) {
      ++k;
    }
    if (k === needleLen - 1) {
      return i - needleLen + 1; // 说明k移动到needle的最末端，返回相应的位置
    }
  }
  return -1;
};
