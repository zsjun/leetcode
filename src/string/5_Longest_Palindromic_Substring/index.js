/**
 * @param {string} s
 * @return {string}
 */

const addBoundaries = (s, divide) => {
  const len = s.length;
  if (len === 0) {
    return "";
  }
  if (s.indexOf(divide) != -1) {
    throw new Error("参数错误，您传递的分割字符，在输入字符串中存在！");
  }
  let res = "";
  for (let i = 0; i < len; i++) {
    res += divide;
    res += s.charAt(i);
  }
  res += divide;
  return res;
};
// Runtime: 96 ms, faster than 95.96% of JavaScript online submissions for Longest Palindromic Substring.
// Memory Usage: 44 MB, less than 51.95% of JavaScript online submissions for Longest Palindromic Substring.
export default (s) => {
  const len = s.length;
  const dp = [];

  if (s.length < 2) {
    return s;
  }
  const str = addBoundaries(s, "#");
  const sLen = str.length;
  // console.log(112, str);
  // 记录访问过的str中的每个字符可以向左和向右的步数
  const p = new Array(sLen).fill(0);
  // 访问过的可以到达的最右边
  let maxRight = 0;
  // 对应的maxRight的中心点
  let center = 0;

  // 当前i位置可以向左和向右移动的最大步数
  let maxLen = 1;

  // 原始字符串的起始点
  let start = 0;

  for (let i = 0; i < sLen; i++) {
    if (i < maxRight) {
      const mirror = 2 * center - i;
      // 更当前可以到达的左右步数
      p[i] = Math.min(maxRight - i, p[mirror]);
    }

    // 下一次尝试扩散的左右起点，能扩散的步数直接加到 p[i] 中
    let left = i - (1 + p[i]);
    let right = i + (1 + p[i]);
    // left >= 0 && right < sLen 保证不越界
    // str.charAt(left) == str.charAt(right) 表示可以扩散 1 次
    while (left >= 0 && right < sLen && str.charAt(left) === str.charAt(right)) {
      p[i]++;
      left--;
      right++;
    }
    // 根据 maxRight 的定义，它是遍历过的 i 的 i + p[i] 的最大者
    // 如果 maxRight 的值越大，进入上面 i < maxRight 的判断的可能性就越大，这样就可以重复利用之前判断过的回文信息了
    if (i + p[i] > maxRight) {
      // maxRight 和 center 需要同时更新
      maxRight = i + p[i];
      center = i;
    }
    if (p[i] > maxLen) {
      // 记录最长回文子串的长度和相应它在原始字符串中的起点
      maxLen = p[i];
      start = Math.floor((i - maxLen) / 2);
    }
  }
  return s.substring(start, start + maxLen);
};
