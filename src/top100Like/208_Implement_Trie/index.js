/**
 * Initialize your data structure here.
 */

//  Runtime: 200 ms, faster than 80.20% of JavaScript online submissions for Implement Trie (Prefix Tree).
//  Memory Usage: 58.9 MB, less than 13.20% of JavaScript online submissions for Implement Trie (Prefix Tree).
var Trie = function () {
  this.map = new Map();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */

Trie.prototype.insert = function (word) {
  if (!word) return;
  let tempMap = this.map;
  for (let i = 0; i < word.length; i++) {
    if (tempMap && !tempMap.has(word.charAt(i))) {
      tempMap.set(word.charAt(i), new Map());
    }
    if (tempMap) {
      tempMap = tempMap.get(word.charAt(i));
    }

    if (i === word.length - 1) {
      tempMap.set("isLeafe", true);
    }
  }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let tempMap = this.map;
  for (let i = 0; i < word.length; i++) {
    if (tempMap && tempMap.has(word.charAt(i))) {
      tempMap = tempMap.get(word.charAt(i));
      if (i === word.length - 1 && tempMap.has("isLeafe")) {
        return true;
      }
    } else {
      return false;
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
  let tempMap = this.map;
  for (let i = 0; i < prefix.length; i++) {
    if (tempMap && tempMap.has(prefix.charAt(i))) {
      tempMap = tempMap.get(prefix.charAt(i));
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
