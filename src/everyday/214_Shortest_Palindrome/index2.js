const ispalind = (s, start, end) => {
  if (start > end) {
    return false;
  }
  while (start <= end) {
    if (s.charAt(start) !== s.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
// 整个算法过程很简单，就是从头开始找到最大的回文字符串，然后把剩下的反转进行合并
var shortestPalindrome = function (s) {
  //
  const len = s.length;
  let pre = "";
  for (let j = len - 1; j >= 0; j--) {
    if (ispalind(s, 0, j)) {
      // console.log(j)
      pre = s
        .split("")
        .reverse()
        .join("")
        .slice(0, len - j - 1);
      // console.log(pre)
      return pre + s;
    }
  }
  return s;
};
