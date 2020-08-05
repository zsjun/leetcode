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
var Trie = function () {
  this.root = new Node("", false);
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
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
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let pre = this.root;
  let i = 0;
  while (i < word.length) {
    if (!pre.child[word[i].charCodeAt() - "a".charCodeAt()]) {
      return false;
    } else {
      if (i === word.length - 1 && pre.child[word[i].charCodeAt() - "a".charCodeAt()].isEnd) {
        return true;
      }
      pre = pre.child[word[i].charCodeAt() - "a".charCodeAt()];
      i++;
    }
  }
  return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
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

export default Trie;
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
