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
 * @return {number[][]}
 */
const travel = (res, tempRes) => {
  const tempArr = [];
  const nextTempRes = [];
  for (let i = 0; i < tempRes.length; i++) {
    tempArr.push(tempRes[i].val);
    if (tempRes[i] && tempRes[i].left) {
      nextTempRes.push(tempRes[i].left);
    }
    if (tempRes[i] && tempRes[i].right) {
      nextTempRes.push(tempRes[i].right);
    }
  }
  res.push(tempArr);
  if (nextTempRes.length > 0) {
    travel(res, nextTempRes);
  }
};
// Runtime: 72 ms, faster than 99.32% of JavaScript online submissions for Binary Tree Level Order Traversal.
// Memory Usage: 40.6 MB, less than 9.84% of JavaScript online submissions for Binary Tree Level Order Traversal.
export default (root) => {
  if (!root) return [];
  const res = [];
  travel(res, [root]);
  return res;
};
