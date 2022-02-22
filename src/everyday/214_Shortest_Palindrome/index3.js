// 整个算法过程很简单，就是从头开始找到最大的回文字符串，然后把剩下的反转进行合并
var shortestPalindrome = function (s) {
  //
  const reverStr = s.split("").reverse().join("");
  const allStr = s + "*" + reverStr;
  const len = allStr.length;
  const next = new Array(len).fill(0);
  // 采用kmp算法进行设计
  let sIndex = 0;
  let pIndex = 1;
  while (pIndex < len) {
    if (allStr.charAt(sIndex) === allStr.charAt(pIndex)) {
      next[pIndex] = sIndex + 1;
      sIndex++;
      pIndex++;
    } else {
      if (sIndex === 0) {
        pIndex++;
      } else {
        sIndex = next[sIndex - 1];
      }
    }
  }
  console.log(next);
  const pre = reverStr.slice(0, s.length - next[len - 1]);
  return pre + s;
};
