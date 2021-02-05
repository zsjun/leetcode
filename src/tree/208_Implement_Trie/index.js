var TrirNode = function (ch) {
  this.ch = ch || -1;
  this.children = new Map();
  this.isEnd = false;
};

/**
 * Initialize your data structure here.
 */

// Runtime: 320 ms, faster than 13.70% of JavaScript online submissions for Implement Trie (Prefix Tree).
// Memory Usage: 69.2 MB, less than 5.20% of JavaScript online submissions for Implement Trie (Prefix Tree).
var Trie = function () {
  this.root = new TrirNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let currentRoot = this.root;
  for (let ch of word) {
    let node = currentRoot.children.get(ch);

    if (!node) {
      node = new TrirNode(ch);
      currentRoot.children.set(ch, node);
    }
    currentRoot = node;
  }
  currentRoot.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let currentRoot = this.root;
  for (let ch of word) {
    if (currentRoot.children.get(ch)) {
      currentRoot = currentRoot.children.get(ch);
    } else {
      return false;
    }
  }
  return currentRoot.isEnd === true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let currentRoot = this.root;
  for (let ch of prefix) {
    if (currentRoot.children.get(ch)) {
      currentRoot = currentRoot.children.get(ch);
    } else {
      return false;
    }
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
