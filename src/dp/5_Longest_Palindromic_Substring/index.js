/**
 * @param {string} s
 * @return {string}
 */
export default (s) => {
  let len = s.length;
  if (!s) return "";
  if (len <= 1) return s;

  let arr = [];
  let start = 0;
  let end = s.length;
  let max = 0;

  // arr[j] 表示上一次遍历存储的是否是回文，复用这个arr空间，不断进行覆盖
  // 比如abcba
  // i = 5, j = 5 arr[5] = true
  // i = 4, j = 5 arr[5] = false
  // i = 4, j = 4 arr[4] = true
  // i = 3, j = 5 arr[5] = false
  // i = 3, j = 4 arr[4] = false
  // i = 3, j = 3 arr[3] = false
  // i = 2, j = 5 arr[5] = false
  // i = 2, j = 4 arr[4] = true
  // i = 2, j = 3 arr[3] = false
  // i = 2, j = 2 arr[2] = true
  // i = 1, j = 5 arr[5] = true 复用上一次的arr[4]
  for (let i = len - 1; i >= 0; i--) {
    for (let j = len - 1; j >= i; j--) {
      arr[j] = s.charAt(i) === s.charAt(j) && (j - i <= 2 || arr[j - 1]);
      if (arr[j] && j - i + 1 > max) {
        start = i;
        end = j + 1;
        max = j - i + 1;
      }
    }
  }

  return s.substring(start, end);
};
