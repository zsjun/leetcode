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
export default (root) => {
  const res = [];
  const arr = [];
  if (!root) return [];
  arr.push(root);
  while (arr.length > 0) {
    let _tempRes = [];
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      const temp = arr[0];
      _tempRes.push(arr[0].val);
      if (temp && temp.left) {
        arr.push(temp.left);
      }
      if (temp && temp.right) {
        arr.push(temp.right);
      }
      arr.shift();
    }
    res.push(_tempRes);
  }
  return res;
};
