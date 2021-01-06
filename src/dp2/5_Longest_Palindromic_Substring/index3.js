const expandAroundCenter = (s, i, j) => {
  let max = 0;
  let res = 0;
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    max = Math.max(max, j - i + 1);
    if (max >= 3) {
      res = Math.max(res, Math.floor(max - 1) / 2);
    }
    --i;
    ++j;
  }
  return res;
};
// Runtime: 104 ms, faster than 86.51% of JavaScript online submissions for Longest Palindromic Substring.
// Memory Usage: 44.3 MB, less than 54.14% of JavaScript online submissions for Longest Palindromic Substring.
export default (s) => {
  let start = 0;
  let end = -1;
  let t = "#";
  for (let i = 0; i < s.length; ++i) {
    t += s.charAt(i);
    t += "#";
  }
  s = t;
  // console.log(s);
  // #b#a#b#a#d#
  const arm_len = new Map();
  let right = -1;
  let j = -1;
  for (let i = 0; i < s.length; ++i) {
    let cur_arm_len;
    if (right >= i) {
      let i_sym = j * 2 - i;
      let min_arm_len = Math.min(arm_len.get(i_sym), right - i);
      cur_arm_len = expandAroundCenter(s, i - min_arm_len, i + min_arm_len);
    } else {
      cur_arm_len = expandAroundCenter(s, i, i);
    }
    arm_len.set(i, cur_arm_len);
    if (i + cur_arm_len > right) {
      j = i;
      right = i + cur_arm_len;
    }
    if (cur_arm_len * 2 + 1 > end - start) {
      start = i - cur_arm_len;
      end = i + cur_arm_len;
    }
  }
  console.log(arm_len);
  let res = "";
  for (let i = start; i <= end; ++i) {
    if (s.charAt(i) != "#") {
      res += s.charAt(i);
    }
  }
  return res;
};
