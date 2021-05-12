/**
 * @param {string} s
 * @return {number}
 */
// Runtime: 84 ms, faster than 84.95% of JavaScript online submissions for Longest Valid Parentheses.
// Memory Usage: 40.6 MB, less than 43.60% of JavaScript online submissions for Longest Valid Parentheses.
export default (s) => {
  if (!s) return 0;
  let n = s.length;
  let longest = 0;
  const st = [];
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      st.push(i);
    } else {
      if (st.length > 0) {
        const top = st.length - 1;
        //console.log(s[top],top)
        if (s[st[top]] === "(") {
          st.pop();
        } else {
          st.push(i);
        }
      } else st.push(i);
    }
  }
  // console.log(st)
  if (st.length === 0) {
    longest = n;
  } else {
    let a = n,
      b = 0;
    while (st.length > 0) {
      b = st.pop();
      longest = Math.max(longest, a - b - 1);
      a = b;
    }
    longest = Math.max(longest, a);
  }
  return longest;
};
