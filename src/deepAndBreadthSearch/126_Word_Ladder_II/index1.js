// Runtime: 132 ms, faster than 98.14% of JavaScript online submissions for Word Ladder II.
// Memory Usage: 42.8 MB, less than 100.00% of JavaScript online submissions for Word Ladder II.
const wordCanTransformOtherWord = (word, otherWord) => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) !== otherWord.charAt(i)) {
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  return count === 1;
};
var findLadders = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) {
    return [];
  }
  wordSet.delete(beginWord);
  wordSet.delete(endWord);
  // 从beiginWord开始广度搜索
  let beginSet = new Set([beginWord]);
  // 从endWord开始广度搜索
  let endSet = new Set([endWord]);
  // 从该word开始的路径
  const fromWordPath = {};
  // 结果
  const res = [];
  // 如果从beginWord开始广度遍历和从结束广度遍历都没结束
  while (beginSet.size > 0 && endSet.size > 0) {
    // 轮流进行遍历，从开头遍历之后，接着从结尾开始遍历
    if (beginSet.size > endSet.size) {
      const temp = beginSet;
      beginSet = endSet;
      endSet = temp;
    }

    const newSet = new Set();
    // hit
    for (let w of beginSet) {
      for (let i = 0; i < wordList.length; i++) {
        if (wordCanTransformOtherWord(w, wordList[i])) {
          const newWord = wordList[i];
          // 找到了从前遍历和从后遍历的交点
          if (endSet.has(newWord)) {
            // console.log(fromWordPath, w, newWord);
            buildPath(w, [w, newWord], newWord);
          }
          if (wordSet.has(newWord)) {
            newSet.add(newWord);
            fromWordPath[newWord] = fromWordPath[newWord] || [];
            // fromWordPath[newWord] = [];
            fromWordPath[newWord].push(w);
          }
        }
      }
    }
    if (res.length > 0) {
      return res;
    }
    // 删除已经被选择过的单词
    newSet.forEach((w) => wordSet.delete(w));
    beginSet = newSet;
  }
  return [];

  function buildPath(s, path, d) {
    console.log(fromWordPath);
    if (!fromWordPath[s] && !fromWordPath[d]) {
      return res.push(path[0] === beginWord ? path.slice() : path.slice().reverse());
    }

    if (fromWordPath[s]) {
      fromWordPath[s].forEach((w) => buildPath(w, [w, ...path], d));
    } else {
      fromWordPath[d].forEach((w) => buildPath(s, [...path, w], w));
    }
  }
};
export default findLadders;
