/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const wordCanTransform = (word, otherWord) => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) !== otherWord.charAt(i)) {
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
};
const same = (oldArr, newArr) => {
  return oldArr.join("") === newArr.join("");
};
const gfs = (beginWord, endWord, wordList, gfsRes, res) => {
  if (beginWord === endWord) {
    const gfsResLen = gfsRes.length;
    console.log(gfsRes);
    if (res.length === 0) {
      res.push(gfsRes);
    } else {
      res.sort((a, b) => b.length - a.length);
      if(gfsResLen>res[0].length) {
        return
      }else if(gfsResLen===res[0].length && !same(gfsRes,res[0])) {

      }
      let k = res.length - 1;
    }
    return;
  }
  if (gfsRes.length >= wordList.length + 1) {
    return;
  }
  for (let i = 0; i < wordList.length; i++) {
    if (wordCanTransform(beginWord, wordList[i]) && !gfsRes.includes(wordList[i])) {
      gfsRes.push(wordList[i]);
      gfs(wordList[i], endWord, wordList, [...gfsRes], res);
      gfsRes.pop();
    }
  }
};
// 使用广度搜索，beginWord到下一个，然后再到下一个
export default (beginWord, endWord, wordList) => {
  if (!wordList.includes(endWord)) {
    return [];
  }
  const gfsRes = [beginWord];
  const res = [];
  gfs(beginWord, endWord, wordList, gfsRes, res);
  console.log(res);
  return res;
};
