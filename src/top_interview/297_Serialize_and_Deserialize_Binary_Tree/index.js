/**
 * Definition for a binary tree node.

 */
const TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
};
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
  let res = [];
  function serializeArr(root, arr) {
    if (!root) {
      arr.push("#");
    } else {
      arr.push(root.val);
      serializeArr(root.left, arr);
      serializeArr(root.right, arr);
    }
  }
  serializeArr(root, res);
  return res.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
  function deserializeArr(res) {
    if (res.length < 1) {
      return null;
    }
    const val = res.splice(0, 1);
    if (val[0] === "#") {
      return null;
    }
    const root = new TreeNode(parseInt(val));
    root.left = deserializeArr(res);
    root.right = deserializeArr(res);
    return root;
  }
  if (!data || data.length === 0) {
    return null;
  }
  return deserializeArr(data.split(","));
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
