/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
const f = (str) => {
  // console.log(11,str)
  str = str.split("").sort().join("");
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      break;
    }
  }
  return count;
};

// Runtime: 568 ms, faster than 5.41% of JavaScript online submissions for Compare Strings by Frequency of the Smallest Character.
// Memory Usage: 46 MB, less than 32.43% of JavaScript online submissions for Compare Strings by Frequency of the Smallest Character.
export default (queries, words) => {
  const res = [];
  const map = new Map();
  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    for (let j = 0; j < words.length; j++) {
      let queryCount = map.get(queries[i]);
      if (!queryCount) {
        queryCount = f(queries[i]);
        map.set(queries[i], queryCount);
      }
      let wordCount = map.get(words[j]);
      if (!wordCount) {
        wordCount = f(words[j]);
        map.set(words[j], wordCount);
      }
      if (queryCount < wordCount) {
        count++;
      }
    }
    res.push(count);
  }
  return res;
};
