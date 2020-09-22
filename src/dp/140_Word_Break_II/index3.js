const helper = function (table, idx, path, res) {
  if (idx < 0) {
    res.push(path);
    return;
  }
  // 得到word
  const words = table[idx];

  for (let i = 0; i < words.length; i++) {
    let newPath = path ? words[i][1] + " " + path : words[i][1];
    helper(table, words[i][0], newPath, res);
  }
};
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = function (s, wordDict) {
  let dp = [];

  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
  }
  // dp[i]表示到i的时候，以i为结束的单词
  // 因为dp[i]是个数组，所以数组的长度表示以i为结束的单词数量
  // dp[i]中每个元素的也是一个长度为2的数组，第一个元素表示单词的起始位置，第二个元素表示单词
  // 经过该循环后，就形成了一个类似链表的数组
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || dp[i - 1].length) {
      wordDict.forEach((word) => {
        if (s.substring(i, i + word.length) === word) {
          dp[i + word.length - 1].push([i - 1, word]);
        }
      });
    }
  }

  if (!dp[s.length - 1].length) return [];

  //back-tracking to get all values

  let res = [],
    path = "";

  helper(dp, s.length - 1, path, res);

  return res;
};
export default wordBreak;
