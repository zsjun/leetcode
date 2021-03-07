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
 * @return {number[]}
 */
const getAverage = (res, arrRoot = []) => {
  let sum = 0;
  let _arrRoot = [];
  if (arrRoot.length === 0) {
    return;
  }
  for (let i = 0; i < arrRoot.length; i++) {
    sum += arrRoot[i].val;
    if (arrRoot[i].left) {
      _arrRoot.push(arrRoot[i].left);
    }
    if (arrRoot[i].right) {
      _arrRoot.push(arrRoot[i].right);
    }
  }
  res.push(sum / arrRoot.length);
  getAverage(res, _arrRoot);
};
export default (root) => {
  const res = [];
  getAverage(res, [root]);
  return res;
};
