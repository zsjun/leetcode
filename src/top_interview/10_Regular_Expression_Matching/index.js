/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  const sLen = s.length;
  const pLen = p.length;
  let dp = []
  for(let i<sLen;i++) {
    dp[i] = new Array(pLen).fill(false)
  }
  // dp[0][0] = false;
  // dp[1][0] = false;
  // dp[0][1] = false;

  if(s[0] === p[0] || p[0] === ".") {
    dp[0][0] = true
  }else {
    dp[0][0] = false
  }
  if (dp[0][0] && p[1] === "*") {
    dp[0][1] = true
  }else {
    dp[0][1] = false
  }

  dp[1][0] = false
  // for(let i = )
  for(let i=1;i<sLen;i++) {
    for(let j = 1;j<pLen;j++) {

    }
  }


};

export default isMatch;
