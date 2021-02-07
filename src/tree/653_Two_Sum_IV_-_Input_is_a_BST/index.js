/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
// Runtime: 104 ms, faster than 98.25% of JavaScript online submissions for Two Sum IV - Input is a BST.
// Memory Usage: 48.1 MB, less than 55.64% of JavaScript online submissions for Two Sum IV - Input is a BST.
export default (root, k) => {
  if (!root) return false;

  if (!root) return root;
  let cur = root;
  const stack = [];
  const res = [];
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    const node = stack.pop();
    res.push(node.val);
    cur = node.right;
  }
  let high = res.length - 1;
  let low = 0;
  while (low < high) {
    if (res[low] + res[high] > k) {
      --high;
    } else if (res[low] + res[high] < k) {
      ++low;
    } else if (res[low] + res[high] === k) {
      return true;
    }
  }
  return false;
};
