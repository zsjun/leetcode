/**
 * @param {string[]} words
 * @return {number}
 */
// Runtime: 100 ms, faster than 91.23% of JavaScript online submissions for Maximum Product of Word Lengths.
// Memory Usage: 42.2 MB, less than 85.96% of JavaScript online submissions for Maximum Product of Word Lengths.
export default (words) => {
  if (words.length < 1) return 0;
  const len = words.length;
  const value = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < words[i].length; j++) {
      // 也就是使用26个数组表示字符串，如果数组第一位是1，则表示存在a
      value[i] |= 1 << (words[i].charCodeAt(j) - 97);
    }
  }
  let maxProduct = 0;
  for (let i = 0; i < len; i++)
    for (let j = i + 1; j < len; j++) {
      if ((value[i] & value[j]) === 0 && words[i].length * words[j].length > maxProduct)
        maxProduct = words[i].length * words[j].length;
    }
  return maxProduct;
};
