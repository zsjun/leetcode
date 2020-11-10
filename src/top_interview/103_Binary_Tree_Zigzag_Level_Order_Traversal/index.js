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
  let left2right = false;
  while (arr.length > 0) {
    let _tempRes = [];
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      _tempRes.push(arr[i].val);
    }

    for (let i = 0; i < len; i++) {
      let temp = arr[len - i - 1];
      if (!left2right) {
        if (temp && temp.right) {
          arr.push(temp.right);
        }
        if (temp && temp.left) {
          arr.push(temp.left);
        }
      } else {
        if (temp && temp.left) {
          arr.push(temp.left);
        }
        if (temp && temp.right) {
          arr.push(temp.right);
        }
      }
      arr.splice(len - i - 1, 1);
    }
    left2right = !left2right;
    res.push(_tempRes);
  }
  return res;
};
