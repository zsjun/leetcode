/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// 记录两个单词之间，字母不同的个数是否大于1
const connect = (word1, word2) => {
  let count = 0;
  for (let i = 0; i < word2.length; i++) {
    if (word1.charAt(i) !== word2.charAt(i)) {
      count++;
    }
  }
  return count === 1;
};
// 生成图
const generateGraph = (beginWord, endWord, wordList) => {
  if (!wordList.includes(beginWord)) {
    wordList.push(beginWord);
  }
  const map = new Map();
  for (let i = 0; i < wordList.length; i++) {
    map.set(wordList[i], []);
  }
  for (let i = 0; i < wordList.length; i++) {
    for (let j = i + 1; j < wordList.length; j++) {
      if (connect(wordList[i], wordList[j])) {
        // 如果两个单词的相差字符1个，则互相连接
        map.get(wordList[i]).push(wordList[j]);
        map.get(wordList[j]).push(wordList[i]);
      }
    }
  }
  return map;
};
export default (beginWord, endWord, wordList) => {
  let graph = generateGraph(beginWord, endWord, wordList);
  let q = [];
  let visited = new Map();
  q.push({
    word: beginWord,
    step: 1,
  });
  visited.set(beginWord, 1);
  while (q.length > 0) {
    const first = q[0];
    const word = first.word;
    const step = first.step;
    q.shift();
    if (word === endWord) {
      return step;
    }
    if (graph.get(word).length >= 1) {
      const words = graph.get(word);
      for (let i = 0; i < words.length; i++) {
        if (!visited.has(words[i])) {
          q.push({
            word: words[i],
            step: step + 1,
          });
          visited.set(words[i], 1);
        }
      }
    }
  }
  q = null;
  visited = null;
  graph = null;
  return 0;
};
