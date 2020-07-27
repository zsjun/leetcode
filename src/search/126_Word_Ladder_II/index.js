const enumerateAllKeys = (word, func, node) => {
  for (let j = 0; j < word.length; j++) {
    let key = word.substr(0, j) + "*" + word.substr(j + 1, word.length);
    func(key, word, node);
  }
};

export default (beginWord, endWord, wordList) => {
  if (!beginWord || !endWord || !wordList || !wordList.length) return [];

  const graph = {};
  const allKeys = {};
  //
  const buildKeyToWordsList = (key, word) => {
    let list = allKeys[key];
    if (!list) {
      list = [];
      allKeys[key] = list;
    }
    list.push(word);
  };

  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i] === beginWord) continue;
    graph[wordList[i]] = { next: [], word: wordList[i], distance: Infinity };

    enumerateAllKeys(wordList[i], buildKeyToWordsList);
  }

  if (!graph[endWord]) return [];

  const buildNextList = (key, word, node) => {
    for (let end of allKeys[key]) {
      node.next.push(graph[end]);
    }
  };

  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i] === beginWord) continue;
    enumerateAllKeys(wordList[i], buildNextList, graph[wordList[i]]);
  }

  graph[beginWord] = { next: [], word: beginWord, distance: 1 };
  enumerateAllKeys(beginWord, (key) => {
    if (allKeys[key]) {
      for (let end of allKeys[key]) {
        graph[beginWord].next.push(graph[end]);
      }
    }
  });

  const queue = [[beginWord]];
  const allPaths = [];
  const end = graph[endWord];

  while (queue.length > 0) {
    const path = queue.shift();
    const node = graph[path[path.length - 1]];

    if (node.word === endWord) {
      if (path.length <= end.distance) {
        end.distance = Math.min(path.length, end.distance);
        allPaths.push(path);
      }
    } else if (path.length < end.distance) {
      for (let next of node.next) {
        if (node.distance + 1 <= next.distance) {
          next.distance = Math.min(node.distance + 1, next.distance);
          queue.push([...path, next.word]);
        }
      }
    }
  }

  return allPaths.filter((item) => item.length === end.distance);
};
