class Node {
  constructor(letter, isEnd) {
    this.letter = letter;
    this.child = [];
    // 记录是否结束
    this.isEnd = isEnd;
  }
}

/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.root = new Node("", false);
};

/**
 * Inserts a word into the WordDictionary.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let pre = this.root;
  let i = 0;
  while (i < word.length) {
    if (!pre.child[word[i].charCodeAt() - "a".charCodeAt()]) {
      let node = new Node(word[i], false);
      if (i === word.length - 1) {
        node = new Node(word[i], true);
      }
      pre.child[word[i].charCodeAt() - "a".charCodeAt()] = node;
    } else if (i === word.length - 1) {
      pre.child[word[i].charCodeAt() - "a".charCodeAt()].isEnd = true;
    }
    pre = pre.child[word[i].charCodeAt() - "a".charCodeAt()];
    i++;
  }
};

/**
 * Returns if the word is in the WordDictionary.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function searchWord(word, root) {
    let pre = root;
    let i = 0;
    while (i < word.length) {
      if (word[i] !== ".") {
        if (!pre.child[word[i].charCodeAt() - "a".charCodeAt()]) {
          return false;
        } else {
          if (i === word.length - 1 && pre.child[word[i].charCodeAt() - "a".charCodeAt()].isEnd) {
            return true;
          } else if (i === word.length - 1) {
            return false;
          }
          pre = pre.child[word[i].charCodeAt() - "a".charCodeAt()];
          i++;
        }
      } else {
        if (i === word.length - 1) {
          for (let j = 0; j < 26; j++) {
            if (pre.child[j] && pre.child[j].isEnd) {
              return true;
            }
          }
          return false;
        } else {
          let flag = false;
          i++;
          for (let j = 0; j < pre.child.length; j++) {
            if (pre.child[j]) {
              let temp = pre.child[j];
              flag = flag || searchWord(word.substring(i, word.length), temp);
            }
          }
          return flag;
        }
      }
    }
  }

  return searchWord(word, this.root);
};

/**
 * Returns if there is any word in the WordDictionary that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
WordDictionary.prototype.startsWith = function (prefix) {
  let pre = this.root;
  let i = 0;
  while (i < prefix.length) {
    if (!pre.child[prefix[i].charCodeAt() - "a".charCodeAt()]) {
      return false;
    } else {
      if (i === prefix.length - 1) {
        return true;
      }
      pre = pre.child[prefix[i].charCodeAt() - "a".charCodeAt()];
      i++;
    }
  }
  return false;
};

export default WordDictionary;
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
