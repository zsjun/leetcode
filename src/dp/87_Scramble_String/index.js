/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

function isScramble(s1, s2) {
  if (s1.length != s2.length) return false;
  if (s1 == s2) return true;
  if (s1.length == 0 || s2.length == 0) return true;
  let s1Arr = new Array(26).fill(0);
  let s2Arr = new Array(26).fill(0);

  // 统计s1中出现a-z的个数，统计s2中a-z出现的个数，然后对比，假设如果出现a的次数不相等，则可以直接返回false

  for (let i = 0; i < s1.length; i++) {
    s1Arr[s1.charCodeAt(i) - 97]++;
    s2Arr[s2.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < 26; i++) {
    if (s1Arr[i] !== s2Arr[i]) {
      return false;
    }
  }

  // 递归寻找是否是是相对搅乱的字符串
  const len = s1.length;
  // 前面是否相同，通过异或来判断，比如1^1 = 0
  let sameBegin = 0;
  let sameLast = 0;
  for (let i = 0, j = len - 1; i < len; i++, j--) {
    // 如果前面是可能是搅乱的， 比如[1,2,3] 和 [3,2,1] ， 1^3^2^2^3^1 = 0
    sameBegin ^= s1.charCodeAt(i) ^ s2.charCodeAt(i);
    // 如果后面可能是搅乱的
    sameLast ^= s1.charCodeAt(i) ^ s2.charCodeAt(j);

    if (sameBegin === 0 && i < len - 1) {
      if (
        isScramble(s1.substring(0, i + 1), s2.substring(0, i + 1)) &&
        isScramble(s1.substring(i + 1, len), s2.substring(i + 1, len))
      ) {
        return true;
      }
    }

    if (sameLast == 0 && i < len - 1) {
      if (
        isScramble(s1.substring(0, i + 1), s2.substring(len - i - 1)) &&
        isScramble(s1.substring(i + 1), s2.substring(0, len - i - 1))
      ) {
        return true;
      }
    }
  }
  return false;
}

export default isScramble;
